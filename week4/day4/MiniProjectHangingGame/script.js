let p1word = [];
let guessedLetters = [];
let Maxchances = 5;
let chance = 0;
while (p1word.length < 8) {
p1word = prompt("Player 1 word ")
}
let hiddenword = "*".repeat(p1word.length);
console.log(hiddenword)
while (chance < Maxchances) {
let p2letter = prompt("Player 2 letter");
if (guessedLetters.includes(p2letter)){
    console.log("Dont enter same letter twice!!!!!")
}
guessedLetters.push(p2letter);
  if (p1word.includes(p2letter)) {
    let newWord = "";
    for (let i = 0; i < p1word.length; i++) {
        if (p1word[i] === p2letter || hiddenword[i] !=="*") {
            newWord = newWord + p1word[i]
        } else {
            newWord += "*";
        }
      }
      hiddenword = newWord;
      console.log(hiddenword)
      if (hiddenword === p1word) {
        console.log("CONGRATS YOU WIN");
        break
      }
      console.log("you use: " + guessedLetters.join(", "))
  } else {
    chance++
    console.log(`Mistake, you have  ${Maxchances - chance} chances`)
  }
} 

if (chance === Maxchances) {
    console.log("YOU LOSE")
}


