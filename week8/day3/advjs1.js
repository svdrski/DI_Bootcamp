// let newwww = {...'hleb'}
// console.log(newwww)


// let newwwww2 = {...['a', 'b']}
// console.log(newwwww2)


// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);

// let дверь = {имя: 'Вася', Фамилия: 'лох'}
// let жопа = {ширина: 24, длина: 25}

// let новый = Object.assign({}, дверь, жопа)

// console.log(новый)

// let myCar = {
//   color : 'blue',
//   details : {
//     plateNumber: 123,
//     name : "Ford"
//   }
// }



// let obj = {foo: 1, bar: 2};
// let newObj = {...obj, baz: 5}
// console.log(newObj) //{ foo: 1, bar: 2, baz: 3 }


// let obj = {foo: 1, bar: 2, baz: 3};
// // let newObj = {...obj, foo: true}
// // console.log(newObj)

// let newObj =  {foo: true, ...obj}
// console.log(newObj) //{ foo: 1, bar: 2, baz: 3 }
// const student = {
//   name: 'John Doe',
//   age: 16,
//   scores: {
//       maths: 74,
//       english: 63,
//       science: 85
//   }
// };

// function displaySummary(student) {
//   console.log('Hello, ' + student.name);
//   console.log('Your Maths score is ' + (student.scores.maths || 0));
//   console.log('Your English score is ' + (student.scores.english || 0));
//   console.log('Your Science score is ' + (student.scores.science || 0));
// }
// displaySummary(student)



// function facf ({name, scores:{maths = 0, english = 0, science = 0}} ) {
//   console.log('Hello, ' + name);
//   console.log('Your Maths score is ' + maths);
//   console.log('Your English score is ' + english);
//   console.log('Your Science score is ' + science);

// }
// const student = {
//   name: 'John Doe',
//   age: 16,
//   scores: {
//       maths: 74,
//       english: 63
//   }
// };


// let {name, scores:{maths, sciense = 45}} = student


// console.log(` hui name is ${name} and math ${maths} and sciense ${sciense} `)



// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false
// };

// console.log(Object.keys(object1))
// console.log(Object.values(object1))
// console.log(Object.entries(object1))



// let {a,b,c,d} = {a:10,b:20,c:30,d:40}
// console.log(a,b,c,d)

// const shopping = [
//   ["apple", "$2"],
//   ["pear", "$1"],
//   ["banana", "$0.77"],
// ];

// console.log(shopping)

// let shopobj = Object.fromEntries(shopping)
// console.log(shopobj)

// let arrayy = Object.entries(shopobj)
// console.log(arrayy)


// let myObj = {
//   name : "John",
//   lastName : "Doe",
//   age : 25,
//   friends : ["Mark", "Lucie", "Ana"]
// }

// // Display : "The x# key is : --- The x# value is : ---".


// let count = Object.entries(myObj)
// console.log(count)

// let result = count.map((value, index) => {
// console.log (`The ${index + 1} key is ${value[0]}, The ${index + 1} value is ${value[1]}`)
// })

// var employee = {    // Object we want to destructure
//   firstname: 'Jon',
//   lastname: 'Snow',
//   dateofbirth: '1990'
// };



// let {firstname = 'default hleb', lastname = 'hleb', dateofbirth = 'hleb', fullname = 'Hsvid'} = employee
// console.log(firstname, lastname, dateofbirth, fullname)




// class user {
//   constructor(username, age) {
//     this.username = username
//     this.age = age
//   }

//   getuserinfo() {
//     return this.username +' ' + this.age
//   }

//   addtoarray() {
//     usersarray.push(this.getuserinfo)
//   }

// }

// let usersarray = []

// let user1 = new user ('hleb', 12)




// console.log(user1)

// console.log(user1.getuserinfo())
















// const users = {
//   user1: { age: 44, name: 'picard', },
//   user2: { age: 12, name: 'sisko', },
//   user3: { age: 109, name: 'janeway',},
// }

// // filter for all users older than 30
// // and store their data in an array
// // use Array.filter Array.map
// [
//   {id:'user1',age:44, name: 'picard'},
//   {id:'user3',age:109, name: 'janeway'}
// ]


// let result = us


// function filter (array) {
  
//   // let array1 = array.map(value => value.age > 30)
//   // let array2 = array1.filter(value => value.age)

//   console.log(array0)
// }



// let obj = {
//   name: 'john',
//   email: 'jjj@mail.com',
//   addresss: {
//     city: 'Tel Aviv'
//   }
// }



// let obj2 = {
//   age: 25
// }

// const obj3 = {...obj, ...obj2}
// console.log(obj3)


// //spreading

// const obj4 = {... obj, username: 'johnjohn', name: 'hleb'}
// console.log(obj4)



// const {name, email, username, addresss:{city} } = obj4
// console.log(name, email, username, city)

// let keys = Object.keys(obj);
// console.log(keys);

// let values = Object.values(obj);
// console.log(values)

// let entries = Object.entries(obj)
// console.log(entries)


// for (let [a,b] of entries) {
// console.log(a,b)
// }

// let result = entries.forEach(([a,b]) => console.log(a,b))


// let obj1 = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }


// let newtask = Object.entries(obj1).map(value => value.join(' ')).join(' ')
// console.log(newtask)
// let finish = ''
// let resul2t = newtask.forEach(([a,b]) =>{
//  finish +=  a + ' ' + b + ' '
// })

// console.log(newtask)













// Birthday Cake Candles
// This array are Birthday Cake Candles
// You can blow only the tallest candles
// let arr = [2,4,4,1,6]
// birthdayCakeCandles function will return
// how many candles you can blow

// let arr = [2,4,4,1,6,6]
// let max = Math.max(...arr)
// let result = 0;

// let result2 = arr.forEach(a => a === max && result++)


// let filtered = arr.filter(value => {

// })
// console.log(result)


// let arry = ['1,2,5,6,7', '2,5,7,8,15']
// function calc (array) {
// let first = array[0].split(',')
// let second = array[1].split(',')
// let result3 = first.filter(value => second.includes(value))
// console.log(result3)
// }
// calc(arry)








// first.forEach(value => {
// second.includes(value) && result2.push(value)

