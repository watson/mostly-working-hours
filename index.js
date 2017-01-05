'use strict'

var weekend = require('is-it-weekend')

var HOUR_WEIGHTS = [0.2, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.5, 0.8, 1, 1, 1, 0.7, 1, 1, 1, 0.9, 0.8, 0.5, 0.6, 0.6, 0.3, 0.2, 0.2]

module.exports = function (cb) {
  var odds = HOUR_WEIGHTS[(new Date()).getHours()] * (weekend() ? 0.2 : 1)
  if (odds > Math.random()) cb()
}
