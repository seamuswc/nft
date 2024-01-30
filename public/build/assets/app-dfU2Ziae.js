function Te(e,t){return function(){return e.apply(t,arguments)}}const{toString:He}=Object.prototype,{getPrototypeOf:te}=Object,v=(e=>t=>{const n=He.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>v(t)===e),j=e=>t=>typeof t===e,{isArray:F}=Array,D=j("undefined");function ze(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ee=R("ArrayBuffer");function Je(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ee(e.buffer),t}const $e=j("string"),A=j("function"),Ae=j("number"),q=e=>e!==null&&typeof e=="object",Ve=e=>e===!0||e===!1,k=e=>{if(v(e)!=="object")return!1;const t=te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},We=R("Date"),Ke=R("File"),Xe=R("Blob"),Ge=R("FileList"),Qe=e=>q(e)&&A(e.pipe),Ze=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=v(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},Ye=R("URLSearchParams"),et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),F(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let u;for(r=0;r<o;r++)u=i[r],t.call(null,e[u],u,e)}}function Se(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Re=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Oe=e=>!D(e)&&e!==Re;function X(){const{caseless:e}=Oe(this)&&this||{},t={},n=(r,s)=>{const i=e&&Se(t,s)||s;k(t[i])&&k(r)?t[i]=X(t[i],r):k(r)?t[i]=X({},r):F(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const tt=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,i)=>{n&&A(s)?e[i]=Te(s,n):e[i]=s},{allOwnKeys:r}),e),nt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),rt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},st=(e,t,n,r)=>{let s,i,o;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!u[o]&&(t[o]=e[o],u[o]=!0);e=n!==!1&&te(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ot=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},it=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!Ae(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},at=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&te(Uint8Array)),ut=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},lt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ct=R("HTMLFormElement"),dt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),pt=R("RegExp"),Ce=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},ft=e=>{Ce(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},mt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return F(e)?r(e):r(String(e).split(t)),n},yt=()=>{},ht=(e,t)=>(e=+e,Number.isFinite(e)?e:t),J="abcdefghijklmnopqrstuvwxyz",ue="0123456789",ge={DIGIT:ue,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+ue},wt=(e=16,t=ge.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function bt(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Tt=e=>{const t=new Array(10),n=(r,s)=>{if(q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=F(r)?[]:{};return I(r,(o,u)=>{const c=n(o,s+1);!D(c)&&(i[u]=c)}),t[s]=void 0,i}}return r};return n(e,0)},Et=R("AsyncFunction"),At=e=>e&&(q(e)||A(e))&&A(e.then)&&A(e.catch),a={isArray:F,isArrayBuffer:Ee,isBuffer:ze,isFormData:Ze,isArrayBufferView:Je,isString:$e,isNumber:Ae,isBoolean:Ve,isObject:q,isPlainObject:k,isUndefined:D,isDate:We,isFile:Ke,isBlob:Xe,isRegExp:pt,isFunction:A,isStream:Qe,isURLSearchParams:Ye,isTypedArray:at,isFileList:Ge,forEach:I,merge:X,extend:tt,trim:et,stripBOM:nt,inherits:rt,toFlatObject:st,kindOf:v,kindOfTest:R,endsWith:ot,toArray:it,forEachEntry:ut,matchAll:lt,isHTMLForm:ct,hasOwnProperty:ae,hasOwnProp:ae,reduceDescriptors:Ce,freezeMethods:ft,toObjectSet:mt,toCamelCase:dt,noop:yt,toFiniteNumber:ht,findKey:Se,global:Re,isContextDefined:Oe,ALPHABET:ge,generateString:wt,isSpecCompliantForm:bt,toJSONObject:Tt,isAsyncFn:Et,isThenable:At};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xe=y.prototype,Ne={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ne[e]={value:e}});Object.defineProperties(y,Ne);Object.defineProperty(xe,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,i)=>{const o=Object.create(xe);return a.toFlatObject(e,o,function(c){return c!==Error.prototype},u=>u!=="isAxiosError"),y.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const St=null;function G(e){return a.isPlainObject(e)||a.isArray(e)}function Fe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function le(e,t,n){return e?e.concat(t).map(function(s,i){return s=Fe(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Rt(e){return a.isArray(e)&&!e.some(G)}const Ot=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function H(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,b){return!a.isUndefined(b[m])});const r=n.metaTokens,s=n.visitor||d,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!c&&a.isBlob(p))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?c&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,m,b){let T=p;if(p&&!b&&typeof p=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Rt(p)||(a.isFileList(p)||a.endsWith(m,"[]"))&&(T=a.toArray(p)))return m=Fe(m),T.forEach(function(g,qe){!(a.isUndefined(g)||g===null)&&t.append(o===!0?le([m],qe,i):o===null?m:m+"[]",f(g))}),!1}return G(p)?!0:(t.append(le(b,m,i),f(p)),!1)}const l=[],w=Object.assign(Ot,{defaultVisitor:d,convertValue:f,isVisitable:G});function E(p,m){if(!a.isUndefined(p)){if(l.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));l.push(p),a.forEach(p,function(T,C){(!(a.isUndefined(T)||T===null)&&s.call(t,T,a.isString(C)?C.trim():C,m,w))===!0&&E(T,m?m.concat(C):[C])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function ce(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ne(e,t){this._pairs=[],e&&H(e,this,t)}const Pe=ne.prototype;Pe.append=function(t,n){this._pairs.push([t,n])};Pe.toString=function(t){const n=t?function(r){return t.call(this,r,ce)}:ce;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ct(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _e(e,t,n){if(!t)return e;const r=n&&n.encode||Ct,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new ne(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class de{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gt=typeof URLSearchParams<"u"?URLSearchParams:ne,xt=typeof FormData<"u"?FormData:null,Nt=typeof Blob<"u"?Blob:null,Ft={isBrowser:!0,classes:{URLSearchParams:gt,FormData:xt,Blob:Nt},protocols:["http","https","file","blob","url","data"]},Ie=typeof window<"u"&&typeof document<"u",Pt=(e=>Ie&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),_t=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Dt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ie,hasStandardBrowserEnv:Pt,hasStandardBrowserWebWorkerEnv:_t},Symbol.toStringTag,{value:"Module"})),S={...Dt,...Ft};function It(e,t){return H(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Ut(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function kt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Ue(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const u=Number.isFinite(+o),c=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,c?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!u):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=kt(s[o])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Ut(r),s,n,0)}),n}return null}function Lt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const re={transitional:De,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return It(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return H(u?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Lt(t)):t}],transformResponse:[function(t){const n=this.transitional||re.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(o)throw u.name==="SyntaxError"?y.from(u,y.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{re.headers[e]={}});const se=re,Bt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Bt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},pe=Symbol("internals");function P(e){return e&&String(e).trim().toLowerCase()}function L(e){return e===!1||e==null?e:a.isArray(e)?e.map(L):String(e)}function vt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const jt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function $(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function qt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ht(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(u,c,f){const d=P(c);if(!d)throw new Error("header name must be a non-empty string");const l=a.findKey(s,d);(!l||s[l]===void 0||f===!0||f===void 0&&s[l]!==!1)&&(s[l||c]=L(u))}const o=(u,c)=>a.forEach(u,(f,d)=>i(f,d,c));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!jt(t)?o(Mt(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=P(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return vt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=P(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||$(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=P(o),o){const u=a.findKey(r,o);u&&(!n||$(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||$(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=L(s),delete n[i];return}const u=t?qt(i):String(i).trim();u!==i&&delete n[i],n[u]=L(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[pe]=this[pe]={accessors:{}}).accessors,s=this.prototype;function i(o){const u=P(o);r[u]||(Ht(s,o),r[u]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(z.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(z);const O=z;function V(e,t){const n=this||se,r=t||n,s=O.from(r.headers);let i=r.data;return a.forEach(e,function(u){i=u.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function ke(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,y,{__CANCEL__:!0});function zt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Jt=S.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),a.isString(r)&&o.push("path="+r),a.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function $t(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Vt(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Le(e,t){return e&&!$t(t)?Vt(e,t):t}const Wt=S.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const u=a.isString(o)?s(o):o;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function Kt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Xt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const f=Date.now(),d=r[i];o||(o=f),n[s]=c,r[s]=f;let l=i,w=0;for(;l!==s;)w+=n[l++],l=l%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),f-o<t)return;const E=d&&f-d;return E?Math.round(w*1e3/E):void 0}}function fe(e,t){let n=0;const r=Xt(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,u=i-n,c=r(u),f=i<=o;n=i;const d={loaded:i,total:o,progress:o?i/o:void 0,bytes:u,rate:c||void 0,estimated:c&&o&&f?(o-i)/c:void 0,event:s};d[t?"download":"upload"]=!0,e(d)}}const Gt=typeof XMLHttpRequest<"u",Qt=Gt&&function(e){return new Promise(function(n,r){let s=e.data;const i=O.from(e.headers).normalize();let{responseType:o,withXSRFToken:u}=e,c;function f(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}let d;if(a.isFormData(s)){if(S.hasStandardBrowserEnv||S.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((d=i.getContentType())!==!1){const[m,...b]=d?d.split(";").map(T=>T.trim()).filter(Boolean):[];i.setContentType([m||"multipart/form-data",...b].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+b))}const w=Le(e.baseURL,e.url);l.open(e.method.toUpperCase(),_e(w,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function E(){if(!l)return;const m=O.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),T={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:m,config:e,request:l};zt(function(g){n(g),f()},function(g){r(g),f()},T),l=null}if("onloadend"in l?l.onloadend=E:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(E)},l.onabort=function(){l&&(r(new y("Request aborted",y.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const T=e.transitional||De;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),r(new y(b,T.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,l)),l=null},S.hasStandardBrowserEnv&&(u&&a.isFunction(u)&&(u=u(e)),u||u!==!1&&Wt(w))){const m=e.xsrfHeaderName&&e.xsrfCookieName&&Jt.read(e.xsrfCookieName);m&&i.set(e.xsrfHeaderName,m)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&a.forEach(i.toJSON(),function(b,T){l.setRequestHeader(T,b)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",fe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",fe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=m=>{l&&(r(!m||m.type?new U(null,e,l):m),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const p=Kt(w);if(p&&S.protocols.indexOf(p)===-1){r(new y("Unsupported protocol "+p+":",y.ERR_BAD_REQUEST,e));return}l.send(s||null)})},Q={http:St,xhr:Qt};a.forEach(Q,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const me=e=>`- ${e}`,Zt=e=>a.isFunction(e)||e===null||e===!1,Be={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!Zt(n)&&(r=Q[(o=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([u,c])=>`adapter ${u} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(me).join(`
`):" "+me(i[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Q};function W(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function ye(e){return W(e),e.headers=O.from(e.headers),e.data=V.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Be.getAdapter(e.adapter||se.adapter)(e).then(function(r){return W(e),r.data=V.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return ke(r)||(W(e),r&&r.response&&(r.response.data=V.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const he=e=>e instanceof O?e.toJSON():e;function N(e,t){t=t||{};const n={};function r(f,d,l){return a.isPlainObject(f)&&a.isPlainObject(d)?a.merge.call({caseless:l},f,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function s(f,d,l){if(a.isUndefined(d)){if(!a.isUndefined(f))return r(void 0,f,l)}else return r(f,d,l)}function i(f,d){if(!a.isUndefined(d))return r(void 0,d)}function o(f,d){if(a.isUndefined(d)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,d)}function u(f,d,l){if(l in t)return r(f,d);if(l in e)return r(void 0,f)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u,headers:(f,d)=>s(he(f),he(d),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(d){const l=c[d]||s,w=l(e[d],t[d],d);a.isUndefined(w)&&l!==u||(n[d]=w)}),n}const Me="1.6.5",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const we={};oe.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Me+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,u)=>{if(t===!1)throw new y(s(o," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!we[o]&&(we[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,u):!0}};function Yt(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const u=e[i],c=u===void 0||o(u,i,e);if(c!==!0)throw new y("option "+i+" must be "+c,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+i,y.ERR_BAD_OPTION)}}const Z={assertOptions:Yt,validators:oe},x=Z.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new de,response:new de}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=N(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Z.assertOptions(r,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Z.assertOptions(s,{encode:x.function,serialize:x.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=O.concat(o,i);const u=[];let c=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(c=c&&m.synchronous,u.unshift(m.fulfilled,m.rejected))});const f=[];this.interceptors.response.forEach(function(m){f.push(m.fulfilled,m.rejected)});let d,l=0,w;if(!c){const p=[ye.bind(this),void 0];for(p.unshift.apply(p,u),p.push.apply(p,f),w=p.length,d=Promise.resolve(n);l<w;)d=d.then(p[l++],p[l++]);return d}w=u.length;let E=n;for(l=0;l<w;){const p=u[l++],m=u[l++];try{E=p(E)}catch(b){m.call(this,b);break}}try{d=ye.call(this,E)}catch(p){return Promise.reject(p)}for(l=0,w=f.length;l<w;)d=d.then(f[l++],f[l++]);return d}getUri(t){t=N(this.defaults,t);const n=Le(t.baseURL,t.url);return _e(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(N(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,u){return this.request(N(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const B=M;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(u=>{r.subscribe(u),i=u}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,u){r.reason||(r.reason=new U(i,o,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}const en=ie;function tn(e){return function(n){return e.apply(null,n)}}function nn(e){return a.isObject(e)&&e.isAxiosError===!0}const Y={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Y).forEach(([e,t])=>{Y[t]=e});const rn=Y;function ve(e){const t=new B(e),n=Te(B.prototype.request,t);return a.extend(n,B.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ve(N(e,s))},n}const h=ve(se);h.Axios=B;h.CanceledError=U;h.CancelToken=en;h.isCancel=ke;h.VERSION=Me;h.toFormData=H;h.AxiosError=y;h.Cancel=h.CanceledError;h.all=function(t){return Promise.all(t)};h.spread=tn;h.isAxiosError=nn;h.mergeConfig=N;h.AxiosHeaders=O;h.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e);h.getAdapter=Be.getAdapter;h.HttpStatusCode=rn;h.default=h;const sn=h;window.axios=sn;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const _={CONTRACT_ADDRESS:"0xCfc22f5303Db85C5244F903D34F2DeA0dC31E92C",ABI:[{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_usdcAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"address",name:"owner",type:"address"}],name:"ERC721IncorrectOwner",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC721InsufficientApproval",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC721InvalidApprover",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"}],name:"ERC721InvalidOperator",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"ERC721InvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC721InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC721InvalidSender",type:"error"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC721NonexistentToken",type:"error"},{inputs:[],name:"mintNFT",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawUSDC",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"NFT_COST",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"usdcToken",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"}],TOKEN_URI:"meta.json"},be={CONTRACT_ADDRESS:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",ABI:[{inputs:[{internalType:"address",name:"implementationContract",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"previousAdmin",type:"address"},{indexed:!1,internalType:"address",name:"newAdmin",type:"address"}],name:"AdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"implementation",type:"address"}],name:"Upgraded",type:"event"},{stateMutability:"payable",type:"fallback"},{inputs:[],name:"admin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newAdmin",type:"address"}],name:"changeAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"implementation",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"}],name:"upgradeTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"upgradeToAndCall",outputs:[],stateMutability:"payable",type:"function"}]};let K,ee,je;async function on(){if(!window.ethereum){alert("MetaMask is not installed!");return}try{const e=ethers.utils.parseUnits("1",6),t=new ethers.Contract(be.CONTRACT_ADDRESS,be.ABI,ee);if((await t.allowance(je,_.CONTRACT_ADDRESS)).lt(e)){const r=await t.approve(_.CONTRACT_ADDRESS,e);await r.wait(),console.log(`Allowance updated. Transaction Hash: ${r.hash}`)}else console.log("Sufficient allowance already set.")}catch(e){console.error("Error setting allowance:",e)}}async function an(){try{await un(),K=new ethers.providers.Web3Provider(window.ethereum),await K.send("eth_requestAccounts",[]),ee=K.getSigner(),je=await ee.getAddress()}catch(e){console.error("Error in get_wallet:",e)}}async function un(){try{if(window.ethereum){const e={chainId:"0xa4b1",chainName:"Arbitrum One",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:["https://arb1.arbitrum.io/rpc"],blockExplorerUrls:["https://arbiscan.io/"]};await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:e.chainId}]}).catch(async t=>{if(t.code===4902)try{await window.ethereum.request({method:"wallet_addEthereumChain",params:[e]})}catch(n){console.error(n)}else console.error(t)})}else alert("MetaMask is not installed!")}catch(e){console.error(e)}}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#mint form"),t=document.querySelector("#redeem form"),n=e.querySelector('input[name="_token"]').value;function r(o){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(o).toLowerCase())}function s(o){return/^0x[a-fA-F0-9]{40}$/.test(o)}function i(o){let u=!0;return o.querySelectorAll("input").forEach(c=>{const f=c.value.trim()==="",d=c.type==="email"&&!r(c.value),l=c.name==="ethereum_address"&&!s(c.value);c.required||f||c.type==="email"&&!f&&d||c.name==="ethereum_address"&&!f&&l?(u=!1,c.classList.add("is-danger")):c.classList.remove("is-danger")}),u}e&&e.addEventListener("submit",async function(o){if(o.preventDefault(),!i(e))return;let u=document.querySelector('input[name="ethereum_address"]').value;await an(),await on();try{const c=_.CONTRACT_ADDRESS,f=_.ABI,d=_.TOKEN_URI;await(await new ethers.Contract(c,f,signer).mintNFT(u,d)).wait();const E=new FormData(e);fetch("/mint",{method:"POST",headers:{"X-CSRF-TOKEN":n,"Content-Type":"application/json"},body:E}).then(p=>p.json()).then(p=>{console.log("Success:",p)}).catch(p=>{console.error("Error:",p),alert("Form submission failed")})}catch(c){console.error(c),alert("An error occurred while minting the NFT");return}}),t&&t.addEventListener("submit",function(o){i(t)||o.preventDefault()})});