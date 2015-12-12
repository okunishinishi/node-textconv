"use strict";

const textconv = require('textconv');

let inlined = textconv.inline("This is line 01 \n This is line 02", {trim: true});
console.log(inlined); //=> This is line 01 \t This is line 02
