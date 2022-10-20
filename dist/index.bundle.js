"use strict";
(self["webpackChunkcapstone_project_0x02"] = self["webpackChunkcapstone_project_0x02"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  font-family: 'Nunito Sans', sans-serif;\n  background-color: hsl(207, 26%, 17%);\n  color: hsl(0, 0%, 100%);\n}\n\nheader {\n  background-color: hsl(209, 23%, 22%);\n  display: flex;\n  padding: 1% 10%;\n  justify-content: space-between;\n}\n\nheader h2 {\n  font-size: 30px;\n  letter-spacing: 2px;\n}\n\n#logo {\n  width: 90px;\n  height: 90px;\n}\n\n.like {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n\n.like:active {\n  width: 50px;\n  height: 50px;\n}\n\n.likes {\n  font-size: 14px;\n}\n\n.img-holder {\n  height: 180px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\nul {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 0 auto;\n  gap: 4rem 3.5rem;\n}\n\n#countries {\n  display: flex;\n  align-self: center;\n  gap: 1rem;\n  align-items: center;\n}\n\narticle h2 {\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n \n#countries h2 {\n  padding-bottom: 2px;\n  border-bottom: 3px solid gray;\n  font-size: 25px;\n  margin-top: 2rem;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 5%;\n}\n\nli {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 0.8rem;\n  background-color: hsl(209, 23%, 22%);\n  border-radius: 8px;\n  width: 300px;\n}\n\n.comment-btn {\n  padding: 2% 2%;\n  margin-bottom: 5%;\n  width: 80%;\n  font-size: 1rem;\n  letter-spacing: 2px;\n  box-shadow: 1px 1.5px 3px #000;\n  background-color: hsl(207, 36%, 37%);\n  align-self: center;\n  border-radius: 5%;\n  color: #fff;\n  position: relative;\n  bottom: 0;\n}\n\narticle h3 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 23px;\n}\n\narticle span {\n  font-weight: 300;\n  font-size: 14px;\n}\n\nfooter {\n  width: 100%;\n  align-self: center;\n  border-radius: 0.5%;\n  border: 1px solid black;\n  background-color: hsl(209, 23%, 22%);\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.button1,\n#search {\n  width: 30%;\n  padding: 0.7% 2.5%;\n  border-radius: 8px;\n  border: 1px solid hsl(207, 26%, 17%);\n  background-size: 30px 25px;\n  background-repeat: no-repeat;\n  background-position: 3% center;\n  padding-left: 50px;\n  background-color: #fff;\n}\n\n#search {\n  background-color: #fff;\n}\n\n/* Pop up Code  */\n#popup-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#name-input {\n  width: 20em;\n  height: 2rem;\n}\n\n.popup-window {\n  top: 20%;\n  left: 20%;\n  right: 20%;\n  bottom: 15%;\n  display: none;\n  grid-template-rows: 1fr 1fr 1fr;\n  background-color: hsl(209, 23%, 22%);\n  position: fixed;\n}\n\n.img-side-bar {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  justify-content: space-between;\n  align-items: center;\n  gap: 50px;\n  padding: 40px;\n}\n\n.left-block,\n.right-block {\n  text-align: left;\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  width: 100%;\n}\n\n.img-name {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n}\n\n.right-side-bar {\n  display: flex;\n  justify-content: space-between;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n}\n\n.comment-details {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr;\n  column-gap: 3rem;\n  width: 90%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.comment-body {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 10px;\n  text-align: left;\n}\n\n.form {\n  margin: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  border: #fff 1px solid;\n  padding: 10px;\n}\n\n.form button {\n  width: 30%;\n}\n\n.form input,\ntextarea {\n  padding: 1% 2%;\n  border-radius: 3px;\n}\n\n.fa-x {\n  position: absolute;\n  padding-right: 10px;\n  top: 5px;\n  right: 5px;\n  font-size: 30px;\n  font-weight: 1000;\n  margin-bottom: 10px;\n}\n\n.fa-x:hover {\n  color: red;\n}\n\n.popUp-img {\n  width: 80%;\n  height: 180px;\n  background-color: #fff;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap\");\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  font-family: 'Nunito Sans', sans-serif;\n  background-color: hsl(207, 26%, 17%);\n  color: hsl(0, 0%, 100%);\n}\n\nheader {\n  background-color: hsl(209, 23%, 22%);\n  display: flex;\n  padding: 1% 10%;\n  justify-content: space-between;\n}\n\nheader h2 {\n  font-size: 30px;\n  letter-spacing: 2px;\n}\n\n#logo {\n  width: 90px;\n  height: 90px;\n}\n\n.like {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n\n.like:active {\n  width: 50px;\n  height: 50px;\n}\n\n.likes {\n  font-size: 14px;\n}\n\n.img-holder {\n  height: 180px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\nul {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 0 auto;\n  gap: 4rem 3.5rem;\n}\n\n#countries {\n  display: flex;\n  align-self: center;\n  gap: 1rem;\n  align-items: center;\n}\n\narticle h2 {\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n \n#countries h2 {\n  padding-bottom: 2px;\n  border-bottom: 3px solid gray;\n  font-size: 25px;\n  margin-top: 2rem;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 5%;\n}\n\nli {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 0.8rem;\n  background-color: hsl(209, 23%, 22%);\n  border-radius: 8px;\n  width: 300px;\n}\n\n.comment-btn {\n  padding: 2% 2%;\n  margin-bottom: 5%;\n  width: 80%;\n  font-size: 1rem;\n  letter-spacing: 2px;\n  box-shadow: 1px 1.5px 3px #000;\n  background-color: hsl(207, 36%, 37%);\n  align-self: center;\n  border-radius: 5%;\n  color: #fff;\n  position: relative;\n  bottom: 0;\n}\n\narticle h3 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 23px;\n}\n\narticle span {\n  font-weight: 300;\n  font-size: 14px;\n}\n\nfooter {\n  width: 100%;\n  align-self: center;\n  border-radius: 0.5%;\n  border: 1px solid black;\n  background-color: hsl(209, 23%, 22%);\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.button1,\n#search {\n  width: 30%;\n  padding: 0.7% 2.5%;\n  border-radius: 8px;\n  border: 1px solid hsl(207, 26%, 17%);\n  background-size: 30px 25px;\n  background-repeat: no-repeat;\n  background-position: 3% center;\n  padding-left: 50px;\n  background-color: #fff;\n}\n\n#search {\n  background-color: #fff;\n}\n\n/* Pop up Code  */\n#popup-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#name-input {\n  width: 20em;\n  height: 2rem;\n}\n\n.popup-window {\n  top: 20%;\n  left: 20%;\n  right: 20%;\n  bottom: 15%;\n  display: none;\n  grid-template-rows: 1fr 1fr 1fr;\n  background-color: hsl(209, 23%, 22%);\n  position: fixed;\n}\n\n.img-side-bar {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  justify-content: space-between;\n  align-items: center;\n  gap: 50px;\n  padding: 40px;\n}\n\n.left-block,\n.right-block {\n  text-align: left;\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  width: 100%;\n}\n\n.img-name {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n}\n\n.right-side-bar {\n  display: flex;\n  justify-content: space-between;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n}\n\n.comment-details {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr;\n  column-gap: 3rem;\n  width: 90%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.comment-body {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 10px;\n  text-align: left;\n}\n\n.form {\n  margin: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  border: #fff 1px solid;\n  padding: 10px;\n}\n\n.form button {\n  width: 30%;\n}\n\n.form input,\ntextarea {\n  padding: 1% 2%;\n  border-radius: 3px;\n}\n\n.fa-x {\n  position: absolute;\n  padding-right: 10px;\n  top: 5px;\n  right: 5px;\n  font-size: 30px;\n  font-weight: 1000;\n  margin-bottom: 10px;\n}\n\n.fa-x:hover {\n  color: red;\n}\n\n.popUp-img {\n  width: 80%;\n  height: 180px;\n  background-color: #fff;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popup.js */ "./src/modules/popup.js");
/* harmony import */ var _images_globe_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/globe.png */ "./src/images/globe.png");
/* harmony import */ var _images_hearts_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/hearts.png */ "./src/images/hearts.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
/* harmony import */ var _modules_countries_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/countries.js */ "./src/modules/countries.js");
/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/likes.js */ "./src/modules/likes.js");
/* harmony import */ var _modules_populateDisplay_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/populateDisplay.js */ "./src/modules/populateDisplay.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_countries_js__WEBPACK_IMPORTED_MODULE_5__, _modules_likes_js__WEBPACK_IMPORTED_MODULE_6__]);
([_modules_countries_js__WEBPACK_IMPORTED_MODULE_5__, _modules_likes_js__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ul = document.querySelector('ul');
(0,_modules_populateDisplay_js__WEBPACK_IMPORTED_MODULE_7__["default"])(ul, _modules_countries_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_likes_js__WEBPACK_IMPORTED_MODULE_6__.getLikesCount);

document.getElementById('logo').src = _images_globe_png__WEBPACK_IMPORTED_MODULE_2__;
document.getElementById('search').style.backgroundImage = `url(${_images_search_png__WEBPACK_IMPORTED_MODULE_4__})`;

document.querySelectorAll('.like').forEach((element) => {
  element.src = _images_hearts_png__WEBPACK_IMPORTED_MODULE_3__;
  element.addEventListener('click', () => (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_6__.addLike)(element));
});

document.querySelectorAll('.img-holder').forEach((val, index) => {
  val.style.backgroundImage = `url(${_modules_countries_js__WEBPACK_IMPORTED_MODULE_5__["default"][index].flags.png})`;
});

const windowContainer = document.createElement('div');
windowContainer.className = 'popup-window';

const popWindow = document.querySelectorAll('.comment-btn');

popWindow.forEach((element) => {
  element.addEventListener('click', () => {
    (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element.id[1], windowContainer, _modules_countries_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
    windowContainer.style.display = 'grid';
  });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "getComment": () => (/* binding */ getComment)
/* harmony export */ });
const addComment = async (id, username, comment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UMu2QAb36PVSa0I3N71m/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });
};

const getComment = async (id) => {
  const re = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UMu2QAb36PVSa0I3N71m/comments?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const ss = await re.json();
  return ss;
};



/***/ }),

