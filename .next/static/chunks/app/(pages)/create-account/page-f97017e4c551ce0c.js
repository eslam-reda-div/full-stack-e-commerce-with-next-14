(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[784],{5432:function(e,r,t){Promise.resolve().then(t.t.bind(t,6964,23)),Promise.resolve().then(t.t.bind(t,4724,23)),Promise.resolve().then(t.t.bind(t,3388,23)),Promise.resolve().then(t.bind(t,4578)),Promise.resolve().then(t.bind(t,8277)),Promise.resolve().then(t.t.bind(t,7871,23))},3388:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{suspense:function(){return a},NoSSR:function(){return o}}),t(1024),t(2265);let n=t(4922);function a(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function o(e){let{children:r}=e;return r}},8277:function(e,r,t){"use strict";t.r(r);var n=t(7437),a=t(2265),o=t(1865),s=t(1396),i=t.n(s),l=t(4033),c=t(4780),u=t(6399),d=t(1752),p=t(7992),m=t(3745),h=t.n(m);r.default=()=>{let e=(0,l.useSearchParams)(),r=e.toString()?"?".concat(e.toString()):"",{login:t}=(0,p.a)(),s=(0,l.useRouter)(),[m,_]=(0,a.useState)(!1),[f,g]=(0,a.useState)(null),{register:w,handleSubmit:v,formState:{errors:b},watch:y}=(0,o.cI)(),x=(0,a.useRef)({});x.current=y("password","");let j=(0,a.useCallback)(async r=>{let n=await fetch("".concat("http://localhost:3000","/api/users"),{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});if(!n.ok){let e=n.statusText||"There was an error creating the account.";g(e);return}let a=e.get("redirect"),o=setTimeout(()=>{_(!0)},1e3);try{await t(r),clearTimeout(o),a?s.push(a):s.push("/"),window.location.href="/"}catch(e){clearTimeout(o),g("There was an error with the credentials provided. Please try again.")}},[t,s,e]);return(0,n.jsxs)("form",{onSubmit:v(j),className:h().form,children:[(0,n.jsxs)("p",{children:["This is where new customers can signup and create a new account. To manage all users, ",(0,n.jsx)(i(),{href:"/admin/collections/users",children:"login to the admin dashboard"}),"."]}),(0,n.jsx)(d.v,{error:f,className:h().message}),(0,n.jsx)(u.I,{name:"name",label:"Full name",required:!0,register:w,error:b.name,type:"text"}),(0,n.jsx)(u.I,{name:"email",label:"Email Address",required:!0,register:w,error:b.email,type:"email"}),(0,n.jsx)(u.I,{name:"phone",label:"Phone number",required:!0,register:w,error:b.phone,type:"text"}),(0,n.jsx)(u.I,{name:"password",type:"password",label:"Password",required:!0,register:w,error:b.password}),(0,n.jsx)(u.I,{name:"passwordConfirm",type:"password",label:"Confirm Password",required:!0,register:w,validate:e=>e===x.current||"The passwords do not match",error:b.passwordConfirm}),(0,n.jsx)(c.Button,{type:"submit",label:m?"Processing":"Sign up",disabled:m,appearance:"primary",className:h().submit}),(0,n.jsxs)("div",{children:["Already have an account? ",(0,n.jsx)(i(),{href:"/login".concat(r),children:"Login"})]})]})}},4780:function(e,r,t){"use strict";t.r(r),t.d(r,{Button:function(){return l}});var n=t(7437);t(2265);var a=t(1396),o=t.n(a),s=t(7636),i=t.n(s);let l=e=>{let{el:r="link",label:t,newTab:a,href:s,appearance:l,className:c,onClick:u,type:d="button",disabled:p,invert:m,children:h}=e,_=r,f=a?{target:"_blank",rel:"noopener noreferrer"}:{},g=[i().button,c,i()["appearance--".concat(l)],m&&i()["".concat(l,"--invert")]].filter(Boolean).join(" "),w=(0,n.jsxs)("div",{className:i().content,children:[(0,n.jsx)("span",{className:i().label,children:t}),h]});if((u||"submit"===d)&&(_="button"),"link"===_)return(0,n.jsx)(o(),{href:s||"",className:g,...f,onClick:u,children:w});let v=_;return(0,n.jsx)(v,{href:s,className:g,type:d,...f,onClick:u,disabled:p,children:w})}},6399:function(e,r,t){"use strict";t.d(r,{I:function(){return s}});var n=t(7437);t(2265);var a=t(1577),o=t.n(a);let s=e=>{let{name:r,label:t,required:a,register:s,error:i,type:l="text",validate:c,disabled:u}=e;return(0,n.jsxs)("div",{className:o().inputWrap,children:[(0,n.jsxs)("label",{htmlFor:"name",className:o().label,children:[t,a?(0,n.jsx)("span",{className:o().asterisk,children:"\xa0*"}):""]}),(0,n.jsx)("input",{className:[o().input,i&&o().error].filter(Boolean).join(" "),type:l,...s(r,{required:a,validate:c,..."email"===l?{pattern:{value:/\S+@\S+\.\S+/,message:"Please enter a valid email"}}:{}}),disabled:u}),i&&(0,n.jsx)("div",{className:o().errorMessage,children:(null==i?void 0:i.message)||(null==i?void 0:i.type)!=="required"?null==i?void 0:i.message:"This field is required"})]})}},1752:function(e,r,t){"use strict";t.d(r,{v:function(){return s}});var n=t(7437);t(2265);var a=t(4690),o=t.n(a);let s=e=>{let{message:r,error:t,success:a,warning:s,className:i}=e,l=r||t||a||s;return l?(0,n.jsx)("div",{className:[o().message,i,t&&o().error,a&&o().success,s&&o().warning,!t&&!a&&!s&&o().default].filter(Boolean).join(" "),children:l}):null}},4578:function(e,r,t){"use strict";t.r(r),t.d(r,{RenderParamsComponent:function(){return c}});var n=t(7437),a=t(2265),o=t(4033),s=t(1752),i=t(6506),l=t.n(i);let c=e=>{let{params:r=["error","warning","success","message"],className:t,onParams:i}=e,c=(0,o.useSearchParams)(),u=r.map(e=>null==c?void 0:c.get(e));return((0,a.useEffect)(()=>{u.length&&i&&i(u)},[u,i]),u.length)?(0,n.jsx)("div",{className:t,children:u.map((e,t)=>e?(0,n.jsx)(s.v,{className:l().renderParams,[r[t]]:e},e):null)}):null}},7992:function(e,r,t){"use strict";t.d(r,{H:function(){return s},a:function(){return i}});var n=t(7437),a=t(2265);let o=(0,a.createContext)({}),s=e=>{let{children:r}=e,[t,s]=(0,a.useState)(),[i,l]=(0,a.useState)(),c=(0,a.useCallback)(async e=>{try{let t=await fetch("".concat("http://localhost:3000","/api/users/create"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password,passwordConfirm:e.passwordConfirm})});if(t.ok){var r;let{data:e,errors:n}=await t.json();if(n)throw Error(n[0].message);s(null==e?void 0:null===(r=e.loginUser)||void 0===r?void 0:r.user),l("loggedIn")}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),u=(0,a.useCallback)(async e=>{try{let r=await fetch("".concat("http://localhost:3000","/api/users/login"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})});if(r.ok){let{user:e,errors:t}=await r.json();if(t)throw Error(t[0].message);return s(e),l("loggedIn"),e}throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),d=(0,a.useCallback)(async()=>{try{let e=await fetch("".concat("http://localhost:3000","/api/users/logout"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok)s(null),l("loggedOut");else throw Error("An error occurred while attempting to logout.")}catch(e){throw Error("An error occurred while attempting to logout.")}},[]);(0,a.useEffect)(()=>{let e=async()=>{try{let e=await fetch("".concat("http://localhost:3000","/api/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok){let{user:r}=await e.json();s(r||null),l(r?"loggedIn":void 0)}else throw Error("An error occurred while fetching your account.")}catch(e){throw s(null),Error("An error occurred while fetching your account.")}};e()},[]);let p=(0,a.useCallback)(async e=>{try{let t=await fetch("".concat("http://localhost:3000","/api/users/forgot-password"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email})});if(t.ok){var r;let{data:e,errors:n}=await t.json();if(n)throw Error(n[0].message);s(null==e?void 0:null===(r=e.loginUser)||void 0===r?void 0:r.user)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),m=(0,a.useCallback)(async e=>{try{let n=await fetch("".concat("http://localhost:3000","/api/users/reset-password"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,passwordConfirm:e.passwordConfirm,token:e.token})});if(n.ok){var r,t;let{data:e,errors:a}=await n.json();if(a)throw Error(a[0].message);s(null==e?void 0:null===(r=e.loginUser)||void 0===r?void 0:r.user),l((null==e?void 0:null===(t=e.loginUser)||void 0===t?void 0:t.user)?"loggedIn":void 0)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]);return(0,n.jsx)(o.Provider,{value:{user:t,setUser:s,login:u,logout:d,create:c,resetPassword:m,forgotPassword:p,status:i},children:r})},i=()=>(0,a.useContext)(o)},3745:function(e){e.exports={form:"CreateAccountForm_form__KJYsi",submit:"CreateAccountForm_submit__pbvnx",message:"CreateAccountForm_message__I5EmR"},e.exports.__checksum="5ae81b39f736"},7871:function(e){e.exports={createAccount:"create-account_createAccount__YcP3l",formTitle:"create-account_formTitle__2Rzoe",handImg:"create-account_handImg__mGHRh",heroImg:"create-account_heroImg__OrQVJ",logo:"create-account_logo__myQMC",formWrapper:"create-account_formWrapper__nrKMK",formContainer:"create-account_formContainer__4W0qy",params:"create-account_params__j1Cbg"},e.exports.__checksum="002244139ea7"},7636:function(e){e.exports={label:"Button_label__pYjjJ",button:"Button_button__QvmpL",content:"Button_content__rz2Uk","appearance--primary":"Button_appearance--primary__aXtFJ","appearance--secondary":"Button_appearance--secondary__67RnZ","primary--invert":"Button_primary--invert__abvn4","secondary--invert":"Button_secondary--invert__OpT85","appearance--default":"Button_appearance--default__Hxo2A","appearance--none":"Button_appearance--none__nd_sY"},e.exports.__checksum="feca588f12e7"},1577:function(e){e.exports={inputWrap:"Input_inputWrap__8dIRM",input:"Input_input__KwwA8",asterisk:"Input_asterisk__YQ6ea",error:"Input_error__qB_Bs",label:"Input_label__4aiDX",errorMessage:"Input_errorMessage__9tcd0"},e.exports.__checksum="3fb30c4ade3e"},4690:function(e){e.exports={message:"Message_message__z1tdG",default:"Message_default__RDDb4",warning:"Message_warning__FT9n8",error:"Message_error__WX2fA",success:"Message_success__Cnnxv"},e.exports.__checksum="e7c05ffe3613"},6506:function(e){e.exports={renderParams:"RenderParams_renderParams__vMrJE"},e.exports.__checksum="1f73e3be0e4e"}},function(e){e.O(0,[724,54,644,971,864,744],function(){return e(e.s=5432)}),_N_E=e.O()}]);