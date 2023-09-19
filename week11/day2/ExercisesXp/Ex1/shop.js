const products = require('./products.js')

function find (prod) {
    return  products.filter(value => value.name === prod)
}


console.log(find('apple'))
console.log(find('banana'))