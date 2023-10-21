// const jwt = require('jsonwebtoken');

// let tokencount = 0

// const auth = (req, res, next ) => {
//     let token = req.headers.authorization

//     if(tokencount === 0) {
//         tokencount += 1
//     }

//     if(tokencount === 1) {
//         tokencount += 1
//     }

//     if( tokencount === 2) {
//         tokencount = 0
//         if(token === 'null') {res.status(301).redirect('/login')}
//         else { console.log('token yes')}
    
//     }

//     console.log(token)

// }

//     if (arr.length < 2) {
//         addtoken ()
//         next()
//     }  else{
//         arr = []
//     }


// function addtoken () {
//     arr.push(token)
// }


    
    // if(arr[1]) { 
    //     console.log(arr[1])
    //     next()
    // }

    // console.log(arr.length)

    // console.log(arr[1])


    // if (arr.length < 2) {
    //     arr.push(token)
    //     next()
    // } else{
    //     arr = []
    //     arr.push(token)
    // }


    // if(arr[1]) { next()}


// const jwt = require('jsonwebtoken');


// const auth = (req, res, next ) => {


//     let token = req.query.token
//     console.log(token)
//    if(!token)  { return res.json('notoken');}
//    token = JSON.parse(token)
//    const decoded = jwt.verify(token, 'roommates')
//    console.log(decoded.email)


//     next()
    
// }

    

   
    


// module.exports = auth



// const jwt = require('jsonwebtoken');


// const auth = (req, res, next ) => {


//     let token = req.query.token
//     console.log(token)
//    if(!token)  { return res.json('notoken');}
//    token = JSON.parse(token)
//    const decoded = jwt.verify(token, 'roommates')
//    console.log(decoded.email)


//     next()
    
// }

// module.exports = auth