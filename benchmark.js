var pattern = '([a-z]+)+$'
if (process.argv.length >= 3) {
  pattern = process.argv[2]
}

var subject = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa!'
if (process.argv.length >= 4) {
  subject = process.argv[3]
}

var RE2 = require('re2')

var re2 = new RE2(pattern)
var built_in = new RegExp(pattern)

console.log('[input]')
console.log('pattern: ' + pattern)
console.log('subject: ' + subject + '\n')

console.log('[benchmark]')

console.time('RE2')
re2.test(subject)
console.timeEnd('RE2')

console.time('RegExp')
built_in.test(subject)
console.timeEnd('RegExp')
