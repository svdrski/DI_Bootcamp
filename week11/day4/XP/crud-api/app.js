import express from  'express'
const app = express()
app.listen(3000, ()=> {
    console.log('Listening on 3000')
})


import {fetchPosts} from './data/dataService.js'

fetchPosts('https://jsonplaceholder.typicode.com/posts')