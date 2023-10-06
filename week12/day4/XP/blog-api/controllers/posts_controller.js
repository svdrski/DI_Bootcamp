const post = require('../models/posts_models.js')


class controller {
    constructor() {
        
    }
    static  getAll  (req, res)  {
        post.getAll()
        .then(a => res.send(a))
        .catch(e => res.send(e))
    }

    static getPost (req, res) {
        const {id} = req.params
        post.get(id)
        .then(a => res.json(a))
        .catch(e => res.send(e))
    }

    static createPost  (req, res)  {
        const {title, content} = req.body
        post.newPost(title, content)
        .then(a => res.send(a))
        .catch(e => res.send(e))
    }

    static editPost  (req,res) {
        const {id} = req.params
        const {title, content} = req.body
        post.editPost(id, title, content)
        .then(a => res.send(a))
        .catch(e => res.send(e))
    }
    
    static deletePost (req, res) {
        const{id} = req.params
        post.deletePost(id)
        .then(a => res.send('Post deleted'))
        .catch(e => res.send(e))
    }
    
}
    
module.exports = controller