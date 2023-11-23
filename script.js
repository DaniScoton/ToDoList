const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Função para adicionar uma tarefa ou exibir mensagem se não houver texto
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
      checkEmpty(); // Verifica se a lista está vazia após a exclusão
    });

    taskInput.value = '';
    checkEmpty(); // Verifica se a lista está vazia após adicionar uma tarefa
  } else {
    alert('Por favor, insira uma tarefa válida.');
  }
}

// Função para verificar se a lista está vazia e exibir a mensagem adequada
function checkEmpty() {
  const noTasksMessage = document.querySelector('.no-tasks-message');

  if (todoList.children.length === 0) {
    noTasksMessage.style.display = 'block';
  } else {
    noTasksMessage.style.display = 'none';
  }
}

function toggleTaskComplete(checkbox) {
  const label = checkbox.nextElementSibling;
  if (checkbox.checked) {
    label.style.textDecoration = 'line-through';
  } else {
    label.style.textDecoration = 'none';
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

function onTaskItemClick(event) {
  if (event.target.matches('.checkbox-custom')) {
    toggleTaskComplete(event.target);
  }
}

// Verifica se a lista está vazia no carregamento inicial
todoList.addEventListener('change', onTaskItemClick);
checkEmpty();