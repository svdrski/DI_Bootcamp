let array = [
    {id: 0, like: 0, author: 'Alice', quote: "The only way to do great work is to love what you do."},
    {id: 1, like: 0, author: 'Bob', quote: "In three words I can sum up everything I've learned about life: it goes on."},
    {id: 2, like: 0, author: 'Charlie', quote: "Life is what happens when you're busy making other plans."},
    {id: 3, like: 0, author: 'David', quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."},
    {id: 4, like: 0, author: 'Emma', quote: "The future belongs to those who believe in the beauty of their dreams."},
    {id: 5, like: 0, author: 'Frank', quote: "Strive not to be a success, but rather to be of value."},
    {id: 6, like: 0, author: 'Grace', quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."},
    {id: 7, like: 0, author: 'Henry', quote: "The only thing we have to fear is fear itself."},
    {id: 8, like: 0, author: 'Isabel', quote: "Don't judge each day by the harvest you reap but by the seeds that you plant."},
    {id: 9, like: 0, author: 'Jack', quote: "The best way to predict the future is to create it."},
    {id: 10, like: 0, author: 'Grace', quote: "when you're busy making other"},
    {id: 11, like: 0, author: 'Grace', quote: "things are infinite"},
    {id: 12, like: 0, author: 'Grace', quote: "universe and human stupidity;"}

]

let activequote = Number;
let button = document.getElementById('Generate_Quote')
let section = document.getElementById('section')
let p = document.getElementById('p')


function random () {
   let random =  Math.floor(Math.random() * array.length)
   return random
}

let oldrandom = Number;

let generate = function() {
let newrandom = random()
activequote = newrandom
console.log(newrandom)
p.textContent = array[newrandom != oldrandom ? newrandom : newrandom + 1].quote
oldrandom = newrandom
pcharwithspace.textContent = ''
pcharwithoutspace.textContent = ''
pnum_words.textContent = ''
plike.textContent = ''
}

button.addEventListener('click', generate );

///////////2.1

let Quoteinput = document.getElementById('Quoteinput')
let Authorinput = document.getElementById('Authorinput')
let sendform = document.getElementById('sendform')
function addnewQuote (event) {
event.preventDefault();
Quoteinput.value != '' && Authorinput.value != '' ? array.push({id: array.length, like:0, author: Authorinput.value, quote: Quoteinput.value}) : alert('add values')
console.log(array)
}
console.log(array)
sendform.addEventListener('click', addnewQuote);


////////////2.2

let pcharwithspace = document.getElementById('pcharwithspace')
let charwithspace = document.getElementById('charwithspace')
let pcharwithoutspace = document.getElementById('pcharwithoutspace')
let charwithoutspace = document.getElementById('charwithoutspace')
let pnum_words = document.getElementById('pnum_words')
let num_words = document.getElementById('num_words')
let plike = document.getElementById('plike')
let Like = document.getElementById('Like')

// with spaces
charwithspace.addEventListener('click', func1)
function func1 () {
    pcharwithspace.textContent = array[activequote].quote.length
}
// withot spaces
charwithoutspace.addEventListener('click', func2)
function func2 () {
    pcharwithoutspace.textContent = array[activequote].quote.replace(/\s/g, "").length
}
// number of words
num_words.addEventListener('click', func3)
function func3 () {
  let buffer =   array[activequote].quote.split(" ")
    pnum_words.textContent = buffer.length
}

// Likes
Like.addEventListener('click', func4)
function func4 () {
  array[activequote].like += 1
  plike.textContent = array[activequote].like
}



///////////////3

const searchbox = document.getElementById('search');
const bsearch = document.getElementById('bsearch');
const searchresult = document.getElementById('searchresult')
const Previous = document.getElementById('Previous')
const Next = document.getElementById('Next')

bsearch.addEventListener('click', search);
let currentindex = 0;
let result = [];

function search (event) {
  result =[]
  event.preventDefault()
  let object = searchbox.value
  array.forEach((value) => {
   value.author === object && result.push(value.id)
  })
print()
}

///next
Next.addEventListener('click', funcnext);
function funcnext () {
 result.length - 1 > currentindex ? currentindex += 1 : console.log('it was last')
  console.log(result.length, currentindex)
  print()
}

//previous
Previous.addEventListener('click', funcPrevious);
function funcPrevious () {
  currentindex > 0  ? currentindex -= 1 : console.log('it was last')
  console.log(result.length, currentindex)
  print()
}

//add to the page
function print () {
  let output = ` ${array[result[currentindex]].quote} <br> <span style="color: aquamarine;"> ${array[result[currentindex]].author} </span><br> <br>`
  searchresult.innerHTML = output
}




//3.1
//  for( value of array ) {
//   if (result.includes(value.id)) {output += `${value.quote}  <br>
//  <span style="color: aquamarine;"> ${value.author} </span>
//  <br> <br>`}
// }







