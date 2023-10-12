const question = document.getElementById('question')
const optionsdiv = document.getElementById('options')
const status = document.getElementById('status')
let currentQuestion = 1
let score = 0

getQuestion(currentQuestion)
async function getQuestion (id) {
    const optionsArray = []
    let data = await fetch(`/api/getquestion/${id}`)
    data = await data.json()
    const answer = await getCorrectanswer(data[0].correctanswer)
    const options = await getOptions(data[0].correctanswer)
    optionsArray.push(...answer, ...options)
    shuffle(optionsArray)
    printQuestion(data, optionsArray)
}

async function getCorrectanswer (id) {
    let data = await fetch(`/api/getanswer/${id}`)
    return await data.json()
}

async function getOptions(id) {
    let data = await fetch(`/api/getoptions/${id}`)
    return await data.json()
}


function printQuestion (data, optionsArray) {
    question.innerText = data[0].question
    optionsdiv.innerHTML = ''
    optionsArray.forEach((item, index) => {
        const btn = document.createElement('button')
        btn.value = item.id
        btn.classList.add(`btn${index}`)
        btn.innerText = item.option
        btn.addEventListener('click', (e)=>{
            checker(data[0].correctanswer, e)
        })
        optionsdiv.appendChild(btn)
    })
    document.getElementById('score').innerText = `Score: ${score}`
}

function checker (current, e) {
    if(current == e.target.value) {
        score +=1
        status.style.color = 'green'
        status.innerText = 'Right'
    } else {
        status.style.color = 'red'
        status.innerText = 'Wrong'
    }
    currentQuestion +=1
    if(currentQuestion == 10) {
        document.getElementById('container').innerHTML = `
        <h1>Game over</h1>
        <p> Your answered ${score} out of 10 questions correctly
        <button onclick="restart()">restart</button>                                               
        `
    } else {
        getQuestion(currentQuestion)
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function restart () {
    location.reload();
}