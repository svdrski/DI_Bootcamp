let form = document.getElementById("libform")
form.addEventListener("submit", Libit)


function Libit(e) {
e.preventDefault()
let noun = document.getElementById("noun").value
let adjective = document.getElementById("adjective").value
let person = document.getElementById("person").value
let verb = document.getElementById("verb").value
let place = document.getElementById("place").value

let  story = [`
Once upon a time in a faraway land, there lived a curious ${noun} named ${person}. One day, ${person}
decided to embark on a(n) ${adjective} adventure. They packed their bag with essentials and set off to ${place}.

As they journeyed through ${place}, they encountered many strange creatures and witnessed breathtaking views.
 Along the way, ${person} had to ${verb} to overcome obstacles and reach their destination. The adventure was 
 both exciting and challenging, but ${person} persevered with determination.

After days of exploration, ${person} finally returned home with unforgettable memories and a
heart full of courage. Their ${adjective} adventure had taught them valuable lessons about themselves and the world around them.
`,


`
In a hidden corner of ${place}, there bloomed a magical ${noun} garden. The garden was known for its ${adjective}
flowers that could ${verb} anyone who came near. Legend had it that only a brave soul named ${person}
 could enter the garden unharmed.

One sunny morning, ${person} decided to visit the enchanting garden. With cautious steps, they entered 
the garden and marveled at the ${adjective} blossoms. As they walked among the flowers, ${person} felt a
 sense of tranquility and wonder.

Suddenly, a mischievous creature appeared and challenged ${person} to a ${verb}-off.
 With determination, ${person} ${verb} their way to victory, earning the creature's 
 respect and friendship. The garden's magic recognized ${person} as a true friend, and 
 the flowers bloomed brighter than ever before.
`,

`
In a land of ${adjective} landscapes and endless possibilities, a group of brave adventurers, 
including ${person}, set out on a great quest. Their mission was to retrieve a 
legendary ${noun} hidden deep within ${place}.

As they journeyed through forests, crossed rivers, and climbed mountains, the adventurers

 faced countless challenges. ${person} showcased their exceptional ${adjective} 
 skills by ${verb} whenever their companions needed help. The group's bond grew stronger with every obstacle they overcame.

Finally, after weeks of arduous travel, the adventurers reached their destination. With a 
united effort, they unlocked the secrets of the hidden ${noun} and brought it back to their
 kingdom. The ${noun}'s power brought prosperity to the land, and ${person} became 
 a legendary hero whose name would be remembered for generations.

Feel free to use these stories for your Mad Libs game, replacing the placeholders with the 
provided parameters. Enjoy the creative and entertaining game!
`
]
let storycount = 0;

//shuffle
let shuffle = document.getElementById("shuffle")
shuffle.addEventListener("click", change)

function change () {
  let newp = document.createElement("p")
  document.body.lastChild.remove()
  newp.textContent = story[storycount]
  document.body.append(newp)
  storycount === 2 ? storycount = 0 : storycount++

}

//print story

if ((noun && adjective && person && verb && place) !== "" ) {
  let newp = document.createElement("p")
  newp.textContent = story[storycount]
  document.body.append(newp)
  }
  
  storycount === 2 ? storycount = 0 : storycount++

}

