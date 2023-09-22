const express = require('express')
const {users} = require('./config/users.js')

const app = express()


app.use(express.json());// parse json body content

app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser)
    res.json(users);
});


app.put("/users", (req, res) => {
const {id} = req.params
    const{name, email} = req.body
    
    users.push(newUser)
    res.json(users);
});



app.delete('/users/:id', (req, res) => {
    const {id} = req.params
    const index = users.findIndex(item => item.id === id)
    users.splice(index, 1)
    res.json(users)
})






//
//
//
//
//
//
//
//app.get('/users', (req,res) =>{
//    res.json(users)
//})
//
//app.get('/users/:id', (req,res) => {
//    const {id} = req.params;
//    console.log(users[0].id)
//    const user = users.find(item => item.id === Number(id))
//    res.json(user)
//})
//
//app.get('/users/search', (req,res) => {
//const {name} = req.query
//  const result = users.filter((value) => {value.name.toLowerCase().includes(name.toLowerCase())})
//    console.log(result)
//    res.json(result)
//})

app.listen(2000)

//// Create new user POST
//
//app.post('/users', (req,res) => {
//    const {name, email} = req.body
//    console.log(req.body)
//    res.json({msg:'ok'})
//})



//
//app.get('/', (req,res) =>{
//    res.send('<h1> Hello</h1>')
//})
//
//
//app.get('/about', (req,res)=>{
//    res.send('<h1> About</h1>')
//})
//
//app.get('*', (req,res) =>{
//    res.send('<h1> 404</h1>')
//})