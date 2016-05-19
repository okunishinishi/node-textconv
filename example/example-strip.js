'use strict'

const textconv = require('textconv')

let dotRemoved = textconv.strip('This dot end text...', /\./)
console.log(dotRemoved) // => This dot end text
