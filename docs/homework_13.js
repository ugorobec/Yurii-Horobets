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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/homework_13/homework_13.js":
/*!****************************************!*\
  !*** ./src/homework_13/homework_13.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homework_13_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homework_13.scss */ "./src/homework_13/homework_13.scss");
/* harmony import */ var _homework_13_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homework_13_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_slidercontroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/slidercontroller */ "./src/homework_13/scripts/slidercontroller.js");



function renderForm() {
  var slaiderForm = document.createElement('form');
  var textField = document.createElement('input');
  var inputButton = document.createElement('input');
  slaiderForm.classList.add('slider_form');
  inputButton.setAttribute('value', 'Add slides');
  slaiderForm.setAttribute('method', 'post');
  inputButton.setAttribute('type', 'submit');
  textField.setAttribute('type', 'number');
  textField.setAttribute('name', 'field');
  slaiderForm.appendChild(textField);
  slaiderForm.appendChild(inputButton);
  document.querySelector('body').appendChild(slaiderForm);
  slaiderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var slider = new _scripts_slidercontroller__WEBPACK_IMPORTED_MODULE_1__["SliderController"](document.querySelector('body'), textField.value);
  });
}

renderForm(); //const slider = new SliderController(document.querySelector('body'));

/***/ }),

/***/ "./src/homework_13/homework_13.scss":
/*!******************************************!*\
  !*** ./src/homework_13/homework_13.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/homework_13/scripts/slider.js":
/*!*******************************************!*\
  !*** ./src/homework_13/scripts/slider.js ***!
  \*******************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider =
/*#__PURE__*/
function () {
  function Slider(targetElement) {
    _classCallCheck(this, Slider);

    this.targetElement = targetElement;
    this.slides = [];
    this.renderSlide();
  }

  _createClass(Slider, [{
    key: "renderSlide",
    value: function renderSlide() {
      var slide = document.createElement('div');
      slide.classList.add('slide');
      slide.textContent = this.number;
      this.targetElement.appendChild(slide);
      this.slides.push(slide);
    }
  }]);

  return Slider;
}();

/***/ }),

/***/ "./src/homework_13/scripts/slidercontroller.js":
/*!*****************************************************!*\
  !*** ./src/homework_13/scripts/slidercontroller.js ***!
  \*****************************************************/
/*! exports provided: SliderController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderController", function() { return SliderController; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/homework_13/scripts/slider.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var SliderController =
/*#__PURE__*/
function () {
  function SliderController(targetElement) {
    var howMany = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '7';

    _classCallCheck(this, SliderController);

    this.targetElement = targetElement;
    this.imagesBlocks = [];
    this.currentImageIndex = 0;
    this.slideImage = null;
    this.howMany = howMany;
    this.render();
    this.renderPrevNextBtn();
    this.addNewSlide();
  }

  _createClass(SliderController, [{
    key: "render",
    value: function render() {
      this.slider = document.createElement('div');
      this.slider.classList.add('slider');
      this.container = document.createElement('div');
      this.container.classList.add('container_slider');
      this.content = document.createElement('div');
      this.content.classList.add('container_button');
      this.slider.appendChild(this.content);
      this.slider.appendChild(this.container);
      this.targetElement.appendChild(this.slider);
    }
  }, {
    key: "renderPrevNextBtn",
    value: function renderPrevNextBtn() {
      var showPrevBtn = document.createElement('button');
      var showNextBtn = document.createElement('button');
      showPrevBtn.classList.add('switch_button');
      showNextBtn.classList.add('switch_button');
      showPrevBtn.textContent = '<';
      showNextBtn.textContent = '>';
      this.content.appendChild(showPrevBtn);
      this.content.appendChild(showNextBtn);
    }
  }, {
    key: "addNewSlide",
    value: function addNewSlide() {
      for (var i = 0; i < this.howMany; i++) {
        var slider = new _slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](this.container);
        console.log(this.container);
        this.imagesBlocks.push(slider);
      }
    }
  }]);

  return SliderController;
}();

/***/ }),

/***/ 17:
/*!**********************************************!*\
  !*** multi ./src/homework_13/homework_13.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/homework_13/homework_13.js */"./src/homework_13/homework_13.js");


/***/ })

/******/ });
//# sourceMappingURL=homework_13.js.map