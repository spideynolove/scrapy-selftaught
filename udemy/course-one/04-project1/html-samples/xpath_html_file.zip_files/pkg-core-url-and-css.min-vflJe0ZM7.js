define("metaserver/static/js/css/css",["require","exports","metaserver/static/js/modules/clean/static_urls","metaserver/static/js/modules/core/assert","metaserver/static/js/modules/core/uri","metaserver/static/js/css/css_cache"],(function(e,t,s,r,i,c){"use strict";function a(e=document){const t=c.getOrCreateCache(e),s=e.querySelectorAll('link[rel="stylesheet"]');for(let e=0;e<s.length;e++){const r=s[e];let c=i.URI.parse(r.href).getPath();0,null==t.already_loaded_css_paths[c]&&(t.loaded_css[c]=Promise.resolve(),t.already_loaded_css_paths[c]="loaded")}}function o(e,t,r,i=document){const a=c.getOrCreateCache(i),o=s.static_url(e);return c.loadCssWithCache(i,a,e,o).then(t,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.registerCSSForPreload=t.is_loaded=t.require_css_multi=t.require_css=t.css_url=void 0,a(),t.css_url=function(e){return`url("${String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"')}")`},t.require_css=o,t.require_css_multi=function(e,t,s,r=document){const i=e.map(e=>o(e,void 0,void 0,r));return Promise.all(i).then(t,s)},t.is_loaded=function(e,t=document){const s=c.getOrCreateCache(t);return!!e.every(e=>(r.assert(e.startsWith("/static/"),`invalid static css path: ${e}`),"loaded"===s.already_loaded_css_paths[e]))||(a(t),e.every(e=>"loaded"===s.already_loaded_css_paths[e]))},t.registerCSSForPreload=function(e){}})),define("metaserver/static/js/css/css_cache",["require","exports","metaserver/static/js/css/inject_css"],(function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadCssWithCache=t.getOrCreateCache=void 0,t.getOrCreateCache=function(e){const t=e;return t._cssCache||(t._cssCache={loaded_css:Object.create(null),already_loaded_css_paths:Object.create(null)}),t._cssCache},t.loadCssWithCache=function(e,t,r,i){let c=t.loaded_css[r];return c||(c=new Promise((c,a)=>{const o=e.createElement("link");return o.href=i,o.rel="stylesheet",o.type="text/css",o.crossorigin="anonymous",o.onload=function(){return t.already_loaded_css_paths[r]="loaded",c()},o.onerror=a,s.injectCss([o],"loadCssWithCache",e),o}),t.loaded_css[r]=c,t.already_loaded_css_paths[r]="downloading"),c}})),define("metaserver/static/js/modules/core/uri",["require","exports","metaserver/static/js/modules/core/assert"],(function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryComponent=t.URI=void 0;const r=/^(?:([^:\/\\?#]+):)?(?:[\/\\]{2}([^\/\\?#]*))?([^?#]*)(?:\?([^#]*))?(?:[#](.*))?$/,i=/^[a-zA-Z][a-zA-Z0-9+.\-]*$/;class c{constructor(e={}){this.dict={},this.add(e)}static parseString(e){if(!e)return{};const t={};return e.split("&").forEach(e=>{if(""!==e){const s=e.split("="),r=c.decode(s[0]),i=c.decode(s.slice(1).join("="));if(t.hasOwnProperty(r)){const e=t[r];let s;s="string"==typeof e?[e]:void 0===e?[]:e,s.push(i),t[r]=s}else t[r]=i}}),t}add(e,t){if("string"==typeof e)t&&(Array.isArray(t)?this.dict[e]=t.map(String):this.dict[e]=String(t));else for(const t in e)if(e.hasOwnProperty(t)){const s=e[t];null!=s&&(Array.isArray(s)?this.dict[t]=s.map(String):this.dict[t]=String(s))}return this}remove(e){return delete this.dict[e],this}replace(e){return this.dict=e,this}toString(){const e=[],t=Object.keys(this.dict).sort();for(const s of t)if(this.dict.hasOwnProperty(s)){const t=this.dict[s];Array.isArray(t)?t.forEach(t=>{e.push(c.encode(s)+"="+c.encode(t))}):e.push(c.encode(s)+"="+c.encode(t))}return e.length?e.join("&"):""}static decode(e){return null==e?"":a.decode(e.replace(/\+/g,"%20"))}static encode(e){return null==e?"":a.encode(e).replace(/%20/g,"+")}}t.QueryComponent=c;class a{constructor(e={}){this.query=new c,this.initFromObject(e)}initFromObject(e){this.setScheme(e.scheme),this.authority=e.authority||"",this.path=e.path||"",this.setQuery(e.query),this.fragment=e.fragment||""}getScheme(){return this.scheme}getAuthority(){return this.authority}getPath(){return this.path}getQuery(){return this.query.dict}getFragment(){return this.fragment}setScheme(e=""){const t=!e||Boolean(e.match(i));return s.assert(t,"Invalid scheme",{exc_extra:{scheme_param:e}}),this.scheme=e,this}setAuthority(e=""){return this.authority=e,this}setPath(e=""){return this.path=e,this}setQuery(e={}){return this.query=new c(e),this}setFragment(e=""){return this.fragment=e,this}updateQuery(e,t){return this.query.add(e,t),this}removeQuery(e){return this.query.remove(e),this}clone(){return new a(this.toObject())}toObject(){return{scheme:this.getScheme(),authority:this.getAuthority(),path:this.getPath(),query:this.getQuery(),fragment:this.getFragment()}}toString(){let e="";this.scheme&&(e+=this.scheme+":"),this.authority&&(e+="//"+a.encode(this.authority,":@[]")),this.path&&(s.assert(!this.authority||!this.path.length||"/"===this.path[0],'Path must start with a "/" if URI is not relative'),e+=a.encode(this.path,"/"));const t=this.query.toString();return t&&(e+="?"+t),this.fragment&&(e+="#"+a.encode(this.fragment,":@[]/&=+?#!")),e}static parse(e){const t=String(e).match(r)||[],[,s,i,o,n,h]=t,u=new a;return u.setScheme(s),u.setAuthority(a.decode(i)),u.setPath(a.decode(o)),u.setQuery(c.parseString(n)),u.setFragment(a.decode(h)),u}static decode(e){return e?decodeURIComponent(e):""}static encode(e,t=""){if(!e)return"";e=encodeURIComponent(e),t+="~";for(const s of t){const t=encodeURIComponent(s);e=e.replace(new RegExp(t,"g"),s)}return e}static encode_parts(e,t="/"){return e.split(t).map(e=>a.encode(e)).join(t)}}t.URI=a,a.Query=c})),define("metaserver/static/js/modules/clean/static_urls",["require","exports","metaserver/static/js/modules/core/assert","metaserver/static/js/modules/core/uri"],(function(e,t,s,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.static_url=void 0,t.static_url=function(e){return s.assert(0===e.indexOf("/static/"),`'${e}' is not a /static url`),new r.URI({scheme:"https",authority:"cfl.dropboxstatic.com",path:e}).toString()}}));
//# sourceMappingURL=pkg-core-url-and-css.min.js-vflT1ExjG.map