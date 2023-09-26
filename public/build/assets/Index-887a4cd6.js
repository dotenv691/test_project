import{S as P,p as S,m as j}from"./SearchFilter-c876daa1.js";import{t as A}from"./throttle-0066c8c9.js";import{D as B}from"./Dialog-81031492.js";import{M as I}from"./Modal-5cbabd3e.js";import R from"./Details-1701606f.js";import{T as N}from"./Button-6d7047a8.js";import{P as L}from"./Pagination-14430ebc.js";import{S as O}from"./SelectInput-f0f8ca8e.js";import{T as E,a as F}from"./DropdownLink-314f7761.js";import{A as U}from"./AdminLayout-6a4f7366.js";import{A as W}from"./AutoComplete-b978c1ce.js";import{T as q}from"./SectionTitle-c234a4ef.js";import{_ as Y,r as a,o as r,d as u,e as m,a as t,g as o,h,t as n,c as f,i as G,n as b,b as p,F as v}from"./app-c16e0624.js";import"./_baseIsEqual-4a41c1e0.js";import"./LoadingButton-5082ea01.js";import"./DialogModal-332d0e9d.js";import"./DangerButton-390eea9c.js";import"./SecondaryButton-98bb4bb4.js";import"./JsBarcode-434981a2.js";import"./TrashedMessage-0596e83d.js";import"./ApplicationLogo-fff1da4e.js";import"./ApplicationMark-1d436696.js";import"./Label-45ee75d5.js";import"./InputError-746f9bc4.js";import"./v4-a960c1f4.js";const H={components:{Modal:I,Dialog:B,TecButton:N,Pagination:L,AdminLayout:U,TecDropdown:E,SelectInput:O,AutoComplete:W,SearchFilter:P,CheckinDetails:R,TecDropdownLink:F,TecSectionTitle:q},props:{filters:Object,checkins:Object},data(){return{edit:null,close:!1,checkin:null,details:!1,confirm:!1,loading:!1,permanent:!1,restoreConf:!1,form:{search:this.filters.search,trashed:this.filters.trashed}}},watch:{form:{handler:A(function(){let e=S(this.form);this.$inertia.get(this.route("checkins.index",Object.keys(e).length?e:{remember:"forget"}),{},{onFinish:()=>{document.getElementById("page-search").focus()}})},150),deep:!0}},methods:{goto(e){this.checkin&&this.checkin.id==e?this.details=!0:(this.loading=!0,axios.get(route("checkins.show",e)+"?json=yes").then(d=>{this.checkin=d.data,this.details=!0,this.loading=!1}))},showDetails(){this.details=!1},hideDetails(){this.details=!1},reset(){this.form=j(this.form,()=>null)},sendEmail(e){this.$inertia.get(route("notifications.checkin",e))},destroy(e){this.edit=e,this.confirm=!0},deleteItem(){this.$inertia.delete(route("checkins.destroy",this.edit.id),{onSuccess:()=>this.closeModal()})},closeModal(){this.edit=null,this.confirm=!1},restore(e){this.edit=e,this.restoreConf=!0},restoreItem(){this.$inertia.put(this.route("checkins.restore",this.edit.id),{onSuccess:()=>this.restoreConf=!1})},closeRestoreModal(){this.edit=null,this.restoreConf=!1},deletePermanently(e){this.edit=e,this.permanent=!0},deleteCategoryPermanently(){this.$inertia.delete(route("checkins.destroy.permanently",this.edit.id),{onSuccess:()=>this.closeModal()})},closePermanentModal(){this.edit=null,this.permanent=!1},print(){window.print()}}},J={class:"px-4 md:px-0"},K={class:"mb-6 flex justify-between items-center print:hidden"},Q={class:"hidden lg:inline"},X={class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto"},Z={class:"w-full whitespace-nowrap"},ee={class:"text-left font-bold"},te={class:"px-6 pt-6 pb-4"},se={class:"px-6 pt-6 pb-4"},oe={class:"px-6 pt-6 pb-4",colspan:"2"},ne=["onClick"],ie={class:"px-6 py-4 flex items-center focus:text-indigo-500"},le={class:"inline-flex gap-x-2 items-center justify-start"},re=["onClick"],ae={class:"px-6 py-4"},ce={class:"flex items-center"},de={class:"text-gray-500 mr-1"},me={class:"flex items-center"},ue={class:"text-gray-500 mr-1"},he={class:"flex items-center"},fe={class:"text-gray-500 mr-1"},pe=["onClick"],ge={class:"px-6 py-4 flex items-center"},_e={class:"w-full whitespace-normal line-clamp-3"},ye={class:"border-t w-16"},be={class:"px-4 flex items-center print:hidden"},ke={key:0,class:"flex items-center"},we=["onClick"],ve=["onClick"],Ce=["onClick"],xe=["onClick"],De={key:0},$e={class:"border-t px-6 py-4",colspan:"4"},Te={class:"px-6 py-4 print:px-0"},Ve={key:0,class:"flex items-center justify-between print:hidden"},ze={class:"text-lg"},Me={class:"hidden sm:inline"},Pe={class:"-mr-2 flex items-center"},Se={class:"mt-4 print-mt-0"};function je(e,d,_,Ae,i,l){const C=a("tec-section-title"),k=a("auto-complete"),x=a("search-filter"),c=a("icons"),D=a("tec-button"),w=a("Link"),$=a("pagination"),T=a("checkin-details"),V=a("modal"),y=a("Dialog"),z=a("loading"),M=a("admin-layout");return r(),u(M,{title:e.$t("Checkins")},{default:m(()=>[t("div",J,[o(C,{class:"-mx-4 md:mx-0 mb-6"},{title:m(()=>[h(n(e.$t("Checkins")),1)]),description:m(()=>[h(n(e.$t("Please review the data in the table below")),1)]),_:1}),t("div",K,[o(x,{modelValue:i.form.search,"onUpdate:modelValue":d[2]||(d[2]=s=>i.form.search=s),class:"w-full max-w-md mr-4",onReset:l.reset},{default:m(()=>[o(k,{id:"trashed",position:"left",label:e.$t("Trashed"),modelValue:i.form.trashed,"onUpdate:modelValue":d[0]||(d[0]=s=>i.form.trashed=s),class:"mt-1 w-full",suggestions:[{label:e.$t("Not Trashed"),value:null},{label:e.$t("With Trashed"),value:"with"},{label:e.$t("Only Trashed"),value:"only"}]},null,8,["label","modelValue","suggestions"]),o(k,{id:"draft",position:"left",label:e.$t("Draft"),modelValue:i.form.draft,"onUpdate:modelValue":d[1]||(d[1]=s=>i.form.draft=s),class:"mt-1 w-full",suggestions:[{label:e.$t("All"),value:null},{label:e.$t("Yes"),value:"yes"},{label:e.$t("No"),value:"no"}]},null,8,["label","modelValue","suggestions"])]),_:1},8,["modelValue","onReset"]),o(D,{href:e.route("checkins.create")},{default:m(()=>[t("span",null,[o(c,{name:"plus",class:"w-5 h-5 lg:mr-2"})]),t("span",Q,n(e.$t("create_x",{x:e.$t("Checkin")})),1)]),_:1},8,["href"])]),t("div",X,[t("table",Z,[t("tr",ee,[t("th",te,n(e.$t("Checkin")),1),t("th",se,n(e.$t("Relations")),1),t("th",oe,n(e.$t("Details")),1)]),(r(!0),f(v,null,G(_.checkins.data,(s,Be)=>(r(),f("tr",{key:s.id,class:"hover:bg-gray-100 focus-within:bg-gray-100"},[t("td",{class:b(["border-t",{"cursor-pointer":e.$can("read-checkins")}]),onClick:g=>l.goto(s.id)},[t("div",ie,[t("div",null,[t("div",null,n(s.reference),1),t("div",null,n(e.$date(s.date)),1),t("div",le,[h(n(e.$t("Draft"))+": ",1),s.draft==1?(r(),u(c,{key:0,name:"tick",class:"text-green-600 mx-auto"})):(r(),u(c,{key:1,name:"cross",class:"text-red-600 mx-auto"}))])]),s.deleted_at?(r(),u(c,{key:0,name:"trash",class:"shrink-0 w-4 h-4 text-red-500 ml-2"})):p("",!0)])],10,ne),t("td",{class:b(["border-t",{"cursor-pointer":e.$can("read-checkins")}]),onClick:g=>l.goto(s.id)},[t("div",ae,[t("div",ce,[t("div",de,n(e.$t("Contact"))+":",1),h(" "+n(s.contact.name),1)]),t("div",me,[t("div",ue,n(e.$t("Warehouse"))+":",1),h(" "+n(s.warehouse.name),1)]),t("div",he,[t("div",fe,n(e.$t("User"))+":",1),h(" "+n(s.user.name),1)])])],10,re),t("td",{class:b(["border-t max-w-lg min-w-56",{"cursor-pointer":e.$can("read-checkins")}]),onClick:g=>l.goto(s.id)},[t("div",ge,[t("div",_e,n(s.details),1)])],10,pe),t("td",ye,[t("div",be,[e.$can(["create-checkins","import-checkins","export-checkins"])?(r(),f("div",ke,[o(w,{href:e.route("checkins.show",s.id),class:"flex items-center p-3 md:p-2 bg-blue-600 rounded-l-md text-white hover:bg-blue-700 focus:bg-blue-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},{default:m(()=>[o(c,{name:"doc"})]),_:2},1032,["href"]),t("button",{onClick:g=>l.sendEmail(s.id),class:"flex items-center p-3 md:p-2 bg-indigo-600 text-white hover:bg-indigo-700 focus:bg-indigo-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[o(c,{name:"email"})],8,we),e.$can("update-checkins")?(r(),u(w,{key:0,href:e.route("checkins.edit",s.id),class:"flex items-center p-3 md:p-2 bg-yellow-600 text-white hover:bg-yellow-700 focus:bg-yellow-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},{default:m(()=>[o(c,{name:"edit"})]),_:2},1032,["href"])):p("",!0),s.deleted_at?(r(),f(v,{key:1},[t("button",{type:"button",onClick:g=>l.restore(s),class:"flex items-center p-3 md:p-2 bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[o(c,{name:"refresh"})],8,ve),t("button",{type:"button",onClick:g=>l.deletePermanently(s),class:"flex items-center p-3 md:p-2 bg-red-600 rounded-r-md text-white hover:bg-red-700 focus:bg-red-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[o(c,{name:"trash"})],8,Ce)],64)):(r(),f("button",{key:2,type:"button",onClick:g=>l.destroy(s),class:"flex items-center p-3 md:p-2 bg-red-600 rounded-r-md text-white hover:bg-red-700 focus:bg-red-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[o(c,{name:"trash"})],8,xe))])):p("",!0)])])]))),128)),_.checkins.data.length===0?(r(),f("tr",De,[t("td",$e,n(e.$t("There is no data to display.")),1)])):p("",!0)])]),o($,{class:"mt-6",meta:_.checkins.meta,links:_.checkins.links},null,8,["meta","links"])]),o(V,{show:i.details,"max-width":"4xl",closeable:!0,onClose:l.hideDetails},{default:m(()=>[t("div",Te,[i.details&&i.checkin?(r(),f("div",Ve,[t("div",ze,[h(n(e.$t("Checkin Details"))+" ",1),t("span",Me,"("+n(i.checkin.reference)+")",1)]),t("div",Pe,[t("button",{onClick:d[3]||(d[3]=s=>l.hideDetails()),class:"flex items-center justify-center h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 focus:outline-none"},[o(c,{name:"cross",class:"h-5 w-5"})])])])):p("",!0),t("div",Se,[i.checkin?(r(),u(T,{key:0,checkin:i.checkin},null,8,["checkin"])):p("",!0)])])]),_:1},8,["show","onClose"]),o(y,{"max-width":"md",show:i.permanent,"action-type":"delete",title:"Delete Checkin!",close:l.closePermanentModal,"action-text":"Delete Permanently",action:l.deleteCategoryPermanently,content:`<p class='mb-2'>${e.$t("Are you sure you want to delete the record permanently?")}</p>
        <p>${e.$t("Once deleted, all of its resources and data will be permanently deleted.")}</p>`},null,8,["show","close","action","content"]),o(y,{show:i.confirm,close:l.closeModal,action:l.deleteItem,"action-type":"delete",title:"Delete Checkin!","action-text":"Delete Checkin",content:e.$t("Are you sure you want to delete the record?")},null,8,["show","close","action","content"]),o(y,{show:i.restoreConf,action:l.restoreItem,title:"Restore Checkin!",close:l.closeRestoreModal,"action-text":"Restore Checkin",content:e.$t("Are you sure you want to restore the record?")},null,8,["show","action","close","content"]),i.loading?(r(),u(z,{key:0})):p("",!0)]),_:1},8,["title"])}const rt=Y(H,[["render",je]]);export{rt as default};