// let value = " * ";

// // for (i = 0; i < 6; i++) {
// //   console.log (value);
// //   value = value + " * "
// // }


// // do {
// // console.log(value);
// // value = value + " * "
// // } while (value.length / 3 !== 7)


// // for (i = 0; value.lastIndexOf("*") < 18; i++) {
// //   while (value.lastIndexOf(" * ") < 3 * i ) {
// //     console.log(value);
// //     value = value + " * ";
// //   }
// // }


// for (let i = 0;  i < 5; i++) {
//   let star = "";
//   for (let j = 0; j <= i; j++){
//     star = star + " * " 
//   }
//   console.log(star)
// }


let p1word;

// Prompt player 1 for a word with a minimum of 8 letters
while (!p1word || p1word.length < 8) {
  p1word = prompt("Player 1, enter a word with at least 8 letters:");
}

// Display the word in stars
let hiddenWord = "*".repeat(p1word.length);

// Track guessed letters and attempts
let guessedLetters = [];
let attempts = 0;
const maxAttempts = 10;

console.log(hiddenWord);

// Continuously prompt player 2 for a letter
while (attempts < maxAttempts) {
  let p2letter = prompt("Player 2, enter a letter:").toUpperCase();

  if (p2letter.length !== 1) {
    console.log("Please enter a single letter.");
    continue;
  }

  if (guessedLetters.includes(p2letter)) {
    console.log("You already guessed that letter. Try again.");
    continue;
  }

  guessedLetters.push(p2letter);

  if (p1word.includes(p2letter)) {
    let newHiddenWord = "";
    for (let i = 0; i < p1word.length; i++) {
      if (p1word[i] === p2letter || hiddenWord[i] !== "*") {
        newHiddenWord += p1word[i];
      } else {
        newHiddenWord += "*";
      }
    }
    hiddenWord = newHiddenWord;

    console.log(hiddenWord);

    if (hiddenWord === p1word) {
      console.log("CONGRATS! Player 2 wins.");
      break;
    }
  } else {
    attempts++;
    console.log(`Incorrect guess. Attempts left: ${maxAttempts - attempts}`);
  }
}

if (attempts === maxAttempts) {
  console.log("YOU LOSE. The word was:", p1word);
}

console.log("Guessed letters:", guessedLetters.join(", "));
