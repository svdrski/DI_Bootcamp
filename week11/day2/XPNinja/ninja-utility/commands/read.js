import fs from 'fs'


export  const read = (path) =>{
    fs.readFile(path ? path : './info.txt', 'utf-8',(e,d) => e ? console.log(e) : console.log(d))
}  
