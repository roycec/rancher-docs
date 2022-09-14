"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[71692],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return s}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=r.createContext({}),p=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(g.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),s=a,d=m["".concat(g,".").concat(s)]||m[s]||u[s]||i;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83420:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return g},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={shortTitle:"RBAC",title:"Logging \u7684 RBAC",weight:3},g=void 0,p={unversionedId:"explanations/integrations-in-rancher/logging/rbac-for-logging",id:"explanations/integrations-in-rancher/logging/rbac-for-logging",title:"Logging \u7684 RBAC",description:"Rancher Logging \u6709\u4e24\u4e2a\u89d2\u8272\uff0c\u5206\u522b\u662f logging-admin \u548c logging-view\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/logging/rbac-for-logging.md",sourceDirName:"explanations/integrations-in-rancher/logging",slug:"/explanations/integrations-in-rancher/logging/rbac-for-logging",permalink:"/zh/explanations/integrations-in-rancher/logging/rbac-for-logging",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/logging/rbac-for-logging.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{shortTitle:"RBAC",title:"Logging \u7684 RBAC",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u8fc1\u79fb\u5230 Rancher 2.5 Logging",permalink:"/zh/explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging"},next:{title:"rancher-logging Helm Chart \u9009\u9879",permalink:"/zh/explanations/integrations-in-rancher/logging/logging-helm-chart-options"}},c={},u=[],m={toc:u};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher Logging \u6709\u4e24\u4e2a\u89d2\u8272\uff0c\u5206\u522b\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"logging-admin")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"logging-view"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"logging-admin")," \u5141\u8bb8\u7528\u6237\u5b8c\u5168\u8bbf\u95ee\u547d\u540d\u7a7a\u95f4\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Flow")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"Output"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"logging-view")," \u5141\u8bb8\u7528\u6237",(0,i.kt)("em",{parentName:"li"},"\u67e5\u770b"),"\u547d\u540d\u7a7a\u95f4\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Flow")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"Output"),"\uff0c\u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"li"},"ClusterFlow")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"ClusterOutput"),"\u3002")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e3a\u4ec0\u4e48\u9009\u62e9\u4e00\u4e2a\u89d2\u8272\u800c\u4e0d\u662f\u53e6\u4e00\u4e2a\u89d2\u8272\uff1f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," \u8d44\u6e90\u7684\u7f16\u8f91\u6743\u9650\u975e\u5e38\u5f3a\u5927\u3002\u4efb\u4f55\u62e5\u6709\u8be5\u6743\u9650\u7684\u7528\u6237\u90fd\u80fd\u7f16\u8f91\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u65e5\u5fd7\u3002"))),(0,i.kt)("p",null,"\u5728 Rancher \u4e2d\uff0c\u96c6\u7fa4\u7ba1\u7406\u5458\u89d2\u8272\u662f\u552f\u4e00\u53ef\u4ee5\u5b8c\u5168\u8bbf\u95ee\u6240\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-logging")," \u8d44\u6e90\u7684\u89d2\u8272\u3002\u96c6\u7fa4\u6210\u5458\u65e0\u6cd5\u7f16\u8f91\u6216\u8bfb\u53d6\u4efb\u4f55 Logging \u8d44\u6e90\u3002\u9879\u76ee\u6240\u6709\u8005\u548c\u6210\u5458\u5177\u6709\u4ee5\u4e0b\u6743\u9650\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u9879\u76ee\u6240\u6709\u8005"),(0,i.kt)("th",{parentName:"tr",align:null},"\u9879\u76ee\u6210\u5458"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u80fd\u591f\u5728\u5176\u9879\u76ee\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u547d\u540d\u7a7a\u95f4\u7ea7\u522b\u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"Flow")," \u548c ",(0,i.kt)("inlineCode",{parentName:"td"},"Output")),(0,i.kt)("td",{parentName:"tr",align:null},"\u53ea\u80fd\u67e5\u770b\u9879\u76ee\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"Flow")," \u548c ",(0,i.kt)("inlineCode",{parentName:"td"},"Output"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u4ece\u9879\u76ee\u547d\u540d\u7a7a\u95f4\u4e2d\u6536\u96c6\u4efb\u4f55\u65e5\u5fd7"),(0,i.kt)("td",{parentName:"tr",align:null},"\u65e0\u6cd5\u5728\u5176\u9879\u76ee\u547d\u540d\u7a7a\u95f4\u4e2d\u6536\u96c6\u4efb\u4f55\u65e5\u5fd7")))),(0,i.kt)("p",null,"\u5982\u679c\u9879\u76ee\u6240\u6709\u8005\u548c\u9879\u76ee\u6210\u5458\u9700\u8981\u4f7f\u7528 Logging\uff0c\u4ed6\u4eec\u9700\u8981\u5728\u9879\u76ee\u4e2d\u81f3\u5c11\u6709",(0,i.kt)("em",{parentName:"p"},"\u4e00\u4e2a"),"\u547d\u540d\u7a7a\u95f4\u3002\u5982\u679c\u6ca1\u6709\uff0c\u4ed6\u4eec\u53ef\u80fd\u770b\u4e0d\u5230\u9876\u90e8\u5bfc\u822a\u4e0b\u62c9\u5217\u8868\u4e2d\u7684 Logging \u6309\u94ae\u3002"))}s.isMDXComponent=!0}}]);