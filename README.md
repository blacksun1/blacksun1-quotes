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

and then use from your code

```js
'use strict';

const Quotes = require('blacksun1-quotes');

Quotes.forEach((quote) => console.log(quote));
```

or like this

```js
'use strict';

const Quotes = require('blacksun1-quotes');
const RandomItem = require('random-item');

console.log(RandomItem(Quotes));
```
