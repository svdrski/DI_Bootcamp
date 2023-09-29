const express = require('express')
const router = require('./routes/app.router.js')
const app = express()
app.use(express.json())
app.use(router)
app.listen(3333, ()=> {
    console.log('Listening on 3333')
})