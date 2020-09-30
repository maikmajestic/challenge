webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: CCodeM, getTimeZone, ss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CCodeM", function() { return CCodeM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeZone", function() { return getTimeZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ss", function() { return ss; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const apiUrl = undefined;
const CCodeM = "MX";
const getTimeZone = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://worldtimeapi.org/api/ip/");
const ss = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://www.worldtimebuddy.com/helper/locations?r=0.49769592613683966&q=jalap');

/***/ })

})
//# sourceMappingURL=index.js.8e1d4cd29d97a147c8d6.hot-update.js.map