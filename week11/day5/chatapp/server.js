const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')
const formatMessage = require('./messages.js')
const {userJoin, getCurrentUser} = require('./users.js')


const app = express()
const server = http.createServer(app)
const io = socketio(server)
//установить папку
app.use(express.static(path.join(__dirname, 'public')))

// Запустить когда клиент подключился // для одного
io.on('connection', socket => {
    socket.on ('joinRoom', ({username, room}) => {
        const user = userJoin(socket.id, username, room)
        socket.join(user.room)
        
        socket.emit('message', formatMessage('Admin', "welcome to the chat !"))

        //Показать когда пользователь подключился // для всех
        socket.broadcast.to(user.room).emit('message', formatMessage('Admin', `A ${user.username} has joined the chat`))
        
    })
     
    console.log('New WS connection')
    //ПРиветствие пользователя

    // когда отключается
    socket.on('disconnect', ()=> {
        io.emit('message', 'A user has left')
    })
    
    // слушать сообщения
    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id)
        io.to(user.room).emit('message', formatMessage(user.username, msg))
    })
})

const PORT = 3000 || process.env.PORT
server.listen(PORT, ()=> console.log(`Server running on ${PORT} `))