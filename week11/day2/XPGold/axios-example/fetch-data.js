const axios = require ('axios')
const getdata = () =>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
.then(result => {
    for (let a of result.data) {
        console.log(a.title)
    }
})
}

module.exports = getdata