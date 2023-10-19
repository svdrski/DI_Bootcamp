const db = require('../config/db.js')


class room {

    static  async SendProfileImg (id, profile_img) {
        try{
            return db('profile_img').insert({id, url: profile_img}, ['*'])
        } catch (e) {return ('Error ' + e)}
    }

    static async SendPhoto(id, room_img) {
        try {
            const data = room_img.map( (room) => ({
                id:id,
                url: room
            }))
            return  db('photos').insert(data, ['*'])
        } catch (e) {return ('Error ' + e)}
    }



    static async Register (id, email, city, longitude, attitude, age,
                                   availability,title, description, comforts,
                                   cleanliness, getup, gotobed, maxage, maxpeople,
                                   name, people_in_household, pets, petspref, rate,
                                   schedule, smokepref, smoker, type ){

    try{
        return  await   db('rooms').insert({id, email, city, longitude, attitude,
            age, availability,title, description, comforts,cleanliness, getup, gotobed,
            maxage, maxpeople, name, people_in_household, pets, petspref, rate, schedule,
            smokepref, smoker, type}, ['*'])
    } catch (e) {return ('Error ' + e)}

    }
}

module.exports = room