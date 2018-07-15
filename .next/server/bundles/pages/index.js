module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BannerSubmit/BannerSubmit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerSubmit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BannerSubmit_style__ = __webpack_require__("./components/BannerSubmit/BannerSubmit.style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button_Button__ = __webpack_require__("./components/Button/Button.js");
var _jsxFileName = "/home/sergio/Proyectos/zemoga2/zemoga/components/BannerSubmit/BannerSubmit.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var BannerSubmit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BannerSubmit, _React$Component);

  function BannerSubmit(props, context) {
    _classCallCheck(this, BannerSubmit);

    return _possibleConstructorReturn(this, (BannerSubmit.__proto__ || Object.getPrototypeOf(BannerSubmit)).call(this, props, context));
  }

  _createClass(BannerSubmit, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__BannerSubmit_style__["a" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "Is ther anyone else you would want us to add?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Button_Button__["a" /* default */], {
        color: "#333333",
        label: "Submit a Name",
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }));
    }
  }]);

  return BannerSubmit;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/BannerSubmit/BannerSubmit.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_variables__ = __webpack_require__("./styles/variables.js");


var Container = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.footer.withConfig({
  displayName: "BannerSubmitstyle__Container",
  componentId: "s1rrmza9-0"
})(["height:70px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:5px 20px;background-color:white;position:relative;margin:35px 0px;color:", ";.image{position:absolute;width:100%;height:100%;top:0px;left:0px;background-image:url(/static/images/home/people.png);background-size:cover;background-position:center;opacity:0.1;}.text{line-height:1;font-size:2.05rem;font-weight:200;}"], __WEBPACK_IMPORTED_MODULE_1__styles_variables__["a" /* variables */].text);

/***/ }),

/***/ "./components/BoxSpan/BoxSpan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxSpan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BoxSpan_style__ = __webpack_require__("./components/BoxSpan/BoxSpan.style.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/home/sergio/Proyectos/zemoga2/zemoga/components/BoxSpan/BoxSpan.js";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Close = function Close(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, "tspan", "{", "white-space:pre", "}", ".shp0", "{", "fill:#333", "}"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    id: "Shape 4 copy",
    className: "shp0",
    d: "M15.32 15.18l.69-.69L2.32.85l-.69.69zm.35-13.3l-.71-.7L.98 15.11l.71.7z"
  }));
};

Close.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 17 16",
  width: "17",
  height: "16"
};

var BoxSpan =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BoxSpan, _React$Component);

  function BoxSpan(props, context) {
    _classCallCheck(this, BoxSpan);

    return _possibleConstructorReturn(this, (BoxSpan.__proto__ || Object.getPrototypeOf(BoxSpan)).call(this, props, context));
  }

  _createClass(BoxSpan, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__BoxSpan_style__["a" /* Box */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "Speak out. Be heard.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, " Be counted"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It\u2019s easy: You share your opinion, we analyze and put the data in a public report.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Close, {
        className: "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }));
    }
  }]);

  return BoxSpan;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/BoxSpan/BoxSpan.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Box; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_variables__ = __webpack_require__("./styles/variables.js");


var Box = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "BoxSpanstyle__Box",
  componentId: "g3xo3b-0"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:15px 25px;background-color:", ";.title{color:", ";font-size:22px;font-weight:200;strong{font-size:38px;}}.message{flex:auto;text-align:left;font-size:15px;font-weight:200;}.close{cursor:pointer;width:30px;height:30px;}"], __WEBPACK_IMPORTED_MODULE_1__styles_variables__["a" /* variables */].gray, __WEBPACK_IMPORTED_MODULE_1__styles_variables__["a" /* variables */].text);

/***/ }),

