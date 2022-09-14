"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42989],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35718:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],s={title:"Multi-cluster Apps",weight:2},l=void 0,p={unversionedId:"how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps",id:"how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps",title:"Multi-cluster Apps",description:"As of Rancher v2.5, multi-cluster apps are deprecated. We now recommend using Fleet for deploying apps across clusters.",source:"@site/docs/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps.md",sourceDirName:"how-to-guides/new-user-guides/deploy-apps-across-clusters",slug:"/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps",permalink:"/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Multi-cluster Apps",weight:2},sidebar:"tutorialSidebar",previous:{title:"Fleet - GitOps at Scale",permalink:"/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},next:{title:"Backups and Disaster Recovery",permalink:"/pages-for-subheaders/backup-restore-and-disaster-recovery"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Permissions",id:"permissions",level:3},{value:"Enable Legacy Features",id:"enable-legacy-features",level:3},{value:"Launching a Multi-Cluster App",id:"launching-a-multi-cluster-app",level:2},{value:"Multi-cluster App Configuration Options",id:"multi-cluster-app-configuration-options",level:2},{value:"Targets",id:"targets",level:3},{value:"Upgrades",id:"upgrades",level:3},{value:"Roles",id:"roles",level:3},{value:"Application Configuration Options",id:"application-configuration-options",level:2},{value:"Using a questions.yml file",id:"using-a-questionsyml-file",level:3},{value:"Key Value Pairs for Native Helm Charts",id:"key-value-pairs-for-native-helm-charts",level:3},{value:"Members",id:"members",level:3},{value:"Overriding Application Configuration Options for Specific Projects",id:"overriding-application-configuration-options-for-specific-projects",level:3},{value:"Upgrading Multi-Cluster App Roles and Projects",id:"upgrading-multi-cluster-app-roles-and-projects",level:2},{value:"Multi-Cluster Application Management",id:"multi-cluster-application-management",level:2},{value:"Deleting a Multi-Cluster Application",id:"deleting-a-multi-cluster-application",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As of Rancher v2.5, multi-cluster apps are deprecated. We now recommend using ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},"Fleet")," for deploying apps across clusters.")),(0,r.kt)("p",null,"Typically, most applications are deployed on a single Kubernetes cluster, but there will be times you might want to deploy multiple copies of the same application across different clusters and/or projects. In Rancher, a ",(0,r.kt)("em",{parentName:"p"},"multi-cluster application"),",  is an application deployed using a Helm chart across multiple clusters. With the ability to deploy the same application across multiple clusters, it avoids the repetition of the same action on each cluster, which could introduce user error during application configuration. With multi-cluster applications, you can customize to have the same configuration across all projects/clusters as well as have the ability to change the configuration based on your target project. Since multi-cluster application is considered a single application, it's easy to manage and maintain this application."),(0,r.kt)("p",null,"Any Helm charts from a global catalog can be used to deploy and manage multi-cluster applications."),(0,r.kt)("p",null,"After creating a multi-cluster application, you can program a global DNS entry to make it easier to access the application."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"To create a multi-cluster app in Rancher, you must have at least one of the following permissions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project-member role")," in the target cluster(s), which gives you the ability to create, read, update, and delete the workloads"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner role")," for the clusters(s) that include the target project(s)")),(0,r.kt)("h3",{id:"enable-legacy-features"},"Enable Legacy Features"),(0,r.kt)("p",null,"Because multi-cluster apps were deprecated and replaced with Fleet in Rancher v2.5, you will need to enable multi-cluster apps with a feature flag."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Global Settings"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Feature Flags"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"legacy")," feature flag and click ",(0,r.kt)("strong",{parentName:"li"},"Activate"),".")),(0,r.kt)("h2",{id:"launching-a-multi-cluster-app"},"Launching a Multi-Cluster App"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Multi-cluster Apps"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Launch"),"."),(0,r.kt)("li",{parentName:"ol"},"Find the application that you want to launch."),(0,r.kt)("li",{parentName:"ol"},"(Optional) Review the detailed descriptions, which are derived from the Helm chart's ",(0,r.kt)("inlineCode",{parentName:"li"},"README"),"."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Configuration Options")," enter a ",(0,r.kt)("strong",{parentName:"li"},"Name")," for the multi-cluster application. By default, this name is also used to create a Kubernetes namespace in each ",(0,r.kt)("a",{parentName:"li",href:"#targets"},"target project")," for the multi-cluster application. The namespace is named as ",(0,r.kt)("inlineCode",{parentName:"li"},"<MULTI-CLUSTER_APPLICATION_NAME>-<PROJECT_ID>"),"."),(0,r.kt)("li",{parentName:"ol"},"Select a ",(0,r.kt)("strong",{parentName:"li"},"Template Version"),"."),(0,r.kt)("li",{parentName:"ol"},"Complete the ",(0,r.kt)("a",{parentName:"li",href:"#multi-cluster-app-configuration-options"},"multi-cluster applications specific configuration options")," as well as the ",(0,r.kt)("a",{parentName:"li",href:"#application-configuration-options"},"application configuration options"),"."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Members")," who can ",(0,r.kt)("a",{parentName:"li",href:"#members"},"interact with the multi-cluster application"),"."),(0,r.kt)("li",{parentName:"ol"},"Add any ",(0,r.kt)("a",{parentName:"li",href:"#overriding-application-configuration-options-for-specific-projects"},"custom application configuration answers")," that would change the configuration for specific project(s) from the default application configuration answers."),(0,r.kt)("li",{parentName:"ol"},"Review the files in the ",(0,r.kt)("strong",{parentName:"li"},"Preview")," section. When you're satisfied, click ",(0,r.kt)("strong",{parentName:"li"},"Launch"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result"),": Your application is deployed to your chosen namespace. You can view the application status from the project's:"),(0,r.kt)("h2",{id:"multi-cluster-app-configuration-options"},"Multi-cluster App Configuration Options"),(0,r.kt)("p",null,"Rancher has divided the configuration option for the multi-cluster application into several sections."),(0,r.kt)("h3",{id:"targets"},"Targets"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Targets")," section, select the projects that you want the application to be deployed in. The list of projects is based on what projects you have access to. For each project that you select, it will be added to the list, which shows the cluster name and project name that were selected. To remove a target project, click on ",(0,r.kt)("strong",{parentName:"p"},"-"),"."),(0,r.kt)("h3",{id:"upgrades"},"Upgrades"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Upgrades")," section, select the upgrade strategy to use, when you decide to upgrade your application."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rolling Update (batched):")," When selecting this upgrade strategy, the number of applications upgraded at a time is based on the selected ",(0,r.kt)("strong",{parentName:"p"},"Batch size")," and the ",(0,r.kt)("strong",{parentName:"p"},"Interval")," specifies how many seconds to wait before starting the next batch of updates.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Upgrade all apps simultaneously:")," When selecting this upgrade strategy, all applications across all projects will be upgraded at the same time."))),(0,r.kt)("h3",{id:"roles"},"Roles"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Roles")," section, you define the role of the multi-cluster application. Typically, when a user ",(0,r.kt)("a",{parentName:"p",href:"/pages-for-subheaders/helm-charts-in-rancher"},"launches catalog applications"),", that specific user's permissions are used for creation of all workloads/resources that is required by the app."),(0,r.kt)("p",null,"For multi-cluster applications, the application is deployed by a ",(0,r.kt)("em",{parentName:"p"},"system user")," and is assigned as the creator of all underlying resources. A ",(0,r.kt)("em",{parentName:"p"},"system user")," is used instead of the actual user due to the fact that the actual user could be removed from one of the target projects. If the actual user was removed from one of the projects, then that user would no longer be able to manage the application for the other projects."),(0,r.kt)("p",null,"Rancher will let you select from two options for Roles, ",(0,r.kt)("strong",{parentName:"p"},"Project")," and ",(0,r.kt)("strong",{parentName:"p"},"Cluster"),". Rancher will allow creation using any of these roles based on the user's permissions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Project")," - This is the equivalent of a ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project member"),". If you select this role, Rancher will check that in all the target projects, the user has minimally the ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project member")," role. While the user might not be explicitly granted the ",(0,r.kt)("em",{parentName:"p"},"project member")," role, if the user is an ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator"),", a ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner"),", or a ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project owner"),", then the user is considered to have the appropriate level of permissions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cluster")," - This is the equivalent of a ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner"),". If you select this role, Rancher will check that in all the target projects, the user has minimally the ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"cluster owner")," role. While the user might not be explicitly granted the ",(0,r.kt)("em",{parentName:"p"},"cluster owner")," role, if the user is an ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator"),", then the user is considered to have the appropriate level of permissions."))),(0,r.kt)("p",null,"When launching the application, Rancher will confirm if you have these permissions in the target projects before launching the application."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are some applications like ",(0,r.kt)("em",{parentName:"p"},"Grafana")," or ",(0,r.kt)("em",{parentName:"p"},"Datadog")," that require access to specific cluster-scoped resources. These applications will require the ",(0,r.kt)("em",{parentName:"p"},"Cluster")," role. If you find out later that the application requires cluster roles, the multi-cluster application can be upgraded to update the roles."))),(0,r.kt)("h2",{id:"application-configuration-options"},"Application Configuration Options"),(0,r.kt)("p",null,"For each Helm chart, there are a list of desired answers that must be entered in order to successfully deploy the chart. When entering answers, you must format them using the syntax rules found in ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/using_helm/#the-format-and-limitations-of---set"},"Using Helm: The format and limitations of \u2013set"),", as Rancher passes them as ",(0,r.kt)("inlineCode",{parentName:"p"},"--set")," flags to Helm."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When entering an answer that includes two values separated by a comma (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"abc, bcd"),"), it is required to wrap the values with double quotes (i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},'"abc, bcd"'),")."))),(0,r.kt)("h3",{id:"using-a-questionsyml-file"},"Using a questions.yml file"),(0,r.kt)("p",null,"If the Helm chart that you are deploying contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"questions.yml")," file, Rancher's UI will translate this file to display an easy to use UI to collect the answers for the questions."),(0,r.kt)("h3",{id:"key-value-pairs-for-native-helm-charts"},"Key Value Pairs for Native Helm Charts"),(0,r.kt)("p",null,"For native Helm charts (i.e., charts from the ",(0,r.kt)("strong",{parentName:"p"},"Helm Stable")," or ",(0,r.kt)("strong",{parentName:"p"},"Helm Incubator")," catalogs or a custom Helm chart repository, answers are provided as key value pairs in the ",(0,r.kt)("strong",{parentName:"p"},"Answers")," section. These answers are used to override the default values."),(0,r.kt)("h3",{id:"members"},"Members"),(0,r.kt)("p",null,"By default, multi-cluster applications can only be managed by the user who created it. In the ",(0,r.kt)("strong",{parentName:"p"},"Members")," section, other users can be added so that they can also help manage or view the multi-cluster application."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the user that you want to add by typing in the member's name in the ",(0,r.kt)("strong",{parentName:"p"},"Member")," search box.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Access Type")," for that member. There are three access types for a multi-cluster project, but due to how the permissions of a multi-cluster application are launched, please read carefully to understand what these access types mean."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Owner"),": This access type can manage any configuration part of the multi-cluster application including the template version, the ","[multi-cluster applications specific configuration options]","(#Multi-cluster App Configuration Options), the ",(0,r.kt)("a",{parentName:"p",href:"#application-configuration-options"},"application specific configuration options"),", the members who can interact with the multi-cluster application and the ",(0,r.kt)("a",{parentName:"p",href:"#overriding-application-configuration-options-for-specific-projects"},"custom application configuration answers"),". Since a multi-cluster application is created with a different set of permissions from the user, any ",(0,r.kt)("em",{parentName:"p"},"owner")," of the multi-cluster application can manage/remove applications in ",(0,r.kt)("a",{parentName:"p",href:"#targets"},"target projects")," without explicitly having access to these project(s). Only trusted users should be provided with this access type.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Member"),": This access type can only modify the template version, the ",(0,r.kt)("a",{parentName:"p",href:"#application-configuration-options"},"application specific configuration options")," and the ",(0,r.kt)("a",{parentName:"p",href:"#overriding-application-configuration-options-for-specific-projects"},"custom application configuration answers"),". Since a multi-cluster application is created with a different set of permissions from the user, any ",(0,r.kt)("em",{parentName:"p"},"member")," of the multi-cluster application can modify the application without explicitly having access to these project(s). Only trusted users should be provided with this access type.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Read-only"),": This access type cannot modify any configuration option for the multi-cluster application. Users can only view these applications."))),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please ensure only trusted users are given ",(0,r.kt)("em",{parentName:"p"},"Owner")," or ",(0,r.kt)("em",{parentName:"p"},"Member")," access as they will automatically be able to manage applications created for this multi-cluster application in target projects they might not have direct access to."))))),(0,r.kt)("h3",{id:"overriding-application-configuration-options-for-specific-projects"},"Overriding Application Configuration Options for Specific Projects"),(0,r.kt)("p",null,"The ability to use the same configuration to deploy the same application across multiple clusters/projects is one of the main benefits of multi-cluster applications. There might be a specific project that requires a slightly different configuration option, but you want to manage that application with all the other matching applications. Instead of creating a brand new application, you can override specific ",(0,r.kt)("a",{parentName:"p",href:"#application-configuration-options"},"application specific configuration options")," for specific projects."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Answer Overrides")," section, click ",(0,r.kt)("strong",{parentName:"p"},"Add Override"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For each override, you can select the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scope"),": Select which target projects you want to override the answer in the configuration option.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Question"),": Select which question you want to override.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Answer"),": Enter the answer that you want to be used instead."))))),(0,r.kt)("h2",{id:"upgrading-multi-cluster-app-roles-and-projects"},"Upgrading Multi-Cluster App Roles and Projects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Changing Roles on an existing Multi-Cluster app"),'\nThe creator and any users added with the access-type "owner" to a multi-cluster app, can upgrade its Roles. When adding a new Role, we check if the user has that exact role in all current target projects. These checks allow the same relaxations for global admins, cluster owners and project-owners as described in the installation section for the field ',(0,r.kt)("inlineCode",{parentName:"p"},"Roles"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Adding/Removing target projects")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'The creator and any users added with access-type "owner" to a multi-cluster app, can add or remove its target projects. When adding a new project, we check if the caller of this request has all Roles defined on multi-cluster app, in the new projects they want to add. The roles checks are again relaxed for global admins, cluster-owners and project-owners.'),(0,r.kt)("li",{parentName:"ol"},"We do not do these membership checks when removing target projects. This is because the caller's permissions could have with respect to the target project, or the project could have been deleted and hence the caller wants to remove it from targets list.")),(0,r.kt)("h2",{id:"multi-cluster-application-management"},"Multi-Cluster Application Management"),(0,r.kt)("p",null,"One of the benefits of using a multi-cluster application as opposed to multiple individual applications of the same type, is the ease of management. Multi-cluster applications can be cloned, upgraded or rolled back."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisite:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"legacy")," feature flag needs to be enabled."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > Multi-cluster Apps"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the multi-cluster application you want to take one of these actions on and click the ",(0,r.kt)("strong",{parentName:"p"},"\u22ee"),". Select one of the following options:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Clone"),": Creates another multi-cluster application with the same configuration. By using this option, you can easily duplicate a multi-cluster application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Upgrade"),": Upgrade your multi-cluster application to change some part of the configuration. When performing an upgrade for multi-cluster application, the ",(0,r.kt)("a",{parentName:"li",href:"#upgrades"},"upgrade strategy")," can be modified if you have the correct ",(0,r.kt)("a",{parentName:"li",href:"#members"},"access type"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rollback"),": Rollback your application to a specific version. If after an upgrade, there are issues for your multi-cluster application for one or more of your ",(0,r.kt)("a",{parentName:"li",href:"#targets"},"targets"),", Rancher has stored up to 10 versions of the multi-cluster application. Rolling back a multi-cluster application reverts the application for ",(0,r.kt)("strong",{parentName:"li"},"all")," target clusters and projects, not just the targets(s) affected by the upgrade issue.")))),(0,r.kt)("h2",{id:"deleting-a-multi-cluster-application"},"Deleting a Multi-Cluster Application"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisite:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"legacy")," feature flag needs to be enabled."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > Multi-cluster Apps"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the multi-cluster application you want to delete and click the ",(0,r.kt)("strong",{parentName:"p"},"\u22ee > Delete"),". When deleting the multi-cluster application, all applications and namespaces are deleted in all of the target projects."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The applications in the target projects, that are created for a multi-cluster application, cannot be deleted individually. The applications can only be deleted when the multi-cluster application is deleted."))))))}d.isMDXComponent=!0}}]);