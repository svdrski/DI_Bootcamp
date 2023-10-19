

let currentSection = 1
document.getElementById('shownext').addEventListener('click', showNext)
document.getElementById('showprev').addEventListener('click', showPrev)
function showNext(){
    if(currentSection === 6) {
        document.getElementById('shownext').style.display = 'none'
        document.getElementById('finreg').style.display = 'block'
    }
    document.getElementById(`section${currentSection}`).style.display = 'none'
    currentSection += 1
    document.getElementById('regstatus').innerText = `${currentSection}/7`
    document.getElementById(`section${currentSection}`).style.display = 'flex'
}

function showPrev(){
    if(currentSection === 7) {
        document.getElementById('shownext').style.display = 'block'
        document.getElementById('finreg').style.display = 'none'
    }
    document.getElementById(`section${currentSection}`).style.display = 'none'
    currentSection -= 1
    document.getElementById('regstatus').innerText = `${currentSection}/7`
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



const range = document.getElementById("maxpeople");
const rangeValue = document.getElementById("rangeValuepl");
range.addEventListener("input", () => {
    rangeValue.textContent = range.value;
});


const range2 = document.getElementById("age");
const rangeValue2 = document.getElementById("rangeValueal");
range2.addEventListener("input", () => {
    rangeValue2.textContent = range2.value;
});


function preview(elem, output = '') {
    Array.from(elem.files).map((file) => {
        const blobUrl = window.URL.createObjectURL(file)
        output+=`<img src=${blobUrl}>`
    })
    elem.nextElementSibling.innerHTML = output
}

//
//  document.getElementById('finreg').addEventListener('click', function(event) {
//      event.preventDefault();
//      console.log('aaa');
//      const form = document.forms[0];
//      form.submit();
//  });
