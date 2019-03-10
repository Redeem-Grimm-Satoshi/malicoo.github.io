(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/parts/blog"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/blog.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--12!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/blog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comp_BlogMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp/BlogMain */ "./resources/js/pages/comp/BlogMain.vue");
/* harmony import */ var _comp_SingleBlog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comp/SingleBlog */ "./resources/js/pages/comp/SingleBlog.vue");
/* harmony import */ var gsap_TweenMax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/TweenMax */ "./node_modules/gsap/TweenMax.js");
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
      single: false
    };
  },
  components: {
    BlogMain: _comp_BlogMain__WEBPACK_IMPORTED_MODULE_0__["default"],
    SingleBlog: _comp_SingleBlog__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  head: function head() {
    return {
      title: {
        inner: this.$t('blog.title')
      }
    };
  },
  mounted: function mounted() {
    this.check();
  },
  watch: {
    '$route': function $route(to, from) {
      this.check();
    }
  },
  methods: {
    check: function check() {
      if (this.$route.params.post) {
        this.single = true;
      } else {
        this.single = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/comp/SingleBlog.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--12!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/comp/SingleBlog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./resources/js/pages/comp/sidebar.vue");
/* harmony import */ var vue_facebook_dist_components_FbComment_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-facebook/dist/components/FbComment.vue */ "./node_modules/vue-facebook/dist/components/FbComment.vue");
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
  props: {
    slug: {
      type: String,
      default: null
    }
  },
  head: function head() {
    return {
      title: function title() {
        inner: this.post.title;
      }
    };
  },
  mounted: function mounted() {
    this.fetch();
    this.events();
    this.register();
  },
  components: {
    sidebar: _sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    FbComment: vue_facebook_dist_components_FbComment_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      post: {},
      load: false,
      show: false
    };
  },
  methods: {
    scrollY: function scrollY() {
      return window.pageYOffset || document.scrollTop;
    },
    events: function events() {
      var self = this;
      window.addEventListener('scroll', self.scrollPage);
    },
    register: function register() {
      var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'script';
      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'facebook-jssdk';
      var js,
          fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
      fjs.parentNode.insertBefore(js, fjs);
    },
    scrollPage: function scrollPage() {
      var scrollVal = this.scrollY();

      if (scrollVal <= window.innerHeight / 2) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    fetch: function fetch() {
      var self = this;
      axios.get('/api/post/' + self.slug).then(function (response) {
        self.post = response.data[0];
        self.load = true;
        document.title = self.post.title;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/comp/sidebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--12!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/comp/sidebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'sidebar',
  data: function data() {
    return {
      categories: []
    };
  },
  mounted: function mounted() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var self = this;
      axios.get('/api/categories').then(function (response) {
        self.categories = response.data;
      }).catch(function (response) {
        alert('error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/comp/sidebar.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/comp/sidebar.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sidebar {\r\n    opacity: 0;\r\n    right: 5vw;\r\n    top: 150px;\r\n    width: 150px;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/comp/sidebar.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/comp/sidebar.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./sidebar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/comp/sidebar.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-facebook/dist/components/FbComment.vue":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-facebook/dist/components/FbComment.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FbComment_vue_vue_type_template_id_4b3fb650___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FbComment.vue?vue&type=template&id=4b3fb650& */ "./node_modules/vue-facebook/dist/components/FbComment.vue?vue&type=template&id=4b3fb650&");
/* harmony import */ var _FbComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FbComment.vue?vue&type=script&lang=js& */ "./node_modules/vue-facebook/dist/components/FbComment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FbComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FbComment_vue_vue_type_template_id_4b3fb650___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FbComment_vue_vue_type_template_id_4b3fb650___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-facebook/dist/components/FbComment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-facebook/dist/components/FbComment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-facebook/dist/components/FbComment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_FbComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib??vue-loader-options!./FbComment.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-facebook/dist/components/FbComment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_FbComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-facebook/dist/components/FbComment.vue?vue&type=template&id=4b3fb650&":
/*!************************************************************************************************!*\
  !*** ./node_modules/vue-facebook/dist/components/FbComment.vue?vue&type=template&id=4b3fb650& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_FbComment_vue_vue_type_template_id_4b3fb650___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./FbComment.vue?vue&type=template&id=4b3fb650& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-facebook/dist/components/FbComment.vue?vue&type=template&id=4b3fb650&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_FbComment_vue_vue_type_template_id_4b3fb650___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_FbComment_vue_vue_type_template_id_4b3fb650___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-facebook/dist/components/FbComment.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-facebook/dist/components/FbComment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

  name: "fb-comment",

  props: {
    url: {
      type: String
    },
    mobile: {
      type: Boolean,
      default: false
    },
    numposts: {
      type: Number,
      default: 10
    },
    orderBy: {
      type: String,
      default: "social"
    },
    colorsheme: {
      type: String,
      default: 'light'
    }
  }
});



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-facebook/dist/components/FbComment.vue?vue&type=template&id=4b3fb650&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-facebook/dist/components/FbComment.vue?vue&type=template&id=4b3fb650& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {
    staticClass: "fb-comments",
    attrs: {
      "data-colorscheme": _vm.colorsheme,
      "data-mobile": _vm.mobile,
      "data-href": _vm.url,
      "data-numposts": _vm.numposts,
      "data-order-by": _vm.orderBy
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/blog.vue?vue&type=template&id=d06254ea&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/blog.vue?vue&type=template&id=d06254ea& ***!
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
    [
      _c(
        "nav-bar",
        [
          _vm.single
            ? _c(
                "router-link",
                {
                  staticClass: "mr-5",
                  attrs: { slot: "before", vp: "", to: { name: "blog" } },
                  slot: "before"
                },
                [_c("span", { attrs: { "uk-icon": "icon: arrow-left" } })]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      !_vm.single
        ? _c("div", { staticClass: "container mb-8 mx-auto" }, [
            _c("div", { staticClass: "text-center text-white pb-8" }, [
              _c("h1", { staticClass: "font-sans font-thin" }, [
                _vm._v(" " + _vm._s(_vm.$t("blog.title")) + " ")
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "flex" },
          [
            !_vm.single
              ? _c("blog-main", {
                  staticClass: "w-2/3",
                  class: { single: "mx-auto" }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.single
              ? _c("single-blog", {
                  staticClass: "mx-auto",
                  attrs: { slug: _vm.$route.params.post }
                })
              : _vm._e()
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/comp/SingleBlog.vue?vue&type=template&id=61a95fd1&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/comp/SingleBlog.vue?vue&type=template&id=61a95fd1& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "flex justify-center flex-wrap" },
      [
        _vm.load
          ? _c("div", { staticClass: "w-4/5 mb-8" }, [
              _c("div", { staticClass: "uk-inline mb-4" }, [
                _c("img", {
                  attrs: {
                    src: _vm.post.featured_image,
                    alt: _vm.post.featured_image_caption
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "uk-overlay uk-light uk-position-bottom" },
                  [
                    _c("p", {
                      domProps: {
                        innerHTML: _vm._s(_vm.post.featured_image_caption)
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex justify-center mb-3" }, [
                _c("h1", [_vm._v(_vm._s(_vm.post.title))])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex justify-center mb-8 font-thin text-sm" },
                [
                  _c("span", { staticClass: "mr-2" }, [
                    _vm._v(
                      " " +
                        _vm._s(_vm.$d(new Date(_vm.post.updated_at), "short")) +
                        " "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.post.tags, function(tag) {
                    return _vm.post.tags
                      ? _c(
                          "span",
                          { staticClass: "mr-1" },
                          [
                            _vm._v("|\n                    "),
                            _c(
                              "router-link",
                              {
                                staticClass: "mx-1",
                                attrs: {
                                  to: { name: "blog", query: { cat: tag.slug } }
                                }
                              },
                              [
                                _vm._v(
                                  " " +
                                    _vm._s(tag.name) +
                                    "\n                    "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  }),
                  _vm._v("\n                |\n                "),
                  _c("span", { staticClass: "mx-2" }, [
                    _vm._v(" by " + _vm._s(_vm.post.author.name) + " ")
                  ])
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-8 flex justify-center items-center" },
                [
                  _c("span", { staticClass: "mr-3 text-thin" }, [
                    _vm._v("Share : ")
                  ]),
                  _vm._v(" "),
                  _c("social-sharing", {
                    attrs: {
                      title: _vm.post.title,
                      description: _vm.post.excerpt,
                      "twitter-user": "MalicoKlash",
                      url: "https://malico.tk/blog/" + _vm.post.slug
                    },
                    inlineTemplate: {
                      render: function() {
                        var _vm = this
                        var _h = _vm.$createElement
                        var _c = _vm._self._c || _h
                        return _c(
                          "div",
                          [
                            _c(
                              "network",
                              {
                                staticClass: "mx-1 cursor-pointer",
                                attrs: { network: "facebook" }
                              },
                              [
                                _c("span", {
                                  attrs: { "uk-icon": "icon: facebook" }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "network",
                              {
                                staticClass: "mx-1 cursor-pointer",
                                attrs: { network: "linkedin" }
                              },
                              [
                                _c("span", {
                                  attrs: { "uk-icon": "icon: linkedin" }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "network",
                              {
                                staticClass: "mx-1 cursor-pointer",
                                attrs: { network: "twitter" }
                              },
                              [
                                _c("span", {
                                  attrs: { "uk-icon": "icon: twitter" }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "network",
                              {
                                staticClass: "mx-1 cursor-pointer",
                                attrs: { network: "reddit" }
                              },
                              [
                                _c("span", {
                                  attrs: { "uk-icon": "icon: reddit" }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "network",
                              {
                                staticClass: "mx-1 cursor-pointer",
                                attrs: { network: "whatsapp" }
                              },
                              [
                                _c("span", {
                                  attrs: { "uk-icon": "icon: whatsapp" }
                                })
                              ]
                            )
                          ],
                          1
                        )
                      },
                      staticRenderFns: []
                    }
                  })
                ],
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("sidebar", {
          attrs: { "uk-parallax": "opacity: 0,1; viewport: 0.1" }
        }),
        _vm._v(" "),
        _c("div", { class: "w-2/3", attrs: { id: "target" } }, [
          _c("div", {
            staticClass: "wysiwyg",
            domProps: { innerHTML: _vm._s(_vm.post.body) }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mt-8" },
            [
              _c("fb-comment", {
                attrs: { url: "malico.tk/blog/" + _vm.post.slug }
              })
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/comp/sidebar.vue?vue&type=template&id=12805045&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/comp/sidebar.vue?vue&type=template&id=12805045& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "sidebar fixed" }, [
    _c(
      "ul",
      {
        staticClass: "uk-nav uk-nav-default tm-nav uk-nav-parent-icon",
        attrs: { "uk-scrollspy-nav": "closest: li; scroll: true; offset: 100" }
      },
      [
        _c("li", { staticClass: "text-primary mb-2" }, [_vm._v("Categories")]),
        _vm._v(" "),
        _c("li", { staticClass: "uk-nav-divider" }),
        _vm._v(" "),
        _vm._l(_vm.categories, function(category) {
          return _c(
            "li",
            {},
            [
              _c(
                "router-link",
                {
                  attrs: { to: { name: "blog", query: { cat: category.slug } } }
                },
                [_vm._v(_vm._s(category.name) + "\n            ")]
              )
            ],
            1
          )
        }),
        _vm._v(" "),
        _vm._m(0)
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "div",
        {
          staticClass:
            "bg-contrast border hover:border-solid border-dashed border-very-light flex justify-center flex-col p-4 py-6"
        },
        [
          _c("p", { staticClass: "my-5 text-thin" }, [
            _vm._v(
              "\n                    Love what you see and the way I write\n                "
            )
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "button mt-3 p-4 text-center bg-primary text-contrast",
              attrs: { href: "/hire" }
            },
            [_vm._v("\n                    Hire Me\n                ")]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/blog.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/blog.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blog_vue_vue_type_template_id_d06254ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog.vue?vue&type=template&id=d06254ea& */ "./resources/js/pages/blog.vue?vue&type=template&id=d06254ea&");
/* harmony import */ var _blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.vue?vue&type=script&lang=js& */ "./resources/js/pages/blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _blog_vue_vue_type_template_id_d06254ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _blog_vue_vue_type_template_id_d06254ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/blog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/blog.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/blog.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--12!../../../node_modules/vue-loader/lib??vue-loader-options!./blog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/blog.vue?vue&type=template&id=d06254ea&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/blog.vue?vue&type=template&id=d06254ea& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_template_id_d06254ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./blog.vue?vue&type=template&id=d06254ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/blog.vue?vue&type=template&id=d06254ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_template_id_d06254ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_template_id_d06254ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/comp/SingleBlog.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/comp/SingleBlog.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleBlog_vue_vue_type_template_id_61a95fd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleBlog.vue?vue&type=template&id=61a95fd1& */ "./resources/js/pages/comp/SingleBlog.vue?vue&type=template&id=61a95fd1&");
/* harmony import */ var _SingleBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleBlog.vue?vue&type=script&lang=js& */ "./resources/js/pages/comp/SingleBlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleBlog_vue_vue_type_template_id_61a95fd1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleBlog_vue_vue_type_template_id_61a95fd1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/comp/SingleBlog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/comp/SingleBlog.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/comp/SingleBlog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--12!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleBlog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/comp/SingleBlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/comp/SingleBlog.vue?vue&type=template&id=61a95fd1&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/comp/SingleBlog.vue?vue&type=template&id=61a95fd1& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_template_id_61a95fd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleBlog.vue?vue&type=template&id=61a95fd1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/comp/SingleBlog.vue?vue&type=template&id=61a95fd1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_template_id_61a95fd1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_template_id_61a95fd1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/comp/sidebar.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/comp/sidebar.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_vue_vue_type_template_id_12805045___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.vue?vue&type=template&id=12805045& */ "./resources/js/pages/comp/sidebar.vue?vue&type=template&id=12805045&");
/* harmony import */ var _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.vue?vue&type=script&lang=js& */ "./resources/js/pages/comp/sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/comp/sidebar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sidebar_vue_vue_type_template_id_12805045___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sidebar_vue_vue_type_template_id_12805045___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/comp/sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/comp/sidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/comp/sidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--12!../../../../node_modules/vue-loader/lib??vue-loader-options!./sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/comp/sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/comp/sidebar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/comp/sidebar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./sidebar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/comp/sidebar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/comp/sidebar.vue?vue&type=template&id=12805045&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/comp/sidebar.vue?vue&type=template&id=12805045& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_12805045___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./sidebar.vue?vue&type=template&id=12805045& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/comp/sidebar.vue?vue&type=template&id=12805045&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_12805045___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_12805045___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);