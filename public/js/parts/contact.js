(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/parts/contact"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/contact.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--12!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/contact.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} //
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
  data: function data() {
    return {
      form: {
        email: "",
        name: "",
        message: ""
      }
    };
  },
  head: function head() {
    return {
      title: {
        inner: this.$t('contact.title')
      }
    };
  },
  methods: {
    submit: function submit() {
      var url = "/api/contact";
      axios.post(url, _objectSpread({}, this.form)).then(function (response) {
        self.load = true;
        self.resetForm();
      });
    },
    resetForm: function resetForm() {
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/contact.vue?vue&type=template&id=c886f672&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/contact.vue?vue&type=template&id=c886f672& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    [
      _c("nav-bar"),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "flex justify-center" }, [
          _c("div", { staticClass: "w-2/3" }, [
            _c(
              "div",
              { staticClass: "border border-dashed border-very-light p-8" },
              [
                _c("div", { staticClass: "flex" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-1/2" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submit($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "uk-margin" }, [
                          _c("div", { staticClass: "uk-inline" }, [
                            _c("span", {
                              staticClass: "uk-form-icon",
                              attrs: { "uk-icon": "icon: user" }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.name,
                                  expression: "form.name"
                                }
                              ],
                              staticClass: "uk-input hover:border-primary",
                              attrs: { type: "text", placeholder: "Name" },
                              domProps: { value: _vm.form.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-margin" }, [
                          _c("div", { staticClass: "uk-inline" }, [
                            _c("span", {
                              staticClass: "uk-form-icon",
                              attrs: { "uk-icon": "icon: mail" }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.email,
                                  expression: "form.email"
                                }
                              ],
                              staticClass: "uk-input hover:border-primary",
                              attrs: {
                                type: "email",
                                placeholder: "Email",
                                required: ""
                              },
                              domProps: { value: _vm.form.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(2)
                      ]
                    )
                  ])
                ])
              ]
            )
          ])
        ])
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
    return _c("div", { staticClass: "text-center text-white pb-8" }, [
      _c("h1", { staticClass: "font-sans font-thin" }, [_vm._v("Contact")]),
      _vm._v(" "),
      _c("h2", { staticClass: "font-thin text-sm tracking-wide mt-2 mb-4" }, [
        _vm._v("Please fill the form. I'll reply as soon as possible")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/2" }, [
      _c("h6", { staticClass: "text-light mb-5" }, [
        _vm._v(
          "\n                                Contact Details\n                            "
        )
      ]),
      _vm._v(" "),
      _c("div", [
        _c("h5", [
          _vm._v(
            "\n                                    Ndifon Desmond 'malico' Yong\n                                "
          )
        ]),
        _vm._v(" "),
        _c("h6", [
          _c("address", [
            _vm._v(
              "\n                                        Bamenda, Cameroon\n                                    "
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-4" }, [
        _c("div", [_vm._v(" malico.yong@gmail.com")]),
        _vm._v(" "),
        _c("div", [
          _vm._v(
            "\n                                    +237 676 95 67 03\n                                "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-4" }, [
        _c(
          "a",
          {
            staticClass: "mr-1",
            attrs: { href: "//facebook.com/malico.yong.3" }
          },
          [_c("span", { attrs: { "uk-icon": "icon: facebook" } })]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "mx-1", attrs: { href: "//twitter.com/MalicoKlash" } },
          [_c("span", { attrs: { "uk-icon": "icon: twitter" } })]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "mx-1", attrs: { href: "//github.com/malic0" } },
          [_c("span", { attrs: { "uk-icon": "icon: github" } })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-margin" }, [
      _c("div", { staticClass: "uk-inline" }, [
        _c(
          "button",
          {
            staticClass:
              "border hover:text-white hover:border-primary hover:text-primary p-2",
            attrs: { type: "submit" }
          },
          [
            _vm._v(
              "\n                                            Submit\n                                            "
            ),
            _c("span", { attrs: { "uk-icon": "icon: arrow-right" } })
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/contact.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/contact.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_vue_vue_type_template_id_c886f672___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.vue?vue&type=template&id=c886f672& */ "./resources/js/pages/contact.vue?vue&type=template&id=c886f672&");
/* harmony import */ var _contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.vue?vue&type=script&lang=js& */ "./resources/js/pages/contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contact_vue_vue_type_template_id_c886f672___WEBPACK_IMPORTED_MODULE_0__["render"],
  _contact_vue_vue_type_template_id_c886f672___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--12!../../../node_modules/vue-loader/lib??vue-loader-options!./contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/contact.vue?vue&type=template&id=c886f672&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/contact.vue?vue&type=template&id=c886f672& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_c886f672___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./contact.vue?vue&type=template&id=c886f672& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/contact.vue?vue&type=template&id=c886f672&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_c886f672___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_c886f672___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);