"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[92289],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,k=h["".concat(u,".").concat(d)]||h[d]||p[d]||s;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77115:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={title:"Setting up a High-availability RKE2 Kubernetes Cluster for Rancher",shortTitle:"Set up RKE2 for Rancher",weight:2,aliases:["/rancher/v2.x/en/installation/resources/k8s-tutorials/ha-RKE2","/rancher/v2.x/en/installation/resources/k8s-tutorials/ha-RKE2/"]},u=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-cluster-setup/rke2-for-rancher",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke2-for-rancher",title:"Setting up a High-availability RKE2 Kubernetes Cluster for Rancher",description:"Tested on v2.5.6",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke2-for-rancher.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-cluster-setup",slug:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke2-for-rancher",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke2-for-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke2-for-rancher.md",tags:[],version:"2.5",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Setting up a High-availability RKE2 Kubernetes Cluster for Rancher",shortTitle:"Set up RKE2 for Rancher",weight:2,aliases:["/rancher/v2.x/en/installation/resources/k8s-tutorials/ha-RKE2","/rancher/v2.x/en/installation/resources/k8s-tutorials/ha-RKE2/"]},sidebar:"tutorialSidebar",previous:{title:"Setting up a High-availability RKE Kubernetes Cluster",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher"},next:{title:"Don't have infrastructure for your Kubernetes cluster? Try one of these tutorials.",permalink:"/zh/v2.5/pages-for-subheaders/infrastructure-setup"}},c={},p=[{value:"1. Install Kubernetes and Set up the RKE2 Server",id:"1-install-kubernetes-and-set-up-the-rke2-server",level:3},{value:"2. Confirm that RKE2 is Running",id:"2-confirm-that-rke2-is-running",level:3},{value:"3. Save and Start Using the kubeconfig File",id:"3-save-and-start-using-the-kubeconfig-file",level:3},{value:"4. Check the Health of Your Cluster Pods",id:"4-check-the-health-of-your-cluster-pods",level:3},{value:"5. Configure nginx to be a daemonset",id:"5-configure-nginx-to-be-a-daemonset",level:3}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Tested on v2.5.6")),(0,s.kt)("p",null,"This section describes how to install a Kubernetes cluster according to the ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/rancher-manager-architecture/architecture-recommendations#environment-for-kubernetes-installations"},"best practices for the Rancher server environment.")),(0,s.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"These instructions assume you have set up three nodes, a load balancer, and a DNS record, as described in ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/infrastructure-setup/ha-rke2-kubernetes-cluster"},"this section.")),(0,s.kt)("p",null,"Note that in order for RKE2 to work correctly with the load balancer, you need to set up two listeners: one for the supervisor on port 9345, and one for the Kubernetes API on port 6443."),(0,s.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")," To specify the RKE2 version, use the INSTALL_RKE2_VERSION environment variable when running the RKE2 installation script."),(0,s.kt)("h1",{id:"installing-kubernetes"},"Installing Kubernetes"),(0,s.kt)("h3",{id:"1-install-kubernetes-and-set-up-the-rke2-server"},"1. Install Kubernetes and Set up the RKE2 Server"),(0,s.kt)("p",null,"RKE2 server runs with embedded etcd so you will not need to set up an external datastore to run in HA mode."),(0,s.kt)("p",null,"On the first node, you should set up the configuration file with your own pre-shared secret as the token. The token argument can be set on startup."),(0,s.kt)("p",null,"If you do not specify a pre-shared secret, RKE2 will generate one and place it at /var/lib/rancher/rke2/server/node-token."),(0,s.kt)("p",null,"To avoid certificate errors with the fixed registration address, you should launch the server with the tls-san parameter set. This option adds an additional hostname or IP as a Subject Alternative Name in the server's TLS cert, and it can be specified as a list if you would like to access via both the IP and the hostname."),(0,s.kt)("p",null,"First, you must create the directory where the RKE2 config file is going to be placed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mkdir -p /etc/rancher/rke2/\n")),(0,s.kt)("p",null,"Next, create the RKE2 config file at ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/config.yaml")," using the following example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"token: my-shared-secret\ntls-san:\n  - my-kubernetes-domain.com\n  - another-kubernetes-domain.com\n")),(0,s.kt)("p",null,"After that, you need to run the install command and enable and start rke2:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"curl -sfL https://get.rke2.io | INSTALL_RKE2_CHANNEL=v1.20 sh -\nsystemctl enable rke2-server.service\nsystemctl start rke2-server.service\n")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"To join the rest of the nodes, you need to configure each additional node with the same shared token or the one generated automatically. Here is an example of the configuration file:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"    token: my-shared-secret\n    server: https://<DNS-DOMAIN>:9345\n    tls-san:\n      - my-kubernetes-domain.com\n      - another-kubernetes-domain.com\n")),(0,s.kt)("p",{parentName:"li"},"After that, you need to run the installer and enable, then start, rke2:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"    curl -sfL https://get.rke2.io | sh -\n    systemctl enable rke2-server.service\n    systemctl start rke2-server.service\n")))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Repeat the same command on your third RKE2 server node.")),(0,s.kt)("h3",{id:"2-confirm-that-rke2-is-running"},"2. Confirm that RKE2 is Running"),(0,s.kt)("p",null,"Once you've launched the rke2 server process on all server nodes, ensure that the cluster has come up properly with"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/var/lib/rancher/rke2/bin/kubectl \\\n        --kubeconfig /etc/rancher/rke2/rke2.yaml get nodes\nYou should see your server nodes in the Ready state.\n")),(0,s.kt)("p",null,"Then test the health of the cluster pods:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/var/lib/rancher/rke2/bin/kubectl \\\n        --kubeconfig /etc/rancher/rke2/rke2.yaml get pods --all-namespaces\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," You have successfully set up a RKE2 Kubernetes cluster."),(0,s.kt)("h3",{id:"3-save-and-start-using-the-kubeconfig-file"},"3. Save and Start Using the kubeconfig File"),(0,s.kt)("p",null,"When you installed RKE2 on each Rancher server node, a ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file was created on the node at ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/rke2.yaml"),". This file contains credentials for full access to the cluster, and you should save this file in a secure location."),(0,s.kt)("p",null,"To use this ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file,"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Install ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl,")," a Kubernetes command-line tool."),(0,s.kt)("li",{parentName:"ol"},"Copy the file at ",(0,s.kt)("inlineCode",{parentName:"li"},"/etc/rancher/rke2/rke2.yaml")," and save it to the directory ",(0,s.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," on your local machine."),(0,s.kt)("li",{parentName:"ol"},"In the kubeconfig file, the ",(0,s.kt)("inlineCode",{parentName:"li"},"server")," directive is defined as localhost. Configure the server as the DNS of your load balancer, referring to port 6443. (The Kubernetes API server will be reached at port 6443, while the Rancher server will be reached at ports 80 and 443.) Here is an example ",(0,s.kt)("inlineCode",{parentName:"li"},"rke2.yaml"),":")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: [CERTIFICATE-DATA]\n    server: [LOAD-BALANCER-DNS]:6443 # Edit this line\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    password: [PASSWORD]\n    username: admin\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," You can now use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to manage your RKE2 cluster. If you have more than one kubeconfig file, you can specify which one you want to use by passing in the path to the file when using ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl --kubeconfig ~/.kube/config/rke2.yaml get pods --all-namespaces\n")),(0,s.kt)("p",null,"For more information about the ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rke2.io/cluster_access/"},"RKE2 documentation")," or the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"official Kubernetes documentation")," about organizing cluster access using ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," files."),(0,s.kt)("h3",{id:"4-check-the-health-of-your-cluster-pods"},"4. Check the Health of Your Cluster Pods"),(0,s.kt)("p",null,"Now that you have set up the ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file, you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to access the cluster from your local machine."),(0,s.kt)("p",null,"Check that all the required pods and containers are healthy are ready to continue:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," /var/lib/rancher/rke2/bin/kubectl         --kubeconfig /etc/rancher/rke2/rke2.yaml get pods -A\nNAMESPACE     NAME                                                 READY   STATUS      RESTARTS   AGE\nkube-system   etcd-ip-172-31-18-145                                1/1     Running     0          4m37s\nkube-system   etcd-ip-172-31-25-73                                 1/1     Running     0          20m\nkube-system   etcd-ip-172-31-31-210                                1/1     Running     0          9m12s\nkube-system   helm-install-rke2-canal-th9k9                        0/1     Completed   0          21m\nkube-system   helm-install-rke2-coredns-6njr6                      0/1     Completed   0          21m\nkube-system   helm-install-rke2-ingress-nginx-vztsd                0/1     Completed   0          21m\nkube-system   helm-install-rke2-kube-proxy-6std5                   0/1     Completed   0          21m\nkube-system   helm-install-rke2-metrics-server-9sl7m               0/1     Completed   0          21m\nkube-system   kube-apiserver-ip-172-31-18-145                      1/1     Running     0          4m22s\nkube-system   kube-apiserver-ip-172-31-25-73                       1/1     Running     0          20m\nkube-system   kube-apiserver-ip-172-31-31-210                      1/1     Running     0          9m8s\nkube-system   kube-controller-manager-ip-172-31-18-145             1/1     Running     0          4m8s\nkube-system   kube-controller-manager-ip-172-31-25-73              1/1     Running     0          21m\nkube-system   kube-controller-manager-ip-172-31-31-210             1/1     Running     0          8m55s\nkube-system   kube-proxy-57twm                                     1/1     Running     0          10m\nkube-system   kube-proxy-f7pc6                                     1/1     Running     0          5m24s\nkube-system   kube-proxy-rj4t5                                     1/1     Running     0          21m\nkube-system   kube-scheduler-ip-172-31-18-145                      1/1     Running     0          4m15s\nkube-system   kube-scheduler-ip-172-31-25-73                       1/1     Running     0          21m\nkube-system   kube-scheduler-ip-172-31-31-210                      1/1     Running     0          8m48s\nkube-system   rke2-canal-4x972                                     2/2     Running     0          10m\nkube-system   rke2-canal-flh8m                                     2/2     Running     0          5m24s\nkube-system   rke2-canal-zfhkr                                     2/2     Running     0          21m\nkube-system   rke2-coredns-rke2-coredns-6cd96645d6-cmstq           1/1     Running     0          21m\nkube-system   rke2-ingress-nginx-controller-54946dd48f-6mp76       1/1     Running     0          20m\nkube-system   rke2-ingress-nginx-default-backend-5795954f8-p92xx   1/1     Running     0          20m\nkube-system   rke2-metrics-server-5f9b5757dc-k5sgh                 1/1     Running     0          20m\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," You have confirmed that you can access the cluster with ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," and the RKE2 cluster is running successfully. Now the Rancher management server can be installed on the cluster."),(0,s.kt)("h3",{id:"5-configure-nginx-to-be-a-daemonset"},"5. Configure nginx to be a daemonset"),(0,s.kt)("p",null,"Currently, RKE2 deploys nginx-ingress as a deployment, and that can impact the Rancher deployment so that you cannot use all servers to proxy requests to the Rancher pods."),(0,s.kt)("p",null,"To rectify that, place the following file in /var/lib/rancher/rke2/server/manifests on any of the server nodes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-ingress-nginx\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    controller:\n      kind: DaemonSet\n      daemonset:\n        useHostPort: true\n")))}d.isMDXComponent=!0}}]);