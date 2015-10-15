/**
 * Test case for inline.
 * Runs with nodeunit.
 */

var inline = require('../lib/inline.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Inline'] = function(test){
    var text = inline('foo\nbar', {trim:true, joiner:'a'});
    test.equal(text, 'fooabar');
    test.done();
};

