const assert = require('node:assert/strict');
const { quotes } = require('blacksun1-quotes');

assert(Array.isArray(quotes), 'Could not be imported as CommonJS');
console.log('✅ Can be imported as CommonJS');
