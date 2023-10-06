const knex = require('knex')

const db = knex({
    client:'pg',
    connection:{
        host: '127.0.0.1',
        user: 'postgres',
        password: '123456',
        database: 'library',
        port: '5432'
    }
})

module.exports = db