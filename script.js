
  

// verifier si la taille du textinputed n'est pas suprieur a 40lettres
// ajouter la bouton qui fait basculer le Inputed task en doing task

function addTask() {
  let taskInputed = document.getElementById('taskInput').value;
  const generatedTask = document.getElementById('generatedTask')
  

  if (taskInputed === '') {
    alert("You must write something!");
  }
 else {

     
    const toDoDiv = document.createElement("div");
    const newToDo = document.createElement('li');
    const beginButton = document.createElement('button')

    newToDo.textContent = taskInputed;
    newToDo.classList.add('todo-item');
    beginButton.classList.add('begginButton')
    toDoDiv.classList.add('inputedDiv')
    beginButton.textContent = ('begin')
    
    toDoDiv.appendChild(newToDo);
    toDoDiv.appendChild(beginButton)
    generatedTask.appendChild(toDoDiv); 

    document.getElementById('taskInput').value = ''; 
  }
}
