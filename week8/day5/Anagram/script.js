let word1 = 'Astronomer'
let word2 = 'Moon starer'

function checker (word1, word2) {
  let c = word1.toLowerCase()
  let d = word2.toLowerCase()
  if (c.length === d.length) {
    let a = [...c]
    let b = [...d]
    let result = a.filter(value => b.includes(value))
  }

  
  
}

checker (word1, word2)