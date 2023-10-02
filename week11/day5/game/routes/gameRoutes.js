const express = require('express')
const router = express.Router()
const {regfile,registration,logfile, login} = require('../controllers/auth_control.js')
const {gamePage, checktoken} = require('../controllers/game_control.js')
router.use(express.json())
router.use(express.static('public'))
router.use(express.urlencoded({extended: true}))

router.get('/registration', regfile)
router.post('/registration', registration)
router.get('/login', logfile)
router.post('/login', login)
router.get('/game', gamePage)
router.get('/checker', checktoken)




module.exports = router
