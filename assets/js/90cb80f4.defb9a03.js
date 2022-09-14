"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81500],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72631:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Manual Quick Start",weight:300},s=void 0,u={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",id:"version-2.0-2.4/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",title:"Manual Quick Start",description:"Howdy Partner! This tutorial walks you through:",source:"@site/versioned_docs/version-2.0-2.4/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",permalink:"/v2.0-v2.4/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Manual Quick Start",weight:300},sidebar:"tutorialSidebar",previous:{title:"Vagrant Quick Start",permalink:"/v2.0-v2.4/getting-started/quick-start-guides/deploy-rancher-manager/vagrant"},next:{title:"Deploying Workloads",permalink:"/v2.0-v2.4/pages-for-subheaders/deploy-rancher-workloads"}},p={},c=[{value:"Quick Start Outline",id:"quick-start-outline",level:2},{value:"2. Install Rancher",id:"2-install-rancher",level:3},{value:"3. Log In",id:"3-log-in",level:3},{value:"4. Create the Cluster",id:"4-create-the-cluster",level:3},{value:"Finished",id:"finished",level:4},{value:"What&#39;s Next?",id:"whats-next",level:4}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Howdy Partner! This tutorial walks you through:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installation of Rancher 2.x"),(0,o.kt)("li",{parentName:"ul"},"Creation of your first cluster"),(0,o.kt)("li",{parentName:"ul"},"Deployment of an application, Nginx")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-and-upgrade"},"Installation"),".")),(0,o.kt)("h2",{id:"quick-start-outline"},"Quick Start Outline"),(0,o.kt)("p",null,"This Quick Start Guide is divided into different tasks for easier consumption."),(0,o.kt)("br",null),"### 1. Provision a Linux Host",(0,o.kt)("p",null," Begin creation of a custom cluster by provisioning a Linux host. Your host can be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A cloud-host virtual machine (VM)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An on-prem VM")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A bare-metal server"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:"),"\nWhen using a cloud-hosted virtual machine you need to allow inbound TCP communication to ports 80 and 443.  Please see your cloud-host's documentation for information regarding port configuration."),(0,o.kt)("p",{parentName:"blockquote"},"For a full list of port requirements, refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"Docker Installation"),".")),(0,o.kt)("p",{parentName:"li"},"Provision the host according to our ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"Requirements"),"."))),(0,o.kt)("h3",{id:"2-install-rancher"},"2. Install Rancher"),(0,o.kt)("p",null,"To install Rancher on your host, connect to it and then use a shell to install."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log in to your Linux host using your preferred shell, such as PuTTy or a remote Terminal connection.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From your shell, enter the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Rancher is installed."),(0,o.kt)("h3",{id:"3-log-in"},"3. Log In"),(0,o.kt)("p",null,"Log in to Rancher to begin using the application. After you log in, you'll make some one-time configurations."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a web browser and enter the IP address of your host: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<SERVER_IP>"),"."),(0,o.kt)("p",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<SERVER_IP>")," with your host IP address.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When prompted, create a password for the default ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," account there cowpoke!")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("strong",{parentName:"p"},"Rancher Server URL"),". The URL can either be an IP address or a host name. However, each node added to your cluster must be able to connect to this URL.",(0,o.kt)("br",null),(0,o.kt)("br",null),"If you use a hostname in the URL, this hostname must be resolvable by DNS on the nodes you want to add to you cluster."))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"4-create-the-cluster"},"4. Create the Cluster"),(0,o.kt)("p",null,"Welcome to Rancher! You are now able to create your first Kubernetes cluster."),(0,o.kt)("p",null,"In this task, you can use the versatile ",(0,o.kt)("strong",{parentName:"p"},"Custom")," option. This option lets you add ",(0,o.kt)("em",{parentName:"p"},"any")," Linux host (cloud-hosted VM, on-prem VM, or bare-metal) to be used in a cluster."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Add Cluster"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose ",(0,o.kt)("strong",{parentName:"p"},"Custom"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Cluster Name"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Skip ",(0,o.kt)("strong",{parentName:"p"},"Member Roles")," and ",(0,o.kt)("strong",{parentName:"p"},"Cluster Options"),". We'll tell you about them later.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From ",(0,o.kt)("strong",{parentName:"p"},"Node Role"),", select ",(0,o.kt)("em",{parentName:"p"},"all")," the roles: ",(0,o.kt)("strong",{parentName:"p"},"etcd"),", ",(0,o.kt)("strong",{parentName:"p"},"Control"),", and ",(0,o.kt)("strong",{parentName:"p"},"Worker"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Optional"),": Rancher auto-detects the IP addresses used for Rancher communication and cluster communication. You can override these using ",(0,o.kt)("inlineCode",{parentName:"p"},"Public Address")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Internal Address")," in the ",(0,o.kt)("strong",{parentName:"p"},"Node Address")," section.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Skip the ",(0,o.kt)("strong",{parentName:"p"},"Labels")," stuff. It's not important for now.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the command displayed on screen to your clipboard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log in to your Linux host using your preferred shell, such as PuTTy or a remote Terminal connection. Run the command copied to your clipboard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When you finish running the command on your Linux host, click ",(0,o.kt)("strong",{parentName:"p"},"Done"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")),(0,o.kt)("p",null,"Your cluster is created and assigned a state of ",(0,o.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,o.kt)("p",null,"You can access your cluster after its state is updated to ",(0,o.kt)("strong",{parentName:"p"},"Active.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,o.kt)("h4",{id:"finished"},"Finished"),(0,o.kt)("p",null,"Congratulations! You have created your first cluster."),(0,o.kt)("h4",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"Use Rancher to create a deployment. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/deploy-rancher-workloads"},"Creating Deployments"),"."))}d.isMDXComponent=!0}}]);