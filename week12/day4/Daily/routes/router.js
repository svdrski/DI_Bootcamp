const express = require('express')
const controller = require('../controllers/controller.js')
const router = express.Router()

router.get('/users', controller.getlist)
router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/users/:id', controller.getUser)
router.put('/users/:id', controller.editUser)

module.exports = router