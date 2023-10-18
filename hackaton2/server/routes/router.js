const express = require('express')
const auth = require('../controllers/auth_controller.js')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/registration', auth.RegPage)
router.post('/registration', auth.Registration)
router.get('/login', auth.LogPage)
router.post('/login', auth.Login)



module.exports = router