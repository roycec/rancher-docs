"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[54487],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63755:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"Enable Istio with Pod Security Policies",weight:1},s=void 0,c={unversionedId:"explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",id:"explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",title:"Enable Istio with Pod Security Policies",description:"If you have restrictive Pod Security Policies enabled, then Istio may not be able to function correctly, because it needs certain permissions in order to install itself and manage pod infrastructure. In this section, we will configure a cluster with PSPs enabled for an Istio install, and also set up the Istio CNI plugin.",source:"@site/docs/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies.md",sourceDirName:"explanations/integrations-in-rancher/istio/configuration-options",slug:"/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",permalink:"/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Enable Istio with Pod Security Policies",weight:1},sidebar:"tutorialSidebar",previous:{title:"Configuration Options",permalink:"/pages-for-subheaders/configuration-options"},next:{title:"Selectors and Scrape Configs",permalink:"/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"}},p={},u=[{value:"1. Set the PodSecurityPolicy to unrestricted",id:"1-set-the-podsecuritypolicy-to-unrestricted",level:3},{value:"2. Enable the CNI",id:"2-enable-the-cni",level:3},{value:"3. Verify that the CNI is working",id:"3-verify-that-the-cni-is-working",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you have restrictive Pod Security Policies enabled, then Istio may not be able to function correctly, because it needs certain permissions in order to install itself and manage pod infrastructure. In this section, we will configure a cluster with PSPs enabled for an Istio install, and also set up the Istio CNI plugin. "),(0,o.kt)("p",null,"The Istio CNI plugin removes the need for each application pod to have a privileged ",(0,o.kt)("inlineCode",{parentName:"p"},"NET_ADMIN")," container. For further information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/additional-setup/cni"},"Istio CNI Plugin docs"),". Please note that the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/about/feature-stages/"},"Istio CNI Plugin is in alpha"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"The cluster must be an RKE Kubernetes cluster."),(0,o.kt)("li",{parentName:"ul"},"The cluster must have been created with a default PodSecurityPolicy. ")),(0,o.kt)("p",{parentName:"div"},"To enable pod security policy support when creating a Kubernetes cluster in the Rancher UI, go to ",(0,o.kt)("b",null,"Advanced Options.")," In the ",(0,o.kt)("b",null,"Pod Security Policy Support")," section, click ",(0,o.kt)("b",null,"Enabled.")," Then select a default pod security policy."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-set-the-podsecuritypolicy-to-unrestricted"},"Set the PodSecurityPolicy to unrestricted")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-enable-the-cni"},"Enable the CNI")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3-verify-that-the-cni-is-working"},"Verify that the CNI is working."))),(0,o.kt)("h3",{id:"1-set-the-podsecuritypolicy-to-unrestricted"},"1. Set the PodSecurityPolicy to unrestricted"),(0,o.kt)("p",null,"An unrestricted PSP allows Istio to be installed."),(0,o.kt)("p",null,"Set the PSP to ",(0,o.kt)("inlineCode",{parentName:"p"},"unrestricted")," in the project where is Istio is installed, or the project where you plan to install Istio."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Cluster > Projects/Namespaces"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the ",(0,o.kt)("strong",{parentName:"li"},"Project: System")," and select the ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,o.kt)("li",{parentName:"ol"},"Change the Pod Security Policy option to be unrestricted, then click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("h3",{id:"2-enable-the-cni"},"2. Enable the CNI"),(0,o.kt)("p",null,"When installing or upgrading Istio through ",(0,o.kt)("strong",{parentName:"p"},"Apps & Marketplace,")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Components"),"."),(0,o.kt)("li",{parentName:"ol"},"Check the box next to ",(0,o.kt)("strong",{parentName:"li"},"Enabled CNI"),"."),(0,o.kt)("li",{parentName:"ol"},"Finish installing or upgrading Istio.")),(0,o.kt)("p",null,"The CNI can also be enabled by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"istio_cni.enabled: true\n")),(0,o.kt)("p",null,"Istio should install successfully with the CNI enabled in the cluster."),(0,o.kt)("h3",{id:"3-verify-that-the-cni-is-working"},"3. Verify that the CNI is working"),(0,o.kt)("p",null,"Verify that the CNI is working by deploying a ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/examples/bookinfo/"},"sample application")," or deploying one of your own applications."))}h.isMDXComponent=!0}}]);