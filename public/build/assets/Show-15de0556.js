import{A as w}from"./AdminLayout-6a4f7366.js";import{T as g}from"./SectionBorder-4946cc8a.js";import h from"./DeleteUserForm-4c2d5c58.js";import F from"./UpdatePasswordForm-49cf01fa.js";import $ from"./TwoFactorAuthenticationForm-64e0e29c.js";import k from"./UpdateProfileInformationForm-441068b9.js";import y from"./LogoutOtherBrowserSessionsForm-da64b921.js";import{_ as B,r as t,o as r,d as b,e as A,a as p,c as m,g as o,F as a,b as n}from"./app-c16e0624.js";import"./Modal-5cbabd3e.js";import"./DropdownLink-314f7761.js";import"./ApplicationLogo-fff1da4e.js";import"./ApplicationMark-1d436696.js";import"./Input-9dff1bbf.js";import"./InputError-746f9bc4.js";import"./DialogModal-332d0e9d.js";import"./DangerButton-390eea9c.js";import"./ActionSection-ce0a602f.js";import"./SectionTitle-c234a4ef.js";import"./SecondaryButton-98bb4bb4.js";import"./Label-45ee75d5.js";import"./LoadingButton-5082ea01.js";import"./FormSection-e4b782a6.js";import"./ActionMessage-ab1277a4.js";import"./Button-6d7047a8.js";const P={props:["sessions"],components:{AdminLayout:w,DeleteUserForm:h,TecSectionBorder:g,UpdatePasswordForm:F,TwoFactorAuthenticationForm:$,UpdateProfileInformationForm:k,LogoutOtherBrowserSessionsForm:y}};function U(e,j,i,T,v,C){const c=t("update-profile-information-form"),s=t("tec-section-border"),f=t("update-password-form"),_=t("two-factor-authentication-form"),l=t("logout-other-browser-sessions-form"),u=t("delete-user-form"),d=t("admin-layout");return r(),b(d,{title:e.$t("Profile")},{default:A(()=>[p("div",null,[p("div",null,[e.$page.props.jetstream.canUpdateProfileInformation?(r(),m(a,{key:0},[o(c,{user:e.$page.props.user},null,8,["user"]),o(s)],64)):n("",!0),e.$page.props.jetstream.canUpdatePassword?(r(),m(a,{key:1},[o(f,{class:"mt-10 sm:mt-0"}),o(s)],64)):n("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(r(),m(a,{key:2},[o(_,{class:"mt-10 sm:mt-0"}),o(s)],64)):n("",!0),o(l,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(r(),m(a,{key:3},[o(s),o(u,{class:"mt-10 sm:mt-0"})],64)):n("",!0)])])]),_:1},8,["title"])}const eo=B(P,[["render",U]]);export{eo as default};