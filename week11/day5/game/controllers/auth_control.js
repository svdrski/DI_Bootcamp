const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const datapath = path.join(__dirname,'../data/users.json' )

const regfile = (req,res) => {
    res.sendFile(path.join(__dirname, "../public/registration.html"))
}

const registration = (req, res) => {
    const {login, password} = req.body
        fs.readFile(datapath, 'utf-8', (err, data) =>{
            if(err) return res.status(404).json('Can not read file')
            data = JSON.parse(data)
            if(data.some(item => item.login === login))
                return res.status(409).json('User already exists')
            const hashPass = bcrypt.hashSync(password, 10)
            const user = {
                id: data.length + 1,
                login,
                password: hashPass
            }
            data.push(user)
            fs.writeFile(datapath, JSON.stringify(data), (err,data)=>{
                if(err) return res.status(500).json('Can not write new user')
            } )
            res.status(200).json('Registration complete')
        })
}


const logfile = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"))
}


const login = (req, res) => {
    const {login, password} = req.body
    fs.readFile(datapath, 'utf-8', (err, data) =>{
        if(err) return res.status(404).json('Can not read file')
        data = JSON.parse(data)
        const user = data.find(item => item.login === login)
        if (!user)
            return res.status(409).json('Uncorrect username')
        if(!bcrypt.compareSync(password, user.password))
            return res.status(401).json('Wrong passowrd')
        const userdata = {
            login: user.login
        }
        const token = jsonwebtoken.sign(userdata, 'key')
        console.log(token)
        res.status(200).json(token)
    })
}



module.exports = {
    regfile,
    registration,
    logfile,
    login
}