/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --dark-text-color: black;\n  --light-text-color: white;\n  --header-footer-backgroundcolor: #046865;\n  --body-backgroundcolor: whitesmoke;\n  --main-section-backgroundcolor: whitesmoke;\n  --hover-color: #21A0A0;\n  --active-color: #011413;\n  --box-bg-color: #046865;\n  --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n\nhtml {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 18px;\n  color: var(--dark-text-color);\n}\n\nbody {\n  background-color: var(--body-backgroundcolor);\n}\n\nimg {\n  height: 200px;\n  width: auto;\n}\n\na {\n  color: var(--light-text-color);\n  text-decoration: none;\n}\n\na:hover {\n  color: var(--hover-color);\n}\n\n.active {\n  color: var(--active-color);\n}\n\nbody > div > section {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\nheader, nav {\n  background-color: var(--header-footer-backgroundcolor);\n  padding: 0 10%;\n  min-height: 5vh;\n  display: flex;\n  align-items: center;\n  color: var(--light-text-color);\n}\n\nnav {\n  display: flex;\n  justify-content: flex-end;\n}\nnav button {\n  border: none;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-color);\n  background-color: var(--header-footer-backgroundcolor);\n  cursor: pointer;\n  margin-right: 20px;\n}\nnav button:hover {\n  color: var(--hover-color);\n}\n\nfooter {\n  background-color: var(--header-footer-backgroundcolor);\n  padding: 0 5%;\n  min-height: 5vh;\n  display: flex;\n  align-items: center;\n  color: var(--light-text-color);\n}\n\nmain {\n  grid-column-start: span 2;\n  background-color: var(--body-backgroundcolor);\n  padding: 20px 5%;\n  min-height: 90vh;\n}\n\nsection.home {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  background-color: var(--main-section-backgroundcolor);\n  margin: 50px 0 100px 0;\n}\nsection.home .welcome {\n  grid-column-start: span 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0 80px 0;\n  background-color: var(--box-bg-color);\n  color: var(--light-text-color);\n  padding: 20px;\n  border-radius: 100px;\n  box-shadow: var(--box-shadow);\n}\nsection.home img {\n  width: 100%;\n  height: auto;\n  border-radius: 100px 10px 100px 10px;\n  box-shadow: var(--box-shadow);\n}\nsection.home figcaption {\n  display: flex;\n  align-items: center;\n  padding-left: 50px;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\nsection.menu {\n  margin: 50px 0 100px 0;\n  display: flex;\n  flex-direction: column;\n}\nsection.menu h2 {\n  background-color: var(--box-bg-color);\n  color: var(--light-text-color);\n  padding: 20px;\n  border-radius: 100px;\n  text-align: center;\n  margin: 0 0 80px 0;\n  box-shadow: var(--box-shadow);\n}\nsection.menu .daily-deal {\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  background-color: var(--box-bg-color);\n  color: var(--light-text-color);\n  width: 60%;\n  align-self: center;\n  margin-bottom: 80px;\n  box-shadow: var(--box-shadow);\n}\nsection.menu .daily-deal img {\n  border-radius: 10px 0 0 10px;\n  width: 40%;\n  height: auto;\n}\nsection.menu .daily-deal .daily-deal-text {\n  padding-left: 100px;\n  font-size: 1.5rem;\n}\nsection.menu .daily-deal h3 {\n  font-size: 2rem;\n}\nsection.menu .daily-deal h4 {\n  margin-top: 20px;\n  background-color: red;\n  border-radius: 30px 10px 30px 10px;\n  padding: 15px 20px;\n}\nsection.menu .daily-deal small {\n  opacity: 0;\n}\nsection.menu .daily-deal:hover small {\n  opacity: 1;\n  transition: 400ms;\n}\nsection.menu #starters, section.menu #burgers, section.menu #salads, section.menu #grills, section.menu #desserts {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-content: center;\n  justify-items: center;\n}\nsection.menu .menu-wrapper h3 {\n  margin: 100px 0 50px 0;\n  font-size: 2rem;\n}\nsection.menu .menu-card {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  background-color: var(--box-bg-color);\n  color: var(--light-text-color);\n  width: 350px;\n  border-radius: 10px;\n  transition: 200ms;\n  box-shadow: var(--box-shadow);\n}\nsection.menu .menu-card img {\n  border-radius: 10px 10px 0 0;\n}\nsection.menu .menu-card small {\n  opacity: 0;\n}\nsection.menu .menu-card .card-text {\n  padding: 20px;\n}\nsection.menu .menu-card .card-text h4, section.menu .menu-card .card-text p {\n  margin-bottom: 10px;\n}\nsection.menu .menu-card:hover small {\n  opacity: 1;\n  transition: 400ms;\n}\n\nsection.contact {\n  margin: 50px 0 100px 0;\n}\nsection.contact .title {\n  background-color: var(--box-bg-color);\n  color: var(--light-text-color);\n  padding: 20px;\n  border-radius: 100px;\n  text-align: center;\n  margin: 0 0 80px 0;\n  box-shadow: var(--box-shadow);\n}\nsection.contact .contact-details {\n  margin: 50px 0;\n}\nsection.contact iframe {\n  width: 50%;\n  height: 500px;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AAEA;EACI,UAAA;EACA,SAAA;EACA,sBAAA;AAAJ;;AAGA;EACI,wBAAA;EACA,yBAAA;EACA,wCAAA;EACA,kCAAA;EACA,0CAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EAEA,qDAAA;AADJ;;AAIA;EACI,qCAAA;EACA,eAAA;EACA,6BAAA;AADJ;;AAIA;EACI,6CAAA;AADJ;;AAIA;EACI,aAAA;EACA,WAAA;AADJ;;AAIA;EACI,8BAAA;EACA,qBAAA;AADJ;;AAIA;EACI,yBAAA;AADJ;;AAIA;EACI,0BAAA;AADJ;;AAIA;EACI,aAAA;EACA,qCAAA;AADJ;;AAIA;EACI,sDAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AADJ;;AAIA;EACI,aAAA;EACA,yBAAA;AADJ;AAGI;EACI,YAAA;EACA,qCAAA;EACA,eAAA;EACA,gBAAA;EACA,wBAAA;EACA,sDAAA;EACA,eAAA;EACA,kBAAA;AADR;AAII;EACI,yBAAA;AAFR;;AAMA;EACI,sDAAA;EACA,aAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAHJ;;AAMA;EACI,yBAAA;EACA,6CAAA;EACA,gBAAA;EACA,gBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,qCAAA;EACA,qDAAA;EACA,sBAAA;AAHJ;AAKI;EACI,yBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,qCAAA;EACA,8BAAA;EACA,aAAA;EACA,oBAAA;EACA,6BAAA;AAHR;AAMI;EACI,WAAA;EACA,YAAA;EACA,oCAAA;EACA,6BAAA;AAJR;AAOI;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AALR;;AASA;EACI,sBAAA;EACA,aAAA;EACA,sBAAA;AANJ;AAQI;EACI,qCAAA;EACA,8BAAA;EACA,aAAA;EACA,oBAAA;EACA,kBAAA;EACA,kBAAA;EACA,6BAAA;AANR;AASI;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,qCAAA;EACA,8BAAA;EACA,UAAA;EACA,kBAAA;EACA,mBAAA;EACA,6BAAA;AAPR;AASQ;EACI,4BAAA;EACA,UAAA;EACA,YAAA;AAPZ;AAUQ;EACI,mBAAA;EACA,iBAAA;AARZ;AAWQ;EACI,eAAA;AATZ;AAYQ;EACI,gBAAA;EACA,qBAAA;EACA,kCAAA;EACA,kBAAA;AAVZ;AAaQ;EACI,UAAA;AAXZ;AAeI;EACI,UAAA;EACA,iBAAA;AAbR;AAgBI;EACI,aAAA;EACA,qCAAA;EACA,uBAAA;EACA,qBAAA;AAdR;AAkBQ;EACI,sBAAA;EACA,eAAA;AAhBZ;AAoBI;EACI,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,qCAAA;EACA,8BAAA;EACA,YAAA;EACA,mBAAA;EACA,iBAAA;EACA,6BAAA;AAlBR;AAoBQ;EACI,4BAAA;AAlBZ;AAqBQ;EACI,UAAA;AAnBZ;AAsBQ;EACI,aAAA;AApBZ;AAsBY;EACI,mBAAA;AApBhB;AAyBI;EACI,UAAA;EACA,iBAAA;AAvBR;;AA2BA;EACI,sBAAA;AAxBJ;AA0BI;EACI,qCAAA;EACA,8BAAA;EACA,aAAA;EACA,oBAAA;EACA,kBAAA;EACA,kBAAA;EACA,6BAAA;AAxBR;AA2BI;EACI,cAAA;AAzBR;AA4BI;EACI,UAAA;EACA,aAAA;AA1BR","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --dark-text-color: black;\n    --light-text-color: white;\n    --header-footer-backgroundcolor: #046865;\n    --body-backgroundcolor: whitesmoke;\n    --main-section-backgroundcolor: whitesmoke;\n    --hover-color: #21A0A0;\n    --active-color: #011413;\n    --box-bg-color: #046865;\n\n    --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n\nhtml {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 18px;\n    color: var(--dark-text-color);\n}\n\nbody {\n    background-color: var(--body-backgroundcolor);\n}\n\nimg {\n    height: 200px;\n    width: auto;\n}\n\na {\n    color: var(--light-text-color);\n    text-decoration: none;\n}\n\na:hover {\n    color: var(--hover-color);\n}\n\n.active {\n    color: var(--active-color);\n}\n\nbody > div > section {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n}\n\nheader, nav {\n    background-color: var(--header-footer-backgroundcolor);\n    padding: 0 10%;\n    min-height: 5vh;\n    display: flex;\n    align-items: center;\n    color: var(--light-text-color);\n}\n\nnav {\n    display: flex;\n    justify-content: flex-end;\n\n    button {\n        border: none;\n        font-family: 'Montserrat', sans-serif;\n        font-size: 18px;\n        font-weight: 600;\n        color: var(--text-color);\n        background-color: var(--header-footer-backgroundcolor);\n        cursor: pointer;\n        margin-right: 20px;\n    }\n\n    button:hover {\n        color: var(--hover-color);\n    }\n}\n\nfooter {\n    background-color: var(--header-footer-backgroundcolor);\n    padding: 0 5%;\n    min-height: 5vh;\n    display: flex;\n    align-items: center;\n    color: var(--light-text-color);\n}\n\nmain {\n    grid-column-start: span 2;\n    background-color: var(--body-backgroundcolor);\n    padding: 20px 5%;\n    min-height: 90vh;\n}\n\nsection.home {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    background-color: var(--main-section-backgroundcolor);\n    margin: 50px 0 100px 0;\n    \n    .welcome {\n        grid-column-start: span 2;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        margin: 0 0 80px 0;\n        background-color: var(--box-bg-color);\n        color: var(--light-text-color);\n        padding: 20px;\n        border-radius: 100px;\n        box-shadow: var(--box-shadow);\n    }\n\n    img {\n        width: 100%;\n        height: auto;\n        border-radius: 100px 10px 100px 10px;\n        box-shadow: var(--box-shadow);\n    }\n\n    figcaption {\n        display: flex;\n        align-items: center;\n        padding-left: 50px;\n        font-size: 1.2rem;\n        font-weight: 600;\n    }\n}\n\nsection.menu {\n    margin: 50px 0 100px 0;\n    display: flex;\n    flex-direction: column;\n\n    h2 {\n        background-color: var(--box-bg-color);\n        color: var(--light-text-color);\n        padding: 20px;\n        border-radius: 100px;\n        text-align: center;\n        margin: 0 0 80px 0;\n        box-shadow: var(--box-shadow);\n    }\n\n    .daily-deal {\n        display: flex;\n        align-items: center;\n        border-radius: 10px;\n        background-color: var(--box-bg-color);\n        color: var(--light-text-color);\n        width: 60%;\n        align-self: center;\n        margin-bottom: 80px;\n        box-shadow: var(--box-shadow);\n\n        img {\n            border-radius: 10px 0 0 10px;\n            width: 40%;\n            height: auto;\n        }\n\n        .daily-deal-text {\n            padding-left: 100px;\n            font-size: 1.5rem;\n        }\n\n        h3 {\n            font-size: 2rem;\n        }\n\n        h4 {\n            margin-top: 20px;\n            background-color: red;\n            border-radius: 30px 10px 30px 10px;\n            padding: 15px 20px;\n        }\n\n        small {\n            opacity: 0;\n        }\n    }\n\n    .daily-deal:hover small {\n        opacity: 1;\n        transition: 400ms;\n    }\n\n    #starters, #burgers, #salads, #grills, #desserts {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        justify-content: center;\n        justify-items: center;\n    }\n\n    .menu-wrapper {\n        h3 {\n            margin: 100px 0 50px 0;\n            font-size: 2rem;\n        }\n    }\n\n    .menu-card {\n        display: flex;\n        flex-direction: column;\n        text-align: center;\n        background-color: var(--box-bg-color);\n        color: var(--light-text-color);\n        width: 350px;\n        border-radius: 10px;\n        transition: 200ms;\n        box-shadow: var(--box-shadow);\n\n        img {\n            border-radius: 10px 10px 0 0;\n        }\n\n        small {\n            opacity: 0;\n        }\n        \n        .card-text {\n            padding: 20px;\n\n            h4, p {\n                margin-bottom: 10px;\n            }\n        }\n    }\n\n    .menu-card:hover small {\n        opacity: 1;\n        transition: 400ms;\n    }\n}\n\nsection.contact {\n    margin: 50px 0 100px 0;\n\n    .title {\n        background-color: var(--box-bg-color);\n        color: var(--light-text-color);\n        padding: 20px;\n        border-radius: 100px;\n        text-align: center;\n        margin: 0 0 80px 0;\n        box-shadow: var(--box-shadow);\n    }\n\n    .contact-details {\n        margin: 50px 0;\n    }\n\n    iframe {\n        width: 50%;\n        height: 500px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
function Footer() {
    const footer = document.createElement('footer');
    const h3 = document.createElement('h3');

    h3.textContent = 'WebVahvero';

    footer.appendChild(h3);

    return footer;
};

