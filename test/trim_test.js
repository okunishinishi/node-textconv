/**
 * Test case for trim.
 * Runs with nodeunit.
 */

var trim = require('../lib/trim.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Trim'] = function (test) {
    test.equal(trim('foo '), 'foo');
    test.done();
};

