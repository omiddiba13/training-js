const tasks= [ 
    // {id:1, title:"task1" , done:false },
    // {id:2, title:"task2" , done:false },
    // {id:3, title:"task3" , done:false },
    // {id:4, title:"task4" , done:true }, 
    // {id:5, title:"task4" , done:true },
    //  {id:6, title:"task4" , done:true },
]

function addTask() {
    const taskField = document.getElementById("taskField")
    const newTask = { id: Date.now(), title: taskField.value, done: false }
    tasks.unshift(newTask)
    taskField.value = ""
    taskField.focus()
    renderTasks()

}






function checkTask(id){
    
      const targetTaskIndex= tasks.findIndex(task=>task.id===id)
      tasks[targetTaskIndex].done = !tasks[targetTaskIndex].done

    // 
      renderTasks()
}
// 
// 
function deleteTask(id){
    
    const targetTaskIndex= tasks.findIndex(task=>task.id===id)
    tasks.splice(targetTaskIndex,1)
//   
    renderTasks()
}




function renderTasks(){
    const openTasksContainer= document.getElementById("openTasksContainer"); 
    const closeTasksContainer=document.getElementById("closeTasksContainer")
    const openTasks=tasks.filter(task =>!task.done)
    const closeTasks=tasks.filter(task =>task.done)
    // console.log(openTasks)
    // console.log(closeTasks)

    const openTastkHtml= openTasks.map(task=>`  <li class="list-group-item bg-white bg-opacity-25  text-white d-flex align-items-center">
                                <input class="form-check-input me-2" type="checkbox" value="" id="task${task.id}" onclick="checkTask(${task.id})">
                                <label class="form-check-label stretched-link" for="task${task.id}">${task.title}</label>
                                <button class="btn btn-danger ms-auto z-1" onclick="deleteTask(${task.id})"> <i class="fas fa-trash-alt"></i></button>
                            </li>`)

    openTasksContainer.innerHTML=openTastkHtml.join("")      
    
    
        
    const closeTasksHTML = closeTasks.map(task => `
    <li
        class="list-group-item bg-secondary bg-opacity-25  text-white d-flex align-items-center">
        <input class="form-check-input me-2" type="checkbox" value="" id="task${task.id}" checked  onclick="checkTask(${task.id})">
        <label class="form-check-label stretched-link text-decoration-line-through " for="task${task.id}">${task.title}</label>
        <button class="btn btn-danger ms-auto z-1"  onclick="deleteTask(${task.id})"> <i class="fas fa-trash-alt"></i></button>

    </li>
`)

closeTasksContainer.innerHTML = closeTasksHTML.join("")


}
 renderTasks();