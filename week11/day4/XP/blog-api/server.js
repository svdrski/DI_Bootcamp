const express = require('express')
const app = express()

app.use(express.json())

const data = [
    {
        id:1,
        title: 'Fast Cow',
        content: 'Cow run very fast'
    }
]


app.route('/posts')
.get((req,res) => {
    res.json(data)
})

.post((req,res)=> {
    const {title, content} = req.body
    const newpost = {
        id: data.length + 1,
        title,
        content
    }
    data.push(newpost)
    res.status(201).json(data)
})


app.get('/posts/:id',(req,res)=> {
    const {id} = req.params
    const post = data.find(item => item.id === Number(id))
    if(!post) {return res.status(404).send('Not Found')}
    res.status(200).json(post)
})


app.put('/posts/:id',(req,res)=> {
    const {id} = req.params
    const {title, content} = req.body
    const newpost = {id: id, title, content  }
    data[id - 1] = newpost
    res.status(200).json(data)
})

app.delete('/posts/:id',(req,res)=> {
    const {id} = req.params
    const index = data.findIndex(item => item.id === Number(id))
    
    if(index < 0) {return res.status(404).send('Not Found')}
    else {
        data.splice(index, 1)
        res.status(200).json(data)
    }

})



app.listen(3000, ()=> console.log('listen on 3000'))