"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33183],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),c=r,m=h["".concat(d,".").concat(c)]||h[c]||p[c]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75380:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Nodes and Node Pools",weight:2030,aliases:["/rancher/v2.x/en/cluster-admin/nodes/"]},d=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",id:"version-2.5/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",title:"Nodes and Node Pools",description:"After you launch a Kubernetes cluster in Rancher, you can manage individual nodes from the cluster's Node tab. Depending on the option used to provision the cluster, there are different node options available.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools.md",tags:[],version:"2.5",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Nodes and Node Pools",weight:2030,aliases:["/rancher/v2.x/en/cluster-admin/nodes/"]},sidebar:"tutorialSidebar",previous:{title:"Certificate Rotation",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"},next:{title:"Removing Kubernetes Components from Nodes",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"}},u={},p=[{value:"Nodes Hosted by an Infrastructure Provider",id:"nodes-hosted-by-an-infrastructure-provider",level:3},{value:"Nodes Provisioned by Hosted Kubernetes Providers",id:"nodes-provisioned-by-hosted-kubernetes-providers",level:3},{value:"Registered Nodes",id:"registered-nodes",level:3},{value:"Aggressive and Safe Draining Options",id:"aggressive-and-safe-draining-options",level:3},{value:"Grace Period",id:"grace-period",level:3},{value:"Timeout",id:"timeout",level:3},{value:"Drained and Cordoned State",id:"drained-and-cordoned-state",level:3},{value:"Labeling Nodes to be Ignored with kubectl",id:"labeling-nodes-to-be-ignored-with-kubectl",level:3}],h={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After you launch a Kubernetes cluster in Rancher, you can manage individual nodes from the cluster's ",(0,o.kt)("strong",{parentName:"p"},"Node")," tab. Depending on the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"option used")," to provision the cluster, there are different node options available."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you want to manage the ",(0,o.kt)("em",{parentName:"p"},"cluster")," and not individual nodes, see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/cluster-configuration"},"Editing Clusters"),".")),(0,o.kt)("h1",{id:"node-options-available-for-each-cluster-creation-option"},"Node Options Available for Each Cluster Creation Option"),(0,o.kt)("p",null,"The following table lists which node options are available for each type of cluster in Rancher. Click the links in the ",(0,o.kt)("strong",{parentName:"p"},"Option")," column for more detailed information about each feature."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/zh/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"Nodes Hosted by an Infrastructure Provider")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/zh/v2.5/pages-for-subheaders/use-existing-nodes"},"Custom Node")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/zh/v2.5/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"Hosted Cluster")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"Registered EKS Nodes")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"All Other Registered Nodes")),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#cordoning-a-node"},"Cordon")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"Marks the node as unschedulable.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#draining-a-node"},"Drain")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"Marks the node as unschedulable ",(0,o.kt)("em",{parentName:"td"},"and")," evicts all pods.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#managing-and-editing-individual-nodes"},"Edit")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"Enter a custom name, description, label, or taints for a node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#viewing-a-node-in-the-rancher-api"},"View API")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"View API data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#deleting-a-node"},"Delete")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"*"),(0,o.kt)("td",{parentName:"tr",align:null},"*"),(0,o.kt)("td",{parentName:"tr",align:null},"Deletes defective nodes from the cluster.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#ssh-into-a-node-hosted-by-an-infrastructure-provider"},"Download Keys")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Download SSH key in order to SSH into the node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#scaling-nodes"},"Node Scaling")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Scale the number of nodes in the node pool up or down.")))),(0,o.kt)("p",null,"*"," Delete option accessible via View API"),(0,o.kt)("h3",{id:"nodes-hosted-by-an-infrastructure-provider"},"Nodes Hosted by an Infrastructure Provider"),(0,o.kt)("p",null,"Node pools are available when you provision Rancher-launched Kubernetes clusters on nodes that are ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"hosted in an infrastructure provider.")),(0,o.kt)("p",null,"Clusters provisioned using ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-pools"},"one of the node pool options")," can be scaled up or down if the node pool is edited."),(0,o.kt)("p",null,"A node pool can also automatically maintain the node scale that's set during the initial cluster provisioning if ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider#about-node-auto-replace"},"node auto-replace is enabled.")," This scale determines the number of active nodes that Rancher maintains for the cluster."),(0,o.kt)("p",null,"Rancher uses ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node templates")," to replace nodes in the node pool. Each node template uses cloud provider credentials to allow Rancher to set up the node in the infrastructure provider."),(0,o.kt)("h3",{id:"nodes-provisioned-by-hosted-kubernetes-providers"},"Nodes Provisioned by Hosted Kubernetes Providers"),(0,o.kt)("p",null,"Options for managing nodes ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"hosted by a Kubernetes provider")," are somewhat limited in Rancher. Rather than using the Rancher UI to make edits such as scaling the number of nodes up or down, edit the cluster directly."),(0,o.kt)("h3",{id:"registered-nodes"},"Registered Nodes"),(0,o.kt)("p",null,"Although you can deploy workloads to a ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"registered cluster")," using Rancher, you cannot manage individual cluster nodes. All management of imported cluster nodes must take place outside of Rancher."),(0,o.kt)("h1",{id:"managing-and-editing-individual-nodes"},"Managing and Editing Individual Nodes"),(0,o.kt)("p",null,"Editing a node lets you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change its name"),(0,o.kt)("li",{parentName:"ul"},"Change its description"),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")),(0,o.kt)("li",{parentName:"ul"},"Add/Remove ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints"))),(0,o.kt)("p",null,"To manage individual nodes, browse to the cluster that you want to manage and then select ",(0,o.kt)("strong",{parentName:"p"},"Nodes")," from the main menu. You can open the options menu for a node by clicking its ",(0,o.kt)("strong",{parentName:"p"},"\u22ee")," icon (",(0,o.kt)("strong",{parentName:"p"},"..."),")."),(0,o.kt)("h1",{id:"viewing-a-node-in-the-rancher-api"},"Viewing a Node in the Rancher API"),(0,o.kt)("p",null,"Select this option to view the node's ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/about-the-api"},"API endpoints"),"."),(0,o.kt)("h1",{id:"deleting-a-node"},"Deleting a Node"),(0,o.kt)("p",null,"Use ",(0,o.kt)("strong",{parentName:"p"},"Delete")," to remove defective nodes from the cloud provider."),(0,o.kt)("p",null,"When you the delete a defective node, Rancher can automatically replace it with an identically provisioned node if the node is in a node pool and ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider#about-node-auto-replace"},"node auto-replace is enabled.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," If your cluster is hosted by an infrastructure provider, and you want to scale your cluster down instead of deleting a defective node, ",(0,o.kt)("a",{parentName:"p",href:"#scaling-nodes"},"scale down")," rather than delete.")),(0,o.kt)("h1",{id:"scaling-nodes"},"Scaling Nodes"),(0,o.kt)("p",null,"For nodes hosted by an infrastructure provider, you can scale the number of nodes in each ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-pools"},"node pool")," by using the scale controls. This option isn't available for other cluster types."),(0,o.kt)("h1",{id:"ssh-into-a-node-hosted-by-an-infrastructure-provider"},"SSH into a Node Hosted by an Infrastructure Provider"),(0,o.kt)("p",null,"For ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"nodes hosted by an infrastructure provider"),", you have the option of downloading its SSH key so that you can connect to it remotely from your desktop."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the cluster hosted by an infrastructure provider, select ",(0,o.kt)("strong",{parentName:"p"},"Nodes")," from the main menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the node that you want to remote into. Select ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"," > Download Keys"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step Result:")," A ZIP file containing files used for SSH is downloaded.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extract the ZIP file to any location.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Terminal. Change your location to the extracted ZIP file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"ssh -i id_rsa root@<IP_OF_HOST>\n")))),(0,o.kt)("h1",{id:"cordoning-a-node"},"Cordoning a Node"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Cordoning")," a node marks it as unschedulable. This feature is useful for performing short tasks on the node during small maintenance windows, like reboots, upgrades, or decommissions.  When you're done, power back on and make the node schedulable again by uncordoning it."),(0,o.kt)("h1",{id:"draining-a-node"},"Draining a Node"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Draining")," is the process of first cordoning the node, and then evicting all its pods. This feature is useful for performing node maintenance (like kernel upgrades or hardware maintenance). It prevents new pods from deploying to the node while redistributing existing pods so that users don't experience service interruption."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For pods with a replica set, the pod is replaced by a new pod that will be scheduled to a new node. Additionally, if the pod is part of a service, then clients will automatically be redirected to the new pod.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For pods with no replica set, you need to bring up a new copy of the pod, and assuming it is not part of a service, redirect clients to it."))),(0,o.kt)("p",null,"You can drain nodes that are in either a ",(0,o.kt)("inlineCode",{parentName:"p"},"cordoned")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," state. When you drain a node, the node is cordoned, the nodes are evaluated for conditions they must meet to be drained, and then (if it meets the conditions) the node evicts its pods."),(0,o.kt)("p",null,"However, you can override the conditions draining when you initiate the drain. You're also given an opportunity to set a grace period and timeout value."),(0,o.kt)("h3",{id:"aggressive-and-safe-draining-options"},"Aggressive and Safe Draining Options"),(0,o.kt)("p",null,"There are two drain modes: aggressive and safe."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Aggressive Mode")),(0,o.kt)("p",{parentName:"li"},"  In this mode, pods won't get rescheduled to a new node, even if they do not have a controller. Kubernetes expects you to have your own logic that handles the deletion of these pods."),(0,o.kt)("p",{parentName:"li"},"  Kubernetes also expects the implementation to decide what to do with pods using emptyDir. If a pod uses emptyDir to store local data, you might not be able to safely delete it, since the data in the emptyDir will be deleted once the pod is removed from the node. Choosing aggressive mode will delete these pods.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Safe Mode")),(0,o.kt)("p",{parentName:"li"},"  If a node has standalone pods or ephemeral data it will be cordoned but not drained."))),(0,o.kt)("h3",{id:"grace-period"},"Grace Period"),(0,o.kt)("p",null,"The timeout given to each pod for cleaning things up, so they will have chance to exit gracefully. For example, when pods might need to finish any outstanding requests, roll back transactions or save state to some external storage. If negative, the default value specified in the pod will be used."),(0,o.kt)("h3",{id:"timeout"},"Timeout"),(0,o.kt)("p",null,"The amount of time drain should continue to wait before giving up."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Kubernetes Known Issue:")," The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/pull/64378"},"timeout setting")," was not enforced while draining a node before Kubernetes 1.12.")),(0,o.kt)("h3",{id:"drained-and-cordoned-state"},"Drained and Cordoned State"),(0,o.kt)("p",null,"If there's any error related to user input, the node enters a ",(0,o.kt)("inlineCode",{parentName:"p"},"cordoned")," state because the drain failed. You can either correct the input and attempt to drain the node again, or you can abort by uncordoning the node."),(0,o.kt)("p",null,"If the drain continues without error, the node enters a ",(0,o.kt)("inlineCode",{parentName:"p"},"draining")," state. You'll have the option to stop the drain when the node is in this state, which will stop the drain process and change the node's state to ",(0,o.kt)("inlineCode",{parentName:"p"},"cordoned"),"."),(0,o.kt)("p",null,"Once drain successfully completes, the node will be in a state of ",(0,o.kt)("inlineCode",{parentName:"p"},"drained"),". You can then power off or delete the node."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Want to know more about cordon and drain?")," See the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/cluster-management/#maintenance-on-a-node"},"Kubernetes documentation"),".")),(0,o.kt)("h1",{id:"labeling-a-node-to-be-ignored-by-rancher"},"Labeling a Node to be Ignored by Rancher"),(0,o.kt)("p",null,"Some solutions, such as F5's BIG-IP integration, may require creating a node that is never registered to a cluster."),(0,o.kt)("p",null,"Since the node will never finish registering, it will always be shown as unhealthy in the Rancher UI."),(0,o.kt)("p",null,"In that case, you may want to label the node to be ignored by Rancher so that Rancher only shows nodes as unhealthy when they are actually failing."),(0,o.kt)("p",null,"You can label nodes to be ignored by using a setting in the Rancher UI, or by using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," There is an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/24172"},"open issue")," in which nodes labeled to be ignored can get stuck in an updating state.")),(0,o.kt)("h3",{id:"labeling-nodes-to-be-ignored-with-kubectl"},"Labeling Nodes to be Ignored with kubectl"),(0,o.kt)("p",null,"To add a node that will be ignored by Rancher, use ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," to create a node that has the following label:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cattle.rancher.io/node-status: ignore\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," If you add the node to a cluster, Rancher will not attempt to sync with this node. The node can still be part of the cluster and can be listed with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,o.kt)("p",null,"If the label is added before the node is added to the cluster, the node will not be shown in the Rancher UI."),(0,o.kt)("p",null,"If the label is added after the node is added to a Rancher cluster, the node will not be removed from the UI."),(0,o.kt)("p",null,"If you delete the node from the Rancher server using the Rancher UI or API, the node will not be removed from the cluster if the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeName")," is listed in the Rancher settings in the Rancher API under ",(0,o.kt)("inlineCode",{parentName:"p"},"v3/settings/ignore-node-name"),"."))}c.isMDXComponent=!0}}]);