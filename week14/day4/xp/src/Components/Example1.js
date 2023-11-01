import data from '../ex3data.json'
import { v4 as uuidv4 } from 'uuid';


export default function Example1 () {


console.log(data)


    console.log()
    return(
        <ul>
        {data.SocialMedias.map(x => (
            <li key={uuidv4()}>{x}</li>
        ))}
        </ul>

    )
}