const express = require('express')
const routes = require('./routes/books.js')
const app = express()
app.use(express.json())
app.use(routes)



app.listen(3333, ()=> console.log('Listening on 3333'))