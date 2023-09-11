function  makeAllCaps(array) {
    return new Promise((resolve, reject) => {
        if (array.every(a => typeof a === 'string')) {
            resolve(array.map(a => a.toUpperCase()))
        } else {
            reject('one of values is not a string')
        }
    })
}

function sortWords(UpArray) {
    return new Promise((resolve, reject) => {
        if (UpArray.length > 4) {
            resolve(UpArray.sort())
        } else {
            reject('array length is not bigger than 4')
        }
    })
}


//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))
