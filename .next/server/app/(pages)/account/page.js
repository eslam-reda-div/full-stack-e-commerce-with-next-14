(()=>{var e={};e.id=2524,e.ids=[2524],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},79417:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>d,routeModule:()=>g,tree:()=>u});var t=r(73137),a=r(54647),n=r(4183),o=r.n(n),c=r(71775),i={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>c[e]);r.d(s,i);let l=t.AppPageRouteModule,u=["",{children:["(pages)",{children:["account",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,92592)),"C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\src\\app\\(pages)\\account\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,12587)),"C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\src\\app\\(pages)\\account\\layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(r.bind(r,45653)),"C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\src\\app\\(pages)\\not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,82645)),"C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\src\\app\\(pages)\\account\\page.tsx"],p="/(pages)/account/page",m={require:r,loadChunk:()=>Promise.resolve()},g=new l({definition:{kind:a.x.APP_PAGE,page:"/(pages)/account/page",pathname:"/account",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},7831:(e,s,r)=>{Promise.resolve().then(r.bind(r,71821))},71821:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>m});var t=r(60080),a=r(9885),n=r(66558),o=r(57114),c=r(39496),i=r(92672),l=r(42655),u=r(8693),d=r(99117),p=r.n(d);let m=()=>{let[e,s]=(0,a.useState)(""),[r,d]=(0,a.useState)(""),{user:m,setUser:g}=(0,u.a)(),[x,h]=(0,a.useState)(!1),{register:f,handleSubmit:_,formState:{errors:w,isLoading:v},reset:b,watch:y}=(0,n.cI)(),P=(0,a.useRef)({});P.current=y("password","");let j=(0,o.useRouter)(),C=(0,a.useCallback)(async e=>{if(m){let r=await fetch(`http://localhost:3000/api/users/${m.id}`,{credentials:"include",method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});if(r.ok){let e=await r.json();g(e.doc),d("Successfully updated account."),s(""),h(!1),b({email:e.doc.email,name:e.doc.name,phone:e.doc.phone,password:"",passwordConfirm:""})}else s("There was a problem updating your account.")}},[m,g,b]);return(0,a.useEffect)(()=>{null===m&&j.push(`/login?error=${encodeURIComponent("You must be logged in to view this page.")}&redirect=${encodeURIComponent("/account")}`),m&&b({email:m.email,name:m.name,phone:m.phone,password:"",passwordConfirm:""})},[m,j,b,x]),(0,t.jsxs)("form",{onSubmit:_(C),className:p().form,children:[t.jsx(l.v,{error:e,success:r,className:p().message}),x?(0,t.jsxs)(a.Fragment,{children:[(0,t.jsxs)("p",{children:["Change your password below, or ",t.jsx("button",{type:"button",className:p().changePassword,onClick:()=>h(!x),children:"cancel"}),"."]}),t.jsx(i.I,{name:"password",type:"password",label:"Password",required:!0,register:f,error:w.password}),t.jsx(i.I,{name:"passwordConfirm",type:"password",label:"Confirm Password",required:!0,register:f,validate:e=>e===P.current||"The passwords do not match",error:w.passwordConfirm})]}):(0,t.jsxs)(a.Fragment,{children:[t.jsx(i.I,{name:"email",label:"Email Address",required:!0,register:f,error:w.email,type:"email"}),t.jsx(i.I,{name:"name",label:"Name",register:f,error:w.name}),t.jsx(i.I,{name:"phone",label:"Phone number",register:f,error:w.phone}),(0,t.jsxs)("p",{children:["Change your account details below, or ",t.jsx("button",{type:"button",className:p().changePassword,onClick:()=>h(!x),children:"click here"})," to change your password."]})]}),t.jsx(c.Button,{type:"submit",label:v?"Processing":x?"Change Password":"Update Account",disabled:v,appearance:"primary",className:p().submit})]})}},42655:(e,s,r)=>{"use strict";r.d(s,{v:()=>o});var t=r(60080);r(9885);var a=r(8514),n=r.n(a);let o=({message:e,error:s,success:r,warning:a,className:o})=>{let c=e||s||r||a;return c?t.jsx("div",{className:[n().message,o,s&&n().error,r&&n().success,a&&n().warning,!s&&!r&&!a&&n().default].filter(Boolean).join(" "),children:c}):null}},99117:e=>{e.exports={form:"AccountForm_form__lSVWE",changePassword:"AccountForm_changePassword__92rDX",submit:"AccountForm_submit__sVozx"},e.exports.__checksum="c6acafd35efe"},8514:e=>{e.exports={message:"Message_message__z1tdG",default:"Message_default__RDDb4",warning:"Message_warning__FT9n8",error:"Message_error__WX2fA",success:"Message_success__Cnnxv"},e.exports.__checksum="21e7800cf184"},92592:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>p,metadata:()=>m});var t=r(48144);r(53830);var a=r(62208),n=r(17536);let o=(0,n.createProxy)(String.raw`C:\Users\eslam\OneDrive\سطح المكتب\cv\full-stack-e-commerce-with-next-14\src\app\(pages)\account\AccountForm\index.tsx`),{__esModule:c,$$typeof:i}=o,l=o.default;var u=r(29472),d=r.n(u);async function p(){return(0,t.jsxs)("div",{children:[t.jsx("h5",{className:d().personalInfo,children:"Personal Information"}),t.jsx(l,{})]})}let m={title:"Account",description:"Create an account or log in to your existing account.",openGraph:(0,a.T)({title:"Account",url:"/account"})}}};var s=require("../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[4650,2560,6724,9928,6558,1840,8667,2672,7344],()=>r(79417));module.exports=t})();