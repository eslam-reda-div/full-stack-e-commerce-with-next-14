"use strict";exports.id=9928,exports.ids=[9928],exports.modules={58141:(e,t,i)=>{let{createProxy:r}=i(17536);e.exports=r("C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\node_modules\\next\\dist\\client\\image-component.js")},72345:(e,t,i)=>{let{createProxy:r}=i(17536);e.exports=r("C:\\Users\\eslam\\OneDrive\\سطح المكتب\\cv\\full-stack-e-commerce-with-next-14\\node_modules\\next\\dist\\client\\link.js")},91078:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),i(46179);let r=i(53986),n=i(70145);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var i;let l,a,d,{src:u,sizes:c,unoptimized:f=!1,priority:m=!1,loading:g,className:h,quality:p,width:b,height:v,fill:w=!1,style:y,onLoad:x,onLoadingComplete:_,placeholder:S="empty",blurDataURL:j,fetchPriority:C,layout:O,objectFit:P,objectPosition:z,lazyBoundary:E,lazyRoot:I,...M}=e,{imgConf:k,showAltText:D,blurComplete:R,defaultLoader:A}=t,G=k||n.imageConfigDefault;if("allSizes"in G)l=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);l={...G,allSizes:e,deviceSizes:t}}let N=M.loader||A;delete M.loader,delete M.srcSet;let B="__next_img_default"in N;if(B){if("custom"===l.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:i,...r}=t;return e(r)}}if(O){"fill"===O&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let F="",L=s(b),U=s(v);if("object"==typeof(i=u)&&(o(i)||void 0!==i.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,d=e.blurHeight,j=j||e.blurDataURL,F=e.src,!w){if(L||U){if(L&&!U){let t=L/e.width;U=Math.round(e.height*t)}else if(!L&&U){let t=U/e.height;L=Math.round(e.width*t)}}else L=e.width,U=e.height}}let W=!m&&("lazy"===g||void 0===g);(!(u="string"==typeof u?u:F)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,W=!1),l.unoptimized&&(f=!0),B&&u.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),m&&(C="high");let V=s(p),T=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:z}:{},D?{}:{color:"transparent"},y),q=R||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:L,heightInt:U,blurWidth:a,blurHeight:d,blurDataURL:j||"",objectFit:T.objectFit})+'")':'url("'+S+'")',J=q?{backgroundSize:T.objectFit||"cover",backgroundPosition:T.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},Y=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:o,sizes:s,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:a,kind:d}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,s),u=a.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:a.map((e,r)=>l({config:t,src:i,quality:o,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:l({config:t,src:i,quality:o,width:a[u]})}}({config:l,src:u,unoptimized:f,width:L,quality:V,sizes:c,loader:N}),H={...M,loading:W?"lazy":g,fetchPriority:C,width:L,height:U,decoding:"async",className:h,style:{...T,...J},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},$={unoptimized:f,priority:m,placeholder:S,fill:w};return{props:H,meta:$}}},53986:(e,t)=>{function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:o,objectFit:s}=e,l=r?40*r:t,a=n?40*n:i,d=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},70145:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return r}});let i=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},2155:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return d},unstable_getImgProps:function(){return a}});let r=i(71974),n=i(91078),o=i(46179),s=i(58141),l=r._(i(4318)),a=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},d=s.Image},4318:(e,t)=>{function i(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},46179:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},75042:(e,t,i)=>{e.exports=i(2155)},44602:(e,t,i)=>{e.exports=i(72345)}};