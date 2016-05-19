/**
 * Trim text.
 * @function trim
 * @param {string} text - Text to trim.
 * @returns {string} - Trimmed text.
 */

'use strict'

/** @lends trim */
function trim (text) {
  return String(text).trim()
}

module.exports = trim
