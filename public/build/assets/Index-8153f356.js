import{S as v,p as T,m as C}from"./SearchFilter-c876daa1.js";import{t as V}from"./throttle-0066c8c9.js";import{T as B}from"./Button-6d7047a8.js";import{P as N}from"./Pagination-14430ebc.js";import{S}from"./SelectInput-f0f8ca8e.js";import{T as j,a as D}from"./DropdownLink-314f7761.js";import{A as F}from"./AdminLayout-6a4f7366.js";import{T as O}from"./SectionTitle-c234a4ef.js";import{_ as P,r,o as n,d as l,e as a,a as e,g as c,h as d,t as o,b as i,c as m,i as E,n as I,F as L}from"./app-c16e0624.js";import"./_baseIsEqual-4a41c1e0.js";import"./Label-45ee75d5.js";import"./InputError-746f9bc4.js";import"./v4-a960c1f4.js";import"./Modal-5cbabd3e.js";import"./ApplicationLogo-fff1da4e.js";import"./ApplicationMark-1d436696.js";const A={components:{TecButton:B,Pagination:N,AdminLayout:F,TecDropdown:j,SelectInput:S,SearchFilter:v,TecDropdownLink:D,TecSectionTitle:O},props:{filters:Object,contacts:Object},data(){return{form:{search:this.filters.search,trashed:this.filters.trashed}}},watch:{form:{handler:V(function(){let t=T(this.form);this.$inertia.visit(this.route("contacts.index",Object.keys(t).length?t:{remember:"forget"}),{onFinish:()=>{document.getElementById("page-search").focus()}})},150),deep:!0}},methods:{goto(t){this.$can("update-contacts")&&this.$inertia.visit(t)},reset(){this.form=C(this.form,()=>null)}}},R={class:"px-4 md:px-0"},U={class:"mb-6 flex justify-between items-center print:hidden"},q={class:"mt-4 block text-gray-700"},z={value:null},W={value:"with"},G={value:"only"},H={class:"flex items-center px-4 py-3 bg-gray-800 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},J=["href"],K={class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto"},M={class:"w-full whitespace-nowrap"},Q={class:"text-left font-bold"},X={class:"px-6 pt-6 pb-4"},Y={class:"px-6 pt-6 pb-4"},Z={class:"px-6 pt-6 pb-4"},tt={class:"px-6 pt-6 pb-4",colspan:"2"},et=["onClick"],ot={class:"border-t"},st={class:"px-6 py-4 flex items-center focus:text-indigo-500"},nt={class:"border-t"},at={class:"px-6 py-4 flex items-center"},rt={class:"border-t"},it={class:"px-6 py-4 flex items-center"},ct={class:"border-t max-w-sm"},lt={class:"px-6 py-4 flex items-center truncate"},dt={class:"border-t w-px"},mt={key:0,class:"px-4 flex items-center"},pt={key:0},ht={class:"border-t px-6 py-4",colspan:"4"};function ut(t,p,h,_t,u,f){const y=r("tec-section-title"),b=r("select-input"),w=r("search-filter"),_=r("icons"),g=r("tec-dropdown-link"),k=r("tec-dropdown"),x=r("pagination"),$=r("admin-layout");return n(),l($,{title:t.$t("Contacts")},{default:a(()=>[e("div",R,[c(y,{class:"-mx-4 md:mx-0 mb-6"},{title:a(()=>[d(o(t.$t("Contacts")),1)]),description:a(()=>[d(o(t.$t("Please review the data in the table below")),1)]),_:1}),e("div",U,[c(w,{modelValue:u.form.search,"onUpdate:modelValue":p[1]||(p[1]=s=>u.form.search=s),class:"w-full max-w-md mr-4",onReset:f.reset},{default:a(()=>[e("label",q,o(t.$t("Trashed"))+":",1),c(b,{modelValue:u.form.trashed,"onUpdate:modelValue":p[0]||(p[0]=s=>u.form.trashed=s),class:"mt-1 w-full"},{default:a(()=>[e("option",z,o(t.$t("Not Trashed")),1),e("option",W,o(t.$t("With Trashed")),1),e("option",G,o(t.$t("Only Trashed")),1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue","onReset"]),t.$can(["create-contacts","import-contacts","export-contacts"])?(n(),l(k,{key:0,align:"right",width:"48"},{trigger:a(()=>[e("button",H,[c(_,{name:"menu"})])]),content:a(()=>[t.$can("create-contacts")?(n(),l(g,{key:0,href:t.route("contacts.create")},{default:a(()=>[d(o(t.$t("create_x",{x:t.$t("Contact")})),1)]),_:1},8,["href"])):i("",!0),t.$can("export-contacts")?(n(),m("a",{key:1,href:t.route("contacts.export"),class:"block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},o(t.$t("export_x",{x:t.$t("Contacts")})),9,J)):i("",!0),t.$can("import-contacts")?(n(),l(g,{key:2,href:t.route("contacts.import")},{default:a(()=>[d(o(t.$t("import_x",{x:t.$t("Contacts")})),1)]),_:1},8,["href"])):i("",!0)]),_:1})):i("",!0)]),e("div",K,[e("table",M,[e("tr",Q,[e("th",X,o(t.$t("Name")),1),e("th",Y,o(t.$t("Email")),1),e("th",Z,o(t.$t("Phone")),1),e("th",tt,o(t.$t("Details")),1)]),(n(!0),m(L,null,E(h.contacts.data,s=>(n(),m("tr",{key:s.id,onClick:ft=>f.goto(t.route("contacts.edit",s.id)),class:I(["hover:bg-gray-100 focus-within:bg-gray-100",{"cursor-pointer":t.$can("update-contacts")}])},[e("td",ot,[e("div",st,[d(o(s.name)+" ",1),s.deleted_at?(n(),l(_,{key:0,name:"trash",class:"shrink-0 w-4 h-4 text-red-500 ml-2"})):i("",!0)])]),e("td",nt,[e("div",at,o(s.email),1)]),e("td",rt,[e("div",it,o(s.phone),1)]),e("td",ct,[e("div",lt,o(s.details),1)]),e("td",dt,[t.$can("update-contacts")?(n(),m("div",mt,[c(_,{name:"chevron-down",class:"transform -rotate-90 block w-4 h-4"})])):i("",!0)])],10,et))),128)),h.contacts.data.length===0?(n(),m("tr",pt,[e("td",ht,o(t.$t("There is no data to display.")),1)])):i("",!0)])]),c(x,{class:"mt-6",meta:h.contacts.meta,links:h.contacts.links},null,8,["meta","links"])])]),_:1},8,["title"])}const Ft=P(A,[["render",ut]]);export{Ft as default};