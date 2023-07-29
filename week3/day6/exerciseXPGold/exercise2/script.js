let guestList = {
   randy: "Germany",
   karla: "France",
   wendy: "Japan",
   norman: "England",
   sam: "Argentina"
 }

 let askname = prompt("What is your name");

 if ( askname in guestList ) {

   console.log(`Hi! I'm ${askname}, and I'm from ${guestList[askname]}.`)
 } else {
   console.log ("Hi! I'm a guest.");
 }
