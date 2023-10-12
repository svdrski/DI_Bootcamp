const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
const router = require('./routes/router.js')

app.use(router)



app.listen(2222,()=> {
    console.log('Listening on 2222')
})