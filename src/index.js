import { tabCreation } from './tabCreation';
import { taskCreation } from './taskCreation';

const inboxTab = tabCreation('Inbox');
const projectTestTab = tabCreation('Project Test');

const main = document.querySelector('.mainContent');
const inbox = document.querySelector('.inbox');
const projectTest = document.querySelector('.projectTest');

// Logic of tab selection
main.appendChild(inboxTab.content);

inbox.addEventListener('click', () => {
  main.removeChild(main.lastChild);
  main.appendChild(inboxTab.content);
});

projectTest.addEventListener('click', () => {
  main.removeChild(main.lastChild);
  main.appendChild(projectTestTab.content);
});

const taskModal = document.querySelector('.modal-task');

// Logic of buttons in the main content
main.addEventListener('click', (e) => {
  // Add task
  if (e.target.classList.contains('addTask')) {
    taskModal.showModal();
  }
  // Delete Task
  if (e.target.classList.contains('task-delete')) {
    e.target.parentNode.remove();
  }
});

// TASK MODAL LOGIC -----------------------------------------------------------------------------
const taskModalName = document.querySelector('#taskName');
const taskModalDescription = document.querySelector('#taskDescription');
const taskModalDate = document.querySelector('#taskDate');
const taskModalPriority = document.querySelector('#taskPriority');

const taskModalAdd = document.querySelector('.taskModalAdd');
const taskModalCancel = document.querySelector('.taskModalCancel');

taskModalAdd.addEventListener('click', () => {
  const taskList = document.querySelector('.task-list');
  const name = taskModalName.value;
  const description = taskModalDescription.value;
  const date = taskModalDate.value;
  const priority = taskModalPriority.value;
  const task = taskCreation(name, description, date, priority);
  taskList.appendChild(task.listElement);
  taskModalName.value = '';
  taskModalDescription.value = '';
  taskModalDate.value = '';
  taskModalPriority.value = 1;
});

taskModalCancel.addEventListener('click', () => {
  taskModalName.value = '';
  taskModalDescription.value = '';
  taskModalDate.value = '';
  taskModalPriority.value = 1;
});

// Edit TASK

main.addEventListener('click', (e) => {
  if (e.target.classList.contains('task-edit')) {
    const taskEditForm = e.target.parentNode.nextElementSibling;
    if (taskEditForm.style.display === 'block') {
      taskEditForm.style.display = 'none';
    } else {
      taskEditForm.style.display = 'block';
    }
  }
  if (e.target.classList.contains('task-edit-confirm')) {
    const currentTask = e.target.parentNode.parentNode.firstChild;
    const taskEditName = e.target.parentNode.children[0];
    const taskEditDescription = e.target.parentNode.children[1];
    const taskEditDate = e.target.parentNode.children[2];
    const taskEditPriority = e.target.parentNode.children[3];
    if (taskEditName.value !== '') {
      currentTask.children[0].textContent = taskEditName.value;
    }
    if (taskEditDescription.value !== '') {
      currentTask.children[1].textContent = taskEditDescription.value;
    }
    if (taskEditDate.value !== '') {
      currentTask.children[2].textContent = taskEditDate.value;
    }
    currentTask.style.backgroundColor = taskEditPriority.value;
    taskEditName.value = '';
    taskEditDescription.value = '';
    taskEditDate.value = '2023-01-01';
    e.target.parentNode.style.display = 'none';
  }
});
