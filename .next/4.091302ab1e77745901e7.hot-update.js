webpackHotUpdate(4,{

/***/ "./components/ButtonLike/ButtonLike.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonLike; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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



/***/ })

})
//# sourceMappingURL=4.091302ab1e77745901e7.hot-update.js.map