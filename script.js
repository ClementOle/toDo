const addTaskForm = document.getElementById('addTaskForm');
const addTaskText = document.getElementById('addTask');
const addTaskCategory = document.getElementById('addTaskCategory');
const tasksList = document.querySelector('.tasksList');
const filters = document.querySelector('.filters');

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

function completeTask(key) {
    let tasks = getTasks();
    let task = getTask(key);
    if (task.completed) {
        task.completed = false;
    } else {
        task.completed = true;
    }
    tasks[key] = task;
    setTasks(tasks);
}

function addTaskElement(key, task) {
    let li = document.createElement('li');
    li.classList.add('task');
    li.classList.add(task.category);
    li.setAttribute('data-key', key);

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
    updateBtn.innerHTML = 'Modifier';

    let completeBtn = document.createElement('button');
    completeBtn.classList.add('completeTaskBtn');
    completeBtn.innerHTML = 'Terminer';

    div.appendChild(deleteBtn);
    div.appendChild(updateBtn);
    div.appendChild(completeBtn);
    li.appendChild(p);
    li.appendChild(div);

    tasksList.appendChild(li);

    completeBtn.addEventListener('click', function(event) {
        let li = completeBtn.parentElement.parentElement;
        let key = li.getAttribute('data-key');

        completeTask(key);

        let task = getTask(key);

        if (task.completed) {
            li.classList.remove('taskCompleted');
        } else {
            li.classList.add('taskCompleted');
        }

    });

    deleteBtn.addEventListener('click', function(event) {
        let li = deleteBtn.parentElement.parentElement;
        let key = li.getAttribute('data-key');
        deleteTask(key);
        tasksList.removeChild(li);
    });

    updateBtn.addEventListener('click', function(event) {
        let li = updateBtn.parentElement.parentElement;
        let key = li.getAttribute('data-key');
        let task = getTask(key);
        let taskText = updateBtn.parentElement.previousElementSibling;
        let text = prompt('Texte de la tache', taskText.innerHTML);
        updateTask(key, text, task.category, task.completed);
        taskText.innerHTML = text;
    });
}



addTaskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    let taskText = addTaskText.value;
    let taskCategory = addTaskCategory.value;

    let key = addTask(taskText, taskCategory, false);
    let task = getTask(key);

    addTaskText.value = "";

    addTaskElement(key, task);
});


filters.childNodes.forEach(function(item) {
    if (item.nodeType === 1) {
        let link = item.querySelector('.filter');
        link.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            tasksList.childNodes.forEach(function (task) {
                let filter = link.getAttribute('data-filter');
                if (task.nodeType === 1) {
                    if (filter === 'All') {
                        task.classList.remove('hiddenTask');
                    } else {
                        if (task.classList.contains(filter)) {
                            task.classList.remove('hiddenTask');
                        } else {
                            task.classList.add('hiddenTask');
                        }
                    }
                }
            });
        })
    }
});



localStorage.clear();
/*let key1 = addTask('hello', 'css', true);
let key2 = addTask('tache2', 'css', true);
console.log(getTask(key1));
deleteTask(key1);
console.log(getTasks());
updateTask(key2, 'yay', 'JS', false);
console.log(getTasks());*/

