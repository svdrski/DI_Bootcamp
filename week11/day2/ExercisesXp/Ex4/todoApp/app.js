import {TodoList} from "./todo.js";

const todolist = new TodoList()
todolist.addTask('run')
todolist.addTask('sleep')
todolist.addTask('eat')

todolist.showall()

// show completed
todolist.setComplete('run')
todolist.setComplete('sleep')
todolist.setComplete('eat')

console.log('----------- completed ')
todolist.showall()