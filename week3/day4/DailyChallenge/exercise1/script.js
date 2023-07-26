let sentence = "This dinner is bad !";

let wordNot = sentence.indexOf("not");

let wordBad = sentence.indexOf("bad");

if (wordNot == -1 ) {
    console.log(sentence)
} else if (wordNot < wordBad) {
    
    let text1 = sentence.slice(0, wordNot);
    let text2 = sentence.slice(wordBad + 3);
    console.log(text1 + "good" + text2)

}  else {
    console.log(sentence)
}



// if (wordBad > wordNot) {
//    sentence =  sentence.replace(/not.*bad/g, "good");
// } 

// Your string is : 'This dinner is not that bad ! You cook well', 
// --> the result is : 'This dinner is good ! You cook well'

// Your string is : 'This movie is not so bad !' 
// --> the result is : 'This movie is good !'

// Your string is : 'This dinner is bad !' 
// --> the result is : 'This dinner is bad !'