/**
 * @function chop
 * @param {string} text - Text to chop.
 * @param {number} length - Length to chop.
 * @param {object} options - Optional settings.
 * @param {boolean} [options.ellipsis=false] - Use ellipsis.
 * @returns {string} - Chopped text.
 */

"use strict";

var argx = require('argx');

var ELLIPSIS = '...';

/** @lends chop */
function chop(text, len, options) {
    var args = argx(arguments);
    text = args.shift('string');
    len = args.shift('number');
    options = args.pop('object') || {};
    if(text.length < len){
        return text;
    }
    if (options.ellipsis) {
        return text.substr(0, len - ELLIPSIS.length) + ELLIPSIS;
    } else {
        return text.substr(0, len);
    }

}
chop.ELLIPSIS = ELLIPSIS;

module.exports = chop;
