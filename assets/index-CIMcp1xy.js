(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function dA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lM={exports:{}},Wd={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pA=Symbol.for("react.transitional.element"),mA=Symbol.for("react.fragment");function cM(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:pA,type:t,key:i,ref:e!==void 0?e:null,props:n}}Wd.Fragment=mA;Wd.jsx=cM;Wd.jsxs=cM;lM.exports=Wd;var G=lM.exports,uM={exports:{}},$e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=Symbol.for("react.transitional.element"),_A=Symbol.for("react.portal"),gA=Symbol.for("react.fragment"),vA=Symbol.for("react.strict_mode"),xA=Symbol.for("react.profiler"),SA=Symbol.for("react.consumer"),yA=Symbol.for("react.context"),MA=Symbol.for("react.forward_ref"),EA=Symbol.for("react.suspense"),bA=Symbol.for("react.memo"),fM=Symbol.for("react.lazy"),TA=Symbol.for("react.activity"),jv=Symbol.iterator;function AA(t){return t===null||typeof t!="object"?null:(t=jv&&t[jv]||t["@@iterator"],typeof t=="function"?t:null)}var hM={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dM=Object.assign,pM={};function xc(t,e,n){this.props=t,this.context=e,this.refs=pM,this.updater=n||hM}xc.prototype.isReactComponent={};xc.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xc.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mM(){}mM.prototype=xc.prototype;function o0(t,e,n){this.props=t,this.context=e,this.refs=pM,this.updater=n||hM}var l0=o0.prototype=new mM;l0.constructor=o0;dM(l0,xc.prototype);l0.isPureReactComponent=!0;var Jv=Array.isArray;function Km(){}var Kt={H:null,A:null,T:null,S:null},_M=Object.prototype.hasOwnProperty;function c0(t,e,n){var i=n.ref;return{$$typeof:s0,type:t,key:e,ref:i!==void 0?i:null,props:n}}function RA(t,e){return c0(t.type,e,t.props)}function u0(t){return typeof t=="object"&&t!==null&&t.$$typeof===s0}function CA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $v=/\/+/g;function vp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?CA(""+t.key):e.toString(36)}function wA(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Km,Km):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function ml(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case s0:case _A:s=!0;break;case fM:return s=t._init,ml(s(t._payload),e,n,i,a)}}if(s)return a=a(t),s=i===""?"."+vp(t,0):i,Jv(a)?(n="",s!=null&&(n=s.replace($v,"$&/")+"/"),ml(a,e,n,"",function(c){return c})):a!=null&&(u0(a)&&(a=RA(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace($v,"$&/")+"/")+s)),e.push(a)),1;s=0;var o=i===""?".":i+":";if(Jv(t))for(var l=0;l<t.length;l++)i=t[l],r=o+vp(i,l),s+=ml(i,e,n,r,a);else if(l=AA(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=o+vp(i,l++),s+=ml(i,e,n,r,a);else if(r==="object"){if(typeof t.then=="function")return ml(wA(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function bf(t,e,n){if(t==null)return t;var i=[],a=0;return ml(t,i,"","",function(r){return e.call(n,r,a++)}),i}function DA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ex=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},UA={map:bf,forEach:function(t,e,n){bf(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bf(t,function(){e++}),e},toArray:function(t){return bf(t,function(e){return e})||[]},only:function(t){if(!u0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Activity=TA;$e.Children=UA;$e.Component=xc;$e.Fragment=gA;$e.Profiler=xA;$e.PureComponent=o0;$e.StrictMode=vA;$e.Suspense=EA;$e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Kt;$e.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Kt.H.useMemoCache(t)}};$e.cache=function(t){return function(){return t.apply(null,arguments)}};$e.cacheSignal=function(){return null};$e.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=dM({},t.props),a=t.key;if(e!=null)for(r in e.key!==void 0&&(a=""+e.key),e)!_M.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(i[r]=e[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var s=Array(r),o=0;o<r;o++)s[o]=arguments[o+2];i.children=s}return c0(t.type,a,i)};$e.createContext=function(t){return t={$$typeof:yA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:SA,_context:t},t};$e.createElement=function(t,e,n){var i,a={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)_M.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return c0(t,r,a)};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:MA,render:t}};$e.isValidElement=u0;$e.lazy=function(t){return{$$typeof:fM,_payload:{_status:-1,_result:t},_init:DA}};$e.memo=function(t,e){return{$$typeof:bA,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Kt.T,n={};Kt.T=n;try{var i=t(),a=Kt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Km,ex)}catch(r){ex(r)}finally{e!==null&&n.types!==null&&(e.types=n.types),Kt.T=e}};$e.unstable_useCacheRefresh=function(){return Kt.H.useCacheRefresh()};$e.use=function(t){return Kt.H.use(t)};$e.useActionState=function(t,e,n){return Kt.H.useActionState(t,e,n)};$e.useCallback=function(t,e){return Kt.H.useCallback(t,e)};$e.useContext=function(t){return Kt.H.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t,e){return Kt.H.useDeferredValue(t,e)};$e.useEffect=function(t,e){return Kt.H.useEffect(t,e)};$e.useEffectEvent=function(t){return Kt.H.useEffectEvent(t)};$e.useId=function(){return Kt.H.useId()};$e.useImperativeHandle=function(t,e,n){return Kt.H.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return Kt.H.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return Kt.H.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return Kt.H.useMemo(t,e)};$e.useOptimistic=function(t,e){return Kt.H.useOptimistic(t,e)};$e.useReducer=function(t,e,n){return Kt.H.useReducer(t,e,n)};$e.useRef=function(t){return Kt.H.useRef(t)};$e.useState=function(t){return Kt.H.useState(t)};$e.useSyncExternalStore=function(t,e,n){return Kt.H.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return Kt.H.useTransition()};$e.version="19.2.7";uM.exports=$e;var We=uM.exports;const NA=dA(We);var gM={exports:{}},Yd={},vM={exports:{}},xM={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,U){var I=N.length;N.push(U);e:for(;0<I;){var V=I-1>>>1,D=N[V];if(0<a(D,U))N[V]=U,N[I]=D,I=V;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var U=N[0],I=N.pop();if(I!==U){N[0]=I;e:for(var V=0,D=N.length,ie=D>>>1;V<ie;){var fe=2*(V+1)-1,Be=N[fe],Le=fe+1,Ne=N[Le];if(0>a(Be,I))Le<D&&0>a(Ne,Be)?(N[V]=Ne,N[Le]=I,V=Le):(N[V]=Be,N[fe]=I,V=fe);else if(Le<D&&0>a(Ne,I))N[V]=Ne,N[Le]=I,V=Le;else break e}}return U}function a(N,U){var I=N.sortIndex-U.sortIndex;return I!==0?I:N.id-U.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],u=1,d=null,f=3,h=!1,_=!1,v=!1,m=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;function x(N){for(var U=n(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=N)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function b(N){if(v=!1,x(N),!_)if(n(l)!==null)_=!0,A||(A=!0,P());else{var U=n(c);U!==null&&O(b,U.startTime-N)}}var A=!1,E=-1,y=5,T=-1;function C(){return m?!0:!(t.unstable_now()-T<y)}function L(){if(m=!1,A){var N=t.unstable_now();T=N;var U=!0;try{e:{_=!1,v&&(v=!1,g(E),E=-1),h=!0;var I=f;try{t:{for(x(N),d=n(l);d!==null&&!(d.expirationTime>N&&C());){var V=d.callback;if(typeof V=="function"){d.callback=null,f=d.priorityLevel;var D=V(d.expirationTime<=N);if(N=t.unstable_now(),typeof D=="function"){d.callback=D,x(N),U=!0;break t}d===n(l)&&i(l),x(N)}else i(l);d=n(l)}if(d!==null)U=!0;else{var ie=n(c);ie!==null&&O(b,ie.startTime-N),U=!1}}break e}finally{d=null,f=I,h=!1}U=void 0}}finally{U?P():A=!1}}}var P;if(typeof S=="function")P=function(){S(L)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,X=q.port2;q.port1.onmessage=L,P=function(){X.postMessage(null)}}else P=function(){p(L,0)};function O(N,U){E=p(function(){N(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var I=f;f=U;try{return N()}finally{f=I}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(N,U){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var I=f;f=N;try{return U()}finally{f=I}},t.unstable_scheduleCallback=function(N,U,I){var V=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,N){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=I+D,N={id:u++,callback:U,priorityLevel:N,startTime:I,expirationTime:D,sortIndex:-1},I>V?(N.sortIndex=I,e(c,N),n(l)===null&&N===n(c)&&(v?(g(E),E=-1):v=!0,O(b,I-V))):(N.sortIndex=D,e(l,N),_||h||(_=!0,A||(A=!0,P()))),N},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(N){var U=f;return function(){var I=f;f=U;try{return N.apply(this,arguments)}finally{f=I}}}})(xM);vM.exports=xM;var LA=vM.exports,SM={exports:{}},xi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OA=We;function yM(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Jr(){}var gi={d:{f:Jr,r:function(){throw Error(yM(522))},D:Jr,C:Jr,L:Jr,m:Jr,X:Jr,S:Jr,M:Jr},p:0,findDOMNode:null},PA=Symbol.for("react.portal");function IA(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:PA,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var lu=OA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function qd(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}xi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=gi;xi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(yM(299));return IA(t,e,null,n)};xi.flushSync=function(t){var e=lu.T,n=gi.p;try{if(lu.T=null,gi.p=2,t)return t()}finally{lu.T=e,gi.p=n,gi.d.f()}};xi.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,gi.d.C(t,e))};xi.prefetchDNS=function(t){typeof t=="string"&&gi.d.D(t)};xi.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=qd(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?gi.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&gi.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};xi.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=qd(e.as,e.crossOrigin);gi.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&gi.d.M(t)};xi.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=qd(n,e.crossOrigin);gi.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};xi.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=qd(e.as,e.crossOrigin);gi.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else gi.d.m(t)};xi.requestFormReset=function(t){gi.d.r(t)};xi.unstable_batchedUpdates=function(t,e){return t(e)};xi.useFormState=function(t,e,n){return lu.H.useFormState(t,e,n)};xi.useFormStatus=function(){return lu.H.useHostTransitionStatus()};xi.version="19.2.7";function MM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(MM)}catch(t){console.error(t)}}MM(),SM.exports=xi;var FA=SM.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Un=LA,EM=We,zA=FA;function ae(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function bM(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function of(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function TM(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function AM(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tx(t){if(of(t)!==t)throw Error(ae(188))}function BA(t){var e=t.alternate;if(!e){if(e=of(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return tx(a),t;if(r===i)return tx(a),e;r=r.sibling}throw Error(ae(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function RM(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=RM(t),e!==null)return e;t=t.sibling}return null}var Qt=Object.assign,HA=Symbol.for("react.element"),Tf=Symbol.for("react.transitional.element"),Zc=Symbol.for("react.portal"),Sl=Symbol.for("react.fragment"),CM=Symbol.for("react.strict_mode"),Qm=Symbol.for("react.profiler"),wM=Symbol.for("react.consumer"),Ar=Symbol.for("react.context"),f0=Symbol.for("react.forward_ref"),jm=Symbol.for("react.suspense"),Jm=Symbol.for("react.suspense_list"),h0=Symbol.for("react.memo"),ss=Symbol.for("react.lazy"),$m=Symbol.for("react.activity"),GA=Symbol.for("react.memo_cache_sentinel"),nx=Symbol.iterator;function wc(t){return t===null||typeof t!="object"?null:(t=nx&&t[nx]||t["@@iterator"],typeof t=="function"?t:null)}var VA=Symbol.for("react.client.reference");function e_(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===VA?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Sl:return"Fragment";case Qm:return"Profiler";case CM:return"StrictMode";case jm:return"Suspense";case Jm:return"SuspenseList";case $m:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Zc:return"Portal";case Ar:return t.displayName||"Context";case wM:return(t._context.displayName||"Context")+".Consumer";case f0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case h0:return e=t.displayName||null,e!==null?e:e_(t.type)||"Memo";case ss:e=t._payload,t=t._init;try{return e_(t(e))}catch{}}return null}var Kc=Array.isArray,Ze=EM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Et=zA.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_o={pending:!1,data:null,method:null,action:null},t_=[],yl=-1;function lr(t){return{current:t}}function Gn(t){0>yl||(t.current=t_[yl],t_[yl]=null,yl--)}function Xt(t,e){yl++,t_[yl]=t.current,t.current=e}var er=lr(null),Ou=lr(null),bs=lr(null),Jh=lr(null);function $h(t,e){switch(Xt(bs,e),Xt(Ou,t),Xt(er,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?lS(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=lS(e),t=K1(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Gn(er),Xt(er,t)}function Jl(){Gn(er),Gn(Ou),Gn(bs)}function n_(t){t.memoizedState!==null&&Xt(Jh,t);var e=er.current,n=K1(e,t.type);e!==n&&(Xt(Ou,t),Xt(er,n))}function ed(t){Ou.current===t&&(Gn(er),Gn(Ou)),Jh.current===t&&(Gn(Jh),Wu._currentValue=_o)}var xp,ix;function to(t){if(xp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xp=e&&e[1]||"",ix=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xp+t+ix}var Sp=!1;function yp(t,e){if(!t||Sp)return"";Sp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(h){var f=h}Reflect.construct(t,[],d)}else{try{d.call()}catch(h){f=h}t.call(d.prototype)}}else{try{throw Error()}catch(h){f=h}(d=t())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(h){if(h&&f&&typeof h.stack=="string")return[h.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var u=`
`+l[i].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=i&&0<=a);break}}}finally{Sp=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?to(n):""}function kA(t,e){switch(t.tag){case 26:case 27:case 5:return to(t.type);case 16:return to("Lazy");case 13:return t.child!==e&&e!==null?to("Suspense Fallback"):to("Suspense");case 19:return to("SuspenseList");case 0:case 15:return yp(t.type,!1);case 11:return yp(t.type.render,!1);case 1:return yp(t.type,!0);case 31:return to("Activity");default:return""}}function ax(t){try{var e="",n=null;do e+=kA(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var i_=Object.prototype.hasOwnProperty,d0=Un.unstable_scheduleCallback,Mp=Un.unstable_cancelCallback,XA=Un.unstable_shouldYield,WA=Un.unstable_requestPaint,ji=Un.unstable_now,YA=Un.unstable_getCurrentPriorityLevel,DM=Un.unstable_ImmediatePriority,UM=Un.unstable_UserBlockingPriority,td=Un.unstable_NormalPriority,qA=Un.unstable_LowPriority,NM=Un.unstable_IdlePriority,ZA=Un.log,KA=Un.unstable_setDisableYieldValue,lf=null,Ji=null;function ds(t){if(typeof ZA=="function"&&KA(t),Ji&&typeof Ji.setStrictMode=="function")try{Ji.setStrictMode(lf,t)}catch{}}var $i=Math.clz32?Math.clz32:JA,QA=Math.log,jA=Math.LN2;function JA(t){return t>>>=0,t===0?32:31-(QA(t)/jA|0)|0}var Af=256,Rf=262144,Cf=4194304;function no(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zd(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=no(i):(s&=o,s!==0?a=no(s):n||(n=o&~t,n!==0&&(a=no(n))))):(o=i&~r,o!==0?a=no(o):s!==0?a=no(s):n||(n=i&~t,n!==0&&(a=no(n)))),a===0?0:e!==0&&e!==a&&!(e&r)&&(r=a&-a,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:a}function cf(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function $A(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LM(){var t=Cf;return Cf<<=1,!(Cf&62914560)&&(Cf=4194304),t}function Ep(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uf(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function eR(t,e,n,i,a,r){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=s&~n;0<n;){var u=31-$i(n),d=1<<u;o[u]=0,l[u]=-1;var f=c[u];if(f!==null)for(c[u]=null,u=0;u<f.length;u++){var h=f[u];h!==null&&(h.lane&=-536870913)}n&=~d}i!==0&&OM(t,i,0),r!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function OM(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-$i(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function PM(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$i(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function IM(t,e){var n=e&-e;return n=n&42?1:p0(n),n&(t.suspendedLanes|e)?0:n}function p0(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function m0(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function FM(){var t=Et.p;return t!==0?t:(t=window.event,t===void 0?32:sb(t.type))}function rx(t,e){var n=Et.p;try{return Et.p=t,e()}finally{Et.p=n}}var Ws=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Ws,Li="__reactProps$"+Ws,Sc="__reactContainer$"+Ws,a_="__reactEvents$"+Ws,tR="__reactListeners$"+Ws,nR="__reactHandles$"+Ws,sx="__reactResources$"+Ws,ff="__reactMarker$"+Ws;function _0(t){delete t[Xn],delete t[Li],delete t[a_],delete t[tR],delete t[nR]}function Ml(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sc]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dS(t);t!==null;){if(n=t[Xn])return n;t=dS(t)}return e}t=n,n=t.parentNode}return null}function yc(t){if(t=t[Xn]||t[Sc]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Qc(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ae(33))}function Pl(t){var e=t[sx];return e||(e=t[sx]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Hn(t){t[ff]=!0}var zM=new Set,BM={};function Bo(t,e){$l(t,e),$l(t+"Capture",e)}function $l(t,e){for(BM[t]=e,t=0;t<e.length;t++)zM.add(e[t])}var iR=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ox={},lx={};function aR(t){return i_.call(lx,t)?!0:i_.call(ox,t)?!1:iR.test(t)?lx[t]=!0:(ox[t]=!0,!1)}function Mh(t,e,n){if(aR(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function wf(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function ur(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function da(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function HM(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rR(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function r_(t){if(!t._valueTracker){var e=HM(t)?"checked":"value";t._valueTracker=rR(t,e,""+t[e])}}function GM(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=HM(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function nd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var sR=/[\n"\\]/g;function va(t){return t.replace(sR,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function s_(t,e,n,i,a,r,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+da(e)):t.value!==""+da(e)&&(t.value=""+da(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?o_(t,s,da(e)):n!=null?o_(t,s,da(n)):i!=null&&t.removeAttribute("value"),a==null&&r!=null&&(t.defaultChecked=!!r),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+da(o):t.removeAttribute("name")}function VM(t,e,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){r_(t);return}n=n!=null?""+da(n):"",e=e!=null?""+da(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),r_(t)}function o_(t,e,n){e==="number"&&nd(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Il(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+da(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function kM(t,e,n){if(e!=null&&(e=""+da(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+da(n):""}function XM(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(ae(92));if(Kc(i)){if(1<i.length)throw Error(ae(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=da(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),r_(t)}function ec(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oR=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cx(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||oR.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function WM(t,e,n){if(e!=null&&typeof e!="object")throw Error(ae(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&cx(t,a,i)}else for(var r in e)e.hasOwnProperty(r)&&cx(t,r,e[r])}function g0(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lR=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cR=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Eh(t){return cR.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Rr(){}var l_=null;function v0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var El=null,Fl=null;function ux(t){var e=yc(t);if(e&&(t=e.stateNode)){var n=t[Li]||null;e:switch(t=e.stateNode,e.type){case"input":if(s_(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+va(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[Li]||null;if(!a)throw Error(ae(90));s_(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&GM(i)}break e;case"textarea":kM(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Il(t,!!n.multiple,e,!1)}}}var bp=!1;function YM(t,e,n){if(bp)return t(e,n);bp=!0;try{var i=t(e);return i}finally{if(bp=!1,(El!==null||Fl!==null)&&(sp(),El&&(e=El,t=Fl,Fl=El=null,ux(e),t)))for(e=0;e<t.length;e++)ux(t[e])}}function Pu(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Li]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c_=!1;if(zr)try{var Dc={};Object.defineProperty(Dc,"passive",{get:function(){c_=!0}}),window.addEventListener("test",Dc,Dc),window.removeEventListener("test",Dc,Dc)}catch{c_=!1}var ps=null,x0=null,bh=null;function qM(){if(bh)return bh;var t,e=x0,n=e.length,i,a="value"in ps?ps.value:ps.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return bh=a.slice(t,1<i?1-i:void 0)}function Th(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Df(){return!0}function fx(){return!1}function Pi(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Df:fx,this.isPropagationStopped=fx,this}return Qt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Df)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Df)},persist:function(){},isPersistent:Df}),e}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kd=Pi(Ho),hf=Qt({},Ho,{view:0,detail:0}),uR=Pi(hf),Tp,Ap,Uc,Qd=Qt({},hf,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:S0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uc&&(Uc&&t.type==="mousemove"?(Tp=t.screenX-Uc.screenX,Ap=t.screenY-Uc.screenY):Ap=Tp=0,Uc=t),Tp)},movementY:function(t){return"movementY"in t?t.movementY:Ap}}),hx=Pi(Qd),fR=Qt({},Qd,{dataTransfer:0}),hR=Pi(fR),dR=Qt({},hf,{relatedTarget:0}),Rp=Pi(dR),pR=Qt({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),mR=Pi(pR),_R=Qt({},Ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gR=Pi(_R),vR=Qt({},Ho,{data:0}),dx=Pi(vR),xR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yR[t])?!!e[t]:!1}function S0(){return MR}var ER=Qt({},hf,{key:function(t){if(t.key){var e=xR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Th(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:S0,charCode:function(t){return t.type==="keypress"?Th(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Th(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bR=Pi(ER),TR=Qt({},Qd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),px=Pi(TR),AR=Qt({},hf,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:S0}),RR=Pi(AR),CR=Qt({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),wR=Pi(CR),DR=Qt({},Qd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),UR=Pi(DR),NR=Qt({},Ho,{newState:0,oldState:0}),LR=Pi(NR),OR=[9,13,27,32],y0=zr&&"CompositionEvent"in window,cu=null;zr&&"documentMode"in document&&(cu=document.documentMode);var PR=zr&&"TextEvent"in window&&!cu,ZM=zr&&(!y0||cu&&8<cu&&11>=cu),mx=" ",_x=!1;function KM(t,e){switch(t){case"keyup":return OR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function QM(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bl=!1;function IR(t,e){switch(t){case"compositionend":return QM(e);case"keypress":return e.which!==32?null:(_x=!0,mx);case"textInput":return t=e.data,t===mx&&_x?null:t;default:return null}}function FR(t,e){if(bl)return t==="compositionend"||!y0&&KM(t,e)?(t=qM(),bh=x0=ps=null,bl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ZM&&e.locale!=="ko"?null:e.data;default:return null}}var zR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gx(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zR[t.type]:e==="textarea"}function jM(t,e,n,i){El?Fl?Fl.push(i):Fl=[i]:El=i,e=Sd(e,"onChange"),0<e.length&&(n=new Kd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var uu=null,Iu=null;function BR(t){Y1(t,0)}function jd(t){var e=Qc(t);if(GM(e))return t}function vx(t,e){if(t==="change")return e}var JM=!1;if(zr){var Cp;if(zr){var wp="oninput"in document;if(!wp){var xx=document.createElement("div");xx.setAttribute("oninput","return;"),wp=typeof xx.oninput=="function"}Cp=wp}else Cp=!1;JM=Cp&&(!document.documentMode||9<document.documentMode)}function Sx(){uu&&(uu.detachEvent("onpropertychange",$M),Iu=uu=null)}function $M(t){if(t.propertyName==="value"&&jd(Iu)){var e=[];jM(e,Iu,t,v0(t)),YM(BR,e)}}function HR(t,e,n){t==="focusin"?(Sx(),uu=e,Iu=n,uu.attachEvent("onpropertychange",$M)):t==="focusout"&&Sx()}function GR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jd(Iu)}function VR(t,e){if(t==="click")return jd(e)}function kR(t,e){if(t==="input"||t==="change")return jd(e)}function XR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ia=typeof Object.is=="function"?Object.is:XR;function Fu(t,e){if(ia(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!i_.call(e,a)||!ia(t[a],e[a]))return!1}return!0}function yx(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mx(t,e){var n=yx(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yx(n)}}function eE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?eE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tE(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=nd(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nd(t.document)}return e}function M0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var WR=zr&&"documentMode"in document&&11>=document.documentMode,Tl=null,u_=null,fu=null,f_=!1;function Ex(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;f_||Tl==null||Tl!==nd(i)||(i=Tl,"selectionStart"in i&&M0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fu&&Fu(fu,i)||(fu=i,i=Sd(u_,"onSelect"),0<i.length&&(e=new Kd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Tl)))}function Zs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Al={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionrun:Zs("Transition","TransitionRun"),transitionstart:Zs("Transition","TransitionStart"),transitioncancel:Zs("Transition","TransitionCancel"),transitionend:Zs("Transition","TransitionEnd")},Dp={},nE={};zr&&(nE=document.createElement("div").style,"AnimationEvent"in window||(delete Al.animationend.animation,delete Al.animationiteration.animation,delete Al.animationstart.animation),"TransitionEvent"in window||delete Al.transitionend.transition);function Go(t){if(Dp[t])return Dp[t];if(!Al[t])return t;var e=Al[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nE)return Dp[t]=e[n];return t}var iE=Go("animationend"),aE=Go("animationiteration"),rE=Go("animationstart"),YR=Go("transitionrun"),qR=Go("transitionstart"),ZR=Go("transitioncancel"),sE=Go("transitionend"),oE=new Map,h_="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");h_.push("scrollEnd");function za(t,e){oE.set(t,e),Bo(e,[t])}var id=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fa=[],Rl=0,E0=0;function Jd(){for(var t=Rl,e=E0=Rl=0;e<t;){var n=fa[e];fa[e++]=null;var i=fa[e];fa[e++]=null;var a=fa[e];fa[e++]=null;var r=fa[e];if(fa[e++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&lE(n,a,r)}}function $d(t,e,n,i){fa[Rl++]=t,fa[Rl++]=e,fa[Rl++]=n,fa[Rl++]=i,E0|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function b0(t,e,n,i){return $d(t,e,n,i),ad(t)}function Vo(t,e){return $d(t,null,null,e),ad(t)}function lE(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(a=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,a&&e!==null&&(a=31-$i(n),t=r.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),r):null}function ad(t){if(50<Su)throw Su=0,L_=null,Error(ae(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Cl={};function KR(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wi(t,e,n,i){return new KR(t,e,n,i)}function T0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ur(t,e){var n=t.alternate;return n===null?(n=Wi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function cE(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ah(t,e,n,i,a,r){var s=0;if(i=t,typeof t=="function")T0(t)&&(s=1);else if(typeof t=="string")s=e2(t,n,er.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case $m:return t=Wi(31,n,e,a),t.elementType=$m,t.lanes=r,t;case Sl:return go(n.children,a,r,e);case CM:s=8,a|=24;break;case Qm:return t=Wi(12,n,e,a|2),t.elementType=Qm,t.lanes=r,t;case jm:return t=Wi(13,n,e,a),t.elementType=jm,t.lanes=r,t;case Jm:return t=Wi(19,n,e,a),t.elementType=Jm,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ar:s=10;break e;case wM:s=9;break e;case f0:s=11;break e;case h0:s=14;break e;case ss:s=16,i=null;break e}s=29,n=Error(ae(130,t===null?"null":typeof t,"")),i=null}return e=Wi(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function go(t,e,n,i){return t=Wi(7,t,i,e),t.lanes=n,t}function Up(t,e,n){return t=Wi(6,t,null,e),t.lanes=n,t}function uE(t){var e=Wi(18,null,null,0);return e.stateNode=t,e}function Np(t,e,n){return e=Wi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var bx=new WeakMap;function xa(t,e){if(typeof t=="object"&&t!==null){var n=bx.get(t);return n!==void 0?n:(e={value:t,source:e,stack:ax(e)},bx.set(t,e),e)}return{value:t,source:e,stack:ax(e)}}var wl=[],Dl=0,rd=null,zu=0,pa=[],ma=0,Is=null,qa=1,Za="";function yr(t,e){wl[Dl++]=zu,wl[Dl++]=rd,rd=t,zu=e}function fE(t,e,n){pa[ma++]=qa,pa[ma++]=Za,pa[ma++]=Is,Is=t;var i=qa;t=Za;var a=32-$i(i)-1;i&=~(1<<a),n+=1;var r=32-$i(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,qa=1<<32-$i(e)+a|n<<a|i,Za=r+t}else qa=1<<r|n<<a|i,Za=t}function A0(t){t.return!==null&&(yr(t,1),fE(t,1,0))}function R0(t){for(;t===rd;)rd=wl[--Dl],wl[Dl]=null,zu=wl[--Dl],wl[Dl]=null;for(;t===Is;)Is=pa[--ma],pa[ma]=null,Za=pa[--ma],pa[ma]=null,qa=pa[--ma],pa[ma]=null}function hE(t,e){pa[ma++]=qa,pa[ma++]=Za,pa[ma++]=Is,qa=e.id,Za=e.overflow,Is=t}var Wn=null,Zt=null,vt=!1,Ts=null,Sa=!1,d_=Error(ae(519));function Fs(t){var e=Error(ae(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bu(xa(e,t)),d_}function Tx(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[Xn]=t,e[Li]=i,n){case"dialog":ut("cancel",e),ut("close",e);break;case"iframe":case"object":case"embed":ut("load",e);break;case"video":case"audio":for(n=0;n<ku.length;n++)ut(ku[n],e);break;case"source":ut("error",e);break;case"img":case"image":case"link":ut("error",e),ut("load",e);break;case"details":ut("toggle",e);break;case"input":ut("invalid",e),VM(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ut("invalid",e);break;case"textarea":ut("invalid",e),XM(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Z1(e.textContent,n)?(i.popover!=null&&(ut("beforetoggle",e),ut("toggle",e)),i.onScroll!=null&&ut("scroll",e),i.onScrollEnd!=null&&ut("scrollend",e),i.onClick!=null&&(e.onclick=Rr),e=!0):e=!1,e||Fs(t,!0)}function Ax(t){for(Wn=t.return;Wn;)switch(Wn.tag){case 5:case 31:case 13:Sa=!1;return;case 27:case 3:Sa=!0;return;default:Wn=Wn.return}}function Ko(t){if(t!==Wn)return!1;if(!vt)return Ax(t),vt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||z_(t.type,t.memoizedProps)),n=!n),n&&Zt&&Fs(t),Ax(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));Zt=hS(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));Zt=hS(t)}else e===27?(e=Zt,Ys(t.type)?(t=V_,V_=null,Zt=t):Zt=e):Zt=Wn?Ta(t.stateNode.nextSibling):null;return!0}function Co(){Zt=Wn=null,vt=!1}function Lp(){var t=Ts;return t!==null&&(bi===null?bi=t:bi.push.apply(bi,t),Ts=null),t}function Bu(t){Ts===null?Ts=[t]:Ts.push(t)}var p_=lr(null),ko=null,Cr=null;function ls(t,e,n){Xt(p_,e._currentValue),e._currentValue=n}function Nr(t){t._currentValue=p_.current,Gn(p_)}function m_(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function __(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),m_(r.return,n,t),i||(s=null);break e}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(ae(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),m_(s,n,t),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Mc(t,e,n,i){t=null;for(var a=e,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(ae(387));if(s=s.memoizedProps,s!==null){var o=a.type;ia(a.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(a===Jh.current){if(s=a.alternate,s===null)throw Error(ae(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Wu):t=[Wu])}a=a.return}t!==null&&__(e,t,n,i),e.flags|=262144}function sd(t){for(t=t.firstContext;t!==null;){if(!ia(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function wo(t){ko=t,Cr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Yn(t){return dE(ko,t)}function Uf(t,e){return ko===null&&wo(t),dE(t,e)}function dE(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Cr===null){if(t===null)throw Error(ae(308));Cr=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Cr=Cr.next=e;return n}var QR=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},jR=Un.unstable_scheduleCallback,JR=Un.unstable_NormalPriority,bn={$$typeof:Ar,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function C0(){return{controller:new QR,data:new Map,refCount:0}}function df(t){t.refCount--,t.refCount===0&&jR(JR,function(){t.controller.abort()})}var hu=null,g_=0,tc=0,zl=null;function $R(t,e){if(hu===null){var n=hu=[];g_=0,tc=$0(),zl={status:"pending",value:void 0,then:function(i){n.push(i)}}}return g_++,e.then(Rx,Rx),e}function Rx(){if(--g_===0&&hu!==null){zl!==null&&(zl.status="fulfilled");var t=hu;hu=null,tc=0,zl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function eC(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Cx=Ze.S;Ze.S=function(t,e){R1=ji(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&$R(t,e),Cx!==null&&Cx(t,e)};var vo=lr(null);function w0(){var t=vo.current;return t!==null?t:Gt.pooledCache}function Rh(t,e){e===null?Xt(vo,vo.current):Xt(vo,e.pool)}function pE(){var t=w0();return t===null?null:{parent:bn._currentValue,pool:t}}var Ec=Error(ae(460)),D0=Error(ae(474)),ep=Error(ae(542)),od={then:function(){}};function wx(t){return t=t.status,t==="fulfilled"||t==="rejected"}function mE(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Rr,Rr),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ux(t),t;default:if(typeof e.status=="string")e.then(Rr,Rr);else{if(t=Gt,t!==null&&100<t.shellSuspendCounter)throw Error(ae(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ux(t),t}throw xo=e,Ec}}function io(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(xo=n,Ec):n}}var xo=null;function Dx(){if(xo===null)throw Error(ae(459));var t=xo;return xo=null,t}function Ux(t){if(t===Ec||t===ep)throw Error(ae(483))}var Bl=null,Hu=0;function Nf(t){var e=Hu;return Hu+=1,Bl===null&&(Bl=[]),mE(Bl,t,e)}function Nc(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Lf(t,e){throw e.$$typeof===HA?Error(ae(525)):(t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function _E(t){function e(p,g){if(t){var S=p.deletions;S===null?(p.deletions=[g],p.flags|=16):S.push(g)}}function n(p,g){if(!t)return null;for(;g!==null;)e(p,g),g=g.sibling;return null}function i(p){for(var g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function a(p,g){return p=Ur(p,g),p.index=0,p.sibling=null,p}function r(p,g,S){return p.index=S,t?(S=p.alternate,S!==null?(S=S.index,S<g?(p.flags|=67108866,g):S):(p.flags|=67108866,g)):(p.flags|=1048576,g)}function s(p){return t&&p.alternate===null&&(p.flags|=67108866),p}function o(p,g,S,x){return g===null||g.tag!==6?(g=Up(S,p.mode,x),g.return=p,g):(g=a(g,S),g.return=p,g)}function l(p,g,S,x){var b=S.type;return b===Sl?u(p,g,S.props.children,x,S.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ss&&io(b)===g.type)?(g=a(g,S.props),Nc(g,S),g.return=p,g):(g=Ah(S.type,S.key,S.props,null,p.mode,x),Nc(g,S),g.return=p,g)}function c(p,g,S,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Np(S,p.mode,x),g.return=p,g):(g=a(g,S.children||[]),g.return=p,g)}function u(p,g,S,x,b){return g===null||g.tag!==7?(g=go(S,p.mode,x,b),g.return=p,g):(g=a(g,S),g.return=p,g)}function d(p,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Up(""+g,p.mode,S),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Tf:return S=Ah(g.type,g.key,g.props,null,p.mode,S),Nc(S,g),S.return=p,S;case Zc:return g=Np(g,p.mode,S),g.return=p,g;case ss:return g=io(g),d(p,g,S)}if(Kc(g)||wc(g))return g=go(g,p.mode,S,null),g.return=p,g;if(typeof g.then=="function")return d(p,Nf(g),S);if(g.$$typeof===Ar)return d(p,Uf(p,g),S);Lf(p,g)}return null}function f(p,g,S,x){var b=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return b!==null?null:o(p,g,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Tf:return S.key===b?l(p,g,S,x):null;case Zc:return S.key===b?c(p,g,S,x):null;case ss:return S=io(S),f(p,g,S,x)}if(Kc(S)||wc(S))return b!==null?null:u(p,g,S,x,null);if(typeof S.then=="function")return f(p,g,Nf(S),x);if(S.$$typeof===Ar)return f(p,g,Uf(p,S),x);Lf(p,S)}return null}function h(p,g,S,x,b){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return p=p.get(S)||null,o(g,p,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Tf:return p=p.get(x.key===null?S:x.key)||null,l(g,p,x,b);case Zc:return p=p.get(x.key===null?S:x.key)||null,c(g,p,x,b);case ss:return x=io(x),h(p,g,S,x,b)}if(Kc(x)||wc(x))return p=p.get(S)||null,u(g,p,x,b,null);if(typeof x.then=="function")return h(p,g,S,Nf(x),b);if(x.$$typeof===Ar)return h(p,g,S,Uf(g,x),b);Lf(g,x)}return null}function _(p,g,S,x){for(var b=null,A=null,E=g,y=g=0,T=null;E!==null&&y<S.length;y++){E.index>y?(T=E,E=null):T=E.sibling;var C=f(p,E,S[y],x);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(p,E),g=r(C,g,y),A===null?b=C:A.sibling=C,A=C,E=T}if(y===S.length)return n(p,E),vt&&yr(p,y),b;if(E===null){for(;y<S.length;y++)E=d(p,S[y],x),E!==null&&(g=r(E,g,y),A===null?b=E:A.sibling=E,A=E);return vt&&yr(p,y),b}for(E=i(E);y<S.length;y++)T=h(E,p,y,S[y],x),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),g=r(T,g,y),A===null?b=T:A.sibling=T,A=T);return t&&E.forEach(function(L){return e(p,L)}),vt&&yr(p,y),b}function v(p,g,S,x){if(S==null)throw Error(ae(151));for(var b=null,A=null,E=g,y=g=0,T=null,C=S.next();E!==null&&!C.done;y++,C=S.next()){E.index>y?(T=E,E=null):T=E.sibling;var L=f(p,E,C.value,x);if(L===null){E===null&&(E=T);break}t&&E&&L.alternate===null&&e(p,E),g=r(L,g,y),A===null?b=L:A.sibling=L,A=L,E=T}if(C.done)return n(p,E),vt&&yr(p,y),b;if(E===null){for(;!C.done;y++,C=S.next())C=d(p,C.value,x),C!==null&&(g=r(C,g,y),A===null?b=C:A.sibling=C,A=C);return vt&&yr(p,y),b}for(E=i(E);!C.done;y++,C=S.next())C=h(E,p,y,C.value,x),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?y:C.key),g=r(C,g,y),A===null?b=C:A.sibling=C,A=C);return t&&E.forEach(function(P){return e(p,P)}),vt&&yr(p,y),b}function m(p,g,S,x){if(typeof S=="object"&&S!==null&&S.type===Sl&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Tf:e:{for(var b=S.key;g!==null;){if(g.key===b){if(b=S.type,b===Sl){if(g.tag===7){n(p,g.sibling),x=a(g,S.props.children),x.return=p,p=x;break e}}else if(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ss&&io(b)===g.type){n(p,g.sibling),x=a(g,S.props),Nc(x,S),x.return=p,p=x;break e}n(p,g);break}else e(p,g);g=g.sibling}S.type===Sl?(x=go(S.props.children,p.mode,x,S.key),x.return=p,p=x):(x=Ah(S.type,S.key,S.props,null,p.mode,x),Nc(x,S),x.return=p,p=x)}return s(p);case Zc:e:{for(b=S.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(p,g.sibling),x=a(g,S.children||[]),x.return=p,p=x;break e}else{n(p,g);break}else e(p,g);g=g.sibling}x=Np(S,p.mode,x),x.return=p,p=x}return s(p);case ss:return S=io(S),m(p,g,S,x)}if(Kc(S))return _(p,g,S,x);if(wc(S)){if(b=wc(S),typeof b!="function")throw Error(ae(150));return S=b.call(S),v(p,g,S,x)}if(typeof S.then=="function")return m(p,g,Nf(S),x);if(S.$$typeof===Ar)return m(p,g,Uf(p,S),x);Lf(p,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(n(p,g.sibling),x=a(g,S),x.return=p,p=x):(n(p,g),x=Up(S,p.mode,x),x.return=p,p=x),s(p)):n(p,g)}return function(p,g,S,x){try{Hu=0;var b=m(p,g,S,x);return Bl=null,b}catch(E){if(E===Ec||E===ep)throw E;var A=Wi(29,E,null,p.mode);return A.lanes=x,A.return=p,A}finally{}}}var Do=_E(!0),gE=_E(!1),os=!1;function U0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function v_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function As(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Rs(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Mt&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=ad(t),lE(t,null,n),e}return $d(t,i,e,n),ad(t)}function du(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,PM(t,n)}}function Op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var x_=!1;function pu(){if(x_){var t=zl;if(t!==null)throw t}}function mu(t,e,n,i){x_=!1;var a=t.updateQueue;os=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==s&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(r!==null){var d=a.baseState;s=0,u=c=l=null,o=r;do{var f=o.lane&-536870913,h=f!==o.lane;if(h?(pt&f)===f:(i&f)===f){f!==0&&f===tc&&(x_=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var _=t,v=o;f=e;var m=n;switch(v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(m,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(m,d,f):_,f==null)break e;d=Qt({},d,f);break e;case 2:os=!0}}f=o.callback,f!==null&&(t.flags|=64,h&&(t.flags|=8192),h=a.callbacks,h===null?a.callbacks=[f]:h.push(f))}else h={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=h,l=d):u=u.next=h,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;h=o,o=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);u===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=u,r===null&&(a.shared.lanes=0),Bs|=s,t.lanes=s,t.memoizedState=d}}function vE(t,e){if(typeof t!="function")throw Error(ae(191,t));t.call(e)}function xE(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)vE(n[t],e)}var nc=lr(null),ld=lr(0);function Nx(t,e){t=Vr,Xt(ld,t),Xt(nc,e),Vr=t|e.baseLanes}function S_(){Xt(ld,Vr),Xt(nc,nc.current)}function N0(){Vr=ld.current,Gn(nc),Gn(ld)}var aa=lr(null),ba=null;function cs(t){var e=t.alternate;Xt(pn,pn.current&1),Xt(aa,t),ba===null&&(e===null||nc.current!==null||e.memoizedState!==null)&&(ba=t)}function y_(t){Xt(pn,pn.current),Xt(aa,t),ba===null&&(ba=t)}function SE(t){t.tag===22?(Xt(pn,pn.current),Xt(aa,t),ba===null&&(ba=t)):us()}function us(){Xt(pn,pn.current),Xt(aa,aa.current)}function ki(t){Gn(aa),ba===t&&(ba=null),Gn(pn)}var pn=lr(0);function cd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||H_(n)||G_(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Br=0,tt=null,Pt=null,yn=null,ud=!1,Hl=!1,Uo=!1,fd=0,Gu=0,Gl=null,tC=0;function sn(){throw Error(ae(321))}function L0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ia(t[n],e[n]))return!1;return!0}function O0(t,e,n,i,a,r){return Br=r,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ze.H=t===null||t.memoizedState===null?jE:W0,Uo=!1,r=n(i,a),Uo=!1,Hl&&(r=ME(e,n,i,a)),yE(t),r}function yE(t){Ze.H=Vu;var e=Pt!==null&&Pt.next!==null;if(Br=0,yn=Pt=tt=null,ud=!1,Gu=0,Gl=null,e)throw Error(ae(300));t===null||Tn||(t=t.dependencies,t!==null&&sd(t)&&(Tn=!0))}function ME(t,e,n,i){tt=t;var a=0;do{if(Hl&&(Gl=null),Gu=0,Hl=!1,25<=a)throw Error(ae(301));if(a+=1,yn=Pt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ze.H=JE,r=e(n,i)}while(Hl);return r}function nC(){var t=Ze.H,e=t.useState()[0];return e=typeof e.then=="function"?pf(e):e,t=t.useState()[0],(Pt!==null?Pt.memoizedState:null)!==t&&(tt.flags|=1024),e}function P0(){var t=fd!==0;return fd=0,t}function I0(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function F0(t){if(ud){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ud=!1}Br=0,yn=Pt=tt=null,Hl=!1,Gu=fd=0,Gl=null}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?tt.memoizedState=yn=t:yn=yn.next=t,yn}function _n(){if(Pt===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=yn===null?tt.memoizedState:yn.next;if(e!==null)yn=e,Pt=t;else{if(t===null)throw tt.alternate===null?Error(ae(467)):Error(ae(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},yn===null?tt.memoizedState=yn=t:yn=yn.next=t}return yn}function tp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pf(t){var e=Gu;return Gu+=1,Gl===null&&(Gl=[]),t=mE(Gl,t,e),e=tt,(yn===null?e.memoizedState:yn.next)===null&&(e=e.alternate,Ze.H=e===null||e.memoizedState===null?jE:W0),t}function np(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return pf(t);if(t.$$typeof===Ar)return Yn(t)}throw Error(ae(438,String(t)))}function z0(t){var e=null,n=tt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=tt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=tp(),tt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=GA;return e.index++,n}function Hr(t,e){return typeof e=="function"?e(t):e}function Ch(t){var e=_n();return B0(e,Pt,t)}function B0(t,e,n){var i=t.queue;if(i===null)throw Error(ae(311));i.lastRenderedReducer=n;var a=t.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}e.baseQueue=a=r,i.pending=null}if(r=t.baseState,a===null)t.memoizedState=r;else{e=a.next;var o=s=null,l=null,c=e,u=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(pt&d)===d:(Br&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===tc&&(u=!0);else if((Br&f)===f){c=c.next,f===tc&&(u=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,s=r):l=l.next=d,tt.lanes|=f,Bs|=f;d=c.action,Uo&&n(r,d),r=c.hasEagerState?c.eagerState:n(r,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,tt.lanes|=d,Bs|=d;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=o,!ia(r,t.memoizedState)&&(Tn=!0,u&&(n=zl,n!==null)))throw n;t.memoizedState=r,t.baseState=s,t.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Pp(t){var e=_n(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);ia(r,e.memoizedState)||(Tn=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function EE(t,e,n){var i=tt,a=_n(),r=vt;if(r){if(n===void 0)throw Error(ae(407));n=n()}else n=e();var s=!ia((Pt||a).memoizedState,n);if(s&&(a.memoizedState=n,Tn=!0),a=a.queue,H0(AE.bind(null,i,a,t),[t]),a.getSnapshot!==e||s||yn!==null&&yn.memoizedState.tag&1){if(i.flags|=2048,ic(9,{destroy:void 0},TE.bind(null,i,a,n,e),null),Gt===null)throw Error(ae(349));r||Br&127||bE(i,e,n)}return n}function bE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=tt.updateQueue,e===null?(e=tp(),tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function TE(t,e,n,i){e.value=n,e.getSnapshot=i,RE(e)&&CE(t)}function AE(t,e,n){return n(function(){RE(e)&&CE(t)})}function RE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ia(t,n)}catch{return!0}}function CE(t){var e=Vo(t,2);e!==null&&Ri(e,t,2)}function M_(t){var e=hi();if(typeof t=="function"){var n=t;if(t=n(),Uo){ds(!0);try{n()}finally{ds(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:t},e}function wE(t,e,n,i){return t.baseState=n,B0(t,Pt,typeof i=="function"?i:Hr)}function iC(t,e,n,i,a){if(ap(t))throw Error(ae(485));if(t=e.action,t!==null){var r={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Ze.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,DE(e,r)):(r.next=n.next,e.pending=n.next=r)}}function DE(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var r=Ze.T,s={};Ze.T=s;try{var o=n(a,i),l=Ze.S;l!==null&&l(s,o),Lx(t,e,o)}catch(c){E_(t,e,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),Ze.T=r}}else try{r=n(a,i),Lx(t,e,r)}catch(c){E_(t,e,c)}}function Lx(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Ox(t,e,i)},function(i){return E_(t,e,i)}):Ox(t,e,n)}function Ox(t,e,n){e.status="fulfilled",e.value=n,UE(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,DE(t,n)))}function E_(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,UE(e),e=e.next;while(e!==i)}t.action=null}function UE(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function NE(t,e){return e}function Px(t,e){if(vt){var n=Gt.formState;if(n!==null){e:{var i=tt;if(vt){if(Zt){t:{for(var a=Zt,r=Sa;a.nodeType!==8;){if(!r){a=null;break t}if(a=Ta(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Zt=Ta(a.nextSibling),i=a.data==="F!";break e}}Fs(i)}i=!1}i&&(e=n[0])}}return n=hi(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:NE,lastRenderedState:e},n.queue=i,n=ZE.bind(null,tt,i),i.dispatch=n,i=M_(!1),r=X0.bind(null,tt,!1,i.queue),i=hi(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=iC.bind(null,tt,a,r,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function Ix(t){var e=_n();return LE(e,Pt,t)}function LE(t,e,n){if(e=B0(t,e,NE)[0],t=Ch(Hr)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=pf(e)}catch(s){throw s===Ec?ep:s}else i=e;e=_n();var a=e.queue,r=a.dispatch;return n!==e.memoizedState&&(tt.flags|=2048,ic(9,{destroy:void 0},aC.bind(null,a,n),null)),[i,r,t]}function aC(t,e){t.action=e}function Fx(t){var e=_n(),n=Pt;if(n!==null)return LE(e,n,t);_n(),e=e.memoizedState,n=_n();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function ic(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=tt.updateQueue,e===null&&(e=tp(),tt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function OE(){return _n().memoizedState}function wh(t,e,n,i){var a=hi();tt.flags|=t,a.memoizedState=ic(1|e,{destroy:void 0},n,i===void 0?null:i)}function ip(t,e,n,i){var a=_n();i=i===void 0?null:i;var r=a.memoizedState.inst;Pt!==null&&i!==null&&L0(i,Pt.memoizedState.deps)?a.memoizedState=ic(e,r,n,i):(tt.flags|=t,a.memoizedState=ic(1|e,r,n,i))}function zx(t,e){wh(8390656,8,t,e)}function H0(t,e){ip(2048,8,t,e)}function rC(t){tt.flags|=4;var e=tt.updateQueue;if(e===null)e=tp(),tt.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function PE(t){var e=_n().memoizedState;return rC({ref:e,nextImpl:t}),function(){if(Mt&2)throw Error(ae(440));return e.impl.apply(void 0,arguments)}}function IE(t,e){return ip(4,2,t,e)}function FE(t,e){return ip(4,4,t,e)}function zE(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function BE(t,e,n){n=n!=null?n.concat([t]):null,ip(4,4,zE.bind(null,e,t),n)}function G0(){}function HE(t,e){var n=_n();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&L0(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function GE(t,e){var n=_n();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&L0(e,i[1]))return i[0];if(i=t(),Uo){ds(!0);try{t()}finally{ds(!1)}}return n.memoizedState=[i,e],i}function V0(t,e,n){return n===void 0||Br&1073741824&&!(pt&261930)?t.memoizedState=e:(t.memoizedState=n,t=w1(),tt.lanes|=t,Bs|=t,n)}function VE(t,e,n,i){return ia(n,e)?n:nc.current!==null?(t=V0(t,n,i),ia(t,e)||(Tn=!0),t):!(Br&42)||Br&1073741824&&!(pt&261930)?(Tn=!0,t.memoizedState=n):(t=w1(),tt.lanes|=t,Bs|=t,e)}function kE(t,e,n,i,a){var r=Et.p;Et.p=r!==0&&8>r?r:8;var s=Ze.T,o={};Ze.T=o,X0(t,!1,e,n);try{var l=a(),c=Ze.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=eC(l,i);_u(t,e,u,ea(t))}else _u(t,e,i,ea(t))}catch(d){_u(t,e,{then:function(){},status:"rejected",reason:d},ea())}finally{Et.p=r,s!==null&&o.types!==null&&(s.types=o.types),Ze.T=s}}function sC(){}function b_(t,e,n,i){if(t.tag!==5)throw Error(ae(476));var a=XE(t).queue;kE(t,a,e,_o,n===null?sC:function(){return WE(t),n(i)})}function XE(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:_o,baseState:_o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:_o},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function WE(t){var e=XE(t);e.next===null&&(e=t.alternate.memoizedState),_u(t,e.next.queue,{},ea())}function k0(){return Yn(Wu)}function YE(){return _n().memoizedState}function qE(){return _n().memoizedState}function oC(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ea();t=As(n);var i=Rs(e,t,n);i!==null&&(Ri(i,e,n),du(i,e,n)),e={cache:C0()},t.payload=e;return}e=e.return}}function lC(t,e,n){var i=ea();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ap(t)?KE(e,n):(n=b0(t,e,n,i),n!==null&&(Ri(n,t,i),QE(n,e,i)))}function ZE(t,e,n){var i=ea();_u(t,e,n,i)}function _u(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ap(t))KE(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,ia(o,s))return $d(t,e,a,0),Gt===null&&Jd(),!1}catch{}finally{}if(n=b0(t,e,a,i),n!==null)return Ri(n,t,i),QE(n,e,i),!0}return!1}function X0(t,e,n,i){if(i={lane:2,revertLane:$0(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ap(t)){if(e)throw Error(ae(479))}else e=b0(t,n,i,2),e!==null&&Ri(e,t,2)}function ap(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function KE(t,e){Hl=ud=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function QE(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,PM(t,n)}}var Vu={readContext:Yn,use:np,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};Vu.useEffectEvent=sn;var jE={readContext:Yn,use:np,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:zx,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,wh(4194308,4,zE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wh(4194308,4,t,e)},useInsertionEffect:function(t,e){wh(4,2,t,e)},useMemo:function(t,e){var n=hi();e=e===void 0?null:e;var i=t();if(Uo){ds(!0);try{t()}finally{ds(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=hi();if(n!==void 0){var a=n(e);if(Uo){ds(!0);try{n(e)}finally{ds(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=lC.bind(null,tt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:function(t){t=M_(t);var e=t.queue,n=ZE.bind(null,tt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:G0,useDeferredValue:function(t,e){var n=hi();return V0(n,t,e)},useTransition:function(){var t=M_(!1);return t=kE.bind(null,tt,t.queue,!0,!1),hi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=tt,a=hi();if(vt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Gt===null)throw Error(ae(349));pt&127||bE(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,zx(AE.bind(null,i,r,t),[t]),i.flags|=2048,ic(9,{destroy:void 0},TE.bind(null,i,r,n,e),null),n},useId:function(){var t=hi(),e=Gt.identifierPrefix;if(vt){var n=Za,i=qa;n=(i&~(1<<32-$i(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=fd++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=tC++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:k0,useFormState:Px,useActionState:Px,useOptimistic:function(t){var e=hi();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=X0.bind(null,tt,!0,n),n.dispatch=e,[t,e]},useMemoCache:z0,useCacheRefresh:function(){return hi().memoizedState=oC.bind(null,tt)},useEffectEvent:function(t){var e=hi(),n={impl:t};return e.memoizedState=n,function(){if(Mt&2)throw Error(ae(440));return n.impl.apply(void 0,arguments)}}},W0={readContext:Yn,use:np,useCallback:HE,useContext:Yn,useEffect:H0,useImperativeHandle:BE,useInsertionEffect:IE,useLayoutEffect:FE,useMemo:GE,useReducer:Ch,useRef:OE,useState:function(){return Ch(Hr)},useDebugValue:G0,useDeferredValue:function(t,e){var n=_n();return VE(n,Pt.memoizedState,t,e)},useTransition:function(){var t=Ch(Hr)[0],e=_n().memoizedState;return[typeof t=="boolean"?t:pf(t),e]},useSyncExternalStore:EE,useId:YE,useHostTransitionStatus:k0,useFormState:Ix,useActionState:Ix,useOptimistic:function(t,e){var n=_n();return wE(n,Pt,t,e)},useMemoCache:z0,useCacheRefresh:qE};W0.useEffectEvent=PE;var JE={readContext:Yn,use:np,useCallback:HE,useContext:Yn,useEffect:H0,useImperativeHandle:BE,useInsertionEffect:IE,useLayoutEffect:FE,useMemo:GE,useReducer:Pp,useRef:OE,useState:function(){return Pp(Hr)},useDebugValue:G0,useDeferredValue:function(t,e){var n=_n();return Pt===null?V0(n,t,e):VE(n,Pt.memoizedState,t,e)},useTransition:function(){var t=Pp(Hr)[0],e=_n().memoizedState;return[typeof t=="boolean"?t:pf(t),e]},useSyncExternalStore:EE,useId:YE,useHostTransitionStatus:k0,useFormState:Fx,useActionState:Fx,useOptimistic:function(t,e){var n=_n();return Pt!==null?wE(n,Pt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:z0,useCacheRefresh:qE};JE.useEffectEvent=PE;function Ip(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Qt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var T_={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ea(),a=As(i);a.payload=e,n!=null&&(a.callback=n),e=Rs(t,a,i),e!==null&&(Ri(e,t,i),du(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ea(),a=As(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Rs(t,a,i),e!==null&&(Ri(e,t,i),du(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ea(),i=As(n);i.tag=2,e!=null&&(i.callback=e),e=Rs(t,i,n),e!==null&&(Ri(e,t,n),du(e,t,n))}};function Bx(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!Fu(n,i)||!Fu(a,r):!0}function Hx(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&T_.enqueueReplaceState(e,e.state,null)}function No(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Qt({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function $E(t){id(t)}function e1(t){console.error(t)}function t1(t){id(t)}function hd(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Gx(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function A_(t,e,n){return n=As(n),n.tag=3,n.payload={element:null},n.callback=function(){hd(t,e)},n}function n1(t){return t=As(t),t.tag=3,t}function i1(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;t.payload=function(){return a(r)},t.callback=function(){Gx(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Gx(e,n,i),typeof a!="function"&&(Cs===null?Cs=new Set([this]):Cs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function cC(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Mc(e,n,a,!0),n=aa.current,n!==null){switch(n.tag){case 31:case 13:return ba===null?gd():n.alternate===null&&on===0&&(on=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===od?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),qp(t,i,a)),!1;case 22:return n.flags|=65536,i===od?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),qp(t,i,a)),!1}throw Error(ae(435,n.tag))}return qp(t,i,a),gd(),!1}if(vt)return e=aa.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==d_&&(t=Error(ae(422),{cause:i}),Bu(xa(t,n)))):(i!==d_&&(e=Error(ae(423),{cause:i}),Bu(xa(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=xa(i,n),a=A_(t.stateNode,i,a),Op(t,a),on!==4&&(on=2)),!1;var r=Error(ae(520),{cause:i});if(r=xa(r,n),xu===null?xu=[r]:xu.push(r),on!==4&&(on=2),e===null)return!0;i=xa(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=A_(n.stateNode,i,t),Op(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Cs===null||!Cs.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=n1(a),i1(a,t,n,i),Op(n,a),!1}n=n.return}while(n!==null);return!1}var Y0=Error(ae(461)),Tn=!1;function kn(t,e,n,i){e.child=t===null?gE(e,null,n,i):Do(e,t.child,n,i)}function Vx(t,e,n,i,a){n=n.render;var r=e.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return wo(e),i=O0(t,e,n,s,r,a),o=P0(),t!==null&&!Tn?(I0(t,e,a),Gr(t,e,a)):(vt&&o&&A0(e),e.flags|=1,kn(t,e,i,a),e.child)}function kx(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!T0(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,a1(t,e,r,i,a)):(t=Ah(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!q0(t,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:Fu,n(s,i)&&t.ref===e.ref)return Gr(t,e,a)}return e.flags|=1,t=Ur(r,i),t.ref=e.ref,t.return=e,e.child=t}function a1(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(Fu(r,i)&&t.ref===e.ref)if(Tn=!1,e.pendingProps=i=r,q0(t,a))t.flags&131072&&(Tn=!0);else return e.lanes=t.lanes,Gr(t,e,a)}return R_(t,e,n,i,a)}function r1(t,e,n,i){var a=i.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,e.child=null;return Xx(t,e,r,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Rh(e,r!==null?r.cachePool:null),r!==null?Nx(e,r):S_(),SE(e);else return i=e.lanes=536870912,Xx(t,e,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Rh(e,r.cachePool),Nx(e,r),us(),e.memoizedState=null):(t!==null&&Rh(e,null),S_(),us());return kn(t,e,a,n),e.child}function jc(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Xx(t,e,n,i,a){var r=w0();return r=r===null?null:{parent:bn._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&Rh(e,null),S_(),SE(e),t!==null&&Mc(t,e,i,!0),e.childLanes=a,null}function Dh(t,e){return e=dd({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Wx(t,e,n){return Do(e,t.child,null,n),t=Dh(e,e.pendingProps),t.flags|=2,ki(e),e.memoizedState=null,t}function uC(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(vt){if(i.mode==="hidden")return t=Dh(e,i),e.lanes=536870912,jc(null,t);if(y_(e),(t=Zt)?(t=j1(t,Sa),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Is!==null?{id:qa,overflow:Za}:null,retryLane:536870912,hydrationErrors:null},n=uE(t),n.return=e,e.child=n,Wn=e,Zt=null)):t=null,t===null)throw Fs(e);return e.lanes=536870912,null}return Dh(e,i)}var r=t.memoizedState;if(r!==null){var s=r.dehydrated;if(y_(e),a)if(e.flags&256)e.flags&=-257,e=Wx(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(ae(558));else if(Tn||Mc(t,e,n,!1),a=(n&t.childLanes)!==0,Tn||a){if(i=Gt,i!==null&&(s=IM(i,n),s!==0&&s!==r.retryLane))throw r.retryLane=s,Vo(t,s),Ri(i,t,s),Y0;gd(),e=Wx(t,e,n)}else t=r.treeContext,Zt=Ta(s.nextSibling),Wn=e,vt=!0,Ts=null,Sa=!1,t!==null&&hE(e,t),e=Dh(e,i),e.flags|=4096;return e}return t=Ur(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Uh(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(ae(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function R_(t,e,n,i,a){return wo(e),n=O0(t,e,n,i,void 0,a),i=P0(),t!==null&&!Tn?(I0(t,e,a),Gr(t,e,a)):(vt&&i&&A0(e),e.flags|=1,kn(t,e,n,a),e.child)}function Yx(t,e,n,i,a,r){return wo(e),e.updateQueue=null,n=ME(e,i,n,a),yE(t),i=P0(),t!==null&&!Tn?(I0(t,e,r),Gr(t,e,r)):(vt&&i&&A0(e),e.flags|=1,kn(t,e,n,r),e.child)}function qx(t,e,n,i,a){if(wo(e),e.stateNode===null){var r=Cl,s=n.contextType;typeof s=="object"&&s!==null&&(r=Yn(s)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=T_,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},U0(e),s=n.contextType,r.context=typeof s=="object"&&s!==null?Yn(s):Cl,r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Ip(e,n,s,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&T_.enqueueReplaceState(r,r.state,null),mu(e,i,r,a),pu(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var o=e.memoizedProps,l=No(n,o);r.props=l;var c=r.context,u=n.contextType;s=Cl,typeof u=="object"&&u!==null&&(s=Yn(u));var d=n.getDerivedStateFromProps;u=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&Hx(e,r,i,s),os=!1;var f=e.memoizedState;r.state=f,mu(e,i,r,a),pu(),c=e.memoizedState,o||f!==c||os?(typeof d=="function"&&(Ip(e,n,d,i),c=e.memoizedState),(l=os||Bx(e,n,l,i,f,c,s))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,v_(t,e),s=e.memoizedProps,u=No(n,s),r.props=u,d=e.pendingProps,f=r.context,c=n.contextType,l=Cl,typeof c=="object"&&c!==null&&(l=Yn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==d||f!==l)&&Hx(e,r,i,l),os=!1,f=e.memoizedState,r.state=f,mu(e,i,r,a),pu();var h=e.memoizedState;s!==d||f!==h||os||t!==null&&t.dependencies!==null&&sd(t.dependencies)?(typeof o=="function"&&(Ip(e,n,o,i),h=e.memoizedState),(u=os||Bx(e,n,u,i,f,h,l)||t!==null&&t.dependencies!==null&&sd(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,h,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,h,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=h),r.props=i,r.state=h,r.context=l,i=u):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,Uh(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=Do(e,t.child,null,a),e.child=Do(e,null,n,a)):kn(t,e,n,a),e.memoizedState=r.state,t=e.child):t=Gr(t,e,a),t}function Zx(t,e,n,i){return Co(),e.flags|=256,kn(t,e,n,i),e.child}var Fp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zp(t){return{baseLanes:t,cachePool:pE()}}function Bp(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Zi),t}function s1(t,e,n){var i=e.pendingProps,a=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),s&&(a=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(vt){if(a?cs(e):us(),(t=Zt)?(t=j1(t,Sa),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Is!==null?{id:qa,overflow:Za}:null,retryLane:536870912,hydrationErrors:null},n=uE(t),n.return=e,e.child=n,Wn=e,Zt=null)):t=null,t===null)throw Fs(e);return G_(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(us(),a=e.mode,o=dd({mode:"hidden",children:o},a),i=go(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=zp(n),i.childLanes=Bp(t,s,n),e.memoizedState=Fp,jc(null,i)):(cs(e),C_(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(r)e.flags&256?(cs(e),e.flags&=-257,e=Hp(t,e,n)):e.memoizedState!==null?(us(),e.child=t.child,e.flags|=128,e=null):(us(),o=i.fallback,a=e.mode,i=dd({mode:"visible",children:i.children},a),o=go(o,a,n,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,Do(e,t.child,null,n),i=e.child,i.memoizedState=zp(n),i.childLanes=Bp(t,s,n),e.memoizedState=Fp,e=jc(null,i));else if(cs(e),G_(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(ae(419)),i.stack="",i.digest=s,Bu({value:i,source:null,stack:null}),e=Hp(t,e,n)}else if(Tn||Mc(t,e,n,!1),s=(n&t.childLanes)!==0,Tn||s){if(s=Gt,s!==null&&(i=IM(s,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Vo(t,i),Ri(s,t,i),Y0;H_(o)||gd(),e=Hp(t,e,n)}else H_(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Zt=Ta(o.nextSibling),Wn=e,vt=!0,Ts=null,Sa=!1,t!==null&&hE(e,t),e=C_(e,i.children),e.flags|=4096);return e}return a?(us(),o=i.fallback,a=e.mode,l=t.child,c=l.sibling,i=Ur(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Ur(c,o):(o=go(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,jc(null,i),i=e.child,o=t.child.memoizedState,o===null?o=zp(n):(a=o.cachePool,a!==null?(l=bn._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=pE(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Bp(t,s,n),e.memoizedState=Fp,jc(t.child,i)):(cs(e),n=t.child,t=n.sibling,n=Ur(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function C_(t,e){return e=dd({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function dd(t,e){return t=Wi(22,t,null,e),t.lanes=0,t}function Hp(t,e,n){return Do(e,t.child,null,n),t=C_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kx(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),m_(t.return,e,n)}function Gp(t,e,n,i,a,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=r)}function o1(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var s=pn.current,o=(s&2)!==0;if(o?(s=s&1|2,e.flags|=128):s&=1,Xt(pn,s),kn(t,e,i,n),i=vt?zu:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kx(t,n,e);else if(t.tag===19)Kx(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&cd(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Gp(e,!1,a,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&cd(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Gp(e,!0,n,null,r,i);break;case"together":Gp(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Gr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Bs|=e.lanes,!(n&e.childLanes))if(t!==null){if(Mc(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function q0(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&sd(t)))}function fC(t,e,n){switch(e.tag){case 3:$h(e,e.stateNode.containerInfo),ls(e,bn,t.memoizedState.cache),Co();break;case 27:case 5:n_(e);break;case 4:$h(e,e.stateNode.containerInfo);break;case 10:ls(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,y_(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(cs(e),e.flags|=128,null):n&e.child.childLanes?s1(t,e,n):(cs(e),t=Gr(t,e,n),t!==null?t.sibling:null);cs(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Mc(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return o1(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Xt(pn,pn.current),i)break;return null;case 22:return e.lanes=0,r1(t,e,n,e.pendingProps);case 24:ls(e,bn,t.memoizedState.cache)}return Gr(t,e,n)}function l1(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Tn=!0;else{if(!q0(t,n)&&!(e.flags&128))return Tn=!1,fC(t,e,n);Tn=!!(t.flags&131072)}else Tn=!1,vt&&e.flags&1048576&&fE(e,zu,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=io(e.elementType),e.type=t,typeof t=="function")T0(t)?(i=No(t,i),e.tag=1,e=qx(null,e,t,i,n)):(e.tag=0,e=R_(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===f0){e.tag=11,e=Vx(null,e,t,i,n);break e}else if(a===h0){e.tag=14,e=kx(null,e,t,i,n);break e}}throw e=e_(t)||t,Error(ae(306,e,""))}}return e;case 0:return R_(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=No(i,e.pendingProps),qx(t,e,i,a,n);case 3:e:{if($h(e,e.stateNode.containerInfo),t===null)throw Error(ae(387));i=e.pendingProps;var r=e.memoizedState;a=r.element,v_(t,e),mu(e,i,null,n);var s=e.memoizedState;if(i=s.cache,ls(e,bn,i),i!==r.cache&&__(e,[bn],n,!0),pu(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=Zx(t,e,i,n);break e}else if(i!==a){a=xa(Error(ae(424)),e),Bu(a),e=Zx(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=Ta(t.firstChild),Wn=e,vt=!0,Ts=null,Sa=!0,n=gE(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Co(),i===a){e=Gr(t,e,n);break e}kn(t,e,i,n)}e=e.child}return e;case 26:return Uh(t,e),t===null?(n=mS(e.type,null,e.pendingProps,null))?e.memoizedState=n:vt||(n=e.type,t=e.pendingProps,i=yd(bs.current).createElement(n),i[Xn]=e,i[Li]=t,Kn(i,n,t),Hn(i),e.stateNode=i):e.memoizedState=mS(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return n_(e),t===null&&vt&&(i=e.stateNode=J1(e.type,e.pendingProps,bs.current),Wn=e,Sa=!0,a=Zt,Ys(e.type)?(V_=a,Zt=Ta(i.firstChild)):Zt=a),kn(t,e,e.pendingProps.children,n),Uh(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&vt&&((a=i=Zt)&&(i=GC(i,e.type,e.pendingProps,Sa),i!==null?(e.stateNode=i,Wn=e,Zt=Ta(i.firstChild),Sa=!1,a=!0):a=!1),a||Fs(e)),n_(e),a=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,i=r.children,z_(a,r)?i=null:s!==null&&z_(a,s)&&(e.flags|=32),e.memoizedState!==null&&(a=O0(t,e,nC,null,null,n),Wu._currentValue=a),Uh(t,e),kn(t,e,i,n),e.child;case 6:return t===null&&vt&&((t=n=Zt)&&(n=VC(n,e.pendingProps,Sa),n!==null?(e.stateNode=n,Wn=e,Zt=null,t=!0):t=!1),t||Fs(e)),null;case 13:return s1(t,e,n);case 4:return $h(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Do(e,null,i,n):kn(t,e,i,n),e.child;case 11:return Vx(t,e,e.type,e.pendingProps,n);case 7:return kn(t,e,e.pendingProps,n),e.child;case 8:return kn(t,e,e.pendingProps.children,n),e.child;case 12:return kn(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,ls(e,e.type,i.value),kn(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,wo(e),a=Yn(a),i=i(a),e.flags|=1,kn(t,e,i,n),e.child;case 14:return kx(t,e,e.type,e.pendingProps,n);case 15:return a1(t,e,e.type,e.pendingProps,n);case 19:return o1(t,e,n);case 31:return uC(t,e,n);case 22:return r1(t,e,n,e.pendingProps);case 24:return wo(e),i=Yn(bn),t===null?(a=w0(),a===null&&(a=Gt,r=C0(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),e.memoizedState={parent:i,cache:a},U0(e),ls(e,bn,a)):(t.lanes&n&&(v_(t,e),mu(e,null,null,n),pu()),a=t.memoizedState,r=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),ls(e,bn,i)):(i=r.cache,ls(e,bn,i),i!==a.cache&&__(e,[bn],n,!0))),kn(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(ae(156,e.tag))}function fr(t){t.flags|=4}function Vp(t,e,n,i,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(N1())t.flags|=8192;else throw xo=od,D0}else t.flags&=-16777217}function Qx(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!tb(e))if(N1())t.flags|=8192;else throw xo=od,D0}function Of(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?LM():536870912,t.lanes|=e,ac|=e)}function Lc(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function hC(t,e,n){var i=e.pendingProps;switch(R0(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return qt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Nr(bn),Jl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Ko(e)?fr(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Lp())),qt(e),null;case 26:var a=e.type,r=e.memoizedState;return t===null?(fr(e),r!==null?(qt(e),Qx(e,r)):(qt(e),Vp(e,a,null,i,n))):r?r!==t.memoizedState?(fr(e),qt(e),Qx(e,r)):(qt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&fr(e),qt(e),Vp(e,a,t,i,n)),null;case 27:if(ed(e),n=bs.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&fr(e);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return qt(e),null}t=er.current,Ko(e)?Tx(e):(t=J1(a,i,n),e.stateNode=t,fr(e))}return qt(e),null;case 5:if(ed(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&fr(e);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return qt(e),null}if(r=er.current,Ko(e))Tx(e);else{var s=yd(bs.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}r[Xn]=e,r[Li]=i;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=r;e:switch(Kn(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&fr(e)}}return qt(e),Vp(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&fr(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(t=bs.current,Ko(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=Wn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[Xn]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Z1(t.nodeValue,n)),t||Fs(e,!0)}else t=yd(t).createTextNode(i),t[Xn]=e,e.stateNode=t}return qt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Ko(e),n!==null){if(t===null){if(!i)throw Error(ae(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(557));t[Xn]=e}else Co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),t=!1}else n=Lp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(ki(e),e):(ki(e),null);if(e.flags&128)throw Error(ae(558))}return qt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Ko(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ae(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ae(317));a[Xn]=e}else Co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),a=!1}else a=Lp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(ki(e),e):(ki(e),null)}return ki(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Of(e,e.updateQueue),qt(e),null);case 4:return Jl(),t===null&&ev(e.stateNode.containerInfo),qt(e),null;case 10:return Nr(e.type),qt(e),null;case 19:if(Gn(pn),i=e.memoizedState,i===null)return qt(e),null;if(a=(e.flags&128)!==0,r=i.rendering,r===null)if(a)Lc(i,!1);else{if(on!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=cd(t),r!==null){for(e.flags|=128,Lc(i,!1),t=r.updateQueue,e.updateQueue=t,Of(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)cE(n,t),n=n.sibling;return Xt(pn,pn.current&1|2),vt&&yr(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&ji()>md&&(e.flags|=128,a=!0,Lc(i,!1),e.lanes=4194304)}else{if(!a)if(t=cd(r),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Of(e,t),Lc(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!vt)return qt(e),null}else 2*ji()-i.renderingStartTime>md&&n!==536870912&&(e.flags|=128,a=!0,Lc(i,!1),e.lanes=4194304);i.isBackwards?(r.sibling=e.child,e.child=r):(t=i.last,t!==null?t.sibling=r:e.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ji(),t.sibling=null,n=pn.current,Xt(pn,a?n&1|2:n&1),vt&&yr(e,i.treeForkCount),t):(qt(e),null);case 22:case 23:return ki(e),N0(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),n=e.updateQueue,n!==null&&Of(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&Gn(vo),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Nr(bn),qt(e),null;case 25:return null;case 30:return null}throw Error(ae(156,e.tag))}function dC(t,e){switch(R0(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Nr(bn),Jl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ed(e),null;case 31:if(e.memoizedState!==null){if(ki(e),e.alternate===null)throw Error(ae(340));Co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ki(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Gn(pn),null;case 4:return Jl(),null;case 10:return Nr(e.type),null;case 22:case 23:return ki(e),N0(),t!==null&&Gn(vo),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Nr(bn),null;case 25:return null;default:return null}}function c1(t,e){switch(R0(e),e.tag){case 3:Nr(bn),Jl();break;case 26:case 27:case 5:ed(e);break;case 4:Jl();break;case 31:e.memoizedState!==null&&ki(e);break;case 13:ki(e);break;case 19:Gn(pn);break;case 10:Nr(e.type);break;case 22:case 23:ki(e),N0(),t!==null&&Gn(vo);break;case 24:Nr(bn)}}function mf(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){Ut(e,e.return,o)}}function zs(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&t)===t){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(u){Ut(a,l,u)}}}i=i.next}while(i!==r)}}catch(u){Ut(e,e.return,u)}}function u1(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{xE(e,n)}catch(i){Ut(t,t.return,i)}}}function f1(t,e,n){n.props=No(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Ut(t,e,i)}}function gu(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){Ut(t,e,a)}}function Ka(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Ut(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Ut(t,e,a)}else n.current=null}function h1(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Ut(t,t.return,a)}}function kp(t,e,n){try{var i=t.stateNode;PC(i,t.type,n,e),i[Li]=e}catch(a){Ut(t,t.return,a)}}function d1(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ys(t.type)||t.tag===4}function Xp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||d1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ys(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function w_(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rr));else if(i!==4&&(i===27&&Ys(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(w_(t,e,n),t=t.sibling;t!==null;)w_(t,e,n),t=t.sibling}function pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Ys(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}function p1(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Kn(e,i,n),e[Xn]=t,e[Li]=n}catch(r){Ut(t,t.return,r)}}var Er=!1,Mn=!1,Wp=!1,jx=typeof WeakSet=="function"?WeakSet:Set,Bn=null;function pC(t,e){if(t=t.containerInfo,I_=Td,t=tE(t),M0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var h;d!==n||a!==0&&d.nodeType!==3||(o=s+a),d!==r||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===t)break t;if(f===n&&++c===a&&(o=s),f===r&&++u===i&&(l=s),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(F_={focusedElem:t,selectionRange:n},Td=!1,Bn=e;Bn!==null;)if(e=Bn,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Bn=t;else for(;Bn!==null;){switch(e=Bn,r=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&r!==null){t=void 0,n=e,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var _=No(n.type,a);t=i.getSnapshotBeforeUpdate(_,r),i.__reactInternalSnapshotBeforeUpdate=t}catch(v){Ut(n,n.return,v)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)B_(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":B_(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(ae(163))}if(t=e.sibling,t!==null){t.return=e.return,Bn=t;break}Bn=e.return}}function m1(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:dr(t,n),i&4&&mf(5,n);break;case 1:if(dr(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){Ut(n,n.return,s)}else{var a=No(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Ut(n,n.return,s)}}i&64&&u1(n),i&512&&gu(n,n.return);break;case 3:if(dr(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{xE(t,e)}catch(s){Ut(n,n.return,s)}}break;case 27:e===null&&i&4&&p1(n);case 26:case 5:dr(t,n),e===null&&i&4&&h1(n),i&512&&gu(n,n.return);break;case 12:dr(t,n);break;case 31:dr(t,n),i&4&&v1(t,n);break;case 13:dr(t,n),i&4&&x1(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=EC.bind(null,n),kC(t,n))));break;case 22:if(i=n.memoizedState!==null||Er,!i){e=e!==null&&e.memoizedState!==null||Mn,a=Er;var r=Mn;Er=i,(Mn=e)&&!r?xr(t,n,(n.subtreeFlags&8772)!==0):dr(t,n),Er=a,Mn=r}break;case 30:break;default:dr(t,n)}}function _1(t){var e=t.alternate;e!==null&&(t.alternate=null,_1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&_0(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Ei=!1;function hr(t,e,n){for(n=n.child;n!==null;)g1(t,e,n),n=n.sibling}function g1(t,e,n){if(Ji&&typeof Ji.onCommitFiberUnmount=="function")try{Ji.onCommitFiberUnmount(lf,n)}catch{}switch(n.tag){case 26:Mn||Ka(n,e),hr(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Mn||Ka(n,e);var i=jt,a=Ei;Ys(n.type)&&(jt=n.stateNode,Ei=!1),hr(t,e,n),yu(n.stateNode),jt=i,Ei=a;break;case 5:Mn||Ka(n,e);case 6:if(i=jt,a=Ei,jt=null,hr(t,e,n),jt=i,Ei=a,jt!==null)if(Ei)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(n.stateNode)}catch(r){Ut(n,e,r)}else try{jt.removeChild(n.stateNode)}catch(r){Ut(n,e,r)}break;case 18:jt!==null&&(Ei?(t=jt,uS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),lc(t)):uS(jt,n.stateNode));break;case 4:i=jt,a=Ei,jt=n.stateNode.containerInfo,Ei=!0,hr(t,e,n),jt=i,Ei=a;break;case 0:case 11:case 14:case 15:zs(2,n,e),Mn||zs(4,n,e),hr(t,e,n);break;case 1:Mn||(Ka(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&f1(n,e,i)),hr(t,e,n);break;case 21:hr(t,e,n);break;case 22:Mn=(i=Mn)||n.memoizedState!==null,hr(t,e,n),Mn=i;break;default:hr(t,e,n)}}function v1(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{lc(t)}catch(n){Ut(e,e.return,n)}}}function x1(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{lc(t)}catch(n){Ut(e,e.return,n)}}function mC(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new jx),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new jx),e;default:throw Error(ae(435,t.tag))}}function Pf(t,e){var n=mC(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=bC.bind(null,t,i);i.then(a,a)}})}function Si(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(Ys(o.type)){jt=o.stateNode,Ei=!1;break e}break;case 5:jt=o.stateNode,Ei=!1;break e;case 3:case 4:jt=o.stateNode.containerInfo,Ei=!0;break e}o=o.return}if(jt===null)throw Error(ae(160));g1(r,s,a),jt=null,Ei=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)S1(e,t),e=e.sibling}var La=null;function S1(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Si(e,t),yi(t),i&4&&(zs(3,t,t.return),mf(3,t),zs(5,t,t.return));break;case 1:Si(e,t),yi(t),i&512&&(Mn||n===null||Ka(n,n.return)),i&64&&Er&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=La;if(Si(e,t),yi(t),i&512&&(Mn||n===null||Ka(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[ff]||r[Xn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),Kn(r,i,n),r[Xn]=t,Hn(r),i=r;break e;case"link":var s=gS("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break t}}r=a.createElement(i),Kn(r,i,n),a.head.appendChild(r);break;case"meta":if(s=gS("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break t}}r=a.createElement(i),Kn(r,i,n),a.head.appendChild(r);break;default:throw Error(ae(468,i))}r[Xn]=t,Hn(r),i=r}t.stateNode=i}else vS(a,t.type,t.stateNode);else t.stateNode=_S(a,i,t.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?vS(a,t.type,t.stateNode):_S(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&kp(t,t.memoizedProps,n.memoizedProps)}break;case 27:Si(e,t),yi(t),i&512&&(Mn||n===null||Ka(n,n.return)),n!==null&&i&4&&kp(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Si(e,t),yi(t),i&512&&(Mn||n===null||Ka(n,n.return)),t.flags&32){a=t.stateNode;try{ec(a,"")}catch(_){Ut(t,t.return,_)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,kp(t,a,n!==null?n.memoizedProps:a)),i&1024&&(Wp=!0);break;case 6:if(Si(e,t),yi(t),i&4){if(t.stateNode===null)throw Error(ae(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(_){Ut(t,t.return,_)}}break;case 3:if(Oh=null,a=La,La=Md(e.containerInfo),Si(e,t),La=a,yi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{lc(e.containerInfo)}catch(_){Ut(t,t.return,_)}Wp&&(Wp=!1,y1(t));break;case 4:i=La,La=Md(t.stateNode.containerInfo),Si(e,t),yi(t),La=i;break;case 12:Si(e,t),yi(t);break;case 31:Si(e,t),yi(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Pf(t,i)));break;case 13:Si(e,t),yi(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(rp=ji()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Pf(t,i)));break;case 22:a=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Er,u=Mn;if(Er=c||a,Mn=u||l,Si(e,t),Mn=u,Er=c,yi(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||l||Er||Mn||ao(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(_){Ut(l,l.return,_)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(_){Ut(l,l.return,_)}}}else if(e.tag===18){if(n===null){l=e;try{var h=l.stateNode;a?fS(h,!0):fS(l.stateNode,!1)}catch(_){Ut(l,l.return,_)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Pf(t,n))));break;case 19:Si(e,t),yi(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Pf(t,i)));break;case 30:break;case 21:break;default:Si(e,t),yi(t)}}function yi(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(d1(i)){n=i;break}i=i.return}if(n==null)throw Error(ae(160));switch(n.tag){case 27:var a=n.stateNode,r=Xp(t);pd(t,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(ec(s,""),n.flags&=-33);var o=Xp(t);pd(t,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Xp(t);w_(t,c,l);break;default:throw Error(ae(161))}}catch(u){Ut(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function y1(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;y1(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function dr(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)m1(t,e.alternate,e),e=e.sibling}function ao(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:zs(4,e,e.return),ao(e);break;case 1:Ka(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&f1(e,e.return,n),ao(e);break;case 27:yu(e.stateNode);case 26:case 5:Ka(e,e.return),ao(e);break;case 22:e.memoizedState===null&&ao(e);break;case 30:ao(e);break;default:ao(e)}t=t.sibling}}function xr(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,r=e,s=r.flags;switch(r.tag){case 0:case 11:case 15:xr(a,r,n),mf(4,r);break;case 1:if(xr(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){Ut(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)vE(l[a],o)}catch(c){Ut(i,i.return,c)}}n&&s&64&&u1(r),gu(r,r.return);break;case 27:p1(r);case 26:case 5:xr(a,r,n),n&&i===null&&s&4&&h1(r),gu(r,r.return);break;case 12:xr(a,r,n);break;case 31:xr(a,r,n),n&&s&4&&v1(a,r);break;case 13:xr(a,r,n),n&&s&4&&x1(a,r);break;case 22:r.memoizedState===null&&xr(a,r,n),gu(r,r.return);break;case 30:break;default:xr(a,r,n)}e=e.sibling}}function Z0(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&df(n))}function K0(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&df(t))}function Ca(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)M1(t,e,n,i),e=e.sibling}function M1(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Ca(t,e,n,i),a&2048&&mf(9,e);break;case 1:Ca(t,e,n,i);break;case 3:Ca(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&df(t)));break;case 12:if(a&2048){Ca(t,e,n,i),t=e.stateNode;try{var r=e.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){Ut(e,e.return,l)}}else Ca(t,e,n,i);break;case 31:Ca(t,e,n,i);break;case 13:Ca(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,s=e.alternate,e.memoizedState!==null?r._visibility&2?Ca(t,e,n,i):vu(t,e):r._visibility&2?Ca(t,e,n,i):(r._visibility|=2,_l(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Z0(s,e);break;case 24:Ca(t,e,n,i),a&2048&&K0(e.alternate,e);break;default:Ca(t,e,n,i)}}function _l(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,s=e,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:_l(r,s,o,l,a),mf(8,s);break;case 23:break;case 22:var u=s.stateNode;s.memoizedState!==null?u._visibility&2?_l(r,s,o,l,a):vu(r,s):(u._visibility|=2,_l(r,s,o,l,a)),a&&c&2048&&Z0(s.alternate,s);break;case 24:_l(r,s,o,l,a),a&&c&2048&&K0(s.alternate,s);break;default:_l(r,s,o,l,a)}e=e.sibling}}function vu(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:vu(n,i),a&2048&&Z0(i.alternate,i);break;case 24:vu(n,i),a&2048&&K0(i.alternate,i);break;default:vu(n,i)}e=e.sibling}}var Jc=8192;function Qo(t,e,n){if(t.subtreeFlags&Jc)for(t=t.child;t!==null;)E1(t,e,n),t=t.sibling}function E1(t,e,n){switch(t.tag){case 26:Qo(t,e,n),t.flags&Jc&&t.memoizedState!==null&&t2(n,La,t.memoizedState,t.memoizedProps);break;case 5:Qo(t,e,n);break;case 3:case 4:var i=La;La=Md(t.stateNode.containerInfo),Qo(t,e,n),La=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Jc,Jc=16777216,Qo(t,e,n),Jc=i):Qo(t,e,n));break;default:Qo(t,e,n)}}function b1(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Oc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Bn=i,A1(i,t)}b1(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)T1(t),t=t.sibling}function T1(t){switch(t.tag){case 0:case 11:case 15:Oc(t),t.flags&2048&&zs(9,t,t.return);break;case 3:Oc(t);break;case 12:Oc(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Nh(t)):Oc(t);break;default:Oc(t)}}function Nh(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Bn=i,A1(i,t)}b1(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:zs(8,e,e.return),Nh(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Nh(e));break;default:Nh(e)}t=t.sibling}}function A1(t,e){for(;Bn!==null;){var n=Bn;switch(n.tag){case 0:case 11:case 15:zs(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:df(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Bn=i;else e:for(n=t;Bn!==null;){i=Bn;var a=i.sibling,r=i.return;if(_1(i),i===n){Bn=null;break e}if(a!==null){a.return=r,Bn=a;break e}Bn=r}}}var _C={getCacheForType:function(t){var e=Yn(bn),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Yn(bn).controller.signal}},gC=typeof WeakMap=="function"?WeakMap:Map,Mt=0,Gt=null,ft=null,pt=0,Dt=0,Hi=null,ms=!1,bc=!1,Q0=!1,Vr=0,on=0,Bs=0,So=0,j0=0,Zi=0,ac=0,xu=null,bi=null,D_=!1,rp=0,R1=0,md=1/0,_d=null,Cs=null,Dn=0,ws=null,rc=null,Lr=0,U_=0,N_=null,C1=null,Su=0,L_=null;function ea(){return Mt&2&&pt!==0?pt&-pt:Ze.T!==null?$0():FM()}function w1(){if(Zi===0)if(!(pt&536870912)||vt){var t=Rf;Rf<<=1,!(Rf&3932160)&&(Rf=262144),Zi=t}else Zi=536870912;return t=aa.current,t!==null&&(t.flags|=32),Zi}function Ri(t,e,n){(t===Gt&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)&&(sc(t,0),_s(t,pt,Zi,!1)),uf(t,n),(!(Mt&2)||t!==Gt)&&(t===Gt&&(!(Mt&2)&&(So|=n),on===4&&_s(t,pt,Zi,!1)),cr(t))}function D1(t,e,n){if(Mt&6)throw Error(ae(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||cf(t,e),a=i?SC(t,e):Yp(t,e,!0),r=i;do{if(a===0){bc&&!i&&_s(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!vC(n)){a=Yp(t,e,!1),r=!1;continue}if(a===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var o=t;a=xu;var l=o.current.memoizedState.isDehydrated;if(l&&(sc(o,s).flags|=256),s=Yp(o,s,!1),s!==2){if(Q0&&!l){o.errorRecoveryDisabledLanes|=r,So|=r,a=4;break e}r=bi,bi=a,r!==null&&(bi===null?bi=r:bi.push.apply(bi,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){sc(t,0),_s(t,e,0,!0);break}e:{switch(i=t,r=a,r){case 0:case 1:throw Error(ae(345));case 4:if((e&4194048)!==e)break;case 6:_s(i,e,Zi,!ms);break e;case 2:bi=null;break;case 3:case 5:break;default:throw Error(ae(329))}if((e&62914560)===e&&(a=rp+300-ji(),10<a)){if(_s(i,e,Zi,!ms),Zd(i,0,!0)!==0)break e;Lr=e,i.timeoutHandle=Q1(Jx.bind(null,i,n,bi,_d,D_,e,Zi,So,ac,ms,r,"Throttled",-0,0),a);break e}Jx(i,n,bi,_d,D_,e,Zi,So,ac,ms,r,null,-0,0)}}break}while(!0);cr(t)}function Jx(t,e,n,i,a,r,s,o,l,c,u,d,f,h){if(t.timeoutHandle=-1,d=e.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rr},E1(e,r,d);var _=(r&62914560)===r?rp-ji():(r&4194048)===r?R1-ji():0;if(_=n2(d,_),_!==null){Lr=r,t.cancelPendingCommit=_(eS.bind(null,t,e,r,n,i,a,s,o,l,u,d,null,f,h)),_s(t,r,s,!c);return}}eS(t,e,r,n,i,a,s,o,l)}function vC(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!ia(r(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _s(t,e,n,i){e&=~j0,e&=~So,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var r=31-$i(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&OM(t,n,e)}function sp(){return Mt&6?!0:(_f(0),!1)}function J0(){if(ft!==null){if(Dt===0)var t=ft.return;else t=ft,Cr=ko=null,F0(t),Bl=null,Hu=0,t=ft;for(;t!==null;)c1(t.alternate,t),t=t.return;ft=null}}function sc(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,zC(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Lr=0,J0(),Gt=t,ft=n=Ur(t.current,null),pt=e,Dt=0,Hi=null,ms=!1,bc=cf(t,e),Q0=!1,ac=Zi=j0=So=Bs=on=0,bi=xu=null,D_=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-$i(i),r=1<<a;e|=t[a],i&=~r}return Vr=e,Jd(),n}function U1(t,e){tt=null,Ze.H=Vu,e===Ec||e===ep?(e=Dx(),Dt=3):e===D0?(e=Dx(),Dt=4):Dt=e===Y0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Hi=e,ft===null&&(on=1,hd(t,xa(e,t.current)))}function N1(){var t=aa.current;return t===null?!0:(pt&4194048)===pt?ba===null:(pt&62914560)===pt||pt&536870912?t===ba:!1}function L1(){var t=Ze.H;return Ze.H=Vu,t===null?Vu:t}function O1(){var t=Ze.A;return Ze.A=_C,t}function gd(){on=4,ms||(pt&4194048)!==pt&&aa.current!==null||(bc=!0),!(Bs&134217727)&&!(So&134217727)||Gt===null||_s(Gt,pt,Zi,!1)}function Yp(t,e,n){var i=Mt;Mt|=2;var a=L1(),r=O1();(Gt!==t||pt!==e)&&(_d=null,sc(t,e)),e=!1;var s=on;e:do try{if(Dt!==0&&ft!==null){var o=ft,l=Hi;switch(Dt){case 8:J0(),s=6;break e;case 3:case 2:case 9:case 6:aa.current===null&&(e=!0);var c=Dt;if(Dt=0,Hi=null,Ul(t,o,l,c),n&&bc){s=0;break e}break;default:c=Dt,Dt=0,Hi=null,Ul(t,o,l,c)}}xC(),s=on;break}catch(u){U1(t,u)}while(!0);return e&&t.shellSuspendCounter++,Cr=ko=null,Mt=i,Ze.H=a,Ze.A=r,ft===null&&(Gt=null,pt=0,Jd()),s}function xC(){for(;ft!==null;)P1(ft)}function SC(t,e){var n=Mt;Mt|=2;var i=L1(),a=O1();Gt!==t||pt!==e?(_d=null,md=ji()+500,sc(t,e)):bc=cf(t,e);e:do try{if(Dt!==0&&ft!==null){e=ft;var r=Hi;t:switch(Dt){case 1:Dt=0,Hi=null,Ul(t,e,r,1);break;case 2:case 9:if(wx(r)){Dt=0,Hi=null,$x(e);break}e=function(){Dt!==2&&Dt!==9||Gt!==t||(Dt=7),cr(t)},r.then(e,e);break e;case 3:Dt=7;break e;case 4:Dt=5;break e;case 7:wx(r)?(Dt=0,Hi=null,$x(e)):(Dt=0,Hi=null,Ul(t,e,r,7));break;case 5:var s=null;switch(ft.tag){case 26:s=ft.memoizedState;case 5:case 27:var o=ft;if(s?tb(s):o.stateNode.complete){Dt=0,Hi=null;var l=o.sibling;if(l!==null)ft=l;else{var c=o.return;c!==null?(ft=c,op(c)):ft=null}break t}}Dt=0,Hi=null,Ul(t,e,r,5);break;case 6:Dt=0,Hi=null,Ul(t,e,r,6);break;case 8:J0(),on=6;break e;default:throw Error(ae(462))}}yC();break}catch(u){U1(t,u)}while(!0);return Cr=ko=null,Ze.H=i,Ze.A=a,Mt=n,ft!==null?0:(Gt=null,pt=0,Jd(),on)}function yC(){for(;ft!==null&&!XA();)P1(ft)}function P1(t){var e=l1(t.alternate,t,Vr);t.memoizedProps=t.pendingProps,e===null?op(t):ft=e}function $x(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Yx(n,e,e.pendingProps,e.type,void 0,pt);break;case 11:e=Yx(n,e,e.pendingProps,e.type.render,e.ref,pt);break;case 5:F0(e);default:c1(n,e),e=ft=cE(e,Vr),e=l1(n,e,Vr)}t.memoizedProps=t.pendingProps,e===null?op(t):ft=e}function Ul(t,e,n,i){Cr=ko=null,F0(e),Bl=null,Hu=0;var a=e.return;try{if(cC(t,a,e,n,pt)){on=1,hd(t,xa(n,t.current)),ft=null;return}}catch(r){if(a!==null)throw ft=a,r;on=1,hd(t,xa(n,t.current)),ft=null;return}e.flags&32768?(vt||i===1?t=!0:bc||pt&536870912?t=!1:(ms=t=!0,(i===2||i===9||i===3||i===6)&&(i=aa.current,i!==null&&i.tag===13&&(i.flags|=16384))),I1(e,t)):op(e)}function op(t){var e=t;do{if(e.flags&32768){I1(e,ms);return}t=e.return;var n=hC(e.alternate,e,Vr);if(n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);on===0&&(on=5)}function I1(t,e){do{var n=dC(t.alternate,t);if(n!==null){n.flags&=32767,ft=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=n}while(t!==null);on=6,ft=null}function eS(t,e,n,i,a,r,s,o,l){t.cancelPendingCommit=null;do lp();while(Dn!==0);if(Mt&6)throw Error(ae(327));if(e!==null){if(e===t.current)throw Error(ae(177));if(r=e.lanes|e.childLanes,r|=E0,eR(t,n,r,s,o,l),t===Gt&&(ft=Gt=null,pt=0),rc=e,ws=t,Lr=n,U_=r,N_=a,C1=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,TC(td,function(){return G1(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Ze.T,Ze.T=null,a=Et.p,Et.p=2,s=Mt,Mt|=4;try{pC(t,e,n)}finally{Mt=s,Et.p=a,Ze.T=i}}Dn=1,F1(),z1(),B1()}}function F1(){if(Dn===1){Dn=0;var t=ws,e=rc,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=Ze.T,Ze.T=null;var i=Et.p;Et.p=2;var a=Mt;Mt|=4;try{S1(e,t);var r=F_,s=tE(t.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&eE(o.ownerDocument.documentElement,o)){if(l!==null&&M0(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var h=f.getSelection(),_=o.textContent.length,v=Math.min(l.start,_),m=l.end===void 0?v:Math.min(l.end,_);!h.extend&&v>m&&(s=m,m=v,v=s);var p=Mx(o,v),g=Mx(o,m);if(p&&g&&(h.rangeCount!==1||h.anchorNode!==p.node||h.anchorOffset!==p.offset||h.focusNode!==g.node||h.focusOffset!==g.offset)){var S=d.createRange();S.setStart(p.node,p.offset),h.removeAllRanges(),v>m?(h.addRange(S),h.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),h.addRange(S))}}}}for(d=[],h=o;h=h.parentNode;)h.nodeType===1&&d.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var x=d[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Td=!!I_,F_=I_=null}finally{Mt=a,Et.p=i,Ze.T=n}}t.current=e,Dn=2}}function z1(){if(Dn===2){Dn=0;var t=ws,e=rc,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Ze.T,Ze.T=null;var i=Et.p;Et.p=2;var a=Mt;Mt|=4;try{m1(t,e.alternate,e)}finally{Mt=a,Et.p=i,Ze.T=n}}Dn=3}}function B1(){if(Dn===4||Dn===3){Dn=0,WA();var t=ws,e=rc,n=Lr,i=C1;e.subtreeFlags&10256||e.flags&10256?Dn=5:(Dn=0,rc=ws=null,H1(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Cs=null),m0(n),e=e.stateNode,Ji&&typeof Ji.onCommitFiberRoot=="function")try{Ji.onCommitFiberRoot(lf,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Ze.T,a=Et.p,Et.p=2,Ze.T=null;try{for(var r=t.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{Ze.T=e,Et.p=a}}Lr&3&&lp(),cr(t),a=t.pendingLanes,n&261930&&a&42?t===L_?Su++:(Su=0,L_=t):Su=0,_f(0)}}function H1(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,df(e)))}function lp(){return F1(),z1(),B1(),G1()}function G1(){if(Dn!==5)return!1;var t=ws,e=U_;U_=0;var n=m0(Lr),i=Ze.T,a=Et.p;try{Et.p=32>n?32:n,Ze.T=null,n=N_,N_=null;var r=ws,s=Lr;if(Dn=0,rc=ws=null,Lr=0,Mt&6)throw Error(ae(331));var o=Mt;if(Mt|=4,T1(r.current),M1(r,r.current,s,n),Mt=o,_f(0,!1),Ji&&typeof Ji.onPostCommitFiberRoot=="function")try{Ji.onPostCommitFiberRoot(lf,r)}catch{}return!0}finally{Et.p=a,Ze.T=i,H1(t,e)}}function tS(t,e,n){e=xa(n,e),e=A_(t.stateNode,e,2),t=Rs(t,e,2),t!==null&&(uf(t,2),cr(t))}function Ut(t,e,n){if(t.tag===3)tS(t,t,n);else for(;e!==null;){if(e.tag===3){tS(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cs===null||!Cs.has(i))){t=xa(n,t),n=n1(2),i=Rs(e,n,2),i!==null&&(i1(n,i,e,t),uf(i,2),cr(i));break}}e=e.return}}function qp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new gC;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Q0=!0,a.add(n),t=MC.bind(null,t,e,n),e.then(t,t))}function MC(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Gt===t&&(pt&n)===n&&(on===4||on===3&&(pt&62914560)===pt&&300>ji()-rp?!(Mt&2)&&sc(t,0):j0|=n,ac===pt&&(ac=0)),cr(t)}function V1(t,e){e===0&&(e=LM()),t=Vo(t,e),t!==null&&(uf(t,e),cr(t))}function EC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),V1(t,n)}function bC(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(ae(314))}i!==null&&i.delete(e),V1(t,n)}function TC(t,e){return d0(t,e)}var vd=null,gl=null,O_=!1,xd=!1,Zp=!1,gs=0;function cr(t){t!==gl&&t.next===null&&(gl===null?vd=gl=t:gl=gl.next=t),xd=!0,O_||(O_=!0,RC())}function _f(t,e){if(!Zp&&xd){Zp=!0;do for(var n=!1,i=vd;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-$i(42|t)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,nS(i,r))}else r=pt,r=Zd(i,i===Gt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||cf(i,r)||(n=!0,nS(i,r));i=i.next}while(n);Zp=!1}}function AC(){k1()}function k1(){xd=O_=!1;var t=0;gs!==0&&FC()&&(t=gs);for(var e=ji(),n=null,i=vd;i!==null;){var a=i.next,r=X1(i,e);r===0?(i.next=null,n===null?vd=a:n.next=a,a===null&&(gl=n)):(n=i,(t!==0||r&3)&&(xd=!0)),i=a}Dn!==0&&Dn!==5||_f(t),gs!==0&&(gs=0)}function X1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-$i(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=$A(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}if(e=Gt,n=pt,n=Zd(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Mp(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||cf(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Mp(i),m0(n)){case 2:case 8:n=UM;break;case 32:n=td;break;case 268435456:n=NM;break;default:n=td}return i=W1.bind(null,t),n=d0(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Mp(i),t.callbackPriority=2,t.callbackNode=null,2}function W1(t,e){if(Dn!==0&&Dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(lp()&&t.callbackNode!==n)return null;var i=pt;return i=Zd(t,t===Gt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(D1(t,i,e),X1(t,ji()),t.callbackNode!=null&&t.callbackNode===n?W1.bind(null,t):null)}function nS(t,e){if(lp())return null;D1(t,e,!0)}function RC(){BC(function(){Mt&6?d0(DM,AC):k1()})}function $0(){if(gs===0){var t=tc;t===0&&(t=Af,Af<<=1,!(Af&261888)&&(Af=256)),gs=t}return gs}function iS(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Eh(""+t)}function aS(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function CC(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var r=iS((a[Li]||null).action),s=i.submitter;s&&(e=(e=s[Li]||null)?iS(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var o=new Kd("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(gs!==0){var l=s?aS(a,s):new FormData(a);b_(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?aS(a,s):new FormData(a),b_(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Kp=0;Kp<h_.length;Kp++){var Qp=h_[Kp],wC=Qp.toLowerCase(),DC=Qp[0].toUpperCase()+Qp.slice(1);za(wC,"on"+DC)}za(iE,"onAnimationEnd");za(aE,"onAnimationIteration");za(rE,"onAnimationStart");za("dblclick","onDoubleClick");za("focusin","onFocus");za("focusout","onBlur");za(YR,"onTransitionRun");za(qR,"onTransitionStart");za(ZR,"onTransitionCancel");za(sE,"onTransitionEnd");$l("onMouseEnter",["mouseout","mouseover"]);$l("onMouseLeave",["mouseout","mouseover"]);$l("onPointerEnter",["pointerout","pointerover"]);$l("onPointerLeave",["pointerout","pointerover"]);Bo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ku="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ku));function Y1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(u){id(u)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(u){id(u)}a.currentTarget=null,r=l}}}}function ut(t,e){var n=e[a_];n===void 0&&(n=e[a_]=new Set);var i=t+"__bubble";n.has(i)||(q1(e,t,2,!1),n.add(i))}function jp(t,e,n){var i=0;e&&(i|=4),q1(n,t,i,e)}var If="_reactListening"+Math.random().toString(36).slice(2);function ev(t){if(!t[If]){t[If]=!0,zM.forEach(function(n){n!=="selectionchange"&&(UC.has(n)||jp(n,!1,t),jp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[If]||(e[If]=!0,jp("selectionchange",!1,e))}}function q1(t,e,n,i){switch(sb(e)){case 2:var a=r2;break;case 8:a=s2;break;default:a=av}n=a.bind(null,e,n,t),a=void 0,!c_||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Jp(t,e,n,i,a){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Ml(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue e}o=o.parentNode}}i=i.return}YM(function(){var c=r,u=v0(n),d=[];e:{var f=oE.get(t);if(f!==void 0){var h=Kd,_=t;switch(t){case"keypress":if(Th(n)===0)break e;case"keydown":case"keyup":h=bR;break;case"focusin":_="focus",h=Rp;break;case"focusout":_="blur",h=Rp;break;case"beforeblur":case"afterblur":h=Rp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=hx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=hR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=RR;break;case iE:case aE:case rE:h=mR;break;case sE:h=wR;break;case"scroll":case"scrollend":h=uR;break;case"wheel":h=UR;break;case"copy":case"cut":case"paste":h=gR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=px;break;case"toggle":case"beforetoggle":h=LR}var v=(e&4)!==0,m=!v&&(t==="scroll"||t==="scrollend"),p=v?f!==null?f+"Capture":null:f;v=[];for(var g=c,S;g!==null;){var x=g;if(S=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||S===null||p===null||(x=Pu(g,p),x!=null&&v.push(Xu(g,x,S))),m)break;g=g.return}0<v.length&&(f=new h(f,_,null,n,u),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&n!==l_&&(_=n.relatedTarget||n.fromElement)&&(Ml(_)||_[Sc]))break e;if((h||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,h?(_=n.relatedTarget||n.toElement,h=c,_=_?Ml(_):null,_!==null&&(m=of(_),v=_.tag,_!==m||v!==5&&v!==27&&v!==6)&&(_=null)):(h=null,_=c),h!==_)){if(v=hx,x="onMouseLeave",p="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=px,x="onPointerLeave",p="onPointerEnter",g="pointer"),m=h==null?f:Qc(h),S=_==null?f:Qc(_),f=new v(x,g+"leave",h,n,u),f.target=m,f.relatedTarget=S,x=null,Ml(u)===c&&(v=new v(p,g+"enter",_,n,u),v.target=S,v.relatedTarget=m,x=v),m=x,h&&_)t:{for(v=NC,p=h,g=_,S=0,x=p;x;x=v(x))S++;x=0;for(var b=g;b;b=v(b))x++;for(;0<S-x;)p=v(p),S--;for(;0<x-S;)g=v(g),x--;for(;S--;){if(p===g||g!==null&&p===g.alternate){v=p;break t}p=v(p),g=v(g)}v=null}else v=null;h!==null&&rS(d,f,h,v,!1),_!==null&&m!==null&&rS(d,m,_,v,!0)}}e:{if(f=c?Qc(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var A=vx;else if(gx(f))if(JM)A=kR;else{A=GR;var E=HR}else h=f.nodeName,!h||h.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&g0(c.elementType)&&(A=vx):A=VR;if(A&&(A=A(t,c))){jM(d,A,n,u);break e}E&&E(t,f,c),t==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&o_(f,"number",f.value)}switch(E=c?Qc(c):window,t){case"focusin":(gx(E)||E.contentEditable==="true")&&(Tl=E,u_=c,fu=null);break;case"focusout":fu=u_=Tl=null;break;case"mousedown":f_=!0;break;case"contextmenu":case"mouseup":case"dragend":f_=!1,Ex(d,n,u);break;case"selectionchange":if(WR)break;case"keydown":case"keyup":Ex(d,n,u)}var y;if(y0)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else bl?KM(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(ZM&&n.locale!=="ko"&&(bl||T!=="onCompositionStart"?T==="onCompositionEnd"&&bl&&(y=qM()):(ps=u,x0="value"in ps?ps.value:ps.textContent,bl=!0)),E=Sd(c,T),0<E.length&&(T=new dx(T,t,null,n,u),d.push({event:T,listeners:E}),y?T.data=y:(y=QM(n),y!==null&&(T.data=y)))),(y=PR?IR(t,n):FR(t,n))&&(T=Sd(c,"onBeforeInput"),0<T.length&&(E=new dx("onBeforeInput","beforeinput",null,n,u),d.push({event:E,listeners:T}),E.data=y)),CC(d,t,c,n,u)}Y1(d,e)})}function Xu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sd(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=Pu(t,n),a!=null&&i.unshift(Xu(t,a,r)),a=Pu(t,e),a!=null&&i.push(Xu(t,a,r))),t.tag===3)return i;t=t.return}return[]}function NC(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function rS(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Pu(n,r),c!=null&&s.unshift(Xu(n,c,l))):a||(c=Pu(n,r),c!=null&&s.push(Xu(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var LC=/\r\n?/g,OC=/\u0000|\uFFFD/g;function sS(t){return(typeof t=="string"?t:""+t).replace(LC,`
`).replace(OC,"")}function Z1(t,e){return e=sS(e),sS(t)===e}function Ot(t,e,n,i,a,r){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ec(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ec(t,""+i);break;case"className":wf(t,"class",i);break;case"tabIndex":wf(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":wf(t,n,i);break;case"style":WM(t,i,r);break;case"data":if(e!=="object"){wf(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Eh(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&Ot(t,e,"name",a.name,a,null),Ot(t,e,"formEncType",a.formEncType,a,null),Ot(t,e,"formMethod",a.formMethod,a,null),Ot(t,e,"formTarget",a.formTarget,a,null)):(Ot(t,e,"encType",a.encType,a,null),Ot(t,e,"method",a.method,a,null),Ot(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Eh(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Rr);break;case"onScroll":i!=null&&ut("scroll",t);break;case"onScrollEnd":i!=null&&ut("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ae(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ae(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Eh(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":ut("beforetoggle",t),ut("toggle",t),Mh(t,"popover",i);break;case"xlinkActuate":ur(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ur(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ur(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ur(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ur(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ur(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ur(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ur(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ur(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Mh(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=lR.get(n)||n,Mh(t,n,i))}}function P_(t,e,n,i,a,r){switch(n){case"style":WM(t,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ae(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ae(60));t.innerHTML=n}}break;case"children":typeof i=="string"?ec(t,i):(typeof i=="number"||typeof i=="bigint")&&ec(t,""+i);break;case"onScroll":i!=null&&ut("scroll",t);break;case"onScrollEnd":i!=null&&ut("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Rr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!BM.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),r=t[Li]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Mh(t,n,i)}}}function Kn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ut("error",t),ut("load",t);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ae(137,e));default:Ot(t,e,r,s,n,null)}}a&&Ot(t,e,"srcSet",n.srcSet,n,null),i&&Ot(t,e,"src",n.src,n,null);return;case"input":ut("invalid",t);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":a=u;break;case"type":s=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(ae(137,e));break;default:Ot(t,e,i,u,n,null)}}VM(t,r,o,l,c,s,a,!1);return;case"select":ut("invalid",t),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:Ot(t,e,a,o,n,null)}e=r,n=s,t.multiple=!!i,e!=null?Il(t,!!i,e,!1):n!=null&&Il(t,!!i,n,!0);return;case"textarea":ut("invalid",t),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(ae(91));break;default:Ot(t,e,s,o,n,null)}XM(t,i,a,r);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ot(t,e,l,i,n,null)}return;case"dialog":ut("beforetoggle",t),ut("toggle",t),ut("cancel",t),ut("close",t);break;case"iframe":case"object":ut("load",t);break;case"video":case"audio":for(i=0;i<ku.length;i++)ut(ku[i],t);break;case"image":ut("error",t),ut("load",t);break;case"details":ut("toggle",t);break;case"embed":case"source":case"link":ut("error",t),ut("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(ae(137,e));default:Ot(t,e,c,i,n,null)}return;default:if(g0(e)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&P_(t,e,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Ot(t,e,o,i,n,null))}function PC(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,u=null;for(h in n){var d=n[h];if(n.hasOwnProperty(h)&&d!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(h)||Ot(t,e,h,null,i,d)}}for(var f in i){var h=i[f];if(d=n[f],i.hasOwnProperty(f)&&(h!=null||d!=null))switch(f){case"type":r=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":u=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(ae(137,e));break;default:h!==d&&Ot(t,e,f,h,i,d)}}s_(t,s,o,l,c,u,r,a);return;case"select":h=s=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":h=l;default:i.hasOwnProperty(r)||Ot(t,e,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&Ot(t,e,a,r,i,l)}e=o,n=s,i=h,f!=null?Il(t,!!n,f,!1):!!i!=!!n&&(e!=null?Il(t,!!n,e,!0):Il(t,!!n,n?[]:"",!1));return;case"textarea":h=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ot(t,e,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":f=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(ae(91));break;default:a!==r&&Ot(t,e,s,a,i,r)}kM(t,f,h);return;case"option":for(var _ in n)if(f=n[_],n.hasOwnProperty(_)&&f!=null&&!i.hasOwnProperty(_))switch(_){case"selected":t.selected=!1;break;default:Ot(t,e,_,null,i,f)}for(l in i)if(f=i[l],h=n[l],i.hasOwnProperty(l)&&f!==h&&(f!=null||h!=null))switch(l){case"selected":t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Ot(t,e,l,f,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in n)f=n[v],n.hasOwnProperty(v)&&f!=null&&!i.hasOwnProperty(v)&&Ot(t,e,v,null,i,f);for(c in i)if(f=i[c],h=n[c],i.hasOwnProperty(c)&&f!==h&&(f!=null||h!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(ae(137,e));break;default:Ot(t,e,c,f,i,h)}return;default:if(g0(e)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&P_(t,e,m,void 0,i,f);for(u in i)f=i[u],h=n[u],!i.hasOwnProperty(u)||f===h||f===void 0&&h===void 0||P_(t,e,u,f,i,h);return}}for(var p in n)f=n[p],n.hasOwnProperty(p)&&f!=null&&!i.hasOwnProperty(p)&&Ot(t,e,p,null,i,f);for(d in i)f=i[d],h=n[d],!i.hasOwnProperty(d)||f===h||f==null&&h==null||Ot(t,e,d,f,i,h)}function oS(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function IC(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,s=a.initiatorType,o=a.duration;if(r&&o&&oS(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,d=l.initiatorType;u&&oS(d)&&(l=l.responseEnd,s+=u*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(r+s)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var I_=null,F_=null;function yd(t){return t.nodeType===9?t:t.ownerDocument}function lS(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function K1(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function z_(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $p=null;function FC(){var t=window.event;return t&&t.type==="popstate"?t===$p?!1:($p=t,!0):($p=null,!1)}var Q1=typeof setTimeout=="function"?setTimeout:void 0,zC=typeof clearTimeout=="function"?clearTimeout:void 0,cS=typeof Promise=="function"?Promise:void 0,BC=typeof queueMicrotask=="function"?queueMicrotask:typeof cS<"u"?function(t){return cS.resolve(null).then(t).catch(HC)}:Q1;function HC(t){setTimeout(function(){throw t})}function Ys(t){return t==="head"}function uS(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),lc(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")yu(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,yu(n);for(var r=n.firstChild;r;){var s=r.nextSibling,o=r.nodeName;r[ff]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}else n==="body"&&yu(t.ownerDocument.body);n=a}while(n);lc(e)}function fS(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function B_(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":B_(n),_0(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function GC(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[ff])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=Ta(t.nextSibling),t===null)break}return null}function VC(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ta(t.nextSibling),t===null))return null;return t}function j1(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ta(t.nextSibling),t===null))return null;return t}function H_(t){return t.data==="$?"||t.data==="$~"}function G_(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kC(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Ta(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var V_=null;function hS(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Ta(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function dS(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function J1(t,e,n){switch(e=yd(n),t){case"html":if(t=e.documentElement,!t)throw Error(ae(452));return t;case"head":if(t=e.head,!t)throw Error(ae(453));return t;case"body":if(t=e.body,!t)throw Error(ae(454));return t;default:throw Error(ae(451))}}function yu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);_0(t)}var Ra=new Map,pS=new Set;function Md(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qr=Et.d;Et.d={f:XC,r:WC,D:YC,C:qC,L:ZC,m:KC,X:jC,S:QC,M:JC};function XC(){var t=qr.f(),e=sp();return t||e}function WC(t){var e=yc(t);e!==null&&e.tag===5&&e.type==="form"?WE(e):qr.r(t)}var Tc=typeof document>"u"?null:document;function $1(t,e,n){var i=Tc;if(i&&typeof e=="string"&&e){var a=va(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),pS.has(a)||(pS.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),Kn(e,"link",t),Hn(e),i.head.appendChild(e)))}}function YC(t){qr.D(t),$1("dns-prefetch",t,null)}function qC(t,e){qr.C(t,e),$1("preconnect",t,e)}function ZC(t,e,n){qr.L(t,e,n);var i=Tc;if(i&&t&&e){var a='link[rel="preload"][as="'+va(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+va(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+va(n.imageSizes)+'"]')):a+='[href="'+va(t)+'"]';var r=a;switch(e){case"style":r=oc(t);break;case"script":r=Ac(t)}Ra.has(r)||(t=Qt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ra.set(r,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(gf(r))||e==="script"&&i.querySelector(vf(r))||(e=i.createElement("link"),Kn(e,"link",t),Hn(e),i.head.appendChild(e)))}}function KC(t,e){qr.m(t,e);var n=Tc;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+va(i)+'"][href="'+va(t)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ac(t)}if(!Ra.has(r)&&(t=Qt({rel:"modulepreload",href:t},e),Ra.set(r,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(vf(r)))return}i=n.createElement("link"),Kn(i,"link",t),Hn(i),n.head.appendChild(i)}}}function QC(t,e,n){qr.S(t,e,n);var i=Tc;if(i&&t){var a=Pl(i).hoistableStyles,r=oc(t);e=e||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(gf(r)))o.loading=5;else{t=Qt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ra.get(r))&&tv(t,n);var l=s=i.createElement("link");Hn(l),Kn(l,"link",t),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Lh(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function jC(t,e){qr.X(t,e);var n=Tc;if(n&&t){var i=Pl(n).hoistableScripts,a=Ac(t),r=i.get(a);r||(r=n.querySelector(vf(a)),r||(t=Qt({src:t,async:!0},e),(e=Ra.get(a))&&nv(t,e),r=n.createElement("script"),Hn(r),Kn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function JC(t,e){qr.M(t,e);var n=Tc;if(n&&t){var i=Pl(n).hoistableScripts,a=Ac(t),r=i.get(a);r||(r=n.querySelector(vf(a)),r||(t=Qt({src:t,async:!0,type:"module"},e),(e=Ra.get(a))&&nv(t,e),r=n.createElement("script"),Hn(r),Kn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function mS(t,e,n,i){var a=(a=bs.current)?Md(a):null;if(!a)throw Error(ae(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=oc(n.href),n=Pl(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=oc(n.href);var r=Pl(a).hoistableStyles,s=r.get(t);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=a.querySelector(gf(t)))&&!r._p&&(s.instance=r,s.state.loading=5),Ra.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ra.set(t,n),r||$C(a,t,n,s.state))),e&&i===null)throw Error(ae(528,""));return s}if(e&&i!==null)throw Error(ae(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ac(n),n=Pl(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(ae(444,t))}}function oc(t){return'href="'+va(t)+'"'}function gf(t){return'link[rel="stylesheet"]['+t+"]"}function eb(t){return Qt({},t,{"data-precedence":t.precedence,precedence:null})}function $C(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Kn(e,"link",n),Hn(e),t.head.appendChild(e))}function Ac(t){return'[src="'+va(t)+'"]'}function vf(t){return"script[async]"+t}function _S(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+va(n.href)+'"]');if(i)return e.instance=i,Hn(i),i;var a=Qt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Hn(i),Kn(i,"style",a),Lh(i,n.precedence,t),e.instance=i;case"stylesheet":a=oc(n.href);var r=t.querySelector(gf(a));if(r)return e.state.loading|=4,e.instance=r,Hn(r),r;i=eb(n),(a=Ra.get(a))&&tv(i,a),r=(t.ownerDocument||t).createElement("link"),Hn(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Kn(r,"link",i),e.state.loading|=4,Lh(r,n.precedence,t),e.instance=r;case"script":return r=Ac(n.src),(a=t.querySelector(vf(r)))?(e.instance=a,Hn(a),a):(i=n,(a=Ra.get(r))&&(i=Qt({},n),nv(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),Hn(a),Kn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(ae(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,Lh(i,n.precedence,t));return e.instance}function Lh(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===e)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function tv(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function nv(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Oh=null;function gS(t,e,n){if(Oh===null){var i=new Map,a=Oh=new Map;a.set(n,i)}else a=Oh,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var r=n[a];if(!(r[ff]||r[Xn]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function vS(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function e2(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function tb(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function t2(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=oc(i.href),r=e.querySelector(gf(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ed.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=r,Hn(r);return}r=e.ownerDocument||e,i=eb(i),(a=Ra.get(a))&&tv(i,a),r=r.createElement("link"),Hn(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Kn(r,"link",i),n.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=Ed.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var em=0;function n2(t,e){return t.stylesheets&&t.count===0&&Ph(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&Ph(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&em===0&&(em=62500*IC());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ph(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>em?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Ed(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ph(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var bd=null;function Ph(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,bd=new Map,e.forEach(i2,t),bd=null,Ed.call(t))}function i2(t,e){if(!(e.state.loading&4)){var n=bd.get(t);if(n)var i=n.get(null);else{n=new Map,bd.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=e.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=Ed.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Wu={$$typeof:Ar,Provider:null,Consumer:null,_currentValue:_o,_currentValue2:_o,_threadCount:0};function a2(t,e,n,i,a,r,s,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ep(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ep(0),this.hiddenUpdates=Ep(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function nb(t,e,n,i,a,r,s,o,l,c,u,d){return t=new a2(t,e,n,s,l,c,u,d,o),e=1,r===!0&&(e|=24),r=Wi(3,null,null,e),t.current=r,r.stateNode=t,e=C0(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},U0(r),t}function ib(t){return t?(t=Cl,t):Cl}function ab(t,e,n,i,a,r){a=ib(a),i.context===null?i.context=a:i.pendingContext=a,i=As(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Rs(t,i,e),n!==null&&(Ri(n,t,e),du(n,t,e))}function xS(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function iv(t,e){xS(t,e),(t=t.alternate)&&xS(t,e)}function rb(t){if(t.tag===13||t.tag===31){var e=Vo(t,67108864);e!==null&&Ri(e,t,67108864),iv(t,67108864)}}function SS(t){if(t.tag===13||t.tag===31){var e=ea();e=p0(e);var n=Vo(t,e);n!==null&&Ri(n,t,e),iv(t,e)}}var Td=!0;function r2(t,e,n,i){var a=Ze.T;Ze.T=null;var r=Et.p;try{Et.p=2,av(t,e,n,i)}finally{Et.p=r,Ze.T=a}}function s2(t,e,n,i){var a=Ze.T;Ze.T=null;var r=Et.p;try{Et.p=8,av(t,e,n,i)}finally{Et.p=r,Ze.T=a}}function av(t,e,n,i){if(Td){var a=k_(i);if(a===null)Jp(t,e,i,Ad,n),yS(t,i);else if(l2(a,t,e,n,i))i.stopPropagation();else if(yS(t,i),e&4&&-1<o2.indexOf(t)){for(;a!==null;){var r=yc(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=no(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-$i(s);o.entanglements[1]|=l,s&=~l}cr(r),!(Mt&6)&&(md=ji()+500,_f(0))}}break;case 31:case 13:o=Vo(r,2),o!==null&&Ri(o,r,2),sp(),iv(r,2)}if(r=k_(i),r===null&&Jp(t,e,i,Ad,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Jp(t,e,i,null,n)}}function k_(t){return t=v0(t),rv(t)}var Ad=null;function rv(t){if(Ad=null,t=Ml(t),t!==null){var e=of(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=TM(e),t!==null)return t;t=null}else if(n===31){if(t=AM(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ad=t,null}function sb(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(YA()){case DM:return 2;case UM:return 8;case td:case qA:return 32;case NM:return 268435456;default:return 32}default:return 32}}var X_=!1,Ds=null,Us=null,Ns=null,Yu=new Map,qu=new Map,fs=[],o2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yS(t,e){switch(t){case"focusin":case"focusout":Ds=null;break;case"dragenter":case"dragleave":Us=null;break;case"mouseover":case"mouseout":Ns=null;break;case"pointerover":case"pointerout":Yu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qu.delete(e.pointerId)}}function Pc(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=yc(e),e!==null&&rb(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function l2(t,e,n,i,a){switch(e){case"focusin":return Ds=Pc(Ds,t,e,n,i,a),!0;case"dragenter":return Us=Pc(Us,t,e,n,i,a),!0;case"mouseover":return Ns=Pc(Ns,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return Yu.set(r,Pc(Yu.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,qu.set(r,Pc(qu.get(r)||null,t,e,n,i,a)),!0}return!1}function ob(t){var e=Ml(t.target);if(e!==null){var n=of(e);if(n!==null){if(e=n.tag,e===13){if(e=TM(n),e!==null){t.blockedOn=e,rx(t.priority,function(){SS(n)});return}}else if(e===31){if(e=AM(n),e!==null){t.blockedOn=e,rx(t.priority,function(){SS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ih(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=k_(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);l_=i,n.target.dispatchEvent(i),l_=null}else return e=yc(n),e!==null&&rb(e),t.blockedOn=n,!1;e.shift()}return!0}function MS(t,e,n){Ih(t)&&n.delete(e)}function c2(){X_=!1,Ds!==null&&Ih(Ds)&&(Ds=null),Us!==null&&Ih(Us)&&(Us=null),Ns!==null&&Ih(Ns)&&(Ns=null),Yu.forEach(MS),qu.forEach(MS)}function Ff(t,e){t.blockedOn===e&&(t.blockedOn=null,X_||(X_=!0,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,c2)))}var zf=null;function ES(t){zf!==t&&(zf=t,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,function(){zf===t&&(zf=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(rv(i||n)===null)continue;break}var r=yc(n);r!==null&&(t.splice(e,3),e-=3,b_(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function lc(t){function e(l){return Ff(l,t)}Ds!==null&&Ff(Ds,t),Us!==null&&Ff(Us,t),Ns!==null&&Ff(Ns,t),Yu.forEach(e),qu.forEach(e);for(var n=0;n<fs.length;n++){var i=fs[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<fs.length&&(n=fs[0],n.blockedOn===null);)ob(n),n.blockedOn===null&&fs.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[Li]||null;if(typeof r=="function")s||ES(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[Li]||null)o=s.formAction;else if(rv(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ES(n)}}}function lb(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function sv(t){this._internalRoot=t}cp.prototype.render=sv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));var n=e.current,i=ea();ab(n,i,t,e,null,null)};cp.prototype.unmount=sv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ab(t.current,2,null,t,null,null),sp(),e[Sc]=null}};function cp(t){this._internalRoot=t}cp.prototype.unstable_scheduleHydration=function(t){if(t){var e=FM();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fs.length&&e!==0&&e<fs[n].priority;n++);fs.splice(n,0,t),n===0&&ob(t)}};var bS=EM.version;if(bS!=="19.2.7")throw Error(ae(527,bS,"19.2.7"));Et.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=BA(e),t=t!==null?RM(t):null,t=t===null?null:t.stateNode,t};var u2={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:Ze,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bf.isDisabled&&Bf.supportsFiber)try{lf=Bf.inject(u2),Ji=Bf}catch{}}Yd.createRoot=function(t,e){if(!bM(t))throw Error(ae(299));var n=!1,i="",a=$E,r=e1,s=t1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=nb(t,1,!1,null,null,n,i,null,a,r,s,lb),t[Sc]=e.current,ev(t),new sv(e)};Yd.hydrateRoot=function(t,e,n){if(!bM(t))throw Error(ae(299));var i=!1,a="",r=$E,s=e1,o=t1,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=nb(t,1,!0,e,n??null,i,a,l,r,s,o,lb),e.context=ib(null),n=e.current,i=ea(),i=p0(i),a=As(i),a.callback=null,Rs(n,a,i),n=i,e.current.lanes=n,uf(e,n),cr(e),t[Sc]=e.current,ev(t),new cp(e)};Yd.version="19.2.7";function cb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cb)}catch(t){console.error(t)}}cb(),gM.exports=Yd;var f2=gM.exports;function Sr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ub(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ta={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zu={duration:.5,overwrite:!1,delay:0},ov,Qn,Jt,Ma=1e8,Ht=1/Ma,W_=Math.PI*2,h2=W_/4,d2=0,fb=Math.sqrt,p2=Math.cos,m2=Math.sin,Vn=function(e){return typeof e=="string"},cn=function(e){return typeof e=="function"},kr=function(e){return typeof e=="number"},lv=function(e){return typeof e>"u"},rr=function(e){return typeof e=="object"},Ci=function(e){return e!==!1},cv=function(){return typeof window<"u"},Hf=function(e){return cn(e)||Vn(e)},hb=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},si=Array.isArray,_2=/random\([^)]+\)/g,g2=/,\s*/g,TS=/(?:-?\.?\d|\.)+/gi,db=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Nl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tm=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pb=/[+-]=-?[.\d]+/,v2=/[^,'"\[\]\s]+/gi,x2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,en,ka,Y_,uv,ra={},Rd={},mb,_b=function(e){return(Rd=cc(e,ra))&&Oi},fv=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Ku=function(e,n){return!n&&console.warn(e)},gb=function(e,n){return e&&(ra[e]=n)&&Rd&&(Rd[e]=n)||ra},Qu=function(){return 0},S2={suppressEvents:!0,isStart:!0,kill:!1},Fh={suppressEvents:!0,kill:!1},y2={suppressEvents:!0},hv={},Ls=[],q_={},vb,Vi={},nm={},AS=30,zh=[],dv="",pv=function(e){var n=e[0],i,a;if(rr(n)||cn(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(a=zh.length;a--&&!zh[a].targetTest(n););i=zh[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new Hb(e[a],i)))||e.splice(a,1);return e},yo=function(e){return e._gsap||pv(Ea(e))[0]._gsap},xb=function(e,n,i){return(i=e[n])&&cn(i)?e[n]():lv(i)&&e.getAttribute&&e.getAttribute(n)||i},wi=function(e,n){return(e=e.split(",")).forEach(n)||e},dn=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},Vl=function(e,n){var i=n.charAt(0),a=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+a:i==="-"?e-a:i==="*"?e*a:e/a},M2=function(e,n){for(var i=n.length,a=0;e.indexOf(n[a])<0&&++a<i;);return a<i},Cd=function(){var e=Ls.length,n=Ls.slice(0),i,a;for(q_={},Ls.length=0,i=0;i<e;i++)a=n[i],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},mv=function(e){return!!(e._initted||e._startAt||e.add)},Sb=function(e,n,i,a){Ls.length&&!Qn&&Cd(),e.render(n,i,!!(Qn&&n<0&&mv(e))),Ls.length&&!Qn&&Cd()},yb=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(v2).length<2?n:Vn(e)?e.trim():e},Mb=function(e){return e},sa=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},E2=function(e){return function(n,i){for(var a in i)a in n||a==="duration"&&e||a==="ease"||(n[a]=i[a])}},cc=function(e,n){for(var i in n)e[i]=n[i];return e},RS=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=rr(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},wd=function(e,n){var i={},a;for(a in e)a in n||(i[a]=e[a]);return i},Mu=function(e){var n=e.parent||en,i=e.keyframes?E2(si(e.keyframes)):sa;if(Ci(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},b2=function(e,n){for(var i=e.length,a=i===n.length;a&&i--&&e[i]===n[i];);return i<0},Eb=function(e,n,i,a,r){var s=e[a],o;if(r)for(o=n[r];s&&s[r]>o;)s=s._prev;return s?(n._next=s._next,s._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[a]=n,n._prev=s,n.parent=n._dp=e,n},up=function(e,n,i,a){i===void 0&&(i="_first"),a===void 0&&(a="_last");var r=n._prev,s=n._next;r?r._next=s:e[i]===n&&(e[i]=s),s?s._prev=r:e[a]===n&&(e[a]=r),n._next=n._prev=n.parent=null},Hs=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Mo=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},T2=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Z_=function(e,n,i,a){return e._startAt&&(Qn?e._startAt.revert(Fh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,a))},A2=function t(e){return!e||e._ts&&t(e.parent)},CS=function(e){return e._repeat?uc(e._tTime,e=e.duration()+e._rDelay)*e:0},uc=function(e,n){var i=Math.floor(e=$t(e/n));return e&&i===e?i-1:i},Dd=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},fp=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ht)||0))},hp=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=$t(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),fp(e),i._dirty||Mo(i,e)),e},bb=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=Dd(e.rawTime(),n),(!n._dur||xf(0,n.totalDuration(),i)-n._tTime>Ht)&&n.render(i,!0)),Mo(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ht}},Ya=function(e,n,i,a){return n.parent&&Hs(n),n._start=$t((kr(i)?i:i||e!==en?ua(e,i,n):e._time)+n._delay),n._end=$t(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Eb(e,n,"_first","_last",e._sort?"_start":0),K_(n)||(e._recent=n),a||bb(e,n),e._ts<0&&hp(e,e._tTime),e},Tb=function(e,n){return(ra.ScrollTrigger||fv("scrollTrigger",n))&&ra.ScrollTrigger.create(n,e)},Ab=function(e,n,i,a,r){if(gv(e,n,r),!e._initted)return 1;if(!i&&e._pt&&!Qn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vb!==Yi.frame)return Ls.push(e),e._lazy=[r,a],1},R2=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},K_=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},C2=function(e,n,i,a){var r=e.ratio,s=n<0||!n&&(!e._start&&R2(e)&&!(!e._initted&&K_(e))||(e._ts<0||e._dp._ts<0)&&!K_(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=xf(0,e._tDur,n),u=uc(l,o),e._yoyo&&u&1&&(s=1-s),u!==uc(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||Qn||a||e._zTime===Ht||!n&&e._zTime){if(!e._initted&&Ab(e,n,a,i,l))return;for(d=e._zTime,e._zTime=n||(i?Ht:0),i||(i=n&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;n<0&&Z_(e,n,i,!0),e._onUpdate&&!i&&Ki(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ki(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===s&&(s&&Hs(e,1),!i&&!Qn&&(Ki(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},w2=function(e,n,i){var a;if(i>n)for(a=e._first;a&&a._start<=i;){if(a.data==="isPause"&&a._start>n)return a;a=a._next}else for(a=e._last;a&&a._start>=i;){if(a.data==="isPause"&&a._start<n)return a;a=a._prev}},fc=function(e,n,i,a){var r=e._repeat,s=$t(n)||0,o=e._tTime/e._tDur;return o&&!a&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:$t(s*(r+1)+e._rDelay*r):s,o>0&&!a&&hp(e,e._tTime=e._tDur*o),e.parent&&fp(e),i||Mo(e.parent,e),e},wS=function(e){return e instanceof Ai?Mo(e):fc(e,e._dur)},D2={_start:0,endTime:Qu,totalDuration:Qu},ua=function t(e,n,i){var a=e.labels,r=e._recent||D2,s=e.duration()>=Ma?r.endTime(!1):e._dur,o,l,c;return Vn(n)&&(isNaN(n)||n in a)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(n in a||(a[n]=s),a[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(si(i)?i[0]:i).totalDuration()),o>1?t(e,n.substr(0,o-1),i)+l:s+l)):n==null?s:+n},Eu=function(e,n,i){var a=kr(n[1]),r=(a?2:1)+(e<2?0:1),s=n[r],o,l;if(a&&(s.duration=n[1]),s.parent=i,e){for(o=s,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ci(l.vars.inherit)&&l.parent;s.immediateRender=Ci(o.immediateRender),e<2?s.runBackwards=1:s.startAt=n[r-1]}return new En(n[0],s,n[r+1])},qs=function(e,n){return e||e===0?n(e):n},xf=function(e,n,i){return i<e?e:i>n?n:i},ii=function(e,n){return!Vn(e)||!(n=x2.exec(e))?"":n[1]},U2=function(e,n,i){return qs(i,function(a){return xf(e,n,a)})},Q_=[].slice,Rb=function(e,n){return e&&rr(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&rr(e[0]))&&!e.nodeType&&e!==ka},N2=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(a){var r;return Vn(a)&&!n||Rb(a,1)?(r=i).push.apply(r,Ea(a)):i.push(a)})||i},Ea=function(e,n,i){return Jt&&!n&&Jt.selector?Jt.selector(e):Vn(e)&&!i&&(Y_||!hc())?Q_.call((n||uv).querySelectorAll(e),0):si(e)?N2(e,i):Rb(e)?Q_.call(e,0):e?[e]:[]},j_=function(e){return e=Ea(e)[0]||Ku("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return Ea(n,i.querySelectorAll?i:i===e?Ku("Invalid scope")||uv.createElement("div"):e)}},Cb=function(e){return e.sort(function(){return .5-Math.random()})},wb=function(e){if(cn(e))return e;var n=rr(e)?e:{each:e},i=Eo(n.ease),a=n.from||0,r=parseFloat(n.base)||0,s={},o=a>0&&a<1,l=isNaN(a)||o,c=n.axis,u=a,d=a;return Vn(a)?u=d={center:.5,edges:.5,end:1}[a]||0:!o&&l&&(u=a[0],d=a[1]),function(f,h,_){var v=(_||n).length,m=s[v],p,g,S,x,b,A,E,y,T;if(!m){if(T=n.grid==="auto"?0:(n.grid||[1,Ma])[1],!T){for(E=-Ma;E<(E=_[T++].getBoundingClientRect().left)&&T<v;);T<v&&T--}for(m=s[v]=[],p=l?Math.min(T,v)*u-.5:a%T,g=T===Ma?0:l?v*d/T-.5:a/T|0,E=0,y=Ma,A=0;A<v;A++)S=A%T-p,x=g-(A/T|0),m[A]=b=c?Math.abs(c==="y"?x:S):fb(S*S+x*x),b>E&&(E=b),b<y&&(y=b);a==="random"&&Cb(m),m.max=E-y,m.min=y,m.v=v=(parseFloat(n.amount)||parseFloat(n.each)*(T>v?v-1:c?c==="y"?v/T:T:Math.max(T,v/T))||0)*(a==="edges"?-1:1),m.b=v<0?r-v:r,m.u=ii(n.amount||n.each)||0,i=i&&v<0?W2(i):i}return v=(m[f]-m.min)/m.max||0,$t(m.b+(i?i(v):v)*m.v)+m.u}},J_=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var a=$t(Math.round(parseFloat(i)/e)*e*n);return(a-a%1)/n+(kr(i)?0:ii(i))}},Db=function(e,n){var i=si(e),a,r;return!i&&rr(e)&&(a=i=e.radius||Ma,e.values?(e=Ea(e.values),(r=!kr(e[0]))&&(a*=a)):e=J_(e.increment)),qs(n,i?cn(e)?function(s){return r=e(s),Math.abs(r-s)<=a?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Ma,u=0,d=e.length,f,h;d--;)r?(f=e[d].x-o,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-o),f<c&&(c=f,u=d);return u=!a||c<=a?e[u]:s,r||u===s||kr(s)?u:u+ii(s)}:J_(e))},Ub=function(e,n,i,a){return qs(si(e)?!n:i===!0?!!(i=0):!a,function(){return si(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(a=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*a)/a})},L2=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(a){return n.reduce(function(r,s){return s(r)},a)}},O2=function(e,n){return function(i){return e(parseFloat(i))+(n||ii(i))}},P2=function(e,n,i){return Lb(e,n,0,1,i)},Nb=function(e,n,i){return qs(i,function(a){return e[~~n(a)]})},I2=function t(e,n,i){var a=n-e;return si(e)?Nb(e,t(0,e.length),n):qs(i,function(r){return(a+(r-e)%a)%a+e})},F2=function t(e,n,i){var a=n-e,r=a*2;return si(e)?Nb(e,t(0,e.length-1),n):qs(i,function(s){return s=(r+(s-e)%r)%r||0,e+(s>a?r-s:s)})},ju=function(e){return e.replace(_2,function(n){var i=n.indexOf("[")+1,a=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(g2);return Ub(i?a:+a[0],i?0:+a[1],+a[2]||1e-5)})},Lb=function(e,n,i,a,r){var s=n-e,o=a-i;return qs(r,function(l){return i+((l-e)/s*o||0)})},z2=function t(e,n,i,a){var r=isNaN(e+n)?0:function(h){return(1-h)*e+h*n};if(!r){var s=Vn(e),o={},l,c,u,d,f;if(i===!0&&(a=1)&&(i=null),s)e={p:e},n={p:n};else if(si(e)&&!si(n)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(t(e[c-1],e[c]));d--,r=function(_){_*=d;var v=Math.min(f,~~_);return u[v](_-v)},i=n}else a||(e=cc(si(e)?[]:{},e));if(!u){for(l in n)_v.call(o,e,l,"get",n[l]);r=function(_){return Sv(_,o)||(s?e.p:e)}}}return qs(i,r)},DS=function(e,n,i){var a=e.labels,r=Ma,s,o,l;for(s in a)o=a[s]-n,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},Ki=function(e,n,i){var a=e.vars,r=a[n],s=Jt,o=e._ctx,l,c,u;if(r)return l=a[n+"Params"],c=a.callbackScope||e,i&&Ls.length&&Cd(),o&&(Jt=o),u=l?r.apply(c,l):r.call(c),Jt=s,u},$c=function(e){return Hs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qn),e.progress()<1&&Ki(e,"onInterrupt"),e},Ll,Ob=[],Pb=function(e){if(e)if(e=!e.name&&e.default||e,cv()||e.headless){var n=e.name,i=cn(e),a=n&&!i&&e.init?function(){this._props=[]}:e,r={init:Qu,render:Sv,add:_v,kill:tw,modifier:ew,rawVars:0},s={targetTest:0,get:0,getSetter:xv,aliases:{},register:0};if(hc(),e!==a){if(Vi[n])return;sa(a,sa(wd(e,r),s)),cc(a.prototype,cc(r,wd(e,s))),Vi[a.prop=n]=a,e.targetTest&&(zh.push(a),hv[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}gb(n,a),e.register&&e.register(Oi,a,Di)}else Ob.push(e)},Bt=255,eu={aqua:[0,Bt,Bt],lime:[0,Bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Bt],navy:[0,0,128],white:[Bt,Bt,Bt],olive:[128,128,0],yellow:[Bt,Bt,0],orange:[Bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Bt,0,0],pink:[Bt,192,203],cyan:[0,Bt,Bt],transparent:[Bt,Bt,Bt,0]},im=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*Bt+.5|0},Ib=function(e,n,i){var a=e?kr(e)?[e>>16,e>>8&Bt,e&Bt]:0:eu.black,r,s,o,l,c,u,d,f,h,_;if(!a){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),eu[e])a=eu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return a=parseInt(e.substr(1,6),16),[a>>16,a>>8&Bt,a&Bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),a=[e>>16,e>>8&Bt,e&Bt]}else if(e.substr(0,3)==="hsl"){if(a=_=e.match(TS),!n)l=+a[0]%360/360,c=+a[1]/100,u=+a[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,a.length>3&&(a[3]*=1),a[0]=im(l+1/3,r,s),a[1]=im(l,r,s),a[2]=im(l-1/3,r,s);else if(~e.indexOf("="))return a=e.match(db),i&&a.length<4&&(a[3]=1),a}else a=e.match(TS)||eu.transparent;a=a.map(Number)}return n&&!_&&(r=a[0]/Bt,s=a[1]/Bt,o=a[2]/Bt,d=Math.max(r,s,o),f=Math.min(r,s,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===r?(s-o)/h+(s<o?6:0):d===s?(o-r)/h+2:(r-s)/h+4,l*=60),a[0]=~~(l+.5),a[1]=~~(c*100+.5),a[2]=~~(u*100+.5)),i&&a.length<4&&(a[3]=1),a},Fb=function(e){var n=[],i=[],a=-1;return e.split(Os).forEach(function(r){var s=r.match(Nl)||[];n.push.apply(n,s),i.push(a+=s.length+1)}),n.c=i,n},US=function(e,n,i){var a="",r=(e+a).match(Os),s=n?"hsla(":"rgba(",o=0,l,c,u,d;if(!r)return e;if(r=r.map(function(f){return(f=Ib(f,n,1))&&s+(n?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=Fb(e),l=i.c,l.join(a)!==u.c.join(a)))for(c=e.replace(Os,"1").split(Nl),d=c.length-1;o<d;o++)a+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=e.split(Os),d=c.length-1;o<d;o++)a+=c[o]+r[o];return a+c[d]},Os=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in eu)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),B2=/hsl[a]?\(/,zb=function(e){var n=e.join(" "),i;if(Os.lastIndex=0,Os.test(n))return i=B2.test(n),e[1]=US(e[1],i),e[0]=US(e[0],i,Fb(e[1])),!0},Ju,Yi=function(){var t=Date.now,e=500,n=33,i=t(),a=i,r=1e3/240,s=r,o=[],l,c,u,d,f,h,_=function v(m){var p=t()-a,g=m===!0,S,x,b,A;if((p>e||p<0)&&(i+=p-n),a+=p,b=a-i,S=b-s,(S>0||g)&&(A=++d.frame,f=b-d.time*1e3,d.time=b=b/1e3,s+=S+(S>=r?4:r-S),x=1),g||(l=c(v)),x)for(h=0;h<o.length;h++)o[h](b,f,A,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){mb&&(!Y_&&cv()&&(ka=Y_=window,uv=ka.document||{},ra.gsap=Oi,(ka.gsapVersions||(ka.gsapVersions=[])).push(Oi.version),_b(Rd||ka.GreenSockGlobals||!ka.gsap&&ka||{}),Ob.forEach(Pb)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,s-d.time*1e3+1|0)},Ju=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ju=0,c=Qu},lagSmoothing:function(m,p){e=m||1/0,n=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),s=d.time*1e3+r},add:function(m,p,g){var S=p?function(x,b,A,E){m(x,b,A,E),d.remove(S)}:m;return d.remove(m),o[g?"unshift":"push"](S),hc(),S},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},d}(),hc=function(){return!Ju&&Yi.wake()},xt={},H2=/^[\d.\-M][\d.\-,\s]/,G2=/["']/g,V2=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),a=i[0],r=1,s=i.length,o,l,c;r<s;r++)l=i[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[a]=isNaN(c)?c.replace(G2,"").trim():+c,a=l.substr(o+1).trim();return n},k2=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),a=e.indexOf("(",n);return e.substring(n,~a&&a<i?e.indexOf(")",i+1):i)},X2=function(e){var n=(e+"").split("("),i=xt[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[V2(n[1])]:k2(e).split(",").map(yb)):xt._CE&&H2.test(e)?xt._CE("",e):i},W2=function(e){return function(n){return 1-e(1-n)}},Eo=function(e,n){return e&&(cn(e)?e:xt[e]||X2(e))||n},Xo=function(e,n,i,a){i===void 0&&(i=function(l){return 1-n(1-l)}),a===void 0&&(a=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var r={easeIn:n,easeOut:i,easeInOut:a},s;return wi(e,function(o){xt[o]=ra[o]=r,xt[s=o.toLowerCase()]=i;for(var l in r)xt[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=xt[o+"."+l]=r[l]}),r},Bb=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},am=function t(e,n,i){var a=n>=1?n:1,r=(i||(e?.3:.45))/(n<1?n:1),s=r/W_*(Math.asin(1/a)||0),o=function(u){return u===1?1:a*Math.pow(2,-10*u)*m2((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Bb(o);return r=W_/r,l.config=function(c,u){return t(e,c,u)},l},rm=function t(e,n){n===void 0&&(n=1.70158);var i=function(s){return s?--s*s*((n+1)*s+n)+1:0},a=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:Bb(i);return a.config=function(r){return t(e,r)},a};wi("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;Xo(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});xt.Linear.easeNone=xt.none=xt.Linear.easeIn;Xo("Elastic",am("in"),am("out"),am());(function(t,e){var n=1/e,i=2*n,a=2.5*n,r=function(o){return o<n?t*o*o:o<i?t*Math.pow(o-1.5/e,2)+.75:o<a?t*(o-=2.25/e)*o+.9375:t*Math.pow(o-2.625/e,2)+.984375};Xo("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Xo("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Xo("Circ",function(t){return-(fb(1-t*t)-1)});Xo("Sine",function(t){return t===1?1:-p2(t*h2)+1});Xo("Back",rm("in"),rm("out"),rm());xt.SteppedEase=xt.steps=ra.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,a=e+(n?0:1),r=n?1:0,s=1-Ht;return function(o){return((a*xf(0,s,o)|0)+r)*i}}};Zu.ease=xt["quad.out"];wi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return dv+=t+","+t+"Params,"});var Hb=function(e,n){this.id=d2++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:xb,this.set=n?n.getSetter:xv},$u=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,fc(this,+n.duration,1,1),this.data=n.data,Jt&&(this._ctx=Jt,Jt.data.push(this)),Ju||Yi.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,fc(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,a){if(hc(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(hp(this,i),!r._dp||r.parent||bb(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ya(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===Ht||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Sb(this,i,a)),this},e.time=function(i,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+CS(this))%(this._dur+this._rDelay)||(i?this._dur:0),a):this._time},e.totalProgress=function(i,a){return arguments.length?this.totalTime(this.totalDuration()*i,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+CS(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,a){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,a):this._repeat?uc(this._tTime,r)+1:1},e.timeScale=function(i,a){if(!arguments.length)return this._rts===-Ht?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Dd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ht?0:this._rts,this.totalTime(xf(-Math.abs(this._delay),this.totalDuration(),r),a!==!1),fp(this),T2(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hc(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ht&&(this._tTime-=Ht)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=$t(i);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&Ya(a,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Ci(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var a=this.parent||this._dp;return a?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Dd(a.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=y2);var a=Qn;return Qn=i,mv(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Qn=a,this},e.globalTime=function(i){for(var a=this,r=arguments.length?i:a.rawTime();a;)r=a._start+r/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,wS(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var a=this._time;return this._rDelay=i,wS(this),a?this.time(a):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,a){return this.totalTime(ua(this,i),Ci(a))},e.restart=function(i,a){return this.play().totalTime(i?-this._delay:0,Ci(a)),this._dur||(this._zTime=-Ht),this},e.play=function(i,a){return i!=null&&this.seek(i,a),this.reversed(!1).paused(!1)},e.reverse=function(i,a){return i!=null&&this.seek(i||this.totalDuration(),a),this.reversed(!0).paused(!1)},e.pause=function(i,a){return i!=null&&this.seek(i,a),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ht,this},e.isActive=function(){var i=this.parent||this._dp,a=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=a&&r<this.endTime(!0)-Ht)},e.eventCallback=function(i,a,r){var s=this.vars;return arguments.length>1?(a?(s[i]=a,r&&(s[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=a)):delete s[i],this):s[i]},e.then=function(i){var a=this,r=a._prom;return new Promise(function(s){var o=cn(i)?i:Mb,l=function(){var u=a.then;a.then=null,r&&r(),cn(o)&&(o=o(a))&&(o.then||o===a)&&(a.then=u),s(o),a.then=u};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?l():a._prom=l})},e.kill=function(){$c(this)},t}();sa($u.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ht,_prom:0,_ps:!1,_rts:1});var Ai=function(t){ub(e,t);function e(i,a){var r;return i===void 0&&(i={}),r=t.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Ci(i.sortChildren),en&&Ya(i.parent||en,Sr(r),a),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Tb(Sr(r),i.scrollTrigger),r}var n=e.prototype;return n.to=function(a,r,s){return Eu(0,arguments,this),this},n.from=function(a,r,s){return Eu(1,arguments,this),this},n.fromTo=function(a,r,s,o){return Eu(2,arguments,this),this},n.set=function(a,r,s){return r.duration=0,r.parent=this,Mu(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new En(a,r,ua(this,s),1),this},n.call=function(a,r,s){return Ya(this,En.delayedCall(0,a,r),s)},n.staggerTo=function(a,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new En(a,s,ua(this,l)),this},n.staggerFrom=function(a,r,s,o,l,c,u){return s.runBackwards=1,Mu(s).immediateRender=Ci(s.immediateRender),this.staggerTo(a,r,s,o,l,c,u)},n.staggerFromTo=function(a,r,s,o,l,c,u,d){return o.startAt=s,Mu(o).immediateRender=Ci(o.immediateRender),this.staggerTo(a,r,o,l,c,u,d)},n.render=function(a,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=a<=0?0:$t(a),d=this._zTime<0!=a<0&&(this._initted||!c),f,h,_,v,m,p,g,S,x,b,A,E;if(this!==en&&u>l&&a>=0&&(u=l),u!==this._tTime||s||d){if(o!==this._time&&c&&(u+=this._time-o,a+=this._time-o),f=u,x=this._start,S=this._ts,p=!S,d&&(c||(o=this._zTime),(a||!r)&&(this._zTime=a)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(m*100+a,r,s);if(f=$t(u%m),u===l?(v=this._repeat,f=c):(b=$t(u/m),v=~~b,v&&v===b&&(f=c,v--),f>c&&(f=c)),b=uc(this._tTime,m),!o&&this._tTime&&b!==v&&this._tTime-b*m-this._dur<=0&&(b=v),A&&v&1&&(f=c-f,E=1),v!==b&&!this._lock){var y=A&&b&1,T=y===(A&&v&1);if(v<b&&(y=!y),o=y?0:u%c?c:u,this._lock=1,this.render(o||(E?0:$t(v*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Ki(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,b=v),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=w2(this,$t(o),$t(f)),g&&(u-=f-(f=g._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,o=0),!o&&u&&c&&!r&&!b&&(Ki(this,"onStart"),this._tTime!==u))return this;if(f>=o&&a>=0)for(h=this._first;h;){if(_=h._next,(h._act||f>=h._start)&&h._ts&&g!==h){if(h.parent!==this)return this.render(a,r,s);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,r,s),f!==this._time||!this._ts&&!p){g=0,_&&(u+=this._zTime=-Ht);break}}h=_}else{h=this._last;for(var C=a<0?a:f;h;){if(_=h._prev,(h._act||C<=h._end)&&h._ts&&g!==h){if(h.parent!==this)return this.render(a,r,s);if(h.render(h._ts>0?(C-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(C-h._start)*h._ts,r,s||Qn&&mv(h)),f!==this._time||!this._ts&&!p){g=0,_&&(u+=this._zTime=C?-Ht:Ht);break}}h=_}}if(g&&!r&&(this.pause(),g.render(f>=o?0:-Ht)._zTime=f>=o?1:-1,this._ts))return this._start=x,fp(this),this.render(a,r,s);this._onUpdate&&!r&&Ki(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((a||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hs(this,1),!r&&!(a<0&&!o)&&(u||o||!l)&&(Ki(this,u===l&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(a,r){var s=this;if(kr(r)||(r=ua(this,r,a)),!(a instanceof $u)){if(si(a))return a.forEach(function(o){return s.add(o,r)}),this;if(Vn(a))return this.addLabel(a,r);if(cn(a))a=En.delayedCall(0,a);else return this}return this!==a?Ya(this,a,r):this},n.getChildren=function(a,r,s,o){a===void 0&&(a=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-Ma);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof En?r&&l.push(c):(s&&l.push(c),a&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},n.getById=function(a){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===a)return r[s]},n.remove=function(a){return Vn(a)?this.removeLabel(a):cn(a)?this.killTweensOf(a):(a.parent===this&&up(this,a),a===this._recent&&(this._recent=this._last),Mo(this))},n.totalTime=function(a,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(Yi.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),t.prototype.totalTime.call(this,a,r),this._forcing=0,this):this._tTime},n.addLabel=function(a,r){return this.labels[a]=ua(this,r),this},n.removeLabel=function(a){return delete this.labels[a],this},n.addPause=function(a,r,s){var o=En.delayedCall(0,r||Qu,s);return o.data="isPause",this._hasPause=1,Ya(this,o,ua(this,a))},n.removePause=function(a){var r=this._first;for(a=ua(this,a);r;)r._start===a&&r.data==="isPause"&&Hs(r),r=r._next},n.killTweensOf=function(a,r,s){for(var o=this.getTweensOf(a,s),l=o.length;l--;)vs!==o[l]&&o[l].kill(a,r);return this},n.getTweensOf=function(a,r){for(var s=[],o=Ea(a),l=this._first,c=kr(r),u;l;)l instanceof En?M2(l._targets,o)&&(c?(!vs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},n.tweenTo=function(a,r){r=r||{};var s=this,o=ua(s,a),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,_=En.to(s,sa({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||Ht,onStart:function(){if(s.pause(),!h){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==m&&fc(_,m,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},r));return f?_.render(0):_},n.tweenFromTo=function(a,r,s){return this.tweenTo(r,sa({startAt:{time:ua(this,a)}},s))},n.recent=function(){return this._recent},n.nextLabel=function(a){return a===void 0&&(a=this._time),DS(this,ua(this,a))},n.previousLabel=function(a){return a===void 0&&(a=this._time),DS(this,ua(this,a),1)},n.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+Ht)},n.shiftChildren=function(a,r,s){s===void 0&&(s=0);var o=this._first,l=this.labels,c;for(a=$t(a);o;)o._start>=s&&(o._start+=a,o._end+=a),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=a);return Mo(this)},n.invalidate=function(a){var r=this._first;for(this._lock=0;r;)r.invalidate(a),r=r._next;return t.prototype.invalidate.call(this,a)},n.clear=function(a){a===void 0&&(a=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),Mo(this)},n.totalDuration=function(a){var r=0,s=this,o=s._last,l=Ma,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-a:a));if(s._dirty){for(d=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,Ya(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=$t(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;fc(s,s===en&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(a){if(en._ts&&(Sb(en,Dd(a,en)),vb=Yi.frame),Yi.frame>=AS){AS+=ta.autoSleep||120;var r=en._first;if((!r||!r._ts)&&ta.autoSleep&&Yi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Yi.sleep()}}},e}($u);sa(Ai.prototype,{_lock:0,_hasPause:0,_forcing:0});var Y2=function(e,n,i,a,r,s,o){var l=new Di(this._pt,e,n,0,1,Yb,null,r),c=0,u=0,d,f,h,_,v,m,p,g;for(l.b=i,l.e=a,i+="",a+="",(p=~a.indexOf("random("))&&(a=ju(a)),s&&(g=[i,a],s(g,e,n),i=g[0],a=g[1]),f=i.match(tm)||[];d=tm.exec(a);)_=d[0],v=a.substring(c,d.index),h?h=(h+1)%5:v.substr(-5)==="rgba("&&(h=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:m,c:_.charAt(1)==="="?Vl(m,_)-m:parseFloat(_)-m,m:h&&h<4?Math.round:0},c=tm.lastIndex);return l.c=c<a.length?a.substring(c,a.length):"",l.fp=o,(pb.test(a)||p)&&(l.e=0),this._pt=l,l},_v=function(e,n,i,a,r,s,o,l,c,u){cn(a)&&(a=a(r||0,e,s));var d=e[n],f=i!=="get"?i:cn(d)?c?e[n.indexOf("set")||!cn(e["get"+n.substr(3)])?n:"get"+n.substr(3)](c):e[n]():d,h=cn(d)?c?j2:Xb:vv,_;if(Vn(a)&&(~a.indexOf("random(")&&(a=ju(a)),a.charAt(1)==="="&&(_=Vl(f,a)+(ii(f)||0),(_||_===0)&&(a=_))),!u||f!==a||$_)return!isNaN(f*a)&&a!==""?(_=new Di(this._pt,e,n,+f||0,a-(f||0),typeof d=="boolean"?$2:Wb,0,h),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(n in e)&&fv(n,a),Y2.call(this,e,n,f,a,h,l||ta.stringFilter,c))},q2=function(e,n,i,a,r){if(cn(e)&&(e=bu(e,r,n,i,a)),!rr(e)||e.style&&e.nodeType||si(e)||hb(e))return Vn(e)?bu(e,r,n,i,a):e;var s={},o;for(o in e)s[o]=bu(e[o],r,n,i,a);return s},Gb=function(e,n,i,a,r,s){var o,l,c,u;if(Vi[e]&&(o=new Vi[e]).init(r,o.rawVars?n[e]:q2(n[e],a,r,s,i),i,a,s)!==!1&&(i._pt=l=new Di(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==Ll))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},vs,$_,gv=function t(e,n,i){var a=e.vars,r=a.ease,s=a.startAt,o=a.immediateRender,l=a.lazy,c=a.onUpdate,u=a.runBackwards,d=a.yoyoEase,f=a.keyframes,h=a.autoRevert,_=e._dur,v=e._startAt,m=e._targets,p=e.parent,g=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!ov,x=e.timeline,b=a.easeReverse||d,A,E,y,T,C,L,P,q,X,O,N,U,I;if(x&&(!f||!r)&&(r="none"),e._ease=Eo(r,Zu.ease),e._rEase=b&&(Eo(b)||e._ease),e._from=!x&&!!a.runBackwards,e._from&&(e.ratio=1),!x||f&&!a.stagger){if(q=m[0]?yo(m[0]).harness:0,U=q&&a[q.prop],A=wd(a,hv),v&&(v._zTime<0&&v.progress(1),n<0&&u&&o&&!h?v.render(-1,!0):v.revert(u&&_?Fh:S2),v._lazy=0),s){if(Hs(e._startAt=En.set(m,sa({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!v&&Ci(l),startAt:null,delay:0,onUpdate:c&&function(){return Ki(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Qn||!o&&!h)&&e._startAt.revert(Fh),o&&_&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(u&&_&&!v){if(n&&(o=!1),y=sa({overwrite:!1,data:"isFromStart",lazy:o&&!v&&Ci(l),immediateRender:o,stagger:0,parent:p},A),U&&(y[q.prop]=U),Hs(e._startAt=En.set(m,y)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Qn?e._startAt.revert(Fh):e._startAt.render(-1,!0)),e._zTime=n,!o)t(e._startAt,Ht,Ht);else if(!n)return}for(e._pt=e._ptCache=0,l=_&&Ci(l)||l&&!_,E=0;E<m.length;E++){if(C=m[E],P=C._gsap||pv(m)[E]._gsap,e._ptLookup[E]=O={},q_[P.id]&&Ls.length&&Cd(),N=g===m?E:g.indexOf(C),q&&(X=new q).init(C,U||A,e,N,g)!==!1&&(e._pt=T=new Di(e._pt,C,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(V){O[V]=T}),X.priority&&(L=1)),!q||U)for(y in A)Vi[y]&&(X=Gb(y,A,e,N,C,g))?X.priority&&(L=1):O[y]=T=_v.call(e,C,y,"get",A[y],N,g,0,a.stringFilter);e._op&&e._op[E]&&e.kill(C,e._op[E]),S&&e._pt&&(vs=e,en.killTweensOf(C,O,e.globalTime(n)),I=!e.parent,vs=0),e._pt&&l&&(q_[P.id]=1)}L&&qb(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!I,f&&n<=0&&x.render(Ma,!0,!0)},Z2=function(e,n,i,a,r,s,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[n],u,d,f,h;if(!c)for(c=e._ptCache[n]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return $_=1,e.vars[n]="+=0",gv(e,o),$_=0,l?Ku(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(a||a===0)&&!r?a:u.s+(a||0)+s*u.c,u.c=i-u.s,d.e&&(d.e=dn(i)+ii(d.e)),d.b&&(d.b=u.s+ii(d.b))},K2=function(e,n){var i=e[0]?yo(e[0]).harness:0,a=i&&i.aliases,r,s,o,l;if(!a)return n;r=cc({},n);for(s in a)if(s in r)for(l=a[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},Q2=function(e,n,i,a){var r=n.ease||a||"power1.inOut",s,o;if(si(n))o=i[e]||(i[e]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:r})});else for(s in n)o=i[s]||(i[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:n[s],e:r})},bu=function(e,n,i,a,r){return cn(e)?e.call(n,i,a,r):Vn(e)&&~e.indexOf("random(")?ju(e):e},Vb=dv+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",kb={};wi(Vb+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return kb[t]=1});var En=function(t){ub(e,t);function e(i,a,r,s){var o;typeof a=="number"&&(r.duration=a,a=r,r=null),o=t.call(this,s?a:Mu(a))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,_=l.keyframes,v=l.defaults,m=l.scrollTrigger,p=a.parent||en,g=(si(i)||hb(i)?kr(i[0]):"length"in a)?[i]:Ea(i),S,x,b,A,E,y,T,C;if(o._targets=g.length?pv(g):Ku("GSAP target "+i+" not found. https://gsap.com",!ta.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,_||f||Hf(c)||Hf(u)){a=o.vars;var L=a.easeReverse||a.yoyoEase;if(S=o.timeline=new Ai({data:"nested",defaults:v||{},targets:p&&p.data==="nested"?p.vars.targets:g}),S.kill(),S.parent=S._dp=Sr(o),S._start=0,f||Hf(c)||Hf(u)){if(A=g.length,T=f&&wb(f),rr(f))for(E in f)~Vb.indexOf(E)&&(C||(C={}),C[E]=f[E]);for(x=0;x<A;x++)b=wd(a,kb),b.stagger=0,L&&(b.easeReverse=L),C&&cc(b,C),y=g[x],b.duration=+bu(c,Sr(o),x,y,g),b.delay=(+bu(u,Sr(o),x,y,g)||0)-o._delay,!f&&A===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),S.to(y,b,T?T(x,y,g):0),S._ease=xt.none;S.duration()?c=u=0:o.timeline=0}else if(_){Mu(sa(S.vars.defaults,{ease:"none"})),S._ease=Eo(_.ease||a.ease||"none");var P=0,q,X,O;if(si(_))_.forEach(function(N){return S.to(g,N,">")}),S.duration();else{b={};for(E in _)E==="ease"||E==="easeEach"||Q2(E,_[E],b,_.easeEach);for(E in b)for(q=b[E].sort(function(N,U){return N.t-U.t}),P=0,x=0;x<q.length;x++)X=q[x],O={ease:X.e,duration:(X.t-(x?q[x-1].t:0))/100*c},O[E]=X.v,S.to(g,O,P),P+=O.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return h===!0&&!ov&&(vs=Sr(o),en.killTweensOf(g),vs=0),Ya(p,Sr(o),r),a.reversed&&o.reverse(),a.paused&&o.paused(!0),(d||!c&&!_&&o._start===$t(p._time)&&Ci(d)&&A2(Sr(o))&&p.data!=="nested")&&(o._tTime=-Ht,o.render(Math.max(0,-u)||0)),m&&Tb(Sr(o),m),o}var n=e.prototype;return n.render=function(a,r,s){var o=this._time,l=this._tDur,c=this._dur,u=a<0,d=a>l-Ht&&!u?l:a<Ht?0:a,f,h,_,v,m,p,g,S;if(!c)C2(this,a,r,s);else if(d!==this._tTime||!a||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,S=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+a,r,s);if(f=$t(d%v),d===l?(_=this._repeat,f=c):(m=$t(d/v),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(f=c-f),m=uc(this._tTime,v),f===o&&!s&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==v&&this._initted&&(this._lock=s=1,this.render($t(v*_),!0).invalidate()._lock=0)}if(!this._initted){if(Ab(this,u?a:f,s,r,d))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(a,r,s)}if(this._rEase){var x=f<o;if(x!==this._inv){var b=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(x?-1:1)/b:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=g=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=g=this._ease(f/c);if(this._from&&(this.ratio=g=1-g),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!r&&!m&&(Ki(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(g,h.d),h=h._next;S&&S.render(a<0?a:S._dur*S._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=a),this._onUpdate&&!r&&(u&&Z_(this,a,r,s),Ki(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Ki(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Z_(this,a,!0,!0),(a||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hs(this,1),!r&&!(u&&!o)&&(d||o||p)&&(Ki(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),t.prototype.invalidate.call(this,a)},n.resetTo=function(a,r,s,o,l){Ju||Yi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||gv(this,c),u=this._ease(c/this._dur),Z2(this,a,r,s,o,u,c,l)?this.resetTo(a,r,s,o,1):(hp(this,0),this.parent||Eb(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(a,r){if(r===void 0&&(r="all"),!a&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?$c(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qn),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(a,r,vs&&vs.vars.overwrite!==!0)._first||$c(this),this.parent&&s!==this.timeline.totalDuration()&&fc(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=a?Ea(a):o,c=this._ptLookup,u=this._pt,d,f,h,_,v,m,p;if((!r||r==="all")&&b2(o,l))return r==="all"&&(this._pt=0),$c(this);for(d=this._op=this._op||[],r!=="all"&&(Vn(r)&&(v={},wi(r,function(g){return v[g]=1}),r=v),r=K2(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(d[p]=r,_=f,h={}):(h=d[p]=d[p]||{},_=r);for(v in _)m=f&&f[v],m&&((!("kill"in m.d)||m.d.kill(v)===!0)&&up(this,m,"_pt"),delete f[v]),h!=="all"&&(h[v]=1)}return this._initted&&!this._pt&&u&&$c(this),this},e.to=function(a,r){return new e(a,r,arguments[2])},e.from=function(a,r){return Eu(1,arguments)},e.delayedCall=function(a,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(a,r,s){return Eu(2,arguments)},e.set=function(a,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(a,r)},e.killTweensOf=function(a,r,s){return en.killTweensOf(a,r,s)},e}($u);sa(En.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wi("staggerTo,staggerFrom,staggerFromTo",function(t){En[t]=function(){var e=new Ai,n=Q_.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var vv=function(e,n,i){return e[n]=i},Xb=function(e,n,i){return e[n](i)},j2=function(e,n,i,a){return e[n](a.fp,i)},J2=function(e,n,i){return e.setAttribute(n,i)},xv=function(e,n){return cn(e[n])?Xb:lv(e[n])&&e.setAttribute?J2:vv},Wb=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},$2=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},Yb=function(e,n){var i=n._pt,a="";if(!e&&n.b)a=n.b;else if(e===1&&n.e)a=n.e;else{for(;i;)a=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+a,i=i._next;a+=n.c}n.set(n.t,n.p,a,n)},Sv=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},ew=function(e,n,i,a){for(var r=this._pt,s;r;)s=r._next,r.p===a&&r.modifier(e,n,i),r=s},tw=function(e){for(var n=this._pt,i,a;n;)a=n._next,n.p===e&&!n.op||n.op===e?up(this,n,"_pt"):n.dep||(i=1),n=a;return!i},nw=function(e,n,i,a){a.mSet(e,n,a.m.call(a.tween,i,a.mt),a)},qb=function(e){for(var n=e._pt,i,a,r,s;n;){for(i=n._next,a=r;a&&a.pr>n.pr;)a=a._next;(n._prev=a?a._prev:s)?n._prev._next=n:r=n,(n._next=a)?a._prev=n:s=n,n=i}e._pt=r},Di=function(){function t(n,i,a,r,s,o,l,c,u){this.t=i,this.s=r,this.c=s,this.p=a,this.r=o||Wb,this.d=l||this,this.set=c||vv,this.pr=u||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,a,r){this.mSet=this.mSet||this.set,this.set=nw,this.m=i,this.mt=r,this.tween=a},t}();wi(dv+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return hv[t]=1});ra.TweenMax=ra.TweenLite=En;ra.TimelineLite=ra.TimelineMax=Ai;en=new Ai({sortChildren:!1,defaults:Zu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ta.stringFilter=zb;var bo=[],Bh={},iw=[],NS=0,aw=0,sm=function(e){return(Bh[e]||iw).map(function(n){return n()})},eg=function(){var e=Date.now(),n=[];e-NS>2&&(sm("matchMediaInit"),bo.forEach(function(i){var a=i.queries,r=i.conditions,s,o,l,c;for(o in a)s=ka.matchMedia(a[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(i.revert(),l&&n.push(i))}),sm("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(a){return i.add(null,a)})}),NS=e,sm("matchMedia"))},Zb=function(){function t(n,i){this.selector=i&&j_(i),this.data=[],this._r=[],this.isReverted=!1,this.id=aw++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,a,r){cn(i)&&(r=a,a=i,i=cn);var s=this,o=function(){var c=Jt,u=s.selector,d;return c&&c!==s&&c.data.push(s),r&&(s.selector=j_(r)),Jt=s,d=a.apply(s,arguments),cn(d)&&s._r.push(d),Jt=c,s.selector=u,s.isReverted=!1,d};return s.last=o,i===cn?o(s,function(l){return s.add(null,l)}):i?s[i]=o:o},e.ignore=function(i){var a=Jt;Jt=null,i(this),Jt=a},e.getTweens=function(){var i=[];return this.data.forEach(function(a){return a instanceof t?i.push.apply(i,a.getTweens()):a instanceof En&&!(a.parent&&a.parent.data==="nested")&&i.push(a)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,a){var r=this;if(i?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ai?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof En)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),a)for(var s=bo.length;s--;)bo[s].id===this.id&&bo.splice(s,1)},e.revert=function(i){this.kill(i||{})},t}(),rw=function(){function t(n){this.contexts=[],this.scope=n,Jt&&Jt.data.push(this)}var e=t.prototype;return e.add=function(i,a,r){rr(i)||(i={matches:i});var s=new Zb(0,r||this.scope),o=s.conditions={},l,c,u;Jt&&!s.selector&&(s.selector=Jt.selector),this.contexts.push(s),a=s.add("onMatch",a),s.queries=i;for(c in i)c==="all"?u=1:(l=ka.matchMedia(i[c]),l&&(bo.indexOf(s)<0&&bo.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(eg):l.addEventListener("change",eg)));return u&&a(s,function(d){return s.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(a){return a.kill(i,!0)})},t}(),Ud={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(a){return Pb(a)})},timeline:function(e){return new Ai(e)},getTweensOf:function(e,n){return en.getTweensOf(e,n)},getProperty:function(e,n,i,a){Vn(e)&&(e=Ea(e)[0]);var r=yo(e||{}).get,s=i?Mb:yb;return i==="native"&&(i=""),e&&(n?s((Vi[n]&&Vi[n].get||r)(e,n,i,a)):function(o,l,c){return s((Vi[o]&&Vi[o].get||r)(e,o,l,c))})},quickSetter:function(e,n,i){if(e=Ea(e),e.length>1){var a=e.map(function(u){return Oi.quickSetter(u,n,i)}),r=a.length;return function(u){for(var d=r;d--;)a[d](u)}}e=e[0]||{};var s=Vi[n],o=yo(e),l=o.harness&&(o.harness.aliases||{})[n]||n,c=s?function(u){var d=new s;Ll._pt=0,d.init(e,i?u+i:u,Ll,0,[e]),d.render(1,d),Ll._pt&&Sv(1,Ll)}:o.set(e,l);return s?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,n,i){var a,r=Oi.to(e,sa((a={},a[n]="+=0.1",a.paused=!0,a.stagger=0,a),i||{})),s=function(l,c,u){return r.resetTo(n,l,c,u)};return s.tween=r,s},isTweening:function(e){return en.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Eo(e.ease,Zu.ease)),RS(Zu,e||{})},config:function(e){return RS(ta,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,a=e.plugins,r=e.defaults,s=e.extendTimeline;(a||"").split(",").forEach(function(o){return o&&!Vi[o]&&!ra[o]&&Ku(n+" effect requires "+o+" plugin.")}),nm[n]=function(o,l,c){return i(Ea(o),sa(l||{},r),c)},s&&(Ai.prototype[n]=function(o,l,c){return this.add(nm[n](o,rr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,n){xt[e]=Eo(n)},parseEase:function(e,n){return arguments.length?Eo(e,n):xt},getById:function(e){return en.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new Ai(e),a,r;for(i.smoothChildTiming=Ci(e.smoothChildTiming),en.remove(i),i._dp=0,i._time=i._tTime=en._time,a=en._first;a;)r=a._next,(n||!(!a._dur&&a instanceof En&&a.vars.onComplete===a._targets[0]))&&Ya(i,a,a._start-a._delay),a=r;return Ya(en,i,0),i},context:function(e,n){return e?new Zb(e,n):Jt},matchMedia:function(e){return new rw(e)},matchMediaRefresh:function(){return bo.forEach(function(e){var n=e.conditions,i,a;for(a in n)n[a]&&(n[a]=!1,i=1);i&&e.revert()})||eg()},addEventListener:function(e,n){var i=Bh[e]||(Bh[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=Bh[e],a=i&&i.indexOf(n);a>=0&&i.splice(a,1)},utils:{wrap:I2,wrapYoyo:F2,distribute:wb,random:Ub,snap:Db,normalize:P2,getUnit:ii,clamp:U2,splitColor:Ib,toArray:Ea,selector:j_,mapRange:Lb,pipe:L2,unitize:O2,interpolate:z2,shuffle:Cb},install:_b,effects:nm,ticker:Yi,updateRoot:Ai.updateRoot,plugins:Vi,globalTimeline:en,core:{PropTween:Di,globals:gb,Tween:En,Timeline:Ai,Animation:$u,getCache:yo,_removeLinkedListItem:up,reverting:function(){return Qn},context:function(e){return e&&Jt&&(Jt.data.push(e),e._ctx=Jt),Jt},suppressOverwrites:function(e){return ov=e}}};wi("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Ud[t]=En[t]});Yi.add(Ai.updateRoot);Ll=Ud.to({},{duration:0});var sw=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},ow=function(e,n){var i=e._targets,a,r,s;for(a in n)for(r=i.length;r--;)s=e._ptLookup[r][a],s&&(s=s.d)&&(s._pt&&(s=sw(s,a)),s&&s.modifier&&s.modifier(n[a],e,i[r],a))},om=function(e,n){return{name:e,headless:1,rawVars:1,init:function(a,r,s){s._onInit=function(o){var l,c;if(Vn(r)&&(l={},wi(r,function(u){return l[u]=1}),r=l),n){l={};for(c in r)l[c]=n(r[c]);r=l}ow(o,r)}}}},Oi=Ud.registerPlugin({name:"attr",init:function(e,n,i,a,r){var s,o,l;this.tween=i;for(s in n)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",n[s],a,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,n){for(var i=n._pt;i;)Qn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},om("roundProps",J_),om("modifiers"),om("snap",Db))||Ud;En.version=Ai.version=Oi.version="3.15.0";mb=1;cv()&&hc();xt.Power0;xt.Power1;xt.Power2;xt.Power3;xt.Power4;xt.Linear;xt.Quad;xt.Cubic;xt.Quart;xt.Quint;xt.Strong;xt.Elastic;xt.Back;xt.SteppedEase;xt.Bounce;xt.Sine;xt.Expo;xt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var LS,xs,kl,yv,fo,OS,Mv,lw=function(){return typeof window<"u"},Xr={},ro=180/Math.PI,Xl=Math.PI/180,jo=Math.atan2,PS=1e8,Ev=/([A-Z])/g,cw=/(left|right|width|margin|padding|x)/i,uw=/[\s,\(]\S/,Qa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tg=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},fw=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},hw=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},dw=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},pw=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},Kb=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},Qb=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},mw=function(e,n,i){return e.style[n]=i},_w=function(e,n,i){return e.style.setProperty(n,i)},gw=function(e,n,i){return e._gsap[n]=i},vw=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},xw=function(e,n,i,a,r){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(r,s)},Sw=function(e,n,i,a,r){var s=e._gsap;s[n]=i,s.renderTransform(r,s)},tn="transform",Ui=tn+"Origin",yw=function t(e,n){var i=this,a=this.target,r=a.style,s=a._gsap;if(e in Xr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Qa[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Mr(a,o)}):this.tfm[e]=s.x?s[e]:Mr(a,e),e===Ui&&(this.tfm.zOrigin=s.zOrigin);else return Qa.transform.split(",").forEach(function(o){return t.call(i,o,n)});if(this.props.indexOf(tn)>=0)return;s.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(Ui,n,"")),e=tn}(r||n)&&this.props.push(e,n,r[e])},jb=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Mw=function(){var e=this.props,n=this.target,i=n.style,a=n._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?n[e[r]](e[r+2]):n[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Ev,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)a[s]=this.tfm[s];a.svg&&(a.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),r=Mv(),(!r||!r.isStart)&&!i[tn]&&(jb(i),a.zOrigin&&i[Ui]&&(i[Ui]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},Jb=function(e,n){var i={target:e,props:[],revert:Mw,save:yw};return e._gsap||Oi.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(a){return i.save(a)}),i},$b,ng=function(e,n){var i=xs.createElementNS?xs.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xs.createElement(e);return i&&i.style?i:xs.createElement(e)},Qi=function t(e,n,i){var a=getComputedStyle(e);return a[n]||a.getPropertyValue(n.replace(Ev,"-$1").toLowerCase())||a.getPropertyValue(n)||!i&&t(e,dc(n)||n,1)||""},IS="O,Moz,ms,Ms,Webkit".split(","),dc=function(e,n,i){var a=n||fo,r=a.style,s=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(IS[s]+e in r););return s<0?null:(s===3?"ms":s>=0?IS[s]:"")+e},ig=function(){lw()&&window.document&&(LS=window,xs=LS.document,kl=xs.documentElement,fo=ng("div")||{style:{}},ng("div"),tn=dc(tn),Ui=tn+"Origin",fo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$b=!!dc("perspective"),Mv=Oi.core.reverting,yv=1)},FS=function(e){var n=e.ownerSVGElement,i=ng("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0),r;a.style.display="block",i.appendChild(a),kl.appendChild(i);try{r=a.getBBox()}catch{}return i.removeChild(a),kl.removeChild(i),r},zS=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},eT=function(e){var n,i;try{n=e.getBBox()}catch{n=FS(e),i=1}return n&&(n.width||n.height)||i||(n=FS(e)),n&&!n.width&&!n.x&&!n.y?{x:+zS(e,["x","cx","x1"])||0,y:+zS(e,["y","cy","y1"])||0,width:0,height:0}:n},tT=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&eT(e))},Gs=function(e,n){if(n){var i=e.style,a;n in Xr&&n!==Ui&&(n=tn),i.removeProperty?(a=n.substr(0,2),(a==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(a==="--"?n:n.replace(Ev,"-$1").toLowerCase())):i.removeAttribute(n)}},Ss=function(e,n,i,a,r,s){var o=new Di(e._pt,n,i,0,1,s?Qb:Kb);return e._pt=o,o.b=a,o.e=r,e._props.push(i),o},BS={deg:1,rad:1,turn:1},Ew={grid:1,flex:1},Vs=function t(e,n,i,a){var r=parseFloat(i)||0,s=(i+"").trim().substr((r+"").length)||"px",o=fo.style,l=cw.test(n),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=a==="px",h=a==="%",_,v,m,p;if(a===s||!r||BS[a]||BS[s])return r;if(s!=="px"&&!f&&(r=t(e,n,i,"px")),p=e.getCTM&&tT(e),(h||s==="%")&&(Xr[n]||~n.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],dn(h?r/_*d:r/100*_);if(o[l?"width":"height"]=d+(f?s:a),v=a!=="rem"&&~n.indexOf("adius")||a==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===xs||!v.appendChild)&&(v=xs.body),m=v._gsap,m&&h&&m.width&&l&&m.time===Yi.time&&!m.uncache)return dn(r/m.width*d);if(h&&(n==="height"||n==="width")){var g=e.style[n];e.style[n]=d+a,_=e[u],g?e.style[n]=g:Gs(e,n)}else(h||s==="%")&&!Ew[Qi(v,"display")]&&(o.position=Qi(e,"position")),v===e&&(o.position="static"),v.appendChild(fo),_=fo[u],v.removeChild(fo),o.position="absolute";return l&&h&&(m=yo(v),m.time=Yi.time,m.width=v[u]),dn(f?_*r/d:_&&r?d/_*r:0)},Mr=function(e,n,i,a){var r;return yv||ig(),n in Qa&&n!=="transform"&&(n=Qa[n],~n.indexOf(",")&&(n=n.split(",")[0])),Xr[n]&&n!=="transform"?(r=tf(e,a),r=n!=="transformOrigin"?r[n]:r.svg?r.origin:Ld(Qi(e,Ui))+" "+r.zOrigin+"px"):(r=e.style[n],(!r||r==="auto"||a||~(r+"").indexOf("calc("))&&(r=Nd[n]&&Nd[n](e,n,i)||Qi(e,n)||xb(e,n)||(n==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Vs(e,n,r,i)+i:r},bw=function(e,n,i,a){if(!i||i==="none"){var r=dc(n,e,1),s=r&&Qi(e,r,1);s&&s!==i?(n=r,i=s):n==="borderColor"&&(i=Qi(e,"borderTopColor"))}var o=new Di(this._pt,e.style,n,0,1,Yb),l=0,c=0,u,d,f,h,_,v,m,p,g,S,x,b;if(o.b=i,o.e=a,i+="",a+="",a.substring(0,6)==="var(--"&&(a=Qi(e,a.substring(4,a.indexOf(")")))),a==="auto"&&(v=e.style[n],e.style[n]=a,a=Qi(e,n)||a,v?e.style[n]=v:Gs(e,n)),u=[i,a],zb(u),i=u[0],a=u[1],f=i.match(Nl)||[],b=a.match(Nl)||[],b.length){for(;d=Nl.exec(a);)m=d[0],g=a.substring(l,d.index),_?_=(_+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(_=1),m!==(v=f[c++]||"")&&(h=parseFloat(v)||0,x=v.substr((h+"").length),m.charAt(1)==="="&&(m=Vl(h,m)+x),p=parseFloat(m),S=m.substr((p+"").length),l=Nl.lastIndex-S.length,S||(S=S||ta.units[n]||x,l===a.length&&(a+=S,o.e+=S)),x!==S&&(h=Vs(e,n,v,S)||0),o._pt={_next:o._pt,p:g||c===1?g:",",s:h,c:p-h,m:_&&_<4||n==="zIndex"?Math.round:0});o.c=l<a.length?a.substring(l,a.length):""}else o.r=n==="display"&&a==="none"?Qb:Kb;return pb.test(a)&&(o.e=0),this._pt=o,o},HS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Tw=function(e){var n=e.split(" "),i=n[0],a=n[1]||"50%";return(i==="top"||i==="bottom"||a==="left"||a==="right")&&(e=i,i=a,a=e),n[0]=HS[i]||i,n[1]=HS[a]||a,n.join(" ")},Aw=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,a=i.style,r=n.u,s=i._gsap,o,l,c;if(r==="all"||r===!0)a.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Xr[o]&&(l=1,o=o==="transformOrigin"?Ui:tn),Gs(i,o);l&&(Gs(i,tn),s&&(s.svg&&i.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",tf(i,1),s.uncache=1,jb(a)))}},Nd={clearProps:function(e,n,i,a,r){if(r.data!=="isFromStart"){var s=e._pt=new Di(e._pt,n,i,0,0,Aw);return s.u=a,s.pr=-10,s.tween=r,e._props.push(i),1}}},ef=[1,0,0,1,0,0],nT={},iT=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},GS=function(e){var n=Qi(e,tn);return iT(n)?ef:n.substr(7).match(db).map(dn)},bv=function(e,n){var i=e._gsap||yo(e),a=e.style,r=GS(e),s,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ef:r):(r===ef&&!e.offsetParent&&e!==kl&&!i.svg&&(l=a.display,a.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,kl.appendChild(e)),r=GS(e),l?a.display=l:Gs(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):kl.removeChild(e))),n&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ag=function(e,n,i,a,r,s){var o=e._gsap,l=r||bv(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],_=l[1],v=l[2],m=l[3],p=l[4],g=l[5],S=n.split(" "),x=parseFloat(S[0])||0,b=parseFloat(S[1])||0,A,E,y,T;i?l!==ef&&(E=h*m-_*v)&&(y=x*(m/E)+b*(-v/E)+(v*g-m*p)/E,T=x*(-_/E)+b*(h/E)-(h*g-_*p)/E,x=y,b=T):(A=eT(e),x=A.x+(~S[0].indexOf("%")?x/100*A.width:x),b=A.y+(~(S[1]||S[0]).indexOf("%")?b/100*A.height:b)),a||a!==!1&&o.smooth?(p=x-c,g=b-u,o.xOffset=d+(p*h+g*v)-p,o.yOffset=f+(p*_+g*m)-g):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=b,o.smooth=!!a,o.origin=n,o.originIsAbsolute=!!i,e.style[Ui]="0px 0px",s&&(Ss(s,o,"xOrigin",c,x),Ss(s,o,"yOrigin",u,b),Ss(s,o,"xOffset",d,o.xOffset),Ss(s,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+b)},tf=function(e,n){var i=e._gsap||new Hb(e);if("x"in i&&!n&&!i.uncache)return i;var a=e.style,r=i.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=Qi(e,Ui)||"0",u,d,f,h,_,v,m,p,g,S,x,b,A,E,y,T,C,L,P,q,X,O,N,U,I,V,D,ie,fe,Be,Le,Ne;return u=d=f=v=m=p=g=S=x=0,h=_=1,i.svg=!!(e.getCTM&&tT(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(a[tn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[tn]!=="none"?l[tn]:"")),a.scale=a.rotate=a.translate="none"),E=bv(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),c=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",U=""):U=!n&&e.getAttribute("data-svg-origin"),ag(e,U||c,!!U||i.originIsAbsolute,i.smooth!==!1,E)),b=i.xOrigin||0,A=i.yOrigin||0,E!==ef&&(L=E[0],P=E[1],q=E[2],X=E[3],u=O=E[4],d=N=E[5],E.length===6?(h=Math.sqrt(L*L+P*P),_=Math.sqrt(X*X+q*q),v=L||P?jo(P,L)*ro:0,g=q||X?jo(q,X)*ro+v:0,g&&(_*=Math.abs(Math.cos(g*Xl))),i.svg&&(u-=b-(b*L+A*q),d-=A-(b*P+A*X))):(Ne=E[6],Be=E[7],D=E[8],ie=E[9],fe=E[10],Le=E[11],u=E[12],d=E[13],f=E[14],y=jo(Ne,fe),m=y*ro,y&&(T=Math.cos(-y),C=Math.sin(-y),U=O*T+D*C,I=N*T+ie*C,V=Ne*T+fe*C,D=O*-C+D*T,ie=N*-C+ie*T,fe=Ne*-C+fe*T,Le=Be*-C+Le*T,O=U,N=I,Ne=V),y=jo(-q,fe),p=y*ro,y&&(T=Math.cos(-y),C=Math.sin(-y),U=L*T-D*C,I=P*T-ie*C,V=q*T-fe*C,Le=X*C+Le*T,L=U,P=I,q=V),y=jo(P,L),v=y*ro,y&&(T=Math.cos(y),C=Math.sin(y),U=L*T+P*C,I=O*T+N*C,P=P*T-L*C,N=N*T-O*C,L=U,O=I),m&&Math.abs(m)+Math.abs(v)>359.9&&(m=v=0,p=180-p),h=dn(Math.sqrt(L*L+P*P+q*q)),_=dn(Math.sqrt(N*N+Ne*Ne)),y=jo(O,N),g=Math.abs(y)>2e-4?y*ro:0,x=Le?1/(Le<0?-Le:Le):0),i.svg&&(U=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!iT(Qi(e,tn)),U&&e.setAttribute("transform",U))),Math.abs(g)>90&&Math.abs(g)<270&&(r?(h*=-1,g+=v<=0?180:-180,v+=v<=0?180:-180):(_*=-1,g+=g<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+s,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+s,i.z=f+s,i.scaleX=dn(h),i.scaleY=dn(_),i.rotation=dn(v)+o,i.rotationX=dn(m)+o,i.rotationY=dn(p)+o,i.skewX=g+o,i.skewY=S+o,i.transformPerspective=x+s,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(a[Ui]=Ld(c)),i.xOffset=i.yOffset=0,i.force3D=ta.force3D,i.renderTransform=i.svg?Cw:$b?aT:Rw,i.uncache=0,i},Ld=function(e){return(e=e.split(" "))[0]+" "+e[1]},lm=function(e,n,i){var a=ii(n);return dn(parseFloat(n)+parseFloat(Vs(e,"x",i+"px",a)))+a},Rw=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,aT(e,n)},Ks="0deg",Ic="0px",Qs=") ",aT=function(e,n){var i=n||this,a=i.xPercent,r=i.yPercent,s=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,_=i.scaleX,v=i.scaleY,m=i.transformPerspective,p=i.force3D,g=i.target,S=i.zOrigin,x="",b=p==="auto"&&e&&e!==1||p===!0;if(S&&(d!==Ks||u!==Ks)){var A=parseFloat(u)*Xl,E=Math.sin(A),y=Math.cos(A),T;A=parseFloat(d)*Xl,T=Math.cos(A),s=lm(g,s,E*T*-S),o=lm(g,o,-Math.sin(A)*-S),l=lm(g,l,y*T*-S+S)}m!==Ic&&(x+="perspective("+m+Qs),(a||r)&&(x+="translate("+a+"%, "+r+"%) "),(b||s!==Ic||o!==Ic||l!==Ic)&&(x+=l!==Ic||b?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+Qs),c!==Ks&&(x+="rotate("+c+Qs),u!==Ks&&(x+="rotateY("+u+Qs),d!==Ks&&(x+="rotateX("+d+Qs),(f!==Ks||h!==Ks)&&(x+="skew("+f+", "+h+Qs),(_!==1||v!==1)&&(x+="scale("+_+", "+v+Qs),g.style[tn]=x||"translate(0, 0)"},Cw=function(e,n){var i=n||this,a=i.xPercent,r=i.yPercent,s=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,_=i.xOrigin,v=i.yOrigin,m=i.xOffset,p=i.yOffset,g=i.forceCSS,S=parseFloat(s),x=parseFloat(o),b,A,E,y,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Xl,c*=Xl,b=Math.cos(l)*d,A=Math.sin(l)*d,E=Math.sin(l-c)*-f,y=Math.cos(l-c)*f,c&&(u*=Xl,T=Math.tan(c-u),T=Math.sqrt(1+T*T),E*=T,y*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),b*=T,A*=T)),b=dn(b),A=dn(A),E=dn(E),y=dn(y)):(b=d,y=f,A=E=0),(S&&!~(s+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(S=Vs(h,"x",s,"px"),x=Vs(h,"y",o,"px")),(_||v||m||p)&&(S=dn(S+_-(_*b+v*E)+m),x=dn(x+v-(_*A+v*y)+p)),(a||r)&&(T=h.getBBox(),S=dn(S+a/100*T.width),x=dn(x+r/100*T.height)),T="matrix("+b+","+A+","+E+","+y+","+S+","+x+")",h.setAttribute("transform",T),g&&(h.style[tn]=T)},ww=function(e,n,i,a,r){var s=360,o=Vn(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?ro:1),c=l-a,u=a+c+"deg",d,f;return o&&(d=r.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),d==="cw"&&c<0?c=(c+s*PS)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*PS)%s-~~(c/s)*s)),e._pt=f=new Di(e._pt,n,i,a,c,fw),f.e=u,f.u="deg",e._props.push(i),f},VS=function(e,n){for(var i in n)e[i]=n[i];return e},Dw=function(e,n,i){var a=VS({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,l,c,u,d,f,h,_;a.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),s[tn]=n,o=tf(i,1),Gs(i,tn),i.setAttribute("transform",c)):(c=getComputedStyle(i)[tn],s[tn]=n,o=tf(i,1),s[tn]=c);for(l in Xr)c=a[l],u=o[l],c!==u&&r.indexOf(l)<0&&(h=ii(c),_=ii(u),d=h!==_?Vs(i,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Di(e._pt,o,l,d,f-d,tg),e._pt.u=_||0,e._props.push(l));VS(o,a)};wi("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",a="Bottom",r="Left",s=(e<3?[n,i,a,r]:[n+r,n+i,a+i,a+r]).map(function(o){return e<2?t+o:"border"+o+t});Nd[e>1?"border"+t:t]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=s.map(function(_){return Mr(o,_,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},s.forEach(function(_,v){return h[_]=f[v]=f[v]||f[(v-1)/2|0]}),o.init(l,h,d)}});var rT={name:"css",register:ig,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,a,r){var s=this._props,o=e.style,l=i.vars.startAt,c,u,d,f,h,_,v,m,p,g,S,x,b,A,E,y,T;yv||ig(),this.styles=this.styles||Jb(e),y=this.styles.props,this.tween=i;for(v in n)if(v!=="autoRound"&&(u=n[v],!(Vi[v]&&Gb(v,n,i,a,e,r)))){if(h=typeof u,_=Nd[v],h==="function"&&(u=u.call(i,a,e,r),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=ju(u)),_)_(this,e,v,u,i)&&(E=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",Os.lastIndex=0,Os.test(c)||(m=ii(c),p=ii(u),p?m!==p&&(c=Vs(e,v,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,a,r,0,0,v),s.push(v),y.push(v,0,o[v]);else if(h!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(i,a,e,r):l[v],Vn(c)&&~c.indexOf("random(")&&(c=ju(c)),ii(c+"")||c==="auto"||(c+=ta.units[v]||ii(Mr(e,v))||""),(c+"").charAt(1)==="="&&(c=Mr(e,v))):c=Mr(e,v),f=parseFloat(c),g=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),g&&(u=u.substr(2)),d=parseFloat(u),v in Qa&&(v==="autoAlpha"&&(f===1&&Mr(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,o.visibility),Ss(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=Qa[v],~v.indexOf(",")&&(v=v.split(",")[0]))),S=v in Xr,S){if(this.styles.save(v),T=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Qi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=u,u=Qi(e,"perspective"),C?e.style.perspective=C:Gs(e,"perspective")}d=parseFloat(u)}if(x||(b=e._gsap,b.renderTransform&&!n.parseTransform||tf(e,n.parseTransform),A=n.smoothOrigin!==!1&&b.smooth,x=this._pt=new Di(this._pt,o,tn,0,1,b.renderTransform,b,0,-1),x.dep=1),v==="scale")this._pt=new Di(this._pt,b,"scaleY",b.scaleY,(g?Vl(b.scaleY,g+d):d)-b.scaleY||0,tg),this._pt.u=0,s.push("scaleY",v),v+="X";else if(v==="transformOrigin"){y.push(Ui,0,o[Ui]),u=Tw(u),b.svg?ag(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&Ss(this,b,"zOrigin",b.zOrigin,p),Ss(this,o,v,Ld(c),Ld(u)));continue}else if(v==="svgOrigin"){ag(e,u,1,A,0,this);continue}else if(v in nT){ww(this,b,v,f,g?Vl(f,g+u):u);continue}else if(v==="smoothOrigin"){Ss(this,b,"smooth",b.smooth,u);continue}else if(v==="force3D"){b[v]=u;continue}else if(v==="transform"){Dw(this,u,e);continue}}else v in o||(v=dc(v)||v);if(S||(d||d===0)&&(f||f===0)&&!uw.test(u)&&v in o)m=(c+"").substr((f+"").length),d||(d=0),p=ii(u)||(v in ta.units?ta.units[v]:m),m!==p&&(f=Vs(e,v,c,p)),this._pt=new Di(this._pt,S?b:o,v,f,(g?Vl(f,g+d):d)-f,!S&&(p==="px"||v==="zIndex")&&n.autoRound!==!1?pw:tg),this._pt.u=p||0,S&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=dw):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=hw);else if(v in o)bw.call(this,e,v,c,g?g+u:u);else if(v in e)this.add(e,v,c||e[v],g?g+u:u,a,r);else if(v!=="parseTransform"){fv(v,u);continue}S||(v in o?y.push(v,0,o[v]):typeof e[v]=="function"?y.push(v,2,e[v]()):y.push(v,1,c||e[v])),s.push(v)}}E&&qb(this)},render:function(e,n){if(n.tween._time||!Mv())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:Mr,aliases:Qa,getSetter:function(e,n,i){var a=Qa[n];return a&&a.indexOf(",")<0&&(n=a),n in Xr&&n!==Ui&&(e._gsap.x||Mr(e,"x"))?i&&OS===i?n==="scale"?vw:gw:(OS=i||{})&&(n==="scale"?xw:Sw):e.style&&!lv(e.style[n])?mw:~n.indexOf("-")?_w:xv(e,n)},core:{_removeProperty:Gs,_getMatrix:bv}};Oi.utils.checkPrefix=dc;Oi.core.getStyleSaver=Jb;(function(t,e,n,i){var a=wi(t+","+e+","+n,function(r){Xr[r]=1});wi(e,function(r){ta.units[r]="deg",nT[r]=1}),Qa[a[13]]=t+","+e,wi(i,function(r){var s=r.split(":");Qa[s[1]]=a[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){ta.units[t]="px"});Oi.registerPlugin(rT);var rt=Oi.registerPlugin(rT)||Oi;rt.core.Tween;function Uw(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Nw(t,e,n){return e&&Uw(t.prototype,e),t}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qn,Hh,qi,ys,Ms,Wl,sT,so,Yl,oT,wr,Na,lT,cT=function(){return qn||typeof window<"u"&&(qn=window.gsap)&&qn.registerPlugin&&qn},uT=1,Ol=[],lt=[],tr=[],Tu=Date.now,rg=function(e,n){return n},Lw=function(){var e=Yl.core,n=e.bridge||{},i=e._scrollers,a=e._proxies;i.push.apply(i,lt),a.push.apply(a,tr),lt=i,tr=a,rg=function(s,o){return n[s](o)}},Ps=function(e,n){return~tr.indexOf(e)&&tr[tr.indexOf(e)+1][n]},Au=function(e){return!!~oT.indexOf(e)},ui=function(e,n,i,a,r){return e.addEventListener(n,i,{passive:a!==!1,capture:!!r})},ci=function(e,n,i,a){return e.removeEventListener(n,i,!!a)},Gf="scrollLeft",Vf="scrollTop",sg=function(){return wr&&wr.isPressed||lt.cache++},Od=function(e,n){var i=function a(r){if(r||r===0){uT&&(qi.history.scrollRestoration="manual");var s=wr&&wr.isPressed;r=a.v=Math.round(r)||(wr&&wr.iOS?1:0),e(r),a.cacheID=lt.cache,s&&rg("ss",r)}else(n||lt.cache!==a.cacheID||rg("ref"))&&(a.cacheID=lt.cache,a.v=e());return a.v+a.offset};return i.offset=0,e&&i},_i={s:Gf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Od(function(t){return arguments.length?qi.scrollTo(t,wn.sc()):qi.pageXOffset||ys[Gf]||Ms[Gf]||Wl[Gf]||0})},wn={s:Vf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_i,sc:Od(function(t){return arguments.length?qi.scrollTo(_i.sc(),t):qi.pageYOffset||ys[Vf]||Ms[Vf]||Wl[Vf]||0})},Ti=function(e,n){return(n&&n._ctx&&n._ctx.selector||qn.utils.toArray)(e)[0]||(typeof e=="string"&&qn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ow=function(e,n){for(var i=n.length;i--;)if(n[i]===e||n[i].contains(e))return!0;return!1},ks=function(e,n){var i=n.s,a=n.sc;Au(e)&&(e=ys.scrollingElement||Ms);var r=lt.indexOf(e),s=a===wn.sc?1:2;!~r&&(r=lt.push(e)-1),lt[r+s]||ui(e,"scroll",sg);var o=lt[r+s],l=o||(lt[r+s]=Od(Ps(e,i),!0)||(Au(e)?a:Od(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,o||(l.smooth=qn.getProperty(e,"scrollBehavior")==="smooth"),l},og=function(e,n,i){var a=e,r=e,s=Tu(),o=s,l=n||50,c=Math.max(500,l*3),u=function(_,v){var m=Tu();v||m-s>l?(r=a,a=_,o=s,s=m):i?a+=_:a=r+(_-r)/(m-o)*(s-o)},d=function(){r=a=i?0:a,o=s=0},f=function(_){var v=o,m=r,p=Tu();return(_||_===0)&&_!==a&&u(_),s===o||p-o>c?0:(a+(i?m:-m))/((i?p:s)-v)*1e3};return{update:u,reset:d,getVelocity:f}},Fc=function(e,n){return n&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kS=function(e){var n=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(i)?n:i},fT=function(){Yl=qn.core.globals().ScrollTrigger,Yl&&Yl.core&&Lw()},hT=function(e){return qn=e||cT(),!Hh&&qn&&typeof document<"u"&&document.body&&(qi=window,ys=document,Ms=ys.documentElement,Wl=ys.body,oT=[qi,ys,Ms,Wl],qn.utils.clamp,lT=qn.core.context||function(){},so="onpointerenter"in Wl?"pointer":"mouse",sT=mn.isTouch=qi.matchMedia&&qi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in qi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Na=mn.eventTypes=("ontouchstart"in Ms?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ms?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return uT=0},500),Hh=1),Yl||fT(),Hh};_i.op=wn;lt.cache=0;var mn=function(){function t(n){this.init(n)}var e=t.prototype;return e.init=function(i){Hh||hT(qn)||console.warn("Please gsap.registerPlugin(Observer)"),Yl||fT();var a=i.tolerance,r=i.dragMinimum,s=i.type,o=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,_=i.wheelSpeed,v=i.event,m=i.onDragStart,p=i.onDragEnd,g=i.onDrag,S=i.onPress,x=i.onRelease,b=i.onRight,A=i.onLeft,E=i.onUp,y=i.onDown,T=i.onChangeX,C=i.onChangeY,L=i.onChange,P=i.onToggleX,q=i.onToggleY,X=i.onHover,O=i.onHoverEnd,N=i.onMove,U=i.ignoreCheck,I=i.isNormalizer,V=i.onGestureStart,D=i.onGestureEnd,ie=i.onWheel,fe=i.onEnable,Be=i.onDisable,Le=i.onClick,Ne=i.scrollSpeed,J=i.capture,oe=i.allowClicks,te=i.lockAxis,Te=i.onLockAxis;this.target=o=Ti(o)||Ms,this.vars=i,h&&(h=qn.utils.toArray(h)),a=a||1e-9,r=r||0,_=_||1,Ne=Ne||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(qi.getComputedStyle(Wl).lineHeight)||22);var Ce,_e,Ke,ye,Pe,He,Xe,Z=this,ct=0,bt=0,Nt=i.passive||!u&&i.passive!==!1,Qe=ks(o,_i),Tt=ks(o,wn),z=Qe(),nn=Tt(),Ye=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Na[0]==="pointerdown",w=Au(o),M=o.ownerDocument||ys,H=[0,0,0],W=[0,0,0],j=0,de=function(){return j=Tu()},ue=function(se,Ve){return(Z.event=se)&&h&&Ow(se.target,h)||Ve&&Ye&&se.pointerType!=="touch"||U&&U(se,Ve)},$=function(){Z._vx.reset(),Z._vy.reset(),_e.pause(),d&&d(Z)},ee=function(){var se=Z.deltaX=kS(H),Ve=Z.deltaY=kS(W),ce=Math.abs(se)>=a,ke=Math.abs(Ve)>=a;L&&(ce||ke)&&L(Z,se,Ve,H,W),ce&&(b&&Z.deltaX>0&&b(Z),A&&Z.deltaX<0&&A(Z),T&&T(Z),P&&Z.deltaX<0!=ct<0&&P(Z),ct=Z.deltaX,H[0]=H[1]=H[2]=0),ke&&(y&&Z.deltaY>0&&y(Z),E&&Z.deltaY<0&&E(Z),C&&C(Z),q&&Z.deltaY<0!=bt<0&&q(Z),bt=Z.deltaY,W[0]=W[1]=W[2]=0),(ye||Ke)&&(N&&N(Z),Ke&&(m&&Ke===1&&m(Z),g&&g(Z),Ke=0),ye=!1),He&&!(He=!1)&&Te&&Te(Z),Pe&&(ie(Z),Pe=!1),Ce=0},ge=function(se,Ve,ce){H[ce]+=se,W[ce]+=Ve,Z._vx.update(se),Z._vy.update(Ve),c?Ce||(Ce=requestAnimationFrame(ee)):ee()},De=function(se,Ve){te&&!Xe&&(Z.axis=Xe=Math.abs(se)>Math.abs(Ve)?"x":"y",He=!0),Xe!=="y"&&(H[2]+=se,Z._vx.update(se,!0)),Xe!=="x"&&(W[2]+=Ve,Z._vy.update(Ve,!0)),c?Ce||(Ce=requestAnimationFrame(ee)):ee()},ve=function(se){if(!ue(se,1)){se=Fc(se,u);var Ve=se.clientX,ce=se.clientY,ke=Ve-Z.x,Ue=ce-Z.y,je=Z.isDragging;Z.x=Ve,Z.y=ce,(je||(ke||Ue)&&(Math.abs(Z.startX-Ve)>=r||Math.abs(Z.startY-ce)>=r))&&(Ke||(Ke=je?2:1),je||(Z.isDragging=!0),De(ke,Ue))}},me=Z.onPress=function(le){ue(le,1)||le&&le.button||(Z.axis=Xe=null,_e.pause(),Z.isPressed=!0,le=Fc(le),ct=bt=0,Z.startX=Z.x=le.clientX,Z.startY=Z.y=le.clientY,Z._vx.reset(),Z._vy.reset(),ui(I?o:M,Na[1],ve,Nt,!0),Z.deltaX=Z.deltaY=0,S&&S(Z))},he=Z.onRelease=function(le){if(!ue(le,1)){ci(I?o:M,Na[1],ve,!0);var se=!isNaN(Z.y-Z.startY),Ve=Z.isDragging,ce=Ve&&(Math.abs(Z.x-Z.startX)>3||Math.abs(Z.y-Z.startY)>3),ke=Fc(le);!ce&&se&&(Z._vx.reset(),Z._vy.reset(),u&&oe&&qn.delayedCall(.08,function(){if(Tu()-j>300&&!le.defaultPrevented){if(le.target.click)le.target.click();else if(M.createEvent){var Ue=M.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,qi,1,ke.screenX,ke.screenY,ke.clientX,ke.clientY,!1,!1,!1,!1,0,null),le.target.dispatchEvent(Ue)}}})),Z.isDragging=Z.isGesturing=Z.isPressed=!1,d&&Ve&&!I&&_e.restart(!0),Ke&&ee(),p&&Ve&&p(Z),x&&x(Z,ce)}},Ie=function(se){return se.touches&&se.touches.length>1&&(Z.isGesturing=!0)&&V(se,Z.isDragging)},Ge=function(){return(Z.isGesturing=!1)||D(Z)},F=function(se){if(!ue(se)){var Ve=Qe(),ce=Tt();ge((Ve-z)*Ne,(ce-nn)*Ne,1),z=Ve,nn=ce,d&&_e.restart(!0)}},pe=function(se){if(!ue(se)){se=Fc(se,u),ie&&(Pe=!0);var Ve=(se.deltaMode===1?l:se.deltaMode===2?qi.innerHeight:1)*_;ge(se.deltaX*Ve,se.deltaY*Ve,0),d&&!I&&_e.restart(!0)}},ne=function(se){if(!ue(se)){var Ve=se.clientX,ce=se.clientY,ke=Ve-Z.x,Ue=ce-Z.y;Z.x=Ve,Z.y=ce,ye=!0,d&&_e.restart(!0),(ke||Ue)&&De(ke,Ue)}},xe=function(se){Z.event=se,X(Z)},Se=function(se){Z.event=se,O(Z)},re=function(se){return ue(se)||Fc(se,u)&&Le(Z)};_e=Z._dc=qn.delayedCall(f||.25,$).pause(),Z.deltaX=Z.deltaY=0,Z._vx=og(0,50,!0),Z._vy=og(0,50,!0),Z.scrollX=Qe,Z.scrollY=Tt,Z.isDragging=Z.isGesturing=Z.isPressed=!1,lT(this),Z.enable=function(le){return Z.isEnabled||(ui(w?M:o,"scroll",sg),s.indexOf("scroll")>=0&&ui(w?M:o,"scroll",F,Nt,J),s.indexOf("wheel")>=0&&ui(o,"wheel",pe,Nt,J),(s.indexOf("touch")>=0&&sT||s.indexOf("pointer")>=0)&&(ui(o,Na[0],me,Nt,J),ui(M,Na[2],he),ui(M,Na[3],he),oe&&ui(o,"click",de,!0,!0),Le&&ui(o,"click",re),V&&ui(M,"gesturestart",Ie),D&&ui(M,"gestureend",Ge),X&&ui(o,so+"enter",xe),O&&ui(o,so+"leave",Se),N&&ui(o,so+"move",ne)),Z.isEnabled=!0,Z.isDragging=Z.isGesturing=Z.isPressed=ye=Ke=!1,Z._vx.reset(),Z._vy.reset(),z=Qe(),nn=Tt(),le&&le.type&&me(le),fe&&fe(Z)),Z},Z.disable=function(){Z.isEnabled&&(Ol.filter(function(le){return le!==Z&&Au(le.target)}).length||ci(w?M:o,"scroll",sg),Z.isPressed&&(Z._vx.reset(),Z._vy.reset(),ci(I?o:M,Na[1],ve,!0)),ci(w?M:o,"scroll",F,J),ci(o,"wheel",pe,J),ci(o,Na[0],me,J),ci(M,Na[2],he),ci(M,Na[3],he),ci(o,"click",de,!0),ci(o,"click",re),ci(M,"gesturestart",Ie),ci(M,"gestureend",Ge),ci(o,so+"enter",xe),ci(o,so+"leave",Se),ci(o,so+"move",ne),Z.isEnabled=Z.isPressed=Z.isDragging=!1,Be&&Be(Z))},Z.kill=Z.revert=function(){Z.disable();var le=Ol.indexOf(Z);le>=0&&Ol.splice(le,1),wr===Z&&(wr=0)},Ol.push(Z),I&&Au(o)&&(wr=Z),Z.enable(v)},Nw(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();mn.version="3.15.0";mn.create=function(t){return new mn(t)};mn.register=hT;mn.getAll=function(){return Ol.slice()};mn.getById=function(t){return Ol.filter(function(e){return e.vars.id===t})[0]};cT()&&qn.registerPlugin(mn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,vl,ot,Ct,Xi,At,Tv,Pd,nf,Ru,tu,kf,ti,dp,lg,pi,XS,WS,xl,dT,cm,pT,di,cg,mT,_T,rs,ug,Av,ql,Rv,Cu,fg,um,Xf=1,ni=Date.now,fm=ni(),Aa=0,nu=0,YS=function(e,n,i){var a=Gi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+n+"Clamp"]=a,a?e.substr(6,e.length-7):e},qS=function(e,n){return n&&(!Gi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Pw=function t(){return nu&&requestAnimationFrame(t)},ZS=function(){return dp=1},KS=function(){return dp=0},Xa=function(e){return e},iu=function(e){return Math.round(e*1e5)/1e5||0},gT=function(){return typeof window<"u"},vT=function(){return we||gT()&&(we=window.gsap)&&we.registerPlugin&&we},Lo=function(e){return!!~Tv.indexOf(e)},xT=function(e){return(e==="Height"?Rv:ot["inner"+e])||Xi["client"+e]||At["client"+e]},ST=function(e){return Ps(e,"getBoundingClientRect")||(Lo(e)?function(){return Wh.width=ot.innerWidth,Wh.height=Rv,Wh}:function(){return br(e)})},Iw=function(e,n,i){var a=i.d,r=i.d2,s=i.a;return(s=Ps(e,"getBoundingClientRect"))?function(){return s()[a]}:function(){return(n?xT(r):e["client"+r])||0}},Fw=function(e,n){return!n||~tr.indexOf(e)?ST(e):function(){return Wh}},ja=function(e,n){var i=n.s,a=n.d2,r=n.d,s=n.a;return Math.max(0,(i="scroll"+a)&&(s=Ps(e,i))?s()-ST(e)()[r]:Lo(e)?(Xi[i]||At[i])-xT(a):e[i]-e["offset"+a])},Wf=function(e,n){for(var i=0;i<xl.length;i+=3)(!n||~n.indexOf(xl[i+1]))&&e(xl[i],xl[i+1],xl[i+2])},Gi=function(e){return typeof e=="string"},ai=function(e){return typeof e=="function"},au=function(e){return typeof e=="number"},oo=function(e){return typeof e=="object"},zc=function(e,n,i){return e&&e.progress(n?0:1)&&i&&e.pause()},Jo=function(e,n,i){if(e.enabled){var a=e._ctx?e._ctx.add(function(){return n(e,i)}):n(e,i);a&&a.totalTime&&(e.callbackAnimation=a)}},$o=Math.abs,yT="left",MT="top",Cv="right",wv="bottom",To="width",Ao="height",wu="Right",Du="Left",Uu="Top",Nu="Bottom",Sn="padding",_a="margin",pc="Width",Dv="Height",Cn="px",ga=function(e){return ot.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},zw=function(e){var n=ga(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},QS=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},br=function(e,n){var i=n&&ga(e)[lg]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),a=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),a},Id=function(e,n){var i=n.d2;return e["offset"+i]||e["client"+i]||0},ET=function(e){var n=[],i=e.labels,a=e.duration(),r;for(r in i)n.push(i[r]/a);return n},Bw=function(e){return function(n){return we.utils.snap(ET(e),n)}},Uv=function(e){var n=we.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(a,r){return a-r});return i?function(a,r,s){s===void 0&&(s=.001);var o;if(!r)return n(a);if(r>0){for(a-=s,o=0;o<i.length;o++)if(i[o]>=a)return i[o];return i[o-1]}else for(o=i.length,a+=s;o--;)if(i[o]<=a)return i[o];return i[0]}:function(a,r,s){s===void 0&&(s=.001);var o=n(a);return!r||Math.abs(o-a)<s||o-a<0==r<0?o:n(r<0?a-e:a+e)}},Hw=function(e){return function(n,i){return Uv(ET(e))(n,i.direction)}},Yf=function(e,n,i,a){return i.split(",").forEach(function(r){return e(n,r,a)})},zn=function(e,n,i,a,r){return e.addEventListener(n,i,{passive:!a,capture:!!r})},Fn=function(e,n,i,a){return e.removeEventListener(n,i,!!a)},qf=function(e,n,i){i=i&&i.wheelHandler,i&&(e(n,"wheel",i),e(n,"touchmove",i))},jS={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Zf={toggleActions:"play",anticipatePin:0},Fd={top:0,left:0,center:.5,bottom:1,right:1},Gh=function(e,n){if(Gi(e)){var i=e.indexOf("="),a=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(a*=n/100),e=e.substr(0,i-1)),e=a+(e in Fd?Fd[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},Kf=function(e,n,i,a,r,s,o,l){var c=r.startColor,u=r.endColor,d=r.fontSize,f=r.indent,h=r.fontWeight,_=Ct.createElement("div"),v=Lo(i)||Ps(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=v?At:i.tagName==="IFRAME"?i.contentDocument.body:i,g=e.indexOf("start")!==-1,S=g?c:u,x="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&v?"fixed;":"absolute;"),(m||l||!v)&&(x+=(a===wn?Cv:wv)+":"+(s+parseFloat(f))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=g,_.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),_.style.cssText=x,_.innerText=n||n===0?e+"-"+n:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+a.op.d2],Vh(_,0,a,g),_},Vh=function(e,n,i,a){var r={display:"block"},s=i[a?"os2":"p2"],o=i[a?"p2":"os2"];e._isFlipped=a,r[i.a+"Percent"]=a?-100:0,r[i.a]=a?"1px":0,r["border"+s+pc]=1,r["border"+o+pc]=0,r[i.p]=n+"px",we.set(e,r)},at=[],hg={},af,JS=function(){return ni()-Aa>34&&(af||(af=requestAnimationFrame(Or)))},el=function(){(!di||!di.isPressed||di.startX>At.clientWidth)&&(lt.cache++,di?af||(af=requestAnimationFrame(Or)):Or(),Aa||Po("scrollStart"),Aa=ni())},hm=function(){_T=ot.innerWidth,mT=ot.innerHeight},ru=function(e){lt.cache++,(e===!0||!ti&&!pT&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!cg||_T!==ot.innerWidth||Math.abs(ot.innerHeight-mT)>ot.innerHeight*.25))&&Pd.restart(!0)},Oo={},Gw=[],bT=function t(){return Fn(dt,"scrollEnd",t)||ho(!0)},Po=function(e){return Oo[e]&&Oo[e].map(function(n){return n()})||Gw},Bi=[],TT=function(e){for(var n=0;n<Bi.length;n+=5)(!e||Bi[n+4]&&Bi[n+4].query===e)&&(Bi[n].style.cssText=Bi[n+1],Bi[n].getBBox&&Bi[n].setAttribute("transform",Bi[n+2]||""),Bi[n+3].uncache=1)},AT=function(){return lt.forEach(function(e){return ai(e)&&++e.cacheID&&(e.rec=e())})},Nv=function(e,n){var i;for(pi=0;pi<at.length;pi++)i=at[pi],i&&(!n||i._ctx===n)&&(e?i.kill(1):i.revert(!0,!0));Cu=!0,n&&TT(n),n||Po("revert")},RT=function(e,n){lt.cache++,(n||!mi)&&lt.forEach(function(i){return ai(i)&&i.cacheID++&&(i.rec=0)}),Gi(e)&&(ot.history.scrollRestoration=Av=e)},mi,Ro=0,$S,Vw=function(){if($S!==Ro){var e=$S=Ro;requestAnimationFrame(function(){return e===Ro&&ho(!0)})}},CT=function(){At.appendChild(ql),Rv=!di&&ql.offsetHeight||ot.innerHeight,At.removeChild(ql)},ey=function(e){return nf(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=e?"none":"block"})},ho=function(e,n){if(Xi=Ct.documentElement,At=Ct.body,Tv=[ot,Ct,Xi,At],Aa&&!e&&!Cu){zn(dt,"scrollEnd",bT);return}CT(),mi=dt.isRefreshing=!0,Cu||AT();var i=Po("refreshInit");dT&&dt.sort(),n||Nv(),lt.forEach(function(a){ai(a)&&(a.smooth&&(a.target.style.scrollBehavior="auto"),a(0))}),at.slice(0).forEach(function(a){return a.refresh()}),Cu=!1,at.forEach(function(a){if(a._subPinOffset&&a.pin){var r=a.vars.horizontal?"offsetWidth":"offsetHeight",s=a.pin[r];a.revert(!0,1),a.adjustPinSpacing(a.pin[r]-s),a.refresh()}}),fg=1,ey(!0),at.forEach(function(a){var r=ja(a.scroller,a._dir),s=a.vars.end==="max"||a._endClamp&&a.end>r,o=a._startClamp&&a.start>=r;(s||o)&&a.setPositions(o?r-1:a.start,s?Math.max(o?r:a.start+1,r):a.end,!0)}),ey(!1),fg=0,i.forEach(function(a){return a&&a.render&&a.render(-1)}),lt.forEach(function(a){ai(a)&&(a.smooth&&requestAnimationFrame(function(){return a.target.style.scrollBehavior="smooth"}),a.rec&&a(a.rec))}),RT(Av,1),Pd.pause(),Ro++,mi=2,Or(2),at.forEach(function(a){return ai(a.vars.onRefresh)&&a.vars.onRefresh(a)}),mi=dt.isRefreshing=!1,Po("refresh")},dg=0,kh=1,Lu,Or=function(e){if(e===2||!mi&&!Cu){dt.isUpdating=!0,Lu&&Lu.update(0);var n=at.length,i=ni(),a=i-fm>=50,r=n&&at[0].scroll();if(kh=dg>r?-1:1,mi||(dg=r),a&&(Aa&&!dp&&i-Aa>200&&(Aa=0,Po("scrollEnd")),tu=fm,fm=i),kh<0){for(pi=n;pi-- >0;)at[pi]&&at[pi].update(0,a);kh=1}else for(pi=0;pi<n;pi++)at[pi]&&at[pi].update(0,a);dt.isUpdating=!1}af=0},pg=[yT,MT,wv,Cv,_a+Nu,_a+wu,_a+Uu,_a+Du,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Xh=pg.concat([To,Ao,"boxSizing","max"+pc,"max"+Dv,"position",_a,Sn,Sn+Uu,Sn+wu,Sn+Nu,Sn+Du]),kw=function(e,n,i){Zl(i);var a=e._gsap;if(a.spacerIsNative)Zl(a.spacerState);else if(e._gsap.swappedIn){var r=n.parentNode;r&&(r.insertBefore(e,n),r.removeChild(n))}e._gsap.swappedIn=!1},dm=function(e,n,i,a){if(!e._gsap.swappedIn){for(var r=pg.length,s=n.style,o=e.style,l;r--;)l=pg[r],s[l]=i[l];s.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(s.display="inline-block"),o[wv]=o[Cv]="auto",s.flexBasis=i.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[To]=Id(e,_i)+Cn,s[Ao]=Id(e,wn)+Cn,s[Sn]=o[_a]=o[MT]=o[yT]="0",Zl(a),o[To]=o["max"+pc]=i[To],o[Ao]=o["max"+Dv]=i[Ao],o[Sn]=i[Sn],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},Xw=/([A-Z])/g,Zl=function(e){if(e){var n=e.t.style,i=e.length,a=0,r,s;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;a<i;a+=2)s=e[a+1],r=e[a],s?n[r]=s:n[r]&&n.removeProperty(r.replace(Xw,"-$1").toLowerCase())}},Qf=function(e){for(var n=Xh.length,i=e.style,a=[],r=0;r<n;r++)a.push(Xh[r],i[Xh[r]]);return a.t=e,a},Ww=function(e,n,i){for(var a=[],r=e.length,s=i?8:0,o;s<r;s+=2)o=e[s],a.push(o,o in n?n[o]:e[s+1]);return a.t=e.t,a},Wh={left:0,top:0},ty=function(e,n,i,a,r,s,o,l,c,u,d,f,h,_){ai(e)&&(e=e(l)),Gi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Gh("0"+e.substr(3),i):0));var v=h?h.time():0,m,p,g;if(h&&h.seek(0),isNaN(e)||(e=+e),au(e))h&&(e=we.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),o&&Vh(o,i,a,!0);else{ai(n)&&(n=n(l));var S=(e||"0").split(" "),x,b,A,E;g=Ti(n,l)||At,x=br(g)||{},(!x||!x.left&&!x.top)&&ga(g).display==="none"&&(E=g.style.display,g.style.display="block",x=br(g),E?g.style.display=E:g.style.removeProperty("display")),b=Gh(S[0],x[a.d]),A=Gh(S[1]||"0",i),e=x[a.p]-c[a.p]-u+b+r-A,o&&Vh(o,A,a,i-A<20||o._isStart&&A>20),i-=i-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),s){var y=e+i,T=s._isStart;m="scroll"+a.d2,Vh(s,y,a,T&&y>20||!T&&(d?Math.max(At[m],Xi[m]):s.parentNode[m])<=y+1),d&&(c=br(o),d&&(s.style[a.op.p]=c[a.op.p]-a.op.m-s._offset+Cn))}return h&&g&&(m=br(g),h.seek(f),p=br(g),h._caScrollDist=m[a.p]-p[a.p],e=e/h._caScrollDist*f),h&&h.seek(v),h?e:Math.round(e)},Yw=/(webkit|moz|length|cssText|inset)/i,ny=function(e,n,i,a){if(e.parentNode!==n){var r=e.style,s,o;if(n===At){e._stOrig=r.cssText,o=ga(e);for(s in o)!+s&&!Yw.test(s)&&o[s]&&typeof r[s]=="string"&&s!=="0"&&(r[s]=o[s]);r.top=i,r.left=a}else r.cssText=e._stOrig;we.core.getCache(e).uncache=1,n.appendChild(e)}},wT=function(e,n,i){var a=n,r=a;return function(s){var o=Math.round(e());return o!==a&&o!==r&&Math.abs(o-a)>3&&Math.abs(o-r)>3&&(s=o,i&&i()),r=a,a=Math.round(s),a}},jf=function(e,n,i){var a={};a[n.p]="+="+i,we.set(e,a)},iy=function(e,n){var i=ks(e,n),a="_scroll"+n.p2,r=function s(o,l,c,u,d){var f=s.tween,h=l.onComplete,_={};c=c||i();var v=wT(i,c,function(){f.kill(),s.tween=0});return d=u&&d||0,u=u||o-c,f&&f.kill(),l[a]=o,l.inherit=!1,l.modifiers=_,_[a]=function(){return v(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){lt.cache++,s.tween&&Or()},l.onComplete=function(){s.tween=0,h&&h.call(f)},f=s.tween=we.to(e,l),f};return e[a]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},zn(e,"wheel",i.wheelHandler),dt.isTouch&&zn(e,"touchmove",i.wheelHandler),r},dt=function(){function t(n,i){vl||t.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ug(this),this.init(n,i)}var e=t.prototype;return e.init=function(i,a){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!nu){this.update=this.refresh=this.kill=Xa;return}i=QS(Gi(i)||au(i)||i.nodeType?{trigger:i}:i,Zf);var r=i,s=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,d=r.scrub,f=r.trigger,h=r.pin,_=r.pinSpacing,v=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,g=r.onSnapComplete,S=r.once,x=r.snap,b=r.pinReparent,A=r.pinSpacer,E=r.containerAnimation,y=r.fastScrollEnd,T=r.preventOverlaps,C=i.horizontal||i.containerAnimation&&i.horizontal!==!1?_i:wn,L=!d&&d!==0,P=Ti(i.scroller||ot),q=we.core.getCache(P),X=Lo(P),O=("pinType"in i?i.pinType:Ps(P,"pinType")||X&&"fixed")==="fixed",N=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],U=L&&i.toggleActions.split(" "),I="markers"in i?i.markers:Zf.markers,V=X?0:parseFloat(ga(P)["border"+C.p2+pc])||0,D=this,ie=i.onRefreshInit&&function(){return i.onRefreshInit(D)},fe=Iw(P,X,C),Be=Fw(P,X),Le=0,Ne=0,J=0,oe=ks(P,C),te,Te,Ce,_e,Ke,ye,Pe,He,Xe,Z,ct,bt,Nt,Qe,Tt,z,nn,Ye,w,M,H,W,j,de,ue,$,ee,ge,De,ve,me,he,Ie,Ge,F,pe,ne,xe,Se;if(D._startClamp=D._endClamp=!1,D._dir=C,m*=45,D.scroller=P,D.scroll=E?E.time.bind(E):oe,_e=oe(),D.vars=i,a=a||i.animation,"refreshPriority"in i&&(dT=1,i.refreshPriority===-9999&&(Lu=D)),q.tweenScroll=q.tweenScroll||{top:iy(P,wn),left:iy(P,_i)},D.tweenTo=te=q.tweenScroll[C.p],D.scrubDuration=function(ce){Ie=au(ce)&&ce,Ie?he?he.duration(ce):he=we.to(a,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ie,paused:!0,onComplete:function(){return p&&p(D)}}):(he&&he.progress(1).kill(),he=0)},a&&(a.vars.lazy=!1,a._initted&&!D.isReverted||a.vars.immediateRender!==!1&&i.immediateRender!==!1&&a.duration()&&a.render(0,!0,!0),D.animation=a.pause(),a.scrollTrigger=D,D.scrubDuration(d),ve=0,l||(l=a.vars.id)),x&&((!oo(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in At.style&&we.set(X?[At,Xi]:P,{scrollBehavior:"auto"}),lt.forEach(function(ce){return ai(ce)&&ce.target===(X?Ct.scrollingElement||Xi:P)&&(ce.smooth=!1)}),Ce=ai(x.snapTo)?x.snapTo:x.snapTo==="labels"?Bw(a):x.snapTo==="labelsDirectional"?Hw(a):x.directional!==!1?function(ce,ke){return Uv(x.snapTo)(ce,ni()-Ne<500?0:ke.direction)}:we.utils.snap(x.snapTo),Ge=x.duration||{min:.1,max:2},Ge=oo(Ge)?Ru(Ge.min,Ge.max):Ru(Ge,Ge),F=we.delayedCall(x.delay||Ie/2||.1,function(){var ce=oe(),ke=ni()-Ne<500,Ue=te.tween;if((ke||Math.abs(D.getVelocity())<10)&&!Ue&&!dp&&Le!==ce){var je=(ce-ye)/Qe,gn=a&&!L?a.totalProgress():je,st=ke?0:(gn-me)/(ni()-tu)*1e3||0,Wt=we.utils.clamp(-je,1-je,$o(st/2)*st/.185),On=je+(x.inertia===!1?0:Wt),Yt,It,mt=x,oi=mt.onStart,Vt=mt.onInterrupt,jn=mt.onComplete;if(Yt=Ce(On,D),au(Yt)||(Yt=On),It=Math.max(0,Math.round(ye+Yt*Qe)),ce<=Pe&&ce>=ye&&It!==ce){if(Ue&&!Ue._initted&&Ue.data<=$o(It-ce))return;x.inertia===!1&&(Wt=Yt-je),te(It,{duration:Ge($o(Math.max($o(On-gn),$o(Yt-gn))*.185/st/.05||0)),ease:x.ease||"power3",data:$o(It-ce),onInterrupt:function(){return F.restart(!0)&&Vt&&Jo(D,Vt)},onComplete:function(){D.update(),Le=oe(),a&&!L&&(he?he.resetTo("totalProgress",Yt,a._tTime/a._tDur):a.progress(Yt)),ve=me=a&&!L?a.totalProgress():D.progress,g&&g(D),jn&&Jo(D,jn)}},ce,Wt*Qe,It-ce-Wt*Qe),oi&&Jo(D,oi,te.tween)}}else D.isActive&&Le!==ce&&F.restart(!0)}).pause()),l&&(hg[l]=D),f=D.trigger=Ti(f||h!==!0&&h),Se=f&&f._gsap&&f._gsap.stRevert,Se&&(Se=Se(D)),h=h===!0?f:Ti(h),Gi(o)&&(o={targets:f,className:o}),h&&(_===!1||_===_a||(_=!_&&h.parentNode&&h.parentNode.style&&ga(h.parentNode).display==="flex"?!1:Sn),D.pin=h,Te=we.core.getCache(h),Te.spacer?Tt=Te.pinState:(A&&(A=Ti(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Te.spacerIsNative=!!A,A&&(Te.spacerState=Qf(A))),Te.spacer=Ye=A||Ct.createElement("div"),Ye.classList.add("pin-spacer"),l&&Ye.classList.add("pin-spacer-"+l),Te.pinState=Tt=Qf(h)),i.force3D!==!1&&we.set(h,{force3D:!0}),D.spacer=Ye=Te.spacer,De=ga(h),de=De[_+C.os2],M=we.getProperty(h),H=we.quickSetter(h,C.a,Cn),dm(h,Ye,De),nn=Qf(h)),I){bt=oo(I)?QS(I,jS):jS,Z=Kf("scroller-start",l,P,C,bt,0),ct=Kf("scroller-end",l,P,C,bt,0,Z),w=Z["offset"+C.op.d2];var re=Ti(Ps(P,"content")||P);He=this.markerStart=Kf("start",l,re,C,bt,w,0,E),Xe=this.markerEnd=Kf("end",l,re,C,bt,w,0,E),E&&(xe=we.quickSetter([He,Xe],C.a,Cn)),!O&&!(tr.length&&Ps(P,"fixedMarkers")===!0)&&(zw(X?At:P),we.set([Z,ct],{force3D:!0}),$=we.quickSetter(Z,C.a,Cn),ge=we.quickSetter(ct,C.a,Cn))}if(E){var le=E.vars.onUpdate,se=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){D.update(0,0,1),le&&le.apply(E,se||[])})}if(D.previous=function(){return at[at.indexOf(D)-1]},D.next=function(){return at[at.indexOf(D)+1]},D.revert=function(ce,ke){if(!ke)return D.kill(!0);var Ue=ce!==!1||!D.enabled,je=ti;Ue!==D.isReverted&&(Ue&&(pe=Math.max(oe(),D.scroll.rec||0),J=D.progress,ne=a&&a.progress()),He&&[He,Xe,Z,ct].forEach(function(gn){return gn.style.display=Ue?"none":"block"}),Ue&&(ti=D,D.update(Ue)),h&&(!b||!D.isActive)&&(Ue?kw(h,Ye,Tt):dm(h,Ye,ga(h),ue)),Ue||D.update(Ue),ti=je,D.isReverted=Ue)},D.refresh=function(ce,ke,Ue,je){if(!((ti||!D.enabled)&&!ke)){if(h&&ce&&Aa){zn(t,"scrollEnd",bT);return}!mi&&ie&&ie(D),ti=D,te.tween&&!Ue&&(te.tween.kill(),te.tween=0),he&&he.pause(),v&&a&&(a.revert({kill:!1}).invalidate(),a.getChildren?a.getChildren(!0,!0,!1).forEach(function(Ee){return Ee.vars.immediateRender&&Ee.render(0,!0,!0)}):a.vars.immediateRender&&a.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var gn=fe(),st=Be(),Wt=E?E.duration():ja(P,C),On=Qe<=.01||!Qe,Yt=0,It=je||0,mt=oo(Ue)?Ue.end:i.end,oi=i.endTrigger||f,Vt=oo(Ue)?Ue.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),jn=D.pinnedContainer=i.pinnedContainer&&Ti(i.pinnedContainer,D),li=f&&Math.max(0,at.indexOf(D))||0,vn=li,an,Rn,Ba,Yo,Pn,un,oa,R,B,Q,k,Y,Me;for(I&&oo(Ue)&&(Y=we.getProperty(Z,C.p),Me=we.getProperty(ct,C.p));vn-- >0;)un=at[vn],un.end||un.refresh(0,1)||(ti=D),oa=un.pin,oa&&(oa===f||oa===h||oa===jn)&&!un.isReverted&&(Q||(Q=[]),Q.unshift(un),un.revert(!0,!0)),un!==at[vn]&&(li--,vn--);for(ai(Vt)&&(Vt=Vt(D)),Vt=YS(Vt,"start",D),ye=ty(Vt,f,gn,C,oe(),He,Z,D,st,V,O,Wt,E,D._startClamp&&"_startClamp")||(h?-.001:0),ai(mt)&&(mt=mt(D)),Gi(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Gi(Vt)?Vt.split(" ")[0]:"")+mt:(Yt=Gh(mt.substr(2),gn),mt=Gi(Vt)?Vt:(E?we.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,ye):ye)+Yt,oi=f)),mt=YS(mt,"end",D),Pe=Math.max(ye,ty(mt||(oi?"100% 0":Wt),oi,gn,C,oe()+Yt,Xe,ct,D,st,V,O,Wt,E,D._endClamp&&"_endClamp"))||-.001,Yt=0,vn=li;vn--;)un=at[vn]||{},oa=un.pin,oa&&un.start-un._pinPush<=ye&&!E&&un.end>0&&(an=un.end-(D._startClamp?Math.max(0,un.start):un.start),(oa===f&&un.start-un._pinPush<ye||oa===jn)&&isNaN(Vt)&&(Yt+=an*(1-un.progress)),oa===h&&(It+=an));if(ye+=Yt,Pe+=Yt,D._startClamp&&(D._startClamp+=Yt),D._endClamp&&!mi&&(D._endClamp=Pe||-.001,Pe=Math.min(Pe,ja(P,C))),Qe=Pe-ye||(ye-=.01)&&.001,On&&(J=we.utils.clamp(0,1,we.utils.normalize(ye,Pe,pe))),D._pinPush=It,He&&Yt&&(an={},an[C.a]="+="+Yt,jn&&(an[C.p]="-="+oe()),we.set([He,Xe],an)),h&&!(fg&&D.end>=ja(P,C)))an=ga(h),Yo=C===wn,Ba=oe(),W=parseFloat(M(C.a))+It,!Wt&&Pe>1&&(k=(X?Ct.scrollingElement||Xi:P).style,k={style:k,value:k["overflow"+C.a.toUpperCase()]},X&&ga(At)["overflow"+C.a.toUpperCase()]!=="scroll"&&(k.style["overflow"+C.a.toUpperCase()]="scroll")),dm(h,Ye,an),nn=Qf(h),Rn=br(h,!0),R=O&&ks(P,Yo?_i:wn)(),_?(ue=[_+C.os2,Qe+It+Cn],ue.t=Ye,vn=_===Sn?Id(h,C)+Qe+It:0,vn&&(ue.push(C.d,vn+Cn),Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=vn+Cn)),Zl(ue),jn&&at.forEach(function(Ee){Ee.pin===jn&&Ee.vars.pinSpacing!==!1&&(Ee._subPinOffset=!0)}),O&&oe(pe)):(vn=Id(h,C),vn&&Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=vn+Cn)),O&&(Pn={top:Rn.top+(Yo?Ba-ye:R)+Cn,left:Rn.left+(Yo?R:Ba-ye)+Cn,boxSizing:"border-box",position:"fixed"},Pn[To]=Pn["max"+pc]=Math.ceil(Rn.width)+Cn,Pn[Ao]=Pn["max"+Dv]=Math.ceil(Rn.height)+Cn,Pn[_a]=Pn[_a+Uu]=Pn[_a+wu]=Pn[_a+Nu]=Pn[_a+Du]="0",Pn[Sn]=an[Sn],Pn[Sn+Uu]=an[Sn+Uu],Pn[Sn+wu]=an[Sn+wu],Pn[Sn+Nu]=an[Sn+Nu],Pn[Sn+Du]=an[Sn+Du],z=Ww(Tt,Pn,b),mi&&oe(0)),a?(B=a._initted,cm(1),a.render(a.duration(),!0,!0),j=M(C.a)-W+Qe+It,ee=Math.abs(Qe-j)>1,O&&ee&&z.splice(z.length-2,2),a.render(0,!0,!0),B||a.invalidate(!0),a.parent||a.totalTime(a.totalTime()),cm(0)):j=Qe,k&&(k.value?k.style["overflow"+C.a.toUpperCase()]=k.value:k.style.removeProperty("overflow-"+C.a));else if(f&&oe()&&!E)for(Rn=f.parentNode;Rn&&Rn!==At;)Rn._pinOffset&&(ye-=Rn._pinOffset,Pe-=Rn._pinOffset),Rn=Rn.parentNode;Q&&Q.forEach(function(Ee){return Ee.revert(!1,!0)}),D.start=ye,D.end=Pe,_e=Ke=mi?pe:oe(),!E&&!mi&&(_e<pe&&oe(pe),D.scroll.rec=0),D.revert(!1,!0),Ne=ni(),F&&(Le=-1,F.restart(!0)),ti=0,a&&L&&(a._initted||ne)&&a.progress()!==ne&&a.progress(ne||0,!0).render(a.time(),!0,!0),(On||J!==D.progress||E||v||a&&!a._initted)&&(a&&!L&&(a._initted||J||a.vars.immediateRender!==!1)&&a.totalProgress(E&&ye<-.001&&!J?we.utils.normalize(ye,Pe,0):J,!0),D.progress=On||(_e-ye)/Qe===J?0:J),h&&_&&(Ye._pinOffset=Math.round(D.progress*j)),he&&he.invalidate(),isNaN(Y)||(Y-=we.getProperty(Z,C.p),Me-=we.getProperty(ct,C.p),jf(Z,C,Y),jf(He,C,Y-(je||0)),jf(ct,C,Me),jf(Xe,C,Me-(je||0))),On&&!mi&&D.update(),u&&!mi&&!Nt&&(Nt=!0,u(D),Nt=!1)}},D.getVelocity=function(){return(oe()-Ke)/(ni()-tu)*1e3||0},D.endAnimation=function(){zc(D.callbackAnimation),a&&(he?he.progress(1):a.paused()?L||zc(a,D.direction<0,1):zc(a,a.reversed()))},D.labelToScroll=function(ce){return a&&a.labels&&(ye||D.refresh()||ye)+a.labels[ce]/a.duration()*Qe||0},D.getTrailing=function(ce){var ke=at.indexOf(D),Ue=D.direction>0?at.slice(0,ke).reverse():at.slice(ke+1);return(Gi(ce)?Ue.filter(function(je){return je.vars.preventOverlaps===ce}):Ue).filter(function(je){return D.direction>0?je.end<=ye:je.start>=Pe})},D.update=function(ce,ke,Ue){if(!(E&&!Ue&&!ce)){var je=mi===!0?pe:D.scroll(),gn=ce?0:(je-ye)/Qe,st=gn<0?0:gn>1?1:gn||0,Wt=D.progress,On,Yt,It,mt,oi,Vt,jn,li;if(ke&&(Ke=_e,_e=E?oe():je,x&&(me=ve,ve=a&&!L?a.totalProgress():st)),m&&h&&!ti&&!Xf&&Aa&&(!st&&ye<je+(je-Ke)/(ni()-tu)*m?st=1e-4:st===1&&Pe>je+(je-Ke)/(ni()-tu)*m&&(st=.9999)),st!==Wt&&D.enabled){if(On=D.isActive=!!st&&st<1,Yt=!!Wt&&Wt<1,Vt=On!==Yt,oi=Vt||!!st!=!!Wt,D.direction=st>Wt?1:-1,D.progress=st,oi&&!ti&&(It=st&&!Wt?0:st===1?1:Wt===1?2:3,L&&(mt=!Vt&&U[It+1]!=="none"&&U[It+1]||U[It],li=a&&(mt==="complete"||mt==="reset"||mt in a))),T&&(Vt||li)&&(li||d||!a)&&(ai(T)?T(D):D.getTrailing(T).forEach(function(Ba){return Ba.endAnimation()})),L||(he&&!ti&&!Xf?(he._dp._time-he._start!==he._time&&he.render(he._dp._time-he._start),he.resetTo?he.resetTo("totalProgress",st,a._tTime/a._tDur):(he.vars.totalProgress=st,he.invalidate().restart())):a&&a.totalProgress(st,!!(ti&&(Ne||ce)))),h){if(ce&&_&&(Ye.style[_+C.os2]=de),!O)H(iu(W+j*st));else if(oi){if(jn=!ce&&st>Wt&&Pe+1>je&&je+1>=ja(P,C),b)if(!ce&&(On||jn)){var vn=br(h,!0),an=je-ye;ny(h,At,vn.top+(C===wn?an:0)+Cn,vn.left+(C===wn?0:an)+Cn)}else ny(h,Ye);Zl(On||jn?z:nn),ee&&st<1&&On||H(W+(st===1&&!jn?j:0))}}x&&!te.tween&&!ti&&!Xf&&F.restart(!0),o&&(Vt||S&&st&&(st<1||!um))&&nf(o.targets).forEach(function(Ba){return Ba.classList[On||S?"add":"remove"](o.className)}),s&&!L&&!ce&&s(D),oi&&!ti?(L&&(li&&(mt==="complete"?a.pause().totalProgress(1):mt==="reset"?a.restart(!0).pause():mt==="restart"?a.restart(!0):a[mt]()),s&&s(D)),(Vt||!um)&&(c&&Vt&&Jo(D,c),N[It]&&Jo(D,N[It]),S&&(st===1?D.kill(!1,1):N[It]=0),Vt||(It=st===1?1:3,N[It]&&Jo(D,N[It]))),y&&!On&&Math.abs(D.getVelocity())>(au(y)?y:2500)&&(zc(D.callbackAnimation),he?he.progress(1):zc(a,mt==="reverse"?1:!st,1))):L&&s&&!ti&&s(D)}if(ge){var Rn=E?je/E.duration()*(E._caScrollDist||0):je;$(Rn+(Z._isFlipped?1:0)),ge(Rn)}xe&&xe(-je/E.duration()*(E._caScrollDist||0))}},D.enable=function(ce,ke){D.enabled||(D.enabled=!0,zn(P,"resize",ru),X||zn(P,"scroll",el),ie&&zn(t,"refreshInit",ie),ce!==!1&&(D.progress=J=0,_e=Ke=Le=oe()),ke!==!1&&D.refresh())},D.getTween=function(ce){return ce&&te?te.tween:he},D.setPositions=function(ce,ke,Ue,je){if(E){var gn=E.scrollTrigger,st=E.duration(),Wt=gn.end-gn.start;ce=gn.start+Wt*ce/st,ke=gn.start+Wt*ke/st}D.refresh(!1,!1,{start:qS(ce,Ue&&!!D._startClamp),end:qS(ke,Ue&&!!D._endClamp)},je),D.update()},D.adjustPinSpacing=function(ce){if(ue&&ce){var ke=ue.indexOf(C.d)+1;ue[ke]=parseFloat(ue[ke])+ce+Cn,ue[1]=parseFloat(ue[1])+ce+Cn,Zl(ue)}},D.disable=function(ce,ke){if(ce!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,ke||he&&he.pause(),pe=0,Te&&(Te.uncache=1),ie&&Fn(t,"refreshInit",ie),F&&(F.pause(),te.tween&&te.tween.kill()&&(te.tween=0)),!X)){for(var Ue=at.length;Ue--;)if(at[Ue].scroller===P&&at[Ue]!==D)return;Fn(P,"resize",ru),X||Fn(P,"scroll",el)}},D.kill=function(ce,ke){D.disable(ce,ke),he&&!ke&&he.kill(),l&&delete hg[l];var Ue=at.indexOf(D);Ue>=0&&at.splice(Ue,1),Ue===pi&&kh>0&&pi--,Ue=0,at.forEach(function(je){return je.scroller===D.scroller&&(Ue=1)}),Ue||mi||(D.scroll.rec=0),a&&(a.scrollTrigger=null,ce&&a.revert({kill:!1}),ke||a.kill()),He&&[He,Xe,Z,ct].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),Lu===D&&(Lu=0),h&&(Te&&(Te.uncache=1),Ue=0,at.forEach(function(je){return je.pin===h&&Ue++}),Ue||(Te.spacer=0)),i.onKill&&i.onKill(D)},at.push(D),D.enable(!1,!1),Se&&Se(D),a&&a.add&&!Qe){var Ve=D.update;D.update=function(){D.update=Ve,lt.cache++,ye||Pe||D.refresh()},we.delayedCall(.01,D.update),Qe=.01,ye=Pe=0}else D.refresh();h&&Vw()},t.register=function(i){return vl||(we=i||vT(),gT()&&window.document&&t.enable(),vl=nu),vl},t.defaults=function(i){if(i)for(var a in i)Zf[a]=i[a];return Zf},t.disable=function(i,a){nu=0,at.forEach(function(s){return s[a?"kill":"disable"](i)}),Fn(ot,"wheel",el),Fn(Ct,"scroll",el),clearInterval(kf),Fn(Ct,"touchcancel",Xa),Fn(At,"touchstart",Xa),Yf(Fn,Ct,"pointerdown,touchstart,mousedown",ZS),Yf(Fn,Ct,"pointerup,touchend,mouseup",KS),Pd.kill(),Wf(Fn);for(var r=0;r<lt.length;r+=3)qf(Fn,lt[r],lt[r+1]),qf(Fn,lt[r],lt[r+2])},t.enable=function(){if(ot=window,Ct=document,Xi=Ct.documentElement,At=Ct.body,we){if(nf=we.utils.toArray,Ru=we.utils.clamp,ug=we.core.context||Xa,cm=we.core.suppressOverwrites||Xa,Av=ot.history.scrollRestoration||"auto",dg=ot.pageYOffset||0,we.core.globals("ScrollTrigger",t),At){nu=1,ql=document.createElement("div"),ql.style.height="100vh",ql.style.position="absolute",CT(),Pw(),mn.register(we),t.isTouch=mn.isTouch,rs=mn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),cg=mn.isTouch===1,zn(ot,"wheel",el),Tv=[ot,Ct,Xi,At],we.matchMedia?(t.matchMedia=function(u){var d=we.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},we.addEventListener("matchMediaInit",function(){AT(),Nv()}),we.addEventListener("matchMediaRevert",function(){return TT()}),we.addEventListener("matchMedia",function(){ho(0,1),Po("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return hm(),hm})):console.warn("Requires GSAP 3.11.0 or later"),hm(),zn(Ct,"scroll",el);var i=At.hasAttribute("style"),a=At.style,r=a.borderTopStyle,s=we.core.Animation.prototype,o,l;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),a.borderTopStyle="solid",o=br(At),wn.m=Math.round(o.top+wn.sc())||0,_i.m=Math.round(o.left+_i.sc())||0,r?a.borderTopStyle=r:a.removeProperty("border-top-style"),i||(At.setAttribute("style",""),At.removeAttribute("style")),kf=setInterval(JS,250),we.delayedCall(.5,function(){return Xf=0}),zn(Ct,"touchcancel",Xa),zn(At,"touchstart",Xa),Yf(zn,Ct,"pointerdown,touchstart,mousedown",ZS),Yf(zn,Ct,"pointerup,touchend,mouseup",KS),lg=we.utils.checkPrefix("transform"),Xh.push(lg),vl=ni(),Pd=we.delayedCall(.2,ho).pause(),xl=[Ct,"visibilitychange",function(){var u=ot.innerWidth,d=ot.innerHeight;Ct.hidden?(XS=u,WS=d):(XS!==u||WS!==d)&&ru()},Ct,"DOMContentLoaded",ho,ot,"load",ho,ot,"resize",ru],Wf(zn),at.forEach(function(u){return u.enable(0,1)}),l=0;l<lt.length;l+=3)qf(Fn,lt[l],lt[l+1]),qf(Fn,lt[l],lt[l+2])}else if(Ct){var c=function u(){t.enable(),Ct.removeEventListener("DOMContentLoaded",u)};Ct.addEventListener("DOMContentLoaded",c)}}},t.config=function(i){"limitCallbacks"in i&&(um=!!i.limitCallbacks);var a=i.syncInterval;a&&clearInterval(kf)||(kf=a)&&setInterval(JS,a),"ignoreMobileResize"in i&&(cg=t.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Wf(Fn)||Wf(zn,i.autoRefreshEvents||"none"),pT=(i.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(i,a){var r=Ti(i),s=lt.indexOf(r),o=Lo(r);~s&&lt.splice(s,o?6:2),a&&(o?tr.unshift(ot,a,At,a,Xi,a):tr.unshift(r,a))},t.clearMatchMedia=function(i){at.forEach(function(a){return a._ctx&&a._ctx.query===i&&a._ctx.kill(!0,!0)})},t.isInViewport=function(i,a,r){var s=(Gi(i)?Ti(i):i).getBoundingClientRect(),o=s[r?To:Ao]*a||0;return r?s.right-o>0&&s.left+o<ot.innerWidth:s.bottom-o>0&&s.top+o<ot.innerHeight},t.positionInViewport=function(i,a,r){Gi(i)&&(i=Ti(i));var s=i.getBoundingClientRect(),o=s[r?To:Ao],l=a==null?o/2:a in Fd?Fd[a]*o:~a.indexOf("%")?parseFloat(a)*o/100:parseFloat(a)||0;return r?(s.left+l)/ot.innerWidth:(s.top+l)/ot.innerHeight},t.killAll=function(i){if(at.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var a=Oo.killAll||[];Oo={},a.forEach(function(r){return r()})}},t}();dt.version="3.15.0";dt.saveStyles=function(t){return t?nf(t).forEach(function(e){if(e&&e.style){var n=Bi.indexOf(e);n>=0&&Bi.splice(n,5),Bi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),ug())}}):Bi};dt.revert=function(t,e){return Nv(!t,e)};dt.create=function(t,e){return new dt(t,e)};dt.refresh=function(t){return t?ru(!0):(vl||dt.register())&&ho(!0)};dt.update=function(t){return++lt.cache&&Or(t===!0?2:0)};dt.clearScrollMemory=RT;dt.maxScroll=function(t,e){return ja(t,e?_i:wn)};dt.getScrollFunc=function(t,e){return ks(Ti(t),e?_i:wn)};dt.getById=function(t){return hg[t]};dt.getAll=function(){return at.filter(function(t){return t.vars.id!=="ScrollSmoother"})};dt.isScrolling=function(){return!!Aa};dt.snapDirectional=Uv;dt.addEventListener=function(t,e){var n=Oo[t]||(Oo[t]=[]);~n.indexOf(e)||n.push(e)};dt.removeEventListener=function(t,e){var n=Oo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)};dt.batch=function(t,e){var n=[],i={},a=e.interval||.016,r=e.batchMax||1e9,s=function(c,u){var d=[],f=[],h=we.delayedCall(a,function(){u(d,f),d=[],f=[]}).pause();return function(_){d.length||h.restart(!0),d.push(_.trigger),f.push(_),r<=d.length&&h.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&ai(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return ai(r)&&(r=r(),zn(dt,"refresh",function(){return r=e.batchMax()})),nf(t).forEach(function(l){var c={};for(o in i)c[o]=i[o];c.trigger=l,n.push(dt.create(c))}),n};var ay=function(e,n,i,a){return n>a?e(a):n<0&&e(0),i>a?(a-n)/(i-n):i<0?n/(n-i):1},pm=function t(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(mn.isTouch?" pinch-zoom":""):"none",e===Xi&&t(At,n)},Jf={auto:1,scroll:1},qw=function(e){var n=e.event,i=e.target,a=e.axis,r=(n.changedTouches?n.changedTouches[0]:n).target,s=r._gsap||we.core.getCache(r),o=ni(),l;if(!s._isScrollT||o-s._isScrollT>2e3){for(;r&&r!==At&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Jf[(l=ga(r)).overflowY]||Jf[l.overflowX]));)r=r.parentNode;s._isScroll=r&&r!==i&&!Lo(r)&&(Jf[(l=ga(r)).overflowY]||Jf[l.overflowX]),s._isScrollT=o}(s._isScroll||a==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},DT=function(e,n,i,a){return mn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:a=a&&qw,onPress:a,onDrag:a,onScroll:a,onEnable:function(){return i&&zn(Ct,mn.eventTypes[0],sy,!1,!0)},onDisable:function(){return Fn(Ct,mn.eventTypes[0],sy,!0)}})},Zw=/(input|label|select|textarea)/i,ry,sy=function(e){var n=Zw.test(e.target.tagName);(n||ry)&&(e._gsapAllow=!0,ry=n)},Kw=function(e){oo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,i=n.normalizeScrollX,a=n.momentum,r=n.allowNestedScroll,s=n.onRelease,o,l,c=Ti(e.target)||Xi,u=we.core.globals().ScrollSmoother,d=u&&u.get(),f=rs&&(e.content&&Ti(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=ks(c,wn),_=ks(c,_i),v=1,m=(mn.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,p=0,g=ai(a)?function(){return a(o)}:function(){return a||2.8},S,x,b=DT(c,e.type,!0,r),A=function(){return x=!1},E=Xa,y=Xa,T=function(){l=ja(c,wn),y=Ru(rs?1:0,l),i&&(E=Ru(0,ja(c,_i))),S=Ro},C=function(){f._gsap.y=iu(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},L=function(){if(x){requestAnimationFrame(A);var I=iu(o.deltaY/2),V=y(h.v-I);if(f&&V!==h.v+h.offset){h.offset=V-h.v;var D=iu((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",h.cacheID=lt.cache,Or()}return!0}h.offset&&C(),x=!0},P,q,X,O,N=function(){T(),P.isActive()&&P.vars.scrollY>l&&(h()>l?P.progress(1)&&h(l):P.resetTo("scrollY",l))};return f&&we.set(f,{y:"+=0"}),e.ignoreCheck=function(U){return rs&&U.type==="touchmove"&&L()||v>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){x=!1;var U=v;v=iu((ot.visualViewport&&ot.visualViewport.scale||1)/m),P.pause(),U!==v&&pm(c,v>1.01?!0:i?!1:"x"),q=_(),X=h(),T(),S=Ro},e.onRelease=e.onGestureStart=function(U,I){if(h.offset&&C(),!I)O.restart(!0);else{lt.cache++;var V=g(),D,ie;i&&(D=_(),ie=D+V*.05*-U.velocityX/.227,V*=ay(_,D,ie,ja(c,_i)),P.vars.scrollX=E(ie)),D=h(),ie=D+V*.05*-U.velocityY/.227,V*=ay(h,D,ie,ja(c,wn)),P.vars.scrollY=y(ie),P.invalidate().duration(V).play(.01),(rs&&P.vars.scrollY>=l||D>=l-1)&&we.to({},{onUpdate:N,duration:V})}s&&s(U)},e.onWheel=function(){P._ts&&P.pause(),ni()-p>1e3&&(S=0,p=ni())},e.onChange=function(U,I,V,D,ie){if(Ro!==S&&T(),I&&i&&_(E(D[2]===I?q+(U.startX-U.x):_()+I-D[1])),V){h.offset&&C();var fe=ie[2]===V,Be=fe?X+U.startY-U.y:h()+V-ie[1],Le=y(Be);fe&&Be!==Le&&(X+=Le-Be),h(Le)}(V||I)&&Or()},e.onEnable=function(){pm(c,i?!1:"x"),dt.addEventListener("refresh",N),zn(ot,"resize",N),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),b.enable()},e.onDisable=function(){pm(c,!0),Fn(ot,"resize",N),dt.removeEventListener("refresh",N),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new mn(e),o.iOS=rs,rs&&!h()&&h(1),rs&&we.ticker.add(Xa),O=o._dc,P=we.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:wT(h,h(),function(){return P.pause()})},onUpdate:Or,onComplete:O.vars.onComplete}),o};dt.sort=function(t){if(ai(t))return at.sort(t);var e=ot.pageYOffset||0;return dt.getAll().forEach(function(n){return n._sortY=n.trigger?e+n.trigger.getBoundingClientRect().top:n.start+ot.innerHeight}),at.sort(t||function(n,i){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};dt.observe=function(t){return new mn(t)};dt.normalizeScroll=function(t){if(typeof t>"u")return di;if(t===!0&&di)return di.enable();if(t===!1){di&&di.kill(),di=t;return}var e=t instanceof mn?t:Kw(t);return di&&di.target===e.target&&di.kill(),Lo(e.target)&&(di=e),e};dt.core={_getVelocityProp:og,_inputObserver:DT,_scrollers:lt,_proxies:tr,bridge:{ss:function(){Aa||Po("scrollStart"),Aa=ni()},ref:function(){return ti}}};vT()&&we.registerPlugin(dt);class Qw{constructor(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}setText(e){const n=this.el.innerText,i=Math.max(n.length,e.length),a=new Promise(r=>this.resolve=r);this.queue=[];for(let r=0;r<i;r++){const s=n[r]||"",o=e[r]||"",l=Math.floor(Math.random()*40),c=l+Math.floor(Math.random()*40);this.queue.push({from:s,to:o,start:l,end:c})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),a}update(){let e="",n=0;for(let i=0,a=this.queue.length;i<a;i++){let{from:r,to:s,start:o,end:l,char:c}=this.queue[i];this.frame>=l?(n++,e+=s):this.frame>=o?((!c||Math.random()<.28)&&(c=this.randomChar(),this.queue[i].char=c),e+=`<span class="dud">${c}</span>`):e+=r}this.el.innerHTML=e,n===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}function jw(){const[t,e]=We.useState(!1),[n,i]=We.useState(!1),a=We.useRef(null),r=We.useRef(null),s=We.useRef(null);We.useEffect(()=>{const c=()=>e(window.scrollY>80);return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),We.useEffect(()=>{if(a.current){const c=a.current.querySelectorAll(".navbar__cta");rt.fromTo(c,{y:-20,opacity:0},{y:0,opacity:1,duration:.6,ease:"power3.out",delay:4.3})}r.current&&(s.current=new Qw(r.current))},[]);const o=()=>{s.current&&s.current.setText("Portfolio")},l=[{label:"About",href:"#about"},{label:"Work",href:"#work"},{label:"Strengths",href:"#strengths"},{label:"Contact",href:"#contact"}];return G.jsx("nav",{ref:a,className:`navbar ${t?"navbar--scrolled":""}`,children:G.jsxs("div",{className:"navbar__inner container",children:[G.jsxs("a",{href:"#",className:"navbar__logo magnetic",onMouseEnter:o,children:[G.jsx("span",{className:"navbar__logo-dot",children:"◆"})," ",G.jsx("span",{ref:r,children:"Portfolio"})]}),G.jsx("div",{className:"navbar__desktop-nav",children:l.map(c=>G.jsx("a",{href:c.href,className:"navbar__link magnetic",children:c.label},c.href))}),G.jsx("a",{href:"#contact",className:"navbar__cta magnetic",onClick:()=>i(!1),children:"Get in Touch"}),G.jsxs("div",{className:`navbar__links ${n?"navbar__links--open":""}`,children:[l.map(c=>G.jsx("a",{href:c.href,className:"navbar__link magnetic",onClick:()=>i(!1),children:c.label},c.href)),G.jsx("a",{href:"#contact",className:"navbar__cta mobile-cta magnetic",onClick:()=>i(!1),children:"Get in Touch"})]}),G.jsxs("button",{className:"navbar__burger",onClick:()=>i(!n),"aria-label":"Toggle menu","aria-expanded":n,children:[G.jsx("span",{}),G.jsx("span",{}),G.jsx("span",{})]})]})})}function Jw(){const t=We.useRef(null),[e,n]=We.useState(!1);return We.useEffect(()=>{const i=t.current;if(!i)return;const a=i.getContext("2d");let r,s,o,l=Date.now();const c=4e3,u=()=>{s=i.width=window.innerWidth,o=i.height=window.innerHeight};u(),window.addEventListener("resize",u);const d=[],f=Math.floor(s*o/600);for(let v=0;v<f;v++){const m=Math.random()*Math.PI*2,p=Math.random()*Math.min(s,o)*.4,g=s/2+Math.cos(m)*p*(.5+Math.random()*.5),S=o/2+Math.sin(m)*p*(.7+Math.random()*.3)-o*.05,x=Math.random();let b;if(x<.4)b={r:0,g:229,b:255};else if(x<.6)b={r:255,g:0,b:110};else{const A=180+Math.floor(Math.random()*75);b={r:A,g:A,b:A+20}}d.push({x:g,y:S,baseX:g,baseY:S,size:Math.random()*2+.5,color:b,speed:.2+Math.random()*.5,phase:Math.random()*Math.PI*2,alpha:0,targetAlpha:.3+Math.random()*.7,glitchOffset:0})}const h=[];for(let v=0;v<8;v++)h.push({x:Math.random()*s,y:Math.random()*o,width:50+Math.random()*200,height:2+Math.random()*4,alpha:0});const _=()=>{const v=Date.now()-l,m=Math.min(v/c,1);if(m>.85){const S=(m-.85)/.15;a.fillStyle=`rgba(5, 5, 8, ${S})`,a.fillRect(0,0,s,o)}else a.fillStyle="rgba(5, 5, 8, 0.1)",a.fillRect(0,0,s,o);const p=m*Math.max(s,o)*.8;for(const S of d){Math.sqrt(Math.pow(S.baseX-s/2,2)+Math.pow(S.baseY-o/2,2))<p&&(S.alpha+=(S.targetAlpha-S.alpha)*.05),Math.random()<.002?S.glitchOffset=(Math.random()-.5)*40:S.glitchOffset*=.9;const b=Math.sin(v*.001*S.speed+S.phase)*2,A=Math.cos(v*7e-4*S.speed+S.phase)*1.5,E=S.baseX+b+S.glitchOffset,y=S.baseY+A;a.fillStyle=`rgba(${S.color.r}, ${S.color.g}, ${S.color.b}, ${S.alpha})`,a.fillRect(E,y,S.size,S.size)}for(const S of h)if(Math.random()<.01?(S.alpha=.3+Math.random()*.4,S.x=Math.random()*s,S.y=Math.random()*o):S.alpha*=.95,S.alpha>.01){const x=Math.random()>.5;a.fillStyle=x?`rgba(0, 229, 255, ${S.alpha})`:`rgba(255, 0, 110, ${S.alpha})`,a.fillRect(S.x,S.y,S.width,S.height)}const g=v*.1%o;a.fillStyle="rgba(0, 229, 255, 0.1)",a.fillRect(0,g,s,2),Math.random()<.003&&(a.fillStyle=`rgba(0, 229, 255, ${.05+Math.random()*.1})`,a.fillRect(0,0,s,o)),m<1?r=requestAnimationFrame(_):n(!0)};return a.fillStyle="#050508",a.fillRect(0,0,s,o),_(),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",u)}},[]),G.jsx("canvas",{ref:t,className:`hero__canvas ${e?"hero__canvas--faded":""}`})}function $w(){const t=We.useRef(null);return We.useEffect(()=>{const e=rt.context(()=>{const n=rt.timeline({delay:4.2});n.fromTo(".hero__tag",{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:"power3.out"}),n.fromTo(".hero__title-line",{opacity:0,y:60,clipPath:"inset(0 0 100% 0)"},{opacity:1,y:0,clipPath:"inset(0 0 0% 0)",duration:1,stagger:.15,ease:"power4.out"},"-=0.4"),n.fromTo(".hero__subtitle",{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=0.5"),n.fromTo(".hero__actions",{opacity:0,y:30},{opacity:1,y:0,duration:.6,stagger:.12,ease:"power3.out"},"-=0.4"),n.fromTo(".hero__scroll",{opacity:0},{opacity:1,duration:.6},"-=0.2")},t);return()=>e.revert()},[]),G.jsxs("section",{ref:t,className:"hero",id:"hero",children:[G.jsx(Jw,{}),G.jsx("div",{className:"hero__scanlines"}),G.jsx("div",{className:"hero__vignette"}),G.jsx("div",{className:"hero__glitch-line"}),G.jsxs("div",{className:"hero__content container",children:[G.jsxs("div",{className:"hero__tag",children:[G.jsx("span",{className:"hero__tag-dot"}),"UI Designer  ·  Visual Designer  ·  Web Designer  ·  Brand Designer"]}),G.jsxs("h1",{className:"hero__title",children:[G.jsx("span",{className:"hero__title-line",children:G.jsxs("span",{className:"hero__glitch-title","data-text":"Crafting Digital",children:["Crafting ",G.jsx("em",{children:"Digital"})]})}),G.jsx("br",{}),G.jsx("span",{className:"hero__title-line",children:"Experiences That"}),G.jsx("br",{}),G.jsx("span",{className:"hero__title-line hero__title-line--accent",children:G.jsx("span",{className:"hero__title-accent",children:"Resonate"})})]}),G.jsx("p",{className:"hero__subtitle",children:"5+ years of UI design experience, focusing on website interface design and user experience optimization. Created digital products that combine aesthetics with functionality for multiple restaurants in Blackpool, UK and domestic enterprises, pursuing pixel-perfect design."}),G.jsxs("div",{className:"hero__actions",children:[G.jsx("a",{href:"#work",className:"hero__action-btn magnetic",children:"View Projects"}),G.jsx("a",{href:"#about",className:"hero__action-btn magnetic",children:"About Me"}),G.jsx("a",{href:"#strengths",className:"hero__action-btn magnetic",children:"My Strengths"}),G.jsx("a",{href:"#contact",className:"hero__action-btn hero__action-btn--primary magnetic",children:"Contact Me"})]})]}),G.jsxs("div",{className:"hero__scroll",children:[G.jsx("div",{className:"hero__scroll-line"}),G.jsx("span",{children:"Scroll"})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lv="185",e3=0,oy=1,t3=2,Yh=1,n3=2,su=3,Xs=0,Ni=1,Tr=2,Pr=0,Kl=1,ly=2,cy=3,uy=4,i3=5,co=100,a3=101,r3=102,s3=103,o3=104,l3=200,c3=201,u3=202,f3=203,mg=204,_g=205,h3=206,d3=207,p3=208,m3=209,_3=210,g3=211,v3=212,x3=213,S3=214,gg=0,vg=1,xg=2,mc=3,Sg=4,yg=5,Mg=6,Eg=7,UT=0,y3=1,M3=2,nr=0,NT=1,LT=2,OT=3,PT=4,IT=5,FT=6,zT=7,BT=300,Io=301,_c=302,mm=303,_m=304,pp=306,bg=1e3,Dr=1001,Tg=1002,Zn=1003,E3=1004,$f=1005,ri=1006,gm=1007,po=1008,ya=1009,HT=1010,GT=1011,rf=1012,Ov=1013,sr=1014,Ja=1015,Wr=1016,Pv=1017,Iv=1018,sf=1020,VT=35902,kT=35899,XT=1021,WT=1022,Ia=1023,Yr=1026,mo=1027,YT=1028,Fv=1029,Fo=1030,zv=1031,Bv=1033,qh=33776,Zh=33777,Kh=33778,Qh=33779,Ag=35840,Rg=35841,Cg=35842,wg=35843,Dg=36196,Ug=37492,Ng=37496,Lg=37488,Og=37489,zd=37490,Pg=37491,Ig=37808,Fg=37809,zg=37810,Bg=37811,Hg=37812,Gg=37813,Vg=37814,kg=37815,Xg=37816,Wg=37817,Yg=37818,qg=37819,Zg=37820,Kg=37821,Qg=36492,jg=36494,Jg=36495,$g=36283,e0=36284,Bd=36285,t0=36286,b3=3200,fy=0,T3=1,hs="",ha="srgb",Hd="srgb-linear",Gd="linear",wt="srgb",tl=7680,hy=519,A3=512,R3=513,C3=514,Hv=515,w3=516,D3=517,Gv=518,U3=519,dy=35044,py="300 es",$a=2e3,Vd=2001;function N3(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kd(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function L3(){const t=kd("canvas");return t.style.display="block",t}const my={};function _y(...t){const e="THREE."+t.shift();console.log(e,...t)}function qT(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function qe(...t){t=qT(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function yt(...t){t=qT(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ql(...t){const e=t.join(" ");e in my||(my[e]=!0,qe(...t))}function O3(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const P3={[gg]:vg,[xg]:Mg,[Sg]:Eg,[mc]:yg,[vg]:gg,[Mg]:xg,[Eg]:Sg,[yg]:mc};class Wo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vm=Math.PI/180,n0=180/Math.PI;function Sf(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($n[t&255]+$n[t>>8&255]+$n[t>>16&255]+$n[t>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[n&63|128]+$n[n>>8&255]+"-"+$n[n>>16&255]+$n[n>>24&255]+$n[i&255]+$n[i>>8&255]+$n[i>>16&255]+$n[i>>24&255]).toLowerCase()}function gt(t,e,n){return Math.max(e,Math.min(n,t))}function I3(t,e){return(t%e+e)%e}function xm(t,e,n){return(1-n)*t+n*e}function Bc(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Wv=class Wv{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wv.prototype.isVector2=!0;let ht=Wv;class Rc{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],u=i[a+2],d=i[a+3],f=r[s+0],h=r[s+1],_=r[s+2],v=r[s+3];if(d!==v||l!==f||c!==h||u!==_){let m=l*f+c*h+u*_+d*v;m<0&&(f=-f,h=-h,_=-_,v=-v,m=-m);let p=1-o;if(m<.9995){const g=Math.acos(m),S=Math.sin(g);p=Math.sin(p*g)/S,o=Math.sin(o*g)/S,l=l*p+f*o,c=c*p+h*o,u=u*p+_*o,d=d*p+v*o}else{l=l*p+f*o,c=c*p+h*o,u=u*p+_*o,d=d*p+v*o;const g=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=g,c*=g,u*=g,d*=g}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],u=i[a+3],d=r[s],f=r[s+1],h=r[s+2],_=r[s+3];return e[n]=o*_+u*d+l*h-c*f,e[n+1]=l*_+u*f+c*d-o*h,e[n+2]=c*_+u*h+o*f-l*d,e[n+3]=u*_-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(a/2),d=o(r/2),f=l(i/2),h=l(a/2),_=l(r/2);switch(s){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(s-a)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(a+s)/h,this._z=(r+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(r-c)/h,this._x=(a+s)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(s-a)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*o+a*c-r*l,this._y=a*u+s*l+r*o-i*c,this._z=r*u+s*c+i*l-a*o,this._w=s*u-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yv=class Yv{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gy.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gy.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),u=2*(o*n-r*a),d=2*(r*i-s*n);return this.x=n+l*c+s*d-o*u,this.y=i+l*u+o*c-r*d,this.z=a+l*d+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sm.copy(this).projectOnVector(e),this.sub(Sm)}reflect(e){return this.sub(Sm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yv.prototype.isVector3=!0;let K=Yv;const Sm=new K,gy=new Rc,qv=class qv{constructor(e,n,i,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c)}set(e,n,i,a,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],_=i[8],v=a[0],m=a[3],p=a[6],g=a[1],S=a[4],x=a[7],b=a[2],A=a[5],E=a[8];return r[0]=s*v+o*g+l*b,r[3]=s*m+o*S+l*A,r[6]=s*p+o*x+l*E,r[1]=c*v+u*g+d*b,r[4]=c*m+u*S+d*A,r[7]=c*p+u*x+d*E,r[2]=f*v+h*g+_*b,r[5]=f*m+h*S+_*A,r[8]=f*p+h*x+_*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*o*c-i*r*u+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,f=o*l-u*r,h=c*r-s*l,_=n*d+i*f+a*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(a*c-u*i)*v,e[2]=(o*i-a*s)*v,e[3]=f*v,e[4]=(u*n-a*l)*v,e[5]=(a*r-o*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(s*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return Ql("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ym.makeScale(e,n)),this}rotate(e){return Ql("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ym.makeRotation(-e)),this}translate(e,n){return Ql("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ym.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qv.prototype.isMatrix3=!0;let Je=qv;const ym=new Je,vy=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xy=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F3(){const t={enabled:!0,workingColorSpace:Hd,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===wt&&(a.r=Ir(a.r),a.g=Ir(a.g),a.b=Ir(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===wt&&(a.r=jl(a.r),a.g=jl(a.g),a.b=jl(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===hs?Gd:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Ql("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Ql("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Hd]:{primaries:e,whitePoint:i,transfer:Gd,toXYZ:vy,fromXYZ:xy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ha},outputColorSpaceConfig:{drawingBufferColorSpace:ha}},[ha]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:vy,fromXYZ:xy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ha}}}),t}const _t=F3();function Ir(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let nl;class z3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{nl===void 0&&(nl=kd("canvas")),nl.width=e.width,nl.height=e.height;const a=nl.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=nl}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kd("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Ir(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ir(n[i]/255)*255):n[i]=Ir(n[i]);return{data:n,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B3=0;class Vv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B3++}),this.uuid=Sf(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Mm(a[s].image)):r.push(Mm(a[s]))}else r=Mm(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function Mm(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?z3.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let H3=0;const Em=new K;class vi extends Wo{constructor(e=vi.DEFAULT_IMAGE,n=vi.DEFAULT_MAPPING,i=Dr,a=Dr,r=ri,s=po,o=Ia,l=ya,c=vi.DEFAULT_ANISOTROPY,u=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H3++}),this.uuid=Sf(),this.name="",this.source=new Vv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Em).x}get height(){return this.source.getSize(Em).y}get depth(){return this.source.getSize(Em).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){qe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){qe(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==BT)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bg:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case Tg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bg:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case Tg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=BT;vi.DEFAULT_ANISOTROPY=1;const Zv=class Zv{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,x=(h+1)/2,b=(p+1)/2,A=(u+f)/4,E=(d+v)/4,y=(_+m)/4;return S>x&&S>b?S<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(S),a=A/i,r=E/i):x>b?x<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(x),i=A/a,r=y/a):b<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(b),i=E/r,a=y/r),this.set(i,a,r,n),this}let g=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-v)/g,this.z=(f-u)/g,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zv.prototype.isVector4=!0;let ln=Zv;class G3 extends Wo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new ln(0,0,e,n),this.scissorTest=!1,this.viewport=new ln(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},r=new vi(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Vv(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends G3{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ZT extends vi{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class V3 extends vi{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xd=class Xd{constructor(e,n,i,a,r,s,o,l,c,u,d,f,h,_,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c,u,d,f,h,_,v,m)}set(e,n,i,a,r,s,o,l,c,u,d,f,h,_,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=a,p[1]=r,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xd().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/il.setFromMatrixColumn(e,0).length(),r=1/il.setFromMatrixColumn(e,1).length(),s=1/il.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=s*u,h=s*d,_=o*u,v=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+_*c,n[5]=f-v*c,n[9]=-o*l,n[2]=v-f*c,n[6]=_+h*c,n[10]=s*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,v=c*d;n[0]=f+v*o,n[4]=_*o-h,n[8]=s*c,n[1]=s*d,n[5]=s*u,n[9]=-o,n[2]=h*o-_,n[6]=v+f*o,n[10]=s*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,v=c*d;n[0]=f-v*o,n[4]=-s*d,n[8]=_+h*o,n[1]=h+_*o,n[5]=s*u,n[9]=v-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const f=s*u,h=s*d,_=o*u,v=o*d;n[0]=l*u,n[4]=_*c-h,n[8]=f*c+v,n[1]=l*d,n[5]=v*c+f,n[9]=h*c-_,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,h=s*c,_=o*l,v=o*c;n[0]=l*u,n[4]=v-f*d,n[8]=_*d+h,n[1]=d,n[5]=s*u,n[9]=-o*u,n[2]=-c*u,n[6]=h*d+_,n[10]=f-v*d}else if(e.order==="XZY"){const f=s*l,h=s*c,_=o*l,v=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+v,n[5]=s*u,n[9]=h*d-_,n[2]=_*d-h,n[6]=o*u,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k3,e,X3)}lookAt(e,n,i){const a=this.elements;return Fi.subVectors(e,n),Fi.lengthSq()===0&&(Fi.z=1),Fi.normalize(),$r.crossVectors(i,Fi),$r.lengthSq()===0&&(Math.abs(i.z)===1?Fi.x+=1e-4:Fi.z+=1e-4,Fi.normalize(),$r.crossVectors(i,Fi)),$r.normalize(),eh.crossVectors(Fi,$r),a[0]=$r.x,a[4]=eh.x,a[8]=Fi.x,a[1]=$r.y,a[5]=eh.y,a[9]=Fi.y,a[2]=$r.z,a[6]=eh.z,a[10]=Fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],_=i[2],v=i[6],m=i[10],p=i[14],g=i[3],S=i[7],x=i[11],b=i[15],A=a[0],E=a[4],y=a[8],T=a[12],C=a[1],L=a[5],P=a[9],q=a[13],X=a[2],O=a[6],N=a[10],U=a[14],I=a[3],V=a[7],D=a[11],ie=a[15];return r[0]=s*A+o*C+l*X+c*I,r[4]=s*E+o*L+l*O+c*V,r[8]=s*y+o*P+l*N+c*D,r[12]=s*T+o*q+l*U+c*ie,r[1]=u*A+d*C+f*X+h*I,r[5]=u*E+d*L+f*O+h*V,r[9]=u*y+d*P+f*N+h*D,r[13]=u*T+d*q+f*U+h*ie,r[2]=_*A+v*C+m*X+p*I,r[6]=_*E+v*L+m*O+p*V,r[10]=_*y+v*P+m*N+p*D,r[14]=_*T+v*q+m*U+p*ie,r[3]=g*A+S*C+x*X+b*I,r[7]=g*E+S*L+x*O+b*V,r[11]=g*y+S*P+x*N+b*D,r[15]=g*T+S*q+x*U+b*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],v=e[7],m=e[11],p=e[15],g=l*h-c*f,S=o*h-c*d,x=o*f-l*d,b=s*h-c*u,A=s*f-l*u,E=s*d-o*u;return n*(v*g-m*S+p*x)-i*(_*g-m*b+p*A)+a*(_*S-v*b+p*E)-r*(_*x-v*A+m*E)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(s*u-o*c)-i*(r*u-o*l)+a*(r*c-s*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],v=e[13],m=e[14],p=e[15],g=n*o-i*s,S=n*l-a*s,x=n*c-r*s,b=i*l-a*o,A=i*c-r*o,E=a*c-r*l,y=u*v-d*_,T=u*m-f*_,C=u*p-h*_,L=d*m-f*v,P=d*p-h*v,q=f*p-h*m,X=g*q-S*P+x*L+b*C-A*T+E*y;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/X;return e[0]=(o*q-l*P+c*L)*O,e[1]=(a*P-i*q-r*L)*O,e[2]=(v*E-m*A+p*b)*O,e[3]=(f*A-d*E-h*b)*O,e[4]=(l*C-s*q-c*T)*O,e[5]=(n*q-a*C+r*T)*O,e[6]=(m*x-_*E-p*S)*O,e[7]=(u*E-f*x+h*S)*O,e[8]=(s*P-o*C+c*y)*O,e[9]=(i*C-n*P-r*y)*O,e[10]=(_*A-v*x+p*g)*O,e[11]=(d*x-u*A-h*g)*O,e[12]=(o*T-s*L-l*y)*O,e[13]=(n*L-i*T+a*y)*O,e[14]=(v*S-_*b-m*g)*O,e[15]=(u*b-d*S+f*g)*O,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+i,u*l-a*s,0,c*l-a*o,u*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,u=s+s,d=o+o,f=r*c,h=r*u,_=r*d,v=s*u,m=s*d,p=o*d,g=l*c,S=l*u,x=l*d,b=i.x,A=i.y,E=i.z;return a[0]=(1-(v+p))*b,a[1]=(h+x)*b,a[2]=(_-S)*b,a[3]=0,a[4]=(h-x)*A,a[5]=(1-(f+p))*A,a[6]=(m+g)*A,a[7]=0,a[8]=(_+S)*E,a[9]=(m-g)*E,a[10]=(1-(f+v))*E,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let s=il.set(a[0],a[1],a[2]).length();const o=il.set(a[4],a[5],a[6]).length(),l=il.set(a[8],a[9],a[10]).length();r<0&&(s=-s),wa.copy(this);const c=1/s,u=1/o,d=1/l;return wa.elements[0]*=c,wa.elements[1]*=c,wa.elements[2]*=c,wa.elements[4]*=u,wa.elements[5]*=u,wa.elements[6]*=u,wa.elements[8]*=d,wa.elements[9]*=d,wa.elements[10]*=d,n.setFromRotationMatrix(wa),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,a,r,s,o=$a,l=!1){const c=this.elements,u=2*r/(n-e),d=2*r/(i-a),f=(n+e)/(n-e),h=(i+a)/(i-a);let _,v;if(l)_=r/(s-r),v=s*r/(s-r);else if(o===$a)_=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===Vd)_=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=$a,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-a),f=-(n+e)/(n-e),h=-(i+a)/(i-a);let _,v;if(l)_=1/(s-r),v=s/(s-r);else if(o===$a)_=-2/(s-r),v=-(s+r)/(s-r);else if(o===Vd)_=-1/(s-r),v=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Xd.prototype.isMatrix4=!0;let An=Xd;const il=new K,wa=new An,k3=new K(0,0,0),X3=new K(1,1,1),$r=new K,eh=new K,Fi=new K,Sy=new An,yy=new Rc;class zo{constructor(e=0,n=0,i=0,a=zo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],u=a[9],d=a[2],f=a[6],h=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Sy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sy,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return yy.setFromEuler(this),this.setFromQuaternion(yy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zo.DEFAULT_ORDER="XYZ";class KT{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W3=0;const My=new K,al=new Rc,pr=new An,th=new K,Hc=new K,Y3=new K,q3=new Rc,Ey=new K(1,0,0),by=new K(0,1,0),Ty=new K(0,0,1),Ay={type:"added"},Z3={type:"removed"},rl={type:"childadded",child:null},bm={type:"childremoved",child:null};class na extends Wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W3++}),this.uuid=Sf(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=na.DEFAULT_UP.clone();const e=new K,n=new zo,i=new Rc,a=new K(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new An},normalMatrix:{value:new Je}}),this.matrix=new An,this.matrixWorld=new An,this.matrixAutoUpdate=na.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=na.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new KT,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return al.setFromAxisAngle(e,n),this.quaternion.multiply(al),this}rotateOnWorldAxis(e,n){return al.setFromAxisAngle(e,n),this.quaternion.premultiply(al),this}rotateX(e){return this.rotateOnAxis(Ey,e)}rotateY(e){return this.rotateOnAxis(by,e)}rotateZ(e){return this.rotateOnAxis(Ty,e)}translateOnAxis(e,n){return My.copy(e).applyQuaternion(this.quaternion),this.position.add(My.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ey,e)}translateY(e){return this.translateOnAxis(by,e)}translateZ(e){return this.translateOnAxis(Ty,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?th.copy(e):th.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Hc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Hc,th,this.up):pr.lookAt(th,Hc,this.up),this.quaternion.setFromRotationMatrix(pr),a&&(pr.extractRotation(a.matrixWorld),al.setFromRotationMatrix(pr),this.quaternion.premultiply(al.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ay),rl.child=e,this.dispatchEvent(rl),rl.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Z3),bm.child=e,this.dispatchEvent(bm),bm.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ay),rl.child=e,this.dispatchEvent(rl),rl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hc,e,Y3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hc,q3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),h=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=a,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}na.DEFAULT_UP=new K(0,1,0);na.DEFAULT_MATRIX_AUTO_UPDATE=!0;na.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nh extends na{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K3={type:"move"};class Tm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nh,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nh,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nh,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K3)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new nh;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const QT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},ih={h:0,s:0,l:0};function Am(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ha){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=_t.workingColorSpace){return this.r=e,this.g=n,this.b=i,_t.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=_t.workingColorSpace){if(e=I3(e,1),n=gt(n,0,1),i=gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Am(s,r,e+1/3),this.g=Am(s,r,e),this.b=Am(s,r,e-1/3)}return _t.colorSpaceToWorking(this,a),this}setStyle(e,n=ha){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:qe("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ha){const i=QT[e.toLowerCase()];return i!==void 0?this.setHex(i,n):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=jl(e.r),this.g=jl(e.g),this.b=jl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ha){return _t.workingToColorSpace(ei.copy(this),e),Math.round(gt(ei.r*255,0,255))*65536+Math.round(gt(ei.g*255,0,255))*256+Math.round(gt(ei.b*255,0,255))}getHexString(e=ha){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=_t.workingColorSpace){_t.workingToColorSpace(ei.copy(this),n);const i=ei.r,a=ei.g,r=ei.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case i:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-i)/d+2;break;case r:l=(i-a)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=_t.workingColorSpace){return _t.workingToColorSpace(ei.copy(this),n),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=ha){_t.workingToColorSpace(ei.copy(this),e);const n=ei.r,i=ei.g,a=ei.b;return e!==ha?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(es),this.setHSL(es.h+e,es.s+n,es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(es),e.getHSL(ih);const i=xm(es.h,ih.h,n),a=xm(es.s,ih.s,n),r=xm(es.l,ih.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new Rt;Rt.NAMES=QT;class Q3 extends na{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zo,this.environmentIntensity=1,this.environmentRotation=new zo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Da=new K,mr=new K,Rm=new K,_r=new K,sl=new K,ol=new K,Ry=new K,Cm=new K,wm=new K,Dm=new K,Um=new ln,Nm=new ln,Lm=new ln;class Pa{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),Da.subVectors(e,n),a.cross(Da);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){Da.subVectors(a,n),mr.subVectors(i,n),Rm.subVectors(e,n);const s=Da.dot(Da),o=Da.dot(mr),l=Da.dot(Rm),c=mr.dot(mr),u=mr.dot(Rm),d=s*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,_=(s*u-o*l)*f;return r.set(1-h-_,_,h)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,_r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_r.x),l.addScaledVector(s,_r.y),l.addScaledVector(o,_r.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return Um.setScalar(0),Nm.setScalar(0),Lm.setScalar(0),Um.fromBufferAttribute(e,n),Nm.fromBufferAttribute(e,i),Lm.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Um,r.x),s.addScaledVector(Nm,r.y),s.addScaledVector(Lm,r.z),s}static isFrontFacing(e,n,i,a){return Da.subVectors(i,n),mr.subVectors(e,n),Da.cross(mr).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Da.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Da.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pa.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return Pa.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return Pa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let s,o;sl.subVectors(a,i),ol.subVectors(r,i),Cm.subVectors(e,i);const l=sl.dot(Cm),c=ol.dot(Cm);if(l<=0&&c<=0)return n.copy(i);wm.subVectors(e,a);const u=sl.dot(wm),d=ol.dot(wm);if(u>=0&&d<=u)return n.copy(a);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(sl,s);Dm.subVectors(e,r);const h=sl.dot(Dm),_=ol.dot(Dm);if(_>=0&&h<=_)return n.copy(r);const v=h*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(ol,o);const m=u*_-h*d;if(m<=0&&d-u>=0&&h-_>=0)return Ry.subVectors(r,a),o=(d-u)/(d-u+(h-_)),n.copy(a).addScaledVector(Ry,o);const p=1/(m+v+f);return s=v*p,o=f*p,n.copy(i).addScaledVector(sl,s).addScaledVector(ol,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yf{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ua.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ua.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ua.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ua):Ua.fromBufferAttribute(r,s),Ua.applyMatrix4(e.matrixWorld),this.expandByPoint(Ua);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ah.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ah.copy(i.boundingBox)),ah.applyMatrix4(e.matrixWorld),this.union(ah)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ua),Ua.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gc),rh.subVectors(this.max,Gc),ll.subVectors(e.a,Gc),cl.subVectors(e.b,Gc),ul.subVectors(e.c,Gc),ts.subVectors(cl,ll),ns.subVectors(ul,cl),js.subVectors(ll,ul);let n=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-js.z,js.y,ts.z,0,-ts.x,ns.z,0,-ns.x,js.z,0,-js.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-js.y,js.x,0];return!Om(n,ll,cl,ul,rh)||(n=[1,0,0,0,1,0,0,0,1],!Om(n,ll,cl,ul,rh))?!1:(sh.crossVectors(ts,ns),n=[sh.x,sh.y,sh.z],Om(n,ll,cl,ul,rh))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ua).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ua).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gr=[new K,new K,new K,new K,new K,new K,new K,new K],Ua=new K,ah=new yf,ll=new K,cl=new K,ul=new K,ts=new K,ns=new K,js=new K,Gc=new K,rh=new K,sh=new K,Js=new K;function Om(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){Js.fromArray(t,r);const o=a.x*Math.abs(Js.x)+a.y*Math.abs(Js.y)+a.z*Math.abs(Js.z),l=e.dot(Js),c=n.dot(Js),u=i.dot(Js);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const xn=new K,oh=new ht;let j3=0;class ar extends Wo{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:j3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=dy,this.updateRanges=[],this.gpuType=Ja,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)oh.fromBufferAttribute(this,n),oh.applyMatrix3(e),this.setXY(n,oh.x,oh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix3(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bc(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Mi(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bc(n,this.array)),n}setX(e,n){return this.normalized&&(n=Mi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bc(n,this.array)),n}setY(e,n){return this.normalized&&(n=Mi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bc(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Mi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bc(n,this.array)),n}setW(e,n){return this.normalized&&(n=Mi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Mi(n,this.array),i=Mi(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=Mi(n,this.array),i=Mi(i,this.array),a=Mi(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=Mi(n,this.array),i=Mi(i,this.array),a=Mi(a,this.array),r=Mi(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dy&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class jT extends ar{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class JT extends ar{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Fr extends ar{constructor(e,n,i){super(new Float32Array(e),n,i)}}const J3=new yf,Vc=new K,Pm=new K;class kv{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):J3.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vc.subVectors(e,this.center);const n=Vc.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Vc,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vc.copy(e.center).add(Pm)),this.expandByPoint(Vc.copy(e.center).sub(Pm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $3=0;const ca=new An,Im=new na,fl=new K,zi=new yf,kc=new yf,In=new K;class Zr extends Wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$3++}),this.uuid=Sf(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N3(e)?JT:jT)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ca.makeRotationFromQuaternion(e),this.applyMatrix4(ca),this}rotateX(e){return ca.makeRotationX(e),this.applyMatrix4(ca),this}rotateY(e){return ca.makeRotationY(e),this.applyMatrix4(ca),this}rotateZ(e){return ca.makeRotationZ(e),this.applyMatrix4(ca),this}translate(e,n,i){return ca.makeTranslation(e,n,i),this.applyMatrix4(ca),this}scale(e,n,i){return ca.makeScale(e,n,i),this.applyMatrix4(ca),this}lookAt(e){return Im.lookAt(e),Im.updateMatrix(),this.applyMatrix4(Im.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fl).negate(),this.translate(fl.x,fl.y,fl.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Fr(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];zi.setFromBufferAttribute(r),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,zi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,zi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(zi.min),this.boundingBox.expandByPoint(zi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kv);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(zi.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];kc.setFromBufferAttribute(o),this.morphTargetsRelative?(In.addVectors(zi.min,kc.min),zi.expandByPoint(In),In.addVectors(zi.max,kc.max),zi.expandByPoint(In)):(zi.expandByPoint(kc.min),zi.expandByPoint(kc.max))}zi.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)In.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(In));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)In.fromBufferAttribute(o,c),l&&(fl.fromBufferAttribute(e,c),In.add(fl)),a=Math.max(a,i.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new ar(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new K,l[y]=new K;const c=new K,u=new K,d=new K,f=new ht,h=new ht,_=new ht,v=new K,m=new K;function p(y,T,C){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,C),f.fromBufferAttribute(r,y),h.fromBufferAttribute(r,T),_.fromBufferAttribute(r,C),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const L=1/(h.x*_.y-_.x*h.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(L),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(L),o[y].add(v),o[T].add(v),o[C].add(v),l[y].add(m),l[T].add(m),l[C].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,T=g.length;y<T;++y){const C=g[y],L=C.start,P=C.count;for(let q=L,X=L+P;q<X;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const S=new K,x=new K,b=new K,A=new K;function E(y){b.fromBufferAttribute(a,y),A.copy(b);const T=o[y];S.copy(T),S.sub(b.multiplyScalar(b.dot(T))).normalize(),x.crossVectors(A,T);const L=x.dot(l[y])<0?-1:1;s.setXYZW(y,S.x,S.y,S.z,L)}for(let y=0,T=g.length;y<T;++y){const C=g[y],L=C.start,P=C.count;for(let q=L,X=L+P;q<X;q+=3)E(e.getX(q+0)),E(e.getX(q+1)),E(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ar(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const a=new K,r=new K,s=new K,o=new K,l=new K,c=new K,u=new K,d=new K;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(n,_),r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,m),u.subVectors(s,r),d.subVectors(a,r),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),u.subVectors(s,r),d.subVectors(a,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)In.fromBufferAttribute(e,n),In.normalize(),e.setXYZ(n,In.x,In.y,In.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new ar(f,u,d)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zr,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(a[l]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let eD=0;class mp extends Wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eD++}),this.uuid=Sf(),this.name="",this.type="Material",this.blending=Kl,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mg,this.blendDst=_g,this.blendEquation=co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tl,this.stencilZFail=tl,this.stencilZPass=tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){qe(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){qe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kl&&(i.blending=this.blending),this.side!==Xs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mg&&(i.blendSrc=this.blendSrc),this.blendDst!==_g&&(i.blendDst=this.blendDst),this.blendEquation!==co&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tl&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tl&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tl&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ht().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vr=new K,Fm=new K,lh=new K,is=new K,zm=new K,ch=new K,Bm=new K;class tD{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,n),vr.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Fm.copy(e).add(n).multiplyScalar(.5),lh.copy(n).sub(e).normalize(),is.copy(this.origin).sub(Fm);const r=e.distanceTo(n)*.5,s=-this.direction.dot(lh),o=is.dot(this.direction),l=-is.dot(lh),c=is.lengthSq(),u=Math.abs(1-s*s);let d,f,h,_;if(u>0)if(d=s*l-o,f=s*o-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,h=d*(d+s*f+2*o)+f*(s*d+f+2*l)+c}else f=r,d=Math.max(0,-(s*f+o)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(s*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-s*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(s*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=s>0?-r:r,d=Math.max(0,-(s*f+o)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Fm).addScaledVector(lh,f),h}intersectSphere(e,n){vr.subVectors(e.center,this.origin);const i=vr.dot(this.direction),a=vr.dot(vr)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,n,i,a,r){zm.subVectors(n,e),ch.subVectors(i,e),Bm.crossVectors(zm,ch);let s=this.direction.dot(Bm),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;is.subVectors(this.origin,e);const l=o*this.direction.dot(ch.crossVectors(is,ch));if(l<0)return null;const c=o*this.direction.dot(zm.cross(is));if(c<0||l+c>s)return null;const u=-o*is.dot(Bm);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $T extends mp{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zo,this.combine=UT,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cy=new An,$s=new tD,uh=new kv,wy=new K,fh=new K,hh=new K,dh=new K,Hm=new K,ph=new K,Dy=new K,mh=new K;class or extends na{constructor(e=new Zr,n=new $T){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){ph.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Hm.fromBufferAttribute(d,e),s?ph.addScaledVector(Hm,u):ph.addScaledVector(Hm.sub(n),u))}n.add(ph)}return n}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uh.copy(i.boundingSphere),uh.applyMatrix4(r),$s.copy(e.ray).recast(e.near),!(uh.containsPoint($s.origin)===!1&&($s.intersectSphere(uh,wy)===null||$s.origin.distanceToSquared(wy)>(e.far-e.near)**2))&&(Cy.copy(r).invert(),$s.copy(e.ray).applyMatrix4(Cy),!(i.boundingBox!==null&&$s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,$s)))}_computeIntersections(e,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=s[m.materialIndex],g=Math.max(m.start,h.start),S=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let x=g,b=S;x<b;x+=3){const A=o.getX(x),E=o.getX(x+1),y=o.getX(x+2);a=_h(this,p,e,i,c,u,d,A,E,y),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const g=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);a=_h(this,s,e,i,c,u,d,g,S,x),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=s[m.materialIndex],g=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let x=g,b=S;x<b;x+=3){const A=x,E=x+1,y=x+2;a=_h(this,p,e,i,c,u,d,A,E,y),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const g=m,S=m+1,x=m+2;a=_h(this,s,e,i,c,u,d,g,S,x),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function nD(t,e,n,i,a,r,s,o){let l;if(e.side===Ni?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===Xs,o),l===null)return null;mh.copy(o),mh.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(mh);return c<n.near||c>n.far?null:{distance:c,point:mh.clone(),object:t}}function _h(t,e,n,i,a,r,s,o,l,c){t.getVertexPosition(o,fh),t.getVertexPosition(l,hh),t.getVertexPosition(c,dh);const u=nD(t,e,n,i,fh,hh,dh,Dy);if(u){const d=new K;Pa.getBarycoord(Dy,fh,hh,dh,d),a&&(u.uv=Pa.getInterpolatedAttribute(a,o,l,c,d,new ht)),r&&(u.uv1=Pa.getInterpolatedAttribute(r,o,l,c,d,new ht)),s&&(u.normal=Pa.getInterpolatedAttribute(s,o,l,c,d,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new K,materialIndex:0};Pa.getNormal(fh,hh,dh,f.normal),u.face=f,u.barycoord=d}return u}class iD extends vi{constructor(e=null,n=1,i=1,a,r,s,o,l,c=Zn,u=Zn,d,f){super(null,s,o,l,c,u,a,r,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gm=new K,aD=new K,rD=new Je;class lo{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Gm.subVectors(i,n).cross(aD.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(Gm),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:n.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||rD.getNormalMatrix(e),a=this.coplanarPoint(Gm).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const eo=new kv,sD=new ht(.5,.5),gh=new K;class eA{constructor(e=new lo,n=new lo,i=new lo,a=new lo,r=new lo,s=new lo){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=$a,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],_=r[8],v=r[9],m=r[10],p=r[11],g=r[12],S=r[13],x=r[14],b=r[15];if(a[0].setComponents(c-s,h-u,p-_,b-g).normalize(),a[1].setComponents(c+s,h+u,p+_,b+g).normalize(),a[2].setComponents(c+o,h+d,p+v,b+S).normalize(),a[3].setComponents(c-o,h-d,p-v,b-S).normalize(),i)a[4].setComponents(l,f,m,x).normalize(),a[5].setComponents(c-l,h-f,p-m,b-x).normalize();else if(a[4].setComponents(c-l,h-f,p-m,b-x).normalize(),n===$a)a[5].setComponents(c+l,h+f,p+m,b+x).normalize();else if(n===Vd)a[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),eo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(eo)}intersectsSprite(e){eo.center.set(0,0,0);const n=sD.distanceTo(e.center);return eo.radius=.7071067811865476+n,eo.applyMatrix4(e.matrixWorld),this.intersectsSphere(eo)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(gh.x=a.normal.x>0?e.max.x:e.min.x,gh.y=a.normal.y>0?e.max.y:e.min.y,gh.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(gh)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tA extends vi{constructor(e=[],n=Io,i,a,r,s,o,l,c,u){super(e,n,i,a,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gc extends vi{constructor(e,n,i=sr,a,r,s,o=Zn,l=Zn,c,u=Yr,d=1){if(u!==Yr&&u!==mo)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,a,r,s,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vv(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class oD extends gc{constructor(e,n=sr,i=Io,a,r,s=Zn,o=Zn,l,c=Yr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,a,r,s,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nA extends vi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mf extends Zr{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,i,n,e,s,r,0),_("z","y","x",1,-1,i,n,-e,s,r,1),_("x","z","y",1,1,e,i,n,a,s,2),_("x","z","y",1,-1,e,i,-n,a,s,3),_("x","y","z",1,-1,e,n,i,a,r,4),_("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Fr(c,3)),this.setAttribute("normal",new Fr(u,3)),this.setAttribute("uv",new Fr(d,2));function _(v,m,p,g,S,x,b,A,E,y,T){const C=x/E,L=b/y,P=x/2,q=b/2,X=A/2,O=E+1,N=y+1;let U=0,I=0;const V=new K;for(let D=0;D<N;D++){const ie=D*L-q;for(let fe=0;fe<O;fe++){const Be=fe*C-P;V[v]=Be*g,V[m]=ie*S,V[p]=X,c.push(V.x,V.y,V.z),V[v]=0,V[m]=0,V[p]=A>0?1:-1,u.push(V.x,V.y,V.z),d.push(fe/E),d.push(1-D/y),U+=1}}for(let D=0;D<y;D++)for(let ie=0;ie<E;ie++){const fe=f+ie+O*D,Be=f+ie+O*(D+1),Le=f+(ie+1)+O*(D+1),Ne=f+(ie+1)+O*D;l.push(fe,Be,Ne),l.push(Be,Le,Ne),I+=6}o.addGroup(h,I,T),h+=I,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mf(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ef extends Zr{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,u=l+1,d=e/o,f=n/l,h=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const g=p*f-s;for(let S=0;S<c;S++){const x=S*d-r;_.push(x,-g,0),v.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<o;g++){const S=g+c*p,x=g+c*(p+1),b=g+1+c*(p+1),A=g+1+c*p;h.push(S,x,A),h.push(x,b,A)}this.setIndex(h),this.setAttribute("position",new Fr(_,3)),this.setAttribute("normal",new Fr(v,3)),this.setAttribute("uv",new Fr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ef(e.width,e.height,e.widthSegments,e.heightSegments)}}function vc(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(Uy(a))a.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(Uy(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[n][i]=r}else e[n][i]=a.slice();else e[n][i]=a}}return e}function fi(t){const e={};for(let n=0;n<t.length;n++){const i=vc(t[n]);for(const a in i)e[a]=i[a]}return e}function Uy(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function lD(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function iA(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const cD={clone:vc,merge:fi};var uD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fa extends mp{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uD,this.fragmentShader=fD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vc(e.uniforms),this.uniformsGroups=lD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new Rt().setHex(a.value);break;case"v2":this.uniforms[i].value=new ht().fromArray(a.value);break;case"v3":this.uniforms[i].value=new K().fromArray(a.value);break;case"v4":this.uniforms[i].value=new ln().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(a.value);break;case"m4":this.uniforms[i].value=new An().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class hD extends Fa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dD extends mp{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pD extends mp{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vh=new K,xh=new Rc,Ga=new K;class aA extends na{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new An,this.projectionMatrix=new An,this.projectionMatrixInverse=new An,this.coordinateSystem=$a,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vh,xh,Ga),Ga.x===1&&Ga.y===1&&Ga.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vh,xh,Ga.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(vh,xh,Ga),Ga.x===1&&Ga.y===1&&Ga.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vh,xh,Ga.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const as=new K,Ny=new ht,Ly=new ht;class Oa extends aA{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=n0*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return n0*2*Math.atan(Math.tan(vm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,n){return this.getViewBounds(e,Ny,Ly),n.subVectors(Ly,Ny)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vm*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Xv extends aA{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const hl=-90,dl=1;class mD extends na{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Oa(hl,dl,e,n);a.layers=this.layers,this.add(a);const r=new Oa(hl,dl,e,n);r.layers=this.layers,this.add(r);const s=new Oa(hl,dl,e,n);s.layers=this.layers,this.add(s);const o=new Oa(hl,dl,e,n);o.layers=this.layers,this.add(o);const l=new Oa(hl,dl,e,n);l.layers=this.layers,this.add(l);const c=new Oa(hl,dl,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(e===$a)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vd)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class _D extends Oa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class gD{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,qe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Kv=class Kv{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=a,this}};Kv.prototype.isMatrix2=!0;let Oy=Kv;function Py(t,e,n,i){const a=vD(i);switch(n){case XT:return t*e;case YT:return t*e/a.components*a.byteLength;case Fv:return t*e/a.components*a.byteLength;case Fo:return t*e*2/a.components*a.byteLength;case zv:return t*e*2/a.components*a.byteLength;case WT:return t*e*3/a.components*a.byteLength;case Ia:return t*e*4/a.components*a.byteLength;case Bv:return t*e*4/a.components*a.byteLength;case qh:case Zh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kh:case Qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rg:case wg:return Math.max(t,16)*Math.max(e,8)/4;case Ag:case Cg:return Math.max(t,8)*Math.max(e,8)/2;case Dg:case Ug:case Lg:case Og:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ng:case zd:case Pg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ig:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fg:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zg:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Bg:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hg:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gg:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vg:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case kg:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xg:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Wg:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yg:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case qg:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zg:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kg:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qg:case jg:case Jg:return Math.ceil(t/4)*Math.ceil(e/4)*16;case $g:case e0:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Bd:case t0:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vD(t){switch(t){case ya:case HT:return{byteLength:1,components:1};case rf:case GT:case Wr:return{byteLength:2,components:1};case Pv:case Iv:return{byteLength:2,components:4};case sr:case Ov:case Ja:return{byteLength:4,components:1};case VT:case kT:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lv}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rA(){let t=null,e=!1,n=null,i=null;function a(r,s){n(r,s),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function xD(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],v=d[h];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const v=d[h];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var SD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yD=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ED=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CD=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ND=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LD=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ID=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,GD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,VD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kD=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XD=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WD=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,YD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QD="gl_FragColor = linearToOutputTexel( gl_FragColor );",jD=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$D=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eU=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oU=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hU=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pU=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_U=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gU=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vU=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xU=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SU=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yU=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MU=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,EU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RU=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DU=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LU=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OU=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PU=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IU=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BU=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kU=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KU=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,QU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$U=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nN=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iN=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_N=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,DN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ON=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$N=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:SD,alphahash_pars_fragment:yD,alphamap_fragment:MD,alphamap_pars_fragment:ED,alphatest_fragment:bD,alphatest_pars_fragment:TD,aomap_fragment:AD,aomap_pars_fragment:RD,batching_pars_vertex:CD,batching_vertex:wD,begin_vertex:DD,beginnormal_vertex:UD,bsdfs:ND,iridescence_fragment:LD,bumpmap_pars_fragment:OD,clipping_planes_fragment:PD,clipping_planes_pars_fragment:ID,clipping_planes_pars_vertex:FD,clipping_planes_vertex:zD,color_fragment:BD,color_pars_fragment:HD,color_pars_vertex:GD,color_vertex:VD,common:kD,cube_uv_reflection_fragment:XD,defaultnormal_vertex:WD,displacementmap_pars_vertex:YD,displacementmap_vertex:qD,emissivemap_fragment:ZD,emissivemap_pars_fragment:KD,colorspace_fragment:QD,colorspace_pars_fragment:jD,envmap_fragment:JD,envmap_common_pars_fragment:$D,envmap_pars_fragment:eU,envmap_pars_vertex:tU,envmap_physical_pars_fragment:hU,envmap_vertex:nU,fog_vertex:iU,fog_pars_vertex:aU,fog_fragment:rU,fog_pars_fragment:sU,gradientmap_pars_fragment:oU,lightmap_pars_fragment:lU,lights_lambert_fragment:cU,lights_lambert_pars_fragment:uU,lights_pars_begin:fU,lights_toon_fragment:dU,lights_toon_pars_fragment:pU,lights_phong_fragment:mU,lights_phong_pars_fragment:_U,lights_physical_fragment:gU,lights_physical_pars_fragment:vU,lights_fragment_begin:xU,lights_fragment_maps:SU,lights_fragment_end:yU,lightprobes_pars_fragment:MU,logdepthbuf_fragment:EU,logdepthbuf_pars_fragment:bU,logdepthbuf_pars_vertex:TU,logdepthbuf_vertex:AU,map_fragment:RU,map_pars_fragment:CU,map_particle_fragment:wU,map_particle_pars_fragment:DU,metalnessmap_fragment:UU,metalnessmap_pars_fragment:NU,morphinstance_vertex:LU,morphcolor_vertex:OU,morphnormal_vertex:PU,morphtarget_pars_vertex:IU,morphtarget_vertex:FU,normal_fragment_begin:zU,normal_fragment_maps:BU,normal_pars_fragment:HU,normal_pars_vertex:GU,normal_vertex:VU,normalmap_pars_fragment:kU,clearcoat_normal_fragment_begin:XU,clearcoat_normal_fragment_maps:WU,clearcoat_pars_fragment:YU,iridescence_pars_fragment:qU,opaque_fragment:ZU,packing:KU,premultiplied_alpha_fragment:QU,project_vertex:jU,dithering_fragment:JU,dithering_pars_fragment:$U,roughnessmap_fragment:eN,roughnessmap_pars_fragment:tN,shadowmap_pars_fragment:nN,shadowmap_pars_vertex:iN,shadowmap_vertex:aN,shadowmask_pars_fragment:rN,skinbase_vertex:sN,skinning_pars_vertex:oN,skinning_vertex:lN,skinnormal_vertex:cN,specularmap_fragment:uN,specularmap_pars_fragment:fN,tonemapping_fragment:hN,tonemapping_pars_fragment:dN,transmission_fragment:pN,transmission_pars_fragment:mN,uv_pars_fragment:_N,uv_pars_vertex:gN,uv_vertex:vN,worldpos_vertex:xN,background_vert:SN,background_frag:yN,backgroundCube_vert:MN,backgroundCube_frag:EN,cube_vert:bN,cube_frag:TN,depth_vert:AN,depth_frag:RN,distance_vert:CN,distance_frag:wN,equirect_vert:DN,equirect_frag:UN,linedashed_vert:NN,linedashed_frag:LN,meshbasic_vert:ON,meshbasic_frag:PN,meshlambert_vert:IN,meshlambert_frag:FN,meshmatcap_vert:zN,meshmatcap_frag:BN,meshnormal_vert:HN,meshnormal_frag:GN,meshphong_vert:VN,meshphong_frag:kN,meshphysical_vert:XN,meshphysical_frag:WN,meshtoon_vert:YN,meshtoon_frag:qN,points_vert:ZN,points_frag:KN,shadow_vert:QN,shadow_frag:jN,sprite_vert:JN,sprite_frag:$N},be={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Wa={basic:{uniforms:fi([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:fi([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:fi([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:fi([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:fi([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Rt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:fi([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:fi([be.points,be.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:fi([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:fi([be.common,be.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:fi([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:fi([be.sprite,be.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:fi([be.common,be.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:fi([be.lights,be.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Wa.physical={uniforms:fi([Wa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Sh={r:0,b:0,g:0},eL=new An,sA=new Je;sA.set(-1,0,0,0,1,0,0,0,1);function tL(t,e,n,i,a,r){const s=new Rt(0);let o=a===!0?0:1,l,c,u=null,d=0,f=null;function h(g){let S=g.isScene===!0?g.background:null;if(S&&S.isTexture){const x=g.backgroundBlurriness>0;S=e.get(S,x)}return S}function _(g){let S=!1;const x=h(g);x===null?m(s,o):x&&x.isColor&&(m(x,1),S=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(g,S){const x=h(S);x&&(x.isCubeTexture||x.mapping===pp)?(c===void 0&&(c=new or(new Mf(1,1,1),new Fa({name:"BackgroundCubeMaterial",uniforms:vc(Wa.backgroundCube.uniforms),vertexShader:Wa.backgroundCube.vertexShader,fragmentShader:Wa.backgroundCube.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(eL.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sA),c.material.toneMapped=_t.getTransfer(x.colorSpace)!==wt,(u!==x||d!==x.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new or(new Ef(2,2),new Fa({name:"BackgroundMaterial",uniforms:vc(Wa.background.uniforms),vertexShader:Wa.background.vertexShader,fragmentShader:Wa.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=_t.getTransfer(x.colorSpace)!==wt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,S){g.getRGB(Sh,iA(t)),n.buffers.color.setClear(Sh.r,Sh.g,Sh.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(g,S=1){s.set(g),o=S,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(s,o)},render:_,addToRenderList:v,dispose:p}}function nL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(L,P,q,X,O){let N=!1;const U=d(L,X,q,P);r!==U&&(r=U,c(r.object)),N=h(L,X,q,O),N&&_(L,X,q,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(N||s)&&(s=!1,x(L,P,q,X),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function u(L){return t.deleteVertexArray(L)}function d(L,P,q,X){const O=X.wireframe===!0;let N=i[P.id];N===void 0&&(N={},i[P.id]=N);const U=L.isInstancedMesh===!0?L.id:0;let I=N[U];I===void 0&&(I={},N[U]=I);let V=I[q.id];V===void 0&&(V={},I[q.id]=V);let D=V[O];return D===void 0&&(D=f(l()),V[O]=D),D}function f(L){const P=[],q=[],X=[];for(let O=0;O<n;O++)P[O]=0,q[O]=0,X[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:X,object:L,attributes:{},index:null}}function h(L,P,q,X){const O=r.attributes,N=P.attributes;let U=0;const I=q.getAttributes();for(const V in I)if(I[V].location>=0){const ie=O[V];let fe=N[V];if(fe===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor)),ie===void 0||ie.attribute!==fe||fe&&ie.data!==fe.data)return!0;U++}return r.attributesNum!==U||r.index!==X}function _(L,P,q,X){const O={},N=P.attributes;let U=0;const I=q.getAttributes();for(const V in I)if(I[V].location>=0){let ie=N[V];ie===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor));const fe={};fe.attribute=ie,ie&&ie.data&&(fe.data=ie.data),O[V]=fe,U++}r.attributes=O,r.attributesNum=U,r.index=X}function v(){const L=r.newAttributes;for(let P=0,q=L.length;P<q;P++)L[P]=0}function m(L){p(L,0)}function p(L,P){const q=r.newAttributes,X=r.enabledAttributes,O=r.attributeDivisors;q[L]=1,X[L]===0&&(t.enableVertexAttribArray(L),X[L]=1),O[L]!==P&&(t.vertexAttribDivisor(L,P),O[L]=P)}function g(){const L=r.newAttributes,P=r.enabledAttributes;for(let q=0,X=P.length;q<X;q++)P[q]!==L[q]&&(t.disableVertexAttribArray(q),P[q]=0)}function S(L,P,q,X,O,N,U){U===!0?t.vertexAttribIPointer(L,P,q,O,N):t.vertexAttribPointer(L,P,q,X,O,N)}function x(L,P,q,X){v();const O=X.attributes,N=q.getAttributes(),U=P.defaultAttributeValues;for(const I in N){const V=N[I];if(V.location>=0){let D=O[I];if(D===void 0&&(I==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),I==="instanceColor"&&L.instanceColor&&(D=L.instanceColor)),D!==void 0){const ie=D.normalized,fe=D.itemSize,Be=e.get(D);if(Be===void 0)continue;const Le=Be.buffer,Ne=Be.type,J=Be.bytesPerElement,oe=Ne===t.INT||Ne===t.UNSIGNED_INT||D.gpuType===Ov;if(D.isInterleavedBufferAttribute){const te=D.data,Te=te.stride,Ce=D.offset;if(te.isInstancedInterleavedBuffer){for(let _e=0;_e<V.locationSize;_e++)p(V.location+_e,te.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<V.locationSize;_e++)m(V.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let _e=0;_e<V.locationSize;_e++)S(V.location+_e,fe/V.locationSize,Ne,ie,Te*J,(Ce+fe/V.locationSize*_e)*J,oe)}else{if(D.isInstancedBufferAttribute){for(let te=0;te<V.locationSize;te++)p(V.location+te,D.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let te=0;te<V.locationSize;te++)m(V.location+te);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let te=0;te<V.locationSize;te++)S(V.location+te,fe/V.locationSize,Ne,ie,fe*J,fe/V.locationSize*te*J,oe)}}else if(U!==void 0){const ie=U[I];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(V.location,ie);break;case 3:t.vertexAttrib3fv(V.location,ie);break;case 4:t.vertexAttrib4fv(V.location,ie);break;default:t.vertexAttrib1fv(V.location,ie)}}}}g()}function b(){T();for(const L in i){const P=i[L];for(const q in P){const X=P[q];for(const O in X){const N=X[O];for(const U in N)u(N[U].object),delete N[U];delete X[O]}}delete i[L]}}function A(L){if(i[L.id]===void 0)return;const P=i[L.id];for(const q in P){const X=P[q];for(const O in X){const N=X[O];for(const U in N)u(N[U].object),delete N[U];delete X[O]}}delete i[L.id]}function E(L){for(const P in i){const q=i[P];for(const X in q){const O=q[X];if(O[L.id]===void 0)continue;const N=O[L.id];for(const U in N)u(N[U].object),delete N[U];delete O[L.id]}}}function y(L){for(const P in i){const q=i[P],X=L.isInstancedMesh===!0?L.id:0,O=q[X];if(O!==void 0){for(const N in O){const U=O[N];for(const I in U)u(U[I].object),delete U[I];delete O[N]}delete q[X],Object.keys(q).length===0&&delete i[P]}}}function T(){C(),s=!0,r!==a&&(r=a,c(r.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function iL(t,e,n){let i;function a(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function s(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];n.update(f,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function aL(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(E){return!(E!==Ia&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const y=E===Wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ya&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ja&&!y)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:x,maxSamples:b,samples:A}}function rL(t){const e=this;let n=null,i=0,a=!1,r=!1;const s=new lo,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||a;return a=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!a||_===null||_.length===0||r&&!m)r?u(null):c();else{const g=r?0:i,S=g*4;let x=p.clippingState||null;l.value=x,x=u(_,f,S,h);for(let b=0;b!==S;++b)x[b]=n[b];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=h+v*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=h;S!==v;++S,x+=4)s.copy(d[S]).applyMatrix4(g,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Es=4,Iy=[.125,.215,.35,.446,.526,.582],uo=20,sL=256,Xc=new Xv,Fy=new Rt;let Vm=null,km=0,Xm=0,Wm=!1;const oL=new K;class zy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=oL}=r;Vm=this._renderer.getRenderTarget(),km=this._renderer.getActiveCubeFace(),Xm=this._renderer.getActiveMipmapLevel(),Wm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vm,km,Xm),this._renderer.xr.enabled=Wm,e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Io||e.mapping===_c?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vm=this._renderer.getRenderTarget(),km=this._renderer.getActiveCubeFace(),Xm=this._renderer.getActiveMipmapLevel(),Wm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Wr,format:Ia,colorSpace:Hd,depthBuffer:!1},a=By(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=By(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lL(r)),this._blurMaterial=uL(r,e,n),this._ggxMaterial=cL(r,e,n)}return a}_compileMaterial(e){const n=new or(new Zr,e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,i,a,r){const l=new Oa(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Fy),d.toneMapping=nr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new or(new Mf,new $T({name:"PMREM.Background",side:Ni,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,p=!0):(m.color.copy(Fy),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const b=this._cubeSize;pl(a,x*b,S>2?b:0,b,b),d.setRenderTarget(a),p&&d.render(v,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===Io||e.mapping===_c;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hy());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-Es?i-_+Es:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-n,pl(r,m,p,3*v,2*v),a.setRenderTarget(r),a.render(o,Xc),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,pl(e,m,p,3*v,2*v),a.setRenderTarget(e),a.render(o,Xc)}_blur(e,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&yt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[a];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*uo-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):uo;m>uo&&qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${uo}`);const p=[];let g=0;for(let E=0;E<uo;++E){const y=E/v,T=Math.exp(-y*y/2);p.push(T),E===0?g+=T:E<m&&(g+=2*T)}for(let E=0;E<p.length;E++)p[E]=p[E]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-i;const x=this._sizeLods[a],b=3*x*(a>S-Es?a-S+Es:0),A=4*(this._cubeSize-x);pl(n,b,A,3*x,2*x),l.setRenderTarget(n),l.render(d,Xc)}}function lL(t){const e=[],n=[],i=[];let a=t;const r=t-Es+1+Iy.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let l=1/o;s>t-Es?l=Iy[s-t+Es-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,v=3,m=2,p=1,g=new Float32Array(v*_*h),S=new Float32Array(m*_*h),x=new Float32Array(p*_*h);for(let A=0;A<h;A++){const E=A%3*2/3-1,y=A>2?0:-1,T=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];g.set(T,v*_*A),S.set(f,m*_*A);const C=[A,A,A,A,A,A];x.set(C,p*_*A)}const b=new Zr;b.setAttribute("position",new ar(g,v)),b.setAttribute("uv",new ar(S,m)),b.setAttribute("faceIndex",new ar(x,p)),i.push(new or(b,null)),a>Es&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function By(t,e,n){const i=new ir(t,e,n);return i.texture.mapping=pp,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pl(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function cL(t,e,n){return new Fa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_p(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function uL(t,e,n){const i=new Float32Array(uo),a=new K(0,1,0);return new Fa({name:"SphericalGaussianBlur",defines:{n:uo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Hy(){return new Fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Gy(){return new Fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function _p(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class oA extends ir{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new tA(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Mf(5,5,5),r=new Fa({name:"CubemapFromEquirect",uniforms:vc(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ni,blending:Pr});r.uniforms.tEquirect.value=n;const s=new or(a,r),o=n.minFilter;return n.minFilter===po&&(n.minFilter=ri),new mD(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}}function fL(t){let e=new WeakMap,n=new WeakMap,i=null;function a(f,h=!1){return f==null?null:h?s(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===mm||h===_m)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const v=new oA(_.height);return v.fromEquirectangularTexture(t,f),e.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){const h=f.mapping,_=h===mm||h===_m,v=h===Io||h===_c;if(_||v){let m=n.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new zy(t)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const g=f.image;return _&&g&&g.height>0||v&&g&&l(g)?(i===null&&(i=new zy(t)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,h){return h===mm?f.mapping=Io:h===_m&&(f.mapping=_c),f}function l(f){let h=0;const _=6;for(let v=0;v<_;v++)f[v]!==void 0&&h++;return h===_}function c(f){const h=f.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const _=n.get(h);_!==void 0&&(n.delete(h),_.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:d}}function hL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Ql("WebGLRenderer: "+i+" extension not supported."),a}}}function dL(t,e,n,i){const a={},r=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",s),delete a[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,_=d.attributes.position;let v=0;if(_===void 0)return;if(h!==null){const g=h.array;v=h.version;for(let S=0,x=g.length;S<x;S+=3){const b=g[S+0],A=g[S+1],E=g[S+2];f.push(b,A,A,E,E,b)}}else{const g=_.array;v=_.version;for(let S=0,x=g.length/3-1;S<x;S+=3){const b=S+0,A=S+1,E=S+2;f.push(b,A,A,E,E,b)}}const m=new(_.count>=65535?JT:jT)(f,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function pL(t,e,n){let i;function a(d){i=d}let r,s;function o(d){r=d.type,s=d.bytesPerElement}function l(d,f){t.drawElements(i,f,r,d*s),n.update(f,i,1)}function c(d,f,h){h!==0&&(t.drawElementsInstanced(i,f,r,d*s,h),n.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,h);let v=0;for(let m=0;m<h;m++)v+=f[m];n.update(v,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function mL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:yt("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function _L(t,e,n){const i=new WeakMap,a=new ln;function r(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let C=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var h=C;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let b=o.attributes.position.count*x,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*A*4*d),y=new ZT(E,b,A,d);y.type=Ja,y.needsUpdate=!0;const T=x*4;for(let L=0;L<d;L++){const P=p[L],q=g[L],X=S[L],O=b*A*4*L;for(let N=0;N<P.count;N++){const U=N*T;_===!0&&(a.fromBufferAttribute(P,N),E[O+U+0]=a.x,E[O+U+1]=a.y,E[O+U+2]=a.z,E[O+U+3]=0),v===!0&&(a.fromBufferAttribute(q,N),E[O+U+4]=a.x,E[O+U+5]=a.y,E[O+U+6]=a.z,E[O+U+7]=0),m===!0&&(a.fromBufferAttribute(X,N),E[O+U+8]=a.x,E[O+U+9]=a.y,E[O+U+10]=a.z,E[O+U+11]=X.itemSize===4?a.w:1)}}f={count:d,texture:y,size:new ht(b,A)},i.set(o,f),o.addEventListener("dispose",C)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function gL(t,e,n,i,a){let r=new WeakMap;function s(c){const u=a.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const vL={[NT]:"LINEAR_TONE_MAPPING",[LT]:"REINHARD_TONE_MAPPING",[OT]:"CINEON_TONE_MAPPING",[PT]:"ACES_FILMIC_TONE_MAPPING",[FT]:"AGX_TONE_MAPPING",[zT]:"NEUTRAL_TONE_MAPPING",[IT]:"CUSTOM_TONE_MAPPING"};function xL(t,e,n,i,a,r){const s=new ir(e,n,{type:t,depthBuffer:a,stencilBuffer:r,samples:i?4:0,depthTexture:a?new gc(e,n):void 0}),o=new ir(e,n,{type:Wr,depthBuffer:!1,stencilBuffer:!1}),l=new Zr;l.setAttribute("position",new Fr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Fr([0,2,0,0,2,0],2));const c=new hD({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new or(l,c),d=new Xv(-1,1,1,-1,0,1);let f=null,h=null,_=!1,v,m=null,p=[],g=!1;this.setSize=function(S,x){s.setSize(S,x),o.setSize(S,x);for(let b=0;b<p.length;b++){const A=p[b];A.setSize&&A.setSize(S,x)}},this.setEffects=function(S){p=S,g=p.length>0&&p[0].isRenderPass===!0;const x=s.width,b=s.height;for(let A=0;A<p.length;A++){const E=p[A];E.setSize&&E.setSize(x,b)}},this.begin=function(S,x){if(_||S.toneMapping===nr&&p.length===0)return!1;if(m=x,x!==null){const b=x.width,A=x.height;(s.width!==b||s.height!==A)&&this.setSize(b,A)}return g===!1&&S.setRenderTarget(s),v=S.toneMapping,S.toneMapping=nr,!0},this.hasRenderPass=function(){return g},this.end=function(S,x){S.toneMapping=v,_=!0;let b=s,A=o;for(let E=0;E<p.length;E++){const y=p[E];if(y.enabled!==!1&&(y.render(S,A,b,x),y.needsSwap!==!1)){const T=b;b=A,A=T}}if(f!==S.outputColorSpace||h!==S.toneMapping){f=S.outputColorSpace,h=S.toneMapping,c.defines={},_t.getTransfer(f)===wt&&(c.defines.SRGB_TRANSFER="");const E=vL[h];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(m),S.render(u,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),l.dispose(),c.dispose()}}const lA=new vi,i0=new gc(1,1),cA=new ZT,uA=new V3,fA=new tA,Vy=[],ky=[],Xy=new Float32Array(16),Wy=new Float32Array(9),Yy=new Float32Array(4);function Cc(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=Vy[a];if(r===void 0&&(r=new Float32Array(a),Vy[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function Nn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ln(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gp(t,e){let n=ky[e];n===void 0&&(n=new Int32Array(e),ky[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function SL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function yL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nn(n,e))return;t.uniform2fv(this.addr,e),Ln(n,e)}}function ML(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nn(n,e))return;t.uniform3fv(this.addr,e),Ln(n,e)}}function EL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nn(n,e))return;t.uniform4fv(this.addr,e),Ln(n,e)}}function bL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ln(n,e)}else{if(Nn(n,i))return;Yy.set(i),t.uniformMatrix2fv(this.addr,!1,Yy),Ln(n,i)}}function TL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ln(n,e)}else{if(Nn(n,i))return;Wy.set(i),t.uniformMatrix3fv(this.addr,!1,Wy),Ln(n,i)}}function AL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ln(n,e)}else{if(Nn(n,i))return;Xy.set(i),t.uniformMatrix4fv(this.addr,!1,Xy),Ln(n,i)}}function RL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function CL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nn(n,e))return;t.uniform2iv(this.addr,e),Ln(n,e)}}function wL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nn(n,e))return;t.uniform3iv(this.addr,e),Ln(n,e)}}function DL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nn(n,e))return;t.uniform4iv(this.addr,e),Ln(n,e)}}function UL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function NL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nn(n,e))return;t.uniform2uiv(this.addr,e),Ln(n,e)}}function LL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nn(n,e))return;t.uniform3uiv(this.addr,e),Ln(n,e)}}function OL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nn(n,e))return;t.uniform4uiv(this.addr,e),Ln(n,e)}}function PL(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(i0.compareFunction=n.isReversedDepthBuffer()?Gv:Hv,r=i0):r=lA,n.setTexture2D(e||r,a)}function IL(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||uA,a)}function FL(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||fA,a)}function zL(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||cA,a)}function BL(t){switch(t){case 5126:return SL;case 35664:return yL;case 35665:return ML;case 35666:return EL;case 35674:return bL;case 35675:return TL;case 35676:return AL;case 5124:case 35670:return RL;case 35667:case 35671:return CL;case 35668:case 35672:return wL;case 35669:case 35673:return DL;case 5125:return UL;case 36294:return NL;case 36295:return LL;case 36296:return OL;case 35678:case 36198:case 36298:case 36306:case 35682:return PL;case 35679:case 36299:case 36307:return IL;case 35680:case 36300:case 36308:case 36293:return FL;case 36289:case 36303:case 36311:case 36292:return zL}}function HL(t,e){t.uniform1fv(this.addr,e)}function GL(t,e){const n=Cc(e,this.size,2);t.uniform2fv(this.addr,n)}function VL(t,e){const n=Cc(e,this.size,3);t.uniform3fv(this.addr,n)}function kL(t,e){const n=Cc(e,this.size,4);t.uniform4fv(this.addr,n)}function XL(t,e){const n=Cc(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WL(t,e){const n=Cc(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function YL(t,e){const n=Cc(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qL(t,e){t.uniform1iv(this.addr,e)}function ZL(t,e){t.uniform2iv(this.addr,e)}function KL(t,e){t.uniform3iv(this.addr,e)}function QL(t,e){t.uniform4iv(this.addr,e)}function jL(t,e){t.uniform1uiv(this.addr,e)}function JL(t,e){t.uniform2uiv(this.addr,e)}function $L(t,e){t.uniform3uiv(this.addr,e)}function eO(t,e){t.uniform4uiv(this.addr,e)}function tO(t,e,n){const i=this.cache,a=e.length,r=gp(n,a);Nn(i,r)||(t.uniform1iv(this.addr,r),Ln(i,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=i0:s=lA;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||s,r[o])}function nO(t,e,n){const i=this.cache,a=e.length,r=gp(n,a);Nn(i,r)||(t.uniform1iv(this.addr,r),Ln(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||uA,r[s])}function iO(t,e,n){const i=this.cache,a=e.length,r=gp(n,a);Nn(i,r)||(t.uniform1iv(this.addr,r),Ln(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||fA,r[s])}function aO(t,e,n){const i=this.cache,a=e.length,r=gp(n,a);Nn(i,r)||(t.uniform1iv(this.addr,r),Ln(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||cA,r[s])}function rO(t){switch(t){case 5126:return HL;case 35664:return GL;case 35665:return VL;case 35666:return kL;case 35674:return XL;case 35675:return WL;case 35676:return YL;case 5124:case 35670:return qL;case 35667:case 35671:return ZL;case 35668:case 35672:return KL;case 35669:case 35673:return QL;case 5125:return jL;case 36294:return JL;case 36295:return $L;case 36296:return eO;case 35678:case 36198:case 36298:case 36306:case 35682:return tO;case 35679:case 36299:case 36307:return nO;case 35680:case 36300:case 36308:case 36293:return iO;case 36289:case 36303:case 36311:case 36292:return aO}}class sO{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BL(n.type)}}class oO{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rO(n.type)}}class lO{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,n[o.id],i)}}}const Ym=/(\w+)(\])?(\[|\.)?/g;function qy(t,e){t.seq.push(e),t.map[e.id]=e}function cO(t,e,n){const i=t.name,a=i.length;for(Ym.lastIndex=0;;){const r=Ym.exec(i),s=Ym.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){qy(n,c===void 0?new sO(o,t,e):new oO(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new lO(o),qy(n,d)),n=d}}}class jh{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);cO(o,l,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in n&&i.push(s)}return i}}function Zy(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const uO=37297;let fO=0;function hO(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const Ky=new Je;function dO(t){_t._getMatrix(Ky,_t.workingColorSpace,t);const e=`mat3( ${Ky.elements.map(n=>n.toFixed(4))} )`;switch(_t.getTransfer(t)){case Gd:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Qy(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+hO(t.getShaderSource(e),o)}else return r}function pO(t,e){const n=dO(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const mO={[NT]:"Linear",[LT]:"Reinhard",[OT]:"Cineon",[PT]:"ACESFilmic",[FT]:"AgX",[zT]:"Neutral",[IT]:"Custom"};function _O(t,e){const n=mO[e];return n===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yh=new K;function gO(){_t.getLuminanceCoefficients(yh);const t=yh.x.toFixed(4),e=yh.y.toFixed(4),n=yh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vO(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ou).join(`
`)}function xO(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function SO(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),s=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function ou(t){return t!==""}function jy(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jy(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yO=/^[ \t]*#include +<([\w\d./]+)>/gm;function a0(t){return t.replace(yO,EO)}const MO=new Map;function EO(t,e){let n=nt[e];if(n===void 0){const i=MO.get(e);if(i!==void 0)n=nt[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return a0(n)}const bO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $y(t){return t.replace(bO,TO)}function TO(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function eM(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const AO={[Yh]:"SHADOWMAP_TYPE_PCF",[su]:"SHADOWMAP_TYPE_VSM"};function RO(t){return AO[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CO={[Io]:"ENVMAP_TYPE_CUBE",[_c]:"ENVMAP_TYPE_CUBE",[pp]:"ENVMAP_TYPE_CUBE_UV"};function wO(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":CO[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const DO={[_c]:"ENVMAP_MODE_REFRACTION"};function UO(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":DO[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const NO={[UT]:"ENVMAP_BLENDING_MULTIPLY",[y3]:"ENVMAP_BLENDING_MIX",[M3]:"ENVMAP_BLENDING_ADD"};function LO(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":NO[t.combine]||"ENVMAP_BLENDING_NONE"}function OO(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function PO(t,e,n,i){const a=t.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=RO(n),c=wO(n),u=UO(n),d=LO(n),f=OO(n),h=vO(n),_=xO(r),v=a.createProgram();let m,p,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ou).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ou).join(`
`),p.length>0&&(p+=`
`)):(m=[eM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ou).join(`
`),p=[eM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nr?"#define TONE_MAPPING":"",n.toneMapping!==nr?nt.tonemapping_pars_fragment:"",n.toneMapping!==nr?_O("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,pO("linearToOutputTexel",n.outputColorSpace),gO(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ou).join(`
`)),s=a0(s),s=jy(s,n),s=Jy(s,n),o=a0(o),o=jy(o,n),o=Jy(o,n),s=$y(s),o=$y(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===py?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===py?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=g+m+s,x=g+p+o,b=Zy(a,a.VERTEX_SHADER,S),A=Zy(a,a.FRAGMENT_SHADER,x);a.attachShader(v,b),a.attachShader(v,A),n.index0AttributeName!==void 0?a.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function E(L){if(t.debug.checkShaderErrors){const P=a.getProgramInfoLog(v)||"",q=a.getShaderInfoLog(b)||"",X=a.getShaderInfoLog(A)||"",O=P.trim(),N=q.trim(),U=X.trim();let I=!0,V=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,v,b,A);else{const D=Qy(a,b,"vertex"),ie=Qy(a,A,"fragment");yt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+D+`
`+ie)}else O!==""?qe("WebGLProgram: Program Info Log:",O):(N===""||U==="")&&(V=!1);V&&(L.diagnostics={runnable:I,programLog:O,vertexShader:{log:N,prefix:m},fragmentShader:{log:U,prefix:p}})}a.deleteShader(b),a.deleteShader(A),y=new jh(a,v),T=SO(a,v)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(v,uO)),C},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fO++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=A,this}let IO=0;class FO{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zO(e),n.set(e,i)),i}}class zO{constructor(e){this.id=IO++,this.code=e,this.usedTimes=0}}function BO(t){return t===Fo||t===zd||t===Bd}function HO(t,e,n,i,a,r){const s=new KT,o=new FO,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,T,C,L,P,q){const X=L.fog,O=P.geometry,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,I=e.get(y.envMap||N,U),V=I&&I.mapping===pp?I.image.height:null,D=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&qe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ie=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,fe=ie!==void 0?ie.length:0;let Be=0;O.morphAttributes.position!==void 0&&(Be=1),O.morphAttributes.normal!==void 0&&(Be=2),O.morphAttributes.color!==void 0&&(Be=3);let Le,Ne,J,oe;if(D){const se=Wa[D];Le=se.vertexShader,Ne=se.fragmentShader}else{Le=y.vertexShader,Ne=y.fragmentShader;const se=o.getVertexShaderStage(y),Ve=o.getFragmentShaderStage(y);o.update(y,se,Ve),J=se.id,oe=Ve.id}const te=t.getRenderTarget(),Te=t.state.buffers.depth.getReversed(),Ce=P.isInstancedMesh===!0,_e=P.isBatchedMesh===!0,Ke=!!y.map,ye=!!y.matcap,Pe=!!I,He=!!y.aoMap,Xe=!!y.lightMap,Z=!!y.bumpMap&&y.wireframe===!1,ct=!!y.normalMap,bt=!!y.displacementMap,Nt=!!y.emissiveMap,Qe=!!y.metalnessMap,Tt=!!y.roughnessMap,z=y.anisotropy>0,nn=y.clearcoat>0,Ye=y.dispersion>0,w=y.iridescence>0,M=y.sheen>0,H=y.transmission>0,W=z&&!!y.anisotropyMap,j=nn&&!!y.clearcoatMap,de=nn&&!!y.clearcoatNormalMap,ue=nn&&!!y.clearcoatRoughnessMap,$=w&&!!y.iridescenceMap,ee=w&&!!y.iridescenceThicknessMap,ge=M&&!!y.sheenColorMap,De=M&&!!y.sheenRoughnessMap,ve=!!y.specularMap,me=!!y.specularColorMap,he=!!y.specularIntensityMap,Ie=H&&!!y.transmissionMap,Ge=H&&!!y.thicknessMap,F=!!y.gradientMap,pe=!!y.alphaMap,ne=y.alphaTest>0,xe=!!y.alphaHash,Se=!!y.extensions;let re=nr;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(re=t.toneMapping);const le={shaderID:D,shaderType:y.type,shaderName:y.name,vertexShader:Le,fragmentShader:Ne,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:_e,batchingColor:_e&&P._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&P.instanceColor!==null,instancingMorph:Ce&&P.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ke,matcap:ye,envMap:Pe,envMapMode:Pe&&I.mapping,envMapCubeUVHeight:V,aoMap:He,lightMap:Xe,bumpMap:Z,normalMap:ct,displacementMap:bt,emissiveMap:Nt,normalMapObjectSpace:ct&&y.normalMapType===T3,normalMapTangentSpace:ct&&y.normalMapType===fy,packedNormalMap:ct&&y.normalMapType===fy&&BO(y.normalMap.format),metalnessMap:Qe,roughnessMap:Tt,anisotropy:z,anisotropyMap:W,clearcoat:nn,clearcoatMap:j,clearcoatNormalMap:de,clearcoatRoughnessMap:ue,dispersion:Ye,iridescence:w,iridescenceMap:$,iridescenceThicknessMap:ee,sheen:M,sheenColorMap:ge,sheenRoughnessMap:De,specularMap:ve,specularColorMap:me,specularIntensityMap:he,transmission:H,transmissionMap:Ie,thicknessMap:Ge,gradientMap:F,opaque:y.transparent===!1&&y.blending===Kl&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:ne,alphaHash:xe,combine:y.combine,mapUv:Ke&&_(y.map.channel),aoMapUv:He&&_(y.aoMap.channel),lightMapUv:Xe&&_(y.lightMap.channel),bumpMapUv:Z&&_(y.bumpMap.channel),normalMapUv:ct&&_(y.normalMap.channel),displacementMapUv:bt&&_(y.displacementMap.channel),emissiveMapUv:Nt&&_(y.emissiveMap.channel),metalnessMapUv:Qe&&_(y.metalnessMap.channel),roughnessMapUv:Tt&&_(y.roughnessMap.channel),anisotropyMapUv:W&&_(y.anisotropyMap.channel),clearcoatMapUv:j&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(y.sheenRoughnessMap.channel),specularMapUv:ve&&_(y.specularMap.channel),specularColorMapUv:me&&_(y.specularColorMap.channel),specularIntensityMapUv:he&&_(y.specularIntensityMap.channel),transmissionMapUv:Ie&&_(y.transmissionMap.channel),thicknessMapUv:Ge&&_(y.thicknessMap.channel),alphaMapUv:pe&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ct||z),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(Ke||pe),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Te,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:re,decodeVideoTexture:Ke&&y.map.isVideoTexture===!0&&_t.getTransfer(y.map.colorSpace)===wt,decodeVideoTextureEmissive:Nt&&y.emissiveMap.isVideoTexture===!0&&_t.getTransfer(y.emissiveMap.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tr,flipSided:y.side===Ni,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function m(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)T.push(C),T.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(T,y),g(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function g(y,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),y.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),y.push(s.mask)}function S(y){const T=h[y.type];let C;if(T){const L=Wa[T];C=cD.clone(L.uniforms)}else C=y.uniforms;return C}function x(y,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new PO(t,T,y,a),c.push(C),u.set(T,C)),C}function b(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function E(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:E}}function GO(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function VO(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function tM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function nM(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,_,v,m,p){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:_,materialVariant:s(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:p},t[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=_,g.materialVariant=s(f),g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=m,g.group=p),e++,g}function l(f,h,_,v,m,p){const g=o(f,h,_,v,m,p);_.transmission>0?i.push(g):_.transparent===!0?a.push(g):n.push(g)}function c(f,h,_,v,m,p){const g=o(f,h,_,v,m,p);_.transmission>0?i.unshift(g):_.transparent===!0?a.unshift(g):n.unshift(g)}function u(f,h,_){n.length>1&&n.sort(f||VO),i.length>1&&i.sort(h||tM),a.length>1&&a.sort(h||tM),_&&(n.reverse(),i.reverse(),a.reverse())}function d(){for(let f=e,h=t.length;f<h;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:c,finish:d,sort:u}}function kO(){let t=new WeakMap;function e(i,a){const r=t.get(i);let s;return r===void 0?(s=new nM,t.set(i,[s])):a>=r.length?(s=new nM,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function XO(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new Rt};break;case"SpotLight":n={position:new K,direction:new K,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function WO(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let YO=0;function qO(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZO(t){const e=new XO,n=WO(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const a=new K,r=new An,s=new An;function o(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,_=0,v=0,m=0,p=0,g=0,S=0,x=0,b=0,A=0,E=0;c.sort(qO);for(let T=0,C=c.length;T<C;T++){const L=c[T],P=L.color,q=L.intensity,X=L.distance;let O=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Fo?O=L.shadow.map.texture:O=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=P.r*q,d+=P.g*q,f+=P.b*q;else if(L.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(L.sh.coefficients[N],q);E++}else if(L.isDirectionalLight){const N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const U=L.shadow,I=n.get(L);I.shadowIntensity=U.intensity,I.shadowBias=U.bias,I.shadowNormalBias=U.normalBias,I.shadowRadius=U.radius,I.shadowMapSize=U.mapSize,i.directionalShadow[h]=I,i.directionalShadowMap[h]=O,i.directionalShadowMatrix[h]=L.shadow.matrix,g++}i.directional[h]=N,h++}else if(L.isSpotLight){const N=e.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(P).multiplyScalar(q),N.distance=X,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,i.spot[v]=N;const U=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,U.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[v]=U.matrix,L.castShadow){const I=n.get(L);I.shadowIntensity=U.intensity,I.shadowBias=U.bias,I.shadowNormalBias=U.normalBias,I.shadowRadius=U.radius,I.shadowMapSize=U.mapSize,i.spotShadow[v]=I,i.spotShadowMap[v]=O,x++}v++}else if(L.isRectAreaLight){const N=e.get(L);N.color.copy(P).multiplyScalar(q),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=N,m++}else if(L.isPointLight){const N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){const U=L.shadow,I=n.get(L);I.shadowIntensity=U.intensity,I.shadowBias=U.bias,I.shadowNormalBias=U.normalBias,I.shadowRadius=U.radius,I.shadowMapSize=U.mapSize,I.shadowCameraNear=U.camera.near,I.shadowCameraFar=U.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=O,i.pointShadowMatrix[_]=L.shadow.matrix,S++}i.point[_]=N,_++}else if(L.isHemisphereLight){const N=e.get(L);N.skyColor.copy(L.color).multiplyScalar(q),N.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[p]=N,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==h||y.pointLength!==_||y.spotLength!==v||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==g||y.numPointShadows!==S||y.numSpotShadows!==x||y.numSpotMaps!==b||y.numLightProbes!==E)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,y.directionalLength=h,y.pointLength=_,y.spotLength=v,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=g,y.numPointShadows=S,y.numSpotShadows=x,y.numSpotMaps=b,y.numLightProbes=E,i.version=YO++)}function l(c,u){let d=0,f=0,h=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,g=c.length;p<g;p++){const S=c[p];if(S.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),d++}else if(S.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),h++}else if(S.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),s.identity(),r.copy(S.matrixWorld),r.premultiply(m),s.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),_++}else if(S.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function iM(t){const e=new ZO(t),n=[],i=[],a=[];function r(f){d.camera=f,n.length=0,i.length=0,a.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function l(f){a.push(f)}function c(){e.setup(n)}function u(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function KO(t){let e=new WeakMap;function n(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new iM(t),e.set(a,[o])):r>=s.length?(o=new iM(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const QO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JO=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],$O=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],aM=new An,Wc=new K,qm=new K;function eP(t,e,n){let i=new eA;const a=new ht,r=new ht,s=new ln,o=new dD,l=new pD,c={},u=n.maxTextureSize,d={[Xs]:Ni,[Ni]:Xs,[Tr]:Tr},f=new Fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:QO,fragmentShader:jO}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Zr;_.setAttribute("position",new ar(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new or(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yh;let p=this.type;this.render=function(A,E,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===n3&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yh);const T=t.getRenderTarget(),C=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Pr),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const q=p!==this.type;q&&E.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(O=>O.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,O=A.length;X<O;X++){const N=A[X],U=N.shadow;if(U===void 0){qe("WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;a.copy(U.mapSize);const I=U.getFrameExtents();a.multiply(I),r.copy(U.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/I.x),a.x=r.x*I.x,U.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/I.y),a.y=r.y*I.y,U.mapSize.y=r.y));const V=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=V,U.map===null||q===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===su){if(N.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ir(a.x,a.y,{format:Fo,type:Wr,minFilter:ri,magFilter:ri,generateMipmaps:!1}),U.map.texture.name=N.name+".shadowMap",U.map.depthTexture=new gc(a.x,a.y,Ja),U.map.depthTexture.name=N.name+".shadowMapDepth",U.map.depthTexture.format=Yr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Zn,U.map.depthTexture.magFilter=Zn}else N.isPointLight?(U.map=new oA(a.x),U.map.depthTexture=new oD(a.x,sr)):(U.map=new ir(a.x,a.y),U.map.depthTexture=new gc(a.x,a.y,sr)),U.map.depthTexture.name=N.name+".shadowMap",U.map.depthTexture.format=Yr,this.type===Yh?(U.map.depthTexture.compareFunction=V?Gv:Hv,U.map.depthTexture.minFilter=ri,U.map.depthTexture.magFilter=ri):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Zn,U.map.depthTexture.magFilter=Zn);U.camera.updateProjectionMatrix()}const D=U.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<D;ie++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,ie),t.clear();else{ie===0&&(t.setRenderTarget(U.map),t.clear());const fe=U.getViewport(ie);s.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),P.viewport(s)}if(N.isPointLight){const fe=U.camera,Be=U.matrix,Le=N.distance||fe.far;Le!==fe.far&&(fe.far=Le,fe.updateProjectionMatrix()),Wc.setFromMatrixPosition(N.matrixWorld),fe.position.copy(Wc),qm.copy(fe.position),qm.add(JO[ie]),fe.up.copy($O[ie]),fe.lookAt(qm),fe.updateMatrixWorld(),Be.makeTranslation(-Wc.x,-Wc.y,-Wc.z),aM.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),U._frustum.setFromProjectionMatrix(aM,fe.coordinateSystem,fe.reversedDepth)}else U.updateMatrices(N);i=U.getFrustum(),x(E,y,U.camera,N,this.type)}U.isPointLightShadow!==!0&&this.type===su&&g(U,y),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(T,C,L)};function g(A,E){const y=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ir(a.x,a.y,{format:Fo,type:Wr})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(E,null,y,f,v,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(E,null,y,h,v,null)}function S(A,E,y,T){let C=null;const L=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)C=L;else if(C=y.isPointLight===!0?l:o,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const P=C.uuid,q=E.uuid;let X=c[P];X===void 0&&(X={},c[P]=X);let O=X[q];O===void 0&&(O=C.clone(),X[q]=O,E.addEventListener("dispose",b)),C=O}if(C.visible=E.visible,C.wireframe=E.wireframe,T===su?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const P=t.properties.get(C);P.light=y}return C}function x(A,E,y,T,C){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===su)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const q=e.update(A),X=A.material;if(Array.isArray(X)){const O=q.groups;for(let N=0,U=O.length;N<U;N++){const I=O[N],V=X[I.materialIndex];if(V&&V.visible){const D=S(A,V,T,C);A.onBeforeShadow(t,A,E,y,q,D,I),t.renderBufferDirect(y,null,q,D,A,I),A.onAfterShadow(t,A,E,y,q,D,I)}}}else if(X.visible){const O=S(A,X,T,C);A.onBeforeShadow(t,A,E,y,q,O,null),t.renderBufferDirect(y,null,q,O,A,null),A.onAfterShadow(t,A,E,y,q,O,null)}}const P=A.children;for(let q=0,X=P.length;q<X;q++)x(P[q],E,y,T,C)}function b(A){A.target.removeEventListener("dispose",b);for(const y in c){const T=c[y],C=A.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function tP(t,e){function n(){let F=!1;const pe=new ln;let ne=null;const xe=new ln(0,0,0,0);return{setMask:function(Se){ne!==Se&&!F&&(t.colorMask(Se,Se,Se,Se),ne=Se)},setLocked:function(Se){F=Se},setClear:function(Se,re,le,se,Ve){Ve===!0&&(Se*=se,re*=se,le*=se),pe.set(Se,re,le,se),xe.equals(pe)===!1&&(t.clearColor(Se,re,le,se),xe.copy(pe))},reset:function(){F=!1,ne=null,xe.set(-1,0,0,0)}}}function i(){let F=!1,pe=!1,ne=null,xe=null,Se=null;return{setReversed:function(re){if(pe!==re){const le=e.get("EXT_clip_control");re?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),pe=re;const se=Se;Se=null,this.setClear(se)}},getReversed:function(){return pe},setTest:function(re){re?te(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(re){ne!==re&&!F&&(t.depthMask(re),ne=re)},setFunc:function(re){if(pe&&(re=P3[re]),xe!==re){switch(re){case gg:t.depthFunc(t.NEVER);break;case vg:t.depthFunc(t.ALWAYS);break;case xg:t.depthFunc(t.LESS);break;case mc:t.depthFunc(t.LEQUAL);break;case Sg:t.depthFunc(t.EQUAL);break;case yg:t.depthFunc(t.GEQUAL);break;case Mg:t.depthFunc(t.GREATER);break;case Eg:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=re}},setLocked:function(re){F=re},setClear:function(re){Se!==re&&(Se=re,pe&&(re=1-re),t.clearDepth(re))},reset:function(){F=!1,ne=null,xe=null,Se=null,pe=!1}}}function a(){let F=!1,pe=null,ne=null,xe=null,Se=null,re=null,le=null,se=null,Ve=null;return{setTest:function(ce){F||(ce?te(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(ce){pe!==ce&&!F&&(t.stencilMask(ce),pe=ce)},setFunc:function(ce,ke,Ue){(ne!==ce||xe!==ke||Se!==Ue)&&(t.stencilFunc(ce,ke,Ue),ne=ce,xe=ke,Se=Ue)},setOp:function(ce,ke,Ue){(re!==ce||le!==ke||se!==Ue)&&(t.stencilOp(ce,ke,Ue),re=ce,le=ke,se=Ue)},setLocked:function(ce){F=ce},setClear:function(ce){Ve!==ce&&(t.clearStencil(ce),Ve=ce)},reset:function(){F=!1,pe=null,ne=null,xe=null,Se=null,re=null,le=null,se=null,Ve=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let u={},d={},f={},h=new WeakMap,_=[],v=null,m=!1,p=null,g=null,S=null,x=null,b=null,A=null,E=null,y=new Rt(0,0,0),T=0,C=!1,L=null,P=null,q=null,X=null,O=null;const N=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,I=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=I>=1):V.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=I>=2);let D=null,ie={};const fe=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),Le=new ln().fromArray(fe),Ne=new ln().fromArray(Be);function J(F,pe,ne,xe){const Se=new Uint8Array(4),re=t.createTexture();t.bindTexture(F,re),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let le=0;le<ne;le++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(pe+le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return re}const oe={};oe[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(t.DEPTH_TEST),s.setFunc(mc),Z(!1),ct(oy),te(t.CULL_FACE),He(Pr);function te(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function Te(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function Ce(F,pe){return f[F]!==pe?(t.bindFramebuffer(F,pe),f[F]=pe,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=pe),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function _e(F,pe){let ne=_,xe=!1;if(F){ne=h.get(pe),ne===void 0&&(ne=[],h.set(pe,ne));const Se=F.textures;if(ne.length!==Se.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let re=0,le=Se.length;re<le;re++)ne[re]=t.COLOR_ATTACHMENT0+re;ne.length=Se.length,xe=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,xe=!0);xe&&t.drawBuffers(ne)}function Ke(F){return v!==F?(t.useProgram(F),v=F,!0):!1}const ye={[co]:t.FUNC_ADD,[a3]:t.FUNC_SUBTRACT,[r3]:t.FUNC_REVERSE_SUBTRACT};ye[s3]=t.MIN,ye[o3]=t.MAX;const Pe={[l3]:t.ZERO,[c3]:t.ONE,[u3]:t.SRC_COLOR,[mg]:t.SRC_ALPHA,[_3]:t.SRC_ALPHA_SATURATE,[p3]:t.DST_COLOR,[h3]:t.DST_ALPHA,[f3]:t.ONE_MINUS_SRC_COLOR,[_g]:t.ONE_MINUS_SRC_ALPHA,[m3]:t.ONE_MINUS_DST_COLOR,[d3]:t.ONE_MINUS_DST_ALPHA,[g3]:t.CONSTANT_COLOR,[v3]:t.ONE_MINUS_CONSTANT_COLOR,[x3]:t.CONSTANT_ALPHA,[S3]:t.ONE_MINUS_CONSTANT_ALPHA};function He(F,pe,ne,xe,Se,re,le,se,Ve,ce){if(F===Pr){m===!0&&(Te(t.BLEND),m=!1);return}if(m===!1&&(te(t.BLEND),m=!0),F!==i3){if(F!==p||ce!==C){if((g!==co||b!==co)&&(t.blendEquation(t.FUNC_ADD),g=co,b=co),ce)switch(F){case Kl:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ly:t.blendFunc(t.ONE,t.ONE);break;case cy:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case uy:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:yt("WebGLState: Invalid blending: ",F);break}else switch(F){case Kl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ly:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case cy:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uy:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",F);break}S=null,x=null,A=null,E=null,y.set(0,0,0),T=0,p=F,C=ce}return}Se=Se||pe,re=re||ne,le=le||xe,(pe!==g||Se!==b)&&(t.blendEquationSeparate(ye[pe],ye[Se]),g=pe,b=Se),(ne!==S||xe!==x||re!==A||le!==E)&&(t.blendFuncSeparate(Pe[ne],Pe[xe],Pe[re],Pe[le]),S=ne,x=xe,A=re,E=le),(se.equals(y)===!1||Ve!==T)&&(t.blendColor(se.r,se.g,se.b,Ve),y.copy(se),T=Ve),p=F,C=!1}function Xe(F,pe){F.side===Tr?Te(t.CULL_FACE):te(t.CULL_FACE);let ne=F.side===Ni;pe&&(ne=!ne),Z(ne),F.blending===Kl&&F.transparent===!1?He(Pr):He(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const xe=F.stencilWrite;o.setTest(xe),xe&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Nt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Z(F){L!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),L=F)}function ct(F){F!==e3?(te(t.CULL_FACE),F!==P&&(F===oy?t.cullFace(t.BACK):F===t3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),P=F}function bt(F){F!==q&&(U&&t.lineWidth(F),q=F)}function Nt(F,pe,ne){F?(te(t.POLYGON_OFFSET_FILL),(X!==pe||O!==ne)&&(X=pe,O=ne,s.getReversed()&&(pe=-pe),t.polygonOffset(pe,ne))):Te(t.POLYGON_OFFSET_FILL)}function Qe(F){F?te(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function Tt(F){F===void 0&&(F=t.TEXTURE0+N-1),D!==F&&(t.activeTexture(F),D=F)}function z(F,pe,ne){ne===void 0&&(D===null?ne=t.TEXTURE0+N-1:ne=D);let xe=ie[ne];xe===void 0&&(xe={type:void 0,texture:void 0},ie[ne]=xe),(xe.type!==F||xe.texture!==pe)&&(D!==ne&&(t.activeTexture(ne),D=ne),t.bindTexture(F,pe||oe[F]),xe.type=F,xe.texture=pe)}function nn(){const F=ie[D];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ye(){try{t.compressedTexImage2D(...arguments)}catch(F){yt("WebGLState:",F)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(F){yt("WebGLState:",F)}}function M(){try{t.texSubImage2D(...arguments)}catch(F){yt("WebGLState:",F)}}function H(){try{t.texSubImage3D(...arguments)}catch(F){yt("WebGLState:",F)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(F){yt("WebGLState:",F)}}function j(){try{t.compressedTexSubImage3D(...arguments)}catch(F){yt("WebGLState:",F)}}function de(){try{t.texStorage2D(...arguments)}catch(F){yt("WebGLState:",F)}}function ue(){try{t.texStorage3D(...arguments)}catch(F){yt("WebGLState:",F)}}function $(){try{t.texImage2D(...arguments)}catch(F){yt("WebGLState:",F)}}function ee(){try{t.texImage3D(...arguments)}catch(F){yt("WebGLState:",F)}}function ge(F){return d[F]!==void 0?d[F]:t.getParameter(F)}function De(F,pe){d[F]!==pe&&(t.pixelStorei(F,pe),d[F]=pe)}function ve(F){Le.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Le.copy(F))}function me(F){Ne.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Ne.copy(F))}function he(F,pe){let ne=c.get(pe);ne===void 0&&(ne=new WeakMap,c.set(pe,ne));let xe=ne.get(F);xe===void 0&&(xe=t.getUniformBlockIndex(pe,F.name),ne.set(F,xe))}function Ie(F,pe){const xe=c.get(pe).get(F);l.get(pe)!==xe&&(t.uniformBlockBinding(pe,xe,F.__bindingPointIndex),l.set(pe,xe))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},D=null,ie={},f={},h=new WeakMap,_=[],v=null,m=!1,p=null,g=null,S=null,x=null,b=null,A=null,E=null,y=new Rt(0,0,0),T=0,C=!1,L=null,P=null,q=null,X=null,O=null,Le.set(0,0,t.canvas.width,t.canvas.height),Ne.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:te,disable:Te,bindFramebuffer:Ce,drawBuffers:_e,useProgram:Ke,setBlending:He,setMaterial:Xe,setFlipSided:Z,setCullFace:ct,setLineWidth:bt,setPolygonOffset:Nt,setScissorTest:Qe,activeTexture:Tt,bindTexture:z,unbindTexture:nn,compressedTexImage2D:Ye,compressedTexImage3D:w,texImage2D:$,texImage3D:ee,pixelStorei:De,getParameter:ge,updateUBOMapping:he,uniformBlockBinding:Ie,texStorage2D:de,texStorage3D:ue,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:j,scissor:ve,viewport:me,reset:Ge}}function nP(t,e,n,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap,d=new Set;let f;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,M){return _?new OffscreenCanvas(w,M):kd("canvas")}function m(w,M,H){let W=1;const j=Ye(w);if((j.width>H||j.height>H)&&(W=H/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const de=Math.floor(W*j.width),ue=Math.floor(W*j.height);f===void 0&&(f=v(de,ue));const $=M?v(de,ue):f;return $.width=de,$.height=ue,$.getContext("2d").drawImage(w,0,0,de,ue),qe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+de+"x"+ue+")."),$}else return"data"in w&&qe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function p(w){return w.generateMipmaps}function g(w){t.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(w,M,H,W,j,de=!1){if(w!==null){if(t[w]!==void 0)return t[w];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue;W&&(ue=e.get("EXT_texture_norm16"),ue||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=M;if(M===t.RED&&(H===t.FLOAT&&($=t.R32F),H===t.HALF_FLOAT&&($=t.R16F),H===t.UNSIGNED_BYTE&&($=t.R8),H===t.UNSIGNED_SHORT&&ue&&($=ue.R16_EXT),H===t.SHORT&&ue&&($=ue.R16_SNORM_EXT)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&($=t.R8UI),H===t.UNSIGNED_SHORT&&($=t.R16UI),H===t.UNSIGNED_INT&&($=t.R32UI),H===t.BYTE&&($=t.R8I),H===t.SHORT&&($=t.R16I),H===t.INT&&($=t.R32I)),M===t.RG&&(H===t.FLOAT&&($=t.RG32F),H===t.HALF_FLOAT&&($=t.RG16F),H===t.UNSIGNED_BYTE&&($=t.RG8),H===t.UNSIGNED_SHORT&&ue&&($=ue.RG16_EXT),H===t.SHORT&&ue&&($=ue.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&($=t.RG8UI),H===t.UNSIGNED_SHORT&&($=t.RG16UI),H===t.UNSIGNED_INT&&($=t.RG32UI),H===t.BYTE&&($=t.RG8I),H===t.SHORT&&($=t.RG16I),H===t.INT&&($=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&($=t.RGB8UI),H===t.UNSIGNED_SHORT&&($=t.RGB16UI),H===t.UNSIGNED_INT&&($=t.RGB32UI),H===t.BYTE&&($=t.RGB8I),H===t.SHORT&&($=t.RGB16I),H===t.INT&&($=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&($=t.RGBA8UI),H===t.UNSIGNED_SHORT&&($=t.RGBA16UI),H===t.UNSIGNED_INT&&($=t.RGBA32UI),H===t.BYTE&&($=t.RGBA8I),H===t.SHORT&&($=t.RGBA16I),H===t.INT&&($=t.RGBA32I)),M===t.RGB&&(H===t.UNSIGNED_SHORT&&ue&&($=ue.RGB16_EXT),H===t.SHORT&&ue&&($=ue.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),M===t.RGBA){const ee=de?Gd:_t.getTransfer(j);H===t.FLOAT&&($=t.RGBA32F),H===t.HALF_FLOAT&&($=t.RGBA16F),H===t.UNSIGNED_BYTE&&($=ee===wt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&ue&&($=ue.RGBA16_EXT),H===t.SHORT&&ue&&($=ue.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(w,M){let H;return w?M===null||M===sr||M===sf?H=t.DEPTH24_STENCIL8:M===Ja?H=t.DEPTH32F_STENCIL8:M===rf&&(H=t.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===sr||M===sf?H=t.DEPTH_COMPONENT24:M===Ja?H=t.DEPTH_COMPONENT32F:M===rf&&(H=t.DEPTH_COMPONENT16),H}function A(w,M){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Zn&&w.minFilter!==ri?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function E(w){const M=w.target;M.removeEventListener("dispose",E),T(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function y(w){const M=w.target;M.removeEventListener("dispose",y),L(M)}function T(w){const M=i.get(w);if(M.__webglInit===void 0)return;const H=w.source,W=h.get(H);if(W){const j=W[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(w),Object.keys(W).length===0&&h.delete(H)}i.remove(w)}function C(w){const M=i.get(w);t.deleteTexture(M.__webglTexture);const H=w.source,W=h.get(H);delete W[M.__cacheKey],s.memory.textures--}function L(w){const M=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(M.__webglFramebuffer[W]))for(let j=0;j<M.__webglFramebuffer[W].length;j++)t.deleteFramebuffer(M.__webglFramebuffer[W][j]);else t.deleteFramebuffer(M.__webglFramebuffer[W]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[W])}else{if(Array.isArray(M.__webglFramebuffer))for(let W=0;W<M.__webglFramebuffer.length;W++)t.deleteFramebuffer(M.__webglFramebuffer[W]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let W=0;W<M.__webglColorRenderbuffer.length;W++)M.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[W]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=w.textures;for(let W=0,j=H.length;W<j;W++){const de=i.get(H[W]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),s.memory.textures--),i.remove(H[W])}i.remove(w)}let P=0;function q(){P=0}function X(){return P}function O(w){P=w}function N(){const w=P;return w>=a.maxTextures&&qe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),P+=1,w}function U(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function I(w,M){const H=i.get(w);if(w.isVideoTexture&&z(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){const W=w.image;if(W===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(H,w,M);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function V(w,M){const H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Te(H,w,M);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function D(w,M){const H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Te(H,w,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function ie(w,M){const H=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&H.__version!==w.version){Ce(H,w,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const fe={[bg]:t.REPEAT,[Dr]:t.CLAMP_TO_EDGE,[Tg]:t.MIRRORED_REPEAT},Be={[Zn]:t.NEAREST,[E3]:t.NEAREST_MIPMAP_NEAREST,[$f]:t.NEAREST_MIPMAP_LINEAR,[ri]:t.LINEAR,[gm]:t.LINEAR_MIPMAP_NEAREST,[po]:t.LINEAR_MIPMAP_LINEAR},Le={[A3]:t.NEVER,[U3]:t.ALWAYS,[R3]:t.LESS,[Hv]:t.LEQUAL,[C3]:t.EQUAL,[Gv]:t.GEQUAL,[w3]:t.GREATER,[D3]:t.NOTEQUAL};function Ne(w,M){if(M.type===Ja&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ri||M.magFilter===gm||M.magFilter===$f||M.magFilter===po||M.minFilter===ri||M.minFilter===gm||M.minFilter===$f||M.minFilter===po)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,fe[M.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,fe[M.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,fe[M.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Be[M.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Be[M.minFilter]),M.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Zn||M.minFilter!==$f&&M.minFilter!==po||M.type===Ja&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function J(w,M){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",E));const W=M.source;let j=h.get(W);j===void 0&&(j={},h.set(W,j));const de=U(M);if(de!==w.__cacheKey){j[de]===void 0&&(j[de]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,H=!0),j[de].usedTimes++;const ue=j[w.__cacheKey];ue!==void 0&&(j[w.__cacheKey].usedTimes--,ue.usedTimes===0&&C(M)),w.__cacheKey=de,w.__webglTexture=j[de].texture}return H}function oe(w,M,H){return Math.floor(Math.floor(w/H)/M)}function te(w,M,H,W){const de=w.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,H,W,M.data);else{de.sort((De,ve)=>De.start-ve.start);let ue=0;for(let De=1;De<de.length;De++){const ve=de[ue],me=de[De],he=ve.start+ve.count,Ie=oe(me.start,M.width,4),Ge=oe(ve.start,M.width,4);me.start<=he+1&&Ie===Ge&&oe(me.start+me.count-1,M.width,4)===Ie?ve.count=Math.max(ve.count,me.start+me.count-ve.start):(++ue,de[ue]=me)}de.length=ue+1;const $=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let De=0,ve=de.length;De<ve;De++){const me=de[De],he=Math.floor(me.start/4),Ie=Math.ceil(me.count/4),Ge=he%M.width,F=Math.floor(he/M.width),pe=Ie,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,Ge,F,pe,ne,H,W,M.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function Te(w,M,H){let W=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(W=t.TEXTURE_3D);const j=J(w,M),de=M.source;n.bindTexture(W,w.__webglTexture,t.TEXTURE0+H);const ue=i.get(de);if(de.version!==ue.__version||j===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ne=_t.getPrimaries(_t.workingColorSpace),xe=M.colorSpace===hs?null:_t.getPrimaries(M.colorSpace),Se=M.colorSpace===hs||ne===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let ee=m(M.image,!1,a.maxTextureSize);ee=nn(M,ee);const ge=r.convert(M.format,M.colorSpace),De=r.convert(M.type);let ve=x(M.internalFormat,ge,De,M.normalized,M.colorSpace,M.isVideoTexture);Ne(W,M);let me;const he=M.mipmaps,Ie=M.isVideoTexture!==!0,Ge=ue.__version===void 0||j===!0,F=de.dataReady,pe=A(M,ee);if(M.isDepthTexture)ve=b(M.format===mo,M.type),Ge&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,ve,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,ve,ee.width,ee.height,0,ge,De,null));else if(M.isDataTexture)if(he.length>0){Ie&&Ge&&n.texStorage2D(t.TEXTURE_2D,pe,ve,he[0].width,he[0].height);for(let ne=0,xe=he.length;ne<xe;ne++)me=he[ne],Ie?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,ge,De,me.data):n.texImage2D(t.TEXTURE_2D,ne,ve,me.width,me.height,0,ge,De,me.data);M.generateMipmaps=!1}else Ie?(Ge&&n.texStorage2D(t.TEXTURE_2D,pe,ve,ee.width,ee.height),F&&te(M,ee,ge,De)):n.texImage2D(t.TEXTURE_2D,0,ve,ee.width,ee.height,0,ge,De,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ve,he[0].width,he[0].height,ee.depth);for(let ne=0,xe=he.length;ne<xe;ne++)if(me=he[ne],M.format!==Ia)if(ge!==null)if(Ie){if(F)if(M.layerUpdates.size>0){const Se=Py(me.width,me.height,M.format,M.type);for(const re of M.layerUpdates){const le=me.data.subarray(re*Se/me.data.BYTES_PER_ELEMENT,(re+1)*Se/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,re,me.width,me.height,1,ge,le)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,ee.depth,ge,me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,ve,me.width,me.height,ee.depth,0,me.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,ee.depth,ge,De,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,ve,me.width,me.height,ee.depth,0,ge,De,me.data)}else{Ie&&Ge&&n.texStorage2D(t.TEXTURE_2D,pe,ve,he[0].width,he[0].height);for(let ne=0,xe=he.length;ne<xe;ne++)me=he[ne],M.format!==Ia?ge!==null?Ie?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,ge,me.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,ve,me.width,me.height,0,me.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,ge,De,me.data):n.texImage2D(t.TEXTURE_2D,ne,ve,me.width,me.height,0,ge,De,me.data)}else if(M.isDataArrayTexture)if(Ie){if(Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ve,ee.width,ee.height,ee.depth),F)if(M.layerUpdates.size>0){const ne=Py(ee.width,ee.height,M.format,M.type);for(const xe of M.layerUpdates){const Se=ee.data.subarray(xe*ne/ee.data.BYTES_PER_ELEMENT,(xe+1)*ne/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,ee.width,ee.height,1,ge,De,Se)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ge,De,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,ee.width,ee.height,ee.depth,0,ge,De,ee.data);else if(M.isData3DTexture)Ie?(Ge&&n.texStorage3D(t.TEXTURE_3D,pe,ve,ee.width,ee.height,ee.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ge,De,ee.data)):n.texImage3D(t.TEXTURE_3D,0,ve,ee.width,ee.height,ee.depth,0,ge,De,ee.data);else if(M.isFramebufferTexture){if(Ge)if(Ie)n.texStorage2D(t.TEXTURE_2D,pe,ve,ee.width,ee.height);else{let ne=ee.width,xe=ee.height;for(let Se=0;Se<pe;Se++)n.texImage2D(t.TEXTURE_2D,Se,ve,ne,xe,0,ge,De,null),ne>>=1,xe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ee.parentNode!==ne){ne.appendChild(ee),d.add(M),ne.onpaint=xe=>{const Se=xe.changedElements;for(const re of d)Se.includes(re.image)&&(re.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const Se=t.RGBA,re=t.RGBA,le=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Se,re,le,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(he.length>0){if(Ie&&Ge){const ne=Ye(he[0]);n.texStorage2D(t.TEXTURE_2D,pe,ve,ne.width,ne.height)}for(let ne=0,xe=he.length;ne<xe;ne++)me=he[ne],Ie?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ge,De,me):n.texImage2D(t.TEXTURE_2D,ne,ve,ge,De,me);M.generateMipmaps=!1}else if(Ie){if(Ge){const ne=Ye(ee);n.texStorage2D(t.TEXTURE_2D,pe,ve,ne.width,ne.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,De,ee)}else n.texImage2D(t.TEXTURE_2D,0,ve,ge,De,ee);p(M)&&g(W),ue.__version=de.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Ce(w,M,H){if(M.image.length!==6)return;const W=J(w,M),j=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+H);const de=i.get(j);if(j.version!==de.__version||W===!0){n.activeTexture(t.TEXTURE0+H);const ue=_t.getPrimaries(_t.workingColorSpace),$=M.colorSpace===hs?null:_t.getPrimaries(M.colorSpace),ee=M.colorSpace===hs||ue===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ge=M.isCompressedTexture||M.image[0].isCompressedTexture,De=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let re=0;re<6;re++)!ge&&!De?ve[re]=m(M.image[re],!0,a.maxCubemapSize):ve[re]=De?M.image[re].image:M.image[re],ve[re]=nn(M,ve[re]);const me=ve[0],he=r.convert(M.format,M.colorSpace),Ie=r.convert(M.type),Ge=x(M.internalFormat,he,Ie,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,pe=de.__version===void 0||W===!0,ne=j.dataReady;let xe=A(M,me);Ne(t.TEXTURE_CUBE_MAP,M);let Se;if(ge){F&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Ge,me.width,me.height);for(let re=0;re<6;re++){Se=ve[re].mipmaps;for(let le=0;le<Se.length;le++){const se=Se[le];M.format!==Ia?he!==null?F?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,0,0,se.width,se.height,he,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,Ge,se.width,se.height,0,se.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,0,0,se.width,se.height,he,Ie,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,Ge,se.width,se.height,0,he,Ie,se.data)}}}else{if(Se=M.mipmaps,F&&pe){Se.length>0&&xe++;const re=Ye(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Ge,re.width,re.height)}for(let re=0;re<6;re++)if(De){F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve[re].width,ve[re].height,he,Ie,ve[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,ve[re].width,ve[re].height,0,he,Ie,ve[re].data);for(let le=0;le<Se.length;le++){const Ve=Se[le].image[re].image;F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,0,0,Ve.width,Ve.height,he,Ie,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,Ge,Ve.width,Ve.height,0,he,Ie,Ve.data)}}else{F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,he,Ie,ve[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,he,Ie,ve[re]);for(let le=0;le<Se.length;le++){const se=Se[le];F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,0,0,he,Ie,se.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,Ge,he,Ie,se.image[re])}}}p(M)&&g(t.TEXTURE_CUBE_MAP),de.__version=j.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function _e(w,M,H,W,j,de){const ue=r.convert(H.format,H.colorSpace),$=r.convert(H.type),ee=x(H.internalFormat,ue,$,H.normalized,H.colorSpace),ge=i.get(M),De=i.get(H);if(De.__renderTarget=M,!ge.__hasExternalTextures){const ve=Math.max(1,M.width>>de),me=Math.max(1,M.height>>de);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,de,ee,ve,me,M.depth,0,ue,$,null):n.texImage2D(j,de,ee,ve,me,0,ue,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Tt(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,j,De.__webglTexture,0,Qe(M)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,j,De.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ke(w,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,w),M.depthBuffer){const W=M.depthTexture,j=W&&W.isDepthTexture?W.type:null,de=b(M.stencilBuffer,j),ue=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Tt(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qe(M),de,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe(M),de,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,de,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,w)}else{const W=M.textures;for(let j=0;j<W.length;j++){const de=W[j],ue=r.convert(de.format,de.colorSpace),$=r.convert(de.type),ee=x(de.internalFormat,ue,$,de.normalized,de.colorSpace);Tt(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qe(M),ee,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe(M),ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ye(w,M,H){const W=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(M.depthTexture);if(j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W){if(j.__webglInit===void 0&&(j.__webglInit=!0,M.depthTexture.addEventListener("dispose",E)),j.__webglTexture===void 0){j.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,M.depthTexture);const ge=r.convert(M.depthTexture.format),De=r.convert(M.depthTexture.type);let ve;M.depthTexture.format===Yr?ve=t.DEPTH_COMPONENT24:M.depthTexture.format===mo&&(ve=t.DEPTH24_STENCIL8);for(let me=0;me<6;me++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ve,M.width,M.height,0,ge,De,null)}}else I(M.depthTexture,0);const de=j.__webglTexture,ue=Qe(M),$=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,ee=M.depthTexture.format===mo?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Yr)Tt(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,$,de,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ee,$,de,0);else if(M.depthTexture.format===mo)Tt(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,$,de,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ee,$,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pe(w){const M=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),W){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=W}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)ye(M.__webglFramebuffer[W],w,W);else{const W=w.texture.mipmaps;W&&W.length>0?ye(M.__webglFramebuffer[0],w,0):ye(M.__webglFramebuffer,w,0)}else if(H){M.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[W]),M.__webglDepthbuffer[W]===void 0)M.__webglDepthbuffer[W]=t.createRenderbuffer(),Ke(M.__webglDepthbuffer[W],w,!1);else{const j=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,de)}}else{const W=w.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Ke(M.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(w,M,H){const W=i.get(w);M!==void 0&&_e(W.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Pe(w)}function Xe(w){const M=w.texture,H=i.get(w),W=i.get(M);w.addEventListener("dispose",y);const j=w.textures,de=w.isWebGLCubeRenderTarget===!0,ue=j.length>1;if(ue||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=M.version,s.memory.textures++),de){H.__webglFramebuffer=[];for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[$]=[];for(let ee=0;ee<M.mipmaps.length;ee++)H.__webglFramebuffer[$][ee]=t.createFramebuffer()}else H.__webglFramebuffer[$]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let $=0;$<M.mipmaps.length;$++)H.__webglFramebuffer[$]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ue)for(let $=0,ee=j.length;$<ee;$++){const ge=i.get(j[$]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),s.memory.textures++)}if(w.samples>0&&Tt(w)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let $=0;$<j.length;$++){const ee=j[$];H.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[$]);const ge=r.convert(ee.format,ee.colorSpace),De=r.convert(ee.type),ve=x(ee.internalFormat,ge,De,ee.normalized,ee.colorSpace,w.isXRRenderTarget===!0),me=Qe(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,me,ve,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,H.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ke(H.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,M);for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)_e(H.__webglFramebuffer[$][ee],w,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ee);else _e(H.__webglFramebuffer[$],w,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(M)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let $=0,ee=j.length;$<ee;$++){const ge=j[$],De=i.get(ge);let ve=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,De.__webglTexture),Ne(ve,ge),_e(H.__webglFramebuffer,w,ge,t.COLOR_ATTACHMENT0+$,ve,0),p(ge)&&g(ve)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,W.__webglTexture),Ne($,M),M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)_e(H.__webglFramebuffer[ee],w,M,t.COLOR_ATTACHMENT0,$,ee);else _e(H.__webglFramebuffer,w,M,t.COLOR_ATTACHMENT0,$,0);p(M)&&g($),n.unbindTexture()}w.depthBuffer&&Pe(w)}function Z(w){const M=w.textures;for(let H=0,W=M.length;H<W;H++){const j=M[H];if(p(j)){const de=S(w),ue=i.get(j).__webglTexture;n.bindTexture(de,ue),g(de),n.unbindTexture()}}}const ct=[],bt=[];function Nt(w){if(w.samples>0){if(Tt(w)===!1){const M=w.textures,H=w.width,W=w.height;let j=t.COLOR_BUFFER_BIT;const de=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(w),$=M.length>1;if($)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const ee=w.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ge]);const De=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,H,W,0,0,H,W,j,t.NEAREST),l===!0&&(ct.length=0,bt.length=0,ct.push(t.COLOR_ATTACHMENT0+ge),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ct.push(de),bt.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,bt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ge]);const De=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Qe(w){return Math.min(a.maxSamples,w.samples)}function Tt(w){const M=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function z(w){const M=s.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function nn(w,M){const H=w.colorSpace,W=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Hd&&H!==hs&&(_t.getTransfer(H)===wt?(W!==Ia||j!==ya)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",H)),M}function Ye(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=q,this.getTextureUnits=X,this.setTextureUnits=O,this.setTexture2D=I,this.setTexture2DArray=V,this.setTexture3D=D,this.setTextureCube=ie,this.rebindTextures=He,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iP(t,e){function n(i,a=hs){let r;const s=_t.getTransfer(a);if(i===ya)return t.UNSIGNED_BYTE;if(i===Pv)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Iv)return t.UNSIGNED_SHORT_5_5_5_1;if(i===VT)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===kT)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===HT)return t.BYTE;if(i===GT)return t.SHORT;if(i===rf)return t.UNSIGNED_SHORT;if(i===Ov)return t.INT;if(i===sr)return t.UNSIGNED_INT;if(i===Ja)return t.FLOAT;if(i===Wr)return t.HALF_FLOAT;if(i===XT)return t.ALPHA;if(i===WT)return t.RGB;if(i===Ia)return t.RGBA;if(i===Yr)return t.DEPTH_COMPONENT;if(i===mo)return t.DEPTH_STENCIL;if(i===YT)return t.RED;if(i===Fv)return t.RED_INTEGER;if(i===Fo)return t.RG;if(i===zv)return t.RG_INTEGER;if(i===Bv)return t.RGBA_INTEGER;if(i===qh||i===Zh||i===Kh||i===Qh)if(s===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qh)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qh)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zh)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kh)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qh)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ag||i===Rg||i===Cg||i===wg)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ag)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rg)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cg)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wg)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dg||i===Ug||i===Ng||i===Lg||i===Og||i===zd||i===Pg)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dg||i===Ug)return s===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ng)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lg)return r.COMPRESSED_R11_EAC;if(i===Og)return r.COMPRESSED_SIGNED_R11_EAC;if(i===zd)return r.COMPRESSED_RG11_EAC;if(i===Pg)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ig||i===Fg||i===zg||i===Bg||i===Hg||i===Gg||i===Vg||i===kg||i===Xg||i===Wg||i===Yg||i===qg||i===Zg||i===Kg)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ig)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fg)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zg)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bg)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hg)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gg)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vg)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kg)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xg)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wg)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yg)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qg)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zg)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kg)return s===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qg||i===jg||i===Jg)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Qg)return s===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jg)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jg)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$g||i===e0||i===Bd||i===t0)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===$g)return r.COMPRESSED_RED_RGTC1_EXT;if(i===e0)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===t0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sf?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const aP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new nA(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Fa({vertexShader:aP,fragmentShader:rP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new or(new Ef(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oP extends Wo{constructor(e,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const v=typeof XRWebGLBinding<"u",m=new sP,p={},g=n.getContextAttributes();let S=null,x=null;const b=[],A=[],E=new ht;let y=null;const T=new Oa;T.viewport=new ln;const C=new Oa;C.viewport=new ln;const L=[T,C],P=new _D;let q=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=b[J];return oe===void 0&&(oe=new Tm,b[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=b[J];return oe===void 0&&(oe=new Tm,b[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=b[J];return oe===void 0&&(oe=new Tm,b[J]=oe),oe.getHandSpace()};function O(J){const oe=A.indexOf(J.inputSource);if(oe===-1)return;const te=b[oe];te!==void 0&&(te.update(J.inputSource,J.frame,c||s),te.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){a.removeEventListener("select",O),a.removeEventListener("selectstart",O),a.removeEventListener("selectend",O),a.removeEventListener("squeeze",O),a.removeEventListener("squeezestart",O),a.removeEventListener("squeezeend",O),a.removeEventListener("end",N),a.removeEventListener("inputsourceschange",U);for(let J=0;J<b.length;J++){const oe=A[J];oe!==null&&(A[J]=null,b[J].disconnect(oe))}q=null,X=null,m.reset();for(const J in p)delete p[J];e.setRenderTarget(S),h=null,f=null,d=null,a=null,x=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(a,n)),d},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(S=e.getRenderTarget(),a.addEventListener("select",O),a.addEventListener("selectstart",O),a.addEventListener("selectend",O),a.addEventListener("squeeze",O),a.addEventListener("squeezestart",O),a.addEventListener("squeezeend",O),a.addEventListener("end",N),a.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Te=null,Ce=null;g.depth&&(Ce=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=g.stencil?mo:Yr,Te=g.stencil?sf:sr);const _e={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(_e),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new ir(f.textureWidth,f.textureHeight,{format:Ia,type:ya,depthTexture:new gc(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(a,n,te),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new ir(h.framebufferWidth,h.framebufferHeight,{format:Ia,type:ya,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Ne.setContext(a),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(J){for(let oe=0;oe<J.removed.length;oe++){const te=J.removed[oe],Te=A.indexOf(te);Te>=0&&(A[Te]=null,b[Te].disconnect(te))}for(let oe=0;oe<J.added.length;oe++){const te=J.added[oe];let Te=A.indexOf(te);if(Te===-1){for(let _e=0;_e<b.length;_e++)if(_e>=A.length){A.push(te),Te=_e;break}else if(A[_e]===null){A[_e]=te,Te=_e;break}if(Te===-1)break}const Ce=b[Te];Ce&&Ce.connect(te)}}const I=new K,V=new K;function D(J,oe,te){I.setFromMatrixPosition(oe.matrixWorld),V.setFromMatrixPosition(te.matrixWorld);const Te=I.distanceTo(V),Ce=oe.projectionMatrix.elements,_e=te.projectionMatrix.elements,Ke=Ce[14]/(Ce[10]-1),ye=Ce[14]/(Ce[10]+1),Pe=(Ce[9]+1)/Ce[5],He=(Ce[9]-1)/Ce[5],Xe=(Ce[8]-1)/Ce[0],Z=(_e[8]+1)/_e[0],ct=Ke*Xe,bt=Ke*Z,Nt=Te/(-Xe+Z),Qe=Nt*-Xe;if(oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Qe),J.translateZ(Nt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ce[10]===-1)J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Tt=Ke+Nt,z=ye+Nt,nn=ct-Qe,Ye=bt+(Te-Qe),w=Pe*ye/z*Tt,M=He*ye/z*Tt;J.projectionMatrix.makePerspective(nn,Ye,w,M,Tt,z),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ie(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let oe=J.near,te=J.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(te=m.depthFar)),P.near=C.near=T.near=oe,P.far=C.far=T.far=te,(q!==P.near||X!==P.far)&&(a.updateRenderState({depthNear:P.near,depthFar:P.far}),q=P.near,X=P.far),P.layers.mask=J.layers.mask|6,T.layers.mask=P.layers.mask&-5,C.layers.mask=P.layers.mask&-3;const Te=J.parent,Ce=P.cameras;ie(P,Te);for(let _e=0;_e<Ce.length;_e++)ie(Ce[_e],Te);Ce.length===2?D(P,T,C):P.projectionMatrix.copy(T.projectionMatrix),fe(J,P,Te)};function fe(J,oe,te){te===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(te.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=n0*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(J){return p[J]};let Be=null;function Le(J,oe){if(u=oe.getViewerPose(c||s),_=oe,u!==null){const te=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let Te=!1;te.length!==P.cameras.length&&(P.cameras.length=0,Te=!0);for(let ye=0;ye<te.length;ye++){const Pe=te[ye];let He=null;if(h!==null)He=h.getViewport(Pe);else{const Z=d.getViewSubImage(f,Pe);He=Z.viewport,ye===0&&(e.setRenderTargetTextures(x,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(x))}let Xe=L[ye];Xe===void 0&&(Xe=new Oa,Xe.layers.enable(ye),Xe.viewport=new ln,L[ye]=Xe),Xe.matrix.fromArray(Pe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Pe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(He.x,He.y,He.width,He.height),ye===0&&(P.matrix.copy(Xe.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Te===!0&&P.cameras.push(Xe)}const Ce=a.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const ye=d.getDepthInformation(te[0]);ye&&ye.isValid&&ye.texture&&m.init(ye,a.renderState)}if(Ce&&Ce.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let ye=0;ye<te.length;ye++){const Pe=te[ye].camera;if(Pe){let He=p[Pe];He||(He=new nA,p[Pe]=He);const Xe=d.getCameraImage(Pe);He.sourceTexture=Xe}}}}for(let te=0;te<b.length;te++){const Te=A[te],Ce=b[te];Te!==null&&Ce!==void 0&&Ce.update(Te,oe,c||s)}Be&&Be(J,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),_=null}const Ne=new rA;Ne.setAnimationLoop(Le),this.setAnimationLoop=function(J){Be=J},this.dispose=function(){}}}const lP=new An,hA=new Je;hA.set(-1,0,0,0,1,0,0,0,1);function cP(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,iA(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,g,S,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,g,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ni&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ni&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const g=e.get(p),S=g.envMap,x=g.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(lP.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hA),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,g,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*g,m.scale.value=S*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,g){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ni&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const g=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function uP(t,e,n,i){let a={},r={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const A=b.program;i.uniformBlockBinding(x,A)}function c(x,b){let A=a[x.id];A===void 0&&(m(x),A=u(x),a[x.id]=A,x.addEventListener("dispose",g));const E=b.program;i.updateUBOMapping(x,E);const y=e.render.frame;r[x.id]!==y&&(f(x),r[x.id]=y)}function u(x){const b=d();x.__bindingPointIndex=b;const A=t.createBuffer(),E=x.__size,y=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,E,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,A),A}function d(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const b=a[x.id],A=x.uniforms,E=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let y=0,T=A.length;y<T;y++){const C=A[y];if(Array.isArray(C))for(let L=0,P=C.length;L<P;L++)h(C[L],y,L,E);else h(C,y,0,E)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(x,b,A,E){if(v(x,b,A,E)===!0){const y=x.__offset,T=x.value;if(Array.isArray(T)){let C=0;for(let L=0;L<T.length;L++){const P=T[L],q=p(P);_(P,x.__data,C),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(C+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,x.__data)}}function _(x,b,A){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,A)}function v(x,b,A,E){const y=x.value,T=b+"_"+A;if(E[T]===void 0)return typeof y=="number"||typeof y=="boolean"?E[T]=y:ArrayBuffer.isView(y)?E[T]=y.slice():E[T]=y.clone(),!0;{const C=E[T];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return E[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(x){const b=x.uniforms;let A=0;const E=16;for(let T=0,C=b.length;T<C;T++){const L=Array.isArray(b[T])?b[T]:[b[T]];for(let P=0,q=L.length;P<q;P++){const X=L[P],O=Array.isArray(X.value)?X.value:[X.value];for(let N=0,U=O.length;N<U;N++){const I=O[N],V=p(I),D=A%E,ie=D%V.boundary,fe=D+ie;A+=ie,fe!==0&&E-fe<V.storage&&(A+=E-fe),X.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=V.storage}}}const y=A%E;return y>0&&(A+=E-y),x.__size=A,x.__cache={},this}function p(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",x),b}function g(x){const b=x.target;b.removeEventListener("dispose",g);const A=s.indexOf(b.__bindingPointIndex);s.splice(A,1),t.deleteBuffer(a[b.id]),delete a[b.id],delete r[b.id]}function S(){for(const x in a)t.deleteBuffer(a[x]);s=[],a={},r={}}return{bind:l,update:c,dispose:S}}const fP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Va=null;function hP(){return Va===null&&(Va=new iD(fP,16,16,Fo,Wr),Va.name="DFG_LUT",Va.minFilter=ri,Va.magFilter=ri,Va.wrapS=Dr,Va.wrapT=Dr,Va.generateMipmaps=!1,Va.needsUpdate=!0),Va}class dP{constructor(e={}){const{canvas:n=L3(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=ya}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=s;const v=h,m=new Set([Bv,zv,Fv]),p=new Set([ya,sr,rf,sf,Pv,Iv]),g=new Uint32Array(4),S=new Int32Array(4),x=new K;let b=null,A=null;const E=[],y=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,P=null,q=null,X=null,O=null;this._outputColorSpace=ha;let N=0,U=0,I=null,V=-1,D=null;const ie=new ln,fe=new ln;let Be=null;const Le=new Rt(0);let Ne=0,J=n.width,oe=n.height,te=1,Te=null,Ce=null;const _e=new ln(0,0,J,oe),Ke=new ln(0,0,J,oe);let ye=!1;const Pe=new eA;let He=!1,Xe=!1;const Z=new An,ct=new K,bt=new ln,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Tt(){return I===null?te:1}let z=i;function nn(R,B){return n.getContext(R,B)}try{const R={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lv}`),n.addEventListener("webglcontextlost",Ve,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",ke,!1),z===null){const B="webgl2";if(z=nn(B,R),z===null)throw nn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw yt("WebGLRenderer: "+R.message),R}let Ye,w,M,H,W,j,de,ue,$,ee,ge,De,ve,me,he,Ie,Ge,F,pe,ne,xe,Se,re;function le(){Ye=new hL(z),Ye.init(),xe=new iP(z,Ye),w=new aL(z,Ye,e,xe),M=new tP(z,Ye),w.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),q=z.createFramebuffer(),X=z.createFramebuffer(),O=z.createFramebuffer(),H=new mL(z),W=new GO,j=new nP(z,Ye,M,W,w,xe,H),de=new fL(C),ue=new xD(z),Se=new nL(z,ue),$=new dL(z,ue,H,Se),ee=new gL(z,$,ue,Se,H),F=new _L(z,w,j),he=new rL(W),ge=new HO(C,de,Ye,w,Se,he),De=new cP(C,W),ve=new kO,me=new KO(Ye),Ge=new tL(C,de,M,ee,_,l),Ie=new eP(C,ee,w),re=new uP(z,H,w,M),pe=new iL(z,Ye,H),ne=new pL(z,Ye,H),H.programs=ge.programs,C.capabilities=w,C.extensions=Ye,C.properties=W,C.renderLists=ve,C.shadowMap=Ie,C.state=M,C.info=H}le(),v!==ya&&(T=new xL(v,n.width,n.height,o,a,r));const se=new oP(C,z);this.xr=se,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=Ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(R){R!==void 0&&(te=R,this.setSize(J,oe,!1))},this.getSize=function(R){return R.set(J,oe)},this.setSize=function(R,B,Q=!0){if(se.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}J=R,oe=B,n.width=Math.floor(R*te),n.height=Math.floor(B*te),Q===!0&&(n.style.width=R+"px",n.style.height=B+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(J*te,oe*te).floor()},this.setDrawingBufferSize=function(R,B,Q){J=R,oe=B,te=Q,n.width=Math.floor(R*Q),n.height=Math.floor(B*Q),this.setViewport(0,0,R,B)},this.setEffects=function(R){if(v===ya){yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let B=0;B<R.length;B++)if(R[B].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ie)},this.getViewport=function(R){return R.copy(_e)},this.setViewport=function(R,B,Q,k){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,B,Q,k),M.viewport(ie.copy(_e).multiplyScalar(te).round())},this.getScissor=function(R){return R.copy(Ke)},this.setScissor=function(R,B,Q,k){R.isVector4?Ke.set(R.x,R.y,R.z,R.w):Ke.set(R,B,Q,k),M.scissor(fe.copy(Ke).multiplyScalar(te).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(R){M.setScissorTest(ye=R)},this.setOpaqueSort=function(R){Te=R},this.setTransparentSort=function(R){Ce=R},this.getClearColor=function(R){return R.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(R=!0,B=!0,Q=!0){let k=0;if(R){let Y=!1;if(I!==null){const Me=I.texture.format;Y=m.has(Me)}if(Y){const Me=I.texture.type,Ee=p.has(Me),Ae=Ge.getClearColor(),Oe=Ge.getClearAlpha(),Fe=Ae.r,et=Ae.g,it=Ae.b;Ee?(g[0]=Fe,g[1]=et,g[2]=it,g[3]=Oe,z.clearBufferuiv(z.COLOR,0,g)):(S[0]=Fe,S[1]=et,S[2]=it,S[3]=Oe,z.clearBufferiv(z.COLOR,0,S))}else k|=z.COLOR_BUFFER_BIT}B&&(k|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(k|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&z.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),P=R},this.dispose=function(){n.removeEventListener("webglcontextlost",Ve,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",ke,!1),Ge.dispose(),ve.dispose(),me.dispose(),W.dispose(),de.dispose(),ee.dispose(),Se.dispose(),re.dispose(),ge.dispose(),se.dispose(),se.removeEventListener("sessionstart",Yt),se.removeEventListener("sessionend",It),mt.stop()};function Ve(R){R.preventDefault(),_y("WebGLRenderer: Context Lost."),L=!0}function ce(){_y("WebGLRenderer: Context Restored."),L=!1;const R=H.autoReset,B=Ie.enabled,Q=Ie.autoUpdate,k=Ie.needsUpdate,Y=Ie.type;le(),H.autoReset=R,Ie.enabled=B,Ie.autoUpdate=Q,Ie.needsUpdate=k,Ie.type=Y}function ke(R){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ue(R){const B=R.target;B.removeEventListener("dispose",Ue),je(B)}function je(R){gn(R),W.remove(R)}function gn(R){const B=W.get(R).programs;B!==void 0&&(B.forEach(function(Q){ge.releaseProgram(Q)}),R.isShaderMaterial&&ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,Q,k,Y,Me){B===null&&(B=Nt);const Ee=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ae=Pn(R,B,Q,k,Y);M.setMaterial(k,Ee);let Oe=Q.index,Fe=1;if(k.wireframe===!0){if(Oe=$.getWireframeAttribute(Q),Oe===void 0)return;Fe=2}const et=Q.drawRange,it=Q.attributes.position;let ze=et.start*Fe,Lt=(et.start+et.count)*Fe;Me!==null&&(ze=Math.max(ze,Me.start*Fe),Lt=Math.min(Lt,(Me.start+Me.count)*Fe)),Oe!==null?(ze=Math.max(ze,0),Lt=Math.min(Lt,Oe.count)):it!=null&&(ze=Math.max(ze,0),Lt=Math.min(Lt,it.count));const fn=Lt-ze;if(fn<0||fn===1/0)return;Se.setup(Y,k,Ae,Q,Oe);let rn,Ft=pe;if(Oe!==null&&(rn=ue.get(Oe),Ft=ne,Ft.setIndex(rn)),Y.isMesh)k.wireframe===!0?(M.setLineWidth(k.wireframeLinewidth*Tt()),Ft.setMode(z.LINES)):Ft.setMode(z.TRIANGLES);else if(Y.isLine){let Jn=k.linewidth;Jn===void 0&&(Jn=1),M.setLineWidth(Jn*Tt()),Y.isLineSegments?Ft.setMode(z.LINES):Y.isLineLoop?Ft.setMode(z.LINE_LOOP):Ft.setMode(z.LINE_STRIP)}else Y.isPoints?Ft.setMode(z.POINTS):Y.isSprite&&Ft.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))Ft.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Jn=Y._multiDrawStarts,Re=Y._multiDrawCounts,Ii=Y._multiDrawCount,St=Oe?ue.get(Oe).bytesPerElement:1,la=W.get(k).currentProgram.getUniforms();for(let Ha=0;Ha<Ii;Ha++)la.setValue(z,"_gl_DrawID",Ha),Ft.render(Jn[Ha]/St,Re[Ha])}else if(Y.isInstancedMesh)Ft.renderInstances(ze,fn,Y.count);else if(Q.isInstancedBufferGeometry){const Jn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Re=Math.min(Q.instanceCount,Jn);Ft.renderInstances(ze,fn,Re)}else Ft.render(ze,fn)};function st(R,B,Q){R.transparent===!0&&R.side===Tr&&R.forceSinglePass===!1?(R.side=Ni,R.needsUpdate=!0,an(R,B,Q),R.side=Xs,R.needsUpdate=!0,an(R,B,Q),R.side=Tr):an(R,B,Q)}this.compile=function(R,B,Q=null){Q===null&&(Q=R),A=me.get(Q),A.init(B),y.push(A),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),R!==Q&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights();const k=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Me=Y.material;if(Me)if(Array.isArray(Me))for(let Ee=0;Ee<Me.length;Ee++){const Ae=Me[Ee];st(Ae,Q,Y),k.add(Ae)}else st(Me,Q,Y),k.add(Me)}),A=y.pop(),k},this.compileAsync=function(R,B,Q=null){const k=this.compile(R,B,Q);return new Promise(Y=>{function Me(){if(k.forEach(function(Ee){W.get(Ee).currentProgram.isReady()&&k.delete(Ee)}),k.size===0){Y(R);return}setTimeout(Me,10)}Ye.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Wt=null;function On(R){Wt&&Wt(R)}function Yt(){mt.stop()}function It(){mt.start()}const mt=new rA;mt.setAnimationLoop(On),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(R){Wt=R,se.setAnimationLoop(R),R===null?mt.stop():mt.start()},se.addEventListener("sessionstart",Yt),se.addEventListener("sessionend",It),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;P!==null&&P.renderStart(R,B);const Q=se.enabled===!0&&se.isPresenting===!0,k=T!==null&&(I===null||Q)&&T.begin(C,I);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(B),B=se.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,B,I),A=me.get(R,y.length),A.init(B),A.state.textureUnits=j.getTextureUnits(),y.push(A),Z.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Pe.setFromProjectionMatrix(Z,$a,B.reversedDepth),Xe=this.localClippingEnabled,He=he.init(this.clippingPlanes,Xe),b=ve.get(R,E.length),b.init(),E.push(b),se.enabled===!0&&se.isPresenting===!0){const Ee=C.xr.getDepthSensingMesh();Ee!==null&&oi(Ee,B,-1/0,C.sortObjects)}oi(R,B,0,C.sortObjects),b.finish(),C.sortObjects===!0&&b.sort(Te,Ce,B.reversedDepth),Qe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Qe&&Ge.addToRenderList(b,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&he.beginShadows();const Y=A.state.shadowsArray;if(Ie.render(Y,R,B),He===!0&&he.endShadows(),(k&&T.hasRenderPass())===!1){const Ee=b.opaque,Ae=b.transmissive;if(A.setupLights(),B.isArrayCamera){const Oe=B.cameras;if(Ae.length>0)for(let Fe=0,et=Oe.length;Fe<et;Fe++){const it=Oe[Fe];jn(Ee,Ae,R,it)}Qe&&Ge.render(R);for(let Fe=0,et=Oe.length;Fe<et;Fe++){const it=Oe[Fe];Vt(b,R,it,it.viewport)}}else Ae.length>0&&jn(Ee,Ae,R,B),Qe&&Ge.render(R),Vt(b,R,B)}I!==null&&U===0&&(j.updateMultisampleRenderTarget(I),j.updateRenderTargetMipmap(I)),k&&T.end(C),R.isScene===!0&&R.onAfterRender(C,R,B),Se.resetDefaultState(),V=-1,D=null,y.pop(),y.length>0?(A=y[y.length-1],j.setTextureUnits(A.state.textureUnits),He===!0&&he.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,E.pop(),E.length>0?b=E[E.length-1]:b=null,P!==null&&P.renderEnd()};function oi(R,B,Q,k){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLightProbeGrid)A.pushLightProbeGrid(R);else if(R.isLight)A.pushLight(R),R.castShadow&&A.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Pe.intersectsSprite(R)){k&&bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Z);const Ee=ee.update(R),Ae=R.material;Ae.visible&&b.push(R,Ee,Ae,Q,bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Pe.intersectsObject(R))){const Ee=ee.update(R),Ae=R.material;if(k&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),bt.copy(R.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),bt.copy(Ee.boundingSphere.center)),bt.applyMatrix4(R.matrixWorld).applyMatrix4(Z)),Array.isArray(Ae)){const Oe=Ee.groups;for(let Fe=0,et=Oe.length;Fe<et;Fe++){const it=Oe[Fe],ze=Ae[it.materialIndex];ze&&ze.visible&&b.push(R,Ee,ze,Q,bt.z,it)}}else Ae.visible&&b.push(R,Ee,Ae,Q,bt.z,null)}}const Me=R.children;for(let Ee=0,Ae=Me.length;Ee<Ae;Ee++)oi(Me[Ee],B,Q,k)}function Vt(R,B,Q,k){const{opaque:Y,transmissive:Me,transparent:Ee}=R;A.setupLightsView(Q),He===!0&&he.setGlobalState(C.clippingPlanes,Q),k&&M.viewport(ie.copy(k)),Y.length>0&&li(Y,B,Q),Me.length>0&&li(Me,B,Q),Ee.length>0&&li(Ee,B,Q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function jn(R,B,Q,k){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){const ze=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new ir(1,1,{generateMipmaps:!0,type:ze?Wr:ya,minFilter:po,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const Me=A.state.transmissionRenderTarget[k.id],Ee=k.viewport||ie;Me.setSize(Ee.z*C.transmissionResolutionScale,Ee.w*C.transmissionResolutionScale);const Ae=C.getRenderTarget(),Oe=C.getActiveCubeFace(),Fe=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(Le),Ne=C.getClearAlpha(),Ne<1&&C.setClearColor(16777215,.5),C.clear(),Qe&&Ge.render(Q);const et=C.toneMapping;C.toneMapping=nr;const it=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),He===!0&&he.setGlobalState(C.clippingPlanes,k),li(R,Q,k),j.updateMultisampleRenderTarget(Me),j.updateRenderTargetMipmap(Me),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Lt=0,fn=B.length;Lt<fn;Lt++){const rn=B[Lt],{object:Ft,geometry:Jn,material:Re,group:Ii}=rn;if(Re.side===Tr&&Ft.layers.test(k.layers)){const St=Re.side;Re.side=Ni,Re.needsUpdate=!0,vn(Ft,Q,k,Jn,Re,Ii),Re.side=St,Re.needsUpdate=!0,ze=!0}}ze===!0&&(j.updateMultisampleRenderTarget(Me),j.updateRenderTargetMipmap(Me))}C.setRenderTarget(Ae,Oe,Fe),C.setClearColor(Le,Ne),it!==void 0&&(k.viewport=it),C.toneMapping=et}function li(R,B,Q){const k=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Me=R.length;Y<Me;Y++){const Ee=R[Y],{object:Ae,geometry:Oe,group:Fe}=Ee;let et=Ee.material;et.allowOverride===!0&&k!==null&&(et=k),Ae.layers.test(Q.layers)&&vn(Ae,B,Q,Oe,et,Fe)}}function vn(R,B,Q,k,Y,Me){R.onBeforeRender(C,B,Q,k,Y,Me),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(C,B,Q,k,R,Me),Y.transparent===!0&&Y.side===Tr&&Y.forceSinglePass===!1?(Y.side=Ni,Y.needsUpdate=!0,C.renderBufferDirect(Q,B,k,Y,R,Me),Y.side=Xs,Y.needsUpdate=!0,C.renderBufferDirect(Q,B,k,Y,R,Me),Y.side=Tr):C.renderBufferDirect(Q,B,k,Y,R,Me),R.onAfterRender(C,B,Q,k,Y,Me)}function an(R,B,Q){B.isScene!==!0&&(B=Nt);const k=W.get(R),Y=A.state.lights,Me=A.state.shadowsArray,Ee=Y.state.version,Ae=ge.getParameters(R,Y.state,Me,B,Q,A.state.lightProbeGridArray),Oe=ge.getProgramCacheKey(Ae);let Fe=k.programs;k.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?B.environment:null,k.fog=B.fog;const et=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;k.envMap=de.get(R.envMap||k.environment,et),k.envMapRotation=k.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Fe===void 0&&(R.addEventListener("dispose",Ue),Fe=new Map,k.programs=Fe);let it=Fe.get(Oe);if(it!==void 0){if(k.currentProgram===it&&k.lightsStateVersion===Ee)return Ba(R,Ae),it}else Ae.uniforms=ge.getUniforms(R),P!==null&&R.isNodeMaterial&&P.build(R,Q,Ae),R.onBeforeCompile(Ae,C),it=ge.acquireProgram(Ae,Oe),Fe.set(Oe,it),k.uniforms=Ae.uniforms;const ze=k.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=he.uniform),Ba(R,Ae),k.needsLights=oa(R),k.lightsStateVersion=Ee,k.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),k.lightProbeGrid=A.state.lightProbeGridArray.length>0,k.currentProgram=it,k.uniformsList=null,it}function Rn(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=jh.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Ba(R,B){const Q=W.get(R);Q.outputColorSpace=B.outputColorSpace,Q.batching=B.batching,Q.batchingColor=B.batchingColor,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.instancingMorph=B.instancingMorph,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function Yo(R,B){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let Q=0,k=R.length;Q<k;Q++){const Y=R[Q];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function Pn(R,B,Q,k,Y){B.isScene!==!0&&(B=Nt),j.resetTextureUnits();const Me=B.fog,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?B.environment:null,Ae=I===null?C.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:_t.workingColorSpace,Oe=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Fe=de.get(k.envMap||Ee,Oe),et=k.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,it=!!Q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ze=!!Q.morphAttributes.position,Lt=!!Q.morphAttributes.normal,fn=!!Q.morphAttributes.color;let rn=nr;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(rn=C.toneMapping);const Ft=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Jn=Ft!==void 0?Ft.length:0,Re=W.get(k),Ii=A.state.lights;if(He===!0&&(Xe===!0||R!==D)){const kt=R===D&&k.id===V;he.setState(k,R,kt)}let St=!1;k.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Ii.state.version||Re.outputColorSpace!==Ae||Y.isBatchedMesh&&Re.batching===!1||!Y.isBatchedMesh&&Re.batching===!0||Y.isBatchedMesh&&Re.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Re.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Re.instancing===!1||!Y.isInstancedMesh&&Re.instancing===!0||Y.isSkinnedMesh&&Re.skinning===!1||!Y.isSkinnedMesh&&Re.skinning===!0||Y.isInstancedMesh&&Re.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Re.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Re.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Re.instancingMorph===!1&&Y.morphTexture!==null||Re.envMap!==Fe||k.fog===!0&&Re.fog!==Me||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==he.numPlanes||Re.numIntersection!==he.numIntersection)||Re.vertexAlphas!==et||Re.vertexTangents!==it||Re.morphTargets!==ze||Re.morphNormals!==Lt||Re.morphColors!==fn||Re.toneMapping!==rn||Re.morphTargetsCount!==Jn||!!Re.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Re.__version=k.version);let la=Re.currentProgram;St===!0&&(la=an(k,B,Y),P&&k.isNodeMaterial&&P.onUpdateProgram(k,la,Re));let Ha=!1,Kr=!1,qo=!1;const zt=la.getUniforms(),hn=Re.uniforms;if(M.useProgram(la.program)&&(Ha=!0,Kr=!0,qo=!0),k.id!==V&&(V=k.id,Kr=!0),Re.needsLights){const kt=Yo(A.state.lightProbeGridArray,Y);Re.lightProbeGrid!==kt&&(Re.lightProbeGrid=kt,Kr=!0)}if(Ha||D!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),zt.setValue(z,"projectionMatrix",R.projectionMatrix),zt.setValue(z,"viewMatrix",R.matrixWorldInverse);const jr=zt.map.cameraPosition;jr!==void 0&&jr.setValue(z,ct.setFromMatrixPosition(R.matrixWorld)),w.logarithmicDepthBuffer&&zt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&zt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,Kr=!0,qo=!0)}if(Re.needsLights&&(Ii.state.directionalShadowMap.length>0&&zt.setValue(z,"directionalShadowMap",Ii.state.directionalShadowMap,j),Ii.state.spotShadowMap.length>0&&zt.setValue(z,"spotShadowMap",Ii.state.spotShadowMap,j),Ii.state.pointShadowMap.length>0&&zt.setValue(z,"pointShadowMap",Ii.state.pointShadowMap,j)),Y.isSkinnedMesh){zt.setOptional(z,Y,"bindMatrix"),zt.setOptional(z,Y,"bindMatrixInverse");const kt=Y.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),zt.setValue(z,"boneTexture",kt.boneTexture,j))}Y.isBatchedMesh&&(zt.setOptional(z,Y,"batchingTexture"),zt.setValue(z,"batchingTexture",Y._matricesTexture,j),zt.setOptional(z,Y,"batchingIdTexture"),zt.setValue(z,"batchingIdTexture",Y._indirectTexture,j),zt.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&zt.setValue(z,"batchingColorTexture",Y._colorsTexture,j));const Qr=Q.morphAttributes;if((Qr.position!==void 0||Qr.normal!==void 0||Qr.color!==void 0)&&F.update(Y,Q,la),(Kr||Re.receiveShadow!==Y.receiveShadow)&&(Re.receiveShadow=Y.receiveShadow,zt.setValue(z,"receiveShadow",Y.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&B.environment!==null&&(hn.envMapIntensity.value=B.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=hP()),Kr){if(zt.setValue(z,"toneMappingExposure",C.toneMappingExposure),Re.needsLights&&un(hn,qo),Me&&k.fog===!0&&De.refreshFogUniforms(hn,Me),De.refreshMaterialUniforms(hn,k,te,oe,A.state.transmissionRenderTarget[R.id]),Re.needsLights&&Re.lightProbeGrid){const kt=Re.lightProbeGrid;hn.probesSH.value=kt.texture,hn.probesMin.value.copy(kt.boundingBox.min),hn.probesMax.value.copy(kt.boundingBox.max),hn.probesResolution.value.copy(kt.resolution)}jh.upload(z,Rn(Re),hn,j)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(jh.upload(z,Rn(Re),hn,j),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&zt.setValue(z,"center",Y.center),zt.setValue(z,"modelViewMatrix",Y.modelViewMatrix),zt.setValue(z,"normalMatrix",Y.normalMatrix),zt.setValue(z,"modelMatrix",Y.matrixWorld),k.uniformsGroups!==void 0){const kt=k.uniformsGroups;for(let jr=0,Zo=kt.length;jr<Zo;jr++){const Qv=kt[jr];re.update(Qv,la),re.bind(Qv,la)}}return la}function un(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function oa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,B,Q){const k=W.get(R);k.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),W.get(R.texture).__webglTexture=B,W.get(R.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,B){const Q=W.get(R);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,Q=0){I=R,N=B,U=Q;let k=null,Y=!1,Me=!1;if(R){const Ae=W.get(R);if(Ae.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(z.FRAMEBUFFER,Ae.__webglFramebuffer),ie.copy(R.viewport),fe.copy(R.scissor),Be=R.scissorTest,M.viewport(ie),M.scissor(fe),M.setScissorTest(Be),V=-1;return}else if(Ae.__webglFramebuffer===void 0)j.setupRenderTarget(R);else if(Ae.__hasExternalTextures)j.rebindTextures(R,W.get(R.texture).__webglTexture,W.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const et=R.depthTexture;if(Ae.__boundDepthTexture!==et){if(et!==null&&W.has(et)&&(R.width!==et.image.width||R.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(R)}}const Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Me=!0);const Fe=W.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?k=Fe[B][Q]:k=Fe[B],Y=!0):R.samples>0&&j.useMultisampledRTT(R)===!1?k=W.get(R).__webglMultisampledFramebuffer:Array.isArray(Fe)?k=Fe[Q]:k=Fe,ie.copy(R.viewport),fe.copy(R.scissor),Be=R.scissorTest}else ie.copy(_e).multiplyScalar(te).floor(),fe.copy(Ke).multiplyScalar(te).floor(),Be=ye;if(Q!==0&&(k=q),M.bindFramebuffer(z.FRAMEBUFFER,k)&&M.drawBuffers(R,k),M.viewport(ie),M.scissor(fe),M.setScissorTest(Be),Y){const Ae=W.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,Q)}else if(Me){const Ae=B;for(let Oe=0;Oe<R.textures.length;Oe++){const Fe=W.get(R.textures[Oe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Oe,Fe.__webglTexture,Q,Ae)}}else if(R!==null&&Q!==0){const Ae=W.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ae.__webglTexture,Q)}V=-1},this.readRenderTargetPixels=function(R,B,Q,k,Y,Me,Ee,Ae=0){if(!(R&&R.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=W.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Oe=Oe[Ee]),Oe){M.bindFramebuffer(z.FRAMEBUFFER,Oe);try{const Fe=R.textures[Ae],et=Fe.format,it=Fe.type;if(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ae),!w.textureFormatReadable(et)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(it)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-k&&Q>=0&&Q<=R.height-Y&&z.readPixels(B,Q,k,Y,xe.convert(et),xe.convert(it),Me)}finally{const Fe=I!==null?W.get(I).__webglFramebuffer:null;M.bindFramebuffer(z.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(R,B,Q,k,Y,Me,Ee,Ae=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=W.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Oe=Oe[Ee]),Oe)if(B>=0&&B<=R.width-k&&Q>=0&&Q<=R.height-Y){M.bindFramebuffer(z.FRAMEBUFFER,Oe);const Fe=R.textures[Ae],et=Fe.format,it=Fe.type;if(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ae),!w.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ze),z.bufferData(z.PIXEL_PACK_BUFFER,Me.byteLength,z.STREAM_READ),z.readPixels(B,Q,k,Y,xe.convert(et),xe.convert(it),0);const Lt=I!==null?W.get(I).__webglFramebuffer:null;M.bindFramebuffer(z.FRAMEBUFFER,Lt);const fn=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await O3(z,fn,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ze),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Me),z.deleteBuffer(ze),z.deleteSync(fn),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,B=null,Q=0){const k=Math.pow(2,-Q),Y=Math.floor(R.image.width*k),Me=Math.floor(R.image.height*k),Ee=B!==null?B.x:0,Ae=B!==null?B.y:0;j.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,Ee,Ae,Y,Me),M.unbindTexture()},this.copyTextureToTexture=function(R,B,Q=null,k=null,Y=0,Me=0){let Ee,Ae,Oe,Fe,et,it,ze,Lt,fn;const rn=R.isCompressedTexture?R.mipmaps[Me]:R.image;if(Q!==null)Ee=Q.max.x-Q.min.x,Ae=Q.max.y-Q.min.y,Oe=Q.isBox3?Q.max.z-Q.min.z:1,Fe=Q.min.x,et=Q.min.y,it=Q.isBox3?Q.min.z:0;else{const hn=Math.pow(2,-Y);Ee=Math.floor(rn.width*hn),Ae=Math.floor(rn.height*hn),R.isDataArrayTexture?Oe=rn.depth:R.isData3DTexture?Oe=Math.floor(rn.depth*hn):Oe=1,Fe=0,et=0,it=0}k!==null?(ze=k.x,Lt=k.y,fn=k.z):(ze=0,Lt=0,fn=0);const Ft=xe.convert(B.format),Jn=xe.convert(B.type);let Re;B.isData3DTexture?(j.setTexture3D(B,0),Re=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(j.setTexture2DArray(B,0),Re=z.TEXTURE_2D_ARRAY):(j.setTexture2D(B,0),Re=z.TEXTURE_2D),M.activeTexture(z.TEXTURE0),M.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),M.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),M.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);const Ii=M.getParameter(z.UNPACK_ROW_LENGTH),St=M.getParameter(z.UNPACK_IMAGE_HEIGHT),la=M.getParameter(z.UNPACK_SKIP_PIXELS),Ha=M.getParameter(z.UNPACK_SKIP_ROWS),Kr=M.getParameter(z.UNPACK_SKIP_IMAGES);M.pixelStorei(z.UNPACK_ROW_LENGTH,rn.width),M.pixelStorei(z.UNPACK_IMAGE_HEIGHT,rn.height),M.pixelStorei(z.UNPACK_SKIP_PIXELS,Fe),M.pixelStorei(z.UNPACK_SKIP_ROWS,et),M.pixelStorei(z.UNPACK_SKIP_IMAGES,it);const qo=R.isDataArrayTexture||R.isData3DTexture,zt=B.isDataArrayTexture||B.isData3DTexture;if(R.isDepthTexture){const hn=W.get(R),Qr=W.get(B),kt=W.get(hn.__renderTarget),jr=W.get(Qr.__renderTarget);M.bindFramebuffer(z.READ_FRAMEBUFFER,kt.__webglFramebuffer),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let Zo=0;Zo<Oe;Zo++)qo&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,W.get(R).__webglTexture,Y,it+Zo),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,W.get(B).__webglTexture,Me,fn+Zo)),z.blitFramebuffer(Fe,et,Ee,Ae,ze,Lt,Ee,Ae,z.DEPTH_BUFFER_BIT,z.NEAREST);M.bindFramebuffer(z.READ_FRAMEBUFFER,null),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||W.has(R)){const hn=W.get(R),Qr=W.get(B);M.bindFramebuffer(z.READ_FRAMEBUFFER,X),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,O);for(let kt=0;kt<Oe;kt++)qo?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,hn.__webglTexture,Y,it+kt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,hn.__webglTexture,Y),zt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Qr.__webglTexture,Me,fn+kt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Qr.__webglTexture,Me),Y!==0?z.blitFramebuffer(Fe,et,Ee,Ae,ze,Lt,Ee,Ae,z.COLOR_BUFFER_BIT,z.NEAREST):zt?z.copyTexSubImage3D(Re,Me,ze,Lt,fn+kt,Fe,et,Ee,Ae):z.copyTexSubImage2D(Re,Me,ze,Lt,Fe,et,Ee,Ae);M.bindFramebuffer(z.READ_FRAMEBUFFER,null),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else zt?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Re,Me,ze,Lt,fn,Ee,Ae,Oe,Ft,Jn,rn.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(Re,Me,ze,Lt,fn,Ee,Ae,Oe,Ft,rn.data):z.texSubImage3D(Re,Me,ze,Lt,fn,Ee,Ae,Oe,Ft,Jn,rn):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Me,ze,Lt,Ee,Ae,Ft,Jn,rn.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Me,ze,Lt,rn.width,rn.height,Ft,rn.data):z.texSubImage2D(z.TEXTURE_2D,Me,ze,Lt,Ee,Ae,Ft,Jn,rn);M.pixelStorei(z.UNPACK_ROW_LENGTH,Ii),M.pixelStorei(z.UNPACK_IMAGE_HEIGHT,St),M.pixelStorei(z.UNPACK_SKIP_PIXELS,la),M.pixelStorei(z.UNPACK_SKIP_ROWS,Ha),M.pixelStorei(z.UNPACK_SKIP_IMAGES,Kr),Me===0&&B.generateMipmaps&&z.generateMipmap(Re),M.unbindTexture()},this.initRenderTarget=function(R){W.get(R).__webglFramebuffer===void 0&&j.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?j.setTextureCube(R,0):R.isData3DTexture?j.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?j.setTexture2DArray(R,0):j.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){N=0,U=0,I=null,M.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),n.unpackColorSpace=_t._getUnpackColorSpace()}}const pP=`
  precision highp float;
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,mP=`
  precision highp float;
  uniform float iTime;
  uniform vec3 iResolution;
  uniform float animationSpeed;
  uniform bool enableTop;
  uniform bool enableMiddle;
  uniform bool enableBottom;
  uniform int topLineCount;
  uniform int middleLineCount;
  uniform int bottomLineCount;
  uniform float topLineDistance;
  uniform float middleLineDistance;
  uniform float bottomLineDistance;
  uniform vec3 topWavePosition;
  uniform vec3 middleWavePosition;
  uniform vec3 bottomWavePosition;
  uniform vec2 iMouse;
  uniform bool interactive;
  uniform float bendRadius;
  uniform float bendStrength;
  uniform float bendInfluence;
  uniform bool parallax;
  uniform float parallaxStrength;
  uniform vec2 parallaxOffset;
  uniform vec3 lineGradient[8];
  uniform int lineGradientCount;

  const vec3 BLACK = vec3(0.0);
  const vec3 PINK = vec3(255.0, 0.0, 110.0) / 255.0;
  const vec3 BLUE = vec3(0.0, 229.0, 255.0) / 255.0;

  mat2 rotate(float r) {
    return mat2(cos(r), sin(r), -sin(r), cos(r));
  }

  vec3 background_color(vec2 uv) {
    vec3 col = vec3(0.0);
    float y = sin(uv.x - 0.2) * 0.3 - 0.1;
    float m = uv.y - y;
    col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
    col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
    return col * 0.5;
  }

  vec3 getLineColor(float t, vec3 baseColor) {
    if (lineGradientCount <= 0) {
      return baseColor;
    }
    vec3 gradientColor;
    if (lineGradientCount == 1) {
      gradientColor = lineGradient[0];
    } else {
      float clampedT = clamp(t, 0.0, 0.9999);
      float scaled = clampedT * float(lineGradientCount - 1);
      int idx = int(floor(scaled));
      float f = fract(scaled);
      int idx2 = min(idx + 1, lineGradientCount - 1);
      vec3 c1 = lineGradient[idx];
      vec3 c2 = lineGradient[idx2];
      gradientColor = mix(c1, c2, f);
    }
    return gradientColor * 0.5;
  }

  float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
    float time = iTime * animationSpeed;
    float x_offset = offset;
    float x_movement = time * 0.1;
    float amp = sin(offset + time * 0.2) * 0.3;
    float y = sin(uv.x + x_offset + x_movement) * amp;
    if (shouldBend) {
      vec2 d = screenUv - mouseUv;
      float influence = exp(-dot(d, d) * bendRadius);
      float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
      y += bendOffset;
    }
    float m = uv.y - y;
    return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
    baseUv.y *= -1.0;
    if (parallax) {
      baseUv += parallaxOffset;
    }

    vec3 col = vec3(0.0);
    vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

    vec2 mouseUv = vec2(0.0);
    if (interactive) {
      mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
      mouseUv.y *= -1.0;
    }

    if (enableBottom) {
      for (int i = 0; i < bottomLineCount; ++i) {
        float fi = float(i);
        float t = fi / max(float(bottomLineCount - 1), 1.0);
        vec3 lineCol = getLineColor(t, b);
        float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
        vec2 ruv = baseUv * rotate(angle);
        col += lineCol * wave(
          ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
          1.5 + 0.2 * fi, baseUv, mouseUv, interactive
        ) * 0.2;
      }
    }

    if (enableMiddle) {
      for (int i = 0; i < middleLineCount; ++i) {
        float fi = float(i);
        float t = fi / max(float(middleLineCount - 1), 1.0);
        vec3 lineCol = getLineColor(t, b);
        float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
        vec2 ruv = baseUv * rotate(angle);
        col += lineCol * wave(
          ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
          2.0 + 0.15 * fi, baseUv, mouseUv, interactive
        );
      }
    }

    if (enableTop) {
      for (int i = 0; i < topLineCount; ++i) {
        float fi = float(i);
        float t = fi / max(float(topLineCount - 1), 1.0);
        vec3 lineCol = getLineColor(t, b);
        float angle = topWavePosition.z * log(length(baseUv) + 1.0);
        vec2 ruv = baseUv * rotate(angle);
        ruv.x *= -1.0;
        col += lineCol * wave(
          ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
          1.0 + 0.2 * fi, baseUv, mouseUv, interactive
        ) * 0.1;
      }
    }

    fragColor = vec4(col, 1.0);
  }

  void main() {
    vec4 color = vec4(0.0);
    mainImage(color, gl_FragCoord.xy);
    gl_FragColor = color;
  }
`,rM=8;function _P(t){let e=t.trim();e.startsWith("#")&&(e=e.slice(1));let n=255,i=255,a=255;return e.length===3?(n=parseInt(e[0]+e[0],16),i=parseInt(e[1]+e[1],16),a=parseInt(e[2]+e[2],16)):e.length===6&&(n=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),a=parseInt(e.slice(4,6),16)),new K(n/255,i/255,a/255)}function gP({linesGradient:t,enabledWaves:e=["top","middle","bottom"],lineCount:n=[6],lineDistance:i=[5],topWavePosition:a,middleWavePosition:r,bottomWavePosition:s={x:2,y:-.7,rotate:-1},animationSpeed:o=1,interactive:l=!0,bendRadius:c=5,bendStrength:u=-.5,mouseDamping:d=.05,parallax:f=!0,parallaxStrength:h=.2,mixBlendMode:_="screen"}){const v=We.useRef(null),m=We.useRef(new ht(-1e3,-1e3)),p=We.useRef(new ht(-1e3,-1e3)),g=We.useRef(0),S=We.useRef(0),x=We.useRef(new ht(0,0)),b=We.useRef(new ht(0,0)),A=X=>{if(typeof n=="number")return n;if(!e.includes(X))return 0;const O=e.indexOf(X);return n[O]??6},E=X=>{if(typeof i=="number")return i;if(!e.includes(X))return .1;const O=e.indexOf(X);return i[O]??.1},y=e.includes("top")?A("top"):0,T=e.includes("middle")?A("middle"):0,C=e.includes("bottom")?A("bottom"):0,L=e.includes("top")?E("top")*.01:.01,P=e.includes("middle")?E("middle")*.01:.01,q=e.includes("bottom")?E("bottom")*.01:.01;return We.useEffect(()=>{const X=v.current;if(!X)return;let O=!0;const N=new Q3,U=new Xv(-1,1,1,-1,0,1);U.position.z=1;const I=new dP({antialias:!0,alpha:!1});I.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),I.domElement.style.width="100%",I.domElement.style.height="100%",X.appendChild(I.domElement);const V={iTime:{value:0},iResolution:{value:new K(1,1,1)},animationSpeed:{value:o},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:y},middleLineCount:{value:T},bottomLineCount:{value:C},topLineDistance:{value:L},middleLineDistance:{value:P},bottomLineDistance:{value:q},topWavePosition:{value:new K((a==null?void 0:a.x)??10,(a==null?void 0:a.y)??.5,(a==null?void 0:a.rotate)??-.4)},middleWavePosition:{value:new K((r==null?void 0:r.x)??5,(r==null?void 0:r.y)??0,(r==null?void 0:r.rotate)??.2)},bottomWavePosition:{value:new K((s==null?void 0:s.x)??2,(s==null?void 0:s.y)??-.7,(s==null?void 0:s.rotate)??.4)},iMouse:{value:new ht(-1e3,-1e3)},interactive:{value:l},bendRadius:{value:c},bendStrength:{value:u},bendInfluence:{value:0},parallax:{value:f},parallaxStrength:{value:h},parallaxOffset:{value:new ht(0,0)},lineGradient:{value:Array.from({length:rM},()=>new K(1,1,1))},lineGradientCount:{value:0}};if(t&&t.length>0){const Ce=t.slice(0,rM);V.lineGradientCount.value=Ce.length,Ce.forEach((_e,Ke)=>{const ye=_P(_e);V.lineGradient.value[Ke].set(ye.x,ye.y,ye.z)})}const D=new Fa({uniforms:V,vertexShader:pP,fragmentShader:mP}),ie=new Ef(2,2),fe=new or(ie,D);N.add(fe);const Be=new gD,Le=()=>{if(!O)return;const Ce=X.clientWidth||1,_e=X.clientHeight||1;I.setSize(Ce,_e,!1);const Ke=I.domElement.width,ye=I.domElement.height;V.iResolution.value.set(Ke,ye,1)};Le();const Ne=typeof ResizeObserver<"u"?new ResizeObserver(()=>{O&&Le()}):null;Ne&&Ne.observe(X);const J=Ce=>{const _e=I.domElement.getBoundingClientRect(),Ke=Ce.clientX-_e.left,ye=Ce.clientY-_e.top,Pe=I.getPixelRatio();if(m.current.set(Ke*Pe,(_e.height-ye)*Pe),g.current=1,f){const He=_e.width/2,Xe=_e.height/2,Z=(Ke-He)/_e.width,ct=-(ye-Xe)/_e.height;x.current.set(Z*h,ct*h)}},oe=()=>{g.current=0};l&&(I.domElement.addEventListener("pointermove",J),I.domElement.addEventListener("pointerleave",oe));let te=0;const Te=()=>{O&&(V.iTime.value=Be.getElapsedTime(),l&&(p.current.lerp(m.current,d),V.iMouse.value.copy(p.current),S.current+=(g.current-S.current)*d,V.bendInfluence.value=S.current),f&&(b.current.lerp(x.current,d),V.parallaxOffset.value.copy(b.current)),I.render(N,U),te=requestAnimationFrame(Te))};return Te(),()=>{O=!1,cancelAnimationFrame(te),Ne&&Ne.disconnect(),l&&(I.domElement.removeEventListener("pointermove",J),I.domElement.removeEventListener("pointerleave",oe)),ie.dispose(),D.dispose(),I.dispose(),I.forceContextLoss(),I.domElement.parentElement&&I.domElement.parentElement.removeChild(I.domElement)}},[t,e,n,i,a,r,s,o,l,c,u,d,f,h]),G.jsx("div",{ref:v,className:"floating-lines-container"})}const vP="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",Yc={INITIAL_DURATION:1200,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20,ENTER_TRANSITION_MS:180},qc=(t,e=0,n=100)=>Math.min(Math.max(t,e),n),r0=(t,e=3)=>parseFloat(t.toFixed(e)),sM=(t,e,n,i,a)=>r0(i+(a-i)*(t-e)/(n-e)),xP=({avatarUrl:t="",iconUrl:e="",grainUrl:n="",innerGradient:i,behindGlowEnabled:a=!0,behindGlowColor:r,behindGlowSize:s,className:o="",enableTilt:l=!0,enableMobileTilt:c=!1,mobileTiltSensitivity:u=5,miniAvatarUrl:d,name:f="Javi A. Torres",title:h="Software Engineer",handle:_="javicodes",status:v="Online",contactText:m="Contact",showUserInfo:p=!0,onContactClick:g})=>{const S=We.useRef(null),x=We.useRef(null),b=We.useRef(null),A=We.useRef(null),E=We.useMemo(()=>{if(!l)return null;let O=null,N=!1,U=0,I=0,V=0,D=0,ie=0;const fe=.14,Be=.6;let Le=0;const Ne=(te,Te)=>{const Ce=x.current,_e=S.current;if(!Ce||!_e)return;const Ke=Ce.clientWidth||1,ye=Ce.clientHeight||1,Pe=qc(100/Ke*te),He=qc(100/ye*Te),Xe=Pe-50,Z=He-50,ct={"--pointer-x":`${Pe}%`,"--pointer-y":`${He}%`,"--background-x":`${sM(Pe,0,100,35,65)}%`,"--background-y":`${sM(He,0,100,35,65)}%`,"--pointer-from-center":`${qc(Math.hypot(He-50,Pe-50)/50,0,1)}`,"--pointer-from-top":`${He/100}`,"--pointer-from-left":`${Pe/100}`,"--rotate-x":`${r0(-(Xe/5))}deg`,"--rotate-y":`${r0(Z/4)}deg`};for(const[bt,Nt]of Object.entries(ct))_e.style.setProperty(bt,Nt)},J=te=>{if(!N)return;U===0&&(U=te);const Te=(te-U)/1e3;U=te;const Ce=te<Le?Be:fe,_e=1-Math.exp(-Te/Ce);I+=(D-I)*_e,V+=(ie-V)*_e,Ne(I,V),Math.abs(D-I)>.05||Math.abs(ie-V)>.05||document.hasFocus()?O=requestAnimationFrame(J):(N=!1,U=0,O&&(cancelAnimationFrame(O),O=null))},oe=()=>{N||(N=!0,U=0,O=requestAnimationFrame(J))};return{setImmediate(te,Te){I=te,V=Te,Ne(I,V)},setTarget(te,Te){D=te,ie=Te,oe()},toCenter(){const te=x.current;te&&this.setTarget(te.clientWidth/2,te.clientHeight/2)},beginInitial(te){Le=performance.now()+te,oe()},getCurrent(){return{x:I,y:V,tx:D,ty:ie}},cancel(){O&&cancelAnimationFrame(O),O=null,N=!1,U=0}}},[l]),y=(O,N)=>{const U=N.getBoundingClientRect();return{x:O.clientX-U.left,y:O.clientY-U.top}},T=We.useCallback(O=>{const N=x.current;if(!N||!E)return;const{x:U,y:I}=y(O,N);E.setTarget(U,I)},[E]),C=We.useCallback(O=>{const N=x.current;if(!N||!E)return;N.classList.add("active"),N.classList.add("entering"),b.current&&window.clearTimeout(b.current),b.current=window.setTimeout(()=>{N.classList.remove("entering")},Yc.ENTER_TRANSITION_MS);const{x:U,y:I}=y(O,N);E.setTarget(U,I)},[E]),L=We.useCallback(()=>{const O=x.current;if(!O||!E)return;E.toCenter();const N=()=>{const{x:U,y:I,tx:V,ty:D}=E.getCurrent();Math.hypot(V-U,D-I)<.6?(O.classList.remove("active"),A.current=null):A.current=requestAnimationFrame(N)};A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(N)},[E]),P=We.useCallback(O=>{const N=x.current;if(!N||!E)return;const{beta:U,gamma:I}=O;if(U==null||I==null)return;const V=N.clientWidth/2,D=N.clientHeight/2,ie=qc(V+I*u,0,N.clientWidth),fe=qc(D+(U-Yc.DEVICE_BETA_OFFSET)*u,0,N.clientHeight);E.setTarget(ie,fe)},[E,u]);We.useEffect(()=>{if(!l||!E)return;const O=x.current;if(!O)return;const N=T,U=C,I=L,V=P;O.addEventListener("pointerenter",U),O.addEventListener("pointermove",N),O.addEventListener("pointerleave",I);const D=()=>{if(!c||location.protocol!=="https:")return;const Be=window.DeviceMotionEvent;Be&&typeof Be.requestPermission=="function"?Be.requestPermission().then(Le=>{Le==="granted"&&window.addEventListener("deviceorientation",V)}).catch(console.error):window.addEventListener("deviceorientation",V)};O.addEventListener("click",D);const ie=(O.clientWidth||0)-Yc.INITIAL_X_OFFSET,fe=Yc.INITIAL_Y_OFFSET;return E.setImmediate(ie,fe),E.toCenter(),E.beginInitial(Yc.INITIAL_DURATION),()=>{O.removeEventListener("pointerenter",U),O.removeEventListener("pointermove",N),O.removeEventListener("pointerleave",I),O.removeEventListener("click",D),window.removeEventListener("deviceorientation",V),b.current&&window.clearTimeout(b.current),A.current&&cancelAnimationFrame(A.current),E.cancel(),O.classList.remove("entering")}},[l,c,E,T,C,L,P]);const q=We.useMemo(()=>({"--icon":e?`url(${e})`:"none","--grain":n?`url(${n})`:"none","--inner-gradient":i??vP,"--behind-glow-color":r??"rgba(125, 190, 255, 0.67)","--behind-glow-size":s??"50%"}),[e,n,i,r,s]),X=We.useCallback(()=>{g==null||g()},[g]);return G.jsxs("div",{ref:S,className:`pc-card-wrapper ${o}`,style:q,children:[a&&G.jsx("div",{className:"pc-behind"}),G.jsx("div",{ref:x,className:"pc-card-shell",children:G.jsxs("div",{className:"pc-card",children:[G.jsx("div",{className:"pc-inside"}),G.jsx("div",{className:"pc-shine"}),G.jsx("div",{className:"pc-glare"}),G.jsx("div",{className:"pc-content pc-avatar-content",children:t&&G.jsx("img",{className:"avatar",src:t,alt:f,onError:O=>{const N=O.target;N.style.display="none"}})}),p&&G.jsxs("div",{className:"pc-user-info",children:[G.jsxs("div",{className:"pc-user-details",children:[d&&G.jsx("div",{className:"pc-mini-avatar",children:G.jsx("img",{src:d,alt:f,onError:O=>{const N=O.target;N.style.opacity="0.5",N.src=t}})}),G.jsxs("div",{className:"pc-user-text",children:[G.jsxs("span",{className:"pc-handle",children:["@",_]}),G.jsx("span",{className:"pc-status",children:v})]})]}),g&&G.jsx("button",{className:"pc-contact-btn",onClick:X,"aria-label":"Contact",children:m})]}),G.jsx("div",{className:"pc-content",children:G.jsxs("div",{className:"pc-details",children:[G.jsx("h3",{children:f}),G.jsx("p",{children:h})]})})]})})]})},SP=NA.memo(xP),yP=[{value:"5+",label:"Years Experience"},{value:"20+",label:"Projects Delivered"},{value:"10+",label:"Enterprise Clients"},{value:"100%",label:"Client Satisfaction"}];function MP(){const t=We.useRef(null);return We.useEffect(()=>{const e=rt.context(()=>{var i;const n=(i=t.current)==null?void 0:i.querySelector(".about__heading");if(n){const a=n.innerHTML.split(/(\s+)/);n.innerHTML=a.map((r,s)=>`<span class="word"><span class="word-inner">${r}</span></span>`).join(""),rt.to(n.querySelectorAll(".word-inner"),{y:0,duration:.8,stagger:.05,ease:"power3.out",scrollTrigger:{trigger:n,start:"top 80%",toggleActions:"play none none none"}})}rt.utils.toArray(".about__text").forEach((a,r)=>{rt.fromTo(a,{opacity:0,y:30},{opacity:1,y:0,duration:.8,delay:r*.15,ease:"power3.out",scrollTrigger:{trigger:a,start:"top 85%",toggleActions:"play none none none"}})}),rt.fromTo(".about__stat",{opacity:0,y:30},{opacity:1,y:0,stagger:.1,duration:.6,ease:"power3.out",scrollTrigger:{trigger:".about__stats",start:"top 85%",toggleActions:"play none none none"}}),rt.fromTo(".about__profile-card",{opacity:0,y:60,scale:.95},{opacity:1,y:0,scale:1,duration:1,ease:"power3.out",scrollTrigger:{trigger:".about__profile-card",start:"top 80%",toggleActions:"play none none none"}})},t);return()=>e.revert()},[]),G.jsx("section",{ref:t,className:"about",id:"about",children:G.jsx("div",{className:"container",children:G.jsxs("div",{className:"about__grid",children:[G.jsxs("div",{className:"about__image-col section-reveal",children:[G.jsx("div",{className:"about__profile-card",children:G.jsx(SP,{avatarUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face",miniAvatarUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",name:"UI Designer",title:"Visual & Brand Designer",handle:"portfolio",status:"Open for Projects",contactText:"Say Hello",innerGradient:"linear-gradient(145deg, #0a2a3a8c 0%, #00e5ff44 100%)",behindGlowColor:"rgba(0, 229, 255, 0.5)",behindGlowEnabled:!0,enableTilt:!0,onContactClick:()=>{var e;(e=document.getElementById("contact"))==null||e.scrollIntoView({behavior:"smooth"})}})}),G.jsxs("div",{className:"about__contact-card",children:[G.jsxs("div",{className:"about__contact-row",children:[G.jsx("span",{className:"about__contact-label",children:"Email"}),G.jsx("span",{className:"about__contact-value",children:"1031381876@qq.com"})]}),G.jsxs("div",{className:"about__contact-row",children:[G.jsx("span",{className:"about__contact-label",children:"Location"}),G.jsx("span",{className:"about__contact-value",children:"Blackpool, UK / China"})]}),G.jsxs("div",{className:"about__contact-row",children:[G.jsx("span",{className:"about__contact-label",children:"Availability"}),G.jsx("span",{className:"about__contact-value about__contact-value--available",children:"Open for Projects"})]})]})]}),G.jsxs("div",{className:"about__info-col",children:[G.jsxs("div",{className:"about__section-label section-reveal",children:[G.jsx("span",{className:"about__section-line"}),"About Me"]}),G.jsxs("h2",{className:"about__heading",children:["Design is not just what it looks like — it's how it ",G.jsx("em",{children:"works"}),"."]}),G.jsx("p",{className:"about__text",children:"A professional designer with 5+ years of UI design experience, proficient in Figma and skilled in website interface design and user experience optimization. Previously served as UI designer at multiple tech companies in China, leading B2B and B2C website projects."}),G.jsx("p",{className:"about__text",children:"Brings international project experience, having provided website design and development services for multiple restaurants in Blackpool, UK. Familiar with design aesthetics and user needs across different cultural backgrounds. Detail-oriented with a pursuit of pixel-perfect design, adept at integrating brand identity into visual design to create digital products that combine aesthetics with functionality."}),G.jsx("div",{className:"about__stats",children:yP.map((e,n)=>G.jsxs("div",{className:"about__stat",children:[G.jsx("span",{className:"about__stat-value",children:e.value}),G.jsx("span",{className:"about__stat-label",children:e.label})]},n))})]})]})})})}const EP=[{title:"The Seasider Seafood Restaurant",category:"Website UI Design · Blackpool",year:"2024",image:"https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80",color:"#1a2a3a"},{title:"Blackpool Grill Steakhouse",category:"Website UI Design · Blackpool",year:"2024",image:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",color:"#2a1a1a"},{title:"Smart Office Management System",category:"UI Design · B2B System",year:"2023",image:"https://images.unsplash.com/photo-1551288049-bebda4e30f2e?w=1200&q=80",color:"#1a1a2e"},{title:"Pleasure Beach Café",category:"Website UI Design · Blackpool",year:"2024",image:"https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&q=80",color:"#2a2a1a"},{title:"E-commerce Platform Redesign",category:"UI Design · E-commerce Platform",year:"2022",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",color:"#1b2a1a"},{title:"Italiano Italian Restaurant",category:"Website UI Design · Blackpool",year:"2023",image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",color:"#2a1a2a"}];function bP(){const t=We.useRef(null);return We.useEffect(()=>{const e=rt.context(()=>{var a,r;const n=(a=t.current)==null?void 0:a.querySelector(".work__heading");if(n){const s=n.innerHTML.split(/(\s+)/);n.innerHTML=s.map(o=>`<span class="word"><span class="word-inner">${o}</span></span>`).join(""),rt.to(n.querySelectorAll(".word-inner"),{y:0,duration:.8,stagger:.06,ease:"power3.out",scrollTrigger:{trigger:n,start:"top 80%",toggleActions:"play none none none"}})}const i=(r=t.current)==null?void 0:r.querySelectorAll(".work__card");i&&rt.fromTo(i,{opacity:0,y:80,rotateX:8},{opacity:1,y:0,rotateX:0,stagger:.12,duration:1,ease:"power3.out",scrollTrigger:{trigger:".work__grid",start:"top 80%",toggleActions:"play none none none"}}),rt.utils.toArray(".work__card-image").forEach(s=>{rt.to(s,{yPercent:-8,ease:"none",scrollTrigger:{trigger:s.closest(".work__card-image-wrap"),start:"top bottom",end:"bottom top",scrub:1}})})},t);return()=>e.revert()},[]),G.jsx("section",{ref:t,className:"work",id:"work",children:G.jsxs("div",{className:"container",children:[G.jsxs("div",{className:"work__header section-reveal",children:[G.jsxs("div",{className:"work__section-label",children:[G.jsx("span",{className:"work__section-line"}),"Selected Work"]}),G.jsxs("h2",{className:"work__heading",children:["Projects that define",G.jsx("br",{}),"my design philosophy"]})]}),G.jsx("div",{className:"work__grid",children:EP.map((e,n)=>G.jsxs("div",{className:"work__card",children:[G.jsxs("div",{className:"work__card-image-wrap",style:{background:e.color},children:[G.jsx("img",{src:e.image,alt:e.title,loading:"lazy",className:"work__card-image"}),G.jsx("div",{className:"work__card-overlay",children:G.jsx("span",{className:"work__card-view",children:"View Project →"})})]}),G.jsxs("div",{className:"work__card-info",children:[G.jsxs("div",{className:"work__card-meta",children:[G.jsx("span",{className:"work__card-category",children:e.category}),G.jsx("span",{className:"work__card-year",children:e.year})]}),G.jsx("h3",{className:"work__card-title",children:e.title})]})]},n))})]})})}const TP=[{icon:"◎",title:"Figma & Design Tools",desc:"Proficient in Figma, Sketch, Adobe XD and other mainstream design tools, efficiently handling the full workflow from prototyping to final delivery."},{icon:"⬡",title:"Responsive Design",desc:"Expert in responsive design and mobile adaptation solutions, ensuring websites display perfectly across all devices."},{icon:"◇",title:"Design System",desc:"Extensive experience in building and maintaining design systems with 100+ components and guidelines, boosting team collaboration efficiency by 40%."},{icon:"◆",title:"UX Design",desc:"Well-versed in UX design principles and interaction design methodologies, with a keen eye for detail and a pursuit of pixel-perfect design."},{icon:"△",title:"International Experience",desc:"Provided website design and development services for multiple restaurants in Blackpool, UK, with deep understanding of design aesthetics across cultural contexts."},{icon:"⎔",title:"Cross-team Collaboration",desc:"Works closely with product and development teams, familiar with HTML/CSS fundamentals, ensuring high-quality implementation of design solutions."}];function AP(){const t=We.useRef(null);return We.useEffect(()=>{const e=rt.context(()=>{var a,r;const n=(a=t.current)==null?void 0:a.querySelector(".strengths__heading");if(n){const s=n.innerHTML.split(/(\s+)/);n.innerHTML=s.map(o=>`<span class="word"><span class="word-inner">${o}</span></span>`).join(""),rt.to(n.querySelectorAll(".word-inner"),{y:0,duration:.8,stagger:.06,ease:"power3.out",scrollTrigger:{trigger:n,start:"top 80%",toggleActions:"play none none none"}})}const i=(r=t.current)==null?void 0:r.querySelectorAll(".strengths__card");i&&rt.fromTo(i,{opacity:0,y:50,scale:.92},{opacity:1,y:0,scale:1,stagger:.1,duration:.8,ease:"power3.out",scrollTrigger:{trigger:".strengths__grid",start:"top 80%",toggleActions:"play none none none"}}),rt.utils.toArray(".strengths__card-icon").forEach((s,o)=>{rt.fromTo(s,{scale:0,rotation:-180},{scale:1,rotation:0,duration:.6,delay:o*.1,ease:"back.out(1.7)",scrollTrigger:{trigger:s,start:"top 85%",toggleActions:"play none none none"}})})},t);return()=>e.revert()},[]),G.jsx("section",{ref:t,className:"strengths",id:"strengths",children:G.jsxs("div",{className:"container",children:[G.jsxs("div",{className:"strengths__header section-reveal",children:[G.jsxs("div",{className:"strengths__section-label",children:[G.jsx("span",{className:"strengths__section-line"}),"Core Strengths"]}),G.jsxs("h2",{className:"strengths__heading",children:["What I bring",G.jsx("br",{}),"to the table"]})]}),G.jsx("div",{className:"strengths__grid",children:TP.map((e,n)=>G.jsxs("div",{className:"strengths__card",children:[G.jsx("div",{className:"strengths__card-icon",children:e.icon}),G.jsx("h3",{className:"strengths__card-title",children:e.title}),G.jsx("p",{className:"strengths__card-desc",children:e.desc}),G.jsx("div",{className:"strengths__card-line"})]},n))})]})})}const oM="1031381876@qq.com";function RP(){const t=We.useRef(null);return We.useEffect(()=>{var i;const e=rt.context(()=>{var r;const a=(r=t.current)==null?void 0:r.querySelector(".contact__heading");a&&rt.fromTo(a,{opacity:0,y:80,clipPath:"inset(0 0 100% 0)"},{opacity:1,y:0,clipPath:"inset(0 0 0% 0)",duration:1.2,ease:"power4.out",scrollTrigger:{trigger:a,start:"top 80%",toggleActions:"play none none none"}}),rt.fromTo(".contact__link",{opacity:0,y:20},{opacity:1,y:0,stagger:.08,duration:.6,ease:"power3.out",scrollTrigger:{trigger:".contact__links",start:"top 90%",toggleActions:"play none none none"}})},t),n=(i=t.current)==null?void 0:i.querySelector(".contact__btn");if(n){const a=s=>{const o=n.getBoundingClientRect(),l=s.clientX-o.left-o.width/2,c=s.clientY-o.top-o.height/2;rt.to(n,{x:l*.3,y:c*.3,duration:.3,ease:"power2.out"})},r=()=>{rt.to(n,{x:0,y:0,duration:.5,ease:"elastic.out(1, 0.5)"})};return n.addEventListener("mousemove",a),n.addEventListener("mouseleave",r),()=>{e.revert(),n.removeEventListener("mousemove",a),n.removeEventListener("mouseleave",r)}}return()=>e.revert()},[]),G.jsxs("section",{ref:t,className:"contact",id:"contact",children:[G.jsx("div",{className:"contact__bg-glow"}),G.jsxs("div",{className:"container contact__inner",children:[G.jsxs("div",{className:"contact__section-label section-reveal",children:[G.jsx("span",{className:"contact__section-line"}),"Get in Touch"]}),G.jsxs("h2",{className:"contact__heading",children:["Let's create",G.jsx("br",{}),"something ",G.jsx("em",{children:"remarkable"})]}),G.jsx("p",{className:"contact__text section-reveal",children:"Have a project in mind or want to join the team? Feel free to reach out — let's create something remarkable together."}),G.jsx("div",{className:"contact__actions section-reveal",children:G.jsxs("a",{href:`mailto:${oM}`,className:"contact__btn",children:[G.jsx("span",{children:"Say Hello"}),G.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:G.jsx("path",{d:"M4 10h12M12 6l4 4-4 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),G.jsxs("div",{className:"contact__links",children:[G.jsx("a",{href:`mailto:${oM}`,className:"contact__link magnetic",children:"Email"}),G.jsx("a",{href:"#",className:"contact__link magnetic",children:"Dribbble"}),G.jsx("a",{href:"#",className:"contact__link magnetic",children:"Behance"}),G.jsx("a",{href:"#",className:"contact__link magnetic",children:"LinkedIn"})]}),G.jsxs("div",{className:"contact__footer section-reveal",children:[G.jsx("span",{children:"© 2025 UI Designer. All rights reserved."}),G.jsx("span",{children:"Built with precision & care."})]})]})]})}function CP(){const t=We.useRef(null),e=We.useRef(null);return We.useEffect(()=>{const n=t.current,i=e.current;let a=0,r=0,s=0,o=0;const l=h=>{a=h.clientX,r=h.clientY,i&&(i.style.transform=`translate(${a}px, ${r}px)`)},c=h=>{h.target.closest("a, button, .work__card, .strengths__card")&&(n==null||n.classList.add("cursor--hover"))},u=h=>{h.target.closest("a, button, .work__card, .strengths__card")&&(n==null||n.classList.remove("cursor--hover"))};window.addEventListener("mousemove",l),document.addEventListener("mouseover",c),document.addEventListener("mouseout",u);const d=()=>{s+=(a-s)*.15,o+=(r-o)*.15,n&&(n.style.transform=`translate(${s}px, ${o}px)`),f=requestAnimationFrame(d)};let f=requestAnimationFrame(d);return()=>{cancelAnimationFrame(f),window.removeEventListener("mousemove",l),document.removeEventListener("mouseover",c),document.removeEventListener("mouseout",u)}},[]),G.jsxs(G.Fragment,{children:[G.jsx("div",{ref:t,className:"custom-cursor"}),G.jsx("div",{ref:e,className:"custom-cursor-dot"})]})}rt.registerPlugin(dt);class wP extends We.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){this.setState({errorInfo:n}),console.error("ErrorBoundary caught:",e,n)}render(){var e,n,i;return this.state.hasError?G.jsxs("div",{style:{minHeight:"100vh",background:"#1a0000",color:"#ff4444",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px",fontFamily:"monospace",textAlign:"center"},children:[G.jsx("div",{style:{fontSize:"48px",marginBottom:"20px",border:"3px solid #ff4444",borderRadius:"50%",width:"80px",height:"80px",display:"flex",alignItems:"center",justifyContent:"center"},children:"!"}),G.jsx("h1",{style:{fontSize:"24px",marginBottom:"10px"},children:"Rendering Error"}),G.jsx("p",{style:{fontSize:"14px",color:"#ff8888",maxWidth:"600px",marginBottom:"20px",wordBreak:"break-all"},children:((e=this.state.error)==null?void 0:e.message)||"Unknown error"}),((n=this.state.error)==null?void 0:n.stack)&&G.jsx("pre",{style:{background:"rgba(255,0,0,0.1)",padding:"16px",borderRadius:"4px",fontSize:"11px",maxWidth:"800px",overflow:"auto",textAlign:"left",color:"#ff6666",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:this.state.error.stack}),((i=this.state.errorInfo)==null?void 0:i.componentStack)&&G.jsxs("details",{style:{marginTop:"16px",maxWidth:"800px"},children:[G.jsx("summary",{style:{color:"#ff8888",cursor:"pointer"},children:"Component Stack"}),G.jsx("pre",{style:{background:"rgba(255,0,0,0.05)",padding:"16px",borderRadius:"4px",fontSize:"11px",textAlign:"left",color:"#ff8888",whiteSpace:"pre-wrap"},children:this.state.errorInfo.componentStack})]}),G.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:"24px",padding:"10px 24px",background:"#ff4444",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px",fontFamily:"monospace"},children:"Reload Page"})]}):this.props.children}}function DP(){We.useEffect(()=>{const t=rt.context(()=>{rt.utils.toArray(".section-reveal").forEach(a=>{rt.fromTo(a,{opacity:0,y:60},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:a,start:"top 85%",toggleActions:"play none none none"}})}),rt.utils.toArray(".stagger-children").forEach(a=>{const r=a.querySelectorAll(".stagger-item");rt.fromTo(r,{opacity:0,y:40},{opacity:1,y:0,duration:.8,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:a,start:"top 80%",toggleActions:"play none none none"}})}),rt.utils.toArray(".parallax-img").forEach(a=>{rt.to(a,{yPercent:-15,ease:"none",scrollTrigger:{trigger:a,start:"top bottom",end:"bottom top",scrub:1}})});const e=document.querySelector(".work__grid");if(e&&window.innerWidth>768){const a=e.querySelectorAll(".work__card");rt.fromTo(a,{opacity:0,y:80,rotateX:5},{opacity:1,y:0,rotateX:0,stagger:.15,duration:1,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 85%",toggleActions:"play none none none"}})}const n=document.querySelector(".strengths__grid");if(n){const a=n.querySelectorAll(".strengths__card");rt.fromTo(a,{opacity:0,y:50,scale:.95},{opacity:1,y:0,scale:1,stagger:.1,duration:.8,ease:"power3.out",scrollTrigger:{trigger:n,start:"top 80%",toggleActions:"play none none none"}})}rt.utils.toArray(".about__stat-value").forEach(a=>{const r=a.textContent,s=parseInt(r);if(!isNaN(s)){const o=r.replace(/[0-9]/g,""),l={val:0};rt.to(l,{val:s,duration:2,ease:"power2.out",scrollTrigger:{trigger:a,start:"top 85%",toggleActions:"play none none none"},onUpdate:()=>{a.textContent=Math.floor(l.val)+o}})}});const i=document.querySelector(".contact__heading");i&&rt.fromTo(i,{opacity:0,y:80,clipPath:"inset(0 0 100% 0)"},{opacity:1,y:0,clipPath:"inset(0 0 0% 0)",duration:1.2,ease:"power4.out",scrollTrigger:{trigger:i,start:"top 80%",toggleActions:"play none none none"}}),rt.to(".scroll-progress-bar",{scaleX:1,ease:"none",scrollTrigger:{trigger:document.documentElement,start:"top top",end:"bottom bottom",scrub:.3}})});return()=>t.revert()},[])}function UP(){return DP(),G.jsxs(wP,{children:[G.jsx(gP,{linesGradient:["#00e5ff","#ff006e"],lineCount:[4],lineDistance:[6],animationSpeed:.6,bendRadius:4,bendStrength:-.3,parallaxStrength:.15,mixBlendMode:"screen"}),G.jsx("div",{className:"scanlines"}),G.jsx("div",{className:"noise-overlay"}),G.jsx(CP,{}),G.jsx("div",{className:"scroll-progress",children:G.jsx("div",{className:"scroll-progress-bar"})}),G.jsx(jw,{}),G.jsxs("main",{children:[G.jsx($w,{}),G.jsx(MP,{}),G.jsx(bP,{}),G.jsx(AP,{}),G.jsx(RP,{})]})]})}console.log("[main] Script loaded, mounting React app...");const Zm=document.getElementById("root");if(!Zm)console.error("[main] #root element not found!");else{console.log("[main] #root found, rendering...");try{f2.createRoot(Zm).render(G.jsx(We.StrictMode,{children:G.jsx(UP,{})})),console.log("[main] React render complete.")}catch(t){console.error("[main] Render failed:",t),Zm.innerHTML=`<div style="color:red;padding:40px;font-family:monospace;"><h1>Render Failed</h1><pre>${t.message}
${t.stack}</pre></div>`}}