/***/ "./components/Button/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonBorde; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button_style__ = __webpack_require__("./components/Button/Button.style.js");
var _jsxFileName = "/home/sergio/Proyectos/zemoga2/zemoga/components/Button/Button.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ButtonBorde =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonBorde, _React$Component);

  function ButtonBorde(props, context) {
    _classCallCheck(this, ButtonBorde);

    return _possibleConstructorReturn(this, (ButtonBorde.__proto__ || Object.getPrototypeOf(ButtonBorde)).call(this, props, context));
  }

  _createClass(ButtonBorde, [{
    key: "render",
    value: function render() {
      var _React$createElement;

      console.log("props: ", this.props);
      var _props = this.props,
          label = _props.label,
          action = _props.action,
          color = _props.color,
          size = _props.size;
      var fontSize = size === 'large' ? '1.28rem' : size === 'medium' ? '1.1rem' : '1em';
      var borderWeight = size === 'large' ? '3px' : size === 'large' ? '2px' : '1px';
      var fontWeight = size === 'large' || size === 'medium' ? 400 : 600;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Button_style__["a" /* Button */], (_React$createElement = {
        color: color,
        fontSize: fontSize,
        borderWeight: borderWeight
      }, _defineProperty(_React$createElement, "fontSize", fontSize), _defineProperty(_React$createElement, "fontWeight", fontWeight), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 17
      }), _React$createElement), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        "class": "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, label));
    }
  }]);

  return ButtonBorde;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/Button/Button.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_variables__ = __webpack_require__("./styles/variables.js");


var Button = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.button.withConfig({
  displayName: "Buttonstyle__Button",
  componentId: "s1e7a3ip-0"
})(["border:none;background-color:transparent;box-sizing:border-box;border-style:solid;border-width:", ";border-color:", ";padding:10px 18px;cursor:pointer;&:hover{background-color:#ffffffac;}.label{line-height:1;color:", ";font-size:", ";font-weight:", ";}"], function (props) {
  return props.borderWeight ? props.borderWeight : '1px';
}, function (props) {
  return props.color ? props.color : 'white';
}, function (props) {
  return props.color ? props.color : 'white';
}, function (props) {
  return props.fontSize ? props.fontSize : '1em';
}, function (props) {
  return props.fontWeight ? props.fontWeight : 400;
});

/***/ }),

/***/ "./components/ButtonLike/ButtonLike.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonLike; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ButtonLike_style__ = __webpack_require__("./components/ButtonLike/ButtonLike.style.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/home/sergio/Proyectos/zemoga2/zemoga/components/ButtonLike/ButtonLike.js";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Like = function Like(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, "tspan", "{", "white-space:pre", "}", ".shp0", "{", "fill:#fff", "}"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    id: "Rectangle 9 copy",
    className: "shp0",
    d: "M8.34 18.2v18.57c.19.68 1.08 1.23 2.29 1.23h15.89c3.4 0 4.92-1.5 5.49-2.85.43-1.01-.13-2.32-.9-2.79 1.19-.36 2.39-.98 2.6-2.66.21-1.69-.76-2.35-1.46-2.7 1.12 0 2.82-.89 2.82-2.86 0-1.95-1.64-2.59-1.64-2.59s2.56-.7 2.56-3.01c0-2.47-1.42-3.24-3.23-3.24l-12.78-.01s1.83-5.04 1.58-7.6C21 1.77 17.79.84 16.08 1.02c-1.71.18-2.43 1.17-2.17 4.79.25 3.61-1.25 5.39-5.49 11.64-.09.16-.09.75-.09.75zM1 38h6.22V16.25H1zm-1 0h6.22V16.25H0z"
  }));
};

Like.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 37 39",
  width: "37",
  height: "39"
};

var ButtonLike =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonLike, _React$Component);

  function ButtonLike(props, context) {
    _classCallCheck(this, ButtonLike);

    return _possibleConstructorReturn(this, (ButtonLike.__proto__ || Object.getPrototypeOf(ButtonLike)).call(this, props, context));
  }

  _createClass(ButtonLike, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          like = _props.like,
          action = _props.action,
          small = _props.small,
          desactive = _props.desactive;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ButtonLike_style__["a" /* Button */], {
        like: !!like,
        small: small,
        desactive: desactive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Like, {
        className: "like",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }));
    }
  }]);

  return ButtonLike;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/ButtonLike/ButtonLike.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_variables__ = __webpack_require__("./styles/variables.js");


