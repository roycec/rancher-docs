"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[15188],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),l=["components"],i={title:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u6e32\u67d3 Helm \u6a21\u677f",shortTitle:"\u79bb\u7ebf\u5347\u7ea7",weight:1},o=void 0,p={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",id:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",title:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u6e32\u67d3 Helm \u6a21\u677f",description:"\u4ee5\u4e0b\u8bf4\u660e\u5047\u8bbe\u4f60\u5df2\u7ecf\u6309\u7167\u672c\u9875\u7684 Kubernetes \u5347\u7ea7\u8bf4\u660e\u64cd\u4f5c\uff08\u5305\u62ec\u5148\u51b3\u6761\u4ef6\uff09\u5230\u6b65\u9aa4 3\uff1a\u5347\u7ea7 Rancher\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u6e32\u67d3 Helm \u6a21\u677f",shortTitle:"\u79bb\u7ebf\u5347\u7ea7",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u5347\u7ea7",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},next:{title:"\u5728 Amazon EKS \u4e0a\u5b89\u88c5 Rancher",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"}},c={},u=[{value:"Rancher Helm \u6a21\u677f\u9009\u9879",id:"rancher-helm-\u6a21\u677f\u9009\u9879",level:3},{value:"\u9009\u9879 A\uff1a\u4f7f\u7528\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66",id:"\u9009\u9879-a\u4f7f\u7528\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66",level:3},{value:"\u9009\u9879 B\uff1a\u4f7f\u7528 Kubernetes \u5bc6\u6587\u4ece\u6587\u4ef6\u4e2d\u83b7\u53d6\u8bc1\u4e66",id:"\u9009\u9879-b\u4f7f\u7528-kubernetes-\u5bc6\u6587\u4ece\u6587\u4ef6\u4e2d\u83b7\u53d6\u8bc1\u4e66",level:3},{value:"\u5e94\u7528\u5df2\u6e32\u67d3\u7684\u6a21\u677f",id:"\u5e94\u7528\u5df2\u6e32\u67d3\u7684\u6a21\u677f",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u8bf4\u660e\u5047\u8bbe\u4f60\u5df2\u7ecf\u6309\u7167",(0,s.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},"\u672c\u9875"),"\u7684 Kubernetes \u5347\u7ea7\u8bf4\u660e\u64cd\u4f5c\uff08\u5305\u62ec\u5148\u51b3\u6761\u4ef6\uff09\u5230\u6b65\u9aa4 3\uff1a\u5347\u7ea7 Rancher\u3002"))),(0,s.kt)("h3",{id:"rancher-helm-\u6a21\u677f\u9009\u9879"},"Rancher Helm \u6a21\u677f\u9009\u9879"),(0,s.kt)("p",null,"\u4f7f\u7528\u5b89\u88c5 Rancher \u65f6\u9009\u62e9\u7684\u9009\u9879\u6765\u6e32\u67d3 Rancher \u6a21\u677f\u3002\u53c2\u8003\u4e0b\u8868\u6765\u66ff\u6362\u6bcf\u4e2a\u5360\u4f4d\u7b26\u3002Rancher \u9700\u8981\u914d\u7f6e\u4e3a\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff0c\u4ee5\u4fbf\u914d\u7f6e\u6240\u6709 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u6216 Rancher \u5de5\u5177\u3002"),(0,s.kt)("p",null,"\u6839\u636e\u4f60\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u505a\u51fa\u7684\u9009\u62e9\uff0c\u5b8c\u6210\u4ee5\u4e0b\u6b65\u9aa4\u4e4b\u4e00\u3002"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,s.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<VERSION>")),(0,s.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u538b\u7f29\u5305\u7684\u7248\u672c\u53f7\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<RANCHER.YOURDOMAIN.COM>")),(0,s.kt)("td",{parentName:"tr",align:null},"\u6307\u5411\u8d1f\u8f7d\u5747\u8861\u5668\u7684 DNS \u540d\u79f0\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,s.kt)("td",{parentName:"tr",align:null},"\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684 DNS \u540d\u79f0\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<CERTMANAGER_VERSION>")),(0,s.kt)("td",{parentName:"tr",align:null},"\u5728 K8s \u96c6\u7fa4\u4e0a\u8fd0\u884c\u7684 cert-manager \u7248\u672c\u3002")))),(0,s.kt)("h3",{id:"\u9009\u9879-a\u4f7f\u7528\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66"},"\u9009\u9879 A\uff1a\u4f7f\u7528\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set certmanager.version=<CERTMANAGER_VERSION> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,s.kt)("h3",{id:"\u9009\u9879-b\u4f7f\u7528-kubernetes-\u5bc6\u6587\u4ece\u6587\u4ef6\u4e2d\u83b7\u53d6\u8bc1\u4e66"},"\u9009\u9879 B\uff1a\u4f7f\u7528 Kubernetes \u5bc6\u6587\u4ece\u6587\u4ef6\u4e2d\u83b7\u53d6\u8bc1\u4e66"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u79c1\u6709 CA \u7b7e\u540d\u7684\u8bc1\u4e66\uff0c\u8bf7\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret")," \u540e\u52a0\u4e0a ",(0,s.kt)("inlineCode",{parentName:"p"},"--set privateCA=true"),"\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set privateCA=true \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,s.kt)("h3",{id:"\u5e94\u7528\u5df2\u6e32\u67d3\u7684\u6a21\u677f"},"\u5e94\u7528\u5df2\u6e32\u67d3\u7684\u6a21\u677f"),(0,s.kt)("p",null,"\u5c06\u6e32\u67d3\u7684 manifest \u76ee\u5f55\u590d\u5236\u5230\u53ef\u4ee5\u8bbf\u95ee Rancher Server \u96c6\u7fa4\u7684\u7cfb\u7edf\u4e2d\uff0c\u5e76\u5e94\u7528\u6e32\u67d3\u7684\u6a21\u677f\u3002"),(0,s.kt)("p",null,"\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6765\u5e94\u7528\u6e32\u67d3\u7684 manifest\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cattle-system apply -R -f ./rancher\n")),(0,s.kt)("h1",{id:"\u9a8c\u8bc1\u5347\u7ea7"},"\u9a8c\u8bc1\u5347\u7ea7"),(0,s.kt)("p",null,"\u767b\u5f55 Rancher \u4ee5\u786e\u8ba4\u5347\u7ea7\u6210\u529f\u3002"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u5347\u7ea7\u540e\u51fa\u73b0\u7f51\u7edc\u95ee\u9898"),(0,s.kt)("p",{parentName:"div"},"\u8bf7\u53c2\u89c1",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration"},"\u6062\u590d\u96c6\u7fa4\u7f51\u7edc"),"\u3002"))),(0,s.kt)("h1",{id:"\u5df2\u77e5\u5347\u7ea7\u95ee\u9898"},"\u5df2\u77e5\u5347\u7ea7\u95ee\u9898"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," \u53d1\u5e03\u8bf4\u660e\u4ee5\u53ca ",(0,s.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher \u8bba\u575b"),"\u4e2d\u627e\u5230\u6bcf\u4e2a Rancher \u7248\u672c\u7684\u5df2\u77e5\u95ee\u9898\u3002"))}m.isMDXComponent=!0}}]);