var textconv = require('textconv');

var chopped = textconv.chop("This is a long long text", 18, {ellipsis: true});
console.log(chopped); //=> This is a long ...
