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
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\tasks\\group_2206\\src\\lesson_10\\lesson_10.js: Unexpected character '​' (79:0)\n\n\u001b[0m \u001b[90m 77 | \u001b[39m  }\u001b[0m\n\u001b[0m \u001b[90m 78 | \u001b[39m]\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 79 | \u001b[39m​\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 80 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 81 | \u001b[39m\u001b[36mfunction\u001b[39m findLargestSalary(arr) {\u001b[0m\n\u001b[0m \u001b[90m 82 | \u001b[39m  \u001b[36mif\u001b[39m (arr[i]\u001b[33m.\u001b[39msalary \u001b[33m>\u001b[39m arr[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39msalary ) {\u001b[0m\n    at Object.raise (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:3851:17)\n    at Object.getTokenFromCode (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:4540:10)\n    at Object.getTokenFromCode (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:3602:18)\n    at Object.nextToken (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:4049:12)\n    at Object.next (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:3989:10)\n    at Object.eat (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:3994:12)\n    at Object.isLineTerminator (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:5145:17)\n    at Object.semicolon (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:5149:15)\n    at Object.parseVarStatement (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:7763:10)\n    at Object.parseStatementContent (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:7358:21)\n    at Object.parseStatement (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:7291:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:7868:25)\n    at Object.parseBlockBody (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:7855:10)\n    at Object.parseTopLevel (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:7220:10)\n    at Object.parse (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:8863:17)\n    at parse (D:\\tasks\\group_2206\\node_modules\\@babel\\parser\\lib\\index.js:11135:38)\n    at parser (D:\\tasks\\group_2206\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:170:34)\n    at normalizeFile (D:\\tasks\\group_2206\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:138:11)\n    at runSync (D:\\tasks\\group_2206\\node_modules\\@babel\\core\\lib\\transformation\\index.js:44:43)\n    at runAsync (D:\\tasks\\group_2206\\node_modules\\@babel\\core\\lib\\transformation\\index.js:35:14)\n    at process.nextTick (D:\\tasks\\group_2206\\node_modules\\@babel\\core\\lib\\transform.js:34:34)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

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