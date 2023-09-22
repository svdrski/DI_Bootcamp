import fs from 'fs'
export const data = () => { fs.readFile(`./files/file-data.txt`, 'utf-8', (err, data) => console.log(data))}
