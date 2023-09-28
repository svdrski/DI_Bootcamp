const products = require('../config/products.js')

const getProduct = (req, res) => {
    const {id} = req.params
    const product = products.find(item => item.id == id)
    res.json(product)
}

const updateProduct = (req,res) => {
    const {id} = req.params
    const {name} = req.body
    const index = products.findIndex(item => item.id == id) 
    console.log(name)
    const newProduct = {
        id: id,
        name
    }
    products[index] = newProduct
    
    res.json(products)
}

module.exports = {
    getProduct,
    updateProduct
}