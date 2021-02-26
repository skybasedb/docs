(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{303:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(342)),o={id:"config-files",title:"Configuration Files"},l={unversionedId:"config-files",id:"version-0.5.0/config-files",isDocsHomePage:!1,title:"Configuration Files",description:"TerrabaseDB supports custom configuration files to let users customize the functioning of TDB. Arguably, TDB has one of the simplest configuration files around. TerrabaseDB also allows configuration via command line arguments.",source:"@site/versioned_docs/version-0.5.0/5.cfg-files.md",slug:"/config-files",permalink:"/docs/config-files",version:"0.5.0",sidebar:"version-0.5.0/docs",previous:{title:"Persistence",permalink:"/docs/persistence"},next:{title:"Command-line configuration",permalink:"/docs/config-cmd"}},c=[{value:"An example configuration",id:"an-example-configuration",children:[]},{value:"Using a configuration file",id:"using-a-configuration-file",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"TerrabaseDB supports custom configuration files to let users customize the functioning of TDB. Arguably, TDB has one of the simplest configuration files around. TerrabaseDB also allows configuration via ",Object(r.b)("a",{parentName:"p",href:"config-cmd"},"command line arguments"),"."),Object(r.b)("h2",{id:"an-example-configuration"},"An example configuration"),Object(r.b)("p",null,"A configuration file is a TOML file, which looks like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-toml"},'[server]\nhost = "127.0.0.1"\nport = 2003\nnoart = false\n\n[bgsave]\nenabled = true\nevery = 120 # Every 120 seconds\n')),Object(r.b)("p",null,"This is the default configuration used by TDB when you don't specify a configuration file. Let's understand what each of the keys mean:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"server")," :",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"host")," : This is the IP address to which you want the database server to bind to. It can be any valid IPv4 ",Object(r.b)("em",{parentName:"li"},"or")," IPv6 address, as a quoted string"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"port")," : This is the port to which you want TDB to bind to"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"noart")," (OPTIONAL): This is ",Object(r.b)("strong",{parentName:"li"},"an optional argument")," and is recommended for secure environments where displaying terminal artwork might cause problems"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bgsave"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enabled")," : This is an optional key, which is to be set to true to enable BGSAVE or false to disable it. If this key is not specified, TDB will enable BGSAVE by default"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"every")," : Run BGSAVE ",Object(r.b)("inlineCode",{parentName:"li"},"every")," seconds. So, for example, if you set this to 120, BGSAVE will run every two minutes. This is also an optional key, and if you don't provide it, the default BGSAVE duration of 120 seconds is used"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"snapshot")," (OPTIONAL): This key can be used to configure snapshots and is not enabled by default. See ",Object(r.b)("a",{parentName:"li",href:"snapshots"},"this")," for more information.")),Object(r.b)("h2",{id:"using-a-configuration-file"},"Using a configuration file"),Object(r.b)("p",null,"To use a configuration file:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create it! We recommend you to name it as ",Object(r.b)("inlineCode",{parentName:"li"},"tdb.toml")," for easy identification"),Object(r.b)("li",{parentName:"ol"},"Start the database server with: ",Object(r.b)("inlineCode",{parentName:"li"},"tdb -c /path/to/your/file.toml")),Object(r.b)("li",{parentName:"ol"},"Done \ud83c\udf89")),Object(r.b)("p",null,"If you're confused about creating a configuration file, we always recommend you to download a sample file from ",Object(r.b)("a",{parentName:"p",href:"https://github.com/terrabasedb/terrabasedb/blob/next/examples/config-files/template.toml"},"this link"),". Do note that this file is bleeding-edge and as a result will have new keys as they're created upstream."),Object(r.b)("p",null,"That's all that's there for using configuration files!"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bonus tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you're using a custom host/port, then you can bind ",Object(r.b)("inlineCode",{parentName:"p"},"tsh")," to a custom host/port by starting ",Object(r.b)("inlineCode",{parentName:"p"},"tsh")," like:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"tsh -h [HOST] -p [PORT]\n")),Object(r.b)("p",{parentName:"div"},"You can do the same for ",Object(r.b)("inlineCode",{parentName:"p"},"tdb-bench"),":"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"tdb-bench -h [HOST] -p [PORT]\n")))))}b.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?i.a.createElement(d,l(l({ref:t},s),{},{components:n})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);