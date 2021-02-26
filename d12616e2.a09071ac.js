(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{300:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(342)),o={id:"building-from-source",title:"Building from source"},c={unversionedId:"building-from-source",id:"version-0.4.3/building-from-source",isDocsHomePage:!1,title:"Building from source",description:"Of course you can build it from source &mdash; that is, if you don't mind running a few commands on the terminal, downlaoding some files and moving around some files.",source:"@site/versioned_docs/version-0.4.3/3.building-from-source.md",slug:"/building-from-source",permalink:"/docs/0.4.3/building-from-source",version:"0.4.3",sidebar:"version-0.4.3/docs",previous:{title:"Benchmarking",permalink:"/docs/0.4.3/benchmarking"},next:{title:"Terrapipe 1.0",permalink:"/docs/0.4.3/Protocol/terrapipe"}},s=[{value:"Step 1: Install Rust",id:"step-1-install-rust",children:[]},{value:"Step 2: Clone the tag",id:"step-2-clone-the-tag",children:[]},{value:"Step 3: Build it!",id:"step-3-build-it",children:[]},{value:"Step 4: Get the binaries",id:"step-4-get-the-binaries",children:[]},{value:"Step 5: Run it!",id:"step-5-run-it",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Of course you can build it from source ","\u2014"," that is, if you don't mind running a few commands on the terminal, downlaoding some files and moving around some files."),Object(a.b)("h3",{id:"step-1-install-rust"},"Step 1: Install Rust"),Object(a.b)("p",null,"As TerrabaseDB is written in Rust, you'll have to install the Rust toolchain to build it (a little messy, but not too messy). Go to ",Object(a.b)("a",{parentName:"p",href:"https://rustup.rs/"},"this page")," to set up Rust on your local machine."),Object(a.b)("h3",{id:"step-2-clone-the-tag"},"Step 2: Clone the tag"),Object(a.b)("p",null,"Run this from your terminal:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"git clone --branch v0.4.3 https://github.com/skybasedb/skybase.git\n")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bonus tip")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you want to avoid downloading all the version history, run this instead:"),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",{parentName:"pre"},"git clone --depth 1 --branch v0.4.3 https://github.com/skybasedb/skybase.git\n")))),Object(a.b)("h3",{id:"step-3-build-it"},"Step 3: Build it!"),Object(a.b)("p",null,"Expecting that you're still in the same directory, run:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"cd skybase && cargo build --release\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This will take a ",Object(a.b)("strong",{parentName:"p"},"long time")," so hold on until Cargo finishes building things"))),Object(a.b)("h3",{id:"step-4-get-the-binaries"},"Step 4: Get the binaries"),Object(a.b)("p",null,"You'll need to copy ",Object(a.b)("inlineCode",{parentName:"p"},"tdb")," and ",Object(a.b)("inlineCode",{parentName:"p"},"tsh")," (or ",Object(a.b)("inlineCode",{parentName:"p"},"tdb.exe")," and ",Object(a.b)("inlineCode",{parentName:"p"},"tsh.exe")," if on Windows) from the ",Object(a.b)("inlineCode",{parentName:"p"},"skybase/target/release")," folder. Be sure to copy these ",Object(a.b)("strong",{parentName:"p"},"exact files")," and not something else!"),Object(a.b)("h3",{id:"step-5-run-it"},"Step 5: Run it!"),Object(a.b)("p",null,"You can now follow the instructions ",Object(a.b)("a",{parentName:"p",href:"getting-started"},"here"),"."))}p.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||a;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);