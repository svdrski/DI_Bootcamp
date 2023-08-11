let boom = document.getElementById("boom")
let clap = document.getElementById("clap")
let hihat = document.getElementById("hihat")
let kick = document.getElementById("kick")
let openhat = document.getElementById("openhat")
let ride = document.getElementById("ride")
let snare = document.getElementById("snare")
let tink = document.getElementById("tink")
let tom = document.getElementById("tom")

document.addEventListener("keydown", play)

function play (event){
  const key = event.key;

  switch (key) {
    case "a":
      boom.currentTime = 0;
       boom.play()
      break;
    case "s":
      clap.currentTime = 0;
      clap.play();
      break;

    case "d":
      hihat.currentTime = 0;
      hihat.play()
      break;
    case "f":
      kick.currentTime = 0;
      kick.play();
      break;

    case "g":
      openhat.currentTime = 0;
      openhat.play()
      break;
    case "h":
      ride.currentTime = 0;
      ride.play();
      break;

      case "j":
        snare.currentTime = 0;
        snare.play();
        break;
  
      case "k":
        tink.currentTime = 0;
        tink.play()
        break;
      case "l":
        tom.currentTime = 0;
        tom.play();
        break;

    

    default:
      break;
  }
}


 
