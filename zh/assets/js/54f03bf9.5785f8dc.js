"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96906],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38234:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],u={title:"\u6301\u4e45\u5b58\u50a8\u7684\u5de5\u4f5c\u539f\u7406",weight:1},i=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",id:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",title:"\u6301\u4e45\u5b58\u50a8\u7684\u5de5\u4f5c\u539f\u7406",description:"\u6301\u4e45\u5377 (PV) \u662f Kubernetes \u96c6\u7fa4\u4e2d\u7684\u4e00\u5757\u5b58\u50a8\uff0c\u800c\u6301\u4e45\u5377\u58f0\u660e (PVC) \u662f\u5bf9\u5b58\u50a8\u7684\u8bf7\u6c42\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"\u6301\u4e45\u5b58\u50a8\u7684\u5de5\u4f5c\u539f\u7406",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u7ba1\u7406\u6301\u4e45\u5b58\u50a8",permalink:"/zh/pages-for-subheaders/manage-persistent-storage"},next:{title:"\u8bbe\u7f6e\u73b0\u6709\u5b58\u50a8",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage"}},l={},c=[{value:"\u5173\u4e8e\u6301\u4e45\u5377\u58f0\u660e",id:"\u5173\u4e8e\u6301\u4e45\u5377\u58f0\u660e",level:2},{value:"\u65b0\u7684\u548c\u73b0\u6709\u7684\u6301\u4e45\u5b58\u50a8\u90fd\u9700\u8981 PVC",id:"\u65b0\u7684\u548c\u73b0\u6709\u7684\u6301\u4e45\u5b58\u50a8\u90fd\u9700\u8981-pvc",level:3},{value:"\u4f7f\u7528 PVC \u548c PV \u8bbe\u7f6e\u73b0\u6709\u5b58\u50a8",id:"\u4f7f\u7528-pvc-\u548c-pv-\u8bbe\u7f6e\u73b0\u6709\u5b58\u50a8",level:2},{value:"\u5c06 PV \u7ed1\u5b9a\u5230 PVC",id:"\u5c06-pv-\u7ed1\u5b9a\u5230-pvc",level:3},{value:"\u4f7f\u7528 PVC \u548c\u5b58\u50a8\u7c7b\u914d\u7f6e\u65b0\u5b58\u50a8",id:"\u4f7f\u7528-pvc-\u548c\u5b58\u50a8\u7c7b\u914d\u7f6e\u65b0\u5b58\u50a8",level:2}],d={toc:c};function m(e){var t=e.components,u=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u6301\u4e45\u5377 (PV) \u662f Kubernetes \u96c6\u7fa4\u4e2d\u7684\u4e00\u5757\u5b58\u50a8\uff0c\u800c\u6301\u4e45\u5377\u58f0\u660e (PVC) \u662f\u5bf9\u5b58\u50a8\u7684\u8bf7\u6c42\u3002"),(0,s.kt)("p",null,"\u5728 Kubernetes \u4e2d\u4f7f\u7528\u6301\u4e45\u5b58\u50a8\u6709\u4e24\u79cd\u65b9\u6cd5\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u73b0\u6709\u7684\u6301\u4e45\u5377"),(0,s.kt)("li",{parentName:"ul"},"\u52a8\u6001\u914d\u7f6e\u65b0\u7684\u6301\u4e45\u5377")),(0,s.kt)("p",null,"\u8981\u4f7f\u7528\u73b0\u6709 PV\uff0c\u4f60\u7684\u5e94\u7528\u9700\u8981\u4f7f\u7528\u5df2\u7ed1\u5b9a\u5230 PV \u7684 PVC\uff0c\u5e76\u4e14 PV \u5e94\u5305\u542b PVC \u6240\u9700\u7684\u6700\u5c11\u8d44\u6e90\u3002"),(0,s.kt)("p",null,"\u5bf9\u4e8e\u52a8\u6001\u5b58\u50a8\u914d\u7f6e\uff0c\u4f60\u7684\u5e94\u7528\u9700\u8981\u4f7f\u7528\u7ed1\u5b9a\u5230\u5b58\u50a8\u7c7b\u7684 PVC\u3002\u5b58\u50a8\u7c7b\u5305\u542b\u914d\u7f6e\u65b0\u6301\u4e45\u5377\u7684\u6388\u6743\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u8bbe\u7f6e\u65b0\u7684\u548c\u73b0\u6709\u7684\u6301\u4e45\u5b58\u50a8",src:n(57062).Z,width:"761",height:"706"})),(0,s.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"\u5173\u4e8e\u5b58\u50a8\u7684\u5b98\u65b9 Kubernetes \u6587\u6863"),"\u3002"),(0,s.kt)("h2",{id:"\u5173\u4e8e\u6301\u4e45\u5377\u58f0\u660e"},"\u5173\u4e8e\u6301\u4e45\u5377\u58f0\u660e"),(0,s.kt)("p",null,"\u6301\u4e45\u5377\u58f0\u660e (PVC) \u662f\u4ece\u96c6\u7fa4\u8bf7\u6c42\u5b58\u50a8\u8d44\u6e90\u7684\u5bf9\u8c61\uff0c\u7c7b\u4f3c\u4e8e\u4f60\u7684 deployment \u7528\u4e8e\u5151\u6362\u5b58\u50a8\u8bbf\u95ee\u7684\u51ed\u8bc1\u3002PVC \u4ee5\u5377\u7684\u5f62\u5f0f\u6302\u8f7d\u5230\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\uff0c\u4ee5\u4fbf\u5de5\u4f5c\u8d1f\u8f7d\u53ef\u4ee5\u58f0\u660e\u5176\u6307\u5b9a\u7684\u6301\u4e45\u5b58\u50a8\u4efd\u989d\u3002"),(0,s.kt)("p",null,"\u8981\u8bbf\u95ee\u6301\u4e45\u5b58\u50a8\uff0cPod \u5fc5\u987b\u6709\u6302\u8f7d\u4e3a\u5377\u7684 PVC\u3002\u6b64 PVC \u8ba9\u4f60\u7684 deployment \u5e94\u7528\u5c06\u5176\u6570\u636e\u5b58\u50a8\u5728\u5916\u90e8\u4f4d\u7f6e\uff0c\u8fd9\u6837\uff0c\u5982\u679c pod \u53d1\u751f\u6545\u969c\uff0c\u5c31\u53ef\u4ee5\u7528\u65b0\u7684 pod \u66ff\u6362\u5b83\u5e76\u7ee7\u7eed\u8bbf\u95ee\u5176\u5916\u90e8\u5b58\u50a8\u7684\u6570\u636e\u3002"),(0,s.kt)("p",null,"\u6bcf\u4e2a Rancher \u9879\u76ee\u90fd\u5305\u542b\u4f60\u521b\u5efa\u7684 PVC \u5217\u8868\uff0c\u53ef\u4ece",(0,s.kt)("strong",{parentName:"p"},"\u8d44\u6e90 > \u5de5\u4f5c\u8d1f\u8f7d > \u5377"),"\u4e2d\u67e5\u770b\u3002\u4f60\u53ef\u4ee5\u5728\u5c06\u6765\u521b\u5efa deployment \u65f6\u590d\u7528\u8fd9\u4e9b PVC\u3002"),(0,s.kt)("h3",{id:"\u65b0\u7684\u548c\u73b0\u6709\u7684\u6301\u4e45\u5b58\u50a8\u90fd\u9700\u8981-pvc"},"\u65b0\u7684\u548c\u73b0\u6709\u7684\u6301\u4e45\u5b58\u50a8\u90fd\u9700\u8981 PVC"),(0,s.kt)("p",null,"\u65e0\u8bba\u5de5\u4f5c\u8d1f\u8f7d\u6253\u7b97\u4f7f\u7528\u73b0\u6709\u5b58\u50a8\uff0c\u8fd8\u662f\u9700\u8981\u6839\u636e\u9700\u6c42\u52a8\u6001\u914d\u7f6e\u65b0\u5b58\u50a8\uff0cpod \u90fd\u9700\u8981 PVC \u624d\u80fd\u4f7f\u7528\u6301\u4e45\u5b58\u50a8\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e\u73b0\u6709\u5b58\u50a8\uff0c\u5219\u5de5\u4f5c\u8d1f\u8f7d\u4f1a\u6302\u8f7d\u5f15\u7528\u4e00\u4e2a PV \u7684 PVC\uff0c\u8be5 PV \u5bf9\u5e94\u73b0\u6709\u7684\u5b58\u50a8\u57fa\u7840\u8bbe\u65bd\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u5de5\u4f5c\u8d1f\u8f7d\u9700\u8981\u8bf7\u6c42\u65b0\u7684\u5b58\u50a8\uff0c\u5219\u5de5\u4f5c\u8d1f\u8f7d\u4f1a\u6302\u8f7d\u5f15\u7528\u4e00\u4e2a\u5b58\u50a8\u7c7b\u7684 PVC\uff0c\u8be5\u5b58\u50a8\u7c7b\u80fd\u521b\u5efa\u65b0 PV \u53ca\u5176\u5e95\u5c42\u5b58\u50a8\u57fa\u7840\u8bbe\u65bd\u3002"),(0,s.kt)("p",null,"Rancher \u5141\u8bb8\u4f60\u5728\u9879\u76ee\u4e2d\u521b\u5efa\u4efb\u610f\u6570\u91cf\u7684 PVC\u3002"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u521b\u5efa deployment \u65f6\u5c06 PVC \u6302\u8f7d\u5230 deployment \u4e2d\uff0c\u4e5f\u53ef\u4ee5\u5728\u521b\u5efa deployment \u540e\u5728 deployment \u8fd0\u884c\u7684\u65f6\u5019\u5c06 PVC \u6302\u8f7d\u5230 deployment \u4e2d\u3002"),(0,s.kt)("h2",{id:"\u4f7f\u7528-pvc-\u548c-pv-\u8bbe\u7f6e\u73b0\u6709\u5b58\u50a8"},"\u4f7f\u7528 PVC \u548c PV \u8bbe\u7f6e\u73b0\u6709\u5b58\u50a8"),(0,s.kt)("p",null,"\u4f60\u7684 pod \u53ef\u4ee5\u5c06\u6570\u636e\u5b58\u50a8\u5728",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"\u5377"),"\u4e2d\uff0c\u4f46\u5982\u679c pod \u53d1\u751f\u6545\u969c\uff0c\u8be5\u6570\u636e\u5c31\u4f1a\u4e22\u5931\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cKubernetes \u63d0\u4f9b\u4e86\u6301\u4e45\u5377 (PV)\u3002PV \u662f Kubernetes \u8d44\u6e90\uff0c\u8fd9\u4e9b\u8d44\u6e90\u5bf9\u5e94\u4e8e\u4f60\u7684 pod \u53ef\u4ee5\u8bbf\u95ee\u7684\u5916\u90e8\u5b58\u50a8\u78c1\u76d8\u6216\u6587\u4ef6\u7cfb\u7edf\u3002\u5982\u679c\u4e00\u4e2a pod \u5d29\u6e83\uff0c\u5b83\u7684\u66ff\u4ee3 pod \u53ef\u4ee5\u8bbf\u95ee\u6301\u4e45\u5b58\u50a8\u4e2d\u7684\u6570\u636e\uff0c\u800c\u4e0d\u4f1a\u4e22\u5931\u4efb\u4f55\u6570\u636e\u3002"),(0,s.kt)("p",null,"PV \u53ef\u4ee5\u662f\u4f60\u672c\u5730\u6216\u6258\u7ba1\u7684\u4e91\u4e0a\uff08Amazon EBS \u6216 Azure Disk\uff09\u7269\u7406\u78c1\u76d8\u6216\u6587\u4ef6\u7cfb\u7edf\u3002"),(0,s.kt)("p",null,"\u5728 Rancher \u4e2d\u521b\u5efa\u6301\u4e45\u5377\u4e0d\u4f1a\u521b\u5efa\u5b58\u50a8\u5377\u3002\u5b83\u53ea\u521b\u5efa\u6620\u5c04\u5230\u73b0\u6709\u5377\u7684 Kubernetes \u8d44\u6e90\u3002\u56e0\u6b64\uff0c\u5728\u4f60\u53ef\u4ee5\u5c06\u6301\u4e45\u5377\u521b\u5efa\u4e3a Kubernetes \u8d44\u6e90\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u5148\u914d\u7f6e\u5b58\u50a8\u3002"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"PV \u662f\u5728\u96c6\u7fa4\u7ea7\u522b\u521b\u5efa\u7684\uff0c\u8fd9\u610f\u5473\u7740\u5728\u591a\u79df\u6237\u96c6\u7fa4\u4e2d\uff0c\u6709\u6743\u8bbf\u95ee\u4e0d\u540c\u547d\u540d\u7a7a\u95f4\u7684\u56e2\u961f\u53ef\u4ee5\u8bbf\u95ee\u540c\u4e00\u4e2a PV\u3002"))),(0,s.kt)("h3",{id:"\u5c06-pv-\u7ed1\u5b9a\u5230-pvc"},"\u5c06 PV \u7ed1\u5b9a\u5230 PVC"),(0,s.kt)("p",null,"\u5f53 pod \u8bbe\u7f6e\u4e3a\u4f7f\u7528\u6301\u4e45\u5b58\u50a8\u65f6\uff0cpod \u4f1a\u6302\u8f7d\u6301\u4e45\u5377\u58f0\u660e (PVC)\uff0cPVC \u7684\u6302\u8f7d\u65b9\u5f0f\u4e0e\u5176\u4ed6 Kubernetes \u5377\u76f8\u540c\u3002\u5728\u521b\u5efa\u6bcf\u4e2a PVC \u65f6\uff0cKubernetes master \u5c06 PVC \u89c6\u4e3a\u5bf9\u5b58\u50a8\u7684\u8bf7\u6c42\uff0c\u5e76\u5c06\u5176\u7ed1\u5b9a\u5230\u4e0e PVC \u7684\u6700\u4f4e\u8d44\u6e90\u8981\u6c42\u76f8\u5339\u914d\u7684 PV\u3002\u5e76\u975e\u6bcf\u4e2a PVC \u90fd\u4fdd\u8bc1\u7ed1\u5b9a\u5230 PV\u3002\u8be6\u60c5\u8bf7\u53c2\u9605 Kubernetes ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"\u6587\u6863"),"\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6ca1\u6709\u5339\u914d\u7684\u5377\uff0c\u5219\u58f0\u660e\u5c06\u4e00\u76f4\u4fdd\u6301\u4e3a\u672a\u7ed1\u5b9a\u72b6\u6001\u3002\u5f53\u5339\u914d\u7684\u5377\u53ef\u7528\u65f6\uff0c\u58f0\u660e\u5c06\u4f1a\u88ab\u7ed1\u5b9a\u3002\u4f8b\u5982\uff0c\u914d\u7f6e\u6709\u8bb8\u591a 50Gi PV \u7684\u96c6\u7fa4\u4e0d\u4f1a\u5339\u914d\u8bf7\u6c42 100Gi \u7684 PVC\u3002PVC \u53ef\u4ee5\u5728 100Gi PV \u6dfb\u52a0\u5230\u96c6\u7fa4\u65f6\u8fdb\u884c\u7ed1\u5b9a\u3002")),(0,s.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u65e0\u9650\u91cf\u7684 PVC\uff0c\u4f46\u53ea\u6709\u5728 Kubernetes master \u53ef\u4ee5\u627e\u5230\u6ee1\u8db3 PVC \u6240\u9700\u7684\u78c1\u76d8\u7a7a\u95f4\u91cf\u7684 PV \u65f6\uff0cPVC \u624d\u4f1a\u7ed1\u5b9a\u5230 PV\u3002"),(0,s.kt)("p",null,"\u8981\u52a8\u6001\u914d\u7f6e\u65b0\u5b58\u50a8\uff0c\u6302\u8f7d\u5728 pod \u4e2d\u7684 PVC \u5bf9\u5e94\u7684\u5fc5\u987b\u662f\u5b58\u50a8\u7c7b\u800c\u4e0d\u662f\u6301\u4e45\u5377\u3002"),(0,s.kt)("h2",{id:"\u4f7f\u7528-pvc-\u548c\u5b58\u50a8\u7c7b\u914d\u7f6e\u65b0\u5b58\u50a8"},"\u4f7f\u7528 PVC \u548c\u5b58\u50a8\u7c7b\u914d\u7f6e\u65b0\u5b58\u50a8"),(0,s.kt)("p",null,"\u5b58\u50a8\u7c7b\u5141\u8bb8\u4f60\u52a8\u6001\u521b\u5efa PV\uff0c\u800c\u65e0\u9700\u5148\u5728\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u4e2d\u521b\u5efa\u6301\u4e45\u5b58\u50a8\u3002"),(0,s.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u5de5\u4f5c\u8d1f\u8f7d\u7ed1\u5b9a\u5230 PVC \u5e76\u4e14 PVC \u5f15\u7528 Amazon EBS \u5b58\u50a8\u7c7b\uff0c\u5219\u5b58\u50a8\u7c7b\u53ef\u4ee5\u52a8\u6001\u521b\u5efa EBS \u5377\u548c\u76f8\u5e94\u7684 PV\u3002"),(0,s.kt)("p",null,"\u7136\u540e Kubernetes master \u4f1a\u5c06\u65b0\u521b\u5efa\u7684 PV \u7ed1\u5b9a\u5230\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7684 PVC\uff0c\u4ece\u800c\u5141\u8bb8\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4f7f\u7528\u6301\u4e45\u5b58\u50a8\u3002"))}m.isMDXComponent=!0},57062:function(e,t,n){t.Z=n.p+"assets/images/rancher-storage-c61fd870410492e2f0ece6773fe72f59.svg"}}]);