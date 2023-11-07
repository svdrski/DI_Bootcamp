import { createContext, useState } from "react";
import AuthStatus from "./Components/AuthStatus";

export const CheckLog = createContext()

export default function App (){

const [user, setUser] = useState({name: "Loh", email:''})

return(
  <CheckLog.Provider value={{user, setUser}}>
    <AuthStatus/>
  </CheckLog.Provider>
)

}










// import { createContext, useState } from "react"
// import ThemeSwitcher from "./ThemeSwitcher"

// export const Switcher = createContext()
// export default function App (){


//   const [theme, setTheme] = useState('white')
  

//   return(
//       <>
//       <Switcher.Provider value={{theme, setTheme}}>
//         <ThemeSwitcher/>
//       </Switcher.Provider>
//       </>
//   )
// }











// import { createContext, useContext, useState } from "react";

// const CountContext = createContext('')


// function Counter (){
//   const {count, setCount} = useContext(CountContext)

//   return(
//     <>
//     <p>{count}</p>
//     <button onClick={()=>{setCount(count + 1)}}>ADD</button>
//     </>

//   )
// }



// export default function App (){
  
//   const [count, setCount] = useState(0)

//   return(
//     <CountContext.Provider value={{count, setCount}}>
//       <Counter/>
//     </CountContext.Provider>
//   )
// }






















// import React, { createContext, useState } from 'react'
// import Count from './Components/Count'

// export const MyContext = createContext()

// function App (){

//   const [count, setCount] = useState(0)

//   function plus (){
//     setCount(count + 1)
//   }


//   return(
//     <MyContext.Provider value={{count, plus}}>
//       <Count/>
//     </MyContext.Provider>
//   )
// }



// export default App












// import React from 'react'
// import { createContext } from 'react'
// import First from './Components/First'

// export const HlebContext = createContext('NO PROVIDER')

// export default function App () {



//   return(

//     <HlebContext.Provider value='HLEB NAME'>
//       <First/>
//     </HlebContext.Provider>

//   )
// }
















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