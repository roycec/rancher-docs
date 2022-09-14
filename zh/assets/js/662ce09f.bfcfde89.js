"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[26157],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,h=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"\u914d\u7f6e\u9009\u9879",weight:3},p=void 0,c={unversionedId:"pages-for-subheaders/configuration-options",id:"pages-for-subheaders/configuration-options",title:"\u914d\u7f6e\u9009\u9879",description:"Egress \u652f\u6301",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/configuration-options.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/configuration-options",permalink:"/zh/pages-for-subheaders/configuration-options",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/configuration-options.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"\u914d\u7f6e\u9009\u9879",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u7981\u7528 Istio",permalink:"/zh/explanations/integrations-in-rancher/istio/disable-istio"},next:{title:"\u5728\u5177\u6709 Pod \u5b89\u5168\u7b56\u7565\u7684\u60c5\u51b5\u4e0b\u542f\u7528 Istio",permalink:"/zh/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies"}},l={},u=[{value:"Egress \u652f\u6301",id:"egress-\u652f\u6301",level:3},{value:"\u542f\u7528\u81ea\u52a8 Sidecar \u6ce8\u5165",id:"\u542f\u7528\u81ea\u52a8-sidecar-\u6ce8\u5165",level:3},{value:"\u8986\u76d6\u6587\u4ef6",id:"\u8986\u76d6\u6587\u4ef6",level:3},{value:"\u9009\u62e9\u5668\u548c\u6293\u53d6\u914d\u7f6e",id:"\u9009\u62e9\u5668\u548c\u6293\u53d6\u914d\u7f6e",level:3},{value:"\u5728\u5177\u6709 Pod \u5b89\u5168\u7b56\u7565\u7684\u60c5\u51b5\u4e0b\u542f\u7528 Istio",id:"\u5728\u5177\u6709-pod-\u5b89\u5168\u7b56\u7565\u7684\u60c5\u51b5\u4e0b\u542f\u7528-istio",level:3},{value:"\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio \u7684\u5176\u4ed6\u6b65\u9aa4",id:"\u5728-rke2-\u96c6\u7fa4\u4e0a\u5b89\u88c5-istio-\u7684\u5176\u4ed6\u6b65\u9aa4",level:3},{value:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u5176\u4ed6\u6b65\u9aa4",id:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u5176\u4ed6\u6b65\u9aa4",level:3}],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"egress-\u652f\u6301"},"Egress \u652f\u6301"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cEgress \u7f51\u5173\u662f\u7981\u7528\u7684\uff0c\u4f46\u4f60\u53ef\u4ee5\u5728\u5b89\u88c5\u6216\u5347\u7ea7\u65f6\u4f7f\u7528 values.yaml \u6216",(0,i.kt)("a",{parentName:"p",href:"#%E8%A6%86%E7%9B%96%E6%96%87%E4%BB%B6"},"\u8986\u76d6\u6587\u4ef6"),"\u542f\u7528\u5b83\u3002"),(0,i.kt)("h3",{id:"\u542f\u7528\u81ea\u52a8-sidecar-\u6ce8\u5165"},"\u542f\u7528\u81ea\u52a8 Sidecar \u6ce8\u5165"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u81ea\u52a8 sidecar \u6ce8\u5165\u662f\u7981\u7528\u7684\u3002\u8981\u542f\u7528\u6b64\u529f\u80fd\uff0c\u8bf7\u5728\u5b89\u88c5\u6216\u5347\u7ea7\u65f6\u5728 values.yaml \u4e2d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"sidecarInjectorWebhook.enableNamespacesByDefault=true"),"\u3002\u8fd9\u4f1a\u81ea\u52a8\u5c06 Istio sidecar \u6ce8\u5165\u5230\u6240\u6709\u5df2\u90e8\u7f72\u7684\u65b0\u547d\u540d\u7a7a\u95f4\u3002"),(0,i.kt)("h3",{id:"\u8986\u76d6\u6587\u4ef6"},"\u8986\u76d6\u6587\u4ef6"),(0,i.kt)("p",null,"\u8986\u76d6\u6587\u4ef6\u7528\u4e8e\u4e3a Istio \u8fdb\u884c\u66f4\u5e7f\u6cdb\u7684\u914d\u7f6e\u3002\u5b83\u5141\u8bb8\u4f60\u66f4\u6539 ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/istio.operator.v1alpha1/"},"IstioOperator API")," \u4e2d\u53ef\u7528\u7684\u4efb\u4f55\u503c\u3002\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u9ed8\u8ba4\u5b89\u88c5\u4ee5\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\u3002"),(0,i.kt)("p",null,"\u8986\u76d6\u6587\u4ef6\u5c06\u5728 Istio Chart \u9ed8\u8ba4\u5b89\u88c5\u7684\u57fa\u7840\u4e0a\u6dfb\u52a0\u914d\u7f6e\u3002\u6362\u8a00\u4e4b\uff0c\u4f60\u4e0d\u9700\u8981\u4e3a\u5b89\u88c5\u4e2d\u5df2\u5b9a\u4e49\u7684\u7ec4\u4ef6\u8fdb\u884c\u91cd\u65b0\u5b9a\u4e49\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u8986\u76d6\u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/setup/install/istioctl/#configure-component-settings"},"Istio \u6587\u6863"),"\u3002"),(0,i.kt)("h3",{id:"\u9009\u62e9\u5668\u548c\u6293\u53d6\u914d\u7f6e"},"\u9009\u62e9\u5668\u548c\u6293\u53d6\u914d\u7f6e"),(0,i.kt)("p",null,"Monitoring \u5e94\u7528\u8bbe\u7f6e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=false"),"\uff0c\u5373\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8de8\u6240\u6709\u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u76d1\u63a7\u3002\u8fd9\u6837\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u90e8\u7f72\u5728\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled")," \u6807\u7b7e\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u8d44\u6e90\u7684\u6d41\u91cf\u3001\u6307\u6807\u548c\u56fe\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5c06 Prometheus \u9650\u5236\u4e3a\u7279\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u8bf7\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),"\u3002\u5b8c\u6210\u6b64\u64cd\u4f5c\u540e\uff0c\u4f60\u9700\u8981\u6dfb\u52a0\u5176\u4ed6\u914d\u7f6e\u6765\u7ee7\u7eed\u76d1\u63a7\u4f60\u7684\u8d44\u6e90\u3002"),(0,i.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},"\u672c\u8282"),"\u3002"),(0,i.kt)("h3",{id:"\u5728\u5177\u6709-pod-\u5b89\u5168\u7b56\u7565\u7684\u60c5\u51b5\u4e0b\u542f\u7528-istio"},"\u5728\u5177\u6709 Pod \u5b89\u5168\u7b56\u7565\u7684\u60c5\u51b5\u4e0b\u542f\u7528 Istio"),(0,i.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies"},"\u672c\u8282"),"\u3002"),(0,i.kt)("h3",{id:"\u5728-rke2-\u96c6\u7fa4\u4e0a\u5b89\u88c5-istio-\u7684\u5176\u4ed6\u6b65\u9aa4"},"\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio \u7684\u5176\u4ed6\u6b65\u9aa4"),(0,i.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"},"\u672c\u8282"),"\u3002"),(0,i.kt)("h3",{id:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u5176\u4ed6\u6b65\u9aa4"},"\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u5176\u4ed6\u6b65\u9aa4"),(0,i.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation"},"\u672c\u8282"),"\u3002"))}d.isMDXComponent=!0}}]);