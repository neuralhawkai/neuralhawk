!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=93)}({0:function(e,t){e.exports=React},1:function(e,t,n){"use strict";(function(e){var n;"undefined"!=typeof window?n=window:void 0!==e&&(n=e),t.a=n}).call(this,n(4))},2:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1);function a(){return r.a.__components}},3:function(e,t,n){"use strict";var r=n(1);t.a=function(e,t){var n=t.name;if(e.displayName=n,void 0!==r.a)return r.a.__templates||(r.a.__templates={}),r.a.__templates[n]=e,{Template:e,name:n}}},4:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(r=window)}e.exports=r},93:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),i=n(2);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}function c(e){var t=e.styles,n=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["styles"]),r=Object(i.a)();return a.a.createElement(r.LandingPage,l({styles:t},n,{style:t.forElement("page",{backgroundColor:"#ffffff"})}),a.a.createElement("div",{className:"formkit-page-header",style:t.forElement("page_header")},a.a.createElement("div",{className:"formkit-container"},a.a.createElement(r.Content,{name:"subheader",defaults:{content:"Our podcast is now live!"}}),a.a.createElement(r.Heading,{className:"formkit-header",name:"header",defaults:{content:"Teaching everything we know to help you earn a living online."}}))),a.a.createElement("div",{className:"formkit-content",style:t.forElement("formkit-content")},a.a.createElement("div",{className:"formkit-content-wrapper"},a.a.createElement("div",{className:"formkit-sidebar"},a.a.createElement(r.Image,{className:"formkit-image",name:"image",size:{h:510,w:510}}),a.a.createElement("div",{className:"formkit-content-column"},a.a.createElement(r.Heading,{className:"formkit-content-header",name:"content_header",tag:"h2",defaults:{content:"Recent Episodes:"}}),a.a.createElement(r.Region,{className:"formkit-content-subheader",name:"content_subheader"},a.a.createElement(r.Content,{defaults:{content:"List your most recent episodes here."}})))),a.a.createElement("div",{className:"formkit-card",style:t.forElement("card")},a.a.createElement(r.Heading,{className:"formkit-form-header",name:"form_header",tag:"h2",defaults:{content:"Don't miss out on our future episodes!"}}),a.a.createElement(r.Region,{className:"formkit-form-subheader",name:"form_subheader"},a.a.createElement(r.Content,{defaults:{content:"New exciting episodes every week."}})),a.a.createElement(r.Form,null,a.a.createElement(r.Errors,null),a.a.createElement(r.CustomFields,null,a.a.createElement(r.AddFieldButton,null),a.a.createElement(r.Button,{name:"submit",group:"button",defaults:{content:"Subscribe to the show"}}))),a.a.createElement(r.Content,{name:"guarantee",defaults:{content:"We won't send you spam. Unsubscribe at any time."}}),a.a.createElement(r.BuiltWith,{background:"card"})))))}c.style="landing_page",c.categories=["Podcast"],c.thumbnail="",c.preview="https://demo.ck.page/fremont",c.fields=[{name:"email_address",label:"Your email address"}],t.default=Object(o.a)(c,{name:"Fremont"})}});
//# sourceMappingURL=fremont.js.map