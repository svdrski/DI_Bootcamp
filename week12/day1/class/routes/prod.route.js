const express = require('express')
const {getProduct, updateProduct} = require('../controllers/prod.controller.js')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({ extended: true }));

router.get('/:id', getProduct )
router.put('/:id', updateProduct)

module.exports = router