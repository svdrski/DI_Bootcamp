const express = require('express');
const app = express();

/// before every
//app.use((req,res, next) => {
//    const date = new Date()
//    console.log(date)
//    next()
//})


//
//app.use('/app',(req,res, next) => {
//    console.log('MIDDDLE')
//    next()
//})

const logger = (req, res, next) => {
    console.log(req.url)
    console.log(req.params),
    console.log(req.query)
    next()
//    res.send('CUasot ambobo')
}

app.use('/api', logger)

app.get('/home',logger, (req, res) => {
    console.log("-----In the Home Page-----");
    res.send('Home Page');
});


// before second
//app.use((req,res, next) => {
//    const date = new Date()
//    console.log(date)
//    next()
//})


app.get('/about', (req, res) => {
    console.log("-----In the About Page-----");
    res.send('About Page');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));