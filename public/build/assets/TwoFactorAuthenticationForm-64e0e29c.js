import{T as v}from"./Button-6d7047a8.js";import{T as P}from"./DangerButton-390eea9c.js";import{T as S}from"./ActionSection-ce0a602f.js";import{T as R}from"./Input-9dff1bbf.js";import{T as j}from"./InputError-746f9bc4.js";import{T as A}from"./DialogModal-332d0e9d.js";import{T}from"./SecondaryButton-98bb4bb4.js";import{_ as k,r as l,o as n,c as d,a as c,f as B,g as a,e as t,h as i,t as s,q as x,n as b,d as _,b as m,F as E,i as M}from"./app-c16e0624.js";import"./SectionTitle-c234a4ef.js";import"./Modal-5cbabd3e.js";const q={emits:["confirmed"],props:{title:{default:"Confirm Password"},content:{default:"For your security, please confirm your password to continue."},button:{default:"Confirm"}},components:{JetButton:v,JetDialogModal:A,JetInput:R,JetInputError:j,JetSecondaryButton:T},data(){return{confirmingPassword:!1,form:{password:"",error:""}}},methods:{startConfirmingPassword(){axios.get(route("password.confirmation")).then(e=>{e.data.confirmed?this.$emit("confirmed"):(this.confirmingPassword=!0,setTimeout(()=>this.$refs.password.focus(),250))})},confirmPassword(){this.form.processing=!0,axios.post(route("password.confirm"),{password:this.form.password}).then(()=>{this.form.processing=!1,this.closeModal(),this.$nextTick(()=>this.$emit("confirmed"))}).catch(e=>{this.form.processing=!1,this.form.error=e.response.data.errors.password[0],this.$refs.password.focus()})},closeModal(){this.confirmingPassword=!1,this.form.password="",this.form.error=""}}},V={class:"mt-4"};function D(e,p,w,F,o,r){const y=l("jet-input"),u=l("jet-input-error"),f=l("jet-secondary-button"),g=l("jet-button"),C=l("jet-dialog-modal");return n(),d("span",null,[c("span",{onClick:p[0]||(p[0]=(...h)=>r.startConfirmingPassword&&r.startConfirmingPassword(...h))},[B(e.$slots,"default")]),a(C,{show:o.confirmingPassword,onClose:r.closeModal},{title:t(()=>[i(s(w.title),1)]),content:t(()=>[i(s(w.content)+" ",1),c("div",V,[a(y,{ref:"password",type:"password",class:"mt-1 block w-3/4",placeholder:"Password",modelValue:o.form.password,"onUpdate:modelValue":p[1]||(p[1]=h=>o.form.password=h),onKeyup:x(r.confirmPassword,["enter"])},null,8,["modelValue","onKeyup"]),a(u,{message:o.form.error,class:"mt-2"},null,8,["message"])])]),footer:t(()=>[a(f,{onClick:r.closeModal},{default:t(()=>[i(" Cancel ")]),_:1},8,["onClick"]),a(g,{class:b(["ml-2",{"opacity-25":o.form.processing}]),onClick:r.confirmPassword,disabled:o.form.processing},{default:t(()=>[i(s(w.button),1)]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show","onClose"])])}const J=k(q,[["render",D]]),Q={components:{TecButton:v,TecDangerButton:P,TecActionSection:S,TecConfirmsPassword:J,TecSecondaryButton:T},data(){return{enabling:!1,disabling:!1,qrCode:null,recoveryCodes:[]}},methods:{enableTwoFactorAuthentication(){this.enabling=!0,this.$inertia.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:()=>Promise.all([this.showQrCode(),this.showRecoveryCodes()]),onFinish:()=>this.enabling=!1})},showQrCode(){return axios.get("/user/two-factor-qr-code").then(e=>{this.qrCode=e.data.svg})},showRecoveryCodes(){return axios.get("/user/two-factor-recovery-codes").then(e=>{this.recoveryCodes=e.data})},regenerateRecoveryCodes(){axios.post("/user/two-factor-recovery-codes").then(e=>{this.showRecoveryCodes()})},disableTwoFactorAuthentication(){this.disabling=!0,this.$inertia.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:()=>this.disabling=!1})}},computed:{twoFactorEnabled(){return!this.enabling&&this.$page.props.user.two_factor_enabled}}},I={key:0,class:"text-lg font-medium text-gray-900"},N={key:1,class:"text-lg font-medium text-gray-900"},K={class:"mt-3 text-gray-600"},L={key:2},Y={key:0},H={class:"mt-4 text-gray-600"},z={class:"font-semibold"},G=["innerHTML"],U={key:1},W={class:"mt-4 text-gray-600"},O={class:"font-semibold"},X={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono bg-gray-100 rounded-lg"},Z={class:"mt-5"},$={key:0},ee={key:1};function oe(e,p,w,F,o,r){const y=l("tec-button"),u=l("tec-confirms-password"),f=l("tec-secondary-button"),g=l("tec-danger-button"),C=l("tec-action-section");return n(),_(C,null,{title:t(()=>[i(s(e.$t("Two Factor Authentication")),1)]),description:t(()=>[i(s(e.$t("Add additional security to your account using two factor authentication.")),1)]),content:t(()=>[r.twoFactorEnabled?(n(),d("h3",I,s(e.$t("You have enabled two factor authentication.")),1)):(n(),d("h3",N,s(e.$t("You have not enabled two factor authentication.")),1)),c("div",K,[c("p",null,s(e.$t("When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.")),1)]),r.twoFactorEnabled?(n(),d("div",L,[o.qrCode?(n(),d("div",Y,[c("div",H,[c("p",z,s(e.$t("Two factor authentication is enabled. Scan the following QR code using your phone's authenticator application.")),1)]),c("div",{class:"mt-4 dark:p-4 dark:w-56 dark:bg-white",innerHTML:o.qrCode},null,8,G)])):m("",!0),o.recoveryCodes.length>0?(n(),d("div",U,[c("div",W,[c("p",O,s(e.$t("Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.")),1)]),c("div",X,[(n(!0),d(E,null,M(o.recoveryCodes,h=>(n(),d("div",{key:h},s(h),1))),128))])])):m("",!0)])):m("",!0),c("div",Z,[r.twoFactorEnabled?(n(),d("div",ee,[a(u,{onConfirmed:r.showQrCode},{default:t(()=>[o.qrCode?m("",!0):(n(),_(f,{key:0,class:"mr-3"},{default:t(()=>[i(s(e.$t("Show QRCode")),1)]),_:1}))]),_:1},8,["onConfirmed"]),a(u,{onConfirmed:r.showRecoveryCodes},{default:t(()=>[o.recoveryCodes.length?m("",!0):(n(),_(f,{key:0,class:"mr-3"},{default:t(()=>[i(s(e.$t("Show Recovery Codes")),1)]),_:1}))]),_:1},8,["onConfirmed"]),a(u,{onConfirmed:r.regenerateRecoveryCodes},{default:t(()=>[o.recoveryCodes.length>0?(n(),_(f,{key:0,class:"mr-3"},{default:t(()=>[i(s(e.$t("Regenerate Recovery Codes")),1)]),_:1})):m("",!0)]),_:1},8,["onConfirmed"]),a(u,{onConfirmed:r.showRecoveryCodes},{default:t(()=>[o.recoveryCodes.data&&o.recoveryCodes.data.length===0?(n(),_(f,{key:0,class:"mr-3"},{default:t(()=>[i(s(e.$t("Show Recovery Codes")),1)]),_:1})):m("",!0)]),_:1},8,["onConfirmed"]),a(u,{onConfirmed:r.disableTwoFactorAuthentication},{default:t(()=>[a(g,{class:b({"opacity-25":o.disabling}),disabled:o.disabling},{default:t(()=>[i(s(e.$t("Disable")),1)]),_:1},8,["class","disabled"])]),_:1},8,["onConfirmed"])])):(n(),d("div",$,[a(u,{onConfirmed:r.enableTwoFactorAuthentication},{default:t(()=>[a(y,{type:"button",class:b({"opacity-25":o.enabling}),disabled:o.enabling},{default:t(()=>[i(s(e.$t("Enable")),1)]),_:1},8,["class","disabled"])]),_:1},8,["onConfirmed"])]))])]),_:1})}const me=k(Q,[["render",oe]]);export{me as default};
