/**
 * Test case for trim.
 * Runs with mocha.
 */
'use strict'

const trim = require('../lib/trim.js')
const assert = require('assert')

describe('trim', () => {
  it('Trim', (done) => {
    assert.equal(trim('foo '), 'foo')
    done()
  })
})

/* global describe, it */
