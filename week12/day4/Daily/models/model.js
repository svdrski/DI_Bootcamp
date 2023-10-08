const db = require('../config/config.js')

class user {
    constructor() {
    }
    
//GET USERS LIST
    static getList(){
        return  db('users').select()
    }
    
//GET ONE USER
    static async get(id) {
            const user = await db('users').where({id: id}).select()
            return user.length > 0 ? user : null
    }
    
//CHECK IF THIS USER EXIST BEFORE CREATING REQUIEST TO DB
    static check (user) {
        return db('users').where({username: user}).select()
    }

// REGISTRATION    
    static register(email, username, first_name, last_name, password){
        return db.transaction( (trx)=> {
            trx('users').insert({email:email, username: username, first_name:first_name, last_name: last_name}).transacting(trx)
            .then(()=>{
               return  trx('hashpwd').insert({username: username, password: password}).transacting(trx)
            })
            .then(trx.commit)
            .catch(trx.rollback)
        })
    }
    
//LOGIN
    static async login (username) {
            const userdata = await db('users').where({username: username}).select()
            const userpass = await  db('hashpwd').where({username: username}).select('password')
            if (userdata.length === 0 || userpass.length === 0) {
                return null
            }
            return {...userdata[0], ...userpass[0]}
    }
    
//UPDATE USER INFORMATION
    static  update(id, email, username, first_name, last_name) {
      return  db('users').where({id:id}).update({email:email,username:username,first_name:first_name,last_name:last_name},['*'])
    }
    
    
}

module.exports = user