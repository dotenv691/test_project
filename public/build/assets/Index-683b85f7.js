import{S as x,p as $,m as T}from"./SearchFilter-c876daa1.js";import{t as V}from"./throttle-0066c8c9.js";import{T as S}from"./Button-6d7047a8.js";import{P as B}from"./Pagination-14430ebc.js";import{S as C}from"./SelectInput-f0f8ca8e.js";import{A as N}from"./AdminLayout-6a4f7366.js";import{T as R}from"./SectionTitle-c234a4ef.js";import{_ as j,r as n,o as a,d as _,e as i,a as t,g as r,h as p,t as o,c as l,i as A,n as F,b as f,F as O}from"./app-c16e0624.js";import"./_baseIsEqual-4a41c1e0.js";import"./DropdownLink-314f7761.js";import"./Label-45ee75d5.js";import"./InputError-746f9bc4.js";import"./v4-a960c1f4.js";import"./Modal-5cbabd3e.js";import"./ApplicationLogo-fff1da4e.js";import"./ApplicationMark-1d436696.js";const I={components:{TecButton:S,Pagination:B,AdminLayout:N,SelectInput:C,SearchFilter:x,TecSectionTitle:R},props:{roles:Object,filters:Object},data(){return{form:{search:this.filters.search,trashed:this.filters.trashed}}},watch:{form:{handler:V(function(){let e=$(this.form);this.$inertia.visit(this.route("roles.index",Object.keys(e).length?e:{remember:"forget"}),{onFinish:()=>{document.getElementById("page-search").focus()}})},150),deep:!0}},methods:{goto(e){this.$can("update-roles")&&this.$inertia.visit(e)},reset(){this.form=T(this.form,()=>null)}}},P={class:"px-4 md:px-0"},E={class:"mb-6 flex justify-between items-center print:hidden"},L={class:"mt-4 block text-gray-700"},U={value:null},q={value:"with"},z={value:"only"},D={class:"hidden lg:inline"},W={class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto"},G={class:"w-full whitespace-nowrap"},H={class:"text-left font-bold"},J={class:"px-6 pt-6 pb-4"},K=t("th",{class:"px-6 pt-6 pb-4"},null,-1),M=["onClick"],Q={class:"border-t"},X={class:"focus:outline-none px-6 py-4 flex items-center focus:text-indigo-500"},Y={class:"border-t w-px"},Z={key:0,class:"focus:outline-none px-4 flex items-center"},ee={key:1},te={key:0},se={class:"border-t px-6 py-4",colspan:"2"};function oe(e,c,d,ne,m,u){const b=n("tec-section-title"),g=n("select-input"),y=n("search-filter"),h=n("icons"),w=n("tec-button"),k=n("pagination"),v=n("admin-layout");return a(),_(v,{title:e.$t("Roles")},{default:i(()=>[t("div",P,[r(b,{class:"-mx-4 md:mx-0 mb-6"},{title:i(()=>[p(o(e.$t("Roles")),1)]),description:i(()=>[p(o(e.$t("Please review the data in the table below")),1)]),_:1}),t("div",E,[r(y,{modelValue:m.form.search,"onUpdate:modelValue":c[1]||(c[1]=s=>m.form.search=s),class:"w-full max-w-md mr-4",onReset:u.reset},{default:i(()=>[t("label",L,o(e.$t("Trashed"))+":",1),r(g,{modelValue:m.form.trashed,"onUpdate:modelValue":c[0]||(c[0]=s=>m.form.trashed=s),class:"mt-1 w-full"},{default:i(()=>[t("option",U,o(e.$t("Not Trashed")),1),t("option",q,o(e.$t("With Trashed")),1),t("option",z,o(e.$t("Only Trashed")),1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue","onReset"]),r(w,{href:e.route("roles.create")},{default:i(()=>[t("span",null,[r(h,{name:"plus",class:"w-5 h-5 lg:mr-2"})]),t("span",D,o(e.$t("create_x",{x:e.$t("Role")})),1)]),_:1},8,["href"])]),t("div",W,[t("table",G,[t("tr",H,[t("th",J,o(e.$t("Name")),1),K]),(a(!0),l(O,null,A(d.roles.data,s=>(a(),l("tr",{key:s.id,onClick:ae=>u.goto(e.route("roles.edit",s.id)),class:F(["hover:bg-gray-100 focus-within:bg-gray-100",{"cursor-pointer":s.name!="Super Admin"&&e.$can("update-roles")}])},[t("td",Q,[t("div",X,[p(o(e.$t(s.name))+" ",1),s.deleted_at?(a(),_(h,{key:0,name:"trash",class:"shrink-0 w-4 h-4 text-red-500 ml-2"})):f("",!0)])]),t("td",Y,[s.name!="Super Admin"&&e.$can("update-roles")?(a(),l("div",Z,[r(h,{name:"chevron-down",class:"transform -rotate-90 block w-4 h-4"})])):(a(),l("div",ee))])],10,M))),128)),d.roles.data.length===0?(a(),l("tr",te,[t("td",se,o(e.$t("There is no data to display.")),1)])):f("",!0)])]),r(k,{class:"mt-6",meta:d.roles.meta,links:d.roles.links},null,8,["meta","links"])])]),_:1},8,["title"])}const ve=j(I,[["render",oe]]);export{ve as default};
