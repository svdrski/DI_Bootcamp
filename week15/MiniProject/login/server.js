const express = require('express')
const cors = require('cors')
const knex = require('knex')
const bcrypt = require('bcrypt')
const app = express()
app.use(express.json())
app.use(cors())


const db = knex({
    client: 'pg',
    connection:{
        host: "127.0.0.1",
        port: 5432,
        user: "postgres",
        password: '123456',
        database: "login",
    }
})


app.get('/', (req,res)=>{
    res.send('Hello World')
})


app.post('/reg', async (req, res) =>{
    const {name, email, password} = req.body
    try{
        bcrypt.hash(password, 10, async(err, newPass) => {
            if(err) {res.status(500).json('Error ' + err)}
        
                try{
                    await db('users').insert({name, email})
                    await db('login').insert({password:newPass, email})
                    res.send('ok')
                } catch(e) {return res.send( e.code)}
            })
    } catch(e) {return res.send( e.code)}
})


app.post('/login', async (req, res) =>{
    const {email, password} = req.body

    try{

        const user = await db('users').select('*').where({email})
        if(!user.length) {res.send('not found')}

        const userPassword = await db('login').select('password').where({email})
    
        if(!bcrypt.compareSync(password, userPassword[0].password))
        {res.send('wrong password')}

        res.send('ok')
    } catch(e) {return console.log( e.code)}

    
})
    








app.listen(3333, ()=>{console.log('Listen on 3333')})