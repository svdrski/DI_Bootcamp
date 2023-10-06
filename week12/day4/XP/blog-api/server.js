const express = require('express')
const router = require('./routes/posts_router.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(res.send('404'));
});

app.listen(3000, ()=> {console.log('Listening on 3000')})