import express from 'express'
import {questionData} from './game.js'
import path from 'path'
const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())
app.use(express.static('game'))
app.use(express.urlencoded({exrended:true}))

app.listen(3000, ()=> {
    console.log('Listening on 3000')
})

app.get('/', (req, res) => {
    const indexPath = path.join(new URL(import.meta.url).pathname, '../../index.html');
    res.sendFile(indexPath);
});


app.get('/getquestion', (req, res)=> {
    const data = questionData()
    res.json(data)
})


app.post('/sendanswer', (req, res) => {
    const {selectedAnswer, answer} = req.body
    const data = {
        a: answer,
        b: selectedAnswer
    }
res.send(data)
    
})






