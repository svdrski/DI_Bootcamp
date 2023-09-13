const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`


let wordvalue;

function  toJs(value) {
    return new Promise((resolve, reject) => {
        let result = JSON.parse(value)
        Object.entries(result).length === 0 ? reject ('Object is empty') : resolve(result)
    })
}


function  toMorse(morseJS) {
    wordvalue = prompt('Enter Word').toLowerCase()
    let word = [...wordvalue]
    let morseArr = Object.keys(morseJS)

    return new Promise((resolve, reject) => {
        if (word.every(value => morseArr.includes(value))){
          resolve (word.map(value => morseJS[value]))
        } else {
            reject ('One of character does not exist in object')
        }
    })
}

function joinWords(morseTranslation) {
    let result = document.createElement('p')
    result.style.fontSize = '30px'
    result.innerHTML = `"${wordvalue}" gives you <br> ${morseTranslation.join('<br>')}`
    document.body.appendChild(result)
}

toJs(morse)
    .then(a => toMorse(a))
    .then(a => joinWords(a))
    .then(a => console.log(a))



