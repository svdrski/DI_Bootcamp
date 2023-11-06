
import React from 'react'
import { createContext } from 'react'
import First from './Components/First'

export const HlebContext = createContext('NO PROVIDER')

export default function App () {



  return(

    <HlebContext.Provider value='HLEB NAME'>
      <First/>
    </HlebContext.Provider>

  )
}
















// import React from 'react'
// import Counter from './Counter'
// import { CounterProvider } from './CounterContext'


// export default function App () {

//   return(
//     <CounterProvider>
//       <div>
//         <Counter/>
//       </div>
//     </CounterProvider>
//   )
// }




























// import { useReducer, createContext } from "react";
// import Counter from "./Counter";

// export const CounterContext = createContext()

// const initialState = 0


// const countReducer = (state, action) =>{
//   switch(action.type){
//     case 'Increment':
//       return{count: state.count + 1}
//     case 'Decrement' :
//       return {count: state.count - 1}
//     default: return {state}
//   }
// }


// export default function App (){

//   const [state, dispatch] = useReducer(countReducer, initialState)


//   return (

//     <CounterContext.Provider value={{state, dispatch}}>
//     <Counter/>
//     </CounterContext.Provider>

//   )
// }