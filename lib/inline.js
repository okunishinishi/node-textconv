/**
 * @function inline
 * @param {string} text
 * @param {object} options - Optional setting.
 * @param {boolean} [options.trim=false] - Trim each line.
 * @param {string} [options.joiner='\t'] - Joiner for lines.
 * @returns {string}
 */

"use strict";

var argx = require('argx');

/** @lends inline */
function inline(text, options) {
    var args = argx(arguments);
    text = args.shift('string');
    options = args.pop('object') || {};
    return String(text).split(/[\n\r]/g).map(function (line) {
        if (options.trim) {
            return String(line).trim();
        } else {
            return line;
        }
    }).join(options.joiner || '\t');
}

module.exports = inline;