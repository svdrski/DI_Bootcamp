function make_pizza(size, ...toppings) {
    console.log(`\nMaking a ${size}-inch pizza with the following toppings:`);
    for (x of toppings) {
        console.log('- ' + x)
    }
}

module.exports = {
    make_pizza,
};
