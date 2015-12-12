/**
 * Test case for chop.
 * Runs with mocha.
 */
"use strict";

const chop = require('../lib/chop.js'),
    assert = require('assert');

describe('chop', ()=> {

    it('Chop', (done) => {
        let text = chop("This is a long long text", 18, {ellipsis: true});
        console.log(text);
        assert.equal(chop('foobarbaz', 8, {ellipsis: true}), "fooba...");
        done();
    });
});

