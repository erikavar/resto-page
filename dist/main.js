/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n    background-color: #FFECDB;\\n    color: #3F1D00;\\n    font-family: 'Roboto', sans-serif;\\n}\\n\\n.nav {\\n    width: 100%;\\n    display: flex;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    color: white;\\n    background-color: #3F1D00;\\n}\\n\\n.restoName {\\n    font-family: 'Leckerli One', cursive;\\n    font-size: 35px;\\n    min-width: 200px;\\n    padding: 30px 0px;\\n    margin: 0px 20px;\\n}\\n\\n.restoName:hover {\\n    cursor: pointer;\\n}\\n\\n.navBtns {\\n    margin: 0px 10px 0px auto;\\n    display: grid;\\n    grid-template-columns: repeat(3, 100px);\\n    justify-items: center;\\n    align-items: center;\\n}\\n\\n.navBtn {\\n    width: 90px;\\n    padding: 30px 0px;\\n    text-align: center;\\n}\\n/* margin order: top right bottom left*/\\n\\n.navBtn:hover {\\n    border-bottom: 3px solid white;\\n    border-top: 3px solid #3F1D00;\\n    cursor: pointer;\\n}\\n\\n#content {\\n    position: relative;\\n    top: 100px;\\n    max-width: 80vw;\\n    margin: auto;\\n    text-align: center;\\n}\\n\\nh1 {\\n    font-family: 'Archivo Black', sans-serif;\\n    font-size: 100px;\\n}\\n\\n.cafeImage {\\n    max-width: 70vw;\\n}\\n\\n.otherMenuBtn {\\n    border: none;\\n    background-color: #3F1D00;\\n    color: white;\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 15px;\\n    padding: 20px;\\n    margin-bottom: 70px;\\n}\\n\\n.otherMenuBtn:hover {\\n    text-decoration: underline;\\n}\\n\\n.menuGrid {\\n    display: grid;\\n}\\n\\n.menuCategory {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\\n    padding-bottom: 20px;\\n    padding-top: 10px;\\n}\\n\\n.categoryHeader {\\n    grid-column: 1/-1;\\n    font-family: 'Archivo Black', sans-serif;\\n    font-size: 30px;\\n}\\n\\n.menuItem {\\n    font-size: 18px;\\n    font-style: italic;\\n    font-weight: bold;\\n    margin: 10px;\\n    padding: 10px;\\n}\\n\\n.menuImg {\\n    height: 300px;\\n    width: 300px;\\n    display: block;\\n    margin: auto;\\n    padding-top: 12px;\\n}\\n\\n.contactBox {\\n    border: 0.5px solid #3F1D00;\\n    max-width: 600px;\\n    margin: auto;\\n    box-shadow: 0px 0px 3px #3F1D00;\\n}\\n\\n/*FFDAB9*/\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resto-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://resto-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://resto-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://resto-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://resto-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://resto-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://resto-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://resto-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://resto-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://resto-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactLoad.js":
/*!****************************!*\
  !*** ./src/contactLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContact() {\n    \n    const contactContainer = document.createElement(\"div\");\n\n    const pageTitle = document.createElement(\"h1\");\n    pageTitle.textContent = \"Contact\";\n\n    const boxAround = document.createElement(\"div\");\n    boxAround.classList.add(\"contactBox\");\n    const mail = document.createElement(\"h2\");\n    mail.textContent = \"✉ erikas.cafe@notarealemail.com\";\n    const phone = document.createElement(\"h2\");\n    phone.textContent = \"✆ 111-222-3333\";\n\n    boxAround.appendChild(mail);\n    boxAround.appendChild(phone);\n    \n    contactContainer.appendChild(pageTitle);\n    contactContainer.appendChild(boxAround);\n\n\n    document.getElementById('content').appendChild(contactContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://resto-page/./src/contactLoad.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _menuLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuLoad.js */ \"./src/menuLoad.js\");\n/* harmony import */ var _contactLoad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactLoad.js */ \"./src/contactLoad.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _loadHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadHeader */ \"./src/loadHeader\");\n\n\n\n\n\n\n(0,_loadHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nfunction menuViaOtherBtn() {\n    document.querySelector(\".otherMenuBtn\").addEventListener(\"click\", function() {\n        document.getElementById('content').textContent = \"\";\n        (0,_menuLoad_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n}\n\ndocument.querySelector(\".homeBtn\").addEventListener(\"click\", function() {\n    document.getElementById('content').textContent = \"\";\n    (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    menuViaOtherBtn()\n});\n\ndocument.querySelector(\".restoName\").addEventListener(\"click\", function() {\n    document.getElementById('content').textContent = \"\";\n    (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    menuViaOtherBtn()\n});\n\ndocument.querySelector(\".menuBtn\").addEventListener(\"click\", function() {\n    document.getElementById('content').textContent = \"\";\n    (0,_menuLoad_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\ndocument.querySelector(\".contactBtn\").addEventListener(\"click\", function() {\n    document.getElementById('content').textContent = \"\";\n    (0,_contactLoad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n\n\n\n\n//# sourceURL=webpack://resto-page/./src/index.js?");

