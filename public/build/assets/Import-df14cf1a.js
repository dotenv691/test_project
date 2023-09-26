import{F as y}from"./FileInput-abd63d26.js";import{A as b}from"./AdminLayout-6a4f7366.js";import{L as v}from"./LoadingButton-5082ea01.js";import{T as x}from"./FormSection-e4b782a6.js";import{T as $}from"./SecondaryButton-98bb4bb4.js";import{_ as k,r as a,o as r,d as S,e as s,g as d,h as c,t,a as o,n as w,c as n,b as p}from"./app-c16e0624.js";import"./Label-45ee75d5.js";import"./Input-9dff1bbf.js";import"./InputError-746f9bc4.js";import"./v4-a960c1f4.js";import"./Modal-5cbabd3e.js";import"./DropdownLink-314f7761.js";import"./ApplicationLogo-fff1da4e.js";import"./ApplicationMark-1d436696.js";import"./SectionTitle-c234a4ef.js";const F={props:["parents"],components:{FileInput:y,AdminLayout:b,LoadingButton:v,TecFormSection:x,TecSecondaryButton:$},data(){return{selected:null,form:this.$inertia.form({_method:"POST",excel:null})}},methods:{updateFile(e){this.selected=e.target.files[0].name},submit(){this.$refs.file&&(this.form.excel=this.$refs.file.files[0]),this.form.post(route("items.import.save"),{preserveScroll:!0})}}},C={for:"file-upload",class:"block font-medium text-gray-700"},B={class:"space-y-1 text-center"},T={class:"flex items-center justify-center text-gray-600 py-2"},V={for:"file-upload",class:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-300"},I={key:0,class:"font-semibold"},N={key:1,class:"font-semibold"},L={class:"pl-1"},q={class:"text-xs text-gray-700"},E={key:0,class:"inline-block pt-4"},j={class:"px-3 py-1 rounded-md border font-bold text-lg"},z={key:1,class:"mt-4 pt-2 text-red-600 rounded-md"};function A(e,m,O,P,i,l){const u=a("icons"),f=a("loading-button"),h=a("tec-form-section"),g=a("admin-layout");return r(),S(g,{title:e.$t("import_x",{x:e.$t("Items")})},{default:s(()=>[d(h,{onSubmitted:l.submit},{title:s(()=>[c(t(e.$t("import_x",{x:e.$t("Items")})),1)]),description:s(()=>[c(t(e.$t("Please upload the excel file to import records.")),1)]),form:s(()=>[o("div",null,[o("label",C,t(e.$t("Excel File")),1),o("div",{class:w([e.$page.props.errors.excel?"border-red-500":"border-gray-300","mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md"])},[o("div",B,[d(u,{name:"doc-text",class:"mx-auto h-12 w-12 text-gray-400"}),o("div",T,[o("label",V,[i.selected?(r(),n("span",I,t(e.$t("Change file")),1)):(r(),n("span",N,t(e.$t("Select file")),1)),o("input",{ref:"file",type:"file",class:"sr-only",id:"file-upload",name:"file-upload",onChange:m[0]||(m[0]=(..._)=>l.updateFile&&l.updateFile(..._)),accept:".xls,.xlsx,application/vnd.ms-excel"},null,544)]),o("p",L,t(e.$t("or drag and drop")),1)]),o("div",q,[o("div",null,t(e.$t("Excel file should have name, code, sku, symbology, unit, categories, details, has_serial, track_weight, track_quantity, alert_quantity, has_variants & variants columns.")),1),o("div",null,t(e.$t("You must fill the name, code and categories columns."))+" "+t(e.$t("Unit and categories should be unit/category code and already added to the system before importing items.")),1),o("div",null,t(e.$t("has_serial, track_weight, track_quantity & has_variants are booleans and should have `yes` value to enable.")),1),o("div",null,t(e.$t("Variants should be separated by pipe `|` as [Variant Name=Options(separated by comma)] e.g. Color=Red,Green|Size:S,M,L")),1)]),i.selected?(r(),n("div",E,[o("div",j,t(e.$t("Selected File"))+": "+t(i.selected),1)])):p("",!0),e.$page.props.errors.excel?(r(),n("div",z,t(e.$page.props.errors.excel),1)):p("",!0)])],2)])]),actions:s(()=>[d(f,{loading:i.form.processing,disabled:i.form.processing},{default:s(()=>[c(t(e.$t("Import")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["onSubmitted"])]),_:1},8,["title"])}const oe=k(F,[["render",A]]);export{oe as default};
