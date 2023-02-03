"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={description:"Tips and solutions for resolving common issues"},i="Troubleshooting",s={unversionedId:"quickstart/troubleshooting",id:"quickstart/troubleshooting",title:"Troubleshooting",description:"Tips and solutions for resolving common issues",source:"@site/docs/quickstart/troubleshooting.md",sourceDirName:"quickstart",slug:"/quickstart/troubleshooting",permalink:"/quickstart/troubleshooting",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/quickstart/troubleshooting.md",tags:[],version:"current",frontMatter:{description:"Tips and solutions for resolving common issues"},sidebar:"mainDocsSidebar",previous:{title:"Industrial routers",permalink:"/quickstart/devices/industrial-routers"},next:{title:"Services",permalink:"/services"}},l={},c=[{value:"The device is offline",id:"the-device-is-offline",level:2},{value:"The device shows attached but does not transmit data",id:"the-device-shows-attached-but-does-not-transmit-data",level:2},{value:"The device shows online but does not transmit data",id:"the-device-shows-online-but-does-not-transmit-data",level:2},{value:"Other general troubleshooting tips",id:"other-general-troubleshooting-tips",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"When you experience issues while connecting your device for the first time, there are several common patterns that can be identified by looking at ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/connected-devices"},(0,r.kt)("strong",{parentName:"a"},"Connected Devices"))," in the Portal.\nIf you do not have any entry in the connected devices, go back to ",(0,r.kt)("a",{parentName:"p",href:"devices/creating-a-device"},"Creating a Device")," and assign the SIM."),(0,r.kt)("p",null,"The device will show different icons that indicate the status\n(",(0,r.kt)("strong",{parentName:"p"},"Offline"),", ",(0,r.kt)("strong",{parentName:"p"},"Attached"),", ",(0,r.kt)("strong",{parentName:"p"},"Online"),", ",(0,r.kt)("strong",{parentName:"p"},"Blocked"),").\nIf no icon is visible, assign a SIM to the device."),(0,r.kt)("p",null,"For most of the troubleshooting, a look at ",(0,r.kt)("strong",{parentName:"p"},"Details")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Events")," is necessary.\nA usual event flow should look like this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update Location - the SIM card is (re)authenticating with a different network element.\nIf successful the device will show as ",(0,r.kt)("strong",{parentName:"li"},"Attached")," and can already receive SMS."),(0,r.kt)("li",{parentName:"ol"},"Update GPRS location - the SIM card has successfully registered for data sessions with a different network element."),(0,r.kt)("li",{parentName:"ol"},"Create PDP context - the device has started a data transfer.\nThe device will show ",(0,r.kt)("strong",{parentName:"li"},"Online")," as long is there is no delete PDP context event."),(0,r.kt)("li",{parentName:"ol"},"Delete PDP context - the device has ended a data transfer.\nThe event details will also show the data transmitted and the device status will be set to ",(0,r.kt)("strong",{parentName:"li"},"Offline"),".")),(0,r.kt)("p",null,"There can be many update locations before or in between the data session."),(0,r.kt)("h2",{id:"the-device-is-offline"},"The device is offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Details")," \u2192 ensure that the device is enabled"),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Details")," \u2192 ",(0,r.kt)("strong",{parentName:"li"},"Events"),".\nValidate if there is any location update event created and rejected.\nThe reasoning should indicate the resolution to the problem. ")),(0,r.kt)("p",null,"If there is no location update event:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure the device is powered on and searches for a network"),(0,r.kt)("li",{parentName:"ul"},"Ensure that the device is in reception of any supported network")),(0,r.kt)("h2",{id:"the-device-shows-attached-but-does-not-transmit-data"},"The device shows attached but does not transmit data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify that the APN is correctly set to ",(0,r.kt)("em",{parentName:"li"},"em")," or use ",(0,r.kt)("em",{parentName:"li"},"emnify")," instead since some devices do not support two-digit APNs.\nYou can find guides for various devices in ",(0,r.kt)("a",{parentName:"li",href:"#getting-the-first-device-online"},"Getting the first device online"),"."),(0,r.kt)("li",{parentName:"ul"},"Ensure that you activate data access and the radio types (i.e., 2G, 3G, 4G) if you change policy settings."),(0,r.kt)("li",{parentName:"ul"},"Make sure mobile data is enabled and that international roaming is allowed."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Details")," \u2192 ",(0,r.kt)("strong",{parentName:"li"},"Events"),".\nValidate if there is any PDP create event and rejected.\nThe reason and resolution is given in the event description.")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Attached")," status does not necessarily mean that the device is powered on.\nIf the device first attaches to a network and then powers off - there is no information towards the emnify network that would allow to detect this."),(0,r.kt)("h2",{id:"the-device-shows-online-but-does-not-transmit-data"},"The device shows online but does not transmit data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure mobile data is enabled, as well as international roaming is allowed."),(0,r.kt)("li",{parentName:"ul"},"Validate under ",(0,r.kt)("strong",{parentName:"li"},"Details")," \u2192 ",(0,r.kt)("strong",{parentName:"li"},"Events")," if any ",(0,r.kt)("inlineCode",{parentName:"li"},"Warn")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Error")," is detected."),(0,r.kt)("li",{parentName:"ul"},"For NB-IoT and LTE-M this behavior can happen when the device automatically connects to a network - rather specify the network that shall be used with using the ",(0,r.kt)("inlineCode",{parentName:"li"},"AT+COPS"),".\nAlso, verify that the network is on emnify\u2019s ",(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/nb-iot-coverage"},"NB-IoTcoverage")," or ",(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/lte-m-coverage"},"LTE-M network coverage")," list."),(0,r.kt)("li",{parentName:"ul"},"Ensure that your data destination and DNS server (default emnify uses Google's ",(0,r.kt)("inlineCode",{parentName:"li"},"8.8.8.8")," DNS server if your device does not specify a DNS server) is not blocked for the device.")),(0,r.kt)("h2",{id:"other-general-troubleshooting-tips"},"Other general troubleshooting tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After configuration changes, make sure they are correctly applied on the device (e.g., with a reboot)."),(0,r.kt)("li",{parentName:"ul"},"Clicking the reset connectivity icon on ",(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},(0,r.kt)("strong",{parentName:"a"},"Connected Devices"))," can also reset the network state and allow your device to freshly reattach."),(0,r.kt)("li",{parentName:"ul"},"The issue may only be present with one network or in the specific location (e.g., due to high interference for this network).\nYou can use the Operator Blacklist to block the network and force the change to a different network.")))}u.isMDXComponent=!0}}]);