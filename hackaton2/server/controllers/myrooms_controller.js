const jwt = require('jsonwebtoken')
const model = require('../models/search_mode.js')


class myrooms {

    static get (req, res){
        res.render('myrooms')
    }

    static async posts (req, res){
        let token = req.headers.authorization
        token = JSON.parse(token)
        const decoded = jwt.verify(token, 'roommates')
        const email = decoded.email

        console.log(email)

        const data = await model.myrooms(email)
        res.send(data)
    }
}

module.exports = myrooms