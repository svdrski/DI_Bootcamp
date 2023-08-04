// Exercise1 

// function infoAboutMe(){
//     console.log("Hello i am Hleb i am 25")
// }

// infoAboutMe()

// function infoAboutPerson (personName, personAge, personFavoriteColor) {
//     console.log(`Your your name is ${personName}, your age are ${personAge}, your favorite color is ${personFavoriteColor}`)
// }


// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")







// Exercise2

// function calculateTip() {

//     let bill =  Number(prompt("amount of the bill"));
//     let tip = 0;
 
//     if (bill < 50) {
//      tipvalue = 20 ;
//     } else if (bill >=50 && bill <=200) {
//      tipvalue = 15 ;
//     } else if (bill > 200) {
//      tipvalue = 10 ;
//     }
//     tip = (bill * tipvalue) / 100 ;
 
//     console.log(`tip is ${tip} and final bill is ${bill + tip}`)
 
 
//  }
 
//  calculateTip() 
 






 
// Exercise3

// function isDivisible(divisor){

//     let sum = 0;
 
//     for (let i=0; i <=500; i++){
//        if (i % divisor === 0) {
//           sum = sum + i;
//           console.log(i);
//        }
//     }
 
//     console.log("The sum is ", sum);
//  }
 
//  isDivisible(23)







// Exercise4


// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 


// let shoppingList = ["banana", "orange", "apple"];

// function myBill(){

//    let bill = 0;

//    for (let i=0; i <shoppingList.length; i++){

//    if ( shoppingList[i] in stock && stock[shoppingList[i]] > 0 ){
//       bill = bill + prices[shoppingList[i]];
//       stock[shoppingList[i]] = stock[shoppingList[i]] - 1;
//    } 
//    }
   
//    console.log("Total price is ",bill, "usd") ;

// }

// myBill()






// Exercise5

// function changeEnough(itemPrice, amountOfChange) {

//     let cashAmount =
//     (amountOfChange[0] * 0.25) + 
//     (amountOfChange[1] * 0.10) + 
//     (amountOfChange[2] * 0.05) + 
//     (amountOfChange[3] * 0.01)


//     if (itemPrice < cashAmount ) {
//   //      console.log("true")
//         return true
        
//     }

//     else {
//    //     console.log("false")
//         return false
//     }
// }

// changeEnough(4.25, [25, 20, 5, 0])

// changeEnough(14.11, [2,100,0,0]);

// changeEnough(0.75, [0,0,20,5])


// Exercise6


let nightChecker;
let planetChecker;
let CarChecker;


function isnumbers(num){
        if ( num =="" || isNaN(num)) {
            return false
        }
        return true
}



function hotelCost(nights) {

    let nightstotalsum = nights * 140;
    return nightstotalsum
}


function planeRideCost(targer){

    if (targer === "London") {
        return 183
    } else if (targer === "Paris") {
        return 220
    }
     return 300
}


function rentalCarCost(num){

    let price = num * 40;
    if (num > 10) {
        price = price - (price * 5 / 100)
    }
    return price
}



function totalVacationCost() {

    let nightstotal ; 
    while (!isnumbers(nightstotal)) {
        nightstotal = Number(prompt("nights"));
    }


    let destinationtotal = "";

    while (destinationtotal === "" || Number(destinationtotal) >= 0 || Number(destinationtotal) <= 0 )  {
        destinationtotal = prompt("destination")
    }


    let cartotal;
    while (!isnumbers(cartotal)) {
        cartotal = Number(prompt("days for car rent"));
      }
        
       nightChecker =  hotelCost(nightstotal);
       planetChecker = planeRideCost(destinationtotal);
       CarChecker =  rentalCarCost(cartotal);
    
       totalprice = nightChecker + planetChecker + CarChecker
         
    alert(`The car cost is ${CarChecker}$ The hotel cost ${nightChecker}$ The plane tickets cost ${planetChecker}. And total price is ${totalprice}`)
}

totalVacationCost()