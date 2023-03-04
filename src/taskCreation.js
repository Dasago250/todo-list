export const taskCreation = (name, description, date, priority) => {
  const taskContent = document.createElement('li');
  taskContent.classList.add('task');
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
  const taskDelete = document.createElement('button');
  taskDelete.classList.add('task-delete');
  taskDelete.textContent = 'delete';

  taskContent.appendChild(taskName);
  taskContent.appendChild(taskDescription);
  taskContent.appendChild(taskDate);
  taskContent.appendChild(taskDelete);

  return { taskContent };
};
