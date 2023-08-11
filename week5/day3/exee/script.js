// // setTimeout

// const settimeoutID = setTimeout(function() {
//     changeb()
//     alert("hello")
// }, 1000 * 2)

// function changeb() {
//     document.body.style.background = "black"
// }


// // Останавливает отсчет и ничего не происходит
// function stop() { 
//     clearTimeout(settimeoutID)
//     clearTimeout(cou2)

// }


// let val = 0
// // setInterval

// let cou2 = setInterval (function() {

//     console.log("suk" + val)
//     val++
// }, 1000)

let margin = 0;
let anime = setInterval(function(){
    let ins = document.getElementById("inner")

    ins.style.marginLeft = `${margin}px`
    ins.style.marginTop = `${margin}px`
    margin++

    if (margin === 350) {
        stop(anime)
    }

}, 5)



function stop(value) { 
    clearTimeout(value)
}



