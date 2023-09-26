import{S as L,_ as P}from"./SelectVariantModal-c72aaa39.js";import{t as W}from"./throttle-0066c8c9.js";import{D as R}from"./Dialog-81031492.js";import{C as E}from"./CheckBox-b437c819.js";import{T as B}from"./TextInput-42ab1c57.js";import{S as N}from"./SelectInput-f0f8ca8e.js";import{A as H}from"./AdminLayout-6a4f7366.js";import{A as Q}from"./AutoComplete-b978c1ce.js";import{L as O}from"./LoadingButton-5082ea01.js";import{T as J}from"./TextareaInput-080cbfd2.js";import{T as Y}from"./FormSection-e4b782a6.js";import{T as G}from"./TrashedMessage-0596e83d.js";import{T as K}from"./ActionMessage-ab1277a4.js";import{T as X}from"./SecondaryButton-98bb4bb4.js";import{_ as Z,r as h,o,d as x,e as f,g as m,c as r,h as b,t as i,F as g,b as p,a as s,n as v,i as k}from"./app-c16e0624.js";import"./_baseIsEqual-4a41c1e0.js";import"./Modal-5cbabd3e.js";import"./DialogModal-332d0e9d.js";import"./DangerButton-390eea9c.js";import"./Checkbox-f8ba773c.js";import"./InputError-746f9bc4.js";import"./v4-a960c1f4.js";import"./Label-45ee75d5.js";import"./Input-9dff1bbf.js";import"./DropdownLink-314f7761.js";import"./ApplicationLogo-fff1da4e.js";import"./ApplicationMark-1d436696.js";import"./SectionTitle-c234a4ef.js";const ee={props:["edit","contacts","warehouses"],components:{Dialog:R,CheckBox:E,TextInput:B,SelectInput:N,AdminLayout:H,AutoComplete:Q,LoadingButton:O,TextareaInput:J,TecFormSection:Y,TrashedMessage:G,TecActionMessage:K,SelectVariantModal:L,TecSecondaryButton:X},data(){var e;return{files:[],item:null,confirm:!1,selected:!1,permanent:!1,restoreConf:!1,select_variant:!1,unknown_variation:null,wIW:window.innerWidth,form:this.$inertia.form({_method:this.edit?"PUT":"POST",items:[],attachments:null,type:this.edit?this.edit.type:"Damage",details:this.edit?this.edit.details:null,draft:this.edit?this.edit.draft==1:!1,reference:this.edit?this.edit.reference:null,to_warehouse_id:this.edit?this.edit.to_warehouse_id:null,date:this.edit?this.edit.date:this.$formatJSDate(new Date),from_warehouse_id:this.edit?this.edit.from_warehouse_id:this.$super?null:(e=this.$user)==null?void 0:e.warehouse_id})}},computed:{smallScreen(){return this.wIW<1024}},watch:{select_variant:function(e){this.unknown_variation=null,document.body.style.overflow=e?"hidden":"auto"}},created(){this.edit&&(this.form.items=this.edit.items.map(e=>({...e.item,id:e.id,details:"",item_id:e.item_id,unit_id:e.unit_id,weight:parseFloat(e.weight),quantity:parseFloat(e.quantity),old_quantity:parseFloat(e.quantity),selected:{serials:[],variations:e.variations.map(n=>({...n,weight:parseFloat(n.pivot.weight),unit_id:n.pivot.unit_id||e.unit_id,quantity:parseFloat(n.pivot.quantity),old_quantity:parseFloat(n.pivot.quantity)}))}})))},mounted(){!this.edit&&!this.$super&&(this.form.warehouse_id=this.$user.warehouse_id),window.addEventListener("resize",this.onResize)},unmounted(){window.removeEventListener("resize",this.onResize)},methods:{onResize:W(function(){this.wIW=window.innerWidth},250),removeItem(e,l,n){n?(e.selected.variations.splice(n,1),e.selected.variations.length<1&&(e.selected.variations=[],this.form.items.splice(l,1))):this.form.items.splice(l,1)},variantSelected(e){let l=null;if(typeof e=="object"&&e!==null?l=this.item.variations.find(n=>P(n.meta,e)):l=this.item.variations.find(n=>n.sku==e),l){this.item.selected||(this.item.selected={variations:[],serials:[]}),l.quantity=1,l.unit_id=this.item.unit_id,l.weight=this.$settings.track_weight==1&&this.item.track_weight==1?1:0;let n=this.form.items.find(V=>V.item_id==this.item.id);if(n){n.quantity+=1,n.weight+=this.$settings.track_weight==1&&n.track_weight==1?1:0;let V=n.selected.variations.length?n.selected.variations.find(u=>u.id==l.id):null;V?(V.quantity+=1,V.weight+=this.$settings.track_weight==1&&n.track_weight==1?1:0):n.selected.variations.push(l)}else this.item.selected.variations=[{...l}],this.form.items.push({...this.item,quantity:1,unit_id:this.item.unit_id,weight:this.$settings.track_weight==1&&this.item.track_weight==1?1:0});this.item=null,this.select_variant=!1}else this.unknown_variation=this.$t("No match found for the item variation."),this.$page.props.flash.error=this.unknown_variation},itemSelected(e){if(e.item_id=e.id,e.selected=e.selected||{variations:[],serials:[]},e.has_variants&&e.variants.length>0)this.item={...e,variants:e.variants.map(l=>({...l,selected:null}))},this.select_variant=!0;else{let l=this.form.items.find(n=>n.id==e.id);l?(l.quantity+=1,l.weight+=this.$settings.track_weight==1&&l.track_weight==1?1:0):this.form.items.push({...e,quantity:1,unit_id:e.unit_id,weight:e.track_weight==1?1:0})}},updateFile(e){Array.from(e.target.files).forEach(l=>this.files.push(l.name))},submit(){this.$refs.file&&(this.form.attachments=this.$refs.file.files),this.form.transform(e=>({...e,items:e.items.map(l=>({...l,unit:null,variants:null,variations:null,unit_id:l.unit_id||null,selected:{serials:l.selected.serials&&l.selected.serials.length?l.selected.serials.map(n=>n.id):[],variations:l.selected.variations.map(n=>{let V={};return V[n.id]={weight:n.weight,variation_id:n.id,quantity:n.quantity,unit_id:n.unit_id||null,old_quantity:n.old_quantity}})}}))})).post(this.edit?route("transfers.update",this.edit.id):route("transfers.store"),{preserveScroll:!0,preserveState:!1})},destroy(){this.confirm=!0},deleteItem(){this.form.delete(route("transfers.destroy",this.edit.id),{onSuccess:()=>this.closeModal()})},closeModal(){this.confirm=!1},restore(){this.restoreConf=!0},restoreItem(){this.$inertia.put(this.route("transfers.restore",this.edit.id),{onSuccess:()=>this.restoreConf=!1})},closeRestoreModal(){this.restoreConf=!1},deletePermanently(){this.permanent=!0},deleteCategoryPermanently(){this.form.delete(route("transfers.destroy.permanently",this.edit.id),{onSuccess:()=>this.closeModal()})},closePermanentModal(){this.permanent=!1},deleteAttachment(e){this.$inertia.form({_method:"DELETE"}).delete(route("media.delete",e))}}},te={key:0,class:"flex items-center"},se=s("span",{class:"text-blue-600 font-medium mx-2"},"/",-1),oe={class:"flex flex-col gap-6"},re={class:"flex flex-col lg:flex-row gap-6"},ie={class:"flex flex-col gap-6 w-full lg:w-1/2"},le={class:"flex flex-col gap-6 w-full lg:w-1/2"},ne={class:"p-4 md:px-6 bg-gray-50 -mx-4 md:-mx-6"},ae={key:0,class:"pt-4"},de={key:0,class:"text-red-600"},ue={key:1},pe=["innerHTML"],me={class:"w-full block sm:flex items-center justify-stretch gap-4"},ce={class:"mt-4 grow flex items-center gap-4"},he={class:"w-1/2"},fe=["value"],ge=["value"],_e={key:1,class:"w-full block sm:flex items-center justify-stretch gap-4"},ye={class:"mt-4 grow flex items-center gap-4"},we={class:"w-1/2"},be=["value"],ve=["value"],ke={class:"mt-4"},Ve={key:0,class:"text-red-600 pt-1 rounded-md"},xe={key:1,class:"text-red-600 pt-1 rounded-md"},$e={key:2,class:"text-red-600 pt-1 rounded-md"},qe={key:1,class:"bg-white mt-4 rounded-md shadow overflow-x-auto"},Ue={class:"w-full"},Te={class:"text-left font-bold"},Se={class:"px-2 lg:pl-6 py-4 w-4"},Ce={class:"px-2 lg:px-6 py-4"},De={key:0},Fe={class:"px-2 lg:px-6 py-4 text-center w-32 xl:w-56"},Ae={class:"px-2 lg:px-6 py-4 text-center w-32 xl:w-56"},Me={key:0,class:"group"},ze=s("td",{class:"border-t"},[s("div",{class:"px-2 lg:pl-6 pb-2 focus:text-indigo-500"})],-1),Ie={class:"border-t",colspan:"4"},je={class:"px-2 lg:px-6 py-2 focus:text-indigo-500"},Le={class:"w-full lg:w-auto font-bold"},Pe={class:"text-base"},We={class:"px-2 lg:pl-6 pb-2 focus:text-indigo-500"},Re=["onClick"],Ee={class:"px-2 lg:px-6 pb-2 focus:text-indigo-500"},Be=["innerHTML"],Ne={key:0,class:"px-2 xl:px-6 pb-2 text-right"},He={class:"px-2 xl:px-6 pb-2 text-right"},Qe={key:0,class:"px-2 xl:px-6 pb-2 text-right"},Oe=["value"],Je=["value"],Ye=s("td",null,[s("div",{class:"px-2 lg:pl-6 pb-2 focus:text-indigo-500"})],-1),Ge={colspan:"3"},Ke={class:"px-2 lg:px-6 pb-2 focus:text-indigo-500"},Xe={key:0,class:"text-red-600 pt-1 rounded-md"},Ze={key:1,class:"text-red-600 pt-1 rounded-md"},et={key:2,class:"text-red-600 pt-1 rounded-md"},tt={class:"border-t"},st={class:"px-2 lg:pl-6 py-2 focus:text-indigo-500"},ot=["onClick"],rt={class:"border-t"},it={class:"px-2 lg:px-6 py-2 focus:text-indigo-500"},lt={class:"w-full lg:w-auto"},nt={class:"text-base"},at={key:0,class:"text-red-600 pt-1 rounded-md"},dt={key:1,class:"text-red-600 pt-1 rounded-md"},ut={key:2,class:"text-red-600 pt-1 rounded-md"},pt={class:"border-t"},mt={key:0,class:"px-2 xl:px-6 py-2 text-right"},ct={class:"border-t"},ht={class:"px-2 xl:px-6 py-2 text-right"},ft={class:"border-t"},gt={key:0,class:"px-2 xl:px-6 py-2 text-right"},_t=["value"],yt=["value"],wt={key:1},bt={key:0,class:"text-red-600"},vt={for:"file-upload",class:"font-medium text-gray-700"},kt={key:0,class:"print:hidden py-4 w-full"},Vt={role:"list",class:"border border-gray-200 rounded-md divide-y divide-gray-200"},xt={class:"w-0 flex-1 flex items-center"},$t={class:"ml-2 flex-1 w-0 truncate"},qt={class:"ml-4 flex-shrink-0 flex items-center gap-4"},Ut=["href"],Tt=["onClick"],St={class:"space-y-1 text-center"},Ct={class:"flex items-center justify-center text-gray-600"},Dt={for:"file-upload",class:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-300"},Ft={key:0,class:"font-semibold"},At={key:1,class:"font-semibold"},Mt={class:"pl-1"},zt={class:"text-sm text-gray-700"},It={key:0,class:"inline-block pt-4"},jt={class:"px-3 py-1 rounded-md border font-bold text-base"},Lt={key:1,class:"mt-4 pt-2 text-red-600 rounded-md"},Pt={class:"w-full flex items-center justify-between"},Wt={key:1},Rt={class:"flex items-center"};function Et(e,l,n,V,u,c){const S=h("Link"),C=h("trashed-message"),_=h("text-input"),U=h("auto-complete"),$=h("select-input"),q=h("icons"),D=h("textarea-input"),F=h("check-box"),A=h("tec-action-message"),M=h("loading-button"),z=h("tec-form-section"),I=h("select-variant-modal"),T=h("Dialog"),j=h("admin-layout");return o(),x(j,{title:e.$t(n.edit?"edit_x":"create_x",{x:e.$t("Transfer")})},{default:f(()=>[m(z,{onSubmitted:c.submit},{title:f(()=>[n.edit?(o(),r("div",te,[m(S,{class:"text-blue-600 hover:text-blue-700",href:e.route("transfers.index")},{default:f(()=>[b(i(e.$t("Transfers")),1)]),_:1},8,["href"]),se,b(" "+i(e.$t("Transfer"))+" ("+i(n.edit.reference)+") ",1)])):(o(),r(g,{key:1},[b(i(e.$t("create_x",{x:e.$t("Transfer")})),1)],64))]),description:f(()=>[b(i(n.edit?e.$t("Update the record by modifying the details in the form below"):e.$t("Please fill the form below to add new record.")),1)]),form:f(()=>[n.edit&&n.edit.deleted_at?(o(),x(C,{key:0,class:"mb-6",onRestore:c.restore},{default:f(()=>[b(i(e.$t("This record has been deleted.")),1)]),_:1},8,["onRestore"])):p("",!0),s("div",oe,[s("div",re,[s("div",ie,[m(_,{type:"date",modelValue:u.form.date,"onUpdate:modelValue":l[0]||(l[0]=t=>u.form.date=t),error:e.$page.props.errors.date,label:e.$t("Date")},null,8,["modelValue","error","label"]),m(_,{modelValue:u.form.reference,"onUpdate:modelValue":l[1]||(l[1]=t=>u.form.reference=t),error:e.$page.props.errors.reference,label:e.$t("Reference")},null,8,["modelValue","error","label"])]),s("div",le,[!e.$super&&e.$user.warehouse_id?(o(),x(_,{key:0,disabled:"",readonly:"",label:e.$t("From Warehouse"),modelValue:n.warehouses.find(t=>t.id==e.$user.warehouse_id).name},null,8,["label","modelValue"])):(o(),x(U,{key:1,id:"from_warehouse",suggestions:n.warehouses,label:e.$t("From Warehouse"),modelValue:u.form.from_warehouse_id,"onUpdate:modelValue":l[2]||(l[2]=t=>u.form.from_warehouse_id=t),error:e.$page.props.errors.from_warehouse_id},null,8,["suggestions","label","modelValue","error"])),m(U,{id:"to_warehouse",suggestions:n.warehouses,label:e.$t("To Warehouse"),disable:e.$user.warehouse_id,modelValue:u.form.to_warehouse_id,"onUpdate:modelValue":l[3]||(l[3]=t=>u.form.to_warehouse_id=t),error:e.$page.props.errors.to_warehouse_id},null,8,["suggestions","label","disable","modelValue","error"])])]),s("div",ne,[m(U,{json:"","keep-focus":"","reset-search":"",id:"add-item","onUpdate:modelValue":c.itemSelected,suggestions:e.route("items.search"),placeholder:e.$t("Scan barcode or search items"),defaultText:e.$t("Scan barcode or search items for next")},null,8,["onUpdate:modelValue","suggestions","placeholder","defaultText"]),c.smallScreen?(o(),r("div",ae,[u.form.items.length===0?(o(),r("div",{key:0,class:v({"-mx-4 md:-mx-6 -mb-4 p-4 bg-red-100 border-red-600":e.$page.props.errors.items})},[b(i(e.$t("Add item to the list by search or scan barcode"))+" ",1),e.$page.props.errors.items?(o(),r("div",de,i(e.$page.props.errors.items),1)):p("",!0)],2)):(o(),r("div",ue,[(o(!0),r(g,null,k(u.form.items,(t,a)=>(o(),r("div",{key:t.id,class:v(["-mx-4 -mb-6 p-4 md:-mx-6 border-b border-blue-100",{"bg-blue-50":a%2==0,"bg-indigo-50":a%2!=0,error:e.$page.props.errors["items."+a+".variation_id"]||e.$page.props.errors["items."+a+".quantity"]||e.$page.props.errors["items."+a+".weight"]}])},[s("h4",{class:v(["text-base font-bold",{"-mb-4":t.has_variants}])},i(t.name)+" ("+i(t.code)+")",3),t.has_variants&&t.variants.length&&t.selected.variations?(o(!0),r(g,{key:0},k(t.selected.variations,d=>(o(),r("div",{key:d.sku},[s("span",{class:"mt-8 block",innerHTML:e.$meta(d.meta)},null,8,pe),s("div",me,[s("div",ce,[m(_,{label:e.$t("Quantity"),type:"number",modelValue:d.quantity,"onUpdate:modelValue":y=>d.quantity=y,class:"w-1/2"},null,8,["label","modelValue","onUpdate:modelValue"]),s("div",he,[m($,{label:e.$t("Unit"),modelValue:d.unit_id,"onUpdate:modelValue":y=>d.unit_id=y,class:"w-full"},{default:f(()=>[s("option",{value:t.unit.id},i(t.unit.name),9,fe),t.unit.subunits&&t.unit.subunits.length?(o(!0),r(g,{key:0},k(t.unit.subunits,y=>(o(),r("option",{key:y.id,value:y.id},i(y.name),9,ge))),128)):p("",!0)]),_:2},1032,["label","modelValue","onUpdate:modelValue"])])]),e.$settings.track_weight==1&&t.track_weight==1?(o(),x(_,{key:0,type:"number",modelValue:d.weight,"onUpdate:modelValue":y=>d.weight=y,label:e.$t("Weight"),class:"mt-4 w-full sm:w-1/3"},null,8,["modelValue","onUpdate:modelValue","label"])):p("",!0)])]))),128)):(o(),r("div",_e,[s("div",ye,[m(_,{label:e.$t("Quantity"),type:"number",modelValue:t.quantity,"onUpdate:modelValue":d=>t.quantity=d,class:"w-1/2"},null,8,["label","modelValue","onUpdate:modelValue"]),s("div",we,[m($,{label:e.$t("Unit"),modelValue:t.unit_id,"onUpdate:modelValue":d=>t.unit_id=d,class:"w-full"},{default:f(()=>[s("option",{value:t.unit.id},i(t.unit.name),9,be),t.unit.subunits&&t.unit.subunits.length?(o(!0),r(g,{key:0},k(t.unit.subunits,d=>(o(),r("option",{key:d.id,value:d.id},i(d.name),9,ve))),128)):p("",!0)]),_:2},1032,["label","modelValue","onUpdate:modelValue"])])]),e.$settings.track_weight==1&&t.track_weight==1?(o(),x(_,{key:0,type:"number",label:e.$t("Weight"),modelValue:t.weight,"onUpdate:modelValue":d=>t.weight=d,class:"mt-4 w-full sm:w-1/3"},null,8,["label","modelValue","onUpdate:modelValue"])):p("",!0)])),s("div",ke,[e.$page.props.errors["items."+a+".variation_id"]?(o(),r("div",Ve,i(e.$page.props.errors["items."+a+".variation_id"].split("when").shift())+". ",1)):p("",!0),e.$page.props.errors["items."+a+".quantity"]?(o(),r("div",xe,i(e.$page.props.errors["items."+a+".quantity"]),1)):p("",!0),e.$page.props.errors["items."+a+".weight"]?(o(),r("div",$e,i(e.$page.props.errors["items."+a+".weight"].split("when").shift())+". ",1)):p("",!0)])],2))),128))]))])):(o(),r("div",qe,[s("table",Ue,[s("tr",Te,[s("th",Se,[m(q,{name:"trash"})]),s("th",Ce,i(e.$t("Item")),1),s("th",{class:v(["px-2 lg:px-6 py-4 text-center",e.$settings.track_weight?"w-32 xl:w-56":"w-px"])},[e.$settings.track_weight?(o(),r("span",De,i(e.$t("Weight")),1)):p("",!0)],2),s("th",Fe,i(e.$t("Quantity")),1),s("th",Ae,i(e.$t("Unit")),1)]),u.form.items.length?(o(!0),r(g,{key:0},k(u.form.items,(t,a)=>(o(),r(g,{key:t.id},[t.selected&&t.selected.variations&&t.selected.variations.length?(o(),r("tbody",Me,[s("tr",{class:v(["group-hover:bg-gray-100 focus-within:bg-gray-100",{error:e.$page.props.errors["items."+a+".variation_id"]||e.$page.props.errors["items."+a+".quantity"]||e.$page.props.errors["items."+a+".weight"]}])},[ze,s("td",Ie,[s("div",je,[s("h4",Le,[s("span",Pe,i(t.name)+" ("+i(t.code)+")",1)])])])],2),(o(!0),r(g,null,k(t.selected.variations,(d,y)=>(o(),r("tr",{key:d.id,class:v(["group-hover:bg-gray-100 focus-within:bg-gray-100",{error:e.$page.props.errors["items."+a+".variation_id"]||e.$page.props.errors["items."+a+".quantity"]||e.$page.props.errors["items."+a+".weight"]}])},[s("td",null,[s("div",We,[s("button",{type:"button",onClick:w=>c.removeItem(t,a,y),class:"text-red-400 hover:text-red-600 w-5 h-5 flex items-center justify-center"},[m(q,{name:"trash"})],8,Re)])]),s("td",null,[s("div",Ee,[s("div",{innerHTML:e.$meta(d.meta)},null,8,Be)])]),s("td",null,[e.$settings.track_weight==1&&t.track_weight==1?(o(),r("div",Ne,[m(_,{type:"number",modelValue:d.weight,"onUpdate:modelValue":w=>d.weight=w,size:"small",class:"w-full block"},null,8,["modelValue","onUpdate:modelValue"])])):p("",!0)]),s("td",null,[s("div",He,[m(_,{type:"number",modelValue:d.quantity,"onUpdate:modelValue":w=>d.quantity=w,size:"small",class:"w-full block"},null,8,["modelValue","onUpdate:modelValue"])])]),s("td",null,[t.unit?(o(),r("div",Qe,[m($,{modelValue:d.unit_id,"onUpdate:modelValue":w=>d.unit_id=w,size:"small",class:"w-full block"},{default:f(()=>[s("option",{value:t.unit.id},i(t.unit.name),9,Oe),t.unit.subunits&&t.unit.subunits.length?(o(!0),r(g,{key:0},k(t.unit.subunits,w=>(o(),r("option",{key:w.id,value:w.id},i(w.name),9,Je))),128)):p("",!0)]),_:2},1032,["modelValue","onUpdate:modelValue"])])):p("",!0)])],2))),128)),e.$page.props.errors["items."+a+".variation_id"]||e.$page.props.errors["items."+a+".quantity"]||e.$page.props.errors["items."+a+".weight"]?(o(),r("tr",{key:0,class:v(["group-hover:bg-gray-100 focus-within:bg-gray-100",{error:e.$page.props.errors["items."+a+".variation_id"]||e.$page.props.errors["items."+a+".quantity"]||e.$page.props.errors["items."+a+".weight"]}])},[Ye,s("td",Ge,[s("div",Ke,[e.$page.props.errors["items."+a+".variation_id"]?(o(),r("div",Xe,i(e.$page.props.errors["items."+a+".variation_id"].split("when").shift())+". ",1)):p("",!0),e.$page.props.errors["items."+a+".quantity"]?(o(),r("div",Ze,i(e.$page.props.errors["items."+a+".quantity"]),1)):p("",!0),e.$page.props.errors["items."+a+".weight"]?(o(),r("div",et,i(e.$page.props.errors["items."+a+".weight"].split("when").shift())+". ",1)):p("",!0)])])],2)):p("",!0)])):(o(),r("tr",{key:1,class:v(["hover:bg-gray-100 focus-within:bg-gray-100",{error:e.$page.props.errors["items."+a+".variation_id"]||e.$page.props.errors["items."+a+".quantity"]||e.$page.props.errors["items."+a+".weight"]}])},[s("td",tt,[s("div",st,[s("button",{type:"button",onClick:d=>c.removeItem(t,a),class:"text-red-400 hover:text-red-600 w-5 h-5 flex items-center justify-center"},[m(q,{name:"trash"})],8,ot)])]),s("td",rt,[s("div",it,[s("h4",lt,[s("span",nt,i(t.name)+" ("+i(t.code)+")",1)]),e.$page.props.errors["items."+a+".variation_id"]?(o(),r("div",at,i(e.$page.props.errors["items."+a+".variation_id"].split("when").shift())+". ",1)):p("",!0),e.$page.props.errors["items."+a+".quantity"]?(o(),r("div",dt,i(e.$page.props.errors["items."+a+".quantity"]),1)):p("",!0),e.$page.props.errors["items."+a+".weight"]?(o(),r("div",ut,i(e.$page.props.errors["items."+a+".weight"].split("when").shift())+". ",1)):p("",!0)])]),s("td",pt,[e.$settings.track_weight==1&&t.track_weight==1?(o(),r("div",mt,[m(_,{type:"number",modelValue:t.weight,"onUpdate:modelValue":d=>t.weight=d,size:"small",class:"w-full block"},null,8,["modelValue","onUpdate:modelValue"])])):p("",!0)]),s("td",ct,[s("div",ht,[m(_,{type:"number",modelValue:t.quantity,"onUpdate:modelValue":d=>t.quantity=d,size:"small",class:"w-full block"},null,8,["modelValue","onUpdate:modelValue"])])]),s("td",ft,[t.unit?(o(),r("div",gt,[m($,{modelValue:t.unit_id,"onUpdate:modelValue":d=>t.unit_id=d,size:"small",class:"w-full block"},{default:f(()=>[s("option",{value:t.unit.id},i(t.unit.name),9,_t),t.unit.subunits&&t.unit.subunits.length?(o(!0),r(g,{key:0},k(t.unit.subunits,d=>(o(),r("option",{key:d.id,value:d.id},i(d.name),9,yt))),128)):p("",!0)]),_:2},1032,["modelValue","onUpdate:modelValue"])])):p("",!0)])],2))],64))),128)):p("",!0),u.form.items.length===0?(o(),r("tr",wt,[s("td",{class:v(["border-t px-2 lg:px-6 py-4",{"bg-red-100 border-red-600":e.$page.props.errors.items}]),colspan:"5"},[b(i(e.$t("Add item to the list by search or scan barcode"))+" ",1),e.$page.props.errors.items?(o(),r("div",bt,i(e.$page.props.errors.items),1)):p("",!0)],2)])):p("",!0)])]))]),s("div",null,[s("label",vt,i(e.$t("Attachments")),1),n.edit&&n.edit.attachments&&n.edit.attachments.length?(o(),r("div",kt,[s("ul",Vt,[(o(!0),r(g,null,k(n.edit.attachments,t=>(o(),r("li",{key:t.id,class:"pl-3 pr-4 py-3 flex items-center justify-between text-sm"},[s("div",xt,[m(q,{name:"clip",class:"flex-shrink-0 h-5 w-5 text-gray-400"}),s("span",$t,i(t.title),1)]),s("div",qt,[s("a",{class:"font-medium text-indigo-600 hover:text-indigo-500",href:e.route("media.download",t.id)},i(e.$t("Download")),9,Ut),s("button",{class:"font-medium text-red-600 hover:text-red-500",onClick:a=>c.deleteAttachment(t.id)},i(e.$t("Delete")),9,Tt)])]))),128))])])):p("",!0),s("div",{class:v([e.$page.props.errors.excel?"border-red-500":"border-gray-300","mt-1 flex justify-center px-6 py-3 border-2 border-dashed rounded-md"])},[s("div",St,[s("div",Ct,[s("label",Dt,[u.files.length?(o(),r("span",Ft,i(e.$t("Add more files")),1)):(o(),r("span",At,i(e.$t("Select files")),1)),s("input",{multiple:"",ref:"file",type:"file",class:"sr-only",id:"file-upload",name:"file-upload",onChange:l[4]||(l[4]=(...t)=>c.updateFile&&c.updateFile(...t)),accept:".png,.jpg,.jpeg,.pdf,.doc,.docx,.xls,.xlsx,.zip"},null,544)]),s("p",Mt,i(e.$t("or drag and drop")),1)]),s("div",zt,[s("div",null,i(e.$t("You can select .png, .jpg, .pdf, .docx, .xlsx & .zip files.")),1)]),u.files.length?(o(),r("div",It,[s("div",jt,[b(i(e.$t("Selected Files"))+": ",1),(o(!0),r(g,null,k(u.files,(t,a)=>(o(),r("div",{class:"text-left",key:a},i(a+1)+". "+i(t),1))),128))])])):p("",!0),e.$page.props.errors.excel?(o(),r("div",Lt,i(e.$page.props.errors.files),1)):p("",!0)])],2)]),m(D,{modelValue:u.form.details,"onUpdate:modelValue":l[5]||(l[5]=t=>u.form.details=t),error:e.$page.props.errors.details,label:e.$t("Details")},null,8,["modelValue","error","label"]),s("div",null,[!n.edit||n.edit.draft==1?(o(),x(F,{key:0,id:"draft",class:"mb-2",checked:u.form.draft,"onUpdate:checked":l[6]||(l[6]=t=>u.form.draft=t),error:e.$page.props.errors.draft,label:e.$t("This record is draft")},null,8,["checked","error","label"])):p("",!0)])])]),actions:f(()=>[s("div",Pt,[n.edit?(o(),r(g,{key:0},[n.edit.deleted_at?(o(),r("button",{key:1,type:"button",onClick:l[8]||(l[8]=(...t)=>c.deletePermanently&&c.deletePermanently(...t)),class:"text-red-600 px-4 py-2 rounded border-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-gray-300"},i(e.$t("delete_x",{x:e.$t("Permanently")})),1)):(o(),r("button",{key:0,type:"button",onClick:l[7]||(l[7]=(...t)=>c.destroy&&c.destroy(...t)),class:"text-red-600 px-4 py-2 rounded border-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-gray-300"},i(e.$t("delete_x",{x:e.$t("Transfer")})),1))],64)):(o(),r("div",Wt)),s("div",Rt,[m(A,{on:u.form.recentlySuccessful,class:"mx-3"},{default:f(()=>[b(i(e.$t("Saved.")),1)]),_:1},8,["on"]),m(M,{type:"submit",loading:u.form.processing,disabled:u.form.processing},{default:f(()=>[b(i(e.$t("Save")),1)]),_:1},8,["loading","disabled"])])])]),_:1},8,["onSubmitted"]),u.select_variant?(o(),x(I,{key:0,show:u.select_variant,nf:u.unknown_variation,variants:u.item.variants,onSelected:c.variantSelected,onClose:l[9]||(l[9]=t=>u.select_variant=!1)},null,8,["show","nf","variants","onSelected"])):p("",!0),m(T,{"max-width":"md",show:u.permanent,"action-type":"delete",title:"Delete Transfer?",close:c.closePermanentModal,"action-text":"Delete Permanently",action:c.deleteCategoryPermanently,content:`<p class='mb-2'>${e.$t("Are you sure you want to delete the record permanently?")}</p>
        <p>${e.$t("Once deleted, all of its resources and data will be permanently deleted.")}</p>`},null,8,["show","close","action","content"]),m(T,{show:u.confirm,close:c.closeModal,action:c.deleteItem,"action-type":"delete",title:"Delete Transfer?","action-text":"Delete Transfer",content:e.$t("Are you sure you want to delete the record?")},null,8,["show","close","action","content"]),m(T,{show:u.restoreConf,action:c.restoreItem,title:"Restore Transfer!",close:c.closeRestoreModal,"action-text":"Restore Transfer",content:e.$t("Are you sure you want to restore the record?")},null,8,["show","action","close","content"])]),_:1},8,["title"])}const _s=Z(ee,[["render",Et]]);export{_s as default};
