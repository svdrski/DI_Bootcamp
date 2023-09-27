const express = require('express')
const app = express()
const routes = require('./routes/index.js')
app.use(express.json())
app.use(routes)

app.listen(3000, ()=> {
    console.log('Listening on 3000')
})

