// Ex1
// function compareToTen(num){
//    const result =  new Promise((resolve, reject) => {
//         num <= 10 ? resolve(num) : reject ('error: value is greater')
//     })
//     return result
// }
//
// compareToTen(15)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//
// compareToTen(8)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))


// Ex2
// let prom = new Promise(resolve => {
//     setTimeout(()=> {
//         resolve('success')
//     },4000)
// }).then(v => console.log(v))

//Ex3

Promise.resolve(3).then(a=>console.log(a))
Promise.reject("Boo!").then(b=>console.log(b))