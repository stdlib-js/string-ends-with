// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-ends-with@esm/index.mjs";function i(i,n,m){if(!t(i))throw new TypeError(s("invalid argument. First argument must be a string. Value: `%s`.",i));if(!t(n))throw new TypeError(s("invalid argument. Second argument must be a string. Value: `%s`.",n));if(arguments.length>2){if(!e(m))throw new TypeError(s("invalid argument. Third argument must be an integer. Value: `%s`.",m))}else m=i.length;return r(i,n,m)}export{i as default};
//# sourceMappingURL=index.mjs.map
