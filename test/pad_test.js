/**
 * Test case for pad.
 * Runs with nodeunit.
 */

var pad = require('../lib/pad.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Pad'] = function (test) {
    test.equal(pad('foo', 7), 'foo    ');
    test.done();
};

