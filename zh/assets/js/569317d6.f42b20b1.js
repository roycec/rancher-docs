"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[92438],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36083:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],c={title:"\u914d\u7f6e FreeIPA",weight:1114},p=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa",title:"\u914d\u7f6e FreeIPA",description:"\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528 FreeIPA \u8fdb\u884c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u5141\u8bb8\u4f60\u7684\u7528\u6237\u4f7f\u7528 FreeIPA \u51ed\u8bc1\u767b\u5f55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"\u914d\u7f6e FreeIPA",weight:1114},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e Active Directory (AD)",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory"},next:{title:"\u914d\u7f6e Azure AD",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad"}},s={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528 FreeIPA \u8fdb\u884c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u5141\u8bb8\u4f60\u7684\u7528\u6237\u4f7f\u7528 FreeIPA \u51ed\u8bc1\u767b\u5f55\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u4f60\u5fc5\u987b\u914d\u7f6e\u4e86 ",(0,r.kt)("a",{parentName:"li",href:"https://www.freeipa.org/"},"FreeIPA \u670d\u52a1\u5668"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728 FreeIPA \u4e2d\u521b\u5efa\u4e00\u4e2a\u5177\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"read-only")," \u8bbf\u95ee\u6743\u9650\u7684 ServiceAccount \u3002\u5f53\u7528\u6237\u4f7f\u7528 API\u200b\u200b \u5bc6\u94a5\u53d1\u51fa\u8bf7\u6c42\u65f6\uff0cRancher \u4f7f\u7528\u6b64\u8d26\u53f7\u6765\u9a8c\u8bc1\u7ec4\u6210\u5458\u8eab\u4efd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u89c1",(0,r.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/about-authentication#%E5%A4%96%E9%83%A8%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E9%85%8D%E7%BD%AE%E5%92%8C%E7%94%A8%E6%88%B7%E4%B8%BB%E4%BD%93"},"\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u914d\u7f6e\u548c\u4e3b\u4f53\u7528\u6237"),"\u3002")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5206\u914d\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"administrator")," \u89d2\u8272\uff08\u5373 ",(0,r.kt)("em",{parentName:"p"},"\u672c\u5730\u4e3b\u4f53"),"\uff09\u7684\u672c\u5730\u7528\u6237\u767b\u5f55\u5230 Rancher\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u8ba4\u8bc1"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"FreeIPA"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u586b\u5199",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e FreeIPA \u670d\u52a1\u5668"),"\u8868\u5355\uff0c"),(0,r.kt)("p",{parentName:"li"},"\u4f60\u53ef\u80fd\u9700\u8981\u767b\u5f55\u5230\u57df\u63a7\u5236\u5668\uff0c\u6765\u67e5\u627e\u8868\u5355\u4e2d\u8bf7\u6c42\u7684\u4fe1\u606f\u3002"),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4f7f\u7528 TLS\uff1f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u8bc1\u4e66\u662f\u81ea\u7b7e\u540d\uff0c\u6216\u8005\u4e0d\u662f\u6765\u81ea\u516c\u8ba4\u7684\u8bc1\u4e66\u9881\u53d1\u673a\u6784\u7684\uff0c\u8bf7\u786e\u4fdd\u63d0\u4f9b\u5b8c\u6574\u7684\u8bc1\u4e66\u94fe\u3002Rancher \u9700\u8981\u8be5\u94fe\u6765\u9a8c\u8bc1\u670d\u52a1\u5668\u7684\u8bc1\u4e66\u3002"))),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u7528\u6237\u641c\u7d22\u5e93 vs. \u7ec4\u641c\u7d22\u5e93")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u641c\u7d22\u5e93\u4f7f Rancher \u53ef\u4ee5\u641c\u7d22 FreeIPA \u4e2d\u7684\u7528\u6237\u548c\u7ec4\u3002\u8fd9\u4e9b\u5b57\u6bb5\u4ec5\u7528\u4e8e\u641c\u7d22\u5e93\uff0c\u4e0d\u9002\u7528\u4e8e\u641c\u7d22\u7b5b\u9009\u5668\u3002"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u7684\u7528\u6237\u548c\u7ec4\u4f4d\u4e8e\u540c\u4e00\u641c\u7d22\u5e93\u4e2d\uff0c\u5219\u4ec5\u586b\u5199\u7528\u6237\u641c\u7d22\u5e93\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u7684\u7ec4\u4f4d\u4e8e\u5176\u4ed6\u641c\u7d22\u5e93\u4e2d\uff0c\u5219\u53ef\u4ee5\u9009\u62e9\u586b\u5199\u7ec4\u641c\u7d22\u5e93\u3002\u8be5\u5b57\u6bb5\u4e13\u7528\u4e8e\u641c\u7d22\u7ec4\uff0c\u4f46\u4e0d\u662f\u5fc5\u9700\u7684\u3002"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u7684 FreeIPA \u4e0d\u540c\u4e8e\u6807\u51c6\u7684 AD Schema\uff0c\u5219\u5fc5\u987b\u5b8c\u6210",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49 Schema")," \u90e8\u5206\u5b9e\u73b0\u5339\u914d\u3002\u5426\u5219\uff0c\u8c03\u8fc7\u6b64\u6b65\u9aa4\u3002"),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u641c\u7d22\u5c5e\u6027")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"\u641c\u7d22\u5c5e\u6027"),"\u5b57\u6bb5\u7684\u9ed8\u8ba4\u503c\u4e3a\u4e09\u4e2a\u7279\u5b9a\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"uid|sn|givenName"),"\u3002\u914d\u7f6e FreeIPA \u540e\uff0c\u5f53\u7528\u6237\u8f93\u5165\u6587\u672c\u4ee5\u6dfb\u52a0\u7528\u6237\u6216\u7ec4\u65f6\uff0cRancher \u4f1a\u81ea\u52a8\u67e5\u8be2 FreeIPA \u670d\u52a1\u5668\uff0c\u5e76\u5c1d\u8bd5\u6309\u7528\u6237 ID\uff0c\u59d3\u6c0f\u6216\u540d\u5b57\u6765\u5339\u914d\u5b57\u6bb5\u3002Rancher \u4e13\u95e8\u641c\u7d22\u4ee5\u5728\u641c\u7d22\u5b57\u6bb5\u4e2d\u8f93\u5165\u7684\u6587\u672c\u5f00\u5934\u7684\u7528\u6237/\u7ec4\u3002"),(0,r.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u5b57\u6bb5\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"uid|sn|givenName"),"\uff0c\u4f46\u662f\u4f60\u53ef\u4ee5\u5c06\u6b64\u5b57\u6bb5\u914d\u7f6e\u4e3a\u8fd9\u4e9b\u5b57\u6bb5\u7684\u5b50\u96c6\u3002\u7ba1\u9053\u7b26 (",(0,r.kt)("inlineCode",{parentName:"p"},"|"),") \u7528\u4e8e\u5206\u9694\u5404\u4e2a\u5b57\u6bb5\u3002"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uid"),"\uff1a\u7528\u6237 ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sn"),"\uff1a\u59d3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"givenName"),"\uff1a\u540d")),(0,r.kt)("p",{parentName:"div"},"Rancher \u4f7f\u7528\u6b64\u641c\u7d22\u5c5e\u6027\u4e3a\u7528\u6237\u548c\u7ec4\u521b\u5efa\u641c\u7d22\u7b5b\u9009\u5668\uff0c\u4f46\u662f\u4f60",(0,r.kt)("em",{parentName:"p"},"\u4e0d\u80fd"),"\u5728\u6b64\u5b57\u6bb5\u4e2d\u6dfb\u52a0\u81ea\u5df1\u7684\u641c\u7d22\u7b5b\u9009\u5668\u3002")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Authenticate with FreeIPA")," \u4e2d\u8f93\u5165\u4f60\u7684 FreeIPA \u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u786e\u8ba4\u5df2\u4e3a Rancher \u914d\u7f6e FreeIPA \u8eab\u4efd\u9a8c\u8bc1\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u542f\u7528"),"\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FreeIPA \u9a8c\u8bc1\u914d\u7f6e\u6210\u529f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f60\u5c06\u4f7f\u7528\u4f60\u7684 FreeIPA \u8d26\u53f7\uff08\u5373 ",(0,r.kt)("em",{parentName:"li"},"\u5916\u90e8\u4e3b\u4f53"),"\uff09\u767b\u5f55\u5230 Rancher\u3002")))}d.isMDXComponent=!0}}]);