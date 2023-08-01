function calculateTip() {

   let bill =  Number(prompt("amount of the bill"));
   let tip = 0;

   if (bill < 50) {
    tipvalue = 20 ;
   } else if (bill >=50 && bill <=200) {
    tipvalue = 15 ;
   } else if (bill > 200) {
    tipvalue = 10 ;
   }
   tip = (bill * tipvalue) / 100 ;

   console.log(`tip is ${tip} and final bill is ${bill + tip}`)


}

calculateTip() 