/***/ }),

/***/ "./src/loadHeader":
/*!************************!*\
  !*** ./src/loadHeader ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHeader() {\n    \n    const navBar = document.createElement(\"div\");\n    document.body.appendChild(navBar);\n    navBar.classList.add(\"nav\");\n\n    const restoName = document.createElement(\"div\");\n    restoName.textContent = \"Erika's Café\"\n    restoName.classList.add(\"restoName\");\n    document.querySelector(\".nav\").appendChild(restoName);\n\n    const navBtnsContainer = document.createElement(\"div\");\n    document.querySelector(\".nav\").appendChild(navBtnsContainer);\n    navBtnsContainer.classList.add(\"navBtns\");\n\n    const homeBtn = document.createElement(\"a\");\n    homeBtn.textContent = \"HOME\";\n    homeBtn.classList.add(\"homeBtn\", \"navBtn\");\n    \n    const menuBtn = document.createElement(\"a\");\n    menuBtn.textContent = \"MENU\";\n    menuBtn.classList.add(\"menuBtn\", \"navBtn\");\n    \n    const contactBtn = document.createElement(\"a\");\n    contactBtn.textContent = \"CONTACT\";\n    contactBtn.classList.add(\"contactBtn\", \"navBtn\");\n\n    document.querySelector(\".navBtns\").appendChild(homeBtn);\n    document.querySelector(\".navBtns\").appendChild(menuBtn);\n    document.querySelector(\".navBtns\").appendChild(contactBtn);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);\n\n//# sourceURL=webpack://resto-page/./src/loadHeader?");

/***/ }),

/***/ "./src/menuLoad.js":
/*!*************************!*\
  !*** ./src/menuLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _black_coffee_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./black-coffee.jpg */ \"./src/black-coffee.jpg\");\n/* harmony import */ var _tea_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tea.jpg */ \"./src/tea.jpg\");\n/* harmony import */ var _hot_chocolate_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hot-chocolate.jpg */ \"./src/hot-chocolate.jpg\");\n/* harmony import */ var _iced_coffee_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iced-coffee.jpg */ \"./src/iced-coffee.jpg\");\n/* harmony import */ var _croissant_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./croissant.jpg */ \"./src/croissant.jpg\");\n/* harmony import */ var _cinnamon_bun_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cinnamon-bun.jpg */ \"./src/cinnamon-bun.jpg\");\n/* harmony import */ var _brownie_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brownie.jpg */ \"./src/brownie.jpg\");\n/* harmony import */ var _muffin_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./muffin.jpg */ \"./src/muffin.jpg\");\n\n\n\n\n\n\n\n\n\nfunction loadMenu() {\n    \n    const menuContainer = document.createElement(\"div\");\n\n    const pageTitle = document.createElement(\"h1\");\n    pageTitle.textContent = \"Menu\";\n\n    const menuGrid = document.createElement(\"div\");\n    menuGrid.classList.add(\"menuGrid\");\n\n    // Populating drinks section of menu\n    \n    const drinksSection = document.createElement(\"div\");\n    drinksSection.classList.add(\"menuCategory\");\n    \n    const drinksHeader = document.createElement(\"div\");\n    drinksHeader.textContent = \"BEVERAGES\";\n    drinksHeader.classList.add(\"categoryHeader\")\n    drinksSection.appendChild(drinksHeader);\n\n    let drinks = [\"Coffee\", \"Tea\", \"Hot chocolate\", \"Iced coffee\"];\n    let drinksImages = [_black_coffee_jpg__WEBPACK_IMPORTED_MODULE_0__, _tea_jpg__WEBPACK_IMPORTED_MODULE_1__, _hot_chocolate_jpg__WEBPACK_IMPORTED_MODULE_2__, _iced_coffee_jpg__WEBPACK_IMPORTED_MODULE_3__];\n    let drinksList = drinks.map(function(x, i) {\n        return {\"name\": x, \"imageSrc\": drinksImages[i]}\n    }.bind(this));\n    \n    drinksList.forEach((item, index) => {\n        const drinkItem = document.createElement(\"div\");\n        drinkItem.textContent = item.name;\n        let newItemImg = document.createElement('img');\n        newItemImg.src = item.imageSrc;\n        newItemImg.classList.add(\"menuImg\");\n        drinkItem.appendChild(newItemImg);\n        drinkItem.classList.add(\"menuItem\");\n        drinksSection.appendChild(drinkItem);        \n    });\n\n    // Populating snacks section of menu\n\n    const snacksSection = document.createElement(\"div\");\n    snacksSection.classList.add(\"menuCategory\");\n    \n    const snacksHeader = document.createElement(\"div\");\n    snacksHeader.textContent = \"SNACKS\";\n    snacksHeader.classList.add(\"categoryHeader\")\n    snacksSection.appendChild(snacksHeader);\n\n    let snacks = [\"Croissant\", \"Cinnamon bun\", \"Brownie\", \"Muffin\"];\n    let snacksImages = [_croissant_jpg__WEBPACK_IMPORTED_MODULE_4__, _cinnamon_bun_jpg__WEBPACK_IMPORTED_MODULE_5__, _brownie_jpg__WEBPACK_IMPORTED_MODULE_6__, _muffin_jpg__WEBPACK_IMPORTED_MODULE_7__];\n\n    let snacksList = snacks.map(function(x, i) {\n        return {\"name\": x, \"imageSrc\": snacksImages[i]}\n    }.bind(this));\n    \n    snacksList.forEach((item, index) => {\n        const snackItem = document.createElement(\"div\");\n        snackItem.textContent = item.name;\n        let newItemImg = document.createElement('img');\n        newItemImg.src = item.imageSrc;\n        newItemImg.classList.add(\"menuImg\");\n        snackItem.appendChild(newItemImg);\n        snackItem.classList.add(\"menuItem\");\n        snacksSection.appendChild(snackItem);        \n    });\n\n    // Adding both sections to the menu\n\n    menuGrid.appendChild(drinksSection);\n    menuGrid.appendChild(snacksSection);\n    \n    menuContainer.appendChild(pageTitle);\n    menuContainer.appendChild(menuGrid);\n\n    document.getElementById('content').appendChild(menuContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://resto-page/./src/menuLoad.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cafe_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cafe.png */ \"./src/cafe.png\");\n\n\nfunction loadPage() {\n    \n    const homeContainer = document.createElement(\"div\");\n\n    const pageTitle = document.createElement(\"h1\");\n    pageTitle.textContent = \"A GREAT DAY STARTS WITH GREAT COFFEE.\";\n\n    const otherMenuBtn = document.createElement(\"button\");\n    otherMenuBtn.textContent = \"Take a look at our menu\";\n    otherMenuBtn.classList.add(\"otherMenuBtn\");\n\n        \n    homeContainer.appendChild(pageTitle);\n    homeContainer.appendChild(otherMenuBtn);\n\n    const cafeImage = document.createElement('img');\n    cafeImage.src = _cafe_png__WEBPACK_IMPORTED_MODULE_0__;\n    cafeImage.classList.add(\"cafeImage\");\n\n    homeContainer.appendChild(cafeImage);\n    document.getElementById('content').appendChild(homeContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://resto-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/black-coffee.jpg":
