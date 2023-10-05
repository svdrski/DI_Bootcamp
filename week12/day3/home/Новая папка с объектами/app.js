//const request = require('supertest');
//// app is supposed to point to the app.js file
//const app = require('/app');
//
//describe('Testing POSTS/shots endpoint', function () {
//    it('respond with valid HTTP status code and description and message', function (done) {
//        // Make POST Request
//        const response = await supertest(app).post('/shots').send({
//            title: 'How to write a shot',
//            body: "Access the Edpresso tutorial"
//        });
//
//        // Compare response with expectations
//        expect(response.status).toBe(200);
//        expect(response.body.status).toBe('success');
//        expect(response.body.message).toBe('Shot Saved Successfully.');
//    });
//});



const express = require('express')
const app = express()

const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '123456',
        database: 'Hollywood',
        port: 5432
    }
})

app.set('db', db)
app.use(express.json())



app.get('/', (req, res) => {
    db('actors')
    .where('first_name', 'Gal')
    .andWhere('last_name', 'Gadot')
    .del(['actor_id', 'first_name', 'last_name'])
    .then(a => res.send(a))
})

//Update
//app.get('/', (req, res) => {
//    db('actors')
//    .where('first_name', 'Gal')
//    .andWhere('last_name', 'Gadot')
//    .update({
//        number_oscars: 11,
//        age: '1990-02-22'
//    }, ['*'])
//    .then(a => res.send(a))
//})
//
//add new record
//app.get('/', (req, res) => {
//    db('actors')
////    .returning(['actor_id', 'first_name', 'last_name'])
//    .insert({first_name: 'Gal', last_name: 'Gadot', age: '1985-04-30', number_oscars: 0}, ['*'])
//    .then(a => res.send(a))
//})


// or condition
//app.get('/', (req, res) => {
//    db('actors')
//    .where('actor_id', 1)
//    .orWhere({first_name: 'Ira'})
//    .then(a => res.send(a))
//})

    
    // where condition
//app.get('/', (req, res) => {
//    db('actors')
//    .where('number_oscars', '>=', 2)
//    .then(a => res.send(a))
//})

//where and
//app.get('/', (req, res) => {
//    db('actors')
//    .where({first_name: 'Matt', last_name: 'Damon'})
//    .then(a => res.send(a))
//})


// where
//app.get('/', (req, res) => {
//    db('actors')
//    .where({first_name: 'Matt'})
//    .then(a => res.send(a))
//})


//select all
//app.get('/', (req, res) => {
//    db
//    .select().from('actors')
//    .then(a => res.send(a))
//})


// select fields
//app.get('/', (req, res) => {
//    db
//    .select('first_name', 'last_name').from('actors')
//    .then(a => res.send(a))
//})





app.listen(4444, ()=>{console.log('Listening on 4444')})