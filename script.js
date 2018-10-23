const addTaskForm = document.getElementById('addTaskForm');
const addTask = document.getElementById('addTask');
const taskList = document.querySelector('.tasksList');
const addTaskCategory = document.getElementById('addTaskCategory');

const filters = document.querySelector('.filters');

filters.childNodes.forEach(function(item) {
    if (item.nodeType === 1) {
        let link = item.querySelector('.filter');
        link.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            taskList.childNodes.forEach(function (task) {
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
        completeTaskBtn.innerHTML = 'Terminer';
        completeTaskBtn.addEventListener('click',
            function () {
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
            function () {
                let taskText = updateTaskBtn.parentElement.previousElementSibling;
                taskText.innerHTML = prompt('Texte de la tache', taskText.innerHTML);
            }
        );

        let deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.classList.add('deleteTaskBtn');
        deleteTaskBtn.innerHTML = 'Supprimer';
        deleteTaskBtn.addEventListener('click',
            function () {
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
