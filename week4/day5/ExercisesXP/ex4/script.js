let allBooks = [
{   title: "Book1",
    author: "Alex Fas",
    image : "https://img4.labirint.ru/rc/2a24f1f5b4ccff354a76c998a2712bb7/363x561q80/books87/864366/cover.jpg?1669703102",
    alreadyRead: true
},
{
    title: "HarryPotter",
    author: "JKRolling",
    image : "https://images.thevoicemag.ru/upload/img_cache/231/231aeab78d408b3fd9092bf0c6f4b6a4_cropped_490x735.jpg",
    alreadyRead: false
    }

]

let table = document.createElement("table")
document.querySelector(".listBooks").append(table)

for(i=0;i < allBooks.length; i++){
 let newbook = document.createElement("tr") 
 newbook.innerHTML =`
      <td>${allBooks[i].title} written by ${allBooks[i].author}</td>
      <td> <img class="imagg" src="${allBooks[i].image}"</td>
      <td>${allBooks[i].alreadyRead}</td>
    `
    document.querySelector("table").append(newbook)

    console.log(allBooks[i].alreadyRead)
    let colorcheck = document.querySelectorAll("tr")[i].lastElementChild
    allBooks[i].alreadyRead ? colorcheck.style.color = "green" : colorcheck.style.color = "red";

}

let newstyle = document.querySelectorAll(".imagg")

newstyle.forEach(function(elem) {
elem.style.width = "100px"
})


// if   для if else

// условие ? значение_если_истина : значение_если_ложь;
