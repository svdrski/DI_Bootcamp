let bill = document.getElementById("billamt")
let serviceq = document.getElementById("serviceQual")
let people = document.getElementById("peopleamt")

function calculateTip() {
    let billAmount = bill.value
    let serviceQuality = serviceq.value
    let numberOfPeople = people.value
    console.log(billAmount,serviceQuality,numberOfPeople)
    if (serviceQuality === 0 || billAmount === "") {
        alert("Enter How was your service and your bill")
    } else if (numberOfPeople === "" || numberOfPeople <1){
        numberOfPeople = 1
    }
    let total = ( billAmount * serviceQuality ) / numberOfPeople
    total = total.toFixed(2)
    let totaltip = document.getElementById("totalTip")
    totaltip.style.display = "block"
    let tip = document.getElementById("tip")
    tip.innerText = total
}

