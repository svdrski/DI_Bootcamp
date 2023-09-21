const http = require('http')


const server = http.createServer((req, res) => {
    if(req.url === '/welcome') {
        res.setHeader('Content-Type', 'application/json')
        res.writeHead(200);
        res.end(JSON.stringify({message: "Welcome New User"}))
    } else {
        res.end('Another page')
    }
})
//const server = http.createServer((req, res) => {
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/html')
//    res.end('Hello World')
//})

//const server = http.createServer((req,res) => {
//    if(req.url === '/') {
//        res.end('<h1>Home page</h1>')
//    } else if (req.url === '/about'){
//        res.end('<h1>About page</h1>')
//    } else {
//        res.writeHead(404, {
//            'Content-type': 'text/html'
//        })
//        res.end('page not found')
//    }
////  res.end('hello World from the server')
//})

server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})