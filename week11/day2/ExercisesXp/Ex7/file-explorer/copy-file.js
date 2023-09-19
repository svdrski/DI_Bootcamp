const fs = require('fs')

fs.readFile('./source.txt', 'utf-8', (err, data) => {
    if(err) {console.log(err)}
    else  {fs.writeFile('./destination.txt', data, 'utf-8', (err) => err ?
    console.log(err) : console.log('done'))}
})

