import fs from 'fs'

export function  readFile(path){
    fs.readFile(path, 'utf-8', (err, data) => {
        err ? console.log(err) : console.log(data)
    })
}

export function writeFile(path, newvalue) {
    fs.writeFile(path, newvalue, 'utf-8', err => err ? console.log(err) : console.log('Success') )
}
