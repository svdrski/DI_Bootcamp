

function changeEnough(itemPrice, amountOfChange) {

    let cashAmount =
    (amountOfChange[0] * 0.25) + 
    (amountOfChange[1] * 0.10) + 
    (amountOfChange[2] * 0.05) + 
    (amountOfChange[3] * 0.01)


    if (itemPrice < cashAmount ) {
  //      console.log("true")
        return true
        
    }

    else {
   //     console.log("false")
        return false
    }
}

changeEnough(4.25, [25, 20, 5, 0])

changeEnough(14.11, [2,100,0,0]);

changeEnough(0.75, [0,0,20,5])
