// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,a=e.__lookupSetter__;var c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,c){var l,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(t,r)||a.call(t,r)?(l=t.__proto__,t.__proto__=e,delete t[r],t[r]=c.value,t.__proto__=l):t[r]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,c.get),y&&i&&i.call(t,r,c.set),t};function l(t,r,e){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var g=y()?function(t){var r,e,n,o,i;if(null==t)return b.call(t);e=t[_],i=_,r=null!=(o=t)&&v.call(o,i);try{t[_]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[_]=e:delete t[_],n}:function(t){return b.call(t)},s=Number,h=s.prototype.toString;var d=y();function m(t){return"object"==typeof t&&(t instanceof s||(d?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function j(t){return f(t)||m(t)}l(j,"isPrimitive",f),l(j,"isObject",m);var S=Number.POSITIVE_INFINITY,O=s.NEGATIVE_INFINITY,w=Math.floor;function E(t){return t<S&&t>O&&w(r=t)===r;var r}function T(t){return f(t)&&E(t)}function I(t){return m(t)&&E(t.valueOf())}function P(t){return T(t)||I(t)}function N(t){return"string"==typeof t}l(P,"isPrimitive",T),l(P,"isObject",I);var A=String.prototype.valueOf;var C=y();function F(t){return"object"==typeof t&&(t instanceof String||(C?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object String]"===g(t)))}function G(t){return N(t)||F(t)}function V(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}l(G,"isPrimitive",N),l(G,"isObject",F);var x=void 0!==String.prototype.endsWith;var k=String.prototype.endsWith;var W=x?function(t,r,e){var n,o;return o=r.length,0===e?0===o:(n=e<0?t.length+e:e,0===o||!(n-o<0||n>t.length)&&k.call(t,r,n))}:function(t,r,e){var n,o,i;if(o=r.length,0===e)return 0===o;if(n=e<0?t.length+e:e,0===o)return!0;if((n-=o)<0)return!1;for(i=0;i<o;i++)if(t.charCodeAt(n+i)!==r.charCodeAt(i))return!1;return!0};function Y(t,r,e){if(!N(t))throw new TypeError(V("1Od3F,Ex",t));if(!N(r))throw new TypeError(V("1Od39,Ey",r));if(arguments.length>2){if(!T(e))throw new TypeError(V("1Od2z,GL",e))}else e=t.length;return W(t,r,e)}export{Y as default};
//# sourceMappingURL=mod.js.map
