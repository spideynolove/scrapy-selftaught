define("metaserver/static/js/modules/clean/ux_analytics_globals",["require","exports"],(function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.DBX_UXA_GLOBAL=void 0;const t=void 0!==self&&self?self:window;t._DBX_UXA_GLOBAL=t._DBX_UXA_GLOBAL||{},r.DBX_UXA_GLOBAL=t._DBX_UXA_GLOBAL})),define("metaserver/static/js/modules/clean/lazy_marketing_tracker",["require","exports","metaserver/static/js/modules/clean/ux_analytics_globals","metaserver/static/js/modules/clean/ux_analytics/lazy_ux_analytics"],(function(e,r,t,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.resetForTesting=r.unloadMarketingTrackerLoggingQueue=r.pushToMarketingTrackerLoggingQueue=r.registerLogToMarketingTrackerFunction=void 0;r.registerLogToMarketingTrackerFunction=e=>{t.DBX_UXA_GLOBAL.logToMarketingTracker||(t.DBX_UXA_GLOBAL.logToMarketingTracker=e,i.runAfterUxaListening(()=>window.dispatchEvent(new CustomEvent("marketing_tracker_ready_for_uxa"))))};r.pushToMarketingTrackerLoggingQueue=(e,r)=>{r.uxa_event_type=e,t.DBX_UXA_GLOBAL.marketingTrackerLoggingQueue=t.DBX_UXA_GLOBAL.marketingTrackerLoggingQueue||[],t.DBX_UXA_GLOBAL.marketingTrackerLoggingQueue.push(r)};r.unloadMarketingTrackerLoggingQueue=()=>{if(void 0===t.DBX_UXA_GLOBAL.marketingTrackerLoggingQueue||void 0===t.DBX_UXA_GLOBAL.logToMarketingTracker)return;let e;for(;(e=t.DBX_UXA_GLOBAL.marketingTrackerLoggingQueue.shift())&&void 0!==e;)t.DBX_UXA_GLOBAL.logToMarketingTracker(e)},r.resetForTesting=function(){t.DBX_UXA_GLOBAL.marketingTrackerLoggingQueue=void 0,t.DBX_UXA_GLOBAL.logToMarketingTracker=void 0;try{delete t.DBX_UXA_GLOBAL.marketingTrackerLoggingQueue,delete t.DBX_UXA_GLOBAL.logToMarketingTracker}catch(e){}}})),define("metaserver/static/js/modules/clean/ux_analytics/lazy_ux_analytics",["require","exports"],(function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.resetForTesting=r.uxaIsListening=r.runAfterUxaListening=void 0;const t="undefined"!=typeof self&&self?self:window;function i(){if(!t._DBX_UXA_isUxaListening)return;const e=t._DBX_UXA_bufferedClosures=t._DBX_UXA_bufferedClosures||[],r=[...e];e.length=0;for(const e of r)e()}r.runAfterUxaListening=function(e){(t._DBX_UXA_bufferedClosures=t._DBX_UXA_bufferedClosures||[]).push(e),i()},r.uxaIsListening=function(){t._DBX_UXA_isUxaListening=!0,i()},r.resetForTesting=function(){t._DBX_UXA_isUxaListening=void 0,t._DBX_UXA_bufferedClosures=void 0;try{delete t._DBX_UXA_isUxaListening,delete t._DBX_UXA_bufferedClosures}catch(e){}}}));
//# sourceMappingURL=pkg-core-lazy-ux-analytics.min.js-vflSqAcDB.map