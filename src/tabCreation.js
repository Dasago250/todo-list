export const tabCreation = (title) => {
  const content = document.createElement('div');
  content.classList.add('tab-content');
  const contentTitle = document.createElement('h2');
  contentTitle.classList.add('tab-title');
  contentTitle.textContent = title;
  const addTaskBtn = document.createElement('button');
  addTaskBtn.classList.add('addTask');
  addTaskBtn.textContent = 'Add Task';
  const taskList = document.createElement('ul');
  taskList.classList.add('task-list');
  content.appendChild(contentTitle);
  content.appendChild(addTaskBtn);
  content.appendChild(taskList);

  return { content, taskList };
};
