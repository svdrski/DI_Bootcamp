function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 32.0853, lng: 34.781768 },
    zoom: 13,
    language: "en",
    mapTypeId: "roadmap",
    disableDefaultUI: true,
  });
  // Create the search box and link it to the UI element.
  const input = document.getElementById("pacinput");
  const searchBox = new google.maps.places.SearchBox(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];

  // Function to add a marker at a location
  function addMarker(location) {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: '/static/mappin.svg'
    });
    markers.push(marker);
  }

  // Function to clear all markers from the map
  function clearMarkers() {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
  }

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }

    // Clear out the old markers.
    clearMarkers();
    
    // For each place, get the icon, name, and location.
    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      // Create a marker for each place.
      addMarker(place.geometry.location);
//      setlocation(place.geometry.location);
      

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
    
  });

map.addListener('click', function(event) {
    // При клике на карту, получаем координаты точки
    const clickedLocation = event.latLng;

    // Создаем геокодер для преобразования координат в адрес
    const geocoder = new google.maps.Geocoder();

    // Выполняем геокодирование
    geocoder.geocode({ location: clickedLocation }, function(results, status) {
        if (status === 'OK') {
            if (results[0]) {
                const address = results[0].formatted_address;

                input.value = address;
                
                console.log(results[0])

                clearMarkers()
                addMarker(clickedLocation)
//                setlocation(clickedLocation)

                // Создаем событие "places_changed" и диспатчим его на элементе input
                const event = new Event('places_changed', {
                    bubbles: true,
                    cancelable: true,
                });
                input.dispatchEvent(event);
            } else {alert('Адрес не найден.');}
             } else { alert('Ошибка геокодирования: ' + status);}
    });
});
//
//
//function setlocation(location) {
//  input.setAttribute('location', JSON.stringify(location))
//}
  
  const geocoder = new google.maps.Geocoder();

document.forms[0].addEventListener('submit', async (e)=>{
  e.preventDefault()
  let data = new FormData(e.target)
  data = Object.fromEntries(data)
  
  /// create array of comforts and send as array
  const comfort = []
  const comforts = ['Conditioning', 'Storage', 'Laundry', 'Dishwasher', 'Pool', 'Bathroom', 'Parking', 'Elevator', 'Entrance']
  for (a in data) {
    if(comforts.includes(a)){
      comfort.push(a)
      delete data[a]}
  }
  data.comforts = comfort
  
  console.log(data)
  
  /// send location data as array with all information
  await geocoder.geocode({ address: data.address }, function  (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results.length > 0) {
        data.address = results[0]
      }
    } else {console.error("Error: " + status); }
  });

  const response = await fetch('/add/room', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(data)
  })
})


}

window.initAutocomplete = initAutocomplete;
