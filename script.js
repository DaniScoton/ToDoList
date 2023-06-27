const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Função para adicionar uma tarefa
function addTask() {
  const taskText = taskInput.value;


  if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox-custom';

    const taskLabel = document.createElement('label');
    taskLabel.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'x';

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(deleteButton);
    todoList.appendChild(taskItem);

    // Adiciona um event listener para o botão de exclusão
    deleteButton.addEventListener('click', function () {
      taskItem.remove();
    });

    taskInput.value = '';
  }
}

// Adiciona um event listener para o botão de adicionar
addButton.addEventListener('click', addTask);

// Adiciona um event listener para a tecla Enter no campo de input
taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});