const express = require('express')
const app = express()
const router = require('./routes/index.js')
app.use(router)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));





app.listen(4444, ()=> {
    console.log('Listening on 4444')
})

