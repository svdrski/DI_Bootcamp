const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req.url)
    const method = req.method
    console.log(method)
    const url = req.url
    
    
    if(url === '/') {
        if(method === 'get') {
            res.end('<h1>HOme</h1>')
        } else  {
            
        }
        
    }
    else if (url === '/about'){
        res.end('<h1>About</h1>')
    } else {
        res.end('<h1>Page not found</h1>')
    }
    //send response
//    res.end('Hello from')
})


server.listen(2000)