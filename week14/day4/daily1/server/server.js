const express = require('express')
const app = express ()
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(cors({
    origin: 'http://localhost:3000', // Разрешить доступ с этого источника
  }));

  


app.get('/api/hello', (req, res)=>{
    res.json('Hello From Express')
})

app.post('/api/world', (req, res)=>{
    const data = req.body
    console.log(data.value)
    res.json(`I received your POST request. This is what you sent me: ${data.value}`)
})




app.listen(3333, ()=>{console.log('Listening on 3333')})