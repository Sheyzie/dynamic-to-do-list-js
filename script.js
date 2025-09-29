// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // add event listener after html load
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");

    addButton.addEventListener('click', function() {
        addTask()
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') addTask()
    })
});

function addTask() {
    // add/remove task dynamically from DOM
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const taskText = taskInput.value.trim();

    if (taskText === "") return alert("Please enter a task");

    const li = document.createElement('li');
    li.textContent = taskText;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove'
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => {
        li.remove()
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li)
    taskInput.value = ""
};