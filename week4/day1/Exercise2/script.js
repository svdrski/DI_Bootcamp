


function getMomAge (age) {
 return age *2
}

function dadAge (age) {
    return age * 1.2
}

function getMumDad (age) {
    let mum = getMomAge(age)
    let dad = dadAge(age)
    console.log(mum, dad)
}



getMumDad (20)






// let  person = {
//     age: 12,
//     name: "Zaba",
//     full: function() {
//         console.log("Hello my name is " + this.name + "and i am " + this.age)
//     }
// }

// person.full()