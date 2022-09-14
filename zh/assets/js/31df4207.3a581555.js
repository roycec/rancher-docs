"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[20770],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},21442:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={title:"Rancher 2.5",shortTitle:"Rancher 2.5",description:"Rancher adds significant value on top of Kubernetes: managing hundreds of clusters from one interface, centralizing RBAC, enabling monitoring and alerting. Read more.",metaTitle:"Rancher 2.5 Docs: What is New?",metaDescription:"Rancher 2 adds significant value on top of Kubernetes: managing hundreds of clusters from one interface, centralizing RBAC, enabling monitoring and alerting. Read more.",insertOneSix:!1,weight:2,ctaBanner:0,slug:"/"},s=void 0,l={unversionedId:"rancher-manager",id:"version-2.5/rancher-manager",title:"Rancher 2.5",description:"Rancher adds significant value on top of Kubernetes: managing hundreds of clusters from one interface, centralizing RBAC, enabling monitoring and alerting. Read more.",source:"@site/versioned_docs/version-2.5/rancher-manager.md",sourceDirName:".",slug:"/",permalink:"/zh/v2.5/",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/rancher-manager.md",tags:[],version:"2.5",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Rancher 2.5",shortTitle:"Rancher 2.5",description:"Rancher adds significant value on top of Kubernetes: managing hundreds of clusters from one interface, centralizing RBAC, enabling monitoring and alerting. Read more.",metaTitle:"Rancher 2.5 Docs: What is New?",metaDescription:"Rancher 2 adds significant value on top of Kubernetes: managing hundreds of clusters from one interface, centralizing RBAC, enabling monitoring and alerting. Read more.",insertOneSix:!1,weight:2,ctaBanner:0,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/zh/v2.5/getting-started"}},u={},d=[],p={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher was originally built to work with multiple orchestrators, and it included its own orchestrator called Cattle. With the rise of Kubernetes in the marketplace, Rancher 2 exclusively deploys and manages Kubernetes clusters running anywhere, on any provider."),(0,o.kt)("p",null,"Rancher can provision Kubernetes from a hosted provider, provision compute nodes and then install Kubernetes onto them, or import existing Kubernetes clusters running anywhere."),(0,o.kt)("p",null,"Rancher adds significant value on top of Kubernetes, first by centralizing authentication and role-based access control (RBAC) for all of the clusters, giving global admins the ability to control cluster access from one location."),(0,o.kt)("p",null,"It then enables detailed monitoring and alerting for clusters and their resources, ships logs to external providers, and integrates directly with Helm via the Application Catalog. If you have an external CI/CD system, you can plug it into Rancher, but if you don't, Rancher even includes ",(0,o.kt)("a",{parentName:"p",href:"http://fleet.rancher.io/"},"Fleet")," to help you automatically deploy and upgrade workloads."),(0,o.kt)("p",null,"Rancher is a ",(0,o.kt)("em",{parentName:"p"},"complete")," container management platform for Kubernetes, giving you the tools to successfully run Kubernetes anywhere."))}f.isMDXComponent=!0}}]);