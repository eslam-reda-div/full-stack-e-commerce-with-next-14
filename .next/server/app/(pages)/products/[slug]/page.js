(()=>{var e={};e.id=9679,e.ids=[9679],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},73837:e=>{"use strict";e.exports=require("util")},78390:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>h,originalPathname:()=>p,pages:()=>u,routeModule:()=>m,tree:()=>d});var s=r(73137),n=r(54647),l=r(4183),a=r.n(l),o=r(71775),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);r.d(t,c);let i=s.AppPageRouteModule,d=["",{children:["(pages)",{children:["products",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7457)),"C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\src\\app\\(pages)\\products\\[slug]\\page.tsx"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(r.bind(r,45653)),"C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\src\\app\\(pages)\\not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,82645)),"C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\src\\app\\(pages)\\products\\[slug]\\page.tsx"],p="/(pages)/products/[slug]/page",h={require:r,loadChunk:()=>Promise.resolve()},m=new i({definition:{kind:n.x.APP_PAGE,page:"/(pages)/products/[slug]/page",pathname:"/products/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},25947:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,41297,23)),Promise.resolve().then(r.t.bind(r,42796,23)),Promise.resolve().then(r.bind(r,95212)),Promise.resolve().then(r.bind(r,39496)),Promise.resolve().then(r.bind(r,32627)),Promise.resolve().then(r.bind(r,5933)),Promise.resolve().then(r.bind(r,94011)),Promise.resolve().then(r.bind(r,70966)),Promise.resolve().then(r.bind(r,15765)),Promise.resolve().then(r.bind(r,59974))},73185:(e,t,r)=>{"use strict";r.d(t,{h:()=>a});var s=r(60080);r(9885);var n=r(72215),l=r.n(n);let a=e=>{let t=Array.from(Array(e.number||1).keys());return s.jsx("div",{className:l().loading,children:t.map((e,t)=>s.jsx("div",{className:l().shimmer},t))})}},42655:(e,t,r)=>{"use strict";r.d(t,{v:()=>a});var s=r(60080);r(9885);var n=r(8514),l=r.n(n);let a=({message:e,error:t,success:r,warning:n,className:a})=>{let o=e||t||r||n;return o?s.jsx("div",{className:[l().message,a,t&&l().error,r&&l().success,n&&l().warning,!t&&!r&&!n&&l().default].filter(Boolean).join(" "),children:o}):null}},15765:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PaywallBlocks:()=>en});var s=r(60080),n=r(9885),l=r.n(n),a=r(11440),o=r.n(a);let c=`categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`;var i=r(12969);let d=`
mimeType
filename
width
height
alt
caption
`,u=`media {
  ${d}
}`,p=`meta {
  title
  image {
    ${d}
  }
  description
}`,h=`
...on Cta {
  blockType
  invertBackground
  richText
  links {
    link ${(0,i.A)()}
  }
}
`,m=`
...on Content {
  blockType
  invertBackground
  columns {
    size
    richText
    enableLink
    link ${(0,i.A)()}
  }
}
`,x=`
...on MediaBlock {
  blockType
  invertBackground
  position
  ${u}
}
`,_=`
...on Archive {
  blockType
  introContent
  populateBy
  relationTo
  ${c}
  limit
  selectedDocs {
    relationTo
    value {
      ...on Product {
        id
        slug
        title
        priceJSON
      }
    }
  }
  populatedDocs {
    relationTo
    value {
      ...on Product {
        id
        slug
        title
        priceJSON
        ${c}
        ${p}
      }
    }
  }
  populatedDocsTotal
}
`,g=`
  query Product($slug: String, $draft: Boolean) {
    Products(where: { slug: { equals: $slug}}, limit: 1, draft: $draft) {
      docs {
        paywall {
          ${h}
          ${m}
          ${x}
          ${_}
        }
      }
    }
  }
`;var v=r(8693),j=r(5933),f=r(55964),b=r(90962),k=r.n(b),P=r(38437),y=r(86608),T=r.n(y);let w=({children:e})=>s.jsx("p",{className:T().label,children:e});var N=r(74274),C=r.n(N);let B=({children:e})=>s.jsx("p",{className:C().largeBody,children:e});var A=r(42915);let $=e=>e?.map((e,t)=>{if(P.xv.isText(e)){let r=s.jsx("span",{dangerouslySetInnerHTML:{__html:k()(e.text)}});return e.bold&&(r=s.jsx("strong",{children:r},t)),e.code&&(r=s.jsx("code",{children:r},t)),e.italic&&(r=s.jsx("em",{children:r},t)),e.underline&&(r=s.jsx("span",{style:{textDecoration:"underline"},children:r},t)),e.strikethrough&&(r=s.jsx("span",{style:{textDecoration:"line-through"},children:r},t)),s.jsx(n.Fragment,{children:r},t)}if(!e)return null;switch(e.type){case"h1":return s.jsx("h1",{children:$(e?.children)},t);case"h2":return s.jsx("h2",{children:$(e?.children)},t);case"h3":return s.jsx("h3",{children:$(e?.children)},t);case"h4":return s.jsx("h4",{children:$(e?.children)},t);case"h5":return s.jsx("h5",{children:$(e?.children)},t);case"h6":return s.jsx("h6",{children:$(e?.children)},t);case"quote":return s.jsx("blockquote",{children:$(e?.children)},t);case"ul":return s.jsx("ul",{children:$(e?.children)},t);case"ol":return s.jsx("ol",{children:$(e.children)},t);case"li":return s.jsx("li",{children:$(e.children)},t);case"link":return s.jsx(A.g,{type:"internal"===e.linkType?"reference":"custom",url:e.url,reference:e.doc,newTab:!!e?.newTab,children:$(e?.children)},t);case"label":return s.jsx(w,{children:$(e?.children)},t);case"large-body":return s.jsx(B,{children:$(e?.children)},t);default:return s.jsx("p",{children:$(e?.children)},t)}})||[];var D=r(15992),R=r.n(D);let q=({className:e,content:t})=>t?s.jsx("div",{className:[R().richText,e].filter(Boolean).join(" "),children:$(t)}):null;var M=r(99893),O=r.n(M),S=r(57468),G=r.n(S);let L=({top:e="medium",bottom:t="medium",className:r,children:n})=>s.jsx("div",{className:[r,G()[`top-${e}`],G()[`bottom-${t}`]].filter(Boolean).join(" "),children:n});var U=r(29520),W=r.n(U),F=r(3728),I=r.n(F),J=r(88995),E=r(64175),X=r.n(E),H=r(32627),V=r(12281),K=r.n(V);let Y=e=>e?.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase();var z=r(61817),Q=r.n(z);let Z=e=>{let{id:t,className:r,children:n,invert:l}=e;return s.jsx("div",{id:t,className:[l&&Q().invert,r].filter(Boolean).join(" "),children:n})},ee={cta:({links:e,richText:t,invertBackground:r})=>s.jsx(f.T,{children:s.jsx(L,{className:[W().callToAction,r&&W().invert].filter(Boolean).join(" "),children:(0,s.jsxs)("div",{className:W().wrap,children:[s.jsx("div",{className:W().content,children:s.jsx(q,{className:W().richText,content:t})}),s.jsx("div",{className:W().linkGroup,children:(e||[]).map(({link:e},t)=>s.jsx(A.g,{...e,invert:r},t))})]})})}),content:e=>{let{columns:t}=e;return s.jsx(f.T,{className:I().content,children:s.jsx("div",{className:I().grid,children:t&&t.length>0&&t.map((e,t)=>{let{enableLink:r,richText:n,link:l,size:a}=e;return(0,s.jsxs)("div",{className:[I().column,I()[`column--${a}`]].join(" "),children:[s.jsx(q,{content:n}),r&&s.jsx(A.g,{className:I().link,...l})]},t)})})})},mediaBlock:e=>{let t;let{media:r,position:n="default",staticImage:l}=e;return r&&"object"==typeof r&&(t=r.caption),(0,s.jsxs)("div",{className:X().mediaBlock,children:["fullscreen"===n&&s.jsx("div",{className:X().fullscreen,children:s.jsx(J.p,{resource:r,src:l})}),"default"===n&&s.jsx(f.T,{children:s.jsx(J.p,{resource:r,src:l})}),t&&s.jsx(f.T,{className:X().caption,children:s.jsx(q,{content:t})})]})},archive:e=>{let{introContent:t,id:r,relationTo:n,populateBy:l,limit:a,populatedDocs:o,populatedDocsTotal:c,categories:i}=e;return(0,s.jsxs)("div",{id:`block-${r}`,className:O().archiveBlock,children:[t&&s.jsx(f.T,{className:O().introContent,children:s.jsx(q,{content:t})}),s.jsx(j.CollectionArchive,{populateBy:l,relationTo:n,populatedDocs:o,populatedDocsTotal:c,categories:i,limit:a,sort:"-publishedOn"})]})},relatedProducts:e=>{let{docs:t,relationTo:r}=e;return s.jsx("div",{className:K().relatedProducts,children:(0,s.jsxs)(f.T,{children:[s.jsx("h3",{className:K().title,children:"Related Products"}),s.jsx("div",{className:K().grid,children:t?.map(e=>"string"==typeof e?null:s.jsx(H.Card,{relationTo:r,doc:e,showCategories:!0},e.id))})]})})}},et=e=>{let{disableTopPadding:t,blocks:r,limit:l}=e,a=r&&Array.isArray(r)&&r.length>0;return a?s.jsx(n.Fragment,{children:r.map((e,n)=>{let{blockName:l,blockType:a}=e;if(a&&a in ee){let o=ee[a],c="invertBackground"in e&&"cta"!==a&&e.invertBackground,i=r[n-1],d=i&&"invertBackground"in i&&i?.invertBackground,u="large",p="large";if(i&&!!c==!!d&&(u="none"),n===r.length-1&&(p="large"),t&&0===n&&(u="none"),o)return s.jsx(Z,{invert:c,children:s.jsx(L,{top:u,bottom:p,children:s.jsx(o,{id:Y(l),...e})})},n)}return null})}):null};var er=r(73185),es=r(42655);let en=e=>{let{productSlug:t,disableTopPadding:r}=e,{user:a}=(0,v.a)(),[c,i]=l().useState(!1),[d,u]=l().useState(),p=l().useRef(!1),h=l().useRef(!1);return((0,n.useEffect)(()=>{if(!a||p.current||h.current)return;p.current=!0,h.current=!0;let e=Date.now(),r=async()=>{i(!0);try{let r=await fetch("http://localhost:3000/api/graphql",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:g,variables:{slug:t}})})?.then(e=>e.json())?.then(e=>e?.data?.Products.docs[0]?.paywall);r&&u(r);let s=Date.now();s-e<1e3&&await new Promise(t=>setTimeout(t,500-(s-e))),i(!1)}catch(e){console.error(e),i(!1)}};r()},[a,t]),void 0===a)?null:null===a?s.jsx(f.T,{children:s.jsx(L,{bottom:"large",top:"none",children:s.jsx(es.v,{message:(0,s.jsxs)(s.Fragment,{children:["This content is gated behind a paywall. You must be ",s.jsx(o(),{href:`/login?redirect=${encodeURIComponent(window.location.pathname)}`,children:"logged in"})," as an admin or have purchased this product to view this content."]})})})}):c?s.jsx(f.T,{children:s.jsx(L,{bottom:"large",top:"none",children:s.jsx(er.h,{})})}):d&&0!==d.length?s.jsx(et,{blocks:d,disableTopPadding:r}):s.jsx(f.T,{children:s.jsx(L,{bottom:"large",top:"none",children:s.jsx(es.v,{message:"Purchase this product to unlock the content."})})})}},99893:e=>{e.exports={archiveBlock:"ArchiveBlock_archiveBlock__5UEq_",introContent:"ArchiveBlock_introContent__H4Ko0"},e.exports.__checksum="35096ecb5b22"},29520:e=>{e.exports={callToAction:"CallToAction_callToAction__WNeXD",invert:"CallToAction_invert__tvOO1",wrap:"CallToAction_wrap__AK9_4",content:"CallToAction_content__BiisP",linkGroup:"CallToAction_linkGroup__jZg4Y"},e.exports.__checksum="32442875b3b7"},3728:e=>{e.exports={grid:"Content_grid__7xRAI","column--oneThird":"Content_column--oneThird__HyYv1","column--half":"Content_column--half___Gx1x","column--twoThirds":"Content_column--twoThirds__QXm6g","column--full":"Content_column--full__D_eoS",column:"Content_column__bhKOQ",link:"Content_link__5_dJG"},e.exports.__checksum="7ea6d385335b"},64175:e=>{e.exports={mediaBlock:"MediaBlock_mediaBlock__kLxM0",caption:"MediaBlock_caption__vE6Rw"},e.exports.__checksum="9103938fdf7c"},12281:e=>{e.exports={relatedProducts:"RelatedProducts_relatedProducts__eslGx",introContent:"RelatedProducts_introContent__JxRV4",grid:"RelatedProducts_grid__mMGLT",title:"RelatedProducts_title__YIs_C"},e.exports.__checksum="eef56953c79b"},61817:e=>{e.exports={invert:"BackgroundColor_invert__8yPWe"},e.exports.__checksum="043799d422a9"},86608:e=>{e.exports={label:"Label_label__jIJix"},e.exports.__checksum="cf68d07545a2"},74274:e=>{e.exports={largeBody:"LargeBody_largeBody__4csV5"},e.exports.__checksum="b3616a11d61f"},72215:e=>{e.exports={loading:"LoadingShimmer_loading__sK7Rg",shimmer:"LoadingShimmer_shimmer__YtrFI"},e.exports.__checksum="eba6cbe2403e"},8514:e=>{e.exports={message:"Message_message__z1tdG",default:"Message_default__RDDb4",warning:"Message_warning__FT9n8",error:"Message_error__WX2fA",success:"Message_success__Cnnxv"},e.exports.__checksum="21e7800cf184"},15992:e=>{e.exports={richText:"RichText_richText__8IUJ0"},e.exports.__checksum="4b21345af45c"},57468:e=>{e.exports={"top-large":"VerticalPadding_top-large__Fdv3J","top-medium":"VerticalPadding_top-medium__8WZul","bottom-large":"VerticalPadding_bottom-large__W6wnm","bottom-medium":"VerticalPadding_bottom-medium__T9Qsp"},e.exports.__checksum="275c76d22479"},50539:e=>{e.exports={productHero:"Product_productHero__8LRIX",mediaWrapper:"Product_mediaWrapper__cG_a0",image:"Product_image__aUOdh",details:"Product_details__JRDf_",categoryWrapper:"Product_categoryWrapper__oxvyM",category:"Product_category__qCa6r",stock:"Product_stock__vxXKo",separator:"Product_separator__6IR0z",description:"Product_description__Ldu7X"},e.exports.__checksum="34a5634e4b57"},7457:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>N,dynamic:()=>w,generateMetadata:()=>B,generateStaticParams:()=>C});var s=r(48144),n=r(53830),l=r(59859),a=r(6465),o=r(59882),c=r(11933),i=r(82482),d=r(17536);let u=(0,d.createProxy)(String.raw`C:\Users\eslam\OneDrive\سطح المكتب\cv\full-stack-e-commerce-with-next-14\src\app\_components\PaywallBlocks\index.tsx`),{__esModule:p,$$typeof:h}=u;u.default;let m=u.PaywallBlocks,x=(0,d.createProxy)(String.raw`C:\Users\eslam\OneDrive\سطح المكتب\cv\full-stack-e-commerce-with-next-14\src\app\_components\AddToCartButton\index.tsx`),{__esModule:_,$$typeof:g}=x;x.default;let v=x.AddToCartButton;var j=r(53205),f=r(56355),b=r(80623),k=r(50539),P=r.n(k);let y=({product:e})=>{let{title:t,categories:r,meta:{image:l,description:a}={}}=e;return(0,s.jsxs)(j.T,{className:P().productHero,children:[(0,s.jsxs)("div",{className:P().mediaWrapper,children:[!l&&s.jsx("div",{className:P().placeholder,children:"No image"}),l&&"string"!=typeof l&&s.jsx(f.p,{imgClassName:P().image,resource:l,fill:!0})]}),(0,s.jsxs)("div",{className:P().details,children:[s.jsx("h3",{className:P().title,children:t}),(0,s.jsxs)("div",{className:P().categoryWrapper,children:[s.jsx("div",{className:P().categories,children:r?.map((e,t)=>{let{title:l}=e,a=t===r.length-1;return s.jsxs("p",{className:P().category,children:[l||"Generic"," ",!a&&s.jsx(n.Fragment,{children:", \xa0"}),s.jsx("span",{className:P().separator,children:"|"})]},t)})}),s.jsx("p",{className:P().stock,children:" In stock"})]}),s.jsx(b.t,{product:e,button:!1}),(0,s.jsxs)("div",{className:P().description,children:[s.jsx("h6",{children:"Description"}),s.jsx("p",{children:a})]}),s.jsx(v,{product:e,className:P().addToCartButton})]})]})};var T=r(839);let w="force-dynamic";async function N({params:{slug:e}}){let{isEnabled:t}=(0,l.draftMode)(),r=null;try{r=await (0,o.D)({collection:"products",slug:e,draft:t})}catch(e){console.error(e)}r||(0,a.notFound)();let{relatedProducts:n}=r;return(0,s.jsxs)(s.Fragment,{children:[s.jsx(y,{product:r}),r?.enablePaywall&&s.jsx(m,{productSlug:e,disableTopPadding:!0}),s.jsx(i.n,{disableTopPadding:!0,blocks:[{blockType:"relatedProducts",blockName:"Related Product",relationTo:"products",introContent:[{type:"h3",children:[{text:"Related Products"}]}],docs:n}]})]})}async function C(){try{let e=await (0,c.N)("products");return e?.map(({slug:e})=>e)}catch(e){return[]}}async function B({params:{slug:e}}){let{isEnabled:t}=(0,l.draftMode)(),r=null;try{r=await (0,o.D)({collection:"products",slug:e,draft:t})}catch(e){}return(0,T.v)({doc:r})}},80623:(e,t,r)=>{"use strict";r.d(t,{t:()=>o});var s=r(17536);let n=(0,s.createProxy)(String.raw`C:\Users\eslam\OneDrive\سطح المكتب\cv\full-stack-e-commerce-with-next-14\src\app\_components\Price\index.tsx`),{__esModule:l,$$typeof:a}=n;n.default,n.priceFromJSON;let o=n.Price}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[4650,2560,6724,3497,9859,6465,7,2059,1222,1840,8667,5072,12,9974,6355,702,4613,7617,3466,7499,1933,2970],()=>r(78390));module.exports=s})();