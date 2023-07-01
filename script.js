document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const taskList = document.getElementById('taskList');
    const addButton = document.getElementById('addButton');

    // Add a new task to the list
    function addTask() {
        const taskText = taskInput.value.trim();
        const taskDescription = descriptionInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task';
            taskItem.innerHTML = `
          <div class="task-header">
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="deleteButton">Delete</button>
          </div>
          <div class="task-description">${taskDescription}</div>
        `;
            taskList.appendChild(taskItem);
            taskInput.value = '';
            descriptionInput.value = '';
        }
    }

    // Remove a task from the list
    function removeTask(event) {
        if (event.target.classList.contains('deleteButton')) {
            const taskItem = event.target.closest('.task');
            taskList.removeChild(taskItem);
        }
    }

    // Event listeners
    addButton.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTask);
});
