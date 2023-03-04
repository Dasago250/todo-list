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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabCreation */ \"./src/tabCreation.js\");\n/* harmony import */ var _taskCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskCreation */ \"./src/taskCreation.js\");\n\n\n\nconst main = document.querySelector('.mainContent');\nconst inboxTab = (0,_tabCreation__WEBPACK_IMPORTED_MODULE_0__.tabCreation)('Inbox');\n\nmain.appendChild(inboxTab.content);\n\nconst taskModal = document.querySelector('.modal-task');\n\nconst taskList = document.querySelector('.task-list');\n\nmain.addEventListener('click', (e) => {\n  if (e.target.classList.contains('addTask')) {\n    taskModal.showModal();\n  }\n  if (e.target.classList.contains('task-delete')) {\n    e.target.parentNode.remove();\n  }\n});\n\n// TASK MODAL LOGIC -----------------------------------------------------------------------------\nconst taskModalName = document.querySelector('#taskName');\nconst taskModalDescription = document.querySelector('#taskDescription');\nconst taskModalDate = document.querySelector('#taskDate');\nconst taskModalPriority = document.querySelector('#taskPriority');\n\nconst taskModalAdd = document.querySelector('.taskModalAdd');\nconst taskModalCancel = document.querySelector('.taskModalCancel');\n\ntaskModalAdd.addEventListener('click', () => {\n  const name = taskModalName.value;\n  const description = taskModalDescription.value;\n  const date = taskModalDate.value;\n  const priority = taskModalPriority.value;\n  const task = (0,_taskCreation__WEBPACK_IMPORTED_MODULE_1__.taskCreation)(name, description, date, priority);\n  taskList.appendChild(task.taskContent);\n  taskModalName.value = '';\n  taskModalDescription.value = '';\n  taskModalDate.value = '';\n  taskModalPriority.value = 1;\n});\n\ntaskModalCancel.addEventListener('click', () => {\n  taskModalName.value = '';\n  taskModalDescription.value = '';\n  taskModalDate.value = '';\n  taskModalPriority.value = 1;\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskCreation\": () => (/* binding */ taskCreation)\n/* harmony export */ });\nconst taskCreation = (name, description, date, priority) => {\n  const taskContent = document.createElement('li');\n  taskContent.classList.add('task');\n  const taskName = document.createElement('h4');\n  taskName.classList.add('task-name');\n  taskName.textContent = name;\n  const taskDescription = document.createElement('p');\n  taskDescription.classList.add('task-description');\n  taskDescription.textContent = description;\n  const taskDate = document.createElement('p');\n  taskDate.classList.add('task-date');\n  taskDate.textContent = date;\n  taskContent.style.backgroundColor = `${priority}`;\n  const taskDelete = document.createElement('button');\n  taskDelete.classList.add('task-delete');\n  taskDelete.textContent = 'delete';\n\n  taskContent.appendChild(taskName);\n  taskContent.appendChild(taskDescription);\n  taskContent.appendChild(taskDate);\n  taskContent.appendChild(taskDelete);\n\n  return { taskContent };\n};\n\n\n//# sourceURL=webpack://todo-list/./src/taskCreation.js?");

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