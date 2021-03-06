/**
 * Test case for strip.
 * Runs with mocha.
 */
'use strict'

const strip = require('../lib/strip.js')
const assert = require('assert')

describe('strip', () => {
  it('Strip', (done) => {
    assert.equal(strip('..foo/bar/baz...', /\./), 'foo/bar/baz')
    done()
  })
})

/* global describe, it */
