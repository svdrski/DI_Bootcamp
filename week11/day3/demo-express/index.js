const express = require("express");
const app = express();
const products = require("./data.js");

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});

app.get("/api/products", (req, res) => {
    const partial_products = products.map((product) => {
        return { id: product.id, name: product.name };
    });
    res.json(partial_products);
});

app.get("/api/products/:productID", (req, res) => {
    const id = Number(req.params.productID);
    const product = products.find((product) => product.id === id);
    if(!product) {
        return res.status(404).send('product not found')
    }
    res.json(product);
});

app.get("/api/query", (req, res) => {
    const name = req.query.name.toLowerCase();
    const products_result = products.filter((product) =>
    product.name.toLowerCase().includes(name)
    );

    if (products_result.length < 1) {
        return res.status(200).send("No products matched your search");
    }
    res.json(products_result);
});






//app.get('/tutoril/:id', (req,res) => {
//    console.log('req.params', req.params)
//    res.send(req.params.id)
//    console.log(req.params)
//})
//app.listen(3000, () => console.log('Example app listening on port 3000!'));
