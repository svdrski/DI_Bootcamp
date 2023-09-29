const express = require('express')
const routes = express.Router()
const {loadPage, getQuest, sendAnswer} = require('../controllers/controller.js')
routes.use(express.json())
routes.use('/', express.static('public'));


routes.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});



routes.get('/quiz', loadPage);
routes.get('/quiz/start', getQuest)
routes.post('/quiz', sendAnswer)



module.exports = routes