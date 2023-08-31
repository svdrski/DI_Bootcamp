let word1 = 'Astronomer'
let word2 = 'Moon starer'

function checker (word1, word2) {
  let a = [...word1.toLowerCase().replace(/\s+/g, '')]
  let b = [...word2.toLowerCase().replace(/\s+/g, '')]
  let c = [...b]
for (value of a) {
  if (b.includes(value)) {
    b.splice(b.indexOf(value),1)
  } 
}
  a.length === c.length ? b.length === 0 ? console.log(true) : console.log(false) : console.log(false)
}

checker (word1, word2)
checker ("School master", "The classroom")
checker ("The Morse Code", "Here come dots")
checker ("The Morsz Code", "Here come dots")

