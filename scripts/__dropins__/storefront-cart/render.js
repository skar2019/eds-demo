import*as e from"@dropins/tools/event-bus.js";import*as t from"@dropins/tools/fetch-graphql.js";export const id=64;export const ids=[64];export const modules={7387:(e,t,r)=>{r.d(t,{a:()=>G});var n=r(3152),o=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,i=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,a=/[\s\n\\/='"\0<>]/,l=/^xlink:?./,s=/["&<]/;function u(e){if(!1===s.test(e+=""))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1}return r!==t&&(n+=e.slice(t,r)),n}var f=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"\t"))},c=function(e,t,r){return String(e).length>(t||40)||!r&&-1!==String(e).indexOf("\n")||-1!==String(e).indexOf("<")},p={},d=/([A-Z])/g;function v(e){var t="";for(var r in e){var n=e[r];null!=n&&""!==n&&(t&&(t+=" "),t+="-"==r[0]?r:p[r]||(p[r]=r.replace(d,"-$1").toLowerCase()),t="number"==typeof n&&!1===o.test(r)?t+": "+n+"px;":t+": "+n+";")}return t||void 0}function _(e,t){return Array.isArray(t)?t.reduce(_,e):null!=t&&!1!==t&&e.push(t),e}function h(){this.__d=!0}function m(e,t){return{__v:e,context:t,props:e.props,setState:h,forceUpdate:h,__d:!0,__h:[]}}function g(e,t){var r=e.contextType,n=r&&t[r.__c];return null!=r?n?n.props.value:r.__:t}var y=[];function b(e,t,r,o,s,p){if(null==e||"boolean"==typeof e)return"";if("object"!=typeof e)return"function"==typeof e?"":u(e);var d=r.pretty,h=d&&"string"==typeof d?d:"\t";if(Array.isArray(e)){for(var w="",x=0;x<e.length;x++)d&&x>0&&(w+="\n"),w+=b(e[x],t,r,o,s,p);return w}if(void 0!==e.constructor)return"";var C,O=e.type,S=e.props,j=!1;if("function"==typeof O){if(j=!0,!r.shallow||!o&&!1!==r.renderRootComponent){if(O===n.ae){var k=[];return _(k,e.props.children),b(k,t,r,!1!==r.shallowHighOrder,s,p)}var P,D=e.__c=m(e,t);n.s1.__b&&n.s1.__b(e);var E=n.s1.__r;if(O.prototype&&"function"==typeof O.prototype.render){var F=g(O,t);(D=e.__c=new O(S,F)).__v=e,D._dirty=D.__d=!0,D.props=S,null==D.state&&(D.state={}),null==D._nextState&&null==D.__s&&(D._nextState=D.__s=D.state),D.context=F,O.getDerivedStateFromProps?D.state=Object.assign({},D.state,O.getDerivedStateFromProps(D.props,D.state)):D.componentWillMount&&(D.componentWillMount(),D.state=D._nextState!==D.state?D._nextState:D.__s!==D.state?D.__s:D.state),E&&E(e),P=D.render(D.props,D.state,D.context)}else for(var A=g(O,t),L=0;D.__d&&L++<25;)D.__d=!1,E&&E(e),P=O.call(e.__c,S,A);return D.getChildContext&&(t=Object.assign({},t,D.getChildContext())),n.s1.diffed&&n.s1.diffed(e),b(P,t,r,!1!==r.shallowHighOrder,s,p)}O=(C=O).displayName||C!==Function&&C.name||function(e){var t=(Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!t){for(var r=-1,n=y.length;n--;)if(y[n]===e){r=n;break}r<0&&(r=y.push(e)-1),t="UnnamedComponent"+r}return t}(C)}var T,H,M="<"+O;if(S){var N=Object.keys(S);r&&!0===r.sortAttributes&&N.sort();for(var I=0;I<N.length;I++){var R=N[I],$=S[R];if("children"!==R){if(!a.test(R)&&(r&&r.allAttributes||"key"!==R&&"ref"!==R&&"__self"!==R&&"__source"!==R)){if("defaultValue"===R)R="value";else if("defaultChecked"===R)R="checked";else if("defaultSelected"===R)R="selected";else if("className"===R){if(void 0!==S.class)continue;R="class"}else s&&l.test(R)&&(R=R.toLowerCase().replace(/^xlink:?/,"xlink:"));if("htmlFor"===R){if(S.for)continue;R="for"}"style"===R&&$&&"object"==typeof $&&($=v($)),"a"===R[0]&&"r"===R[1]&&"boolean"==typeof $&&($=String($));var W=r.attributeHook&&r.attributeHook(R,$,t,r,j);if(W||""===W)M+=W;else if("dangerouslySetInnerHTML"===R)H=$&&$.__html;else if("textarea"===O&&"value"===R)T=$;else if(($||0===$||""===$)&&"function"!=typeof $){if(!(!0!==$&&""!==$||($=R,r&&r.xml))){M=M+" "+R;continue}if("value"===R){if("select"===O){p=$;continue}"option"===O&&p==$&&void 0===S.selected&&(M+=" selected")}M=M+" "+R+'="'+u($)+'"'}}}else T=$}}if(d){var B=M.replace(/\n\s*/," ");B===M||~B.indexOf("\n")?d&&~M.indexOf("\n")&&(M+="\n"):M=B}if(M+=">",a.test(O))throw new Error(O+" is not a valid HTML tag name in "+M);var V,q=i.test(O)||r.voidElements&&r.voidElements.test(O),z=[];if(H)d&&c(H)&&(H="\n"+h+f(H,h)),M+=H;else if(null!=T&&_(V=[],T).length){for(var G=d&&~M.indexOf("\n"),Q=!1,U=0;U<V.length;U++){var Y=V[U];if(null!=Y&&!1!==Y){var Z=b(Y,t,r,!0,"svg"===O||"foreignObject"!==O&&s,p);if(d&&!G&&c(Z)&&(G=!0),Z)if(d){var J=Z.length>0&&"<"!=Z[0];Q&&J?z[z.length-1]+=Z:z.push(Z),Q=J}else z.push(Z)}}if(d&&G)for(var K=z.length;K--;)z[K]="\n"+h+f(z[K],h)}if(z.length||H)M+=z.join("");else if(r&&r.xml)return M.substring(0,M.length-1)+" />";return!q||V||H?(d&&~M.indexOf("\n")&&(M+="\n"),M=M+"</"+O+">"):M=M.replace(/>$/," />"),M}var w={shallow:!0};C.render=C;var x=[];function C(e,t,r){t=t||{};var o=n.s1.__s;n.s1.__s=!0;var i,a=(0,n.h)(n.ae,null);return a.__k=[e],i=r&&(r.pretty||r.voidElements||r.sortAttributes||r.shallow||r.allAttributes||r.xml||r.attributeHook)?b(e,t,r):D(e,t,!1,void 0,a),n.s1.__c&&n.s1.__c(e,x),n.s1.__s=o,x.length=0,i}function O(e){return null==e||"boolean"==typeof e?null:"string"==typeof e||"number"==typeof e||"bigint"==typeof e?(0,n.h)(null,null,e):e}function S(e,t){return"className"===e?"class":"htmlFor"===e?"for":"defaultValue"===e?"value":"defaultChecked"===e?"checked":"defaultSelected"===e?"selected":t&&l.test(e)?e.toLowerCase().replace(/^xlink:?/,"xlink:"):e}function j(e,t){return"style"===e&&null!=t&&"object"==typeof t?v(t):"a"===e[0]&&"r"===e[1]&&"boolean"==typeof t?String(t):t}var k=Array.isArray,P=Object.assign;function D(e,t,r,o,l){if(null==e||!0===e||!1===e||""===e)return"";if("object"!=typeof e)return"function"==typeof e?"":u(e);if(k(e)){var s="";l.__k=e;for(var f=0;f<e.length;f++)s+=D(e[f],t,r,o,l),e[f]=O(e[f]);return s}if(void 0!==e.constructor)return"";e.__=l,n.s1.__b&&n.s1.__b(e);var c=e.type,p=e.props;if("function"==typeof c){var d;if(c===n.ae)d=p.children;else{d=c.prototype&&"function"==typeof c.prototype.render?function(e,t){var r=e.type,o=g(r,t),i=new r(e.props,o);e.__c=i,i.__v=e,i.__d=!0,i.props=e.props,null==i.state&&(i.state={}),null==i.__s&&(i.__s=i.state),i.context=o,r.getDerivedStateFromProps?i.state=P({},i.state,r.getDerivedStateFromProps(i.props,i.state)):i.componentWillMount&&(i.componentWillMount(),i.state=i.__s!==i.state?i.__s:i.state);var a=n.s1.__r;return a&&a(e),i.render(i.props,i.state,i.context)}(e,t):function(e,t){var r,o=m(e,t),i=g(e.type,t);e.__c=o;for(var a=n.s1.__r,l=0;o.__d&&l++<25;)o.__d=!1,a&&a(e),r=e.type.call(o,e.props,i);return r}(e,t);var v=e.__c;v.getChildContext&&(t=P({},t,v.getChildContext()))}var _=D(d=null!=d&&d.type===n.ae&&null==d.key?d.props.children:d,t,r,o,e);return n.s1.diffed&&n.s1.diffed(e),e.__=void 0,n.s1.unmount&&n.s1.unmount(e),_}var h,y,b="<";if(b+=c,p)for(var w in h=p.children,p){var x=p[w];if(!("key"===w||"ref"===w||"__self"===w||"__source"===w||"children"===w||"className"===w&&"class"in p||"htmlFor"===w&&"for"in p||a.test(w)))if(x=j(w=S(w,r),x),"dangerouslySetInnerHTML"===w)y=x&&x.__html;else if("textarea"===c&&"value"===w)h=x;else if((x||0===x||""===x)&&"function"!=typeof x){if(!0===x||""===x){x=w,b=b+" "+w;continue}if("value"===w){if("select"===c){o=x;continue}"option"!==c||o!=x||"selected"in p||(b+=" selected")}b=b+" "+w+'="'+u(x)+'"'}}var C=b;if(b+=">",a.test(c))throw new Error(c+" is not a valid HTML tag name in "+b);var E="",F=!1;if(y)E+=y,F=!0;else if("string"==typeof h)E+=u(h),F=!0;else if(k(h)){e.__k=h;for(var A=0;A<h.length;A++){var L=h[A];if(h[A]=O(L),null!=L&&!1!==L){var T=D(L,t,"svg"===c||"foreignObject"!==c&&r,o,e);T&&(E+=T,F=!0)}}}else if(null!=h&&!1!==h&&!0!==h){e.__k=[O(h)];var H=D(h,t,"svg"===c||"foreignObject"!==c&&r,o,e);H&&(E+=H,F=!0)}if(n.s1.diffed&&n.s1.diffed(e),e.__=void 0,n.s1.unmount&&n.s1.unmount(e),F)b+=E;else if(i.test(c))return C+" />";return b+"</"+c+">"}C.shallowRender=function(e,t){return C(e,t,w)};const E=C;var F=r(4496),A=r(9888);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e,t,r){return t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function M(e,t,r,n,o,i,a){try{var l=e[i](a),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,o)}function N(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){M(i,n,o,a,l,"next",e)}function l(e){M(i,n,o,a,l,"throw",e)}a(void 0)}))}}var I=r(9392),R=r(5840),$=r(8122),W=r(3704),B=r(8528),V=r.n(B);$.events.enableLogger(!0);var q={default:r(2880)},z=e=>{var t,{children:r}=e,[n,o]=(0,I.oT)(),i=null===(t=W.E.getConfig())||void 0===t?void 0:t.langDefinitions;(0,I.YB)((()=>{var e=$.events.on("locale",(e=>{e!==n&&o(e)}),{eager:!0});return()=>{null==e||e.off()}}),[n]);var a=V()(q,null!=i?i:{});return(0,A.im)(R.C,{lang:n,langDefinitions:a,children:r})},G=new class{constructor(e){this._provider=e}render(e,t){var r=this;return function(){var o=N((function*(o){var i,a;if(!e)throw new Error("Component is not defined");if(!o)throw new Error("Root element is not defined");var l=null!==(i=yield null===(a=e.getInitialData)||void 0===a?void 0:a.call(e,t))&&void 0!==i?i:{};(0,n.ai)((0,A.im)(F.o,T(T({node:r._provider},r._provider.props),{},{children:(0,A.im)(e,T(T({},t),{},{initialData:l}))})),o)}));return function(e){return o.apply(this,arguments)}}()}unmount(e){if(!e)throw new Error("Root element is not defined");(0,n.ai)(null,e)}toString(e,t,r){var n=this;return N((function*(){var o,i;if(!e)throw new Error("Component is not defined");var a=null!==(o=yield null===(i=e.getInitialData)||void 0===i?void 0:i.call(e,t))&&void 0!==o?o:{};return E((0,A.im)(F.o,T(T({node:n._provider},n._provider.props),{},{children:(0,A.im)(e,T(T({},t),{},{initialData:a}))})),{},T({},r))}))()}}((0,A.im)(z,{}))},8122:(t,r,n)=>{t.exports=(e=>{var t={};return n.d(t,e),t})({events:()=>e.events})},8616:(e,r,n)=>{e.exports=(e=>{var t={};return n.d(t,e),t})({FetchGraphQL:()=>t.FetchGraphQL})},2880:e=>{e.exports=JSON.parse('{"Cart":{"Cart":{"heading":"Shopping Cart"},"MiniCart":{"heading":"Shopping Cart ({count})","estimatedTotal":"Estimated Total","cartLink":"View Cart","checkoutLink":"Checkout"},"EmptyCart":{"heading":"Your cart is empty","cta":"Continue Shopping"},"PriceSummary":{"taxToBeDetermined":"TBD","checkout":"Checkout","estimatedShippingForm":{"country":{"placeholder":"Country"},"state":{"placeholder":"State"},"zip":{"placeholder":"Zip Code"},"apply":{"label":"Apply"}},"freeShipping":"Free"},"CartItem":{"discountedPrice":"Discounted Price","download":"file","message":"Note","recipient":"To","regularPrice":"Regular Price","sender":"From","file":"{count} file","files":"{count} files"}}}')}};import r from"./runtime.js";import*as n from"./84.js";r.C(n);import*as o from"./928.js";r.C(o);import*as i from"./152.js";r.C(i);import*as a from"./render.js";r.C(a);var l,s=(l=7387,r(r.s=l)).a;export{s as render};