const tasks = require('../models/model.js')
const {v4:uuidv4} = require('uuid')

class control{
    constructor() {
    }
    
    static async getList (req, res){
        try{
            const list = await  tasks.getList()
            res.send(list)
        } catch (e) {res.send(e)}
        

    }
    
    static async post(req,res) {
        try{
            const id = uuidv4()
            const {title} = req.body
            const post = await tasks.post(id, title)
            res.send(post)
        } catch (e) {res.send(e)}
 
    }
    
    static async getTask (req,res) {
        try{
            const {id} = req.params
            const post = await tasks.getTask(id)
            post === null ? res.send('User not found') : res.send(post)
        } catch (e) {res.send(e)}
    }
    
    static async update(req, res) {
        try{
            const{id} = req.params
            const{title, completed} = req.body
            const post = await tasks.update(id, title, completed)
            post === null ? res.send('User not found') : res.send(post)
        }catch (e) {res.send(e)}
    }
    
    static async delete(req, res) {
        try{
            const {id} = req.params
            const post =  await tasks.delete(id)
            post === null ? res.send('User not found') : res.send('deleted') 
        }catch (e) {res.send(e)}
    }
    
    
}

module.exports = control