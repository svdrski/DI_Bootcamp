let projectsblock = document.getElementById('projectsblock')
let allbtns =  document.querySelectorAll('.selectors')

let projects = [
    {
        id: 1,
        photourl: 'img/original-854fd5984ae4e95cb0be7c472e8cc872.png',
        type: 'finance'
    },
    {
        id: 2,
        photourl: 'img/original-d177605c69994d3e3a80683cec84bc27.jpeg',
        type: 'sport'
    },
    {
        id: 3,
        photourl: 'img/8d045d7b556b599bab6550518db05ab9.png',
        type: 'finance'
    },
    {
        id: 4,
        photourl: 'img/dbe7a9fe54d0cd002013260ae590d57e.png',
        type: 'sport'
    },
    {
        id: 5,
        photourl: 'img/cissokho_drbbb.jpeg',
        type: 'sport'
    },
    {
        id: 6,
        photourl: 'img/original-45308ea4143bdf427755eab762497de1.png',
        type: 'finance'
    },
]


/// render


function render(object, type) {
    projectsblock.innerHTML = ''
    object.forEach(item => {
        let block = document.createElement('div')
        block.classList.add('projblock',item.type)
        block.style.display = `${item.type === type || type === 'all' ? 'block' : 'none'}`
        block.setAttribute('id', item.id)
        block.style.backgroundImage = `url(${item.photourl})`
        projectsblock.appendChild(block)
    })

    /// coloring buttons
    allbtns.forEach(item =>{
        item.style.backgroundColor = '#f7f7f7'
        item.style.color = '#464646'
    })
    this.event.target.style.backgroundColor = '#7736f0'
    this.event.target.style.color = '#fff'
    
}

render(projects, 'all')

