import{L as g}from"./LoadingButton-5082ea01.js";import{T as h}from"./AuthenticationCard-eff8a7f3.js";import{J as p}from"./AuthenticationCardLogo-fcccf451.js";import{_ as b,r as t,o as r,d as y,e,g as i,c as k,b as v,a as n,h as c,w}from"./app-c16e0624.js";import"./ApplicationMark-1d436696.js";const x={components:{LoadingButton:g,TecAuthenticationCard:h,TecAuthenticationCardLogo:p},props:{status:String},data(){return{form:this.$inertia.form()}},methods:{submit(){this.form.post(this.route("verification.send"))}},computed:{verificationLinkSent(){return this.status==="verification-link-sent"}}},L=n("div",{class:"mb-4 text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),B={key:0,class:"mb-4 font-medium text-green-600"},C={class:"mt-4 flex items-center justify-between"};function V(d,a,T,A,s,o){const u=t("tec-authentication-card-logo"),l=t("loading-button"),m=t("Link"),f=t("tec-authentication-card");return r(),y(f,null,{logo:e(()=>[i(u)]),default:e(()=>[L,o.verificationLinkSent?(r(),k("div",B," A new verification link has been sent to the email address you provided during registration. ")):v("",!0),n("form",{onSubmit:a[0]||(a[0]=w((..._)=>o.submit&&o.submit(..._),["prevent"]))},[n("div",C,[i(l,{type:"submit",class:"block w-full",loading:s.form.processing,disabled:s.form.processing},{default:e(()=>[c(" Resend Verification Email ")]),_:1},8,["loading","disabled"]),i(m,{href:d.route("logout"),method:"post",as:"button",class:"underline text-gray-600 hover:text-gray-900"},{default:e(()=>[c("Log Out")]),_:1},8,["href"])])],32)]),_:1})}const I=b(x,[["render",V]]);export{I as default};
