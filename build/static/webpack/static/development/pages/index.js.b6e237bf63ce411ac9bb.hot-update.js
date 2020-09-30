webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: CCodeM, getTimeZone, getCities, getCities2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CCodeM", function() { return CCodeM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeZone", function() { return getTimeZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCities", function() { return getCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCities2", function() { return getCities2; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const apiUrl = undefined;
const CCodeM = "MX";
const getTimeZone = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://worldtimeapi.org/api/ip/");
const getCities = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json');
const getCities2 = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json');

/***/ })

})
//# sourceMappingURL=index.js.b6e237bf63ce411ac9bb.hot-update.js.map