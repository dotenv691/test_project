import{M as j}from"./Modal-5cbabd3e.js";import{T as $}from"./Button-6d7047a8.js";import A from"./Form-10ee85f7.js";import{P as B}from"./Pagination-14430ebc.js";import{A as L}from"./AdminLayout-6a4f7366.js";import N from"./Details-1701606f.js";import{T as V}from"./SectionTitle-c234a4ef.js";import{_ as P,r as n,o as i,d as h,e as u,a as e,g as r,h as _,t as s,m as S,p as M,T as O,c as f,i as R,n as g,b as p,F as z}from"./app-c16e0624.js";import"./CheckBox-b437c819.js";import"./Checkbox-f8ba773c.js";import"./InputError-746f9bc4.js";import"./v4-a960c1f4.js";import"./TextInput-42ab1c57.js";import"./Label-45ee75d5.js";import"./Input-9dff1bbf.js";import"./SelectInput-f0f8ca8e.js";import"./AutoComplete-b978c1ce.js";import"./throttle-0066c8c9.js";import"./LoadingButton-5082ea01.js";import"./DropdownLink-314f7761.js";import"./ApplicationLogo-fff1da4e.js";import"./ApplicationMark-1d436696.js";import"./JsBarcode-434981a2.js";import"./TrashedMessage-0596e83d.js";const E={components:{Modal:j,TecButton:$,ReportForm:A,Pagination:B,AdminLayout:L,CheckinDetails:N,TecSectionTitle:V},props:{filters:Object,checkins:Object,contacts:Array,users:Array,categories:Array,warehouses:Array},data(){return{checkin:null,details:!1,showForm:!1,loading:!1}},methods:{toggleForm(){this.showForm=!this.showForm},goto(t){this.checkin&&this.checkin.id==t?this.details=!0:(this.loading=!0,axios.get(route("checkins.show",t)+"?json=yes").then(c=>{this.checkin=c.data,this.details=!0,this.loading=!1}))},showDetails(){this.details=!1},hideDetails(){this.details=!1},print(){window.print()}}},U={class:"px-4 md:px-0"},W={class:"flex items-start justify-between"},q={class:"hidden lg:inline"},G={class:"w-full print:hidden"},H={class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto"},I={class:"w-full whitespace-nowrap"},J={class:"text-left font-bold"},K={class:"px-6 pt-6 pb-4"},Q={class:"px-6 pt-6 pb-4"},X={class:"px-6 pt-6 pb-4"},Y=["onClick"],Z={class:"px-6 py-4 flex items-center focus:text-indigo-500"},ee={class:"flex items-center"},te=["onClick"],se={class:"px-6 py-4"},oe={class:"flex items-center"},ie={class:"text-gray-500 mr-1"},ne={class:"flex items-center"},re={class:"text-gray-500 mr-1"},ae={class:"flex items-center"},ce={class:"text-gray-500 mr-1"},le=["onClick"],de={class:"px-6 py-4 flex items-center"},me={class:"w-full whitespace-normal line-clamp-3"},he={key:0},ue={class:"border-t px-6 py-4",colspan:"3"},_e={class:"px-6 py-4 print:px-0"},pe={key:0,class:"flex items-center justify-between print:hidden"},fe={class:"text-lg"},ge={class:"hidden sm:inline"},ke={class:"-mr-2 flex items-center"},ye={class:"mt-4 print-mt-0"};function we(t,c,l,ve,a,d){const y=n("tec-section-title"),m=n("icons"),w=n("tec-button"),v=n("report-form"),x=n("pagination"),b=n("Link"),C=n("checkin-details"),D=n("modal"),F=n("loading"),T=n("admin-layout");return i(),h(T,{title:t.$t("x_report",{x:t.$t("Checkin")})},{default:u(()=>[e("div",U,[e("div",W,[r(y,{class:"-mx-4 md:mx-0 mb-6"},{title:u(()=>[_(s(t.$t("x_report",{x:t.$t("Checkin")})),1)]),description:u(()=>[_(s(t.$t("Please review the report below")),1)]),_:1}),r(w,{type:"button",onClick:c[0]||(c[0]=o=>d.toggleForm())},{default:u(()=>[e("span",null,[r(m,{name:"toggle",class:"w-5 h-5 lg:mr-2"})]),e("span",q,s(t.$t("toggle_x",{x:t.$t("Form")})),1)]),_:1})]),r(O,{name:"slidedown"},{default:u(()=>[S(e("div",G,[r(v,{type:"checkin",users:l.users,contacts:l.contacts,categories:l.categories,warehouses:l.warehouses,action:t.route("reports.checkin")},null,8,["users","contacts","categories","warehouses","action"])],512),[[M,a.showForm]])]),_:1}),e("div",H,[e("table",I,[e("tr",J,[e("th",K,s(t.$t("Checkin")),1),e("th",Q,s(t.$t("Relations")),1),e("th",X,s(t.$t("Details")),1)]),(i(!0),f(z,null,R(l.checkins.data,(o,xe)=>(i(),f("tr",{key:o.id,class:"hover:bg-gray-100 focus-within:bg-gray-100"},[e("td",{class:g(["border-t",{"cursor-pointer":t.$can("read-checkins")}]),onClick:k=>d.goto(o.id)},[e("div",Z,[e("div",null,[e("div",null,s(o.reference),1),e("div",null,s(t.$date(o.date)),1),e("div",ee,[_(s(t.$t("Draft"))+": ",1),o.draft==1?(i(),h(m,{key:0,name:"tick",class:"text-green-600 mx-auto"})):(i(),h(m,{key:1,name:"cross",class:"text-red-600 mx-auto"}))])]),o.deleted_at?(i(),h(m,{key:0,name:"trash",class:"shrink-0 w-4 h-4 text-red-500 ml-2"})):p("",!0)])],10,Y),e("td",{class:g(["border-t",{"cursor-pointer":t.$can("read-checkins")}]),onClick:k=>d.goto(o.id)},[e("div",se,[e("div",oe,[e("div",ie,s(t.$t("Contact"))+":",1),_(" "+s(o.contact.name),1)]),e("div",ne,[e("div",re,s(t.$t("Warehouse"))+":",1),_(" "+s(o.warehouse.name),1)]),e("div",ae,[e("div",ce,s(t.$t("User"))+":",1),_(" "+s(o.user.name),1)])])],10,te),e("td",{class:g(["border-t max-w-lg min-w-56",{"cursor-pointer":t.$can("read-checkins")}]),onClick:k=>d.goto(o.id)},[e("div",de,[e("div",me,s(o.details),1)])],10,le)]))),128)),l.checkins.data.length===0?(i(),f("tr",he,[e("td",ue,s(t.$t("There is no data to display.")),1)])):p("",!0)])]),r(x,{class:"mt-6",meta:l.checkins.meta,links:l.checkins.links},null,8,["meta","links"])]),r(D,{show:a.details,"max-width":"4xl",closeable:!0,onClose:d.hideDetails},{default:u(()=>[e("div",_e,[a.details&&a.checkin?(i(),f("div",pe,[e("div",fe,[_(s(t.$t("Checkin Details"))+" ",1),e("span",ge,"("+s(a.checkin.reference)+")",1)]),e("div",ke,[e("button",{onClick:c[1]||(c[1]=o=>d.print()),class:"flex items-center justify-center mr-2 h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 focus:outline-none"},[r(m,{name:"printer",class:"h-5 w-5"})]),t.$can("update-checkins")?(i(),h(b,{key:0,href:t.route("checkins.edit",a.checkin.id),class:"flex items-center justify-center mr-2 h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 focus:outline-none"},{default:u(()=>[r(m,{name:"edit",class:"h-5 w-5"})]),_:1},8,["href"])):p("",!0),e("button",{onClick:c[2]||(c[2]=o=>d.hideDetails()),class:"flex items-center justify-center h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 focus:outline-none"},[r(m,{name:"cross",class:"h-5 w-5"})])])])):p("",!0),e("div",ye,[a.checkin?(i(),h(C,{key:0,checkin:a.checkin},null,8,["checkin"])):p("",!0)])])]),_:1},8,["show","onClose"]),a.loading?(i(),h(F,{key:0})):p("",!0)]),_:1},8,["title"])}const Ie=P(E,[["render",we]]);export{Ie as default};