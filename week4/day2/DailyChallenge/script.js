let askwords = prompt("Enter words (separated by commas) ")
askwords = askwords.split(' ').join('')
words = askwords.split(',')


function biggestlength(value) {
    let wlength = 0;
    for (i in value) {
        if (wlength < value[i].length){
            wlength = value[i].length
        }
    }
    return (wlength)
}

function textDecorator (value) {
    let length = biggestlength(value)
    let string = "";
    console.log("*".repeat(length+4))
    for (i=0; i<words.length; i++) {
        let space = " ";
        string = string + "*" + " " + words[i] + space.repeat(length - words[i].length + 1)  + "*"
        console.log(string)
        string = "";   
    }
    console.log("*".repeat(length+4))

}

textDecorator(words)


//Hello, World, in, a, frame