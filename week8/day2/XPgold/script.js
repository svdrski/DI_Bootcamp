// Exercise 1
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});

// if current value is number = current value * 2 and add to array 


//Exercise 2 
 [[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

 // return [1,2,0,1,2,3]  contcat two arrays to one and start from 1,2


 // Exercise 3

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })


// i - index of array -  starts from 0 to 5


/// Exercise 4

//1
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
let result = console.log(array.flat(2))

//2
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
let result2 = (greeting.map(v => v.join(' ')))

let result3 = console.log(result2.join(' '))

//3 
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
let finish =  console.log(trapped.flat(99999999999999999))