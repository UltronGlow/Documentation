"use strict";(self.webpackChunkultronglow=self.webpackChunkultronglow||[]).push([[3991],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,b=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6},s="Get Absent",l={unversionedId:"API/Get_Absent",id:"API/Get_Absent",title:"Get Absent",description:"Rate Limits",source:"@site/docs/API/Get_Absent.md",sourceDirName:"API",slug:"/API/Get_Absent",permalink:"/API/Get_Absent",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Get_Absent.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Unbundle Reward and Storage Node Address",permalink:"/API/Unbundle_Reward_And_Storage_Node_Address"},next:{title:"Convert UTG to SRT",permalink:"/API/Convert_UTG_To_SRT"}},i={},p=[{value:"Rate Limits",id:"rate-limits",level:2},{value:"Details",id:"details",level:2},{value:"Request URL parameters",id:"request-url-parameters",level:2},{value:"JSON response body",id:"json-response-body",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-absent"},"Get Absent"),(0,a.kt)("h2",{id:"rate-limits"},"Rate Limits"),(0,a.kt)("p",null,"API calls are limited to 4 calls per minute"),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Item"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Request"),(0,a.kt)("td",{parentName:"tr",align:"left"},"http POST")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Encoding Format"),(0,a.kt)("td",{parentName:"tr",align:"left"},"UTF-8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"URL"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://api.ultronscan.io/platform/utg/getPunished"},"https://api.ultronscan.io/platform/utg/getPunished"))))),(0,a.kt)("h2",{id:"request-url-parameters"},"Request URL parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "current": 1, //Current page number\n  "size": 10, //Articles per page\n  "address": "ux...", //absentee address\n  "blockNumber": 100, //absentee height\n}\n')),(0,a.kt)("h2",{id:"json-response-body"},"JSON response body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "result": {\n    "records": [\n      {\n        "address": "ux...", //absentee address\n        "blockNumber": 68381, //absentee height\n        "fractions": 30, //penalty points\n        "timeStamp": "2022-06-17 09:14:23" //time\n      }\n    ],\n    "total": 13, //total number of absences\n    "size": 10, //Articles per page\n    "current": 1, //Current page number\n    "pages": 2 //total pages\n  },\n  "message": "successful",\n  "statusCode": 0\n}\n')))}c.isMDXComponent=!0}}]);