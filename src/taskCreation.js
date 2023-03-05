export const taskCreation = (name, description, date, priority) => {
  // Main content of task object'
  const listElement = document.createElement('li');
  listElement.classList.add('task');
  const taskContent = document.createElement('div');
  taskContent.classList.add('task-content');
  const taskName = document.createElement('h4');
  taskName.classList.add('task-name');
  taskName.textContent = name;
  const taskDescription = document.createElement('p');
  taskDescription.classList.add('task-description');
  taskDescription.textContent = description;
  const taskDate = document.createElement('p');
  taskDate.classList.add('task-date');
  taskDate.textContent = date;
  taskContent.style.backgroundColor = `${priority}`;
  const taskEdit = document.createElement('button');
  taskEdit.classList.add('task-edit');
  taskEdit.textContent = 'edit';
  const taskDelete = document.createElement('button');
  taskDelete.classList.add('task-delete');
  taskDelete.textContent = 'delete';

  // Edit task FORM ---------------------------------------------------
  const taskEditContent = document.createElement('div');
  taskEditContent.classList.add('task-edit-content');
  const taskEditName = document.createElement('input');
  taskEditName.setAttribute('type', 'text');
  taskEditName.setAttribute('name', 'taskEditName');
  taskEditName.setAttribute('id', 'taskEditName');
  taskEditName.setAttribute('placeholder', 'name');
  const taskEditDescription = document.createElement('input');
  taskEditDescription.setAttribute('type', 'text');
  taskEditDescription.setAttribute('name', 'taskEditDescription');
  taskEditDescription.setAttribute('id', 'taskEditDescription');
  taskEditDescription.setAttribute('placeholder', 'description');
  const taskEditDate = document.createElement('input');
  taskEditDate.setAttribute('type', 'date');
  taskEditDate.setAttribute('name', 'taskEditDate');
  taskEditDate.setAttribute('id', 'taskEditDate');
  taskEditDate.value = '2023-01-01';
  const taskEditPriority = document.createElement('select');
  taskEditPriority.setAttribute('name', 'taskEditPriority');
  taskEditPriority.setAttribute('id', 'taskEditPriority');
  const colorPriority = ['#2F58CD', '#03C988', '#FFED00', '#F99417', '#FF0303'];
  for (let i = 0; i < colorPriority.length; i += 1) {
    const option = document.createElement('option');
    option.setAttribute('value', colorPriority[i]);
    option.textContent = `${i + 1}`;
    taskEditPriority.appendChild(option);
  }
  const taskEditAdd = document.createElement('button');
  taskEditAdd.classList.add('task-edit-confirm');
  taskEditAdd.textContent = 'confirm';
  const taskEditDelete = document.createElement('button');
  taskEditDelete.classList.add('task-edit-cancel');
  taskEditDelete.textContent = 'cancel';

  taskEditContent.appendChild(taskEditName);
  taskEditContent.appendChild(taskEditDescription);
  taskEditContent.appendChild(taskEditDate);
  taskEditContent.appendChild(taskEditPriority);
  taskEditContent.appendChild(taskEditAdd);
  taskEditContent.appendChild(taskEditDelete);

  // Append all elements to li root element --------------------------------
  taskContent.appendChild(taskName);
  taskContent.appendChild(taskDescription);
  taskContent.appendChild(taskDate);
  taskContent.appendChild(taskEdit);
  taskContent.appendChild(taskDelete);

  listElement.appendChild(taskContent);
  listElement.appendChild(taskEditContent);
  return { listElement, taskContent };
};
