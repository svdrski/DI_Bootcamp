// for (let i = 0; i < 4; i++){
//     console.log("looping at position " + i);
// }

// const arr = [1,4,7,10];
// // console.log(arr[1]);

// for (let i = 0; i < arr.length; i++){
//     console.log("The item of the array at position" + i + "is" + arr[i]);
// }



// for (let i = 0; i < 16; i++ ) {

//     if (i % 2 === 0) {
//         console.log(i + "is even")
//     } else {
//         console.log(i + "is odd")
//     }
// }


//FOR/ IN LOOP => FOR OBJECTS


// const person = {
//     fname: "John",
//     lname: "Smith",
//     age: 24
// }

// console.log(person.fname);

// for (let i in person){
//     console.log(" the key is " + i + " the value is " + person[i]);
// }


//FOR OR LOOP - STRINGS AND ARRAYS

// const colors = ["blue", "pink", "green", "purple"];

// for (let i of colors) {
//     // console.log(i);
//     if (i === "green"){   // Остановить на позиции
//         break;
//     }
//     console.log(i);
// }


// While loop 

// let n = 0;

// while( n < 6) {
    
//     console.log(n)
//     n++;
// }

//  проверка поля ввода

// let username = prompt("what is yout username");

// while (username.length < 4) {
//     username = prompt("whats your username");
// }

// alert("welcome " + username);

// DO  WHILE LOOP    Начинается если совпадает усоливие 


// let i = 0;

// do {
//     console.log("The number is " + i)
//     i++
// } while (i < 10);

// let username;

// do {
//      username = prompt("what is your username");
// } while (username !== "lev");



//THE BREAK KEYWORD

// for ( let i = 0; i < 10; i++) {
//     if ( i === 5) {
//         console.log("stop at " + i)
//         break;
        
//     }

//     console.log("The number is " + i)
// }

// THE CONTINUE STATEMENT // пропускает выбранный цикл

for ( i = 0; i < 10; i++) {
    if ( i === 3){
        continue
    }

    console.log("The number is" + i)
}


// x выводит не поярдковый номер а значение
for ( i of arr ) {
    console.log()
}