/***/ }),

/***/ "./src/pages/Contact.js":
/*!******************************!*\
  !*** ./src/pages/Contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
function Contact() {
    const contact = document.createElement('section');
    contact.classList.add('contact');

    const title = document.createElement('div');
    title.classList.add('title');
    const h2 = document.createElement('h2');
    h2.textContent = 'Contact';

    const h3 = document.createElement('h3');
    h3.textContent = 'We are open every day from 12 to 20!';

    const infoWrap = document.createElement('div');
    infoWrap.classList.add('contact-details');

    const address = document.createElement('p');
    address.textContent = 'Vaasanpuistikko 8, 65100 Vaasa';

    const phone = document.createElement('p');
    phone.textContent = '666 666 666';

    const email = document.createElement('p');
    email.textContent = 'internetrestaurant@notreal.fi';

    infoWrap.appendChild(address);
    infoWrap.appendChild(phone);
    infoWrap.appendChild(email);

    const map = document.createElement('iframe');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1805.5131509810258!2d21.60985699111362!3d63.09386691089372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467d6042ce0226b7%3A0xe0006ce619f6826d!2sVaasanpuistikko%208%2C%2065100%20Vaasa!5e0!3m2!1sfi!2sfi!4v1664382406952!5m2!1sfi!2sfi';
    map.loading = 'lazy';

    title.appendChild(h2);
    title.appendChild(h3);
    contact.appendChild(title);
    contact.appendChild(infoWrap);
    contact.appendChild(map);

    return contact;
};

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getDay": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/restaurant.jpg */ "./src/img/restaurant.jpg");


function Home() {
    // Page Title
    const home = document.createElement('section');
    home.classList.add('home');
    const h2 = document.createElement('h2');
    h2.textContent = 'Home';

    // Welcome text
    const h3 = document.createElement('h3');
    h3.textContent = `Welcome to Internet restaurant! ${getHours() > 12 && getHours() < 20 ? 'We are currently open!' : 'We are closed at the moment!'} Have a good ${getDay()}`;

    const welcomeBlock = document.createElement('div');
    welcomeBlock.classList.add('welcome');

    welcomeBlock.appendChild(h2);
    welcomeBlock.appendChild(h3);

    // Restaurant image
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;
    figure.appendChild(img);

    // Info text
    const figcaption = document.createElement('figcaption');
    const p = document.createElement('p');
    p.textContent = 'The internet restaurant is not a normal restaurant as its only location is on the internet. You can view our delicious dishes on the Menu page, but unfortunately you cant order them as we dont really exist.';
    figcaption.appendChild(p);

    
    home.appendChild(welcomeBlock);
    home.appendChild(figure);
    home.appendChild(figcaption);

    return home;
};

function getDay() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    return weekday[d.getDay()];
};

function getHours() {
    const d = new Date();
    return d.getHours();
};

/***/ }),

/***/ "./src/pages/Menu.js":
/*!***************************!*\
  !*** ./src/pages/Menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _img_nachos_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/nachos.jpg */ "./src/img/nachos.jpg");
/* harmony import */ var _img_nachoplate_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/nachoplate.jpg */ "./src/img/nachoplate.jpg");
/* harmony import */ var _img_mozzarella_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/mozzarella.jpg */ "./src/img/mozzarella.jpg");
/* harmony import */ var _img_cheesebrg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/cheesebrg.jpg */ "./src/img/cheesebrg.jpg");
/* harmony import */ var _img_baconbrg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/baconbrg.jpg */ "./src/img/baconbrg.jpg");
/* harmony import */ var _img_chickenbrg_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/chickenbrg.jpg */ "./src/img/chickenbrg.jpg");
/* harmony import */ var _img_halloum_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/halloum.jpg */ "./src/img/halloum.jpg");
/* harmony import */ var _img_chevre_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/chevre.jpg */ "./src/img/chevre.jpg");
/* harmony import */ var _img_chickensalad_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/chickensalad.jpg */ "./src/img/chickensalad.jpg");
/* harmony import */ var _img_salmongrill_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/salmongrill.jpg */ "./src/img/salmongrill.jpg");
/* harmony import */ var _img_steak_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/steak.jpg */ "./src/img/steak.jpg");
/* harmony import */ var _img_chickenGrill_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/chickenGrill.jpg */ "./src/img/chickenGrill.jpg");
/* harmony import */ var _img_icecream_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/icecream.jpg */ "./src/img/icecream.jpg");
/* harmony import */ var _img_sorbet_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/sorbet.jpg */ "./src/img/sorbet.jpg");
/* harmony import */ var _img_fondant_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/fondant.jpg */ "./src/img/fondant.jpg");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Home */ "./src/pages/Home.js");

















