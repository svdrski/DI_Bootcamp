let index = prompt("What is your index");

//Without Regular Expressions

// if (index[5] === undefined && typeof index[4] === "string"

//    &&  Number(index[0] + index[1] + index[2] + index[3] + index[4] >= 0)
   
//    && index[0] !== " " && index[1] !== " " && index[2] !== " " && index[3] !== " " && index[4] !== " ") {
//     console.log("success");
// } else {
//     console.log("error");
// }


if (!isNaN(index) && index.length === 5  && index.indexOf(" ") == -1 )   {
    console.log("success");
} else {
        console.log("error");
    }