console.log("variables: ", __WEBPACK_IMPORTED_MODULE_1__styles_variables__["a" /* variables */]);
var Button = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.button.withConfig({
  displayName: "ButtonLikestyle__Button",
  componentId: "l30rzq-0"
})(["border:none;width:", ";height:", ";background-color:", ";box-sizing:border-box;border:2px solid;border-color:", ";padding:", ";cursor:pointer;&:hover{border-color:", ";}.like{color:white;path{fill:white;}width:", ";height:", ";transform:rotate(", ")}"], function (props) {
  return props.small ? '30px' : '100%';
}, function (props) {
  return props.small ? '32px' : '100%';
}, function (props) {
  return props.like ? __WEBPACK_IMPORTED_MODULE_1__styles_variables__["a" /* variables */].primary + 'c4' : __WEBPACK_IMPORTED_MODULE_1__styles_variables__["a" /* variables */].secondary + 'c4';
}, function (props) {
  return props.like ? __WEBPACK_IMPORTED_MODULE_1__styles_variables__["a" /* variables */].primary + 'c4' : __WEBPACK_IMPORTED_MODULE_1__styles_variables__["a" /* variables */].secondary + 'c4';
}, function (props) {
  return props.small ? '2px' : '15px';
}, function (props) {
  return props.desactive ? props.like ? __WEBPACK_IMPORTED_MODULE_1__styles_variables__["a" /* variables */].primary + 'c4' : __WEBPACK_IMPORTED_MODULE_1__styles_variables__["a" /* variables */].secondary + 'c4' : 'white';
}, function (props) {
  return props.small ? '18px' : 'auto';
}, function (props) {
  return props.small ? '18px' : 'auto';
}, function (props) {
  return props.like ? '0deg' : '180deg';
});

/***/ }),

/***/ "./components/Footer/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer_style__ = __webpack_require__("./components/Footer/Footer.style.js");
var _jsxFileName = "/home/sergio/Proyectos/zemoga2/zemoga/components/Footer/Footer.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props, context) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props, context));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Footer_style__["a" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav__link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "Term and Conditions"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav__link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "Privacy policy"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav__link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "Contact Us")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav__link right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Folow Us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "nav__link right icon-social",
        src: "/static/images/home/facebook.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "nav__link right icon-social",
        src: "/static/images/home/twitter.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })));
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/Footer/Footer.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_variables__ = __webpack_require__("./styles/variables.js");


var Container = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.footer.withConfig({
  displayName: "Footerstyle__Container",
  componentId: "o0v7n3-0"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:", ";height:80px;border-top:1px solid transparent;border-image:url(/static/images/home/dots.png) 1 round;.nav{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;&__link{cursor:pointer;font-weight:200;font-size:0.85em;margin-right:30px;&.icon-social{height:25px;width:auto;}&.right{margin-left:30px;margin-right:0px;}}}"], __WEBPACK_IMPORTED_MODULE_1__styles_variables__["a" /* variables */].text);

/***/ }),

/***/ "./components/HeadHtml/HeadHtml.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadHtml; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/home/sergio/Proyectos/zemoga2/zemoga/components/HeadHtml/HeadHtml.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var HeadHtml =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeadHtml, _React$Component);

  function HeadHtml() {
    _classCallCheck(this, HeadHtml);

    return _possibleConstructorReturn(this, (HeadHtml.__proto__ || Object.getPrototypeOf(HeadHtml)).apply(this, arguments));
  }

  _createClass(HeadHtml, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Lato:300,400,500,600,700,900&subset=latin-ext",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "/static/style.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }));
    }
  }]);

  return HeadHtml;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/Header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_style__ = __webpack_require__("./components/Header/Header.style.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/home/sergio/Proyectos/zemoga2/zemoga/components/Header/Header.js";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Search = function Search(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, "tspan", "{", "white-space:pre", "}", ".shp0", "{", "fill:#fff", "}"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    id: "Composite Path",
    className: "shp0",
    d: "M10.26 2.59c4.4 0 8.68 2.88 8.68 8.63 0 5.74-4.28 8.62-8.68 8.62-4.4 0-8.68-2.88-8.68-8.62 0-5.75 4.28-8.63 8.68-8.63zm0-1.59C5.19 1 0 4.4 0 11.22c0 6.81 5.19 10.21 10.26 10.21 1.91 0 3.83-.48 5.49-1.44L22.42 27 24 25.41l-6.44-6.77c1.78-1.7 2.96-4.17 2.96-7.42C20.52 4.4 15.33 1 10.26 1z"
  }));
};

Search.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 28",
  width: "25",
  height: "28"
};


