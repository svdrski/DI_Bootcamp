let verb = prompt("Type verb");

if ((verb.length >= 3) && (verb.slice(-3) != "ing")) {
verb = verb + "ing";
} else if ((verb.length >= 3) && (verb.slice(-3) === "ing") ) {
verb = verb + "ly";
} 



console.log(verb);