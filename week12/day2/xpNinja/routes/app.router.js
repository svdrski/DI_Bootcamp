const express = require('express')
const {getPage,sendGreet} = require('../controllers/app.controller.js')
const router = express.Router()
router.use(express.static('public'))
router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('/', getPage )
router.post('/greet', sendGreet)

module.exports = router