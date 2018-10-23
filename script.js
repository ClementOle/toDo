function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || {};
}

function setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(taskText, taskCategory = 'JS', taskCompleted = false) {
    let tasks = getTasks();
    let key = Math.random().toString();
    tasks[key] = {
        text: taskText,
        category: taskCategory,
        completed: taskCompleted
    };
    setTasks(tasks);
    return key;
}

function getTask(key) {
    let tasks = getTasks();
    return tasks[key];
}

function deleteTask(key) {
    let tasks = getTasks();
    delete tasks[key];
    setTasks(tasks);
}

function updateTask(key, taskText, taskCategory, taskCompleted) {
    let tasks = getTasks();
    let task = getTask(key);
    task.text = taskText;
    task.category = taskCategory;
    task.completed = taskCompleted;
    tasks[key] = task;
    setTasks(tasks);
}

function addTaskElement(key, task) {
    let li = document.createElement('li');
    li.classList.add('task');
    let p = document.createElement('p');
    p.classList.add('taskText');
    p.innerHTML = task.text;
    let div = document.createElement('div');
    div.classList.add('taskButtons');
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteTaskBtn');
    deleteBtn.innerHTML = 'Supprimer';
    let updateBtn = document.createElement('button');
    updateBtn.classList.add('updateTaskBtn');
    deleteBtn.innerHTML('Modifier');
    let completeBtn = document.createElement('button');
    completeBtn.classList.add('completeTaskBtn');
    completeBtn.innerHTML = 'Terminer';

    div.appendChild(deleteBtn);
    div.appendChild(updateBtn);
    div.appendChild(completeBtn);
    li.appendChild(p);
    li.appendChild(div);
}

localStorage.clear();
let key1 = addTask('hello', 'css', true);
let key2 = addTask('tache2', 'css', true);
console.log(getTask(key1));
deleteTask(key1);
console.log(getTasks());
updateTask(key2, 'yay', 'JS', false);
console.log(getTasks());