let lodash = require('lodash')
const {addition, multiplication} = require('./math')

console.log(addition(1,4), multiplication(5,10))
console.log(lodash.add(1,4), lodash.multiply(5,10))