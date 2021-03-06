webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
false,

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main.css */ "./src/pages/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/ */ "./src/services/index.js");




var _jsxFileName = "/Users/mlopez/Documents/test/test/src/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;










class App extends react__WEBPACK_IMPORTED_MODULE_4___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "gett", key => {
      return key == "Xalapa";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "updateMousePosition", ev => {
      let left = ev.target.offsetLeft;
      left < 15 ? left = 15 : left = ev.target.offsetLeft;
      this.setState({
        mousePosition: left
      });
    });

    this.state = {
      ip: "",
      timezone: [],
      hour: 0,
      time: "",
      timeMod: "",
      abbreviation: "",
      day: "",
      month: "",
      dayNo: "",
      cities: [],
      country: {},
      mousePosition: 15
    };
    this.gett = this.gett.bind(this);
    this.updateMousePosition = this.updateMousePosition.bind(this);
  }

  componentDidMount() {
    Object(_services___WEBPACK_IMPORTED_MODULE_12__["getCities"])().then(({
      data
    }) => {
      console.log(data);
      let oi = {};
      let cit = {};
      let xx = {};
      let vf = [];
      xx = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(data));
      cit = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(data);
      oi = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(data);

      for (let value in cit) {
        if (cit[value].find(this.gett) !== undefined) {
          console.log(oi[value]);
        }
      }

      let ss = data["Mexico"];
      ss.find(this.gett); //console.log(ss.find(this.gett));

      console.log(vf);
      this.setState({
        country: oi
      });
    });
    let {
      timezone,
      mousePosition
    } = this.state;
    let time,
        timeMod,
        day,
        month,
        dayNo,
        hour = "",
        mouseP;
    let zone = [];
    Object(_services___WEBPACK_IMPORTED_MODULE_12__["getTimeZone"])().then(({
      data
    }) => {
      zone = data.timezone.split("/");
      time = data.datetime.substring(11, 16);
      hour = data.datetime.substring(12, 13);
      hour > 1 ? mouseP = mousePosition + hour * 50 : mouseP = 15;
      time.substring(0, 2) > 12 ? timeMod = "pm" : timeMod = "am";
      dayNo = data.datetime.substring(8, 10);

      switch (data.day_of_week) {
        case 0:
          day = "Sun";
          break;

        case 1:
          day = "Mon";
          break;

        case 2:
          day = "Tue";
          break;

        case 3:
          day = "Wed";
          break;

        case 4:
          day = "Thu";
          break;

        case 5:
          day = "Fri";
          break;

        case 6:
          day = "Sat";
          break;
      }

      switch (data.datetime.substring(5, 7)) {
        case "01":
          month = "Jan";
          break;

        case "02":
          month = "Feb";
          break;

        case "03":
          month = "Mar";
          break;

        case "04":
          month = "Apr";
          break;

        case "05":
          month = "May";
          break;

        case "06":
          month = "Jun";
          break;

        case "07":
          month = "Jul";
          break;

        case "08":
          month = "Aug";
          break;

        case "09":
          month = "Sep";
          break;

        case "10":
          month = "Oct";
          break;

        case "11":
          month = "Nov";
          break;

        case "12":
          month = "Dec";
          break;
      }

      this.setState({
        timezone: zone,
        time,
        timeMod,
        abbreviation: data.abbreviation,
        day,
        month,
        dayNo,
        hour,
        mousePosition: mouseP
      });
    });
  }

  render() {
    let {
      timezone,
      time,
      timeMod,
      abbreviation,
      day,
      month,
      dayNo,
      cities,
      country,
      mousePosition,
      hour
    } = this.state;
    let hoursAM = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let hoursPM = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

    const handleClick = () => {
      console.log(ip, timezone);
    };

    return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
      integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
      crossorigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Maven+Pro:400,600&display=swap",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), __jsx("meta", {
      charset: "utf-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    })), __jsx("body", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, __jsx("div", {
      className: "container-fluid p-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx("div", {
      className: "container pt-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("h1", {
      className: "text-center white-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "Worldtime Lite"), __jsx("div", {
      className: "col-12 main-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, __jsx("div", {
      className: "col-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      className: "form-control custom-textfield",
      id: "timezone",
      placeholder: "Find place or timezone - Press >",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }))), __jsx("div", {
      className: "col-12 mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("div", {
      className: "col-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: "box-icon white-bg-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }), __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: "box-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    })), __jsx("div", {
      className: "col-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, __jsx("div", {
      className: "col-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx("p", {
      className: "text-bold m-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, timezone[1]), __jsx("p", {
      className: "text-small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, timezone[0])), __jsx("div", {
      className: "col-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx("p", {
      className: "text-bold m-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, time + timeMod + " " + abbreviation), __jsx("p", {
      className: "text-small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, "".concat(day, ", ").concat(month, " ").concat(dayNo))))), __jsx("div", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx("div", {
      className: "container-timezone",
      onMouseMove: this.updateMousePosition.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx("div", {
      className: "box-timezone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx("span", {
      className: "text-time-mod mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, month), __jsx("span", {
      className: "text-time-mod",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, dayNo)), hoursAM.map(function (object, i) {
      return __jsx("div", {
        key: i,
        className: "box-timezone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, __jsx("span", {
        className: "text-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, object), __jsx("span", {
        className: "text-time-mod",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "am"));
    }), hoursPM.map(function (object, i) {
      return __jsx("div", {
        key: i,
        className: "box-timezone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, __jsx("span", {
        className: "text-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, object), __jsx("span", {
        className: "text-time-mod",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "am"));
    }), __jsx("div", {
      className: "box-hover",
      style: {
        left: mousePosition
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }))))))))), __jsx("script", {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
      integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
      crossorigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(App));

/***/ })

})
//# sourceMappingURL=index.js.1e143c6f7490e6e4698b.hot-update.js.map