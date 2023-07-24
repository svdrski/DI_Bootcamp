1 == 1 

1 == "1" // с двумя равно true пытается первести тип второго в тип первого

1 === "1"  // false быстрее. не тратит время на перевод в первый


"1" == 1 

1 != 1 //false

1 != "1" //false  второй переводит в первое

1 !== "2" // true  второй не переводит в первое


//Split переводит строку в множество
// с пробелом - разделить по словам, без ничего - разделить по символам

let a = "a quick brown fox";

let arr = a.split(" ");
console.log(a);
console.log(arr);

let string = "A quick brown fox" //string to be split
let array_of_strings = string.split("") //The split() function 

console.log(string) //note that the split function doesn't change the original string
console.log(array_of_strings)


