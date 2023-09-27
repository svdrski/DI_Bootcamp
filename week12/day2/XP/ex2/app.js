const express = require('express')
const router = require('./routes/todos.js')
const app = express()
app.use(router)
app.use(express.json())


app.listen(3000, () => {
    console.log('Listening on 3000')
})