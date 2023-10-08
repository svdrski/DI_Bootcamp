const express = require('express')
const router = require('./routes/router.js')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)



app.listen(5555, ()=>console.log('listening on 5555'))