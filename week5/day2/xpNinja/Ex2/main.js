let form = document.getElementById("form")
let email = document.getElementById("email")

// form.addEventListener("submit", function(event){
//     event.preventDefault()
//     let value = email.value
//     if((value.indexOf("@") + 1) < value.indexOf(".") && value.indexOf(".") < value.length -1) {
//         alert(value)
//         console.log(value.length, value.indexOf("."))
//     } else {
//         alert("enter correct email")
//     }
// })




form.addEventListener("submit", function(event){
    event.preventDefault()
    let value = email.value
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

     if (emailPattern.test(value)) {
         alert("Valid email address");
     } else {
         alert("Invalid email address");
     }
})
