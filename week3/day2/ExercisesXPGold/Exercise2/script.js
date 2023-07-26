let str1 = "mix";
let str2 = "pod";

let str11 = str1.slice(0,2);
let str22 = str2.slice(0,2);

str1 = str22 + str1.substr(2);
str2 = str11 + str2.substr(2);

let result = str1 + " " + str2;



console.log(result);

