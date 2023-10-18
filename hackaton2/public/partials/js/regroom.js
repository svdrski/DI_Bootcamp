let currentSection = 1

document.getElementById('shownext').addEventListener('click', showNext)
document.getElementById('showprev').addEventListener('click', showPrev)
function showNext(){
    document.getElementById(`section${currentSection}`).style.display = 'none'
    currentSection += 1
    document.getElementById('regstatus').innerText = `${currentSection}/10`
    document.getElementById(`section${currentSection}`).style.display = 'flex'
}

function showPrev(){
    document.getElementById(`section${currentSection}`).style.display = 'none'
    currentSection -= 1
    document.getElementById('regstatus').innerText = `${currentSection}/10`
    document.getElementById(`section${currentSection}`).style.display = 'flex'
}

const fileInput = document.getElementById('fileInput');
const previewImage = document.getElementById('previewImage');

fileInput.addEventListener('change', function () {
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        previewImage.src = ''; // Очистить предварительный просмотр, если файл не выбран
    }
});




//document.forms[0].addEventListener('submit', async (e)=>{
//    e.preventDefault()
//    let data = new FormData(e.target)
//    data = Object.fromEntries(data)
//    data.address = JSON.parse(document.getElementById('pacinput').getAttribute('location'))
//
//    const response = await fetch('/add/room', {
//        method:'POST',
//        headers:{'Content-Type':'application/json'},
//        body: JSON.stringify(data)
//    })
//})