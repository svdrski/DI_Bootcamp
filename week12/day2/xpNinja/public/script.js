const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];
const form = document.forms[0]
const emojiSelect = document.getElementById('emoji')


// add emojis to the page
for(emoji of emojis) {
    const option = new Option()
    option.value = emoji
    option.innerText = emoji
    emojiSelect.appendChild(option)
}


form.addEventListener('submit', async (e)=> {
    e.preventDefault()
    const data = new FormData(e.target)
    let request = await fetch('/greet', {
        headers: {"Content-Type" : "application/json"},
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data))
    })
    request = await  request.json()
    form.style.display = "none"
    document.getElementById('h1').innerText = request
})