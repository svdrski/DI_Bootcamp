

function playTheGame() {

    let askstart = confirm ("would you like to play the game ?");

    if (askstart === false ) {
        alert("No problem, Goodbye")
    } else {

       let userNumber = Number(prompt("enter a number between 0 and 10"));

       
        if ( userNumber =="" || isNaN(userNumber)) {
            alert("Sorry Not a number, Goodbye");
        } else if (Number(userNumber) < 0 || Number(userNumber) > 10 ) {
            alert(`Sorry it\’s not a good number, Goodbye`);
        } else { 
          let  computerNumber = Math.floor(Math.random() * 11)
            console.log(compareNumbers(userNumber,computerNumber)) 
        }
    }

}


let chance = 0

function compareNumbers(userNumber,computerNumber){

 

    if (userNumber === computerNumber) {
        alert("WINNER");
        chance = chance + 1
        console.log(chance)
    } else if (userNumber > computerNumber) {
        alert("Your number is bigger then the computer’s")
         playTheGame()
    }  else {
        alert("Your number is smaller then the computer’s, guess again")
         playTheGame()

    }

    if (chance > 3) {
        chance = 0
        return alert("out of chances");
    }

}

