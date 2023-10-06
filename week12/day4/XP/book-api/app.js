const express = require('express')
const router = require('./routes/router.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)





app.listen(9000, ()=> {console.log('Listening on 9000')})