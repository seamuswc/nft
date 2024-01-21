function he(e,t){return function(){return e.apply(t,arguments)}}const{toString:je}=Object.prototype,{getPrototypeOf:Y}=Object,j=(e=>t=>{const n=je.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>j(t)===e),M=e=>t=>typeof t===e,{isArray:F}=Array,_=M("undefined");function Me(e){return e!==null&&!_(e)&&e.constructor!==null&&!_(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const be=O("ArrayBuffer");function ve(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&be(e.buffer),t}const qe=M("string"),R=M("function"),we=M("number"),v=e=>e!==null&&typeof e=="object",He=e=>e===!0||e===!1,I=e=>{if(j(e)!=="object")return!1;const t=Y(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ze=O("Date"),Je=O("File"),$e=O("Blob"),Ve=O("FileList"),We=e=>v(e)&&R(e.pipe),Ke=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=j(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},Xe=O("URLSearchParams"),Ge=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),F(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let u;for(r=0;r<o;r++)u=i[r],t.call(null,e[u],u,e)}}function Te(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ee=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Re=e=>!_(e)&&e!==Ee;function K(){const{caseless:e}=Re(this)&&this||{},t={},n=(r,s)=>{const i=e&&Te(t,s)||s;I(t[i])&&I(r)?t[i]=K(t[i],r):I(r)?t[i]=K({},r):F(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&D(arguments[r],n);return t}const Qe=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,i)=>{n&&R(s)?e[i]=he(s,n):e[i]=s},{allOwnKeys:r}),e),Ze=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ye=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},et=(e,t,n,r)=>{let s,i,o;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!u[o]&&(t[o]=e[o],u[o]=!0);e=n!==!1&&Y(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},tt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},nt=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!we(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},rt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Y(Uint8Array)),st=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},ot=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},it=O("HTMLFormElement"),at=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),oe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ut=O("RegExp"),Se=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},ct=e=>{Se(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},lt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return F(e)?r(e):r(String(e).split(t)),n},dt=()=>{},pt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),z="abcdefghijklmnopqrstuvwxyz",ie="0123456789",Oe={DIGIT:ie,ALPHA:z,ALPHA_DIGIT:z+z.toUpperCase()+ie},ft=(e=16,t=Oe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function mt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const yt=e=>{const t=new Array(10),n=(r,s)=>{if(v(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=F(r)?[]:{};return D(r,(o,u)=>{const d=n(o,s+1);!_(d)&&(i[u]=d)}),t[s]=void 0,i}}return r};return n(e,0)},ht=O("AsyncFunction"),bt=e=>e&&(v(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:F,isArrayBuffer:be,isBuffer:Me,isFormData:Ke,isArrayBufferView:ve,isString:qe,isNumber:we,isBoolean:He,isObject:v,isPlainObject:I,isUndefined:_,isDate:ze,isFile:Je,isBlob:$e,isRegExp:ut,isFunction:R,isStream:We,isURLSearchParams:Xe,isTypedArray:rt,isFileList:Ve,forEach:D,merge:K,extend:Qe,trim:Ge,stripBOM:Ze,inherits:Ye,toFlatObject:et,kindOf:j,kindOfTest:O,endsWith:tt,toArray:nt,forEachEntry:st,matchAll:ot,isHTMLForm:it,hasOwnProperty:oe,hasOwnProp:oe,reduceDescriptors:Se,freezeMethods:ct,toObjectSet:lt,toCamelCase:at,noop:dt,toFiniteNumber:pt,findKey:Te,global:Ee,isContextDefined:Re,ALPHABET:Oe,generateString:ft,isSpecCompliantForm:mt,toJSONObject:yt,isAsyncFn:ht,isThenable:bt};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ae=y.prototype,xe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{xe[e]={value:e}});Object.defineProperties(y,xe);Object.defineProperty(Ae,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,i)=>{const o=Object.create(Ae);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),y.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const wt=null;function X(e){return a.isPlainObject(e)||a.isArray(e)}function ge(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ae(e,t,n){return e?e.concat(t).map(function(s,i){return s=ge(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Tt(e){return a.isArray(e)&&!e.some(X)}const Et=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,h){return!a.isUndefined(h[f])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function m(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!d&&a.isBlob(p))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function l(p,f,h){let T=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(f,"{}"))f=r?f:f.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Tt(p)||(a.isFileList(p)||a.endsWith(f,"[]"))&&(T=a.toArray(p)))return f=ge(f),T.forEach(function(g,Be){!(a.isUndefined(g)||g===null)&&t.append(o===!0?ae([f],Be,i):o===null?f:f+"[]",m(g))}),!1}return X(p)?!0:(t.append(ae(h,f,i),m(p)),!1)}const c=[],b=Object.assign(Et,{defaultVisitor:l,convertValue:m,isVisitable:X});function E(p,f){if(!a.isUndefined(p)){if(c.indexOf(p)!==-1)throw Error("Circular reference detected in "+f.join("."));c.push(p),a.forEach(p,function(T,x){(!(a.isUndefined(T)||T===null)&&s.call(t,T,a.isString(x)?x.trim():x,f,b))===!0&&E(T,f?f.concat(x):[x])}),c.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function ue(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ee(e,t){this._pairs=[],e&&q(e,this,t)}const Ce=ee.prototype;Ce.append=function(t,n){this._pairs.push([t,n])};Ce.toString=function(t){const n=t?function(r){return t.call(this,r,ue)}:ue;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Rt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ne(e,t,n){if(!t)return e;const r=n&&n.encode||Rt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new ee(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class ce{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},St=typeof URLSearchParams<"u"?URLSearchParams:ee,Ot=typeof FormData<"u"?FormData:null,At=typeof Blob<"u"?Blob:null,xt={isBrowser:!0,classes:{URLSearchParams:St,FormData:Ot,Blob:At},protocols:["http","https","file","blob","url","data"]},Pe=typeof window<"u"&&typeof document<"u",gt=(e=>Pe&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Ct=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Nt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Pe,hasStandardBrowserEnv:gt,hasStandardBrowserWebWorkerEnv:Ct},Symbol.toStringTag,{value:"Module"})),S={...Nt,...xt};function Ft(e,t){return q(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Pt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function _t(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function _e(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const u=Number.isFinite(+o),d=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,d?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!u):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=_t(s[o])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Pt(r),s,n,0)}),n}return null}function Dt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const te={transitional:Fe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(_e(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ft(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return q(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Dt(t)):t}],transformResponse:[function(t){const n=this.transitional||te.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(o)throw u.name==="SyntaxError"?y.from(u,y.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{te.headers[e]={}});const ne=te,Ut=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),It=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Ut[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},le=Symbol("internals");function P(e){return e&&String(e).trim().toLowerCase()}function k(e){return e===!1||e==null?e:a.isArray(e)?e.map(k):String(e)}function kt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Lt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function J(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Bt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function jt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class H{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(u,d,m){const l=P(d);if(!l)throw new Error("header name must be a non-empty string");const c=a.findKey(s,l);(!c||s[c]===void 0||m===!0||m===void 0&&s[c]!==!1)&&(s[c||d]=k(u))}const o=(u,d)=>a.forEach(u,(m,l)=>i(m,l,d));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Lt(t)?o(It(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=P(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return kt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=P(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||J(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=P(o),o){const u=a.findKey(r,o);u&&(!n||J(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||J(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=k(s),delete n[i];return}const u=t?Bt(i):String(i).trim();u!==i&&delete n[i],n[u]=k(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[le]=this[le]={accessors:{}}).accessors,s=this.prototype;function i(o){const u=P(o);r[u]||(jt(s,o),r[u]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}H.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(H.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(H);const A=H;function $(e,t){const n=this||ne,r=t||n,s=A.from(r.headers);let i=r.data;return a.forEach(e,function(u){i=u.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function De(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,y,{__CANCEL__:!0});function Mt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const vt=S.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),a.isString(r)&&o.push("path="+r),a.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function qt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ht(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ue(e,t){return e&&!qt(t)?Ht(e,t):t}const zt=S.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const u=a.isString(o)?s(o):o;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function Jt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function $t(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const m=Date.now(),l=r[i];o||(o=m),n[s]=d,r[s]=m;let c=i,b=0;for(;c!==s;)b+=n[c++],c=c%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),m-o<t)return;const E=l&&m-l;return E?Math.round(b*1e3/E):void 0}}function de(e,t){let n=0;const r=$t(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,u=i-n,d=r(u),m=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:u,rate:d||void 0,estimated:d&&o&&m?(o-i)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Vt=typeof XMLHttpRequest<"u",Wt=Vt&&function(e){return new Promise(function(n,r){let s=e.data;const i=A.from(e.headers).normalize();let{responseType:o,withXSRFToken:u}=e,d;function m(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}let l;if(a.isFormData(s)){if(S.hasStandardBrowserEnv||S.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((l=i.getContentType())!==!1){const[f,...h]=l?l.split(";").map(T=>T.trim()).filter(Boolean):[];i.setContentType([f||"multipart/form-data",...h].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(f+":"+h))}const b=Ue(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ne(b,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function E(){if(!c)return;const f=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),T={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:f,config:e,request:c};Mt(function(g){n(g),m()},function(g){r(g),m()},T),c=null}if("onloadend"in c?c.onloadend=E:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(E)},c.onabort=function(){c&&(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const T=e.transitional||Fe;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new y(h,T.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},S.hasStandardBrowserEnv&&(u&&a.isFunction(u)&&(u=u(e)),u||u!==!1&&zt(b))){const f=e.xsrfHeaderName&&e.xsrfCookieName&&vt.read(e.xsrfCookieName);f&&i.set(e.xsrfHeaderName,f)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(h,T){c.setRequestHeader(T,h)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",de(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",de(e.onUploadProgress)),(e.cancelToken||e.signal)&&(d=f=>{c&&(r(!f||f.type?new U(null,e,c):f),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d)));const p=Jt(b);if(p&&S.protocols.indexOf(p)===-1){r(new y("Unsupported protocol "+p+":",y.ERR_BAD_REQUEST,e));return}c.send(s||null)})},G={http:wt,xhr:Wt};a.forEach(G,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const pe=e=>`- ${e}`,Kt=e=>a.isFunction(e)||e===null||e===!1,Ie={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!Kt(n)&&(r=G[(o=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([u,d])=>`adapter ${u} `+(d===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(pe).join(`
`):" "+pe(i[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:G};function V(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function fe(e){return V(e),e.headers=A.from(e.headers),e.data=$.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ie.getAdapter(e.adapter||ne.adapter)(e).then(function(r){return V(e),r.data=$.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return De(r)||(V(e),r&&r.response&&(r.response.data=$.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const me=e=>e instanceof A?e.toJSON():e;function N(e,t){t=t||{};const n={};function r(m,l,c){return a.isPlainObject(m)&&a.isPlainObject(l)?a.merge.call({caseless:c},m,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(m,l,c){if(a.isUndefined(l)){if(!a.isUndefined(m))return r(void 0,m,c)}else return r(m,l,c)}function i(m,l){if(!a.isUndefined(l))return r(void 0,l)}function o(m,l){if(a.isUndefined(l)){if(!a.isUndefined(m))return r(void 0,m)}else return r(void 0,l)}function u(m,l,c){if(c in t)return r(m,l);if(c in e)return r(void 0,m)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u,headers:(m,l)=>s(me(m),me(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const c=d[l]||s,b=c(e[l],t[l],l);a.isUndefined(b)&&c!==u||(n[l]=b)}),n}const ke="1.6.5",re={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{re[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ye={};re.transitional=function(t,n,r){function s(i,o){return"[Axios v"+ke+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,u)=>{if(t===!1)throw new y(s(o," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!ye[o]&&(ye[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,u):!0}};function Xt(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const u=e[i],d=u===void 0||o(u,i,e);if(d!==!0)throw new y("option "+i+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+i,y.ERR_BAD_OPTION)}}const Q={assertOptions:Xt,validators:re},C=Q.validators;class B{constructor(t){this.defaults=t,this.interceptors={request:new ce,response:new ce}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=N(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Q.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Q.assertOptions(s,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=A.concat(o,i);const u=[];let d=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(d=d&&f.synchronous,u.unshift(f.fulfilled,f.rejected))});const m=[];this.interceptors.response.forEach(function(f){m.push(f.fulfilled,f.rejected)});let l,c=0,b;if(!d){const p=[fe.bind(this),void 0];for(p.unshift.apply(p,u),p.push.apply(p,m),b=p.length,l=Promise.resolve(n);c<b;)l=l.then(p[c++],p[c++]);return l}b=u.length;let E=n;for(c=0;c<b;){const p=u[c++],f=u[c++];try{E=p(E)}catch(h){f.call(this,h);break}}try{l=fe.call(this,E)}catch(p){return Promise.reject(p)}for(c=0,b=m.length;c<b;)l=l.then(m[c++],m[c++]);return l}getUri(t){t=N(this.defaults,t);const n=Ue(t.baseURL,t.url);return Ne(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(n,r){return this.request(N(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,u){return this.request(N(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}B.prototype[t]=n(),B.prototype[t+"Form"]=n(!0)});const L=B;class se{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(u=>{r.subscribe(u),i=u}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,u){r.reason||(r.reason=new U(i,o,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new se(function(s){t=s}),cancel:t}}}const Gt=se;function Qt(e){return function(n){return e.apply(null,n)}}function Zt(e){return a.isObject(e)&&e.isAxiosError===!0}const Z={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Z).forEach(([e,t])=>{Z[t]=e});const Yt=Z;function Le(e){const t=new L(e),n=he(L.prototype.request,t);return a.extend(n,L.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Le(N(e,s))},n}const w=Le(ne);w.Axios=L;w.CanceledError=U;w.CancelToken=Gt;w.isCancel=De;w.VERSION=ke;w.toFormData=q;w.AxiosError=y;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Qt;w.isAxiosError=Zt;w.mergeConfig=N;w.AxiosHeaders=A;w.formToJSON=e=>_e(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=Ie.getAdapter;w.HttpStatusCode=Yt;w.default=w;const en=w;window.axios=en;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const W={CONTRACT_ADDRESS:"0xD1712D9c323F2a2292A7EC922710B8D2eD1eae0c",ABI:[{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_usdcAddress",type:"address"},{internalType:"string",name:"baseURI",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"address",name:"owner",type:"address"}],name:"ERC721IncorrectOwner",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC721InsufficientApproval",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC721InvalidApprover",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"}],name:"ERC721InvalidOperator",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"ERC721InvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC721InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC721InvalidSender",type:"error"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC721NonexistentToken",type:"error"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"string",name:"tokenURI",type:"string"}],name:"mintNFT",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_fromTokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_toTokenId",type:"uint256"}],name:"BatchMetadataUpdate",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"MetadataUpdate",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawUSDC",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"NFT_COST",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"usdcToken",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"}],TOKEN_URI:"meta.json"};document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#mint form"),t=document.querySelector("#redeem form"),n=e.querySelector('input[name="_token"]').value;function r(o){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(o).toLowerCase())}function s(o){return/^0x[a-fA-F0-9]{40}$/.test(o)}function i(o){let u=!0;return o.querySelectorAll("input").forEach(d=>{const m=d.value.trim()==="",l=d.type==="email"&&!r(d.value),c=d.name==="ethereum_address"&&!s(d.value);d.required||m||d.type==="email"&&!m&&l||d.name==="ethereum_address"&&!m&&c?(u=!1,d.classList.add("is-danger")):d.classList.remove("is-danger")}),u}e&&e.addEventListener("submit",async function(o){if(o.preventDefault(),!i(e))return;const u=document.querySelector('input[name="ethereum_address"]').value,d=new ethers.providers.Web3Provider(window.ethereum);await d.send("eth_requestAccounts",[]);const m=d.getSigner(),l=W.CONTRACT_ADDRESS,c=W.ABI,b=W.TOKEN_URI,E=new ethers.Contract(l,c,m);try{await(await E.mintNFT(u,b)).wait();const f=new FormData(e);fetch("/mint",{method:"POST",headers:{"X-CSRF-TOKEN":n,"Content-Type":"application/json"},body:f}).then(h=>h.json()).catch(h=>{console.error("Error:",h),alert("Form submission failed")})}catch(p){console.error(p),alert("An error occurred while minting the NFT");return}}),t&&t.addEventListener("submit",function(o){i(t)||o.preventDefault()})});