function Menu() {
    let foodItems = [];

    class Food {
        constructor(category, name, desc, price, img, imgCredits) {
            this.category = category;
            this.name = name;
            this.desc = desc;
            this.price = price;
            this.img = img;
            this.imgCredits = imgCredits;
        }
    }

    const starter1 = new Food('starter', 'Nachos', 'With a side of salsa dip', 4.20, _img_nachos_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Photo by <a href="https://unsplash.com/@coffeefyworkafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Coffeefy Workafe</a>');
    const starter2 = new Food('starter', 'Nacho Plate', 'Nachos, House guacamole, salsa, French cream, warm cheese sauce, jalapenos', 10.90, _img_nachoplate_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Photo by <a href="https://unsplash.com/@courtneymcook?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Courtney Cook</a>');
    const starter3 = new Food('starter', 'Mozzarella Sticks', 'With a side of Salad and garlic dip.', 7.90, _img_mozzarella_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Photo by <a href="https://unsplash.com/@kapoorparas28?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Paras Kapoor</a>');
    const burger1 = new Food('burger', 'Cheese Hamburger', 'Hamburger with cheese', 14.90, _img_cheesebrg_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Photo by <a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a>');
    const burger2 = new Food('burger', 'Bacon Hamburger', 'Hamburger with bacon', 14.90, _img_baconbrg_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Photo by <a href="https://unsplash.com/es/@fifernando?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fidel Fernando</a>');
    const burger3 = new Food('burger', 'Chicken Hamburger', 'Hamburger with chicken', 14.90, _img_chickenbrg_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Photo by <a href="https://unsplash.com/@dilja96?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Didi Miam</a>');
    const salad1 = new Food('salad', 'Halloum', 'Salad with halloum', 16.90, _img_halloum_jpg__WEBPACK_IMPORTED_MODULE_6__, 'Photo by <a href="https://unsplash.com/@dovilerm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dovile Ramoskaite</a>');
    const salad2 = new Food('salad', 'Chevre', 'Salad with Chevre', 16.90, _img_chevre_jpg__WEBPACK_IMPORTED_MODULE_7__, 'Photo by <a href="https://unsplash.com/@eatoutcologne?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">EAT OUT COLOGNE</a>');
    const salad3 = new Food('salad', 'Chicken', 'Salad with Chicken', 16.90, _img_chickensalad_jpg__WEBPACK_IMPORTED_MODULE_8__, 'Photo by <a href="https://unsplash.com/es/@fallonmichaeltx?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fallon Michael</a>');
    const grill1 = new Food('grill', 'Salmon', 'Salmon with vegetables and potatoes in sauce', 25.50, _img_salmongrill_jpg__WEBPACK_IMPORTED_MODULE_9__, 'Photo by <a href="https://unsplash.com/ja/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">micheile dot com</a>');
    const grill2 = new Food('grill', 'Steak', 'Steak with vegetables and potatoes in sauce', 26.90, _img_steak_jpg__WEBPACK_IMPORTED_MODULE_10__, 'Photo by <a href="https://unsplash.com/@covertnine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tim Toomey</a>');
    const grill3 = new Food('grill', 'Chicken', 'Chicken with vegetables and potatoes in sauce', 21.50, _img_chickenGrill_jpg__WEBPACK_IMPORTED_MODULE_11__, 'Photo by <a href="https://unsplash.com/@tempestdesigner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mark DeYoung</a>');
    const dessert1 = new Food('dessert', 'Ice cream', 'Vanilla Ice Cream with suprise sauce', 7.90, _img_icecream_jpg__WEBPACK_IMPORTED_MODULE_12__, 'Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">charlesdeluvio</a>');
    const dessert2 = new Food('dessert', 'Sorbet', 'Melon sorbet with love', 3.90, _img_sorbet_jpg__WEBPACK_IMPORTED_MODULE_13__, 'Photo by <a href="https://unsplash.com/@honeypoppet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sandie Clarke</a>');
    const dessert3 = new Food('dessert', 'Chocolate Fondant', 'Comfort treat with vanilla ice cream', 8.50, _img_fondant_jpg__WEBPACK_IMPORTED_MODULE_14__, 'Photo by <a href="https://unsplash.com/@grisskitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Max Griss</a>');

    foodItems.push(starter1);
    foodItems.push(starter2);
    foodItems.push(starter3);
    foodItems.push(burger1);
    foodItems.push(burger2);
    foodItems.push(burger3);
    foodItems.push(salad1);
    foodItems.push(salad2);
    foodItems.push(salad3);
    foodItems.push(grill1);
    foodItems.push(grill2);
    foodItems.push(grill3);
    foodItems.push(dessert1);
    foodItems.push(dessert2);
    foodItems.push(dessert3);

    console.log(foodItems[0].category)

    const starterWrapper = document.createElement('div');
    starterWrapper.setAttribute('id', 'starters');
    const burgerWrapper = document.createElement('div');
    burgerWrapper.setAttribute('id', 'burgers');
    const saladWrapper = document.createElement('div');
    saladWrapper.setAttribute('id', 'salads');
    const grillWrapper = document.createElement('div');
    grillWrapper.setAttribute('id', 'grills');
    const dessertWrapper = document.createElement('div');
    dessertWrapper.setAttribute('id', 'desserts');

    let starters = '';
    let burgers = '';
    let salads = '';
    let grills = '';
    let desserts = '';

    foodItems.forEach(food => {
        switch(food.category) {
            case 'starter':
                starters +=
                `
                    <div id="${food.category}" class="menu-card">
                        <img src="${food.img}" alt="${food.name}">
                        <small>${food.imgCredits}</small>
                        <div class="card-text">
                            <h4 class="food-title">${food.name}</h4>
                            <p class="food-desc">${food.desc}<p>
                            <p class="food-price">${food.price}€<p>
                        </div>
                    </div>
                `
            break;
            case 'burger':
                burgers +=
                `
                    <div id="${food.category}" class="menu-card">
                        <img src="${food.img}" alt="${food.name}">
                        <small>${food.imgCredits}</small>
                        <div class="card-text">
                            <h4 class="food-title">${food.name}</h4>
                            <p class="food-desc">${food.desc}<p>
                            <p class="food-price">${food.price}€<p>
                        </div>
                    </div>
                `
            break;
            case 'salad':
                salads +=
                `
                    <div id="${food.category}" class="menu-card">
                        <img src="${food.img}" alt="${food.name}">
                        <small>${food.imgCredits}</small>
                        <div class="card-text">
                            <h4 class="food-title">${food.name}</h4>
                            <p class="food-desc">${food.desc}<p>
                            <p class="food-price">${food.price}€<p>
                        </div>
                    </div>
                `
            break;
            case 'grill':
                grills +=
                `
                    <div id="${food.category}" class="menu-card">
                        <img src="${food.img}" alt="${food.name}">
                        <small>${food.imgCredits}</small>
                        <div class="card-text">
                            <h4 class="food-title">${food.name}</h4>
                            <p class="food-desc">${food.desc}<p>
                            <p class="food-price">${food.price}€<p>
                        </div>
                    </div>
                `
            break;
            case 'dessert':
                desserts +=
                `
                    <div id="${food.category}" class="menu-card">
                        <img src="${food.img}" alt="${food.name}">
                        <small>${food.imgCredits}</small>
                        <div class="card-text">
                            <h4 class="food-title">${food.name}</h4>
                            <p class="food-desc">${food.desc}<p>
                            <p class="food-price">${food.price}€<p>
                        </div>
                    </div>
                `
            break;
        }
    });

    starterWrapper.innerHTML = starters;
    burgerWrapper.innerHTML = burgers;
    saladWrapper.innerHTML = salads;
    grillWrapper.innerHTML = grills;
    dessertWrapper.innerHTML = desserts;

    const menu = document.createElement('section');
    menu.classList.add('menu');
    const h2 = document.createElement('h2');
    h2.textContent = 'Menu';

    const startersTitle = document.createElement('h3');
    startersTitle.textContent = 'Starters';
    const burgersTitle = document.createElement('h3');
    burgersTitle.textContent = 'Burgers';
    const saladsTitle = document.createElement('h3');
    saladsTitle.textContent = 'Salads';
    const grillTitle = document.createElement('h3');
    grillTitle.textContent = 'From the Grill';
    const dessertTitle = document.createElement('h3');
    dessertTitle.textContent = 'Desserts';

    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper');
    menuWrapper.appendChild(startersTitle);
    menuWrapper.appendChild(starterWrapper);
    menuWrapper.appendChild(burgersTitle);
    menuWrapper.appendChild(burgerWrapper);
    menuWrapper.appendChild(saladsTitle);
    menuWrapper.appendChild(saladWrapper);
    menuWrapper.appendChild(grillTitle);
    menuWrapper.appendChild(grillWrapper);
    menuWrapper.appendChild(dessertTitle);
    menuWrapper.appendChild(dessertWrapper);

    const dailyDeal = getDailyDeal(foodItems);
    const dailyDealCard = document.createElement('div');
    dailyDealCard.classList.add('daily-deal');

    const dailyDealImg = document.createElement('img');
    dailyDealImg.src = dailyDeal.img;
    const dailyDealImgCredits = document.createElement('small');
    dailyDealImgCredits.innerHTML = dailyDeal.imgCredits;
    const dailyDealTitle = document.createElement('h3');
    dailyDealTitle.textContent = dailyDeal.name;
    const dailyDealAle = document.createElement('h4');
    dailyDealAle.textContent = 'Daily Deal -20% off!';
    const dailyDealDesc = document.createElement('p');
    dailyDealDesc.textContent = dailyDeal.desc;
    const dailyDealPrice = document.createElement('p');
    dailyDealPrice.textContent = dailyDeal.price * 0.80 + "€";

    const dailydealCardeTexts = document.createElement('div');
    dailydealCardeTexts.classList.add('daily-deal-text');

    dailydealCardeTexts.appendChild(dailyDealImgCredits);
    dailydealCardeTexts.appendChild(dailyDealTitle);
    dailydealCardeTexts.appendChild(dailyDealDesc);
    dailydealCardeTexts.appendChild(dailyDealPrice);
    dailydealCardeTexts.appendChild(dailyDealAle);

    dailyDealCard.appendChild(dailyDealImg);
    dailyDealCard.appendChild(dailydealCardeTexts);

    menu.appendChild(h2);
    menu.appendChild(dailyDealCard);
    menu.appendChild(menuWrapper);

    return menu;
};

function getDailyDeal(foodItems) {
    switch((0,_Home__WEBPACK_IMPORTED_MODULE_15__.getDay)()) {
        case 'Sunday':
            return foodItems[3];
        break;
        case 'Monday':
            return foodItems[4];
        break;
        case 'Tuesday':
            return foodItems[5];
        break;
        case 'Wednesday':
            return foodItems[6];
        break;
        case 'Thursday':
            return foodItems[7];
        break;
        case 'Friday':
            return foodItems[8];
        break;
        case 'Saturday':
            return foodItems[9];
        break;
    }
}

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ view)
/* harmony export */ });
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Menu */ "./src/pages/Menu.js");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Contact */ "./src/pages/Contact.js");




function view() {

    const view = document.createElement('section');
    const main = document.createElement('main');

    const nav = document.createElement('nav');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    
    const navBtns = [homeBtn, menuBtn, contactBtn];

    navBtns.forEach(navBtn => {
        navBtn.addEventListener('click', () => {
            removeActive(navBtns);

            switch(navBtn.textContent) {
                case 'Home':
                    removeChild(main);
                    main.appendChild((0,_pages_Home__WEBPACK_IMPORTED_MODULE_0__["default"])());
                    navBtn.classList.add('active');
                break;
                case 'Menu':
                    removeChild(main);
                    main.appendChild((0,_pages_Menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
                    navBtn.classList.add('active');
                break;
                case 'Contact':
                    removeChild(main);
                    main.appendChild((0,_pages_Contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
                    navBtn.classList.add('active');
                break;
                default:
                    removeChild(main);
                    main.appendChild((0,_pages_Home__WEBPACK_IMPORTED_MODULE_0__["default"])());
                    navBtn.classList.add('active');
                break;
            }
        });
    });

    const header = document.createElement('header');
    const h1 = document.createElement('h1');

    h1.textContent = 'The Internet Restaurant';
    
    header.appendChild(h1);

    main.appendChild((0,_pages_Contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
    view.appendChild(header);
    view.appendChild(nav);
    view.appendChild(main);

    return view
};

function removeChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function removeActive(navBtns) {

    navBtns.forEach(btn => {
        btn.classList.remove('active');
    })
};

/***/ }),

/***/ "./src/img/baconbrg.jpg":
/*!******************************!*\
  !*** ./src/img/baconbrg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29d2983c6e7523716c11.jpg";

/***/ }),

/***/ "./src/img/cheesebrg.jpg":
/*!*******************************!*\
  !*** ./src/img/cheesebrg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a932085458b215b062de.jpg";

/***/ }),

/***/ "./src/img/chevre.jpg":
/*!****************************!*\
  !*** ./src/img/chevre.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16ac957cd28e909b28c1.jpg";

/***/ }),

