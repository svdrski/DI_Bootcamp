const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
  }
  ];


let input = document.getElementById('input')
let container = document.getElementById('container')

print(robots)


input.addEventListener('keydown', output)

function output (e) {
  container.innerHTML = ''
  let searchvalue = this.value
  let array = []

  let filtered = robots.filter(value => {
    return value.name.toLowerCase().includes(searchvalue.toLowerCase())
  })
  array.push(filtered)
  print(filtered)
}


  // robots.forEach(value => {
  //   if (value.name.toLowerCase().includes(searchvalue.toLowerCase())){
  //     array.push(value)
  //   }
  // })


function print (value) {
  value.forEach((value, index) => {
    let div = document.createElement('div')
    div.setAttribute('id', index)
    div.classList.add('robot')
    let img = document.createElement('img')
    img.classList.add('image')
    img.style.backgroundImage = `url(${value.image})`
    let name = document.createElement('p')
    name.classList.add('name')
    name.textContent = value.name
    let mail = document.createElement('a')
    mail.textContent = value.email
    div.appendChild(img)
    div.appendChild(name)
    div.appendChild(mail)
    container.appendChild(div)

  })
}