/*!******************************!*\
  !*** ./src/black-coffee.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9581a4e8d85dcecb68c7.jpg\";\n\n//# sourceURL=webpack://resto-page/./src/black-coffee.jpg?");

/***/ }),

/***/ "./src/brownie.jpg":
/*!*************************!*\
  !*** ./src/brownie.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e65706cc0c76b309356c.jpg\";\n\n//# sourceURL=webpack://resto-page/./src/brownie.jpg?");

/***/ }),

/***/ "./src/cafe.png":
/*!**********************!*\
  !*** ./src/cafe.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b581bc4360ac02352804.png\";\n\n//# sourceURL=webpack://resto-page/./src/cafe.png?");

/***/ }),

/***/ "./src/cinnamon-bun.jpg":
/*!******************************!*\
  !*** ./src/cinnamon-bun.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5231482db0ca7288e94.jpg\";\n\n//# sourceURL=webpack://resto-page/./src/cinnamon-bun.jpg?");

/***/ }),

/***/ "./src/croissant.jpg":
/*!***************************!*\
  !*** ./src/croissant.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4484cc99b8a9ba250e1.jpg\";\n\n//# sourceURL=webpack://resto-page/./src/croissant.jpg?");

/***/ }),

/***/ "./src/hot-chocolate.jpg":
/*!*******************************!*\
  !*** ./src/hot-chocolate.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f05979f0979acb9e578c.jpg\";\n\n//# sourceURL=webpack://resto-page/./src/hot-chocolate.jpg?");

/***/ }),

/***/ "./src/iced-coffee.jpg":
/*!*****************************!*\
  !*** ./src/iced-coffee.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1aebbfb76af30e146983.jpg\";\n\n//# sourceURL=webpack://resto-page/./src/iced-coffee.jpg?");

/***/ }),

/***/ "./src/muffin.jpg":
/*!************************!*\
  !*** ./src/muffin.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b7ed611b0224140d2726.jpg\";\n\n//# sourceURL=webpack://resto-page/./src/muffin.jpg?");

/***/ }),

/***/ "./src/tea.jpg":
/*!*********************!*\
  !*** ./src/tea.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"77793129027a57a007b6.jpg\";\n\n//# sourceURL=webpack://resto-page/./src/tea.jpg?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;