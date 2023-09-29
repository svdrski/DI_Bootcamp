const express = require('express')
const app = express()
const router = require('./routes/posts.router.js')
app.use(router)


app.listen(4444, ()=> {
    console.log('Listening on 4444')
})