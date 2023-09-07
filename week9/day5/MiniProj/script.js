
let contentbox = document.getElementById('content')
let error = document.getElementById('error')
let metricsbutton = document.getElementById('metricstatus')
metricsbutton.addEventListener('click', a =() =>{console.log(metricsbutton.checked)})

console.log(new Date(1694062290))
// Saver (task 1.3)
let archive = []

/// request in celsium or fareng
let units = 'metric'


// search listener
 document.forms[0].addEventListener('submit', function (event) {
     event.preventDefault()
     console.log(this.elements.search.value)
     error.style.display = "none"
     getcoordinates(this.elements.search.value)
     this.elements.search.value = ''
 })


function getcoordinates (value) {
    let data = new XMLHttpRequest()
    data.open('get', `http://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`)
    data.responseType = 'json'
    data.send()
    let result = data.onload = () => {
        if(data.status === 200 && data.response[0] && data.response[0].lat && data.response[0].lon)  {

 getweather (data.response[0].lat, data.response[0].lon)
        } else  {
            error.style.display = "block"
        }
    }
    console.log(archive)
}

function getweather (lat, lon) {
let weather = new XMLHttpRequest()
    weather.open('get', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`)
    weather.responseType = 'json'
    weather.send()
    weather.onload = () => {
    console.log(weather.response)
        render(weather.response)
        archive.push(weather.response)
    }
}

function render (response) {
    let sunrise = datetranform(new Date(response.sys.sunrise * 1000))
    let sunset = datetranform(new Date(response.sys.sunset * 1000))

    console.log(sunrise,sunset)

    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML =
    `
    <div><h3 class="inline">${response.name}</h3>
    <span class="cntrycode">${response.sys.country}</span>
    <img id="close" onclick="del(event)" src="img/icons8-close-100.svg"></div>
    <div class="flex mt20">
          <span class="temperatura">${Math.floor(response.main.temp)}</span>
          <span class="metric">°C</span>
          <img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">
    </div>
    <p class="wstatus">${response.weather[0].main}</p>
    <p class="wind">Wind speed: ${response.wind.speed}</p>
    <p class="wind mt5">Sunrise: ${sunrise}</p>
     <p class="wind mt5">Sunset: ${sunset}</p>
    `
    contentbox.appendChild(card)
}



/// Change metrics
metricsbutton.addEventListener('click', a =() =>{
    contentbox.innerHTML = ''
    if(metricsbutton.checked) {
        archive.forEach(value => {
            units= 'imperial'
            value.main.temp = (Math.floor(value.main.temp) * 9/5) + 32
            console.log(value.main.temp)
            render(value)
        })
    } else  {
        archive.forEach(value => {
            units = 'metric'
            value.main.temp = (Math.floor(value.main.temp) - 32) * 5/9
            console.log(value.main.temp)
            render(value)
        })
    }

})

//date formatting
function datetranform (date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time = `${hours}:${minutes<10?'0':''}${minutes}`
    return time

}


// auto show  current user location
(function userlocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            getweather(position.coords.latitude, position.coords.longitude)
            console.log("Широта: " + position.coords.latitude + ", Долгота: " + position.coords.longitude);
        });
    } else {
        console.error("location dont work");
    }
})()



/// remove item
function del (event){
event.target.parentElement.parentElement.remove()
}






