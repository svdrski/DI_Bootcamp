const express = require('express')
const auth = require('../controllers/auth_controller.js')
const reg = require('../controllers/reglistings_controller.js')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/registration', auth.RegPage)
router.post('/registration', auth.Registration)
router.get('/login', auth.LogPage)
router.post('/login', auth.Login)

router.get('/add/room', reg.Page)
router.post('/add/room', reg.Room)



module.exports = router