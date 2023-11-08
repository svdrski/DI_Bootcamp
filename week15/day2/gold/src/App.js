import React, { createContext, useContext, useReducer, useState } from "react";

// Context for managing tasks
const TaskContext = createContext();

// Actions
const ADD_TASK = "ADD_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const REMOVE_TASK = "REMOVE_TASK";

// Reducer function
function taskReducer(state, action) {
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

function TaskAdder() {
  const { dispatch } = useContext(TaskContext);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() === "") return;
    dispatch({ type: ADD_TASK, text: taskText });
    setTaskText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

function TaskList() {
  const { tasks, dispatch } = useContext(TaskContext);

  const handleCompleteTask = (id) => {
    dispatch({ type: COMPLETE_TASK, id });
  };

  const handleRemoveTask = (id) => {
    dispatch({ type: REMOVE_TASK, id });
  };

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
            {task.text}
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
