"use strict";exports.id=2970,exports.ids=[2970],exports.modules={12969:(e,t,a)=>{a.d(t,{A:()=>l});let l=({disableAppearance:e,disableLabel:t}={})=>`{
  ${t?"":"label"}
  ${e?"":"appearance"}
  type
  newTab
  url
  icon {
    url
  }
  reference {
    relationTo
    value {
      ...on Page {
        slug
      }
    }
  }
}`},839:(e,t,a)=>{a.d(t,{v:()=>i});var l=a(62208);let i=async e=>{let{doc:t}=e||{},a="object"==typeof t?.meta?.image&&t?.meta?.image!==null&&"url"in t?.meta?.image&&`http://localhost:3000${t.meta.image.url}`;return{title:t?.meta?.title||"Payload",description:t?.meta?.description,openGraph:(0,l.T)({title:t?.meta?.title||"Payload",description:t?.meta?.description,url:Array.isArray(t?.slug)?t?.slug.join("/"):"/",images:a?[{url:a}]:void 0})}}}};