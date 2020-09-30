webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main.css */ "./src/pages/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/ */ "./src/services/index.js");





var _jsxFileName = "/Users/mlopez/Documents/test/test/src/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;










class App extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "gett", key => {
      return key == "Xalapa";
    });

    this.state = {
      ip: "",
      timezone: [],
      time: "",
      timeMod: "",
      abbreviation: "",
      day: "",
      month: "",
      dayNo: "",
      cities: [],
      country: {}
    };
    this.gett = this.gett.bind(this);
  }

  componentDidMount() {
    Object(_services___WEBPACK_IMPORTED_MODULE_13__["getCities"])().then(({
      data
    }) => {
      console.log(data);
      let oi = {};
      let cit = {};
      let xx = {};
      xx = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(data));
      cit = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(data);
      oi = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(data);

      for (let value in cit) {
        console.log(cit[value]);

        if (cit[value].find(this.gett) !== undefined) {
          console.log(oi[value]);
        }
      }

      let ss = data["Mexico"];
      ss.find(this.gett); //console.log(ss.find(this.gett));

      this.setState({
        country: oi
      });
    });
    let {
      timezone
    } = this.state;
    let time,
        timeMod,
        day,
        month,
        dayNo = "";
    let zone = [];
    Object(_services___WEBPACK_IMPORTED_MODULE_13__["getTimeZone"])().then(({
      data
    }) => {
      zone = data.timezone.split("/");
      time = data.datetime.substring(11, 16);
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
        dayNo
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
      country
    } = this.state;
    let hoursAM = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let hoursPM = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

    const handleClick = () => {
      console.log(ip, timezone);
    };

    console.log(country);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
      integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
      crossorigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Maven+Pro:400,600&display=swap",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), __jsx("meta", {
      charset: "utf-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    })), __jsx("body", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx("div", {
      className: "container-fluid p-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, __jsx("div", {
      className: "container pt-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx("h1", {
      className: "text-center white-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "Worldtime Lite"), __jsx("div", {
      className: "col-12 main-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("div", {
      className: "col-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      className: "form-control custom-textfield",
      id: "timezone",
      placeholder: "Find place or timezone - Press >",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }), __jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "combo-box-demo",
      options: cities,
      getOptionLabel: option => option,
      style: {
        width: 300
      },
      renderInput: params => __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params, {
        label: "Combo box",
        variant: "outlined",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }))), __jsx("div", {
      className: "col-12 mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("div", {
      className: "col-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: "box-icon white-bg-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }), __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12___default.a, {
      className: "box-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    })), __jsx("div", {
      className: "col-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, __jsx("div", {
      className: "col-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("p", {
      className: "text-bold m-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, timezone[1]), __jsx("p", {
      className: "text-small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, timezone[0])), __jsx("div", {
      className: "col-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, __jsx("p", {
      className: "text-bold m-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, time + timeMod + " " + abbreviation), __jsx("p", {
      className: "text-small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "".concat(day, ", ").concat(month, " ").concat(dayNo))))), __jsx("div", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx("div", {
      className: "container-timezone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("div", {
      className: "box-timezone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx("span", {
      className: "text-time-mod mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, month), __jsx("span", {
      className: "text-time-mod",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, dayNo)), hoursAM.map(function (object, i) {
      return __jsx("div", {
        className: "box-timezone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, __jsx("span", {
        className: "text-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, object), __jsx("span", {
        className: "text-time-mod",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "am"));
    }), hoursPM.map(function (object, i) {
      return __jsx("div", {
        className: "box-timezone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, __jsx("span", {
        className: "text-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, object), __jsx("span", {
        className: "text-time-mod",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "am"));
    }))))))), __jsx("button", {
      onClick: handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, "time"))), __jsx("script", {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
      integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
      crossorigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(App));

/***/ })

})
//# sourceMappingURL=index.js.f12185b52d84436210ed.hot-update.js.map