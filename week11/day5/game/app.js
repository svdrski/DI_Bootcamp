const express = require('express')
const router = require('./routes/gameRoutes.js')
const {connectSocket} = require('./controllers/game_control.js')
const app = express()

const http = require('http');
const server = http.createServer(app);


app.use(express.json())
app.use(router)
connectSocket(server)









server.listen(3000, ()=> {
    console.log('Listening on 3000')
})