import axios from 'axios'
export  const news = () => {
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=47be728585e54afcb71e2816f0096f3c')
.then(a => console.log(a.data.articles[0]))
}

