function handleSubmit(e) {
    e.preventDefault()
    // const value = e.target.value
    // alert(value)

    let form = document.forms[0]
    let check  = form.elements.Submit.checked
    
console.log(check)

}

const sele = document.getElementById("sele")

sele.options[2].selected = true
sele.value = "2"
sele.selectedIndex = 0





// function handleSubmit(e) {
//     e.preventDefault()
//     const form = e.target;
//     console.log(e.target)
//     const emailValue = form.elements.fname.value;
//     console.log("form was submited", emailValue)
// }



// const forms = document.forms[0]
// const elements = forms.elements;
// console.log(elements[0])