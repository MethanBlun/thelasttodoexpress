

function addTask() {
  let taskInput = document.getElementById('taskInput').value;
  const tasksList = document.getElementById('tasksList');

  if (taskInput === '') {
    alert("You must write something!");
  } else {
    const toDoDiv = document.createElement("div");
    const newToDo = document.createElement('li');

    newToDo.innerText = taskInput;
    newToDo.classList.add('todo-item');
    
    toDoDiv.appendChild(newToDo);
    tasksList.appendChild(toDoDiv); 

    document.getElementById('taskInput').value = '';  // Effacement du champ d'entrée
  }
}