var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header_style__["a" /* HeaderStyle */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "nav__left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "Rule of Thumb.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "nav__right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav__link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Past Trials"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav__link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "How It Works"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav__link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "Log In / Sign Up"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav__link search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Search, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/Header/Header.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderStyle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var margin = "7.5rem";
var HeaderStyle = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.header.withConfig({
  displayName: "Headerstyle__HeaderStyle",
  componentId: "zbjp5l-0"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:calc(100vw - ", ");padding:0px ", ";background-image:url(/static/images/home/gradient.png);background-size:contain;height:115px;color:white;.title{font-size:32px;font-weight:500;margin:0px;}.nav{flex:auto;display:flex;flex-direction:row;justify-content:space-between;align-items:center;align-content:center;&__link{margin:0px;font-size:16px;cursor:pointer;width:150px;&:hover{font-weight:bold;}&.search{width:30px;margin-left:40px;}}&__right{text-align:right;}&__right,&__left{display:flex;flex-direction:row;justify-content:space-between;align-items:center;align-content:center;}}"], margin * 2, margin);

/***/ }),

/***/ "./components/Main/Main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Main_style__ = __webpack_require__("./components/Main/Main.style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__ = __webpack_require__("./components/ButtonLike/ButtonLike.js");
var _jsxFileName = "/home/sergio/Proyectos/zemoga2/zemoga/components/Main/Main.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Main_style__["a" /* Main */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "blur",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "opinion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "opinion__second-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "What's your opinion on"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "opinion__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, "Pope Francis?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "opinion__description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "iHe\u2019s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "opinion__more-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/home/Wiki.png",
        className: "wiki",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), " More information"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "opinion__what",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "What's Your Verdict?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "actions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__["a" /* default */], {
        like: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__["a" /* default */], {
        like: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/Main/Main.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var Main = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "Mainstyle__Main",
  componentId: "s1vmjrvo-0"
})(["width:36vw;position:relative;overflow:hidden;.blur{position:absolute;top:0;width:100%;height:calc(100% - 76px);background-image:url(/static/images/home/pope.png);background-repeat:no-repeat;background-size:100vw auto;background-position:-8rem 46%;filter:url(/media/blur.svg#blur);filter:blur(20px);}.opinion{padding:30px 60px 30px 30px;color:white;font-size:16px;background-color:#4242429f;z-index:100;position:relative;&__what{margin:20px 0px 0px;font-weight:bold;font-size:1.3em;;}&__description{font-weight:200;font-size:1.3em;;}&__more-info{margin:20px 0px;font-size:0.85em;text-decoration:underline;text-underline-position:under;font-weight:400;color:rgba(255,255,255,.9);.wiki{height:12px;margin-right:5px;}}&__title{font-size:3.6em;font-weight:400;margin:0px 0px 20px;}&__second-title{color:rgba(255,255,255,.8);}}.actions{width:100%;display:flex;flex-direction:row;justify-content:space-between;z-index:100;position:relative;}"]);

/***/ }),

/***/ "./components/PreviousRuling/PreviousRuling.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousRuling; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PreviousRuling_style__ = __webpack_require__("./components/PreviousRuling/PreviousRuling.style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__ = __webpack_require__("./components/ButtonLike/ButtonLike.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button_Button__ = __webpack_require__("./components/Button/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Progress_Progress__ = __webpack_require__("./components/Progress/Progress.js");
var _jsxFileName = "/home/sergio/Proyectos/zemoga2/zemoga/components/PreviousRuling/PreviousRuling.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PreviousRuling =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PreviousRuling, _React$Component);

  function PreviousRuling(props, context) {
    _classCallCheck(this, PreviousRuling);

    return _possibleConstructorReturn(this, (PreviousRuling.__proto__ || Object.getPrototypeOf(PreviousRuling)).call(this, props, context));
  }

  _createClass(PreviousRuling, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          image = _props.image,
          name = _props.name,
          message = _props.message,
          likes = _props.likes,
          noLikes = _props.noLikes,
          experience = _props.experience;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__PreviousRuling_style__["a" /* Ruling */], {
        image: image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ruling",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ruling__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ruling__title__state",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__["a" /* default */], {
        like: true,
        small: true,
        desactive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "ruling__title__name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "ruling__experience",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, experience), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "ruling__message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, message), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ruling__actions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__["a" /* default */], {
        like: true,
        small: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__["a" /* default */], {
        like: false,
        small: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Button_Button__["a" /* default */], {
        label: "Vote now",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Progress_Progress__["a" /* default */], {
        percentages: [64, 36],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })));
    }
  }]);

  return PreviousRuling;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/PreviousRuling/PreviousRuling.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ruling; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_variables__ = __webpack_require__("./styles/variables.js");


