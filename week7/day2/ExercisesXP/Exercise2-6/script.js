
// ----- Exercise 2
let winBattle = () => true

let experiencePoints;

winBattle() ? experiencePoints = 10 : experiencePoints = 1
console.log(experiencePoints)


// ----- Exercise 3

let isString = (value) => {
   return typeof value === 'string'
}

console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));



// --- Exercise 4
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((curvalue,index) => {
    console.log(`#${index+1} is ${curvalue}`)
})

let check = colors.some(
    (currentvalue) => currentvalue === 'Violet'
)

check ? console.log("Yeah") : console.log("No...")



 // --- Exercise 5
const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors2.forEach( (cvalue, index) => {
    console.log(`${index+1 +ordinal[ index >= 3 ? 0 : index+1]} choice is ${cvalue} `)
}
)


 // --- Exercise 6 

 let bankAmount = 0;
 let VAT = 17;
 const details = ["+200", "-100", "+146", "+167", "-2900"]


 details.forEach((value, index) =>  {
    let newvalue = Number(value.slice(1))
    value[0] === "+" ? bankAmount += newvalue : bankAmount -= newvalue + (newvalue * (VAT /100))
 }
)

console.log(bankAmount)
