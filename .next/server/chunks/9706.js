exports.id=9706,exports.ids=[9706],exports.modules={84291:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,41297,23)),Promise.resolve().then(r.t.bind(r,42796,23)),Promise.resolve().then(r.bind(r,39496)),Promise.resolve().then(r.bind(r,32627)),Promise.resolve().then(r.bind(r,26576)),Promise.resolve().then(r.bind(r,5933)),Promise.resolve().then(r.bind(r,94011)),Promise.resolve().then(r.bind(r,70966)),Promise.resolve().then(r.bind(r,68650))},26576:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(60080);r(9885);var a=r(11440),o=r.n(a),n=r(94524),i=r(36156),c=r.n(i);let l=({category:e})=>{let t=e.media,{setCategoryFilters:r}=(0,n.L0)();return s.jsx(s.Fragment,{children:s.jsx(o(),{href:"/products",className:c().card,style:{backgroundImage:`url(${t.url})`},onClick:()=>r([e.id]),children:s.jsx("p",{className:c().title,children:e.title})})})}},68650:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>C});var s=r(60080),a=r(9885),o=r(39496),n=r(12969);let i=`
  Header {
    navItems {
      link ${(0,n.A)({disableAppearance:!0})}
		}
    logo {
      url
    }
  }
`,c=`
query Header {
  ${i}
}
`,l=`
  Footer {
    copyright
    logo {
      url
    }
    footerNavItems {
      title
      description
      logo {
        url
      }
    }
    navItems {
      link ${(0,n.A)({disableAppearance:!0})}
		}
  }
`,d=`
query Footer {
  ${l}
}
`,m=`
  Settings {
    promotionContent
    date
    loginImage{
      url
    }
    SignUpImage{
      url
    }
    recoverPasswordImage{
      url
    }
    paner{
      url
    }
    productsPage {
      slug
    }
  }
`,h=`
query Settings {
  ${m}
}
`,u=process.env.NEXT_BUILD?`http://127.0.0.1:${process.env.PORT||3e3}`:"http://localhost:3000";async function p(){let e=await fetch(`${u}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},cache:"no-store",body:JSON.stringify({query:h})})?.then(e=>{if(!e.ok)throw Error("Error fetching doc");return e.json()})?.then(e=>{if(e?.errors)throw Error(e?.errors[0]?.message||"Error fetching settings");return e.data?.Settings});return e}async function _(){if(!u)throw Error("NEXT_PUBLIC_SERVER_URL not found");let e=await fetch(`${u}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},cache:"no-store",body:JSON.stringify({query:c})})?.then(e=>{if(!e.ok)throw Error("Error fetching doc");return e.json()})?.then(e=>{if(e?.errors)throw Error(e?.errors[0]?.message||"Error fetching header");return e.data?.Header});return e}async function x(){if(!u)throw Error("NEXT_PUBLIC_SERVER_URL not found");let e=await fetch(`${u}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:d})}).then(e=>{if(!e.ok)throw Error("Error fetching doc");return e.json()})?.then(e=>{if(e?.errors)throw Error(e?.errors[0]?.message||"Error fetching footer");return e.data?.Footer});return e}let g=async()=>{let e=p(),t=_(),r=x(),[s,a,o]=await Promise.all([await e,await t,await r]);return{settings:s,header:a,footer:o}};var f=r(71363),j=r.n(f);let y=({label:e,value:t})=>(0,s.jsxs)("li",{className:j().statBox,children:[s.jsx("h4",{children:t}),s.jsx("p",{children:e})]}),N=()=>{let[e,t]=(0,a.useState)(),r=null,o=null,[n,i]=(0,a.useState)({days:0,hours:0,minutes:0,seconds:0}),c=null;return(0,a.useEffect)(()=>{new Promise(async e=>{r=await g(),o=await r.settings.date,isNaN(Number(new Date(o)))||t(new Date(o)),e()})},[]),(0,a.useEffect)(()=>(c=setInterval(()=>{if(!isNaN(Number(e))){let t=new Date,r=Math.max(Number(e)-Number(t),0);i({days:Math.floor(r/864e5),hours:Math.floor(r%864e5/36e5),minutes:Math.floor(r%36e5/6e4),seconds:Math.floor(r%6e4/1e3)}),0===r&&clearInterval(c)}},1e3),()=>{clearInterval(c)}),[e]),s.jsx(s.Fragment,{children:(0,s.jsxs)("ul",{className:j().stats,children:[s.jsx(y,{label:"Days",value:n.days}),s.jsx(y,{label:"Hours",value:n.hours}),s.jsx(y,{label:"Minutes",value:n.minutes}),s.jsx(y,{label:"Seconds",value:n.seconds})]})})};var v=r(54960),w=r.n(v);let b=()=>{let[e,t]=(0,a.useState)(""),r=null;return(0,a.useEffect)(()=>{(async function(){try{r=(await g()).settings.paner.url,t(r)}catch(e){console.error(e)}})()},[]),s.jsx(s.Fragment,{children:s.jsx("div",{className:w().image,style:{backgroundImage:`url(${e})`}})})},k=()=>{let[e,t]=(0,a.useState)(""),r=null;return(0,a.useEffect)(()=>{(async function(){try{r=(await g()).settings.promotionContent,t(r)}catch(e){console.error(e)}})()},[]),s.jsx(s.Fragment,{children:e})};var P=r(39655),I=r.n(P);let C=()=>(0,s.jsxs)("section",{className:I().promotion,children:[(0,s.jsxs)("div",{className:I().textBox,children:[s.jsx("h3",{className:I().title,children:"Deals of the Month"}),s.jsx("p",{children:s.jsx(k,{})}),s.jsx(N,{}),s.jsx(o.Button,{className:I().viewProducts,href:"/products",label:"View Products",appearance:"primary"})]}),s.jsx(b,{})]})},49939:e=>{e.exports={home:"_slug__home__NhNSD"},e.exports.__checksum="689214042866"},36156:e=>{e.exports={card:"CategoryCard_card__oMtep",title:"CategoryCard_title__ecE0J"},e.exports.__checksum="3005485c7f03"},44996:e=>{e.exports={container:"Categories_container__S8cTZ",titleWrapper:"Categories_titleWrapper___0uuc",list:"Categories_list__uukOu"},e.exports.__checksum="513800c29b0e"},71363:e=>{e.exports={stats:"date_stats__BRV2s",statBox:"date_statBox__aqwC1"},e.exports.__checksum="7b2f4c464a9b"},39655:e=>{e.exports={promotion:"Promotion_promotion__reLFS",title:"Promotion_title__EjQuV",textBox:"Promotion_textBox__O_JJr",image:"Promotion_image__uZNv_",dealBtn:"Promotion_dealBtn__pgkwW",viewProducts:"Promotion_viewProducts__2OJIs"},e.exports.__checksum="6fda82203c54"},54960:e=>{e.exports={image:"paner_image__gcc6y"},e.exports.__checksum="d9880182b788"},18376:e=>{e.exports={title:"newCollection_title__NzxzU"},e.exports.__checksum="22f1a91dca54"},26957:e=>{e.exports={hero:"CustomHero_hero__YecJP",heroWrapper:"CustomHero_heroWrapper__JHIPd",heroTextBox:"CustomHero_heroTextBox__zC7_G",links:"CustomHero_links__zV5JV"},e.exports.__checksum="f35ea8f4df1f"},63470:e=>{e.exports={hero:"HighImpact_hero__qkKp_",media:"HighImpact_media__uxa5y",links:"HighImpact_links__yDa_5",caption:"HighImpact_caption__Vmt4w",content:"HighImpact_content__ifEIW"},e.exports.__checksum="cd58124ffd25"},30967:e=>{e.exports={},e.exports.__checksum="73ff4aef96d0"},27791:e=>{e.exports={hero:"MediumImpact_hero__x2eOT",richText:"MediumImpact_richText__NN8m_",links:"MediumImpact_links__jKvJ9",link:"MediumImpact_link__T2op7",media:"MediumImpact_media___5aQS"},e.exports.__checksum="2003c8dbb903"},49259:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>z,dynamic:()=>Z,generateMetadata:()=>G,generateStaticParams:()=>X});var s=r(48144),a=r(53830),o=r.n(a),n=r(59859),i=r(6465),c=r(59882),l=r(11933),d=r(82482),m=r(53205),h=r(60584),u=r(40702),p=r(26957),_=r.n(p),x=r(56355),g=r(63470),f=r.n(g),j=r(60864),y=r(30967),N=r.n(y),v=r(27791),w=r.n(v);let b={highImpact:({richText:e,media:t,links:r})=>(0,s.jsxs)(m.T,{className:f().hero,children:[(0,s.jsxs)("div",{className:f().content,children:[s.jsx(u.Z,{content:e}),Array.isArray(r)&&r.length>0&&s.jsx("ul",{className:f().links,children:r.map(({link:e},t)=>s.jsx("li",{children:s.jsx(h.g,{...e})},t))})]}),s.jsx("div",{className:f().media,children:"object"==typeof t&&(0,s.jsxs)(a.Fragment,{children:[s.jsx(x.p,{resource:t,imgClassName:f().image,priority:!0}),t?.caption&&s.jsx(u.Z,{content:t.caption,className:f().caption})]})})]}),mediumImpact:e=>{let{richText:t,media:r,links:a}=e;return(0,s.jsxs)(m.T,{className:w().hero,children:[(0,s.jsxs)("div",{className:w().background,children:[s.jsx(u.Z,{className:w().richText,content:t}),Array.isArray(a)&&s.jsx("ul",{className:w().links,children:a.map(({link:e},t)=>s.jsx("li",{children:s.jsx(h.g,{className:w().link,...e})},t))})]}),s.jsx("div",{className:w().media,children:"object"==typeof r&&s.jsx(x.p,{className:w().media,resource:r})})]})},lowImpact:({richText:e})=>s.jsx(m.T,{className:N().lowImpactHero,children:s.jsx("div",{className:N().content,children:s.jsx(j.G,{children:s.jsx(u.Z,{className:N().richText,content:e})})})}),customHero:({richText:e,media:t,links:r})=>{let a=t&&"string"!=typeof t&&`http://localhost:3000/media/${t.filename}`;return s.jsx("section",{className:_().hero,children:s.jsx("div",{className:_().heroWrapper,style:{backgroundImage:`url(${a})`},children:(0,s.jsxs)("div",{className:_().heroTextBox,children:[s.jsx(u.Z,{content:e}),Array.isArray(r)&&r.length>0&&s.jsx("ul",{className:_().links,children:r.map(({link:e},t)=>s.jsx("li",{children:s.jsx(h.g,{...e})},t))})]})})})}},k=e=>{let{type:t}=e||{};if(!t||"none"===t)return null;let r=b[t];return r?s.jsx(r,{...e}):null};var P=r(839),I=r(44602),C=r.n(I),E=r(17536);let T=(0,E.createProxy)(String.raw`C:\Users\eslam\OneDrive\سطح المكتب\cv\full-stack-e-commerce-with-next-14\src\app\_components\Categories\CategoryCard\index.tsx`),{__esModule:S,$$typeof:M}=T,B=T.default;var H=r(44996),$=r.n(H);let O=({categories:e})=>(0,s.jsxs)("section",{className:$().container,children:[(0,s.jsxs)("div",{className:$().titleWrapper,children:[s.jsx("h3",{children:"Shop by Categories"}),s.jsx(C(),{href:"/products",children:"Show All"})]}),s.jsx("div",{className:$().list,children:e?.map(e=>s.jsx(B,{category:e},e.id))})]});var D=r(36385),F=r(18376),q=r.n(F);let A=async()=>{let{isEnabled:e}=(0,n.draftMode)(),t=null;try{t=await (0,l.N)("products")}catch(e){console.log(e)}return(0,s.jsxs)("div",{children:[s.jsx("h3",{className:q().title,children:"New Collections"}),s.jsx(D.x,{introContent:t,relationTo:"products",blockType:"archive",limit:3})]})},J=(0,E.createProxy)(String.raw`C:\Users\eslam\OneDrive\سطح المكتب\cv\full-stack-e-commerce-with-next-14\src\app\_components\Promotion\index.tsx`),{__esModule:U,$$typeof:R}=J,V=J.default;var W=r(49939),L=r.n(W);let Z="force-dynamic";async function z({params:{slug:e="home"}}){let{isEnabled:t}=(0,n.draftMode)(),r=null,a=null;try{r=await (0,c.D)({collection:"pages",slug:e,draft:t}),a=await (0,l.N)("categories")}catch(e){}if(!r)return(0,i.notFound)();let{hero:h,layout:u}=r;return s.jsx(o().Fragment,{children:"home"===e?(0,s.jsxs)("section",{children:[s.jsx(k,{...h}),(0,s.jsxs)(m.T,{className:L().home,children:[s.jsx(O,{categories:a}),s.jsx(A,{}),s.jsx(V,{})]})]}):(0,s.jsxs)(s.Fragment,{children:[s.jsx(k,{...h}),s.jsx(d.n,{blocks:u,disableTopPadding:!h||h?.type==="none"||h?.type==="lowImpact"})]})})}async function X(){try{let e=await (0,l.N)("pages");return e?.map(({slug:e})=>e)}catch(e){return[]}}async function G({params:{slug:e="home"}}){let{isEnabled:t}=(0,n.draftMode)(),r=null;try{r=await (0,c.D)({collection:"pages",slug:e,draft:t})}catch(e){}return(0,P.v)({doc:r})}}};