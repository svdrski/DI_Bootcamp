const err = document.getElementById('reg_error')
const passField = document.getElementById('password')
const mail = document.getElementsByClassName('auth_email')
const loading = document.getElementById('loading')



//form handler
document.getElementById('login').addEventListener('submit', async  (e)=> {
    e.preventDefault()
    const data = new FormData(e.target)
    try{
        delError()
        loading.style.display = 'block'
        const respose = await fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(Object.fromEntries(data))
        })
        
        if(respose.ok) {
            delError()
            loading.style.display = 'none'
            const resp = await respose.json()
            console.log(resp)
        } else {
            delError()
            loading.style.display = 'none'
            console.log(respose.status)
            const resp = await respose.json()
            printError(resp, respose.status)
        }
    } catch (e) {console.log('Error ' + e)}

})



// delete errors from page
function delError(){
    try{
        err.style.display = 'none'
        mail[0].style.border = '1px solid #E3E3E3'
        passField.style.border = '1px solid #E3E3E3'
    } catch (e) {console.log('Error ' + e)}
}


function printError (message, status) {
    try{
        delError()
        err.style.display = 'flex'
        err.innerHTML = `
    <img src="/static/err.svg" style="height: 20px; margin-right:10px;">
    <span>${message}</span>
    `
        if(status === 410) {
            mail[0].style.border = '1px solid #EC3F3F'
        }
        if(status === 409) {
                passField.style.border = '1px solid #EC3F3F'
        }
    } catch (e) {console.log('Error ' + e)}

}