const chatForm = document.getElementById('chat-form')
const chatMessages =   document.querySelector('.chat-messages')
// получить имя и комнату из урл

const {username, room} = Qs.parse(location.search, {
  ignoreQueryPrefix: true
})


const socket = new io()

//вход в комнату
socket.emit('joinRoom', {username, room})

socket.on('message', message => {
  console.log(message)
  outpuMessage(message)
  
  //Изменить прокрутку, начинается снизу
  chatMessages.scrollTop = chatMessages.scrollHeight
})

chatForm.addEventListener('submit', (e)=> {
  e.preventDefault()
  const msg = e.target.elements.msg.value
  // emit to server
  socket.emit('chatMessage', msg)
  
  e.target.elements.msg.value = ''
  e.target.elements.msg.focus()
})

// Вывод сообщентя га страницу

function   outpuMessage(message) {
  const div = document.createElement('div')
  div.classList.add('message')
  div.innerHTML = `
  <p class="meta"> ${message.username} <span>${message.time}</span></p>
  <p class="text">
  ${message.text}
  </p>
  `
  chatMessages.appendChild(div)
}