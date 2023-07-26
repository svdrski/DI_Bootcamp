let ask = prompt("give  a sentence containing the word “Nemo”");
let arr = ask.split(" ");
let nemoindex = arr.indexOf("Nemo");


if (nemoindex == -1) {
    console.log("I can’t find Nemo");
} else {
    console.log("I found Nemo at", nemoindex);
}

