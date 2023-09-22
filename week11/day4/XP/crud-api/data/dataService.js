import axios from 'axios'
export function fetchPosts(link) {
    
        axios.get(link)
        .then(a => console.log(a, 'data has been successfully retrieved'))
        .catch (e => console.log('Not found'))
}

