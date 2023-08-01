
let nightChecker;
let planetChecker;
let CarChecker;

function hotelCost() {

    let nights ;

    while (isNaN(nights) || nights < 1) {
      nights = Number(prompt("nights"));
    }

    return nights * 140

}



function planeRideCost(){

    let destination = "";

    while (destination === "" || Number(destination) >= 0 || Number(destination) <= 0 )  {
        destination = prompt("destination")
    }

    if (destination === "London") {
        return 183
    } else if (destination === "Paris") {
        return 220
    }

    return 300


}

function rentalCarCost(){
    let days;
    while (isNaN(days) || days < 1) {
        days = Number(prompt("days for car rent"));
      }
    let price = days * 40;
    if (days > 10) {
        price = price - (price * 5 / 100)
    }
    return price
}

function totalVacationCost() {

    
nightChecker =  hotelCost(nightChecker);
planetChecker = planeRideCost(planetChecker);
CarChecker =  rentalCarCost(CarChecker);

    
    console.log(`The car cost is ${CarChecker}$ The hotel cost ${nightChecker}$ The plane tickets cost ${planetChecker} `)
}

totalVacationCost()