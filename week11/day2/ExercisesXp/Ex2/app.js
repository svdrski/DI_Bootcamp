import {persons} from "./data.js";

function calc (array) {
    const arr = array.map(value => value.age)
    return arr.reduce((acc, num) => acc + num, 0) / arr.length
}

console.log('Age average: ' + calc(persons))