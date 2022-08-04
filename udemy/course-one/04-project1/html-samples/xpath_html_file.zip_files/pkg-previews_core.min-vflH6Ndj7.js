define("metaserver/static/js/modules/clean/react/file_viewer/constants",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DOCSEND_PROD_APP_ID=t.HELLOSIGN_PROD_APP_ID=t.PageQueryKey=t.SubpathQueryKey=t.UserActionContext=t.UserAction=t.EventType=t.ActionType=void 0,(function(e){e.Setup="SETUP",e.Cleanup="CLEANUP",e.UpdateFiles="UPDATE_FILES",e.FlipNext="FLIP_NEXT",e.FlipPrevious="FLIP_PREVIOUS",e.OpenFullscreen="OPEN_FULLSCREEN",e.CloseFullscreen="CLOSE_FULLSCREEN",e.SwitchRevision="SWITCH_REVISION",e.RestoreRevision="RESTORE_REVISION",e.SaveForwardRevision="SAVE_FORWARD_REVISION",e.BroadcastRenderStatus="BROADCAST_RENDER_STATUS",e.HideOpenInAppBanner="HIDE_OPEN_IN_APP_BANNER"})(t.ActionType||(t.ActionType={})),(function(e){e.FileViewerOpened="FILE_VIEWER_OPENED",e.FilePreviewSessionEnded="FILE_PREVIEW_SESSION_ENDED",e.FilePreviewAttemptStarted="FILE_PREVIEW_ATTEMPT_STARTED",e.FilePreviewSupportConfirmed="FILE_PREVIEW_SUPPORT_CONFIRMED",e.FilePreviewSupportDenied="FILE_PREVIEW_SUPPORT_DENIED",e.FilePreviewDownloadAttempted="FILE_PREVIEW_DOWNLOAD_ATTEMPTED",e.FilePreviewDownloadSucceeded="FILE_PREVIEW_DOWNLOAD_SUCCEEDED",e.FilePreviewDownloadFailed="FILE_PREVIEW_DOWNLOAD_FAILED",e.FilePreviewRenderSucceeded="FILE_PREVIEW_RENDER_SUCCEEDED",e.FilePreviewRenderFailed="FILE_PREVIEW_RENDER_FAILED",e.FilePreviewPASSShown="FILE_PREVIEW_PASS_SHOWN",e.FilePreviewPASSHover="FILE_PREVIEW_PASS_HOVER",e.FilePreviewPASSClick="FILE_PREVIEW_PASS_CLICK",e.BrowsePASSShown="BROWSE_PASS_SHOWN",e.BrowsePASSHover="BROWSE_PASS_HOVER",e.BrowsePASSClick="BROWSE_PASS_CLICK",e.FilePreviewFidelitySurveyAsked="FILE_PREVIEW_FIDELITY_SURVEY_ASKED",e.FilePreviewFidelitySurveyAnswered="FILE_PREVIEW_FIDELITY_SURVEY_ANSWERED",e.FilePreviewFidelitySurveyDismissed="FILE_PREVIEW_FIDELITY_SURVEY_DISMISSED",e.FilePreviewUserAction="FILE_PREVIEW_USER_ACTION",e.FilePreviewVideoStalled="FILE_PREVIEW_VIDEO_STALLED",e.FilePreviewVideoToggled="FILE_PREVIEW_VIDEO_TOGGLED",e.FilePreviewVideoTruncated="FILE_PREVIEW_VIDEO_TRUNCATED",e.ArchivePreviewContentsScanned="ARCHIVE_PREVIEW_CONTENTS_SCANNED",e.FilePreviewModeDetermined="FILE_PREVIEW_MODE_DETERMINED",e.FilePreviewModeBounce="FILE_PREVIEW_MODE_BOUNCE",e.SidebarPaneSelected="SIDEBAR_PANE_SELECTED",e.SidebarModeSelected="SIDEBAR_MODE_SELECTED",e.SidebarOpened="SIDEBAR_OPENED",e.SidebarClosed="SIDEBAR_CLOSED",e.SidebarCollapsedShareClicked="SIDEBAR_COLLAPSED_SHARE_CLICKED",e.SidebarOpenedShareClicked="SIDEBAR_OPENED_SHARE_CLICKED",e.FilePreviewUpsellExposed="FILE_PREVIEW_UPSELL_EXPOSED",e.FilePreviewUpsellClicked="FILE_PREVIEW_UPSELL_CLICKED",e.PersistentFooterShown="PERSISTENT_FOOTER_SHOWN",e.DecompressInitiated="DECOMPRESS_INITIATED",e.DecompressSucceeded="DECOMPRESS_SUCCEEDED",e.DecompressFailed="DECOMPRESS_FAILED"})(t.EventType||(t.EventType={})),(function(e){e.AppDownloadInterstitialClose="app_download_interstitial_close",e.AppDownloadInterstitialContinue="app_download_interstitial_continue",e.AppDownloadInterstitialInstall="app_download_interstitial_install",e.AppDownloadInterstitialView="app_download_interstitial_view",e.ArchiveNavigation="archive_navigation",e.CopyToPaper="copy_to_paper",e.ConvertAndShare="convert_and_share",e.Share="share",e.Download="download",e.AddToDropbox="add_to_dropbox",e.SaveToDropbox="save_to_dropbox",e.SaveToDropboxPersonal="save_to_dropbox_personal",e.SaveToDropboxWork="save_to_dropbox_work",e.SaveToDropboxApprove="save_to_dropbox_approve",e.SaveToDropboxCancel="save_to_dropbox_cancel",e.RequestAccess="request_access",e.RequestAccessSend="request_access_send",e.RequestAccessCancel="request_access_cancel",e.OpenInApp="open_in_app",e.OpenInNewTab="open_in_new_tab",e.OpenInOfficeOnline="open_in_office_online",e.OpenInUnity="open_in_unity",e.OpenInUnityFolder="open_in_unity_folder",e.OpenWithAppAction="open_with_app_action",e.OpenWithCloudDocEditor="open_with_cloud_doc_editor",e.OpenWithPDFEditor="open_with_pdf_editor",e.OpenPrepareForSignature="open_prepare_for_signature",e.ModeChange="mode_change",e.PageChange="page_change",e.PageUp="page_up",e.PageDown="page_down",e.PresentInZoom="present_in_zoom",e.RemoveLink="remove_link",e.ShareToSlack="share_to_slack",e.ShareToTrello="share_to_trello",e.ShareToAction="share_to_action",e.ShareWithAnalytics="share_with_analytics",e.SendForSignatureAction="send_for_signature",e.InviteViaEmail="invite_via_email",e.ViewRevisions="view_revisions",e.ClickDropboxLogo="click_dropbox_logo",e.ClickCustomLogo="click_custom_logo",e.ToggleCommentsOn="toggle_comments_on",e.ToggleCommentsOff="toggle_comments_off",e.SignIn="sign_in",e.SignUp="sign_up",e.ClickNotifications="click_notifications",e.ClickAccountMenu="click_account_menu",e.ToggleFullscreenOn="toggle_fullscreen_on",e.ToggleFullscreenOff="toggle_fullscreen_off",e.ToggleSidebarOn="toggle_sidebar_on",e.ToggleSidebarOff="toggle_sidebar_off",e.Print="print",e.InlineSearch="inline_search",e.FlipNext="flip_next",e.FlipPrevious="flip_prev",e.ZoomIn="zoom_in",e.ZoomOut="zoom_out",e.VideoPlaybackRateChanged="playback_rate_changed",e.OpenMoreApps="open_more_apps",e.OpenAddApps="open_add_apps",e.OpenInDesktop="open_in_desktop",e.SelectShowMore="select_show_more",e.SelectAddApp="select_add_app",e.ScrollUp="scroll_up",e.ScrollDown="scroll_down",e.Dismiss="dismiss",e.LearnMore="learn_more",e.AddSuggestedComment="add_suggested_comment",e.SwitchWorkbookTab="switch_workbook_tab",e.SelectWorkbookContent="select_workbook_content",e.ClickSocialShareButton="click_social_share_button",e.ToggleShareRecept="toggle_share_receipt",e.DecompressFile="decompress_file",e.GoToFolder="go_to_folder",e.DecompressCloseSnackbar="decompress_close_snackbar",e.DecompressRetry="decompress_retry",e.ConvertFile="convert_file",e.SaveAs="save_as",e.PreviewFile="preview_file",e.Transfer="transfer",e.FileConversionInitiated="file_conversion_initiated",e.FileConversionRetry="file_conversion_retry",e.FileConversionCloseSnackbar="file_conversion_close_snackbar",e.OpenInReplay="open_in_replay",e.CreateClientPortal="create_client_portal",e.EditClientPortal="edit_client_portal"})(t.UserAction||(t.UserAction={})),(function(e){e.AppDownloadInterstitial="app_download_interstitial",e.TitleBarMain="title_bar_main",e.TitleBarSplitButton="title_bar_open_split_button",e.TitleBarMore="title_bar_more",e.TitleBarBackButton="title_bar_back_button",e.TitleBarSecondaryButton="title_bar_secondary_button",e.PreviewContentMain="preview_content_main",e.PreviewContentSplitButton="preview_content_open_split_button",e.Toolbar="toolbar",e.VideoPlayer="video_player",e.OpenInAppBanner="open_in_app_banner",e.LightboxFrame="lightbox_frame",e.LightboxToolbar="lightbox_toolbar",e.LightboxCloseButton="lightbox_close_button",e.Sidebar="sidebar",e.Keyboard="keyboard",e.Browser="browser",e.Unknown="unknown",e.PersistentFooter="persistent_footer",e.Snackbar="snackbar",e.RichSnackbar="rich_snackbar"})(t.UserActionContext||(t.UserActionContext={})),t.SubpathQueryKey="file_subpath",t.PageQueryKey="page",t.HELLOSIGN_PROD_APP_ID="dbaid:AAA8M7BsKD8QVXgtkUl5Rs7oFykwEx3Vm7U",t.DOCSEND_PROD_APP_ID="dbaid:AAA6hDRnKKWTEvY7Xb4xVXwWZA8c8Af3GOM"})),define("typescript/libraries/comments2/src/components/utils/throttle-debounce",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=t.throttle=void 0,t.throttle=function(e,t){let o=!0,i=null;function n(){o=!0,null!==i&&(e(...i),i=null)}return function(...r){o?(o=!1,e(...r),setTimeout(n,t)):i=r}},t.debounce=function(e,t,o=!1){let i;return function(...n){const r=this,s=o&&void 0===i;void 0!==i&&window.clearTimeout(i),i=window.setTimeout((function(){i=void 0,o||e.apply(r,n)}),t),s&&e.apply(r,n)}}})),define("typescript/libraries/comments2/src/transforms/index",["require","exports","typescript/libraries/comments2/src/transforms/comments","typescript/libraries/comments2/src/transforms/threads","typescript/libraries/comments2/src/transforms/users","typescript/libraries/comments2/src/transforms/revisions","typescript/libraries/comments2/src/transforms/annotations","typescript/libraries/comments2/src/transforms/third_party_source"],(function(e,t,o,i,n,r,s,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.thirdPartySourceToIThirdPartySource=t.iInteractionAnnotationToNumberedAnnotation=t.numberedAnnotationToIInteractionAnnotation=t.streamToRevision=t.userToIUser=t.usersToIUserMap=t.threadToIThread=t.threadsToIThreadMap=t.iCommentContentToUserSubmittedComment=void 0,Object.defineProperty(t,"iCommentContentToUserSubmittedComment",{enumerable:!0,get:function(){return o.iCommentContentToUserSubmittedComment}}),Object.defineProperty(t,"threadsToIThreadMap",{enumerable:!0,get:function(){return i.threadsToIThreadMap}}),Object.defineProperty(t,"threadToIThread",{enumerable:!0,get:function(){return i.threadToIThread}}),Object.defineProperty(t,"usersToIUserMap",{enumerable:!0,get:function(){return n.usersToIUserMap}}),Object.defineProperty(t,"userToIUser",{enumerable:!0,get:function(){return n.userToIUser}}),Object.defineProperty(t,"streamToRevision",{enumerable:!0,get:function(){return r.streamToRevision}}),Object.defineProperty(t,"numberedAnnotationToIInteractionAnnotation",{enumerable:!0,get:function(){return s.numberedAnnotationToIInteractionAnnotation}}),Object.defineProperty(t,"iInteractionAnnotationToNumberedAnnotation",{enumerable:!0,get:function(){return s.iInteractionAnnotationToNumberedAnnotation}}),Object.defineProperty(t,"thirdPartySourceToIThirdPartySource",{enumerable:!0,get:function(){return a.thirdPartySourceToIThirdPartySource}})})),define("typescript/libraries/comments2/src/transforms/annotations",["require","exports"],(function(e,t){"use strict";function o(e,t){return e[".tag"]===t}Object.defineProperty(t,"__esModule",{value:!0}),t.iInteractionAnnotationToNumberedAnnotation=t.numberedAnnotationToIInteractionAnnotation=t.iAnnotationToAnnotation=t.annotationToIAnnotation=void 0,t.annotationToIAnnotation=function(e){if(o(e,"video"))return{type:"video",time:e.time||0,timeSec:e.time_sec||0};if(o(e,"audio"))return{type:"audio",time:e.time};if(o(e,"document"))return{type:"document",regionType:e.region_type[".tag"],label:e.label,regions:e.regions};if(o(e,"image"))return{type:"image",region:e.region,label:e.label};throw new Error("Attempted to convert an annotation type that does not yet exist.")},t.iAnnotationToAnnotation=function(e){return"video"===e.type?{".tag":"video",time:e.time,time_sec:e.timeSec}:"audio"===e.type?{".tag":"audio",time:e.time}:"document"===e.type?{".tag":"document",regions:e.regions,region_type:{".tag":e.regionType}}:{".tag":"image",region:Object.assign(Object.assign({},e.region),{page:1})}},t.numberedAnnotationToIInteractionAnnotation=function(e){return"image"===e.type?{type:"rnd",regions:[e.region]}:"highlight"===e.regionType?{type:"highlight",regions:e.regions}:{type:"rnd",regions:e.regions}},t.iInteractionAnnotationToNumberedAnnotation=function({type:e,regions:t},o){return void 0===o?{type:"image",region:t[0]}:{type:"document",regionType:"rnd"===e?"rectangle":"highlight",regions:t.map(e=>(function(e,t){return Object.assign(Object.assign({},e),{page:t})})(e,o))}}})),define("typescript/libraries/comments2/src/transforms/comments",["require","exports","typescript/libraries/comments2/src/transforms/annotations","typescript/libraries/comments2/src/transforms/metadata","typescript/libraries/comments2/src/transforms/revisions"],(function(e,t,o,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iCommentContentToUserSubmittedComment=t.commentToIComment=void 0,t.commentToIComment=function(e,t,o,r){return{author:o[e.author_id],content:{metadata:i.metadataToIMetadata(e.metadata),text:e.content},deleted:e.deleted,id:e.id,threadId:t,timestamp:new Date(e.timestamp),revisionInfo:r&&e.revision?n.revisionInfoToIRevisionInfo(r,e.revision):{isCurrent:!0},userPermissions:{canDelete:e.permissions.can_delete,canEdit:e.permissions.can_edit}}},t.iCommentContentToUserSubmittedComment=function({annotation:e,content:t,stream:r}){return{annotation_data:e?o.iAnnotationToAnnotation(e):void 0,content:t.text,metadata:i.iCommentMetadataToUserSubmittedMetadata(t.metadata),revision:n.streamToRevision(r)}}})),define("typescript/libraries/comments2/src/transforms/metadata",["require","exports"],(function(e,t){"use strict";function o(e,t){return e.type===t}function i(e){return o(e,"mention")}function n(e){return o(e,"style")}function r(e){return o(e,"sticker")}function s(e){return o(e,"guest")}function a(e){return o(e,"reel")}function d(e){const t=e.format[".tag"];if("other"===t)throw new Error('"other" is not a valid format block');return{location:e.location,style:t,type:"style"}}function c(e){const t=e.user.type[".tag"];if("other"===t)throw new Error('"other" is not a valid user type');const o={identifier:e.user.identifier,type:t};return{location:e.location,type:"mention",user:o}}function l(e){var t,o,i;if(e.status&&e.approvers&&e.requester_email)return{type:"approval",status:e.status[".tag"],requester_email:e.requester_email,approval_type:null===(t=e.approval_type)||void 0===t?void 0:t[".tag"],actor:null===(o=e.actor)||void 0===o?void 0:o[".tag"],approvers:null===(i=e.approvers)||void 0===i?void 0:i.map(e=>{var t;return{email:e.email,display_name:e.display_name,overall_status:null===(t=e.overall_status)||void 0===t?void 0:t[".tag"]}}),requires_all:e.requires_all}}Object.defineProperty(t,"__esModule",{value:!0}),t.iCommentMetadataToUserSubmittedMetadata=t.metadataToIMetadata=t.approvalMetadataToIApprovalMetadata=t.isReelMetadata=t.isGuestMetadata=t.isStickerMetadata=t.isStyleMetadata=t.isMentionMetadata=void 0,t.isMentionMetadata=i,t.isStyleMetadata=n,t.isStickerMetadata=r,t.isGuestMetadata=s,t.isReelMetadata=a,t.approvalMetadataToIApprovalMetadata=l,t.metadataToIMetadata=function(e){const t=[...e.formatting.map(d),...e.mentions.map(c)];if(e.sticker){const o=(function(e){if(e.url&&e.name&&e.description)return{type:"sticker",id:e.id,url:e.url,name:e.name,description:e.description}})(e.sticker);o&&t.push(o)}if(e.guest){const o=(function(e){if(e.first_name||e.last_name)return{type:"guest",first_name:e.first_name,last_name:e.last_name}})(e.guest);o&&t.push(o)}if(e.reel){const o=(function(e){if(e.annotation_data)return{type:"reel",annotation_data:e.annotation_data}})(e.reel);o&&t.push(o)}if(e.approval){const o=l(e.approval);o&&t.push(o)}return t},t.iCommentMetadataToUserSubmittedMetadata=function(e){const t=e.filter(n).map(e=>({format:{".tag":e.style},location:e.location})),o=e.filter(i).map(e=>({user:{type:{".tag":e.user.type},identifier:e.user.identifier},location:e.location})),d=e.find(r),c=d?{id:d.id}:void 0,l=e.find(s),_=l?{first_name:l.first_name,last_name:l.last_name}:void 0,u=e.find(a);return{formatting:t,mentions:o,sticker:c,guest:_,reel:u?{annotation_data:u.annotation_data}:void 0}}})),define("typescript/libraries/comments2/src/transforms/revisions",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.streamToRevision=t.revisionInfoToIRevisionInfo=void 0,t.revisionInfoToIRevisionInfo=function(e,t){const o=t.timestamp?new Date(t.timestamp):void 0;return{isCurrent:e.ns_id===t.ns_id&&e.sjid===t.sjid,revision:{nsId:t.ns_id,sjId:t.sjid},timestamp:o}},t.streamToRevision=function(e){return e&&"file"===e.type?{ns_id:e.ns_id,sjid:e.sjid}:void 0}})),define("typescript/libraries/comments2/src/transforms/third_party_source",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.thirdPartySourceToIThirdPartySource=void 0,t.thirdPartySourceToIThirdPartySource=function(e){return e[".tag"]}})),define("typescript/libraries/comments2/src/transforms/threads",["require","exports","lodash","typescript/libraries/comments2/src/transforms/annotations","typescript/libraries/comments2/src/transforms/comments"],(function(e,t,o,i,n){"use strict";function r(e,t){if("resolved_no_details"===e[".tag"])return{type:"no_details"};if((function(e){return"resolved_with_details"===e[".tag"]})(e))return{type:"with_details",resolver:t[e.resolver_id],resolvedTimestamp:new Date(e.resolved_timestamp)};throw new Error("Not a valid type for ResolvedInfo.")}function s(e,t,o){const s=e.comments.map(i=>n.commentToIComment(i,e.id,t,o)),a=e.resolved_info?{resolved:!0,resolvedInfo:r(e.resolved_info,t)}:{resolved:!1};return Object.assign(Object.assign({annotation:e.annotation_data?i.annotationToIAnnotation(e.annotation_data):void 0,comments:s,id:e.id,read:e.read,readonly:e.readonly,isThirdParty:e.is_third_party},a),{timestamp:s[0].timestamp})}Object.defineProperty(t,"__esModule",{value:!0}),t.threadsToIThreadMap=t.threadToIThread=t.resolvedInfoToIResolvedInfo=void 0,t.resolvedInfoToIResolvedInfo=r,t.threadToIThread=s,t.threadsToIThreadMap=function(e,t,i){const n=e.map(e=>s(e,t,i));return o.keyBy(n,"id")}})),define("typescript/libraries/comments2/src/transforms/users",["require","exports","lodash"],(function(e,t,o){"use strict";function i(e){return{id:e.id,name:{display:e.display_name,initials:e.initials,public:e.public_name},photoUrl:e.photo_url}}Object.defineProperty(t,"__esModule",{value:!0}),t.usersToIUserMap=t.userToIUser=void 0,t.userToIUser=i,t.usersToIUserMap=function(e){const t=e.map(i);return o.keyBy(t,"id")}})),define("metaserver/static/js/cloud_docs/shared_components/dynamic_routing_modal",["require","exports","tslib","metaserver/static/js/components/ui/modal","metaserver/static/js/cloud_docs/open_with_utils","metaserver/static/js/components/ui/css","metaserver/static/js/cloud_docs/constants","react","metaserver/static/js/modules/core/i18n","spectrum/button/index","metaserver/static/js/cloud_docs/event_logging","metaserver/static/js/cloud_docs/types","metaserver/static/js/metrics/index","metaserver/static/js/dig-illustrations/spot/paper-airplane"],(function(e,t,o,i,n,r,s,a,d,c,l,_,u,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.showDynamicRoutingModal=t.DynamicRoutingModal=void 0,a=o.__importStar(a);class m extends a.Component{constructor(e){super(e),this.editorToString={preview:d.intl.formatMessage({id:"N5Byoz",defaultMessage:"Dropbox Preview"}),word:d.intl.formatMessage({id:"Y9FcUQ",defaultMessage:"Word for the web"}),excel:d.intl.formatMessage({id:"o3mRdr",defaultMessage:"Excel for the web"}),powerpoint:d.intl.formatMessage({id:"RTj2SO",defaultMessage:"PowerPoint for the web"}),gdoc:d.intl.formatMessage({id:"+HsOFj",defaultMessage:"Google Docs"}),gsheet:d.intl.formatMessage({id:"cpuRML",defaultMessage:"Google Sheets"}),gslides:d.intl.formatMessage({id:"PcJCVL",defaultMessage:"Google Slides"})},this.state={set_routing_dest:!1}}componentDidMount(){l.logUserAction({actionEvent:_.UserActionEventType.DYNAMIC_ROUTING_MODAL_IMPRESSION,userId:this.props.user.id,docPathOrId:this.props.file.file_id,data:{webOpenId:this.props.openId,origDest:this.props.currentEditor}})}componentWillUnmount(){if(!this.state.set_routing_dest){const e="Dismissed";l.logUserAction({actionEvent:_.UserActionEventType.DYNAMIC_ROUTING_MODAL_IMPRESSION,userId:this.props.user.id,docPathOrId:this.props.file.file_id,data:{webOpenId:this.props.openId,origDest:this.props.currentEditor,routingDest:e}});const t=u.getMetricsReporter(),o={origin:this.props.currentEditor,destination:e};t.createStats({ns:s.CLOUD_DOCS_AMP_NAMESPACE,name:"web/dynamicRoutingEvent"},o).record(1),this.setState({set_routing_dest:!1})}}render(){const e=this.editorToString[this.props.editorWithLock],t=this.editorToString[this.props.currentEditor];let o,r,m,f=d.intl.formatMessage({id:"ILSqGs",defaultMessage:"Want to see the latest version and edit?"});"preview"===this.props.currentEditor?(r=d.intl.formatMessage({id:"vX9MC5",defaultMessage:"Open in {editor_with_lock_string}"},{editor_with_lock_string:e}),o=d.intl.formatMessage({id:"MaUI+x",defaultMessage:"Right now people are working on this file in {editor_with_lock_string}. You can see updates and edit there."},{editor_with_lock_string:e})):this.props.isLockEditorEnabled?(r=d.intl.formatMessage({id:"jpCK4T",defaultMessage:"Edit in {editor_with_lock_string}"},{editor_with_lock_string:e}),o=d.intl.formatMessage({id:"1Y/1oL",defaultMessage:"Because this file is already open in {editor_with_lock_string}, you can only see updates and edit there."},{editor_with_lock_string:e})):(f=d.intl.formatMessage({id:"RtkW2p",defaultMessage:"You can’t edit this file right now"}),o=d.intl.formatMessage({id:"yOUn8S",defaultMessage:"Someone is working on this file in {editor_with_lock_string}. However, your admin has disabled access to {editor_with_lock_string} in your organization."},{editor_with_lock_string:e}));const E=(e,t)=>{l.logUserAction({actionEvent:_.UserActionEventType.DYNAMIC_ROUTING_MODAL_IMPRESSION,userId:this.props.user.id,docPathOrId:this.props.file.file_id,data:{webOpenId:this.props.openId,origDest:this.props.currentEditor,routingDest:e}});const o=u.getMetricsReporter(),i={origin:this.props.currentEditor,destination:e};o.createStats({ns:s.CLOUD_DOCS_AMP_NAMESPACE,name:"web/dynamicRoutingEvent"},i).record(1),this.setState({set_routing_dest:!0});const r=window.self;n.getCloudEditorUrl(this.props.user.id,this.props.file.file_id).then(o=>{n.openCloudEditorUrl(o,r,this.props.file.file_id,this.props.user.id,e,t)}).catch(e=>{n.handleError(e)})},g=()=>{E(this.props.editorWithLock,!1)};if(this.props.showViewOnlyMode){const e=()=>{E(this.props.currentEditor,!0)},o=d.intl.formatMessage({id:"nLLL8d",defaultMessage:"View-Only in {current_editor}"},{current_editor:t});m=a.createElement("div",{className:"link-text"},a.createElement("span",{role:"link",className:"link-span",tabIndex:0,onClick:e},o))}else if(!this.props.isLockEditorEnabled){const e=d.intl.formatMessage({id:"DWwxhG",defaultMessage:"View-Only in Preview"});m=a.createElement("div",{className:"link-text"},a.createElement("span",{role:"link",className:"link-span",tabIndex:0,onClick:()=>i.Modal.close()},e))}let v;return v=this.props.isLockEditorEnabled?a.createElement("div",{className:"edit-buttons"},a.createElement(c.Button,{className:"main-button",onClick:g},r),m):a.createElement("div",{className:"edit-buttons"},m),a.createElement(i.Modal,{id:"dynamic-routing",className:"dynamic-routing-modal",buttonComponent:v,displayCloseButton:!0,style:"clean"},a.createElement("div",{className:"default-dyn-routing-modal"},a.createElement("div",{className:"modal-image"},a.createElement(p.PaperAirplaneSpot,null)),a.createElement("div",{className:"main-text"},f),a.createElement("div",{className:"sub-text"},o)))}}m.displayName="DynamicRoutingModalWithoutCss",t.DynamicRoutingModal=r.requireCssWithComponent(m,["/static/css/cloud_docs/dynamic_routing-vfltbra9r.css"]),t.showDynamicRoutingModal=function(e){i.Modal.showInstance(a.createElement(t.DynamicRoutingModal,Object.assign({},e)))}})),define("metaserver/static/js/cloud_docs/shared_components/routing",["require","exports","tslib","metaserver/static/js/cloud_docs/constants","typescript/libraries/file-viewer/src/file_extension/extension_constants","metaserver/static/js/cloud_docs/shared_components/dynamic_routing_modal","metaserver/static/js/cloud_docs/cloud_doc_api_client","metaserver/static/js/file_store/utils","metaserver/static/js/modules/core/browser","metaserver/static/js/cloud_docs/types"],(function(e,t,o,i,n,r,s,a,d,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCloudEditorString=t.maybeShowDynamicRoutingModal=void 0,d=o.__importStar(d);const l={[i.MicrosoftEditors.WORD]:!0,[i.MicrosoftEditors.EXCEL]:!0,[i.MicrosoftEditors.POWERPOINT]:!1,[i.GoogleFileTypes.GOOGLE_DSS_SLIDES]:!1,[i.GoogleFileTypes.GOOGLE_DSS_DOC]:!1,[i.GoogleFileTypes.GOOGLE_DSS_SHEET]:!1,preview:!1};var _;(function(e){e.pptx="pptx",e.docx="docx",e.xlsx="xlsx"})(_||(_={}));const u={3503728:{[_.pptx]:i.GoogleFileTypes.GOOGLE_DSS_SLIDES,[_.docx]:i.GoogleFileTypes.GOOGLE_DSS_DOC,[_.xlsx]:i.GoogleFileTypes.GOOGLE_DSS_SHEET},661085:{[_.pptx]:i.MicrosoftEditors.POWERPOINT,[_.docx]:i.MicrosoftEditors.WORD,[_.xlsx]:i.MicrosoftEditors.EXCEL}},p={3503728:c.CloudDocProviderIntegration.GDD_INTEGRATION};function m(e,t){var o;if(e)switch(e.toLowerCase()){case"google_docs":case"gdoc":return i.GoogleFileTypes.GOOGLE_DSS_DOC;case"google_slides":case"gslides":return i.GoogleFileTypes.GOOGLE_DSS_SLIDES;case"google_sheets":case"gsheet":return i.GoogleFileTypes.GOOGLE_DSS_SHEET;case"wopi":return o=t,n.PRESENTATION_EXTS.map(e=>e.slice(1)).includes(o)?i.MicrosoftEditors.POWERPOINT:(function(e){return["doc","docm","docx"].includes(e)})(t)?i.MicrosoftEditors.WORD:i.MicrosoftEditors.EXCEL;case"paper":return t;case"word":case"excel":case"powerpoint":return e;default:return}}t.maybeShowDynamicRoutingModal=function(e,t,i){return o.__awaiter(this,void 0,void 0,(function*(){const o=i;s.getLockProviderAsync(e.id,t.file_id).then(n=>{const _=n.app_id;if(_&&u[_][o]&&(a.isBrowseFile(t)||a.isSharedFile(t))){const n=d.get_uri().getQuery().web_open_id,a=m(d.get_uri().getQuery().from_editor,i)||"preview",f={editorWithLock:u[_][o],currentEditor:a,file:t,user:e,showViewOnlyMode:l[a],openId:n,isLockEditorEnabled:!0};e.is_team?s.getTeamSettings(e.id).then(e=>{const t=e.settings;if(p.hasOwnProperty(_)){const e=p[_];f.isLockEditorEnabled=t[e][".tag"]===c.IntegrationCreateAndEdit[".tag"]}("preview"!==f.currentEditor||f.isLockEditorEnabled)&&r.showDynamicRoutingModal(f)}):r.showDynamicRoutingModal(f)}})}))},t.getCloudEditorString=m})),define("metaserver/static/js/modules/clean/react/previews/constants",["require","exports","typescript/libraries/file-viewer/src/core/logging/constants"],(function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PreviewSourceAction=t.PreviewSourceContext=void 0,Object.defineProperty(t,"PreviewSourceContext",{enumerable:!0,get:function(){return o.SourceContext}}),(function(e){e.Visit="visit",e.Click="click",e.FileViewerExit="file_viewer_exit"})(t.PreviewSourceAction||(t.PreviewSourceAction={}))}));var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,o,i){void 0===i&&(i=o),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,i){void 0===i&&(i=o),e[i]=t[o]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&__createBinding(t,e,o);return __setModuleDefault(t,e),t};define("metaserver/static/js/share_download/ui/button",["require","exports","metaserver/static/js/async/loadable"],(function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShareDownloadButton=t.DownloadSimpleButton=void 0,t.DownloadSimpleButton=o.Loadable({loader:()=>new Promise((t,o)=>{e(["metaserver/static/js/share_download/ui/button_component"],t,o)}).then(__importStar).then(({DownloadSimpleButton:e})=>e)}),t.ShareDownloadButton=o.Loadable({loader:()=>new Promise((t,o)=>{e(["metaserver/static/js/share_download/ui/button_component"],t,o)}).then(__importStar).then(({ShareDownloadButton:e})=>e)})})),define("metaserver/static/js/modules/clean/shallow_equal",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.shallowEqualArray=t.shallowEqual=void 0;const o=Object.prototype.hasOwnProperty;function i(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}t.shallowEqual=function(e,t){if(i(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++)if(!o.call(t,n[r])||!i(e[n[r]],t[n[r]]))return!1;return!0},t.shallowEqualArray=function(e,t){if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let o=0;o<e.length;++o)if(e[o]!==t[o])return!1;return!0}}));
//# sourceMappingURL=pkg-previews_core.min.js-vflz7rBks.map