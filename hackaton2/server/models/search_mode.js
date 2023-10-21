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


    static async find(value){

        if(value) {
            const searchValue = value.toLowerCase().replace(' ', '')
            return await db('rooms').select('*').where(db.raw("REPLACE(LOWER(city), ' ', '') LIKE ?", searchValue))
        }
    
    }
}

module.exports = search