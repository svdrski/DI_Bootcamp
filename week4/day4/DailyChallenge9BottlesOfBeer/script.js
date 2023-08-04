
let bottlesValue = prompt("Enter bottles value");
bottlesValue++
for (i = 1; i < bottlesValue; i++) {
let them = "them";
if (i === 1) {
them = "it"
}
let minusvalue =  i;
bottlesValue = bottlesValue - minusvalue;
let lastvalue = bottlesValue - minusvalue;
if (bottlesValue < minusvalue) {
    minusvalue = bottlesValue;
    lastvalue = bottlesValue - minusvalue
}
let song = `
${bottlesValue} bottles of beer on the wall
${bottlesValue} bottles of beer
Take ${minusvalue} down, pass ${them} around
${lastvalue} bottles of beer on the wall
`
bottlesValue++
console.log(song)
}
