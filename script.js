



// document.addEventListener("DOMContentLoaded", function() {
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

    document.getElementById('taskInputed').value = '';  // Effacement du champ d'entrée
  }
}
// })
// function addTask() {
//   let taskInput = document.getElementById('taskInput').value;
//   const tasksList = document.getElementById('tasksList');

//   if (taskInput === '') {
//     alert("You must write something!");
//   } else {
//     const toDoDiv = document.createElement("div");
//     const newToDo = document.createElement('li');

//     newToDo.innerText = taskInput;
//     newToDo.classList.add('todo-item');
    
//     toDoDiv.appendChild(newToDo);
//     tasksList.appendChild(toDoDiv); 

//     document.getElementById('taskInput').value = '';  // Effacement du champ d'entrée
//   }
// }
