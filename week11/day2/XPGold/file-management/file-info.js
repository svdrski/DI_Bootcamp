const path  = require('path')
const fs = require('fs')

txtpath = path.join('./data', 'example.txt')
console.log(txtpath)

const showstat  = () => {
    console.log(fs.existsSync(txtpath))
    const stat = fs.statSync(txtpath)
    console.log(stat.size, stat.ctime)
}

module.exports = showstat