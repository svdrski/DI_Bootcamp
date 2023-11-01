import data from '../ex3data.json'
import { v4 as uuidv4 } from 'uuid';


export default function Example3 () {


console.log(data)


    console.log()
    return(
        
       data.Experiences.map(item => (
        <div key={uuidv4()} id='block'>
            <img src={item.logo}/>
            <a href={item.url}>{item.companyName}</a>
            <h3>{item.roles[0].title}</h3>
            <div key='key2'>
                <span >{item.roles[0].startDate}   </span>
                <span >{item.roles[0].location}</span>
            </div>
            <p>{item.roles[0].description}</p>
        </div>
        ))
        
    )
}