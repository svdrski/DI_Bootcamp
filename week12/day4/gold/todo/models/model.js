const db = require('../config/config.js')


class tasks {
    constructor() {
    }
    
    static getList () {
      return db('todos').select()
    }
  
    static post(id, title) {
      return db('todos').insert({id:id, title:title, completed:false}, ['*'])
    }
  
  static async getTask(id) {
      const post = await  db('todos').where({id:id}).select()
      return post.length > 0 ? post : null
    }
  
  static async update(id, title, completed) {
      const post = await db('todos').where({id:id}).update({title:title, completed:completed}, ['*'])
      return post.length > 0 ? post : null
    }
  
  static async delete (id) {
      const post = await db('todos').where({id:id}).del()
       return post.length > 0 ? post : null
    }
}

module.exports = tasks