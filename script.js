
  

// verifier si la taille du textinputed n'est pas suprieur a 40lettres
// faire le style
//creer des li qui separe chaque nouvelle todo div ajoute a la doing side



function addTask() {
  let taskInputed = document.getElementById('taskInput').value;
  const generatedTask = document.getElementById('generatedTask')
  
  if (taskInputed === '') {
    alert("You must write something!");
  }
 else {

    const toDoDiv = document.createElement("div");
    const newToDo = document.createElement('li');
    const beginButton = document.createElement('button');

    newToDo.textContent = taskInputed;
    newToDo.classList.add('todo-item');
    beginButton.classList.add('beginButton');
    toDoDiv.classList.add('inputedDiv');

    beginButton.textContent = ('begin');
    beginButton.onclick = beginButtonOnclick;

    
 
    toDoDiv.appendChild(newToDo);
    toDoDiv.appendChild(beginButton);
    generatedTask.appendChild(toDoDiv); 
    document.getElementById('taskInput').value = ''; 
  }

}

 function beginButtonOnclick(){

  const taskInputed = this.parentElement.querySelector('.todo-item').textContent;
  const doingTaskDiv = document.createElement('div');
  doingTaskDiv.classList.add('begunTask')
  doingTaskDiv.textContent = taskInputed;
  const begunTask = document.getElementById('begunTask')
  begunTask.appendChild(doingTaskDiv)
  this.parentElement.remove()
  
}