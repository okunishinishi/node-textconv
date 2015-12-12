/**
 * Test case for inline.
 * Runs with mocha.
 */
"use strict";

const inline = require('../lib/inline.js'),
    assert = require('assert');

describe('inline', ()=> {

    it('Inline', (done) => {
        let text = inline('foo\nbar', {trim: true, joiner: 'a'});
        assert.equal(text, 'fooabar');
        done();
    });

    it('Inline a function', (done) => {
        let text = inline(String(function foo() {
            console.log('bar');
        }, {trim: true}));
        console.log(text);
        done();
    });
});

