webpackHotUpdate(4,{

/***/ "./components/BoxSpan/BoxSpan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxSpan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
        className: "titles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Close, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_variables__ = __webpack_require__("./styles/variables.js");


var Box = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].div.withConfig({
  displayName: "BoxSpanstyle__Box",
  componentId: "g3xo3b-0"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:30px;background-color:gray;.title{font-size:30px;word-wrap:wrap;strong{font-size:40px;}}.message{font-size:14px;}.close{cursor:pointer;}"]);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_style__ = __webpack_require__("./pages/index.style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HeadHtml_HeadHtml__ = __webpack_require__("./components/HeadHtml/HeadHtml.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header_Header__ = __webpack_require__("./components/Header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Main_Main__ = __webpack_require__("./components/Main/Main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_BoxSpan_BoxSpan__ = __webpack_require__("./components/BoxSpan/BoxSpan.js");
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
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_HeadHtml_HeadHtml__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__index_style__["a" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Main_Main__["a" /* default */], {
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "days",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "days__closing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "CLOSING IN")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "days__days",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "22"), " days"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_BoxSpan_BoxSpan__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }))));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.9b05903d6e7836d505af.hot-update.js.map