import data from '../ex3data.json'
import { v4 as uuidv4 } from 'uuid';


export default function Example2 () {

    return(
        <>
        {data.Skills.map(x => (
            <div key={uuidv4()}>
                <h3>{x.Area}</h3>
                <ul>
                    {x.SkillSet.map(item => (
                        <li key={uuidv4()}>{item.Name}</li>
                    ))}
                </ul>
           </div>
        ))}
        </>
        
    )
}