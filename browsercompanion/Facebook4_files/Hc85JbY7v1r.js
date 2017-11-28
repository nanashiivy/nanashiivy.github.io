if (self.CavalryLogger) { CavalryLogger.start_js(["DsQPg"]); }

__d("PagesOpenNowDisplayDecision",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({SHOW_AVAILABLE:0,SHOW_UNAVAILABLE:1,SHOW_UNDETERMINED:2,NO_SHOW:3,SHOW_PERMANENTLY_CLOSED:4})}),null);
__d("StarRating.react",["cx","fbt","AbstractRating.react","React","StarRatingEmptyStar.react","StarRatingFilledStar.react","intlNumUtils"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k;j=babelHelpers.inherits(l,c("React").Component);k=j&&j.prototype;l.prototype.render=function(){"use strict";return c("React").createElement("div",{className:"_8jy"},this.$StarRating1(),c("React").createElement(c("AbstractRating.react"),{emptyItem:c("React").createElement(c("StarRatingEmptyStar.react"),{size:this.props.size,color:this.props.emptyColor}),filledItem:c("React").createElement(c("StarRatingFilledStar.react"),{size:this.props.size,color:this.props.fillColor}),rating:this.props.rating,maxRating:this.props.maxRating}))};l.prototype.$StarRating1=function(){"use strict";if(!this.props.showLabel)return null;return c("React").createElement("span",{className:"_4c4u _405z"+(this.props.size==="12"?" _h9x":"")+(this.props.size==="16"?" _4c4w":"")+(this.props.size==="20"?" _4c4x":"")+(this.props.size==="24"?" _4c4y":"")},i._({"*":"{rating}"},[i.param("rating",c("intlNumUtils").formatNumber(this.props.rating,1),[0,this.props.rating])]))};function l(){"use strict";j.apply(this,arguments)}l.defaultProps={maxRating:5,showLabel:true,size:"20",emptyColor:"fig-light-20",fillColor:"accent-blue"};f.exports=l}),null);
__d("XPagesProfileReviewsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/{page_token}/reviews/",{page_token:{type:"String",required:true},business_id:{type:"Int"},selected_snippet:{type:"String"},__nodl:{type:"Exists",defaultValue:false},qr:{type:"String"},ref:{type:"String"},mt_nav:{type:"Bool",defaultValue:false},_sref_:{type:"Int"},_vref_:{type:"Int"}})}),null);
__d("PagesMetabox.react",["cx","fbt","Link.react","PagesOpenNowDisplayDecision","React","StarRating.react","XPagesProfileReviewsController"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k;j=babelHelpers.inherits(l,c("React").Component);k=j&&j.prototype;function l(){var m,n;"use strict";for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.state={nuxShown:false},n}l.prototype.$PagesMetabox1=function(){"use strict";var m=this.props,n=m.pageURIToken,o=m.rating;if(o===0)return null;var p=c("XPagesProfileReviewsController").getURIBuilder().setString("page_token",n).getURI();return c("React").createElement("span",{className:"_1b__ _3koq",key:"rating"},c("React").createElement(c("Link.react"),{href:p},c("React").createElement(c("StarRating.react"),{fillColor:"fig-blue",rating:o,size:"16"})))};l.prototype.$PagesMetabox2=function(){"use strict";var m=this.props,n=m.openStatus,o=m.openStatusLabel;o=n===c("PagesOpenNowDisplayDecision").SHOW_UNAVAILABLE?i._("Closed Now"):o;if(o===null)return null;return c("React").createElement("span",{className:"_1c00"+(n===c("PagesOpenNowDisplayDecision").SHOW_AVAILABLE?" _14-3":"")+(n===c("PagesOpenNowDisplayDecision").SHOW_UNDETERMINED?" _14-4":"")+(n===c("PagesOpenNowDisplayDecision").NO_SHOW||n===c("PagesOpenNowDisplayDecision").SHOW_UNAVAILABLE||n===c("PagesOpenNowDisplayDecision").SHOW_PERMANENTLY_CLOSED?" _14-5":""),key:"open-status"},o)};l.prototype.$PagesMetabox3=function(){"use strict";if(this.props.openStatusLabel===null||!this.props.isHoliday)return null;return c("React").createElement("div",{className:"_2q9t"},i._("Today is a holiday. Open hours may be different."))};l.prototype.render=function(){"use strict";__p&&__p();var m=this.props,n=m.categoryLabel,o=m.locationLabel,p=m.prepositionLabel,q=this.$PagesMetabox2(),r=this.$PagesMetabox1(),s=null,t=[r,q].filter(function(w){return w});if(t.length==0)t=null;else{for(var u=t.length-1;u>=1;u--)t.splice(u,0," \xb7 ");t=c("React").createElement("div",{className:"_v6p"},t);s=this.$PagesMetabox3()}var v=null;if(o!==null)v=i._("{prepositionLabel}{space}{locationLabel}",[i.param("prepositionLabel",p),i.param("space"," "),i.param("locationLabel",o)]);return c("React").createElement("div",{className:"_1c02"},c("React").createElement("div",{className:"_1c03"},n," ",v),t,s)};f.exports=l}),null);