(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{134:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),a=(t(0),t(410)),i={id:"errors",title:"Error Strings"},s={unversionedId:"Protocol/errors",id:"version-0.5.1/Protocol/errors",isDocsHomePage:!1,title:"Error Strings",description:"In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes.",source:"@site/versioned_docs/version-0.5.1/Protocol/errors.md",slug:"/Protocol/errors",permalink:"/0.5.1/Protocol/errors",version:"0.5.1",sidebar:"version-0.5.1/docs",previous:{title:"Response Codes",permalink:"/0.5.1/Protocol/response-codes"}},c=[{value:"Table of errors",id:"table-of-errors",children:[]}],l={toc:c};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes."),Object(a.b)("h2",{id:"table-of-errors"},"Table of errors"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Error String"),Object(a.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"err-access-after-termsig"),Object(a.b)("td",{parentName:"tr",align:null},"This error indicates that a connection was accepted by the server even after the database received a termination signal. This is a very bad error and should be reported immediately")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"err-snapshot-busy"),Object(a.b)("td",{parentName:"tr",align:null},"This indicates that a snapshot operation is already in progress")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"err-snapshot-disabled"),Object(a.b)("td",{parentName:"tr",align:null},"This indicates that snapshots have been disabled on the server-side")))))}p.isMDXComponent=!0},410:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},b=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(t),d=n,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return t?o.a.createElement(f,s(s({ref:r},l),{},{components:t})):o.a.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);