function createmap ( lats, lngs) {

const  coordinates = {lat: lats, lng: lngs}
const map = new google.maps.Map(document.getElementById('maproom'), {
    center: coordinates,
    zoom:12,
    disableDefaultUI: true,
})

new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: '/static/mappin.svg'
});
}


