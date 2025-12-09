const input=document.querySelector(`#input`)
const addElement=document.querySelector(`#add`)
const tasksContainer=document.querySelector(`#taskContainer`)
const deleteButton=document.getElementById('delete')




let tasks = [];
let taskId=1;

const add =()=>{
    const todoText = input.value 
    const task={
        id: taskId,
        text: todoText,
        isComplete:false
    }
    taskId++
    tasks.push(task)

    clearInput()
    renderTasks()
}
const renderTasks=()=>{

    let taskElementHTML=""
    tasks.forEach((task)=>{
        const taskElement=createTask(task)
        taskElementHTML+=taskElement
    })
    tasksContainer.innerHTML=taskElementHTML

}
const createTask=(task)=>{
    return `<div class="taskBox inter">
            <input type="checkBox" name="checkBox" class="checkBox" ${task.isComplete && "checked" } />
            <p class="taskText inter">${task.text}</p>
            <button id="delete" class="deleteBox" onclick="deleted(${task.id})">Delete</button>
        </div>`
}
const clearInput=()=>{
    input.value=''
}
const deleted=(taskId)=>{
tasks=tasks.filter((task)=>{
        if(task.id===taskId){
            return false
        } else {
            return true
        }
    })
    renderTasks()
}

addElement.addEventListener("click", add)