import{J as v}from"./JsBarcode-434981a2.js";import{M as D}from"./Modal-5cbabd3e.js";import{T as B}from"./TrashedMessage-0596e83d.js";import{T as M}from"./ApplicationLogo-fff1da4e.js";import{_ as P,r as l,o as a,c as i,a as t,g as k,t as e,b as c,d as x,e as w,n as r,F as u,i as p,h as g}from"./app-c16e0624.js";import"./ApplicationMark-1d436696.js";const j={props:{checkout:Object},components:{Modal:D,TrashedMessage:B,TecApplicationLogo:M},data(){return{photo:null,show:!1,loading:!1}},mounted(){v("#barcode",this.checkout.reference,{width:1,margin:0,fontSize:0,height:"20",format:"CODE128"})},updated(){v("#barcode",this.checkout.reference,{width:1,margin:0,fontSize:0,height:"20",format:"CODE128"})},methods:{showPhoto(s){this.show=!0,this.photo="/assets/"+s},hidePhoto(){this.show=!1,this.photo=null}}},L={key:0,class:"mt-auto bg-gray-100 -m-6 py-6 px-4 md:px-6 rounded-md print:bg-white print:mt-0 print:pt-0 print:h-screen print:overflow-visible"},N={class:"bg-white p-4 rounded-md shadow overflow-x-auto print:shadow-none print:pt-0"},V={class:"block sm:flex justify-between print:flex"},q={class:"text-left sm:text-right leading-snug max-w-md print:text-right"},z={class:"font-bold"},E={key:0},F={key:1},O={key:2},S=t("div",{class:"border-b my-4 -mx-4"},null,-1),A={class:"py-4 w-full"},H={class:"text-xl text-center uppercase font-extrabold"},J=t("svg",{id:"barcode",class:"mt-2 mx-auto"},null,-1),I={class:"block sm:flex justify-between print:flex"},Q={class:"w-full sm:w-1/2 leading-snug mb-6 sm:mb-0"},R=t("div",{class:"text-sm font-bold"}," ",-1),W={class:"text-left w-full sm:w-1/2 leading-snug"},G={class:"text-sm font-bold"},K={key:0},U={key:1},X={class:"-mx-4 overflow-x-auto"},Y={class:"w-full mt-8 mb-4",style:{"min-width":"500px"}},Z={class:"px-6 py-2 text-left"},tt={key:0},et={class:"px-6 py-2 w-32 text-right"},st={class:"group-hover:bg-gray-100 border-t px-6 pt-2 font-bold"},ot={class:"flex items-center gap-x-2 gap-y-1"},nt=["src","onClick"],at=t("td",{class:"group-hover:bg-gray-100 border-t px-6 pt-2 w-32 text-right"},null,-1),it={class:"flex items-center gap-x-2 gap-y-1"},ct={key:0,class:"block w-8 h-8 rounded-sm -my-2"},rt=["innerHTML"],dt={key:0},ht={class:"group-hover:bg-gray-100 border-t px-6 py-2"},lt={class:"flex items-center gap-x-2 gap-y-1"},ut=["src","onClick"],gt={key:0},mt={class:"group-hover:bg-gray-100 border-t px-6 py-2 w-32 text-right"},_t={key:2,class:"print:hidden py-4 w-full"},kt={class:"font-medium"},wt={class:"mt-1 text-sm text-gray-900"},pt={role:"list",class:"border border-gray-200 rounded-md divide-y divide-gray-200"},ft={class:"w-0 flex-1 flex items-center"},bt={class:"ml-2 flex-1 w-0 truncate"},yt={class:"ml-4 flex-shrink-0"},vt=["href"],xt={key:3,class:"py-4 w-full"},Ct={class:"mt-auto pt-4 w-full text-center text-sm text-gray-500 hidden print:block"},Tt={class:"print:block print:h-full"},$t=["src"];function Dt(s,f,n,Bt,b,m){const C=l("tec-application-logo"),y=l("trashed-message"),T=l("icons"),$=l("modal");return n.checkout?(a(),i("div",L,[t("div",N,[t("div",V,[k(C,{class:"mb-4 sm:mb-0"}),t("div",q,[t("div",z,e(n.checkout.warehouse.name)+" ("+e(n.checkout.warehouse.code)+")",1),n.checkout.warehouse.address?(a(),i("div",E,e(n.checkout.warehouse.address),1)):c("",!0),n.checkout.warehouse.phone?(a(),i("div",F,e(n.checkout.warehouse.phone),1)):c("",!0),n.checkout.warehouse.email?(a(),i("div",O,e(n.checkout.warehouse.email),1)):c("",!0)])]),S,n.checkout.draft==1?(a(),x(y,{key:0,class:"mb-4 h-12 print:hidden",action:!1,icon:"info"},{default:w(()=>[g(e(s.$t("This record is still a draft.")),1)]),_:1})):c("",!0),n.checkout.deleted_at?(a(),x(y,{key:1,class:"mb-4 h-12 print:hidden",action:!1},{default:w(()=>[g(e(s.$t("This record has been deleted.")),1)]),_:1})):c("",!0),t("div",A,[t("h1",H,e(s.$t("Checkout")),1),J]),t("div",I,[t("div",Q,[R,t("div",null,e(s.$t("Date"))+": "+e(s.$date(n.checkout.date)),1),t("div",null,e(s.$t("Reference"))+": "+e(n.checkout.reference),1),t("div",null,e(s.$t("Created at"))+": "+e(s.$datetime(n.checkout.created_at)),1)]),t("div",W,[t("div",G,e(s.$t("For"))+":",1),t("div",null,e(n.checkout.contact.name),1),n.checkout.contact.phone?(a(),i("div",K,e(n.checkout.contact.phone),1)):c("",!0),n.checkout.contact.email?(a(),i("div",U,e(n.checkout.contact.email),1)):c("",!0)])]),t("div",X,[t("table",Y,[t("tr",null,[t("th",Z,e(s.$t("Item")),1),t("th",{class:r(["px-6 py-2 text-right",s.$settings.track_weight?"w-32":"w-px"])},[s.$settings.track_weight?(a(),i("span",tt,e(s.$t("Weight")),1)):c("",!0)],2),t("th",et,e(s.$t("Quantity")),1)]),(a(!0),i(u,null,p(n.checkout.items,(o,h)=>(a(),i(u,{key:"i_"+o.id},[o.variations.length?(a(),i("tbody",{key:0,class:r(["group avoid",{"bg-gray-50":h%2!=0,"border-b":n.checkout.items.length==h+1}])},[t("tr",null,[t("td",st,[t("div",ot,[o.item.photo?(a(),i("img",{key:0,class:"block w-8 h-8 rounded-sm -my-2",src:"/assets/"+o.item.photo,onClick:d=>m.showPhoto(o.item.photo)},null,8,nt)):c("",!0),g(" "+e(s.$t(o.item.name))+" ("+e(o.item.code)+") ",1)])]),t("td",{class:r(["group-hover:bg-gray-100 border-t px-6 py-2 text-right",s.$settings.track_weight&&o.item.track_weight?"w-32":"w-px"])},null,2),at]),(a(!0),i(u,null,p(o.variations,(d,_)=>(a(),i("tr",{key:"v_"+d.id},[t("td",{class:r([{"pb-2":_+1==o.variations.length},"group-hover:bg-gray-100 px-6 pt-2"])},[t("div",it,[o.item.photo?(a(),i("span",ct)):c("",!0),t("span",{innerHTML:s.$meta(d.meta)},null,8,rt)])],2),t("td",{class:r([{"pb-2":_+1==o.variations.length,"w-32":s.$settings.track_weight&&o.item.track_weight},"group-hover:bg-gray-100 px-6 pt-2 text-right"])},[s.$settings.track_weight&&o.item.track_weight?(a(),i("span",dt,e(s.$number(d.pivot.weight))+" "+e(s.$settings.weight_unit),1)):c("",!0)],2),t("td",{class:r([{"pb-2":_+1==o.variations.length},"group-hover:bg-gray-100 px-6 pt-2 w-32 text-right"])},e(s.$number(d.pivot.quantity))+" "+e(o.unit?o.unit.code:""),3)]))),128))],2)):(a(),i("tr",{key:1,class:r(["group avoid",{"bg-gray-50":h%2!=0,"border-b":n.checkout.items.length==h+1}])},[t("td",ht,[t("div",lt,[o.item.photo?(a(),i("img",{key:0,class:"block w-8 h-8 rounded-sm -my-2",src:"/assets/"+o.item.photo,onClick:d=>m.showPhoto(o.item.photo)},null,8,ut)):c("",!0),g(" "+e(s.$t(o.item.name))+" ("+e(o.item.code)+") ",1)])]),t("td",{class:r(["group-hover:bg-gray-100 border-t px-6 py-2 text-right",s.$settings.track_weight&&o.item.track_weight?"w-32":"w-px"])},[s.$settings.track_weight&&o.item.track_weight?(a(),i("span",gt,e(s.$number(o.weight))+" "+e(s.$settings.weight_unit),1)):c("",!0)],2),t("td",mt,e(s.$number(o.quantity))+" "+e(o.unit?o.unit.code:""),1)],2))],64))),128))])]),n.checkout.attachments&&n.checkout.attachments.length?(a(),i("div",_t,[t("dt",kt,e(s.$t("Attachments")),1),t("dd",wt,[t("ul",pt,[(a(!0),i(u,null,p(n.checkout.attachments,o=>(a(),i("li",{key:o.id,class:"pl-3 pr-4 py-3 flex items-center justify-between text-sm"},[t("div",ft,[k(T,{name:"clip",class:"flex-shrink-0 h-5 w-5 text-gray-400"}),t("span",bt,e(o.title),1)]),t("div",yt,[t("a",{class:"font-medium text-indigo-600 hover:text-indigo-500",href:s.route("media.download",o.id)},e(s.$t("Download")),9,vt)])]))),128))])])])):c("",!0),n.checkout.details?(a(),i("div",xt,e(s.$t(n.checkout.details)),1)):c("",!0)]),t("div",Ct,e(s.$t("This is computer generated document, no signature required.")),1),k($,{show:b.show,"max-width":"2xl",closeable:!0,transparent:!0,onClose:f[0]||(f[0]=o=>m.hidePhoto())},{default:w(()=>[t("div",Tt,[t("img",{class:"block max-w-full mx-auto rounded-md",src:b.photo},null,8,$t)])]),_:1},8,["show"])])):c("",!0)}const qt=P(j,[["render",Dt]]);export{qt as default};
