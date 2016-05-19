/**
 * Strip text.
 * @function trim
 * @param {string} text - Text to trim.
 * @param {RegExp} pattern - Pattern to strip.
 * @returns {string} - Trimmed text.
 */

'use strict'

/** @lends trim */
function trim (text, stripping) {
  let result = String(text)
  while (result && result[ 0 ].match(stripping)) {
    result = result.substr(1)
  }
  while (result && result[ result.length - 1 ].match(stripping)) {
    result = result.substr(0, result.length - 1)
  }
  return result
}

module.exports = trim
