const express = require('express')
const app = express()
const products_routes = require('./routes/products.js')

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})

app.use(express.json())
app.use('/api/products', products_routes)
