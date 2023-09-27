const express = require('express')
const routes = express.Router()
routes.use(express.json())

const books = [{
    id:1,
    name: 'cat and dog',
    available: true
}];

routes.get('/books', (req,res)=> {
    res.json(books)
})

routes.post('/books', (req,res)=> {
    const {name, available} = req.body
    const book = {
        id: books.length + 1,
        name,
        available
    }
    books.push(book)
    res.send(book)
})


routes.put('/books/:id', (req,res)=> {
    const {id} = req.params
    const {name, available} = req.body
    const index = books.findIndex(item => item.id === Number(id))
    const book = {
        id: id,
        name,
        available
    }
    books[index] = book
    res.send(book)
})

routes.delete('/books/:id', (req,res) => {
    const {id} = req.params
    const index = books.findIndex(item => item.id === Number(id))
    books.splice(index, 1)
    res.send('Deleted')
})




module.exports = routes
