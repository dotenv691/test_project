<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Rap2hpoutre\FastExcel\FastExcel;
use App\Models\{Category, Item, Unit};
use Illuminate\Support\Facades\Storage;

class ItemPortController extends Controller
{
    public function export()
    {
        return (new FastExcel($this->itemGenerator()))->download('items.xlsx');
    }

    public function import()
    {
        return Inertia::render('Item/Import');
    }

    public function save(Request $request)
    {
        $request->validate(['excel' => 'required|file|mimes:xls,xlsx']);

        $path = $request->file('excel')->store('imports');
        $symbologies = ['code128', 'code39', 'ean-5', 'ean-8', 'ean-12', 'upc-a'];
        try {
            $items = (new FastExcel())->import(Storage::path($path), function ($line) use ($symbologies) {
                if (!$line['name'] || !$line['code'] || !$line['categories']) {
                    throw new \Exception(__('name, code & categories are required.'));
                }
                $item = Item::updateOrCreate(['code' => $line['code']], [
                    'name'           => $line['name'],
                    'sku'            => $line['sku'] ?: null,
                    'symbology'      => in_array($line['symbology'], $symbologies) ? mb_strtolower($line['symbology']) : 'code128',
                    'unit_id'        => $line['unit'] ? Unit::where('code', $line['unit'])->sole()->id : null,
                    'details'        => $line['details'],
                    'has_serials'    => 'yes' == $line['has_serials'],
                    'track_weight'   => 'yes' == $line['track_weight'],
                    'track_quantity' => 'yes' == $line['track_quantity'],
                    'alert_quantity' => (float) $line['alert_quantity'] ?: null,
                    'has_variants'   => 'yes' == $line['has_variants'],
                    'variants'       => 'yes' == $line['has_variants'] && $line['variants'] ? $this->variantsToArray($line['variants']) : '',
                    'rack_location'  => $line['rack_location'],
                    'photo'          => ($line['photo'] ?? null) ? 'items/' . $line['photo'] : null,
                ]);
                $item->categories()->sync(Category::whereIn('code', array_map('trim', explode(',', $line['categories'])))->get()->pluck('id'));
                if ('yes' == $line['has_variants'] && $line['variants']) {
                    $item->addVariations($this->variantsToArray($line['variants']));
                }
                if ($item->wasRecentlyCreated) {
                    $item->setStock();
                }
                return $item;
            });
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }

        return redirect()->route('items.index')->with('message', __choice('imported_text', ['records' => 'Item', 'count' => $items->count()]));
    }

    private function itemGenerator()
    {
        foreach (Item::cursor() as $item) {
            yield [
                'name'           => $item->name,
                'code'           => $item->code,
                'sku'            => $item->sku,
                'symbology'      => $item->symbology,
                'unit'           => $item->unit_id ? $item->unit->code : '',
                'categories'     => $item->categories->pluck('code')->implode(','),
                'details'        => $item->details,
                'has_serials'    => 1 == $item->has_serials ? 'yes' : '',
                'track_weight'   => 1 == $item->track_weight ? 'yes' : '',
                'track_quantity' => 1 == $item->track_quantity ? 'yes' : '',
                'alert_quantity' => $item->alert_quantity,
                'has_variants'   => 1 == $item->has_variants ? 'yes' : '',
                'variants'       => $item->variants ? $this->variantsToText($item->variants) : '',
                'rack_location'  => $item->rack_location,
                'photo'          => str($item->photo ?: '')->replace('items/', '')
            ];
        }
    }

    private function variantsToArray($variants)
    {
        return collect(explode('|', $variants))->transform(function ($v) {
            $variant = explode('=', $v);
            return ['name' => $variant[0], 'option' => array_map('trim', explode(',', $variant[1]))];
        })->all();
    }

    private function variantsToText($variants)
    {
        return collect($variants)->transform(function ($v) {
            return $v['name'] . '=' . implode(',', $v['option']);
        })->implode('|');
    }
}
