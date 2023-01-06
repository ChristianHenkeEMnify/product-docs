"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[9],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},S=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),S=i,m=d["".concat(c,".").concat(S)]||d[S]||u[S]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=S;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}S.displayName="MDXCreateElement"},8898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={description:"Send/receive SMS via the emnify Portal, SMS APIs, or Zapier"},a="SMS",s={unversionedId:"services/sms",id:"services/sms",title:"SMS",description:"Send/receive SMS via the emnify Portal, SMS APIs, or Zapier",source:"@site/docs/services/sms.md",sourceDirName:"services",slug:"/services/sms",permalink:"/product-docs/services/sms",draft:!1,editUrl:"https://github.com/EMnify/product-docs/blob/main/docs/services/sms.md",tags:[],version:"current",frontMatter:{description:"Send/receive SMS via the emnify Portal, SMS APIs, or Zapier"},sidebar:"mainDocsSidebar",previous:{title:"OpenVPN",permalink:"/product-docs/services/openvpn"},next:{title:"User management",permalink:"/product-docs/services/user-management"}},c={},l=[{value:"emnify Portal",id:"emnify-portal",level:2},{value:"emnify SMS REST API and webhook",id:"emnify-sms-rest-api-and-webhook",level:2},{value:"Zapier SMS integration",id:"zapier-sms-integration",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sms"},"SMS"),(0,i.kt)("p",null,"Short Message Services (SMS) were one of the first cellular services made available after voice.\nSMS is still very relevant for IoT use cases \u2013 as SMS provides a simple, inexpensive way to configure the device remotely without the need for a data connection.\nA typical use case is the configuration of the APN setting via SMS."),(0,i.kt)("p",null,"The emnify platform supports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mobile originated (MO) SMS \u2013 SMS sent from the device with the emnify SIM"),(0,i.kt)("li",{parentName:"ul"},"Mobile terminated (MT) SMS \u2013 SMS that are destined for a device with the emnify SIM"),(0,i.kt)("li",{parentName:"ul"},"Peer-to-Peer (P2P) SMS \u2013 SMS sent from a device with any SIM to a device with the emnify SIM"),(0,i.kt)("li",{parentName:"ul"},"Application- to-peer (A2P) SMS \u2013 The SMS is sent and received on an application")),(0,i.kt)("p",null,"The scenarios above can be activated and deactivated in the device policies to prevent misuse (e.g., P2P SMS)."),(0,i.kt)("p",null,"You can send and receive SMSs of your devices through 3 different interfaces Portal, SMS APIs, and Zapier."),(0,i.kt)("h2",{id:"emnify-portal"},"emnify Portal"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"Portal")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"Connected Devices")," you can access the SMS console and directly send SMS to the devices.\nThe sender can be configured as well as the console will show if the SMS is delivered or not.\nYou will see all SMSs that the device receives sends out."),(0,i.kt)("h2",{id:"emnify-sms-rest-api-and-webhook"},"emnify SMS REST API and webhook"),(0,i.kt)("p",null,"For sending SMS through the REST API, check out the\xa0",(0,i.kt)("a",{parentName:"p",href:"#_sending_and_receiving_sms"},"Sending and receiving SMS"),"\xa0section."),(0,i.kt)("p",null,"For receiving SMS and delivery notifications for SMS in your application, you can use the SMS webhook which can be configured under ",(0,i.kt)("strong",{parentName:"p"},"Device Policies")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"Service Policies")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"SMS Interface"),".\nSelect Webhook and configure the URL and optionally, secret token to where you want the SMS to be delivered."),(0,i.kt)("p",null,"When you want to send an SMS from the device to your application, your device should send the SMS to an invalid\xa0",(0,i.kt)("a",{parentName:"p",href:"#msisdn"},"MSISDN"),"\xa0with 8 digits or less.\nThe SMS will then be delivered over the webhook."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mobile originated SMS",src:n(3980).Z,width:"600",height:"630"}),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"Mobile originated SMS from the device as received in Integromat webhook")),(0,i.kt)("h2",{id:"zapier-sms-integration"},"Zapier SMS integration"),(0,i.kt)("p",null,"Instead of implementing the APIs in your application, emnify and Zapier provide a no-code alternative to automate SMS workflows.\nZapier has a concept of triggers and actions \u2013 when a trigger happens multiple actions can be based on it \u2013 taking content from previous steps.\nSending SMS to your devices is available as an action in Zapier."),(0,i.kt)("p",null,'For acting upon SMS delivery notification or SMSs that are sent from a device, you need to set up a webhook in Zapier.\nCreate a zap using "Webhook by Zapier" and select "Catch Hook" as trigger event.\nYou will get a custom webhook URL which will be used in the next step.'),(0,i.kt)("p",null,"Now you need to enter this webhook URL in the ",(0,i.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"Device Policies")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"Choose SMS interface"),", select ",(0,i.kt)("strong",{parentName:"p"},"Webhook"),", click ",(0,i.kt)("strong",{parentName:"p"},"Configure Webhook"),", enter the URL, then ",(0,i.kt)("strong",{parentName:"p"},"Add Webhook"),".\nAll SMS delivery notification and device originated SMS with this service policy will then be delivered over the webhook."))}d.isMDXComponent=!0},3980:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mosms-141a0aebd0de96626416d3ef6e618071.png"}}]);