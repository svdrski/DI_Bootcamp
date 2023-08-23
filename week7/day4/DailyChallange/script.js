let client = "Betty";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


let displayGroceries = () => groceries.fruits.forEach(i => console.log(i))
displayGroceries ()

let cloneGroceries =  () => {
   let user = client
   user = "alex"
   let shopping = groceries
   shopping.totalPrice = "$35"
   shopping.other.paid = false
   console.log(groceries)
   console.log(shopping)
}

//1  yes because we dont change user, and user
//equals to client. if we change user to alex, user
//will be alex and client will be betty, and because of Pass By Value

//2  yes because Pass By Reference. we change one object in memory.
// just get it by diffrent links (groceries and shopping )

cloneGroceries()