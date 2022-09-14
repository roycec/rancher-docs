"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98920],{3905:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return m}});var r=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var s=r.createContext({}),l=function(t){var n=r.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},p=function(t){var n=l(t.components);return r.createElement(s.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),f=l(e),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return e?r.createElement(d,a(a({ref:n},p),{},{components:e})):r.createElement(d,a({ref:n},p))}));function m(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var i=e.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var l=2;l<i;l++)a[l]=e[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}f.displayName="MDXCreateElement"},99742:function(t,n,e){e.r(n),e.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=e(87462),o=e(63366),i=(e(67294),e(3905)),a=["components"],c={title:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u5176\u4ed6\u6b65\u9aa4",weight:4},s=void 0,l={unversionedId:"explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation",id:"explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation",title:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u5176\u4ed6\u6b65\u9aa4",description:"\u5728\u96c6\u7fa4\u4e2d\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation.md",sourceDirName:"explanations/integrations-in-rancher/istio/configuration-options",slug:"/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation",permalink:"/zh/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u5176\u4ed6\u6b65\u9aa4",weight:4},sidebar:"tutorialSidebar",previous:{title:"\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio \u7684\u5176\u4ed6\u6b65\u9aa4",permalink:"/zh/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"},next:{title:"Longhorn - Kubernetes \u7684\u4e91\u539f\u751f\u5206\u5e03\u5f0f\u5757\u5b58\u50a8",permalink:"/zh/explanations/integrations-in-rancher/longhorn"}},p={},u=[],f={toc:u};function m(t){var n=t.components,e=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u96c6\u7fa4\u4e2d\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f60\u540c\u65f6\u4f7f\u7528\u4e86 Canal \u7f51\u7edc\u63d2\u4ef6\u4e0e Rancher 2.5.8 \u4e4b\u524d\u7248\u672c\uff0c\u6216\u8005\u540c\u65f6\u4f7f\u7528\u4e86 Rancher 2.5.8+ \u4ee5\u53ca\u4efb\u610f\u652f\u6301\u6267\u884c Kubernetes \u7f51\u7edc\u7b56\u7565\u7684 RKE \u7f51\u7edc\u63d2\u4ef6\uff08\u4f8b\u5982 Canal \u6216 Cisco ACI \u63d2\u4ef6\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u542f\u7528\u4e86\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u9009\u9879\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u4e86 Istio Ingress \u6a21\u5757\u3002")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cIstio Ingress Gateway pod \u65e0\u6cd5\u5c06\u5165\u53e3\u6d41\u91cf\u91cd\u5b9a\u5411\u5230\u5de5\u4f5c\u8d1f\u8f7d\u3002\u8fd9\u662f\u56e0\u4e3a\u5b89\u88c5\u4e86 Istio \u7684\u547d\u540d\u7a7a\u95f4\u65e0\u6cd5\u8bbf\u95ee\u6240\u6709\u547d\u540d\u7a7a\u95f4\u3002\u4e3a\u6b64\u4f60\u6709\u4e24\u4e2a\u9009\u9879\u3002"),(0,i.kt)("p",null,"\u7b2c\u4e00\u4e2a\u9009\u9879\u662f\u5728\u9700\u8981\u8ba9 Istio \u63a7\u5236\u5165\u53e3\u7684\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u7f51\u7edc\u7b56\u7565\u3002\u4f60\u7684\u7b56\u7565\u9700\u8981\u5305\u62ec\u4ee5\u4e0b\u51e0\u884c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- podSelector:\n    matchLabels:\n      app: istio-ingressgateway\n")),(0,i.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u9009\u9879\u662f\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"istio-system")," \u547d\u540d\u7a7a\u95f4\u79fb\u52a8\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"system")," \u9879\u76ee\u4e2d\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8be5\u9879\u76ee\u88ab\u6392\u9664\u5728\u7f51\u7edc\u9694\u79bb\u4e4b\u5916\u3002"))}m.isMDXComponent=!0}}]);