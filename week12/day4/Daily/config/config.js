const knex = require('knex')
const db = knex({
    client:'pg',
    connection:{
        host: '127.0.0.1',
        user: 'postgres',
        password: '123456',
        port: 5432,
        database: 'usersdb'
    }
})

module.exports = db