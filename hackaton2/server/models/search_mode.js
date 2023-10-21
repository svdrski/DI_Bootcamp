const db = require('../config/db.js')


class search {
    static async get () {
        try{
            return await db('rooms').select('id').limit(10)
        } catch (e) {console.log('Error ' + e)}
    }

    static async myrooms(email) {
        return await db('rooms').select('id').where({email})
    }
}

module.exports = search