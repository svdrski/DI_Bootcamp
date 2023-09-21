const express = require('express')
const posts = require('./data')

const app = express()
app.listen(3000, () => {
    console.log('listening on port 3000')
})

app.get('/api/posts', (req,res) => {
    res.json(posts)
})

app.get('/api/posts/:postID', (req, res) => {
    const id = Number(req.params.postID)
    const reqpost = posts.find(item => item.id === id)
    if(!reqpost) {
       return  res.status(404).send('not found')
    }
    res.json(reqpost)
})

app.get('/api/search', (req, res) => {
    const name = req.query.name.toLowerCase();
    const result = posts.filter(item => {
      return   item.name.toLowerCase().includes(name)
    });
    res.json(result)
})

