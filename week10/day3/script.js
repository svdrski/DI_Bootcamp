const req = fetch('https://api.chucknorris.io/jokes/random?category=movie')
    .then(value => {
        if(value.ok) {
            return value.json()
        } else  {
            throw new Error('wrong url')
        }
    })
    .then(a => console.log(a.value))

async function x() {
    let req = await fetch('https://api.chucknorris.io/jokes/random?category=movie')
    req = await req.json()
    console.log(req.value)
}

x()




// async function simple() {
//     return new  Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve (2)
//         }, 2000)
//     })
// }
//
//
// async function aa() {
//     try {
//         console.log(await simple())
//     } catch  (e) {
//         console.log( e)
//     }
//
// }
// //
// // aa()
//
//
// async  function xx() {
//     let a = await fetch('https://jsonplaceholder.typicode.com/users')
//         // .then(a => a.json())
//         // .then(a => console.log(a))
//    console.log(await  a.json())
// }
//
//
// xx()
//
//
// async  function getdata() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await res.json()
//         console.log(data)
//     } catch (er) {
//         console.log(er)
//     }
// }
//
// getdata()
//
//
//
// const x = async () => {
//
// }



// const  timeout = async (milsec, id) => {
//     await new  Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(id, 'done')
//             resolve()
//         },milsec)
//     })
// }
//
//
//
// async function x(){
//     console.log('before')
//         // Не использовать for each
//     ['first','second','third'].forEach(async (item) => {
//         await timeout(2000, item)
//     })

    // for (item of ['first','second','third']) {
    //     await timeout(2000, item)
    // }

//
//     console.log('afree')
// }
//
// x()
// async  let a = fetch('https://jsonplaceholder.typicode.com/users')







// fetch('https://jsonplaceholder.typicode.com/users')
// .then(a => a.json())
//     .then(a => {
//       return   a.forEach(value => {
//             let block =  document.createElement('div')
//             block.innerHTML = `
//             <h3> ${value.name}</h3>
//             <button onclick="showpost(event, ${value.id})">show posts</button>
//             `
//           document.body.appendChild(block)
//         })
//     })
//
// function showpost (event, id) {
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//         .then(a => a.json())
//         .then(a => {
//             a.forEach(value => {
//                 let h3 = document.createElement('h3')
//                 let p = document.createElement('p')
//                 h3.innerText = value.title
//                 p.innerText = value.body
//                 // console.log(event.target.parentElement)
//                 event.target.parentElement.appendChild(h3)
//                  event.target.parentElement.appendChild(p)
//             })
//         })
//     }
//
//
//
// //    let p =  document.createElement('p')
// //        p.textContent =
// //     this.target.
// // }
//
//
//
// let a  = fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'my title',
//         body: 'afafaf',
//         userid: 1
//     }),
//     headers: {
//         'Content-type' : 'application/json'
//     }
// })
//
// a.then(a => a.json())
// .then(a => console.log(a))