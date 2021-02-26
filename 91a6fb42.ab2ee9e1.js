(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(342)),i={id:"terrapipe",title:"Terrapipe 0.2"},b={unversionedId:"terrapipe",id:"version-0.3.0/terrapipe",isDocsHomePage:!1,title:"Terrapipe 0.2",description:"Date: 17nd July, 2020",source:"@site/versioned_docs/version-0.3.0/5.terrapipe.md",slug:"/terrapipe",permalink:"/docs/0.3.0/terrapipe",version:"0.3.0",sidebar:"version-0.3.0/docs",previous:{title:"Building from source",permalink:"/docs/0.3.0/building-from-source"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Concepts",id:"concepts",children:[]},{value:"Supported actions",id:"supported-actions",children:[]},{value:"Response codes",id:"response-codes",children:[]},{value:"Types of query/response packets",id:"types-of-queryresponse-packets",children:[]},{value:"Simple Query Packet",id:"simple-query-packet",children:[{value:"Simple Query Metaframe (SQM)",id:"simple-query-metaframe-sqm",children:[]},{value:"Line 1: Metaframe <em>metaline</em>",id:"line-1-metaframe-metaline",children:[]},{value:"Line 2: Metaframe <em>metalayout</em>",id:"line-2-metaframe-metalayout",children:[]},{value:"Line 3 (and subsequent lines): Dataframe",id:"line-3-and-subsequent-lines-dataframe",children:[]}]},{value:"Simple Response Packet",id:"simple-response-packet",children:[]},{value:"Pipeline Query Packet",id:"pipeline-query-packet",children:[]},{value:"Pipeline Response Packet",id:"pipeline-response-packet",children:[]},{value:"A note on types",id:"a-note-on-types",children:[{value:"Array responses",id:"array-responses",children:[]}]},{value:"A complete example",id:"a-complete-example",children:[{value:"Simple Query/Response",id:"simple-queryresponse",children:[]},{value:"Pipelined Query/Response",id:"pipelined-queryresponse",children:[]}]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About this document")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},Object(l.b)("strong",{parentName:"p"},"Date:")," 17",Object(l.b)("sup",null,"nd")," July, 2020",Object(l.b)("br",{parentName:"p"}),"\n","Copyright ","\xa9"," 2020 Sayan Nandan"))),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"Terrapipe is an application layer protocol like HTTP, built on top of TCP. It is used by the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/terrabasedb/terrabase"},"Terrabase Database")," for client-server communication. All clients willing to communicate with the Terrabase Database must implement this protocol. This document serves as a guide to implement the protocol."),Object(l.b)("h2",{id:"concepts"},"Concepts"),Object(l.b)("p",null,"Terrapipe works in a query/response action similar to HTTP's request/response action. Clients send queries and the bytes sent over the TCP stream is collectively called the query packet. The server responds with a response packet."),Object(l.b)("p",null,"Both these packets have two frames:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Lines 1 and 2 (Metaframe):",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"The first line (before the first LF) in any of these packets is called the ",Object(l.b)("em",{parentName:"li"},"metaline")," - this contains query/response metadata such as the action type and content length."),Object(l.b)("li",{parentName:"ul"},"The second line (before the second LF) is also a part of the metaframe, and it is called the ",Object(l.b)("em",{parentName:"li"},"metalayout")))),Object(l.b)("li",{parentName:"ul"},"Line 3 and the subsequent lines are collectively called the dataframe"),Object(l.b)("li",{parentName:"ul"},"Each chunk of bytes following the metaframe is terminated with ",Object(l.b)("inlineCode",{parentName:"li"},"\\n")," i.e with LF")),Object(l.b)("h2",{id:"supported-actions"},"Supported actions"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"GET")," : A get query"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"SET")," : A set query"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"UPDATE")," : An update query"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DEL")," : A delete query"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"HEYA")," : A status check query")),Object(l.b)("p",null,"(The number of commands will continue to increase in the future)"),Object(l.b)("h2",{id:"response-codes"},"Response codes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Code"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",{parentName:"tr",align:null},"Okay"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"1")),Object(l.b)("td",{parentName:"tr",align:null},"Not Found"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"2")),Object(l.b)("td",{parentName:"tr",align:null},"Overwrite Error"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"3")),Object(l.b)("td",{parentName:"tr",align:null},"Invalid Metaframe"),Object(l.b)("td",{parentName:"tr",align:null},"The metaframe has an illegal format")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"4")),Object(l.b)("td",{parentName:"tr",align:null},"Incomplete"),Object(l.b)("td",{parentName:"tr",align:null},"The query packet is incomplete")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"5")),Object(l.b)("td",{parentName:"tr",align:null},"Server Error"),Object(l.b)("td",{parentName:"tr",align:null},"An error occurred on the server side")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"6")),Object(l.b)("td",{parentName:"tr",align:null},"Other error"),Object(l.b)("td",{parentName:"tr",align:null},"Some other error response. This error text would be sent in the dataframe")))),Object(l.b)("h2",{id:"types-of-queryresponse-packets"},"Types of query/response packets"),Object(l.b)("p",null,"Queries are of two kinds:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Simple Query Packets - These queries will usually do just one thing. that is one action at a time"),Object(l.b)("li",{parentName:"ul"},"Pipeline Query Packets - These queries are a combination of multiple individual queries")),Object(l.b)("h2",{id:"simple-query-packet"},"Simple Query Packet"),Object(l.b)("h3",{id:"simple-query-metaframe-sqm"},"Simple Query Metaframe (SQM)"),Object(l.b)("p",null,"This is what a typical SQM looks like:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"<METALINE>\n<METALAYOUT>\n")),Object(l.b)("h3",{id:"line-1-metaframe-metaline"},"Line 1: Metaframe ",Object(l.b)("em",{parentName:"h3"},"metaline")),Object(l.b)("p",null,"The metaline has the following general structure:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"*!<CLENGTH>!<ML_LENGTH>\n")),Object(l.b)("p",null,"Where:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"CLENGTH")," - This is the total content length excluding the ",Object(l.b)("em",{parentName:"li"},"metalayout")," line"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ML_LENGTH")," - This is the length of the ",Object(l.b)("em",{parentName:"li"},"metalayout")," line")),Object(l.b)("h4",{id:"example-metaline"},"Example metaline"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"*!22!12\n")),Object(l.b)("h3",{id:"line-2-metaframe-metalayout"},"Line 2: Metaframe ",Object(l.b)("em",{parentName:"h3"},"metalayout")),Object(l.b)("p",null,"The metalayout is kind of like the ",Object(l.b)("em",{parentName:"p"},"skip sequence")," which determines how many bytes are to be read from each partition preceding a ",Object(l.b)("inlineCode",{parentName:"p"},"\\n")," . The metalayout has the following general structure:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"<l1_len>#<l2_len>#<l3_len>#<ln_len>#\n")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"<l1_len>")," , ",Object(l.b)("inlineCode",{parentName:"p"},"<l2_len>")," and so on are the number of data bytes in each line in the dataframe, exclusive of the LF ('\\n') byte."),Object(l.b)("h4",{id:"example-metalayout"},"Example metalayout"),Object(l.b)("p",null,"For a dataframe which looks like: ",Object(l.b)("inlineCode",{parentName:"p"},"set\\nsayan\\n17")," , the corresponding metalayout should be:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"3#5#2#\n")),Object(l.b)("h3",{id:"line-3-and-subsequent-lines-dataframe"},"Line 3 (and subsequent lines): Dataframe"),Object(l.b)("p",null,"The dataframe, well, contains data! It has the following general structure:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"set\\nsayan\\n17\n")),Object(l.b)("p",null,"Every piece of data is separated by ",Object(l.b)("inlineCode",{parentName:"p"},"\\n")," . Do note: this wouldn't cause any issues if a piece of data contains a newline byte as a part of it, since the metalayout defines the skip sequence. ",Object(l.b)("strong",{parentName:"p"},"Please read the ",Object(l.b)("a",{parentName:"strong",href:"#a-note-on-types"},"note on types"))),Object(l.b)("h2",{id:"simple-response-packet"},"Simple Response Packet"),Object(l.b)("p",null,"Simple responses have the following general structure:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"*!<RESPCODE>!<CLENGTH>!<ML_LENGTH>\n<METALAYOUT>\n<DATAFRAME>\n")),Object(l.b)("p",null,"Where:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"RESPOCDE")," - This can have any of the values ",Object(l.b)("a",{parentName:"li",href:"#response-codes"},"listed here")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"CLENGTH")," - This is the total content length excluding the ",Object(l.b)("em",{parentName:"li"},"metalayout")," line"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ML_LENGTH")," - This is the length of the ",Object(l.b)("em",{parentName:"li"},"metalayout")," line"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"METALAYOUT")," - This has the same structure as the ",Object(l.b)("a",{parentName:"li",href:"#line-2-metaframe-metalayout"},"query packet's metalayout")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DATAFRAME")," - This has the same structure as the ",Object(l.b)("a",{parentName:"li",href:"#line-3-and-subsequent-lines-dataframe"},"query packet's dataframe"))),Object(l.b)("h2",{id:"pipeline-query-packet"},"Pipeline Query Packet"),Object(l.b)("p",null,"Pipeline queries are not very different from simple queries, except for the metaline in the metaframe.\nPipeline query packets have the following general structure:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"$!<CLENGTH>!<ML_LENGTH>\n<METALAYOUT>\n<DATAFRAME>\n")),Object(l.b)("p",null,"If you may have noticed, the only difference here, is that, instead of the asterisk (*), you have a Dollar Sign ($). All the other fields have the same meaning as in the ",Object(l.b)("a",{parentName:"p",href:"#simple-query-packet"},"simple query packet")),Object(l.b)("h2",{id:"pipeline-response-packet"},"Pipeline Response Packet"),Object(l.b)("p",null,"Again, pipeline responses are not much different from simple responses, except for having a Dollar Sign ($), in place of the asterisk (*) in the metaline, in the metaframe.\nIt has the following general structure:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"$!<RESPCODE>!<CLENGTH>!<ML_LENGTH>\n<METALAYOUT>\n<DATAFRAME>\n")),Object(l.b)("p",null,"Where the values in ",Object(l.b)("inlineCode",{parentName:"p"},"<>")," have their usual meanings."),Object(l.b)("h2",{id:"a-note-on-types"},"A note on types"),Object(l.b)("p",null,"The server doesn't care much about types when queries are sent, but when responses are sent the server acts a little differently. This is because each query in a pipelined query will give different outcomes - some of them may return\nresponse codes, some of them may return arrays and some of them may return ",Object(l.b)("em",{parentName:"p"},"untyped")," things - since most responses are typically sent as strings, and it is the client's/user's responsibility to parse it into the required types.\nThe server will respond in the following formats, for pipelined queries:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Most values - ",Object(l.b)("inlineCode",{parentName:"li"},"+<value>")," is returned for most successful returns"),Object(l.b)("li",{parentName:"ul"},"Response codes - ",Object(l.b)("inlineCode",{parentName:"li"},"!<respcode>")," is returned if the query returns a response code"),Object(l.b)("li",{parentName:"ul"},"Arrays - ",Object(l.b)("a",{parentName:"li",href:"#array-responses"},"the usual way"))),Object(l.b)("h3",{id:"array-responses"},"Array responses"),Object(l.b)("p",null,"Array responses are actually pretty simple! They look like:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"&<n>element1\\n\nelement2\\n\n...\nelementn\\n\n")),Object(l.b)("p",null,"where ",Object(l.b)("inlineCode",{parentName:"p"},"<n>")," is the number of elements in the array."),Object(l.b)("h2",{id:"a-complete-example"},"A complete example"),Object(l.b)("h3",{id:"simple-queryresponse"},"Simple Query/Response"),Object(l.b)("p",null,"Here, we will assume that all operations are legal, that is while creating new keys, we will assume that the keys didn't exist, that is, there will be no ",Object(l.b)("inlineCode",{parentName:"p"},"Overwrite Error")," ."),Object(l.b)("p",null,"This is the query I run on ",Object(l.b)("inlineCode",{parentName:"p"},"tsh")," :"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"tsh> set sayan 17\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"tsh")," will send bytes like the following (excluding TCP's SYN/SYN ACK/ACK):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"*!12!6\\n3#5#2#\\nSET\\nsayan\\n17\n")),Object(l.b)("p",null,"The server does the action and writes the following back to the TCP stream:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"*!0!0!0\n")),Object(l.b)("p",null,"This is basically a success message, ",Object(l.b)("inlineCode",{parentName:"p"},"*")," since it is a simple response, ",Object(l.b)("inlineCode",{parentName:"p"},"0")," for ",Object(l.b)("inlineCode",{parentName:"p"},"RESPCODE")," , since the action was successful, ",Object(l.b)("inlineCode",{parentName:"p"},"0")," s for ",Object(l.b)("inlineCode",{parentName:"p"},"CLENGTH")," , and ",Object(l.b)("inlineCode",{parentName:"p"},"ML_LENGTH")," since no data is returned."),Object(l.b)("h3",{id:"pipelined-queryresponse"},"Pipelined Query/Response"),Object(l.b)("p",null,"Since we don't have any way to run a pipeline query from ",Object(l.b)("inlineCode",{parentName:"p"},"tsh")," (at the moment), we will assume that the pipeline query wants to do the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"SET sayan 17")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"GET foo")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"HEYA"),"\nThen, the client will send a query packet like:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"$!25!12\\n3#5#2#3#3#4#\\nSET\\nsayan\\n17\\nGET\\nfoo\\nHEYA\n")),Object(l.b)("p",null,"Then, the server will respond like:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"$!15!6\\n2#6#5\\n!0\\n+Hello\\n+HEY!\n")),Object(l.b)("p",null,"Voila! We just saw terrapipe in action. Phew, we're done!"))}s.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=s(n),m=a,d=o["".concat(i,".").concat(m)]||o[m]||u[m]||l;return n?r.a.createElement(d,b(b({ref:t},p),{},{components:n})):r.a.createElement(d,b({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var p=2;p<l;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);