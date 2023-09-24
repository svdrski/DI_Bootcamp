const express = require('express')
const router = express.Router()
const fs = require('fs')
const app = express()

app.use(express.json())
app.use('/', router);

app.listen(3004, ()=> {
    console.log('listening on 3004')
})

// get all tasks
router.get('/tasks', (req,res)=> {
    fs.readFile('./tasks.json', 'utf-8', (err, data) => {
        if(err) {  console.log("CAN NOT READ")    }
        res.json(JSON.parse(data))
    })
})

// get one task
router.get('/tasks/:id', (req,res)=> {
    const {id} = req.params
    fs.readFile('./tasks.json', 'utf-8', (err, data) => {
        if(err) {console.log("CAN NOT READ")}
        const tasks = JSON.parse(data)
        const task = tasks.find(item => item.id === Number(id))
        res.json(task)
    })
})


// add new task
router.post('/tasks', (req,res) => {
       fs.readFile('./tasks.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json('Can not read tasks file')
        }
        data = JSON.parse(data)
        const {title} = req.body
        const newtask = {
            id: data.length + 1,
            title,
            completed: false
        }
        data.push(newtask)
        fs.writeFile('./tasks.json', JSON.stringify(data), 'utf-8', (err,data) => {
            err ? res.status(500).json("Can not write file") : res.json(newtask)
        })
    })
})

// update
router.put('/tasks/:id', (req,res) => {
    const {id} = req.params
    fs.readFile('./tasks.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json('Can not read tasks file')
        }
        data = JSON.parse(data)
        const {title, completed} = req.body
        const newtask = {
            id: Number(id),
            title,
            completed
        }
        const index = data.findIndex(item => item.id === Number(id))
        data[index] = newtask
        fs.writeFile('./tasks.json', JSON.stringify(data), 'utf-8', (err,data) => {
            err ? res.status(500).json("Can not write file") : res.json(newtask)
        })
    })
})


// delete
router.delete('/tasks/:id', (req,res) => {
    const {id} = req.params
    fs.readFile('./tasks.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json('Can not read tasks file')
        }
        data = JSON.parse(data)
        const index = data.findIndex(item => item.id === Number(id))
        data.splice(index, 1)
        fs.writeFile('./tasks.json', JSON.stringify(data), 'utf-8', (err,data) => {
            err ? res.status(500).json("Can not write file") : res.json('deleted')
        })
    })
})


