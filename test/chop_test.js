/**
 * Test case for chop.
 * Runs with nodeunit.
 */

var chop = require('../lib/chop.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Chop'] = function (test) {
    var text = chop("This is a long long text", 18, {ellipsis: true});
    console.log(text);
    test.equal(chop('foobarbaz', 8, {ellipsis: true}), "fooba...");
    test.done();
};

