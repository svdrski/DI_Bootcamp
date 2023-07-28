let dateofbirth1 = Number(prompt("First year of birth"));
let dateofbirth2 = Number(prompt("Second year of birth"));

let younger;
let older;

if ((dateofbirth1 - dateofbirth2) < 0) {
    younger = dateofbirth2;
    older = dateofbirth1;
} else {
    younger = dateofbirth1;
    older = dateofbirth2;
}

let age1 = 0;
let age2 =  younger - older;

while (age1 * 2 !== age2) {
    age1++;
    age2++;
}

let result = younger + age1;

alert(`younger one is half the age of the older in ${result}`); 

