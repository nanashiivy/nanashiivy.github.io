if (self.CavalryLogger) { CavalryLogger.start_js(["sFhWI"]); }

__d("Facepile.react",["cx","fbt","ix","intlSummarizeNumber","joinClasses","HovercardLink","Image.react","Link.react","List.react","React"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k=c("React").PropTypes,l={small:24,medium:32,large:50},m=c("React").createClass({displayName:"Facepile",defaultProps:{moreColor:"blue",moreCount:0,showHovercard:false,tooltipPosition:"above",showToolTip:true,spacing:"none"},propTypes:{className:k.string,moreColor:k.oneOf(["blue","gray"]),moreCount:k.number,moreDialogLink:k.string,morePageLink:k.string,numFaces:k.number,onFaceClick:k.func,onComponentDidMount:k.func,profiles:k.arrayOf(k.shape({URL:k.any,name:k.node.isRequired,uniqueID:k.any.isRequired,profilePicURI:k.any.isRequired})).isRequired,showHovercard:k.bool,size:k.oneOf([28,"small","medium","large"]).isRequired,spacing:k.oneOf(["none","small","medium","large"]),showToolTip:k.bool,tooltipPosition:k.oneOf(["above","below","left","right"])},_onFaceClick:function n(o,p){if(this.props.onFaceClick)this.props.onFaceClick(o,p)},componentDidMount:function n(){if(this.props.onComponentDidMount)this.props.onComponentDidMount()},getPicSize:function n(){return l[this.props.size]||this.props.size},renderFace:function n(o,p){var q=this.getPicSize(),r=c("HovercardLink").constructEndpoint({id:o.uniqueID}).toString();return c("React").createElement("li",{className:"_43q7",key:o.uniqueID,onClick:this._onFaceClick.bind(this,o,p)},c("React").createElement(c("Link.react"),{"aria-label":o.name,className:"_2rt_ link","data-hover":!this.props.showHovercard?"tooltip":null,"data-hovercard":this.props.showHovercard?r:null,"data-ignoreclass":"_2rt_","data-tooltip-alignh":"left","data-tooltip-content":o.name,"data-tooltip-position":this.props.tooltipPosition,href:o.URL},c("React").createElement(c("Image.react"),{src:o.profilePicURI,width:q,height:q,className:"img"})))},renderMore:function n(){__p&&__p();if(!this.props.moreCount)return null;var o=this.props.numFaces!=null&&this.props.numFaces<=this.props.profiles.length?this.props.moreCount+1:this.props.moreCount,p=c("intlSummarizeNumber")(o,0),q=p.length,r;if(o===0||this.props.size==="small"&&q>2||this.props.size===28&&q>2||this.props.size==="medium"&&q>3||this.props.size==="large"&&q>6)r=c("React").createElement(c("Image.react"),{src:j("97502")});else r="+"+p;var s;if(this.props.showToolTip===undefined||this.props.showToolTip===true)if(o===1)s=i._("1 other person");else s=i._("{num} other people",[i.param("num",o)]);var t=c("joinClasses")("_43q8 _43q7"+(q<2?" _43qa":"")+(q===2?" _43qb":"")+(q===3?" _43qd":"")+(q>3?" _43qe":"")+(this.props.moreColor==="blue"?" _49c8":"")+(this.props.moreColor==="gray"?" _49cb":""));return c("React").createElement("li",{className:t},c("React").createElement("a",{"data-hover":s?"tooltip":null,"data-tooltip-position":s?"right":null,"data-tooltip-content":s,ajaxify:this.props.moreDialogLink||this.props.morePageLink,href:this.props.morePageLink,role:"button",rel:this.props.moreDialogLink?"dialog":null},r))},render:function n(){var o=this.props.spacing||this.defaultProps.spacing,p=c("joinClasses")(this.props.className,"_43qm"+(this.props.size==28?" _3cxu":"")+(this.props.size=="small"?" _43q9":"")+(this.props.size=="medium"?" _43qc":"")+(this.props.size=="large"?" _43qf":"")+(o!=this.defaultProps.spacing?" _4nab":"")),q=this.props.numFaces==undefined?this.props.profiles:this.props.profiles.slice(0,this.props.moreCount?this.props.numFaces-1:this.props.numFaces);return c("React").createElement("div",{className:p,style:this.props.style},c("React").createElement(c("List.react"),{className:"_4cg3",direction:"horizontal",spacing:this.props.spacing||"none",border:"none"},q.map(this.renderFace),this.renderMore()))}});f.exports=m}),null);
__d("SpotlightViewerClose",["cx","fbt","React","TooltipLink.react","joinClasses"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("React").Component);k=j&&j.prototype;m.prototype.render=function(){"use strict";var n=this.props.position=="left"?"_5wx3":"_5wx4",o=c("React").createElement("span",null,i._("Press Esc to close"));return c("React").createElement(c("TooltipLink.react"),{className:c("joinClasses")("_4-o9 _50-m _51an",n,this.props.isFixed?"_2chv":""),onClick:this.props.onClick,tooltip:o})};function m(){"use strict";j.apply(this,arguments)}m.propTypes={position:l.oneOf(["left","right"]),isFixed:l.bool};m.defaultProps={position:"right",isFixed:false};f.exports=m}),null);