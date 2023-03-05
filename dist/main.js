/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabCreation */ \"./src/tabCreation.js\");\n/* harmony import */ var _taskCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskCreation */ \"./src/taskCreation.js\");\n\n\n\nconst inboxTab = (0,_tabCreation__WEBPACK_IMPORTED_MODULE_0__.tabCreation)('Inbox');\nconst projectTestTab = (0,_tabCreation__WEBPACK_IMPORTED_MODULE_0__.tabCreation)('Project Test');\n\nconst main = document.querySelector('.mainContent');\nconst inbox = document.querySelector('.inbox');\nconst projectTest = document.querySelector('.projectTest');\n\n// Logic of tab selection\nmain.appendChild(inboxTab.content);\n\ninbox.addEventListener('click', () => {\n  main.removeChild(main.lastChild);\n  main.appendChild(inboxTab.content);\n});\n\nprojectTest.addEventListener('click', () => {\n  main.removeChild(main.lastChild);\n  main.appendChild(projectTestTab.content);\n});\n\nconst taskModal = document.querySelector('.modal-task');\n\n// Logic of buttons in the main content\nmain.addEventListener('click', (e) => {\n  // Add task\n  if (e.target.classList.contains('addTask')) {\n    taskModal.showModal();\n  }\n  // Delete Task\n  if (e.target.classList.contains('task-delete')) {\n    e.target.parentNode.remove();\n  }\n});\n\n// TASK MODAL LOGIC -----------------------------------------------------------------------------\nconst taskModalName = document.querySelector('#taskName');\nconst taskModalDescription = document.querySelector('#taskDescription');\nconst taskModalDate = document.querySelector('#taskDate');\nconst taskModalPriority = document.querySelector('#taskPriority');\n\nconst taskModalAdd = document.querySelector('.taskModalAdd');\nconst taskModalCancel = document.querySelector('.taskModalCancel');\n\ntaskModalAdd.addEventListener('click', () => {\n  const taskList = document.querySelector('.task-list');\n  const name = taskModalName.value;\n  const description = taskModalDescription.value;\n  const date = taskModalDate.value;\n  const priority = taskModalPriority.value;\n  const task = (0,_taskCreation__WEBPACK_IMPORTED_MODULE_1__.taskCreation)(name, description, date, priority);\n  taskList.appendChild(task.listElement);\n  taskModalName.value = '';\n  taskModalDescription.value = '';\n  taskModalDate.value = '';\n  taskModalPriority.value = 1;\n});\n\ntaskModalCancel.addEventListener('click', () => {\n  taskModalName.value = '';\n  taskModalDescription.value = '';\n  taskModalDate.value = '';\n  taskModalPriority.value = 1;\n});\n\n// Edit TASK\n\nmain.addEventListener('click', (e) => {\n  if (e.target.classList.contains('task-edit')) {\n    const taskEditForm = e.target.parentNode.nextElementSibling;\n    if (taskEditForm.style.display === 'block') {\n      taskEditForm.style.display = 'none';\n    } else {\n      taskEditForm.style.display = 'block';\n    }\n  }\n  if (e.target.classList.contains('task-edit-confirm')) {\n    const currentTask = e.target.parentNode.parentNode.firstChild;\n    const taskEditName = e.target.parentNode.children[0];\n    const taskEditDescription = e.target.parentNode.children[1];\n    const taskEditDate = e.target.parentNode.children[2];\n    const taskEditPriority = e.target.parentNode.children[3];\n    if (taskEditName.value !== '') {\n      currentTask.children[0].textContent = taskEditName.value;\n    }\n    if (taskEditDescription.value !== '') {\n      currentTask.children[1].textContent = taskEditDescription.value;\n    }\n    if (taskEditDate.value !== '') {\n      currentTask.children[2].textContent = taskEditDate.value;\n    }\n    currentTask.style.backgroundColor = taskEditPriority.value;\n    taskEditName.value = '';\n    taskEditDescription.value = '';\n    taskEditDate.value = '2023-01-01';\n    e.target.parentNode.style.display = 'none';\n  }\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/tabCreation.js":
/*!****************************!*\
  !*** ./src/tabCreation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabCreation\": () => (/* binding */ tabCreation)\n/* harmony export */ });\nconst tabCreation = (title) => {\n  const content = document.createElement('div');\n  content.classList.add('tab-content');\n  const contentTitle = document.createElement('h2');\n  contentTitle.classList.add('tab-title');\n  contentTitle.textContent = title;\n  const addTaskBtn = document.createElement('button');\n  addTaskBtn.classList.add('addTask');\n  addTaskBtn.textContent = 'Add Task';\n  const taskList = document.createElement('ul');\n  taskList.classList.add('task-list');\n  content.appendChild(contentTitle);\n  content.appendChild(addTaskBtn);\n  content.appendChild(taskList);\n\n  return { content, taskList };\n};\n\n\n//# sourceURL=webpack://todo-list/./src/tabCreation.js?");

