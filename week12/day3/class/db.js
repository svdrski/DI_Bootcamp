const knex = require('knex')
//const dotenv = require('dotenv')
//dotenv.config()

require('dotenv').config()


const db =  knex({
    client:'pg',
    connection: {
        host: process.env.DB_HOST,
        port:process.env.DB_PORT,
        user:process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
})

//db.select('*').from('products')
db.raw("select * from products where id >= ? and name = ?", [2, "Iphone"])

//db('products').insert([{name: "Iphone", price: 200}])
//db('products').update({price: 99999}).where({id:3})
//.returning(["name"])
.then(a => console.log(a.rows))