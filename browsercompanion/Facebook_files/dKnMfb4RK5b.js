if (self.CavalryLogger) { CavalryLogger.start_js(["hOSjS"]); }

__d("Token.react",["cx","fbt","CloseButton.react","React","joinClasses"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("React").Component);k=j&&j.prototype;m.prototype.render=function(){"use strict";var n=null;if(this.props.name)n=[c("React").createElement("input",{type:"hidden",name:this.props.name+"[]",value:this.props.value}),c("React").createElement("input",{type:"hidden",name:"text_"+this.props.name+"[]",value:this.props.label})];var o=null,p=i._("Remove {item}",[i.param("item",this.props.label)]);if(this.props.removable)o=c("React").createElement(c("CloseButton.react"),{ariaLabel:p,className:"remove",size:"small",onClick:this.props.onRemove});var q="uiToken"+(this.props.removable?" removable":"");return c("React").createElement("span",babelHelpers["extends"]({},this.props,{className:c("joinClasses")(this.props.className,q)}),c("React").createElement("span",{className:"uiTokenText"},this.props.label),n,o)};function m(){"use strict";j.apply(this,arguments)}m.propTypes={name:l.string,label:l.string.isRequired,value:l.string,removable:l.bool,onRemove:l.func};f.exports=m}),null);
__d("P2PAmountUtils",[],(function a(b,c,d,e,f,g){var h=1e4,i={isAmountOverLegalLimit:function j(k){return parseFloat(this.sanitizeAmount(k))>=h},isAmountZero:function j(k){return parseFloat(this.sanitizeAmount(k))===0},isValidSendAmount:function j(k){return!this.isAmountOverLegalLimit(k)&&!this.isAmountZero(k)},sanitizeAmount:function j(k){return k.replace(/[^0-9\.]+/g,"")}};f.exports=i}),null);
__d("P2PConfirmationDialog.react",["cx","fbt","MessengerEnvironment","LayerFadeOnHide","LeftRight.react","P2PButton.react","P2PDialog.react","P2PDialogBody.react","P2PDialogFooter.react","P2PText.react","P2PDialogTitle.react","React","emptyFunction"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("React").Component);k=j&&j.prototype;function m(){__p&&__p();var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.getBackButton=function(){if(!this.props.allowBack)return null;return c("React").createElement(c("P2PButton.react"),{label:i._("Back"),onClick:this.props.onBackClick,use:"default"})}.bind(this),this.getSecondaryButton=function(){if(!this.props.showSecondaryButton)return null;return c("React").createElement(c("P2PButton.react"),{label:this.props.secondaryButtonLabel,onClick:this.props.onSecondaryClick,use:this.props.secondaryButtonUse})}.bind(this),o}m.prototype.render=function(){var n=c("MessengerEnvironment").messengerui,o=[c("React").createElement("div",{className:"_465t",key:"confirmation_icon"},this.props.image),c("React").createElement(c("P2PText.react"),{className:"_465u"+(this.props.centered?" _465v":""),key:"confirmation_text",type:"primary"},this.props.children)];if(n)o=c("React").createElement(c("LeftRight.react"),{direction:"left"},o);return c("React").createElement(c("P2PDialog.react"),{behaviors:babelHelpers["extends"]({LayerFadeOnShow:false,LayerFadeOnHide:c("LayerFadeOnHide")},this.props.behaviors),className:"_465w"+(n?" _465x":""),layerHideOnBlur:false,onToggle:this.props.onToggle,ref:"dialog",repositionOnUpdate:true,shown:true,width:this.props.width},c("React").createElement("div",{className:"_465y"},c("React").createElement(c("P2PDialogTitle.react"),{className:"_465z",showCloseButton:this.props.showCloseButton},this.props.title),c("React").createElement(c("P2PDialogBody.react"),null,o),c("React").createElement(c("P2PDialogFooter.react"),null,this.getBackButton(),this.getSecondaryButton(),c("React").createElement(c("P2PButton.react"),{label:this.props.buttonLabel,onClick:this.props.onOKClick,use:this.props.buttonUse}))))};m.propTypes={allowBack:l.bool,buttonLabel:l.node.isRequired,buttonUse:l.string.isRequired,centered:l.bool,image:l.object.isRequired,onBackClick:l.func,onOKClick:l.func,onSecondaryClick:l.func,onToggle:l.func,secondaryButtonLabel:l.node,secondaryButtonUse:l.string,showCloseButton:l.bool,showSecondaryButton:l.bool,title:l.node.isRequired};m.defaultProps={buttonLabel:i._("OK"),buttonUse:"default",centered:false,onBackClick:c("emptyFunction"),onOKClick:c("emptyFunction"),onSecondaryClick:c("emptyFunction"),onToggle:c("emptyFunction"),showCloseButton:false,showSecondaryButton:false,width:c("MessengerEnvironment").messengerui?350:300};f.exports=m}),null);
__d("P2PErrorDialog.react",["fbt","ix","MessengerEnvironment","Image.react","P2PConfirmationDialog.react","P2PText.react","React","emptyFunction"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("React").Component);k=j&&j.prototype;function m(){__p&&__p();var n,o;"use strict";for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.renderErrorContent=function(){var s=this.props.error;if(s.message.__html)return c("React").createElement(c("P2PText.react"),{dangerouslySetInnerHTML:s.message,type:"primary"});else return c("React").createElement(c("P2PText.react"),{type:"primary"},s.message)}.bind(this),this.getImage=function(){if(c("MessengerEnvironment").messengerui)return c("React").createElement(c("Image.react"),{height:62,width:62,src:i("94363")});else return c("React").createElement(c("Image.react"),{height:55,width:55,src:i("94362")})},o}m.prototype.render=function(){"use strict";var n=this.getImage();return c("React").createElement(c("P2PConfirmationDialog.react"),{allowBack:this.props.allowBack,behaviors:babelHelpers["extends"]({},this.props.behaviors),centered:this.props.centered,image:n,onBackClick:this.props.onBackClick,onOKClick:this.props.onOKClick,title:this.props.title,width:this.props.width},this.renderErrorContent())};m.propTypes={allowBack:l.bool,onBackClick:l.func,onOKClick:l.func,error:l.object,title:l.string};m.defaultProps={allowBack:false,onBackClick:c("emptyFunction"),onOKClick:c("emptyFunction"),error:null,title:h._("Problem")};f.exports=m}),null);
__d("DateBlock.react",["cx","React","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j;i=babelHelpers.inherits(k,c("React").Component);j=i&&i.prototype;k.prototype.render=function(){var l="_5x8v"+(this.props.background==="white"?" _5a5j":"")+(this.props.background==="opaque"?" _5a5k":"")+(this.props.background==="nobg"?" _5a5l":"")+(this.props.size==="small"?" _5a4_":"")+(this.props.size==="large"?" _5a5i":"");l=c("joinClasses")(l,this.props.className);return c("React").createElement("span",{className:l},c("React").createElement("span",{className:"_5a4-"},this.props.month),c("React").createElement("span",{className:"_5a4z"+(this.props.day.length>2?" _gg2":"")},this.props.day))};function k(){i.apply(this,arguments)}k.defaultProps={background:"white",size:"small"};f.exports=k}),null);
__d("ExpandableText.react",["cx","fbt","React"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=50;function m(o,p){if(o.length>p)return o.substr(0,p).trim();return o}j=babelHelpers.inherits(n,c("React").Component);k=j&&j.prototype;function n(o){__p&&__p();k.constructor.call(this,o);this.showMore=function(){this.setState({cutoff:this.state.cutoff+this.props.grow})}.bind(this);this.showLess=function(){this.setState({cutoff:this.state.cutoff-this.props.grow})}.bind(this);this.toggleMore=function(){var p=this.state.cutoff,q=this.props,r=q.text,s=q.grow,t=this.$ExpandableText1(r);if(p<t){var u=Math.ceil((t-p)/s);this.setState({cutoff:p+s*u})}else if(p>this.props.cutoff)this.setState({cutoff:this.props.cutoff})}.bind(this);this.state={cutoff:this.props.collapsed?this.props.cutoff:this.$ExpandableText1(this.props.text)}}n.prototype.render=function(){var o=this.props,p=o.text,q=o.noMargin,r=this.state.cutoff,s=this.$ExpandableText1(p),t=this.props.TextRenderer;if(!t)t="span";return c("React").createElement("p",{className:"_4etw"+(q?" _1tcr":"")},c("React").createElement(t,null,this.$ExpandableText2(p,r)),s>r?"... ":"",c("React").createElement("a",{href:"#",title:this.props.seeMoreText,className:r>=s?"_4a6u":"",onClick:this.showMore},this.props.seeMoreText),r>this.props.cutoff&&r<s&&this.props.seeLessText!==""?" | ":" ",c("React").createElement("a",{href:"#",title:this.props.seeLessText,className:r<=this.props.cutoff?"_4a6u":"",onClick:this.showLess},this.props.seeLessText))};n.prototype.$ExpandableText1=function(o){if(!this.props.penalizeNewLine)return o.length;var p=o.split(/\r\n|\r|\n/).length,q=this.props.countFirstLine?p:Math.max(0,p-1);return l*q+o.length};n.prototype.$ExpandableText2=function(o,p){__p&&__p();if(!this.props.penalizeNewLine)return m(o,p);var q=o.split(""),r=[],s=0,t=0;while(s<p&&t<o.length){if(q[t]==="\r"||q[t]==="\n"||q[t]==="\r\n")s+=l;else s+=1;if(s<p)r.push(q[t]);t++}return r.join("").replace(/^\s+|\s+$/g,"")};n.defaultProps={text:"",cutoff:500,collapsed:true,grow:500,seeMoreText:i._("More"),seeLessText:i._("Less"),penalizeNewLine:false,countFirstLine:true};f.exports=n}),null);
__d("EventEditDialogViewerStatus",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ADMIN:"admin",PENDING_ROLE:"pending_role"})}),null);
__d("ShareDataType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({INVALID:0,FB_PROFILE:1,FB_PHOTO:2,FB_ALBUM:3,FB_NOTE:4,FB_GROUP:6,FB_EVENT:7,FB_AD:8,FB_EXTAPP:9,FB_FLYER:10,FB_VIDEO:11,FB_PORTAL:12,FB_CLASSIFIED:13,FB_FBML:14,FB_VIDEOMSG:15,FB_SUBGROUP:16,FB_REMIX:17,FB_FBPAGE:18,FB_CHART:19,FB_JOB:20,FB_PHOTOMSG:21,FB_STATUS:22,FB_QUESTION:23,FB_PROMOTION:24,FB_TITAN_ATTACHMENT_SET:25,FB_FRIENDSHIP:27,FB_SONG:28,FB_MOBILEMIRROR:29,FB_MUSIC_ALBUM:30,FB_PLAYLIST:31,FB_COUPON:32,FB_RADIO_STATION:33,FB_CMS:34,FB_MUSICIAN:35,FB_GROUP_MESSAGE:37,FB_LIST:38,FB_PLATFORM_STORY:39,FB_GIFT:40,FB_PAGE_PRODUCT:41,FB_APP_DETAIL_PAGE:42,FB_OG_VIDEO:43,FB_OPEN_GRAPH:44,FB_COLLECTION:45,FB_PRODUCT_LIST:46,FB_BROWSE_QUERY:47,FB_SOCIAL_REPORT_PHOTO:48,FB_YEAR_IN_REVIEW:50,FB_REPORT_IMPOSTOR:51,FB_STICKER:52,FB_CHECKIN:53,FB_HC_QUESTION:55,FB_HC_ANSWER:56,FB_HASHTAG:57,FB_REPORT_RESOLUTION:58,FB_DYNAMIC_FEED_AD:59,FB_SOCIAL_RESOLUTION:60,FB_SYNC_REQUEST:61,FB_GIFT_PRODUCT:62,FB_COMMERCE_PRODUCT_ITEM:63,FB_P2P_PAYMENT:64,FB_WALL_POST:65,FB_SHOERACK_INVITATION:67,FB_MULTI_PRODUCT:68,FB_GENERIC_SHAREABLE:69,FB_P2P_PAYMENT_REQUEST:71,FB_COMMERCE_STORE:72,FB_PAGE_MESSAGE:76,FB_OFFER_VIEW:77,FB_COMMERCE_COLLECTION:78,FB_CULTURAL_MOMENT:79,FB_PAGES_PLATFORM:80,FB_ON_THIS_DAY:81,FB_DIRECTED_POST:82,FB_PAEGS_PLATFORM_LEAD_GEN:83,FB_LIVE_MAP:84,FB_PAGES_PLATFORM_BOOKING_MESSAGE:85,FB_PAGE_UPDATE:86,FB_COMMENT:87,FB_JOB_SEARCH_JOB_APPLICATION:88,FB_PAGE_INVITE:89,FB_PAGE_REVIEW_UPDATE:90,INSTAGRAM_MEDIA:91,MONTAGE_DIRECT:92,NEO_INVITE:93,EXTERNAL:100,FB_FEED:200,FB_TEMPLATE:300,FB_INTERNAL_PIXELCLOUD:1001,FB_INTERNAL_LEARN:1002,FB_INTERNAL_GENERIC:1004,FB_SHARE:99,EXT_PHOTO:101,EXT_NEWS:102,EXT_IFRAME:108,EXT_VIDEO:103,EXT_MUSIC:104,EXT_BLOG:105,EXT_MISC:106,FEED_ALBUMCREATE:201,FEED_PHOTOTAG:202,FEED_MOBILEPHOTOUPLOAD:203,FEED_NOTECREATE:204,FEED_NOTETAG:205,FEED_EVENTRSVP:206,FEED_RELATIONSHIP:207,FEED_VIDEOTAG:208,FEED_ADDVIDEO:209,FB_UNPERSISTED_SHAREABLE:400})}),null);
__d("XEventEditDialogController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/events/dialog/edit/page/",{event_id:{type:"Int",required:true},acontext:{type:"String",required:true},active_tab:{type:"Enum",enumType:1},focus_field:{type:"Enum",enumType:1},extra_data:{type:"String"},dialog_entry_point:{type:"Enum",defaultValue:"others",enumType:1},viewer_status:{type:"Enum",defaultValue:"admin",enumType:1},__asyncDialog:{type:"Int"}})}),null);
__d("XEventInviteDialogController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/events/ajax/invite/",{plan_id:{type:"Int"},session_id:{type:"Int"},invitees:{type:"StringVector"},extra_data:{type:"String"},acontext:{type:"StringToStringMap"},save_only:{type:"Bool",defaultValue:false},is_private:{type:"Bool",defaultValue:false},pagelets_to_update:{type:"StringSet"},hard_sell_invite_off_fb:{type:"Bool",defaultValue:false},entry_point:{type:"String"},__asyncDialog:{type:"Int"}})}),null);
__d("XEventsPermalinkController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/events/{event_id}/{?view}/{?post_id}/",{event_id:{type:"Int",required:true},event_time_id:{type:"FBID"},acontext:{type:"String"},active_tab:{type:"Enum",defaultValue:"about",enumType:1},end_cursor:{type:"String"},filter:{type:"String"},multi_permalinks:{type:"String"},post_id:{type:"Int"},previousaction:{type:"Enum",enumType:1},view:{type:"Enum",enumType:1},ref_share_id:{type:"FBID"},ticket_order_id:{type:"FBID"}})}),null);
__d("XGameroomLandingPageController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/gameroom/download/",{at:{type:"String"},fbsource:{type:"Int"},video_id:{type:"FBID"},canvas_url:{type:"String"},app_id:{type:"FBID"}})}),null);
__d("XShareDialogController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/share/dialog/",{app_id:{type:"Int"},caret_id:{type:"String"},collection_id:{type:"Int"},default_audience:{type:"Enum",enumType:1},default_page_target_id:{type:"Int"},default_group_target_id:{type:"Int"},default_fundraiser_target_id:{type:"FBID"},ft:{type:"StringToStringMap"},id:{type:"String"},internalextra:{type:"StringToStringMap"},internal_preview_image_id:{type:"Int"},is_throwback_post:{type:"Bool",defaultValue:false},mt:{type:"StringVector"},mtgs:{type:"StringVector"},object_id:{type:"Int"},prefill_text:{type:"String"},placeholder_text:{type:"String"},profile_id:{type:"String"},prompt_id:{type:"Int"},shared_ad_id:{type:"Int"},share_params:{type:"String"},st:{type:"String"},og_action_id:{type:"Int"},og_object_id:{type:"Int"},story_container_id:{type:"String"},civic_product_source:{type:"String"},type:{type:"Int"},url:{type:"String"},triggered_from:{type:"Enum",defaultValue:"others",enumType:1}})}),null);