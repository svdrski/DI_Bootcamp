const db = require('../config/config.js')

class books {
    constructor() {
    }
    
    static getAll (){
        return db('books').select()
    }
    
    static getBook(id) {
        return db('books').where({id: id}).select()
    }
}

module.exports = books