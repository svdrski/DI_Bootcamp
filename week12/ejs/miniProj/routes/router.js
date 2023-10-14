const express = require('express')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({ extended: false }));
const control = require('../controllers/controller.js')

router.get('/', control.getList)
router.get('/search', control.search)
router.post('/search/title', control.searchTitle)
router.post('/search/category', control.searchCategory)


module.exports = router