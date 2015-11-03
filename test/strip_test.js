/**
 * Test case for strip.
 * Runs with nodeunit.
 */

var strip = require('../lib/strip.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Strip'] = function (test) {
    console.log(strip('..foo/bar/baz...', /\./));
    test.done();
};

