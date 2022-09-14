"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63789],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=i(n),k=o,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38217:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],s={title:"DNS",weight:103},p=void 0,i={unversionedId:"troubleshooting/other-troubleshooting-tips/dns",id:"troubleshooting/other-troubleshooting-tips/dns",title:"DNS",description:"\u672c\u6587\u5217\u51fa\u7684\u547d\u4ee4/\u6b65\u9aa4\u53ef\u7528\u4e8e\u68c0\u67e5\u96c6\u7fa4\u4e2d\u7684\u540d\u79f0\u89e3\u6790\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/troubleshooting/other-troubleshooting-tips/dns.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/dns",permalink:"/zh/troubleshooting/other-troubleshooting-tips/dns",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/other-troubleshooting-tips/dns.md",tags:[],version:"current",lastUpdatedAt:1663193805,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"DNS",weight:103},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc",permalink:"/zh/troubleshooting/other-troubleshooting-tips/networking"},next:{title:"Rancher HA",permalink:"/zh/troubleshooting/other-troubleshooting-tips/rancher-ha"}},d={},u=[{value:"\u68c0\u67e5 DNS pod \u662f\u5426\u6b63\u5728\u8fd0\u884c",id:"\u68c0\u67e5-dns-pod-\u662f\u5426\u6b63\u5728\u8fd0\u884c",level:3},{value:"\u68c0\u67e5 DNS \u670d\u52a1\u662f\u5426\u663e\u793a\u6b63\u786e\u7684 cluster-ip",id:"\u68c0\u67e5-dns-\u670d\u52a1\u662f\u5426\u663e\u793a\u6b63\u786e\u7684-cluster-ip",level:3},{value:"\u68c0\u67e5\u662f\u5426\u6b63\u5728\u89e3\u6790\u57df\u540d",id:"\u68c0\u67e5\u662f\u5426\u6b63\u5728\u89e3\u6790\u57df\u540d",level:3},{value:"CoreDNS \u76f8\u5173",id:"coredns-\u76f8\u5173",level:3},{value:"\u68c0\u67e5 CoreDNS \u65e5\u5fd7\u8bb0\u5f55",id:"\u68c0\u67e5-coredns-\u65e5\u5fd7\u8bb0\u5f55",level:4},{value:"\u68c0\u67e5\u914d\u7f6e",id:"\u68c0\u67e5\u914d\u7f6e",level:4},{value:"\u68c0\u67e5 resolv.conf \u4e2d\u7684\u4e0a\u6e38\u540d\u79f0\u670d\u52a1\u5668",id:"\u68c0\u67e5-resolvconf-\u4e2d\u7684\u4e0a\u6e38\u540d\u79f0\u670d\u52a1\u5668",level:4},{value:"\u542f\u7528\u65e5\u5fd7\u67e5\u8be2",id:"\u542f\u7528\u65e5\u5fd7\u67e5\u8be2",level:4},{value:"kube-dns \u76f8\u5173",id:"kube-dns-\u76f8\u5173",level:3},{value:"\u68c0\u67e5 kubedns \u5bb9\u5668\u4e2d\u7684\u4e0a\u6e38\u540d\u79f0\u670d\u52a1\u5668",id:"\u68c0\u67e5-kubedns-\u5bb9\u5668\u4e2d\u7684\u4e0a\u6e38\u540d\u79f0\u670d\u52a1\u5668",level:4}],c={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u5217\u51fa\u7684\u547d\u4ee4/\u6b65\u9aa4\u53ef\u7528\u4e8e\u68c0\u67e5\u96c6\u7fa4\u4e2d\u7684\u540d\u79f0\u89e3\u6790\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u914d\u7f6e\u4e86\u6b63\u786e\u7684 kubeconfig\uff08\u4f8b\u5982\uff0c\u4e3a Rancher HA \u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=$PWD/kube_config_cluster.yml"),"\uff09\u6216\u901a\u8fc7 UI \u4f7f\u7528\u4e86\u5d4c\u5165\u5f0f kubectl\u3002"),(0,a.kt)("p",null,"\u5728\u8fd0\u884c DNS \u68c0\u67e5\u4e4b\u524d\uff0c\u8bf7\u68c0\u67e5\u96c6\u7fa4\u7684",(0,a.kt)("a",{parentName:"p",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#%E9%BB%98%E8%AE%A4-dns-%E6%8F%90%E4%BE%9B%E5%95%86"},"\u9ed8\u8ba4 DNS \u63d0\u4f9b\u5546"),"\uff0c\u5e76\u786e\u4fdd",(0,a.kt)("a",{parentName:"p",href:"/zh/troubleshooting/other-troubleshooting-tips/networking#%E6%A3%80%E6%9F%A5%E8%A6%86%E7%9B%96%E7%BD%91%E7%BB%9C%E6%98%AF%E5%90%A6%E6%AD%A3%E5%B8%B8%E8%BF%90%E8%A1%8C"},"\u8986\u76d6\u7f51\u7edc\u6b63\u5e38\u8fd0\u884c"),"\uff0c\u56e0\u4e3a\u8fd9\u4e5f\u53ef\u80fd\u5bfc\u81f4 DNS \u89e3\u6790\uff08\u90e8\u5206\uff09\u5931\u8d25\u3002"),(0,a.kt)("h3",{id:"\u68c0\u67e5-dns-pod-\u662f\u5426\u6b63\u5728\u8fd0\u884c"},"\u68c0\u67e5 DNS pod \u662f\u5426\u6b63\u5728\u8fd0\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n kube-system get pods -l k8s-app=kube-dns\n")),(0,a.kt)("p",null,"\u4f7f\u7528 CoreDNS \u65f6\u7684\u793a\u4f8b\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                       READY   STATUS    RESTARTS   AGE\ncoredns-799dffd9c4-6jhlz   1/1     Running   0          76m\n")),(0,a.kt)("p",null,"\u4f7f\u7528 kube-dns \u65f6\u7684\u793a\u4f8b\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                        READY   STATUS    RESTARTS   AGE\nkube-dns-5fd74c7488-h6f7n   3/3     Running   0          4m13s\n")),(0,a.kt)("h3",{id:"\u68c0\u67e5-dns-\u670d\u52a1\u662f\u5426\u663e\u793a\u6b63\u786e\u7684-cluster-ip"},"\u68c0\u67e5 DNS \u670d\u52a1\u662f\u5426\u663e\u793a\u6b63\u786e\u7684 cluster-ip"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n kube-system get svc -l k8s-app=kube-dns\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME               TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)         AGE\nservice/kube-dns   ClusterIP   10.43.0.10   <none>        53/UDP,53/TCP   4m13s\n")),(0,a.kt)("h3",{id:"\u68c0\u67e5\u662f\u5426\u6b63\u5728\u89e3\u6790\u57df\u540d"},"\u68c0\u67e5\u662f\u5426\u6b63\u5728\u89e3\u6790\u57df\u540d"),(0,a.kt)("p",null,"\u68c0\u67e5\u662f\u5426\u6b63\u5728\u89e3\u6790\u5185\u90e8\u96c6\u7fa4\u540d\u79f0\uff08\u5728\u672c\u4f8b\u4e2d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes.default"),"\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Server:")," \u540e\u9762\u663e\u793a\u7684 IP \u5e94\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-dns")," \u670d\u52a1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"CLUSTER-IP")," \u4e00\u81f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl run -it --rm --restart=Never busybox --image=busybox:1.28 -- nslookup kubernetes.default\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Server:    10.43.0.10\nAddress 1: 10.43.0.10 kube-dns.kube-system.svc.cluster.local\n\nName:      kubernetes.default\nAddress 1: 10.43.0.1 kubernetes.default.svc.cluster.local\npod "busybox" deleted\n')),(0,a.kt)("p",null,"\u68c0\u67e5\u662f\u5426\u6b63\u5728\u89e3\u6790\u5916\u90e8\u540d\u79f0\uff08\u5728\u672c\u4f8b\u4e2d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"www.google.com"),"\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl run -it --rm --restart=Never busybox --image=busybox:1.28 -- nslookup www.google.com\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Server:    10.43.0.10\nAddress 1: 10.43.0.10 kube-dns.kube-system.svc.cluster.local\n\nName:      www.google.com\nAddress 1: 2a00:1450:4009:80b::2004 lhr35s04-in-x04.1e100.net\nAddress 2: 216.58.211.100 ams15s32-in-f4.1e100.net\npod "busybox" deleted\n')),(0,a.kt)("p",null,"\u5982\u679c\u8981\u68c0\u67e5\u6240\u6709\u4e3b\u673a\u7684\u57df\u540d\u89e3\u6790\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u4ee5\u4e0b\u6587\u4ef6\u53e6\u5b58\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"ds-dnstest.yml"),"\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: dnstest\nspec:\n  selector:\n      matchLabels:\n        name: dnstest\n  template:\n    metadata:\n      labels:\n        name: dnstest\n    spec:\n      tolerations:\n      - operator: Exists\n      containers:\n      - image: busybox:1.28\n        imagePullPolicy: Always\n        name: alpine\n        command: ["sh", "-c", "tail -f /dev/null"]\n        terminationMessagePath: /dev/termination-log\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl create -f ds-dnstest.yml")," \u542f\u52a8\u5b83\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7b49\u5f85 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl rollout status ds/dnstest -w")," \u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},'daemon set "dnstest" successfully rolled out'),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u73af\u5883\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"DOMAIN")," \u914d\u7f6e\u4e3a\u4e3b\u673a\u80fd\u591f\u89e3\u6790\u7684\u5b8c\u5168\u9650\u5b9a\u57df\u540d\uff08Fully Qualified Domain Name\uff0cFQDN\uff09\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"www.google.com"),"\uff0c\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u8ba9\u6bcf\u4e2a\u4e3b\u673a\u4e0a\u7684\u5404\u4e2a\u5bb9\u5668\u89e3\u6790\u914d\u7f6e\u7684\u57df\u540d\uff08\u5b83\u662f\u5355\u884c\u547d\u4ee4\uff09\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'export DOMAIN=www.google.com; echo "=> Start DNS resolve test"; kubectl get pods -l name=dnstest --no-headers -o custom-columns=NAME:.metadata.name,HOSTIP:.status.hostIP | while read pod host; do kubectl exec $pod -- /bin/sh -c "nslookup $DOMAIN > /dev/null 2>&1"; RC=$?; if [ $RC -ne 0 ]; then echo $host cannot resolve $DOMAIN; fi; done; echo "=> End DNS resolve test"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b8c\u6210\u6b64\u547d\u4ee4\u540e\uff0c\u5982\u679c\u4e00\u5207\u6b63\u786e\uff0c\u5219\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"=> Start DNS resolve test\n=> End DNS resolve test\n")))),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728\u8f93\u51fa\u4e2d\u770b\u5230\u9519\u8bef\uff0c\u5219\u8868\u793a\u4e3b\u673a\u65e0\u6cd5\u89e3\u6790\u7ed9\u5b9a\u7684 FQDN\u3002"),(0,a.kt)("p",null,"\u5728\u4ee5\u4e0b\u9519\u8bef\u8f93\u51fa\u793a\u4f8b\u4e2d\uff0cIP \u4e3a 209.97.182.150 \u7684\u4e3b\u673a\u963b\u6b62\u4e86 UDP \u7aef\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"=> Start DNS resolve test\ncommand terminated with exit code 1\n209.97.182.150 cannot resolve www.google.com\n=> End DNS resolve test\n")),(0,a.kt)("p",null,"\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delete ds/dnstest")," \u6e05\u7406 alpine DaemonSet\u3002"),(0,a.kt)("h3",{id:"coredns-\u76f8\u5173"},"CoreDNS \u76f8\u5173"),(0,a.kt)("h4",{id:"\u68c0\u67e5-coredns-\u65e5\u5fd7\u8bb0\u5f55"},"\u68c0\u67e5 CoreDNS \u65e5\u5fd7\u8bb0\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n kube-system logs -l k8s-app=kube-dns\n")),(0,a.kt)("h4",{id:"\u68c0\u67e5\u914d\u7f6e"},"\u68c0\u67e5\u914d\u7f6e"),(0,a.kt)("p",null,"CoreDNS \u914d\u7f6e\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u4e2d configmap \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"coredns")," \u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n kube-system get configmap coredns -o go-template={{.data.Corefile}}\n")),(0,a.kt)("h4",{id:"\u68c0\u67e5-resolvconf-\u4e2d\u7684\u4e0a\u6e38\u540d\u79f0\u670d\u52a1\u5668"},"\u68c0\u67e5 resolv.conf \u4e2d\u7684\u4e0a\u6e38\u540d\u79f0\u670d\u52a1\u5668"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u914d\u7f6e\u5728\u4e3b\u673a\uff08\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," \u91cc\uff09\u4e0a\u7684\u540d\u79f0\u670d\u52a1\u5668\u4f1a\u7528\u4f5c CoreDNS \u7684\u4e0a\u6e38\u540d\u79f0\u670d\u52a1\u5668\u3002\u4f60\u53ef\u4ee5\u5728\u4e3b\u673a\u4e0a\u68c0\u67e5\u6b64\u6587\u4ef6\uff0c\u6216\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"dnsPolicy")," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Default"),"\uff08\u5c06\u7ee7\u627f\u5176\u4e3b\u673a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf"),"\uff09\u5e76\u8fd0\u884c\u4ee5\u4e0b Pod\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl run -i --restart=Never --rm test-${RANDOM} --image=ubuntu --overrides=\'{"kind":"Pod", "apiVersion":"v1", "spec": {"dnsPolicy":"Default"}}\' -- sh -c \'cat /etc/resolv.conf\'\n')),(0,a.kt)("h4",{id:"\u542f\u7528\u65e5\u5fd7\u67e5\u8be2"},"\u542f\u7528\u65e5\u5fd7\u67e5\u8be2"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 configmap ",(0,a.kt)("inlineCode",{parentName:"p"},"coredns")," \u7684 Corefile \u914d\u7f6e\u4e2d\u542f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://coredns.io/plugins/log/"},"log plugin")," \u6765\u542f\u7528\u65e5\u5fd7\u67e5\u8be2\u3002\u4e3a\u6b64\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl -n kube-system edit configmap coredns"),"\uff0c\u6216\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u66ff\u6362\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get configmap -n kube-system coredns -o json | sed -e 's_loadbalance_log\\\\n    loadbalance_g' | kubectl apply -f -\n")),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u6240\u6709\u67e5\u8be2\u90fd\u4f1a\u8bb0\u5165\u65e5\u5fd7\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"#%E6%A3%80%E6%9F%A5-coredns-%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95"},"\u68c0\u67e5 CoreDNS \u65e5\u5fd7\u8bb0\u5f55"),"\u4e2d\u7684\u547d\u4ee4\u8fdb\u884c\u68c0\u67e5\u3002"),(0,a.kt)("h3",{id:"kube-dns-\u76f8\u5173"},"kube-dns \u76f8\u5173"),(0,a.kt)("h4",{id:"\u68c0\u67e5-kubedns-\u5bb9\u5668\u4e2d\u7684\u4e0a\u6e38\u540d\u79f0\u670d\u52a1\u5668"},"\u68c0\u67e5 kubedns \u5bb9\u5668\u4e2d\u7684\u4e0a\u6e38\u540d\u79f0\u670d\u52a1\u5668"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u914d\u7f6e\u5728\u4e3b\u673a\uff08\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," \u91cc\uff09\u4e0a\u7684\u540d\u79f0\u670d\u52a1\u5668\u4f1a\u7528\u4f5c kube-dns \u7684\u4e0a\u6e38\u540d\u79f0\u670d\u52a1\u5668\u3002\u6709\u65f6\uff0c\u4e3b\u673a\u4f1a\u8fd0\u884c\u672c\u5730\u7f13\u5b58 DNS \u540d\u79f0\u670d\u52a1\u5668\uff0c\u8fd9\u610f\u5473\u7740 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," \u4e2d\u7684\u5730\u5740\u5c06\u6307\u5411 Loopback \u8303\u56f4\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.0/8"),"\uff09\u5185\u7684\u5730\u5740\uff0c\u800c\u5bb9\u5668\u5c06\u65e0\u6cd5\u8bbf\u95ee\u8be5\u8303\u56f4\u3002\u5bf9\u4e8e Ubuntu 18.04\uff0c\u8fd9\u662f\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd-resolved")," \u8fdb\u884c\u7684\u3002\u6211\u4eec\u4f1a\u68c0\u6d4b ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd-resolved")," \u662f\u5426\u6b63\u5728\u8fd0\u884c\uff0c\u5e76\u81ea\u52a8\u4f7f\u7528\u5177\u6709\u6b63\u786e\u4e0a\u6e38\u540d\u79f0\u670d\u52a1\u5668\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," \u6587\u4ef6\uff08\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"/run /systemd/resolve/resolv.conf"),"\uff09\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5 kubedns \u5bb9\u5668\u4f7f\u7528\u7684\u4e0a\u6e38\u540d\u79f0\u670d\u52a1\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl -n kube-system get pods -l k8s-app=kube-dns --no-headers -o custom-columns=NAME:.metadata.name,HOSTIP:.status.hostIP | while read pod host; do echo "Pod ${pod} on host ${host}"; kubectl -n kube-system exec $pod -c kubedns cat /etc/resolv.conf; done\n')),(0,a.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Pod kube-dns-667c7cb9dd-z4dsf on host x.x.x.x\nnameserver 1.1.1.1\nnameserver 8.8.4.4\n")),(0,a.kt)("p",null,"\u5982\u679c\u8f93\u51fa\u663e\u793a Loopback \u8303\u56f4\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.0/8"),"\uff09\u5185\u7684\u5730\u5740 \uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u89e3\u51b3\u6b64\u95ee\u9898\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u5728\u96c6\u7fa4\u8282\u70b9\u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/resolv.conf")," \u5217\u51fa\u4e86\u6b63\u786e\u7684\u540d\u79f0\u670d\u52a1\u5668\u3002\u5982\u679c\u9700\u8981\u4e86\u89e3\u5982\u4f55\u8fdb\u884c\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u6587\u6863\u3002\u8bf7\u786e\u4fdd\u4f60\u5728\u914d\u7f6e\u96c6\u7fa4\u4e4b\u524d\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u6216\u5728\u4fee\u6539\u540e\u91cd\u542f\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"kubelet")," \u6765\u4f7f\u7528\u4e0d\u540c\u7684\u6587\u4ef6\u8fdb\u884c\u540d\u79f0\u89e3\u6790\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"extra_args"),"\uff08\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"li"},"/run/resolvconf/resolv.conf")," \u662f\u5177\u6709\u6b63\u786e\u540d\u79f0\u670d\u52a1\u5668\u7684\u6587\u4ef6\uff09\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'services:\n  kubelet:\n    extra_args:\n      resolv-conf: "/run/resolvconf/resolv.conf"\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7531\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," \u5728\u5bb9\u5668\u5185\u8fd0\u884c\uff0c\u56e0\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr")," \u4e2d\u6587\u4ef6\u7684\u8def\u5f84\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," \u5bb9\u5668\u5185\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/host/etc")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"/host/usr")," \u4e2d\u3002"))),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/cluster-configuration#%E4%BD%BF%E7%94%A8-yaml-%E7%BC%96%E8%BE%91%E9%9B%86%E7%BE%A4"},"\u4f7f\u7528 YAML \u7f16\u8f91\u96c6\u7fa4"),"\u4e86\u89e3\u5982\u4f55\u5e94\u7528\u6b64\u4fee\u6539\u3002\u96c6\u7fa4\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u4f60\u5fc5\u987b\u5220\u9664 kube-dns pod \u4ee5\u6fc0\u6d3b pod \u4e2d\u7684\u65b0\u8bbe\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl delete pods -n kube-system -l k8s-app=kube-dns\npod "kube-dns-5fd74c7488-6pwsf" deleted\n')),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5",(0,a.kt)("a",{parentName:"p",href:"#%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E6%AD%A3%E5%9C%A8%E8%A7%A3%E6%9E%90%E5%9F%9F%E5%90%8D"},"\u68c0\u67e5\u662f\u5426\u6b63\u5728\u89e3\u6790\u57df\u540d"),"\u6765\u5c1d\u8bd5\u518d\u6b21\u89e3\u6790\u540d\u79f0\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u68c0\u67e5\u96c6\u7fa4\u4e2d\u7684 kube-dns \u914d\u7f6e\uff08\u4f8b\u5982\uff0c\u68c0\u67e5\u662f\u5426\u914d\u7f6e\u4e86\u4e0d\u540c\u7684\u4e0a\u6e38\u540d\u79f0\u670d\u52a1\u5668\uff09\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5217\u51fa kube-dns \u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl -n kube-system get configmap kube-dns -o go-template=\'{{range $key, $value := .data}}{{ $key }}{{":"}}{{ $value }}{{"\\n"}}{{end}}\'\n')),(0,a.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'upstreamNameservers:["1.1.1.1"]\n')))}k.isMDXComponent=!0}}]);