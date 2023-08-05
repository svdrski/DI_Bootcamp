let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

let satellites = [
  { Name: "Mercury",
    Quant: 0
  },
  { Name: "Venus",
    Quant: 0
  },
  { Name: "Earth",
    Quant: 1
  },
  { Name: "Mars",
    Quant: 2
  },
  { Name: "Jupiter",
    Quant: 95
  },
  { Name: "Saturn",
    Quant: 145
  },
  { Name: "Uranus",
    Quant: 27
  },
  { Name: "Neptune",
    Quant: 14
  },
]

let sectn = document.createElement("section")
document.body.append(sectn)
for (i =0; i < satellites.length; i++) {
let newdiv = document.createElement("div")
sectn.append(newdiv);
document.querySelector("section").children[i].setAttribute("class","planet" )
let planetclass = "planet"+ (1 + i)
newdiv.classList.add(planetclass)
let qu = 0;
satellites[i].Quant > 5 ?  qu = 5  :  qu = satellites[i].Quant 
for (a=0;a < qu; a++) {
  let satls = document.createElement("div")
  newdiv.append(satls)
  satls.classList.add("sattleee")
}
let qudisp = Number
 satellites[i].Quant > 5 ?  qudisp = ` + ${satellites[i].Quant - 5} `:  qudisp = ""
 console.log(qudisp)
let plusquant = document.createTextNode (qudisp)
satellites[i].Quant > 0 ? newdiv.append(plusquant) : newdiv.append("")
newdiv.append(satellites[i].Name)
}
