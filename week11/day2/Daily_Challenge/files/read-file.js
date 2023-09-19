import fs from 'fs'

export  const read = (target)=>{
    fs.readFile(target ? target + '/file-data.txt': './file-data.txt', 'utf-8', (err,data) => console.log(data))
}

read()