var Ruling = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "PreviousRulingstyle__Ruling",
  componentId: "v56mf0-0"
})(["display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;background-image:url(", ");background-repeat:no-repeat;background-size:cover;background-position:center;font-size:16px;height:550px;position:relative;.ruling{padding:35px 60px 35px 35px;color:white;width:calc(100% - 95px);position:relative;z-index:20;&__title{position:relative;&__state{position:absolute;left:-35px;top:10px;width:40px;height:40px;}&__name{font-size:2.6em;font-weight:600;}}&__experience{font-size:0.82em;font-weight:600;margin:0px;}&__message{font-size:1em;font-weight:400;margin:16px 0px;height:38px;}&__actions{margin-bottom:2px;width:45%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;}}.message{flex:auto;text-align:left;font-size:15px;font-weight:200;}.progress{width:100%;position:relative;z-index:20;}.filter{width:100%;height:100%;position:absolute;top:0px;left:0px;background:rgba(0,0,0,0.03);background:-moz-linear-gradient(top,rgba(0,0,0,0.03) 4%,rgba(0,0,0,0.03) 23%,rgba(0,0,0,0.75) 84%,rgba(0,0,0,0.75) 100%);background:-webkit-gradient(left top,left bottom,color-stop(4%,rgba(0,0,0,0.03)),color-stop(23%,rgba(0,0,0,0.03)),color-stop(84%,rgba(0,0,0,0.75)),color-stop(100%,rgba(0,0,0,0.75)));background:-webkit-linear-gradient(top,rgba(0,0,0,0.03) 4%,rgba(0,0,0,0.03) 23%,rgba(0,0,0,0.75) 84%,rgba(0,0,0,0.75) 100%);background:-o-linear-gradient(top,rgba(0,0,0,0.03) 4%,rgba(0,0,0,0.03) 23%,rgba(0,0,0,0.75) 84%,rgba(0,0,0,0.75) 100%);background:-ms-linear-gradient(top,rgba(0,0,0,0.03) 4%,rgba(0,0,0,0.03) 23%,rgba(0,0,0,0.75) 84%,rgba(0,0,0,0.75) 100%);background:linear-gradient(to bottom,rgba(0,0,0,0.03) 4%,rgba(0,0,0,0.03) 23%,rgba(0,0,0,0.75) 84%,rgba(0,0,0,0.75) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000',endColorstr='#000000',GradientType=0 );z-index:10;}"], function (props) {
  return props.image ? props.image : '';
});

/***/ }),

/***/ "./components/Progress/Progress.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Progress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Progress_style_js__ = __webpack_require__("./components/Progress/Progress.style.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/home/sergio/Proyectos/zemoga2/zemoga/components/Progress/Progress.js";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Like = function Like(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, "tspan", "{", "white-space:pre", "}", ".shp0", "{", "fill:#fff", "}"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    id: "Rectangle 9 copy",
    className: "shp0",
    d: "M8.34 18.2v18.57c.19.68 1.08 1.23 2.29 1.23h15.89c3.4 0 4.92-1.5 5.49-2.85.43-1.01-.13-2.32-.9-2.79 1.19-.36 2.39-.98 2.6-2.66.21-1.69-.76-2.35-1.46-2.7 1.12 0 2.82-.89 2.82-2.86 0-1.95-1.64-2.59-1.64-2.59s2.56-.7 2.56-3.01c0-2.47-1.42-3.24-3.23-3.24l-12.78-.01s1.83-5.04 1.58-7.6C21 1.77 17.79.84 16.08 1.02c-1.71.18-2.43 1.17-2.17 4.79.25 3.61-1.25 5.39-5.49 11.64-.09.16-.09.75-.09.75zM1 38h6.22V16.25H1zm-1 0h6.22V16.25H0z"
  }));
};

Like.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 37 39",
  width: "37",
  height: "39"
};

var Progress =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Progress, _React$Component);

  function Progress(props, context) {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props, context));
  }

  _createClass(Progress, [{
    key: "render",
    value: function render() {
      var percentages = this.props.percentages;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Progress_style_js__["a" /* Container */], {
        percentageOne: percentages[0],
        percentageTwo: percentages[1],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progressOne",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progressOne__like",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Like, {
        width: 30,
        height: 30,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "progressOne__percentage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, percentages[0], "%")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progressTwo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "progressTwo__percentage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, percentages[1], "%"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progressTwo__like",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Like, {
        width: 30,
        height: 30,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }))));
    }
  }]);

  return Progress;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/Progress/Progress.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_variables__ = __webpack_require__("./styles/variables.js");