/***/ "./src/img/chickenGrill.jpg":
/*!**********************************!*\
  !*** ./src/img/chickenGrill.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "639255a6cb1e17f80cc5.jpg";

/***/ }),

/***/ "./src/img/chickenbrg.jpg":
/*!********************************!*\
  !*** ./src/img/chickenbrg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26782be5ad131daabd63.jpg";

/***/ }),

/***/ "./src/img/chickensalad.jpg":
/*!**********************************!*\
  !*** ./src/img/chickensalad.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67059487eb9d9cf82690.jpg";

/***/ }),

/***/ "./src/img/fondant.jpg":
/*!*****************************!*\
  !*** ./src/img/fondant.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13e1475968a95ff831ac.jpg";

/***/ }),

/***/ "./src/img/halloum.jpg":
/*!*****************************!*\
  !*** ./src/img/halloum.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0e01facbbb0cfdd29e9.jpg";

/***/ }),

/***/ "./src/img/icecream.jpg":
/*!******************************!*\
  !*** ./src/img/icecream.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f41487c2197fb2c0d51a.jpg";

/***/ }),

/***/ "./src/img/mozzarella.jpg":
/*!********************************!*\
  !*** ./src/img/mozzarella.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "540d20e23929a984c1ea.jpg";

/***/ }),

/***/ "./src/img/nachoplate.jpg":
/*!********************************!*\
  !*** ./src/img/nachoplate.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0de4fabd3cc1a562cb28.jpg";

/***/ }),

/***/ "./src/img/nachos.jpg":
/*!****************************!*\
  !*** ./src/img/nachos.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91afa1a3031421d6dcea.jpg";

/***/ }),

/***/ "./src/img/restaurant.jpg":
/*!********************************!*\
  !*** ./src/img/restaurant.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "496eb3fe4d69e349dbe8.jpg";

/***/ }),

/***/ "./src/img/salmongrill.jpg":
/*!*********************************!*\
  !*** ./src/img/salmongrill.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7975475c2145f015e2ec.jpg";

/***/ }),

/***/ "./src/img/sorbet.jpg":
/*!****************************!*\
  !*** ./src/img/sorbet.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8689970bdc68ecc419b8.jpg";

/***/ }),

