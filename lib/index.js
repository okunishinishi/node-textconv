/**
 * Convert texts.
 * @module textconv
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get chop () { return d(require('./chop')) },
  get inline () { return d(require('./inline')) },
  get pad () { return d(require('./pad')) },
  get strip () { return d(require('./strip')) },
  get trim () { return d(require('./trim')) }
}
