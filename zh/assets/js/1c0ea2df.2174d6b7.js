"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[19328],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,u=h["".concat(m,".").concat(d)]||h[d]||c[d]||o;return r?a.createElement(u,l(l({ref:t},s),{},{components:r})):a.createElement(u,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},46266:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],i={title:"Prometheus Federator",weight:7},m=void 0,p={unversionedId:"pages-for-subheaders/prometheus-federator",id:"pages-for-subheaders/prometheus-federator",title:"Prometheus Federator",description:"Prometheus Federator\uff08\u4e5f\u79f0\u4e3a Project Monitoring V2\uff09\u57fa\u4e8e rancher/helm-project-operator \u90e8\u7f72\u4e00\u4e2a Helm Project Operator\u3002\u8be5 Operator \u7ba1\u7406 Helm Chart \u7684\u90e8\u7f72\uff0c\u6bcf\u4e2a Operator \u90fd\u5305\u542b\u4e00\u4e2a Project Monitoring Stack\uff0c\u800c\u6bcf\u4e2a\u5806\u6808\u90fd\u5305\u542b\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/prometheus-federator.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/prometheus-federator",permalink:"/zh/pages-for-subheaders/prometheus-federator",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/prometheus-federator.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Prometheus Federator",weight:7},sidebar:"tutorialSidebar",previous:{title:"\u793a\u4f8b",permalink:"/zh/reference-guides/monitoring-v2-configuration/examples"},next:{title:"RBAC",permalink:"/zh/reference-guides/prometheus-federator/rbac"}},s={},c=[{value:"Operator \u5de5\u4f5c\u539f\u7406",id:"operator-\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u4ec0\u4e48\u662f\u9879\u76ee\uff1f",id:"\u4ec0\u4e48\u662f\u9879\u76ee",level:3},{value:"\u914d\u7f6e\u7531 ProjectHelmChart \u521b\u5efa\u7684 Helm \u7248\u672c",id:"\u914d\u7f6e\u7531-projecthelmchart-\u521b\u5efa\u7684-helm-\u7248\u672c",level:3},{value:"\u547d\u540d\u7a7a\u95f4",id:"\u547d\u540d\u7a7a\u95f4",level:3},{value:"Helm \u8d44\u6e90\uff08HelmChart\u3001HelmRelease\uff09",id:"helm-\u8d44\u6e90helmcharthelmrelease",level:3},{value:"\u9ad8\u7ea7 Helm Project Operator \u914d\u7f6e",id:"\u9ad8\u7ea7-helm-project-operator-\u914d\u7f6e",level:3},{value:"Local \u96c6\u7fa4\u4e0a\u7684 Prometheus Federator",id:"local-\u96c6\u7fa4\u4e0a\u7684-prometheus-federator",level:3}],h={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Prometheus Federator\uff08\u4e5f\u79f0\u4e3a Project Monitoring V2\uff09\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/helm-project-operator"},"rancher/helm-project-operator")," \u90e8\u7f72\u4e00\u4e2a Helm Project Operator\u3002\u8be5 Operator \u7ba1\u7406 Helm Chart \u7684\u90e8\u7f72\uff0c\u6bcf\u4e2a Operator \u90fd\u5305\u542b\u4e00\u4e2a Project Monitoring Stack\uff0c\u800c\u6bcf\u4e2a\u5806\u6808\u90fd\u5305\u542b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus"),"\uff08\u7531 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator")," \u5728\u5916\u90e8\u7ba1\u7406\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Alertmanager"),"\uff08\u7531 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator")," \u5728\u5916\u90e8\u7ba1\u7406\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/helm/charts/tree/master/stable/grafana"},"Grafana"),"\uff08\u901a\u8fc7\u5d4c\u5165\u5f0f Helm Chart \u90e8\u7f72\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/kube-prometheus/"},"kube-prometheus")," \u793e\u533a\u7b56\u5212\u8d44\u6e90\u96c6\u5408\u7684\u9ed8\u8ba4 PrometheusRules \u548c Grafana \u4eea\u8868\u677f"),(0,o.kt)("li",{parentName:"ul"},"\u76d1\u89c6\u5df2\u90e8\u7f72\u8d44\u6e90\u7684\u9ed8\u8ba4 ServiceMonitor")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Prometheus Federator \u9002\u5408\u5728\u5df2\u5b89\u88c5 Prometheus Operator CRD \u7684\u96c6\u7fa4\u4e2d\u4e0e\u73b0\u6709\u7684 Prometheus Operator Deployment \u4e00\u8d77\u90e8\u7f72\u3002"))),(0,o.kt)("h2",{id:"operator-\u5de5\u4f5c\u539f\u7406"},"Operator \u5de5\u4f5c\u539f\u7406"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u90e8\u7f72\u6b64 Chart \u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u521b\u5efa ProjectHelmCharts CR\uff0c\u5e76\u5728",(0,o.kt)("strong",{parentName:"li"},"\u9879\u76ee Registration \u547d\u540d\u7a7a\u95f4 (",(0,o.kt)("inlineCode",{parentName:"strong"},"cattle-project-<id>"),")")," \u4e2d\u5c06 ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.helmApiVersion")," \u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"monitoring.cattle.io/v1alpha1"),"\uff08\u5728 Rancher UI \u4e2d\u4e5f\u79f0\u4e3a\u201c\u9879\u76ee\u76d1\u63a7\u201d\uff09\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u770b\u5230\u6bcf\u4e2a ProjectHelmChartCR \u65f6\uff0cOperator \u4f1a\u4ee3\u8868\u9879\u76ee\u6240\u6709\u8005\u5728",(0,o.kt)("strong",{parentName:"li"},"\u9879\u76ee Release \u547d\u540d\u7a7a\u95f4 (",(0,o.kt)("inlineCode",{parentName:"strong"},"cattle-project-<id>-monitoring"),")")," \u4e2d\u81ea\u52a8\u90e8\u7f72\u4e00\u4e2a Project Prometheus \u5806\u6808\uff08\u57fa\u4e8e ProjectHelmChart \u63a7\u5236\u5668\u5728 ",(0,o.kt)("strong",{parentName:"li"},"Operator / System Namespace")," \u4e2d\u521b\u5efa\u7684 HelmChart CR \u548c HelmRelease CR\uff09\u3002"),(0,o.kt)("li",{parentName:"ol"},"RBAC \u5c06\u81ea\u52a8\u5206\u914d\u5230\u9879\u76ee Release \u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u4ece\u800c\u5141\u8bb8\u7528\u6237\u67e5\u770b Prometheus\u3001Alertmanager \u4ee5\u53ca\u5df2\u90e8\u7f72\u7684 Project Monitoring Stack \u7684 Grafana UI\uff08\u57fa\u4e8e\u5728\u9879\u76ee Registration \u547d\u540d\u7a7a\u95f4\u4e0a\u9488\u5bf9",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authmonitoring-alerting/prometheus-federator/rbac#user-facing-roles"},"\u9762\u5411\u7528\u6237\u7684\u9ed8\u8ba4 Kubernetes \u89d2\u8272"),"\u5b9a\u4e49\u7684 RBAC\uff09\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"li",href:"/zh/reference-guides/prometheus-federator/rbac"},"\u914d\u7f6e RBAC"),"\u3002")),(0,o.kt)("h3",{id:"\u4ec0\u4e48\u662f\u9879\u76ee"},"\u4ec0\u4e48\u662f\u9879\u76ee\uff1f"),(0,o.kt)("p",null,"\u5728 Prometheus Federator \u4e2d\uff0c\u9879\u76ee\u662f\u4e00\u7ec4\u53ef\u4ee5\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"metav1.LabelSelector")," \u6807\u8bc6\u7684\u547d\u540d\u7a7a\u95f4\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7528\u4e8e\u6807\u8bc6\u9879\u76ee\u7684\u6807\u7b7e\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"field.cattle.io/projectId"),"\uff0c\u8be5\u6807\u7b7e\u7528\u4e8e\u6807\u8bc6\u7ed9\u5b9a Rancher \u9879\u76ee\u4e2d\u5305\u542b\u7684\u547d\u540d\u7a7a\u95f4\u3002"),(0,o.kt)("h3",{id:"\u914d\u7f6e\u7531-projecthelmchart-\u521b\u5efa\u7684-helm-\u7248\u672c"},"\u914d\u7f6e\u7531 ProjectHelmChart \u521b\u5efa\u7684 Helm \u7248\u672c"),(0,o.kt)("p",null,"\u6b64 ProjectHelmChart \u8d44\u6e90\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.values")," \u5bf9\u5e94\u4e8e\u4e3a\u5e95\u5c42 Helm Chart \u914d\u7f6e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u8986\u76d6\uff0c\u8be5 Helm Chart \u662f Operator \u4ee3\u8868\u7528\u6237\u90e8\u7f72\u7684\u3002\u8981\u67e5\u770b\u5e95\u5c42 Chart \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u89c4\u8303\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4ee5\u4e0b\u5176\u4e2d\u4e00\u79cd\u65b9\u5f0f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u67e5\u770b\u4f4d\u4e8e ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/prometheus-federator/blob/main/charts/rancher-project-monitoring"},(0,o.kt)("inlineCode",{parentName:"a"},"charts/rancher-project-monitoring")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"a"},"rancher/prometheus-federator"))," \u7684 Chart \u5b9a\u4e49\uff08Chart \u7248\u672c\u4f1a\u7ed1\u5b9a\u5230 Operator \u7248\u672c\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u67e5\u627e\u5728\u6bcf\u4e2a\u9879\u76ee Registration \u547d\u540d\u7a7a\u95f4\u4e2d\u81ea\u52a8\u521b\u5efa\u7684\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"monitoring.cattle.io.v1alpha1")," \u7684 ConfigMap\uff0c\u5176\u4e2d\u5305\u542b\u7528\u4e8e\u914d\u7f6e Chart\uff08\u76f4\u63a5\u5d4c\u5165\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"prometheus-federator")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff09\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"values.yaml")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"questions.yaml"),"\u3002")),(0,o.kt)("h3",{id:"\u547d\u540d\u7a7a\u95f4"},"\u547d\u540d\u7a7a\u95f4"),(0,o.kt)("p",null,"Prometheus Federator \u662f\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/helm-project-operator"},"rancher/helm-project-operator")," \u7684 Project Operator\uff0cPrometheus Federator \u63d0\u4f9b\u4e86\u4e09\u7c7b\u547d\u540d\u7a7a\u95f4\u4f9b Operator \u67e5\u627e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Operator / System \u547d\u540d\u7a7a\u95f4"),"\uff1a\u90e8\u7f72 Operator \u7684\u547d\u540d\u7a7a\u95f4\uff08\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system"),"\uff09\u3002\u6b64\u547d\u540d\u7a7a\u95f4\u5c06\u5305\u542b\u8be5 Operator \u76d1\u89c6\u7684\u6240\u6709 ProjectHelmChart \u7684\u6240\u6709 HelmChart \u548c HelmRelease\u3002",(0,o.kt)("strong",{parentName:"p"},"\u53ea\u6709\u96c6\u7fa4\u7ba1\u7406\u5458\u624d\u80fd\u8bbf\u95ee\u6b64\u547d\u540d\u7a7a\u95f4"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u9879\u76ee Registration \u547d\u540d\u7a7a\u95f4 (",(0,o.kt)("inlineCode",{parentName:"strong"},"cattle-project-<id>"),")"),"\uff1aOperator \u5728\u8fd9\u4e9b\u547d\u540d\u7a7a\u95f4\u4e2d\u76d1\u89c6 ProjectHelmChart\u3002\u5bf9\u4e8e\u5728\u9879\u76ee\u53d1\u5e03\u547d\u540d\u7a7a\u200b\u200b\u95f4\u4e2d\u521b\u5efa\u7684\u81ea\u52a8\u5206\u914d\u7684 RBAC\uff0c\u5e94\u7528\u4e8e\u6b64\u547d\u540d\u7a7a\u95f4\u7684 RoleBinding \u548c ClusterRoleBinding \u4e5f\u4f1a\u4f5c\u4e3a RBAC \u7684\u771f\u5b9e\u6765\u6e90\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/zh/reference-guides/prometheus-federator/rbac"},"RBAC \u9875\u9762"),"\u3002",(0,o.kt)("strong",{parentName:"p"},"\u9879\u76ee\u6240\u6709\u8005\uff08admin\uff09\u3001\u9879\u76ee\u6210\u5458\uff08edit\uff09\u548c\u53ea\u8bfb\u6210\u5458\uff08view\uff09\u5e94\u8be5\u6709\u6743\u8bbf\u95ee\u6b64\u547d\u540d\u7a7a\u95f4\u3002")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f\u4e8b\u9879\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.global.cattle.projectLabel"),"\uff08\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"field.cattle.io/projectId"),"\uff09\uff0c\u5219 Operator \u4f1a\u81ea\u52a8\u751f\u6210\u9879\u76ee\u6ce8\u518c\u547d\u540d\u7a7a\u95f4\uff0c\u5e76\u5c06\u5b83\u5bfc\u5165\u5230\u547d\u540d\u7a7a\u95f4\u7ed1\u5b9a\u7684\u9879\u76ee\u4e2d\u3002\u6362\u8a00\u4e4b\uff0c\u5982\u679c\u89c2\u5bdf\u5230\u81f3\u5c11\u4e00\u4e2a\u5e26\u6709\u8be5\u6807\u7b7e\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u5219 Operator \u4f1a\u521b\u5efa\u4e00\u4e2a\u9879\u76ee Registration \u547d\u540d\u7a7a\u95f4\u3002\u9664\u975e\u51fa\u73b0\u4ee5\u4e0b\u4e24\u79cd\u60c5\u51b5\uff0c\u5426\u5219 Operator \u4e0d\u4f1a\u8ba9\u8fd9\u4e9b\u547d\u540d\u7a7a\u95f4\u88ab\u5220\u9664\u3002\u7b2c\u4e00\u79cd\u60c5\u51b5\u662f\u5e26\u6709\u8be5\u6807\u7b7e\u7684\u6240\u6709\u547d\u540d\u7a7a\u95f4\u90fd\u6d88\u5931\u4e86\uff08\u4f8b\u5982\uff0c\u8fd9\u662f\u8be5\u9879\u76ee\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u547d\u540d\u7a7a\u95f4\u5c06\u6807\u6709\u6807\u7b7e ",(0,o.kt)("inlineCode",{parentName:"p"},'"helm.cattle.io/helm-project-operator-orphaned": "true"'),"\uff0c\u8868\u793a\u53ef\u4ee5\u5220\u9664\uff09\u3002\u7b2c\u4e8c\u79cd\u60c5\u51b5\u662f\u7531\u4e8e\u9879\u76ee ID \u662f\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.helmProjectOperator.otherSystemProjectLabelValues")," \u4e0b\u63d0\u4f9b\u7684\uff08\u7528\u4f5c\u9879\u76ee\u7684\u62d2\u7edd\u540d\u5355\uff09\uff0c\u5bfc\u81f4 Operator \u4e0d\u518d\u76d1\u89c6\u8be5\u9879\u76ee\u3002\u8fd9\u4e9b\u547d\u540d\u7a7a\u95f4\u4e0d\u4f1a\u88ab\u81ea\u52a8\u5220\u9664\uff0c\u8fd9\u6837\u80fd\u907f\u514d\u7834\u574f\u7528\u6237\u6570\u636e\u3002\u5982\u679c\u9700\u8981\uff0c\u5efa\u8bae\u7528\u6237\u5728\u521b\u5efa\u6216\u5220\u9664\u9879\u76ee\u65f6\u624b\u52a8\u6e05\u7406\u8fd9\u4e9b\u547d\u540d\u7a7a\u95f4\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u672a\u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.global.cattle.projectLabel"),"\uff0c\u5219 Operator / System \u547d\u540d\u7a7a\u95f4\u4e5f\u662f\u9879\u76ee\u6ce8\u518c\u547d\u540d\u7a7a\u95f4\u3002")))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u9879\u76ee\u53d1\u5e03\u547d\u540d\u7a7a\u200b\u200b\u95f4\uff08",(0,o.kt)("inlineCode",{parentName:"strong"},"cattle-project-<id>-monitoring"),"\uff09"),"\uff1aOperator \u4ee3\u8868 ProjectHelmChart \u5728\u5176\u4e2d\u90e8\u7f72\u9879\u76ee\u76d1\u63a7\u5806\u6808\u7684\u547d\u540d\u7a7a\u95f4\u96c6\u3002Operator \u8fd8\u5c06\u6839\u636e\u5728\u9879\u76ee Registration \u547d\u540d\u7a7a\u95f4\u4e2d\u627e\u5230\u7684\u7ed1\u5b9a\uff0c\u81ea\u52a8\u4e3a\u9879\u76ee\u76d1\u63a7\u5806\u6808\u5728\u6b64\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u7684\u89d2\u8272\u5206\u914d RBAC\u3002",(0,o.kt)("strong",{parentName:"p"},"\u53ea\u6709\u96c6\u7fa4\u7ba1\u7406\u5458\u624d\u80fd\u8bbf\u95ee\u8fd9\u4e2a\u547d\u540d\u7a7a\u95f4\u3002\u90e8\u7f72\u7684 Helm Chart \u548c Prometheus Federator \u5c06\u4e3a\u9879\u76ee\u6240\u6709\u8005\uff08admin\uff09\u3001\u9879\u76ee\u6210\u5458\uff08edit\uff09\u548c\u53ea\u8bfb\u6210\u5458\uff08view\uff09\u5206\u914d\u8be5\u547d\u540d\u7a7a\u95f4\u7684\u6709\u9650\u8bbf\u95ee\u6743\u9650\u3002")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f\u4e8b\u9879\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u9879\u76ee\u53d1\u5e03\u547d\u540d\u7a7a\u95f4\u4f1a\u81ea\u52a8\u90e8\u7f72\u5e76\u5bfc\u5165\u5230 ID \u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.helmProjectOperator.projectReleaseNamespaces.labelValue")," \u4e0b\u6307\u5b9a\u7684\u9879\u76ee\u4e2d\uff0c\u5982\u679c\u672a\u6307\u5b9a\uff0c\u4e14\u9879\u76ee\u6ce8\u518c\u547d\u540d\u7a7a\u95f4\u4e2d\u6307\u5b9a\u4e86 ProjectHelmChart\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.global.cattle.systemProjectId")," \u7684\u503c\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u9879\u76ee\u53d1\u5e03\u547d\u540d\u7a7a\u200b\u200b\u95f4\u7684\u5b64\u7acb\u7ea6\u5b9a\u4e0e\u9879\u76ee\u6ce8\u518c\u547d\u540d\u7a7a\u95f4\u7684\u76f8\u540c\uff08\u53c2\u89c1\u4e0a\u9762\u7684\u6ce8\u91ca\uff09\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.projectReleaseNamespaces.enabled")," \u4e3a false\uff0c\u5219\u9879\u76ee\u53d1\u5e03\u547d\u540d\u7a7a\u200b\u200b\u95f4\u4e0e\u9879\u76ee\u6ce8\u518c\u547d\u540d\u7a7a\u95f4\u662f\u76f8\u540c\u7684\u3002"))))))),(0,o.kt)("h3",{id:"helm-\u8d44\u6e90helmcharthelmrelease"},"Helm \u8d44\u6e90\uff08HelmChart\u3001HelmRelease\uff09"),(0,o.kt)("p",null,"\u5728\u90e8\u7f72 ProjectHelmChart \u65f6\uff0cPrometheus Federator \u5c06\u81ea\u52a8\u521b\u5efa\u548c\u7ba1\u7406\u4e24\u4e2a\u5b50\u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u5b83\u4eec\u4f9d\u6b21\u7ba1\u7406\u4ee5\u4e0b\u5e95\u5c42 Helm \u8d44\u6e90\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HelmChart CR\uff08\u901a\u8fc7 Operator \u4e2d\u7684\u5d4c\u5165\u5f0f ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/helm-controller"},"k3s-io\u200b\u200b/helm-contoller")," \u7ba1\u7406\uff09\uff1a\u6b64\u81ea\u5b9a\u4e49\u8d44\u6e90\u4f1a\u6839\u636e\u5e94\u7528\u5230 HelmChart CR \u7684\u53d8\u66f4\uff0c\u5728\u89e6\u53d1 ",(0,o.kt)("inlineCode",{parentName:"li"},"helm install"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"helm upgrade")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"helm uninstall")," \u7684\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u4e2d\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a Job\u3002\u6b64 CR \u4f1a\u6839\u636e ProjectHelmChart \u7684\u66f4\u6539\uff08\u4f8b\u5982\uff0c\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"li"},"values.yaml"),"\uff09\u6216\u5e95\u5c42\u9879\u76ee\u5b9a\u4e49\u7684\u66f4\u6539\uff08\u4f8b\u5982\uff0c\u4ece\u9879\u76ee\u4e2d\u6dfb\u52a0\u6216\u5220\u9664\u547d\u540d\u7a7a\u95f4\uff09\u81ea\u52a8\u66f4\u65b0\u3002")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c ProjectHelmChart \u6ca1\u6709\u90e8\u7f72\u6216\u66f4\u65b0\u5e95\u5c42\u9879\u76ee\u76d1\u63a7\u5806\u6808\uff0c\u4f60\u53ef\u4ee5\u5148\u4f7f\u7528\u6b64\u8d44\u6e90\u5728 Operator / System \u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u7684 Job \u6765\u68c0\u67e5 Helm \u64cd\u4f5c\u662f\u5426\u6709\u95ee\u9898\u3002\u901a\u5e38\u53ea\u80fd\u7531",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u7ba1\u7406\u5458\u8bbf\u95ee"),"\u3002"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HelmRelease CR\uff08\u901a\u8fc7 Operator \u4e2d\u7684\u5d4c\u5165\u5f0f ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/helm-locker"},"rancher/helm-locker")," \u7ba1\u7406\uff09\uff1a\u6b64\u81ea\u5b9a\u4e49\u8d44\u6e90\u4f1a\u81ea\u52a8\u9501\u5b9a\u5df2\u90e8\u7f72\u7684 Helm \u7248\u672c\u5e76\u81ea\u52a8\u8986\u76d6\u5bf9\u5e95\u5c42\u8d44\u6e90\u7684\u66f4\u65b0\uff0c\u9664\u975e\u66f4\u6539\u662f Helm \u64cd\u4f5c\u5bfc\u81f4\u7684\uff08",(0,o.kt)("inlineCode",{parentName:"li"},"helm install"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"helm upgrade")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"helm uninstall")," \u7531 HelmChart CR \u6267\u884c\uff09\u3002")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"HelmRelease CR \u4f1a\u53d1\u51fa Kubernetes \u4e8b\u4ef6\uff0c\u7528\u4e8e\u68c0\u6d4b\u5e95\u5c42 Helm \u7248\u672c\u4fee\u6539\u5e76\u5c06\u5176\u9501\u5b9a\u56de\u539f\u4f4d\u3002\u8981\u67e5\u770b\u8fd9\u4e9b\u4e8b\u4ef6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl describe helmrelease <helm-release-name> -n <operator/system-namespace>"),"\u3002\u4f60\u8fd8\u53ef\u4ee5\u67e5\u770b\u6b64 Operator \u7684\u65e5\u5fd7\uff0c\u4e86\u89e3\u68c0\u6d4b\u5230\u66f4\u6539\u7684\u65f6\u95f4\u4ee5\u53ca\u54ea\u4e9b\u8d44\u6e90\u88ab\u5c1d\u8bd5\u66f4\u6539\u3002"))),(0,o.kt)("p",null,"\u8fd9\u4e24\u79cd\u8d44\u6e90\u90fd\u662f\u4e3a Operator / System \u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6240\u6709 Helm Chart \u521b\u5efa\u7684\uff0c\u7528\u4e8e\u907f\u514d\u4f4e\u6743\u9650\u7528\u6237\u7684\u6743\u9650\u5347\u7ea7\u3002"),(0,o.kt)("h3",{id:"\u9ad8\u7ea7-helm-project-operator-\u914d\u7f6e"},"\u9ad8\u7ea7 Helm Project Operator \u914d\u7f6e"),(0,o.kt)("p",null,"\u6709\u5173\u9ad8\u7ea7\u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/prometheus-federator/blob/main/charts/prometheus-federator/0.0.1/README.md#advanced-helm-project-operator-configuration"},"\u6b64\u9875\u9762"),"\u3002"),(0,o.kt)("h3",{id:"local-\u96c6\u7fa4\u4e0a\u7684-prometheus-federator"},"Local \u96c6\u7fa4\u4e0a\u7684 Prometheus Federator"),(0,o.kt)("p",null,"Prometheus Federator \u662f\u4e00\u4e2a\u8d44\u6e90\u5bc6\u96c6\u578b\u5e94\u7528\u7a0b\u5e8f\u3002\u4f60\u53ef\u4ee5\u5c06\u5176\u5b89\u88c5\u5230 Local \u96c6\u7fa4\uff08",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u63a8\u8350"),"\uff09\u3002"))}d.isMDXComponent=!0}}]);