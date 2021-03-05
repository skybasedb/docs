(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{302:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(342)),c={id:"overview",title:"Actions overview"},o={unversionedId:"Actions/overview",id:"Actions/overview",isDocsHomePage:!1,title:"Actions overview",description:"Actions are like shell commands",source:"@site/docs/Actions/1.actions.md",slug:"/Actions/overview",permalink:"/next/Actions/overview",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/next/"},next:{title:"DBSIZE",permalink:"/next/Actions/dbsize"}},l=[],b={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Actions are like shell commands: they take arguments and do something! Skytable currently supports the following actions: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"dbsize"},"DBSIZE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"del"},"DEL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"exists"},"EXISTS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"flushdb"},"FLUSHDB")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"get"},"GET")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"heya"},"HEYA")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"keylen"},"KEYLEN")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"mget"},"MGET")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"mksnap"},"MKSNAP")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"mset"},"MSET")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"mupdate"},"MUPDATE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"sdel"},"SDEL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"set"},"SET")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"sset"},"SSET")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"supdate"},"SUPDATE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"update"},"UPDATE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"uset"},"USET"))))}p.isMDXComponent=!0},342:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,f=u["".concat(c,".").concat(s)]||u[s]||m[s]||i;return r?a.a.createElement(f,o(o({ref:t},b),{},{components:r})):a.a.createElement(f,o({ref:t},b))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);