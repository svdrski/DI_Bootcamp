const express = require('express')
const routes = express.Router()
routes.use(express.json())

const todos = [
    {
        id:1,
        title: "sleep",
        done: false
    }
];

routes.get('/todos',(req,res)=>{
    res.json(todos)
})

routes.post('/todos', (req,res)=>{
    const {title} = req.body
    console.log(req.params)
    const task = {
        id: todos.length + 1,
        title,
        done: false
    }
    todos.push(task)
    res.json(task) 
})

routes.put('/todos/:id', (req,res) => {
    const {id} = req.params
    const {title, done} = req.body
    const index = todos.findIndex(item => item.id === Number(id))
    const task = {
        id: id,
        title,
        done
    }
    todos[index] = task
    res.json(task)
})

routes.delete('/todos/:id', (req,res)=>{
    const {id} = req.params
    const index = todos.findIndex(item => item.id === Number(id))
    todos.splice(index, 1)
    res.send('Deleted')
})




module.exports = routes