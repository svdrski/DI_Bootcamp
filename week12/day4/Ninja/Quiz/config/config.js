const knex = require('knex')
const db = knex({
    client:'pg',
    connection:{
        user: 'postgres',
        password: '123456',
        host:'127.0.0.1',
        port: 5432,
        database: 'quiz'
    }
})

module.exports = db