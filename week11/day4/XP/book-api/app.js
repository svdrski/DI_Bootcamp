const express = require('express')
const app = express()
app.use(express.json())

const data = [
    {id:1, title:"Daya Fedor", author: "konnfnf", publishedYear: 2001 },
    {id:2, title:"Jojo", author: "33", publishedYear: 2011 },
    {id:3, title:"Afmf Fedor", author: "konnfnf", publishedYear: 2021 }
]

app.get('/api/books', (req,res) => {
    res.json(data)
})

app.get('/api/books/:bookID', (req, res) =>{
    const {bookID} = req.params
    const book = data.find(item => item.id === Number(bookID))
    if(!book) {return res.status(404).send('Not Found')}
    res.status(200).json(book)
})


app.post('/api/books', (req, res) => {
    const{title, author, publishedYear } = req.body
    const newpost = { id: data.length +1, title, author, publishedYear}
    data.push(newpost)
    res.status(201).json(newpost)
})



app.listen(3000, ()=> {
    console.log('listening on 3000')
})