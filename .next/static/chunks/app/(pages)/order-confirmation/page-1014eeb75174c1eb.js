(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[840],{2218:function(e,r,t){Promise.resolve().then(t.t.bind(t,2537,23)),Promise.resolve().then(t.t.bind(t,7580,23)),Promise.resolve().then(t.bind(t,519))},519:function(e,r,t){"use strict";t.r(r),t.d(r,{OrderConfirmationPage:function(){return f}});var n=t(7437),s=t(2265),o=t(4033),a=t(4780),c=t(1752),i=t(6272),u=t(9660),l=t.n(u);let f=()=>{let e=(0,o.useSearchParams)(),r=e.get("order_id"),t=e.get("error"),{clearCart:u}=(0,i.j)();return(0,s.useEffect)(()=>{u()},[u]),(0,n.jsx)("div",{children:t?(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)(c.v,{error:t}),(0,n.jsx)("p",{children:"Your payment was successful but there was an error processing your order. Please contact us to resolve this issue."}),(0,n.jsxs)("div",{className:l().actions,children:[(0,n.jsx)(a.Button,{href:"/account",label:"View account",appearance:"primary"}),(0,n.jsx)(a.Button,{href:"".concat("http://localhost:3000","/orders"),label:"View all orders",appearance:"secondary"})]})]}):(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)("h1",{children:"Thank you for your order!"}),(0,n.jsx)("p",{children:"Your order has been confirmed. You will receive an email confirmation shortly. Your order ID is ".concat(r,".")}),(0,n.jsxs)("div",{className:l().actions,children:[(0,n.jsx)(a.Button,{href:"/account/orders/".concat(r),label:"View order",appearance:"primary"}),(0,n.jsx)(a.Button,{href:"".concat("http://localhost:3000","/account/orders"),label:"View all orders",appearance:"secondary"})]})]})})}},1752:function(e,r,t){"use strict";t.d(r,{v:function(){return a}});var n=t(7437);t(2265);var s=t(4690),o=t.n(s);let a=e=>{let{message:r,error:t,success:s,warning:a,className:c}=e,i=r||t||s||a;return i?(0,n.jsx)("div",{className:[o().message,c,t&&o().error,s&&o().success,a&&o().warning,!t&&!s&&!a&&o().default].filter(Boolean).join(" "),children:i}):null}},9660:function(e){e.exports={actions:"OrderConfirmationPage_actions__bRe2m"},e.exports.__checksum="2ef4e18f0c80"},2537:function(e){e.exports={confirmationPage:"order-confirmation_confirmationPage__9fSk0"},e.exports.__checksum="9bbcd4f229d9"},7580:function(e){e.exports={gutter:"Gutter_gutter__QB0_n",gutterLeft:"Gutter_gutterLeft__9iSai",gutterRight:"Gutter_gutterRight__4jfEx"},e.exports.__checksum="8b7edfbc03b1"},4690:function(e){e.exports={message:"Message_message__z1tdG",default:"Message_default__RDDb4",warning:"Message_warning__FT9n8",error:"Message_error__WX2fA",success:"Message_success__Cnnxv"},e.exports.__checksum="e7c05ffe3613"},622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,o={},u=null,l=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,n)&&!i.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:u,ref:l,props:o,_owner:c.current}}r.Fragment=o,r.jsx=u,r.jsxs=u},7437:function(e,r,t){"use strict";e.exports=t(622)},1396:function(e,r,t){e.exports=t(4724)},4033:function(e,r,t){e.exports=t(290)}},function(e){e.O(0,[724,408,971,864,744],function(){return e(e.s=2218)}),_N_E=e.O()}]);