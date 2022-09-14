"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97457],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(a),d=n,m=h["".concat(i,".").concat(d)]||h[d]||c[d]||l;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<l;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(67294),n=a(86010),l="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(87462),n=a(67294),l=a(86010),s=a(72389),o=a(67392),i=a(7094),u=a(12466),p="tabList__CuJ",c="tabItem_LNqP";function h(e){var t,a,s=e.lazy,h=e.block,d=e.defaultValue,m=e.values,g=e.groupId,k=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.U)(),R=y.tabGroupChoices,w=y.setTabGroupChoices,O=(0,n.useState)(N),C=O[0],T=O[1],E=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var A=R[g];null!=A&&A!==C&&v.some((function(e){return e.value===A}))&&T(A)}var U=function(e){var t=e.currentTarget,a=E.indexOf(t),r=v[a].value;r!==C&&(I(t),T(r),null!=g&&w(g,String(r)))},H=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=E.indexOf(e.currentTarget)+1;a=null!=(r=E[n])?r:E[0];break;case"ArrowLeft":var l,s=E.indexOf(e.currentTarget)-1;a=null!=(l=E[s])?l:E[E.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":h},k)},v.map((function(e){var t=e.value,a=e.label,s=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:H,onFocus:U,onClick:U},s,{className:(0,l.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,s.Z)();return n.createElement(h,(0,r.Z)({key:String(t)},e))}},87751:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),s=a(65488),o=a(85162),i=["components"],u={title:"Upgrading Rancher Installed on Kubernetes with Helm 2",weight:1050,aliases:["/rancher/v2.0-v2.4/en/upgrades/upgrades/ha/helm2","/rancher/v2.0-v2.4/en/upgrades/helm2","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/upgrades/ha/helm2","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/upgrades/ha/helm2","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/upgrades/helm2","/rancher/v2.x/en/installation/install-rancher-on-k8s/upgrades/helm2/"]},p=void 0,c={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2",id:"version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2",title:"Upgrading Rancher Installed on Kubernetes with Helm 2",description:"Helm 3 has been released.  If you are using Helm 2, we recommend migrating to Helm 3 because it is simpler to use and more secure than Helm 2.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Upgrading Rancher Installed on Kubernetes with Helm 2",weight:1050,aliases:["/rancher/v2.0-v2.4/en/upgrades/upgrades/ha/helm2","/rancher/v2.0-v2.4/en/upgrades/helm2","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/upgrades/ha/helm2","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/upgrades/ha/helm2","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/upgrades/helm2","/rancher/v2.x/en/installation/install-rancher-on-k8s/upgrades/helm2/"]},sidebar:"tutorialSidebar",previous:{title:"Upgrading to v2.0.7+ \u2014 Namespace Migration",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration"},next:{title:"Other Installation Methods",permalink:"/v2.0-v2.4/pages-for-subheaders/other-installation-methods"}},h={},d=[{value:"A. Back up Your Kubernetes Cluster that is Running Rancher Server",id:"a-back-up-your-kubernetes-cluster-that-is-running-rancher-server",level:3},{value:"B. Update the Helm chart repository",id:"b-update-the-helm-chart-repository",level:3},{value:"C. Upgrade Rancher",id:"c-upgrade-rancher",level:3},{value:"D. Verify the Upgrade",id:"d-verify-the-upgrade",level:3},{value:"Rolling Back",id:"rolling-back",level:2}],m={toc:d};function g(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Helm 3 has been released.  If you are using Helm 2, we recommend ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"migrating to Helm 3")," because it is simpler to use and more secure than Helm 2."),(0,l.kt)("p",{parentName:"blockquote"},"The ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/upgrades"},"current instructions for Upgrading Rancher Installed on Kubernetes")," use Helm 3."),(0,l.kt)("p",{parentName:"blockquote"},"This section provides a copy of the older instructions for upgrading Rancher with Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.")),(0,l.kt)("p",null,"The following instructions will guide you through using Helm to upgrade a Rancher server that is installed on a Kubernetes cluster."),(0,l.kt)("p",null,"To upgrade the components in your Kubernetes cluster, or the definition of the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/services/"},"Kubernetes services")," or ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/"},"add-ons"),", refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/"},"upgrade documentation for RKE"),", the Rancher Kubernetes Engine."),(0,l.kt)("p",null,"If you installed Rancher using the RKE Add-on yaml, follow the directions to ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"migrate or upgrade"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Notes:")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://community.letsencrypt.org/t/blocking-old-cert-manager-versions/98753"},"Let's Encrypt will be blocking cert-manager instances older than 0.8.0 starting November 1st 2019.")," Upgrade cert-manager to the latest version by following ",(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"these instructions.")),(0,l.kt)("li",{parentName:"ul"},"If you are upgrading Rancher from v2.x to v2.3+, and you are using external TLS termination, you will need to edit the cluster.yml to ",(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#configuring-ingress-for-external-tls-when-using-nginx-v0-25"},"enable using forwarded host headers.")),(0,l.kt)("li",{parentName:"ul"},"The upgrade instructions assume you are using Helm 3. For migration of installs started with Helm 2, refer to the official ",(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"Helm 2 to 3 migration docs.")," This ",(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2"},"section")," provides a copy of the older upgrade instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible."))),(0,l.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Review the ",(0,l.kt)("a",{parentName:"strong",href:"/v2.0-v2.4/pages-for-subheaders/upgrades"},"known upgrade issues"))," in the Rancher documentation for the most noteworthy issues to consider when upgrading Rancher. A more complete list of known issues for each Rancher version can be found in the release notes on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,l.kt)("a",{parentName:"li",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"For ",(0,l.kt)("a",{parentName:"strong",href:"/v2.0-v2.4/pages-for-subheaders/air-gapped-helm-cli-install"},"air gap installs only,")," collect and populate images for the new Rancher server version.")," Follow the guide to ",(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"populate your private registry")," with the images for the Rancher version that you want to upgrade to.")),(0,l.kt)("h1",{id:"upgrade-outline"},"Upgrade Outline"),(0,l.kt)("p",null,"Follow the steps to upgrade Rancher server:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#a-back-up-your-kubernetes-cluster-that-is-running-rancher-server"},"A. Back up your Kubernetes cluster that is running Rancher server")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#b-update-the-helm-chart-repository"},"B. Update the Helm chart repository")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#c-upgrade-rancher"},"C. Upgrade Rancher")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#d-verify-the-upgrade"},"D. Verify the Upgrade"))),(0,l.kt)("h3",{id:"a-back-up-your-kubernetes-cluster-that-is-running-rancher-server"},"A. Back up Your Kubernetes Cluster that is Running Rancher Server"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters#option-b-one-time-snapshots"},"Take a one-time snapshot"),"\nof your Kubernetes cluster running Rancher server. You'll use the snapshot as a restore point if something goes wrong during upgrade."),(0,l.kt)("h3",{id:"b-update-the-helm-chart-repository"},"B. Update the Helm chart repository"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Update your local helm repo cache."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo update\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Get the repository name that you used to install Rancher."),(0,l.kt)("p",{parentName:"li"},"For information about the repos and their differences, see ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#helm-chart-repositories"},"Helm Chart Repositories"),"."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Latest: Recommended for trying out the newest features",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,l.kt)("li",{parentName:"ul"},"Stable: Recommended for production environments",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,l.kt)("li",{parentName:"ul"},"Alpha: Experimental preview of upcoming releases.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n")),"  Note: Upgrades are not supported to, from, or between Alphas.")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo list\n\nNAME                   URL\nstable                 https://charts.helm.sh/stable\nrancher-<CHART_REPO>     https://releases.rancher.com/server-charts/<CHART_REPO>\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," If you want to switch to a different Helm chart repository, please follow the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version#switching-to-a-different-helm-chart-repository"},"steps on how to switch repositories"),". If you switch repositories, make sure to list the repositories again before continuing onto Step 3 to ensure you have the correct one added.")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Fetch the latest chart to install Rancher from the Helm chart repository."),(0,l.kt)("p",{parentName:"li"},"This command will pull down the latest charts and save it in the current directory as a ",(0,l.kt)("inlineCode",{parentName:"p"},".tgz")," file."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-<CHART_REPO>/rancher\n")))),(0,l.kt)("h3",{id:"c-upgrade-rancher"},"C. Upgrade Rancher"),(0,l.kt)("p",null,"This section describes how to upgrade normal (Internet-connected) or air gap installations of Rancher with Helm."),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kubernetes Upgrade",mdxType:"TabItem"},(0,l.kt)("p",null,"Get the values, which were passed with ",(0,l.kt)("inlineCode",{parentName:"p"},"--set"),", from the current Rancher Helm chart that is installed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm get values rancher\n\nhostname: rancher.my.org\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," There will be more values that are listed with this command. This is just an example of one of the values.")),(0,l.kt)("p",null,"If you are also upgrading cert-manager to the latest version from a version older than 0.11.0, follow ",(0,l.kt)("inlineCode",{parentName:"p"},"Option B: Reinstalling Rancher"),". Otherwise, follow ",(0,l.kt)("inlineCode",{parentName:"p"},"Option A: Upgrading Rancher"),"."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Option A: Upgrading Rancher"),(0,l.kt)("p",null,"Upgrade Rancher to the latest version with all your settings."),(0,l.kt)("p",null,"Take all the values from the previous step and append them to the command using ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value"),". Note: There will be many more options from the previous step that need to be appended."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm upgrade --install rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Option B: Reinstalling Rancher chart"),(0,l.kt)("p",null,"If you are currently running the cert-manager whose version is older than v0.11, and want to upgrade both Rancher and cert-manager to a newer version, then you need to reinstall both Rancher and cert-manager due to the API change in cert-manager v0.11."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Uninstall Rancher"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm delete rancher\n")),(0,l.kt)("p",{parentName:"li"},'In case this results in an error that the release "rancher" was not found, make sure you are using the correct deployment name. Use ',(0,l.kt)("inlineCode",{parentName:"p"},"helm list")," to list the helm-deployed releases.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Uninstall and reinstall ",(0,l.kt)("inlineCode",{parentName:"p"},"cert-manager")," according to the instructions on the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager-helm-2"},"Upgrading Cert-Manager")," page.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Reinstall Rancher to the latest version with all your settings. Take all the values from the step 1 and append them to the command using ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value"),". Note: There will be many more options from the step 1 that need to be appended."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm install rancher-<CHART_REPO>/rancher \\\n--name rancher \\\n--namespace cattle-system \\\n--set hostname=rancher.my.org\n")))))),(0,l.kt)(o.Z,{value:"Kubernetes Air Gap Upgrade",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Render the Rancher template using the same chosen options that were used when installing Rancher. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools."),(0,l.kt)("p",{parentName:"li"},"Based on the choice you made during installation, complete one of the procedures below."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<VERSION>")),(0,l.kt)("td",{parentName:"tr",align:null},"The version number of the output tarball.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<RANCHER.YOURDOMAIN.COM>")),(0,l.kt)("td",{parentName:"tr",align:null},"The DNS name you pointed at your load balancer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,l.kt)("td",{parentName:"tr",align:null},"The DNS name for your private registry.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<CERTMANAGER_VERSION>")),(0,l.kt)("td",{parentName:"tr",align:null},"Cert-manager version running on k8s cluster.")))))),(0,l.kt)("details",{id:"self-signed"},(0,l.kt)("summary",null,"Option A-Default Self-Signed Certificate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"helm template ./rancher-<VERSION>.tgz --output-dir . \\\n--name rancher \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set certmanager.version=<CERTMANAGER_VERSION> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Available as of v2.2.0, set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts\n"))),(0,l.kt)("details",{id:"secret"},(0,l.kt)("summary",null,"Option B: Certificates From Files using Kubernetes Secrets"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"helm template ./rancher-<VERSION>.tgz --output-dir . \\\n--name rancher \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set ingress.tls.source=secret \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Available as of v2.2.0, set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts\n")),(0,l.kt)("p",null,"If you are using a Private CA signed cert, add ",(0,l.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," following ",(0,l.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"helm template ./rancher-<VERSION>.tgz --output-dir . \\\n--name rancher \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set ingress.tls.source=secret \\\n--set privateCA=true \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Available as of v2.2.0, set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts\n"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the rendered manifest directories to a system with access to the Rancher server cluster and apply the rendered templates."),(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," to apply the rendered manifests."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cattle-system apply -R -f ./rancher\n")))))),(0,l.kt)("h3",{id:"d-verify-the-upgrade"},"D. Verify the Upgrade"),(0,l.kt)("p",null,"Log into Rancher to confirm that the upgrade succeeded."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Having network issues following upgrade?")),(0,l.kt)("p",{parentName:"blockquote"},"See ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration#restoring-cluster-networking"},"Restoring Cluster Networking"),".")),(0,l.kt)("h2",{id:"rolling-back"},"Rolling Back"),(0,l.kt)("p",null,"Should something go wrong, follow the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"},"roll back")," instructions to restore the snapshot you took before you preformed the upgrade."))}g.isMDXComponent=!0}}]);