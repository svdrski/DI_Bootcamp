const express = require('express')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const app = express()
app.use(express.json());

const users = [
    {
        id: 1,
        name: 'Alex',
        login: 'Alex123',
        password: 'alexloh'
    }
]

app.listen(3001, () => {
    console.log('listening on 3001')
})

app.post('/api/register', (req,res) => {
    try{
        const{name, login, password} = req.body
        if(users.some(user => user.login === login)) {
            return res.status(400).json('User with this login already exist')
        }
        const hashpass = bcrypt.hashSync(password,10)
        const newuser = {
            id: users.length + 1,
            name,
            login,
            password: hashpass
        }
        users.push(newuser)
        res.status(200).json(users)  
    } catch (e) {
        res.status(500).json('ERROR')
    }
})

app.post('/api/login', (req,res) => {
    try{
        const {login,password} = req.body
        const user = users.find(user => user.login === login)
        if(!user) {
            return res.status(401).json('User with this login does not exist')
        }
        
        if(!bcrypt.compareSync(password, user.password)){
            return res.status(401).json('WRONG PASSWORD')
        }
        
        const token = jsonwebtoken.sign({username: user.login}, 'Privat key')
        
        res.status(200).json(token)
        
        
    }catch (e) {
        res.status(500).json('Login Error')
    }
    
})

app.get('/api/profile', (req, res) => {
    try{
        const token = req.headers.authorization; 
        if(!token) {
            return res.status(401).json('Unauthoor')
        }
        
        const decodedToken = jsonwebtoken.verify(token, 'Privat key')
   
        const login = decodedToken.username
//        console.log(login)
        const profile = users.find(user => user.login === login)
        if(!profile){return res.status(404).json('user not found')}
        
        res.status(200).json(profile)
        
    } catch (e) {
        res.status(500).json('Error')
    }
    
})
