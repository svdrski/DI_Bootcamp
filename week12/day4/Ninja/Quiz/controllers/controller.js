const quiz = require('../models/model.js')

class control {
    constructor() {
    }
    
    static async getQuestion (req, res) {
        const {id} = req.params
       const question = await quiz.getQuestion(id)
        res.send(question)
    }
    
    static async getCorrectanswer(req, res) {
        const {id} = req.params
        const answer = await quiz.getCorrectanswer(id)
        res.send(answer)
    }
    
    static async getOptions (req, res) {
        const {id} = req.params
        const data = await quiz.getOptions(id)
        res.send(data)
    }
}

module.exports = control