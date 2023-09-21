const http = require('http')

const json =
{
    "menu": {
        "firstCourse": "Vegetable Soup",
        "mainCourse": "Hamburger",
        "dessert": "Fruit salad"
    }
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type':'application/json'
    })
    res.end(JSON.stringify(json))
})
    
//const server = http.createServer((req, res) => {
//
//    if(req.url === '/users/userid=100&name=alex') {
//        res.writeHead(200, {
//            'content-type' : 'text/html'
//        })
//        res.end('<h1>Welcome user Alex</h1>')
//    } else {
//        res.end('<h1>Welcome</h1>')
//    }
//})

 

server.listen(3000, 'localhost', () => {
    console.log('Server work')
})