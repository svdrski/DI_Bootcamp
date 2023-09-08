function  formatDate (value ){
    let year = value.getFullYear();
    let month = value.getMonth();
    let day = value.getDate();
    let hours = value.getHours();
    let minutes = value.getMinutes();
    let seconds = value.getSeconds();
    let result = `${year}${month+1<10 ?'0':''}${month + 1}${day<10 ?'0':''}${day}${hours<10 ?'0':''}${hours}${minutes<10 ?'0':''}${minutes}${seconds<10 ?'0':''}${seconds}`
    console.log(result)
}

formatDate(new Date(2020, 6, 4, 8, 0, 0))
formatDate(new Date(2019, 11, 31, 23, 59, 59))
formatDate(new Date(2020, 6, 4))



function  formatDate2 (value ){
    let year = value.getFullYear();
    let month = String(value.getMonth() + 1).padStart(2,'0');
    let day = String(value.getDate()).padStart(2,'0');
    let hours = String(value.getHours()).padStart(2,'0');
    let minutes = String(value.getMinutes()).padStart(2,'0');
    let seconds = String(value.getSeconds()).padStart(2,'0');
    let result = `${year}${month}${day}${hours}${minutes}${seconds}`
    console.log(result)
}

formatDate2(new Date(2020, 6, 4, 8, 0, 0))
formatDate2(new Date(2019, 11, 31, 23, 59, 59))
formatDate2(new Date(2020, 6, 4))

