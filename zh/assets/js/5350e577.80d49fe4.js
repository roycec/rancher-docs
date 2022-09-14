"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[19711],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=o(n),g=r,f=u["".concat(l,".").concat(g)]||u[g]||p[g]||c;return n?a.createElement(f,d(d({ref:t},s),{},{components:n})):a.createElement(f,d({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,d=new Array(c);d[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var o=2;o<c;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45720:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var a=n(87462),r=n(63366),c=(n(67294),n(3905)),d=["components"],i={title:"\u4e3a\u5927\u578b\u5b89\u88c5\u8fdb\u884c etcd \u8c03\u4f18",weight:2},l=void 0,o={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs",id:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs",title:"\u4e3a\u5927\u578b\u5b89\u88c5\u8fdb\u884c etcd \u8c03\u4f18",description:"\u5f53\u4f60\u8fd0\u884c\u5177\u6709 15 \u4e2a\u6216\u66f4\u591a\u96c6\u7fa4\u7684\u5927\u578b Rancher \u5b89\u88c5\u65f6\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u6269\u5927 etcd \u7684\u9ed8\u8ba4 keyspace\uff08\u9ed8\u8ba4\u4e3a 2GB\uff09\u3002\u4f60\u6700\u5927\u53ef\u4ee5\u5c06\u5b83\u8bbe\u7f6e\u4e3a 8GB\u3002\u6b64\u5916\uff0c\u8bf7\u786e\u4fdd\u4e3b\u673a\u6709\u8db3\u591f\u7684 RAM \u6765\u4fdd\u5b58\u6574\u4e2a\u6570\u636e\u96c6\u3002\u5982\u679c\u9700\u8981\u589e\u52a0\u8fd9\u4e2a\u503c\uff0c\u4f60\u8fd8\u9700\u8981\u540c\u6b65\u589e\u52a0\u4e3b\u673a\u7684\u5927\u5c0f\u3002\u5982\u679c\u4f60\u9884\u8ba1\u5728\u5783\u573e\u56de\u6536\u95f4\u9694\u671f\u95f4 Pod \u7684\u53d8\u5316\u7387\u5f88\u9ad8\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728\u8f83\u5c0f\u7684\u5b89\u88c5\u4e2d\u8c03\u6574 Keyspace \u5927\u5c0f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"\u4e3a\u5927\u578b\u5b89\u88c5\u8fdb\u884c etcd \u8c03\u4f18",weight:2},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 firewalld \u6253\u5f00\u7aef\u53e3",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld"},next:{title:"\u542f\u7528 API \u5ba1\u8ba1\u65e5\u5fd7\u4ee5\u8bb0\u5f55\u7cfb\u7edf\u4e8b\u4ef6",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log"}},s={},p=[{value:"\u793a\u4f8b\uff1a\u6b64 RKE cluster.yml \u6587\u4ef6\u7684\u4ee3\u7801\u7247\u6bb5\u5c06 Keyspace \u7684\u5927\u5c0f\u589e\u52a0\u5230 5GB",id:"\u793a\u4f8b\u6b64-rke-clusteryml-\u6587\u4ef6\u7684\u4ee3\u7801\u7247\u6bb5\u5c06-keyspace-\u7684\u5927\u5c0f\u589e\u52a0\u5230-5gb",level:3},{value:"\u6269\u5c55 etcd \u78c1\u76d8\u6027\u80fd",id:"\u6269\u5c55-etcd-\u78c1\u76d8\u6027\u80fd",level:2}],u={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,c.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u5f53\u4f60\u8fd0\u884c\u5177\u6709 15 \u4e2a\u6216\u66f4\u591a\u96c6\u7fa4\u7684\u5927\u578b Rancher \u5b89\u88c5\u65f6\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u6269\u5927 etcd \u7684\u9ed8\u8ba4 keyspace\uff08\u9ed8\u8ba4\u4e3a 2GB\uff09\u3002\u4f60\u6700\u5927\u53ef\u4ee5\u5c06\u5b83\u8bbe\u7f6e\u4e3a 8GB\u3002\u6b64\u5916\uff0c\u8bf7\u786e\u4fdd\u4e3b\u673a\u6709\u8db3\u591f\u7684 RAM \u6765\u4fdd\u5b58\u6574\u4e2a\u6570\u636e\u96c6\u3002\u5982\u679c\u9700\u8981\u589e\u52a0\u8fd9\u4e2a\u503c\uff0c\u4f60\u8fd8\u9700\u8981\u540c\u6b65\u589e\u52a0\u4e3b\u673a\u7684\u5927\u5c0f\u3002\u5982\u679c\u4f60\u9884\u8ba1\u5728\u5783\u573e\u56de\u6536\u95f4\u9694\u671f\u95f4 Pod \u7684\u53d8\u5316\u7387\u5f88\u9ad8\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728\u8f83\u5c0f\u7684\u5b89\u88c5\u4e2d\u8c03\u6574 Keyspace \u5927\u5c0f\u3002"),(0,c.kt)("p",null,"Kubernetes \u6bcf\u9694\u4e94\u5206\u949f\u4f1a\u81ea\u52a8\u6e05\u7406 etcd \u6570\u636e\u96c6\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff08\u4f8b\u5982\u53d1\u751f\u90e8\u7f72\u6296\u52a8\uff09\uff0c\u5728\u5783\u573e\u56de\u6536\u53d1\u751f\u5e76\u8fdb\u884c\u6e05\u7406\u4e4b\u524d\u4f1a\u6709\u5927\u91cf\u4e8b\u4ef6\u5199\u5165 etcd \u5e76\u5220\u9664\uff0c\u4ece\u800c\u5bfc\u81f4 Keyspace \u586b\u6ee1\u3002\u5982\u679c\u4f60\u5728 etcd \u65e5\u5fd7\u6216 Kubernetes API Server \u65e5\u5fd7\u4e2d\u770b\u5230 ",(0,c.kt)("inlineCode",{parentName:"p"},"mvcc: database space exceeded")," \u9519\u8bef\uff0c\u4f60\u53ef\u4ee5\u5728 etcd \u670d\u52a1\u5668\u4e0a\u8bbe\u7f6e ",(0,c.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/op-guide/maintenance/#space-quota"},"quota-backend-bytes")," \u6765\u589e\u52a0 Keyspace \u7684\u5927\u5c0f\u3002"),(0,c.kt)("h3",{id:"\u793a\u4f8b\u6b64-rke-clusteryml-\u6587\u4ef6\u7684\u4ee3\u7801\u7247\u6bb5\u5c06-keyspace-\u7684\u5927\u5c0f\u589e\u52a0\u5230-5gb"},"\u793a\u4f8b\uff1a\u6b64 RKE cluster.yml \u6587\u4ef6\u7684\u4ee3\u7801\u7247\u6bb5\u5c06 Keyspace \u7684\u5927\u5c0f\u589e\u52a0\u5230 5GB"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"# RKE cluster.yml\n---\nservices:\n  etcd:\n    extra_args:\n      quota-backend-bytes: 5368709120\n")),(0,c.kt)("h2",{id:"\u6269\u5c55-etcd-\u78c1\u76d8\u6027\u80fd"},"\u6269\u5c55 etcd \u78c1\u76d8\u6027\u80fd"),(0,c.kt)("p",null,"\u4f60\u53ef\u4ee5\u53c2\u89c1 ",(0,c.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/tuning/#disk"},"etcd \u6587\u6863"),"\u4e2d\u7684\u5efa\u8bae\uff0c\u4e86\u89e3\u5982\u4f55\u8c03\u6574\u4e3b\u673a\u4e0a\u7684\u78c1\u76d8\u4f18\u5148\u7ea7\u3002"),(0,c.kt)("p",null,"\u6b64\u5916\uff0c\u4e3a\u4e86\u51cf\u5c11 etcd \u78c1\u76d8\u4e0a\u7684 IO \u4e89\u7528\uff0c\u4f60\u53ef\u4ee5\u4e3a data \u548c wal \u76ee\u5f55\u4f7f\u7528\u4e13\u7528\u8bbe\u5907\u3002etcd \u6700\u4f73\u5b9e\u8df5\u4e0d\u5efa\u8bae\u914d\u7f6e Mirror RAID\uff08\u56e0\u4e3a etcd \u5728\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u4e4b\u95f4\u590d\u5236\u6570\u636e\uff09\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 striping RAID \u914d\u7f6e\u6765\u589e\u52a0\u53ef\u7528\u7684 IOPS\u3002"),(0,c.kt)("p",null,"\u8981\u5728 RKE \u96c6\u7fa4\u4e2d\u5b9e\u73b0\u6b64\u89e3\u51b3\u65b9\u6848\uff0c\u4f60\u9700\u8981\u5728\u5e95\u5c42\u4e3b\u673a\u4e0a\u4e3a ",(0,c.kt)("inlineCode",{parentName:"p"},"/var/lib/etcd/data")," \u548c ",(0,c.kt)("inlineCode",{parentName:"p"},"/var/lib/etcd/wal")," \u76ee\u5f55\u6302\u8f7d\u5e76\u683c\u5f0f\u5316\u78c1\u76d8\u3002",(0,c.kt)("inlineCode",{parentName:"p"},"etcd")," \u670d\u52a1\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"extra_args")," \u6307\u4ee4\u4e2d\u5fc5\u987b\u5305\u542b ",(0,c.kt)("inlineCode",{parentName:"p"},"wal_dir")," \u76ee\u5f55\u3002\u5982\u679c\u4e0d\u6307\u5b9a ",(0,c.kt)("inlineCode",{parentName:"p"},"wal_dir"),"\uff0cetcd \u8fdb\u7a0b\u4f1a\u5c1d\u8bd5\u5728\u6743\u9650\u4e0d\u8db3\u7684\u60c5\u51b5\u4e0b\u64cd\u4f5c\u5e95\u5c42\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"wal")," \u6302\u8f7d\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"# RKE cluster.yml\n---\nservices:\n  etcd:\n    extra_args:\n      data-dir: '/var/lib/rancher/etcd/data/'\n      wal-dir: '/var/lib/rancher/etcd/wal/wal_dir'\n    extra_binds:\n      - '/var/lib/etcd/data:/var/lib/rancher/etcd/data'\n      - '/var/lib/etcd/wal:/var/lib/rancher/etcd/wal'\n")))}g.isMDXComponent=!0}}]);