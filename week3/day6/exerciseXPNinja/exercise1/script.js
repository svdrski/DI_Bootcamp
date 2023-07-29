let obj1 = {
FullName: "Hleb",
Mass: 100,
Height: 1.90,
IMT: function () {
return this.Mass / (this.Height * this.Height)
}
}

let obj2 = {
   FullName: "Lev",
   Mass: 80,
   Height: 1.20,
   IMT: function () {
   return this.Mass / (this.Height * this.Height)
   }
}


function largest () {
if (obj1.IMT() - obj2.IMT() < 0 ) {
   return obj2.FullName
} else {
   return obj1.FullName
}
}


console.log(`Owner of largest Bmi is ${largest()}`)
