const addTaskForm = document.getElementById('addTaskForm');
const addTask = document.getElementById('addTask');
const taskList = document.querySelector('.tasksList');
const addTaskCategory = document.getElementById('addTaskCategory');

const filterAll = document.querySelector('.filterAll');
const filterCSS = document.querySelector('.filterCSS');
const filterHTML = document.querySelector('.filterHTML');
const filterJavaScript = document.querySelector('.filterJavaScript');
const filterPHP = document.querySelector('.filterPHP');
const filterJava = document.querySelector('.filterJava');

filterCSS.addEventListener('click',
    function (event) {
        event.preventDefault();
        event.stopPropagation();

        taskList.childNodes.forEach(function (task) {
            if (task.nodeType === 1) {
                if (task.classList.contains('CSS')) {
                    task.classList.remove('hiddenTask');
                } else {
                    task.classList.add('hiddenTask');
                }
            }
        });
    }
);

filterHTML.addEventListener('click',
    function (event) {
        event.preventDefault();
        event.stopPropagation();

        taskList.childNodes.forEach(function (task) {
            if (task.nodeType === 1) {
                if (task.classList.contains('HTML')) {
                    task.classList.remove('hiddenTask');
                } else {
                    task.classList.add('hiddenTask');
                }
            }
        });
    }
);

filterJavaScript.addEventListener('click',
    function (event) {
        event.preventDefault();
        event.stopPropagation();

        taskList.childNodes.forEach(function (task) {
            if (task.nodeType === 1) {
                if (task.classList.contains('JavaScript')) {
                    task.classList.remove('hiddenTask');
                } else {
                    task.classList.add('hiddenTask');
                }
            }

        });
    }
);

filterPHP.addEventListener('click',
    function (event) {
        event.preventDefault();
        event.stopPropagation();

        taskList.childNodes.forEach(function (task) {
            if (task.nodeType === 1) {
                if (task.classList.contains('PHP')) {
                    task.classList.remove('hiddenTask');
                } else {
                    task.classList.add('hiddenTask');
                }
            }
        });
    }
);

filterJava.addEventListener('click',
    function (event) {
        event.preventDefault();
        event.stopPropagation();

        taskList.childNodes.forEach(function (task) {
            if (task.nodeType === 1) {
                if (task.classList.contains('Java')) {
                    task.classList.remove('hiddenTask');
                } else {
                    task.classList.add('hiddenTask');
                }
            }
        });
    }
);

filterAll.addEventListener('click',
    function (event) {
        event.preventDefault();
        event.stopPropagation();

        taskList.childNodes.forEach(function (task) {
            if (task.nodeType === 1) {
                task.classList.remove('hiddenTask');
            }
        });
    }
);


addTaskForm.addEventListener('submit',
    function (event) {
        event.preventDefault();
        event.stopPropagation();

        let task = document.createElement('li');
        task.classList.add('task');
        task.classList.add(addTaskCategory.value);

        let taskText = document.createElement('p');
        taskText.classList.add('taskText');
        taskText.innerHTML = addTask.value;
        addTask.value = "";

        let taskButtons = document.createElement('div');
        taskButtons.classList.add('taskButtons');

        let completeTaskBtn = document.createElement('button');
        completeTaskBtn.classList.add('completeTaskBtn');
        completeTaskBtn.innerHTML = 'complete';
        completeTaskBtn.addEventListener('click',
            function (event) {
                let task = completeTaskBtn.parentElement.parentElement;
                if (task.classList.contains('taskCompleted')) {
                    task.classList.remove('taskCompleted');
                } else {
                    task.classList.add('taskCompleted');
                }
            }
        );


        let updateTaskBtn = document.createElement('button');
        updateTaskBtn.classList.add('updateTaskBtn');
        updateTaskBtn.innerHTML = 'Modifier';
        updateTaskBtn.addEventListener('click',
            function (event) {
                let taskText = updateTaskBtn.parentElement.previousElementSibling;
                taskText.innerHTML = prompt('Texte de la tache', taskText.innerHTML);
            }
        );

        let deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.classList.add('deleteTaskBtn');
        deleteTaskBtn.innerHTML = 'supprimer';
        deleteTaskBtn.addEventListener('click',
            function (event) {
                let task = deleteTaskBtn.parentElement.parentElement;
                taskList.removeChild(task);
            }
        );

        taskButtons.appendChild(completeTaskBtn);
        taskButtons.appendChild(updateTaskBtn);
        taskButtons.appendChild(deleteTaskBtn);
        task.appendChild(taskText);
        task.appendChild(taskButtons);
        taskList.appendChild(task);
    }
);
