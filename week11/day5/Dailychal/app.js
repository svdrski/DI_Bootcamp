const express = require('express')
const router = express.Router()
const cors = require('cors');
const path = require ('path')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const fs = require('fs')
const app = express()
app.use(express.json())
app.use(cors());
app.use('/', router);
app.listen(4444, ()=> console.log("Listening on 4444"))



app.use(express.json())
const staticPath = path.join(__dirname, 'front');
app.use(express.static(staticPath));
app.use(express.urlencoded({extended:true}));





app.get('/', (req, res) => {
    console.log(__dirname)
    const indexPath = path.join(__dirname, '/front/Login.html');
    res.sendFile(indexPath);
    
});


router.get('/users', (req, res) => {
    fs.readFile('./users.json', 'utf-8', (err, data)=>{
        if(err){ return res.json('Can not read file')}
        res.json(JSON.parse(data))
    })
})

// registration
router.post('/register', (req, res) =>{
    const{firstname, lastname, email, username, password} = req.body
    try {
        fs.readFile('./users.json', 'utf-8', (err, data)=>{
            if(err){ return res.json('Can not read file')}
            data = JSON.parse(data)
            // check if username exist
            if(data.some(item => item.username === username)) {
                return res.status(500).json('User with this username already exist')
            }
            const hashpass = bcrypt.hashSync(password,10)
            const newUser = {
                id: data.length + 1, 
                firstname,
                lastname,
                email,
                username,
                password:hashpass
            }
            data.push(newUser)
            fs.writeFile('./users.json', JSON.stringify(data), 'utf-8', (err,data) => {
                err ? res.status(500).json("Can not write file") : res.json(newUser)
            })
        })
    } catch (e) {
        res.status(500).json('ERROR')
    }
  
    
    })

// login
 router.post('/login', (req, res) =>{
     const{username, password} = req.body
     try{
         fs.readFile('./users.json', 'utf-8', (err, data)=>{
             if(err){ return res.json('Can not read file')}
             data = JSON.parse(data)
             const user = data.find(item => item.username === username)
             /// check username
             if(!user) {return res.status(401).json('There is no user with this username')}
             /// check password
             if(!bcrypt.compareSync(password, user.password)){
                 return res.status(401).json('Wrong password')
             }
             const token = jsonwebtoken.sign({username:user.username}, 'Privat key')
             res.json(token)
         })
     } catch (e) {
         res.status(500).json('ERROR')
     }
 })


// get one
router.get('/users/:id', (req, res) =>{
    const{id} = req.params
    try {
        fs.readFile('./users.json', 'utf-8', (err, data)=>{
            if(err){ return res.json('Can not read file')}
            data = JSON.parse(data)
            const index  = data.findIndex(item => item.id === Number(id))
            if(index < 0) {return res.json('the user is missing')}
            res.json(data[index])
        })
    } catch (e) {
        res.status(500).json('ERROR')
    }
})

// edit one
router.put('/users/:id', (req, res) =>{
    const{id} = req.params
    const{firstname, lastname, email, username, password} = req.body
    try {
        fs.readFile('./users.json', 'utf-8', (err, data)=>{
            if(err){ return res.json('Can not read file')}
            data = JSON.parse(data)
            const hashpass = bcrypt.hashSync(password,10)
            const index  = data.findIndex(item => item.id === Number(id))
            if(index < 0) {return res.json('the user is missing')}
            const newUser = {
                id: Number(id), 
                firstname: firstname || data[index].firstname,
                lastname: lastname || data[index].lastname,
                email: email || data[index].email,
                username: username || data[index].username,
                password: password ? hashpass : data[index].password,
            }
            data[index] = newUser
            fs.writeFile('./users.json', JSON.stringify(data), 'utf-8', (err,data) => {
                err ? res.status(500).json("Can not write file") : res.json(newUser)
            })
        })
    } catch (e) {
        res.status(500).json('ERROR')
    }
})


router.get('/profile', (req, res) => {
    try{
        const token = req.headers.authorization; 
        if(!token) {
            return res.status(401).json('Unauthoor')
        }

        const decodedToken = jsonwebtoken.verify(token, 'Privat key')
        const username = decodedToken.username

        fs.readFile('./users.json', 'utf-8', (err, data)=>{
            if(err){ return res.json('Can not read file')}
            data = JSON.parse(data)
            const user = data.find(item => item.username === username)
            if(!user){return res.status(404).json('user not found')}
            res.json(user)
        })
    } catch (e) {
        res.status(500).json('Error')
    }

})


