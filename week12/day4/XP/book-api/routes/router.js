const conroller = require('../controllers/controller.js')

const express = require('express')
const router = express.Router()

router.get('/api/books', conroller.getAll )
router.get('/api/books/:id', conroller.getBook)

module.exports = router