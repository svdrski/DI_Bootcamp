const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretName = [];

for (i = 0; i < names.length; i++) {
secretName[i] =  names[i].slice(0,1);
}

secretName =  secretName.sort().join("");

console.log(secretName);