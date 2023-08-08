let block = document.getElementById("vi")

block.addEventListener("click", border)
function border(){
  block.style.border = "20px solid black"
}

block.addEventListener("mouseover", width)
function width(){
  block.style.width = "400px"
  document.querySelector("h2").style.display = "block"
  document.querySelector("h1").style.display = "none"
  document.querySelector("body").style.background = 'red'
}

block.addEventListener("mousemove", addt)
function addt(){
  let p = document.createElement("p")
  p.textContent = "@"
  block.append(p)
 
}

block.addEventListener("mouseout", height)
function height(){
  block.style.height = "100px"
}

block.addEventListener("dblclick", back)
function back(){
  block.style.width = "500px"
  block.style.height = "500px"
  block.style.border = "none "
  while (block.firstChild) {
    block.removeChild(block.firstChild);
}

}


