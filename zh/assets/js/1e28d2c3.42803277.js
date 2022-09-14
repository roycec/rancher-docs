"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99296],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(t),d=i,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},17809:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={title:"Additional Steps for Installing Istio on an RKE2 Cluster",weight:3,aliases:["/rancher/v2.5/en/istio/v2.5/configuration-reference/rke2","/rancher/v2.x/en/istio/v2.5/configuration-reference/rke2/"]},l=void 0,c={unversionedId:"explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",id:"version-2.5/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",title:"Additional Steps for Installing Istio on an RKE2 Cluster",description:"Through the Cluster Explorer, when installing or upgrading Istio through Apps & Marketplace,",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster.md",sourceDirName:"explanations/integrations-in-rancher/istio/configuration-options",slug:"/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",permalink:"/zh/v2.5/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster.md",tags:[],version:"2.5",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Additional Steps for Installing Istio on an RKE2 Cluster",weight:3,aliases:["/rancher/v2.5/en/istio/v2.5/configuration-reference/rke2","/rancher/v2.x/en/istio/v2.5/configuration-reference/rke2/"]},sidebar:"tutorialSidebar",previous:{title:"Selectors and Scrape Configs",permalink:"/zh/v2.5/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},next:{title:"Additional Steps for Project Network Isolation",permalink:"/zh/v2.5/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation"}},p={},u=[],f={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Through the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer,")," when installing or upgrading Istio through ",(0,o.kt)("strong",{parentName:"p"},"Apps & Marketplace,")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Components."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the box next to ",(0,o.kt)("strong",{parentName:"p"},"Enabled CNI."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a custom overlay file specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"cniBinDir")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cniConfDir"),". For more information on these options, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/setup/additional-setup/cni/#helm-chart-parameters"},"Istio documentation.")," An example is below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nspec:\n  components:\n    cni:\n      enabled: true\n  values:\n    cni:\n      image: rancher/istio-install-cni:1.7.3\n      excludeNamespaces:\n        - istio-system\n        - kube-system\n      logLevel: info\n      cniBinDir: /opt/cni/bin\n      cniConfDir: /etc/cni/net.d\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After installing Istio, you'll notice the cni-node pods in the istio-system namespace in a CrashLoopBackoff error. Manually edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-cni-node")," daemonset to include the following on the ",(0,o.kt)("inlineCode",{parentName:"p"},"install-cni")," container:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"securityContext:\n    privileged: true\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Now you should be able to utilize Istio as desired, including sidecar injection and monitoring via Kiali."))}d.isMDXComponent=!0}}]);