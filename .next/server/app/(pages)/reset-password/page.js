(()=>{var e={};e.id=6795,e.ids=[6795],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},42707:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>p,routeModule:()=>x,tree:()=>d});var t=r(73137),a=r(54647),o=r(4183),n=r.n(o),i=r(71775),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(s,l);let c=t.AppPageRouteModule,d=["",{children:["(pages)",{children:["reset-password",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,77948)),"C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\src\\app\\(pages)\\reset-password\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.bind(r,45653)),"C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\src\\app\\(pages)\\not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,82645)),"C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\src\\app\\(pages)\\reset-password\\page.tsx"],u="/(pages)/reset-password/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new c({definition:{kind:a.x.APP_PAGE,page:"/(pages)/reset-password/page",pathname:"/reset-password",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},17908:(e,s,r)=>{Promise.resolve().then(r.bind(r,94891))},94891:(e,s,r)=>{"use strict";r.r(s),r.d(s,{ResetPasswordForm:()=>m});var t=r(60080),a=r(9885),o=r(66558),n=r(57114),i=r(39496),l=r(92672),c=r(42655),d=r(8693),p=r(21469),u=r.n(p);let m=()=>{let[e,s]=(0,a.useState)(""),{login:r}=(0,d.a)(),p=(0,n.useRouter)(),m=(0,n.useSearchParams)(),x=m.get("token"),{register:w,handleSubmit:_,formState:{errors:g},reset:h}=(0,o.cI)(),f=(0,a.useCallback)(async e=>{let t=await fetch("http://localhost:3000/api/users/reset-password",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});if(t.ok){let s=await t.json();await r({email:s.user.email,password:e.password}),p.push("/account?success=Password reset successfully.")}else s("There was a problem while resetting your password. Please try again later.")},[p,r]);return(0,a.useEffect)(()=>{h({token:x||void 0})},[h,x]),(0,t.jsxs)("form",{onSubmit:_(f),className:u().form,children:[t.jsx(c.v,{error:e,className:u().message}),t.jsx(l.I,{name:"password",type:"password",label:"New Password",required:!0,register:w,error:g.password}),t.jsx("input",{type:"hidden",...w("token")}),t.jsx(i.Button,{type:"submit",appearance:"primary",label:"Reset Password",className:u().submit})]})}},42655:(e,s,r)=>{"use strict";r.d(s,{v:()=>n});var t=r(60080);r(9885);var a=r(8514),o=r.n(a);let n=({message:e,error:s,success:r,warning:a,className:n})=>{let i=e||s||r||a;return i?t.jsx("div",{className:[o().message,n,s&&o().error,r&&o().success,a&&o().warning,!s&&!r&&!a&&o().default].filter(Boolean).join(" "),children:i}):null}},21469:e=>{e.exports={form:"ResetPasswordForm_form__ZHMfG",submit:"ResetPasswordForm_submit__0pJuk"},e.exports.__checksum="a5278b2839cd"},70766:e=>{e.exports={resetPassword:"reset-password_resetPassword__vCsIM"},e.exports.__checksum="de4f2e560259"},8514:e=>{e.exports={message:"Message_message__z1tdG",default:"Message_default__RDDb4",warning:"Message_warning__FT9n8",error:"Message_error__WX2fA",success:"Message_success__Cnnxv"},e.exports.__checksum="21e7800cf184"},77948:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>m,metadata:()=>x});var t=r(48144);r(53830);var a=r(53205),o=r(62208),n=r(17536);let i=(0,n.createProxy)(String.raw`C:\Users\eslam\OneDrive\سطح المكتب\cv\full-stack-e-commerce-with-next-14\src\app\(pages)\reset-password\ResetPasswordForm\index.tsx`),{__esModule:l,$$typeof:c}=i;i.default;let d=i.ResetPasswordForm;var p=r(70766),u=r.n(p);async function m(){return(0,t.jsxs)(a.T,{className:u().resetPassword,children:[t.jsx("h1",{children:"Reset Password"}),t.jsx("p",{children:"Please enter a new password below."}),t.jsx(d,{})]})}let x={title:"Reset Password",description:"Enter a new password.",openGraph:(0,o.T)({title:"Reset Password",url:"/reset-password"})}}};var s=require("../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[4650,2560,6724,6558,1840,8667,5072,2672],()=>r(42707));module.exports=t})();