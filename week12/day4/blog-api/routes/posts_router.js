const express = require('express')
const controller = require('../controllers/posts_controller.js')
const router = express.Router()

router.get('/posts', controller.getAll)
router.get('/posts/:id', controller.getPost)
router.post('/posts', controller.createPost)
router.put('/posts/:id', controller.editPost)
router.delete('/posts/:id', controller.deletePost)

module.exports = router