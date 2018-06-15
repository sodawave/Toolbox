webpackJsonp([14],{"+nwc":function(e,t){},"/daW":function(e,t){},0:function(e,t,n){e.exports=n("nplA")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"3Puz":function(e,t){},4:function(e,t){},"4Th3":function(e,t){},BwlH:function(e,t){},DEN3:function(e,t){e.exports={platform:{label:"Platform",icon:"icon-flespi2-01",isDrawable:!0,logs:{vuexModuleName:"platformLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"host",width:150,display:!0,description:"Connected device's address (source) or IP address from which HTTP request was received (host)"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},channels:{label:"Channels",icon:"merge_type",acl:["protocols","channels"],isDrawable:!0,logs:{vuexModuleName:"channelsLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:400,display:!0,description:"Log event code and description"},{name:"ident",width:150,display:!0,description:"Connected device's identification string"},{name:"msgs",title:"messages",width:85,display:!0,description:"Number of messages received"},{name:"recv",title:"received",width:85,display:!0,description:"Number of bytes received"},{name:"send",title:"sent",width:85,display:!0,description:"Number of bytes sent"},{name:"host",width:150,display:!0,description:"Connected device's address (source) or IP address from which HTTP request was received (host)"},{name:"duration",width:85,display:!0,description:"Connection duration in seconds"},{name:"transport",width:85,display:!0,description:"Connected device's transport: tcp, udp, http etc"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}},messages:{vuexModuleName:"channelsMessages",actions:[{icon:"mdi-content-copy",label:"copy",classes:"",type:"copy"}],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right",needShowDate:!1},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},devices:{label:"Devices",icon:"mdi-developer-board",acl:["devices"],isDrawable:!0,logs:{vuexModuleName:"devicesLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:400,display:!0,description:"Log event code and description"},{name:"name",title:"setting",width:80,display:!0,description:"Setting name"},{name:"ident",width:150,display:!0,description:"Connected device's identification string"},{name:"msgs",title:"messages",width:85,display:!0,description:"Number of messages received"},{name:"recv",title:"received",width:85,display:!0,description:"Number of bytes received"},{name:"send",title:"sent",width:85,display:!0,description:"Number of bytes sent"},{name:"source",width:150,display:!0,description:"Connected device's address"},{name:"host",width:150,display:!0,description:"IP address from which HTTP request was received"},{name:"duration",width:85,display:!0,description:"Connection duration in seconds"},{name:"transport",width:85,display:!0,description:"Connected device's transport: tcp, udp, http etc"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}},messages:{vuexModuleName:"devicesMessages",actions:[{icon:"mdi-content-copy",label:"copy",classes:"",type:"copy"}],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},streams:{label:"Streams",icon:"mdi-call-split",acl:["streams"],isDrawable:!0,logs:{vuexModuleName:"streamsLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"messages",width:100,display:!0,description:"Number of messages has sent"},{name:"host",width:150,display:!0,description:"IP address from which HTTP request was received"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},modems:{label:"Modems",icon:"router",acl:["modems"],isDrawable:!0,logs:{vuexModuleName:"modemsLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"address",width:100,display:!0,description:"SMS source address or SMS destination address"},{name:"type",width:100,display:!0,description:"hex or text"},{name:"text",width:150,display:!0,description:"textual SMS contents"},{name:"hex",width:150,display:!0,description:"hex representation of binary SMS contents"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},containers:{label:"Containers",icon:"featured_play_list",acl:["containers"],isDrawable:!0,logs:{vuexModuleName:"containersLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"host",width:80,display:!0,description:"IP address from which HTTP request was received"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},abques:{label:"Abques",icon:"reorder",acl:["abques"],isDrawable:!0,logs:{vuexModuleName:"abquesLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"host",width:80,display:!0,description:"IP address from which HTTP request was received"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},mqtt:{label:"MQTT",icon:"mdi-access-point-network",acl:["mqtt"],isDrawable:!0,logs:{vuexModuleName:"mqttLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"client_id",width:150,display:!0,description:"session client id"},{name:"published",width:80,display:!0,description:"amount of messages published by session"},{name:"received",width:80,display:!0,description:"amount of messages received by session"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},cdns:{label:"CDNS",icon:"mdi-harddisk",acl:["cdns"],isDrawable:!0,logs:{vuexModuleName:"cdnsLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"host",width:150,display:!0,description:"IP address from which HTTP request was received"},{name:"mime",width:80,display:!0,description:"mime type of file"},{name:"name",width:250,display:!0,description:"name of file"},{name:"size",width:80,display:!0,description:""}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}}}},JsEP:function(e,t){},N12Q:function(e,t){},R58i:function(e,t){},VOGp:function(e,t,n){e.exports=n.p+"img/toolbox.1da4d62.png"},"k+C4":function(e,t,n){var o={"./abques/Index":["tTYa",12],"./cdns/Index":["XKIo",11],"./channels/Index":["dJK8",3],"./channels/messages/Index":["rO7b",4],"./containers/Index":["VXJc",10],"./devices/Index":["NEZ1",2],"./devices/messages/Index":["q0Qa",5],"./logs/Index":["mlKh",13],"./modems/Index":["jVoy",9],"./mqtt/Index":["yAXA",8],"./platform/Index":["Gm73",7],"./streams/Index":["0uPY",6]};function i(e){var t=o[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}i.keys=function(){return Object.keys(o)},i.id="k+C4",e.exports=i},nplA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),i=n.n(o),s=(n("30VO"),n("/5sW")),a=n("7109");s.default.use(a.R,{components:{QLayout:a.q,QLayoutHeader:a.s,QLayoutDrawer:a.r,QPageContainer:a.y,QPage:a.x,QToolbar:a.L,QToolbarTitle:a.M,QBtn:a.e,QIcon:a.j,QList:a.t,QListHeader:a.u,QItem:a.m,QItemMain:a.n,QItemSide:a.o,QItemTile:a.p,QInput:a.l,QProgress:a.A,QWindowResizeObservable:a.O,QResizeObservable:a.B,QTabs:a.J,QTab:a.H,QTabPane:a.I,QRouteTab:a.C,QPopover:a.z,QInnerLoading:a.k,QSpinnerGears:a.G,QModal:a.v,QModalLayout:a.w,QTooltip:a.N,QSelect:a.E,QChip:a.g,QResizeObservable:a.B,QSlider:a.F,QToggle:a.K,QDatetime:a.h,QSearch:a.D,QSlider:a.F,QField:a.i,QCheckbox:a.f},plugins:{Notify:a.d,Cookies:a.a,Dialog:a.b,LocalStorage:a.c}});n("L4dm"),n("hAPP"),n("59Iv"),n("3Puz"),n("N12Q");var r={name:"offline",data:function(){return{intervalId:0}},created:function(){var e=this;this.intervalId=setInterval(function(){e.$store.dispatch("checkConnection")},5e3)}},d=n("XyMi");var c=function(e){n("4Th3")},l={name:"App",components:{Offline:Object(d.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$store.state.offline||e.$store.state.socketOffline?n("div",{staticClass:"offline-page window-height window-width bg-light column items-center no-wrap"},[n("div",{staticClass:"offline-back"},[n("div",{staticClass:"offline-code"}),e._v(" "),n("div",{staticClass:"offline-line"},e._l(Array(20),function(t){return n("span",{key:t},[e._v("offline")])}))])]):e._e()},[],!1,c,null,null).exports}};var u=function(e){n("/daW")},p=Object(d.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"q-app"}},[t("router-view"),this._v(" "),t("offline")],1)},[],!1,u,null,null).exports,f=n("/ocq"),h=n("Gu7T"),m=n.n(h),v=n("fZjL"),w=n.n(v),g=n("DEN3"),b=n.n(g);var y,k=[{path:"/",component:function(){return n.e(0).then(n.bind(null,"yoYR"))},children:[].concat(m()((y=b.a,w()(y).reduce(function(e,t){return e.push({path:t,component:function(){return n("k+C4")("./"+t+"/Index")},meta:{moduleName:t}}),e.push({path:t+"/:id",component:function(){return n("k+C4")("./"+t+"/Index")},meta:{moduleName:t}}),e},[]))),[{path:"view/:type/:id",name:"module",component:function(){return n.e(0).then(n.bind(null,"yoYR"))}}])},{path:"/token/:token/type/:type/id/:id",component:function(){return n.e(0).then(n.bind(null,"yoYR"))}},{path:"/token/:token/group/:group",component:function(){return n.e(0).then(n.bind(null,"yoYR"))}},{path:"/token/:token/type/:type/id/:id/fullscreen/:fullscreen",component:function(){return n.e(0).then(n.bind(null,"yoYR"))}},{path:"/token/:token/type/:type/id/:id/fullscreen/:fullscreen/noselect/:noselect",component:function(){return n.e(0).then(n.bind(null,"yoYR"))}},{path:"/login",component:function(){return n.e(1).then(n.bind(null,"P7ry"))}},{path:"/login/:token",component:function(){return n.e(1).then(n.bind(null,"P7ry"))}}];s.default.use(f.a);var S,I,x,C,L=new f.a({mode:"hash",base:"/",scrollBehavior:function(){return{y:0}},routes:k}),T=n("mvHQ"),_=n.n(T),P=n("NYxO"),Q=n("Xxa5"),M=n.n(Q),D=n("exGp"),N=n.n(D),E={getItems:(S=N()(M.a.mark(function e(t,n){var o,i,a,r,d,c,l,u,p,f=t.state,h=t.commit;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=59;break}o="",i={},a={},e.t0=n,e.next="devices"===e.t0?5:"channels"===e.t0?9:"streams"===e.t0?13:"modems"===e.t0?17:"containers"===e.t0?21:"abques"===e.t0?25:"cdns"===e.t0?29:33;break;case 5:return o="/gw/devices/all",i={fields:"id,name,ident"},a={fields:"item_data",filter:"event_origin=gw/devices/*,event_code=3"},e.abrupt("break",33);case 9:return o="/gw/channels/all",i={fields:"id,name,uri,protocol_name"},a={fields:"item_data",filter:"event_origin=gw/channels/*,event_code=3"},e.abrupt("break",33);case 13:return o="/gw/streams/all",i={fields:"id,name,configuration"},a={fields:"item_data",filter:"event_origin=gw/streams/*,event_code=3"},e.abrupt("break",33);case 17:return o="/gw/modems/all",i={fields:"id,name,configuration"},a={fields:"item_data",filter:"event_origin=gw/modems/*,event_code=3"},e.abrupt("break",33);case 21:return o="/storage/containers/all",i={fields:"id,name"},a={fields:"item_data",filter:"event_origin=storage/containers/*,event_code=3"},e.abrupt("break",33);case 25:return o="/storage/abques/all",i={fields:"id,name"},a={fields:"item_data",filter:"event_origin=storage/abques/*,event_code=3"},e.abrupt("break",33);case 29:return o="/storage/cdns/all",i={fields:"id,name"},a={fields:"item_data",filter:"event_origin=storage/cdns/*,event_code=3"},e.abrupt("break",33);case 33:if(!f.token){e.next=59;break}return e.prev=34,void 0!==f.isLoading&&(f.isLoading=!0),e.next=38,s.default.connector.http.get(o,{params:i});case 38:if(r=e.sent,d=r.data,r.errors&&r.errors.forEach(function(e){h("addError",e.reason)}),c=[],1!==f.tokenInfo.access.type){e.next=49;break}return e.next=45,s.default.connector.platform.getCustomerLogs({data:_()(a)});case 45:l=e.sent,(u=l.data).errors&&u.errors.forEach(function(e){h("addError",e.reason)}),c=u.result&&u.result.length?u.result:[];case 49:p=[].concat(m()(d.result),m()(c.map(function(e){var t=e.item_data;return t.deleted=!0,t}))),h("setItems",p),void 0!==f.isLoading&&(f.isLoading=!1),e.next=59;break;case 54:e.prev=54,e.t1=e.catch(34),h("reqFailed",e.t1),h("setItems",[]),void 0!==f.isLoading&&(f.isLoading=!1);case 59:case"end":return e.stop()}},e,this,[[34,54]])})),function(e,t){return S.apply(this,arguments)}),checkConnection:(I=N()(M.a.mark(function e(t){var n=t.state,o=t.commit;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.default.connector.http.external.get("./statics/icons/favicon-16x16.png?_="+(new Date).getTime());case 3:200===e.sent.status&&n.offline&&o("setOfflineFlag",!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n.offline||o("setOfflineFlag",!0);case 11:case"end":return e.stop()}},e,this,[[0,7]])})),function(e){return I.apply(this,arguments)}),getTokenInfo:(x=N()(M.a.mark(function e(t,n){var o,i,a,r=t.state,d=t.commit;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.default.connector.auth.getInfo();case 3:(o=e.sent).data&&o.data.errors&&o.data.errors.forEach(function(e){d("addError",e.reason)}),i=o.data.result[0],d("setTokenInfo",i),e.t0=i.access.type,e.next=0===e.t0?10:1===e.t0?12:2===e.t0?13:17;break;case 10:return s.default.set(r.config.platform,"isDrawable",!1),e.abrupt("break",17);case 12:return e.abrupt("break",17);case 13:return s.default.set(r.config.platform,"isDrawable",!1),a=i.access.acl.reduce(function(e,t){if("gw"===t.uri)return t.methods.includes("GET")?[].concat(m()(e),["channels","devices","streams","modems","protocols"]):e;if("storage"===t.uri)return t.methods.includes("GET")?[].concat(m()(e),["containers","abques","cdns"]):e;var n=t.uri.split("/")[1]||t.uri.split("/")[0];return!e.includes(n)&&(!t.methods||t.methods&&t.methods.includes("GET"))&&e.push(n),e},[]),w()(r.config).forEach(function(e){var t=r.config[e];if(!t.acl)return!1;t.acl.reduce(function(e,t){return e&&a.includes(t)},!0)||(r.config[e].isDrawable=!1)}),e.abrupt("break",17);case 17:e.next=24;break;case 19:e.prev=19,e.t1=e.catch(0),d("setToken",""),d("reqFailed",e.t1);case 24:case"end":return e.stop()}},e,this,[[0,19]])})),function(e,t){return x.apply(this,arguments)}),getLoginProviders:(C=N()(M.a.mark(function e(t){var n,o,i=t.commit;t.state;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.default.connector.http.auth.oauth.providers.get();case 3:n=e.sent,(o=n.data.result[0]).email=s.default.connector.httpConfig.server+(s.default.connector.httpConfig.port?":"+s.default.connector.httpConfig.port:"")+"/#/login/",i("setLoginProviders",o),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),i("reqFailed",e.t0);case 13:case"end":return e.stop()}},e,this,[[0,9]])})),function(e){return C.apply(this,arguments)})};function q(e,t){s.default.set(e,"offline",t)}function F(e){var t=a.a.get("X-Flespi-Token"),n=a.c.get.item("X-Flespi-Token");t&&n&&t===n&&a.a.remove("X-Flespi-Token"),a.c.remove("X-Flespi-Token"),s.default.connector.token="",s.default.set(e,"token",""),R(e),O(e,b.a)}function O(e,t){s.default.set(e,"config",t)}function H(e,t){a.d.create({type:"negative",icon:"warning",message:""+t,timeout:1e3}),e.newNotificationCounter++,e.errors.push(t)}function A(e){e.errors=[]}function R(e){e.tokenInfo={}}var X={reqStart:function(e){},setItems:function(e,t){s.default.set(e,"items",t)},reqFailed:function(e,t){if(t.response&&t.response.status)switch(t.response.status){case 0:q(e,!0),s.default.set(e,"token","");break;case 401:F(e);break;default:t.response.data&&t.response.data.errors&&t.response.data.errors.length&&t.response.data.errors.forEach(function(t){H(e,t.reason)})}else H(e,t.message)},setToken:function(e,t){var n=t.replace("FlespiToken ","");if(n===e.token)return!1;t&&n.match(/^[a-z0-9]+$/i)?a.c.set("X-Flespi-Token",n):(n="",F(e)),s.default.connector.token="FlespiToken "+n,s.default.set(e,"token",n),A(e)},clearToken:F,setOfflineFlag:q,clearItems:function(e){s.default.set(e,"items",[])},setConfig:O,addError:H,clearErrors:A,setTokenInfo:function(e,t){s.default.set(e,"tokenInfo",t)},clearTokenInfo:R,setSocketOffline:function(e,t){s.default.set(e,"socketOffline",t)},clearNotificationCounter:function(e){e.newNotificationCounter=0},setLoginProviders:function(e,t){s.default.set(e,"providers",t)}};s.default.use(P.a);var G={providers:{},token:"",items:[],offline:!1,socketOffline:!1,isLoading:!1,config:JSON.parse(_()(b.a)),errors:[],tokenInfo:{},newNotificationCounter:0},Y=new P.a.Store({state:G,actions:E,mutations:X}),j=n("TXmL"),z={en:{failed:"Action failed",success:"Action was successful"}},V=n("LarL"),B=n.n(V),J={socketConfig:{clientId:"toolbox-"+Math.random().toString(16).substr(2,8)}};-1===window.location.host.indexOf("localhost:9004")&&-1===window.location.host.indexOf("localhost:9005")&&-1===window.location.host.indexOf("localhost:7004")||(J={httpConfig:{server:"https://localhost",port:9005},socketConfig:{server:"wss://localhost:9017",clientId:"toolbox-"+Math.random().toString(16).substr(2,8)}});var $=n("wvfG"),K=n.n($),W=(n("BwlH"),n("v5o6")),Z=n.n(W);s.default.config.productionTip=!1;var U=i()({el:"#q-app",router:L,store:Y},p),ee=[];ee.push(function(e){var t=e.app;e.Vue.use(j.a),t.i18n=new j.a({locale:"en",fallbackLocale:"en",messages:z})}),ee.push(function(e){var t=e.Vue;t.config.productionTip=!1,t.use(B.a,J)}),ee.push(function(e){e.Vue.use(K.a)}),ee.push(function(){}),ee.forEach(function(e){return e({app:U,router:L,store:Y,Vue:s.default})}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){Z.a.attach(document.body)},!1),new s.default(U)}},[0]);