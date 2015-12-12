"use strict";

const textconv = require('textconv');

let chopped = textconv.chop("This is a long long text", 18, {ellipsis: true});
console.log(chopped); //=> This is a long ...
