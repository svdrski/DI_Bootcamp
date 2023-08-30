let newwww = {...'hleb'}
console.log(newwww)













// let [c, d, ...rest] = [10, 20, 30, 40, 50];

// console.log(c,d,rest)


// let prices = [12, 20, 18];
// let newPriceArray = [...prices];
// console.log(newPriceArray);



// let alphabets = ["A", ..."BCD", "E"];
// console.log(alphabets);


// let array = [...'fsakfnfewonfnewfwe']
// console.log(array)





// let party = [

//     {
//       desert: 'Chocolate Mousse',
//       calories: 30,
//     },
    
//     {
//       desert: 'Apple Pie',
//       calories: 15,
//     },
//     {
//       desert: 'Croissant',
//       calories: 50,
//     },
//     {
//       desert: 'Strawberry Icecream',
//       calories: 5,
//     },
    
//   ]

  
// let result = party.reduce((start, value) => {
//     if (value.desert !== 'Apple Pie') {
//         return start + value.calories
//     } return start
//     }, 0)

// console.log(result)



// var my_array = [1,3,5,2,4];

// let copy = [...my_array]

// my_array.push(3)
// console.log(my_array, copy)

// my_array.map(function(item,index,arr) {
//   console.log("item: " + item + " at index: " + index + " in the array: " + arr);
// });



// // перевод массива в массив из обьектов

// myArr = [10,20,30,40];

// let newArr = myArr.map((val, i, arr) => {
//   return {
//     value: val,
//     index: i
//   };
// });

// console.log(newArr)





// let arr = [1,2,3,4,5,6]

// valuelength = 0;


//     function calc (value) {
//         let arr = String(value).split('')
//         arr.forEach((value, index, array) => {
//             array[index] = Number(value)
//         })
//         let  result1 = arr.reduce((total, value) => total += value)

//         return (result1 < 10 ) ? result1 : calc(result1)

//     }
    //    if (result1 < 10) {
    //     return result1
    //    }
    //     return calc(result1)
    //    }

// console.log(calc(11216))



// let arra = ['avac','1234','4555', '24fegwe']

// const [a,b, ...rest] = arra

// console.log(a,b, rest)



// let obj = {
//     name: 'John',
//     email: 'Ffeef@gmai.com'
// }

// let {email, name} = obj

// console.log(email,name)




// const people = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Michael', lastName: 'Johnson' }
//   ];

// function tast (array) {
//     array.forEach(value => value.firstName === 'Jane' && console.log(array.indexOf(value))
//     )
// }
// tast(people)



// const index = people.findIndex(value => value.firstName === 'Jane')
// console.log(index)



// function summm (array) {
// let sum = 0;
// let result = array.forEach(value => sum += value)
// return sum;
// }

// console.log(summm(arr))


// let total = arr.reduce((total, value) => total += value)
// console.log(total)

// let total2 = arr.reduce((total, value) => {
//     return total += value }, 200)
// console.log(total2)



// let arr = [1,4,5,7,5,4,3,1]


// function bigg (array) {
// let result = []
// array.forEach(value => {
// value > 3 && result.push(value)
// })
// return result
// }

// console.log(bigg(arr))



// const filtered = arr.filter ( item => {
//    return item > 3 
// })

// console.log(filtered)


// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// // get all names that includes Sa


// function filtera (array) {
//    let result =  array.filter(value => value.includes('Sa'))
//    return result
// }

// console.log(filtera(dragons))











// let users = ["eli", "adam", "dan", "john"]


// let newarr = users.map((value) => {
//    return value + '@gmail.com'
// })

// console.log(newarr)


// const people = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Michael', lastName: 'Johnson' }
//   ];


// function newa (array) {
//    let result =  array.map( (value) => {
//         return value.firstName + ', ' + value.lastName
//     })

//     return result
// }

// console.log(newa(people))





// let arrays = [2,5,3,7,2,3,6,8,6]

// let newarr = arrays.map((value) => {
 
//  if (value === 2) {
//     return  value * 2
//  }
// }
// )

// console.log(newarr)





// function (array) {

// }



// find the smallest distance between 2 numbers in array
 // [2,5,3,7,2,3,6,8,6] => 2




// let arrays = [2,5,3,7,2,3,6,8,6]

// let buf = []

// for (i=0; i < array.length; i++) {
//    if (array.indexOf(i) !== array.lastIndexOf(i)) {
//     buf.push(array.lastIndexOf(i) - array.indexOf(i) )
//    }
// }

// console.log(Math.min(...buf))








// let arrays = [2,5,3,7,2,3,6,8,6]

// function arr (array)  {
//     let newarr = []
//     array.forEach(value => newarr.push(value * 2))
//     return newarr
// }
// console.log(arr(arrays))




//  for (value of array) {
//     value = 
//  }




// let values = []


// for (i=0; i < array.length; i ++) {

//     let currentvalue = array[i]

   
    
// }

// for (value of array) {
//     value = currentvalue ? values.push(values) 
//  