(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/parts/open"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/open.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--12!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/open.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comp_BlogMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp/BlogMain */ "./resources/js/pages/comp/BlogMain.vue");
/* harmony import */ var gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/TweenMax */ "./node_modules/gsap/TweenMax.js");
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BlogMain: _comp_BlogMain__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  head: function head() {
    return {
      title: {
        inner: this.$t('open.title')
      }
    };
  },
  mounted: function mounted() {
    this.fetch();
    gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["default"].from('.title', 1, {
      left: -20,
      opacity: 0.5,
      delay: 1
    });
  },
  methods: {
    fetch: function fetch() {
      var user = 'malic0';
      var url = 'https://api.github.com/users/' + user + '/repos';
      axios.get(url).then(function (response) {
        alert('Success');
      }).catch(function (response) {
        return console.log(response.data);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/open.vue?vue&type=template&id=bdad8f9a&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/open.vue?vue&type=template&id=bdad8f9a& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "home" },
    [_c("nav-bar"), _vm._v(" "), _vm._m(0)],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container mb-8 mx-auto" }, [
      _c("div", { staticClass: "text-center text-white pb-8" }, [
        _c("h1", { staticClass: "font-sans font-thin" }, [
          _vm._v("Open Sourcing")
        ]),
        _vm._v(" "),
        _c("h2", { staticClass: "font-thin text-sm tracking-wide mt-2 mb-4" }, [
          _vm._v("Few Projects I've worked on")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/open.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/open.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _open_vue_vue_type_template_id_bdad8f9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./open.vue?vue&type=template&id=bdad8f9a& */ "./resources/js/pages/open.vue?vue&type=template&id=bdad8f9a&");
/* harmony import */ var _open_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./open.vue?vue&type=script&lang=js& */ "./resources/js/pages/open.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _open_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _open_vue_vue_type_template_id_bdad8f9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _open_vue_vue_type_template_id_bdad8f9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/open.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/open.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/open.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_node_modules_vue_loader_lib_index_js_vue_loader_options_open_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--12!../../../node_modules/vue-loader/lib??vue-loader-options!./open.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/open.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_node_modules_vue_loader_lib_index_js_vue_loader_options_open_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/open.vue?vue&type=template&id=bdad8f9a&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/open.vue?vue&type=template&id=bdad8f9a& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_open_vue_vue_type_template_id_bdad8f9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./open.vue?vue&type=template&id=bdad8f9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/open.vue?vue&type=template&id=bdad8f9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_open_vue_vue_type_template_id_bdad8f9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_open_vue_vue_type_template_id_bdad8f9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);