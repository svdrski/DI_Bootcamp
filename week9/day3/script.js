let formData = new FormData(document.forms.articleBlog);
console.log([...formData.entries()].join(''))
let formDataJson = JSON.stringify(Object.fromEntries(formData))
console.log(formDataJson); 
//{"title":"Great Article","body":"Article about Javascript"}

// send it out
let xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(formDataJson);
xhr.onload = () => console.log(JSON.parse(xhr.response));
// {title: 'Great Article', body: 'Article about Javascript', id: 101}



// let request = new XMLHttpRequest()
// request.open('get', 'https://zivuch.github.io/data.json')
// request.responseType = 'json'
// request.send()
// request.onload = () => {
//     console.log(request.response)
// }

// request.onload = function() {
//     if (request.status != 200) {
//     //   analyze HTTP status of the response
//     //   e.g. 404: Not Found
//       console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//     } else { // show the result
//     //   response is the server response
//       console.log(`Done, got ${request.response.length} bytes`);
//       console.log(request.response);
//     }
//   };


//   request.onprogress = function(event) {
//     if (event.lengthComputable) {
//       console.log(`Received ${event.loaded} of ${event.total} bytes`);
//     } else {
//       console.log(`Received ${event.loaded} bytes`); // no Content-Length
//     }
//   };


// request.onerror = function() {
//     console.log("Request failed");
//   };
  

// let req = new XMLHttpRequest()

// req.open('get', 'https://api.chucknorris.io/jokes/random')
// req.responseType = 'json'
// req.send()

// req.onload = function(){
//     if (req.status !==200) {
//         alert(`Error ${req.status}: ${req.statusText}`)
//     } else {
//         console.log(`Done ${req.response.value}`)
//     }
// }


// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open('GET', 'https://national-weather-service.p.rapidapi.com/zones/%7Btype%7D/%7BzoneId%7D/forecast');
// xhr.setRequestHeader('X-RapidAPI-Key', '7aa4a75b9dmshef2d873f25ffd43p1841adjsn36384864b945');
// xhr.setRequestHeader('X-RapidAPI-Host', 'national-weather-service.p.rapidapi.com');

// xhr.send(data);
// // XMLHttpRequest

// let xhr = new XMLHttpRequest();

// // console.log("xhr=>", xhr);

// // xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.open("GET", "https://zivuch.github.io/load?999999");

// // xhr.timeout = 10000;
// // type
// // ""
// // text
// // json
// // document
// // xhr.responseType = "document"

// xhr.send();

// xhr.onload = () => {
//   if (xhr.status === 200)
//     console.log(xhr.response); //zivuch(xhr.response);//render(xhr.response);
//   else console.log(`${xhr.status} : ${xhr.statusText} `);
// };

// xhr.onerror = () => {
//   console.log("Request failed");
// };

// xhr.onprogress = (event) => {
//   if (event.lengthComputable) {
//     console.log(`Received ${event.loaded} of ${event.total} bytes`);
//   } else {
//     console.log(`Received ${event.loaded} bytes`); // no Content-Length
//   }
// };

// const render = (arr) => {
//   console.log(arr);
//   const html = arr.map((item) => {
//     return `<div style="display:inline-block;margin:20px;border:1px solid cyan;padding:20px;text-align:center;">
//       <img src=https://robohash.org/${item.id}?size=150x150 />
//       <h2>${item.name}</h2>
//       <p>${item.username}</p>
//       <p>${item.email}</p>
//     </div>`;
//   });
//   document.getElementById("root").innerHTML = html.join("");
//   console.log(html);
// };

// function zivuch(xmlDoc) {
//   var cd = xmlDoc.getElementsByTagName("email");
//   for (let i = 0; i < cd.length; i++) {
//     console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
//     console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
//   }
// }










/// XML запрос

// let xhr = new XMLHttpRequest();


// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.send()

// xhr.timeout = 10000;

// // type "" or text  or json
// // if json не нужно parse
// // documemt если xml файл
// xhr.responseType = 'text'


// xhr.onload = () => {
//     if(xhr.status === 200) console.log(JSON.parse(xhr.response))
//     else console.log(`${xhr.status} : ${xhr.statusText}`)
// }


// xhr.onerror = () => {
//     console.log('request failed')
// }



// let xhr = new XMLHttpRequest();


// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.send()
// function aa() {
//     console.log(xhr.response)}
// setTimeout (aa, 2000)
// xhr.onload = () => {
//     if(xhr.status === 200) console.log(JSON.parse(xhr.response))
//     else console.log(`${xhr.status} : ${xhr.statusText}`)
// }


// xhr.onerror = () => {
//     console.log('request failed')
// }






// function a() {
//     b()
//     console.log('a function')
// }
// function b() {
//     console.log('b function')
// }
// a()


// You are tasked with writing a function `solution` that takes a string `S` as input. 
// The string consists of 'a' and/or 'b' characters. 
// The function should return `true` if all occurrences 
// of the letter 'a' appear before all occurrences 
// of the letter 'b' in the string `S`. 
// If either 'b' does not occur in `S` or 'a' does not occur in `S`, 
// the function should also return `true`. 
// Otherwise, it should return `false`.

// function solution(S) {
// // let value = [...S]
// let lastb = S.lastIndexOf('a')
// let firsta = S.indexOf('b')

// if((lastb < firsta ) || (lastb === -1 || firsta === -1)){
//     return true
// } 
//  return false
// }



// function testSolution() {
//     const testCases = [
//       { input: 'aabbb', output: true },
//       { input: 'ba', output: false },
//       { input: 'aaa', output: true },
//       { input: 'b', output: true },
//       { input: 'abba', output: false },
//       { input: 'a', output: true },
//       { input: 'bbaa', output: false },
//       { input: 'bbba', output: false },
//       { input: 'aabb', output: true },
//       { input: 'bababab', output: false },
//       { input: 'babababa', output: false },
//       { input: 'aabababb', output: false },
//       { input: 'baaab', output: false },
//       { input: 'bbabbabbababbab', output: false },
//       { input: 'babaabaaab', output: false },
//       { input: 'ab', output: true },
  
  
//     ];
  
//     for (let i = 0; i < testCases.length; i++) {
//       const { input, output } = testCases[i];
//       const result = solution(input);
//       console.log(`Input: "${input}", Output: ${result}, Expected Output: ${output}`);
//     }
//   }

//   testSolution()
// solution('aabb')
// solution('aabb')
// solution('bbaa')
// solution('aaa')
// solution('bbb')
// solution('ababa')


// aabb - true
// bbaa - flase
// aaa - true
// bbb - true
// ababa - flase

