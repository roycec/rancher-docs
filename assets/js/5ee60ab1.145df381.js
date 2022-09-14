"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24038],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=g(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var g=2;g<o;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5598:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return g},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Cluster Logging",shortTitle:"Logging",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",metaDescription:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",weight:3,aliases:["/rancher/v2.0-v2.4/en/tasks/logging/","/rancher/v2.0-v2.4/en/cluster-admin/tools/logging","/rancher/v2.0-v2.4/en/logging/legacy/cluster-logging","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/cluster-logging/","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/cluster-logging/"]},s=void 0,g={unversionedId:"pages-for-subheaders/cluster-logging",id:"version-2.0-2.4/pages-for-subheaders/cluster-logging",title:"Cluster Logging",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/cluster-logging.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/cluster-logging",permalink:"/v2.0-v2.4/pages-for-subheaders/cluster-logging",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/cluster-logging.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Cluster Logging",shortTitle:"Logging",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",metaDescription:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",weight:3,aliases:["/rancher/v2.0-v2.4/en/tasks/logging/","/rancher/v2.0-v2.4/en/cluster-admin/tools/logging","/rancher/v2.0-v2.4/en/logging/legacy/cluster-logging","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/cluster-logging/","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/cluster-logging/"]},sidebar:"tutorialSidebar",previous:{title:"Release Notes",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/istio/release-notes"},next:{title:"Elasticsearch",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/elasticsearch"}},c={},u=[{value:"Related Links",id:"related-links",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Logging is helpful because it allows you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Capture and analyze the state of your cluster"),(0,o.kt)("li",{parentName:"ul"},"Look for trends in your environment"),(0,o.kt)("li",{parentName:"ul"},"Save your logs to a safe location outside of your cluster"),(0,o.kt)("li",{parentName:"ul"},"Stay informed of events like a container crashing, a pod eviction, or a node dying"),(0,o.kt)("li",{parentName:"ul"},"More easily debug and troubleshoot problems")),(0,o.kt)("p",null,"Rancher supports integration with the following services:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Elasticsearch"),(0,o.kt)("li",{parentName:"ul"},"Splunk"),(0,o.kt)("li",{parentName:"ul"},"Kafka"),(0,o.kt)("li",{parentName:"ul"},"Syslog"),(0,o.kt)("li",{parentName:"ul"},"Fluentd")),(0,o.kt)("h1",{id:"how-logging-integrations-work"},"How Logging Integrations Work"),(0,o.kt)("p",null,"Rancher can integrate with popular external services used for event streams, telemetry, or search. These services can log errors and warnings in your Kubernetes infrastructure to a stream."),(0,o.kt)("p",null,"These services collect container log events, which are saved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/containers")," directory on each of your nodes. The service collects both standard and error events. You can then log into your services to review the events collected, leveraging each service's unique features."),(0,o.kt)("p",null,"When configuring Rancher to integrate with these services, you'll have to point Rancher toward the service's endpoint and provide authentication information."),(0,o.kt)("p",null,"Additionally, you'll have the opportunity to enter key-value pairs to filter the log events collected. The service will only collect events for containers marked with your configured key-value pairs."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," You can only configure one logging service per cluster or per project.")),(0,o.kt)("h1",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"The Docker daemon on each node in the cluster should be ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/logging/configure/"},"configured")," with the (default) log-driver: ",(0,o.kt)("inlineCode",{parentName:"p"},"json-file"),". You can check the log-driver by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker info | grep 'Logging Driver'\nLogging Driver: json-file\n")),(0,o.kt)("h1",{id:"logging-scope"},"Logging Scope"),(0,o.kt)("p",null,"You can configure logging at either cluster level or project level."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cluster logging writes logs for every pod in the cluster, i.e. in all the projects. For ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE clusters"),", it also writes logs for all the Kubernetes system components."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/rancher-project-tools/project-logging"},"Project logging")," writes logs for every pod in that particular project.")),(0,o.kt)("p",null,"Logs that are sent to your logging service are from the following locations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pod logs stored at ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/containers"),"."),(0,o.kt)("li",{parentName:"ul"},"Kubernetes system components logs stored at ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/rke/log/"),".")),(0,o.kt)("h1",{id:"enabling-cluster-logging"},"Enabling Cluster Logging"),(0,o.kt)("p",null,"As an ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator")," or ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner"),", you can configure Rancher to send Kubernetes logs to a logging service."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to configure cluster logging.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Tools > Logging")," in the navigation bar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a logging service and enter the configuration. Refer to the specific service for detailed configuration. Rancher supports integration with the following services:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/elasticsearch"},"Elasticsearch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/splunk"},"Splunk")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/kafka"},"Kafka")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/syslog"},"Syslog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/fluentd"},"Fluentd")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional) Instead of using the UI to configure the logging services, you can enter custom advanced configurations by clicking on ",(0,o.kt)("strong",{parentName:"p"},"Edit as File"),", which is located above the logging targets. This link is only visible after you select a logging service."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"With the file editor, enter raw fluentd configuration for any logging service. Refer to the documentation for each logging service on how to setup the output configuration."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/uken/fluent-plugin-elasticsearch"},"Elasticsearch Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluent-plugin-splunk"},"Splunk Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluent-plugin-kafka"},"Kafka Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dlackty/fluent-plugin-remote_syslog"},"Syslog Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.fluentd.org/v1.0/articles/out_forward"},"Fluentd Documentation")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the logging service is using TLS, you also need to complete the ",(0,o.kt)("strong",{parentName:"p"},"SSL Configuration")," form."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Provide the ",(0,o.kt)("strong",{parentName:"p"},"Client Private Key")," and ",(0,o.kt)("strong",{parentName:"p"},"Client Certificate"),". You can either copy and paste them or upload them by using the ",(0,o.kt)("strong",{parentName:"p"},"Read from a file")," button."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can use either a self-signed certificate or one provided by a certificate authority.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can generate a self-signed certificate using an openssl command. For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n'))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you are using a self-signed certificate, provide the ",(0,o.kt)("strong",{parentName:"p"},"CA Certificate PEM"),".")))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional) Complete the ",(0,o.kt)("strong",{parentName:"p"},"Additional Logging Configuration")," form."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Optional:")," Use the ",(0,o.kt)("strong",{parentName:"p"},"Add Field")," button to add custom log fields to your logging configuration. These fields are key value pairs (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"foo=bar"),") that you can use to filter the logs from another system.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Flush Interval"),". This value determines how often ",(0,o.kt)("a",{parentName:"p",href:"https://www.fluentd.org/"},"Fluentd")," flushes data to the logging server. Intervals are measured in seconds.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Include System Log"),". The logs from pods in system project and RKE components will be sent to the target. Uncheck it to exclude the system logs.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Test"),". Rancher sends a test log to the service."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," This button is replaced with ",(0,o.kt)("em",{parentName:"p"},"Dry Run")," if you are using the custom configuration editor. In this case, Rancher calls the fluentd dry run command to validate the configuration."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Rancher is now configured to send logs to the selected service. Log into the logging service so that you can start viewing the logs."),(0,o.kt)("h2",{id:"related-links"},"Related Links"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/"},"Logging Architecture")))}h.isMDXComponent=!0}}]);