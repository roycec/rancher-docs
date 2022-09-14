"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[88205],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=a,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73765:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={title:"Rancher Deployment Strategy",weight:100,aliases:["/rancher/v2.5/en/best-practices/v2.5/rancher-server/deployment-strategies","/rancher/v2.x/en/best-practices/v2.5/rancher-server/deployment-strategies/"]},c=void 0,l={unversionedId:"reference-guides/best-practices/rancher-server/rancher-deployment-strategy",id:"version-2.5/reference-guides/best-practices/rancher-server/rancher-deployment-strategy",title:"Rancher Deployment Strategy",description:"There are two recommended deployment strategies for a Rancher server that manages downstream Kubernetes clusters. Each one has its own pros and cons. Read more about which one would fit best for your use case:",source:"@site/versioned_docs/version-2.5/reference-guides/best-practices/rancher-server/rancher-deployment-strategy.md",sourceDirName:"reference-guides/best-practices/rancher-server",slug:"/reference-guides/best-practices/rancher-server/rancher-deployment-strategy",permalink:"/zh/v2.5/reference-guides/best-practices/rancher-server/rancher-deployment-strategy",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/best-practices/rancher-server/rancher-deployment-strategy.md",tags:[],version:"2.5",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Rancher Deployment Strategy",weight:100,aliases:["/rancher/v2.5/en/best-practices/v2.5/rancher-server/deployment-strategies","/rancher/v2.x/en/best-practices/v2.5/rancher-server/deployment-strategies/"]},sidebar:"tutorialSidebar",previous:{title:"Installing Rancher in a vSphere Environment",permalink:"/zh/v2.5/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"},next:{title:"Tips for Running Rancher",permalink:"/zh/v2.5/reference-guides/best-practices/rancher-server/tips-for-running-rancher"}},u={},p=[{value:"Hub &amp; Spoke Strategy",id:"hub--spoke-strategy",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Regional Strategy",id:"regional-strategy",level:2},{value:"Pros",id:"pros-1",level:3},{value:"Cons",id:"cons-1",level:3}],d={toc:p};function h(e){var r=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are two recommended deployment strategies for a Rancher server that manages downstream Kubernetes clusters. Each one has its own pros and cons. Read more about which one would fit best for your use case:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#hub-and-spoke-strategy"},"Hub and Spoke")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#regional-strategy"},"Regional"))),(0,o.kt)("h2",{id:"hub--spoke-strategy"},"Hub & Spoke Strategy"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this deployment scenario, there is a single Rancher control plane managing Kubernetes clusters across the globe. The control plane would be run on a high-availability Kubernetes cluster, and there would be impact due to latencies."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(56904).Z,width:"1332",height:"749"})),(0,o.kt)("h3",{id:"pros"},"Pros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Environments could have nodes and network connectivity across regions."),(0,o.kt)("li",{parentName:"ul"},"Single control plane interface to view/see all regions and environments."),(0,o.kt)("li",{parentName:"ul"},"Kubernetes does not require Rancher to operate and can tolerate losing connectivity to the Rancher control plane.")),(0,o.kt)("h3",{id:"cons"},"Cons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Subject to network latencies."),(0,o.kt)("li",{parentName:"ul"},"If the control plane goes out, global provisioning of new services is unavailable until it is restored. However, each Kubernetes cluster can continue to be managed individually.")),(0,o.kt)("h2",{id:"regional-strategy"},"Regional Strategy"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In the regional deployment model a control plane is deployed in close proximity to the compute nodes."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(38039).Z,width:"1331",height:"557"})),(0,o.kt)("h3",{id:"pros-1"},"Pros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rancher functionality in regions stay operational if a control plane in another region goes down."),(0,o.kt)("li",{parentName:"ul"},"Network latency is greatly reduced, improving the performance of functionality in Rancher."),(0,o.kt)("li",{parentName:"ul"},"Upgrades of the Rancher control plane can be done independently per region.")),(0,o.kt)("h3",{id:"cons-1"},"Cons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Overhead of managing multiple Rancher installations."),(0,o.kt)("li",{parentName:"ul"},"Visibility across global Kubernetes clusters requires multiple interfaces/panes of glass."),(0,o.kt)("li",{parentName:"ul"},"Deploying multi-cluster apps in Rancher requires repeating the process for each Rancher server.")))}h.isMDXComponent=!0},56904:function(e,r,t){r.Z=t.p+"assets/images/hub-and-spoke-e5f8b93bb0f2caaa2932942b77ac2a2f.png"},38039:function(e,r,t){r.Z=t.p+"assets/images/regional-85aa0ca404aa35cee043f324fdbdd3cb.png"}}]);