"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[16091],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31e3:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"1. \u5728\u96c6\u7fa4\u4e2d\u542f\u7528 Istio",weight:1},u=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",id:"how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",title:"1. \u5728\u96c6\u7fa4\u4e2d\u542f\u7528 Istio",description:"- \u53ea\u6709\u5206\u914d\u4e86 cluster-admin Kubernetes \u9ed8\u8ba4\u89d2\u8272\u7684\u7528\u6237\u53ef\u4ee5\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u914d\u7f6e\u548c\u5b89\u88c5 Istio\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"1. \u5728\u96c6\u7fa4\u4e2d\u542f\u7528 Istio",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e\u6307\u5357",permalink:"/zh/pages-for-subheaders/istio-setup-guide"},next:{title:"2. \u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"}},c={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u53ea\u6709\u5206\u914d\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster-admin")," ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles"},"Kubernetes \u9ed8\u8ba4\u89d2\u8272"),"\u7684\u7528\u6237\u53ef\u4ee5\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u914d\u7f6e\u548c\u5b89\u88c5 Istio\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u6709 pod \u5b89\u5168\u7b56\u7565\uff0c\u5219\u9700\u8981\u5b89\u88c5\u542f\u7528\u4e86 CNI \u7684 Istio\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"li",href:"/zh/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies"},"\u672c\u8282"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio\uff0c\u5219\u9700\u8981\u6267\u884c\u989d\u5916\u7684\u6b65\u9aa4\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"li",href:"/zh/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"},"\u672c\u8282"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u5728\u542f\u7528\u4e86\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u96c6\u7fa4\u4e2d\u5b89\u88c5 Istio\uff0c\u5219\u9700\u8981\u6267\u884c\u989d\u5916\u7684\u6b65\u9aa4\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"li",href:"/zh/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation"},"\u672c\u8282"),"\u3002")))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u542f\u7528 Istio \u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Chart"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Istio"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b89\u88c5 Monitoring \u5e94\u7528\uff0c\u7cfb\u7edf\u4f1a\u63d0\u793a\u4f60\u5b89\u88c5 rancher-monitoring\u3002\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u5728 Rancher-monitoring \u5b89\u88c5\u4e0a\u8bbe\u7f6e\u9009\u62e9\u5668\u6216\u6293\u53d6\u914d\u7f6e\u9009\u9879\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u4e3a Istio \u7ec4\u4ef6\u914d\u7f6e\u6210\u5458\u8bbf\u95ee\u548c",(0,a.kt)("a",{parentName:"li",href:"/zh/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},"\u8d44\u6e90\u9650\u5236"),"\u3002\u786e\u4fdd\u4f60\u7684 Worker \u8282\u70b9\u4e0a\u6709\u8db3\u591f\u7684\u8d44\u6e90\u6765\u542f\u7528 Istio\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u5982\u679c\u9700\u8981\uff0c\u5bf9 values.yaml \u8fdb\u884c\u989d\u5916\u7684\u914d\u7f6e\u66f4\u6539\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u901a\u8fc7",(0,a.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/configuration-options#%E8%A6%86%E7%9B%96%E6%96%87%E4%BB%B6"},"\u8986\u76d6\u6587\u4ef6"),"\u6765\u6dfb\u52a0\u5176\u4ed6\u8d44\u6e90\u6216\u914d\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5728\u96c6\u7fa4\u7ea7\u522b\u5b89\u88c5 Istio\u3002"),(0,a.kt)("h1",{id:"\u5176\u4ed6\u914d\u7f6e\u9009\u9879"},"\u5176\u4ed6\u914d\u7f6e\u9009\u9879"),(0,a.kt)("p",null,"\u6709\u5173\u914d\u7f6e Istio \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/configuration-options"},"\u914d\u7f6e\u53c2\u8003"),"\u3002"))}m.isMDXComponent=!0}}]);