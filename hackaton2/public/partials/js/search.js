const  coordinates = {lat: 32.0853, lng: 34.781768}

    const map = new google.maps.Map(document.getElementById('mapblock'), {
        center: coordinates,
        zoom:12,
        disableDefaultUI: true,
    })

    const infoWindows = [];
    const markers = []
    
    function createpin(coordinates, content){
        const marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: '/static/mappin.svg'
        });

        const infoWindow = new google.maps.InfoWindow({
            content
        });

        marker.addListener("click", () => {
            infoWindows.forEach((iw) => {
                iw.close();
            });
    
            infoWindow.open(map, marker);
            infoWindows.push(infoWindow);
        });

        markers.push(marker)
    
        
    }

   
    





const getlist = async () => {
    const response = await fetch ('/search/getlist')
    const idList = await response.json()

    for(id of idList) {
        const response = await fetch(`/roomdata/${id.id}`)
        const roomdata = await response.json()

        const coords = {lat: parseFloat(roomdata.room.attitude), lng: parseFloat(roomdata.room.longitude)}

        console.log(roomdata)
        const room = document.createElement('div')
        room.setAttribute('id', 'roomcard')
        room.innerHTML = `
        <a class='blockhref' target='blanc'  href="/room/${id.id}">
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
    
        document.getElementById('contents').appendChild(room)

        const content = `
        <a class='blockhref' target='blanc'  href="/room/${id.id}">
        <div>
        <img class="cardimg" src="${roomdata.photos[0].url}">
        <div class='dfc'>
        <p class='pricecard scard'>₪${roomdata.room.rate}</p>
        <p class='roomtype scard'>${roomdata.room.type}</p>
        </div>
        </div>
        </a>
        
        `
        const marker = createpin(coords, content)

        room.addEventListener('mouseover', () => {
            map.setCenter(coords);
        });

        

    }

   
}
getlist()

