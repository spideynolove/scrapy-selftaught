define("metaserver/static/js/modules/clean/stormcrow/constants",["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AMP_STORMCROW_EXPOSURE_METRIC_NAME=e.AMP_STORMCROW_WEB_NAMESPACE=void 0,e.AMP_STORMCROW_WEB_NAMESPACE="web_stormcrow",e.AMP_STORMCROW_EXPOSURE_METRIC_NAME="stormcrow_exposure"})),define("metaserver/static/js/modules/clean/stormcrow/explicit_exposure_logging",["require","exports","tslib","metaserver/static/js/modules/clean/stormcrow/gating_factory","metaserver/static/js/modules/core/exception"],(function(t,e,r,s,o){"use strict";function n(t,e){return r.__awaiter(this,void 0,void 0,(function*(){const r={features:t};try{const t=yield s.getGatingClientSingleton().getVariant(r,e);return null==t?void 0:t.variantInfos}catch(t){return void o.reportException({err:t,severity:o.SEVERITY.CRITICAL,force:!0})}}))}function a(t){try{s.getGatingClientSingleton().logExposure({stormcrowVariantInfo:t})}catch(t){o.reportException({err:t,severity:o.SEVERITY.CRITICAL,force:!0})}}Object.defineProperty(e,"__esModule",{value:!0}),e.logExposure=e.getVariantInfos=e.getVariantAndLogExposure=void 0,o=r.__importStar(o),e.getVariantAndLogExposure=function(t,e,r){n([t],r).then(r=>{var s;a({feature:t,variant:e,metadata:null===(s=null==r?void 0:r[0])||void 0===s?void 0:s.metadata})})},e.getVariantInfos=n,e.logExposure=a})),define("metaserver/static/js/modules/clean/stormcrow/gating_factory",["require","exports","metaserver/static/js/api_v2/user_client","metaserver/static/js/api_v2/noauth_client","metaserver/static/js/modules/clean/stormcrow/stormcrow_with_pap_gating_client"],(function(t,e,r,s,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getGatingClientSingleton=e.GatingFactory=void 0;class n{constructor(t,e){this.userApiV2Client=t,this.noAuthAPIV2Client=e}getGatingClient(){return new o.StormcrowWithPAPGatingClient(this.userApiV2Client,this.noAuthAPIV2Client)}}let a,i;e.GatingFactory=n,e.getGatingClientSingleton=function(){if(!a){const t=new r.UserApiV2Client,e=new s.NoAuthApiV2Client;a=new n(t,e)}return i||(i=a.getGatingClient()),i}})),define("metaserver/static/js/modules/clean/stormcrow/stormcrow_gating_client",["require","exports","metaserver/static/js/modules/clean/stormcrow/types/log_exposure","metaserver/static/js/modules/clean/stormcrow/utils"],(function(t,e,r,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.StormcrowGatingClient=void 0;e.StormcrowGatingClient=class{constructor(t,e){this.userApiV2Client=t,this.noAuthAPIV2Client=e}getVariant(t,e){const r=this.mapToAPIV2GetAssignmentsRequest(t);let s;return s=e?this.userApiV2Client.ns("stormcrow_servicer").rpc("get_assignments",r,{subjectUserId:e}):this.noAuthAPIV2Client.ns("stormcrow_servicer").rpc("get_assignments",r,{}),s.then(t=>this.mapToGetVariantResult(t))}legacyLogExposure(t,e,o){const n=this.mapToAPIV2LogExposuresRequest(t,e);let a;a=o?this.userApiV2Client.ns("stormcrow_servicer").rpc("log_exposures",n,{subjectUserId:o}):this.noAuthAPIV2Client.ns("stormcrow_servicer").rpc("log_exposures",n,{});const i=t.stormcrowVariantInfo.feature?t.stormcrowVariantInfo.feature:"unknown",u=t.stormcrowVariantInfo.variant?t.stormcrowVariantInfo.variant:"unknown";return a.then(t=>(s.reportExposureToAmp(i,u,r.ClientLogStatus.LOG_SUCCESS),this.mapToLogExposureResult(t))).catch(t=>{throw s.reportExposureToAmp(i,u,r.ClientLogStatus.LOG_FAILURE),t})}mapToLogExposureResult(t){return{status:t.status}}mapToGetVariantResult(t){if(t.assignments){return{variantInfos:t.assignments.map(t=>({feature:t.feature,variant:t.variant,metadata:t.metadata,status:t.status}))}}return null}mapToAPIV2GetAssignmentsRequest(t){return{request_params:{request_ip:t.request_ip,locales:t.locales,user_agent:t.user_agent},features:t.features.map(t=>({feature:t}))}}mapToAPIV2LogExposuresRequest(t,e){return e||(e=Date.now()),{exposures:[{feature:t.stormcrowVariantInfo.feature,variant:t.stormcrowVariantInfo.variant,metadata:t.stormcrowVariantInfo.metadata,timestamp:e}]}}}})),define("metaserver/static/js/modules/clean/stormcrow/stormcrow_with_pap_gating_client",["require","exports","metaserver/static/js/modules/clean/stormcrow/stormcrow_gating_client","metaserver/static/js/pap/analytics_client"],(function(t,e,r,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.StormcrowWithPAPGatingClient=void 0;class o extends r.StormcrowGatingClient{logExposure(t){this.createAndLogPAPEvent(t)}createAndLogPAPEvent(t){var e,r,o,n,a;const i=null===(r=null===(e=t.stormcrowVariantInfo.metadata)||void 0===e?void 0:e.metadata)||void 0===r?void 0:r.population_id,u=null===(n=null===(o=t.stormcrowVariantInfo.metadata)||void 0===o?void 0:o.metadata)||void 0===n?void 0:n.identity_gid,c=null===(a=t.stormcrowVariantInfo.metadata)||void 0===a?void 0:a.metadata;let l=void 0;null!=c&&(l=JSON.stringify(c)),s.logExposureEvent(t.stormcrowVariantInfo.feature,t.stormcrowVariantInfo.variant,i,u,l)}}e.StormcrowWithPAPGatingClient=o})),define("metaserver/static/js/modules/clean/stormcrow/types/log_exposure",["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ClientLogStatus=e.LogExposureResult=e.LogExposureRequest=void 0;e.LogExposureRequest=class{};e.LogExposureResult=class{},(function(t){t.LOG_SUCCESS="log_success",t.LOG_FAILURE="log_failure"})(e.ClientLogStatus||(e.ClientLogStatus={}))})),define("metaserver/static/js/modules/clean/stormcrow/utils",["require","exports","metaserver/static/js/metrics/index","metaserver/static/js/modules/clean/stormcrow/constants"],(function(t,e,r,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.reportExposureToAmp=void 0,e.reportExposureToAmp=function(t,e,o){r.getMetricsReporter().createStats({ns:s.AMP_STORMCROW_WEB_NAMESPACE,name:s.AMP_STORMCROW_EXPOSURE_METRIC_NAME},{feature:t,variant:e,client_log_status:o}).record(1)}}));
//# sourceMappingURL=pkg-explicit-exposure-logging.min.js-vflgqqJdH.map