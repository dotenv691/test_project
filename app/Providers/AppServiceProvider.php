<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Resources\Json\JsonResource;
use Tecdiary\Laravel\Attachments\AttachmentsServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        app()->useLangPath(base_path('lang'));
        JsonResource::withoutWrapping();
    }

    public function register()
    {
        $this->app->extend(
            \Illuminate\Translation\Translator::class,
            fn ($translator) => new \App\Helpers\Translator($translator->getLoader(), $translator->getLocale())
        );

        AttachmentsServiceProvider::ignoreMigrations();
        $this->app->extend(\Illuminate\Pagination\LengthAwarePaginator::class, fn ($paginator) => $paginator->onEachSide(2));
    }
}
