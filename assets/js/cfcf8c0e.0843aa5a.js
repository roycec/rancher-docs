"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[66626],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,g=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53621:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"Tuning etcd for Large Installations",weight:2,aliases:["/rancher/v2.0-v2.4/en/installation/options/etcd"]},c=void 0,l={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs",title:"Tuning etcd for Large Installations",description:"When running larger Rancher installations with 15 or more clusters it is recommended to increase the default keyspace for etcd from the default 2GB. The maximum setting is 8GB and the host should have enough RAM to keep the entire dataset in memory. When increasing this value you should also increase the size of the host. The keyspace size can also be adjusted in smaller installations if you anticipate a high rate of change of pods during the garbage collection interval.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Tuning etcd for Large Installations",weight:2,aliases:["/rancher/v2.0-v2.4/en/installation/options/etcd"]},sidebar:"tutorialSidebar",previous:{title:"Opening Ports with firewalld",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld"},next:{title:"Enabling the API Audit Log to Record System Events",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log"}},d={},u=[{value:"Example: This snippet of the RKE cluster.yml file increases the keyspace size to 5GB",id:"example-this-snippet-of-the-rke-clusteryml-file-increases-the-keyspace-size-to-5gb",level:3},{value:"Scaling etcd disk performance",id:"scaling-etcd-disk-performance",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When running larger Rancher installations with 15 or more clusters it is recommended to increase the default keyspace for etcd from the default 2GB. The maximum setting is 8GB and the host should have enough RAM to keep the entire dataset in memory. When increasing this value you should also increase the size of the host. The keyspace size can also be adjusted in smaller installations if you anticipate a high rate of change of pods during the garbage collection interval."),(0,i.kt)("p",null,"The etcd data set is automatically cleaned up on a five minute interval by Kubernetes. There are situations, e.g. deployment thrashing, where enough events could be written to etcd and deleted before garbage collection occurs and cleans things up causing the keyspace to fill up. If you see ",(0,i.kt)("inlineCode",{parentName:"p"},"mvcc: database space exceeded")," errors, in the etcd logs or Kubernetes API server logs, you should consider increasing the keyspace size. This can be accomplished by setting the ",(0,i.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/op-guide/maintenance/#space-quota"},"quota-backend-bytes")," setting on the etcd servers."),(0,i.kt)("h3",{id:"example-this-snippet-of-the-rke-clusteryml-file-increases-the-keyspace-size-to-5gb"},"Example: This snippet of the RKE cluster.yml file increases the keyspace size to 5GB"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# RKE cluster.yml\n---\nservices:\n  etcd:\n    extra_args:\n      quota-backend-bytes: 5368709120\n")),(0,i.kt)("h2",{id:"scaling-etcd-disk-performance"},"Scaling etcd disk performance"),(0,i.kt)("p",null,"You can follow the recommendations from ",(0,i.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/tuning/#disk"},"the etcd docs")," on how to tune the disk priority on the host."),(0,i.kt)("p",null,"Additionally, to reduce IO contention on the disks for etcd, you can use a dedicated device for the data and wal directory. Based on etcd best practices, mirroring RAID configurations are unnecessary because etcd replicates data between the nodes in the cluster. You can use striping RAID configurations to increase available IOPS."),(0,i.kt)("p",null,"To implement this solution in an RKE cluster, the ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/etcd/data")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/etcd/wal")," directories will need to have disks mounted and formatted on the underlying host. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"extra_args")," directive of the ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd")," service, you must include the ",(0,i.kt)("inlineCode",{parentName:"p"},"wal_dir")," directory. Without specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"wal_dir"),", etcd process will try to manipulate the underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"wal")," mount with insufficient permissions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# RKE cluster.yml\n---\nservices:\n  etcd:\n    extra_args:\n      data-dir: '/var/lib/rancher/etcd/data/'\n      wal-dir: '/var/lib/rancher/etcd/wal/wal_dir'\n    extra_binds:\n      - '/var/lib/etcd/data:/var/lib/rancher/etcd/data'\n      - '/var/lib/etcd/wal:/var/lib/rancher/etcd/wal'\n")))}h.isMDXComponent=!0}}]);