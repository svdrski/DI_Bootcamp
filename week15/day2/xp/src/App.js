import React, { useReducer, useState } from "react";

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [...state, { id: Date.now(), text: action.text, check: false }];
    case "REMOVE_TODO":
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);

    case "UPDATE" :
      return state.map(item =>  {
       return item.id === action.id ? {...item, check: !item.check } : item
      })
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const update = (id) =>{
    dispatch({type: "UPDATE", id})
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.check} onChange={()=>{update(todo.id)}}/>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;












// import React, { useRef, useState } from "react";
// import "./App.css";

// function CharacterCounter() {
//   const inputRef = useRef(null);

//   const [length, setLength] = useState(0)

//   const handleInputChange = () => {
//     const textLength = inputRef.current.value.length;
//     setLength(textLength)
//   };

//   return (
//     <div>
//       <h1>Character Counter</h1>
//       <textarea
//         ref={inputRef}
//         onChange={handleInputChange}
//         placeholder="Type something..."></textarea>
//       <p>Character Count: {length}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <CharacterCounter />
//     </div>
//   );
// }

// export default App;









// import React from "react";
// import { ThemeProvider, useTheme } from "./ThemeContext";

// function ThemeSwitcher() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <p>Current Theme: {theme}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <div className="App">
//         <h1>Theme Switcher Example</h1>
//         <ThemeSwitcher />
//         {/* Other components here */}
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
