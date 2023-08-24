// For example
// console.log(mergeWords('There')('is')('no')('spoon.')('ffaf') ('ffaf') ('ffaf')())
// should return 'There is no spoon.'


// function mergeWords(string) {
//     return function(nextString) {
//       if (nextString === undefined) {
//         return string;
//       } else {
//         return mergeWords(string + ' ' + nextString);
//       }
//     }
//    }
   

let merge = (string) => (nextString) =>  {if (nextString === undefined)
{ return string} else {return merge(string + ' ' + nextString)}} ; 
console.log(merge('There')('is')('no')('spoon.')('ffaf') ('ffaf') ('ffaf')())
