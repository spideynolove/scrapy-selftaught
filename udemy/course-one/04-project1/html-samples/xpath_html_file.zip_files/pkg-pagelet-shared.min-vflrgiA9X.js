define("metaserver/static/js/components/loading_indicator",["require","exports","tslib","classnames","react","prop-types","lodash","metaserver/static/js/modules/core/accessible_announce","metaserver/static/js/modules/core/i18n"],(function(e,t,a,s,n,r,i,o,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingIndicator=t.LoadingIndicatorStyle=void 0,s=a.__importDefault(s),n=a.__importDefault(n),r=a.__importDefault(r),i=a.__importStar(i),t.LoadingIndicatorStyle={DOTS:"dots",SPINNER:"spinner",BLUE_SPINNER:"blue_spinner"};class d extends n.default.Component{componentDidMount(){this.props.shouldAnnounceMessage&&o.AccessibleAnnounce.polite(this.props.startMessage)}componentWillUnmount(){this.props.finishMessage&&this.props.shouldAnnounceMessage&&o.AccessibleAnnounce.polite(this.props.finishMessage)}render(){let e={};if(this.props.className){const t=this.props.className.split(" ");e=i.zipObject(t,t.map(e=>!0))}return e=Object.assign(Object.assign({},e),{"c-loader":!0,"c-loader--spinner":this.props.style===t.LoadingIndicatorStyle.SPINNER,"c-loader--spinner--blue":this.props.style===t.LoadingIndicatorStyle.BLUE_SPINNER}),n.default.createElement("div",{className:s.default(e)},this.props.startMessage)}}t.LoadingIndicator=d,d.displayName="LoadingIndicator",d.LoadingIndicatorStyle=t.LoadingIndicatorStyle,d.propTypes={style:r.default.oneOf(i.values(t.LoadingIndicatorStyle)),className:r.default.string,startMessage:r.default.string,finishMessage:r.default.string,shouldAnnounceMessage:r.default.bool},d.defaultProps={style:t.LoadingIndicatorStyle.DOTS,className:"",startMessage:l.intl.formatMessage({id:"M85BdF",defaultMessage:"Loading…"}),finishMessage:null,shouldAnnounceMessage:!0}}));var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,s){void 0===s&&(s=a),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,s){void 0===s&&(s=a),e[s]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t};define("metaserver/static/js/modules/clean/sharing/async_share_modal_util",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.asyncShowPrefilledShareModal=t.asyncShowShareModal=t.asyncShowNewFolderShareModal=void 0,t.asyncShowNewFolderShareModal=function({contentManagerValidateFolderPath:t,defaultBasePath:a,initialContentName:s,isNonUserRelativeContext:n=!1,logShareModalView:r=!0,modalSessionId:i,onCancel:o,onClose:l,onSetContentNameAndSendShareFail:d,onShareClick:c,onSuccessSharing:h,setUrl:u,shareAsConfidential:p=!1,shareButtonLabelOverride:m,shouldCloseImmediately:f,shouldSuppressRedirectToBrowse:g,shouldSyncThisFolder:_,user:S,experiments:P={},automationOptionChecked:b}){new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/sharing/share_modal_util"],t,a)}).then(__importStar).then(e=>e.showNewFolderShareModal(S,i,a,s,p,n,_,u,t,h,c,g,f,o,l,d,m,r,P,b))},t.asyncShowShareModal=function(t,a,s={},n,r,i=!0){return new Promise(o=>{new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/sharing/share_modal_util"],t,a)}).then(__importStar).then(e=>{o(e.showShareModal(t,a,s,n,r,i))})})},t.asyncShowPrefilledShareModal=function({user:t,sharePrefillEmails:a,content:s,setUrl:n,contentManagerValidateFolderPath:r,extras:i}){new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/sharing/share_modal_util"],t,a)}).then(__importStar).then(e=>{e.showPrefilledShareModal({user:t,sharePrefillEmails:a,content:s,setUrl:n,contentManagerValidateFolderPath:r,extras:i})})}})),define("metaserver/static/js/modules/clean/react/file_path_breadcrumb",["require","exports","tslib","classnames","react","lodash","metaserver/static/js/modules/clean/react/title_bubble","metaserver/static/js/modules/clean/react/sticky_position","metaserver/static/js/modules/clean/em_string"],(function(e,t,a,s,n,r,i,o,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FilePathBreadcrumb=void 0,s=a.__importDefault(s),n=a.__importDefault(n),r=a.__importStar(r);const d=e=>Math.floor(1e3*e),c=e=>e/1e3;function h(e){const t=new l.Emstring(e.name).length;return{name:e.name,href:e.url,width:t,workingWidth:d(t)}}class u extends n.default.Component{constructor(){super(...arguments),this.handlePathClick=e=>{this.props.handlePathClick(e)}}getTotalPathWidth(e){let t=0;const a=d(this.props.pathDividerWidth);for(let s=0;s<e.length;s++){t+=e[s].workingWidth,s<e.length-1&&(t+=a)}return t}getPathsAvailable(){const{paths:e}=this.props;return e.length>1?e.slice(1):e}getPathsToShow(){const e=d(this.props.minPathWidth),t=d(this.props.pathDividerWidth),a=d(this.props.maxWidth),s=this.getPathsAvailable();let n=s.map(h),i=0,o=0;for(;this.getTotalPathWidth(n)>a;){if(o++>100)return l();if(i+3<=s.length){const e=[n[0],h({name:this.props.morePathsString})],t=0===i?2:3,a=n.slice(t,n.length);n=[...e,...a],i++}else{if(1===n.length)return l();{let s=a;for(let e=0;e<n.length-1;e++){s-=n[e].workingWidth+t}if(s<e)return l();{const e=r.last(n);e.width=c(s),e.workingWidth=s}}}}return n;function l(){const e=r.last(n);return e.width=c(a),e.workingWidth=a,[e]}}render(){const e=this.props.pathClassname,{morePathsString:t,useLinks:a}=this.props;let r=!1;const d=this.getPathsToShow().map(i=>{const{name:o,width:d,href:c}=i;r=r||o===t;const h=l.Emstring.em_snippet(o,d),u=[e];return c&&a?(u.push(`${e}--level`),n.default.createElement("a",{href:c,className:s.default(u),onClick:this.handlePathClick},h)):(u.push(`${e}--more`),n.default.createElement("span",{className:s.default(u)},h))}),c=n.default.createElement("span",{className:`${e}--wrapper`},d);return r&&this.props.showTooltipOnTruncated?n.default.createElement(i.TitleBubble,{content:this.getPathsAvailable().map(e=>e.name).join(" > "),position:o.StickyPosition.TOP,isTargetPositionFixed:!0},c):c}}t.FilePathBreadcrumb=u,u.defaultProps={pathClassname:"file-path-breadcrumb-component",maxWidth:46,minPathWidth:3,morePathsString:"…",pathDividerWidth:1.077,handlePathClick:r.noop,useLinks:!0,showTooltipOnTruncated:!1},u.displayName="FilePathBreadcrumb"}));
//# sourceMappingURL=pkg-pagelet-shared.min.js-vfl-U0Ps_.map