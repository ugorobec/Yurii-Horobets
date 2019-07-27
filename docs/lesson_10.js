/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_10/lesson_10.js":
/*!************************************!*\
  !*** ./src/lesson_10/lesson_10.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_10_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_10.scss */ "./src/lesson_10/lesson_10.scss");
/* harmony import */ var _lesson_10_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_10_scss__WEBPACK_IMPORTED_MODULE_0__);

var numbers = [];
var btnLogIn = document.querySelector('#btn');
var btnAddNumber = document.querySelector('#addNumberBtn');
var output = document.querySelector('#output');
btnLogIn.onclick = logIn;
btnAddNumber.onclick = addNumber;

function logIn() {
  var userName = prompt();

  while (userName !== 'admin') {
    userName = prompt('Username not found!', '');
  }

  alert('Hello admin');
}

function calcTotal(numbersArray) {
  var total = 0;

  for (var i = 0; i < numbersArray.length; i++) {
    total = total + numbersArray[i];
  }

  return total;
}

function print(printString) {
  output.textContent = printString;
}

function addNumber() {
  var number = parseInt(prompt('Enter any number'));

  while (isNaN(number)) {
    number = parseInt(prompt('Enter any number'));
  }

  numbers.push(number);
  print('Total +' + calcTotal(numbers));
}

function find(array, number) {
  var indexOfNumber = -1;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === number) {
      indexOfNumber = i;
      break;
    }
  }

  return indexOfNumber;
}

function findMax(array) {
  var maxOfNumber = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxOfNumber) {
      maxOfNumber = array[i];
    }
  }

  return maxOfNumber;
}

console.log(findMax([1, 5, 98, 11113, 78, 2]));

/***/ }),

/***/ "./src/lesson_10/lesson_10.scss":
/*!**************************************!*\
  !*** ./src/lesson_10/lesson_10.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 11:
/*!******************************************!*\
  !*** multi ./src/lesson_10/lesson_10.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_10/lesson_10.js */"./src/lesson_10/lesson_10.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_10.js.map