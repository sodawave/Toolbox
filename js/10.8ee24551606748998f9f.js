webpackJsonp([10,15,16,17],{129:function(t,e,i){"use strict";function a(t){i(205)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(193),n=i(207),s=i(47),o=a,l=s(r.a,n.a,!1,o,null,null);e.default=l.exports},130:function(t,e,i){"use strict";function a(t){i(208)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(194),n=i(210),s=i(47),o=a,l=s(r.a,n.a,!1,o,null,null);e.default=l.exports},131:function(t,e,i){"use strict";function a(t){i(211)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(195),n=i(213),s=i(47),o=a,l=s(r.a,n.a,!1,o,null,null);e.default=l.exports},134:function(t,e,i){"use strict";function a(t){i(227)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(218),n=i(234),s=i(47),o=a,l=s(r.a,n.a,!1,o,null,null);e.default=l.exports},143:function(t,e){e.f={}.propertyIsEnumerable},144:function(t,e){e.f=Object.getOwnPropertySymbols},148:function(t,e,i){t.exports={default:i(149),__esModule:!0}},149:function(t,e,i){i(150),t.exports=i(2).Object.assign},150:function(t,e,i){var a=i(4);a(a.S+a.F,"Object",{assign:i(151)})},151:function(t,e,i){"use strict";var a=i(27),r=i(144),n=i(143),s=i(18),o=i(51),l=Object.assign;t.exports=!l||i(15)(function(){var t={},e={},i=Symbol(),a="abcdefghijklmnopqrst";return t[i]=7,a.split("").forEach(function(t){e[t]=t}),7!=l({},t)[i]||Object.keys(l({},e)).join("")!=a})?function(t,e){for(var i=s(t),l=arguments.length,c=1,u=r.f,d=n.f;l>c;)for(var p,m=o(arguments[c++]),h=u?a(m).concat(u(m)):a(m),f=h.length,b=0;f>b;)d.call(m,p=h[b++])&&(i[p]=m[p]);return i}:l},193:function(t,e,i){"use strict";var a=i(49),r=i.n(a),n=i(26);e.a={props:["object"],data:function(){return{search:""}},computed:{filteredObject:function(){var t=this;return r()(this.object).reduce(function(e,i){return-1!==i.indexOf(t.search)&&(e[i]=t.object[i]),e},{})}},components:{QList:n.q,QListHeader:n.r,QItem:n.l,QItemMain:n.m,QItemSide:n.n,QItemTile:n.o,QTooltip:n.H,QIcon:n.i,QInput:n.k}}},194:function(t,e,i){"use strict";var a=i(49),r=i.n(a),n=i(26);e.a={props:["config","inverted"],data:function(){return{tabModel:""}},computed:{hasData:function(){var t=this;return r()(this.config).reduce(function(e,i){return t.config[i].data&&(e=!0),e},!1)}},methods:{open:function(){this.$refs.modal.open()},openHandler:function(){var t=this,e=0,i=r()(this.config).some(function(i,a){return e=a,!!t.config[i].data});this.tabModel=i?r()(this.config)[e]:r()(this.config)[0]?r()(this.config)[e]:""}},components:{QModal:n.s,QModalLayout:n.t,QToolbar:n.F,QBtn:n.e,QTabs:n.D,QTab:n.B,QTabPane:n.C}}},195:function(t,e,i){"use strict";var a=i(49),r=i.n(a),n=i(26);e.a={name:"json-tree",props:{data:[Object,Array],inverted:!0},data:function(){for(var t=[],e=r()(this.data).length,i=0,a=e;i<a;i++)t.push(!0);return{showObj:t}},computed:{theme:function(){return void 0!==this.inverted?{label:"text-pink-4",typeString:"text-red-3",typeNumberOrBool:"text-blue-3",typeEmpty:"text-grey-5"}:{label:"text-pink-8",typeString:"text-red-6",typeNumberOrBool:"text-blue-6",typeEmpty:"text-grey-6"}}},methods:{toggle:function(t){this.showObj[t]=!this.showObj[t],this.showObj.splice(t,1,this.showObj[t])}},components:{QIcon:n.i}}},204:function(t,e,i){"use strict";e.__esModule=!0;var a=i(148),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t}},205:function(t,e,i){var a=i(206);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(124)("20163b34",a,!0)},206:function(t,e,i){e=t.exports=i(123)(void 0),e.push([t.i,".no-top-bottom-margin{margin-bottom:0;margin-top:0}",""])},207:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("q-item",[i("q-item-side",{attrs:{left:""}},[i("q-icon",{attrs:{color:"white",size:"1.8rem",name:"mdi-view-list"}})],1),t._v(" "),i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis text-bold text-white",attrs:{label:""}},[t._v("Message")])],1),t._v(" "),i("q-item-side",{attrs:{right:""}},[i("q-icon",{staticClass:"pull-right cursor-pointer",attrs:{color:"white",name:"mdi-close",size:"1.8rem"},on:{click:function(e){t.$emit("close")}}})],1)],1),t._v(" "),i("q-item",[i("q-item-main",[i("q-input",{staticClass:"no-top-bottom-margin",attrs:{type:"text",inverted:"",color:"none","float-label":"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),i("q-list",{attrs:{separator:"","no-border":""}},[Object.keys(t.object).length&&Object.keys(t.filteredObject).length?t._e():i("q-item",[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis text-bold text-center text-white",attrs:{label:""}},[t._v("Message is empty")]),t._v(" "),Object.keys(t.object).length?t._e():i("q-item-tile",{staticClass:"ellipsis text-center text-white",attrs:{sublabel:""}},[t._v("Message has not fields")]),t._v(" "),!Object.keys(t.filteredObject).length&&this.search?i("q-item-tile",{staticClass:"ellipsis text-center text-white",attrs:{sublabel:""}},[t._v("Nothing found on your search")]):t._e()],1)],1),t._v(" "),t._l(Object.keys(t.filteredObject),function(e,a){return Object.keys(t.filteredObject).length?i("q-item",{key:e},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis text-bold text-white",attrs:{label:""}},[t._v(t._s(e)),i("q-tooltip",[t._v(t._s(e))])],1),t._v(" "),i("q-item-tile",{staticClass:"ellipsis text-white",attrs:{sublabel:""}},[t._v(t._s(t.filteredObject[e])),i("q-tooltip",[t._v(t._s(t.filteredObject[e]))])],1)],1)],1):t._e()})],2)],1)},r=[],n={render:a,staticRenderFns:r};e.a=n},208:function(t,e,i){var a=i(209);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(124)("0a14a046",a,!0)},209:function(t,e,i){e=t.exports=i(123)(void 0),e.push([t.i,".modal-tabs .q-tabs{height:100%}.modal-tabs .q-tabs .q-tabs-panes{height:100%;overflow:auto}",""])},210:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-modal",{ref:"modal",attrs:{"content-css":{maxWidth:"100vw",maxHeight:"100vh",width:"700px",height:"700px",padding:"50px 0"},"content-classes":{"bg-dark":void 0!==t.inverted,"modal-tabs":!0}},on:{open:t.openHandler,close:function(e){t.tabModel=""}}},[i("q-modal-layout",[i("q-toolbar",{staticStyle:{"justify-content":"flex-end"},attrs:{slot:"footer",color:"dark"},slot:"footer"},[i("q-btn",{attrs:{flat:""},on:{click:function(e){t.$refs.modal.close()}}},[t._v("Close")])],1),t._v(" "),t.hasData?t._e():i("div",{staticClass:"text-center",class:{"text-white":void 0!==t.inverted},staticStyle:{"font-size":"2rem","margin-top":"50px"}},[t._v("No additional data available")]),t._v(" "),t.hasData?i("q-tabs",{attrs:{color:"dark","no-pane-border":""},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[t._l(t.config,function(e,a,r){return e.data?[i("q-tab",{attrs:{slot:"title",name:a,label:e.title},slot:"title"}),t._v(" "),i("q-tab-pane",{attrs:{name:a}},[e.wrapper&&"object"==typeof e.wrapper?i(e.wrapper,{tag:"component",attrs:{data:e.data,inverted:t.inverted}}):t._e(),t._v(" "),e.wrapper&&"string"==typeof e.wrapper?i(e.wrapper,{tag:"component",class:{"text-white":void 0!==t.inverted}},[t._v(t._s(e.data))]):t._e(),t._v(" "),e.wrapper?t._e():i("div",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(e.data))])],1)]:t._e()})],2):t._e()],1)],1)},r=[],n={render:a,staticRenderFns:r};e.a=n},211:function(t,e,i){var a=i(212);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(124)("650d12cf",a,!0)},212:function(t,e,i){e=t.exports=i(123)(void 0),e.push([t.i,".margin-left{margin-left:16px}",""])},213:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(t.data.constructor===Array?"[":"{"))]),t._v(" "),t._l(t.data,function(e,a,r){return i("div",{staticClass:"margin-left"},[e&&"object"==typeof e?i("div",[i("div",{staticClass:"cursor-pointer",on:{click:function(e){t.toggle(t.data.constructor===Array?a:r)}}},[t.showObj[t.data.constructor===Array?a:r]?i("q-icon",{staticStyle:{"vertical-align":"baseline"},attrs:{color:void 0!==t.inverted?"white":"dark",name:"mdi-menu-down"}}):i("q-icon",{staticStyle:{"vertical-align":"baseline"},attrs:{color:void 0!==t.inverted?"white":"dark",name:"mdi-menu-right"}}),t._v(" "),i("span",{class:[t.theme.label]},[t._v(t._s(a))]),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(" : "+t._s(t.data.constructor===Array?"Array ["+e.length+"]":"Object"))])],1),t._v(" "),t.showObj[t.data.constructor===Array?a:r]?i("json-tree",{staticClass:"margin-left",attrs:{data:e,inverted:t.inverted}}):t._e()],1):i("div",[i("span",{class:[t.theme.label]},[t._v(t._s(a))]),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(" : ")]),t._v(" "),i("span",{class:(n={},n[t.theme.typeNumberOrBool]="number"==typeof e||"boolean"==typeof e,n[t.theme.typeString]="string"==typeof e,n[t.theme.typeEmpty]=void 0===e||null===e,n)},[t._v(t._s(JSON.stringify(e)))])])]);var n}),t._v(" "),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(t.data.constructor===Array?"]":"}"))])],2)},r=[],n={render:a,staticRenderFns:r};e.a=n},218:function(t,e,i){"use strict";var a=i(48),r=i.n(a),n=i(49),s=i.n(n),o=i(204),l=i.n(o),c=i(26),u=i(61),d=i.n(u),p=i(229),m=(i.n(p),i(231)),h=(i.n(m),i(60)),f=i(233),b=i.n(f),g=i(129),v=i(130),y=i(131);e.a={data:function(){return{version:b.a.version,currentMessage:{},currentData:{},sides:{left:!1,right:!1},currentLimit:1e3,delay:2,rawConfig:{},config:d.a,tabModel:"",isVisibleToolbar:!0,loadingFlag:!1}},computed:l()({},Object(h.d)({token:function(t){return t.token},isCustomer:function(t){return t.isCustomer},isLoading:function(t){return t.isLoading}}),{configByEntity:function(){return this.config[this.tabModel]},limit:{get:function(){return this.currentLimit},set:function(t){var e=this;t<100?(c.J.create.negative({html:"Please set the count to more than 100.",timeout:1500}),this.currentLimit=100):t>2e3&&this.currentLimit<=2e3?c.a.create({enter:"bounceInRight",leave:"bounceOutRight",color:"amber-9",icon:"warning",html:"You are setting the row count to more than 2000. This can affect your browser performance. Do you want to continue?",position:"top-right",actions:[{label:"Agree",handler:function(){e.currentLimit=t}},{label:"Abort",handler:this.settingsClickHandler}]}):this.currentLimit=t}},logMessageConfig:function(){var t={item_data:{title:"item data",wrapper:y.default,data:this.currentData.item_data},http_data:{title:"http data",wrapper:y.default,data:this.currentData.http_data},current:{title:this.currentData.name+" [upd:"+c.K.formatDate(1e3*this.currentData.updated,"HH:mm:ss")+"]",wrapper:y.default,data:this.currentData.current}},e=s()(t).reduce(function(e,i){return e||!!t[i].data},!1);return e?t:e}}),methods:l()({},Object(h.c)(["setToken","clearToken"]),{exitHandler:function(){this.clearToken(),this.$router.push("/login")},viewDataHandler:function(t){this.currentMessage=JSON.parse(r()(t)),this.$refs.layout.showRight()},hideRight:function(){this.$refs.layout.hideRight(),this.currentMessage={}},hideRightHandler:function(){this.hideRight(),this.$refs.main.unselect()},confirmExitHandler:function(){var t=this;c.c.create({title:"Confirm",message:"Do you really want to exit?",buttons:[{label:"No"},{label:"Yes",handler:function(){t.exitHandler()}}]})},settingsHandler:function(){var t=this;c.c.create({title:"Settings",form:{delay:{type:"number",label:"Real-time logs refresh time, sec",model:this.delay,min:2},limit:{type:"number",label:"Page row count",model:this.limit,min:100}},buttons:["Cancel",{label:"Ok",handler:function(e){t.limit=e.limit,t.delay=e.delay}}]})},viewLogMessagesHandler:function(t){this.currentData=JSON.parse(r()(t)),this.logMessageConfig?(this.rawConfig=this.logMessageConfig,this.$refs.rawViewer.open()):c.J.create({html:"No additional data available",timeout:1500})},disableLoading:Object(c.L)(function(t){t.loadingFlag=!1},200)}),watch:{token:function(t){t||this.$router.push("/login")},$route:function(t){t.params.token&&t.params.id&&t.params.type?(this.isVisibleToolbar=!t.params.fullscreen,this.setToken(t.params.token),s()(d.a).includes(t.params.type)?(this.tabModel=this.$route.params.type,this.$router.push("/"+t.params.type+"/"+t.params.id)):(this.tabModel="channels",this.$router.push("/channels"))):this.token?"/"===t.path?(this.tabModel="channels",this.$router.push("/channels")):this.$route.meta.moduleName?(this.tabModel=this.$route.meta.moduleName,this.$router.push("/"+this.$route.meta.moduleName+(this.$route.params.id?"/"+this.$route.params.id:""))):this.$router.push(this.$route.path):this.$router.push("/login"),this.$refs.layout&&this.hideRight()},isLoading:function(t){t?this.loadingFlag=t:this.disableLoading(this)}},created:function(){var t=c.d.get.item("X-Flespi-Token");this.$route.params.token&&this.$route.params.id&&this.$route.params.type?(this.isVisibleToolbar=!this.$route.params.fullscreen,this.setToken(this.$route.params.token),s()(d.a).includes(this.$route.params.type)?(this.tabModel=this.$route.params.type,this.$router.push("/"+this.$route.params.type+"/"+this.$route.params.id)):(this.tabModel="channels",this.$router.push("/channels"))):this.token||t?(t&&this.setToken(t),"/"===this.$route.path?(this.tabModel="channels",this.$router.push("/channels")):this.$route.meta.moduleName?(this.tabModel=this.$route.meta.moduleName,this.$router.push("/"+this.$route.meta.moduleName+(this.$route.params.id?"/"+this.$route.params.id:""))):this.$router.push(this.$route.path)):this.$router.push("/login")},components:{QLayout:c.p,QToolbar:c.F,QToolbarTitle:c.G,QBtn:c.e,QIcon:c.i,QTabs:c.D,QRouteTab:c.w,ObjectViewer:g.default,RawViewer:v.default,QItem:c.l,QItemMain:c.m,QItemTile:c.o,QItemSide:c.n,QPopover:c.u,QList:c.q,QInnerLoading:c.j,QSpinnerGears:c.A}}},227:function(t,e,i){var a=i(228);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(124)("4e13b563",a,!0)},228:function(t,e,i){e=t.exports=i(123)(void 0),e.push([t.i,".header__main-toolbar{padding:1px 12px}",""])},229:function(t,e,i){var a=i(230);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(124)("5619c902",a,!0)},230:function(t,e,i){e=t.exports=i(123)(void 0),e.push([t.i,"@-webkit-keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}.bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}",""])},231:function(t,e,i){var a=i(232);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(124)("2482a0b6",a,!0)},232:function(t,e,i){e=t.exports=i(123)(void 0),e.push([t.i,"@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}",""])},233:function(t,e){t.exports={name:"ToolboX",version:"0.6.5",description:"ToolboX",author:"Siarhei Buntsevich",scripts:{clean:"node build/script.clean.js",dev:"node build/script.dev.js mat flespi",dev_local:"node build/script.dev.js",build:"node build/script.build.js mat flespi",build_local:"node build/script.build.js",lint:"eslint --ext .js,.vue src",deploy:"npm run build && rm -rf deploy && mkdir deploy && cp -R dist/* misc CNAME LICENSE package.json deploy && cp README.md deploy/README.md && node_modules/git-directory-deploy/bin/git-directory-deploy.sh -ddeploy -bgh-pages -rhttps://git.gurtam.net/flespi/frontend/toolbox.git && node_modules/git-directory-deploy/bin/git-directory-deploy.sh -ddeploy -bgh-pages -rhttps://github.com/flespi-software/Toolbox.git && rm -rf deploy"},dependencies:{"babel-runtime":"^6.25.0",mdi:"^2.1.19","quasar-extras":"0.x","quasar-framework":"^0.14.7",qvirtualscroll:"git+https://github.com/flespi-software/QVirtualScroll.git",vue:"^2.5.13","vue-clipboard2":"0.0.8","vue-resource":"^1.3.5","vue-router":"^2.7.0",vuex:"^3.0.1"},devDependencies:{autoprefixer:"^6.4.0","babel-core":"^6.0.0","babel-eslint":"^7.0.0","babel-loader":"^7.1.2","babel-plugin-transform-runtime":"^6.0.0","babel-preset-es2015":"^6.0.0","babel-preset-stage-2":"^6.0.0",colors:"^1.1.2","connect-history-api-fallback":"^1.5.0","copy-webpack-plugin":"^4.3.1","css-loader":"^0.28.7","es6-promise":"^4.2.2",eslint:"^4.14.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^3.0.0","eslint-loader":"^1.9.0","eslint-plugin-html":"^3.2.2","eslint-plugin-import":"^2.7.0","eslint-plugin-node":"^5.2.0","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6",express:"^4.16.1","extract-text-webpack-plugin":"^3.0.0","file-loader":"^0.11.1","friendly-errors-webpack-plugin":"^1.1.3","git-directory-deploy":"^1.5.1",glob:"^7.1.2","html-webpack-plugin":"^2.30.1","http-proxy-middleware":"^0.17.0","json-loader":"^0.5.7",opn:"^5.0.0","optimize-css-assets-webpack-plugin":"^3.2.0","postcss-loader":"^1.0.0","progress-bar-webpack-plugin":"^1.10.0","purify-css":"^1.2.6",shelljs:"^0.7.0",stylus:"^0.54.5","stylus-loader":"^3.0.1","sw-precache-webpack-plugin":"^0.11.4","uglify-es":"^3.3.0","url-loader":"^0.5.7","vue-loader":"^13.6.1","vue-style-loader":"^3.0.3","vue-template-compiler":"^2.5.13",webpack:"^3.10.0","webpack-dev-middleware":"^1.12.0","webpack-hot-middleware":"^2.19.1","webpack-merge":"^4.1.0"}}},234:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.tabModel?i("div",[i("q-layout",{ref:"layout",attrs:{view:"hHh LpR lFf","page-style":{background:"#333"},"right-class":{"bg-dark":!0}},model:{value:t.sides,callback:function(e){t.sides=e},expression:"sides"}},[t.isVisibleToolbar?i("q-toolbar",{staticClass:"header__main-toolbar",attrs:{slot:"header",color:"dark"},slot:"header"},[i("q-toolbar-title",{style:{minWidth:t.$q.platform.is.mobile?"100px":"210px"}},[i("img",{staticStyle:{height:"30px"},attrs:{src:t.$q.platform.is.mobile?"statics/toolbox_mobile.png":"statics/toolbox50.png",alt:"Track it!"}}),t._v(" "),i("sup",[t._v(t._s(t.version))])]),t._v(" "),t.$q.platform.is.desktop?i("q-tabs",{style:{maxWidth:"calc(100% - 270px)"},attrs:{color:"dark"},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},t._l(t.config,function(t,e,a){return i("q-route-tab",{key:a,attrs:{slot:"title",name:""+e,label:t.label,hide:"label",to:"/"+e},slot:"title"})})):t._e(),t._v(" "),t.$q.platform.is.mobile?i("q-btn",{staticStyle:{display:"flex","flex-wrap":"nowrap",width:"50%"},attrs:{flat:""}},[t.configByEntity?i("q-item",{staticStyle:{"padding-left":"0","padding-right":"0"}},[i("q-item-side",{staticStyle:{"min-width":"20px"},attrs:{icon:t.configByEntity.icon,color:"white"}}),t._v(" "),i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",attrs:{label:""}},[t._v(t._s(t.configByEntity.label))])],1),t._v(" "),i("q-item-side",{staticStyle:{"min-width":"20px","margin-left":"10px"},attrs:{right:"",icon:"mdi-menu-down",color:"white"}})],1):t._e(),t._v(" "),i("q-popover",{ref:"popoverTab",attrs:{fit:""}},[i("q-list",{staticClass:"scroll",attrs:{link:"",separator:""}},t._l(t.config,function(e,a,r){return i("q-item",{key:r,attrs:{to:"/"+a}},[i("q-item",{staticStyle:{padding:"0"},on:{click:function(e){t.tabModel=a,t.$refs.popoverTab.close()}}},[i("q-item-side",{attrs:{icon:e.icon}}),t._v(" "),i("q-item-main",[i("q-item-tile",{attrs:{label:""}},[t._v(t._s(a))])],1)],1)],1)}))],1)],1):t._e(),t._v(" "),i("q-btn",{attrs:{small:"",flat:"",round:"",icon:"mdi-settings"},on:{click:t.settingsHandler}}),t._v(" "),i("q-btn",{attrs:{small:"",flat:"",round:"",icon:"mdi-exit-to-app"},on:{click:t.confirmExitHandler}})],1):t._e(),t._v(" "),Object.keys(t.currentMessage).length?i("object-viewer",{attrs:{slot:"right",object:t.currentMessage},on:{close:t.hideRightHandler},slot:"right"}):t._e(),t._v(" "),i("raw-viewer",{ref:"rawViewer",attrs:{config:t.rawConfig,inverted:""}}),t._v(" "),t.configByEntity?i("router-view",{ref:"main",attrs:{limit:t.limit,delay:t.delay,isCustomer:t.isCustomer,isLoading:t.loadingFlag,isVisibleToolbar:t.isVisibleToolbar,config:t.configByEntity},on:{"view-data":t.viewDataHandler,"view-data-hide":function(e){t.$refs.layout.hideRight(),t.currentMessage={}},"view-log-message":t.viewLogMessagesHandler}}):t._e()],1),t._v(" "),i("q-inner-loading",{staticStyle:{"z-index":"2001"},attrs:{visible:t.loadingFlag,dark:""}},[i("q-spinner-gears",{attrs:{size:"100px",color:"white"}})],1)],1):t._e()},r=[],n={render:a,staticRenderFns:r};e.a=n}});