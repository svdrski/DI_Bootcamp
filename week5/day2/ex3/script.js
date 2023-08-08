let allBoldItems;

function getBoldItems() {
  let allbold = document.querySelectorAll("strong")
  allBoldItems = allbold;
  console.log(allbold,allBoldItems)
}

getBoldItems()

function highlight() {
  for(i=0;i< allBoldItems.length;i++) {
  allBoldItems[i].style.color = "blue"
  }
}

function returnItemsToDefault(){
  for(i=0;i< allBoldItems.length;i++) {
    allBoldItems[i].style.color = "black"
    }
}

let p = document.querySelector("p")
p.addEventListener("mouseover",highlight )
p.addEventListener("mouseout",returnItemsToDefault )


// highlight()
// returnItemsToDefault()