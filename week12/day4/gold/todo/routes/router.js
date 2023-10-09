const express = require('express')
const control = require('../controllers/controller.js')
const router = express.Router()

router.get('/api/todos', control.getList)
router.post('/api/todos', control.post)
router.get('/api/todos/:id', control.getTask)
router.put('/api/todos/:id', control.update)
router.delete('/api/todos/:id', control.delete)
module.exports = router