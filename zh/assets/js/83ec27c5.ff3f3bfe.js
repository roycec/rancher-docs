"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[68204],{3905:function(a,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var t=n(67294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function o(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var p=t.createContext({}),s=function(a){var e=t.useContext(p),n=e;return a&&(n="function"==typeof a?a(e):o(o({},e),a)),n},d=function(a){var e=s(a.components);return t.createElement(p.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,p=a.parentName,d=l(a,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?t.createElement(f,o(o({ref:e},d),{},{components:n})):t.createElement(f,o({ref:e},d))}));function u(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=a,l.mdxType="string"==typeof a?a:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(a,e,n){n.d(e,{Z:function(){return o}});var t=n(67294),r=n(86010),i="tabItem_Ymn6";function o(a){var e=a.children,n=a.hidden,o=a.className;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},e)}},65488:function(a,e,n){n.d(e,{Z:function(){return u}});var t=n(87462),r=n(67294),i=n(86010),o=n(72389),l=n(67392),p=n(7094),s=n(12466),d="tabList__CuJ",c="tabItem_LNqP";function m(a){var e,n,o=a.lazy,m=a.block,u=a.defaultValue,f=a.values,g=a.groupId,k=a.className,h=r.Children.map(a.children,(function(a){if((0,r.isValidElement)(a)&&"value"in a.props)return a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof a.type?a.type:a.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=f?f:h.map((function(a){var e=a.props;return{value:e.value,label:e.label,attributes:e.attributes}})),v=(0,l.l)(N,(function(a,e){return a.value===e.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(a){return a.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(e=null!=u?u:null==(n=h.find((function(a){return a.props.default})))?void 0:n.props.value)?e:h[0].props.value;if(null!==b&&!N.some((function(a){return a.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((function(a){return a.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,p.U)(),w=C.tabGroupChoices,y=C.setTabGroupChoices,M=(0,r.useState)(b),E=M[0],O=M[1],G=[],A=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var x=w[g];null!=x&&x!==E&&N.some((function(a){return a.value===x}))&&O(x)}var B=function(a){var e=a.currentTarget,n=G.indexOf(e),t=N[n].value;t!==E&&(A(e),O(t),null!=g&&y(g,String(t)))},j=function(a){var e,n=null;switch(a.key){case"ArrowRight":var t,r=G.indexOf(a.currentTarget)+1;n=null!=(t=G[r])?t:G[0];break;case"ArrowLeft":var i,o=G.indexOf(a.currentTarget)-1;n=null!=(i=G[o])?i:G[G.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},k)},N.map((function(a){var e=a.value,n=a.label,o=a.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:function(a){return G.push(a)},onKeyDown:j,onFocus:B,onClick:B},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===e})}),null!=n?n:e)}))),o?(0,r.cloneElement)(h.filter((function(a){return a.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(a,e){return(0,r.cloneElement)(a,{key:e,hidden:a.props.value!==E})}))))}function u(a){var e=(0,o.Z)();return r.createElement(m,(0,t.Z)({key:String(e)},a))}},32173:function(a,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var t=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(65488),l=n(85162),p=["components"],s={title:"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f",weight:6},d=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",title:"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f",description:"\u8981\u5728\u91cd\u542f Grafana \u5b9e\u4f8b\u540e\u4fdd\u5b58 Grafana \u4eea\u8868\u677f\uff0c\u8bf7\u5c06\u4eea\u8868\u677f\u7684\u914d\u7f6e JSON \u6dfb\u52a0\u5230 ConfigMap \u4e2d\u3002ConfigMap \u8fd8\u652f\u6301\u4f7f\u7528\u57fa\u4e8e GitOps \u6216 CD \u7684\u65b9\u6cd5\u6765\u90e8\u7f72\u4eea\u8868\u677f\uff0c\u4ece\u800c\u8ba9\u4f60\u5bf9\u4eea\u8868\u677f\u8fdb\u884c\u7248\u672c\u63a7\u5236\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f",weight:6},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"},next:{title:"\u8c03\u8bd5\u9ad8\u5185\u5b58\u7528\u91cf",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage"}},m={},u=[{value:"1. \u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u7684 JSON \u6a21\u578b",id:"1-\u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u7684-json-\u6a21\u578b",level:3},{value:"2. \u4f7f\u7528 Grafana JSON \u6a21\u578b\u521b\u5efa ConfigMap",id:"2-\u4f7f\u7528-grafana-json-\u6a21\u578b\u521b\u5efa-configmap",level:3},{value:"\u4e3a Grafana \u4eea\u8868\u677f ConfigMap \u914d\u7f6e\u547d\u540d\u7a7a\u95f4",id:"\u4e3a-grafana-\u4eea\u8868\u677f-configmap-\u914d\u7f6e\u547d\u540d\u7a7a\u95f4",level:3}],f={toc:u};function g(a){var e=a.components,n=(0,r.Z)(a,p);return(0,i.kt)("wrapper",(0,t.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8981\u5728\u91cd\u542f Grafana \u5b9e\u4f8b\u540e\u4fdd\u5b58 Grafana \u4eea\u8868\u677f\uff0c\u8bf7\u5c06\u4eea\u8868\u677f\u7684\u914d\u7f6e JSON \u6dfb\u52a0\u5230 ConfigMap \u4e2d\u3002ConfigMap \u8fd8\u652f\u6301\u4f7f\u7528\u57fa\u4e8e GitOps \u6216 CD \u7684\u65b9\u6cd5\u6765\u90e8\u7f72\u4eea\u8868\u677f\uff0c\u4ece\u800c\u8ba9\u4f60\u5bf9\u4eea\u8868\u677f\u8fdb\u884c\u7248\u672c\u63a7\u5236\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%88%9B%E5%BB%BA%E6%8C%81%E4%B9%85%E5%8C%96-grafana-%E4%BB%AA%E8%A1%A8%E6%9D%BF"},"\u521b\u5efa\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%B7%B2%E7%9F%A5%E9%97%AE%E9%A2%98"},"\u5df2\u77e5\u95ee\u9898"))),(0,i.kt)("h1",{id:"\u521b\u5efa\u6301\u4e45\u5316-grafana-\u4eea\u8868\u677f"},"\u521b\u5efa\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 Monitoring \u5e94\u7528\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8981\u521b\u5efa\u6301\u4e45\u5316\u4eea\u8868\u677f\uff0c\u4f60\u5fc5\u987b\u5728\u5305\u542b Grafana \u4eea\u8868\u677f\u7684\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u4e2d\u81f3\u5c11\u5177\u6709",(0,i.kt)("strong",{parentName:"li"},"\u7ba1\u7406 ConfigMap")," \u7684 Rancher RBAC \u6743\u9650\u3002\u8fd9\u4e0e Monitoring Chart \u516c\u5f00\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"monitoring-dashboard-edit")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"monitoring-dashboard-admin")," Kubernetes \u539f\u751f RBAC \u89d2\u8272\u5bf9\u5e94\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8981\u67e5\u770b\u6307\u5411\u5916\u90e8\u76d1\u63a7 UI\uff08\u5305\u62ec Grafana \u4eea\u8868\u677f\uff09\u7684\u94fe\u63a5\uff0c\u4f60\u81f3\u5c11\u9700\u8981\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"li",href:"/zh/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring#%E5%85%B7%E6%9C%89-rancher-%E6%9D%83%E9%99%90%E7%9A%84%E7%94%A8%E6%88%B7"},"project-member \u89d2\u8272"),"\u3002")))),(0,i.kt)("h3",{id:"1-\u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u7684-json-\u6a21\u578b"},"1. \u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u7684 JSON \u6a21\u578b"),(0,i.kt)("p",null,"\u8981\u521b\u5efa\u6301\u4e45\u5316\u4eea\u8868\u677f\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u7684 JSON \u6a21\u578b\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u9884\u5236\u4eea\u8868\u677f\u6216\u81ea\u884c\u6784\u5efa\u4eea\u8868\u677f\u3002"),(0,i.kt)("p",null,"\u8981\u4f7f\u7528\u9884\u5236\u4eea\u8868\u677f\uff0c\u8bf7\u8f6c\u5230 ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards"},"https://grafana.com/grafana/dashboards"),"\uff0c\u6253\u5f00\u8be6\u7ec6\u4fe1\u606f\u9875\u9762\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"Download JSON")," \u6309\u94ae\u6765\u83b7\u53d6\u4e0b\u4e00\u6b65\u6240\u9700\u7684 JSON \u6a21\u578b\u3002"),(0,i.kt)("p",null,"\u8981\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u4eea\u8868\u677f\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb\u94fe\u63a5\u6253\u5f00 Grafana\u3002\u5728\u96c6\u7fa4\u8be6\u7ec6\u4fe1\u606f\u9875\u9762\u4e0a\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"Monitoring"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u767b\u5f55\u5230 Grafana\u3002\u8bf7\u6ce8\u610f\uff0cGrafana \u5b9e\u4f8b\u7684\u9ed8\u8ba4 Admin \u7528\u6237\u540d\u548c\u5bc6\u7801\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"admin/prom-operator"),"\u3002\u4f60\u8fd8\u53ef\u4ee5\u5728\u90e8\u7f72\u6216\u5347\u7ea7 Chart \u65f6\u66ff\u6362\u51ed\u8bc1\u3002"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u65e0\u8bba\u8c01\u62e5\u6709\u5bc6\u7801\uff0c\u4f60\u90fd\u9700\u8981\u5728\u90e8\u7f72\u4e86 Rancher Monitoring \u7684\u9879\u76ee\u4e2d\u81f3\u5c11\u5177\u6709",(0,i.kt)("b",null,"\u7ba1\u7406\u670d\u52a1"),"\u6216",(0,i.kt)("b",null,"\u67e5\u770b\u76d1\u63a7"),"\u7684\u6743\u9650\u624d\u80fd\u8bbf\u95ee Grafana \u5b9e\u4f8b\u3002\u4f60\u8fd8\u53ef\u4ee5\u5728\u90e8\u7f72\u6216\u5347\u7ea7 Chart \u65f6\u66ff\u6362\u51ed\u8bc1\u3002")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528 Grafana UI \u521b\u5efa\u4eea\u8868\u677f\u3002\u5b8c\u6210\u540e\uff0c\u5355\u51fb\u9876\u90e8\u5bfc\u822a\u83dc\u5355\u4e2d\u7684\u9f7f\u8f6e\u56fe\u6807\u8f6c\u5230\u4eea\u8868\u677f\u8bbe\u7f6e\u9875\u9762\u3002\u5728\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"JSON Model"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u590d\u5236\u51fa\u73b0\u7684 JSON \u6570\u636e\u7ed3\u6784\u3002"))),(0,i.kt)("h3",{id:"2-\u4f7f\u7528-grafana-json-\u6a21\u578b\u521b\u5efa-configmap"},"2. \u4f7f\u7528 Grafana JSON \u6a21\u578b\u521b\u5efa ConfigMap"),(0,i.kt)("p",null,"\u5728\u5305\u542b Grafana \u4eea\u8868\u677f\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u4e00\u4e2a ConfigMap\uff08\u9ed8\u8ba4\u4e3a cattle-dashboards \uff09\u3002"),(0,i.kt)("p",null,"ConfigMap \u4e0e\u4ee5\u4e0b\u5185\u5bb9\u7c7b\u4f3c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    grafana_dashboard: "1"\n  name: <dashboard-name>\n  namespace: cattle-dashboards # \u5982\u679c\u4e0d\u4f7f\u7528\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4\uff0c\u5219\u4fee\u6539\u6b64\u503c\ndata:\n  <dashboard-name>.json: |-\n    <copied-json>\n')),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cGrafana \u914d\u7f6e\u4e3a\u76d1\u63a7 ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," \u547d\u540d\u7a7a\u95f4\u4e2d\u5e26\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"grafana_dashboard")," \u6807\u7b7e\u7684\u6240\u6709 ConfigMap\u3002"),(0,i.kt)("p",null,"\u8981\u8ba9 Grafana \u76d1\u63a7\u6240\u6709\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ConfigMap\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"#%E4%B8%BA-grafana-%E4%BB%AA%E8%A1%A8%E6%9D%BF-configmap-%E9%85%8D%E7%BD%AE%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4"},"\u672c\u8282"),"\u3002"),(0,i.kt)("p",null,"\u8981\u5728 Rancher UI \u4e2d\u521b\u5efa ConfigMap\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u53ef\u89c6\u5316\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u66f4\u591a\u8d44\u6e90 > \u6838\u5fc3 > \u914d\u7f6e\u6620\u5c04"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u4e0e\u4e0a\u4f8b\u7c7b\u4f3c\u7684\u952e\u503c\u5bf9\u3002\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"<dashboard-name>.json")," \u7684\u503c\u65f6\uff0c\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u4ece\u6587\u4ef6\u8bfb\u53d6"),"\u5e76\u4e0a\u4f20 JSON \u6570\u636e\u6a21\u578b\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u521b\u5efa ConfigMap \u540e\uff0c\u5373\u4f7f Grafana pod \u91cd\u542f\u4e86\uff0cConfigMap \u4e5f\u80fd\u663e\u793a\u5728 Grafana UI \u4e0a\u5e76\u6301\u4e45\u5316\u3002"),(0,i.kt)("p",null,"\u65e0\u6cd5\u5728 Grafana UI \u4e2d\u5220\u9664\u6216\u7f16\u8f91\u4f7f\u7528 ConfigMap \u6301\u4e45\u5316\u4e86\u7684\u4eea\u8868\u677f\u3002"),(0,i.kt)("p",null,'\u5982\u679c\u4f60\u5728 Grafana UI \u4e2d\u5220\u9664\u4eea\u8868\u677f\uff0c\u4f60\u5c06\u770b\u5230 "Dashboard cannot be deleted because it was provisioned" \u7684\u9519\u8bef\u6d88\u606f\u3002\u5982\u9700\u5220\u9664\u4eea\u8868\u677f\uff0c\u4f60\u9700\u8981\u5220\u9664 ConfigMap\u3002'),(0,i.kt)("h3",{id:"\u4e3a-grafana-\u4eea\u8868\u677f-configmap-\u914d\u7f6e\u547d\u540d\u7a7a\u95f4"},"\u4e3a Grafana \u4eea\u8868\u677f ConfigMap \u914d\u7f6e\u547d\u540d\u7a7a\u95f4"),(0,i.kt)("p",null,"\u8981\u8ba9 Grafana \u76d1\u63a7\u6240\u6709\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ConfigMap\uff0c\u8bf7\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," Helm chart \u4e2d\u6307\u5b9a\u4ee5\u4e0b\u503c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"grafana.sidecar.dashboards.searchNamespace=ALL\n")),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cMonitoring Chart \u7528\u4e8e\u6dfb\u52a0 Grafana \u4eea\u8868\u677f\u7684 RBAC \u89d2\u8272\u4ec5\u80fd\u8ba9\u7528\u6237\u5c06\u4eea\u8868\u677f\u6dfb\u52a0\u5230\u5b9a\u4e49\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"grafana.dashboards.namespace")," \u4e2d\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-dashboards"),"\u3002")),(0,i.kt)(l.Z,{value:"Rancher v2.5.8 \u4e4b\u524d\u7684\u7248\u672c",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 Monitoring \u5e94\u7528\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f60\u5fc5\u987b\u5177\u6709 cluster-admin ClusterRole \u6743\u9650\u3002")))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728",(0,i.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u5728\u5176\u4e2d\u914d\u7f6e Grafana \u547d\u540d\u7a7a\u95f4\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u76d1\u63a7"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"p"},"Grafana"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u767b\u5f55\u5230 Grafana\u3002\u8bf7\u6ce8\u610f\uff0cGrafana \u5b9e\u4f8b\u7684\u9ed8\u8ba4 Admin \u7528\u6237\u540d\u548c\u5bc6\u7801\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"admin/prom-operator"),"\u3002\u4f60\u8fd8\u53ef\u4ee5\u5728\u90e8\u7f72\u6216\u5347\u7ea7 Chart \u65f6\u66ff\u6362\u51ed\u8bc1\u3002"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u65e0\u8bba\u8c01\u62e5\u6709\u5bc6\u7801\uff0c\u90fd\u9700\u8981 Rancher \u7684\u96c6\u7fa4\u7ba1\u7406\u5458\u6743\u9650\u624d\u80fd\u8bbf\u95ee Grafana \u5b9e\u4f8b\u3002")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u8fdb\u884c\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u3002\u5728\u9876\u90e8\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u901a\u8fc7\u5355\u51fb\u9f7f\u8f6e\u56fe\u6807\u8f6c\u5230\u4eea\u8868\u677f\u8bbe\u7f6e\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"JSON Model"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u590d\u5236\u51fa\u73b0\u7684 JSON \u6570\u636e\u7ed3\u6784\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," \u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u4e00\u4e2a ConfigMap\u3002ConfigMap \u9700\u8981\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},'grafana_dashboard: "1"')," \u6807\u7b7e\u3002\u5c06 JSON \u7c98\u8d34\u5230 ConfigMap \u4e2d\uff0c\u683c\u5f0f\u5982\u4e0b\u4f8b\u6240\u793a\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    grafana_dashboard: "1"\n  name: <dashboard-name>\n  namespace: cattle-dashboards\ndata:\n  <dashboard-name>.json: |-\n    <copied-json>\n')))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u521b\u5efa ConfigMap \u540e\uff0c\u5373\u4f7f Grafana pod \u91cd\u542f\u4e86\uff0cConfigMap \u4e5f\u80fd\u663e\u793a\u5728 Grafana UI \u4e0a\u5e76\u6301\u4e45\u5316\u3002"),(0,i.kt)("p",null,'\u65e0\u6cd5\u5728 Grafana UI \u4e2d\u5220\u9664\u4f7f\u7528 ConfigMap \u6301\u4e45\u5316\u4e86\u7684\u4eea\u8868\u677f\u3002\u5982\u679c\u4f60\u5728 Grafana UI \u4e2d\u5220\u9664\u4eea\u8868\u677f\uff0c\u4f60\u5c06\u770b\u5230 "Dashboard cannot be deleted because it was provisioned" \u7684\u9519\u8bef\u6d88\u606f\u3002\u5982\u9700\u5220\u9664\u4eea\u8868\u677f\uff0c\u4f60\u9700\u8981\u5220\u9664 ConfigMap\u3002'),(0,i.kt)("p",null,"\u4e3a\u9632\u6b62\u5728\u5378\u8f7d Monitoring v2 \u65f6\u5220\u9664\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\uff0c\u8bf7\u5c06\u4ee5\u4e0b\u6ce8\u91ca\u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," \u547d\u540d\u7a7a\u95f4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'helm.sh/resource-policy: "keep"\n')))),(0,i.kt)("h1",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7684 Monitoring V2 \u7248\u672c\u662f v9.4.203 \u6216\u66f4\u4f4e\u7248\u672c\uff0c\u5378\u8f7d Monitoring chart \u5c06\u540c\u65f6\u5220\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," \u547d\u540d\u7a7a\u95f4\uff0c\u6240\u6709\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u5c06\u88ab\u5220\u9664\uff08\u9664\u975e\u547d\u540d\u7a7a\u95f4\u5e26\u6709\u6ce8\u91ca ",(0,i.kt)("inlineCode",{parentName:"p"},'helm.sh/resource-policy: "keep"'),"\uff09\u3002"),(0,i.kt)("p",null,"Rancher 2.5.8 \u53d1\u5e03\u7684\u65b0 Monitoring Chart \u4e2d\u9ed8\u8ba4\u6dfb\u52a0\u4e86\u8be5\u6ce8\u89e3\uff0c\u4f46\u4f7f\u7528\u65e9\u671f Rancher \u7248\u672c\u7684\u7528\u6237\u4ecd\u9700\u624b\u52a8\u5e94\u7528\u8be5\u6ce8\u91ca\u3002"))}g.isMDXComponent=!0}}]);