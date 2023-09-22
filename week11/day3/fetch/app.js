const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({exrended:true}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})



app.route('/login')
          .get((req,res)=>{
              console.log('Query', req.query)
              const {username, password} = req.query

              console.log("User", username); //john
              console.log("Password", password); //123
              const data = {
                  message: 'Welcome Back',
                  username
              }
              console.log("GET DATA", data);
              res.send(data)
          })
.post((req,res) => {
    console.log(req.body)
    const {username, password} = req.body
    console.log("User", username); //Sara
    console.log("Pass", password);

    const data = {
        messsage: 'Welcome',
        username
    }

    console.log(data)
    res.send(data)
})















app.listen(3000, () => console.log('Example app listening on port 3000!'));

//const express = require('express');
//const app = express();
////middleware
//app.use(express.json())
//
////serve static files
//app.use(express.static('public'));
//
////middleware - parses urlencoded bodies
//app.use(express.urlencoded({ extended: true }));
//
//app.get('/', (req, res) => {
//    res.sendFile(__dirname + "/index.html");
//})
//
//app.post('/search', (req, res) => {
//    console.log(req.body)
//    res.send('welcome, ' + req.body.fullname)
//})
//
//app.listen(3000, () => console.log('Example app listening on port 3000!'));