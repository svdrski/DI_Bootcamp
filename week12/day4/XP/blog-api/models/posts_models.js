const db = require('../config/db.js')

class post {
    constructor() {

    }
    
   static  getAll() {
        return db('posts').select()
    }
    
    static get(id){
        return db('posts').select().where({id: id})
    }
    
    static newPost (title, content) {
        return db('posts').insert({title: title, content: content}, ['*'])
    }
    
    static editPost (id, title, content) {
        return db('posts').where({id:id}).update({title:title, content: content}, ['*'])
    }
    
    static deletePost (id){
        return db('posts').where({id:id}).del()
    }
    
}

module.exports = post