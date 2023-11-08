import React, { createContext, useContext, useReducer, useRef, useState } from "react";
import TaskAdder from "./TaskAdder";

// Context for managing tasks
export const TaskContext = createContext();
const ADD_TASK = "ADD_TASK";


// Actions
const COMPLETE_TASK = "COMPLETE_TASK";
const REMOVE_TASK = "REMOVE_TASK";

// Reducer function
export function taskReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      const newTask = { id: Date.now(), text: action.text, completed: false };
      return [...state, newTask];
    case COMPLETE_TASK:
      return state.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.id);

    case "EDIT" :
      return state.map((task) => task.id === action.id ? {...task, text: action.newtext} : task)

    
    case "SORT" :

    return [...state].sort((a,b) => state[0].completed ? a.completed - b.completed : b.completed - a.completed)

    
    default:
      return state;
  }
}



function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}







function TaskList() {

  const inputRef = useRef()

  const { tasks, dispatch } = useContext(TaskContext);

  const handleCompleteTask = (id) => {
    dispatch({ type: COMPLETE_TASK, id });
  };

  const handleRemoveTask = (id) => {
    dispatch({ type: REMOVE_TASK, id });
  };

  const editor = (e, id) =>{
    console.log(tasks)
    dispatch({ type: "EDIT", id, newtext: e.target.value });
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompleteTask(task.id)}
            />
            <input className="task" onClick={editor} ref={inputRef}  onChange={(e)=>{editor(e, task.id)}} value={task.text}></input>
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <h1>Task Manager</h1>
        <TaskAdder />
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default App;
