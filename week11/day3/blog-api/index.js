const express = require("express");
const app = express();
const products = require("./data.js");

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});


app.post('/api/products', (req,res) =>{
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})


app.get('/api/products', (q,s) => {
    s.json(products)
})


app.get('/api/products/:prodID', (req,res) => {
    const id = Number(req.params.prodID)
    const product = products.find(item => {
     return    item.id === id
    })
    if (!product) {
        return res.status(404).send("Product not found");
    }
    res.json(product)
})

app.use(express.json())
app.put('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(item => {
        return item.id = id
    })
    
    if (index === -1) {
        return res.status(404).send("Product not found");
    }
    const updatedProduct = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price
    };
    products[index] = updatedProduct
    res.status(200).json("Product updated");
})

app.delete('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) {
        return res.status(404).send("Product not found");
    }
    products.splice(index,1)
    res.status(200).json('Product deleted')

})

