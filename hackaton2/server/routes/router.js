const express = require('express')
const auth = require('../controllers/auth_controller.js')
const reg = require('../controllers/reglistings_controller.js')
const check_auth = require('../middlewares/auth.js')
const upload = require('../middlewares/uploads.js')
const path = require('path')

const router = express.Router()







router.get('/', (req, res)=>{
    res.render('index')
})

router.post('/auth', check_auth )
router.get('/registration', auth.RegPage)
router.post('/registration', auth.Registration)
router.get('/login', auth.LogPage)
router.post('/login', auth.Login)

router.get('/add/room', reg.Page)
router.post('/add/room',upload.fields([{ name: 'phinput', maxCount: 10 }, { name: 'fileInput', maxCount: 1 }]), reg.Room)



module.exports = router