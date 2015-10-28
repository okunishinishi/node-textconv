/**
 * Convert texts.
 * @module textconv
 */

"use strict";

module.exports = {
    get chop() { return require('./chop'); },
    get inline() { return require('./inline'); },
    get pad() { return require('./pad'); }
};