
// Случайное число от 0 до 10

function getRandomNumber() {
  return Math.floor(Math.random() * 11);
}

const randomNumber = getRandomNumber();
console.log(randomNumber); // Выведет случайное целое число от 0 до 10
В этом примере, Math.random() возвращает случайное число от 0 (включительно) до 1 (исключительно). 

Затем умножаем результат на 11, чтобы получить случайное число от 0 до 10. Функция Math.floor() 
округляет результат до ближайшего целого числа, тем самым превращая число с плавающей точкой в целое.




// Проверка строки пустая или нет 

function isblank(value) {
return (value.trim().length ===  0) 
} 

console.log(isblank("   "), isblank("fs d s"), isblank(""), isblank("ff"))






//Проверка на число или пустое 

const  number = prompt("enter a number between 0 and 10");

        if ( number =="" || isNaN(number)) {
            alert("Sorry Not a number, Goodbye");
        } else {
        }



// Значение по умполчанию у парметра функции 
function userInfo(userName, userAge=20) {
    console.log("My name is " + userName + ", my age is " + userAge);
}

let name = getFullName("John", "Due", "Tel Aviv");
console.log('name=>',name);

function getFullName(firstName, lastName) {
//   console.log(firstName);
 /// address
//  let arr = []
//  arr.push(firstName + " " + lastName)
//  arr.push(address)
let myAddress = getAddress()

let obj = {
    fullName: firstName + " " + lastName,
    addres:myAddress
}
 return obj;
}

function getAddress() {
    return 1 + 2
}



// function getFullName (firstname, lastname, address) {

// }


// //  arr.push(address)
// let myAddress = getAddress()

// let obj = {
//     fullName: firstName + " " + lastName,
//     addres:myAddress
// }
//  return obj;
// }

// function getAddress() {
//     return 1 + 2
// }



// let userage = prompt("type your age")

// function getAge(userAge) {
//     if (userAge >= 18) {
//         return true
//     }
//    return false
// }

//     if (getAge(userage) === true ) {
//         alert("acceess") 
//     } else {
//         alert("denied")
//     }
