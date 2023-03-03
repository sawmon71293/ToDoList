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

/***/ "./src/Checkbox.js":
/*!*************************!*\
  !*** ./src/Checkbox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar CheckBoxes = function CheckBoxes(event) {\n  var tasks = JSON.parse(localStorage.getItem('tasks'));\n  if (event.target.type === 'checkbox') {\n    var index = parseInt(event.target.dataset.index, 10);\n    var task = tasks.find(function (task) {\n      return task.index === index;\n    });\n    task.completed = event.target.checked;\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBoxes);\n\n//# sourceURL=webpack://todo/./src/Checkbox.js?");

/***/ }),

/***/ "./src/LoadTask.js":
/*!*************************!*\
  !*** ./src/LoadTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar LoadTask = function LoadTask(tasks) {\n  var toDoList = document.getElementById('todolist');\n  tasks.sort(function (a, b) {\n    return a.index - b.index;\n  });\n  toDoList.innerHTML = '';\n  tasks.forEach(function (task) {\n    var template = \" <li class= \\\"border-bottom border-opacity-10 p-3 d-flex justify-content-between\\\">\\n                            <div class=\\\"inputs\\\">\\n                              <input type=\\\"checkbox\\\" data-index=\\\"\".concat(task.index, \"\\\" \").concat(task.completed ? 'checked' : '', \" class=\\\"me-2 mt-2\\\" />\\n                              <input type=\\\"text\\\" class=\\\"task-description\\\" data-index=\\\"\").concat(task.index, \"\\\" value =\\\"\").concat(task.description, \"\\\" />\\n                            </div>\\n                            <div class=\\\"buttons\\\">\\n                              <div class=\\\"ellipsis\\\">\\n                                <button class=\\\"btn btn-ellipsis\\\" data-index=\\\"\").concat(task.index, \"\\\">\\n                                  <i class=\\\"fa-solid fa-ellipsis-vertical\\\"></i>\\n                                </button>\\n                              </div>\\n                              <div class=\\\"hidden\\\">\\n                                <button class=\\\"btn btn-trash\\\" data-index=\\\"\").concat(task.index, \"\\\">\\n                                  <i class=\\\"fa-solid fa-trash-can\\\"></i>\\n                                </button>\\n                              </div>\\n                            </div>\\n                          </li>\");\n    toDoList.innerHTML += template;\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadTask);\n\n//# sourceURL=webpack://todo/./src/LoadTask.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	__webpack_modules__["./src/Checkbox.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/LoadTask.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;