const jwt = require('jsonwebtoken')
const auth = require('../models/auth_model.js')

class  header {
    static async getdata (req, res) {
          let token = req.headers.authorization
         if(token === 'null') {return res.redirect(301, '/login');    }
             token = JSON.parse(token)
         const email = jwt.verify(token, 'roommates')
         const user = await auth.GetUser(email.email)
         res.send(user)     
        
    } 
}

module.exports = header