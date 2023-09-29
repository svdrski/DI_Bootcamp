const data = require('../data/data.js')

const getAll = (req, res) => {
    res.json(data)
}

const getOne = (req,res) => {
    const {id} = req.params
    const post = data.find(x => x.id == id)
    if(!post) return res.status(404).json('Post not found')
    res.json(post)
}

const createPost = (req,res) => {
    const {title, content, timestamp} = req.body
    const newPost = {
        id: data.length + 1,
        title,
        content,
        timestamp
    }
    data.push(newPost)
    res.json(data)
}

const updatePost = (req,res) => {
    const {id} = req.params
    const {title, content, timestamp} = req.body
    const index = data.findIndex(x => x.id == id)
    if(index < 0) return res.status(404).json('Post not found')
    const post = {
        id,
        title,
        content,
        timestamp
    }
    data[index] = post
    res.json(data)
    
}

const deletePost = (req,res) => {
    const {id} = req.params
    const index = data.findIndex(x => x.id == id)
    if(index < 0) return res.status(404).json('Post not found')
    data.splice(index, 1)
    res.json(data)
}

module.exports = {
    getAll,
    getOne,
    createPost,
    updatePost,
    deletePost
}