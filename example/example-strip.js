var textconv = require('textconv');

var dotRemoved = textconv.strip("This dot end text...", /\./);
console.log(dotRemoved); //=> This dot end text
