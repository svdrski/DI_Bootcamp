const path = require('path')
const triviaQuestions = require('../data/data.js')

let gamestatus = {
    currentQuestion: 0,
    score: 0
}

const loadPage = (req, res) => {
    console.log('aaa')
    res.sendFile(path.join(__dirname, '../public/index.html'));
}

const getQuest = (req, res) => {
    if(gamestatus.currentQuestion === 3) {
        gamestatus.currentQuestion = 0
        gamestatus.score = 0
        return  res.json('over')
    }
    res.json(triviaQuestions[gamestatus.currentQuestion])
}

const sendAnswer = (req,res) => {
    const {answer} = req.body
    if(formatValue(answer) === formatValue(triviaQuestions[gamestatus.currentQuestion].answer)) {
        gamestatus.score += 1
    }

    gamestatus.currentQuestion +=1
    res.status(200).json(gamestatus.score)
}


function formatValue(value) {
    return value.toLowerCase().split(' ').join('')
}


module.exports = {
    loadPage,
    getQuest,
    sendAnswer
}