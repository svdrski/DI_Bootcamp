// Ex1

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
//
// let getData = async function () {
//   let data = await fetch("https://www.swapi.tech/api/starships/9/")
//       data = await data.json()
//     console.log(data.result)
// }
//
// getData()



// Ex2

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }
// // returned resolved promise after 2 seconds
//
// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }
// asyncCall();
//
// // 1. console log - calling
// // 2. return result as 'resolved'