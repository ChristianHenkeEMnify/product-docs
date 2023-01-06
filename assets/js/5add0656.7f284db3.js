"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[353],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={title:"Getting started",description:"Benefits of the Data Streamer and how you can get started"},o="Getting started with the Data Streamer",s={unversionedId:"services/data-streamer/getting-started",id:"services/data-streamer/getting-started",title:"Getting started",description:"Benefits of the Data Streamer and how you can get started",source:"@site/docs/services/data-streamer/getting-started.md",sourceDirName:"services/data-streamer",slug:"/services/data-streamer/getting-started",permalink:"/product-docs/services/data-streamer/getting-started",draft:!1,editUrl:"https://github.com/EMnify/product-docs/blob/main/docs/services/data-streamer/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting started",description:"Benefits of the Data Streamer and how you can get started"},sidebar:"mainDocsSidebar",previous:{title:"Data Streamer",permalink:"/product-docs/services/data-streamer"},next:{title:"Connection types",permalink:"/product-docs/services/data-streamer/connection-types"}},c={},l=[{value:"Benefits",id:"benefits",level:2},{value:"Using the Data Streamer",id:"using-the-data-streamer",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-the-data-streamer"},"Getting started with the Data Streamer"),(0,n.kt)("p",null,"Before a device can send data to an application, it must communicate with the mobile network to ensure that it can send the data over that network.\nThis communication happens through signaling events, which are usually hidden from the application."),(0,n.kt)("p",null,"With the emnify Data Streamer, this connectivity metadata is made available to your cloud platform or self-developed software stacks in near real time.\nUsing one of the many integrations provides you with complete network transparency to triage and resolve issues quickly and build your application or business logic based on the provided information."),(0,n.kt)("p",null,"These integrations also provide insights for IoT remote monitoring and anomaly detection or detailed information about service usage (i.e., data, SMS) and cost per device.\nYou can also configure data streams to reflect events generated by the emnify system when your users perform billing-related updates, order SIMs, or perform other operations."),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connectivity metadata integrated into operational dashboards for service teams"),(0,n.kt)("li",{parentName:"ul"},"Faster triaging between the device, connectivity, and application issues"),(0,n.kt)("li",{parentName:"ul"},"Insights about network attach, data, and roaming issues or when a device is above the service limit"),(0,n.kt)("li",{parentName:"ul"},"Overview of service usage and cost per device")),(0,n.kt)("h2",{id:"using-the-data-streamer"},"Using the Data Streamer"),(0,n.kt)("p",null,"There are two main ways to manage data streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"usage#data-streamer-in-the-portal"},"The emnify Portal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"usage#data-streamer-api"},"emnify REST API")," ")),(0,n.kt)("p",null,"More information on these systems and how they compare is available on the ",(0,n.kt)("a",{parentName:"p",href:"usage"},"Using the Data Streamer")," page."))}p.isMDXComponent=!0}}]);