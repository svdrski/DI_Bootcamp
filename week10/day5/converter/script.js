/// GET FORM WITH DOM
let form = document.forms[0]

// GET AVAILABLE CODES
async function getsupportedCodes() {
    try {
        let codes = await fetch('https://v6.exchangerate-api.com/v6/393369b8ecdd4eaca1ad0d43/codes')
        codes = await codes.json()
        return codes.supported_codes
    } catch (err) {
        console.error('THERE IS NO AVAILABLE CODES')
    }

}

// AUTO ADDING CODES TO SELECTOR
(async  function addSupportCodes (){
    try {
        let inputs = document.querySelectorAll('.selector')
        let codes = await getsupportedCodes()

        inputs.forEach(item => {
            for (value of codes) {
                const newOption = new Option(`${value[0]} - ${value[1]}`,value[0])
                item.appendChild(newOption)
            }
        })
    } catch (err) {
        console.error('CAN NOT ADD CODES TO SELECTORS')
    }

})()

// RATES REQUEST
 async function getRate (from, to) {
    try {
        let request = await fetch(`https://v6.exchangerate-api.com/v6/393369b8ecdd4eaca1ad0d43/pair/${from}/${to}`)
        request = await request.json()
        return request.conversion_rate
    } catch (err) {
        console.error('CANT GET RATES')
    }

 }
 
 // CALCULATING OUTPUT
 async  function calculate () {
    try {
        event.preventDefault()
        // FORM NUMBER VALUE
        value = form.elements.val.value
        let from = document.getElementById('from').value
        let to = document.getElementById('to').value
        let rate = await getRate (from, to)
        print([(value * rate).toFixed(2),to])
    } catch (err) {
        console.error('CAN NOT CALCULATE')
    }

 }

 /// PRINTING TO THE PAGE
function print (array) {
    document.getElementById('result').innerHTML = `${array[0]} ${array[1]}`
}


// SWITCH VALUES
function switchvalue () {
    const from = document.getElementById('from').value
    const to = document.getElementById('to').value
    document.getElementById('from').value = to
    document.getElementById('to').value = from
    calculate()
}


// button-  Start calculating
form.addEventListener('submit', calculate)





