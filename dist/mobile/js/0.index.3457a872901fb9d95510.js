(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/mobile/component/index.vue":
/*!*****************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/mobile/component/index.vue ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mobile_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mobile/store */ \"../src/mobile/store/index.js\");\n/* harmony import */ var _mobile_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mobile/router */ \"../src/mobile/router/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tmethods: {\n\t\tgo: function go(url) {\n\t\t\t_mobile_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state.company = url;\n\t\t\t_mobile_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push(\"/\" + url);\n\t\t}\n\t}\n});\n\n//# sourceURL=webpack:///../src/mobile/component/index.vue?../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"1\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/mobile/component/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?{"optionsId":"1","vue":true,"scoped":false,"sourceMap":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/mobile/component/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"../node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.index {\\n  font-size: 10px;\\n  height: 70vh;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n}\\n[data-dpr=\\\"2\\\"] .index {\\n    font-size: 20px;\\n}\\n[data-dpr=\\\"3\\\"] .index {\\n    font-size: 30px;\\n}\\n.index h1 {\\n    font-size: 1rem;\\n}\\n.index span {\\n    display: -webkit-inline-box;\\n    display: -ms-inline-flexbox;\\n    display: inline-flex;\\n    -webkit-box-orient: horizontal;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: row;\\n            flex-direction: row;\\n}\\n.index span span {\\n      font-size: 0.5rem;\\n      padding: 0.3rem;\\n      border: 1px solid red;\\n      border-radius: 0.4rem;\\n      margin: 0.3rem;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///../src/mobile/component/index.vue?../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%221%22,%22vue%22:true,%22scoped%22:false,%22sourceMap%22:false%7D!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "../node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-fed01302\",\"hasScoped\":false,\"optionsId\":\"1\",\"buble\":{\"transforms\":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/mobile/component/index.vue":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-fed01302","hasScoped":false,"optionsId":"1","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/mobile/component/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"index\" }, [\n    _c(\"h1\", [_vm._v(\"vue 版本 商城 入口\")]),\n    _vm._v(\" \"),\n    _c(\"span\", [\n      _c(\n        \"span\",\n        {\n          attrs: { to: \"/fst\" },\n          on: {\n            click: function($event) {\n              _vm.go(\"fst\")\n            }\n          }\n        },\n        [_vm._v(\"法赛特\")]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"span\",\n        {\n          attrs: { to: \"/lufa\" },\n          on: {\n            click: function($event) {\n              _vm.go(\"lufa\")\n            }\n          }\n        },\n        [_vm._v(\"鹭发商城\")]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"span\",\n        {\n          attrs: { to: \"/lufa\" },\n          on: {\n            click: function($event) {\n              _vm.go(\"zhuogao\")\n            }\n          }\n        },\n        [_vm._v(\"卓高商城\")]\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack:///../src/mobile/component/index.vue?../node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-fed01302%22,%22hasScoped%22:false,%22optionsId%22:%221%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!../node_modules/vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ "../node_modules/vue-loader/node_modules/vue-style-loader/index.js!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"1\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/mobile/component/index.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?{"optionsId":"1","vue":true,"scoped":false,"sourceMap":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/mobile/component/index.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/style-compiler?{\"optionsId\":\"1\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue */ \"../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"1\\\",\\\"vue\\\":true,\\\"scoped\\\":false,\\\"sourceMap\\\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/mobile/component/index.vue\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js */ \"../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"40dcea10\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///../src/mobile/component/index.vue?../node_modules/vue-loader/node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%221%22,%22vue%22:true,%22scoped%22:false,%22sourceMap%22:false%7D!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "../src/mobile/component/index.vue":
/*!*****************************************!*\
  !*** ../src/mobile/component/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue */ \"../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/mobile/component/index.vue\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_fed01302_hasScoped_false_optionsId_1_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-fed01302\",\"hasScoped\":false,\"optionsId\":\"1\",\"buble\":{\"transforms\":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue */ \"../node_modules/vue-loader/lib/template-compiler/index.js?{\\\"id\\\":\\\"data-v-fed01302\\\",\\\"hasScoped\\\":false,\\\"optionsId\\\":\\\"1\\\",\\\"buble\\\":{\\\"transforms\\\":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/mobile/component/index.vue\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ \"../node_modules/vue-loader/lib/runtime/component-normalizer.js\");\nvar disposed = false\nfunction injectStyle (context) {\n  if (disposed) return\n  __webpack_require__(/*! !vue-loader/node_modules/vue-style-loader!css-loader!../../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"1\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!sass-loader!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue */ \"../node_modules/vue-loader/node_modules/vue-style-loader/index.js!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"1\\\",\\\"vue\\\":true,\\\"scoped\\\":false,\\\"sourceMap\\\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/mobile/component/index.vue\")\n}\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_fed01302_hasScoped_false_optionsId_1_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_fed01302_hasScoped_false_optionsId_1_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"staticRenderFns\"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src\\\\mobile\\\\component\\\\index.vue\"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//# sourceURL=webpack:///../src/mobile/component/index.vue?");

/***/ })

}]);