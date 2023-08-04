// Exercise1

// function getRandomNumber() {
//     return Math.floor(Math.random() * 101);
//   }
// const randomNumber = getRandomNumber();


// function allEvenNumbers (num) {
//     for (i=0; i < num; i++){
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }

// allEvenNumbers(randomNumber)






// Exercise 2


// function capitalize(value) {
//     let value1 ="";
//     let value2 ="";
//     for (i=0; i < value.length; i++) {
//         if (i % 2 === 0) {
//             value1 += value[i].toUpperCase()
//             value2 += value[i].toLowerCase()
//         } else {
//             value1 += value[i].toLowerCase()
//             value2 += value[i].toUpperCase()
//         }
//     }
//     console.log(value1, value2)
// }


// capitalize("abcdef") 
// will return ['AbCdEf', 'aBcDeF']



// Exercise 3

// function checker(value) {
//    let status = true
//     for (i=0; i < value.length-1; i++) {
//         if(value[i] === value[value.length - i -1]){
//             status = true
//         } else {
//             status = false
//         }
//     }
//     console.log(status)
// }

// checker("madam")
// checker("bob")
// checker("kayak")
// checker("hello")


// Exercise 4 

// const array = [-1,0,3,100, 99, 2, 99];
// const array2 = ['a', 3, 4, 2];
// const array3 = [];

// function deletstr (value) {
//     let val = [];
//     for(i=0; i < value.length;i++) {
//         if (!isNaN(value[i])) {
//          val.push(value[i])
//         }
//     }
//     return val
// }

// function biggestNumberInArray(value) {
//     value = deletstr(value)
//     let num = value[0]; 
//     for (i=0; i < value.length; i++) {
//         if ( num < value[i + 1]) {
//             num = value[i + 1]
//         }
//     }
//     if (value.length === 0) {
//         console.log(0)
//     }else{
//         console.log(num)
//     }
// }

// biggestNumberInArray(array)
// biggestNumberInArray(array2)
// biggestNumberInArray(array3)



// Exercise 5 

let list=[1,2,3,3,3,3,4,6,5,66,66,55,55,3]

function listChange (value) {
    let newlist = [];
    for (i in value) {
        if (!newlist.includes(value[i])){
            newlist.push(value[i])
        }
    }
    console.log(newlist)
}

listChange(list)