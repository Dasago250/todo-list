import { tabCreation } from './tabCreation';
import { taskCreation } from './taskCreation';

const inboxTab = tabCreation('Inbox');
const projectTestTab = tabCreation('Favorites');

const main = document.querySelector('.mainContent');
const inbox = document.querySelector('.inbox');
const favorites = document.querySelector('.favorites');

// Logic of tab selection
main.appendChild(inboxTab.content);

inbox.addEventListener('click', () => {
  main.removeChild(main.lastChild);
  main.appendChild(inboxTab.content);
});

favorites.addEventListener('click', () => {
  main.removeChild(main.lastChild);
  main.appendChild(projectTestTab.content);
});

const taskModal = document.querySelector('.modal-task');

// Logic of buttons in the main content
main.addEventListener('click', (e) => {
  // Add task
  if (e.target.classList.contains('add-task')) {
    taskModal.showModal();
  }
  // Delete Task
  if (e.target.classList.contains('task-delete')) {
    e.target.parentNode.parentNode.parentNode.remove();
  }
});

// TASK MODAL LOGIC -----------------------------------------------------------------------------
// TASK MODAL
const taskModalName = document.querySelector('#task-name');
const taskModalDescription = document.querySelector('#task-description');
const taskModalDate = document.querySelector('#task-date');
const taskModalPriority = document.querySelector('#task-priority');
const taskModalAdd = document.querySelector('.task-modal-add');
const taskModalCancel = document.querySelector('.task-modal-cancel');

// TASK MODAL CONFIRM BUTTON
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
  taskModal.close();
});

// TASK MODAL CANCEL BUTTON
taskModalCancel.addEventListener('click', () => {
  taskModalName.value = '';
  taskModalDescription.value = '';
  taskModalDate.value = '';
  taskModal.close();
});

// EDIT TASK
main.addEventListener('click', (e) => {
  // EDIT TASK - EDIT BUTTON
  if (e.target.classList.contains('task-edit')) {
    const taskEditForm = e.target.parentNode.parentNode.nextElementSibling;
    if (taskEditForm.style.display === 'block') {
      taskEditForm.style.display = 'none';
    } else {
      taskEditForm.style.display = 'block';
    }
  }
  // EDIT TASK CONFIRM BUTTON
  if (e.target.classList.contains('task-edit-confirm')) {
    const currentTask = e.target.parentNode.parentNode.parentNode.parentNode.firstChild;
    const taskEditName = e.target.parentNode.parentNode.children[0];
    const taskEditDescription = e.target.parentNode.parentNode.children[1];
    const taskEditDate = e.target.parentNode.parentNode.children[2];
    const taskEditPriority = e.target.parentNode.parentNode.children[3];
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
    e.target.parentNode.parentNode.parentNode.style.display = 'none';
  }
  // EDIT TASK CANCEL BUTTON
  if (e.target.classList.contains('task-edit-cancel')) {
    const taskEditName = e.target.parentNode.parentNode.children[0];
    const taskEditDescription = e.target.parentNode.parentNode.children[1];
    const taskEditDate = e.target.parentNode.parentNode.children[2];
    taskEditName.value = '';
    taskEditDescription.value = '';
    taskEditDate.value = '2023-01-01';
    e.target.parentNode.parentNode.parentNode.style.display = 'none';
  }
});

// Project Logic ----------------------------------------------------------------------

// OPEN PROJECT MODAL
const addProjectBtn = document.querySelector('.add-project');
const projectModal = document.querySelector('.modal-project');
addProjectBtn.addEventListener('click', () => {
  projectModal.showModal();
});

// PROJECT MODAL INFO
const projectModalName = document.querySelector('#project-name');
const projectModalColor = document.querySelector('#project-color');
const projectModalAdd = document.querySelector('.project-modal-add');
const projectModalCancel = document.querySelector('.project-modal-cancel');
const projectListNav = document.querySelector('.list-projects');
const listProjects = [];

// PROJECT MODAL CONFIRM BUTTON
projectModalAdd.addEventListener('click', () => {
  const project = document.createElement('div');
  project.classList.add('project');
  project.setAttribute('id', projectModalName.value.replace(/\s+/g, ''));
  const color = document.createElement('div');
  color.classList.add('color');
  color.style.backgroundColor = projectModalColor.value;
  const projectTitle = document.createElement('h4');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = projectModalName.value;
  const deleteProjectBtn = document.createElement('i');
  deleteProjectBtn.classList.add('project-delete', 'fa-solid', 'fa-trash-can');
  const projectTab = tabCreation(`${projectModalName.value}`);
  listProjects.push(projectTab);
  project.appendChild(color);
  project.appendChild(projectTitle);
  project.appendChild(deleteProjectBtn);
  projectListNav.appendChild(project);
  projectModalName.value = '';
});

// PROJECT MODAL CANCEL BUTTON
projectModalCancel.addEventListener('click', () => {
  projectModalName.value = '';
});

// TAB PROJECT LOGIC
projectListNav.addEventListener('click', (e) => {
  if (e.target.classList.contains('project')) {
    for (let i = 0; i < listProjects.length; i += 1) {
      if (listProjects[i].name.replace(/\s+/g, '') === e.target.id) {
        main.removeChild(main.lastChild);
        main.appendChild(listProjects[i].content);
      }
    }
  }
  if (e.target.classList.contains('project-delete')) {
    e.target.parentNode.remove();
  }
});
