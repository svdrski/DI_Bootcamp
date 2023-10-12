const db = require('../config/config.js')

class quiz {
    constructor() {
    }
    
    static getQuestion (id) {
     return  db('questions').select().where({id:id})
    }
    
    static getCorrectanswer (id) {
        return db('options').select().where({id:id})
    }
    
    static getOptions (id) {
        return db('options').select().whereNot('id', id).orderByRaw('random()').limit(2)
    }
}

module.exports = quiz