const path = require('path')
const jsonwebtoken = require('jsonwebtoken')
const datapath = path.join(__dirname,'../data/users.json' )
const fs = require('fs')
const socketIo = require('socket.io');

let room = []
const gamePage = (req,res) => {
    res.sendFile(path.join(__dirname, '../public/game.html'))
}

const checktoken = (req, res) => {
    token = req.headers.authorization
    if(!token) {
        return res.status(401).json('Unauthoor')
    }
    const decodedToken = jsonwebtoken.verify(token, 'key')
    const email = decodedToken.login
    res.json(email)
}


function connectSocket (server){
    const io = socketIo(server);
    
    io.on('connection', (socket) => {

        socket.on('search', (a) => {
            if (room.length > 1) { return  socket.emit('outoflimit', 'Out of limit, Good Bye!')}

            const player = {
                id:room.length + 1,
                name: a.name,
                position: room.length == 0 ? 91 : 10,
                target: room.length == 0 ? 10 : 91
            }
            room.push(player)

            socket.join('gameroom')
            if (room.length == 2) {
                io.to('gameroom').emit('start', room)
            }
            socket.on('update', async (a)=> { 
                room.find(item => item.id === a.id).position = a.position
                io.to('gameroom').emit('update', room)
                if (room.some(item => item.position === item.target)) {
                    console.log('Winnder')
                    io.to('gameroom').emit('gameover', room.find(item => item.position === item.target))
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    room = []
                }
            })

        })
        
        

        console.log('Пользователь подключился к сокету');
        socket.on('disconnect', async () => {
            console.log('Пользователь отключился от сокета');
            io.to('gameroom').emit('fatal', 'Opponent leave, you win !')
            await new Promise((resolve) => setTimeout(resolve, 1000));
            room = []
        });
    });
}



module.exports = {
    gamePage,
    checktoken,
    connectSocket
}