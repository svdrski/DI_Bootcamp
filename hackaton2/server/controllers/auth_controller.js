const model = require('../models/auth_model.js')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const {json} = require("express");
const saltRounds = 10
class auth {
    
    static RegPage (req, res) {
        res.render('registration')
    }
    
    static LogPage (req,res) {
        res.render('login')
    }
    
    static async Registration (req, res) {
        try{
            const {first_name, last_name, email, password1, password2} = req.body
            
            //checking passwords match
            if(password1 != password2) {return res.status(409).json('Passwords do not match')}
            
            //checking passwords length
            if(password1.length < 5) {return res.status(409).json('Password length less than 5')}
            
            // checking email in db
            const mail = await model.CheckEmail(email)
            if (mail.length > 0) { return res.status(410).json('This email is already in use')}
            
            const id = uuidv4()
            const imgurl = '/static/user_profile.jpeg'
            //encrypting password
             bcrypt.hash(password1, saltRounds, (err, cryptPass)=> {
                 if(err) {res.status(500).json('Error ' + err)}
                 model.Register(id, first_name, last_name, email, cryptPass, imgurl)
                 res.status(200).json('ok')
            })
        } catch (e) {console.log('Error ' + e)}
    }
    
    
    
    
    static async Login (req, res) {
        const {email, password} = req.body
        console.log(email, password)
        
        //check email
        const user = await model.GetUser(email)
        if(user.length === 0) {return res.status(410).json('Email not registered')}
        
        //check password
        if(!bcrypt.compareSync(password, user[0].password)) {return res.status(409).json('Wrong password')}
        
        const token = jwt.sign(user[0].email, 'roommates')
        res.json(token)
    }
    
}

module.exports = auth