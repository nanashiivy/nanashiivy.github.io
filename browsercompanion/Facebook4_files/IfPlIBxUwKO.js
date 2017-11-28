if (self.CavalryLogger) { CavalryLogger.start_js(["IU7pk"]); }

__d("Dock",["csx","Event","shield","Arbiter","ArbiterMixin","BlueBar","ChatQuietLinks","CSS","DataStore","DOM","Parent","Scroll","Style","Toggler","Vector","emptyFunction"],(function a(b,c,d,e,f,g,h){__p&&__p();function i(){}Object.assign(i,c("ArbiterMixin"),{MIN_HEIGHT:140,INITIAL_FLYOUT_HEIGHT_OFFSET:10,init:function j(k){__p&&__p();this.init=c("emptyFunction");this.rootEl=k;this.calculateViewportDimensions();c("ChatQuietLinks").removeEmptyHrefs(this.rootEl);c("Event").listen(k,"click",this._onClick.bind(this));c("Event").listen(window,"resize",this._onWindowResize.bind(this));c("Toggler").subscribe(["show","hide"],function(l,m){__p&&__p();var n=m.getActive();if(!c("DOM").contains(k,n))return;if(c("CSS").hasClass(n,"fbNub")){this.notifyNub(n,l);if(l==="show")this._resizeNubFlyout(n)}else{var o=c("Parent").byClass(n,"fbNubFlyout");if(o)c("CSS").conditionClass(o,"menuOpened",l==="show")}}.bind(this));this.inform("init",{},c("Arbiter").BEHAVIOR_PERSISTENT)},calculateViewportDimensions:function j(){return this.viewportDimensions=c("Vector").getViewportDimensions()},getFlyoutHeightOffset:function j(){if(this.flyoutHeightOffset)return this.flyoutHeightOffset;this.flyoutHeightOffset=this.INITIAL_FLYOUT_HEIGHT_OFFSET+c("Vector").getElementDimensions(this.rootEl).y;var k=c("BlueBar").getBar();if(k){var l=c("Style").isFixed(k)?"viewport":"document";this.flyoutHeightOffset+=c("Vector").getElementPosition(k,l).y+c("Vector").getElementDimensions(k).y}return this.flyoutHeightOffset},toggle:function j(k){var l=this._findFlyout(k);if(!l)return;this.subscribe("init",function(){c("Toggler").toggle(k)})},show:function j(k){this.subscribe("init",function(){c("Toggler").show(k)})},showNub:function j(k){c("CSS").show(k)},hide:function j(k){this.subscribe("init",function(){var l=c("Toggler").getInstance(k);c("DOM").contains(k,l.getActive())&&l.hide()})},hideNub:function j(k){c("CSS").hide(k);this.hide(k)},setUseMaxHeight:function j(k,l){c("CSS").conditionClass(k,"maxHeight",l!==false);this._resizeNubFlyout(k)},_resizeNubFlyout:function j(k){__p&&__p();var l=this._findFlyout(k);if(!l||c("CSS").hasClass(k,"placeholder")||!(c("CSS").hasClass(k,"openToggler")||c("CSS").hasClass(k,"opened")))return;var m=c("DOM").find(l,"div.fbNubFlyoutOuter"),n=c("DOM").find(m,"div.fbNubFlyoutInner"),o=c("DOM").find(n,"div.fbNubFlyoutBody"),p=c("CSS").hasClass(k,"canBeCompactTab"),q=c("Scroll").getTop(o),r=o.offsetHeight;c("Style").set(o,"height","auto");var s=c("Vector").getElementDimensions(l),t=c("Vector").getElementDimensions(o),u=this.getMaxFlyoutHeight(k);c("Style").set(l,"max-height",u+"px");c("Style").set(m,"max-height",u+"px");s=c("Vector").getElementDimensions(l);var v=c("Vector").getElementDimensions(n),w=v.y-t.y,x=s.y-w,y=parseInt(o.style.height||o.clientHeight,10),z=x!==y;if(s.y>w&&z&&!p)c("Style").set(o,"height",x+"px");c("CSS").removeClass(l,"swapDirection");var A=c("Vector").getElementPosition(l).x;c("CSS").conditionClass(l,"swapDirection",function(){if(A<0)return true;if(!s||!this.viewportDimensions)return false;return A+s.x>this.viewportDimensions.x}.bind(this)());if(z&&q+r>=t.y)c("Scroll").setTop(o,o.scrollHeight);else c("Scroll").setTop(o,q);this.notifyNub(k,"resize")},getMaxFlyoutHeight:function j(k){var l=this._findFlyout(k),m=c("Vector").getElementPosition(l,"viewport"),n=c("Vector").getElementDimensions(l);if(!this.viewportDimensions||!m)return 0;var o=Math.max(this.MIN_HEIGHT,this.viewportDimensions.y-this.getFlyoutHeightOffset())-(this.viewportDimensions.y-m.y-n.y);return Math.max(o,0)},resizeAllFlyouts:function j(){var k=this._getAllNubs(),l=k.length;while(l--)this._resizeNubFlyout(k[l])},_getAllNubs:function j(){var k=c("DOM").scry(this.rootEl,"div._50-v.openToggler:not(._s0f)");return k.concat(c("DOM").scry(this.rootEl,"div._50-v.opened:not(._s0f)"))},_onClick:function j(event){__p&&__p();var k=event.getTarget(),l=c("Parent").byClass(k,"fbNub");if(l){if(c("Parent").byClass(k,"fbNubFlyoutTitlebar")){var m=c("Parent").byTag(k,"a"),n=k.nodeName=="INPUT"&&k.getAttribute("type")=="submit";if(!m&&!n){this.hide(l);return false}}this.notifyNub(l,"click")}},_onWindowResize:function j(event){this.calculateViewportDimensions();this.resizeAllFlyouts()},_findFlyout:function j(k){return c("CSS").hasClass(k,"fbNubFlyout")?k:c("DOM").scry(k,"div.fbNubFlyout")[0]||null},registerNubController:function j(k,l){c("DataStore").set(k,"dock:nub:controller",l);l.subscribe("nub/button/content-changed",c("shield")(this.inform,this,"resize",k));l.subscribe("nub/flyout/content-changed",c("shield")(this._resizeNubFlyout,this,k))},unregisterNubController:function j(k){c("DataStore").remove(k,"dock:nub:controller")},notifyNub:function j(k,l,m){var n=c("DataStore").get(k,"dock:nub:controller");n&&n.inform(l,m)}});f.exports=b.Dock||i}),null);
__d("DockTabsViewportFantaTabUtils",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=269;function i(){return h+1}function j(m){return Math.floor(m/h)}function k(m){if(!m)return null;var n=m.fantaTabModelStateGetter;return n?n():null}function l(m){return m?m.size:0}f.exports={getTabCountToFitWidth:j,getMinRequiredWidthForFirstFantaTab:i,getFantaTabModelFromCallbacks:k,getNumFantaTabsFromModel:l}}),null);
__d("DockTabsViewportPinnedConversationTabUtils",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=496+9+2,i=210+9+2,j=52;function k(){return h}function l(){return i}function m(){return j}function n(r){return r.getIsRaised()?k():l()}function o(){return k()+j}function p(r){var s=r||{},t=s.pinnedConvoTabStateGetter;return t?t():null}function q(r){return r?r.getTotalTabCount():0}f.exports={getRaisedPinnedConvoTabWidth:k,getLoweredPinnedConvoTabWidth:l,getPinnedConvoSelectorWidth:m,getPinnedConvoTabWidth:n,getMinRequiredWidthForFirstConvoTab:o,getPinnedConvoTabsStateFromCallbacks:p,getNumPinnedConvoTabsFromModel:q}}),null);
__d("DockTabsViewportCalculator",["csx","Arbiter","DataStore","Dock","DockTabsViewportFantaTabUtils","DockTabsViewportPinnedConversationTabUtils","DOM","Event","FullScreen","SubscriptionsHandler","Vector","ViewportBounds","ge","getViewportDimensions","setImmediate"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=50,j=35,k=j,l="dock-tab-viewport-inst",m=c("DockTabsViewportFantaTabUtils").getMinRequiredWidthForFirstFantaTab,n=c("DockTabsViewportFantaTabUtils").getFantaTabModelFromCallbacks,o=c("DockTabsViewportFantaTabUtils").getNumFantaTabsFromModel,p=c("DockTabsViewportPinnedConversationTabUtils").getMinRequiredWidthForFirstConvoTab,q=c("DockTabsViewportPinnedConversationTabUtils").getNumPinnedConvoTabsFromModel,r=c("DockTabsViewportPinnedConversationTabUtils").getPinnedConvoTabsStateFromCallbacks;function s(u){return u?c("Vector").getElementDimensions(u).x:0}function t(u){__p&&__p();this.$DockTabsViewportCalculatorImpl1=u;this.$DockTabsViewportCalculatorImpl3=0;this.$DockTabsViewportCalculatorImpl4=0;this.$DockTabsViewportCalculatorImpl5=null;this.$DockTabsViewportCalculatorImpl6=null;this.$DockTabsViewportCalculatorImpl7=false;this.$DockTabsViewportCalculatorImpl8=false;this.$DockTabsViewportCalculatorImpl9=false;this.$DockTabsViewportCalculatorImpl2=new(c("SubscriptionsHandler"))();this.$DockTabsViewportCalculatorImpl10();this.$DockTabsViewportCalculatorImpl11()}t.prototype.$DockTabsViewportCalculatorImpl10=function(){__p&&__p();var u=this.$DockTabsViewportCalculatorImpl12.bind(this);this.$DockTabsViewportCalculatorImpl2.addSubscriptions(c("Event").listen(window,"resize",u),c("Dock").subscribe("resize",u),c("Arbiter").subscribeOnce("sidebar/initialized",u,c("Arbiter").SUBSCRIBE_NEW),c("FullScreen").subscribe("changed",function(){__p&&__p();if(c("FullScreen").isFullScreen()){this.$DockTabsViewportCalculatorImpl7=true;this.$DockTabsViewportCalculatorImpl8=false}else{this.$DockTabsViewportCalculatorImpl7=false;if(this.$DockTabsViewportCalculatorImpl8){c("setImmediate")(function(){u()});this.$DockTabsViewportCalculatorImpl8=false}}}.bind(this)))};t.prototype.registerFantaTabCallbacks=function(u){this.$DockTabsViewportCalculatorImpl5=u};t.prototype.registerPinnedConvoTabCallbacks=function(u){this.$DockTabsViewportCalculatorImpl6=u};t.prototype.forceRecalculateFBDockWidth=function(){this.$DockTabsViewportCalculatorImpl11();this.$DockTabsViewportCalculatorImpl13({forceRecalculateChatTabs:false,pinnedConvoUpdateData:null})};t.prototype.forceRecalculateChatTabs=function(){this.$DockTabsViewportCalculatorImpl13({forceRecalculateChatTabs:true,pinnedConvoUpdateData:null})};t.prototype.forceRecalculatePinnedConvoTabs=function(u){this.$DockTabsViewportCalculatorImpl13({forceRecalculateChatTabs:true,pinnedConvoUpdateData:u})};t.prototype.$DockTabsViewportCalculatorImpl12=function(){if(c("FullScreen").isFullScreen()||this.$DockTabsViewportCalculatorImpl7){this.$DockTabsViewportCalculatorImpl8=true;return}this.forceRecalculateFBDockWidth()};t.prototype.$DockTabsViewportCalculatorImpl13=function(u){var v=u.forceRecalculateChatTabs,w=u.pinnedConvoUpdateData,x=this.$DockTabsViewportCalculatorImpl14(),y=x.chatTabAvailableWidth,z=x.pinnedConvoTabAvailableWidth;this.$DockTabsViewportCalculatorImpl15(y,!!v);this.$DockTabsViewportCalculatorImpl16(z,w)};t.prototype.$DockTabsViewportCalculatorImpl16=function(u,v){var w=this.$DockTabsViewportCalculatorImpl6||{},x=w.onAvailableWidthChanged;x&&x(u,v)};t.prototype.$DockTabsViewportCalculatorImpl15=function(u,v){var w=this.$DockTabsViewportCalculatorImpl5||{},x=w.onAvailableWidthChanged;x&&x(u)};t.prototype.$DockTabsViewportCalculatorImpl17=function(){var u=n(this.$DockTabsViewportCalculatorImpl5);return o(u)};t.prototype.$DockTabsViewportCalculatorImpl18=function(){return m()};t.prototype.$DockTabsViewportCalculatorImpl14=function(){__p&&__p();var u=this.$DockTabsViewportCalculatorImpl3,v={chatTabAvailableWidth:u,pinnedConvoTabAvailableWidth:0},w={chatTabAvailableWidth:0,pinnedConvoTabAvailableWidth:u},x=this.$DockTabsViewportCalculatorImpl17(),y=r(this.$DockTabsViewportCalculatorImpl6),z=q(y);if(!y||z===0)return v;else if(x===0)return w;var A=this.$DockTabsViewportCalculatorImpl18();if(u<=A)return v;var B=p(),C=u-A,D=0;if(C<B)return v;else D=B;var E=D,F=Math.max(A,u-D);return{chatTabAvailableWidth:F,pinnedConvoTabAvailableWidth:E}};t.prototype.$DockTabsViewportCalculatorImpl11=function(){this.$DockTabsViewportCalculatorImpl3=this.$DockTabsViewportCalculatorImpl19();this.$DockTabsViewportCalculatorImpl20("DockTabsViewportCalculator/recalcTotalDock_FOR_TEST_ONLY")};t.prototype.$DockTabsViewportCalculatorImpl21=function(){var u=this.$DockTabsViewportCalculatorImpl1;if(!u)return{buddyListNubWidth:0,employeeNubsWidth:0};var v=s(u),w=s(c("DOM").find(u,"._56ox")),x=s(c("DOM").scry(u,"._56oy")[0]),y=s(c("DOM").scry(u,"._ph1")[0]),z=Math.max(v-w-x-y,0);return{buddyListNubWidth:w,employeeNubsWidth:z}};t.prototype.$DockTabsViewportCalculatorImpl19=function(){var u=c("getViewportDimensions").withoutScrollbars().width;u-=c("ViewportBounds").getLeft()+c("ViewportBounds").getRight();u-=i;var v=this.$DockTabsViewportCalculatorImpl21(),w=v.buddyListNubWidth,x=v.employeeNubsWidth;u-=w;this.$DockTabsViewportCalculatorImpl4=Math.max(this.$DockTabsViewportCalculatorImpl4,x);u-=this.$DockTabsViewportCalculatorImpl4;u-=k;return Math.max(u,0)};t.prototype.enableTestInforms_FOR_TEST_ONLY=function(){this.$DockTabsViewportCalculatorImpl9=true};t.prototype.$DockTabsViewportCalculatorImpl20=function(u){if(this.$DockTabsViewportCalculatorImpl9)c("Arbiter").inform(u)};t.prototype.getChatTabAvailableDockWidth_FOR_TEST_ONLY=function(){return this.$DockTabsViewportCalculatorImpl14().chatTabAvailableWidth};t.prototype.getPinnedConvoTabAvailableDockWidth_FOR_TEST_ONLY=function(){return this.$DockTabsViewportCalculatorImpl14().pinnedConvoTabAvailableWidth};t.prototype.getAvailableTotalWidth_FOR_TEST_ONLY=function(){return this.$DockTabsViewportCalculatorImpl3};f.exports={getInstance:function u(v){__p&&__p();var w=c("ge")("pagelet_dock");if(!w||!c("DOM").contains(w,v))return null;var x=c("DataStore").get(w,l);if(x instanceof t)return x;var y=c("DOM").scry(w,".fbDockWrapperRight .fbDock")[0];x=new t(y);c("DataStore").set(w,l,x);return x}}}),null);
__d("FBRTCSupport",["ChannelConstants","RTCConfig","UserAgent"],(function a(b,c,d,e,f,g){__p&&__p();var h={isSendWebrtcSupported:function i(){return!!c("RTCConfig").SendNewVCGK},isReceiveWebrtcSupported:function i(){return!!c("RTCConfig").ReceiveNewVCGK},isVideoInteropSupported:function i(){return!!c("RTCConfig").VideoInteropGK},isVideoCallBlockingSupported:function i(){return!!c("RTCConfig").VideoCallBlockingGK},isWebrtcSupported:function i(){return c("UserAgent").isBrowser("Chrome >= 28")||c("UserAgent").isBrowser("Firefox >= 25")||!!c("RTCConfig").RtcUseWebRTCForEdge&&c("UserAgent").isBrowser("Edge >= 15.15042")||c("UserAgent").isBrowser("Opera >= 20")},isGroupCallWebtrcSupported:function i(){return c("UserAgent").isBrowser("Chrome >= 28")||c("UserAgent").isBrowser("Opera >= 20")},isCollabSupported:function i(){return h.isWebrtcSupported()&&(!!c("RTCConfig").CollabWhitelistedBrowserGK||c("UserAgent").isBrowser("Chrome >= 48"))},isWirelessScreenSharingSupported:function i(){return!!c("RTCConfig").CollabWirelessScreenSharingGK&&c("UserAgent").isBrowser("Chrome >= 48")},isOSSupported:function i(){return!c("UserAgent").isPlatform("Android")&&!c("UserAgent").isPlatform("iOS")},getCapabilities:function i(){var j=0;if(this.isReceiveWebrtcSupported())j=c("ChannelConstants").CAPABILITY_VOIP_INTEROP;return j}};f.exports=h}),null);
__d("MercuryLoggingHelper",[],(function a(b,c,d,e,f,g){__p&&__p();function h(j){return Array.from(j).slice(0,6).join("")}var i={obfuscateThread:function j(k){var l=babelHelpers["extends"]({},k);if(k&&k.snippet&&k.snippet.length>9)l.snippet=h(k.snippet)+"...";return l},obfuscateMessage:function j(k){var l=babelHelpers["extends"]({},k);if(k&&k.body&&k.body.length>9)l.body=h(k.body)+"...";return l}};f.exports=i}),null);
__d("SoundPlayer",["Map","URI","createArrayFromMixed"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=new(c("Map"))();function i(l){var m=new(c("URI"))(l);return m.getDomain()?l:new(c("URI"))(window.location.href).setPath(m.getPath()).toString()}function j(l){var m=new(c("URI"))(l).getPath();if(/\.mp3$/.test(m))return"audio/mpeg";if(/\.og[ga]$/.test(m))return"audio/ogg";return""}var k={preload:function l(m){__p&&__p();for(var n=c("createArrayFromMixed")(m),o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var q;if(o){if(p>=n.length)break;q=n[p++]}else{p=n.next();if(p.done)break;q=p.value}var r=q;if(h.has(r))return;var s=document.createElement("audio");if(!s||!s.canPlayType||!s.canPlayType(j(r)))continue;s.preload="auto";s.src=i(r);document.body&&document.body.appendChild(s);h.set(r,s);return}},play:function l(m){__p&&__p();var n=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];for(var o=c("createArrayFromMixed")(m),p=Array.isArray(o),q=0,o=p?o:o[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var r;if(p){if(q>=o.length)break;r=o[q++]}else{q=o.next();if(q.done)break;r=q.value}var s=r;if(!h.has(s))k.preload(s);var t=h.get(s);if(!t)continue;if(n.loop)t.setAttribute("loop","");if(n.volume)t.volume=n.volume;t.play();return}},pause:function l(m){__p&&__p();for(var n=c("createArrayFromMixed")(m),o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var q;if(o){if(p>=n.length)break;q=n[p++]}else{p=n.next();if(p.done)break;q=p.value}var r=q,s=h.get(r);if(s){s.pause();return}}},stop:function l(m){__p&&__p();for(var n=c("createArrayFromMixed")(m),o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var q;if(o){if(p>=n.length)break;q=n[p++]}else{p=n.next();if(p.done)break;q=p.value}var r=q,s=h.get(r);if(s){s.pause();s.removeAttribute("src");s.src=i(r);return}}}};f.exports=k}),null);
__d("SoundSynchronizer",["SoundPlayer","WebStorage","createArrayFromMixed"],(function a(b,c,d,e,f,g){__p&&__p();var h="fb_sounds_playing3";function i(){__p&&__p();var m=c("WebStorage").getLocalStorage();if(m)try{var n=m[h];if(n){n=JSON.parse(n);if(Array.isArray(n))return n}}catch(o){}return[]}function j(m){var n=c("WebStorage").getLocalStorage();if(n){var o=i();o.push(m);while(o.length>5)o.shift();try{n[h]=JSON.stringify(o)}catch(p){}}}function k(m){return i().some(function(n){return n===m})}var l={play:function m(n,o,p){n=c("createArrayFromMixed")(n);o=o||n[0]+Math.floor(Date.now()/1e3);if(k(o))return;c("SoundPlayer").play(n,{loop:!!p});j(o)},isSupported:function m(){return!!c("WebStorage").getLocalStorage()}};f.exports=l}),null);
__d("SoundRPC",["Event","FBJSON","SoundSynchronizer"],(function a(b,c,d,e,f,g){__p&&__p();function h(j,k,l){c("SoundSynchronizer").play(j,k,l)}var i={playLocal:h,playRemote:function j(k,l,m,n){var o={name:"SoundRPC",data:{paths:l,sync:m,loop:n}};k.postMessage(c("FBJSON").stringify(o),"*")},supportsRPC:function j(){return!!window.postMessage},_listen:function j(){c("Event").listen(window,"message",function(k){if(!/\.facebook.com$/.test(k.origin))return;var l={};try{l=c("FBJSON").parse(k.data)}catch(m){}if(l.name==="SoundRPC")h(l.data.paths,l.data.sync,l.data.loop)})}};f.exports=i}),null);
__d("Sound",["SoundInitialData","SoundPlayer","SoundRPC","SoundSynchronizer","URI","UserAgent_DEPRECATED","Visibility","isFacebookURI"],(function a(b,c,d,e,f,g){__p&&__p();var h=null,i=false,j={init:function n(o){},play:function n(o,p,q){if(h)c("SoundRPC").playRemote(h.contentWindow,o,p,false);else c("SoundRPC").playLocal(o,p,q);i=true},hasPlayedSoundBefore:function n(){return i},playOnlyIfImmediate:function n(o,p,q){if(!i&&c("Visibility").isHidden())return;this.play(o,p,q)},stop:function n(o){if(!h)c("SoundPlayer").stop(o)}},k=new(c("URI"))(location.href);if(k.getSubdomain()&&k.getSubdomain()!=="www")k.setSubdomain("www");var l=k.getDomain();function m(){if(c("UserAgent_DEPRECATED").ie()<9)return false;if(c("SoundInitialData").RPC_DISABLED)return false;return c("SoundSynchronizer").isSupported()&&c("SoundRPC").supportsRPC()}if(c("isFacebookURI")(k)&&location.host!==l&&m()){h=document.createElement("iframe");h.setAttribute("src","//"+l+"/sound_iframe.php");h.style.display="none";document.body.appendChild(h)}f.exports=j}),null);
__d("TreeMap",["Map","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(v,w,x){this.key=v;this.value=w;this.time=x}function i(v){this.$TreeMap1=function(w,x){var y=v(w,x);return y!==0?y:w.time-x.time};this.$TreeMap2=new(c("Map"))();this.$TreeMap3=null;this.$TreeMap4=0;this.size=this.$TreeMap2.size}i.prototype.clear=function(){this.$TreeMap2=new(c("Map"))();this.$TreeMap3=null;this.size=this.$TreeMap2.size};i.prototype.has=function(v){return this.$TreeMap2.has(v)};i.prototype.set=function(v,w){if(this.has(v))this["delete"](v);var x=new h(v,w,this.$TreeMap4++);this.$TreeMap2.set(v,x);this.$TreeMap3=p(this.$TreeMap3,x,this.$TreeMap1);this.size=this.$TreeMap2.size;return this};i.prototype.get=function(v){return this.has(v)?this.$TreeMap2.get(v).value:undefined};i.prototype["delete"]=function(v){if(!this.has(v))return false;var w=this.$TreeMap2.get(v);this.$TreeMap3=q(this.$TreeMap3,w,this.$TreeMap1);this.$TreeMap2["delete"](v);this.size=this.$TreeMap2.size;return true};i.prototype.keys=function(){var v=[];u(this.$TreeMap3,v,function(w){return w.key});return v};i.prototype.values=function(){var v=[];u(this.$TreeMap3,v,function(w){return w.value});return v};i.prototype.entries=function(){var v=[];u(this.$TreeMap3,v,function(w){return{key:w.key,value:w.value}});return v};i.prototype.range=function(v,w){var x=[],y=null;if(v)y=new h(v.key,v.value,-1);var z=null;if(w)z=new h(w.key,w.value,this.$TreeMap4);u(this.$TreeMap3,x,function(A){return{key:A.key,value:A.value}},this.$TreeMap1,y,z);return x};i.prototype.min=function(){if(!this.$TreeMap3)return undefined;var v=r(c("nullthrows")(this.$TreeMap3)),w=v.key,x=v.value;return{key:w,value:x}};i.prototype.max=function(){if(!this.$TreeMap3)return undefined;var v=s(c("nullthrows")(this.$TreeMap3)),w=v.key,x=v.value;return{key:w,value:x}};i.prototype.__testRoot=function(){};function j(v){__p&&__p();if(!v)return v;o(v);if(v.balanceFactor<-1)if(v.right&&v.right.balanceFactor<=0)return k(v);else return l(v);else if(v.balanceFactor>1)if(v.left&&v.left.balanceFactor>=0)return m(v);else return n(v);else return v}function k(v){var w=v,x=c("nullthrows")(w.right),y=x.left;w.right=y;o(w);c("nullthrows")(x).left=w;o(x);return x}function l(v){__p&&__p();var w=v,x=c("nullthrows")(w.right),y=c("nullthrows")(x.left),z=y.left,A=y.right;w.right=z;o(w);x.left=A;o(x);y=c("nullthrows")(y);y.left=w;y.right=x;o(y);return y}function m(v){var w=v,x=c("nullthrows")(w.left),y=x.right;w.left=y;o(w);x.right=w;o(x);return x}function n(v){var w=v,x=c("nullthrows")(w.left),y=c("nullthrows")(x.right),z=y.left,A=y.right;x.right=z;o(x);w.left=A;o(w);y.left=x;y.right=w;o(y);return y}function o(v){var w=v.left?v.left.height:-1,x=v.right?v.right.height:-1;v.height=Math.max(w,x)+1;v.balanceFactor=w-x}function p(v,w,x){__p&&__p();if(v==null)return j(w);var y=x(w,v);if(y<0){v.left=p(v.left,w,x);return j(v)}else{v.right=p(v.right,w,x);return j(v)}}function q(v,w,x){__p&&__p();if(v==null)return null;if(v===w)if(v.left&&v.right){var y=s(v.left);v.left=t(v.left);y.left=v.left;y.right=v.right;return j(y)}else if(v.left)return j(v.left);else if(v.right)return j(v.right);else return null;var z=x(w,v);if(z<0){v.left=q(v.left,w,x);return j(v)}else{v.right=q(v.right,w,x);return j(v)}}function r(v){while(v.left)v=v.left;return v}function s(v){while(v.right)v=v.right;return v}function t(v){if(!v)return null;if(v.right==null)return j(v.left||null);v.right=t(v.right);return j(v)}function u(v,w,x,y,z,A){if(v==null)return;var B=!y||!z||y(v,z)>=0,C=!y||!A||y(v,A)<=0;if(B)u(v.left,w,x,y,z,A);if(B&&C)w.push(x(v));if(C)u(v.right,w,x,y,z,A)}f.exports=i}),null);
__d("Cache",["DateConsts","Map","TimeSlice","TreeMap"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.$Cache1=new(c("Map"))()}h.prototype.has=function(i){return this.$Cache1.has(i)};h.prototype.get=function(i,j){var k=this.__getRaw(i);if(!k)return j;return k.$Cache2};h.prototype.getAll=function(i,j){var k=new(c("Map"))();i.forEach(function(l){return k.set(l,this.get(l,j))}.bind(this));return k};h.prototype["delete"]=function(i){var j=this.__getRaw(i);if(j&&j.$Cache3)clearTimeout(j.$Cache3);return this.$Cache1["delete"](i)};h.prototype.clear=function(){this.$Cache1.forEach(function(i){if(i&&i.$Cache3)clearTimeout(i.$Cache3)});this.$Cache1.clear()};h.prototype.set=function(i,j,k,l){__p&&__p();if(!this.shouldUpdate(i,k))return false;var m=this.__getRaw(i);if(!m)m=this.__getNewRawObject();delete m.$Cache2;delete m.$Cache4;if(m.$Cache3)clearTimeout(m.$Cache3);delete m.$Cache3;m.$Cache2=j;if(k!=null)m.$Cache4=k;if(l!=null&&l>=0)m.$Cache3=setTimeout(c("TimeSlice").guard(this["delete"].bind(this,i),"Cache expiration timeout"),l*c("DateConsts").MS_PER_SEC*c("DateConsts").SEC_PER_MIN);this.__setRaw(i,m);return true};h.prototype.shouldUpdate=function(i,j){var k=this.__getRaw(i);return k==null||k.$Cache4==null||j==null||j>k.$Cache4};h.prototype.size=function(){return this.$Cache1.size};h.prototype.__getRaw=function(i){return this.$Cache1.get(i)};h.prototype.__setRaw=function(i,j){this.$Cache1.set(i,j)};h.prototype.__getNewRawObject=function(){return{$Cache2:null,$Cache3:null,$Cache4:null,$Cache5:null,$Cache6:null}};h.prototype.__keys=function(){return this.$Cache1.keys()};f.exports=h}),null);
__d("cssURL",[],(function a(b,c,d,e,f,g){function h(i){return"url('"+i.replace(/[\ud800-\udfff].|[^-a-zA-Z0-9./_?]/g,function(j){return"\\"+j.codePointAt().toString(16)+" "})+"')"}f.exports=h}),null);
__d("padNumber",[],(function a(b,c,d,e,f,g){"use strict";function h(i,j){var k=i.toString();if(k.length>=j)return k;return"0".repeat(j-k.length)+k}f.exports=h}),null);
__d("StoreBasedStateMixinHelper",["invariant","SubscriptionsHandler"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();function i(j){this.$StoreBasedStateMixinHelper1=j;this.$StoreBasedStateMixinHelper2=new(c("SubscriptionsHandler"))()}i.prototype.subscribeCallback=function(j){__p&&__p();var k=this.$StoreBasedStateMixinHelper1.map(function(l){if(l.hasChanged&&l.getDispatchToken&&l.addListener)return l.addListener(j);else if(l.subscribe)return l.subscribe("change",j);else if(l.addListener)return l.addListener("change",j);else h(0)});if(this.$StoreBasedStateMixinHelper1.length>0)this.$StoreBasedStateMixinHelper2.addSubscriptions.apply(this.$StoreBasedStateMixinHelper2,k)};i.prototype.release=function(){this.$StoreBasedStateMixinHelper2.release()};f.exports=i}),null);
__d("StoreAndPropBasedStateMixin",["invariant","StoreBasedStateMixinHelper","setImmediate"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=function(){__p&&__p();for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];return{getInitialState:function m(){return this.constructor.calculateState(this.props)},componentWillMount:function m(){__p&&__p();this.constructor.calculateState||h(0);this._recalculateStateID=null;var n=function(){if(this.isMounted())this.setState(this.constructor.calculateState(this.props));this._recalculateStateID=null}.bind(this);this._mixin=new(c("StoreBasedStateMixinHelper"))(k);this._mixin.subscribeCallback(function(){if(this._recalculateStateID===null)this._recalculateStateID=c("setImmediate")(n)}.bind(this))},componentWillReceiveProps:function m(n){this.setState(this.constructor.calculateState(n))},componentWillUnmount:function m(){this._mixin.release();this._mixin=null}}}.bind(this);f.exports=i}),null);
__d("DateStrings",["fbt"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=void 0,j=void 0,k=void 0,l=void 0,m=void 0,n=void 0,o=void 0,p=void 0,q=void 0,r={getWeekdayName:function s(t){if(!n)n=[h._("Sunday"),h._("Monday"),h._("Tuesday"),h._("Wednesday"),h._("Thursday"),h._("Friday"),h._("Saturday")];return n[t]},getUppercaseWeekdayName:function s(t){if(!p)p=[h._("SUNDAY"),h._("MONDAY"),h._("TUESDAY"),h._("WEDNESDAY"),h._("THURSDAY"),h._("FRIDAY"),h._("SATURDAY")];return p[t]},getWeekdayNameShort:function s(t){if(!o)o=[h._("Sun"),h._("Mon"),h._("Tue"),h._("Wed"),h._("Thu"),h._("Fri"),h._("Sat")];return o[t]},getUppercaseWeekdayNameShort:function s(t){if(!q)q=[h._("SUN"),h._("MON"),h._("TUE"),h._("WED"),h._("THU"),h._("FRI"),h._("SAT")];return q[t]},_initializeMonthNames:function s(){i=[h._("January"),h._("February"),h._("March"),h._("April"),h._("May"),h._("June"),h._("July"),h._("August"),h._("September"),h._("October"),h._("November"),h._("December")]},getMonthName:function s(t){if(!i)r._initializeMonthNames();return i[t-1]},getMonthNames:function s(){if(!i)r._initializeMonthNames();return i.slice()},getUppercaseMonthName:function s(t){if(!l)l=[h._("JANUARY"),h._("FEBRUARY"),h._("MARCH"),h._("APRIL"),h._("MAY"),h._("JUNE"),h._("JULY"),h._("AUGUST"),h._("SEPTEMBER"),h._("OCTOBER"),h._("NOVEMBER"),h._("DECEMBER")];return l[t-1]},getMonthNameShort:function s(t){if(!j)j=[h._("Jan"),h._("Feb"),h._("Mar"),h._("Apr"),h._("May"),h._("Jun"),h._("Jul"),h._("Aug"),h._("Sep"),h._("Oct"),h._("Nov"),h._("Dec")];return j[t-1]},getUppercaseMonthNameShort:function s(t){if(!k)k=[h._("JAN"),h._("FEB"),h._("MAR"),h._("APR"),h._("MAY"),h._("JUN"),h._("JUL"),h._("AUG"),h._("SEP"),h._("OCT"),h._("NOV"),h._("DEC")];return k[t-1]},getOrdinalSuffix:function s(t){if(!m)m=["",h._("st"),h._("nd"),h._("rd"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("st"),h._("nd"),h._("rd"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("st")];return m[t]},getDayOfMonth:function s(t){__p&&__p();switch(t){case 1:return h._("1st");case 2:return h._("2nd");case 3:return h._("3rd");case 4:return h._("4th");case 5:return h._("5th");case 6:return h._("6th");case 7:return h._("7th");case 8:return h._("8th");case 9:return h._("9th");case 10:return h._("10th");case 11:return h._("11th");case 12:return h._("12th");case 13:return h._("13th");case 14:return h._("14th");case 15:return h._("15th");case 16:return h._("16th");case 17:return h._("17th");case 18:return h._("18th");case 19:return h._("19th");case 20:return h._("20th");case 21:return h._("21st");case 22:return h._("22nd");case 23:return h._("23rd");case 24:return h._("24th");case 25:return h._("25th");case 26:return h._("26th");case 27:return h._("27th");case 28:return h._("28th");case 29:return h._("29th");case 30:return h._("30th");case 31:return h._("31st");default:throw new Error("Invalid day of month.")}},getDayLabel:function s(){return h._("Day:")},getMonthLabel:function s(){return h._("Month:")},getYearLabel:function s(){return h._("Year:")},getDayPlaceholder:function s(){return h._("dd")},getMonthPlaceholder:function s(){return h._("mm")},getYearPlaceholder:function s(){return h._("yyyy")},getHourPlaceholder:function s(){return h._("h")},getMinutePlaceholder:function s(){return h._("m")},get12HourClockSuffix:function s(t){if(t<12)return h._("am");return h._("pm")},getUppercase12HourClockSuffix:function s(t){if(t<12)return h._("AM");return h._("PM")}};f.exports=r}),null);
__d("formatDate",["invariant","DateFormatConfig","DateStrings","padNumber"],(function a(b,c,d,e,f,g,h){__p&&__p();function i(l,m,n){__p&&__p();n=n||{};if(!m||!l&&l!==0)return"";if(typeof l==="string")l=parseInt(l,10);if(typeof l==="number")l=new Date(l*1e3);l instanceof Date||h(0);!isNaN(l.getTime())||h(0);if(typeof m!=="string"){var o=j();for(var p in o){var q=o[p];if(l.getTime()<=Date.now()){if(q.start<=l.getTime()&&m[q.name]){m=m[q.name];break}}else if(l.getTime()<q.end&&m[q.name]){m=m[q.name];break}}}var r;if(n.skipPatternLocalization||!n.formatInternal&&k())r=m;else if(!c("DateFormatConfig").formats[m]){m.length===1||h(0);r=m}else r=c("DateFormatConfig").formats[m];var s=n.utc?"getUTC":"get",t=l[s+"Date"](),u=l[s+"Day"](),v=l[s+"Month"](),w=l[s+"FullYear"](),x=l[s+"Hours"](),y=l[s+"Minutes"](),z=l[s+"Seconds"](),A=l[s+"Milliseconds"](),B="";for(var C=0;C<r.length;C++){var D=r.charAt(C);switch(D){case"\\":C++;B+=r.charAt(C);break;case"d":B+=c("padNumber")(t,2);break;case"j":B+=t;break;case"S":B+=c("DateStrings").getOrdinalSuffix(t);break;case"D":B+=c("DateStrings").getWeekdayNameShort(u);break;case"l":B+=c("DateStrings").getWeekdayName(u);break;case"F":case"f":B+=c("DateStrings").getMonthName(v+1);break;case"M":B+=c("DateStrings").getMonthNameShort(v+1);break;case"m":B+=c("padNumber")(v+1,2);break;case"n":B+=v+1;break;case"Y":B+=w;break;case"y":B+=(""+w).slice(2);break;case"a":if(n.skipSuffixLocalization)B+=x<12?"am":"pm";else B+=c("DateStrings").get12HourClockSuffix(x);break;case"A":if(n.skipSuffixLocalization)B+=x<12?"AM":"PM";else B+=c("DateStrings").getUppercase12HourClockSuffix(x);break;case"g":B+=x===0||x===12?12:x%12;break;case"G":B+=x;break;case"h":if(x===0||x===12)B+=12;else B+=c("padNumber")(x%12,2);break;case"H":B+=c("padNumber")(x,2);break;case"i":B+=c("padNumber")(y,2);break;case"s":B+=c("padNumber")(z,2);break;case"X":B+=c("padNumber")(A,3);break;default:B+=D}}return B}function j(){var l=new Date(),m=l.getTime(),n=l.getFullYear(),o=l.getMonth(),p=new Date(n,l.getMonth()+1,0).getDate(),q=new Date(n,1,29).getMonth()===1?366:365,r=1e3*60*60*24,s=new Date(l.setHours(0,0,0,0)),t=new Date(n,o,s.getDate()+1),u=l.getDate()-(l.getDay()-c("DateFormatConfig").weekStart+6)%7,v=new Date(l.getTime()).setDate(u),w=new Date(l.getTime()).setDate(u+7),x=new Date(n,o,1),y=new Date(n,o,p+1),z=new Date(n,0,1),A=new Date(n+1,0,1);return[{name:"today",start:s.getTime(),end:t.getTime()},{name:"withinDay",start:m-r,end:m+r},{name:"thisWeek",start:v,end:w},{name:"withinWeek",start:m-r*7,end:m+r*7},{name:"thisMonth",start:x.getTime(),end:y.getTime()},{name:"withinMonth",start:m-r*p,end:m+r*p},{name:"thisYear",start:z.getTime(),end:A.getTime()},{name:"withinYear",start:m-r*q,end:m+r*q},{name:"older",start:-Infinity},{name:"future",end:+Infinity}]}i.periodNames=["today","thisWeek","thisMonth","thisYear","withinDay","withinWeek","withinMonth","withinYear","older","future"];function k(){if(typeof window==="undefined"||!window||!window.location||!window.location.pathname)return false;var l=window.location.pathname,m="/intern";return l.substr(0,m.length)===m}f.exports=i}),null);
__d("Utf16",[],(function a(b,c,d,e,f,g){var h={decode:function i(j){switch(j.length){case 1:return j.charCodeAt(0);case 2:return 65536|(j.charCodeAt(0)-55296)*1024|j.charCodeAt(1)-56320;default:return null}},encode:function i(j){if(j<65536)return String.fromCharCode(j);else return String.fromCharCode(55296+(j-65536>>10))+String.fromCharCode(56320+j%1024)}};f.exports=h}),null);
__d("EmoticonEmojiList",[],(function a(b,c,d,e,f,g){f.exports={names:{":)":"slightsmile",":-)":"slightsmile",":]":"slightsmile","=)":"smile","(:":"slightsmile","(=":"smile",":(":"frown",":-(":"frown",":[":"frown","=(":"frown",")=":"frown",";-P":"winktongue",";P":"winktongue",";-p":"winktongue",";p":"winktongue",":poop:":"poop",":P":"tongue",":-P":"tongue",":-p":"tongue",":p":"tongue","=P":"tongue","=p":"tongue","=D":"grin",":-D":"slightgrin",":D":"slightgrin",":o":"gasp",":-O":"gasp",":O":"gasp",":-o":"gasp",";)":"wink",";-)":"wink","8-)":"glasses","8)":"glasses","B-)":"glasses","B)":"glasses",">:(":"grumpy",">:-(":"grumpy",":/":"unsure",":-/":"unsure",":\\":"unsure",":-\\":"unsure","=/":"unsure","=\\":"unsure",":'(":"cry",":'-(":"cry",":\u2019(":"cry",":\u2019-(":"cry","3:)":"devil","3:-)":"devil","O:)":"angel","O:-)":"angel","0:)":"angel","0:-)":"angel",":*":"kiss",":-*":"kiss",";-*":"winkkiss",";*":"winkkiss","<3":"heart","&lt;3":"heart","\u2665":"heart","^_^":"kiki","^~^":"kiki","-_-":"expressionless",":-|":"squint",":|":"squint",">:o":"upset",">:O":"upset",">:-O":"upset",">:-o":"upset",">_<":"persevere",">.<":"persevere",'<(")':"penguin",O_O:"flushface",o_o:"flushface","0_0":"flushface",T_T:"crying","T-T":"crying",ToT:"crying","T.T":"crying","-3-":"flushkiss","'-_-":"sweating","\u2019-_-":"sweating","(y)":"like",":like:":"like","(Y)":"like","(n)":"dislike","(N)":"dislike"},emote2emojis:{slightsmile:"1f642",smile:"1f60a",frown:"1f61e",winktongue:"1f61c",poop:"1f4a9",tongue:"1f61b",slightgrin:"1f600",grin:"1f603",gasp:"1f62e",wink:"1f609",glasses:"1f60e",grumpy:"1f620",unsure:"1f615",cry:"1f622",devil:"1f608",angel:"1f607",kiss:"1f617",winkkiss:"1f618",heart:"2764",kiki:"1f60a",expressionless:"1f611",squint:"1f610",upset:"1f620",persevere:"1f623",penguin:"1f427",flushface:"1f633",crying:"1f62d",flushkiss:"1f61a",sweating:"1f613",like:"f0000",dislike:"1f44e"},symbols:{slightsmile:":)",smile:"=)",frown:":(",winktongue:";-P",poop:":poop:",tongue:":P",slightgrin:":D",grin:"=D",gasp:":o",wink:";)",glasses:"8-)",grumpy:">:(",unsure:":/",cry:":'(",devil:"3:)",angel:"O:)",kiss:":*",winkkiss:";*",heart:"<3",kiki:"^_^",expressionless:"-_-",squint:":-|",upset:">:o",persevere:">_<",penguin:'<(")',flushface:"O_O",crying:"T_T",flushkiss:"-3-",sweating:"'-_-",like:"(y)",dislike:"(n)"},regexp:/(^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))([\s\'\".,!?]|<br>|$)/,noncapturingRegexp:/(?:^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))(?:[\s\'\".,!?]|<br>|$)/}}),null);
__d("isCanvasAppURI",["isFacebookURI"],(function a(b,c,d,e,f,g){"use strict";function h(i){return c("isFacebookURI")(i)&&i.getSubdomain()==="apps"}f.exports=h}),null);
__d("Log",["sprintf"],(function a(b,c,d,e,f,g){var h={DEBUG:3,INFO:2,WARNING:1,ERROR:0};function i(k,l){var m=Array.prototype.slice.call(arguments,2),n=c("sprintf").apply(null,m),o=window.console;if(o&&j.level>=l)o[k in o?k:"log"](n)}var j={level:-1,Level:h,debug:i.bind(null,"debug",h.DEBUG),info:i.bind(null,"info",h.INFO),warn:i.bind(null,"warn",h.WARNING),error:i.bind(null,"error",h.ERROR)};f.exports=j}),null);