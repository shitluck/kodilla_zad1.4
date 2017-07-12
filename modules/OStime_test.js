var Ostime = require('./OStime.js')
var assert = require('assert')

var tests  = [
  {
    test: function() {
      assert.equal(Ostime.print(3700), "1 godz. 1 min. 40 sek.")
    },
    message: "conversts 3700 seconds to 1 godz. 1 min. 40 sek."
  },
  {
    test: function() {
      assert.throws(
      function() {
        return Ostime.print(-1)  
      })
    },
    message: "throws error if value is negative"
  },
  {
    test: function() {
      assert.equal(Ostime.print(125), "2 min. 5 sek")
    },
    message: "converts 125 seconds to 2 min. 5 sek"
  },
  {
    test: function() {
      assert.equal(Ostime.print(3601), "1 godz. 0 min. 1 sek.")
    },
    message: "converts 3601 seconds to 1 godz. 0 min. 1 sek."
  },
  {
    test: function() {
      assert.equal(Ostime.print(59), "59 sek.")
    },
    message: "converts 59 seconds to … 59 sek. : )"
  }
]

tests.forEach(function(currentTest) {
  try {
    currentTest.test()
    console.log('✓', currentTest.message)
  } catch(e) {
    console.log('✗', e.message)
  }
})