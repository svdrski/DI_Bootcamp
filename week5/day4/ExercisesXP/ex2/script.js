let margin = 0;



function myMove () {
    let anime = setInterval(function(){
        let ins = document.getElementById("animate")
    
        ins.style.marginLeft = `${margin}px`
        margin++
    
        if (margin >= 350) {
            stop(anime)
        }
    }, 1)
    
    function stop(value) { 
        clearTimeout(value)
    }
}



