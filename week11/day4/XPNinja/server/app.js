const express = require('express')
const app = express()
const questions = require('./data')
app.use(express.json())
app.use(express.urlencoded({exrended:true}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3003, ()=>{
    console.log('listen on 3003')
})

app.get('/questions', (req,res)=>{
    res.json(questions)
})

app.get('/questions/:id', (req,res) => {
    const {id} = req.params
    const questi = questions.find(item => item.id === Number(id))
    questi ? res.json(questi) : res.status(404).json('Question not found')
})

