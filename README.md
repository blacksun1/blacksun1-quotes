# blacksun1-quotes

[![Build Status](https://travis-ci.org/blacksun1/blacksun1-quotes.svg?branch=master)](https://travis-ci.org/blacksun1/blacksun1-quotes)
[![Coverage Status](https://coveralls.io/repos/github/blacksun1/blacksun1-quotes/badge.svg?branch=master)](https://coveralls.io/github/blacksun1/blacksun1-quotes?branch=master)

Stuff that blacksun1 says. For those who asked for them

![Parental Advisory: Explicit Lyrics](https://raw.githubusercontent.com/blacksun1/blacksun1-quotes/master/pa.jpg)

## How to use

Add it to your package

```bash
npm install --save blacksun1-quotes
```

and then use from your code with Common JS

```js
'use strict';

const { quotes } = require('blacksun1-quotes');
const randomItem = require('random-item');

quotes.forEach((quote) => console.log(quote));
console.log(randomItem(quotes));
```

or ESM

```typescript
import { quotes } from 'blacksun1-quotes';
import RandomItem from 'random-item';

quotes.forEach((quote) => console.log(quote));
console.log(RandomItem(quotes));
```
