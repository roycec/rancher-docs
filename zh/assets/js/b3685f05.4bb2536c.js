"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[5352],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return k}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=s(t),k=o,h=m["".concat(u,".").concat(k)]||m[k]||p[k]||c;return t?n.createElement(h,i(i({ref:r},l),{},{components:t})):n.createElement(h,i({ref:r},l))}));function k(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=m;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52809:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=t(87462),o=t(63366),c=(t(67294),t(3905)),i=["components"],a={title:"Dockershim",weight:300},u=void 0,s={unversionedId:"faq/dockershim",id:"faq/dockershim",title:"Dockershim",description:"Dockershim \u662f Kubelet \u548c Docker Daemon \u4e4b\u95f4\u7684 CRI \u517c\u5bb9\u5c42\u3002Kubernetes 1.20 \u7248\u672c\u5ba3\u5e03\u4e86\u79fb\u9664\u6811\u5185 Dockershim\u3002\u76ee\u524d\u8ba1\u5212\u5728 Kubernetes 1.24 \u4e2d\u79fb\u9664\u3002\u6709\u5173\u6b64\u79fb\u9664\u7684\u66f4\u591a\u4fe1\u606f\u4ee5\u53ca\u65f6\u95f4\u7ebf\uff0c\u8bf7\u53c2\u89c1 Kubernetes Dockershim \u5f03\u7528\u76f8\u5173\u7684\u5e38\u89c1\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/faq/dockershim.md",sourceDirName:"faq",slug:"/faq/dockershim",permalink:"/zh/faq/dockershim",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/faq/dockershim.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Dockershim",weight:300},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u548c\u914d\u7f6e kubectl",permalink:"/zh/faq/install-and-configure-kubectl"},next:{title:"\u6280\u672f",permalink:"/zh/faq/technical-items"}},l={},p=[{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3}],m={toc:p};function k(e){var r=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Dockershim \u662f Kubelet \u548c Docker Daemon \u4e4b\u95f4\u7684 CRI \u517c\u5bb9\u5c42\u3002Kubernetes 1.20 \u7248\u672c\u5ba3\u5e03\u4e86",(0,c.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/"},"\u79fb\u9664\u6811\u5185 Dockershim"),"\u3002\u76ee\u524d\u8ba1\u5212\u5728 Kubernetes 1.24 \u4e2d\u79fb\u9664\u3002\u6709\u5173\u6b64\u79fb\u9664\u7684\u66f4\u591a\u4fe1\u606f\u4ee5\u53ca\u65f6\u95f4\u7ebf\uff0c\u8bf7\u53c2\u89c1 ",(0,c.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dockershim-faq/#when-will-dockershim-be-removed"},"Kubernetes Dockershim \u5f03\u7528\u76f8\u5173\u7684\u5e38\u89c1\u95ee\u9898"),"\u3002"),(0,c.kt)("p",null,"\u4ece Kubernetes 1.21 \u5f00\u59cb\u3002RKE \u96c6\u7fa4\u652f\u6301\u5916\u90e8 Dockershim\uff0c\u6765\u8ba9\u7528\u6237\u7ee7\u7eed\u4f7f\u7528 Docker \u4f5c\u4e3a CRI \u8fd0\u884c\u65f6\u3002\u73b0\u5728\uff0c\u6211\u4eec\u901a\u8fc7\u4f7f\u7528 ",(0,c.kt)("a",{parentName:"p",href:"https://www.mirantis.com/blog/mirantis-to-take-over-support-of-kubernetes-dockershim-2/"},"Mirantis \u548c Docker ")," \u6765\u786e\u4fdd RKE \u96c6\u7fa4\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528 Docker\uff0c\u4ece\u800c\u5b9e\u73b0\u4e0a\u6e38\u5f00\u6e90\u793e\u533a\u7684 Dockershim\u3002"),(0,c.kt)("p",null,"\u8981\u542f\u7528\u5916\u90e8 Dockershim\uff0c\u914d\u7f6e\u4ee5\u4e0b\u9009\u9879\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"enable_cri_dockerd: true\n")),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u5176\u4ed6\u5bb9\u5668\u8fd0\u884c\u65f6\uff0cRancher \u4e5f\u63d0\u4f9b\u4f7f\u7528 Containerd \u4f5c\u4e3a\u9ed8\u8ba4\u8fd0\u884c\u65f6\u7684\uff0c\u4ee5\u8fb9\u7f18\u4e3a\u4e2d\u5fc3\u7684 K3s\uff0c\u548c\u4ee5\u6570\u636e\u4e2d\u5fc3\u4e3a\u4e2d\u5fc3\u7684 RKE2 Kubernetes \u53d1\u884c\u7248\u3002\u5373\u4f7f\u5728 Kubernetes 1.24 \u5220\u9664\u4e86\u6811\u5185 Dockershim \u4e4b\u540e\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 Rancher \u5347\u7ea7\u548c\u7ba1\u7406\u5bfc\u5165\u7684 RKE2 \u548c K3s Kubernetes \u96c6\u7fa4\u3002"),(0,c.kt)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,c.kt)("br",null),(0,c.kt)("p",null,"Q. \u5982\u679c\u8981\u83b7\u5f97 Rancher \u5bf9\u4e0a\u6e38 Dockershim \u7684\u652f\u6301\uff0c\u6211\u9700\u8981\u5347\u7ea7 Rancher \u5417\uff1f"),(0,c.kt)("p",null,"\u5bf9\u4e8e RKE\uff0cDockershim \u7684\u4e0a\u6e38\u652f\u6301\u4ece Kubernetes 1.21 \u5f00\u59cb\u3002\u4f60\u9700\u8981\u4f7f\u7528 Rancher 2.6 \u6216\u66f4\u9ad8\u7248\u672c\u624d\u80fd\u83b7\u53d6\u4f7f\u7528 Kubernetes 1.21 \u7684 RKE \u7684\u652f\u6301\u3002\u8be6\u60c5\u8bf7\u53c2\u9605\u6211\u4eec\u7684",(0,c.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/all-supported-versions/rancher-v2.6.0/"},"\u652f\u6301\u77e9\u9635"),"\u3002"),(0,c.kt)("br",null),(0,c.kt)("p",null,"Q. \u6211\u76ee\u524d\u7684 RKE \u4f7f\u7528 Kubernetes 1.20\u3002\u4e3a\u4e86\u907f\u514d\u51fa\u73b0\u4e0d\u518d\u652f\u6301 Dockershim \u7684\u60c5\u51b5\uff0c\u6211\u662f\u5426\u9700\u8981\u5c3d\u65e9\u5c06 RKE \u5347\u7ea7\u5230 Kubernetes 1.21\uff1f"),(0,c.kt)("p",null,"A. \u5728\u4f7f\u7528 Kubernetes 1.20 \u7684 RKE \u4e2d\uff0cDockershim \u7248\u672c\u4f9d\u7136\u53ef\u7528\uff0c\u800c\u4e14\u5728 Kubernetes 1.24 \u4e4b\u524d\u4e0d\u4f1a\u5728\u4e0a\u6e38\u5f03\u7528\u3002Kubernetes \u4f1a\u53d1\u51fa\u5f03\u7528 Dockershim \u7684\u8b66\u544a\uff0c\u800c Rancher \u5728\u4f7f\u7528 Kubernetes 1.21 \u7684 RKE \u4e2d\u5df2\u7ecf\u7f13\u89e3\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002\u4f60\u53ef\u4ee5\u6309\u7167\u8ba1\u5212\u6b63\u5e38\u5347\u7ea7\u5230 Kubernetes 1.21\uff0c\u4f46\u4e5f\u5e94\u8be5\u8003\u8651\u5728\u5347\u7ea7\u5230 Kubernetes 1.22 \u65f6\u542f\u7528\u5916\u90e8 Dockershim\u3002\u5728\u5347\u7ea7\u5230 Kubernetes 1.24 \u4e4b\u524d\uff0c\u4f60\u9700\u8981\u542f\u7528\u5916\u90e8 Dockershim\uff0c\u6b64\u65f6\u73b0\u6709\u7684\u5b9e\u73b0\u90fd\u4f1a\u88ab\u5220\u9664\u3002"),(0,c.kt)("p",null,"\u6709\u5173\u6b64\u79fb\u9664\u7684\u66f4\u591a\u4fe1\u606f\u4ee5\u53ca\u65f6\u95f4\u7ebf\uff0c\u8bf7\u53c2\u89c1 ",(0,c.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dockershim-faq/#when-will-dockershim-be-removed"},"Kubernetes Dockershim \u5f03\u7528\u76f8\u5173\u7684\u5e38\u89c1\u95ee\u9898"),"\u3002"),(0,c.kt)("br",null),(0,c.kt)("p",null,"Q: \u5982\u679c\u6211\u4e0d\u60f3\u518d\u4f9d\u8d56 Dockershim\uff0c\u6211\u8fd8\u6709\u4ec0\u4e48\u9009\u62e9\uff1f"),(0,c.kt)("p",null,"A: \u4f60\u53ef\u4ee5\u4e3a Kubernetes \u4f7f\u7528\u4e0d\u9700\u8981 Dockershim \u652f\u6301\u7684\u8fd0\u884c\u65f6\uff0c\u5982 Containerd\u3002RKE2 \u548c K3s \u5c31\u662f\u5176\u4e2d\u7684\u4e24\u4e2a\u9009\u9879\u3002"),(0,c.kt)("br",null),(0,c.kt)("p",null,"Q: \u5982\u679c\u6211\u76ee\u524d\u4f7f\u7528 RKE1\uff0c\u4f46\u60f3\u5207\u6362\u5230 RKE2\uff0c\u6211\u53ef\u4ee5\u600e\u6837\u8fdb\u884c\u8fc1\u79fb\uff1f"),(0,c.kt)("p",null,"A: Rancher \u4e5f\u5728\u63a2\u7d22\u5c31\u5730\u5347\u7ea7\u8def\u5f84\u7684\u53ef\u80fd\u6027\u3002\u6b64\u5916\uff0c\u4f60\u59cb\u7ec8\u53ef\u4ee5\u4f7f\u7528 kubectl \u5c06\u5de5\u4f5c\u8d1f\u8f7d\u8fc1\u79fb\u5230\u53e6\u4e00\u4e2a\u96c6\u7fa4\u3002"),(0,c.kt)("br",null))}k.isMDXComponent=!0}}]);