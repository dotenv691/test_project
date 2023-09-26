import{P as b}from"./Pagination-14430ebc.js";import{A as f}from"./AdminLayout-6a4f7366.js";import{T as y}from"./SectionTitle-c234a4ef.js";import{_ as $,r as i,o as n,d as g,e as d,a as t,g as c,h as r,t as s,c as l,i as v,b as m,F as w}from"./app-c16e0624.js";import"./Modal-5cbabd3e.js";import"./DropdownLink-314f7761.js";import"./ApplicationLogo-fff1da4e.js";import"./ApplicationMark-1d436696.js";const x={props:{item:Object,trails:Object},components:{Pagination:b,AdminLayout:f,TecSectionTitle:y},data(){return{loading:!1}},methods:{}},k={class:"px-4 md:px-0"},T={class:"flex items-center"},L=t("span",{class:"text-blue-600 font-medium mx-2"},"/",-1),V=t("span",{class:"font-medium mx-2"},"/",-1),B={class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-y-visible overflow-x-auto"},C={class:"w-full whitespace-nowrap overflow-y-visible"},N={class:"text-left font-bold"},j={class:"px-6 pt-6 pb-4"},P={class:"px-6 pt-6 pb-4"},A={class:"px-6 pt-6 pb-4"},F={class:"px-6 pt-6 pb-4"},H={class:"px-6 pt-6 pb-4"},I={class:"border-t px-6 py-4"},M={class:"capitalize text-gray-500"},O={class:"border-t px-6 py-4"},S=["innerHTML"],W={class:"border-t px-6 py-4"},q={class:"border-t px-6 py-4"},z={key:0},D={key:0},E={class:"border-t px-6 py-4",colspan:"5"};function Q(e,G,a,J,K,R){const p=i("Link"),_=i("tec-section-title"),h=i("pagination"),u=i("admin-layout");return n(),g(u,{title:e.$t("Item Trail")},{default:d(()=>[t("div",k,[c(_,{class:"-mx-4 md:mx-0 mb-6"},{title:d(()=>[t("div",T,[c(p,{class:"text-blue-600 hover:text-blue-700",href:e.route("items.index")},{default:d(()=>[r(s(e.$t("Items")),1)]),_:1},8,["href"]),L,r(" "+s(e.$t("Trail"))+" ",1),V,r(" "+s(e.$t(a.item.name)),1)])]),description:d(()=>[r(s(e.$t("Please review the data in the table below")),1)]),_:1}),t("div",B,[t("table",C,[t("tr",N,[t("th",j,s(e.$t("Created at")),1),t("th",P,s(e.$t("Warehouse")),1),t("th",A,s(e.$t("Variation")),1),t("th",F,s(e.$t("Quantity")),1),t("th",H,s(e.$t("Weight")),1)]),(n(!0),l(w,null,v(a.trails.data,o=>(n(),l("tr",{key:o.id},[t("td",I,[t("div",null,s(e.$datetime(o.created_at)),1),t("div",M,s(o.type)+" ("+s(o.subject_id)+")",1)]),t("td",O,s(e.$t(o.warehouse.name)),1),t("td",{class:"border-t px-6 py-4",innerHTML:o.variation?e.$meta(o.variation.meta):""},null,8,S),t("td",W,s(e.$number(o.quantity))+" "+s(o.unit?o.unit.code:""),1),t("td",q,[o.weight?(n(),l("span",z,s(e.$number(o.weight))+" "+s(e.$settings.weight_unit||""),1)):m("",!0)])]))),128)),a.trails.data.length===0?(n(),l("tr",D,[t("td",E,s(e.$t("There is no data to display.")),1)])):m("",!0)])]),c(h,{class:"mt-6",meta:a.trails.meta,links:a.trails.links},null,8,["meta","links"])])]),_:1},8,["title"])}const at=$(x,[["render",Q]]);export{at as default};
