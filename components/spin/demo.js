webpackJsonp([17,197],{95:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var e=a(7),p=t(e),o=a(8),c=t(o),l=a(4),i=t(l),u=a(6),r=t(u),d=a(5),k=t(d),f=a(1),m=t(f),h=a(143),g=t(h),v=a(3),y=t(v),C=function(n){function s(){return(0,i["default"])(this,s),(0,r["default"])(this,n.apply(this,arguments))}return(0,k["default"])(s,n),s.prototype.render=function(){var n,s=this.props,a=s.prefixCls,t=s.size,e=s.className,o=(0,y["default"])((n={},(0,c["default"])(n,e,!!e),(0,c["default"])(n,a+"-small","small"===t),n));return m["default"].createElement(g["default"],(0,p["default"])({},this.props,{className:o}))},s}(m["default"].Component);s["default"]=C,C.defaultProps={prefixCls:"ant-switch",size:"default"},C.propTypes={prefixCls:f.PropTypes.string,size:f.PropTypes.oneOf(["small","default"]),className:f.PropTypes.string},n.exports=s["default"]},96:function(n,s,a){"use strict";a(11),a(138)},130:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var e=a(8),p=t(e),o=a(4),c=t(o),l=a(6),i=t(l),u=a(5),r=t(u),d=a(1),k=t(d),f=a(2),m=t(f),h=a(38),g=t(h),v=a(12),y=t(v),C=a(3),b=t(C),x=function(n){function s(a){(0,c["default"])(this,s);var t=(0,i["default"])(this,n.call(this,a));return t.handleClose=function(n){n.preventDefault();var s=m["default"].findDOMNode(t);s.style.height=s.offsetHeight+"px",s.style.height=s.offsetHeight+"px",t.setState({closing:!1}),t.props.onClose(n)},t.animationEnd=function(){t.setState({closed:!0,closing:!0})},t.state={closing:!0,closed:!1},t}return(0,r["default"])(s,n),s.prototype.render=function(){var n,s=this.props,a=s.closable,t=s.description,e=s.type,o=s.prefixCls,c=s.message,l=s.closeText,i=s.showIcon,u=s.banner;i=i||u,e=u?"warning":e;var r="";switch(e){case"success":r="check-circle";break;case"info":r="info-circle";break;case"error":r="cross-circle";break;case"warning":r="exclamation-circle";break;default:r="default"}t&&(r+="-o");var d=(0,b["default"])((n={},(0,p["default"])(n,o,!0),(0,p["default"])(n,o+"-"+e,!0),(0,p["default"])(n,o+"-close",!this.state.closing),(0,p["default"])(n,o+"-with-description",!!t),(0,p["default"])(n,o+"-no-icon",!i),(0,p["default"])(n,o+"-banner",!!u),n));return l&&(a=!0),this.state.closed?null:k["default"].createElement(g["default"],{component:"",showProp:"data-show",transitionName:o+"-slide-up",onEnd:this.animationEnd},k["default"].createElement("div",{"data-show":this.state.closing,className:d},i?k["default"].createElement(y["default"],{className:o+"-icon",type:r}):null,k["default"].createElement("span",{className:o+"-message"},c),k["default"].createElement("span",{className:o+"-description"},t),a?k["default"].createElement("a",{onClick:this.handleClose,className:o+"-close-icon"},l||k["default"].createElement(y["default"],{type:"cross"})):null))},s}(k["default"].Component);s["default"]=x,x.defaultProps={prefixCls:"ant-alert",showIcon:!1,onClose:function(){},type:"info"},n.exports=s["default"]},131:function(n,s,a){"use strict";a(11),a(401)},138:function(n,s){},142:function(n,s,a){"use strict";function t(n,s){var a={};for(var t in n)s.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a}function e(n,s,a){return s in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n}function p(){}var o=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},c=a(1),l=a(3),i=c.createClass({displayName:"Switch",propTypes:{className:c.PropTypes.string,prefixCls:c.PropTypes.string,disabled:c.PropTypes.bool,checkedChildren:c.PropTypes.any,unCheckedChildren:c.PropTypes.any,onChange:c.PropTypes.func,onMouseUp:c.PropTypes.func},getDefaultProps:function(){return{prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1,onChange:p}},getInitialState:function(){var n=this.props,s=!1;return s="checked"in n?!!n.checked:!!n.defaultChecked,{checked:s}},componentWillReceiveProps:function(n){"checked"in n&&this.setState({checked:!!n.checked})},setChecked:function(n){"checked"in this.props||this.setState({checked:n}),this.props.onChange(n)},toggle:function(){var n=!this.state.checked;this.setChecked(n)},handleKeyDown:function(n){37===n.keyCode&&this.setChecked(!1),39===n.keyCode&&this.setChecked(!0)},handleMouseUp:function(n){this.refs.node&&this.refs.node.blur(),this.props.onMouseUp&&this.props.onMouseUp(n)},render:function(){var n,s=this.props,a=s.className,i=s.prefixCls,u=s.disabled,r=s.checkedChildren,d=s.unCheckedChildren,k=t(s,["className","prefixCls","disabled","checkedChildren","unCheckedChildren"]),f=this.state.checked,m=l((n={},e(n,a,!!a),e(n,i,!0),e(n,i+"-checked",f),e(n,i+"-disabled",u),n));return c.createElement("span",o({},k,{className:m,tabIndex:"0",ref:"node",onKeyDown:this.handleKeyDown,onClick:u?p:this.toggle,onMouseUp:this.handleMouseUp}),c.createElement("span",{className:i+"-inner"},f?r:d))}});n.exports=i},143:function(n,s,a){"use strict";n.exports=a(142)},160:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var e=a(7),p=t(e),o=a(8),c=t(o),l=a(21),i=t(l),u=a(4),r=t(u),d=a(6),k=t(d),f=a(5),m=t(f),h=a(1),g=t(h),v=a(2),y=a(3),C=t(y),b=a(224),x=t(b),N=a(24),S=t(N),w=a(48),z=t(w),E=function(n){function s(a){(0,r["default"])(this,s);var t=(0,k["default"])(this,n.call(this,a)),e=a.spinning;return t.state={spinning:e},t}return(0,m["default"])(s,n),s.prototype.isNestedPattern=function(){return!(!this.props||!this.props.children)},s.prototype.componentDidMount=function(){(0,x["default"])()||((0,v.findDOMNode)(this).className+=" "+this.props.prefixCls+"-show-text")},s.prototype.componentWillUnmount=function(){this.debounceTimeout&&clearTimeout(this.debounceTimeout)},s.prototype.componentWillReceiveProps=function(n){var s=this,a=this.props.spinning,t=n.spinning;this.debounceTimeout&&clearTimeout(this.debounceTimeout),a&&!t?this.debounceTimeout=setTimeout(function(){return s.setState({spinning:t})},500):this.setState({spinning:t})},s.prototype.render=function(){var n,s=(0,S["default"])(this.props,["className","size","prefixCls","tip"]),a=(0,i["default"])(s,2),t=a[0],e=t.className,o=t.size,l=t.prefixCls,u=t.tip,r=a[1],d=this.state.spinning,k=(0,C["default"])((n={},(0,c["default"])(n,l,!0),(0,c["default"])(n,l+"-sm","small"===o),(0,c["default"])(n,l+"-lg","large"===o),(0,c["default"])(n,l+"-spinning",d),(0,c["default"])(n,l+"-show-text",!!this.props.tip),(0,c["default"])(n,e,!!e),n)),f=(0,z["default"])(r,["spinning"]),m=g["default"].createElement("div",(0,p["default"])({},f,{className:k}),g["default"].createElement("span",{className:l+"-dot"}),u?g["default"].createElement("div",{className:l+"-text"},u):null);return this.isNestedPattern()?g["default"].createElement("div",(0,p["default"])({},f,{className:d?l+"-nested-loading":""}),m,g["default"].createElement("div",{className:l+"-container"},this.props.children)):m},s}(g["default"].Component);s["default"]=E,E.defaultProps={prefixCls:"ant-spin",spinning:!0,size:"default"},E.propTypes={prefixCls:h.PropTypes.string,className:h.PropTypes.string,spinning:h.PropTypes.bool,size:h.PropTypes.oneOf(["small","default","large"])},n.exports=s["default"]},161:function(n,s,a){"use strict";a(11),a(273)},224:function(n,s){"use strict";function a(){if(void 0!==t)return t;var n="Webkit Moz O ms Khtml".split(" "),s=document.createElement("div");if(void 0!==s.style.animationName&&(t=!0),void 0!==t)for(var a=0;a<n.length;a++)if(void 0!==s.style[n[a]+"AnimationName"]){t=!0;break}return t=t||!1}Object.defineProperty(s,"__esModule",{value:!0});var t=void 0;s["default"]=a,n.exports=s["default"]},273:function(n,s){},401:function(n,s){},774:function(n,s,a){n.exports={basic:a(1662),inside:a(1663),nested:a(1664),size:a(1665),tip:a(1666)}},1662:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(161),a(160)),p=t(e),o=a(1),c=t(o),l=a(2);t(l);n.exports={content:{"zh-CN":[["p","\u4e00\u4e2a\u7b80\u5355\u7684 loading \u72b6\u6001\u3002"]],"en-US":[["p","A simple loading status."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c\u7528\u6cd5","en-US":"basic Usage"},filename:"components/spin/demo/basic.md",id:"components-spin-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(p["default"],null)}}},1663:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(161),a(160)),p=t(e),o=a(1),c=t(o),l=a(2);t(l);n.exports={content:{"zh-CN":[["p","\u653e\u5165\u4e00\u4e2a\u5bb9\u5668\u4e2d\u3002"]],"en-US":[["p","Spin in a container."]]},meta:{order:2,title:{"zh-CN":"\u5bb9\u5668","en-US":"Inside a container"},filename:"components/spin/demo/inside.md",id:"components-spin-demo-inside"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",{className:"example"},c["default"].createElement(p["default"],null))},style:".example {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >text-align</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token function" >rgba</span><span class="token punctuation" >(</span><span class="token number" >0</span>,<span class="token number" >0</span>,<span class="token number" >0</span>,<span class="token number" >0.05</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >4</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >30</span>px <span class="token number" >50</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px <span class="token number" >0</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},1664:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(96),a(95)),p=t(e),o=(a(161),a(160)),c=t(o),l=(a(131),a(130)),i=t(l),u=a(1),r=t(u),d=a(2);t(d);n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u76f4\u63a5\u628a\u5185\u5bb9\u5185\u5d4c\u5230 ",["code","Spin"]," \u4e2d\uff0c\u5c06\u73b0\u6709\u5bb9\u5668\u53d8\u4e3a\u52a0\u8f7d\u72b6\u6001\u3002"]],"en-US":[["p","Embedding content into ",["code","Spin"]," will alter it into loading state."]]},meta:{order:3,title:{"zh-CN":"\u5361\u7247\u52a0\u8f7d\u4e2d","en-US":"Embedded mode"},filename:"components/spin/demo/nested.md",id:"components-spin-demo-nested"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin<span class="token punctuation" >,</span> Switch<span class="token punctuation" >,</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Card <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >toggle</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> container <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Alert</span> <span class="token attr-name" >message</span> <span class="token attr-name" >title"</span>\n        <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Further</span> <span class="token attr-name" >details</span> <span class="token attr-name" >about</span> <span class="token attr-name" >the</span> <span class="token attr-name" >context</span> <span class="token attr-name" >of</span> <span class="token attr-name" >this</span> <span class="token attr-name" >alert."</span>\n        <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >spinning</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>loading<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>container<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Spin</span><span class="token punctuation" >></span></span>\n        Loading state\uff1a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>loading<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>toggle<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=r["default"].createClass({displayName:"Card",getInitialState:function(){return{loading:!1}},toggle:function(n){this.setState({loading:n})},render:function(){var n=r["default"].createElement(i["default"],{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"});return r["default"].createElement("div",null,r["default"].createElement(c["default"],{spinning:this.state.loading},n),"Loading state\uff1a",r["default"].createElement(p["default"],{checked:this.state.loading,onChange:this.toggle}))}});return r["default"].createElement(n,null)}}},1665:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(161),a(160)),p=t(e),o=a(1),c=t(o),l=a(2);t(l);n.exports={content:{"zh-CN":[["p","\u5c0f\u7684\u7528\u4e8e\u6587\u672c\u52a0\u8f7d\uff0c\u9ed8\u8ba4\u7528\u4e8e\u5361\u7247\u5bb9\u5668\u7ea7\u52a0\u8f7d\uff0c\u5927\u7684\u7528\u4e8e",["strong","\u9875\u9762\u7ea7"],"\u52a0\u8f7d\u3002"]],"en-US":[["p","A small ",["code","Spin"]," use in loading text, default ",["code","Spin"]," use in loading card-level block, and large ",["code","Spin"]," use in loading ",["strong","page"],"."]]},meta:{order:1,title:{"zh-CN":"\u5404\u79cd\u5927\u5c0f","en-US":"Size"},filename:"components/spin/demo/size.md",id:"components-spin-demo-size"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(p["default"],{size:"small"}),c["default"].createElement(p["default"],null),c["default"].createElement(p["default"],{size:"large"}))},style:"\n.ant-spin {\n  margin-right: 16px;\n}\n"}},1666:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(161),a(160)),p=t(e),o=(a(131),a(130)),c=t(o),l=a(1),i=t(l),u=a(2);t(u);n.exports={content:{"zh-CN":[["p","\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848\u3002"]],"en-US":[["p","Customized description content."]]},meta:{order:4,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848","en-US":"Customized description"},filename:"components/spin/demo/tip.md",id:"components-spin-demo-tip"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin<span class="token punctuation" >,</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >tip</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Loading...<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Alert</span> <span class="token attr-name" >message</span> <span class="token attr-name" >title"</span>\n      <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Further</span> <span class="token attr-name" >details</span> <span class="token attr-name" >about</span> <span class="token attr-name" >the</span> <span class="token attr-name" >context</span> <span class="token attr-name" >of</span> <span class="token attr-name" >this</span> <span class="token attr-name" >alert."</span>\n      <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n    <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Spin</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return i["default"].createElement(p["default"],{tip:"Loading..."},i["default"].createElement(c["default"],{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"}))}}}});