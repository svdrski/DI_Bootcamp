const arr = [
  {id:1, name:'iPhone', price:850},
  {id:2, name:'iPad', price:750},
  {id:3, name:'iWatch', price:650}
];

let newaa = arr.forEach((value) => {
  console.log( `id is ${value.id} name is ${value.name} price is ${value.price}` )
})

const words = ["wow","hey","bye"];


let checl = words.some((value) => value[0] === 'h' )

console.log(checl)

