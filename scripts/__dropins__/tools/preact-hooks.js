import{options as B}from"./preact.js";var c,r,H,b,v=0,x=[],p=[],o=B,g=o.__b,C=o.__r,A=o.diffed,D=o.__c,F=o.unmount,k=o.__;function l(t,_){o.__h&&o.__h(r,t,v||_),v=0;var u=r.__H||(r.__H={__:[],__h:[]});return t>=u.__.length&&u.__.push({__V:p}),u.__[t]}function I(t){return v=1,R(U,t)}function R(t,_,u){var n=l(c++,2);if(n.t=t,!n.__c&&(n.__=[u?u(_):U(void 0,_),function(a){var f=n.__N?n.__N[0]:n.__[0],s=n.t(f,a);f!==s&&(n.__N=[s,n.__[1]],n.__c.setState({}))}],n.__c=r,!r.u)){var i=function(a,f,s){if(!n.__c.__H)return!0;var m=n.__c.__H.__.filter(function(e){return!!e.__c});if(m.every(function(e){return!e.__N}))return!h||h.call(this,a,f,s);var V=!1;return m.forEach(function(e){if(e.__N){var P=e.__[0];e.__=e.__N,e.__N=void 0,P!==e.__[0]&&(V=!0)}}),!(!V&&n.__c.props===a)&&(!h||h.call(this,a,f,s))};r.u=!0;var h=r.shouldComponentUpdate,N=r.componentWillUpdate;r.componentWillUpdate=function(a,f,s){if(this.__e){var m=h;h=void 0,i(a,f,s),h=m}N&&N.call(this,a,f,s)},r.shouldComponentUpdate=i}return n.__N||n.__}function z(t,_){var u=l(c++,3);!o.__s&&y(u.__H,_)&&(u.__=t,u.i=_,r.__H.__h.push(u))}function S(t,_){var u=l(c++,4);!o.__s&&y(u.__H,_)&&(u.__=t,u.i=_,r.__h.push(u))}function L(t){return v=5,T(function(){return{current:t}},[])}function M(t,_,u){v=6,S(function(){return typeof t=="function"?(t(_()),function(){return t(null)}):t?(t.current=_(),function(){return t.current=null}):void 0},u==null?u:u.concat(t))}function T(t,_){var u=l(c++,7);return y(u.__H,_)?(u.__V=t(),u.i=_,u.__h=t,u.__V):u.__}function $(t,_){return v=8,T(function(){return t},_)}function G(t){var _=r.context[t.__c],u=l(c++,9);return u.c=t,_?(u.__==null&&(u.__=!0,_.sub(r)),_.props.value):t.__}function J(t,_){o.useDebugValue&&o.useDebugValue(_?_(t):t)}function K(t){var _=l(c++,10),u=I();return _.__=t,r.componentDidCatch||(r.componentDidCatch=function(n,i){_.__&&_.__(n,i),u[1](n)}),[u[0],function(){u[1](void 0)}]}function O(){var t=l(c++,11);if(!t.__){for(var _=r.__v;_!==null&&!_.__m&&_.__!==null;)_=_.__;var u=_.__m||(_.__m=[0,0]);t.__="P"+u[0]+"-"+u[1]++}return t.__}function W(){for(var t;t=x.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(d),t.__H.__h.forEach(E),t.__H.__h=[]}catch(_){t.__H.__h=[],o.__e(_,t.__v)}}o.__b=function(t){r=null,g&&g(t)},o.__=function(t,_){t&&_.__k&&_.__k.__m&&(t.__m=_.__k.__m),k&&k(t,_)},o.__r=function(t){C&&C(t),c=0;var _=(r=t.__c).__H;_&&(H===r?(_.__h=[],r.__h=[],_.__.forEach(function(u){u.__N&&(u.__=u.__N),u.__V=p,u.__N=u.i=void 0})):(_.__h.forEach(d),_.__h.forEach(E),_.__h=[],c=0)),H=r},o.diffed=function(t){A&&A(t);var _=t.__c;_&&_.__H&&(_.__H.__h.length&&(x.push(_)!==1&&b===o.requestAnimationFrame||((b=o.requestAnimationFrame)||j)(W)),_.__H.__.forEach(function(u){u.i&&(u.__H=u.i),u.__V!==p&&(u.__=u.__V),u.i=void 0,u.__V=p})),H=r=null},o.__c=function(t,_){_.some(function(u){try{u.__h.forEach(d),u.__h=u.__h.filter(function(n){return!n.__||E(n)})}catch(n){_.some(function(i){i.__h&&(i.__h=[])}),_=[],o.__e(n,u.__v)}}),D&&D(t,_)},o.unmount=function(t){F&&F(t);var _,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{d(n)}catch(i){_=i}}),u.__H=void 0,_&&o.__e(_,u.__v))};var q=typeof requestAnimationFrame=="function";function j(t){var _,u=function(){clearTimeout(n),q&&cancelAnimationFrame(_),setTimeout(t)},n=setTimeout(u,100);q&&(_=requestAnimationFrame(u))}function d(t){var _=r,u=t.__c;typeof u=="function"&&(t.__c=void 0,u()),r=_}function E(t){var _=r;t.__c=t.__(),r=_}function y(t,_){return!t||t.length!==_.length||_.some(function(u,n){return u!==t[n]})}function U(t,_){return typeof _=="function"?_(t):_}export{$ as useCallback,G as useContext,J as useDebugValue,z as useEffect,K as useErrorBoundary,O as useId,M as useImperativeHandle,S as useLayoutEffect,T as useMemo,R as useReducer,L as useRef,I as useState};
//# sourceMappingURL=preact-hooks.js.map
