const user = require('../models/model.js')
const bcrypt = require('bcrypt')

class controller {
    constructor() {
    }

    static async getlist(req, res) {
       try{ const list = await user.getList()
            res.send(list)} 
       catch (e) {res.send('Failed to get UserList ' + e)}
    }
    
    static async getUser(req, res){
        try{
            const {id} = req.params
            const thisuser = await user.get(id)
            thisuser === null ? res.status(404).send('User not found') : res.send(thisuser) }
        catch (e) {res.send('Failed to get user '+ e)}
    }
    
    static async register(req, res) {
         try{   const{email, username, first_name, last_name, password} = req.body
                const check = await user.check(username)
                if(check.length > 0 ){return res.send('User with this username already exist')}
                const hashpass = await bcrypt.hash(password, 10)
                await user.register(email, username, first_name, last_name, hashpass)
                res.send('Successfuly registered') }
         catch (e) { res.status(500).send('Failed to register '+ e)}
    }
    

    static async login(req, res) {
        try{const{username, password} = req.body
            const data = await  user.login(username, password)
            if(data === null) {res.status(404).send('User not found')}
            else  { bcrypt.compareSync(password, data.password) ? res.send(data) : res.send('Wrong passwod')}}
        catch (e) {res.send('Failed to login '+ e)}
    }
    
    
    static async editUser(req,res) {
        try{ const {id} = req.params
            const{email, username, first_name, last_name} = req.body
            if(id && email && username && first_name && last_name) {
                const data = await user.update(id,email, username, first_name, last_name)
                data.length > 0 ? res.send(data) : res.status(404).send('user not found')
            } else {res.send('Uncorrect data')} }
        catch (e) {res.send('Failed to edit user ' + e)}
    }
    
}

module.exports = controller