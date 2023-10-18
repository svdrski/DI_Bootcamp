const db = require('../config/db.js')

class auth {
    
    static async CheckEmail (email) {
        try{
            return await db('users').select('id').where({email})
        } catch (e) {return e}
    }
    
    static async Register (id, first_name, last_name, email, password, profile_img_url) {
        try {
            return await db('users').insert({id, first_name, last_name, email, password, profile_img_url})
        } catch (e) {return e}
    }
    
    static async GetUser (email) {
        return db('users').select('*').where({email})
    }
    
}

// db('users').insert({first_name: 'hlen', last_name:"svidzerski", email:'ffaf@mail.com', password:'tetet'}, ['*'])
//.then(a => console.log(a))


module.exports = auth