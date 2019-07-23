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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/homework_9/homework_9.js":
/*!**************************************!*\
  !*** ./src/homework_9/homework_9.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homework_9_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homework_9.scss */ "./src/homework_9/homework_9.scss");
/* harmony import */ var _homework_9_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homework_9_scss__WEBPACK_IMPORTED_MODULE_0__);
 //ЗАдача №2 "Проверка стандарта" (https://learn.javascript.ru/ifelse)
//Решение:
// const answer = prompt('«Каково «официальное» название JavaScript?»');
// if (answer === 'ECMAScript') {
//     alert('Всё верно');
// } else {
//     alert('Не знаете? ECMAScript');
// }
//Задача №3 "Получите знак числа"
// Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
//Решение:
// const number = prompt('Введите любое число');
// if (number > 0) {
//     alert('1, Число больше "0"');
// } else if (number < 0) {
//     alert('-1, число меньше "0"');
// } else {
//     alert('0, ЧИсло равно "0"');
// }
// Задача №3 "Проверка логина"
// Напишите код, который будет спрашивать логин (prompt).
// Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».
// Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».
//Решение:
// const login = prompt('Кто пришел?');
// if (login === 'Админ') {
//     let password = prompt('Пароль?'); 
//     if (password === 'Чёрный Властелин') {
//         alert ('Добро пожаловать');
//         } else if (password === null) {
//             alert('Вход отменен');
//         } else {
//             alert('Пароль не верен');
//         }
// } else if (login === null) {
//     alert('Вход отменен');
// } else {
//     alert('Я вас не знаю!');
// }
// Задача№4 Перепишите 'if' в '?'
// Перепишите if с использованием оператора '?':
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// Решение:
// result = if (a + b < 4) ? 'Мало' : 'Много'
// Задача №5 Перепишите 'if..else' в '?' 
// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости – оформляйте код в несколько строк.
// var message;
// if (login == 'Вася') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
// Решение:
// message = (login == 'Вася') ? 'Привет' : 
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' :
// '';
// Задача №6
// Проверка if внутри диапазона
// Напишите условие if для проверки того факта, что переменная age находится между 14 и 90 включительно.
// «Включительно» означает, что концы промежутка включены, то есть age может быть равна 14 или 90.
// Решение:
// let x = prompt('Введите ваш возраст');
// if (x >= 14 && x <= 90) {
//     alert('Ваш возраст в диапозоне 14-90лет');
// } else if (x < 14) {
//     alert('Вам меньше 14 лет');
// } else {
//     alert('Невероятно!!!');
// }

/***/ }),

/***/ "./src/homework_9/homework_9.scss":
/*!****************************************!*\
  !*** ./src/homework_9/homework_9.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 10:
/*!********************************************!*\
  !*** multi ./src/homework_9/homework_9.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/homework_9/homework_9.js */"./src/homework_9/homework_9.js");


/***/ })

/******/ });
//# sourceMappingURL=homework_9.js.map