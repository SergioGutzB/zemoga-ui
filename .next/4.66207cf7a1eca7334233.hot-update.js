webpackHotUpdate(4,{

/***/ "./components/PreviousRuling/PreviousRuling.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousRuling; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
        className: "ruling",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ruling__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ruling__title__state",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__["a" /* default */], {
        like: true,
        small: true,
        desactive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "ruling__title__name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "ruling__experience",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, experience), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "ruling__message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, message), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ruling__actions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__["a" /* default */], {
        like: true,
        small: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__["a" /* default */], {
        like: true,
        small: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Button_Button__["a" /* default */], {
        label: "Vote now",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Progress_Progress__["a" /* default */], {
        progress: [64, 36],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })));
    }
  }]);

  return PreviousRuling;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/Progress/Progress.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Progress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Progress_style_js__["Container"], {
        progressOne: progess[0],
        progressTwo: progress[1],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "progressOne",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Like, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, progressOne)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "progressTwo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Like, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, progressOne)));
    }
  }]);

  return Progress;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/Progress/Progress.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Button */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_variables__ = __webpack_require__("./styles/variables.js");


var Button = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].button.withConfig({
  displayName: "Progressstyle__Button",
  componentId: "d8j7ej-0"
})(["border:none;background-color:transparent;box-sizing:border-box;border:1px solid;border-color:white;padding:10px 18px;cursor:pointer;&:hover{background-color:#ffffffac;}.label{color:white;font-size:14px;font-weight:600;}"]);

/***/ })

})
//# sourceMappingURL=4.66207cf7a1eca7334233.hot-update.js.map