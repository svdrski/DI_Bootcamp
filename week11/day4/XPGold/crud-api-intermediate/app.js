const express = require('express')
const axios = require('axios')
const app = express()

app.listen(3000, ()=> {
    console.log('Listening on 3000')
})


app.post('/api/posts', (req, res) => {
    res.send();
});

app.put('/api/posts/:id', (req, res) => {
    const {id} = req.params
    res.send(id);
});

app.delete('/api/posts/:id', (req, res) => {
    const {id} = req.params
    res.send(`${id} deleted`);
});


app.get('/api/posts', async  (req, res) => {
try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    res.json(response.data)
} catch (e) {
    console.log(e)
}})

app.get('/api/posts/:id', async(req,res) => {
    const {id} = req.params
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        res.json(response.data)
    } catch (e) {
        console.log(e)
    }
})


