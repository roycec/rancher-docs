"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[49872],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),k=n,m=c["".concat(s,".").concat(k)]||c[k]||u[k]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},94669:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Workload with Ingress Quick Start",weight:100,aliases:["/rancher/v2.x/en/quick-start-guide/workload/quickstart-deploy-workload-ingress/"]},s=void 0,p={unversionedId:"getting-started/quick-start-guides/deploy-workloads/workload-ingress",id:"version-2.5/getting-started/quick-start-guides/deploy-workloads/workload-ingress",title:"Workload with Ingress Quick Start",description:"Prerequisite",source:"@site/versioned_docs/version-2.5/getting-started/quick-start-guides/deploy-workloads/workload-ingress.md",sourceDirName:"getting-started/quick-start-guides/deploy-workloads",slug:"/getting-started/quick-start-guides/deploy-workloads/workload-ingress",permalink:"/zh/v2.5/getting-started/quick-start-guides/deploy-workloads/workload-ingress",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/quick-start-guides/deploy-workloads/workload-ingress.md",tags:[],version:"2.5",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Workload with Ingress Quick Start",weight:100,aliases:["/rancher/v2.x/en/quick-start-guide/workload/quickstart-deploy-workload-ingress/"]},sidebar:"tutorialSidebar",previous:{title:"Deploying Workloads",permalink:"/zh/v2.5/pages-for-subheaders/deploy-rancher-workloads"},next:{title:"Workload with NodePort Quick Start",permalink:"/zh/v2.5/getting-started/quick-start-guides/deploy-workloads/nodeports"}},d={},u=[{value:"Prerequisite",id:"prerequisite",level:3},{value:"1. Deploying a Workload",id:"1-deploying-a-workload",level:3},{value:"View Your Application",id:"view-your-application",level:3},{value:"Finished",id:"finished",level:4},{value:"What&#39;s Next?",id:"whats-next",level:4}],c={toc:u};function k(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"You have a running cluster with at least 1 node."),(0,o.kt)("h3",{id:"1-deploying-a-workload"},"1. Deploying a Workload"),(0,o.kt)("p",null,"You're ready to create your first Kubernetes ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/"},"workload"),". A workload is an object that includes pods along with other files and info needed to deploy your application."),(0,o.kt)("p",null,"For this workload, you'll be deploying the application Rancher Hello-World."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, open the cluster that you just created.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the main menu of the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard"),", select ",(0,o.kt)("strong",{parentName:"p"},"Projects/Namespaces"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"Project: Default")," project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Resources > Workloads."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Deploy"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step Result:")," The ",(0,o.kt)("strong",{parentName:"p"},"Deploy Workload")," page opens.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for your workload.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Docker Image")," field, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/hello-world"),". This field is case-sensitive.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Leave the remaining options on their default setting. We'll tell you about them later.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Launch"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your workload is deployed. This process might take a few minutes to complete."),(0,o.kt)("li",{parentName:"ul"},"When your workload completes deployment, it's assigned a state of ",(0,o.kt)("strong",{parentName:"li"},"Active"),". You can view this status from the project's ",(0,o.kt)("strong",{parentName:"li"},"Workloads")," page.")),(0,o.kt)("br",null),"### 2. Expose The Application Via An Ingress",(0,o.kt)("p",null,"Now that the application is up and running it needs to be exposed so that other services can connect."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, open the cluster that you just created.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the main menu of the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard"),", select ",(0,o.kt)("strong",{parentName:"p"},"Projects"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"Default")," project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Resources > Workloads > Load Balancing.")," Click on the ",(0,o.kt)("strong",{parentName:"p"},"Load Balancing")," tab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Add Ingress"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a name i.e. ",(0,o.kt)("strong",{parentName:"p"},"hello"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Target")," field, drop down the list and choose the name that you set for your service.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"80")," in the ",(0,o.kt)("strong",{parentName:"p"},"Port")," field.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Leave everything else as default and click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:"),"  The application is assigned a ",(0,o.kt)("inlineCode",{parentName:"p"},"sslip.io")," address and exposed. It may take a minute or two to populate."),(0,o.kt)("h3",{id:"view-your-application"},"View Your Application"),(0,o.kt)("p",null,"From the ",(0,o.kt)("strong",{parentName:"p"},"Load Balancing")," page, click the target link, which will look something like ",(0,o.kt)("inlineCode",{parentName:"p"},"hello.default.xxx.xxx.xxx.xxx.sslip.io > hello-world"),"."),(0,o.kt)("p",null,"Your application will open in a separate window."),(0,o.kt)("h4",{id:"finished"},"Finished"),(0,o.kt)("p",null,"Congratulations! You have successfully deployed a workload exposed via an ingress."),(0,o.kt)("h4",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"When you're done using your sandbox, destroy the Rancher Server and your cluster. See one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.5/getting-started/quick-start-guides/deploy-rancher-manager/aws#destroying-the-environment"},"Amazon AWS: Destroying the Environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.5/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean#destroying-the-environment"},"DigitalOcean: Destroying the Environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.5/getting-started/quick-start-guides/deploy-rancher-manager/vagrant#destroying-the-environment"},"Vagrant: Destroying the Environment"))))}k.isMDXComponent=!0}}]);