function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || {};
}

function setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify({}));
}

function addTask(taskText, taskCategory, taskCompleted) {
    let tasks = getTasks();
    let key = Math.random().toString();
    tasks[key] = ({
        text: taskText,
        category: taskCategory,
        completed: taskCompleted
    });
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

localStorage.clear();
addTask();