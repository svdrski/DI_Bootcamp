import React, { createContext, useContext, useReducer, useRef, useState } from "react";
import { TaskContext } from "./App";
const ADD_TASK = "ADD_TASK";


export default function TaskAdder() {
    const { dispatch } = useContext(TaskContext);
    const [taskText, setTaskText] = useState("");
  
    const handleAddTask = () => {
      if (taskText.trim() === "") return;
      dispatch({ type: ADD_TASK, text: taskText });
      setTaskText("");
    };

    const sorter = () =>{
        dispatch({type: 'SORT'})
    }
  
    return (
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
        <button onClick={sorter}>SORT</button>
      </div>
    );
  }
  