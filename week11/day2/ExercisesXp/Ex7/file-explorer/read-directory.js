const fs = require('fs')

fs.readdir('./', (e,f) => e ? console.log(e) : console.log(f))
