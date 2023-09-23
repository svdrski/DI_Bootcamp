const express = require('express')
const app = express()
app.use(express.json())

app.listen(3002, ()=> {
    console.log('Listen on 3002')
})

const objects = [
    {
        id:1,
        title: 'Sleep',
        completed: false
    }
]

app.get('/api/todos', (req,res) => {
    res.json(objects)
})


app.post('/api/todos', (req,res) => {
    try {
        const {title} = req.body
        const newTodo = {
            id: objects.length + 1,
            title,
            completed: false
        }
        objects.push(newTodo)
        res.status(200).json(objects)
    } catch (e) {
        res.status(500).json('Can not create TODO')
    }
})


app.get('/api/todos/:id', (req,res) => {
    try{
        const {id} = req.params
        const task = objects.find(item => item.id === Number(id))
        if(!task) { return res.status(500).json('Task not found')}
        res.status(200).json(task)
        
    } catch (e) {
        res.json('ERRROER')
    }
})


app.put('/api/todos/:id', (req,res) => {
    try{
        const {id} = req.params
        const {title, completed} = req.body
        const index = objects.findIndex(item => item.id === Number(id))
        if(index < 0) { return res.status(500).json('Task not found')}
        
        const updated = {
            id: Number(id),
            title,
            completed,
        }
        
        objects[index] = updated
        
        res.status(200).json(objects)

    } catch (e) {
        res.json('ERRROER')
    }
})


app.delete('/api/todos/:id', (req,res) => {
    try{
        const {id} = req.params
        const index = objects.findIndex(item => item.id === Number(id))
        if(index < 0) { return res.status(500).json('Task not found')}

        objects.splice(index,1)

        res.status(200).json(objects)

    } catch (e) {
        res.json('ERRROER')
    }
})