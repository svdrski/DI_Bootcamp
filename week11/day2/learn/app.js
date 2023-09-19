const fs = require('fs')

fs.readFile('./hello.txt', ('utf-8'), (err, data) => {
    if(err) {
        console.log("err")
    }
    console.log('1', data)
})

const file = fs.readFileSync('./hello.txt', ('utf-8'))

console.log('2', file)


//Добавить
//fs.appendFile('./hello.txt', 'HUHUIiiofapfa', (err) =>{
//    if (err) console.log(err)
//})

//fs.writeFile('bye.txt', 'Bye bye syk', (err) => console.log(err))


// Delete

fs.unlink('./bye.txt', err => console.log(err))