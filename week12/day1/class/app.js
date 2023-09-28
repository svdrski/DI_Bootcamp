const express = require('express')
const app = express()
const router = require('./routes/prod.route.js')
app.use('/products', router)

app.listen(3333, ()=> {
    console.log('Listening on 3333')
})