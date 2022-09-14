"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[74205],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77312:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"\u6301\u7eed\u4ea4\u4ed8",weight:3},u=void 0,c={unversionedId:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery",id:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery",title:"\u6301\u7eed\u4ea4\u4ed8",description:"\u4ece Rancher 2.5 \u5f00\u59cb\uff0cFleet \u5df2\u7ecf\u9884\u88c5\u5728 Rancher \u4e2d\uff0c\u4e14\u4ece Rancher 2.6 \u5f00\u59cb\uff0cFleet \u4e0d\u80fd\u518d\u5b8c\u5168\u7981\u7528\u3002\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 continuous-delivery \u529f\u80fd\u5f00\u5173\u6765\u7981\u7528 GitOps \u6301\u7eed\u4ea4\u4ed8\u7684 Fleet \u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features",slug:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"\u6301\u7eed\u4ea4\u4ed8",weight:3},sidebar:"tutorialSidebar",previous:{title:"UI \u7ba1\u7406 Istio \u865a\u62df\u670d\u52a1\u548c\u76ee\u6807\u89c4\u5219",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features"},next:{title:"\u4f7f\u7528 firewalld \u6253\u5f00\u7aef\u53e3",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld"}},p={},d=[],s={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4ece Rancher 2.5 \u5f00\u59cb\uff0c",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},"Fleet")," \u5df2\u7ecf\u9884\u88c5\u5728 Rancher \u4e2d\uff0c\u4e14\u4ece Rancher 2.6 \u5f00\u59cb\uff0cFleet \u4e0d\u80fd\u518d\u5b8c\u5168\u7981\u7528\u3002\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"continuous-delivery")," \u529f\u80fd\u5f00\u5173\u6765\u7981\u7528 GitOps \u6301\u7eed\u4ea4\u4ed8\u7684 Fleet \u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u5982\u9700\u542f\u7528\u6216\u7981\u7528\u6b64\u529f\u80fd\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/enable-experimental-features"},"\u542f\u7528\u5b9e\u9a8c\u529f\u80fd\u4e3b\u9875"),"\u4e2d\u7684\u8bf4\u660e\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u952e"),(0,i.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"continuous-delivery")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6b64\u5f00\u5173\u7981\u7528 Fleet \u7684 GitOps \u6301\u7eed\u4ea4\u4ed8\u529f\u80fd\u3002")))),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5728 Rancher 2.5.x \u4e2d\u7981\u7528\u4e86 Fleet\uff0c\u7136\u540e\u5c06 Rancher \u5347\u7ea7\u5230 v2.6.x\uff0cFleet \u5c06\u542f\u7528\u3002\u53ea\u6709 Fleet \u7684\u6301\u7eed\u4ea4\u4ed8\u529f\u80fd\u53ef\u4ee5\u88ab\u7981\u7528\u3002\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"continuous-delivery")," \u88ab\u7981\u7528\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"gitjob")," deployment \u4e0d\u518d\u90e8\u7f72\u5230 Rancher Server \u7684\u672c\u5730\u96c6\u7fa4\u4e2d\uff0c\u4e14 ",(0,i.kt)("inlineCode",{parentName:"p"},"continuous-delivery")," \u4e0d\u4f1a\u5728 Rancher UI \u4e2d\u663e\u793a\u3002"))}f.isMDXComponent=!0}}]);