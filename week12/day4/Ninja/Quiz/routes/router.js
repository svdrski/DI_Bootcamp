const express = require('express')
const router = express.Router()
const control = require('../controllers/controller.js')

router.get('/api/getquestion/:id', control.getQuestion )
router.get('/api/getanswer/:id', control.getCorrectanswer)
router.get('/api/getoptions/:id', control.getOptions)

module.exports = router