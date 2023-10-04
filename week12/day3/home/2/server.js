const express = require('express')
const bp = require('body-parser')
const DB = require('./modules/db.js')
const knex = require('knex')

const db = knex({
    client: 'pg',
    connection:{
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: '123456',  
        database: 'users'
    }
})
const app = express()


app.use(bp.urlencoded({extended: true}))
app.use(bp.json())
app.use('/', express.static(__dirname+'/public'))

app.post('/user', (req,res)=> {
    console.log(req.body)
    DB.createUser(req.body)
    .then(a => res.send({message: 'ok'}))
    .catch(err => {res.send({message: err.detail})})
})


app.get('/show', (req,res)=> {
    db('users')
    .select('username')
    .then(a => {
        console.log(a)
        res.send(a)
    })
    .catch(err => {
        console.log(err)
        res.send({message: err.detail})
    })
})

app.post('/find', (req,res)=> {
    console.log(req.body)
    const {user} = req.body
    db('users')
    .select('id', 'username')
    .where({username: user})
    .then(a => {
        console.log(a)
        a.length > 0 ? res.send({message: `Found => ${a[0].username} id => ${a[0].id}`}): res.send({message: 'not found'})
    })
    .catch(err => {
        console.log(err)
        res.send({message: err.detail})
    })
})


app.listen(3000, ()=> console.log('включено на 3000'))