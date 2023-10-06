const books = require('../models/model.js')

class controller {
    constructor() {
    }
    static getAll (req, res)  {
        books.getAll()
        .then(a => res.json(a))
    }
    
    static getBook (req, res) {
        const {id} = req.params
        books.getBook(id)
        .then(book => {
            if(book.length == 0) {
                res.status(404).json('Book not found')
            } else { res.status(200).json(book)}
        })
    }
}

module.exports = controller