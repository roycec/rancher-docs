"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[66373],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},14848:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Upgrades",weight:2},l=void 0,p={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",id:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",title:"Upgrades",description:"The following instructions will guide you through upgrading a Rancher server that was installed on a Kubernetes cluster with Helm. These steps also apply to air-gapped installs with Helm.",source:"@site/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",permalink:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Upgrades",weight:2},sidebar:"tutorialSidebar",previous:{title:"Rollbacks",permalink:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"},next:{title:"Rendering the Helm Template in an Air-Gapped Environment",permalink:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Access to kubeconfig",id:"access-to-kubeconfig",level:3},{value:"Review Known Issues",id:"review-known-issues",level:3},{value:"Helm Version",id:"helm-version",level:3},{value:"For air-gapped installs: Populate private registry",id:"for-air-gapped-installs-populate-private-registry",level:3},{value:"For upgrades from a Rancher server with a hidden local cluster",id:"for-upgrades-from-a-rancher-server-with-a-hidden-local-cluster",level:3},{value:"For upgrades with cert-manager older than 0.8.0",id:"for-upgrades-with-cert-manager-older-than-080",level:3},{value:"Upgrade Outline",id:"upgrade-outline",level:2},{value:"1. Back up Your Kubernetes Cluster that is Running Rancher Server",id:"1-back-up-your-kubernetes-cluster-that-is-running-rancher-server",level:3},{value:"2. Update the Helm chart repository",id:"2-update-the-helm-chart-repository",level:3},{value:"3. Upgrade Rancher",id:"3-upgrade-rancher",level:3},{value:"Steps to Upgrade Rancher",id:"steps-to-upgrade-rancher",level:4},{value:"4. Verify the Upgrade",id:"4-verify-the-upgrade",level:3},{value:"Known Upgrade Issues",id:"known-upgrade-issues",level:2}],h={toc:d};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following instructions will guide you through upgrading a Rancher server that was installed on a Kubernetes cluster with Helm. These steps also apply to air-gapped installs with Helm."),(0,o.kt)("p",null,"For the instructions to upgrade Rancher installed with Docker, refer to ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"},"this page.")),(0,o.kt)("p",null,"To upgrade the components in your Kubernetes cluster, or the definition of the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/services/"},"Kubernetes services")," or ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/"},"add-ons"),", refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/"},"upgrade documentation for RKE"),", the Rancher Kubernetes Engine."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"access-to-kubeconfig"},"Access to kubeconfig"),(0,o.kt)("p",null,"Helm should be run from the same location as your kubeconfig file, or the same location where you run your kubectl commands from."),(0,o.kt)("p",null,"If you installed Kubernetes with RKE, the config will have been created in the directory you ran ",(0,o.kt)("inlineCode",{parentName:"p"},"rke up")," in."),(0,o.kt)("p",null,"The kubeconfig can also be manually targeted for the intended cluster with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--kubeconfig")," tag (see: ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm/"},"https://helm.sh/docs/helm/helm/"),")"),(0,o.kt)("h3",{id:"review-known-issues"},"Review Known Issues"),(0,o.kt)("p",null,"Review the list of known issues for each Rancher version, which can be found in the release notes on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,o.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")),(0,o.kt)("p",null,"Note that upgrades ",(0,o.kt)("em",{parentName:"p"},"to")," or ",(0,o.kt)("em",{parentName:"p"},"from")," any chart in the ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/installation-references/helm-chart-options#helm-chart-repositories/"},"rancher-alpha repository")," aren't supported."),(0,o.kt)("h3",{id:"helm-version"},"Helm Version"),(0,o.kt)("p",null,"The upgrade instructions assume you are using Helm 3."),(0,o.kt)("p",null,"For migration of installs started with Helm 2, refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"Helm 2 to 3 migration docs.")," The ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2"},"Helm 2 upgrade page here"),"provides a copy of the older upgrade instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible."),(0,o.kt)("h3",{id:"for-air-gapped-installs-populate-private-registry"},"For air-gapped installs: Populate private registry"),(0,o.kt)("p",null,"For ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/air-gapped-helm-cli-install"},"air-gapped installs only,")," collect and populate images for the new Rancher server version. Follow the guide to ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"populate your private registry")," with the images for the Rancher version that you want to upgrade to."),(0,o.kt)("h3",{id:"for-upgrades-from-a-rancher-server-with-a-hidden-local-cluster"},"For upgrades from a Rancher server with a hidden local cluster"),(0,o.kt)("p",null,"If you are upgrading to Rancher v2.5 from a Rancher server that was started with the Helm chart option ",(0,o.kt)("inlineCode",{parentName:"p"},"--add-local=false"),", you will need to drop that flag when upgrading. Otherwise, the Rancher server will not start. The ",(0,o.kt)("inlineCode",{parentName:"p"},"restricted-admin")," role can be used to continue restricting access to the local cluster. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#upgrading-from-rancher-with-a-hidden-local-cluster"},"this section.")),(0,o.kt)("h3",{id:"for-upgrades-with-cert-manager-older-than-080"},"For upgrades with cert-manager older than 0.8.0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://community.letsencrypt.org/t/blocking-old-cert-manager-versions/98753"},"Let's Encrypt will be blocking cert-manager instances older than 0.8.0 starting November 1st 2019.")," Upgrade cert-manager to the latest version by following ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"these instructions.")),(0,o.kt)("h2",{id:"upgrade-outline"},"Upgrade Outline"),(0,o.kt)("p",null,"Follow the steps to upgrade Rancher server:"),(0,o.kt)("h3",{id:"1-back-up-your-kubernetes-cluster-that-is-running-rancher-server"},"1. Back up Your Kubernetes Cluster that is Running Rancher Server"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"backup application")," to back up Rancher."),(0,o.kt)("p",null,"You'll use the backup as a restore point if something goes wrong during upgrade."),(0,o.kt)("h3",{id:"2-update-the-helm-chart-repository"},"2. Update the Helm chart repository"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update your local helm repo cache."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm repo update\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the repository name that you used to install Rancher."),(0,o.kt)("p",{parentName:"li"},"For information about the repos and their differences, see ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/installation-references/helm-chart-options#helm-chart-repositories"},"Helm Chart Repositories"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Latest: Recommended for trying out the newest features",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,o.kt)("li",{parentName:"ul"},"Stable: Recommended for production environments",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,o.kt)("li",{parentName:"ul"},"Alpha: Experimental preview of upcoming releases.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n")),"  Note: Upgrades are not supported to, from, or between Alphas.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm repo list\n\nNAME                   URL\nstable                 https://charts.helm.sh/stable\nrancher-<CHART_REPO>     https://releases.rancher.com/server-charts/<CHART_REPO>\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to switch to a different Helm chart repository, please follow the ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/choose-a-rancher-version#switching-to-a-different-helm-chart-repository"},"steps on how to switch repositories"),". If you switch repositories, make sure to list the repositories again before continuing onto Step 3 to ensure you have the correct one added.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fetch the latest chart to install Rancher from the Helm chart repository."),(0,o.kt)("p",{parentName:"li"},"This command will pull down the latest charts and save it in the current directory as a ",(0,o.kt)("inlineCode",{parentName:"p"},".tgz")," file."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-<CHART_REPO>/rancher\n")),(0,o.kt)("p",{parentName:"li"},"You can fetch the chart for the specific version you are upgrading to by adding in the ",(0,o.kt)("inlineCode",{parentName:"p"},"--version=")," tag.  For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-<CHART_REPO>/rancher --version=v2.4.11\n")))),(0,o.kt)("h3",{id:"3-upgrade-rancher"},"3. Upgrade Rancher"),(0,o.kt)("p",null,"This section describes how to upgrade normal (Internet-connected) or air-gapped installations of Rancher with Helm."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Air Gap Instructions:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are installing Rancher in an air-gapped environment, skip the rest of this page and render the Helm template by following the instructions on ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades"},"this page.")))),(0,o.kt)("p",null,"Get the values, which were passed with ",(0,o.kt)("inlineCode",{parentName:"p"},"--set"),", from the current Rancher Helm chart that is installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm get values rancher -n cattle-system\n\nhostname: rancher.my.org\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There will be more values that are listed with this command. This is just an example of one of the values."))),(0,o.kt)("p",null,"If you are upgrading cert-manager to the latest version from v1.5 or below, follow the ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/upgrade-cert-manager#option-c-upgrade-cert-manager-from-versions-1-5-and-below"},"cert-manager upgrade docs")," to learn how to upgrade cert-manager without needing to perform an uninstall or reinstall of Rancher. Otherwise, follow the ",(0,o.kt)("a",{parentName:"p",href:"#steps-to-upgrade-rancher"},"steps to upgrade Rancher")," below."),(0,o.kt)("h4",{id:"steps-to-upgrade-rancher"},"Steps to Upgrade Rancher"),(0,o.kt)("p",null,"Upgrade Rancher to the latest version with all your settings."),(0,o.kt)("p",null,"Take all the values from the previous step and append them to the command using ",(0,o.kt)("inlineCode",{parentName:"p"},"--set key=value"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm upgrade rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The above is an example, there may be more values from the previous step that need to be appended."))),(0,o.kt)("p",null,"Alternatively, it's possible to export the current values to a file and reference that file during upgrade. For example, to only change the Rancher version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm get values rancher -n cattle-system -o yaml > values.yaml\n\nhelm upgrade rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  -f values.yaml \\\n  --version=2.4.5\n")),(0,o.kt)("h3",{id:"4-verify-the-upgrade"},"4. Verify the Upgrade"),(0,o.kt)("p",null,"Log into Rancher to confirm that the upgrade succeeded."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Having network issues following upgrade?"),(0,o.kt)("p",{parentName:"div"},"See ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration"},"Restoring Cluster Networking"),"."))),(0,o.kt)("h2",{id:"known-upgrade-issues"},"Known Upgrade Issues"),(0,o.kt)("p",null,"A list of known issues for each Rancher version can be found in the release notes on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,o.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")))}u.isMDXComponent=!0}}]);