/**
 * Test case for strip.
 * Runs with mocha.
 */
"use strict";

const strip = require('../lib/strip.js'),
    assert = require('assert');

describe('strip', () => {


    it('Strip', (done) => {
        assert.equal(strip('..foo/bar/baz...', /\./), 'foo/bar/baz');
        done();
    });
});

