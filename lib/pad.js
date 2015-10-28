/**
 * Pad space to fit length.
 * @function pad
 * @param {string} text - Text to space.
 * @param {number } len - Text length to fill.
 * @param {object} options - Optional settings.
 * @param {string} [option.space=' '] - Space letter to fill.
 * @returns {string} - Padded text.
 */

"use strict";

var argx = require('argx');

/** @lends pad */
function pad(text, len, options) {
    var padding = '';
    var args = argx(arguments);
    text = args.shift('string');
    len = args.shift('number');
    options = args.pop('object') || {};
    var space = options.space || ' ';
    while (text.length + padding.length < len) {
        padding += space;
    }
    return text + padding;
}

module.exports = pad;
