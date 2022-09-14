"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[19123],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},88323:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"HTTP Proxy Configuration",weight:277,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on/proxy","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/proxy/"]},s=void 0,d={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/proxy",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/proxy",title:"HTTP Proxy Configuration",description:"#### Important: RKE add-on install is only supported up to Rancher v2.0.8",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/proxy.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/proxy",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/proxy",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/proxy.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"HTTP Proxy Configuration",weight:277,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on/proxy","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/proxy/"]},sidebar:"tutorialSidebar",previous:{title:"NGINX Configuration",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/nginx"},next:{title:"Enable API Auditing",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/api-auditing"}},p={},u=[{value:"Kubernetes installation",id:"kubernetes-installation",level:2}],c={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"important-rke-add-on-install-is-only-supported-up-to-rancher-v208"},(0,o.kt)("strong",{parentName:"h4"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,o.kt)("p",{parentName:"blockquote"},"Please use the Rancher Helm chart to install Rancher on a Kubernetes cluster. For details, see the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},"Kubernetes Install "),"."),(0,o.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on")," for details on how to move to using the helm chart.")),(0,o.kt)("p",null,"If you operate Rancher behind a proxy and you want to access services through the proxy (such as retrieving catalogs), you must provide Rancher information about your proxy. As Rancher is written in Go, it uses the common proxy environment variables as shown below."),(0,o.kt)("p",null,"Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," contains the network addresses, network address ranges and domains that should be excluded from using the proxy."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Environment variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HTTP_PROXY"),(0,o.kt)("td",{parentName:"tr",align:null},"Proxy address to use when initiating HTTP connection(s)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HTTPS_PROXY"),(0,o.kt)("td",{parentName:"tr",align:null},"Proxy address to use when initiating HTTPS connection(s)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NO_PROXY"),(0,o.kt)("td",{parentName:"tr",align:null},"Network address(es), network address range(s) and domains to exclude from using the proxy when initiating connection(s)")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note")," NO_PROXY must be in uppercase to use network range (CIDR) notation.")),(0,o.kt)("h2",{id:"kubernetes-installation"},"Kubernetes installation"),(0,o.kt)("p",null,"When using Kubernetes installation, the environment variables need to be added to the RKE Config File template."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on-layer-4-lb#5-download-rke-config-file-template"},"Kubernetes Installation with External Load Balancer (TCP/Layer 4) RKE Config File Template")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on-layer-7-lb#5-download-rke-config-file-template"},"Kubernetes Installation with External Load Balancer (HTTPS/Layer 7) RKE Config File Template"))),(0,o.kt)("p",null,"The environment variables should be defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment")," inside the RKE Config File Template. You only have to add the part starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"env:")," to (but not including) ",(0,o.kt)("inlineCode",{parentName:"p"},"ports:"),". Make sure the indentation is identical to the preceding ",(0,o.kt)("inlineCode",{parentName:"p"},"name:"),". Required values for ",(0,o.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"localhost")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0.0.0.0")),(0,o.kt)("li",{parentName:"ul"},"Configured ",(0,o.kt)("inlineCode",{parentName:"li"},"service_cluster_ip_range")," (default: ",(0,o.kt)("inlineCode",{parentName:"li"},"10.43.0.0/16"),")")),(0,o.kt)("p",null,"The example below is based on a proxy server accessible at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://192.168.0.1:3128"),", and excluding usage of the proxy when accessing network range ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.10.0/24"),", the configured ",(0,o.kt)("inlineCode",{parentName:"p"},"service_cluster_ip_range")," (",(0,o.kt)("inlineCode",{parentName:"p"},"10.43.0.0/16"),") and every hostname under the domain ",(0,o.kt)("inlineCode",{parentName:"p"},"example.com"),". If you have changed the ",(0,o.kt)("inlineCode",{parentName:"p"},"service_cluster_ip_range"),", you have to update the value below accordingly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'...\n---\n  kind: Deployment\n  apiVersion: extensions/v1beta1\n  metadata:\n    namespace: cattle-system\n    name: cattle\n  spec:\n    replicas: 1\n    template:\n      metadata:\n        labels:\n          app: cattle\n      spec:\n        serviceAccountName: cattle-admin\n        containers:\n        - image: rancher/rancher:latest\n          imagePullPolicy: Always\n          name: cattle-server\n          env:\n          - name: HTTP_PROXY\n            value: "http://192.168.10.1:3128"\n          - name: HTTPS_PROXY\n            value: "http://192.168.10.1:3128"\n          - name: NO_PROXY\n            value: "localhost,127.0.0.1,0.0.0.0,10.43.0.0/16,192.168.10.0/24,example.com"\n          ports:\n...\n')))}m.isMDXComponent=!0}}]);