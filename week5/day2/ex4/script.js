let form = document.forms[0]

form.addEventListener("submit", calc) 

function calc (a) {
  a.preventDefault()
  let radius = document.getElementById("radius").value
  let volum = document.getElementById("volume")
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volum.value = volume
}