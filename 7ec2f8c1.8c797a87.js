(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(342)),i={id:"persistence",title:"Persistence"},s={unversionedId:"persistence",id:"version-0.4.2/persistence",isDocsHomePage:!1,title:"Persistence",description:"TerrabaseDB supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how TerrabaseDB's persistence works.",source:"@site/versioned_docs/version-0.4.2/4.persistence.md",slug:"/persistence",permalink:"/docs/0.4.2/persistence",version:"0.4.2",sidebar:"version-0.4.2/docs",previous:{title:"UPDATE",permalink:"/docs/0.4.2/Actions/update"},next:{title:"Configuration Files",permalink:"/docs/0.4.2/config-files"}},c=[{value:"How TDB stores data",id:"how-tdb-stores-data",children:[]},{value:"Automated background saving",id:"automated-background-saving",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"TerrabaseDB supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how TerrabaseDB's persistence works. "),Object(a.b)("h2",{id:"how-tdb-stores-data"},"How TDB stores data"),Object(a.b)("p",null,"Whenever you start the database, TDB looks for a ",Object(a.b)("inlineCode",{parentName:"p"},"data.bin")," file, which contains data from the previous run of the database server. This is a binary file and should not be edited by hand: as you might end up corrupting the file.\nWhen you shut down the database, TDB stops stops listening to all incoming connections, and then flushes the entire in-memory table onto disk and then shutting down."),Object(a.b)("h2",{id:"automated-background-saving"},"Automated background saving"),Object(a.b)("p",null,"Since 0.4.2, TerrabaseDB supports automated saving of data in the background, via ",Object(a.b)("inlineCode",{parentName:"p"},"BGSAVE")," . ",Object(a.b)("inlineCode",{parentName:"p"},"BGSAVE")," , runs every two minutes to flush all the data in the in-memory table onto disk, unless customized through the ",Object(a.b)("a",{parentName:"p",href:"config-files/#an-example-configuration"},"configuration file"),"."))}p.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||l[b]||a;return n?o.a.createElement(f,s(s({ref:t},u),{},{components:n})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);