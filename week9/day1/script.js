const func = () => {
    try {
        console.log("starting the try block")
        hello
        console.log("finishing the try block")
    } catch (err) {
        console.log("starting the catch block")
        console.log(`
        Error Name : ${err.name}, 
        Error Msg : ${err.message},
        Error Stack : ${err.stack}`)
    } finally {
        console.log("Function done")
    }
}
func()




console.log(form.elements.login); // <input name="login" type="text">
  let formFieldset = form.elements.userFields;
  console.log(formFieldset);
    // <fieldset name="userFields">
    //   <legend>info</legend>
    //   <input name="login" type="text">
    // </fieldset>

  // we can get the input by name both from the form and from the fieldset
  console.log(fieldset.elements.login == form.elements.login); // true




// function hello () {
//     console.log('before')
//     try{
//       a;
//     }
//     catch(e){
//         console.log(e.stack)
//     }
  
//     console.log('after')
// }

// hello()






// function validateForm (e) {
//     e.preventDefault()
    
// }

// try{

// }

// catch(error){

// }


// const form1 = document.forms.form1
// console.log(form1)



// function validateForm (event) {
//     Element.na
//     event.preventDefault()
//     console.log(event.target.elements.email.value)
//     console.log('validate form');

//     let fruits = event.target.elements.fruits

//     let options = Array.from(fruits.options)
//     console.log(options)

//     const selected = options.filter((item) => item.selected).map((item) => item.value)
//     console.log(selected)
// }



// function getoptions (e) {
//     const options = e.target.options;
//     console.log(options)
// }


// let addopt = document.getElementById('addopt')
// addopt.addEventListener('click', function() {
//  let select = form1.elements.fruits
// //  let opt = document.createElement('option')
// //  opt.value = 'melon'
// //  opt.textContent = 'melon'
// let opt = new Option('Melon', '5')
// select.appendChild(opt)
// })