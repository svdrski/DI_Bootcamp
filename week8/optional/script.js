const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

// Exercise 1
function filtering (array) {
    const filter = array.sort((a,b) => a - b)
    const result = []
     while (filter.length > 0) {
        const values = filter.filter(a => a === filter[0])
         result.push( values.length > 1 ? values : values[0])
         filter.splice(0, filter.lastIndexOf(filter[0]) + 1)
    }
    console.log(result)
}

filtering(array)


// Exercise 2
function answer ( array, target) {
    for (value of array) {
        for(number of array) {
            if  (value + number === target) return [value, number]
        }
    }
    return 'Not found'
}

console.log(answer([1,2,2,3,4,6,3], 7))


// Exercise 3
function converter (a, b, c) {
    type = b ? 'rgb' : 'hex'

    if (type === "rgb") {
        let data = [a,b,c].map(value => value.toString(16))
        return `#${data[0]}${data[1]}${data[2]}`
    }

    if (type === "hex") {
       let hex = a.replace('#', '')
        let hex_a = parseInt(hex.slice(0,2), 16)
        let hex_b = parseInt(hex.slice(2,4), 16)
        let hex_c = parseInt(hex.slice(4,6), 16)
        return `rgb(${hex_a},${hex_b},${hex_c})`
    }
}

console.log(converter(255, 87, 51))
console.log(converter("#FF5733"))