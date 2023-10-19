const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid');
const room = require('../models/regroom_model.js')


class reg {
    static Page (req, res) {
        res.render('regroom')
    }
    
    static async Room  (req, res) {

        let token = req.headers.authorization
        token = JSON.parse(token)
        const decoded = jwt.verify(token, 'roommates')
        const email = decoded.email
        const {
            address, age, availability, cleanliness, comforts, description, fileInput, getup, gotobed, maxage, maxpeople, name, people_in_household, pets, petspref, phinput, rate, schedule, smokepref, smoker, title, type
        } = req.body

        const city = JSON.parse(address[1]).address_components[2].long_name
        const longitude = JSON.parse(address[1]).geometry.location.lng
        const attitude  = JSON.parse(address[1]).geometry.location.lat


//        const newroom = await room.Register({email, city, longitude, attitude, age, availability, cleanliness, comforts, description, fileInput, getup, gotobed, maxage, maxpeople, name, people_in_household, pets, petspref, phinput, rate, schedule, smokepref, smoker, title, type}, ['*'])
//        console.log(newroom)
        res.json(address)

//        console.log(req.files)
    }


}

module.exports = reg

