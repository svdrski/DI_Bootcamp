let colors = ["pink", "blue", "red", "green", "pink", "blue", "red", "green", "pink", "blue", "red", "green", "pink", "blue", "red", "green", "pink", "blue", "red", "green", "pink", "blue", "red", "green", "pink", "blue", "red", "green"];
let suffix;

for (let i in colors) {
    
// console.log(`My #${ Number(i) + 1} chois is ${colors[i]}`)


if (Number(i) === 10 || Number(i) === 11 || Number(i) === 12  ){
suffix = "th"
} else if (Number(i.slice(-1)) === 1 ) {
suffix = "nd"
}  else if (Number(i.slice(-1)) === 2 ) {
suffix = "rd"
}  else if (Number(i.slice(-1)) === 0) {
suffix = "st"
} else {
    suffix = "th"
}

console.log(`My ${( Number(i) + 1) + suffix} chois is ${colors[i]}`)
}
