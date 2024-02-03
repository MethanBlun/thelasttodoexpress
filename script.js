
  

// verifier si la taille du textinputed n'est pas suprieur a 40lettres
// faire le style du beguTask



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
  const doingSide = document.getElementById('doing-side')

  const begunTaskDiv = document.createElement('div')
  const begunTaskText = document.createElement('div')
  begunTaskDiv.classList.add('begunTaskDiv')
  begunTaskText.classList.add('begunTaskText')
  begunTaskText.textContent = taskInputed
  begunTaskDiv.appendChild(begunTaskText)
  doingSide.appendChild(begunTaskDiv)



  this.parentElement.remove()
  
}