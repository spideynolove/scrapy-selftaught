define(["require","exports","tslib","react","react-redux","typescript/libraries/file-viewer/src/plugins/types","typescript/libraries/api_v2/redux/comments2","typescript/libraries/api_v2/redux/media_addon","typescript/component_libraries/files_components/src/blades/comments/index","typescript/component_libraries/flows/src/components/approval-forms/index","typescript/libraries/file-viewer/src/comments2/plugin/types","typescript/libraries/file-viewer/src/comments2/plugin/snackbar","typescript/libraries/comments2/src/mentions/index","typescript/component_libraries/files_components/src/blades/comments/data/store","typescript/libraries/file-viewer/src/comments2/logging_middleware","typescript/libraries/file-viewer/src/comments2/plugin/navigation_middleware","typescript/libraries/file-viewer/src/comments2/plugin/comment_markers","ts-keycode-enum","typescript/libraries/comments2/src/components/utils/thread_utils","typescript/libraries/comments2/src/components/utils/approval_utils","typescript/libraries/file-viewer/src/core/extension_constants","typescript/libraries/file-viewer/src/core/utils/paths","dig-components/progress_indicators","typescript/libraries/file-viewer/src/keyboard/keyboard_connector","typescript/libraries/file-viewer/src/keyboard/bindings"],(function(e,t,i,r,n,s,a,o,l,c,d,p,m,h,u,f,g,v,y,b,I,_,C,w,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Comments2Plugin=t.DEFAULT_COMMENTS_CONFIGURATION=t.MentionsIOClient=void 0,r=i.__importStar(r),Object.defineProperty(t,"MentionsIOClient",{enumerable:!0,get:function(){return m.MentionsIOClient}}),t.DEFAULT_COMMENTS_CONFIGURATION={comments2UsabilityRevamp:!1,showApproval:!0,approvalVariant:"OFF",approvalCopyVariant:"OFF",dragSectionAnnotationEnabled:!1};const E=r.lazy(()=>i.__awaiter(void 0,void 0,void 0,(function*(){const{CommentsPluginPane:t}=yield new Promise((t,i)=>{e(["typescript/libraries/file-viewer/src/comments2/plugin/pane"],t,i)}).then(i.__importStar);return{default:t}})));E.displayName="LazyCommentsPluginPane";const O=r.lazy(()=>i.__awaiter(void 0,void 0,void 0,(function*(){const{AnnotationLayer:t}=yield new Promise((t,i)=>{e(["typescript/libraries/file-viewer/src/comments2/plugin/layer/annotation_layer"],t,i)}).then(i.__importStar);return{default:t}})));O.displayName="LazyAnnotationLayer";const S=()=>r.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},r.createElement(C.Spinner,{className:"comments-blade-loading-spinner",size:"standard"}));S.displayName="LoadingIndicator";const x=e=>r.createElement(r.Suspense,{fallback:r.createElement(S,null)},r.createElement(E,Object.assign({},e)));x.displayName="AsyncCommentsPluginPane";const T=e=>r.createElement(r.Suspense,{fallback:r.createElement(r.Fragment,null,e.children)},r.createElement(O,Object.assign({},e)));T.displayName="AsyncAnnotationLayer";t.Comments2Plugin=class{constructor(e,m,C={},E){this.didRequestfocus=!1,this.didRequestActivateThread=!1,this.loadMediaFeatures=()=>i.__awaiter(this,void 0,void 0,(function*(){try{const e=yield this.platform.apiv2ClientBase.ns("media_addon").rpc("get_features",void 0,{});this.store.dispatch(o.getFeaturesResultAction({result:e,arg:void 0}));const t=e.frame_precise_comments;null!=t&&this.context.getPluginData().navigation.toggleVideoFrameSteppers(t)}catch(e){this.store.dispatch(o.getFeaturesResultAction({arg:void 0},null,e))}})),this.isSupported=e=>I.resolvePreviewTypeFromExtension(_.getFileExtension(e.name))!==s.PreviewType.CloudDoc,this.handleCancelAnnotating=()=>{this.store.getState().annotationState&&this.store.dispatch(l.cancelAnnotating(this.context.fileViewerId))},this.layerUI={LayerWithEventBubbling:e=>r.createElement(n.Provider,{store:this.store},r.createElement(T,Object.assign({platform:this.platform,context:this.context,config:this.config},e)))},this.rightRailUI={Control:e=>{var t;return e.file&&this.isSupported(e.file)?r.createElement(n.Provider,{store:this.store},r.createElement(l.CollapsedCommentsBladeButton,{id:d.COMMENTS_PLUGIN_ID,intl:this.platform.intl,fileId:null===(t=e.file)||void 0===t?void 0:t.fileId,sharedLinkURL:e.file.url})):null},Header:()=>{const e=this.context.getPluginData().previewType;return r.createElement(n.Provider,{store:this.store},r.createElement(p.AnnotationSnackbar,{fileViewerId:this.context.fileViewerId,previewType:e}))},VideoSeekBarLayer:e=>r.createElement(n.Provider,{store:this.store},r.createElement(g.CommentMarkers,Object.assign({},e))),Sidebar:e=>{if(!this.isSupported(e.file))return null;return r.createElement(n.Provider,{store:this.store},r.createElement(w.KeyboardBindingConnector,{keyboardBindings:this.keybinding}),r.createElement(l.CommentsBlade,{id:d.COMMENTS_PLUGIN_ID,intl:this.platform.intl,fileId:e.file.fileId,sharedLinkURL:e.file.url,comments2UsabilityRevamp:this.config.comments2UsabilityRevamp,approvalVariant:this.config.approvalVariant,approvalCopyVariant:this.config.approvalCopyVariant,approvalsLogger:()=>{var t;null===(t=this.approvalIOClient)||void 0===t||t.logger.logRequestApprovalClick("comments_meatball_menu",e.file.fileId)},dragSectionAnnotationEnabled:this.config.dragSectionAnnotationEnabled},r.createElement(x,Object.assign({getAccountData:this.promisedAccount,intl:this.platform.intl,context:this.context,config:this.config,approvalIOClient:this.approvalIOClient},e))))},isBladeSupported:e=>this.isSupported(e),mediaScrubber:{onClickOutsideMarkers:()=>{this.store.dispatch(l.deactivateAllThreads({fileViewerId:this.context.fileViewerId}))}}},this.lifecycle={previewWillInitialize:(e,t,i)=>{let r;if("sharedLinkUrl"in e?r=e.sharedLinkUrl:"fileId"in e&&t&&(r=t.url),r){const e={include_permissions:!0,stream:{identifier:{".tag":"shared_link_details",url:r},type:{".tag":"file"}}};i?this.store.dispatch(a.loggedOutListCommentsAction({arg:e})):this.store.dispatch(a.listCommentsAction({arg:e}))}else"fileId"in e&&this.store.dispatch(a.listCommentsAction({arg:{include_permissions:!0,stream:{identifier:{".tag":"file_path_or_id",file_path_or_id:e.fileId},type:{".tag":"file"}}}}))},previewDidInitialize:({threadId:e,shouldFocusApproval:t,shouldFocusComment:i,commentId:r})=>{const n=this.context.getPluginData(),{file:a}=n;if(null==a)throw new Error("Expected non-null file when preview initialized");if("string"!=typeof e||this.didRequestActivateThread){if("string"==typeof r&&!this.didRequestActivateThread){n.navigation.openSidebar(s.UserActionContext.RightRail);const e=a.url||a.fileId,t=Object.values(this.store.getState().threads[e]),i=y.findCommentThread(t,r);i&&this.store.dispatch(l.activateThread({fileId:a.fileId,sharedLinkURL:a.url,fileViewerId:this.context.fileViewerId,threadId:i.thread.id,isThirdParty:i.thread.isThirdParty})),this.didRequestActivateThread=!0}}else n.navigation.openSidebar(s.UserActionContext.RightRail),this.store.dispatch(l.activateInitialThread({fileViewerId:this.context.fileViewerId,threadId:e,fileId:a.fileId})),this.didRequestActivateThread=!0;if(t&&this.store.dispatch(c.setApprovalForm({[a.fileId]:{activeForm:"request",threadId:void 0}})),"string"==typeof r){const e=a.url||a.fileId,t=Object.values(this.store.getState().threads[e]),i=y.findCommentThread(t,r);if(i){const t=b.findActionableApprovalCommentId(i.thread),r=i.thread.comments.find(({id:e})=>e===t);r&&b.canRespondToApproval(r)&&this.store.dispatch(c.setApprovalForm({[e]:{activeForm:"respond",threadId:i.thread.id}}))}}i&&!this.didRequestfocus&&(n.navigation.openSidebar(s.UserActionContext.RightRail),this.store.dispatch(l.focusEditor(this.context.fileViewerId)),this.didRequestfocus=!0)},previewWillTeardown:()=>{null!=this.store.getState().annotationState&&this.store.dispatch(l.cancelAnnotating(this.context.fileViewerId))}};const O=f.createMiddleware(m);this.store=h.makeStore({apiv2ClientBase:e.apiv2ClientBase,boltIOClient:E.boltIOClient,mentionsIOClient:E.mentionsIOClient,logger:e=>{m.logUserAction(e.event,"right_sidebar",e.extra)}},[O,u.middleware]),this.platform=e,this.context=m,this.config=Object.assign(Object.assign({},t.DEFAULT_COMMENTS_CONFIGURATION),C),this.approvalIOClient=E.approvalIOClient,this.keybinding=A.getKeyboardBinding({keyCode:v.Key.Escape,callback:this.handleCancelAnnotating}),this.promisedAccount=e.apiv2ClientBase.ns("users").rpc("get_current_account",void 0,{}),this.loadMediaFeatures()}}}));
//# sourceMappingURL=comment_plugin.amd.min.js-vflkEE_1j.map