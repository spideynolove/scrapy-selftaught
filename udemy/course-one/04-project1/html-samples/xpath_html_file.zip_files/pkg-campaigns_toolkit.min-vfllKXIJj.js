define("metaserver/static/js/campaigns/api",["require","exports","tslib","metaserver/static/js/modules/clean/active_user","metaserver/static/js/api_v2/default_user_client","metaserver/static/js/modules/core/exception"],(function(e,t,a,n,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBestCampaignsForUser=void 0,r=a.__importStar(r),t.getBestCampaignsForUser=function(e){if(!e.campaign_properties||0===Object.keys(e.campaign_properties).length)throw new Error("campaign_properties cannot be empty");const t=n.mustGetActiveUser();return new i.DefaultUserApiV2Client(t).ns("campaigns_toolkit").rpc("get_best_campaigns_for_user",e,{}).catch(t=>(r.reportException({err:t,tags:["fetchCampaigns","activation-platform","activation","onboarding-activation"],severity:r.SEVERITY.NONCRITICAL,exc_extra:{args:e}}),{campaigns:[],campaigns_to_slots:{}}))}})),define("metaserver/static/js/campaigns/campaign_events_api",["require","exports","tslib","react","metaserver/static/js/modules/core/exception","metaserver/static/js/api_v2/user_client","metaserver/static/js/modules/clean/active_user","metaserver/static/js/user_metadata/api"],(function(e,t,a,n,i,r,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CampaignContext=t.parseIntOrUndefined=t.reportException=t.logCampaignControl=t.logCampaignDismissed=t.setCampaignDismissedInUserMetadata=t.getIsCampaignDismissedInUserMetadata=t.logCampaignClick=t.logCampaignImpressionDeclined=t.logCampaignImpression=t.createMegaphoneCampaignImpressionContextFromMegaphoneImpressionContext=t.createMegaphoneCampaignImpressionContext=t.createMegaphoneCampaignImpressionContextFromEnrichedCampaignImpressionContext=void 0,n=a.__importDefault(n),i=a.__importStar(i);function c(e,t,a){let n=void 0;try{n={campaignId:t,campaignVariantId:a,campaignImpressionId:e,userId:s.mustGetActiveUserId()}}catch(e){reportException({err:e})}return n}function reportException({err:e,severity:t=i.SEVERITY.NONCRITICAL,exc_extra:a={}}){i.reportException({err:e,tags:["megaphone","robe"],severity:t,exc_extra:a})}function m(e,t,a){const n=new r.UserApiV2Client,i={megaphone_impression_id:e.campaignImpressionId,megaphone_request_context:{user_id:e.userId},campaign_event_name:t,campaign_event_info:a,campaign_id:p(e.campaignId),version_id:p(e.campaignVariantId)};return n.ns("megaphone").rpc("log_campaign_event",i,{subjectUserId:e.userId}).catch(a=>{reportException({err:a,exc_extra:{user_id:e.userId,impression_id:e.campaignImpressionId,event_name:t[".tag"]}})})}function p(e){switch(typeof e){case"string":return parseInt(e,10);case"number":return e;default:return}}t.createMegaphoneCampaignImpressionContextFromEnrichedCampaignImpressionContext=function(e){var t,a;return c(e.megaphone_impression_id||"",null===(t=e.campaign_variant_descriptor)||void 0===t?void 0:t.campaign_id,null===(a=e.campaign_variant_descriptor)||void 0===a?void 0:a.variant_id)},t.createMegaphoneCampaignImpressionContext=c,t.createMegaphoneCampaignImpressionContextFromMegaphoneImpressionContext=function(e){var t,a,n,i;if(e.megaphone_impression_id)return c(e.megaphone_impression_id,null===(a=null===(t=e.version_info)||void 0===t?void 0:t.campaign_id)||void 0===a?void 0:a.toString(),null===(i=null===(n=e.version_info)||void 0===n?void 0:n.version_id)||void 0===i?void 0:i.toString())},t.logCampaignImpression=function(e){return m(e,{".tag":"impression"})},t.logCampaignImpressionDeclined=function(e){return m(e,{".tag":"impression_declined"})},t.logCampaignClick=function(e,t){return m(e,{".tag":"click"},{cta_id:t})},t.getIsCampaignDismissedInUserMetadata=function(e,t,n){return a.__awaiter(this,void 0,void 0,(function*(){if(e)try{const{CAMPAIGNS_TOOLKIT_USER_DISMISSED_CAMPAIGNS:t}=yield o.getUserMetadata(["CAMPAIGNS_TOOLKIT_USER_DISMISSED_CAMPAIGNS"],n);return!!t&&new Set(t.split(":")).has(`${e}`)}catch(a){return reportException({err:a,exc_extra:{user_id:n,impression_id:t,campaign_id:e,event_name:"getIsCampaignDismissedInUserMetadata"}}),!0}return!1}))},t.setCampaignDismissedInUserMetadata=function(e,t,n){return a.__awaiter(this,void 0,void 0,(function*(){if(e)try{const{CAMPAIGNS_TOOLKIT_USER_DISMISSED_CAMPAIGNS:t}=yield o.getUserMetadata(["CAMPAIGNS_TOOLKIT_USER_DISMISSED_CAMPAIGNS"],n),a=new Set(t?t.split(":"):"").add(`${e}`),i=Array.from(a).join(":");yield o.setUserMetadata({CAMPAIGNS_TOOLKIT_USER_DISMISSED_CAMPAIGNS:i},n)}catch(a){reportException({err:a,exc_extra:{user_id:n,impression_id:t,campaign_id:e,event_name:"setCampaignDismissedInUserMetadata"}})}}))},t.logCampaignDismissed=function(e){return m(e,{".tag":"dismissed"})},t.logCampaignControl=function(e){return m(e,{".tag":"control"})},t.reportException=reportException,t.parseIntOrUndefined=p,t.CampaignContext=n.default.createContext(void 0)})),define("metaserver/static/js/campaigns/campaign_hooks",["require","exports","react","metaserver/static/js/campaigns/campaign_events_api","metaserver/static/js/campaigns/emitter"],(function(e,t,a,n,i){"use strict";function r(e){n.logCampaignImpression(e)}function s(e){n.logCampaignImpressionDeclined(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.useCampaignDismissed=t.useCampaignClick=t.useCampaignAsync=t.useCampaign=void 0,t.useCampaign=function(e,t){a.useEffect(()=>{(null==e?void 0:e.campaignImpressionId)&&(t?s(e):r(e))},[])},t.useCampaignAsync=function(){return{onCampaignImpression:a.useCallback((function(e,t){e.campaignImpressionId&&(t?s(e):r(e))}),[])}},t.useCampaignClick=function(e,t){return{onCampaignClickCallback:a.useCallback((function(){(null==e?void 0:e.campaignImpressionId)&&n.logCampaignClick(e,t)}),[e,t])}},t.useCampaignDismissed=function(e){return{onCampaignDismissedCallback:a.useCallback((function(){(null==e?void 0:e.campaignId)&&i.emitCampaignDismissed(null==e?void 0:e.campaignId),(null==e?void 0:e.campaignImpressionId)&&(n.logCampaignDismissed(e),n.setCampaignDismissedInUserMetadata(null==e?void 0:e.campaignId,null==e?void 0:e.campaignImpressionId,null==e?void 0:e.userId))}),[e])}}}));var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t};define("metaserver/static/js/campaigns/campaign_formats/banner/loadable_banner",["require","exports","metaserver/static/js/async/loadable"],(function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AsyncCampaignBanner=void 0,t.AsyncCampaignBanner=a.Loadable({loader:()=>new Promise((t,a)=>{e(["metaserver/static/js/campaigns/campaign_formats/banner/banner"],t,a)}).then(__importStar).then(({CampaignBanner:e})=>e)})}));__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t};define("metaserver/static/js/campaigns/campaign_formats/banner/loadable_campaign_banner",["require","exports","metaserver/static/js/async/loadable"],(function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AsyncCampaignBanner=void 0,t.AsyncCampaignBanner=a.Loadable({loader:()=>new Promise((t,a)=>{e(["metaserver/static/js/campaigns/campaign_formats/banner/campaign_banner"],t,a)}).then(__importStar).then(({CampaignBannerConversionComponent:e})=>e)})})),define("metaserver/static/js/campaigns/campaign_formats/index",["require","exports","tslib","react","metaserver/static/js/campaigns/campaign_formats/banner/loadable_banner","metaserver/static/js/campaigns/emitter","metaserver/static/js/campaigns/types","metaserver/static/js/campaigns/utils","metaserver/static/js/campaigns/errors"],(function(e,t,a,n,i,r,s,o,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CampaignFormatWithListener=t.CampaignFormat=t.CAMPAIGN_FORMATS=void 0,n=a.__importStar(n),t.CAMPAIGN_FORMATS={[s.CampaignFormats.BANNER]:i.AsyncCampaignBanner};t.CampaignFormat=({allowedComponents:e,impression:a})=>{var i,r,s,m;const p=null===(r=null===(i=a.campaign_variant_descriptor)||void 0===i?void 0:i.variant_content)||void 0===r?void 0:r.format,l=t.CAMPAIGN_FORMATS[p],d=o.checkForRequiredKeysInContentDictionary(a);if(!e.includes(p)||!l||!d)return c.logCampaignFormatFailedRenderError(new c.CampaignFormatFailedRenderError(e.includes(p)?null:p||"undefined",l?null:p||"undefined",!d)),null;const g=null===(m=null===(s=a.campaign_variant_descriptor)||void 0===s?void 0:s.variant_content)||void 0===m?void 0:m.container;if(g){const e={"data-testid":"campaign-format-container"};return n.default.createElement(g.tag||"div",Object.assign(Object.assign({},e),g.props),n.default.createElement(l,Object.assign({},a)))}return n.default.createElement(l,Object.assign({},a))};t.CampaignFormatWithListener=({allowedComponents:e,slotId:a})=>{const[i,s]=n.useState();return n.useEffect(()=>(r.campaignsEmitter.on(a,s),()=>{r.campaignsEmitter.off(a)}),[]),i?n.default.createElement(t.CampaignFormat,Object.assign({},{allowedComponents:e,impression:i})):null}})),define("metaserver/static/js/campaigns/campaign_formats/index_new",["require","exports","tslib","react","metaserver/static/js/campaigns/emitter","metaserver/static/js/campaigns/filters/index","metaserver/static/js/campaigns/history_utils","metaserver/static/js/campaigns/campaign_formats/banner/loadable_campaign_banner","metaserver/static/js/campaigns/campaign_formats/menu/loadable_campaign_menu_item","metaserver/static/js/campaigns/campaign_formats/modal/loadable_campaign_modal","metaserver/static/js/campaigns/campaign_formats/snackbar/loadable_campaign_snackbar"],(function(e,t,a,n,i,r,s,o,c,m,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CampaignSlot=t.shouldCampaignRender=t.preloadCampaign=t.CampaignFormat=void 0,n=a.__importStar(n);t.CampaignFormat=e=>{var t;const a=null===(t=e.campaign.content)||void 0===t?void 0:t[".tag"];if(!a)return null;switch(a){case"banner_campaign_format":return n.default.createElement(o.AsyncCampaignBanner,Object.assign({},e));case"menu_item_campaign_format":return n.default.createElement(c.AsyncCampaignMenuItem,Object.assign({},e));case"snackbar_campaign_format":return n.default.createElement(p.AsyncCampaignSnackbar,Object.assign({},e));case"modal_campaign_format":return n.default.createElement(m.AsyncCampaignModal,Object.assign({},e));default:return null}};t.preloadCampaign=e=>{var t;const a=s.getEvents(e);if(a&&a.length>0){const{data:e,context:n}=a[a.length-1],i=r.getFiltersForCampaign(null===(t=e.campaign)||void 0===t?void 0:t.campaign.campaign_id);return{campaignProps:e.campaign,contextData:n,filters:i}}return{}};t.shouldCampaignRender=(e,t,a)=>{if(t&&!e)return!0;if(t&&e){const n={campaignProps:t,contextData:a};return e.every(e=>e(n))}return!1};t.CampaignSlot=({slotId:e,initialState:a={campaignProps:void 0,contextData:void 0,filters:void 0,loggingParams:void 0}})=>{const[{campaignProps:s,contextData:o,filters:c,loggingParams:m},p]=n.useState(a),l=n.useMemo(()=>t.shouldCampaignRender(c,s,o),[s,o,c]);if(n.useEffect(()=>{const t=({data:e}={data:{}})=>{var t;const a=r.getFiltersForCampaign(null===(t=null==e?void 0:e.campaign)||void 0===t?void 0:t.campaign.campaign_id);p({campaignProps:(null==e?void 0:e.campaign)||s,contextData:(null==e?void 0:e.context)||o,filters:a||c,loggingParams:(null==e?void 0:e.loggingParams)||m})};return i.campaignsEmitter.on(e,t),()=>{i.campaignsEmitter.off(e,t)}},[]),s&&l){const e=Object.assign(Object.assign({},s),{contextData:o,loggingParams:m});return n.default.createElement(t.CampaignFormat,Object.assign({},e))}return null},t.CampaignSlot.displayName="CampaignSlot"}));__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t};define("metaserver/static/js/campaigns/campaign_formats/menu/loadable_campaign_menu_item",["require","exports","metaserver/static/js/async/loadable"],(function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AsyncCampaignMenuItem=void 0,t.AsyncCampaignMenuItem=a.Loadable({loader:()=>new Promise((t,a)=>{e(["metaserver/static/js/campaigns/campaign_formats/menu/campaign_menu_item"],t,a)}).then(__importStar).then(({CampaignMenuItemConversionComponent:e})=>e)})}));__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t};define("metaserver/static/js/campaigns/campaign_formats/snackbar/loadable_campaign_snackbar",["require","exports","metaserver/static/js/async/loadable"],(function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AsyncCampaignSnackbar=void 0,t.AsyncCampaignSnackbar=a.Loadable({loader:()=>new Promise((t,a)=>{e(["metaserver/static/js/campaigns/campaign_formats/snackbar/campaign_snackbar"],t,a)}).then(__importStar).then(({CampaignSnackbarConversionComponent:e})=>e)})}));__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t};define("metaserver/static/js/campaigns/campaign_formats/modal/loadable_campaign_modal",["require","exports","metaserver/static/js/async/loadable"],(function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AsyncCampaignModal=void 0,t.AsyncCampaignModal=a.Loadable({loader:()=>new Promise((t,a)=>{e(["metaserver/static/js/campaigns/campaign_formats/modal/campaign_modal"],t,a)}).then(__importStar).then(({CampaignModalConversionComponent:e})=>e)})})),define("metaserver/static/js/campaigns/emitter",["require","exports","tslib","eventemitter3"],(function(e,t,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.publishEvent=t.emitPageLoaded=t.emitCampaignDismissed=t.emitCampaignToSlot=t.getSlotFromCampaignFormatProps=t.getSlotFromImpression=t.campaignsEmitter=t.CampaignsEventEmitter=t.CAMPAIGN_EVENT=t.PAGE_LOADED=t.CAMPAIGN_DISMISSED=void 0,n=a.__importDefault(n),t.CAMPAIGN_DISMISSED="campaign-dismissed",t.PAGE_LOADED="page-loaded",t.CAMPAIGN_EVENT="campaign-event";class i extends n.default{constructor(){super(),this.allEventBuffers={}}on(e,t){super.on(e,t);const a=this.allEventBuffers[e.toString()];return void 0!==a&&a.forEach(t=>{super.emit(e,t)}),this}emit(e,t){return t&&"object"==typeof t&&"name"in t&&(void 0===this.allEventBuffers[t.name]&&(this.allEventBuffers[t.name]=[]),this.allEventBuffers[t.name].push(t)),super.emit(e,t)}}t.CampaignsEventEmitter=i,t.campaignsEmitter=new i;t.getSlotFromImpression=e=>{var t,a,n;return null===(n=null===(a=null===(t=null==e?void 0:e.campaign_variant_descriptor)||void 0===t?void 0:t.variant_content)||void 0===a?void 0:a.slot)||void 0===n?void 0:n[".tag"]};t.getSlotFromCampaignFormatProps=e=>{var t;return null===(t=null==e?void 0:e.slotId)||void 0===t?void 0:t[".tag"]};t.emitCampaignToSlot=(e,a,n)=>{const i=t.getSlotFromCampaignFormatProps(e);i&&"other"!==i&&t.campaignsEmitter.emit(i,{name:i,data:{campaign:e,context:a,loggingParams:n}})};t.emitCampaignDismissed=e=>{t.campaignsEmitter.emit(t.CAMPAIGN_DISMISSED,e)};t.emitPageLoaded=e=>{t.campaignsEmitter.emit(t.PAGE_LOADED,{name:t.PAGE_LOADED,data:{page:e}})};t.publishEvent=(e,a={})=>{t.campaignsEmitter.emit(t.CAMPAIGN_EVENT,{name:e,data:a})}})),define("metaserver/static/js/campaigns/errors",["require","exports","tslib","metaserver/static/js/modules/core/exception"],(function(e,t,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logCampaignFormatFailedRenderError=t.CampaignFormatFailedRenderError=t.logCampaignFormatMissingRequiredContentError=t.CampaignFormatMissingRequiredContentError=void 0,n=a.__importStar(n);class i extends Error{constructor(e,t){super("The following required properties are missing from the content dictionary for the "+e+" format: "+t.join(", ")),Object.setPrototypeOf(this,i.prototype)}}t.CampaignFormatMissingRequiredContentError=i,t.logCampaignFormatMissingRequiredContentError=function(e){n.reportException({err:e,severity:n.SEVERITY.NONCRITICAL,tags:["campaigns","toolkit","missing","required","properties"]})};class r extends Error{constructor(e,t,a){super((null==e?"":`The format: ${e} is not allowed `)+(null==t?"":`There is no matching format component for: ${t} `)+(a?"":"Required keys are missing")),Object.setPrototypeOf(this,r.prototype)}}t.CampaignFormatFailedRenderError=r,t.logCampaignFormatFailedRenderError=function(e){n.reportException({err:e,severity:n.SEVERITY.NONCRITICAL,tags:["campaigns","toolkit","FormatFailedRender"]})}})),define("metaserver/static/js/campaigns/filters/index",["require","exports","metaserver/static/js/campaigns/filters/constants","metaserver/static/js/campaigns/filters/shop_filters"],(function(e,t,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFiltersForCampaign=t.CAMPAIGNS_TO_FILTERS=void 0,t.CAMPAIGNS_TO_FILTERS={[a.SHOP_MENU_ITEM_CAMPAIGN_ID]:[n.isScreenSizeSupportedForShopCampaigns,n.checkSelectedFilesShopEligibility,n.qualifyShopByVersionId],[a.SHOP_MENU_ITEM_CAMPAIGN_ID_TEST]:[n.isScreenSizeSupportedForShopCampaigns,n.checkSelectedFilesShopEligibility],[a.SHOP_MODAL_CAMPAIGN_ID]:[n.isScreenSizeSupportedForShopCampaigns,n.hasOpenedShareSettings,n.checkSelectedFilesShopEligibility,n.qualifyShopByVersionId],[a.SHOP_MODAL_CAMPAIGN_ID_TEST]:[n.isScreenSizeSupportedForShopCampaigns,n.hasOpenedShareSettings,n.checkSelectedFilesShopEligibility]},t.getFiltersForCampaign=function(e=-1){return t.CAMPAIGNS_TO_FILTERS[e]||[]}})),define("metaserver/static/js/campaigns/filters/constants",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SHOP_MODAL_TEST=t.SHOP_MODAL_CAMPAIGN_ID_TEST=t.SHOP_MENU_ITEM_TEST=t.SHOP_MENU_ITEM_CAMPAIGN_ID_TEST=t.SHOP_MODAL_CONTROL=t.SHOP_MODAL_V1=t.SHOP_MODAL_CAMPAIGN_ID=t.SHOP_MENU_ITEM_CONTROL=t.SHOP_MENU_ITEM_V1=t.SHOP_MENU_ITEM_CAMPAIGN_ID=void 0,t.SHOP_MENU_ITEM_CAMPAIGN_ID=6014,t.SHOP_MENU_ITEM_V1=13826,t.SHOP_MENU_ITEM_CONTROL=13827,t.SHOP_MODAL_CAMPAIGN_ID=6113,t.SHOP_MODAL_V1=13981,t.SHOP_MODAL_CONTROL=13980,t.SHOP_MENU_ITEM_CAMPAIGN_ID_TEST=5921,t.SHOP_MENU_ITEM_TEST=13789,t.SHOP_MODAL_CAMPAIGN_ID_TEST=6119,t.SHOP_MODAL_TEST=13970})),define("metaserver/static/js/campaigns/filters/shop_filters",["require","exports","metaserver/static/js/campaigns/filters/constants","metaserver/static/js/campaigns/types","metaserver/static/js/onboarding/logging/events","metaserver/static/js/onboarding/logging/logging","metaserver/static/js/campaigns/history_utils"],(function(e,t,a,n,i,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isScreenSizeSupportedForShopCampaigns=t.hasOpenedShareSettings=t.qualifyShopByVersionId=t.checkSelectedFilesShopEligibility=void 0;const o=["bmp","cr2","gif","ico","ithmb","jpeg","jpg","nef","png","raw","svg","tif","tiff","wbmp","webp","aac","aif","aifc","aiff","au","flac","m4a","mid","mp3","m4b","m4p","m4r","oga","ogg","opus","ra","ram","spx","wav","wm","3gp","3gpp","3gpp2","3g2","asf","avi","dv","dvi","flv","m2t","mp4","m4v","mkv","mov","mpeg","mpg","mts","ogv","ogx","rm","rmvb","ts","vob","webm","wm","pdf"];t.checkSelectedFilesShopEligibility=({contextData:e})=>Object.keys(e.fileExts).every(e=>o.includes(e));t.qualifyShopByVersionId=({campaignProps:e,contextData:t})=>{const{campaign_id:n,version_id:s}=e.campaign,{fileExts:o,referrer:c}=t;let m="UNKNOWN";return n===a.SHOP_MENU_ITEM_CAMPAIGN_ID?s===a.SHOP_MENU_ITEM_V1?m="V1":s===a.SHOP_MENU_ITEM_CONTROL&&(m="CONTROL"):n===a.SHOP_MODAL_CAMPAIGN_ID&&(s===a.SHOP_MODAL_V1?m="V1":s===a.SHOP_MODAL_CONTROL&&(m="CONTROL")),t.shouldLogQualifyEvent&&r.OALogger.logToProEvents(i.ShopEntryPointEvents.SHOP_ENTRY_POINT_QUALIFY,{experiment:"core_act_shop_entry_point",location:c,file_exts:o,campaignId:n,versionId:s,variantName:m}),"V1"===m};t.hasOpenedShareSettings=({contextData:e})=>{const t=s.hasEventInHistory(n.CampaignEvents.SHARE_MODAL_SETTINGS_OPENED,e);return t&&s.removeEventFromHistory(n.CampaignEvents.SHARE_MODAL_SETTINGS_OPENED,e),t};t.isScreenSizeSupportedForShopCampaigns=()=>screen.availWidth>=625||screen.availHeight>=570})),define("metaserver/static/js/campaigns/history_utils",["require","exports","lodash","metaserver/static/js/campaigns/emitter"],(function(e,t,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeEventFromHistory=t.resetHistoryForEvent=t.hasEventInHistory=t.getHistoryForEvent=t.getEvents=t.getEventBuffers=t.filterOutEvent=t.filterForEvent=void 0;const i=(e={},t={})=>Object.entries(t).every(([t,n])=>a.isEqual(e[t],n));t.filterForEvent=(e,t)=>e.filter(({data:e})=>i(null==e?void 0:e.context,t));t.filterOutEvent=(e,t)=>e.filter(({data:e})=>!i(null==e?void 0:e.context,t));t.getEventBuffers=()=>n.campaignsEmitter.allEventBuffers;t.getEvents=(e=null)=>e?t.getEventBuffers()[e]||[]:a.flatten(Object.values(t.getEventBuffers()));t.getHistoryForEvent=(e,a=null)=>{const n=t.getEvents(e);return a&&n.length?t.filterForEvent(n,a):n};t.hasEventInHistory=(e,a)=>!!t.filterForEvent(t.getEvents(e),a).length;t.resetHistoryForEvent=e=>{n.campaignsEmitter.allEventBuffers[e]=[]};t.removeEventFromHistory=(e,a)=>{if(t.getEventBuffers()[e])return a?void(n.campaignsEmitter.allEventBuffers[e]=t.filterOutEvent(t.getEventBuffers()[e],a)):t.resetHistoryForEvent(e)}})),define("metaserver/static/js/campaigns/types",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CampaignEvents=t.ActionHandlers=t.CampaignFormats=void 0,(function(e){e.BANNER="banner"})(t.CampaignFormats||(t.CampaignFormats={})),(function(e){e.LAUNCH_URL_IN_NEW_TAB="launch_url_in_new_tab",e.OPEN_URL_IN_NEW_TAB="open_url_in_new_tab"})(t.ActionHandlers||(t.ActionHandlers={})),(function(e){e.SHARE_MODAL_CLOSED="share_modal_closed",e.SHARE_MODAL_SETTINGS_OPENED="share_modal_settings_opened"})(t.CampaignEvents||(t.CampaignEvents={}))})),define("metaserver/static/js/campaigns/utils",["require","exports","metaserver/static/js/campaigns/errors","metaserver/static/js/campaigns/types"],(function(e,t,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleCampaignMenuSelection=t.checkForRequiredKeysInContentDictionary=t.requiredPropMapping=void 0,t.requiredPropMapping={[n.CampaignFormats.BANNER]:["message","cta_button_text","on_cta_button_click"]},t.checkForRequiredKeysInContentDictionary=function(e){var n,i,r,s;const o=null===(i=null===(n=e.campaign_variant_descriptor)||void 0===n?void 0:n.variant_content)||void 0===i?void 0:i.format,c=(null===(s=null===(r=e.campaign_variant_descriptor)||void 0===r?void 0:r.variant_content)||void 0===s?void 0:s.content)||{},m=t.requiredPropMapping[o]||[];for(const e of m)if(!(e in c))return a.logCampaignFormatMissingRequiredContentError(new a.CampaignFormatMissingRequiredContentError(o||"",m.filter(e=>!c[e]))),!1;return!0};t.handleCampaignMenuSelection=(e,t,a)=>{if(e.hasOwnProperty("campaignHandler"))return e.campaignHandler(t);a(e)}}));
//# sourceMappingURL=pkg-campaigns_toolkit.min.js-vflDJ0o8P.map