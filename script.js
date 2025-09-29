// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // add event listener after html load
    const addButton = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("task-input");

    loadTasks()

    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        addTask(taskText)
    });

    taskInput.addEventListener('keypress', function(event) {
        const taskText = taskInput.value.trim();
        if (event.key === 'Enter') addTask(taskText)
    });
});

function addTask(taskText, save=true) {
    // add/remove task dynamically from DOM
    const taskList = document.getElementById("task-list");

    if (taskText === "") return alert("Please enter a task");

    const li = document.createElement('li');
    li.textContent = taskText;
    li.id = taskText

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove'
    removeBtn.classList.add('remove-btn');

    removeBtn.onclick = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        console.log(li.value)
        tasks.forEach((task, index) => {
            if (task === li.id) {
                tasks.pop(index)
                console.log(task)
            }
        })

        li.remove()
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li)

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
};

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}