/***/ "./src/modules/countries.js":
/*!**********************************!*\
  !*** ./src/modules/countries.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const promise = await fetch('https://restcountries.com/v2/all');
const countries = await promise.json();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countries);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "getLikesCount": () => (/* binding */ getLikesCount)
/* harmony export */ });
const addLike = async (ele) => {
  const num = ele.nextSibling.nextSibling.textContent.split(' ')[0];
  ele.nextSibling.nextSibling.textContent = ''.concat(+num + 1, ' likes');
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UMu2QAb36PVSa0I3N71m/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: ele.id,
    }),
  });
};

const promise = async () => {
  const re = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UMu2QAb36PVSa0I3N71m/likes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const ss = await re.json();
  return ss;
};
const like = await promise();

const getLikesCount = (id) => {
  const val = like.find((o) => o.item_id === id);
  return val === undefined ? 0 : val.likes;
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/populateDisplay.js":
/*!****************************************!*\
  !*** ./src/modules/populateDisplay.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const populate = (ul, countries, getLikesCount) => {
  for (let i = 0; i < 12; i += 1) {
    const htmlText = `
    <li>
      <div class="img-holder"></div>
      <section class="info">
        <article>
          <h2>${countries[i].name}</h3>
          <h3>Region: <span>${countries[i].region}</span></h3>
          <h3>Capital: <span>${countries[i].capital}</span></h3>
        </article>
        <div>
          <img src="" id="${'l'.concat(i)}" class="like" alt="heart">
          <p class="likes">${getLikesCount('l'.concat(i))} likes</p>
        </div>
      </section>
      <button type="button" id="${'c'.concat(i)}" class="comment-btn">Comments</button>
    </li>
    `;
    ul.insertAdjacentHTML('beforeend', htmlText);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ "./src/modules/comment.js");


const section = document.querySelector('#popup-section');
const modal = async (i, windowContainer, countries) => {
  windowContainer.innerHTML = ` 

<i class="fa-solid fa-x">X</i>

  <section  class = 'img-side-bar'>  
    <div class="img-name">
      <img class="popUp-img" src="${countries[i].flags.svg}" alt="">
      <h2 class="title">${countries[i].name}</h2>
    </div>


      <article class="right-block">
        <h3> Native name:<span> ${countries[i].nativeName}</span></h3>
        <h3> Languages:<span> ${countries[i].languages[0].name}</span></h3>
          <h3 class ="population">Population:<span> ${countries[i].population}</span></h3>
          <h3> Capital:<span> ${countries[i].capital}</pan></h3>
          <h3>Area:<span> ${countries[i].area}</span></h3>
      </article>

      <article class="right-block">
        <h3>Continent: <span>${countries[i].region}</span></h3>
        <h3>Region: <span>${countries[i].subregion}</span></h3>
        <h3>Currencies: <span>${countries[i].currencies[0].name}</span></h3>
        <h3> Time-Zome: <span>${countries[i].timezones}</span></h3>
        <h3 class="borders">Borders: <span>${countries[i].borders}</span></h3>
      </article>

  </section>   

  <section class="comment-details">
    <div class="form-div">
      <form id="f${i}" class='form' action="">
      <h2>Please Leave a comment</h2>
        <div class = 'error-msg'> </div>
        <input id = 'name-input' type="text" placeholder="Your Name" >
        <textarea name=" message" id="msg-input" cols="28" rows="5" placeholder="Your insights"></textarea>
        <button class="comment-btn" type="submit">Comment</button>
      </form>
    </div>

    <div class="comment-div">
          <h2>Comments</h2>

          <span class="comment-body">
            <p>No Comments...</p>
          </span>
        </div>
      </div>
    </div>

  </section>
  
`;
  section.appendChild(windowContainer);
  let body = '';
  const comments = await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(`f${i}`);

  if (Array.isArray(comments)) {
    comments.forEach((o) => {
      body += `<p>${o.creation_date} ${o.username}: ${o.comment}</p>`;
    });
  }

  if (body != '') {
    document.querySelector('.comment-body').innerHTML = body;
  }
  const form = document.getElementById(`f${i}`);
  const error = document.querySelector('.error-msg');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name-input').value;
    const msgInput = document.querySelector('#msg-input').value;
    if (nameInput === '' || msgInput === '') {
      error.innerHTML = 'Please fill the fields';
      form.reset();
      return;
    }

    await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(form.id, nameInput, msgInput);
    console.log('fff');
    form.reset();
    const cmt = await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(`f${i}`);
    const last = cmt[cmt.length - 1];
    body += `<p>${last.creation_date} ${last.username}: ${last.comment}</p>`;
    document.querySelector('.comment-body').innerHTML = body;
  });

  const exitBtn = document.querySelector('.fa-x');
  exitBtn.addEventListener('click', () => {
    windowContainer.style.display = 'none';
    section.removeChild(windowContainer);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/images/globe.png":
/*!******************************!*\
  !*** ./src/images/globe.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dca280fa184ac31467e.png";

/***/ }),

