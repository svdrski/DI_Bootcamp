let chance = 0


function isnancheck(value) {
    if (isNaN(value) || value.length === 0) { 
        alert("Sorry Not a number, Goodbye");
    } else if  (value > 10 || value < 0 ) {
        alert(`Sorry it\’s not a good number, Goodbye`);
    }
}


function playTheGame() {
    let askstart = confirm ("would you like to play the game ?");
    if (askstart ) {
        let userNum = Number(prompt("enter a number abetween 0 and 10"));
        if (isNaN(userNum)) { 
            alert("Sorry Not a number, Goodbye");
        } else if  (userNum > 10 || userNum < 0 ) {
            alert(`Sorry it\’s not a good number, Goodbye`);
        } else {
            let  computerNumber = Math.floor(Math.random() * 11)
            console.log(compareNumbers(userNum,computerNumber)) 
        }      
    } else {
        alert("No problem, Goodbye")
    }
}





function compareNumbers(userNumber,computerNumber){
    while (true) {
        if (userNumber == computerNumber) {
            if (chance === 2) {
                chance = 0
                return alert("WINNER, out of chances");
            }
            alert("WINNER");
            chance = chance + 1
            playTheGame()
            return
        } else if (userNumber > computerNumber) {
            userNumber = prompt("Your number is bigger, enter new");
            isnancheck(userNumber)
            if (!userNumber) return;
        }  else  {
            userNumber = prompt("Your number is smaller then the computer’s, guess again");
            isnancheck(userNumber)
            if (!userNumber) return;
        }
    }

   
}

