 export class TodoList {
    constructor() {
        this.tasks = [];
    }
    
    addTask(value) {
        this.tasks.push({task: value, complete: false })
    }
    
    setComplete(value) {
        this.tasks.find(item => item.task === value).complete = true
    }
    
    showall(){
        for (let value of this.tasks) {
            console.log(value)
        }
    }
    
}

