"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99329],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80372:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Helm \u7248\u672c\u8981\u6c42",weight:3},s=void 0,u={unversionedId:"getting-started/installation-and-upgrade/resources/helm-version-requirements",id:"getting-started/installation-and-upgrade/resources/helm-version-requirements",title:"Helm \u7248\u672c\u8981\u6c42",description:"\u672c\u6587\u4ecb\u7ecd Helm \u7684\u8981\u6c42\u3002Helm \u662f\u7528\u4e8e\u628a Rancher \u5b89\u88c5\u5728\u9ad8\u53ef\u7528 Kubernetes \u96c6\u7fa4\u4e0a\u7684\u5de5\u5177\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/resources/helm-version-requirements.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/helm-version-requirements",permalink:"/zh/getting-started/installation-and-upgrade/resources/helm-version-requirements",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/resources/helm-version-requirements.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Helm \u7248\u672c\u8981\u6c42",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u9009\u62e9 Rancher \u7248\u672c",permalink:"/zh/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},next:{title:"\u6dfb\u52a0 TLS \u5bc6\u6587",permalink:"/zh/getting-started/installation-and-upgrade/resources/add-tls-secrets"}},c={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd Helm \u7684\u8981\u6c42\u3002Helm \u662f\u7528\u4e8e\u628a Rancher \u5b89\u88c5\u5728\u9ad8\u53ef\u7528 Kubernetes \u96c6\u7fa4\u4e0a\u7684\u5de5\u5177\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u5df2\u9488\u5bf9 Helm 3 \u66f4\u65b0\u4e86\u5b89\u88c5\u6307\u5357\u3002\u5982\u679c\u4f60\u4f7f\u7528 Helm 2 \u8fdb\u884c\u5b89\u88c5\uff0c\u8bf7\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"Helm 2 \u8fc1\u79fb\u5230 Helm 3 \u6587\u6863"),"\u3002",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm2"},"\u672c\u6587"),"\u63d0\u4f9b\u4e86\u8f83\u65e9\u7684\u4f7f\u7528 Helm 2 \u7684 Rancher \u9ad8\u53ef\u7528\u5b89\u88c5\u6307\u5357\u7684\u526f\u672c\u3002\u5982\u679c\u4f60\u5982\u679c\u65e0\u6cd5\u5347\u7ea7\u5230 Helm 3\uff0c\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u8bf4\u660e\u5b89\u88c5\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u9700\u5b89\u88c5\u6216\u5347\u7ea7 Rancher 2.5\uff0c\u8bf7\u4f7f\u7528 Helm 3.2.x \u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes 1.16 \u8981\u6c42 Helm 2.16.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002\u5982\u679c\u4f7f\u7528\u7684\u662f\u9ed8\u8ba4 Kubernetes \u7248\u672c\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/rke/releases"},"\u53d1\u884c\u8bf4\u660e"),"\u83b7\u53d6\u6240\u4f7f\u7528\u7684 RKE \u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u4e0d\u8981\u4f7f\u7528 Helm 2.15.0\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u7248\u672c\u6709\u8f6c\u6362/\u6bd4\u8f83\u6570\u5b57\u7684\u95ee\u9898\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u4e0d\u8981\u4f7f\u7528 Helm 2.12.0\uff0c\u56e0\u4e3a\u8be5\u7248\u672c\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"cert-manager")," \u7684\u517c\u5bb9\u95ee\u9898\u3002")))}d.isMDXComponent=!0}}]);