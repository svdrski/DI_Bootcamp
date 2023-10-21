const key = localStorage.getItem('key')
if(!key) {window.location.href = '/login'}
// console.log(key)




async function printMyRooms(){

   let data = await fetch('/myrooms',{
        method: 'POST',
        headers: {
            'Authorization': `${key}`,
            'Accept': 'application/json'}
    })

    data = await data.json()


    for (item of data) {

            const response = await fetch(`/roomdata/${item.id}`)
            const roomdata = await response.json()
            console.log(roomdata)
    
            const coords = {lat: parseFloat(roomdata.room.attitude), lng: parseFloat(roomdata.room.longitude)}
    
            console.log(roomdata)
            const room = document.createElement('div')
            room.setAttribute('id', 'roomcard')
            room.innerHTML = `
            <a class='blockhref' target='blanc'  href="/room/${item.id}">
            <img class="cardimg" src="${roomdata.photos[0].url}">
            <div class='cardinf df'>
                <div class='cardline'>
                    <img class="profavatar" src="${roomdata.profileimg[0].url}">
                    <p class='cardname'>${roomdata.room.name}, ${roomdata.room.age}</p>
                </div>
    
                <div class='cardline cardpers'>
                     <img class="pers" src="/static/person.svg">
                     <p class='cardname mcard'>${roomdata.room.people_in_household}</p>
                </div>
            </div>
    
            <div class='secondline'>
            <p class='pricecard'>₪${roomdata.room.rate}</p>
            <p class='roomtype'>${roomdata.room.type}</p>
            <img class="checkin" src="/static/checkin.svg">
            <p class='roomtype fs14'>${roomdata.room.availability}</p>
    
            </div>
            `
        
            document.getElementById('rommscontent').appendChild(room)
    
  
    
    }







}

printMyRooms()


// .then (a => a.json()).then(a => {
//     console.log(a)

// })