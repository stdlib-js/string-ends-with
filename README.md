<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# endsWith

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a string ends with the characters of another string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-ends-with
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var endsWith = require( '@stdlib/string-ends-with' );
```

#### endsWith( str, search\[, len] )

Tests if a `string` ends with the characters of another `string`.

```javascript
var str = 'Remember the story I used to tell you when you were a boy?';

var bool = endsWith( str, 'boy?' );
// returns true

bool = endsWith( str, 'Boy?' );
// returns false
```

To search for a match at the end of a substring, provide a `len` argument. If `len` is positive, the function restricts the search to a substring with length `len`, beginning with the leftmost character. If `len` is negative, `len` indicates to ignore the last `len` characters (equivalent of `str.length + len`).

```javascript
var str = 'To be, or not to be, that is the question.';

var bool = endsWith( str, 'to be', 19 );
// returns true

bool = endsWith( str, 'to be', -23 );
// returns true
```

If provided an empty `search` string, the function **always** returns `true`.

```javascript
var str = 'beep boop';

var bool = endsWith( str, '' );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var endsWith = require( '@stdlib/string-ends-with' );

var bool;
var str;

str = 'Fair is foul, and foul is fair, hover through fog and filthy air';

bool = endsWith( str, 'air' );
// returns true

bool = endsWith( str, 'fair' );
// returns false

bool = endsWith( str, 'fair', 30 );
// returns true

bool = endsWith( str, 'fair', -34 );
// returns true
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-ends-with
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: ends-with [options] --search=<string> [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --search string       Search string.
         --len int             Substring length.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'Hello, World!\nBeep Boop Baz' | ends-with --search=Beep --split /\r?\n/

    # Escaped...
    $ echo -n $'Hello, World!\nBeep Boop Baz' | ends-with --search=Beep --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ ends-with --search=ep beep
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'boop' | ends-with --search=ep
false
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'Hello, World!\tBeep Boop' | ends-with --search=Boop --split '\t'
false
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/starts-with`][@stdlib/string/starts-with]</span><span class="delimiter">: </span><span class="description">test if a string starts with the characters of another string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-ends-with.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-ends-with

[test-image]: https://github.com/stdlib-js/string-ends-with/actions/workflows/test.yml/badge.svg?branch=v0.0.9
[test-url]: https://github.com/stdlib-js/string-ends-with/actions/workflows/test.yml?query=branch:v0.0.9

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-ends-with/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-ends-with?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-ends-with.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-ends-with/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-ends-with/tree/deno
[umd-url]: https://github.com/stdlib-js/string-ends-with/tree/umd
[esm-url]: https://github.com/stdlib-js/string-ends-with/tree/esm
[branches-url]: https://github.com/stdlib-js/string-ends-with/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-ends-with/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/starts-with]: https://github.com/stdlib-js/string-starts-with

<!-- </related-links> -->

</section>

<!-- /.links -->
