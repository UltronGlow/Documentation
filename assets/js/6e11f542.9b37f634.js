"use strict";(self.webpackChunkultronglow=self.webpackChunkultronglow||[]).push([[4591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:8},i="Get List of PoS Nodes",s={unversionedId:"API/Get_List_Of_PoS_Nodes",id:"API/Get_List_Of_PoS_Nodes",title:"Get List of PoS Nodes",description:"Rate Limits",source:"@site/docs/API/Get_List_Of_PoS_Nodes.md",sourceDirName:"API",slug:"/API/Get_List_Of_PoS_Nodes",permalink:"/API/Get_List_Of_PoS_Nodes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Get_List_Of_PoS_Nodes.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Convert UTG to SRT",permalink:"/API/Convert_UTG_To_SRT"},next:{title:"Get PoS Node Delegation Information",permalink:"/API/Get_PoS_Node_Delegation_Information"}},l={},d=[{value:"Rate Limits",id:"rate-limits",level:2},{value:"Details",id:"details",level:2},{value:"JSON response body",id:"json-response-body",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-list-of-pos-nodes"},"Get List of PoS Nodes"),(0,a.kt)("h2",{id:"rate-limits"},"Rate Limits"),(0,a.kt)("p",null,"API calls are limited to 4 calls per minute"),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Item"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Request"),(0,a.kt)("td",{parentName:"tr",align:"left"},"http GET/POST")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Encoding Format"),(0,a.kt)("td",{parentName:"tr",align:"left"},"UTF-8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"URL"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://api.ultronscan.io/third/getPosNodes"},"https://api.ultronscan.io/third/getPosNodes"))))),(0,a.kt)("h2",{id:"json-response-body"},"JSON response body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "result": {\n    "list":[{ //pos node list\n      "node_address": "ux...", //pos node address\n      "revenue_address": "ux...", //reward address\n      "manage_address": "ux...", //admin address\n      "node_type": 2, //Node type 1: Pre-candidate node 2: Ultron node\n      "pledge_amount": 16099000000000,//pledge amount\n      "charge_rate": 100, //rate value percentage value\n      "penalty_points": 0, //penalty points\n      "active_height": 8400 //active height\n    }]\n  },\n  "message": "successful",\n  "statusCode": 0\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"All amounts have 18 digits.  For example, 1000000000000000000, which in this case = 1 UTG.")))}c.isMDXComponent=!0}}]);