textconv
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/okunishinishi/node-textconv
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-textconv
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-textconv.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-textconv/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-textconv
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-textconv.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-textconv.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-textconv
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-textconv.svg
[bd_npm_url]: http://www.npmjs.org/package/textconv
[bd_npm_shield_url]: http://img.shields.io/npm/v/textconv.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Convert texts.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>
Installation
-----

```bash
$ npm install textconv --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>
Usage
---------


### Chop Text.

Chop text to fit length.

```javascript
'use strict'

const textconv = require('textconv')

let chopped = textconv.chop('This is a long long text', 18, { ellipsis: true })
console.log(chopped) // => This is a long ...

```

### Inline Text.

Remove line breaks.

```javascript
'use strict'

const textconv = require('textconv')

let inlined = textconv.inline('This is line 01 \n This is line 02', {trim: true})
console.log(inlined) // => This is line 01 \t This is line 02

```

### Strip Text.

Remove letters from text head and tail.

```javascript
'use strict'

const textconv = require('textconv')

let dotRemoved = textconv.strip('This dot end text...', /\./)
console.log(dotRemoved) // => This dot end text

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-textconv/blob/master/LICENSE).

<!-- LICENSE End -->


