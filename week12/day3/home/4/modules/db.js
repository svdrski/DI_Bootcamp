const knex = require('knex');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = knex({
    client:'pg',
    connection:{
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: '123456',
        database: 'users'
    }
})

function createUser({user,pass}){
    const salt = bcrypt.genSaltSync(saltRounds);

    return db('users').insert(
        {
            username:user,
            password:bcrypt.hashSync(pass, salt)
        }
    )
        .returning('*')
}

module.exports = {
    createUser
}