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
        percentages: [64, 36],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })));
    }
  }]);

  return PreviousRuling;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.8a8b00ca3c3f88f080f3.hot-update.js.map