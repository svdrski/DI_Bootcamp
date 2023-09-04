
let data = document.createElement('section')
data.textContent = JSON.parse(localStorage.getItem('StorageData'))
// data.textContent = localStorage.getItem('StorageData')
data.style.whiteSpace = 'pre-wrap';
document.body.appendChild(data)
