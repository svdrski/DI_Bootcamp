import { v4 as uuidv4 } from 'uuid';

import data from '../data.json'


export default function PostList () {


console.log(data)


    console.log()
    return(
       data.map(item => (
        <div key={uuidv4()}>
        <h1 key={uuidv4()}>{item.title}</h1>
        <p key={uuidv4()}>{item.content}</p>
        </div>
       ))
    )
}