
//Exercise1

// function isblank(value) {
// return (value.trim().length ===  0) 
// } 
// console.log(isblank("   "), isblank("fs d s"), isblank(""), isblank("ff"))




// Exercise2

// function abbrevName(name) {
// let fname = name.slice(0, name.indexOf(" ") + 2)
// console.log(fname)
// }

// abbrevName("Robin Singh")
// abbrevName("Hleb Svidzerski")



// Exercise3


// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.

// function reverse(text) {
//     let value = "";
//     for (i=0; i < text.length; i++) {
//     if (text[i] === text[i].toUpperCase()) {
//        value = value + text[i].toLowerCase();
//     } else {
//         value += text[i].toUpperCase();
//     }
//     }
//     console.log(value)

// }
// reverse("The Quick Brown Fox");


// Exercise4


function isOmnipresent (array, argument) {

    let checker = 0;

    for(i=0;i < array.length; i++){
        if (!array[i].includes(argument)){
            checker +=1
        } 
    }
    
    if (checker === 0 ) {
        console.log(true) 
    } else {
        console.log(false) 
    }

}

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)
