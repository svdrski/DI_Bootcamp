// Exercise 1

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };
//
// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };
//
// let sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');
//     const slow = await resolveAfter2Seconds();
//     console.log(slow);
//     const fast = await resolveAfter1Second();
//     console.log(fast);
// }
//
// sequentialStart()


//1   ==SEQUENTIAL START==
//2   "starting slow promise
//3   after 2 sec  -  slow promise is done
//4   slow
//5   starting fast promise
//6   after 1 sec - fast promise is done
//7   fast promise is done




// Exercise 2

//
// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };
//
// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };
//
// let concurrentStart = async function () {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds();
//     const fast = resolveAfter1Second();
//     console.log(await slow);
//     console.log(await fast);
// }
//
// setTimeout(concurrentStart, 4000)

/// 1 after 4sec ==CONCURRENT START with await==
/// 2  starting slow promise
/// 3  starting fast promise
/// 4  fast promise is done
/// 5  after 2 sec -  slow promise is done
/// 6  slow
/// 7  fast




/// Exercise 3

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
   let response =  await Promise.all(urls)
    for (let item of response) {
        let getResponse = await fetch(item)
        getResponse = await getResponse.json()
        console.log(getResponse)
    }
}


getData()