/***/ "./src/images/hearts.png":
/*!*******************************!*\
  !*** ./src/images/hearts.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ab9ebcbe8f6bbba7e67.png";

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1175f58cc6ff8a127f80.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFX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SztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxFQUFFO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLHVEQUFVO0FBQ3BCO0FBQ0E7QUFDQSxzQkFBc0IsdURBQVUsS0FBSyxFQUFFO0FBQ3ZDO0FBQ0Esa0JBQWtCLG9CQUFvQixFQUFFLGNBQWMsSUFBSSxhQUFhO0FBQ3ZFO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9zcmMvbW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL3NyYy9tb2R1bGVzL2NvdW50cmllcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9zcmMvbW9kdWxlcy9saWtlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9zcmMvbW9kdWxlcy9wb3B1bGF0ZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vc3JjL21vZHVsZXMvcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDMwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA3LCAyNiUsIDE3JSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDksIDIzJSwgMjIlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxJSAxMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciBoMiB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4jbG9nbyB7XFxuICB3aWR0aDogOTBweDtcXG4gIGhlaWdodDogOTBweDtcXG59XFxuXFxuLmxpa2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmxpa2U6YWN0aXZlIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubGlrZXMge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uaW1nLWhvbGRlciB7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG59XFxuXFxudWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGdhcDogNHJlbSAzLjVyZW07XFxufVxcblxcbiNjb3VudHJpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmFydGljbGUgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuIFxcbiNjb3VudHJpZXMgaDIge1xcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmF5O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMCA1JTtcXG59XFxuXFxubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDAuOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDksIDIzJSwgMjIlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuIHtcXG4gIHBhZGRpbmc6IDIlIDIlO1xcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICB3aWR0aDogODAlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxLjVweCAzcHggIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDcsIDM2JSwgMzclKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxufVxcblxcbmFydGljbGUgaDMge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcbn1cXG5cXG5hcnRpY2xlIHNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41JTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOSwgMjMlLCAyMiUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4uYnV0dG9uMSxcXG4jc2VhcmNoIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBwYWRkaW5nOiAwLjclIDIuNSU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjA3LCAyNiUsIDE3JSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMjVweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzJSBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jc2VhcmNoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi8qIFBvcCB1cCBDb2RlICAqL1xcbiNwb3B1cC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25hbWUtaW5wdXQge1xcbiAgd2lkdGg6IDIwZW07XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5wb3B1cC13aW5kb3cge1xcbiAgdG9wOiAyMCU7XFxuICBsZWZ0OiAyMCU7XFxuICByaWdodDogMjAlO1xcbiAgYm90dG9tOiAxNSU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDksIDIzJSwgMjIlKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLmltZy1zaWRlLWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxuICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG4ubGVmdC1ibG9jayxcXG4ucmlnaHQtYmxvY2sge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGdhcDogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmltZy1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbn1cXG5cXG4ucmlnaHQtc2lkZS1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29tbWVudC1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNGZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDNyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50LWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZm9ybSB7XFxuICBtYXJnaW46IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogI2ZmZiAxcHggc29saWQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLmZvcm0gaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMSUgMiU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5mYS14IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5mYS14OmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5wb3BVcC1pbWcge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMTgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHNDQUFzQztFQUN0QyxvQ0FBb0M7RUFDcEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zOndnaHRAMzAwOzYwMDs4MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDcsIDI2JSwgMTclKTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOSwgMjMlLCAyMiUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDElIDEwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaGVhZGVyIGgyIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbiNsb2dvIHtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgaGVpZ2h0OiA5MHB4O1xcbn1cXG5cXG4ubGlrZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubGlrZTphY3RpdmUge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5saWtlcyB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5pbWctaG9sZGVyIHtcXG4gIGhlaWdodDogMTgwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcbn1cXG5cXG51bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZ2FwOiA0cmVtIDMuNXJlbTtcXG59XFxuXFxuI2NvdW50cmllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYXJ0aWNsZSBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4gXFxuI2NvdW50cmllcyBoMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyYXk7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAwIDUlO1xcbn1cXG5cXG5saSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC44cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOSwgMjMlLCAyMiUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgcGFkZGluZzogMiUgMiU7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gIHdpZHRoOiA4MCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDEuNXB4IDNweCAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNywgMzYlLCAzNyUpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuYXJ0aWNsZSBoMyB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XFxufVxcblxcbmFydGljbGUgc3BhbiB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjUlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA5LCAyMyUsIDIyJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5idXR0b24xLFxcbiNzZWFyY2gge1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDAuNyUgMi41JTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyMDcsIDI2JSwgMTclKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweCAyNXB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDMlIGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbiNzZWFyY2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogUG9wIHVwIENvZGUgICovXFxuI3BvcHVwLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmFtZS1pbnB1dCB7XFxuICB3aWR0aDogMjBlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnBvcHVwLXdpbmRvdyB7XFxuICB0b3A6IDIwJTtcXG4gIGxlZnQ6IDIwJTtcXG4gIHJpZ2h0OiAyMCU7XFxuICBib3R0b206IDE1JTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOSwgMjMlLCAyMiUpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uaW1nLXNpZGUtYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbi5sZWZ0LWJsb2NrLFxcbi5yaWdodC1ibG9jayB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZ2FwOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW1nLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbi5yaWdodC1zaWRlLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb21tZW50LWRldGFpbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS40ZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogM3JlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnQtYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5mb3JtIHtcXG4gIG1hcmdpbjogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAjZmZmIDFweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtIGJ1dHRvbiB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4uZm9ybSBpbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAxJSAyJTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmZhLXgge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmZhLXg6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnBvcFVwLWltZyB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2R1bGVzL3BvcHVwLmpzJztcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSAnLi9pbWFnZXMvZ2xvYmUucG5nJztcbmltcG9ydCBsaWtlSW1hZ2UgZnJvbSAnLi9pbWFnZXMvaGVhcnRzLnBuZyc7XG5pbXBvcnQgaWNvbiBmcm9tICcuL2ltYWdlcy9zZWFyY2gucG5nJztcbmltcG9ydCBjb3VudHJpZXMgZnJvbSAnLi9tb2R1bGVzL2NvdW50cmllcy5qcyc7XG5pbXBvcnQgeyBnZXRMaWtlc0NvdW50LCBhZGRMaWtlIH0gZnJvbSAnLi9tb2R1bGVzL2xpa2VzLmpzJztcbmltcG9ydCBwb3B1bGF0ZSBmcm9tICcuL21vZHVsZXMvcG9wdWxhdGVEaXNwbGF5LmpzJztcblxuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xucG9wdWxhdGUodWwsIGNvdW50cmllcywgZ2V0TGlrZXNDb3VudCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJykuc3JjID0gbG9nb0ltYWdlO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpY29ufSlgO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5zcmMgPSBsaWtlSW1hZ2U7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRMaWtlKGVsZW1lbnQpKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1nLWhvbGRlcicpLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgdmFsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjb3VudHJpZXNbaW5kZXhdLmZsYWdzLnBuZ30pYDtcbn0pO1xuXG5jb25zdCB3aW5kb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbndpbmRvd0NvbnRhaW5lci5jbGFzc05hbWUgPSAncG9wdXAtd2luZG93JztcblxuY29uc3QgcG9wV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtYnRuJyk7XG5cbnBvcFdpbmRvdy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWwoZWxlbWVudC5pZFsxXSwgd2luZG93Q29udGFpbmVyLCBjb3VudHJpZXMpO1xuICAgIHdpbmRvd0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICB9KTtcbn0pO1xuIiwiY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChpZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcbiAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1VNdTJRQWIzNlBWU2EwSTNONzFtL2NvbW1lbnRzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgY29tbWVudCxcbiAgICB9KSxcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1VNdTJRQWIzNlBWU2EwSTNONzFtL2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBzcyA9IGF3YWl0IHJlLmpzb24oKTtcbiAgcmV0dXJuIHNzO1xufTtcblxuZXhwb3J0IHsgYWRkQ29tbWVudCwgZ2V0Q29tbWVudCB9OyIsImNvbnN0IHByb21pc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92Mi9hbGwnKTtcbmNvbnN0IGNvdW50cmllcyA9IGF3YWl0IHByb21pc2UuanNvbigpO1xuXG5leHBvcnQgZGVmYXVsdCBjb3VudHJpZXM7IiwiY29uc3QgYWRkTGlrZSA9IGFzeW5jIChlbGUpID0+IHtcbiAgY29uc3QgbnVtID0gZWxlLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnRleHRDb250ZW50LnNwbGl0KCcgJylbMF07XG4gIGVsZS5uZXh0U2libGluZy5uZXh0U2libGluZy50ZXh0Q29udGVudCA9ICcnLmNvbmNhdCgrbnVtICsgMSwgJyBsaWtlcycpO1xuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvVU11MlFBYjM2UFZTYTBJM043MW0vbGlrZXMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGVsZS5pZCxcbiAgICB9KSxcbiAgfSk7XG59O1xuXG5jb25zdCBwcm9taXNlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9VTXUyUUFiMzZQVlNhMEkzTjcxbS9saWtlcycsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHNzID0gYXdhaXQgcmUuanNvbigpO1xuICByZXR1cm4gc3M7XG59O1xuY29uc3QgbGlrZSA9IGF3YWl0IHByb21pc2UoKTtcblxuY29uc3QgZ2V0TGlrZXNDb3VudCA9IChpZCkgPT4ge1xuICBjb25zdCB2YWwgPSBsaWtlLmZpbmQoKG8pID0+IG8uaXRlbV9pZCA9PT0gaWQpO1xuICByZXR1cm4gdmFsID09PSB1bmRlZmluZWQgPyAwIDogdmFsLmxpa2VzO1xufTtcblxuZXhwb3J0IHsgZ2V0TGlrZXNDb3VudCwgYWRkTGlrZSB9OyIsImNvbnN0IHBvcHVsYXRlID0gKHVsLCBjb3VudHJpZXMsIGdldExpa2VzQ291bnQpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSArPSAxKSB7XG4gICAgY29uc3QgaHRtbFRleHQgPSBgXG4gICAgPGxpPlxuICAgICAgPGRpdiBjbGFzcz1cImltZy1ob2xkZXJcIj48L2Rpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8aDI+JHtjb3VudHJpZXNbaV0ubmFtZX08L2gzPlxuICAgICAgICAgIDxoMz5SZWdpb246IDxzcGFuPiR7Y291bnRyaWVzW2ldLnJlZ2lvbn08L3NwYW4+PC9oMz5cbiAgICAgICAgICA8aDM+Q2FwaXRhbDogPHNwYW4+JHtjb3VudHJpZXNbaV0uY2FwaXRhbH08L3NwYW4+PC9oMz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiXCIgaWQ9XCIkeydsJy5jb25jYXQoaSl9XCIgY2xhc3M9XCJsaWtlXCIgYWx0PVwiaGVhcnRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImxpa2VzXCI+JHtnZXRMaWtlc0NvdW50KCdsJy5jb25jYXQoaSkpfSBsaWtlczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cIiR7J2MnLmNvbmNhdChpKX1cIiBjbGFzcz1cImNvbW1lbnQtYnRuXCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgICA8L2xpPlxuICAgIGA7XG4gICAgdWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sVGV4dCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVsYXRlOyIsImltcG9ydCB7IGFkZENvbW1lbnQsIGdldENvbW1lbnQgfSBmcm9tICcuL2NvbW1lbnQuanMnO1xuXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwLXNlY3Rpb24nKTtcbmNvbnN0IG1vZGFsID0gYXN5bmMgKGksIHdpbmRvd0NvbnRhaW5lciwgY291bnRyaWVzKSA9PiB7XG4gIHdpbmRvd0NvbnRhaW5lci5pbm5lckhUTUwgPSBgIFxuXG48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhcIj5YPC9pPlxuXG4gIDxzZWN0aW9uICBjbGFzcyA9ICdpbWctc2lkZS1iYXInPiAgXG4gICAgPGRpdiBjbGFzcz1cImltZy1uYW1lXCI+XG4gICAgICA8aW1nIGNsYXNzPVwicG9wVXAtaW1nXCIgc3JjPVwiJHtjb3VudHJpZXNbaV0uZmxhZ3Muc3ZnfVwiIGFsdD1cIlwiPlxuICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj4ke2NvdW50cmllc1tpXS5uYW1lfTwvaDI+XG4gICAgPC9kaXY+XG5cblxuICAgICAgPGFydGljbGUgY2xhc3M9XCJyaWdodC1ibG9ja1wiPlxuICAgICAgICA8aDM+IE5hdGl2ZSBuYW1lOjxzcGFuPiAke2NvdW50cmllc1tpXS5uYXRpdmVOYW1lfTwvc3Bhbj48L2gzPlxuICAgICAgICA8aDM+IExhbmd1YWdlczo8c3Bhbj4gJHtjb3VudHJpZXNbaV0ubGFuZ3VhZ2VzWzBdLm5hbWV9PC9zcGFuPjwvaDM+XG4gICAgICAgICAgPGgzIGNsYXNzID1cInBvcHVsYXRpb25cIj5Qb3B1bGF0aW9uOjxzcGFuPiAke2NvdW50cmllc1tpXS5wb3B1bGF0aW9ufTwvc3Bhbj48L2gzPlxuICAgICAgICAgIDxoMz4gQ2FwaXRhbDo8c3Bhbj4gJHtjb3VudHJpZXNbaV0uY2FwaXRhbH08L3Bhbj48L2gzPlxuICAgICAgICAgIDxoMz5BcmVhOjxzcGFuPiAke2NvdW50cmllc1tpXS5hcmVhfTwvc3Bhbj48L2gzPlxuICAgICAgPC9hcnRpY2xlPlxuXG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cInJpZ2h0LWJsb2NrXCI+XG4gICAgICAgIDxoMz5Db250aW5lbnQ6IDxzcGFuPiR7Y291bnRyaWVzW2ldLnJlZ2lvbn08L3NwYW4+PC9oMz5cbiAgICAgICAgPGgzPlJlZ2lvbjogPHNwYW4+JHtjb3VudHJpZXNbaV0uc3VicmVnaW9ufTwvc3Bhbj48L2gzPlxuICAgICAgICA8aDM+Q3VycmVuY2llczogPHNwYW4+JHtjb3VudHJpZXNbaV0uY3VycmVuY2llc1swXS5uYW1lfTwvc3Bhbj48L2gzPlxuICAgICAgICA8aDM+IFRpbWUtWm9tZTogPHNwYW4+JHtjb3VudHJpZXNbaV0udGltZXpvbmVzfTwvc3Bhbj48L2gzPlxuICAgICAgICA8aDMgY2xhc3M9XCJib3JkZXJzXCI+Qm9yZGVyczogPHNwYW4+JHtjb3VudHJpZXNbaV0uYm9yZGVyc308L3NwYW4+PC9oMz5cbiAgICAgIDwvYXJ0aWNsZT5cblxuICA8L3NlY3Rpb24+ICAgXG5cbiAgPHNlY3Rpb24gY2xhc3M9XCJjb21tZW50LWRldGFpbHNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1kaXZcIj5cbiAgICAgIDxmb3JtIGlkPVwiZiR7aX1cIiBjbGFzcz0nZm9ybScgYWN0aW9uPVwiXCI+XG4gICAgICA8aDI+UGxlYXNlIExlYXZlIGEgY29tbWVudDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSAnZXJyb3ItbXNnJz4gPC9kaXY+XG4gICAgICAgIDxpbnB1dCBpZCA9ICduYW1lLWlucHV0JyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgPlxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIiBtZXNzYWdlXCIgaWQ9XCJtc2ctaW5wdXRcIiBjb2xzPVwiMjhcIiByb3dzPVwiNVwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjb21tZW50LWJ0blwiIHR5cGU9XCJzdWJtaXRcIj5Db21tZW50PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1kaXZcIj5cbiAgICAgICAgICA8aDI+Q29tbWVudHM8L2gyPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb21tZW50LWJvZHlcIj5cbiAgICAgICAgICAgIDxwPk5vIENvbW1lbnRzLi4uPC9wPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICA8L3NlY3Rpb24+XG4gIFxuYDtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZCh3aW5kb3dDb250YWluZXIpO1xuICBsZXQgYm9keSA9ICcnO1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnQoYGYke2l9YCk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY29tbWVudHMpKSB7XG4gICAgY29tbWVudHMuZm9yRWFjaCgobykgPT4ge1xuICAgICAgYm9keSArPSBgPHA+JHtvLmNyZWF0aW9uX2RhdGV9ICR7by51c2VybmFtZX06ICR7by5jb21tZW50fTwvcD5gO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGJvZHkgIT0gJycpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1ib2R5JykuaW5uZXJIVE1MID0gYm9keTtcbiAgfVxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGYke2l9YCk7XG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1zZycpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBtc2dJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtc2ctaW5wdXQnKS52YWx1ZTtcbiAgICBpZiAobmFtZUlucHV0ID09PSAnJyB8fCBtc2dJbnB1dCA9PT0gJycpIHtcbiAgICAgIGVycm9yLmlubmVySFRNTCA9ICdQbGVhc2UgZmlsbCB0aGUgZmllbGRzJztcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCBhZGRDb21tZW50KGZvcm0uaWQsIG5hbWVJbnB1dCwgbXNnSW5wdXQpO1xuICAgIGNvbnNvbGUubG9nKCdmZmYnKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgY29uc3QgY210ID0gYXdhaXQgZ2V0Q29tbWVudChgZiR7aX1gKTtcbiAgICBjb25zdCBsYXN0ID0gY210W2NtdC5sZW5ndGggLSAxXTtcbiAgICBib2R5ICs9IGA8cD4ke2xhc3QuY3JlYXRpb25fZGF0ZX0gJHtsYXN0LnVzZXJuYW1lfTogJHtsYXN0LmNvbW1lbnR9PC9wPmA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtYm9keScpLmlubmVySFRNTCA9IGJvZHk7XG4gIH0pO1xuXG4gIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEteCcpO1xuICBleGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvd0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNlY3Rpb24ucmVtb3ZlQ2hpbGQod2luZG93Q29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=