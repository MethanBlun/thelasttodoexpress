
  

// verifier si la taille du textinputed n'est pas suprieur a 40lettres
// ajouter du style au bouton checkbox



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
  const finishedTaskCheckBox = document.createElement('input')
  finishedTaskCheckBox.setAttribute('type','checkbox')
  finishedTaskCheckBox.setAttribute('id','finishedTaskCheckBox')
  finishedTaskCheckBox.classList.add('finishedTaskCheckBox')
  const begunTaskText = document.createElement('div')
  begunTaskDiv.classList.add('begunTaskDiv')


  begunTaskText.classList.add('begunTaskText')
  begunTaskText.textContent = taskInputed

  begunTaskDiv.appendChild(finishedTaskCheckBox);
  begunTaskDiv.appendChild(begunTaskText)
  doingSide.appendChild(begunTaskDiv)


  finishedTaskCheckBox.addEventListener('change', function() {
    if (this.checked) {
      taskFinished(taskInputed);
    }
  });

  this.parentElement.remove()
  
}



function taskFinished(task) {
  const doneSide = document.getElementById('done-side');
  const doneDiv = document.createElement('div');
  doneDiv.textContent = task;
  doneSide.appendChild(doneDiv);


  this.parentElement.remove()
}

// function taskFinished() {

//   const doneSide = document.getElementById('done-side')
//   const taskInputed = this.parentElement.querySelector('.todo-item').value;
//   const doneDiv = document.createElement('div')
//   doneDiv.textContent = taskInputed
//   doneSide.appendChild(doneDiv)

// }




