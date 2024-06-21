exports.id=7499,exports.ids=[7499],exports.modules={32627:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Card:()=>g});var a=r(60080),i=r(9885),l=r(11440),o=r.n(l),s=r(88995),n=r(59974),c=r(86342),d=r.n(c);let u=e=>{let t="";if(e)try{let r=JSON.parse(e)?.data[0],a=r.unit_amount,i=r.type;t=`${"usd"===r.currency?"$":""}${(a/100).toFixed(2)}`,"recurring"===i&&(t+=`/${r.recurring.interval_count>1?`${r.recurring.interval_count} ${r.recurring.interval}`:r.recurring.interval}`)}catch(e){console.error("Cannot parse priceJSON")}return t},g=e=>{let{showCategories:t,title:r,doc:l,doc:{slug:c,title:g,categories:p,meta:_,priceJSON:h}={},className:m}=e,{description:v,image:x}=_||{};p&&Array.isArray(p)&&p.length;let y=r||g,f=v?.replace(/\s/g," "),C=`/products/${c}`,[$,k]=(0,i.useState)(()=>u(h));return(0,i.useEffect)(()=>{k(u(h))},[h]),(0,a.jsxs)(o(),{href:C,className:[d().card,m].filter(Boolean).join(" "),children:[(0,a.jsxs)("div",{className:d().mediaWrapper,children:[!x&&a.jsx("div",{className:d().placeholder,children:"No image"}),x&&"string"!=typeof x&&a.jsx(s.p,{imgClassName:d().image,resource:x,fill:!0})]}),(0,a.jsxs)("div",{className:d().content,children:[y&&a.jsx("h4",{className:d().title,children:y}),v&&a.jsx("div",{className:d().body,children:v&&a.jsx("p",{className:d().description,children:f})}),l&&a.jsx(n.Price,{product:l})]})]})}},5933:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CollectionArchive:()=>f});var a=r(60080),i=r(9885),l=r(22059),o=r.n(l),s=r(94524),n=r(32627),c=r(55341),d=r.n(c);let u={singular:"Doc",plural:"Docs"},g={products:{singular:"Product",plural:"Products"}},p=e=>{let{className:t,totalDocs:r,currentPage:i,collection:l,limit:o,collectionLabels:s}=e,n=(i||1)*(o||1);r&&n>r&&(n=r);let{singular:c,plural:p}=s||g[l||""]||u||{};return(0,a.jsxs)("div",{className:[t,d().pageRange].filter(Boolean).join(" "),children:[(void 0===r||0===r)&&"Search produced no results.",void 0!==r&&r>0&&`Showing ${(i?i-1:1)*(o||1)+1} - ${n} of ${r} ${r>1?p:c}`]})},_=({className:e,rotate:t})=>a.jsx("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:e,style:{transform:"number"==typeof t?`rotate(${t||0}deg)`:void 0},children:a.jsx("path",{d:"M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z",stroke:"currentColor",fill:"none",vectorEffect:"non-scaling-stroke"})});var h=r(76464),m=r.n(h);let v=e=>{let{page:t,totalPages:r,onClick:i,className:l}=e,o=t<r,s=t>1;return(0,a.jsxs)("div",{className:[m().pagination,l].filter(Boolean).join(" "),children:[a.jsx("button",{type:"button",className:m().button,disabled:!s,onClick:()=>{i(t-1)},children:a.jsx(_,{rotate:90,className:m().icon})}),a.jsx("div",{className:m().pageRange,children:(0,a.jsxs)("span",{className:m().pageRangeLabel,children:["Page ",t," of ",r]})}),a.jsx("button",{type:"button",className:m().button,disabled:!o,onClick:()=>{i(t+1)},children:a.jsx(_,{rotate:-90,className:m().icon})})]})};var x=r(23894),y=r.n(x);let f=e=>{let{categoryFilters:t,sort:r}=(0,s.L0)(),{className:l,relationTo:c,showPageRange:d,onResultChange:u,limit:g=10,populatedDocs:_,populatedDocsTotal:h}=e,[m,x]=(0,i.useState)({totalDocs:"number"==typeof h?h:0,docs:_?.map(e=>e.value)||[],page:1,totalPages:1,hasPrevPage:!1,hasNextPage:!1,prevPage:1,nextPage:1}),[f,C]=(0,i.useState)(!1),[$,k]=(0,i.useState)(void 0),P=(0,i.useRef)(null),j=(0,i.useRef)(!1),[b,N]=(0,i.useState)(1),w=(0,i.useCallback)(()=>{let{current:e}=P},[]);return(0,i.useEffect)(()=>{f||m.page},[f,w,m]),(0,i.useEffect)(()=>{let e=setTimeout(()=>{j&&C(!0)},500),a=o().stringify({sort:r,where:{...t&&t?.length>0?{categories:{in:"string"==typeof t?[t]:t.map(e=>e).join(",")}}:{}},limit:g,page:b,depth:1},{encode:!1}),i=async()=>{try{let t=await fetch(`http://localhost:3000/api/${c}?${a}`),r=await t.json();clearTimeout(e),j.current=!0;let{docs:i}=r;i&&Array.isArray(i)&&(x(r),C(!1),"function"==typeof u&&u(r))}catch(e){console.warn(e),C(!1),k(`Unable to load "${c} archive" data at this time.`)}};return i(),()=>{e&&clearTimeout(e)}},[b,t,c,u,r,g]),(0,a.jsxs)("div",{className:[y().collectionArchive,l].filter(Boolean).join(" "),children:[a.jsx("div",{ref:P,className:y().scrollRef}),!f&&$&&a.jsx("div",{children:$}),(0,a.jsxs)(i.Fragment,{children:[!1!==d&&a.jsx("div",{className:y().pageRange,children:a.jsx(p,{totalDocs:m.totalDocs,currentPage:m.page,collection:c,limit:g})}),a.jsx("div",{className:y().grid,children:m.docs?.map((e,t)=>a.jsx(n.Card,{relationTo:"products",doc:e,showCategories:!0},t))}),m.totalPages>1&&a.jsx(v,{className:y().pagination,page:m.page,totalPages:m.totalPages,onClick:N})]})]})}},88995:(e,t,r)=>{"use strict";r.d(t,{p:()=>s});var a=r(60080),i=r(9885),l=r(94011),o=r(70966);let s=e=>{let{className:t,resource:r,htmlElement:s="div"}=e,n="string"!=typeof r&&r?.mimeType?.includes("video"),c=s||i.Fragment;return a.jsx(c,{...null!==s?{className:t}:{},children:n?a.jsx(o.Video,{...e}):a.jsx(l.Image,{...e})})}},11291:e=>{e.exports={archiveBlock:"ArchiveBlock_archiveBlock__5UEq_",introContent:"ArchiveBlock_introContent__H4Ko0"},e.exports.__checksum="35096ecb5b22"},66343:e=>{e.exports={relatedProducts:"RelatedProducts_relatedProducts__eslGx",introContent:"RelatedProducts_introContent__JxRV4",grid:"RelatedProducts_grid__mMGLT",title:"RelatedProducts_title__YIs_C"},e.exports.__checksum="eef56953c79b"},41237:e=>{e.exports={invert:"BackgroundColor_invert__8yPWe"},e.exports.__checksum="043799d422a9"},86342:e=>{e.exports={leader:"Card_leader__BDPww",card:"Card_card__dbEsw",content:"Card_content__2kYlr",title:"Card_title__l06An",centerAlign:"Card_centerAlign__bkufK",body:"Card_body__elddF",priceActions:"Card_priceActions__lg0VR",price:"Card_price__rFaYi",description:"Card_description__gK3Vb",hideImageOnMobile:"Card_hideImageOnMobile__8Evfz",mediaWrapper:"Card_mediaWrapper__ymlCx",image:"Card_image__u8Zit",placeholder:"Card_placeholder__j9mbq",actions:"Card_actions__O3ZAz"},e.exports.__checksum="43c4e52850f6"},23894:e=>{e.exports={scrollRef:"CollectionArchive_scrollRef__cpVNx",introContent:"CollectionArchive_introContent__3ius4",resultCountWrapper:"CollectionArchive_resultCountWrapper__HeyC2",pageRange:"CollectionArchive_pageRange___Fm9R",grid:"CollectionArchive_grid___oHl9",pagination:"CollectionArchive_pagination__SKyX6"},e.exports.__checksum="38d595234774"},55341:e=>{e.exports={pageRange:"PageRange_pageRange__6JbBn",content:"PageRange_content__xR9JI",divider:"PageRange_divider__6Q5i0",hyperlink:"PageRange_hyperlink__VRzd1"},e.exports.__checksum="3d1186f484cc"},76464:e=>{e.exports={pagination:"Pagination_pagination__UA5CJ",button:"Pagination_button__gOLVY",icon:"Pagination_icon__z6vbL"},e.exports.__checksum="382c49526847"},59882:(e,t,r)=>{"use strict";r.d(t,{D:()=>c});var a=r(24426),i=r(90488),l=r(36716),o=r(20109),s=r(16362);let n={pages:{query:i.E,key:"Pages"},products:{query:l.c5,key:"Products"},orders:{query:a.k,key:"Orders"}},c=async e=>{let t;let{collection:a,slug:i,draft:l}=e||{};if(!n[a])throw Error(`Collection ${a} not found`);if(l){let{cookies:e}=await Promise.all([r.e(3497),r.e(9859)]).then(r.t.bind(r,59859,23));t=e().get(s.Q)}let c=await fetch(`${o.k}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json",...t?.value&&l?{Authorization:`JWT ${t.value}`}:{}},cache:"no-store",next:{tags:[`${a}_${i}`]},body:JSON.stringify({query:n[a].query,variables:{slug:i,draft:l}})})?.then(e=>e.json())?.then(e=>{if(e.errors)throw Error(e?.errors?.[0]?.message??"Error fetching doc");return e?.data?.[n[a].key]?.docs?.[0]});return c}},16362:(e,t,r)=>{"use strict";r.d(t,{Q:()=>a});let a="payload-token"},36385:(e,t,r)=>{"use strict";r.d(t,{x:()=>p});var a=r(48144);r(53830);var i=r(17536);let l=(0,i.createProxy)(String.raw`C:\Users\eslam\OneDrive\سطح المكتب\cv\full-stack-e-commerce-with-next-14\src\app\_components\CollectionArchive\index.tsx`),{__esModule:o,$$typeof:s}=l;l.default;let n=l.CollectionArchive;var c=r(53205),d=r(40702),u=r(11291),g=r.n(u);let p=e=>{let{introContent:t,id:r,relationTo:i,populateBy:l,limit:o,populatedDocs:s,populatedDocsTotal:u,categories:p}=e;return(0,a.jsxs)("div",{id:`block-${r}`,className:g().archiveBlock,children:[t&&a.jsx(c.T,{className:g().introContent,children:a.jsx(d.Z,{content:t})}),a.jsx(n,{populateBy:l,relationTo:i,populatedDocs:s,populatedDocsTotal:u,categories:p,limit:o,sort:"-publishedOn"})]})}},82482:(e,t,r)=>{"use strict";r.d(t,{n:()=>k});var a=r(48144),i=r(53830),l=r(36385),o=r(34613),s=r(97617),n=r(63466),c=r(17536);let d=(0,c.createProxy)(String.raw`C:\Users\eslam\OneDrive\سطح المكتب\cv\full-stack-e-commerce-with-next-14\src\app\_components\Card\index.tsx`),{__esModule:u,$$typeof:g}=d;d.default;let p=d.Card;var _=r(53205),h=r(66343),m=r.n(h);let v=e=>e?.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase();var x=r(41237),y=r.n(x);let f=e=>{let{id:t,className:r,children:i,invert:l}=e;return a.jsx("div",{id:t,className:[l&&y().invert,r].filter(Boolean).join(" "),children:i})};var C=r(60864);let $={cta:o.h,content:s.b,mediaBlock:n.P,archive:l.x,relatedProducts:e=>{let{docs:t,relationTo:r}=e;return a.jsx("div",{className:m().relatedProducts,children:(0,a.jsxs)(_.T,{children:[a.jsx("h3",{className:m().title,children:"Related Products"}),a.jsx("div",{className:m().grid,children:t?.map(e=>"string"==typeof e?null:a.jsx(p,{relationTo:r,doc:e,showCategories:!0},e.id))})]})})}},k=e=>{let{disableTopPadding:t,blocks:r,limit:l}=e,o=r&&Array.isArray(r)&&r.length>0;return o?a.jsx(i.Fragment,{children:r.map((e,i)=>{let{blockName:l,blockType:o}=e;if(o&&o in $){let s=$[o],n="invertBackground"in e&&"cta"!==o&&e.invertBackground,c=r[i-1],d=c&&"invertBackground"in c&&c?.invertBackground,u="large",g="large";if(c&&!!n==!!d&&(u="none"),i===r.length-1&&(g="large"),t&&0===i&&(u="none"),s)return a.jsx(f,{invert:n,children:a.jsx(C.G,{top:u,bottom:g,children:a.jsx(s,{id:v(l),...e})})},i)}return null})}):null}},1981:(e,t,r)=>{"use strict";r.d(t,{Iy:()=>d,P8:()=>n,hS:()=>s,kE:()=>c});var a=r(13283),i=r(45603),l=r(95599),o=r(7950);let s=`
...on Cta {
  blockType
  invertBackground
  richText
  links {
    link ${(0,i.A)()}
  }
}
`,n=`
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
`,c=`
...on MediaBlock {
  blockType
  invertBackground
  position
  ${l.i}
}
`,d=`
...on Archive {
  blockType
  introContent
  populateBy
  relationTo
  ${a.Z}
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
        ${a.Z}
        ${o.M}
      }
    }
  }
  populatedDocsTotal
}
`},13283:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a,a:()=>i});let a=`categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`,i=`
  query Categories {
    Categories(limit: 300) {
      docs {
        id
        title
        media {
          alt
          width
          height
          url
        }
      }
    }
  }
`},95599:(e,t,r)=>{"use strict";r.d(t,{d:()=>a,i:()=>i});let a=`
mimeType
filename
width
height
alt
caption
`,i=`media {
  ${a}
}`},7950:(e,t,r)=>{"use strict";r.d(t,{M:()=>i});var a=r(95599);let i=`meta {
  title
  image {
    ${a.d}
  }
  description
}`},24426:(e,t,r)=>{"use strict";r.d(t,{k:()=>l,z:()=>i});var a=r(36716);let i=`
  query Orders {
    Orders(limit: 300) {
      docs {
        id
      }
    }
  }
`,l=`
  query Order($id: String ) {
    Orders(where: { id: { equals: $id}}) {
      docs {
        id
        orderedBy
        items {
          product ${a.c5}
          title
          priceJSON
        }
      }
    }
  }
`},90488:(e,t,r)=>{"use strict";r.d(t,{E:()=>n,q:()=>s});var a=r(1981),i=r(45603),l=r(95599),o=r(7950);let s=`
  query Pages {
    Pages(limit: 300, where: { slug: { not_equals: "cart" } })  {
      docs {
        slug
      }
    }
  }
`,n=`
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { AND: [{ slug: { equals: $slug }}] }, limit: 1, draft: $draft) {
      docs {
        id
        title
        hero {
          type
          richText
          links {
            link ${(0,i.A)()}
          }
          ${l.i}
        }
        layout {
          ${a.P8}
          ${a.hS}
          ${a.P8}
          ${a.kE}
          ${a.Iy}
        }
        ${o.M}
      }
    }
  }
`},36716:(e,t,r)=>{"use strict";r.d(t,{bQ:()=>o,c5:()=>s});var a=r(1981),i=r(13283),l=r(7950);let o=`
  query Products {
    Products(limit: 300) {
      docs {
        slug
      }
    }
  }
`,s=`
  query Product($slug: String, $draft: Boolean) {
    Products(where: { slug: { equals: $slug}}, limit: 1, draft: $draft) {
      docs {
        id
        title
        stripeProductID
        ${i.Z}
        layout {
          ${a.hS}
          ${a.P8}
          ${a.kE}
          ${a.Iy}
        }
        priceJSON
        enablePaywall
        relatedProducts {
          id
          slug
          title
          ${l.M}
        }
        ${l.M}
      }
    }
  }
`}};