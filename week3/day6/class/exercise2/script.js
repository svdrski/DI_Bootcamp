let names= ["john", "sarah", 23, "Rudolf",34]



// for (let i = 0; i < names.length; i++) {


//     if (typeof names[i] !== "string") {
//         continue;
//     }

//     if (names[i][0] !== names[i][0].toUpperCase()) {
//         names[i] = names[i][0].toUpperCase() + names[i].slice(1);
//         console.log(names[i])
//     }

// }


for ( let i of names) {
    if (typeof i !== "string") {
        break;
    } else {
        console.log(i);
    }
}



let name = "Lev"

let nam2  = `hello ${name}`;

console.log(nam2);