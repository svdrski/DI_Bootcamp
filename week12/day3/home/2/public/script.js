function sendData() {
    let user = document.getElementById('user').value
    let userdata = {
        user
    }
    fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(userdata)
    })
    .then(a => a.json())
    .then(a => {
        console.log(a)
        root.innerHTML = `${a.message}`
    })
    .catch(err => console.log(err))
}

function getData(){
    fetch('http://localhost:3000/show')
    .then(a => a.json())
    .then(a => showUsers(a))
}

function showUsers(data) {
//    root.innerHTML = ''
      data.forEach(item => {
        let div = document.createElement('div')
        div.innerText = item.username
        root.appendChild(div)
    })
}

function findData () {
    let user = document.getElementById('user').value
    let userdata = {
        user
    }
    fetch('http://localhost:3000/find', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userdata)
    })
    .then(a => a.json())
    .then(a => {
        console.log(a)
        root.innerHTML = `${a.message}`
    })
    .catch(err => console.log(err))
}
