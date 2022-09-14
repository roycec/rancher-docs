"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30225],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),s=n(67392),l=n(7094),c=n(12466),h="tabList__CuJ",p="tabItem_LNqP";function u(e){var t,n,i=e.lazy,u=e.block,d=e.defaultValue,m=e.values,k=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,C=w.setTabGroupChoices,T=(0,r.useState)(y),x=T[0],P=T[1],R=[],H=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var O=N[k];null!=O&&O!==x&&g.some((function(e){return e.value===O}))&&P(O)}var Z=function(e){var t=e.currentTarget,n=R.indexOf(t),a=g[n].value;a!==x&&(H(t),P(a),null!=k&&C(k,String(a)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=R.indexOf(e.currentTarget)+1;n=null!=(a=R[r])?a:R[0];break;case"ArrowLeft":var o,i=R.indexOf(e.currentTarget)-1;n=null!=(o=R[i])?o:R[R.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},f)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return R.push(e)},onKeyDown:E,onFocus:Z,onClick:Z},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},94783:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(65488),s=n(85162),l=["components"],c={title:"4. Configure Health Checks",weight:400,aliases:["/rancher/v2.x/en/v1.6-migration/monitor-apps/"]},h=void 0,p={unversionedId:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/monitor-apps",id:"version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/monitor-apps",title:"4. Configure Health Checks",description:"Rancher v1.6 provided TCP and HTTP health checks on your nodes and services using its own health check microservice. These health checks monitored your containers to confirm they're operating as intended. If a container failed a health check, Rancher would destroy the unhealthy container and then replicates a healthy one to replace it.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/monitor-apps.md",sourceDirName:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x",slug:"/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/monitor-apps",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/monitor-apps",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/monitor-apps.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"4. Configure Health Checks",weight:400,aliases:["/rancher/v2.x/en/v1.6-migration/monitor-apps/"]},sidebar:"tutorialSidebar",previous:{title:"3. Expose Your Services",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services"},next:{title:"5. Schedule Your Services",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services"}},u={},d=[{value:"Rancher v1.6 Health Checks",id:"rancher-v16-health-checks",level:2},{value:"Rancher v2.x Health Checks",id:"rancher-v2x-health-checks",level:2},{value:"Local Health Checks",id:"local-health-checks",level:3},{value:"Multiple Probe Types",id:"multiple-probe-types",level:3},{value:"Configuring Probes in Rancher v2.x",id:"configuring-probes-in-rancher-v2x",level:2},{value:"Configuring Checks",id:"configuring-checks",level:3},{value:"Configuring Separate Liveness Checks",id:"configuring-separate-liveness-checks",level:3},{value:"Additional Probing Options",id:"additional-probing-options",level:3},{value:"Health Check Parameter Mappings",id:"health-check-parameter-mappings",level:4},{value:"Next: Schedule Your Services",id:"next-schedule-your-services",level:3}],m={toc:d};function k(e){var t=e.components,c=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher v1.6 provided TCP and HTTP health checks on your nodes and services using its own health check microservice. These health checks monitored your containers to confirm they're operating as intended. If a container failed a health check, Rancher would destroy the unhealthy container and then replicates a healthy one to replace it."),(0,o.kt)("p",null,"For Rancher v2.x, we've replaced the health check microservice, leveraging instead Kubernetes' native health check support."),(0,o.kt)("p",null,"Use this document to correct Rancher v2.x workloads and services that list ",(0,o.kt)("inlineCode",{parentName:"p"},"health_check")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"output.txt"),". You can correct them by configuring a liveness probe (i.e., a health check)."),(0,o.kt)("p",null,"For example, for the image below, we would configure liveness probes for the ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"weblb")," workloads (i.e., the Kubernetes manifests output by migration-tools CLI)."),(0,o.kt)("figcaption",null,"Resolve ",(0,o.kt)("code",null,"health_check")," for the ",(0,o.kt)("code",null,"web")," and ",(0,o.kt)("code",null,"webLB")," Workloads"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Resolve health_check",src:n(12427).Z,width:"830",height:"411"})),(0,o.kt)("h2",{id:"rancher-v16-health-checks"},"Rancher v1.6 Health Checks"),(0,o.kt)("p",null,"In Rancher v1.6, you could add health checks to monitor a particular service's operations. These checks were performed by the Rancher health check microservice, which is launched in a container on a node separate from the node hosting the monitored service (however, Rancher v1.6.20 and later also runs a local health check container as a redundancy for the primary health check container on another node). Health check settings were stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-compose.yml")," file for your stack."),(0,o.kt)("p",null,"The health check microservice features two types of health checks, which have a variety of options for timeout, check interval, etc.:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"TCP health checks"),":"),(0,o.kt)("p",{parentName:"li"},"  These health checks check if a TCP connection opens at the specified port for the monitored service. For full details, see the ",(0,o.kt)("a",{parentName:"p",href:"%7B%7B%3Cbaseurl%3E%7D%7D/rancher/v1.6/en/cattle/health-checks/"},"Rancher v1.6 documentation"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"HTTP health checks"),":"),(0,o.kt)("p",{parentName:"li"},"  These health checks monitor HTTP requests to a specified path and check whether the response is expected response (which is configured along with the health check)."))),(0,o.kt)("p",null,"The following diagram displays the health check microservice evaluating a container running Nginx. Notice that the microservice is making its check across nodes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rancher v1.6 Health Checks",src:n(99520).Z,width:"564",height:"397"})),(0,o.kt)("h2",{id:"rancher-v2x-health-checks"},"Rancher v2.x Health Checks"),(0,o.kt)("p",null,"In Rancher v2.x, the health check microservice is replaced with Kubernetes's native health check mechanisms, called ",(0,o.kt)("em",{parentName:"p"},"probes"),". These probes, similar to the Rancher v1.6 health check microservice, monitor the health of pods over TCP and HTTP."),(0,o.kt)("p",null,"However, probes in Rancher v2.x have some important differences, which are described below. For full details about probes, see the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/#configure-probes"},"Kubernetes documentation"),"."),(0,o.kt)("h3",{id:"local-health-checks"},"Local Health Checks"),(0,o.kt)("p",null,"Unlike the Rancher v1.6 health checks performed across hosts, probes in Rancher v2.x occur on ",(0,o.kt)("em",{parentName:"p"},"same")," host, performed by the kubelet."),(0,o.kt)("h3",{id:"multiple-probe-types"},"Multiple Probe Types"),(0,o.kt)("p",null,"Kubernetes includes two different ",(0,o.kt)("em",{parentName:"p"},"types")," of probes: liveness checks and readiness checks."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Liveness Check"),":"),(0,o.kt)("p",{parentName:"li"},"  Checks if the monitored container is running. If the probe reports failure, Kubernetes kills the pod, and then restarts it according to the deployment ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy"},"restart policy"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Readiness Check"),":"),(0,o.kt)("p",{parentName:"li"},"  Checks if the container is ready to accept and serve requests. If the probe reports failure, the pod is sequestered from the public until it self heals."))),(0,o.kt)("p",null,"The following diagram displays kubelets running probes on containers they are monitoring (",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"kubelets"),' are the primary "agent" running on each node). The node on the left is running a liveness probe, while the one of the right is running a readiness check. Notice that the kubelet is scanning containers on its host node rather than across nodes, as in Rancher v1.6.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rancher v2.x Probes",src:n(95816).Z,width:"793",height:"345"})),(0,o.kt)("h2",{id:"configuring-probes-in-rancher-v2x"},"Configuring Probes in Rancher v2.x"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services"},"migration-tool CLI")," cannot parse health checks from Compose files to Kubernetes manifest. Therefore, if want you to add health checks to your Rancher v2.x workloads, you'll have to add them manually."),(0,o.kt)("p",null,"Using the Rancher v2.x UI, you can add TCP or HTTP health checks to Kubernetes workloads. By default, Rancher asks you to configure a readiness check for your workloads and applies a liveness check using the same configuration. Optionally, you can define a separate liveness check."),(0,o.kt)("p",null,"If the probe fails, the container is restarted per the restartPolicy defined in the workload specs. This setting is equivalent to the strategy parameter for health checks in Rancher v1.6."),(0,o.kt)("p",null,"Configure probes by using the ",(0,o.kt)("strong",{parentName:"p"},"Health Check")," section while editing deployments called out in ",(0,o.kt)("inlineCode",{parentName:"p"},"output.txt"),"."),(0,o.kt)("figcaption",null,"Edit Deployment: Health Check Section"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Health Check Section",src:n(56178).Z,width:"1478",height:"623"})),(0,o.kt)("h3",{id:"configuring-checks"},"Configuring Checks"),(0,o.kt)("p",null,"While you create a workload using Rancher v2.x, we recommend configuring a check that monitors the health of the deployment's pods."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"TCP Check",mdxType:"TabItem"},(0,o.kt)("p",null,"TCP checks monitor your deployment's health by attempting to open a connection to the pod over a specified port. If the probe can open the port, it's considered healthy. Failure to open it is considered unhealthy, which notifies Kubernetes that it should kill the pod and then replace it according to its ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy"},"restart policy"),". (this applies to Liveness probes, for Readiness probes, it will mark the pod as Unready)."),(0,o.kt)("p",null,"You can configure the probe along with values for specifying its behavior by selecting the ",(0,o.kt)("strong",{parentName:"p"},"TCP connection opens successfully")," option in the ",(0,o.kt)("strong",{parentName:"p"},"Health Check")," section. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"Deploying Workloads"),". For help setting probe timeout and threshold values, see ",(0,o.kt)("a",{parentName:"p",href:"#health-check-parameter-mappings"},"Health Check Parameter Mappings"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TCP Check",src:n(89346).Z,width:"633",height:"284"})),(0,o.kt)("p",null,"When you configure a readiness check using Rancher v2.x, the ",(0,o.kt)("inlineCode",{parentName:"p"},"readinessProbe")," directive and the values you've set are added to the deployment's Kubernetes manifest. Configuring a readiness check also automatically adds a liveness check (",(0,o.kt)("inlineCode",{parentName:"p"},"livenessProbe"),") to the deployment.")),(0,o.kt)(s.Z,{value:"HTTP Check",mdxType:"TabItem"},(0,o.kt)("p",null,"HTTP checks monitor your deployment's health by sending an HTTP GET request to a specific URL path that you define. If the pod responds with a message range of ",(0,o.kt)("inlineCode",{parentName:"p"},"200"),"-",(0,o.kt)("inlineCode",{parentName:"p"},"400"),", the health check is considered successful. If the pod replies with any other value, the check is considered unsuccessful, so Kubernetes kills and replaces the pod according to its ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy"},"restart policy"),". (this applies to Liveness probes, for Readiness probes, it will mark the pod as Unready)."),(0,o.kt)("p",null,"You can configure the probe along with values for specifying its behavior by selecting the ",(0,o.kt)("strong",{parentName:"p"},"HTTP returns successful status")," or ",(0,o.kt)("strong",{parentName:"p"},"HTTPS returns successful status"),". For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"Deploying Workloads"),".  For help setting probe timeout and threshold values, see ",(0,o.kt)("a",{parentName:"p",href:"#healthcheck-parameter-mappings"},"Health Check Parameter Mappings"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"HTTP Check",src:n(30381).Z,width:"1255",height:"426"})),(0,o.kt)("p",null,"When you configure a readiness check using Rancher v2.x, the ",(0,o.kt)("inlineCode",{parentName:"p"},"readinessProbe")," directive and the values you've set are added to the deployment's Kubernetes manifest. Configuring a readiness check also automatically adds a liveness check (",(0,o.kt)("inlineCode",{parentName:"p"},"livenessProbe"),") to the deployment."))),(0,o.kt)("h3",{id:"configuring-separate-liveness-checks"},"Configuring Separate Liveness Checks"),(0,o.kt)("p",null,"While configuring a readiness check for either the TCP or HTTP protocol, you can configure a separate liveness check by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Define a separate liveness check"),". For help setting probe timeout and threshold values, see ",(0,o.kt)("a",{parentName:"p",href:"#health-check-parameter-mappings"},"Health Check Parameter Mappings"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Separate Liveness Check",src:n(14564).Z,width:"1255",height:"426"})),(0,o.kt)("h3",{id:"additional-probing-options"},"Additional Probing Options"),(0,o.kt)("p",null,"Rancher v2.x, like v1.6, lets you perform health checks using the TCP and HTTP protocols. However, Rancher v2.x also lets you check the health of a pod by running a command inside of it. If the container exits with a code of ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," after running the command, the pod is considered healthy."),(0,o.kt)("p",null,"You can configure a liveness or readiness check that executes a command that you specify by selecting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Command run inside the container exits with status 0")," option from ",(0,o.kt)("strong",{parentName:"p"},"Health Checks")," while ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"deploying a workload"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Healthcheck Execute Command",src:n(43898).Z,width:"604",height:"411"})),(0,o.kt)("h4",{id:"health-check-parameter-mappings"},"Health Check Parameter Mappings"),(0,o.kt)("p",null,"While configuring readiness checks and liveness checks, Rancher prompts you to fill in various timeout and threshold values that determine whether the probe is a success or failure. The reference table below shows you the equivalent health check values from Rancher v1.6."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Rancher v1.6 Compose Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Rancher v2.x Kubernetes Parameter"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"port")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tcpSocket.port"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"response_timeout")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"timeoutSeconds"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"healthy_threshold")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"failureThreshold"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"unhealthy_threshold")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"successThreshold"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"interval")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"periodSeconds"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"initializing_timeout")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"initialDelaySeconds"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"strategy")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"restartPolicy"))))),(0,o.kt)("h3",{id:"next-schedule-your-services"},(0,o.kt)("a",{parentName:"h3",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services"},"Next: Schedule Your Services")))}k.isMDXComponent=!0},56178:function(e,t,n){t.Z=n.p+"assets/images/health-check-section-7f7f4473a522628279cd12f2fa7254ec.png"},43898:function(e,t,n){t.Z=n.p+"assets/images/healthcheck-cmd-exec-9927880614ab0a56a7d5e91a7fdf6484.png"},99520:function(e,t,n){t.Z=n.p+"assets/images/healthcheck-a555ba466fcfe7e1f97e242cce8de697.svg"},95816:function(e,t,n){t.Z=n.p+"assets/images/probes-186217cbbc527fd2465db5bff277ccfe.svg"},30381:function(e,t,n){t.Z=n.p+"assets/images/readiness-check-http-66808007689016588ae4535e4cdb7418.png"},89346:function(e,t,n){t.Z=n.p+"assets/images/readiness-check-tcp-421053a3ba295fc962c166b02af1f457.png"},12427:function(e,t,n){t.Z=n.p+"assets/images/resolve-health-checks-fbd07791fe16bdacb3dcf85e6d51d2f6.png"},14564:function(e,t,n){t.Z=n.p+"assets/images/separate-check-9fa7c0dee83a8f9bfc4a8a1ba1709ece.png"}}]);