/***/ "./src/img/steak.jpg":
/*!***************************!*\
  !*** ./src/img/steak.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7fd05b740fe44dcf8e87.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");




const appendToPage = () => {
    const content = document.createElement('div');

    content.appendChild((0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])());

    content.appendChild((0,_components_Footer__WEBPACK_IMPORTED_MODULE_0__["default"])());

    return content;

};

window.onload = () => {
    document.body.appendChild(appendToPage());
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdB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QTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0F5QztBQUNmO0FBQ0c7O0FBRTdCO0FBQ0E7O0FBRUEsd0JBQXdCLGlEQUFJOztBQUU1Qix3QkFBd0IsOERBQU07O0FBRTlCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2U1ZDgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3BhZ2VzL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3BhZ2VzL01lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZGFyay10ZXh0LWNvbG9yOiBibGFjaztcXG4gIC0tbGlnaHQtdGV4dC1jb2xvcjogd2hpdGU7XFxuICAtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZGNvbG9yOiAjMDQ2ODY1O1xcbiAgLS1ib2R5LWJhY2tncm91bmRjb2xvcjogd2hpdGVzbW9rZTtcXG4gIC0tbWFpbi1zZWN0aW9uLWJhY2tncm91bmRjb2xvcjogd2hpdGVzbW9rZTtcXG4gIC0taG92ZXItY29sb3I6ICMyMUEwQTA7XFxuICAtLWFjdGl2ZS1jb2xvcjogIzAxMTQxMztcXG4gIC0tYm94LWJnLWNvbG9yOiAjMDQ2ODY1O1xcbiAgLS1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLXRleHQtY29sb3IpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZGNvbG9yKTtcXG59XFxuXFxuaW1nIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dC1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG59XFxuXFxuYm9keSA+IGRpdiA+IHNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbmhlYWRlciwgbmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZGNvbG9yKTtcXG4gIHBhZGRpbmc6IDAgMTAlO1xcbiAgbWluLWhlaWdodDogNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dC1jb2xvcik7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxubmF2IGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZGNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxubmF2IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kY29sb3IpO1xcbiAgcGFkZGluZzogMCA1JTtcXG4gIG1pbi1oZWlnaHQ6IDV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQtY29sb3IpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmRjb2xvcik7XFxuICBwYWRkaW5nOiAyMHB4IDUlO1xcbiAgbWluLWhlaWdodDogOTB2aDtcXG59XFxuXFxuc2VjdGlvbi5ob21lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zZWN0aW9uLWJhY2tncm91bmRjb2xvcik7XFxuICBtYXJnaW46IDUwcHggMCAxMDBweCAwO1xcbn1cXG5zZWN0aW9uLmhvbWUgLndlbGNvbWUge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAgODBweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbn1cXG5zZWN0aW9uLmhvbWUgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHggMTBweCAxMDBweCAxMHB4O1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcbnNlY3Rpb24uaG9tZSBmaWdjYXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5zZWN0aW9uLm1lbnUge1xcbiAgbWFyZ2luOiA1MHB4IDAgMTAwcHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5zZWN0aW9uLm1lbnUgaDIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwIDgwcHggMDtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbn1cXG5zZWN0aW9uLm1lbnUgLmRhaWx5LWRlYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0LWNvbG9yKTtcXG4gIHdpZHRoOiA2MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcbnNlY3Rpb24ubWVudSAuZGFpbHktZGVhbCBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbnNlY3Rpb24ubWVudSAuZGFpbHktZGVhbCAuZGFpbHktZGVhbC10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuc2VjdGlvbi5tZW51IC5kYWlseS1kZWFsIGgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuc2VjdGlvbi5tZW51IC5kYWlseS1kZWFsIGg0IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4IDEwcHggMzBweCAxMHB4O1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbn1cXG5zZWN0aW9uLm1lbnUgLmRhaWx5LWRlYWwgc21hbGwge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuc2VjdGlvbi5tZW51IC5kYWlseS1kZWFsOmhvdmVyIHNtYWxsIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiA0MDBtcztcXG59XFxuc2VjdGlvbi5tZW51ICNzdGFydGVycywgc2VjdGlvbi5tZW51ICNidXJnZXJzLCBzZWN0aW9uLm1lbnUgI3NhbGFkcywgc2VjdGlvbi5tZW51ICNncmlsbHMsIHNlY3Rpb24ubWVudSAjZGVzc2VydHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuc2VjdGlvbi5tZW51IC5tZW51LXdyYXBwZXIgaDMge1xcbiAgbWFyZ2luOiAxMDBweCAwIDUwcHggMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuc2VjdGlvbi5tZW51IC5tZW51LWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQtY29sb3IpO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcbnNlY3Rpb24ubWVudSAubWVudS1jYXJkIGltZyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbn1cXG5zZWN0aW9uLm1lbnUgLm1lbnUtY2FyZCBzbWFsbCB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5zZWN0aW9uLm1lbnUgLm1lbnUtY2FyZCAuY2FyZC10ZXh0IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbnNlY3Rpb24ubWVudSAubWVudS1jYXJkIC5jYXJkLXRleHQgaDQsIHNlY3Rpb24ubWVudSAubWVudS1jYXJkIC5jYXJkLXRleHQgcCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5zZWN0aW9uLm1lbnUgLm1lbnUtY2FyZDpob3ZlciBzbWFsbCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogNDAwbXM7XFxufVxcblxcbnNlY3Rpb24uY29udGFjdCB7XFxuICBtYXJnaW46IDUwcHggMCAxMDBweCAwO1xcbn1cXG5zZWN0aW9uLmNvbnRhY3QgLnRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dC1jb2xvcik7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMCA4MHB4IDA7XFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG59XFxuc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWRldGFpbHMge1xcbiAgbWFyZ2luOiA1MHB4IDA7XFxufVxcbnNlY3Rpb24uY29udGFjdCBpZnJhbWUge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxxREFBQTtBQURKOztBQUlBO0VBQ0kscUNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFESjs7QUFJQTtFQUNJLDZDQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksOEJBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7QUFESjs7QUFJQTtFQUNJLDBCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7QUFESjs7QUFJQTtFQUNJLHNEQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBREo7QUFHSTtFQUNJLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0RBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUlJO0VBQ0kseUJBQUE7QUFGUjs7QUFNQTtFQUNJLHNEQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUhKOztBQU1BO0VBQ0kseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHFEQUFBO0VBQ0Esc0JBQUE7QUFISjtBQUtJO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUFIUjtBQU1JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBSlI7QUFPSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxSOztBQVNBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFOSjtBQVFJO0VBQ0kscUNBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQU5SO0FBU0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBUFI7QUFTUTtFQUNJLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFQWjtBQVVRO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQVJaO0FBV1E7RUFDSSxlQUFBO0FBVFo7QUFZUTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBVlo7QUFhUTtFQUNJLFVBQUE7QUFYWjtBQWVJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBYlI7QUFnQkk7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBZFI7QUFrQlE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QUFoQlo7QUFvQkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBbEJSO0FBb0JRO0VBQ0ksNEJBQUE7QUFsQlo7QUFxQlE7RUFDSSxVQUFBO0FBbkJaO0FBc0JRO0VBQ0ksYUFBQTtBQXBCWjtBQXNCWTtFQUNJLG1CQUFBO0FBcEJoQjtBQXlCSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQXZCUjs7QUEyQkE7RUFDSSxzQkFBQTtBQXhCSjtBQTBCSTtFQUNJLHFDQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUF4QlI7QUEyQkk7RUFDSSxjQUFBO0FBekJSO0FBNEJJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUExQlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWRhcmstdGV4dC1jb2xvcjogYmxhY2s7XFxuICAgIC0tbGlnaHQtdGV4dC1jb2xvcjogd2hpdGU7XFxuICAgIC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kY29sb3I6ICMwNDY4NjU7XFxuICAgIC0tYm9keS1iYWNrZ3JvdW5kY29sb3I6IHdoaXRlc21va2U7XFxuICAgIC0tbWFpbi1zZWN0aW9uLWJhY2tncm91bmRjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS1ob3Zlci1jb2xvcjogIzIxQTBBMDtcXG4gICAgLS1hY3RpdmUtY29sb3I6ICMwMTE0MTM7XFxuICAgIC0tYm94LWJnLWNvbG9yOiAjMDQ2ODY1O1xcblxcbiAgICAtLWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstdGV4dC1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmRjb2xvcik7XFxufVxcblxcbmltZyB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQtY29sb3IpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxufVxcblxcbmJvZHkgPiBkaXYgPiBzZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuaGVhZGVyLCBuYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmRjb2xvcik7XFxuICAgIHBhZGRpbmc6IDAgMTAlO1xcbiAgICBtaW4taGVpZ2h0OiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0LWNvbG9yKTtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kY29sb3IpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbiAgICB9XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZGNvbG9yKTtcXG4gICAgcGFkZGluZzogMCA1JTtcXG4gICAgbWluLWhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dC1jb2xvcik7XFxufVxcblxcbm1haW4ge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmRjb2xvcik7XFxuICAgIHBhZGRpbmc6IDIwcHggNSU7XFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxufVxcblxcbnNlY3Rpb24uaG9tZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc2VjdGlvbi1iYWNrZ3JvdW5kY29sb3IpO1xcbiAgICBtYXJnaW46IDUwcHggMCAxMDBweCAwO1xcbiAgICBcXG4gICAgLndlbGNvbWUge1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiAwIDAgODBweCAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnLWNvbG9yKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0LWNvbG9yKTtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4IDEwcHggMTAwcHggMTBweDtcXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICB9XFxuXFxuICAgIGZpZ2NhcHRpb24ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIH1cXG59XFxuXFxuc2VjdGlvbi5tZW51IHtcXG4gICAgbWFyZ2luOiA1MHB4IDAgMTAwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgaDIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnLWNvbG9yKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0LWNvbG9yKTtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogMCAwIDgwcHggMDtcXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICB9XFxuXFxuICAgIC5kYWlseS1kZWFsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1iZy1jb2xvcik7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dC1jb2xvcik7XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcblxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRhaWx5LWRlYWwtdGV4dCB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGgzIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICBoNCB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAxMHB4IDMwcHggMTBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBzbWFsbCB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZGFpbHktZGVhbDpob3ZlciBzbWFsbCB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNpdGlvbjogNDAwbXM7XFxuICAgIH1cXG5cXG4gICAgI3N0YXJ0ZXJzLCAjYnVyZ2VycywgI3NhbGFkcywgI2dyaWxscywgI2Rlc3NlcnRzIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtd3JhcHBlciB7XFxuICAgICAgICBoMyB7XFxuICAgICAgICAgICAgbWFyZ2luOiAxMDBweCAwIDUwcHggMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtY2FyZCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1iZy1jb2xvcik7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dC1jb2xvcik7XFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHNtYWxsIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAuY2FyZC10ZXh0IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICAgICAgICAgIGg0LCBwIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtY2FyZDpob3ZlciBzbWFsbCB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNpdGlvbjogNDAwbXM7XFxuICAgIH1cXG59XFxuXFxuc2VjdGlvbi5jb250YWN0IHtcXG4gICAgbWFyZ2luOiA1MHB4IDAgMTAwcHggMDtcXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1iZy1jb2xvcik7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dC1jb2xvcik7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IDAgMCA4MHB4IDA7XFxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgfVxcblxcbiAgICAuY29udGFjdC1kZXRhaWxzIHtcXG4gICAgICAgIG1hcmdpbjogNTBweCAwO1xcbiAgICB9XFxuXFxuICAgIGlmcmFtZSB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXG4gICAgaDMudGV4dENvbnRlbnQgPSAnV2ViVmFodmVybyc7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9ICdXZSBhcmUgb3BlbiBldmVyeSBkYXkgZnJvbSAxMiB0byAyMCEnO1xuXG4gICAgY29uc3QgaW5mb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvV3JhcC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRldGFpbHMnKTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICdWYWFzYW5wdWlzdGlra28gOCwgNjUxMDAgVmFhc2EnO1xuXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAnNjY2IDY2NiA2NjYnO1xuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZW1haWwudGV4dENvbnRlbnQgPSAnaW50ZXJuZXRyZXN0YXVyYW50QG5vdHJlYWwuZmknO1xuXG4gICAgaW5mb1dyYXAuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgaW5mb1dyYXAuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIGluZm9XcmFwLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIG1hcC5zcmMgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTgwNS41MTMxNTA5ODEwMjU4ITJkMjEuNjA5ODU2OTkxMTEzNjIhM2Q2My4wOTM4NjY5MTA4OTM3MiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NDY3ZDYwNDJjZTAyMjZiNyUzQTB4ZTAwMDZjZTYxOWY2ODI2ZCEyc1ZhYXNhbnB1aXN0aWtrbyUyMDglMkMlMjA2NTEwMCUyMFZhYXNhITVlMCEzbTIhMXNmaSEyc2ZpITR2MTY2NDM4MjQwNjk1MiE1bTIhMXNmaSEyc2ZpJztcbiAgICBtYXAubG9hZGluZyA9ICdsYXp5JztcblxuICAgIHRpdGxlLmFwcGVuZENoaWxkKGgyKTtcbiAgICB0aXRsZS5hcHBlbmRDaGlsZChoMyk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChpbmZvV3JhcCk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChtYXApO1xuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59OyIsImltcG9ydCByZXN0YXVyYW50SW1nIGZyb20gJy4uL2ltZy9yZXN0YXVyYW50LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgLy8gUGFnZSBUaXRsZVxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuXG4gICAgLy8gV2VsY29tZSB0ZXh0XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGgzLnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gSW50ZXJuZXQgcmVzdGF1cmFudCEgJHtnZXRIb3VycygpID4gMTIgJiYgZ2V0SG91cnMoKSA8IDIwID8gJ1dlIGFyZSBjdXJyZW50bHkgb3BlbiEnIDogJ1dlIGFyZSBjbG9zZWQgYXQgdGhlIG1vbWVudCEnfSBIYXZlIGEgZ29vZCAke2dldERheSgpfWA7XG5cbiAgICBjb25zdCB3ZWxjb21lQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWxjb21lQmxvY2suY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuXG4gICAgd2VsY29tZUJsb2NrLmFwcGVuZENoaWxkKGgyKTtcbiAgICB3ZWxjb21lQmxvY2suYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgLy8gUmVzdGF1cmFudCBpbWFnZVxuICAgIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSByZXN0YXVyYW50SW1nO1xuICAgIGZpZ3VyZS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgLy8gSW5mbyB0ZXh0XG4gICAgY29uc3QgZmlnY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ2NhcHRpb24nKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSAnVGhlIGludGVybmV0IHJlc3RhdXJhbnQgaXMgbm90IGEgbm9ybWFsIHJlc3RhdXJhbnQgYXMgaXRzIG9ubHkgbG9jYXRpb24gaXMgb24gdGhlIGludGVybmV0LiBZb3UgY2FuIHZpZXcgb3VyIGRlbGljaW91cyBkaXNoZXMgb24gdGhlIE1lbnUgcGFnZSwgYnV0IHVuZm9ydHVuYXRlbHkgeW91IGNhbnQgb3JkZXIgdGhlbSBhcyB3ZSBkb250IHJlYWxseSBleGlzdC4nO1xuICAgIGZpZ2NhcHRpb24uYXBwZW5kQ2hpbGQocCk7XG5cbiAgICBcbiAgICBob21lLmFwcGVuZENoaWxkKHdlbGNvbWVCbG9jayk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChmaWd1cmUpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoZmlnY2FwdGlvbik7XG5cbiAgICByZXR1cm4gaG9tZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXkoKSB7XG4gICAgY29uc3Qgd2Vla2RheSA9IFtcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdO1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiB3ZWVrZGF5W2QuZ2V0RGF5KCldO1xufTtcblxuZnVuY3Rpb24gZ2V0SG91cnMoKSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIGQuZ2V0SG91cnMoKTtcbn07IiwiaW1wb3J0IG5hY2hvc0ltZyBmcm9tICcuLi9pbWcvbmFjaG9zLmpwZyc7XG5pbXBvcnQgbmFjaG9wbGF0ZUltZyBmcm9tICcuLi9pbWcvbmFjaG9wbGF0ZS5qcGcnO1xuaW1wb3J0IG1venphcmVsbGFJbWcgZnJvbSAnLi4vaW1nL21venphcmVsbGEuanBnJztcbmltcG9ydCBjaGVlc2VCcmdJbWcgZnJvbSAnLi4vaW1nL2NoZWVzZWJyZy5qcGcnO1xuaW1wb3J0IGJhY29uQnJnSW1nIGZyb20gJy4uL2ltZy9iYWNvbmJyZy5qcGcnO1xuaW1wb3J0IGNoaWNrZW5CcmdJbWcgZnJvbSAnLi4vaW1nL2NoaWNrZW5icmcuanBnJztcbmltcG9ydCBoYWxsb3VtSW1nIGZyb20gJy4uL2ltZy9oYWxsb3VtLmpwZyc7XG5pbXBvcnQgY2hldnJlSW1nIGZyb20gJy4uL2ltZy9jaGV2cmUuanBnJztcbmltcG9ydCBjaGlja2VuU2FsYWRJbWcgZnJvbSAnLi4vaW1nL2NoaWNrZW5zYWxhZC5qcGcnO1xuaW1wb3J0IHNhbG1vbkltZyBmcm9tICcuLi9pbWcvc2FsbW9uZ3JpbGwuanBnJztcbmltcG9ydCBzdGVha0ltZyBmcm9tICcuLi9pbWcvc3RlYWsuanBnJztcbmltcG9ydCBjaGlja2VuR3JpbGxJbWcgZnJvbSAnLi4vaW1nL2NoaWNrZW5HcmlsbC5qcGcnO1xuaW1wb3J0IGljZUNyZWFtSW1nIGZyb20gJy4uL2ltZy9pY2VjcmVhbS5qcGcnO1xuaW1wb3J0IHNvcmJldEltZyBmcm9tICcuLi9pbWcvc29yYmV0LmpwZyc7XG5pbXBvcnQgZm9uZGFudEltZyBmcm9tICcuLi9pbWcvZm9uZGFudC5qcGcnO1xuaW1wb3J0IHsgZ2V0RGF5IH0gZnJvbSAnLi9Ib21lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcbiAgICBsZXQgZm9vZEl0ZW1zID0gW107XG5cbiAgICBjbGFzcyBGb29kIHtcbiAgICAgICAgY29uc3RydWN0b3IoY2F0ZWdvcnksIG5hbWUsIGRlc2MsIHByaWNlLCBpbWcsIGltZ0NyZWRpdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICAgICAgdGhpcy5pbWcgPSBpbWc7XG4gICAgICAgICAgICB0aGlzLmltZ0NyZWRpdHMgPSBpbWdDcmVkaXRzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRlcjEgPSBuZXcgRm9vZCgnc3RhcnRlcicsICdOYWNob3MnLCAnV2l0aCBhIHNpZGUgb2Ygc2Fsc2EgZGlwJywgNC4yMCwgbmFjaG9zSW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Bjb2ZmZWVmeXdvcmthZmU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+Q29mZmVlZnkgV29ya2FmZTwvYT4nKTtcbiAgICBjb25zdCBzdGFydGVyMiA9IG5ldyBGb29kKCdzdGFydGVyJywgJ05hY2hvIFBsYXRlJywgJ05hY2hvcywgSG91c2UgZ3VhY2Ftb2xlLCBzYWxzYSwgRnJlbmNoIGNyZWFtLCB3YXJtIGNoZWVzZSBzYXVjZSwgamFsYXBlbm9zJywgMTAuOTAsIG5hY2hvcGxhdGVJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGNvdXJ0bmV5bWNvb2s/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+Q291cnRuZXkgQ29vazwvYT4nKTtcbiAgICBjb25zdCBzdGFydGVyMyA9IG5ldyBGb29kKCdzdGFydGVyJywgJ01venphcmVsbGEgU3RpY2tzJywgJ1dpdGggYSBzaWRlIG9mIFNhbGFkIGFuZCBnYXJsaWMgZGlwLicsIDcuOTAsIG1venphcmVsbGFJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGthcG9vcnBhcmFzMjg/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+UGFyYXMgS2Fwb29yPC9hPicpO1xuICAgIGNvbnN0IGJ1cmdlcjEgPSBuZXcgRm9vZCgnYnVyZ2VyJywgJ0NoZWVzZSBIYW1idXJnZXInLCAnSGFtYnVyZ2VyIHdpdGggY2hlZXNlJywgMTQuOTAsIGNoZWVzZUJyZ0ltZywgJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AYW1pcl92X2FsaT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5hbWlyYWxpIG1pcmhhc2hlbWlhbjwvYT4nKTtcbiAgICBjb25zdCBidXJnZXIyID0gbmV3IEZvb2QoJ2J1cmdlcicsICdCYWNvbiBIYW1idXJnZXInLCAnSGFtYnVyZ2VyIHdpdGggYmFjb24nLCAxNC45MCwgYmFjb25CcmdJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vZXMvQGZpZmVybmFuZG8/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+RmlkZWwgRmVybmFuZG88L2E+Jyk7XG4gICAgY29uc3QgYnVyZ2VyMyA9IG5ldyBGb29kKCdidXJnZXInLCAnQ2hpY2tlbiBIYW1idXJnZXInLCAnSGFtYnVyZ2VyIHdpdGggY2hpY2tlbicsIDE0LjkwLCBjaGlja2VuQnJnSW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BkaWxqYTk2P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkRpZGkgTWlhbTwvYT4nKTtcbiAgICBjb25zdCBzYWxhZDEgPSBuZXcgRm9vZCgnc2FsYWQnLCAnSGFsbG91bScsICdTYWxhZCB3aXRoIGhhbGxvdW0nLCAxNi45MCwgaGFsbG91bUltZywgJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AZG92aWxlcm0/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+RG92aWxlIFJhbW9za2FpdGU8L2E+Jyk7XG4gICAgY29uc3Qgc2FsYWQyID0gbmV3IEZvb2QoJ3NhbGFkJywgJ0NoZXZyZScsICdTYWxhZCB3aXRoIENoZXZyZScsIDE2LjkwLCBjaGV2cmVJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGVhdG91dGNvbG9nbmU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+RUFUIE9VVCBDT0xPR05FPC9hPicpO1xuICAgIGNvbnN0IHNhbGFkMyA9IG5ldyBGb29kKCdzYWxhZCcsICdDaGlja2VuJywgJ1NhbGFkIHdpdGggQ2hpY2tlbicsIDE2LjkwLCBjaGlja2VuU2FsYWRJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vZXMvQGZhbGxvbm1pY2hhZWx0eD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5GYWxsb24gTWljaGFlbDwvYT4nKTtcbiAgICBjb25zdCBncmlsbDEgPSBuZXcgRm9vZCgnZ3JpbGwnLCAnU2FsbW9uJywgJ1NhbG1vbiB3aXRoIHZlZ2V0YWJsZXMgYW5kIHBvdGF0b2VzIGluIHNhdWNlJywgMjUuNTAsIHNhbG1vbkltZywgJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9qYS9AbWljaGVpbGU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+bWljaGVpbGUgZG90IGNvbTwvYT4nKTtcbiAgICBjb25zdCBncmlsbDIgPSBuZXcgRm9vZCgnZ3JpbGwnLCAnU3RlYWsnLCAnU3RlYWsgd2l0aCB2ZWdldGFibGVzIGFuZCBwb3RhdG9lcyBpbiBzYXVjZScsIDI2LjkwLCBzdGVha0ltZywgJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AY292ZXJ0bmluZT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5UaW0gVG9vbWV5PC9hPicpO1xuICAgIGNvbnN0IGdyaWxsMyA9IG5ldyBGb29kKCdncmlsbCcsICdDaGlja2VuJywgJ0NoaWNrZW4gd2l0aCB2ZWdldGFibGVzIGFuZCBwb3RhdG9lcyBpbiBzYXVjZScsIDIxLjUwLCBjaGlja2VuR3JpbGxJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHRlbXBlc3RkZXNpZ25lcj91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5NYXJrIERlWW91bmc8L2E+Jyk7XG4gICAgY29uc3QgZGVzc2VydDEgPSBuZXcgRm9vZCgnZGVzc2VydCcsICdJY2UgY3JlYW0nLCAnVmFuaWxsYSBJY2UgQ3JlYW0gd2l0aCBzdXByaXNlIHNhdWNlJywgNy45MCwgaWNlQ3JlYW1JbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGNoYXJsZXNkZWx1dmlvP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPmNoYXJsZXNkZWx1dmlvPC9hPicpO1xuICAgIGNvbnN0IGRlc3NlcnQyID0gbmV3IEZvb2QoJ2Rlc3NlcnQnLCAnU29yYmV0JywgJ01lbG9uIHNvcmJldCB3aXRoIGxvdmUnLCAzLjkwLCBzb3JiZXRJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGhvbmV5cG9wcGV0P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlNhbmRpZSBDbGFya2U8L2E+Jyk7XG4gICAgY29uc3QgZGVzc2VydDMgPSBuZXcgRm9vZCgnZGVzc2VydCcsICdDaG9jb2xhdGUgRm9uZGFudCcsICdDb21mb3J0IHRyZWF0IHdpdGggdmFuaWxsYSBpY2UgY3JlYW0nLCA4LjUwLCBmb25kYW50SW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Bncmlzc2tpdGNoZW4/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+TWF4IEdyaXNzPC9hPicpO1xuXG4gICAgZm9vZEl0ZW1zLnB1c2goc3RhcnRlcjEpO1xuICAgIGZvb2RJdGVtcy5wdXNoKHN0YXJ0ZXIyKTtcbiAgICBmb29kSXRlbXMucHVzaChzdGFydGVyMyk7XG4gICAgZm9vZEl0ZW1zLnB1c2goYnVyZ2VyMSk7XG4gICAgZm9vZEl0ZW1zLnB1c2goYnVyZ2VyMik7XG4gICAgZm9vZEl0ZW1zLnB1c2goYnVyZ2VyMyk7XG4gICAgZm9vZEl0ZW1zLnB1c2goc2FsYWQxKTtcbiAgICBmb29kSXRlbXMucHVzaChzYWxhZDIpO1xuICAgIGZvb2RJdGVtcy5wdXNoKHNhbGFkMyk7XG4gICAgZm9vZEl0ZW1zLnB1c2goZ3JpbGwxKTtcbiAgICBmb29kSXRlbXMucHVzaChncmlsbDIpO1xuICAgIGZvb2RJdGVtcy5wdXNoKGdyaWxsMyk7XG4gICAgZm9vZEl0ZW1zLnB1c2goZGVzc2VydDEpO1xuICAgIGZvb2RJdGVtcy5wdXNoKGRlc3NlcnQyKTtcbiAgICBmb29kSXRlbXMucHVzaChkZXNzZXJ0Myk7XG5cbiAgICBjb25zb2xlLmxvZyhmb29kSXRlbXNbMF0uY2F0ZWdvcnkpXG5cbiAgICBjb25zdCBzdGFydGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXJ0ZXJXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhcnRlcnMnKTtcbiAgICBjb25zdCBidXJnZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVyZ2VyV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1cmdlcnMnKTtcbiAgICBjb25zdCBzYWxhZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYWxhZFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzYWxhZHMnKTtcbiAgICBjb25zdCBncmlsbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlsbFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdncmlsbHMnKTtcbiAgICBjb25zdCBkZXNzZXJ0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc3NlcnRXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzc2VydHMnKTtcblxuICAgIGxldCBzdGFydGVycyA9ICcnO1xuICAgIGxldCBidXJnZXJzID0gJyc7XG4gICAgbGV0IHNhbGFkcyA9ICcnO1xuICAgIGxldCBncmlsbHMgPSAnJztcbiAgICBsZXQgZGVzc2VydHMgPSAnJztcblxuICAgIGZvb2RJdGVtcy5mb3JFYWNoKGZvb2QgPT4ge1xuICAgICAgICBzd2l0Y2goZm9vZC5jYXRlZ29yeSkge1xuICAgICAgICAgICAgY2FzZSAnc3RhcnRlcic6XG4gICAgICAgICAgICAgICAgc3RhcnRlcnMgKz1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke2Zvb2QuY2F0ZWdvcnl9XCIgY2xhc3M9XCJtZW51LWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtmb29kLmltZ31cIiBhbHQ9XCIke2Zvb2QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ke2Zvb2QuaW1nQ3JlZGl0c308L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImZvb2QtdGl0bGVcIj4ke2Zvb2QubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1kZXNjXCI+JHtmb29kLmRlc2N9PHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLXByaWNlXCI+JHtmb29kLnByaWNlfeKCrDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYnVyZ2VyJzpcbiAgICAgICAgICAgICAgICBidXJnZXJzICs9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHtmb29kLmNhdGVnb3J5fVwiIGNsYXNzPVwibWVudS1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Zm9vZC5pbWd9XCIgYWx0PVwiJHtmb29kLm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+JHtmb29kLmltZ0NyZWRpdHN9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJmb29kLXRpdGxlXCI+JHtmb29kLm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtZGVzY1wiPiR7Zm9vZC5kZXNjfTxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1wcmljZVwiPiR7Zm9vZC5wcmljZX3igqw8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NhbGFkJzpcbiAgICAgICAgICAgICAgICBzYWxhZHMgKz1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke2Zvb2QuY2F0ZWdvcnl9XCIgY2xhc3M9XCJtZW51LWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtmb29kLmltZ31cIiBhbHQ9XCIke2Zvb2QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ke2Zvb2QuaW1nQ3JlZGl0c308L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImZvb2QtdGl0bGVcIj4ke2Zvb2QubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1kZXNjXCI+JHtmb29kLmRlc2N9PHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLXByaWNlXCI+JHtmb29kLnByaWNlfeKCrDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZ3JpbGwnOlxuICAgICAgICAgICAgICAgIGdyaWxscyArPVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7Zm9vZC5jYXRlZ29yeX1cIiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2Zvb2QuaW1nfVwiIGFsdD1cIiR7Zm9vZC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiR7Zm9vZC5pbWdDcmVkaXRzfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZm9vZC10aXRsZVwiPiR7Zm9vZC5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLWRlc2NcIj4ke2Zvb2QuZGVzY308cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtcHJpY2VcIj4ke2Zvb2QucHJpY2V94oKsPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZXNzZXJ0JzpcbiAgICAgICAgICAgICAgICBkZXNzZXJ0cyArPVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7Zm9vZC5jYXRlZ29yeX1cIiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2Zvb2QuaW1nfVwiIGFsdD1cIiR7Zm9vZC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiR7Zm9vZC5pbWdDcmVkaXRzfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZm9vZC10aXRsZVwiPiR7Zm9vZC5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLWRlc2NcIj4ke2Zvb2QuZGVzY308cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtcHJpY2VcIj4ke2Zvb2QucHJpY2V94oKsPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0YXJ0ZXJXcmFwcGVyLmlubmVySFRNTCA9IHN0YXJ0ZXJzO1xuICAgIGJ1cmdlcldyYXBwZXIuaW5uZXJIVE1MID0gYnVyZ2VycztcbiAgICBzYWxhZFdyYXBwZXIuaW5uZXJIVE1MID0gc2FsYWRzO1xuICAgIGdyaWxsV3JhcHBlci5pbm5lckhUTUwgPSBncmlsbHM7XG4gICAgZGVzc2VydFdyYXBwZXIuaW5uZXJIVE1MID0gZGVzc2VydHM7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGNvbnN0IHN0YXJ0ZXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHN0YXJ0ZXJzVGl0bGUudGV4dENvbnRlbnQgPSAnU3RhcnRlcnMnO1xuICAgIGNvbnN0IGJ1cmdlcnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYnVyZ2Vyc1RpdGxlLnRleHRDb250ZW50ID0gJ0J1cmdlcnMnO1xuICAgIGNvbnN0IHNhbGFkc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzYWxhZHNUaXRsZS50ZXh0Q29udGVudCA9ICdTYWxhZHMnO1xuICAgIGNvbnN0IGdyaWxsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGdyaWxsVGl0bGUudGV4dENvbnRlbnQgPSAnRnJvbSB0aGUgR3JpbGwnO1xuICAgIGNvbnN0IGRlc3NlcnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZGVzc2VydFRpdGxlLnRleHRDb250ZW50ID0gJ0Rlc3NlcnRzJztcblxuICAgIGNvbnN0IG1lbnVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWVudS13cmFwcGVyJyk7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoc3RhcnRlcnNUaXRsZSk7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoc3RhcnRlcldyYXBwZXIpO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKGJ1cmdlcnNUaXRsZSk7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyV3JhcHBlcik7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoc2FsYWRzVGl0bGUpO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKHNhbGFkV3JhcHBlcik7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoZ3JpbGxUaXRsZSk7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoZ3JpbGxXcmFwcGVyKTtcbiAgICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChkZXNzZXJ0VGl0bGUpO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKGRlc3NlcnRXcmFwcGVyKTtcblxuICAgIGNvbnN0IGRhaWx5RGVhbCA9IGdldERhaWx5RGVhbChmb29kSXRlbXMpO1xuICAgIGNvbnN0IGRhaWx5RGVhbENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYWlseURlYWxDYXJkLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWRlYWwnKTtcblxuICAgIGNvbnN0IGRhaWx5RGVhbEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRhaWx5RGVhbEltZy5zcmMgPSBkYWlseURlYWwuaW1nO1xuICAgIGNvbnN0IGRhaWx5RGVhbEltZ0NyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xuICAgIGRhaWx5RGVhbEltZ0NyZWRpdHMuaW5uZXJIVE1MID0gZGFpbHlEZWFsLmltZ0NyZWRpdHM7XG4gICAgY29uc3QgZGFpbHlEZWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGRhaWx5RGVhbFRpdGxlLnRleHRDb250ZW50ID0gZGFpbHlEZWFsLm5hbWU7XG4gICAgY29uc3QgZGFpbHlEZWFsQWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBkYWlseURlYWxBbGUudGV4dENvbnRlbnQgPSAnRGFpbHkgRGVhbCAtMjAlIG9mZiEnO1xuICAgIGNvbnN0IGRhaWx5RGVhbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGFpbHlEZWFsRGVzYy50ZXh0Q29udGVudCA9IGRhaWx5RGVhbC5kZXNjO1xuICAgIGNvbnN0IGRhaWx5RGVhbFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRhaWx5RGVhbFByaWNlLnRleHRDb250ZW50ID0gZGFpbHlEZWFsLnByaWNlICogMC44MCArIFwi4oKsXCI7XG5cbiAgICBjb25zdCBkYWlseWRlYWxDYXJkZVRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGFpbHlkZWFsQ2FyZGVUZXh0cy5jbGFzc0xpc3QuYWRkKCdkYWlseS1kZWFsLXRleHQnKTtcblxuICAgIGRhaWx5ZGVhbENhcmRlVGV4dHMuYXBwZW5kQ2hpbGQoZGFpbHlEZWFsSW1nQ3JlZGl0cyk7XG4gICAgZGFpbHlkZWFsQ2FyZGVUZXh0cy5hcHBlbmRDaGlsZChkYWlseURlYWxUaXRsZSk7XG4gICAgZGFpbHlkZWFsQ2FyZGVUZXh0cy5hcHBlbmRDaGlsZChkYWlseURlYWxEZXNjKTtcbiAgICBkYWlseWRlYWxDYXJkZVRleHRzLmFwcGVuZENoaWxkKGRhaWx5RGVhbFByaWNlKTtcbiAgICBkYWlseWRlYWxDYXJkZVRleHRzLmFwcGVuZENoaWxkKGRhaWx5RGVhbEFsZSk7XG5cbiAgICBkYWlseURlYWxDYXJkLmFwcGVuZENoaWxkKGRhaWx5RGVhbEltZyk7XG4gICAgZGFpbHlEZWFsQ2FyZC5hcHBlbmRDaGlsZChkYWlseWRlYWxDYXJkZVRleHRzKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZGFpbHlEZWFsQ2FyZCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51V3JhcHBlcik7XG5cbiAgICByZXR1cm4gbWVudTtcbn07XG5cbmZ1bmN0aW9uIGdldERhaWx5RGVhbChmb29kSXRlbXMpIHtcbiAgICBzd2l0Y2goZ2V0RGF5KCkpIHtcbiAgICAgICAgY2FzZSAnU3VuZGF5JzpcbiAgICAgICAgICAgIHJldHVybiBmb29kSXRlbXNbM107XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNb25kYXknOlxuICAgICAgICAgICAgcmV0dXJuIGZvb2RJdGVtc1s0XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1R1ZXNkYXknOlxuICAgICAgICAgICAgcmV0dXJuIGZvb2RJdGVtc1s1XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1dlZG5lc2RheSc6XG4gICAgICAgICAgICByZXR1cm4gZm9vZEl0ZW1zWzZdO1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVGh1cnNkYXknOlxuICAgICAgICAgICAgcmV0dXJuIGZvb2RJdGVtc1s3XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0ZyaWRheSc6XG4gICAgICAgICAgICByZXR1cm4gZm9vZEl0ZW1zWzhdO1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU2F0dXJkYXknOlxuICAgICAgICAgICAgcmV0dXJuIGZvb2RJdGVtc1s5XTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxufSIsImltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSc7XG5pbXBvcnQgTWVudSBmcm9tICcuL3BhZ2VzL01lbnUnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9wYWdlcy9Db250YWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlldygpIHtcblxuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbiAgICBcbiAgICBjb25zdCBuYXZCdG5zID0gW2hvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG5dO1xuXG4gICAgbmF2QnRucy5mb3JFYWNoKG5hdkJ0biA9PiB7XG4gICAgICAgIG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUFjdGl2ZShuYXZCdG5zKTtcblxuICAgICAgICAgICAgc3dpdGNoKG5hdkJ0bi50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDaGlsZChtYWluKTtcbiAgICAgICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChIb21lKCkpO1xuICAgICAgICAgICAgICAgICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnTWVudSc6XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNoaWxkKG1haW4pO1xuICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKE1lbnUoKSk7XG4gICAgICAgICAgICAgICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdDb250YWN0JzpcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGQobWFpbik7XG4gICAgICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoQ29udGFjdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNoaWxkKG1haW4pO1xuICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKEhvbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICBoMS50ZXh0Q29udGVudCA9ICdUaGUgSW50ZXJuZXQgUmVzdGF1cmFudCc7XG4gICAgXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoQ29udGFjdCgpKTtcbiAgICB2aWV3LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgdmlldy5hcHBlbmRDaGlsZChuYXYpO1xuICAgIHZpZXcuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICByZXR1cm4gdmlld1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKG5hdkJ0bnMpIHtcblxuICAgIG5hdkJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgdmlldyBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zY3NzJztcblxuY29uc3QgYXBwZW5kVG9QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodmlldygpKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG5cbn07XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHBlbmRUb1BhZ2UoKSk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==