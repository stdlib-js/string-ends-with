// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-ends-with@v0.0.2-esm/index.mjs";function i(i,n,o){if(!t(i))throw new TypeError(e("0hA3R",i));if(!t(n))throw new TypeError(e("0hA3L",n));if(arguments.length>2){if(!s(o))throw new TypeError(e("0hA3B",o))}else o=i.length;return r(i,n,o)}export{i as default};
//# sourceMappingURL=index.mjs.map
