const express = require('express')
const app = express()

app.listen(3000, ()=> {
    console.log('Listening on 3000')
})

app.get('/api/greetings', (req,res) =>{
    res.json('hello Noao')
} )

