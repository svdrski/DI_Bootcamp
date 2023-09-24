const block = document.getElementById('content')
let score = 0;
let correct = '';
let currentquestion = 1;

async function getquestion(id){
    let post = await fetch(`http://localhost:3003/questions/${id}`)
    post = await post.json()
    correct = post.correctAnswer
    console.log(post)
    print(post)
}

function print(value){
    let val = value.options
    block.innerHTML = `
    <h3>${value.question}</h3>
    <button onclick="check(event)" value="${val[0]}">${val[0]}</button>
        <button onclick="check(event)" value="${val[1]}">${val[1]}</button>
            <button onclick="check(event)" value="${val[2]}">${val[2]}</button>
                <button onclick="check(event)" value="${val[3]}">${val[3]}</button>
    <h4>Score: ${score}</h4>
    `
}

function check(event) {
    if(event.target.value === correct) {
        score += 1
        currentquestion +=1
        getquestion(currentquestion)
    } else  {
        score > 0 ? score -= 1 : score
        currentquestion +=1
        getquestion(currentquestion)
    }
console.log(event.target.value)
}

(function game() {
getquestion(currentquestion)
})()


