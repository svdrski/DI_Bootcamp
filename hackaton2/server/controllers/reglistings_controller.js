const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid');
const room = require('../models/regroom_model.js')


class reg {
    static Page (req, res) {
        res.render('regroom')
    }
    
    static async Room  (req, res) {
        try{
        let token = req.headers.authorization
        token = JSON.parse(token)
        const decoded = jwt.verify(token, 'roommates')
        const email = decoded.email
        const { address, age, availability, cleanliness, comforts, description,
            fileInput, getup, gotobed, maxage, maxpeople, name, people_in_household,
            pets, petspref, phinput, rate, schedule, smokepref, smoker, title, type
        } = req.body

        const city = JSON.parse(address[1]).address_components[2].long_name
        const longitude = JSON.parse(address[1]).geometry.location.lng
        const attitude  = JSON.parse(address[1]).geometry.location.lat

        const id = uuidv4()
        const newroom = await room.Register( id, email, city, longitude, attitude, age, availability,title, description, comforts,cleanliness, getup, gotobed, maxage, maxpeople, name, people_in_household, pets, petspref, rate, schedule, smokepref, smoker, type)


                if(req.files.fileInput) {
                    const profile_img = req.files.fileInput[0].path.replace('../public', '')
                    try{
                        const profimg = await room.SendProfileImg(id, profile_img )
                    } catch (e) {console.log('Error ' + e)}
                }

                if(req.files.phinput) {
                    const room_img = []
                    req.files.phinput.forEach(a => {
                        room_img.push(a.path.replace('../public', ''))
                    })
                    try{
                        const photos = await room.SendPhoto(id, room_img)
                    } catch (e) {console.log('Error ' + e)}
                }


            res.json(newroom)
        } catch (e) {console.log('Error ' + e)}


    }


}

module.exports = reg

