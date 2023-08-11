let btn = document.getElementById("btn")
let div = document.getElementById("data")

btn.addEventListener("click", function(position){

        navigator.geolocation.getCurrentPosition(function (position) {
            data.textContent = `Latitude: ${position.coords.latitude}   Longitude: ${position.coords.longitude}`
          });

})


// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       console.log("Latitude:", latitude);
//       console.log("Longitude:", longitude);
//     });
//   } else {
//     console.log("Geolocation is not available.");
//   }