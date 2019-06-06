var RE2 = require('re2')

var pattern = '([a-z]+)+$'

var re2 = new RE2(pattern)
var built_in = new RegExp(pattern)

var input = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa!'

console.time('RE2')
re2.test(input)
console.timeEnd('RE2')

console.time('RegExp')
built_in.test(input)
console.timeEnd('RegExp')
