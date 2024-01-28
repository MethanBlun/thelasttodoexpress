

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
    tasksList.appendChild(toDoDiv);  // Ajout de la nouvelle tâche à la liste des tâches

    document.getElementById('taskInput').value = '';  // Effacement du champ d'entrée
  }
}



// function addTask(){
//   let taskInput = document.getElementById('taskInput').value;
//   const toDoDiv = document.createElement("div");
//   const newToDo = document.createElement('li');
//   if (taskInput === '') {
//             alert("You must write something!");
//   }else{
//       newToDo.innerText = "hey";
//       newToDo.innerText = taskInput;
//       newToDo.classList.add('todo-item');
//       toDoDiv.appendChild(newToDo); const toDoDiv = document.createElement("div");

//   }
// }



// function addTask() {
//     var taskValue = document.getElementById('taskInput').value;

//     // Vérifiez si l'input n'est pas vide
//     if (taskValue.trim() !== '') {
//       var newTask = document.createElement('div'); 
//       newTask.textContent = taskValue

//       newTask.classList.add('new-task')


//       var tasksList = document.getElementById('tasksList');
   
//       tasksList.appendChild(newTask); 
//       document.getElementById('taskInput').value = '';
//     }
//   }

  // const toDoDiv = document.createElement("div");
  // toDoDiv.classList.add('todo', `${savedTheme}-todo`);

  // // Create LI
  // const newToDo = document.createElement('li');
  // if (toDoInput.value === '') {
  //         alert("You must write something!");
  //     } 
  // else {
  //     // newToDo.innerText = "hey";
  //     newToDo.innerText = toDoInput.value;
  //     newToDo.classList.add('todo-item');
  //     toDoDiv.appendChild(newToDo); const toDoDiv = document.createElement("div");
  //     toDoDiv.classList.add('todo', `${savedTheme}-todo`);
  
  //     // Create LI
  //     const newToDo = document.createElement('li');
  //     if (toDoInput.value === '') {
  //             alert("You must write something!");
  //         } 
  //     else {
  //         // newToDo.innerText = "hey";
  //         newToDo.innerText = toDoInput.value;
  //         newToDo.classList.add('todo-item');
  //         toDoDiv.appendChild(newToDo);
  
  