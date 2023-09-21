const express = require('express')
const app = express()
app.use(express.json())

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.sendFile(__dirname + "public/index.html")
})

app.post('/search',  (req,res) =>{
    console.log(req.body)
    res.send('welcome, ' + req.body.fullname)
})


app.listen(3000, () => console.log('Example app listening on port 3000!'));
