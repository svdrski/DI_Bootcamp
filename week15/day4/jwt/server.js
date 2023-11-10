const express = require('express')
const cors = require('cors')
const knex = require('knex')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser');
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

const jwt = require('jsonwebtoken')
const verify = require('./middleware.js')




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
                    const token = await jwt.sign({email}, 'KEY', {expiresIn: '1h'})
                    res.cookie('token', token, { httpOnly: true });
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

        const token = await jwt.sign({email}, 'KEY', {expiresIn: '1h'})
        res.cookie('token', token, { httpOnly: true });
        res.send('ok')
    } catch(e) {return console.log( e.code)}

    
})


app.get('/dashboard', verify, async (req, res) =>{

    const user = (req.user.email)
    const userData = await db('users').select('*').where({email:user})
    res.send(userData)
})
    

app.get('/logout', (req,res)=>{
    console.log('ff')
    res.clearCookie('token',  { httpOnly: true })
    res.send('Logout successful');

})






app.listen(3333, ()=>{console.log('Listen on 3333')})