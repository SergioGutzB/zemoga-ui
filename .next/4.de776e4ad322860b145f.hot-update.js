webpackHotUpdate(4,{

/***/ "./components/PreviousRuling/PreviousRuling.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousRuling; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PreviousRuling_style__ = __webpack_require__("./components/PreviousRuling/PreviousRuling.style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__ = __webpack_require__("./components/ButtonLike/ButtonLike.js");
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
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ruling",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ruling__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__["a" /* default */], {
        like: true,
        className: "ruling__title__state",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "ruling__title__name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "ruling__experience",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, experience), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "ruling__message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, message), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ruling__actions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__["a" /* default */], {
        like: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ButtonLike_ButtonLike__["a" /* default */], {
        like: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }))));
    }
  }]);

  return PreviousRuling;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/PreviousRuling/PreviousRuling.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ruling; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_variables__ = __webpack_require__("./styles/variables.js");


var Ruling = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].div.withConfig({
  displayName: "PreviousRulingstyle__Ruling",
  componentId: "v56mf0-0"
})(["display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;.ruling{padding:30px;&__title{position:relative;color:white;&__state{position:absolute;left:-50px;top:0px;width:40px;height:40px;}&__name{font-size:32px;font-weight:400;}}&__experience{font-size:14px;font-weight:400;margin:5px 0px;}&__message{font-size:18px;font-weight:200;margin:10px 0px;}&__actions{display:flex;flex-direction:row;margin:10px 0px;}}.message{flex:auto;text-align:left;font-size:15px;font-weight:200;}.close{cursor:pointer;width:30px;height:30px;}"]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PreviousRuling_PreviousRuling__ = __webpack_require__("./components/PreviousRuling/PreviousRuling.js");
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
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_HeadHtml_HeadHtml__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__index_style__["a" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "main-ruling",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Main_Main__["a" /* default */], {
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "days",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "days__closing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "CLOSING IN")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "days__days",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "22"), " days")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "section message content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_BoxSpan_BoxSpan__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "section votes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_PreviousRuling_PreviousRuling__["a" /* default */], {
        name: "Kanye West",
        experience: "1 month in Entretaiment",
        message: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
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
//# sourceMappingURL=4.de776e4ad322860b145f.hot-update.js.map