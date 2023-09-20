// Faker 

//import { faker } from '@faker-js/faker';

const users = []
//
//export function createRandomUser() {
//    return {
//        userId: faker.string.uuid(),
//        username: faker.internet.userName(),
//        name: faker.person.fullName(),
//        address: faker.location.streetAddress(),
//        country: faker.location.country()
//    };
//}
//
//users.push(faker.helpers.multiple(createRandomUser, {
//    count: 5,
//}))
//


//
//// Prompt
//  var prompt = require('prompt');
//
//  prompt.start();
//
//prompt.get(['username', 'address', 'country'], function (err, result) {
//    users.push({ name: result.username, address: result.address, country:result.country  })
//    console.log('done')
//    console.log(users)
//  });
  

/// EX 5
//const returnNumbers  = (value) =>{
//    console.log(value.replace(/\D/g, ''))
//}
//
//returnNumbers('k5k3q2g5z6x9bn') 
//
//


// Ex6
  const namePattern = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
  var prompt = require('prompt');

  prompt.start();

  prompt.get(['fullname'], function (err, result) {
    
      namePattern.test(result.fullname) ? console.log(result.fullname) : console.log('ERRORR')
  });