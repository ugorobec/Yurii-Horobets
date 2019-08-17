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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/homework_14/homework_14.js":
/*!****************************************!*\
  !*** ./src/homework_14/homework_14.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homework_14_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homework_14.scss */ "./src/homework_14/homework_14.scss");
/* harmony import */ var _homework_14_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homework_14_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/getData */ "./src/homework_14/scripts/getData.js");


var someTaskList = new _scripts_getData__WEBPACK_IMPORTED_MODULE_1__["GetData"]();

/***/ }),

/***/ "./src/homework_14/homework_14.scss":
/*!******************************************!*\
  !*** ./src/homework_14/homework_14.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/homework_14/scripts/getData.js":
/*!********************************************!*\
  !*** ./src/homework_14/scripts/getData.js ***!
  \********************************************/
/*! exports provided: GetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetData", function() { return GetData; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_TARGET = document.querySelector('body');
var GetData =
/*#__PURE__*/
function () {
  function GetData() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_TARGET;

    _classCallCheck(this, GetData);

    this.target = target;
    this.tasks = [];
    this.fetchTasks();
  }

  _createClass(GetData, [{
    key: "fetchTasks",
    value: function fetchTasks() {
      var _this = this;

      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://localhost:4001/comments');
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            _this.tasks = JSON.parse(xhr.response);

            _this.render();
          } else {
            alert('Something happened!');
          }
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      this.names = [];
      this.times = [];
      this.coments = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var task = _step.value;
          var name = document.createElement('div');
          name.classList.add('author');
          name.textContent = task.author;
          this.names.push(name);
          this.target.appendChild(name);
          var time = document.createElement('div');
          time.classList.add('time');
          time.textContent = task.date;
          this.names.push(time);
          this.target.appendChild(time);
          var coment = document.createElement('div');
          coment.classList.add('coment');
          coment.textContent = task.text;
          this.coments.push(coment);
          this.target.appendChild(coment);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return GetData;
}();

/***/ }),

/***/ 19:
/*!**********************************************!*\
  !*** multi ./src/homework_14/homework_14.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/homework_14/homework_14.js */"./src/homework_14/homework_14.js");


/***/ })

/******/ });
//# sourceMappingURL=homework_14.js.map