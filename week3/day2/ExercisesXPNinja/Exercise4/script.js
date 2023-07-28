let num  = Number(prompt("type number"));

let word = "boom"
let buk = "o"


if (num < 2) {
    console.log(word);
} else if (num % 2 == 0 && num % 5 == 0 ) {
    word = `B${buk.repeat(num)}m !`;
    console.log(word.toUpperCase());
}
  else if (num % 2 == 0)  {
    word = `B${buk.repeat(num)}m !`;
   console.log( word);
} else if (num % 5 == 0 )  {
    console.log(word.toUpperCase());
}  else if (num > 2 && num !== 5) {
    word = `B${buk.repeat(num)}m`;
    console.log( word);
}


