




function addTask() {
  let taskInputed = document.getElementById('taskInput').value;
  const generatedTask = document.getElementById('generatedTask')

  if (taskInputed === '') {
    alert("You must write something!");
  } else {
     
    const toDoDiv = document.createElement("div");
    const newToDo = document.createElement('li');

    newToDo.textContent = taskInputed;
    newToDo.classList.add('todo-item');
    
    toDoDiv.appendChild(newToDo);
    generatedTask.appendChild(toDoDiv); 

    document.getElementById('taskInput').value = ''; 
  }
}
