let authToken = localStorage.getItem('authToken')
authToken = JSON.parse(authToken)
const logout = document.getElementById('logout')
if(!authToken) window.location.href = '/login'

const field = document.getElementById('field')
const upbtn = document.getElementById('up')
const rightbtn = document.getElementById('right')
const leftbtn = document.getElementById('left')
const downbtn = document.getElementById('down')
const searchblock = document.getElementById('search')
const gamearea = document.getElementById('gamearea')
const winneralet = document.getElementById('winner')
const load = document.getElementById('load')

const socket = io();

socket.on('message', (data)=> {console.log(data)} )
socket.on('action', (a)=> console.log(a))



// check user login
showprof(authToken)

async function showprof(key){
    const resp = await fetch('/checker', {
        method: 'GET',
        headers: {
            'Authorization': `${key}`,
            'Accept': 'application/json'}
    });
    if (resp.ok) {
        const message = await resp.json()
        player.name = message
        document.getElementById('title').innerText = `Player: ${message}`
    } else {
        const message = await resp.json()
        console.log(message);
    }
}


const briks = [33,44,55,66,77,26,14,3,6,49,59,69,72,95,19,83]

let player = {
    id: null,
    name: '',
    currentcell: null,
}

let opponent = {
    id: null,
    name: '',
    currentcell: null,
}



document.getElementById('find').addEventListener('click', ()=> {
    socket.emit('search', player)
    load.style.display = 'block'
})



//out of limit
socket.on('outoflimit', (a)=> console.log(a))

// set user position after connection


//start game
socket.on('start', (a)=> {
    searchblock.style.display = 'none'
    gamearea.style.display = 'block'
    const playerdata = a.find(item => item.name === player.name)
    player.id = playerdata.id
    player.currentcell = playerdata.position
    const oppdata = a.filter(item => item.name !== player.name)
    opponent = {
        id: oppdata[0].id,
        name: oppdata[0].name,
        currentcell: oppdata[0].position
    }
    entercurrentplayer()
    enteropponent()

})


//updating
socket.on('update', (a)=>{
    console.log("upd>", a)
    console.log(opponent.currentcell)
    document.getElementById(opponent.currentcell).style.background = 'none'
    document.getElementById(opponent.currentcell).style.boxShadow = "none"
    opponent.currentcell = a.find(item => item.id === opponent.id).position
    console.log(opponent.currentcell)
    enteropponent()
})


//  game over
socket.on('gameover', (a)=> {
    searchblock.style.display = 'block'
    load.style.display = 'none'
    gamearea.style.display = 'none'
    winneralet.style.display = 'block'
    winneralet.innerText = `Game Over ${a.name} win`
})

// opponent leave
socket.on('fatal', (a)=>{
    searchblock.style.display = 'block'
    load.style.display = 'none'
    gamearea.style.display = 'none'
    winneralet.style.display = 'block'
    winneralet.innerText = a
})




createfield()
function createfield() {
    for(i=0; i <100; i++) {
        const cell = document.createElement('div')
         cell.setAttribute('id', i + 1)
        cell.classList.add('cell')
        field.appendChild(cell)
    }
}
addbrics()
function addbrics () {
    briks.forEach(item => {
        document.getElementById(item).style.backgroundColor = '#214e62'
    })
}





// add player to the board
function entercurrentplayer () {
    let activecell = document.getElementById(player.currentcell)
    activecell.style.background = "#009221"
    activecell.style.boxShadow = "inset 0 0 25px 1px #009221"
}

// add opponnent to the board
function enteropponent () {
    document.getElementById('opponentname').innerText = `Opponent: ${opponent.name}`
    let activecell = document.getElementById(opponent.currentcell)
    activecell.style.background = "red"
    activecell.style.boxShadow = "inset 0 0 25px 1px #ff3e00"
}




//up
    upbtn.addEventListener('click', ()=>{
        if(((player.currentcell - 10) <= 0) || briks.includes(player.currentcell - 10)) return console.log('board')
        else {
            colorblock('none')
            player.currentcell -=10
            colorblock('#009221')
            socket.emit('update', {id:player.id, position:player.currentcell} )
        }
    })
//right
     rightbtn.addEventListener('click', ()=>{
         if(((player.currentcell % 10) === 0 ) || briks.includes(player.currentcell +1)) return console.log('board')
         else {
             colorblock('none')
             player.currentcell +=1
             colorblock('#009221')
             socket.emit('update', {id:player.id, position:player.currentcell} )
         }
 })

//left
     leftbtn.addEventListener('click', ()=>{
         if((player.currentcell.toString()[1]==1) || briks.includes(player.currentcell -1))return console.log('board')
         else {
             colorblock('none')
             player.currentcell -=1
             colorblock('#009221')
             socket.emit('update', {id:player.id, position:player.currentcell} )
         }
     })
//downbtn
    downbtn.addEventListener('click', ()=>{
        if((player.currentcell + 10) > 100 || briks.includes(player.currentcell +10)) return console.log('board')
        else {
            colorblock('none')
            player.currentcell +=10
            colorblock('#009221')
            socket.emit('update', {id:player.id, position:player.currentcell} )
        }
    })


function colorblock(color) {
    document.getElementById(player.currentcell).style.background = color
}





logout.addEventListener('click', ()=> {
    localStorage.removeItem('authToken')
    window.location.href = '/login'
})