/***/ }),

/***/ "./src/taskCreation.js":
/*!*****************************!*\
  !*** ./src/taskCreation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskCreation\": () => (/* binding */ taskCreation)\n/* harmony export */ });\nconst taskCreation = (name, description, date, priority) => {\n  // Main content of task object'\n  const listElement = document.createElement('li');\n  listElement.classList.add('task');\n  const taskContent = document.createElement('div');\n  taskContent.classList.add('task-content');\n  const taskName = document.createElement('h4');\n  taskName.classList.add('task-name');\n  taskName.textContent = name;\n  const taskDescription = document.createElement('p');\n  taskDescription.classList.add('task-description');\n  taskDescription.textContent = description;\n  const taskDate = document.createElement('p');\n  taskDate.classList.add('task-date');\n  taskDate.textContent = date;\n  taskContent.style.backgroundColor = `${priority}`;\n  const taskEdit = document.createElement('button');\n  taskEdit.classList.add('task-edit');\n  taskEdit.textContent = 'edit';\n  const taskDelete = document.createElement('button');\n  taskDelete.classList.add('task-delete');\n  taskDelete.textContent = 'delete';\n\n  // Edit task FORM ---------------------------------------------------\n  const taskEditContent = document.createElement('div');\n  taskEditContent.classList.add('task-edit-content');\n  const taskEditName = document.createElement('input');\n  taskEditName.setAttribute('type', 'text');\n  taskEditName.setAttribute('name', 'taskEditName');\n  taskEditName.setAttribute('id', 'taskEditName');\n  taskEditName.setAttribute('placeholder', 'name');\n  const taskEditDescription = document.createElement('input');\n  taskEditDescription.setAttribute('type', 'text');\n  taskEditDescription.setAttribute('name', 'taskEditDescription');\n  taskEditDescription.setAttribute('id', 'taskEditDescription');\n  taskEditDescription.setAttribute('placeholder', 'description');\n  const taskEditDate = document.createElement('input');\n  taskEditDate.setAttribute('type', 'date');\n  taskEditDate.setAttribute('name', 'taskEditDate');\n  taskEditDate.setAttribute('id', 'taskEditDate');\n  taskEditDate.value = '2023-01-01';\n  const taskEditPriority = document.createElement('select');\n  taskEditPriority.setAttribute('name', 'taskEditPriority');\n  taskEditPriority.setAttribute('id', 'taskEditPriority');\n  const colorPriority = ['#2F58CD', '#03C988', '#FFED00', '#F99417', '#FF0303'];\n  for (let i = 0; i < colorPriority.length; i += 1) {\n    const option = document.createElement('option');\n    option.setAttribute('value', colorPriority[i]);\n    option.textContent = `${i + 1}`;\n    taskEditPriority.appendChild(option);\n  }\n  const taskEditAdd = document.createElement('button');\n  taskEditAdd.classList.add('task-edit-confirm');\n  taskEditAdd.textContent = 'confirm';\n  const taskEditDelete = document.createElement('button');\n  taskEditDelete.classList.add('task-edit-cancel');\n  taskEditDelete.textContent = 'cancel';\n\n  taskEditContent.appendChild(taskEditName);\n  taskEditContent.appendChild(taskEditDescription);\n  taskEditContent.appendChild(taskEditDate);\n  taskEditContent.appendChild(taskEditPriority);\n  taskEditContent.appendChild(taskEditAdd);\n  taskEditContent.appendChild(taskEditDelete);\n\n  // Append all elements to li root element --------------------------------\n  taskContent.appendChild(taskName);\n  taskContent.appendChild(taskDescription);\n  taskContent.appendChild(taskDate);\n  taskContent.appendChild(taskEdit);\n  taskContent.appendChild(taskDelete);\n\n  listElement.appendChild(taskContent);\n  listElement.appendChild(taskEditContent);\n  return { listElement, taskContent };\n};\n\n\n//# sourceURL=webpack://todo-list/./src/taskCreation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;