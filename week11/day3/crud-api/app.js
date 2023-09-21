const express = require('express')
const posts = require('./data')
const app = express()

app.listen(3000, ()=>{
    console.log('listening on 3000')
})

app.use(express.json()); // parse json body content

app.post("/api/posts", (req, res) => {
    const newProduct = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
    };
    posts.push(newProduct);
    res.status(201).json(newProduct);
});


app.get('/api/posts', (req,res)=>{
    res.json(posts)
})

app.get("/api/posts/:postID", (req, res) => {
    const id = Number(req.params.postID);
    const post = posts.find((product) => product.id === id);
    if(!post) {
        return res.status(404).send('post not found')
    }
    res.status(201).json(post);
});


app.use(express.json()); // parse json body content

app.delete("api/posts/:postID", (req, res) => {
    const id = Number(req.params.postID);
    const index = posts.findIndex((post) => post.id === id);
    if (index === -1) {
        return res.status(404).send("Post not found");
    }
    posts.splice(index, 1);
    res.status(200).json("Post deleted");
});