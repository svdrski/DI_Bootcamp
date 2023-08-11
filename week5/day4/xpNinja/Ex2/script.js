let text = ["", ".", "..", "..."];

let counter = 0 
var elem = document.getElementById("changeText");


setInterval(change, 200)
function change() {
    elem.innerText = text[counter]
    counter++
    if (counter > 3) {
        counter = 0 
    }
}