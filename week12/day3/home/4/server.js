const express = require('express')
const bp = require('body-parser')
const DB = require('./modules/db.js')
const bcrypt = require('bcrypt')
const knex = require('knex')

const db = knex({
    client:'pg',
    connection:{
        host:'127.0.0.1',
        user: 'postgres',
        password: '123456',
        port: 5432,
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
        .then(a => res.send({message:'ok'}))
        .catch(e => console.log(e))
})


app.get('/show', (req,res) => {
    db('users').select('username')
        .then(a =>{
            console.log(a)
            res.send(a)
        })
        .catch(e => res.send({message: e.datail}))
})

app.post('/find', (req,res)=> {
    console.log(req.body)
    const {user, pass} = req.body
    db('users').select('id', 'username', 'password').where({username: user})
        .then(data => {console.log(data)
    if(data.length > 0) {
        if(bcrypt.compareSync(pass, data[0].password)){
            res.send({message: `Welcome ${data[0].username}`})
        } else  {
            res.send({message: 'Wrong password'})
        }
    } else {
        res.send({message: 'User not found'})
    }
        }) .catch(e => {message: res.send(e)})

})


app.listen(3000, ()=>{
    console.log('3000')})