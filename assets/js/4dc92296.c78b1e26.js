"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61184],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95631:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Pod Security Policies",weight:5600},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",id:"how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",title:"Pod Security Policies",description:"These cluster options are only available for clusters in which Rancher has launched Kubernetes.",source:"@site/docs/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",permalink:"/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Pod Security Policies",weight:5600},sidebar:"tutorialSidebar",previous:{title:"Rancher's CI/CD Pipelines",permalink:"/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},next:{title:"Project Resource Quotas",permalink:"/pages-for-subheaders/manage-project-resource-quotas"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Applying a Pod Security Policy",id:"applying-a-pod-security-policy",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These cluster options are only available for ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"clusters in which Rancher has launched Kubernetes"),".  "))),(0,o.kt)("p",null,"You can always assign a pod security policy (PSP) to an existing project if you didn't assign one during creation."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a Pod Security Policy within Rancher. Before you can assign a default PSP to an existing project, you must have a PSP available for assignment. For instruction, see ",(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"Creating Pod Security Policies"),"."),(0,o.kt)("li",{parentName:"ul"},"Assign a default Pod Security Policy to the project's cluster. You can't assign a PSP to a project until one is already applied to the cluster. For more information, see ",(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"},"the documentation about adding a pod security policy to a cluster"),". ")),(0,o.kt)("h3",{id:"applying-a-pod-security-policy"},"Applying a Pod Security Policy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to move a namespace and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Cluster > Projects/Namespaces"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the project that you want to add a PSP to. From that project, select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Pod Security Policy")," drop-down, select the PSP you want to apply to the project.\nAssigning a PSP to a project will:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Override the cluster's default PSP."),(0,o.kt)("li",{parentName:"ul"},"Apply the PSP to the project."),(0,o.kt)("li",{parentName:"ul"},"Apply the PSP to any namespaces you add to the project later.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The PSP is applied to the project and any namespaces added to the project."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Any workloads that are already running in a cluster or project before a PSP is assigned will not be checked to determine if they comply with the PSP. Workloads would need to be cloned or upgraded to see if they pass the PSP."))))}m.isMDXComponent=!0}}]);