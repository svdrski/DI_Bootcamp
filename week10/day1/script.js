const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
})
    .then((result) => {
        console.log("Done!1");
    })
    .then((result) => {
        setTimeout(() => {
            console.log("Done!2");
        }, 5000);
    })
    .then((result) => {
        console.log("Done!3");
    });

// function comparetoten (value) {
//     const p = new  Promise((resolve, reject) => {
//         if (value > 10) {
//             resolve('Greater')
//         } else  {
//             reject('less')
//         }
//     })
//     p.then(a => console.log(a))
//         .catch(a => console.log(a))
// }
//
// comparetoten(11)
// comparetoten(2)







// Состояния
// 1. Pending
// 2. Fulfield  - resolve
// 3. fulfield - reject


// const p = new Promise((resolve, reject) => {
// reject(false)
// })
// console.log(p)


// const  p  = new  Promise((resolve, reject) => {
//     if(true) {
//         resolve('hi')
//     } else  {
//         reject('buy')
//     }
// })
//
// p.then((data) => {
//     return data + '22'
// })
// .then( data => {
//     console.log(data)
// })
//     .then(data => {
//       return   data + '0000'
//     })
//     .then(a => console.log(a))
//     .catch(a => console.log(a))

// const flip = () =>{
//     const coin = Math.floor(Math.random() * 3)
//     return  coin < 2 ? (coin === 0  ? 'head' : 'tail') : 'side'
// }

// console.log(flip())

// const flipcoin = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         const flipresult = flip()
//         if(flipresult === 'head' || flipresult === 'tail') {
//             resolve(flipresult)
//         }
//         else  {
//             reject(flipresult)
//         }
//     }, 2000)
//
// })
//
//
// flipcoin.then(result => {
//     console.log(result)
// })
//
// .catch( err => {
//     console.log(err)
// })
//
//
//
// const getX = (callback) => {
//    return new  Promise((res, rej) => {
//        setTimeout(() => {
//            res(5)
//        },2000)
//    })
// }
//
//
// const getY = () => {
//     return  new  Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(6)
//         }, 3000)
//     })
//
// }
//
// const getXY = () => {
// getX().then(x => {
//     const y = getY()
//     y.then(y => {
//         console.log(x + y)
//     })
//
// })
// }
//
// console.log(getXY())



// 1 Нужно создать new Promise
// 2 чтобы получить результат после загрузки нужно использовать  then(x => {
//     const y = getY()
//     console.log(x + y)





//
// const getY = (callback) => {
//     console.log('waiting for y.....')
//     callback(6) ;
// }
//
// const getXY = () => {
//     getX((x) =>{
//         getY((y) => {
//             console.log(x+y)
//         })
//     })
//     // const x = getX();
//     // const y = getY();
//     // console.log(x + y)
//
// }
//
// getXY()










// function fibnch (value) {
//     let arr = []
//
//
//     for(i=0;i<value - 2;i++){
//         let value11 = arr[arr.length - 1]
//         let value2 = arr[arr.length - 2]
//         let value3 =  value11 + value2
//         arr.push(value3)
//
//
//
//         // let result = arr[arr.length-1] + arr[arr.length-2]
//         // arr.push(result)
//     }
//     return arr
// }
//
//
// console.log(fibnch(10))
//
//
// function checker (string) {
//     let arr = [...string]
//     let arr2 = arr.filter(value => ['a','e','i','o','u'].includes(value))
//     return arr2.length
// }
//
//
//
// checker('aaaaaaaaaae   ffe')
//
































// function prom() {
//     return new Promise((resolve, reject) => {
//         const data = {message: 'загружено'}
//         if (a) {
//             resolve('its ok')
//         } else {
//             reject ('not ok')
//         }
//     })
//     // proma.then((fromRes) => console.log(fromRes)).
//     // catch((fromRej) => console.log(fromRej));
// }
//
//
// prom()
//     .then((data) => {
//         console.log(data.message)
//     })
//
//

// function prom() {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//         const a = true
//         if (a) {
//             resolve('its ok')
//         }
//         }, 2000)
//
//     })
//     // proma.then((fromRes) => console.log(fromRes)).
//     // catch((fromRej) => console.log(fromRej));
// }
//
//
// prom()
//     .then((a) => {
//         console.log(a.message)
//     })
//     .catch((error) => {
//         console.log('ошибка', error)
//     })