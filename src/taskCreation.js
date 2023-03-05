export const taskCreation = (name, description, date, priority) => {
  // Main content of task object
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
  const buttons = document.createElement('div');
  buttons.classList.add('buttons');
  const taskEdit = document.createElement('i');
  taskEdit.classList.add('task-edit', 'fa-solid', 'fa-pen-to-square');
  const taskDelete = document.createElement('i');
  taskDelete.classList.add('task-delete', 'fa-solid', 'fa-trash-can');
  buttons.appendChild(taskEdit);
  buttons.appendChild(taskDelete);

  // Edit task FORM ---------------------------------------------------
  const taskEditContent = document.createElement('div');
  taskEditContent.classList.add('task-edit-content');
  const taskEditForm = document.createElement('div');
  taskEditForm.classList.add('task-edit-form');
  const taskEditName = document.createElement('input');
  taskEditName.setAttribute('type', 'text');
  taskEditName.setAttribute('name', 'task-edit-name');
  taskEditName.setAttribute('id', 'task-edit-name');
  taskEditName.setAttribute('placeholder', 'name');
  const taskEditDescription = document.createElement('input');
  taskEditDescription.setAttribute('type', 'text');
  taskEditDescription.setAttribute('name', 'task-edit-description');
  taskEditDescription.setAttribute('id', 'task-edit-description');
  taskEditDescription.setAttribute('placeholder', 'description');
  const taskEditDate = document.createElement('input');
  taskEditDate.setAttribute('type', 'date');
  taskEditDate.setAttribute('name', 'task-edit-date');
  taskEditDate.setAttribute('id', 'task-edit-date');
  taskEditDate.value = '2023-01-01';
  const taskEditPriority = document.createElement('select');
  taskEditPriority.setAttribute('name', 'task-edit-priority');
  taskEditPriority.setAttribute('id', 'task-edit-priority');
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
  const taskEditCancel = document.createElement('button');
  taskEditCancel.classList.add('task-edit-cancel');
  taskEditCancel.textContent = 'cancel';
  const taskEditButtons = document.createElement('div');
  taskEditButtons.classList.add('task-edit-buttons');
  taskEditButtons.appendChild(taskEditAdd);
  taskEditButtons.appendChild(taskEditCancel);

  taskEditForm.appendChild(taskEditName);
  taskEditForm.appendChild(taskEditDescription);
  taskEditForm.appendChild(taskEditDate);
  taskEditForm.appendChild(taskEditPriority);
  taskEditForm.appendChild(taskEditButtons);
  taskEditContent.appendChild(taskEditForm);

  // Append all elements to li root element --------------------------------
  taskContent.appendChild(taskName);
  taskContent.appendChild(taskDescription);
  taskContent.appendChild(taskDate);
  taskContent.appendChild(buttons);

  listElement.appendChild(taskContent);
  listElement.appendChild(taskEditContent);
  return { listElement, taskContent };
};
