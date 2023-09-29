const express = require('express')
const {getAll, getOne, createPost, updatePost, deletePost} = require('../controllers/posts.control.js')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('/posts', getAll)
router.get('/posts/:id', getOne)
router.post('/posts', createPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)


module.exports = router