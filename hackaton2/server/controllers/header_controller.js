const jwt = require('jsonwebtoken')
const auth = require('../models/auth_model.js')

class  header {
    static async getdata (req, res) {
        console.log('sss')
          let token = req.headers.authorization
          console.log(token)
         if(token === 'null') {return res.redirect(301, '/login');    }
             token = JSON.parse(token)
         const email = jwt.verify(token, 'roommates')
         const user = await auth.GetUser(email.email)
         res.send(user)     
        
    } 
}

module.exports = header