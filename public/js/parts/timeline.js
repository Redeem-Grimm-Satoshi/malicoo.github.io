(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/parts/timeline"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/timeline.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--12!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/timeline.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: {
      inner: 'It will be a pleasure'
    }
  },
  data: function data() {
    return {
      items: [{
        tag: 'April 1999',
        content: 'Born',
        symbol: "play",
        color: 'red'
      }, {
        tag: 'September 2001',
        color: 'primary',
        desc: 'Started School at CS Elak Oku',
        symbol: 'bookmark',
        content: 'Start Primary Education'
      }, {
        tag: 'June 2007',
        desc: 'Was tired of running around the bushes',
        symbol: 'location',
        content: 'Moved to Bambili'
      }, {
        tag: 'July 2009',
        desc: 'Top of my class.',
        symbol: 'bolt',
        content: 'Ended Primary Education'
      }, {
        tag: 'January 2014',
        desc: 'Was forced to but ... ',
        symbol: 'code',
        content: 'Hello World Program'
      }, {
        tag: 'June 2014',
        desc: 'Ordinary Level Certificate',
        symbol: 'bolt',
        content: 'Graduated from Secondary School'
      }, {
        tag: 'July 2015',
        color: '#00acee',
        desc: "I've been tweeting ever Since",
        symbol: 'twitter',
        content: 'First time on Twitter'
      }, {
        tag: 'December 2016',
        desc: 'Felt in Love with Code. Almost failed G',
        symbol: 'heart',
        color: '#B50056',
        content: 'Malico X Code'
      }, {
        tag: 'June 2016',
        desc: 'Advanced Level Certificate',
        symbol: 'bolt',
        content: 'Graduated from High School'
      }, {
        tag: 'December 2018',
        desc: 'Excited',
        symbol: 'bookmark',
        content: 'Started Job at MECITECH'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/timeline.vue?vue&type=template&id=2c98fbac&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/timeline.vue?vue&type=template&id=2c98fbac& ***!
  \******************************************************************************************************************************************************************************************************/
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
    [
      _c("nav-bar"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "flex justify-center" },
          [
            _c("light-timeline", {
              attrs: { items: _vm.items },
              scopedSlots: _vm._u([
                {
                  key: "symbol",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c("span", {
                        style: "color:" + item.color,
                        attrs: { "uk-icon": "icon: " + item.symbol }
                      })
                    ]
                  }
                },
                {
                  key: "content",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "div",
                        {
                          attrs: {
                            "uk-scrollspy":
                              "cls: uk-animation-slide-right-small;"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(item.content) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          item.desc
                            ? _c("p", { staticClass: "text-light mt-2" }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(item.desc) +
                                    "\n                        "
                                )
                              ])
                            : _vm._e()
                        ]
                      )
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container my-2" }, [
      _c("div", { staticClass: "text-center text-white pb-8" }, [
        _c("h1", { staticClass: "font-sans font-thin" }, [
          _vm._v("Reality is just a matter of perception.")
        ]),
        _vm._v(" "),
        _c("h2", { staticClass: "font-thin text-sm tracking-wide mt-2 mb-4" }, [
          _vm._v("Those events and important moments my life.")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/timeline.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/timeline.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeline_vue_vue_type_template_id_2c98fbac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline.vue?vue&type=template&id=2c98fbac& */ "./resources/js/pages/timeline.vue?vue&type=template&id=2c98fbac&");
/* harmony import */ var _timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.vue?vue&type=script&lang=js& */ "./resources/js/pages/timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _timeline_vue_vue_type_template_id_2c98fbac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _timeline_vue_vue_type_template_id_2c98fbac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/timeline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/timeline.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/timeline.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--12!../../../node_modules/vue-loader/lib??vue-loader-options!./timeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/timeline.vue?vue&type=template&id=2c98fbac&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/timeline.vue?vue&type=template&id=2c98fbac& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_template_id_2c98fbac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./timeline.vue?vue&type=template&id=2c98fbac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/timeline.vue?vue&type=template&id=2c98fbac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_template_id_2c98fbac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_template_id_2c98fbac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);