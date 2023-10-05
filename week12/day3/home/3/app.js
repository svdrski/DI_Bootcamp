const  express = require('express')
const knex = require("knex");
const app = express()

const db = require('knex')({
    client:'pg',
    connection: {
        host:'127.0.0.1',
        user: 'postgres',
        password: '123456',
        database: 'users',
        port: 5432
    },
    useNullAsDefault: true
})


app.get('/', (req, res)=> {
    db.select().from('users')
        .then(a => res.send(a))
})

// добавить запмсь
app.get('/insert', (req, res)=> {
db('users').insert({username: 'ZALUPA'})
    .then(a=> res.send('ok'))
})


// транзакция
app.get('/in', (req,res)=> {
    db.transaction((trx) => {
        db('users').insert({username:'DODIK', price: 555})
            .transacting(trx)
            .then(()=> {
                trx.commit()
                    .then(()=>{
                        res.send('ok')
                    })
            })
            .catch((err) =>{
                trx.rollback()
                console.error(err)
                res.status(500).send('Ошибка транзакции')
            })
    })
        .catch(e => {
            console.log(e)
            res.status(500).send('Ошибка операции')})
})

// app.get('/insert', (req, res) => {
//     // Начало транзакции
//     db.transaction((trx) => {
//         // Внутри транзакции выполняем операцию вставки
//         db('users').insert({ username: 'ZALUPA' })
//             .transacting(trx) // Передаем объект транзакции в запрос
//             .then(() => {
//                 // Если нужно выполнить другие операции внутри транзакции, добавьте их здесь
//
//                 // Если все операции успешно выполнены, фиксируем транзакцию
//                 trx.commit()
//                     .then(() => {
//                         res.send('ok');
//                     })
//                     .catch((err) => {
//                         // Если произошла ошибка при фиксации транзакции, откатываем ее
//                         trx.rollback();
//                         console.error(err);
//                         res.status(500).send('Error occurred during transaction');
//                     });
//             })
//             .catch((err) => {
//                 // Если произошла ошибка при выполнении операции вставки
//                 console.error(err);
//                 res.status(500).send('Error occurred during INSERT operation');
//             });
//     });
// });



//
// // Создание объекта транзакции
// knex.transaction((trx) => {
//     // Выполнение запросов внутри транзакции
//     knex('table1')
//         .insert({ column1: 'value1' })
//         .transacting(trx) // Указание транзакции
//         .then(() => {
//             return knex('table2')
//                 .insert({ column2: 'value2' })
//                 .transacting(trx); // Указание транзакции
//         })
//         .then(trx.commit) // Фиксация транзакции при успехе
//         .catch(trx.rollback); // Отмена транзакции при ошибке
// })
//     .then(() => {
//         console.log('Транзакция успешно завершена');
//     })
//     .catch((err) => {
//         console.error('Ошибка транзакции:', err);
//     });
// Обратите внимание на следующие ключевые моменты:
//
//     knex.transaction((trx) => { ... }): Создаем объект транзакции, передавая в функцию обратного вызова объект trx, который будет использоваться для выполнения запросов внутри транзакции.
//
//     .transacting(trx): Добавляем метод .transacting(trx) к каждому запросу, который должен быть выполнен в рамках транзакции. Это указывает, что запрос является частью текущей транзакции.
//
// then(trx.commit): Если все операции внутри транзакции завершились успешно, вызываем trx.commit(), чтобы фиксировать транзакцию и сохранить изменения в базе данных.
//
// catch(trx.rollback): Если произошла ошибка при выполнении операции внутри транзакции, вызываем trx.rollback(), чтобы отменить транзакцию и откатить все изменения.
//
// then(() => { ... }) и catch((err) => { ... }): Внешний блок .then и .catch используется для обработки успешного завершения или ошибки транзакции.
//
//     Такой синтаксис обеспечивает правильное выполнение операций в рамках транзакции и гарантирует целостность данных в случае ошибки.
//
//
//
//
//
//
//     Повторная генерация
//


//обновить
app.get('/update', (req,res)=> {
    db('users').where({id:3}) .update({username:'KKOOKOOKOKOK'})
        .then(a => res.send('updated'))
})
//обновить

app.get('/update2', (req,res)=> {
    db('users').where('id', '=', '1') .update({username:'ZALIOPA'})
        .then(a => res.send('updated'))
})

// прибавить число к числу в базе
app.get('/incr', (req,res)=> {
    db('users').where({id:1}).increment('price', 222)
        .then(a => res.send('updated'))
})


app.get('/33', (req, res)=>{
    db('users').where({id:2}).del()
        .then(a => res.send('deleted'))
})



//const express = require('express')
//const app = express()
//
//const db = require('knex')({
//    client: 'pg',
//    connection: {
//        host: '127.0.0.1',
//        user: 'postgres',
//        password: '123456',
//        database: 'Hollywood',
//        port: 5432
//    }
//})
//
//app.set('db', db)
//app.use(express.json())



// app.get('/', (req, res) => {
//     db('actors')
//     .where('first_name', 'Gal')
//     .andWhere('last_name', 'Gadot')
//     .del(['actor_id', 'first_name', 'last_name'])
//     .then(a => res.send(a))
// })

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