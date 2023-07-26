
//Обьекты 


let user = {
  name: 'John',
  email: 'lohn@mail.com',
  age: 18,
  fav: ["Apple", "Banana"],
  address: {
    city: "Tel aviv",
    country: "Israel"
  },
  getAge: function() {
    alert(18);
  }
}


user.name = "Johny";
user["email"] = "kokoko@mail.com";


// Способы вывести обьект

console.log(user.name);
console.log(user.fav[1]);
console.log(user["name"]);
console.log(user["email"]);

console.log(user);



let user1 = {
  name: "john",
  email: "jjj@fmai.com"
}


console.log(user1);

// Удалить ключ и значение 

delete user1.name;

//удалить значение 

user1.email = null;

user1.username = 'Jokoko';


console.log(user1);

// let user2 = {
//   name: "marry",
//   email: "aaa@fmai.com"
// }


// let user3 = {
//   name: "dann",
//   email: "ddd@fmai.com"
// }






// let users = {

//    user1: user1,

//   user2,  // совпадает с именем переменной

//   user3: {
//     name: "dann",
//     email: "ddd@fmai.com"
//   }

// }

// console.log(users.user1, users.user2);



// let usersArr = [user1, user2, user3]
// console.log(usersArr[1]["name"]);