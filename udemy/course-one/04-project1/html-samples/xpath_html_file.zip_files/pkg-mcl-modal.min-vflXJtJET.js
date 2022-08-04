define("metaserver/static/js/modules/clean/ux_analytics_modal_tracking",["require","exports","tslib","react"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UXAnalyticsModalTracking=void 0,n=o.__importDefault(n);t.UXAnalyticsModalTracking=function(e){return n.default.createElement("span",{className:"uxa-modal uxa-modal-tracking-span",id:e.id,style:{display:"none"}})}})),define("metaserver/static/js/logging/hive/schemas/web-modal-activity",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebModalActivityRow=t.FolderType=t.ModalEventName=t.ModalName=void 0,(function(e){e.MOVE="move",e.COPY="copy",e.NEW_FOLDER="new_folder",e.UPLOAD="upload",e.SEARCH_FILTER="search_filter",e.KEYBOARD_SHORTCUTS="keyboard_shortcuts",e.EXPORT_LEGAL_HOLD="export_legal_hold",e.FOLDER_OVERVIEW_PIN_TO="folder_overview_pin_to",e.CLOUD_DOCS_CREATE="cloud_docs_create",e.FOLDER_OVERVIEW_EXAMPLES="folder_overview_examples",e.DELETED_FILES_FILTER="deleted_files_filter",e.HOME_NEW_FOLDER="home_new_folder",e.FILE_TRANSFERS_SELECT_FOLDER_SAVE_TO_DROPBOX="file_transfers_select_folder_save_to_dropbox"})(t.ModalName||(t.ModalName={})),(function(e){e.SHOW="show",e.ERROR="error",e.SUCCESS="success",e.DATA_LOADED="data-loaded",e.BREADCRUMB_CLICKED="breadcrumb-clicked",e.ROW_CLICKED="row-clicked",e.READY="ready",e.CLOSE="close",e.PRIMARY_CLICK="primary-click",e.SECONDARY_CLICK="secondary-click",e.CHANGE_FOLDER_AUDIENCE="change-folder-audience",e.FOLDER_SUGGESTION_API_RESPONSE="folder-suggestion-api-response",e.FOLDER_SUGGESTION_CLICKED="folder-suggestion-clicked",e.FOLDER_SUGGESTION_LOCATION_CLICKED="folder-suggestion-location-clicked"})(t.ModalEventName||(t.ModalEventName={})),(function(e){e.CONFIDENTIAL="confidential",e.NON_CONFIDENTIAL="non-confidential"})(t.FolderType||(t.FolderType={}));t.WebModalActivityRow=class{constructor(e){this.category="web-modal-activity",this.user_id=null,this.team_id=null,this.modal_name=e.modal_name,this.modal_session_id=e.modal_session_id,this.event_name=e.event_name.toString(),e.hasOwnProperty("timestamp")&&void 0!==e.timestamp?this.timestamp=e.timestamp:this.timestamp=Date.now(),e.hasOwnProperty("user_id")&&void 0!==e.user_id&&(this.user_id=e.user_id),e.hasOwnProperty("team_id")&&void 0!==e.team_id&&(this.team_id=e.team_id),e.hasOwnProperty("session_id")&&void 0!==e.session_id&&(this.session_id=e.session_id),e.hasOwnProperty("path")&&void 0!==e.path&&(this.path=e.path),e.hasOwnProperty("index")&&void 0!==e.index&&(this.index=e.index),e.hasOwnProperty("is_keyboard")&&void 0!==e.is_keyboard&&(this.is_keyboard=e.is_keyboard),e.hasOwnProperty("error")&&void 0!==e.error&&(this.error=e.error),e.hasOwnProperty("folder_type")&&void 0!==e.folder_type&&(this.folder_type=e.folder_type),e.hasOwnProperty("folder_suggestion_path")&&void 0!==e.folder_suggestion_path&&(this.folder_suggestion_path=e.folder_suggestion_path),e.hasOwnProperty("ml_extra")&&void 0!==e.ml_extra&&(this.ml_extra=e.ml_extra),Object.seal(this)}}})),define("spectrum/label/index",["require","exports","tslib","spectrum/label/label"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t)})),define("spectrum/label/label",["require","exports","tslib","classnames","react"],(function(e,t,o,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0,n=o.__importDefault(n),r=o.__importStar(r);t.Label=e=>{const{children:t,className:l,disabled:a}=e,s=o.__rest(e,["children","className","disabled"]),i=n.default(l,{"mc-label":!0,"mc-label-disabled":a});return r.createElement("label",Object.assign({className:i},s),t)},t.Label.displayName="Label"})),define("spectrum/modal/index",["require","exports","tslib","spectrum/modal/modal","spectrum/modal/utility_modal"],(function(e,t,o,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t),o.__exportStar(r,t)})),define("spectrum/modal/modal",["require","exports","tslib","classnames","react","react-modal","spectrum/button/index","spectrum/icon_form/index","spectrum/scroll_locker/index"],(function(e,t,o,n,r,l,a,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0,n=o.__importDefault(n),r=o.__importStar(r),l=o.__importDefault(l);class u extends r.Component{constructor(){super(...arguments),this.initBodyPaddingRight="0",this.closeButtonRef=r.createRef(),this.performModalOpenOperation=()=>{this.initBodyPaddingRight=i.getBodyPadding(),i.lockScroll()},this.performModalCloseOperation=()=>{i.unlockScroll(this.initBodyPaddingRight)},this.findElementToFocus=()=>{const{focusedElementOnOpen:e}=this.props;return e&&e.current?e.current:this.closeButtonRef.current},this.onAfterOpen=()=>{const e=this.findElementToFocus();e&&e.focus(),this.props.onReady&&this.props.onReady()}}componentDidMount(){this.props.open&&this.performModalOpenOperation()}componentDidUpdate(e){this.props.open&&!e.open?this.performModalOpenOperation():!this.props.open&&e.open&&this.performModalCloseOperation()}componentWillUnmount(){this.performModalCloseOperation()}render(){const{className:e,overlayClassName:t,width:o,height:i,bodyClassName:u,bodyId:c,displayCloseButton:d,children:p}=this.props,f=n.default("mc-modal",e),m=n.default("mc-modal-overlay",t),h=this.props.contentTagName||"div",y={overflowX:"hidden",overflowY:"auto",width:o,height:i},v={contentLabel:this.props.ariaLabel,isOpen:this.props.open,onAfterOpen:this.onAfterOpen,onRequestClose:this.props.onRequestClose,className:f,overlayClassName:m,shouldCloseOnOverlayClick:this.props.overlayClickClose,shouldFocusAfterRender:!1,parentSelector:this.props.parentElement,style:{content:y},appElement:this.props.appElement};return r.createElement(l.default,Object.assign({},v),r.createElement(h,{className:n.default("mc-modal-body",u),id:c,style:y},d&&r.createElement(a.Button,{variant:"styleless",className:"mc-modal-close",onClick:this.props.onRequestClose,ref:this.closeButtonRef},r.createElement(s.IconForm,{className:"mc-modal-close-icon",name:"cancel"})),p))}}t.Modal=u})),define("spectrum/modal/utility_modal",["require","exports","tslib","spectrum/button/index","spectrum/tertiary_link/index","classnames","react","spectrum/modal/modal"],(function(e,t,o,n,r,l,a,s){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.UtilityModal=t.ModalFocus=void 0,l=o.__importDefault(l),a=o.__importStar(a),(i=t.ModalFocus||(t.ModalFocus={})).PRIMARY="Primary",i.SECONDARY="Secondary",i.TERTIARY="Tertiary",i.CLOSE="Close";const u=a.forwardRef(({element:e,defaultElement:t,onAction:o},n)=>"function"==typeof e?e(o,n):t(e,o,n));t.UtilityModal=e=>{var{primaryAction:i,secondaryAction:c,link:d,title:p,variant:f="regular",onPrimaryAction:m,onSecondaryAction:h,onLink:y,overlayClickClose:v=!0,displayCloseButton:_=!1,children:b,ref:O,bodyClassName:C,utilBodyClassName:E,utilBodyStyle:g,utilBodyTabIndex:R,shouldRequestCloseOnActions:w=!0,focusedElementOnOpen:S=t.ModalFocus.PRIMARY}=e,M=o.__rest(e,["primaryAction","secondaryAction","link","title","variant","onPrimaryAction","onSecondaryAction","onLink","overlayClickClose","displayCloseButton","children","ref","bodyClassName","utilBodyClassName","utilBodyStyle","utilBodyTabIndex","shouldRequestCloseOnActions","focusedElementOnOpen"]);const N=l.default({"mc-util-modal":!0,"mc-util-modal-regular":"regular"===f,"mc-util-modal-small":"small"===f},C),P=a.createRef(),A=e=>()=>{const{onRequestClose:t}=M;e&&e(),t&&w&&t()};return a.createElement(s.Modal,Object.assign({displayCloseButton:_,bodyClassName:N,overlayClickClose:v,focusedElementOnOpen:"object"==typeof S?S:P},M),a.createElement("div",{className:"mc-util-modal-header"},p),a.createElement("div",{className:l.default("mc-util-modal-body",E),style:g,tabIndex:R},b),a.createElement("div",{className:"mc-util-modal-actions"},a.createElement("div",null,"regular"===f&&d?a.createElement(u,{element:d,ref:P,defaultElement:(e,o,n)=>a.createElement(r.TertiaryLink,{onClick:o,ref:S===t.ModalFocus.TERTIARY?n:null},e),onAction:y}):null),a.createElement("div",{className:"mc-util-modal-actions-buttons"},c&&a.createElement(u,{element:c,ref:P,defaultElement:(e,o,r)=>a.createElement(n.Button,{variant:"secondary",onClick:o,ref:S===t.ModalFocus.SECONDARY?r:null},e),onAction:A(h)}),a.createElement(u,{element:i,ref:P,defaultElement:(e,o,r)=>a.createElement(n.Button,{variant:"primary",onClick:o,ref:S===t.ModalFocus.PRIMARY?r:null},e),onAction:A(m)}))))},t.UtilityModal.displayName="UtilityModal"})),define("spectrum/radio_button/index",["require","exports","tslib","spectrum/radio_button/radio_button"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t)})),define("spectrum/radio_button/radio_button",["require","exports","tslib","classnames","react","spectrum/label/index"],(function(e,t,o,n,r,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RadioButton=void 0,n=o.__importDefault(n),r=o.__importStar(r);t.RadioButton=e=>{var{className:t,children:a,labelClass:s}=e,i=o.__rest(e,["className","children","labelClass"]);const u=n.default(t,{"mc-radio":!0,"mc-radio-disabled":i.disabled}),c=n.default("mc-radio-label",s),d=r.createElement("input",Object.assign({type:"radio",className:u},i));return a?r.createElement(l.Label,{className:c,disabled:i.disabled},d," ",a):d},t.RadioButton.displayName="RadioButton"})),define("spectrum/scroll_locker/index",["require","exports","tslib","spectrum/scroll_locker/scroll_locker"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t)})),define("spectrum/scroll_locker/scroll_locker",["require","exports","exenv"],(function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unlockScroll=t.lockScroll=t.getBodyPadding=void 0;function n(){if(!o.canUseDOM)return;document.body.clientWidth<window.innerWidth&&(document.body.style.paddingRight=(function(){if(!o.canUseDOM)return 0;const e=document.createElement("div");e.className="scrollbar-measure",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t})()+"px")}t.getBodyPadding=function(){return o.canUseDOM&&document.body.style.paddingRight||"0"},t.lockScroll=function(){n(),o.canUseDOM&&document.documentElement.classList.add("mc-no-scroll")},t.unlockScroll=function(e){var t;t=e,o.canUseDOM&&(document.body.style.paddingRight=t),o.canUseDOM&&document.documentElement.classList.remove("mc-no-scroll")}})),define("metaserver/static/js/prod_assets_web_modules/react-modal",["./common/_commonjsHelpers","react","react-dom"],(function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=n(t),l=n(o),a={exports:{}},s={},i={exports:{}};function u(){}function c(){}c.resetWarningCache=u,i.exports=(function(){function e(e,t,o,n,r,l){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==l){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:u};return o.PropTypes=o,o})();var d={exports:{}},p={},f={exports:{}};!(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(l)};var o=/input|select|textarea|button|object/;function n(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var o=window.getComputedStyle(e);return t?"visible"!==o.getPropertyValue("overflow"):"none"==o.getPropertyValue("display")}function r(e,t){var r=e.nodeName.toLowerCase();return(o.test(r)&&!e.disabled||"a"===r&&e.href||t)&&(function(e){for(var t=e;t&&t!==document.body;){if(n(t))return!1;t=t.parentNode}return!0})(e)}function l(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var o=isNaN(t);return(o||t>=0)&&r(e,!o)}e.exports=t.default})(f,f.exports),Object.defineProperty(p,"__esModule",{value:!0}),p.handleBlur=b,p.handleFocus=O,p.markForFocusLater=function(){y.push(document.activeElement)},p.returnFocus=function(){var e=null;try{return void(0!==y.length&&(e=y.pop()).focus())}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}},p.popWithoutFocus=function(){y.length>0&&y.pop()},p.setupScopedFocus=function(e){v=e,window.addEventListener?(window.addEventListener("blur",b,!1),document.addEventListener("focus",O,!0)):(window.attachEvent("onBlur",b),document.attachEvent("onFocus",O))},p.teardownScopedFocus=function(){v=null,window.addEventListener?(window.removeEventListener("blur",b),document.removeEventListener("focus",O)):(window.detachEvent("onBlur",b),document.detachEvent("onFocus",O))};var m,h=(m=f.exports)&&m.__esModule?m:{default:m},y=[],v=null,_=!1;function b(){_=!0}function O(){if(_){if(_=!1,!v)return;setTimeout((function(){v.contains(document.activeElement)||((0,h.default)(v)[0]||v).focus()}),0)}}var C={exports:{}};!(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,o.default)(e);if(n.length){var r,l=t.shiftKey,a=n[0],s=n[n.length-1];if(e===document.activeElement){if(!l)return;r=s}if(s!==document.activeElement||l||(r=a),a===document.activeElement&&l&&(r=s),r)return t.preventDefault(),void r.focus();var i=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null!=i&&"Chrome"!=i[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent)){var u=n.indexOf(document.activeElement);if(u>-1&&(u+=l?-1:1),void 0===n[u])return t.preventDefault(),void(r=l?s:a).focus();t.preventDefault(),n[u].focus()}}else t.preventDefault()};var o=(function(e){return e&&e.__esModule?e:{default:e}})(f.exports);e.exports=t.default})(C,C.exports);var E,g,R,w={},S={},M={exports:{}};E=M,R={canUseDOM:g=!("undefined"==typeof window||!window.document||!window.document.createElement),canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:g&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:g&&!!window.screen},E.exports?E.exports=R:window.ExecutionEnvironment=R,Object.defineProperty(S,"__esModule",{value:!0}),S.canUseDOM=void 0;var N=(function(e){return e&&e.__esModule?e:{default:e}})(M.exports).default,P=N.canUseDOM?window.HTMLElement:{};S.canUseDOM=N.canUseDOM,S.default=P,Object.defineProperty(w,"__esModule",{value:!0}),w.assertNodeList=T,w.setElement=function(e){var t=e;if("string"==typeof t&&D.canUseDOM){var o=document.querySelectorAll(t);T(o,t),t="length"in o?o[0]:o}return x=t||x},w.validateElement=k,w.hide=function(e){k(e)&&(e||x).setAttribute("aria-hidden","true")},w.show=function(e){k(e)&&(e||x).removeAttribute("aria-hidden")},w.documentNotReadyOrSSRTesting=function(){x=null},w.resetForTesting=function(){x=null};var A=(function(e){return e&&e.__esModule?e:{default:e}})((function(){})),D=S,x=null;function T(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function k(e){return!(!e&&!x&&((0,A.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),1))}var F={};Object.defineProperty(F,"__esModule",{value:!0}),F.dumpClassLists=function(){};var j={},L={};function U(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function I(e){this.setState(function(t){var o=this.constructor.getDerivedStateFromProps(e,t);return null!=o?o:null}.bind(this))}function W(e,t){try{var o=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,n)}finally{this.props=o,this.state=n}}F.add=function(e,t){return o=e.classList,n="html"==e.nodeName.toLowerCase()?j:L,void t.split(" ").forEach((function(e){!(function(e,t){e[t]||(e[t]=0),e[t]+=1})(n,e),o.add(e)}));var o,n},F.remove=function(e,t){return o=e.classList,n="html"==e.nodeName.toLowerCase()?j:L,void t.split(" ").forEach((function(e){!(function(e,t){e[t]&&(e[t]-=1)})(n,e),0===n[e]&&o.remove(e)}));var o,n},(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=(function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}})(),a=r.default,s=v(a),u=v(i.exports),c=y(p),d=v(C.exports),f=y(w),m=y(F),h=v(S);function y(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function v(e){return e&&e.__esModule?e:{default:e}}var _={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=0,O=(function(e){function t(e){!(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t);var o=(function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t})(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.setOverlayRef=function(e){o.overlay=e,o.props.overlayRef&&o.props.overlayRef(e)},o.setContentRef=function(e){o.content=e,o.props.contentRef&&o.props.contentRef(e)},o.afterClose=function(){var e=o.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,l=e.bodyOpenClassName;l&&m.remove(document.body,l),r&&m.remove(document.getElementsByTagName("html")[0],r),n&&b>0&&0==(b-=1)&&f.show(t),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(c.returnFocus(),c.teardownScopedFocus()):c.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose()},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(c.setupScopedFocus(o.node),c.markForFocusLater()),o.setState({isOpen:!0},(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen()})))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus()},o.closeWithTimeout=function(){var e=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:e},(function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())}))},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(e){9===e.keyCode&&(0,d.default)(o.content,e),o.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),o.requestClose(e))},o.handleOverlayOnClick=function(e){null===o.shouldClose&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(e):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(e){o.props.shouldCloseOnOverlayClick||e.target!=o.overlay||e.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(e){return o.ownerHandlesClose()&&o.props.onRequestClose(e)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(e,t){var r="object"===(void 0===t?"undefined":n(t))?t:{base:_[e],afterOpen:_[e]+"--after-open",beforeClose:_[e]+"--before-close"},l=r.base;return o.state.afterOpen&&(l=l+" "+r.afterOpen),o.state.beforeClose&&(l=l+" "+r.beforeClose),"string"==typeof t&&t?l+" "+t:l},o.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(o,n){return o[e+"-"+n]=t[n],o}),{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,e),l(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,o=e.ariaHideApp,n=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&m.add(document.body,r),n&&m.add(document.getElementsByTagName("html")[0],n),o&&(b+=1,f.hide(t))}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,l=e.defaultStyles,a=n?{}:l.content,i=r?{}:l.overlay;return this.shouldBeClosed()?null:s.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},s.default.createElement("div",o({id:t,ref:this.setContentRef,style:o({},a,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),this.props.children))}}]),t})(a.Component);O.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},O.propTypes={isOpen:u.default.bool.isRequired,defaultStyles:u.default.shape({content:u.default.object,overlay:u.default.object}),style:u.default.shape({content:u.default.object,overlay:u.default.object}),className:u.default.oneOfType([u.default.string,u.default.object]),overlayClassName:u.default.oneOfType([u.default.string,u.default.object]),bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,ariaHideApp:u.default.bool,appElement:u.default.instanceOf(h.default),onAfterOpen:u.default.func,onAfterClose:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,role:u.default.string,contentLabel:u.default.string,aria:u.default.object,data:u.default.object,children:u.default.node,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,testId:u.default.string},t.default=O,e.exports=t.default})(d,d.exports),U.__suppressDeprecationWarning=!0,I.__suppressDeprecationWarning=!0,W.__suppressDeprecationWarning=!0;var B=Object.freeze({__proto__:null,polyfill:function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,n=null,r=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?n="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(n="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==o||null!==n||null!==r){var l=e.displayName||e.name,a="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+a+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=U,t.componentWillReceiveProps=I),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=W;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,o){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:o;s.call(this,e,t,n)}}return e}}),q=e.getAugmentedNamespace(B);Object.defineProperty(s,"__esModule",{value:!0}),s.bodyOpenClassName=s.portalClassName=void 0;var H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},Y=(function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}})(),K=r.default,V=ee(K),G=ee(l.default),X=ee(i.exports),z=ee(d.exports),J=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t})(w),Q=S,Z=ee(Q),$=q;function ee(e){return e&&e.__esModule?e:{default:e}}function te(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var ne=s.portalClassName="ReactModalPortal",re=s.bodyOpenClassName="ReactModal__Body--open",le=void 0!==G.default.createPortal,ae=function(){return le?G.default.createPortal:G.default.unstable_renderSubtreeIntoContainer};function se(e){return e()}var ie=(function(e){function t(){var e,o,n;te(this,t);for(var r=arguments.length,l=Array(r),a=0;a<r;a++)l[a]=arguments[a];return o=n=oe(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.removePortal=function(){!le&&G.default.unmountComponentAtNode(n.node),se(n.props.parentSelector).removeChild(n.node)},n.portalRef=function(e){n.portal=e},n.renderPortal=function(e){var o=ae()(n,V.default.createElement(z.default,H({defaultStyles:t.defaultStyles},e)),n.node);n.portalRef(o)},oe(n,o)}return(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,e),Y(t,[{key:"componentDidMount",value:function(){Q.canUseDOM&&(le||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,se(this.props.parentSelector).appendChild(this.node),!le&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:se(e.parentSelector),nextParent:se(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,o){if(Q.canUseDOM){var n=this.props,r=n.isOpen,l=n.portalClassName;e.portalClassName!==l&&(this.node.className=l);var a=o.prevParent,s=o.nextParent;s!==a&&(a.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||r)&&!le&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(Q.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),o=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);o?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-t)):this.removePortal()}}},{key:"render",value:function(){return Q.canUseDOM&&le?(!this.node&&le&&(this.node=document.createElement("div")),ae()(V.default.createElement(z.default,H({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){J.setElement(e)}}]),t})(K.Component);return ie.propTypes={isOpen:X.default.bool.isRequired,style:X.default.shape({content:X.default.object,overlay:X.default.object}),portalClassName:X.default.string,bodyOpenClassName:X.default.string,htmlOpenClassName:X.default.string,className:X.default.oneOfType([X.default.string,X.default.shape({base:X.default.string.isRequired,afterOpen:X.default.string.isRequired,beforeClose:X.default.string.isRequired})]),overlayClassName:X.default.oneOfType([X.default.string,X.default.shape({base:X.default.string.isRequired,afterOpen:X.default.string.isRequired,beforeClose:X.default.string.isRequired})]),appElement:X.default.instanceOf(Z.default),onAfterOpen:X.default.func,onRequestClose:X.default.func,closeTimeoutMS:X.default.number,ariaHideApp:X.default.bool,shouldFocusAfterRender:X.default.bool,shouldCloseOnOverlayClick:X.default.bool,shouldReturnFocusAfterClose:X.default.bool,parentSelector:X.default.func,aria:X.default.object,data:X.default.object,role:X.default.string,contentLabel:X.default.string,shouldCloseOnEsc:X.default.bool,overlayRef:X.default.func,contentRef:X.default.func},ie.defaultProps={isOpen:!1,portalClassName:ne,bodyOpenClassName:re,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},ie.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,$.polyfill)(ie),s.default=ie,(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=(function(e){return e&&e.__esModule?e:{default:e}})(s);t.default=o.default,e.exports=t.default})(a,a.exports),e.getDefaultExportFromCjs(a.exports)}));
//# sourceMappingURL=pkg-mcl-modal.min.js-vfl3IwC-Y.map