const questionField = document.getElementById('question')
const form = document.forms[0];
const score = document.getElementById('score')
const status = document.getElementById('status')


async function getQuestion () {
    try{
        let  data = await fetch('http://localhost:4444/quiz/start')
        data = await data.json()
        if (data === 'over') {
            form.style.display = "none"
            status.style.display = "none"
            document.getElementById('over').style.display = "block"}
        questionField.innerText = data.question
    } catch (e) {
        console.log(e)
    }
}

form.addEventListener('submit', async (e)=> {
    e.preventDefault()
    const data = new FormData(e.target)
    try{
     let  response =  await fetch('http://localhost:4444/quiz', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(data)),
            headers: {'Content-Type': 'application/json'}
        })
        response = await response.json()
        console.log(response)
        Number(score.innerText) === response ? status.innerText = 'False' :  status.innerText = 'True'
        score.innerText = response
        await  getQuestion()
    } catch (e) {
        console.log(e)
    }
 
    
})

getQuestion()
