const path = require('path')

const getPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
}

const sendGreet = (req,res) => {
    const {name, emoji} = req.body
    res.json(`Hello dear ${name} ${emoji} ${emoji} ${emoji}`)
}


module.exports = {
    getPage,
    sendGreet
    
}