import React, { useReducer, useState } from 'react'



function control (cart, data){
switch (data.func) {
  case "ADD" :
    return [...cart, {id:cart.length, title: data.title, price: data.price}]
}
}




export default function App() {

  // const [total, setTotal] = useState()
  const [cart, dispatch] = useReducer(control, [])


  return(
    <>
    <h1>Total {cart.reduce((acc, val)=> acc + val.price, 0)}</h1>
    <button onClick={()=>{dispatch({func:"ADD", title:"Iphone", price: 222})}}>ADD</button>
    {cart.map(item=>(
      <li>
      <p>{item.title}</p>
       <p>Price {item.price}</p>
      </li>
    ))}
    </>
  )

}





// function controller (state, action) {
// switch(action.func) {
// case 'ADD' :
//   return  [...state, {id: state.length, title: action.title, done: false} ]

//   case 'UPDATE' :
//   return state.map(task => {
//       return task.id === action.id ? {...task, done: !task.done} : task
//      })
//   case "DELETE" :
//     return state.filter(task => task.id !== action.id)

//   default: return state
// }

// }





// export default function App() {


//   const [todos, dispatch] = useReducer(controller, [])


//   return(
//     <>
//     <input onKeyDown={(e)=>{
//       if(e.key === 'Enter'){
//         dispatch({func:'ADD', title: e.target.value})
//       }
//     }}/>
//     <ul>
//     {todos.map(task => (
//       <li>
//       <input type='checkbox' checked={task.done} onChange={()=>{dispatch({func:"UPDATE", id:task.id})}}/>
//       <p>{task.title}</p>
//       <button onClick={()=>{dispatch({func:"DELETE", id:task.id})}}>delete</button>
//       </li>
//     ))}
//     </ul>

//     </>
//   )
// }

























// function Counter(state, action) {
// switch(action) {
//   case "+" :
//     return state += 1
//   case "-" :
//     return state -= 1

//   default : return state
// }
// }


// export default function App () {

//   const [count, dispatch] = useReducer(Counter, 0)

//   return(
//     <>
//     <p>{count}</p>
//     <button onClick={()=>{dispatch("+")}}>PLUS</button>
//     <button onClick={()=>{dispatch("-")}}>MINUS</button>

//     </>
//   )
// }













// import logo from './logo.svg';
// import './App.css';
// import {useReducer} from 'react'


// function todo (state, action) {
//   switch(action.type){
//     case "ADD_TODO" :
//     return [
//       ...state, {id: Date.now(), text: action.textload, completed: false}
//     ]

//     case "DELETE_TODO" :
//       return state.filter(todo => todo.id !== action.textload)

//     case "TOGGLE_TODO" :
//       return state.map(todo => {
//        return todo.id = action.textload ? {...todo, completed: !todo.completed} : todo
//       })

//     default: return state
//   }
// }


// export default function App (){


//   const [todos, dispatch] = useReducer(todo, [])

//   const add_todo = (text)=> {
//     dispatch({type: "ADD_TODO", textload: text})
//   }

//   const delete_todo = (id) => {
//     dispatch({type: "DELETE_TODO", textload: id})
//   }

//   const handleToggleTodo = (id) => {
//     dispatch({ type: "TOGGLE_TODO", textload: id });
//   };



//   return(
//     <div>
//       <ul>
//         {todos.map(todo =>(
//           <li key={todo.id}>
//             <input type='checkbox' checked={todo.completed} onChange={()=>{handleToggleTodo(todo.id)}}/>
//             {todo.text}
//             <button onClick={()=>{delete_todo(todo.id)}}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <input type='text' placeholder='ADD TODO' onKeyDown={(e)=>{
//         if(e.key === 'Enter'){
//           add_todo(e.target.value)
//           e.target.value = ''
//         }
//       }}/>
//     </div>
//   )
// }













// function counter ( state, action) {
//   switch(action.type){
//     case "Increment" :
//       return {count: state.count + 1}
//     case "Decrement" :
//       return {count : state.count - 1}
    
//       default : return state

//   }
// }



// function App() {


//   const [state, dispatch] = useReducer(counter, {count: 0})



//   return (
//     <>
//         <p>{state.count}</p>
//     <button onClick={()=>{dispatch({type: 'Increment'})}}>plus</button>
//     <button onClick={()=>{dispatch({type: 'Decrement'})}}>Minus</button>
//     </>

//   );
// }

// export default App;
