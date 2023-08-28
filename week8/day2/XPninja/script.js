const menu = [
  {
    type : "starter",
    name : "Houmous with Pita"
  },
  {
    type : "starter",
    name : "Vegetable Soup with Houmous peas"
  },
  {
    type : "dessert",
    name : "Chocolate Cake"
  }
]

////// 1
let check =  menu.some(item =>  item.type === 'dessert')
console.log(check)

///////2
let allstarters = menu.every(item => item.type ==='starter')
console.log(allstarters)

////////3
let maincheck = menu.some( (item) => item.type === 'main course' )

maincheck ? console.log('main course') : menu.push({
  type : "main course",
  name : "Pizza"
})



//////////////////////

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

for (const bludo of menu) {
  bludo.vegetarian = false
  vegetarian.forEach( (value) =>  {if (bludo.name.toLocaleLowerCase().includes(value)) {bludo.vegetarian = true}}  )
  }

  console.log(menu)





//////////// Exercise 2

function string_chop (string, number) {
  let result = []
  let newstring = string;
  for(i=0; i< string.length; i+=number) {
    result.push(newstring.slice(0, number))
    newstring = newstring.substring(number)
     console.log(newstring)
  }
  console.log(result)
}

string_chop ('developers',2)




////////// Exercise 3

function search_word (string, word) {
  let arr = string.split(' ')
  let quant = 0;
  arr.forEach((value)=> value === word && quant++ ) 
  console.log(`${word} was found ${quant} times`)
}

search_word('The quick fox brown fox', 'fox')



////////// Exercise 4

function reverseArray(array) {
  let obj = array.reverse()
  console.log(obj)
}
reverseArray([1,2,3,4,5])
reverseArray([1,2])
reverseArray([1,2,3,4,5,6,7,8,9,10])