var Container = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "Progressstyle__Container",
  componentId: "d8j7ej-0"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;color:white;.progressOne,.progressTwo{display:flex;flex-direction:row;align-items:center;padding:8px 10px;&__percentage{font-size:30px;font-weight:300;padding:0px 5px;line-height:25px;}}.progressOne{width:", ";background-color:", ";justify-content:flex-start;}.progressTwo{width:", ";background-color:", ";justify-content:flex-end;&__like{transform:rotate(180deg);}}"], function (props) {
  return props.percentageOne ? props.percentageOne + '%' : '0%';
}, __WEBPACK_IMPORTED_MODULE_1__styles_variables__["a" /* variables */].primary + 'cc', function (props) {
  return props.percentageTwo ? props.percentageTwo + '%' : '0%';
}, __WEBPACK_IMPORTED_MODULE_1__styles_variables__["a" /* variables */].secondary + 'cc');

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_style__ = __webpack_require__("./pages/index.style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HeadHtml_HeadHtml__ = __webpack_require__("./components/HeadHtml/HeadHtml.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header_Header__ = __webpack_require__("./components/Header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Main_Main__ = __webpack_require__("./components/Main/Main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_BoxSpan_BoxSpan__ = __webpack_require__("./components/BoxSpan/BoxSpan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PreviousRuling_PreviousRuling__ = __webpack_require__("./components/PreviousRuling/PreviousRuling.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Footer_Footer__ = __webpack_require__("./components/Footer/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_BannerSubmit_BannerSubmit__ = __webpack_require__("./components/BannerSubmit/BannerSubmit.js");
var _jsxFileName = "/home/sergio/Proyectos/zemoga2/zemoga/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_HeadHtml_HeadHtml__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__index_style__["a" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "main-ruling",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Main_Main__["a" /* default */], {
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "days",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "days__closing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "CLOSING IN")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "days__days",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "22"), " days")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "section message content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_BoxSpan_BoxSpan__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "section votes content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_PreviousRuling_PreviousRuling__["a" /* default */], {
        name: "Kanye West",
        experience: "1 month in Entretaiment",
        message: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
        image: "/static/images/home/Kanye.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_PreviousRuling_PreviousRuling__["a" /* default */], {
        name: "Kanye West",
        experience: "1 month in Entretaiment",
        message: "Thank you for voting!",
        image: "/static/images/home/Mark.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_PreviousRuling_PreviousRuling__["a" /* default */], {
        name: "Kanye West",
        experience: "1 month in Entretaiment",
        message: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
        image: "/static/images/home/Cristina.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_PreviousRuling_PreviousRuling__["a" /* default */], {
        name: "Kanye West",
        experience: "1 month in Entretaiment",
        message: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
        image: "/static/images/home/Malala.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "content banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_BannerSubmit_BannerSubmit__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Footer_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }))));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./pages/index.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var margin = "8rem";
var Container = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "indexstyle__Container",
  componentId: "vrmke8-0"
})(["display:flex;flex-direction:column;justify-content:space-between;margin:0px;padding:0px;width:100vw;.main-ruling{display:flex;flex-direction:column;justify-content:space-between;margin:0px;padding:0px;width:100vw;background-image:url(/static/images/home/pope.png);min-height:81vh;background-position:left top;background-repeat:no-repeat;background-size:105vw auto;filter:saturate(1.2);.days{display:flex;flex-direction:row;justify-content:space-between;align-items:center;&__closing{height:100%;width:31%;background-color:#8080807a;color:white;padding:10px 0px;line-height:30px;position:relative;&:after{content:'';display:block;position:absolute;top:17px;right:-11px;width:10px;height:10px;-moz-transform:rotate(-45deg);-webkit-transform:rotate(180deg);width:0;height:0;border-top:10px solid transparent;border-right:15px solid #9b9591d9;border-bottom:10px solid transparent;}p{width:97%;text-align:right;font-size:13px;font-weight:600;}}&__days{background-color:#f8f8f8d6;line-height:30px;height:100%;padding:10px 0px;flex:auto;color:#4d4d4d;font-size:32px;font-weight:200;padding-left:20px;}}}.content{margin-left:", ";margin-right:", ";}.votes{display:grid;grid-gap:30px;grid-template-columns:1fr 1fr;}"], margin, margin);

/***/ }),

/***/ "./styles/variables.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return variables; });
var variables = {
  primary: "#2bbbb5",
  secondary: "#f9af2d",
  gray: "#ebebeb",
  text: "#333333"
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map