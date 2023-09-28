const express = require('express')
const path = require('path')
const routes = express.Router()
routes.use(express.json())
routes.use(express.static('public'));
routes.use(express.urlencoded({ extended: true }));


routes.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
    ];

let gamestatus = {
    currentQuestion: 0,
    score: 0
}

routes.get('/quiz', (req, res) => {
    const indexPath = path.join(__dirname, '../public/index.html');
    res.sendFile(indexPath);
});

routes.get('/quiz/start', (req, res) => {
    if(gamestatus.currentQuestion === 3) {
        gamestatus.currentQuestion = 0
        gamestatus.score = 0
        return  res.json('over')
    }
    res.json(triviaQuestions[gamestatus.currentQuestion])
})


routes.post('/quiz', (req,res) => {
   
    
    const {answer} = req.body
    if(formatValue(answer) === formatValue(triviaQuestions[gamestatus.currentQuestion].answer)) {
        gamestatus.score += 1
    }
    
    gamestatus.currentQuestion +=1
    res.status(200).json(gamestatus.score)
})

function formatValue(value) {
    return value.toLowerCase().split(' ').join('')
}

module.exports = routes