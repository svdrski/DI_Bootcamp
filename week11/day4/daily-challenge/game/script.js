const form1 = document.forms[0]
let datastore = {};
let userscore = 0;

async function getData () {
   let data = await fetch('http://localhost:3000/getquestion')
    data = await data.json()
    datastore = data;
   console.log(datastore)
    printtopage (data)
}

async function printtopage(data) {
document.getElementById('emoji').innerText = data.emoji
    form1.innerHTML = `
  <input type="radio" id="false1" name="radioGroup" value="false1">
  <label for="false1">${data.wrong[0]}</label><br>
    <input type="radio" id="true" name="radioGroup" value="true">
  <label for="true"> ${data.answer}</label><br>
  <input type="radio" id="false2" name="radioGroup" value="false2" checked>
  <label for="false2">${data.wrong[1]}</label><br>
  <input type="text" id="customanswer" name="customanswer">
  <label for="customanswer">Your answer</label>
  <input type="submit" value="Check">
`
}

form1.addEventListener('submit', (event)=> {
    event.preventDefault()

    const radioButtons = form1.elements['radioGroup'];
    let selectedRadioButton;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) { selectedRadioButton = radioButton; break;}
    }
    const data = {
        selectedAnswer: selectedRadioButton.value,
        answer:event.target.elements.customanswer.value
    }
    const jsonData = JSON.stringify(data);

    fetch('http://localhost:3000/sendanswer', {
        method: 'POST',
        body: jsonData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(a => a.json()).then(a => checker(a))
})

function updatescore(a) {
const score = document.getElementById('score')
    const info = document.getElementById('info')
    if (a) {
        userscore +=1
        score.innerText = userscore
        info.innerText = 'RIGHT !!!!'
        getData ()
        
    } else {
        userscore > 0 ? userscore -=1 : userscore
        score.innerText = userscore
        info.innerText = 'FALSE !!!!'
        getData ()
        
    }
}

function checker(value) {
    console.log(datastore.answer, value.a, value.b)
 if (datastore.answer.toLowerCase() === value.a.toLowerCase() || value.b === 'true' ) {
     updatescore('yes')
    return true
} else {
     updatescore()
     return false
 }
}



getData()
