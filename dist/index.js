/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function storageAvailable(type) {\n    let storage;\n    try {\n      storage = window[type];\n      const x = \"__storage_test__\";\n      storage.setItem(x, x);\n      storage.removeItem(x);\n      return true;\n    } catch (e) {\n      return (\n        e instanceof DOMException &&\n        e.name === \"QuotaExceededError\" &&\n        // acknowledge QuotaExceededError only if there's something already stored\n        storage &&\n        storage.length !== 0\n      );\n    }\n  }\n\n  if (storageAvailable(\"localStorage\")) {\n    console.log(\"Yippee! We can use localStorage awesomeness\")\n  } else {\n    console.log(\"bsbjldbjbjwe;afvc ui;bave\")\n  }\n\n//# sourceURL=webpack://osamos-todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;