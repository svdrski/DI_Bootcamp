const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
});

async function prom (array) {
    try {
        let a = await  Promise.all(array)
        console.log(a)
    } catch (e) {
     console.log(e, 'ERRRORRR')
    }
}
// function prom (array) {
//     Promise.all(array)
//             .then(a => console.log(a))
//             .catch(e => console.log(e, 'ERRRORRR'))
// }


prom([promise1,promise2,promise3])

// expected output: Array [3, 42, "foo"]
// promise 1 return promise resolve with value 3
// promise 2 is number 42
// promise 3 return resolve with value foo after 3 sec