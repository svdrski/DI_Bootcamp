const express = require('express')
const app = express()

app.listen(4000, ()=> {
    console.log('Server is listening on 4000')
})
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/aboutme', (req, res) => res.send('I love coding!'))
app.get('/tutorial', (req, res) => res.send('Tutorial about express!'))

app.get('/api/products', (req,res)=> {
    res.json([
        { name: 'iPhone', price: 800 },
        { name: 'iPad', price: 650 },
        { name: 'iWatch', price: 750 }
    ])
})