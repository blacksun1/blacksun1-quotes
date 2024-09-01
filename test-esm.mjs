import assert from 'node:assert/strict';
import { quotes } from 'blacksun1-quotes';

assert(Array.isArray(quotes), 'Could not be imported as ESM');
console.log('✅ Can be imported as ESM');
