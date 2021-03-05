(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(342)),o={id:"data-types",title:"Data Types"},i={unversionedId:"Protocol/data-types",id:"version-0.4.5/Protocol/data-types",isDocsHomePage:!1,title:"Data Types",description:"This table lists all data types supported by Skytable and their corresponding",source:"@site/versioned_docs/version-0.4.5/Protocol/data-types.md",slug:"/Protocol/data-types",permalink:"/0.4.5/Protocol/data-types",version:"0.4.5",sidebar:"version-0.4.5/docs",previous:{title:"Terrapipe 1.0",permalink:"/0.4.5/Protocol/terrapipe"},next:{title:"Response Codes",permalink:"/0.4.5/Protocol/response-codes"}},b=[],c={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This table lists all data types supported by Skytable and their corresponding\ntype symbols ( ",Object(l.b)("inlineCode",{parentName:"p"},"tsymbol")," s) and additional information."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type symbol (tsymbol)"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Additional notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"+"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"the next line is a string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"!"),Object(l.b)("td",{parentName:"tr",align:null},"Response Code"),Object(l.b)("td",{parentName:"tr",align:null},"the next line is a response code")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"$"),Object(l.b)("td",{parentName:"tr",align:null},"JSON"),Object(l.b)("td",{parentName:"tr",align:null},"the next line is a ",Object(l.b)("inlineCode",{parentName:"td"},"JSON")," value")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"smallint"),Object(l.b)("td",{parentName:"tr",align:null},"An integer in the range: ","[0, 255]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_"),Object(l.b)("td",{parentName:"tr",align:null},"smallint signed"),Object(l.b)("td",{parentName:"tr",align:null},"An integer in the range: ","[-128, 127]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},":"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"An integer in the range: ","[0, 4,294,967,295]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},";"),Object(l.b)("td",{parentName:"tr",align:null},"int signed"),Object(l.b)("td",{parentName:"tr",align:null},"An integer in the range: ","[-2,147,483,647, 2,147,483,647]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},"A 32-bit floating point value")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"?"),Object(l.b)("td",{parentName:"tr",align:null},"binary"),Object(l.b)("td",{parentName:"tr",align:null},"the next line contains binary data (often called a blob)")))),Object(l.b)("p",null,"Do keep the matching for this symbol ",Object(l.b)("em",{parentName:"p"},"non-exhaustive")," since we might add more types in future revisions of the protocol."))}p.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,m=d["".concat(o,".").concat(s)]||d[s]||u[s]||l;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);