export const id=2328;export const ids=[2328,9772,4708];export const modules={1520:(e,n,t)=>{t.d(n,{OC:()=>v});var r=t(304),o=t(8596);function i(){throw new Error("Cycle detected")}var a=Symbol.for("preact-signals");function c(){if(p>1)p--;else{for(var e,n=!1;void 0!==l;){var t=l;for(l=void 0,h++;void 0!==t;){var r=t.o;if(t.o=void 0,t.f&=-3,!(8&t.f)&&k(t))try{t.c()}catch(t){n||(e=t,n=!0)}t=r}}if(h=0,p--,n)throw e}}var d=void 0;var s,l=void 0,p=0,h=0,u=0;function f(e){if(void 0!==d){var n=e.n;if(void 0===n||n.t!==d)return n={i:0,S:e,p:d.s,n:void 0,t:d,e:void 0,x:void 0,r:n},void 0!==d.s&&(d.s.n=n),d.s=n,e.n=n,32&d.f&&e.S(n),n;if(-1===n.i)return n.i=0,void 0!==n.n&&(n.n.p=n.p,void 0!==n.p&&(n.p.n=n.n),n.p=d.s,n.n=void 0,d.s.n=n,d.s=n),n}}function b(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}function v(e){return new b(e)}function k(e){for(var n=e.s;void 0!==n;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function _(e){for(var n=e.s;void 0!==n;n=n.n){var t=n.S.n;if(void 0!==t&&(n.r=t),n.S.n=n,n.i=-1,void 0===n.n){e.s=n;break}}}function y(e){for(var n=e.s,t=void 0;void 0!==n;){var r=n.p;-1===n.i?(n.S.U(n),void 0!==r&&(r.n=n.n),void 0!==n.n&&(n.n.p=r)):t=n,n.S.n=n.r,void 0!==n.r&&(n.r=void 0),n=r}e.s=t}function g(e){b.call(this,void 0),this.x=e,this.s=void 0,this.g=u-1,this.f=4}function x(e){var n=e.u;if(e.u=void 0,"function"==typeof n){p++;var t=d;d=void 0;try{n()}catch(n){throw e.f&=-2,e.f|=8,m(e),n}finally{d=t,c()}}}function m(e){for(var n=e.s;void 0!==n;n=n.n)n.S.U(n);e.x=void 0,e.s=void 0,x(e)}function w(e){if(d!==this)throw new Error("Out-of-order effect");y(this),d=e,this.f&=-2,8&this.f&&m(this),c()}function S(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function O(e){var n=new S(e);try{n.c()}catch(e){throw n.d(),e}return n.d.bind(n)}function j(e,n){r.s1[e]=n.bind(null,r.s1[e]||function(){})}function P(e){s&&s(),s=e&&e.S()}function I(e){var n=this,t=e.data,i=function(e){return(0,o.bB)((function(){return v(e)}),[])}(t);i.value=t;var a=(0,o.bB)((function(){for(var e=n.__v;e=e.__;)if(e.__c){e.__c.__$f|=4;break}return n.__$u.c=function(){var e;(0,r.ur)(a.peek())||3!==(null==(e=n.base)?void 0:e.nodeType)?(n.__$f|=1,n.setState({})):n.base.data=a.peek()},function(e){return new g(e)}((function(){var e=i.value.value;return 0===e?0:!0===e?"":e||""}))}),[]);return a.value}function W(e,n,t,r){var o=n in e&&void 0===e.ownerSVGElement,i=v(t);return{o:function(e,n){i.value=e,r=n},d:O((function(){var t=i.value.value;r[n]!==t&&(r[n]=t,o?e[n]=t:t?e.setAttribute(n,t):e.removeAttribute(n))}))}}b.prototype.brand=a,b.prototype.h=function(){return!0},b.prototype.S=function(e){this.t!==e&&void 0===e.e&&(e.x=this.t,void 0!==this.t&&(this.t.e=e),this.t=e)},b.prototype.U=function(e){if(void 0!==this.t){var n=e.e,t=e.x;void 0!==n&&(n.x=t,e.e=void 0),void 0!==t&&(t.e=n,e.x=void 0),e===this.t&&(this.t=t)}},b.prototype.subscribe=function(e){var n=this;return O((function(){var t=n.value,r=32&this.f;this.f&=-33;try{e(t)}finally{this.f|=r}}))},b.prototype.valueOf=function(){return this.value},b.prototype.toString=function(){return this.value+""},b.prototype.toJSON=function(){return this.value},b.prototype.peek=function(){return this.v},Object.defineProperty(b.prototype,"value",{get:function(){var e=f(this);return void 0!==e&&(e.i=this.i),this.v},set:function(e){if(d instanceof g&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){h>100&&i(),this.v=e,this.i++,u++,p++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{c()}}}}),(g.prototype=new b).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===u)return!0;if(this.g=u,this.f|=1,this.i>0&&!k(this))return this.f&=-2,!0;var e=d;try{_(this),d=this;var n=this.x();(16&this.f||this.v!==n||0===this.i)&&(this.v=n,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return d=e,y(this),this.f&=-2,!0},g.prototype.S=function(e){if(void 0===this.t){this.f|=36;for(var n=this.s;void 0!==n;n=n.n)n.S.S(n)}b.prototype.S.call(this,e)},g.prototype.U=function(e){if(void 0!==this.t&&(b.prototype.U.call(this,e),void 0===this.t)){this.f&=-33;for(var n=this.s;void 0!==n;n=n.n)n.S.U(n)}},g.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;void 0!==e;e=e.x)e.t.N()}},g.prototype.peek=function(){if(this.h()||i(),16&this.f)throw this.v;return this.v},Object.defineProperty(g.prototype,"value",{get:function(){1&this.f&&i();var e=f(this);if(this.h(),void 0!==e&&(e.i=this.i),16&this.f)throw this.v;return this.v}}),S.prototype.c=function(){var e=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var n=this.x();"function"==typeof n&&(this.u=n)}finally{e()}},S.prototype.S=function(){1&this.f&&i(),this.f|=1,this.f&=-9,x(this),_(this),p++;var e=d;return d=this,w.bind(this,e)},S.prototype.N=function(){2&this.f||(this.f|=2,this.o=l,l=this)},S.prototype.d=function(){this.f|=8,1&this.f||m(this)},I.displayName="_st",Object.defineProperties(b.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:I},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),j("__b",(function(e,n){if("string"==typeof n.type){var t,r=n.props;for(var o in r)if("children"!==o){var i=r[o];i instanceof b&&(t||(n.__np=t={}),t[o]=i,r[o]=i.peek())}}e(n)})),j("__r",(function(e,n){P();var t,r=n.__c;r&&(r.__$f&=-2,void 0===(t=r.__$u)&&(r.__$u=t=function(e){var n;return O((function(){n=this})),n.c=function(){r.__$f|=1,r.setState({})},n}())),r,P(t),e(n)})),j("__e",(function(e,n,t,r){P(),void 0,e(n,t,r)})),j("diffed",(function(e,n){var t;if(P(),void 0,"string"==typeof n.type&&(t=n.__e)){var r=n.__np,o=n.props;if(r){var i=t.U;if(i)for(var a in i){var c=i[a];void 0===c||a in r||(c.d(),i[a]=void 0)}else t.U=i={};for(var d in r){var s=i[d],l=r[d];void 0===s?(s=W(t,d,l,o),i[d]=s):s.o(l,o)}}}e(n)})),j("unmount",(function(e,n){if("string"==typeof n.type){var t=n.__e;if(t){var r=t.U;if(r)for(var o in t.U=void 0,r){var i=r[o];i&&i.d()}}}else{var a=n.__c;if(a){var c=a.__$u;c&&(a.__$u=void 0,c.d())}}e(n)})),j("__h",(function(e,n,t,r){(r<3||9===r)&&(n.__$f|=2),e(n,t,r)})),r.Yl.prototype.shouldComponentUpdate=function(e,n){var t=this.__$u;if(!(t&&void 0!==t.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var r in n)return!0;for(var o in e)if("__source"!==o&&e[o]!==this.props[o])return!0;for(var i in this.props)if(!(i in e))return!0;return!1}},9772:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});var r,o=t(2796);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}const a=function(e){return o.kv("svg",i({"data-name":"Icon \\u2013 Check \\u2013 Base",xmlns:"http://www.w3.org/2000/svg",width:24,height:24},e),r||(r=o.kv("g",{"data-name":"Check icon"},o.kv("path",{vectorEffect:"non-scaling-stroke","data-name":"Path 884137",d:"m5.609 12.017 4.248 4.244 8.538-8.522",fill:"none",stroke:"currentColor"}))))}},3792:(e,n,t)=>{t.d(n,{y:()=>O});var r=t(2796),o=t(4944),i=t(9772),a=t(3720),c=t(5536),d=t.n(c),s=t(7008),l=t.n(s),p=t(1496),h=t.n(p),u=t(9356),f=t.n(u),b=t(9904),v=t.n(b),k=t(3676),_={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.0"},styleTagTransform:function(e,n){window._loadedStyles=window._loadedStyles??{};const t=e?.match(/^\.dropin-(\w+)/)?.[1],r=n.getAttribute("data-sdk"),o=t?`sdk/${t}`:n.getAttribute("data-dropin");n.setAttribute("data-dropin",o),n.removeAttribute("data-sdk");const i=window._loadedStyles[o];if(i){const o=function(e,n){const[t,r]=e.split("-"),[o,i]=n.split("-"),a=[...t.split("."),r],c=[...o.split("."),i],d=parseInt(a[0],10),s=parseInt(c[0],10);if(d!==s)return d>s?e:n;const l=parseInt(a[1],10),p=parseInt(c[1],10);if(l!==p)return l>p?e:n;const h=parseInt(a[2],10),u=parseInt(c[2],10);if(h!==u)return h>u?e:n;if(a[3]&&c[3]){const t=/(alpha|beta)(.*)/,r=a[3].match(t),o=c[3].match(t),i=r[1],d=o[1],s=parseInt(r[2],10),l=parseInt(o[2],10);if(i===d)return s>l?e:n;if("alpha"===i&&"beta"===d)return n;if("beta"===i&&"alpha"===d)return e}return a[3]?n:e}(r,i.sdk);if(!t||t&&o===i.sdk){const n=i.style.textContent;i.style.textContent=`${n}\n/* --- MERGED --- */\n${e}`}else t&&o!==i.sdk&&(i.style.textContent=`/* --- UPGRADED --- */\n${e}`);return void n.remove()}n.textContent=e,window._loadedStyles[o]={sdk:r,core:t,style:n};const a=document.querySelector("head"),{lastDropinStyleInjected:c,lastSDKStyleInjected:d}=window._loadedStyles;t?(d?a.insertBefore(n,d.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastSDKStyleInjected=n):(c?a.insertBefore(n,c.nextSibling):d?a.insertBefore(n,d.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastDropinStyleInjected=n)}};_.setAttributes=f(),_.insert=h().bind(null,"head"),_.domAPI=l(),_.insertStyleElement=v();d()(k.c,_);k.c&&k.c.locals&&k.c.locals;var y=t(8412),g=["name","value","size","disabled","error","label","description","className","checked"];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){w(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function w(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var O=e=>{var{name:n,value:t,size:c="medium",disabled:d=!1,error:s=!1,label:l="",description:p="",className:h,checked:u}=e,f=S(e,g),[b,v]=(0,r.oT)(void 0!==u&&u),k=(0,r.yK)(null);return(0,y.YH)("label",{className:(0,o.i)(["dropin-checkbox",["dropin-checkbox--disabled",d]]),children:[(0,y.im)("input",m(m({ref:k,name:n,value:t,type:"checkbox",disabled:d,className:(0,o.i)(["dropin-checkbox__checkbox",["dropin-checkbox__checkbox--error",s],h])},f),{},{onChange:e=>{var n;null===(n=f.onChange)||void 0===n||n.call(f,e),v(e.currentTarget.checked)},checked:b})),(0,y.im)("span",{"aria-checked":b?"true":"false","aria-labelledby":"".concat(n,"-label"),"aria-describedby":"".concat(n,"-description"),className:(0,o.i)(["dropin-checkbox__box",["dropin-checkbox__box--error",s],["dropin-checkbox__box--disabled",d]]),role:"checkbox",tabIndex:d?-1:0,onKeyDown:e=>{var n;" "===e.key&&(e.preventDefault(),null==k||null===(n=k.current)||void 0===n||n.click())},children:(0,y.im)(a.G,{className:(0,o.i)(["dropin-checkbox__checkmark"]),source:i.default,size:"16",stroke:"3"})}),(0,y.im)("div",{id:"".concat(n,"-label"),className:(0,o.i)(["dropin-checkbox__label","dropin-checkbox__label--".concat(c),["dropin-checkbox__label--disabled",d]]),children:l}),(0,y.im)("div",{}),(0,y.im)("div",{id:"".concat(n,"-description"),role:"note",className:(0,o.i)(["dropin-checkbox__description","dropin-checkbox__description--".concat(c),["dropin-checkbox__description--disabled",d]]),children:p})]})}},3720:(e,n,t)=>{t.d(n,{G:()=>S});var r=t(4944),o=t(2796),i=t(5536),a=t.n(i),c=t(7008),d=t.n(c),s=t(1496),l=t.n(s),p=t(9356),h=t.n(p),u=t(9904),f=t.n(u),b=t(4480),v={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.0"},styleTagTransform:function(e,n){window._loadedStyles=window._loadedStyles??{};const t=e?.match(/^\.dropin-(\w+)/)?.[1],r=n.getAttribute("data-sdk"),o=t?`sdk/${t}`:n.getAttribute("data-dropin");n.setAttribute("data-dropin",o),n.removeAttribute("data-sdk");const i=window._loadedStyles[o];if(i){const o=function(e,n){const[t,r]=e.split("-"),[o,i]=n.split("-"),a=[...t.split("."),r],c=[...o.split("."),i],d=parseInt(a[0],10),s=parseInt(c[0],10);if(d!==s)return d>s?e:n;const l=parseInt(a[1],10),p=parseInt(c[1],10);if(l!==p)return l>p?e:n;const h=parseInt(a[2],10),u=parseInt(c[2],10);if(h!==u)return h>u?e:n;if(a[3]&&c[3]){const t=/(alpha|beta)(.*)/,r=a[3].match(t),o=c[3].match(t),i=r[1],d=o[1],s=parseInt(r[2],10),l=parseInt(o[2],10);if(i===d)return s>l?e:n;if("alpha"===i&&"beta"===d)return n;if("beta"===i&&"alpha"===d)return e}return a[3]?n:e}(r,i.sdk);if(!t||t&&o===i.sdk){const n=i.style.textContent;i.style.textContent=`${n}\n/* --- MERGED --- */\n${e}`}else t&&o!==i.sdk&&(i.style.textContent=`/* --- UPGRADED --- */\n${e}`);return void n.remove()}n.textContent=e,window._loadedStyles[o]={sdk:r,core:t,style:n};const a=document.querySelector("head"),{lastDropinStyleInjected:c,lastSDKStyleInjected:d}=window._loadedStyles;t?(d?a.insertBefore(n,d.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastSDKStyleInjected=n):(c?a.insertBefore(n,c.nextSibling):d?a.insertBefore(n,d.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastDropinStyleInjected=n)}};v.setAttributes=h(),v.insert=l().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=f();a()(b.c,v);b.c&&b.c.locals&&b.c.locals;var k=t(8412),_=["source","size","stroke","viewBox","className"];function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){x(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var w={Add:(0,o.Wk)((()=>t.e(1600).then(t.bind(t,1600)))),Bulk:(0,o.Wk)((()=>t.e(3180).then(t.bind(t,3180)))),Burger:(0,o.Wk)((()=>t.e(3728).then(t.bind(t,3728)))),Cart:(0,o.Wk)((()=>t.e(5008).then(t.bind(t,5008)))),Check:(0,o.Wk)((()=>t.e(9772).then(t.bind(t,9772)))),ChevronDown:(0,o.Wk)((()=>t.e(1680).then(t.bind(t,1680)))),ChevronUp:(0,o.Wk)((()=>t.e(844).then(t.bind(t,844)))),ChevronRight:(0,o.Wk)((()=>t.e(8824).then(t.bind(t,8824)))),Close:(0,o.Wk)((()=>t.e(2543).then(t.bind(t,2543)))),Heart:(0,o.Wk)((()=>t.e(9176).then(t.bind(t,9176)))),Minus:(0,o.Wk)((()=>t.e(1268).then(t.bind(t,1268)))),Placeholder:(0,o.Wk)((()=>t.e(8868).then(t.bind(t,8868)))),PlaceholderFilled:(0,o.Wk)((()=>t.e(5488).then(t.bind(t,5488)))),Search:(0,o.Wk)((()=>t.e(3764).then(t.bind(t,3764)))),SearchFilled:(0,o.Wk)((()=>t.e(6820).then(t.bind(t,6820)))),Sort:(0,o.Wk)((()=>t.e(3832).then(t.bind(t,3832)))),Star:(0,o.Wk)((()=>t.e(3836).then(t.bind(t,3836)))),View:(0,o.Wk)((()=>t.e(7524).then(t.bind(t,7524)))),User:(0,o.Wk)((()=>t.e(3996).then(t.bind(t,3996)))),Warning:(0,o.Wk)((()=>t.e(4004).then(t.bind(t,4004)))),Locker:(0,o.Wk)((()=>t.e(2388).then(t.bind(t,2388)))),Wallet:(0,o.Wk)((()=>t.e(8220).then(t.bind(t,8220)))),Card:(0,o.Wk)((()=>t.e(664).then(t.bind(t,664)))),Order:(0,o.Wk)((()=>t.e(3916).then(t.bind(t,3916)))),Delivery:(0,o.Wk)((()=>t.e(9948).then(t.bind(t,2328)))),OrderError:(0,o.Wk)((()=>t.e(984).then(t.bind(t,984)))),OrderSuccess:(0,o.Wk)((()=>t.e(2920).then(t.bind(t,2920)))),PaymentError:(0,o.Wk)((()=>t.e(9940).then(t.bind(t,9940)))),CheckWithCircle:(0,o.Wk)((()=>t.e(1604).then(t.bind(t,1604)))),WarningWithCircle:(0,o.Wk)((()=>t.e(4424).then(t.bind(t,4424)))),WarningFilled:(0,o.Wk)((()=>t.e(1176).then(t.bind(t,1176)))),InfoFilled:(0,o.Wk)((()=>t.e(6484).then(t.bind(t,6484)))),HeartFilled:(0,o.Wk)((()=>t.e(488).then(t.bind(t,488)))),Trash:(0,o.Wk)((()=>t.e(5476).then(t.bind(t,5476))))};function S(e){var{source:n,size:t="24",stroke:i="2",viewBox:a="0 0 24 24",className:c}=e,d=m(e,_),s="string"==typeof n?w[n]:null,l={className:(0,r.i)(["dropin-icon","dropin-icon--shape-stroke-".concat(i),c]),width:t,height:t,viewBox:a};return(0,k.im)(o.G0,{fallback:null,children:s?(0,k.im)(s,g(g({},d),l)):(0,k.im)(n,g(g({},d),l))})}},3388:(e,n,t)=>{t.d(n,{W:()=>O,K:()=>S});var r=t(4944),o=t(5536),i=t.n(o),a=t(7008),c=t.n(a),d=t(1496),s=t.n(d),l=t(9356),p=t.n(l),h=t(9904),u=t.n(h),f=t(6072),b={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.0"},styleTagTransform:function(e,n){window._loadedStyles=window._loadedStyles??{};const t=e?.match(/^\.dropin-(\w+)/)?.[1],r=n.getAttribute("data-sdk"),o=t?`sdk/${t}`:n.getAttribute("data-dropin");n.setAttribute("data-dropin",o),n.removeAttribute("data-sdk");const i=window._loadedStyles[o];if(i){const o=function(e,n){const[t,r]=e.split("-"),[o,i]=n.split("-"),a=[...t.split("."),r],c=[...o.split("."),i],d=parseInt(a[0],10),s=parseInt(c[0],10);if(d!==s)return d>s?e:n;const l=parseInt(a[1],10),p=parseInt(c[1],10);if(l!==p)return l>p?e:n;const h=parseInt(a[2],10),u=parseInt(c[2],10);if(h!==u)return h>u?e:n;if(a[3]&&c[3]){const t=/(alpha|beta)(.*)/,r=a[3].match(t),o=c[3].match(t),i=r[1],d=o[1],s=parseInt(r[2],10),l=parseInt(o[2],10);if(i===d)return s>l?e:n;if("alpha"===i&&"beta"===d)return n;if("beta"===i&&"alpha"===d)return e}return a[3]?n:e}(r,i.sdk);if(!t||t&&o===i.sdk){const n=i.style.textContent;i.style.textContent=`${n}\n/* --- MERGED --- */\n${e}`}else t&&o!==i.sdk&&(i.style.textContent=`/* --- UPGRADED --- */\n${e}`);return void n.remove()}n.textContent=e,window._loadedStyles[o]={sdk:r,core:t,style:n};const a=document.querySelector("head"),{lastDropinStyleInjected:c,lastSDKStyleInjected:d}=window._loadedStyles;t?(d?a.insertBefore(n,d.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastSDKStyleInjected=n):(c?a.insertBefore(n,c.nextSibling):d?a.insertBefore(n,d.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastDropinStyleInjected=n)}};b.setAttributes=p(),b.insert=s().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=u();i()(f.c,b);f.c&&f.c.locals&&f.c.locals;var v=t(8412),k=["className","fullWidth","lines","size","variant","children","multilineGap"],_=["className","children","rowGap"];function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){x(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var w=1,S=e=>{var{className:n,fullWidth:t=!1,lines:o=w,size:i="small",variant:a="row",children:c=null,multilineGap:d="medium"}=e,s=m(e,k),l=[["dropin-skeleton-row__".concat(a),a],["dropin-skeleton-row__".concat(a,"-").concat(i),a&&i]];if(!c&&"empty"===a)return(0,v.im)("div",{className:(0,r.i)(["dropin-skeleton-row dropin-skeleton-row__empty",n])});if(c){var p=c.trim();return(0,v.im)("div",g(g({},s),{},{class:(0,r.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",t],n]),dangerouslySetInnerHTML:{__html:p}}))}return!1===o>w?(0,v.im)("div",g(g({},s),{},{class:(0,r.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",t],"dropin-skeleton--row__content",...l,n])})):(0,v.im)("div",g(g({},s),{},{style:{"--multiline-gap-spacing":"var(--spacing-".concat(d,")")},class:(0,r.i)(["dropin-skeleton-row--multiline",["dropin-skeleton-row--full",t],n]),children:Array.from({length:o}).map(((e,n)=>(0,v.im)("div",{class:(0,r.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",t],"dropin-skeleton--row__content",...l])},n)))}))},O=e=>{var{className:n,children:t,rowGap:o="medium"}=e,i=m(e,_);return(0,v.im)("div",g(g({style:{"--row-gap-spacing":"var(--spacing-".concat(o,")")}},i),{},{className:(0,r.i)(["dropin-skeleton",n]),role:"status","aria-label":"Loading...",children:t}))}},3676:(e,n,t)=>{t.d(n,{c:()=>c});var r=t(6008),o=t.n(r),i=t(2076),a=t.n(i)()(o());a.push([e.id,".dropin-checkbox{\n  display:grid;\n  grid-template-columns:var(--spacing-small) auto;\n  grid-gap:var(--spacing-xxsmall) 0;\n  align-items:center;\n}\n\n.dropin-checkbox__checkbox{\n  display:none;\n  margin:0;\n}\n\n.dropin-checkbox__box{\n  margin:0;\n  width:14px;\n  height:14px;\n  border-radius:var(--shape-border-radius-1);\n  border:var(--shape-border-width-1) solid var(--color-neutral-600);\n  background:var(--color-neutral-50) 0% 0% no-repeat padding-box;\n  cursor:pointer;\n}\n\n.dropin-checkbox__checkmark{\n  opacity:0;\n  border-radius:var(--shape-border-radius-1);\n}\n\n.dropin-checkbox__checkbox:checked + .dropin-checkbox__box{\n  border:none;\n}\n\n.dropin-checkbox__checkbox:checked\n  + .dropin-checkbox__box\n  .dropin-checkbox__checkmark{\n  opacity:1;\n  color:var(--color-neutral-50);\n  background:var(--color-neutral-700) 0% 0% no-repeat padding-box;\n  top:-1px;\n  position:relative;\n}\n\n.dropin-checkbox__box:hover{\n  border:var(--shape-border-width-1) solid var(--color-neutral-800);\n}\n\n.dropin-checkbox__checkbox:checked + .dropin-checkbox__box:hover{\n  border:none;\n  background:var(--color-neutral-800) 0% 0% no-repeat padding-box;\n}\n\n.dropin-checkbox__checkbox:checked\n  + .dropin-checkbox__box\n  .dropin-checkbox__checkmark:hover{\n  background:var(--color-neutral-800) 0% 0% no-repeat padding-box;\n}\n\n.dropin-checkbox__box:focus-visible{\n  border:var(--shape-border-width-1) solid var(--color-neutral-800);\n  outline:var(--shape-border-width-3) solid var(--color-neutral-400);\n}\n\n.dropin-checkbox__checkbox:checked + .dropin-checkbox__box:focus-visible{\n  width:var(--spacing-small);\n  height:var(--spacing-small);\n  border:none;\n  background:var(--color-neutral-800) 0% 0% no-repeat padding-box;\n  outline:var(--shape-border-width-3) solid var(--color-neutral-400);\n}\n\n.dropin-checkbox__checkbox:checked\n  + .dropin-checkbox__box:focus-visible\n  .dropin-checkbox__checkmark{\n  top:0;\n}\n\n.dropin-checkbox__label,\n.dropin-checkbox__label--medium{\n  padding-left:var(--spacing-xsmall);\n  color:var(--color-neutral-800);\n  font:var(--type-body-2-default-font);\n  letter-spacing:var(--type-body-2-default-letter-spacing);\n  text-align:left;\n}\n\n.dropin-checkbox__label--large{\n  padding-left:var(--spacing-small);\n  color:var(--color-neutral-800);\n  font:var(--type-body-1-default-font);\n  letter-spacing:var(--type-body-1-default-letter-spacing);\n  text-align:left;\n}\n\n.dropin-checkbox__description,\n.dropin-checkbox__description--medium{\n  padding-left:var(--spacing-xsmall);\n  color:var(--color-neutral-700);\n  font:var(--type-details-caption-2-font);\n  letter-spacing:var(--type-details-caption-2-letter-spacing);\n  text-align:left;\n}\n\n.dropin-checkbox__description--large{\n  padding-left:var(--spacing-small);\n  color:var(--color-neutral-700);\n  font:var(--type-body-2-default-font);\n  letter-spacing:var(--type-body-2-default-letter-spacing);\n  text-align:left;\n}\n\n.dropin-checkbox,\n.dropin-checkbox--checkbox:not(:disabled){\n  cursor:pointer;\n}\n\n.dropin-checkbox__box--error{\n  border:var(--shape-border-width-2) solid var(--color-alert-500);\n  background:var(--color-neutral-50) 0% 0% no-repeat padding-box;\n}\n\n.dropin-checkbox__box--error:hover{\n  border:var(--shape-border-width-2) solid var(--color-alert-500);\n  background:var(--color-neutral-50) 0% 0% no-repeat padding-box;\n}\n\n.dropin-checkbox__checkbox:checked + .dropin-checkbox__box--error,\n.dropin-checkbox__checkbox:checked + .dropin-checkbox__box--error:hover{\n  border:none;\n  background:var(--color-alert-500) 0% 0% no-repeat padding-box;\n}\n\n.dropin-checkbox__checkbox:checked\n  + .dropin-checkbox__box--error\n  > .dropin-checkbox__checkmark,\n.dropin-checkbox__checkbox:checked\n  + .dropin-checkbox__box--error\n  > .dropin-checkbox__checkmark:hover{\n  background:var(--color-alert-500) 0% 0% no-repeat padding-box;\n}\n\n.dropin-checkbox__checkmark--error{\n  opacity:1;\n  color:var(--color-neutral-50);\n  border:var(--color-alert-500);\n  background:var(--color-alert-500) 0% 0% no-repeat padding-box;\n}\n\n.dropin-checkbox--disabled,\n.dropin-checkbox__label--disabled,\n.dropin-checkbox__description--disabled{\n  color:var(--color-neutral-500);\n  cursor:default;\n}\n\n.dropin-checkbox__box--disabled,\n.dropin-checkbox__box--disabled:hover{\n  background:var(--color-neutral-300) 0% 0% no-repeat padding-box;\n  border:var(--shape-border-width-1) solid var(--color-neutral-500);\n  cursor:default;\n}\n\n.dropin-checkbox__checkbox:checked + .dropin-checkbox__box--disabled,\n.dropin-checkbox__checkbox:checked + .dropin-checkbox__box--disabled:hover{\n  border:none;\n  background:var(--color-neutral-300) 0% 0% no-repeat padding-box;\n}\n\n.dropin-checkbox__checkbox:checked\n  + .dropin-checkbox__box--disabled\n  > .dropin-checkbox__checkmark,\n.dropin-checkbox__checkbox:checked\n  + .dropin-checkbox__box--disabled\n  > .dropin-checkbox__checkmark:hover{\n  background:var(--color-neutral-300) 0% 0% no-repeat padding-box;\n}\n",""]);const c=a},4480:(e,n,t)=>{t.d(n,{c:()=>c});var r=t(6008),o=t.n(r),i=t(2076),a=t.n(i)()(o());a.push([e.id,".dropin-icon{\n}\n\n.dropin-icon--shape-stroke-1{\n  stroke-width:var(--shape-icon-stroke-1);\n}\n\n.dropin-icon--shape-stroke-2{\n  stroke-width:var(--shape-icon-stroke-2);\n}\n\n.dropin-icon--shape-stroke-3{\n  stroke-width:var(--shape-icon-stroke-3);\n}\n\n.dropin-icon--shape-stroke-4{\n  stroke-width:var(--shape-icon-stroke-4);\n}\n",""]);const c=a},6072:(e,n,t)=>{t.d(n,{c:()=>c});var r=t(6008),o=t.n(r),i=t(2076),a=t.n(i)()(o());a.push([e.id,".dropin-skeleton{\n  --row-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  gap:var(--row-gap-spacing);\n}\n\n.dropin-skeleton .dropin-skeleton--row__content{\n  background:var(--color-neutral-300) linear-gradient(\n      to right,\n      var(--color-neutral-300) 0%,\n      var(--color-neutral-100) 20%,\n      var(--color-neutral-300) 40%,\n      var(--color-neutral-300) 100%\n    ) no-repeat;\n  animation:skeletonShimmer infinite 1.2s linear;\n  border-radius:var(--shape-border-radius-2);\n}\n.dropin-skeleton__empty{\n  background:none;\n}\n\n.dropin-skeleton-row--multiline{\n  --multiline-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-auto-rows:max-content;\n  gap:var(--multiline-gap-spacing);\n}\n\n.dropin-skeleton-row--full{\n  grid-column:1 / -1;\n}\n.dropin-skeleton-row svg{\n  fill:var(--color-neutral-400);\n  fill-opacity:0.5;\n  animation-duration:1s;\n  animation-fill-mode:forwards;\n  animation-iteration-count:infinite;\n  animation-name:placeholderShimmer;\n  animation-timing-function:linear;\n}\n\n.dropin-skeleton-row__row-xsmall{\n  height:32px;\n}\n\n.dropin-skeleton-row__row-small{\n  height:40px;\n}\n\n.dropin-skeleton-row__row-medium{\n  height:48px;\n}\n\n.dropin-skeleton-row__row-large{\n  height:56px;\n}\n\n.dropin-skeleton-row__row-xlarge{\n  height:72px;\n}\n\n.dropin-skeleton-row__heading-xsmall{\n  height:20px;\n}\n\n.dropin-skeleton-row__heading-small{\n  height:24px;\n}\n\n.dropin-skeleton-row__heading-medium{\n  height:32px;\n}\n\n.dropin-skeleton-row__heading-large{\n  height:40px;\n}\n\n.dropin-skeleton-row__heading-xlarge{\n  height:48px;\n}\n\n@keyframes skeletonShimmer{\n  0%{\n    background-position:-600px 0;\n  }\n\n  100%{\n    background-position:600px 0;\n  }\n}\n\n@keyframes placeholderShimmer{\n  0%{\n    fill-opacity:0.5;\n  }\n\n  50%{\n    fill-opacity:1;\n  }\n\n  100%{\n    fill-opacity:0.5;\n  }\n}\n@media only screen and (max-width: 600px){\n  .dropin-skeleton{\n    grid-template-columns:1fr;\n  }\n}\n",""]);const c=a}};