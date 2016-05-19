/**
 * @function chop
 * @param {string} text - Text to chop.
 * @param {number} length - Length to chop.
 * @param {object} options - Optional settings.
 * @param {boolean} [options.ellipsis=false] - Use ellipsis.
 * @returns {string} - Chopped text.
 */

'use strict'

const ELLIPSIS = '...'

/** @lends chop */
function chop (text, len, options = {}) {
  if (text.length < len) {
    return text
  }
  if (options.ellipsis) {
    return text.substr(0, len - ELLIPSIS.length) + ELLIPSIS
  } else {
    return text.substr(0, len)
  }
}

chop.ELLIPSIS = ELLIPSIS

module.exports = chop
