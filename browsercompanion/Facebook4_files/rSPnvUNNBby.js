if (self.CavalryLogger) { CavalryLogger.start_js(["3HIS5"]); }

__d("PagesLoggerEventEnum",[],(function a(b,c,d,e,f,g){f.exports={CLICK:"click",CREATE:"create",DELETE:"delete",DRAG:"drag",HOVER:"hover",IMPRESSION:"impression",RECEIVE_REQUEST:"receive_request",RECEIVE_RESPONSE:"receive_response",SCROLL:"scroll",SEND_REQUEST:"send_request",SEND_RESPONSE:"send_response",UPDATE:"update"}}),null);
__d("PagesTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$PagesTypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$PagesTypedLogger1,c("Banzai").VITAL)};h.prototype.clear=function(){this.$PagesTypedLogger1={};return this};h.prototype.updateData=function(j){this.$PagesTypedLogger1=babelHelpers["extends"]({},this.$PagesTypedLogger1,j);return this};h.prototype.setConnectionClass=function(j){this.$PagesTypedLogger1.connection_class=j;return this};h.prototype.setEvent=function(j){this.$PagesTypedLogger1.event=j;return this};h.prototype.setEventLocation=function(j){this.$PagesTypedLogger1.event_location=j;return this};h.prototype.setEventTarget=function(j){this.$PagesTypedLogger1.event_target=j;return this};h.prototype.setLogSource=function(j){this.$PagesTypedLogger1.log_source=j;return this};h.prototype.setPageID=function(j){this.$PagesTypedLogger1.page_id=j;return this};h.prototype.setSessionid=function(j){this.$PagesTypedLogger1.sessionid=j;return this};h.prototype.setTags=function(j){this.$PagesTypedLogger1.tags=c("GeneratedLoggerUtils").serializeVector(j);return this};h.prototype.updateExtraData=function(j){j=c("nullthrows")(c("GeneratedLoggerUtils").serializeMap(j));c("GeneratedLoggerUtils").checkExtraDataFieldNames(j,i);this.$PagesTypedLogger1=babelHelpers["extends"]({},this.$PagesTypedLogger1,j);return this};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l)};var i={connection_class:true,event:true,event_location:true,event_target:true,log_source:true,page_id:true,sessionid:true,tags:true};f.exports=h}),null);
__d("PagesLogger",["PagesLoggerEventEnum","PagesTypedLogger"],(function a(b,c,d,e,f,g){__p&&__p();var h="extra_data_",i={log:function j(k,event,l){var m=arguments.length<=3||arguments[3]===undefined?null:arguments[3],n=arguments.length<=4||arguments[4]===undefined?[]:arguments[4],o=arguments[5],p=o||{};Object.keys(p).forEach(function(q){var r=p[q];if(r instanceof Array||r instanceof Object)r=JSON.stringify(r);p[h+q]=r;delete p[q]});new(c("PagesTypedLogger"))().setPageID(k).setEvent(event).setEventTarget(l).setEventLocation(m).setLogSource("pages_logger").setTags(n).updateExtraData(p).log()},registerLogOnClick:function j(k,l,m){var n=arguments.length<=3||arguments[3]===undefined?null:arguments[3],o=arguments.length<=4||arguments[4]===undefined?[]:arguments[4],p=arguments.length<=5||arguments[5]===undefined?{}:arguments[5];k.addEventListener("click",function(){this.log(l,c("PagesLoggerEventEnum").CLICK,m,n,o,p)}.bind(this))}};f.exports=i}),null);