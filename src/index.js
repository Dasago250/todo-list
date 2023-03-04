import { tabCreation } from './tabCreation';
import { taskCreation } from './taskCreation';

const main = document.querySelector('.mainContent');
const inboxTab = tabCreation('Inbox');

main.appendChild(inboxTab.content);

const taskModal = document.querySelector('.modal-task');

const taskList = document.querySelector('.task-list');

main.addEventListener('click', (e) => {
  if (e.target.classList.contains('addTask')) {
    taskModal.showModal();
  }
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
  const name = taskModalName.value;
  const description = taskModalDescription.value;
  const date = taskModalDate.value;
  const priority = taskModalPriority.value;
  const task = taskCreation(name, description, date, priority);
  taskList.appendChild(task.taskContent);
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
