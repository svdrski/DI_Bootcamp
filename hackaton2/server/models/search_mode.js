const db = require('../config/db.js')


class search {
    static async get () {
        try{
            return await db('rooms').select('id').limit(10)
        } catch (e) {console.log('Error ' + e)}
    }
}

module.exports = search