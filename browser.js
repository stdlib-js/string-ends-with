// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=u.call(i,v,"$1e"),i=u.call(i,y,"e"),i=u.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,f,"e+0$1"),i=u.call(i,g,"e-0$1"),e.alternate&&(i=u.call(i,d,"$1."),i=u.call(i,h,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):l.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,S=isNaN,E=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,i,a,o,s,l,p,u,f,g,d,h;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,p=0;p<e.length;p++)if("string"==typeof(i=e[p]))s+=i;else{if(r=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,S(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),s+=i.arg||"",l+=1}return s}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,i,n;for(t=[],n=0,i=T.exec(e);i;)(r=e.slice(n,T.lastIndex-i[0].length)).length&&t.push(r),t.push(k(i)),n=T.lastIndex,i=T.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function O(e){var r,t;if("string"!=typeof e)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var V=Object.prototype,F=V.toString,A=V.__defineGetter__,C=V.__defineSetter__,N=V.__lookupGetter__,P=V.__lookupSetter__,$=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(N.call(e,r)||P.call(e,r)?(i=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&A&&A.call(e,r,t.get),o&&C&&C.call(e,r,t.set),e};function R(e,r,t){$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"number"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,U=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,M="function"==typeof z?z.toStringTag:"",X=Z()?function(e){var r,t,i,n,a;if(null==e)return L.call(e);t=e[M],a=M,r=null!=(n=e)&&U.call(n,a);try{e[M]=void 0}catch(r){return L.call(e)}return i=L.call(e),r?e[M]=t:delete e[M],i}:function(e){return L.call(e)},Y=Number,q=Y.prototype.toString,B=Z();function D(e){return"object"==typeof e&&(e instanceof Y||(B?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===X(e)))}function H(e){return W(e)||D(e)}R(H,"isPrimitive",W),R(H,"isObject",D);var J=Number.POSITIVE_INFINITY,K=Y.NEGATIVE_INFINITY,Q=Math.floor;function ee(e){return e<J&&e>K&&Q(r=e)===r;var r}function re(e){return W(e)&&ee(e)}function te(e){return D(e)&&ee(e.valueOf())}function ie(e){return re(e)||te(e)}function ne(e){return"string"==typeof e}R(ie,"isPrimitive",re),R(ie,"isObject",te);var ae=String.prototype.valueOf,oe=Z();function ce(e){return"object"==typeof e&&(e instanceof String||(oe?function(e){try{return ae.call(e),!0}catch(e){return!1}}(e):"[object String]"===X(e)))}function se(e){return ne(e)||ce(e)}function le(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}R(se,"isPrimitive",ne),R(se,"isObject",ce);var pe=void 0!==String.prototype.endsWith,ue=String.prototype.endsWith,fe=pe?function(e,r,t){var i,n;return n=r.length,0===t?0===n:(i=t<0?e.length+t:t,0===n||!(i-n<0||i>e.length)&&ue.call(e,r,i))}:function(e,r,t){var i,n,a;if(n=r.length,0===t)return 0===n;if(i=t<0?e.length+t:t,0===n)return!0;if((i-=n)<0)return!1;for(a=0;a<n;a++)if(e.charCodeAt(i+a)!==r.charCodeAt(a))return!1;return!0};return function(e,r,t){if(!ne(e))throw new TypeError(le("1Od3F",e));if(!ne(r))throw new TypeError(le("1Od39",r));if(arguments.length>2){if(!re(t))throw new TypeError(le("1Od2z",t))}else t=e.length;return fe(e,r,t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).endsWith=r();
//# sourceMappingURL=browser.js.map
