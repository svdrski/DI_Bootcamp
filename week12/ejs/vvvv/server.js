const express = require('express')
const app = express()

app.set('view engine', 'ejs')

   let menu = [
    {
        name: "Margarita",
        price: 10,
        ingredients: ["Tomato Sauce", "Mozzarella", "Basil"]
    },
    {
        name: "Bianca",

        price: 13,
        ingredients: ["Ricotta", "Mozzarella", "Garlic"]
    },
    {
        name: "Etna",
        price: 14,
        ingredients: ["Tomato sauce", "Mozzarella", "Anchovies", "Capers", "Olives"]
    }
]



app.get('/', (req, res)=> {
    res.render('index', {nameRestaraunt: 'Papa Pizza', pizzaMenu: menu})
})


app.get('/about', (req, res)=> {
    res.render('about')
})
app.listen(3333, ()=> {console.log('Listen on 3333')})