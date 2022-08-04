define(["require","exports","tslib","react","react-intl","dig-components/typography","typescript/libraries/file-viewer/src/css/preview-archive.module.css","typescript/libraries/spectrum-content-icon-compatibility/src/index","typescript/libraries/file-viewer/src/preview_archive/utils","typescript/component_libraries/files_components/src/table/columns/file_name_column","typescript/component_libraries/files_components/src/table/columns/size_column","dig-experimental/managed_table/index","typescript/libraries/file-viewer/src/core/data/preview_key","typescript/libraries/file-viewer/src/core/data/selectors"],(function(e,t,i,r,l,s,n,a,c,o,d,m,u,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FolderEntryView=void 0,r=i.__importStar(r),n=i.__importStar(n);const v=[Object.assign(Object.assign({},o.FileNameColumn),{minWidth:360,width:360}),Object.assign(Object.assign({},d.FileSizeColumn),{minWidth:140,width:140})],h=m.createManagedTable(m.useFlexLayout,m.useSortBy,m.useSortableHeaders,m.useKeyboarding,m.useColumnCollapsing,m.useLinkBehavior);t.FolderEntryView=e=>{var t;const{dispatch:i,rootPreviewKey:s,fileViewerId:a,intl:o,rootEntry:d,entry:m,rootFileInfo:g,archiveFiles:y,height:b,account:_,currentPath:w,callGetArchiveFiles:F}=e,E=r.useRef(null);r.useEffect(()=>{if(E.current!==m&&g.file_id&&m.children&&!d.isPasswordProtected){const e=g.file_id,t=c.getFiles(m.children);if(t.length&&w){const r=u.getPreviewKeyForNestedArchiveFile(e,u.getSubpath([...w,t[0].name]));p.getArchiveFilesPreviewMetadata(y,r)||("loaded"===_.state?c.getArchiveFiles(w,t,g,i,e,_.data):F.current=r=>{c.getArchiveFiles(w,t,g,i,e,r)})}}E.current=m},[m,s,d,w,y,g,i,_,F]);const P=r.useMemo(()=>{var e;return c.transformArchiveEntriesToFiles(null!==(e=m.children)&&void 0!==e?e:[],i,w,a,s)},[m.children,i,a,s,w]);let S;return S=(null===(t=m.children)||void 0===t?void 0:t.length)?r.createElement("div",{className:n.folderTable,style:{height:b}},r.createElement(l.RawIntlProvider,{value:o},r.createElement(h,{isSelectable:!0,data:P,columns:v}))):r.createElement(f,{intl:o}),S};const f=e=>r.createElement("div",{className:n.emptyFolder},r.createElement(a.IconContent,{name:"folder-small"}),r.createElement(s.Text,{size:"large"},e.intl.formatMessage({id:"3+GzpU",defaultMessage:"This folder is empty"})))}));
//# sourceMappingURL=folder_entry_view.amd.min.js-vfl2-gM8v.map