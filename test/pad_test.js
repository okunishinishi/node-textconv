/**
 * Test case for pad.
 * Runs with mocha.
 */
"use strict";

const pad = require('../lib/pad.js'),
    assert = require('assert');

describe('pad', ()=> {


    it('Pad', (done) => {
        assert.equal(pad('foo', 7), 'foo    ');
        done();
    });
});

