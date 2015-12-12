/**
 * @function inline
 * @param {string} text
 * @param {object} options - Optional setting.
 * @param {boolean} [options.trim=false] - Trim each line.
 * @param {string} [options.joiner='\t'] - Joiner for lines.
 * @returns {string}
 */

"use strict";

const argx = require('argx'),
    trim = require('./trim');

/** @lends inline */
function inline(text, options) {
    let args = argx(arguments);
    text = args.shift('string');
    options = args.pop('object') || {};
    return String(text).split(/[\n\r]/g).map((line) => {
        if (options.trim) {
            return trim(line);
        } else {
            return line;
        }
    }).join(options.joiner || '\t');
}

module.exports = inline;