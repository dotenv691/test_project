import{T as _}from"./Input-9dff1bbf.js";import{T as w}from"./Label-45ee75d5.js";import{L as b}from"./LoadingButton-5082ea01.js";import{T as g}from"./ValidationErrors-7b2fb9d3.js";import{T as h}from"./AuthenticationCard-eff8a7f3.js";import{J as v}from"./AuthenticationCardLogo-fcccf451.js";import{_ as V,r as a,o as T,d as k,e as m,g as o,a as n,h as y,t as L,w as C}from"./app-c16e0624.js";import"./ApplicationMark-1d436696.js";const P={components:{TecInput:_,TecLabel:w,LoadingButton:b,TecValidationErrors:g,TecAuthenticationCard:h,TecAuthenticationCardLogo:v},props:{email:String,token:String},data(){return{form:this.$inertia.form({token:this.token,email:this.email,password:"",password_confirmation:""})}},created(){document.title=this.$t("Reset Password")+" • "+this.$settings.name},mounted(){document.body.classList.add("spinner-normal")},unmounted(){document.body.classList.remove("spinner-normal")},methods:{submit(){this.form.post(this.route("password.update"),{onFinish:()=>this.form.reset("password","password_confirmation")})}}},B={class:"mt-4"},S={class:"mt-4"},q={class:"flex items-center justify-end mt-4"};function A(r,t,N,R,e,d){const u=a("tec-authentication-card-logo"),c=a("tec-validation-errors"),i=a("tec-label"),l=a("tec-input"),p=a("loading-button"),f=a("tec-authentication-card");return T(),k(f,null,{logo:m(()=>[o(u)]),default:m(()=>[o(c,{class:"mb-4"}),n("form",{onSubmit:t[3]||(t[3]=C((...s)=>d.submit&&d.submit(...s),["prevent"]))},[n("div",null,[o(i,{for:"email",value:r.$t("Email")},null,8,["value"]),o(l,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":t[0]||(t[0]=s=>e.form.email=s),required:"",autofocus:""},null,8,["modelValue"])]),n("div",B,[o(i,{for:"password",value:r.$t("Password")},null,8,["value"]),o(l,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e.form.password,"onUpdate:modelValue":t[1]||(t[1]=s=>e.form.password=s),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),n("div",S,[o(i,{for:"password_confirmation",value:r.$t("Confirm Password")},null,8,["value"]),o(l,{required:"",type:"password",class:"mt-1 block w-full",id:"password_confirmation",autocomplete:"new-password",modelValue:e.form.password_confirmation,"onUpdate:modelValue":t[2]||(t[2]=s=>e.form.password_confirmation=s)},null,8,["modelValue"])]),n("div",q,[o(p,{type:"submit",class:"block w-full",loading:e.form.processing,disabled:e.form.processing},{default:m(()=>[y(L(r.$t("Reset Password")),1)]),_:1},8,["loading","disabled"])])],32)]),_:1})}const M=V(P,[["render",A]]);export{M as default};
