const express = require('express')
const app = express()
const router = require('./routes/router.js')
app.set('views', './public/pages');
app.set('view engine', 'ejs')
app.use(router)
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname+'/public'))
app.use(express.json())





app.listen(4444, ()=>{console.log('Listen on 4444')})