import { createContext, useContext, useState } from "react";
const DynamicContext = createContext()


function DynamicContextProvider ({children}){
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
      };
    
}


export default DynamicContext