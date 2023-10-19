const db = require('../config/db.js')


class room {
    static Register (email,
        address, age, availability, cleanliness, comforts, description, fileInput, getup, gotobed, maxage, maxpeople, name, people_in_household, pets, petspref, phinput, rate, schedule, smokepref, smoker, title, type
    ){
        db('rooms').insert(email, address, age, availability, cleanliness, comforts, description, fileInput, getup, gotobed, maxage, maxpeople, name, people_in_household, pets, petspref, phinput, rate, schedule, smokepref, smoker, title, type)
    }
}

module.exports = room