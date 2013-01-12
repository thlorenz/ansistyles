'use strict';
/*jshint asi: true */
var assert = require('assert')
  , styles = require('../')

assert.equal(styles.underline('underlined'), '\u001b[4munderlined\u001b[24m', 'undeline')
assert.equal(styles.bright('bright'), '\u001b[1mbright\u001b[22m', 'bright')
assert.equal(styles.inverse('inversed'), '\u001b[7minversed\u001b[27m', 'inverse')

console.log('OK');
