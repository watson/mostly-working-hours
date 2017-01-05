# mostly-working-hours

Call a callback only sometimes with a certian likelihood. The likelihood
is higer during normal working hours, and really low in the weekend.

This is useful if you want to simulate load on a server for instance.

[![Build status](https://travis-ci.org/watson/mostly-working-hours.svg?branch=master)](https://travis-ci.org/watson/mostly-working-hours)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install mostly-working-hours --save
```

## Usage

```js
var maybe = require('mostly-working-hours')

maybe(function () {
  console.log('It\'s time to do some work!')
})
```

## API

### `maybe(callback)`

Will call the `callback` only based on certain odds.

The odds are higest during normal working hours and lowest in the
weekend.

## License

MIT
