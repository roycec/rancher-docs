"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[10438],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,k=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return r?n.createElement(k,s(s({ref:t},c),{},{components:r})):n.createElement(k,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},33306:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],o={title:"Kubernetes Registry and Docker Registry",description:"Learn about the Docker registry and Kubernetes registry, their use cases and how to use a private registry with the Rancher UI",weight:3063,aliases:["/rancher/v2.5/en/tasks/projects/add-registries/","/rancher/v2.5/en/k8s-in-rancher/registries","/rancher/v2.5/en/k8s-resources/k8s-in-rancher/registries","/rancher/v2.x/en/k8s-in-rancher/registries/"]},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",title:"Kubernetes Registry and Docker Registry",description:"Learn about the Docker registry and Kubernetes registry, their use cases and how to use a private registry with the Rancher UI",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries.md",tags:[],version:"2.5",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Kubernetes Registry and Docker Registry",description:"Learn about the Docker registry and Kubernetes registry, their use cases and how to use a private registry with the Rancher UI",weight:3063,aliases:["/rancher/v2.5/en/tasks/projects/add-registries/","/rancher/v2.5/en/k8s-in-rancher/registries","/rancher/v2.5/en/k8s-resources/k8s-in-rancher/registries","/rancher/v2.x/en/k8s-in-rancher/registries/"]},sidebar:"tutorialSidebar",previous:{title:"Secrets",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},next:{title:"Helm Charts in Rancher",permalink:"/v2.5/pages-for-subheaders/helm-charts-in-rancher"}},c={},p=[{value:"Using the Private Registry with the Rancher UI",id:"using-the-private-registry-with-the-rancher-ui",level:3},{value:"Using the Private Registry with kubectl",id:"using-the-private-registry-with-kubectl",level:3}],h={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Registries are Kubernetes secrets containing credentials used to authenticate with ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"},"private Docker registries"),". "),(0,i.kt)("p",null,'The word "registry" can mean two things, depending on whether it is used to refer to a Docker or Kubernetes registry:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"Docker registry")," contains Docker images that you can pull in order to use them in your deployment. The registry is a stateless, scalable server side application that stores and lets you distribute Docker images."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Kubernetes registry")," is an image pull secret that your deployment uses to authenticate with a Docker registry.")),(0,i.kt)("p",null,"Deployments use the Kubernetes registry secret to authenticate with a private Docker registry and then pull a Docker image hosted on it."),(0,i.kt)("p",null,"Currently, deployments pull the private registry credentials automatically only if the workload is created in the Rancher UI and not when it is created via kubectl."),(0,i.kt)("h1",{id:"creating-a-registry"},"Creating a Registry"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")," You must have a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/"},"private registry")," available to use.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, select the project containing the namespace(s) where you want to add a registry.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the main menu, click ",(0,i.kt)("strong",{parentName:"p"},"Resources > Secrets > Registry Credentials.")," ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Add Registry."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a ",(0,i.kt)("strong",{parentName:"p"},"Name")," for the registry."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Kubernetes classifies secrets, certificates, and registries all as ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"secrets"),", and no two secrets in a project or namespace can have duplicate names. Therefore, to prevent conflicts, your registry must have a unique name among all secrets within your workspace."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a ",(0,i.kt)("strong",{parentName:"p"},"Scope")," for the registry. You can either make the registry available for the entire project or a single namespace.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the website that hosts your private registry. Then enter credentials that authenticate with the registry. For example, if you use DockerHub, provide your DockerHub username and password.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your secret is added to the project or namespace, depending on the scope you chose."),(0,i.kt)("li",{parentName:"ul"},"You can view the secret in the Rancher UI from the ",(0,i.kt)("strong",{parentName:"li"},"Resources > Registries")," view."),(0,i.kt)("li",{parentName:"ul"},"Any workload that you create in the Rancher UI will have the credentials to access the registry if the workload is within the registry's scope.")),(0,i.kt)("h1",{id:"using-a-private-registry"},"Using a Private Registry"),(0,i.kt)("p",null,"You can deploy a workload with an image from a private registry through the Rancher UI, or with ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,i.kt)("h3",{id:"using-the-private-registry-with-the-rancher-ui"},"Using the Private Registry with the Rancher UI"),(0,i.kt)("p",null,"To deploy a workload with an image from your private registry,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the project view,"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Resources > Workloads.")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Deploy.")),(0,i.kt)("li",{parentName:"ol"},"Enter a unique name for the workload and choose a namespace."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Docker Image")," field, enter the URL of the path to the Docker image in your private registry. For example, if your private registry is on Quay.io, you could use ",(0,i.kt)("inlineCode",{parentName:"li"},"quay.io/<Quay profile name>/<Image name>"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Launch."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Your deployment should launch, authenticate using the private registry credentials you added in the Rancher UI, and pull the Docker image that you specified."),(0,i.kt)("h3",{id:"using-the-private-registry-with-kubectl"},"Using the Private Registry with kubectl"),(0,i.kt)("p",null,"When you create the workload using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),", you need to configure the pod so that its YAML has the path to the image in the private registry. You also have to create and reference the registry secret because the pod only automatically gets access to the private registry credentials if it is created in the Rancher UI."),(0,i.kt)("p",null,"The secret has to be created in the same namespace where the workload gets deployed."),(0,i.kt)("p",null,"Below is an example ",(0,i.kt)("inlineCode",{parentName:"p"},"pod.yml")," for a workload that uses an image from a private registry. In this example, the pod uses an image from Quay.io, and the .yml specifies the path to the image. The pod authenticates with the registry using credentials stored in a Kubernetes secret called ",(0,i.kt)("inlineCode",{parentName:"p"},"testquay"),", which is specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.imagePullSecrets")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: private-reg\nspec:\n  containers:\n  - name: private-reg-container\n    image: quay.io/<Quay profile name>/<image name>\n  imagePullSecrets:\n  - name: testquay\n")),(0,i.kt)("p",null,"In this example, the secret named ",(0,i.kt)("inlineCode",{parentName:"p"},"testquay")," is in the default namespace."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the secret with the private registry credentials. This command creates the secret named ",(0,i.kt)("inlineCode",{parentName:"p"},"testquay"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create secret docker-registry testquay \\\n    --docker-server=quay.io \\\n    --docker-username=<Profile name> \\\n    --docker-password=<password>\n")),(0,i.kt)("p",null,"To see how the secret is stored in Kubernetes, you can use this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kubectl get secret testquay --output="jsonpath={.data.\\.dockerconfigjson}" | base64 --decode\n')),(0,i.kt)("p",null,"The result looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{"auths":{"quay.io":{"username":"<Profile name>","password":"<password>","auth":"c291bXlhbGo6dGVzdGFiYzEyMw=="}}}\n')),(0,i.kt)("p",null,"After the workload is deployed, you can check if the image was pulled successfully:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get events\n")),(0,i.kt)("p",null,"The result should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'14s         Normal    Scheduled          Pod    Successfully assigned default/private-reg2 to minikube\n11s         Normal    Pulling            Pod    pulling image "quay.io/<Profile name>/<image name>"\n10s         Normal    Pulled             Pod    Successfully pulled image "quay.io/<Profile name>/<image name>"\n')),(0,i.kt)("p",null,"For more information, refer to the Kubernetes documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#create-a-pod-that-uses-your-secret"},"creating a pod that uses your secret.")))}d.isMDXComponent=!0}}]);