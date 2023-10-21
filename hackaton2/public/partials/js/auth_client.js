const key2 = localStorage.getItem('key')
if(!key2) {window.location.href = '/login'}
console.log(key2)


getHeader ()

async function getHeader () {

    let data = await  fetch('/headers',{
        method: 'GET',
        headers: {
            'Authorization': `${key2}`,
            }
    })

    data  = await data.json()

    document.getElementById('profname').innerText = data[0].first_name

}




// .then (a => a.json()).then(a => {
//     console.log(a)

//     document.getElementById('profname').innerText = a[0].first_name
// })








//  fetch(`${currentPage}`, {
//     method: 'GET',
//     headers: {
//         'Authorization': `${key}`,
//         'Accept': 'application/json'}
// });








// const key = localStorage.getItem('key')
// console.log(key)


// if(!key){window.location.href = '/login';}
// if (key && !window.location.search.includes('token')) {
//     const currentPage = window.location.pathname;

//     const linkWithToken = `${currentPage}?token=${key}`;
//     window.location.href = linkWithToken;
// }




// localStorage.clear()




