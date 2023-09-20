const ax = require('axios')

//ax.get('https://jsonplaceholder.typicode.com/users')
//.then(a => console.log(a.data))

const data = async  () =>{
    try {
       const b = await ax.get('https://jsonplaceholder.typicode.com/users')
        console.log(b.data)
//        .then(a => console.log(a.data))
    } catch (e) {
        console.log(e)
    }
}

console.log(data())

module.exports = {
    data
}


//
//console.log('Hello');
//
//for (i=0;i<5;i++){
//    console.log(i)
//}

//const name = 'avvv'
//const {greet,HI} = require('./greeting.js')
//
//greet('Alex')
//HI('Alex')




// Module system
// 1. Модули в системе
// 2. Созданные нами модули
// 3. NPM модули
// 4. Встроенные модули
//  > 18 нет fetch - axios или node-http

// npm init -y
// npm i slugify
// npm install установить все недостающие модули