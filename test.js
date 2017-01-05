'use strict'

var assert = require('assert')
var maybe = require('./')

var calls = 0
var total = 100000

for (var n = 0; n < total; n++) {
  maybe(function () {
    calls++
  })
}

assert(calls > 0)
assert(calls < total)
