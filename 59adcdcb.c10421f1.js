(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(342)),o={id:"getting-started",title:"Getting Started"},l={unversionedId:"getting-started",id:"version-0.3.0/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Getting started with TerrabaseDB is easy \ud83d\ude0a (and fun!).",source:"@site/versioned_docs/version-0.3.0/2.getting-started.md",slug:"/getting-started",permalink:"/docs/0.3.0/getting-started",version:"0.3.0",sidebar:"version-0.3.0/docs",previous:{title:"Introduction",permalink:"/docs/0.3.0/"},next:{title:"Actions overview",permalink:"/docs/0.3.0/Actions/overview"}},s=[{value:"Step 1: Download a bundle",id:"step-1-download-a-bundle",children:[]},{value:"Step 2: Make the files runnable",id:"step-2-make-the-files-runnable",children:[]},{value:"Step 3: Start the database server",id:"step-3-start-the-database-server",children:[]},{value:"Step 4: Run the shell <code>tsh</code>",id:"step-4-run-the-shell-tsh",children:[]}],c={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Getting started with TerrabaseDB is easy \ud83d\ude0a (and fun!)."),Object(i.b)("h3",{id:"step-1-download-a-bundle"},"Step 1: Download a bundle"),Object(i.b)("p",null,"Head over to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/skybasedb/skybase/releases/v0.3.0"},"this page")," and download a version for your platform. Here's a little guide:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you're on Linux: Download ",Object(i.b)("inlineCode",{parentName:"li"},"tdb-bundle-0.3.0-x86_64-linux-gnu.zip")),Object(i.b)("li",{parentName:"ul"},"If you're using macOS: Download ",Object(i.b)("inlineCode",{parentName:"li"},"tdb-bundle-0.3.0-x86_64-macos.zip")),Object(i.b)("li",{parentName:"ul"},"If you're on Windows: Download ",Object(i.b)("inlineCode",{parentName:"li"},"tdb-bundle-0.3.0-x86_64-windows.zip"))),Object(i.b)("h3",{id:"step-2-make-the-files-runnable"},"Step 2: Make the files runnable"),Object(i.b)("p",null,"Unzip the ",Object(i.b)("inlineCode",{parentName:"p"},"zip")," file that you just downloaded. If you're on a *nix system, run ",Object(i.b)("inlineCode",{parentName:"p"},"chmod +x tdb tsh")," to make the files executable. If you're on Windows, right-click the files and then check the ",Object(i.b)("inlineCode",{parentName:"p"},"UNBLOCK")," checkbox and click on the ",Object(i.b)("inlineCode",{parentName:"p"},"APPLY")," button."),Object(i.b)("h3",{id:"step-3-start-the-database-server"},"Step 3: Start the database server"),Object(i.b)("p",null,"In the directory where you extracted the files, run ",Object(i.b)("inlineCode",{parentName:"p"},"./tdb")," on *nix systems or simply ",Object(i.b)("inlineCode",{parentName:"p"},"tdb")," on Windows systems. That's all there is to starting the database server!"),Object(i.b)("h3",{id:"step-4-run-the-shell-tsh"},"Step 4: Run the shell ",Object(i.b)("inlineCode",{parentName:"h3"},"tsh")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"tsh")," is the shell that is shipped with the bundle. Run it, just like you did with the database server. Now enter commands in the shell, and have fun! First run ",Object(i.b)("inlineCode",{parentName:"p"},"HEYA")," to check if everything is fine - the server should reply with ",Object(i.b)("em",{parentName:"p"},"HEY!"),".\nSee all the available actions ",Object(i.b)("a",{parentName:"p",href:"Actions/overview"},"here")),Object(i.b)("p",null,"You're done with setting up ",Object(i.b)("inlineCode",{parentName:"p"},"tdb")," \ud83c\udf89!"))}d.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(o,".").concat(u)]||p[u]||b[u]||i;return n?a.a.createElement(h,l(l({ref:t},c),{},{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);