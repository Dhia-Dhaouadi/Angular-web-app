(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkUrbancommunication"] = self["webpackChunkUrbancommunication"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./urban-communication/urban-communication.module */
          17376)).then(function (m) {
            return m.UrbanCommunicationModule;
          });
        }
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'UrbanComunication';
      };

      _AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: [""]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _urban_communication_urban_communication_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./urban-communication/urban-communication.module */
      17376);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.??fac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _urban_communication_urban_communication_module__WEBPACK_IMPORTED_MODULE_2__.UrbanCommunicationModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _urban_communication_urban_communication_module__WEBPACK_IMPORTED_MODULE_2__.UrbanCommunicationModule]
        });
      })();
      /***/

    },

    /***/
    75646:
    /*!****************************************!*\
      !*** ./src/app/scrollspy.directive.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScrollspyDirective": function ScrollspyDirective() {
          return (
            /* binding */
            _ScrollspyDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _ScrollspyDirective = /*#__PURE__*/function () {
        // tslint:disable-next-line: variable-name
        function _ScrollspyDirective(_el, document) {
          _classCallCheck(this, _ScrollspyDirective);

          this._el = _el;
          this.document = document;
          this.spiedTags = [];
          this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }
        /**
         * Window scroll method
         */


        _createClass(_ScrollspyDirective, [{
          key: "onScroll",
          value: function onScroll(event) {
            var _this = this;

            var currentSection;

            var children = this._el.nativeElement.querySelectorAll('section');

            var scrollTop = this.document.documentElement.scrollTop;
            var parentOffset = this.document.documentElement.offsetTop; // tslint:disable-next-line: prefer-for-of

            var _loop = function _loop(i) {
              var element = children[i];

              if (_this.spiedTags.some(function (spiedTag) {
                return spiedTag === element.tagName;
              })) {
                if (element.offsetTop - parentOffset <= scrollTop) {
                  currentSection = element.id;
                }
              }
            };

            for (var i = 0; i < children.length; i++) {
              _loop(i);
            }

            if (currentSection !== this.currentSection) {
              this.currentSection = currentSection;
              this.sectionChange.emit(this.currentSection);
            }
          }
        }]);

        return _ScrollspyDirective;
      }();

      _ScrollspyDirective.??fac = function ScrollspyDirective_Factory(t) {
        return new (t || _ScrollspyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _ScrollspyDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _ScrollspyDirective,
        selectors: [["", "appScrollspy", ""]],
        hostBindings: function ScrollspyDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function ScrollspyDirective_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);
          }
        },
        inputs: {
          spiedTags: "spiedTags"
        },
        outputs: {
          sectionChange: "sectionChange"
        }
      });
      /***/
    },

    /***/
    14906:
    /*!********************************************************************!*\
      !*** ./src/app/urban-communication/benjdida/benjdida.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BenjdidaComponent": function BenjdidaComponent() {
          return (
            /* binding */
            _BenjdidaComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _BenjdidaComponent = /*#__PURE__*/function () {
        function _BenjdidaComponent() {
          _classCallCheck(this, _BenjdidaComponent);
        }

        _createClass(_BenjdidaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _BenjdidaComponent;
      }();

      _BenjdidaComponent.??fac = function BenjdidaComponent_Factory(t) {
        return new (t || _BenjdidaComponent)();
      };

      _BenjdidaComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _BenjdidaComponent,
        selectors: [["app-benjdida"]],
        decls: 41,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-face-smile", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/ben jdida/benjdida.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/ben jdida/benjdida1.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/ben jdida/benjdida2.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/ben jdida/benjdida3.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/ben jdida/benjdida4.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/ben jdida/benjdida5.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/ben jdida/benjdida6.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/ben jdida/benjdida8.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/ben jdida/benjdida9.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/ben jdida/benjdida10.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function BenjdidaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Ben");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "jdida");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](30, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](33, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](39, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](40, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    40720:
    /*!************************************************************!*\
      !*** ./src/app/urban-communication/blog/blog.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlogComponent": function BlogComponent() {
          return (
            /* binding */
            _BlogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _BlogComponent = /*#__PURE__*/function () {
        function _BlogComponent() {
          _classCallCheck(this, _BlogComponent);
        }

        _createClass(_BlogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _BlogComponent;
      }();

      _BlogComponent.??fac = function BlogComponent_Factory(t) {
        return new (t || _BlogComponent)();
      };

      _BlogComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _BlogComponent,
        selectors: [["app-blog"]],
        decls: 13,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "container"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-comments", "title-icon", "text-muted", 2, "color", "white"], [1, "title", 2, "color", "white", "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "text-muted", "mt-3", "title-subtitle", "mx-auto", 2, "color", "white", "font-family", "Marvel", "font-size", "35px"]],
        template: function BlogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Comming");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, " Soon");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "Les bonnes choses prennent du temps");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    97296:
    /*!******************************************************************!*\
      !*** ./src/app/urban-communication/butcher/butcher.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButcherComponent": function ButcherComponent() {
          return (
            /* binding */
            _ButcherComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _ButcherComponent = /*#__PURE__*/function () {
        function _ButcherComponent() {
          _classCallCheck(this, _ButcherComponent);
        }

        _createClass(_ButcherComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _ButcherComponent;
      }();

      _ButcherComponent.??fac = function ButcherComponent_Factory(t) {
        return new (t || _ButcherComponent)();
      };

      _ButcherComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _ButcherComponent,
        selectors: [["app-butcher"]],
        decls: 22,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-face-smile", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/butcher/butcher.jpeg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/butcher/butcher1.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/butcher/butcher2.jpeg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "col-md-3"], ["src", "assets/images/butcher/butcher5.jpeg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function ButcherComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Butcher");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    1663:
    /*!**********************************************************************************!*\
      !*** ./src/app/urban-communication/cabinetblancard/cabinetblancard.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CabinetblancardComponent": function CabinetblancardComponent() {
          return (
            /* binding */
            _CabinetblancardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _CabinetblancardComponent = /*#__PURE__*/function () {
        function _CabinetblancardComponent() {
          _classCallCheck(this, _CabinetblancardComponent);
        }

        _createClass(_CabinetblancardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _CabinetblancardComponent;
      }();

      _CabinetblancardComponent.??fac = function CabinetblancardComponent_Factory(t) {
        return new (t || _CabinetblancardComponent)();
      };

      _CabinetblancardComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _CabinetblancardComponent,
        selectors: [["app-cabinetblancard"]],
        decls: 29,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-face-smile", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/cabinet blanchard/cabinet.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cabinet blanchard/cabinet1.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cabinet blanchard/cabinet2.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cabinet blanchard/cabinet3.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cabinet blanchard/cabinet4.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cabinet blanchard/cabinet5.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function CabinetblancardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Cabinet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "blanchard");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](28, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    60645:
    /*!********************************************************************!*\
      !*** ./src/app/urban-communication/chillout/chillout.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChilloutComponent": function ChilloutComponent() {
          return (
            /* binding */
            _ChilloutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _ChilloutComponent = /*#__PURE__*/function () {
        function _ChilloutComponent() {
          _classCallCheck(this, _ChilloutComponent);
        }

        _createClass(_ChilloutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _ChilloutComponent;
      }();

      _ChilloutComponent.??fac = function ChilloutComponent_Factory(t) {
        return new (t || _ChilloutComponent)();
      };

      _ChilloutComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _ChilloutComponent,
        selectors: [["app-chillout"]],
        decls: 22,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-face-smile", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/chillout/chillout.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/chillout/chillout1.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/chillout/chillout2.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/chillout/chillout3.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function ChilloutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Chillout");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    25863:
    /*!********************************************************************************************!*\
      !*** ./src/app/urban-communication/community-management/community-management.component.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommunityManagementComponent": function CommunityManagementComponent() {
          return (
            /* binding */
            _CommunityManagementComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _CommunityManagementComponent = /*#__PURE__*/function () {
        function _CommunityManagementComponent() {
          _classCallCheck(this, _CommunityManagementComponent);
        }

        _createClass(_CommunityManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _CommunityManagementComponent;
      }();

      _CommunityManagementComponent.??fac = function CommunityManagementComponent_Factory(t) {
        return new (t || _CommunityManagementComponent)();
      };

      _CommunityManagementComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _CommunityManagementComponent,
        selectors: [["app-community-management"]],
        decls: 200,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-ruler-pencil", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "text-muted", "mt-3", "title-subtitle", "mx-auto", 2, "font-family", "Marvel", "font-size", "20px"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/communitymanagement7.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/communitymanagement3.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/communitymanagement1.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/communitymanagement2.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/communitymanagement4.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/communitymanagement5.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/communitymanagement8.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/communitymanagement6.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "row", 2, "margin-left", "10%"], [1, "col-md-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#packlight"], ["src", "assets/images/UrbancommunicationPack.png", 1, "img-fluid", "mx-auto", "d-block"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#packpresence"], ["src", "assets/images/UrbancommunicationPack3.png", 1, "img-fluid", "mx-auto", "d-block"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#packpremium"], ["src", "assets/images/UrbancommunicationPack2.png", 1, "img-fluid", "mx-auto", "d-block"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#packpremiumplus"], ["src", "assets/images/UrbancommunicationPack1.png", 1, "img-fluid", "mx-auto", "d-block"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#specialrest"], ["src", "assets/images/UrbancommunicationPack4.png", 1, "img-fluid", "mx-auto", "d-block"], ["id", "packlight", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", 2, "background-color", "black"], [1, "modal-content"], [1, "modal-header", 2, "background-color", "black"], ["id", "packlight", 1, "modal-title", "fs-5", 2, "font-family", "Marvel", "font-size", "20px", "color", "red", "margin-left", "40%"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "ti-close", 2, "color", "white"], [1, "modal-body", 2, "background-color", "black", "font-family", "Marvel", "color", "white"], [2, "font-size", "20px", "margin-left", "20%"], ["id", "packpresence", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], ["id", "packpresence", 1, "modal-title", "fs-5", 2, "font-family", "Marvel", "font-size", "20px", "color", "red", "margin-left", "40%"], [1, "modal-body", 2, "font-family", "Marvel", "color", "white", "background-color", "black"], ["id", "packpremium", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "packpremium", 1, "modal-title", "fs-5", 2, "font-family", "Marvel", "font-size", "20px", "color", "red", "margin-left", "40%"], ["id", "packpremiumplus", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "packpremiumplus", 1, "modal-title", "fs-5", 2, "font-family", "Marvel", "font-size", "20px", "color", "red", "margin-left", "30%"], ["id", "specialrest", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "specialrest", 1, "modal-title", "fs-5", 2, "font-family", "Marvel", "font-size", "20px", "color", "red", "margin-left", "30%"], [2, "font-size", "20px", "margin-left", "10%"]],
        template: function CommunityManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Community ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Nos professionnels en community management vous accompagnent dans la mise en place de vos strat\xE9gie marketing sur les r\xE9seaux sociaux. Notre objectif est de vous aider \xE0 accro\xEEtre votre visibilit\xE9 sur les r\xE9seaux sociaux ( Facebook, Instagram, Tik Tok, Linkedin..), attirer plus de clients en ligne et g\xE9n\xE9rer des revenus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](26, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](29, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](32, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](35, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](40, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](44, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](48, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](52, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](56, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "h1", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](62, "Pack LIGHT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](63, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](66, "Cr\xE9ation/audit des r\xE9seaux sociaux");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](68, "Optimisation des pages/comptes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](70, "Veille sur votre entreprise");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](72, "Cr\xE9ation d'un habillage personnalis\xE9");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](74, "Strat\xE9gie des r\xE9seaux sociaux");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](76, "Gestion des commentaires et messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](77, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](78, "Calendrier \xE9ditorial mensuel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](79, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](80, "4 partages/mois");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](81, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](82, "1 consultant");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](84, "Engagement minimum 3mois");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](85, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](87, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](89, "h1", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](90, "PACK PRESENCE");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](91, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](92, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](93, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](94, "Cr\xE9ation/audit des r\xE9seaux sociaux");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](95, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](96, "Optimisation des pages/comptes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](97, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](98, "Veille sur votre entreprise");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](99, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](100, "Strat\xE9gie des r\xE9seaux sociaux");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](101, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](102, "Gestion des commentaires et messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](103, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](104, "Calendrier \xE9ditorial mensuel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](105, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](106, "6 partages/mois (2 sponsorings)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](107, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](108, "1 consultant");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](109, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](110, "Rapport bi-mensuel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](111, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](112, "Engagement minimum 3mois");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](113, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](114, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](115, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](116, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](117, "h1", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](118, "PACK Premium");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](119, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](120, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](121, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](122, "Cr\xE9ation/audit des r\xE9seaux sociaux");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](123, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](124, "Optimisation des pages/comptes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](125, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](126, "Veille sur votre entreprise");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](127, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](128, "Strat\xE9gie des r\xE9seaux sociaux");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](129, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](130, "Gestion des commentaires et messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](131, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](132, "Calendrier \xE9ditorial mensuel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](133, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](134, "10 partages/mois (5 sponsorings)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](135, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](136, "Publication des contenus ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](137, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](138, "Mise en place de jeux concours");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](139, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](140, "Construction des communaut\xE9s");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](141, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](142, "2 consultants");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](143, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](144, "Rapport bi-mensuel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](145, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](146, "1 Entretien mensuel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](147, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](148, "Engagement minimum 3mois");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](149, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](150, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](151, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](152, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](153, "h1", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](154, "PACK Premium Plus");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](155, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](156, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](157, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](158, "Cr\xE9ation/audit des r\xE9seaux sociaux");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](159, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](160, "Optimisation des pages/comptes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](161, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](162, "Veille sur votre entreprise");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](163, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](164, "Strat\xE9gie des r\xE9seaux sociaux");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](165, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](166, "Gestion des commentaires et messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](167, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](168, "Calendrier \xE9ditorial mensuel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](169, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](170, "15 partages/mois (8 sponsorings)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](171, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](172, "Publication des contenus ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](173, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](174, "Mise en place de jeux concours");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](175, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](176, "Construction des communaut\xE9s");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](177, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](178, "2 consultants");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](179, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](180, "Rapport bi-mensuel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](181, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](182, "1 Entretien mensuel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](183, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](184, "Engagement minimum 3mois");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](185, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](186, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](187, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](188, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](189, "h1", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](190, "PACK Sp\xE9cial Restaurateur");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](191, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](192, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](193, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](194, "4 visuels par semaine issus de la banque d\u2019UrbanCom");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](195, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](196, "Gestion des commentaires et des messages des clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](197, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](198, "Sponsoring sur demande");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](199, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    67432:
    /*!****************************************************************!*\
      !*** ./src/app/urban-communication/crispy/crispy.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CrispyComponent": function CrispyComponent() {
          return (
            /* binding */
            _CrispyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _CrispyComponent = /*#__PURE__*/function () {
        function _CrispyComponent() {
          _classCallCheck(this, _CrispyComponent);
        }

        _createClass(_CrispyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _CrispyComponent;
      }();

      _CrispyComponent.??fac = function CrispyComponent_Factory(t) {
        return new (t || _CrispyComponent)();
      };

      _CrispyComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _CrispyComponent,
        selectors: [["app-crispy"]],
        decls: 47,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-face-smile", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/crispy eats/crispy.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/crispy eats/crispy1.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/crispy eats/crispy2.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/crispy eats/crispy3.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/crispy eats/crispy5.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/crispy eats/crispy6.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/crispy eats/crispy7.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/crispy eats/crispy8.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/crispy eats/crispy9.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/crispy eats/crispy10.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/crispy eats/crispy11.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/crispy eats/crispy12.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function CrispyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Crispy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "eats");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](30, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](33, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](39, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](42, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](45, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](46, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    58167:
    /*!************************************************************************!*\
      !*** ./src/app/urban-communication/cureacoeur/cureacoeur.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CureacoeurComponent": function CureacoeurComponent() {
          return (
            /* binding */
            _CureacoeurComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _CureacoeurComponent = /*#__PURE__*/function () {
        function _CureacoeurComponent() {
          _classCallCheck(this, _CureacoeurComponent);
        }

        _createClass(_CureacoeurComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _CureacoeurComponent;
      }();

      _CureacoeurComponent.??fac = function CureacoeurComponent_Factory(t) {
        return new (t || _CureacoeurComponent)();
      };

      _CureacoeurComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _CureacoeurComponent,
        selectors: [["app-cureacoeur"]],
        decls: 47,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-face-smile", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/cure a coeur/curecoeur.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cure a coeur/curecoeur1.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cure a coeur/curecoeur2.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cure a coeur/curecoeur3.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cure a coeur/curecoeur4.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cure a coeur/curecoeur5.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cure a coeur/curecoeur6.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cure a coeur/curecoeur7.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cure a coeur/curecoeur8.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cure a coeur/curecoeur9.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cure a coeur/curecoeur10.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/cure a coeur/curecoeur11.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function CureacoeurComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Cure \xE0");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "c\u0153ur");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](30, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](33, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](39, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](42, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](45, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](46, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    5923:
    /*!********************************************************************************!*\
      !*** ./src/app/urban-communication/design-graphic/design-graphic.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DesignGraphicComponent": function DesignGraphicComponent() {
          return (
            /* binding */
            _DesignGraphicComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _DesignGraphicComponent = /*#__PURE__*/function () {
        function _DesignGraphicComponent() {
          _classCallCheck(this, _DesignGraphicComponent);
        }

        _createClass(_DesignGraphicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _DesignGraphicComponent;
      }();

      _DesignGraphicComponent.??fac = function DesignGraphicComponent_Factory(t) {
        return new (t || _DesignGraphicComponent)();
      };

      _DesignGraphicComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _DesignGraphicComponent,
        selectors: [["app-design-graphic"]],
        decls: 37,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-ruler-pencil", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "text-muted", "mt-3", "title-subtitle", "mx-auto", 2, "font-family", "Marvel", "font-size", "20px"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/DesignGraphic3.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/DesignGraphic.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/DesignGraphic7.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/DesignGraphic6.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/DesignGraphic5.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/DesignGraphic1.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/DesignGraphic2.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/DesignGraphic4.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function DesignGraphicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Design ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "Graphique");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Vous \xEAtes \xE0 la recherche d\u2019une agence sp\xE9cialis\xE9e dans la conception graphique ? Nos graphistes professionnels et cr\xE9atifs sont \xE0 votre service pour cr\xE9er vos supports de communication ( logo, charte graphique, carte visite, papeterie, enseigne, catalogue\u2026) et vous suivre de la conception \xE0 l\u2019impression.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](26, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](29, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](32, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](35, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    84158:
    /*!**************************************************************************************!*\
      !*** ./src/app/urban-communication/developpement-web/developpement-web.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeveloppementWebComponent": function DeveloppementWebComponent() {
          return (
            /* binding */
            _DeveloppementWebComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _DeveloppementWebComponent = /*#__PURE__*/function () {
        function _DeveloppementWebComponent() {
          _classCallCheck(this, _DeveloppementWebComponent);
        }

        _createClass(_DeveloppementWebComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _DeveloppementWebComponent;
      }();

      _DeveloppementWebComponent.??fac = function DeveloppementWebComponent_Factory(t) {
        return new (t || _DeveloppementWebComponent)();
      };

      _DeveloppementWebComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _DeveloppementWebComponent,
        selectors: [["app-developpement-web"]],
        decls: 37,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-ruler-pencil", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "text-muted", "mt-3", "title-subtitle", "mx-auto", 2, "font-family", "Marvel", "font-size", "20px"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/WebDevelopement.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/WebDevelopement1.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/WebDevelopement2.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/WebDevelopement3.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/WebDevelopement4.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/WebDevelopement5.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/WebDevelopement6.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/WebDevelopement7.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function DeveloppementWebComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "D\xE9veloppement ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "Web");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Urban communication vous propose des solutions efficaces, modernes et intelligentes, qui correspondent \xE0 vos attentes et aux derni\xE8res tendances. Toutes nos cr\xE9ations de site web vitrine ou e-commerce sont adaptables \xE0 l\u2019ensemble des supports, \xE9cran mobile ou desktop.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](26, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](29, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](32, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](35, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    75054:
    /*!****************************************************************!*\
      !*** ./src/app/urban-communication/footer/footer.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /**
       * Footer component
       */


      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);

          this.year = new Date().getFullYear();
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 34,
        vars: 1,
        consts: [[1, "section", 2, "background-color", "black", "color", "whitesmoke"], [1, "container", 2, "margin-top", "0%"], [1, "row"], [1, "col-lg-12"], [1, "text-center"], ["src", "assets/images/Urbancommunicationfooter.png"], [1, "collapse", "navbar-collapse", 2, "margin-left", "35%"], [1, "list-inline-item"], ["href", "https://wa.me/58172694"], ["src", "assets/images/whas.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "list-inline-item", "mb-1"], ["href", "https://twitter.com/UOwnerr2"], ["src", "assets/images/twit.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["href", "https://www.facebook.com/profile.php?id=100078063384775"], ["src", "assets/images/face.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["href", "https://www.linkedin.com/company/urbancomagence/"], ["src", "assets/images/link.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["href", "https://www.instagram.com/urban_communication22/"], ["src", "assets/images/ins.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["href", "mailto: Agencemarketing@urbancommunication.net"], ["src", "assets/images/gmail.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["href", "https://www.tiktok.com/@urban_com?lang=fr"], ["src", "assets/images/tik.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["href", "https://www.behance.net/urbancommunication?tracking_source=search_users|urban%20communication"], ["src", "assets/images/beha.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "mt-4", "pt-2", "text-center"], [1, "copy-rights", "text-muted", "mb-0"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.year, " \xA9 Urban-communication. Design by UrbanCom ");
          }
        },
        styles: [""]
      });
      /***/
    },

    /***/
    46363:
    /*!******************************************************************************!*\
      !*** ./src/app/urban-communication/hennechimouma/hennechimouma.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HennechimoumaComponent": function HennechimoumaComponent() {
          return (
            /* binding */
            _HennechimoumaComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _HennechimoumaComponent = /*#__PURE__*/function () {
        function _HennechimoumaComponent() {
          _classCallCheck(this, _HennechimoumaComponent);
        }

        _createClass(_HennechimoumaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _HennechimoumaComponent;
      }();

      _HennechimoumaComponent.??fac = function HennechimoumaComponent_Factory(t) {
        return new (t || _HennechimoumaComponent)();
      };

      _HennechimoumaComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _HennechimoumaComponent,
        selectors: [["app-hennechimouma"]],
        decls: 44,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-face-smile", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/henne chimouma/henne.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/henne chimouma/henne1.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/henne chimouma/henne2.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/henne chimouma/henne3.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/henne chimouma/henne4.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/henne chimouma/henne5.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/henne chimouma/henne6.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/henne chimouma/henne7.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/henne chimouma/henne10.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/henne chimouma/henne13.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/henne chimouma/henne14.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function HennechimoumaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Henne");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "cheimouma");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](30, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](33, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](39, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](42, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](43, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    31276:
    /*!********************************************************************!*\
      !*** ./src/app/urban-communication/laromate/laromate.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LaromateComponent": function LaromateComponent() {
          return (
            /* binding */
            _LaromateComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _LaromateComponent = /*#__PURE__*/function () {
        function _LaromateComponent() {
          _classCallCheck(this, _LaromateComponent);
        }

        _createClass(_LaromateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _LaromateComponent;
      }();

      _LaromateComponent.??fac = function LaromateComponent_Factory(t) {
        return new (t || _LaromateComponent)();
      };

      _LaromateComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _LaromateComponent,
        selectors: [["app-laromate"]],
        decls: 22,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-face-smile", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/laromate/laromate.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/laromate/laromate1.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/laromate/laromate2.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/laromate/laromate3.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function LaromateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "L'aromate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    95647:
    /*!******************************************************************!*\
      !*** ./src/app/urban-communication/menzili/menzili.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenziliComponent": function MenziliComponent() {
          return (
            /* binding */
            _MenziliComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _MenziliComponent = /*#__PURE__*/function () {
        function _MenziliComponent() {
          _classCallCheck(this, _MenziliComponent);
        }

        _createClass(_MenziliComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _MenziliComponent;
      }();

      _MenziliComponent.??fac = function MenziliComponent_Factory(t) {
        return new (t || _MenziliComponent)();
      };

      _MenziliComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _MenziliComponent,
        selectors: [["app-menzili"]],
        decls: 52,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-face-smile", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/menzili/menzili.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/menzili/menzili1.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/menzili/menzili2.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/menzili/menzili3.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/menzili/menzili4.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/menzili/menzili5.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/menzili/menzili6.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/menzili/menzili7.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/menzili/menzili8.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/menzili/menzili9.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/menzili/menzili10.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/menzili/menzili11.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/menzili/menzili12.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/menzili/menzili13.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function MenziliComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Menzili");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](26, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](29, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](32, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](35, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](38, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](41, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](44, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](47, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](50, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](51, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    37021:
    /*!****************************************************************!*\
      !*** ./src/app/urban-communication/navbar/navbar.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavbarComponent": function NavbarComponent() {
          return (
            /* binding */
            _NavbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _NavbarComponent = /*#__PURE__*/function () {
        function _NavbarComponent() {
          _classCallCheck(this, _NavbarComponent);
        }

        _createClass(_NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            document.getElementById('navbarCollapse').classList.toggle('show');
          }
        }]);

        return _NavbarComponent;
      }();

      _NavbarComponent.??fac = function NavbarComponent_Factory(t) {
        return new (t || _NavbarComponent)();
      };

      _NavbarComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 44,
        vars: 0,
        consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-custom", 2, "background-color", "#1a1a1a"], ["routerLink", "", 1, "collapse", "navbar-collapse", 2, "margin-left", "5%"], [1, "ti-angle-up", 2, "color", "white"], ["routerLink", "", 1, "navbar-toggler", 2, "color", "white", "font-size", "30px", "margin-left", "5px"], ["src", "assets/images/urbancommunicationlogo.png", "alt", "Urbancom"], ["type", "button", "routerLink", "", 1, "navbar-toggler", 2, "margin-right", "5px", "color", "white", 3, "click"], [1, "ti-angle-up"], [1, "container"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], ["id", "navbar-navlist", 1, "navbar-nav", "mx-auto"], ["id", "navb", 1, "nav-item"], [1, "nav-item", "ml-5"], ["routerLink", "", 1, "collapse", "navbar-collapse", 2, "color", "white", "font-size", "40px"], [1, "text-right", "list-unstyled", "list-inline", "mb-0", 2, "margin-right", "30px"], [1, "list-inline-item", "mb-1"], ["href", "https://twitter.com/UOwnerr2"], ["src", "assets/images/twit.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "list-inline-item"], ["href", "https://www.facebook.com/profile.php?id=100078063384775"], ["src", "assets/images/face.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["href", "https://www.linkedin.com/company/urbancomagence/"], ["src", "assets/images/link.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["href", "https://www.instagram.com/urban_communication22/"], ["src", "assets/images/ins.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["href", "mailto: Agencemarketing@urbancommunication.net"], ["src", "assets/images/gmail.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["href", "https://www.tiktok.com/@urban_com?lang=fr"], ["src", "assets/images/tik.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["href", "https://www.behance.net/urbancommunication?tracking_source=search_users|urban%20communication"], ["src", "assets/images/beha.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Urbancom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_button_click_6_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Urbancom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
        styles: [""]
      });
      /***/
    },

    /***/
    67811:
    /*!************************************************************!*\
      !*** ./src/app/urban-communication/nour/nour.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NourComponent": function NourComponent() {
          return (
            /* binding */
            _NourComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _NourComponent = /*#__PURE__*/function () {
        function _NourComponent() {
          _classCallCheck(this, _NourComponent);
        }

        _createClass(_NourComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _NourComponent;
      }();

      _NourComponent.??fac = function NourComponent_Factory(t) {
        return new (t || _NourComponent)();
      };

      _NourComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _NourComponent,
        selectors: [["app-nour"]],
        decls: 37,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-face-smile", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/nour/nour7.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/nour/nour2.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/nour/nour3.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/nour/nour4.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/nour/nour5.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/nour/nour6.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/nour/nour8.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/nour/nour9.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/nour/nour10.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function NourComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Nour");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](26, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](29, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](32, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](35, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    50600:
    /*!********************************************************************************!*\
      !*** ./src/app/urban-communication/servicephoning/servicephoning.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServicephoningComponent": function ServicephoningComponent() {
          return (
            /* binding */
            _ServicephoningComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _ServicephoningComponent = /*#__PURE__*/function () {
        function _ServicephoningComponent() {
          _classCallCheck(this, _ServicephoningComponent);
        }

        _createClass(_ServicephoningComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _ServicephoningComponent;
      }();

      _ServicephoningComponent.??fac = function ServicephoningComponent_Factory(t) {
        return new (t || _ServicephoningComponent)();
      };

      _ServicephoningComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _ServicephoningComponent,
        selectors: [["app-servicephoning"]],
        decls: 22,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-ruler-pencil", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "text-muted", "mt-3", "title-subtitle", "mx-auto", 2, "font-family", "Marvel", "font-size", "20px"], [1, "row", "mt-3"], [1, "col-md-4", "mt-3"], ["src", "assets/images/Phoning3.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/Phoning2.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/Phoning1.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function ServicephoningComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, " PHONING");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Urban communication met \xE0 votre disposition ses services t\xE9l\xE9phonique de qualit\xE9. Nous vous assurons une permanence t\xE9l\xE9phonique irr\xE9prochable pour \xE9tablir une relation de confiance avec votre client\xE8le.( t\xE9l\xE9 secr\xE9tariat, sav, service client, prospection, recouvrement de cr\xE9ances, .... )");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    87379:
    /*!********************************************************************!*\
      !*** ./src/app/urban-communication/switcher/switcher.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SwitcherComponent": function SwitcherComponent() {
          return (
            /* binding */
            _SwitcherComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      48994);
      /**
       * Switcher component
       */


      var _SwitcherComponent = /*#__PURE__*/function () {
        function _SwitcherComponent() {
          _classCallCheck(this, _SwitcherComponent);

          this.isVisible = false;
        }

        _createClass(_SwitcherComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "windowScroll",
          value: function windowScroll() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
              document.getElementById("back-to-top").style.display = "inline";
            } else {
              document.getElementById("back-to-top").style.display = "none";
            }
          }
          /**
           * Onclick color change
           * @param theme theme color
           */

        }, {
          key: "setTheme",
          value: function setTheme(theme) {
            document.getElementById('color-opt').setAttribute('href', 'assets/css/colors/' + theme + '.css');
          }
        }, {
          key: "toggleSwitcher",
          value: function toggleSwitcher() {
            this.isVisible = !this.isVisible;
          }
        }]);

        return _SwitcherComponent;
      }();

      _SwitcherComponent.??fac = function SwitcherComponent_Factory(t) {
        return new (t || _SwitcherComponent)();
      };

      _SwitcherComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _SwitcherComponent,
        selectors: [["app-switcher"]],
        decls: 5,
        vars: 3,
        consts: [[3, "scroll"], ["href", "javascript:void(0);", "id", "back-to-top", 1, "back-to-top", 3, "ngxScrollTo"], [1, "ti-angle-up"], ["id", "style-switcher", "href", "https://wa.me/58172694", 1, "bottom", 2, "background-color", "transparent", "width", "0px", "height", "0px", 3, "click"], ["src", "assets/images/what.png"]],
        template: function SwitcherComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function SwitcherComponent_Template_div_scroll_0_listener() {
              return ctx.windowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_3_listener() {
              return ctx.toggleSwitcher();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](ctx.isVisible ? "left: 0px" : "left: 94%");
          }
        },
        directives: [_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_1__.ScrollToDirective],
        styles: [""]
      });
      /***/
    },

    /***/
    11414:
    /*!****************************************************************************!*\
      !*** ./src/app/urban-communication/tiffservices/tiffservices.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TiffservicesComponent": function TiffservicesComponent() {
          return (
            /* binding */
            _TiffservicesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _TiffservicesComponent = /*#__PURE__*/function () {
        function _TiffservicesComponent() {
          _classCallCheck(this, _TiffservicesComponent);
        }

        _createClass(_TiffservicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _TiffservicesComponent;
      }();

      _TiffservicesComponent.??fac = function TiffservicesComponent_Factory(t) {
        return new (t || _TiffservicesComponent)();
      };

      _TiffservicesComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _TiffservicesComponent,
        selectors: [["app-tiffservices"]],
        decls: 44,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-face-smile", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/tiff services/tiff.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/tiff services/tiff1.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/tiff services/tiff2.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/tiff services/tiff3.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/tiff services/tiff4.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/tiff services/tiff5.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/tiff services/tiff6.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/tiff services/tiff7.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/tiff services/tiff8.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/tiff services/tiff9.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/tiff services/tiff10.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function TiffservicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Tiff");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "services");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](30, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](33, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](39, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](42, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](43, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    62004:
    /*!***************************************************************************!*\
      !*** ./src/app/urban-communication/urban-communication-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UrbanCommunicationRoutingModule": function UrbanCommunicationRoutingModule() {
          return (
            /* binding */
            _UrbanCommunicationRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _blog_blog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./blog/blog.component */
      40720);
      /* harmony import */


      var _community_management_community_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./community-management/community-management.component */
      25863);
      /* harmony import */


      var _design_graphic_design_graphic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./design-graphic/design-graphic.component */
      5923);
      /* harmony import */


      var _developpement_web_developpement_web_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./developpement-web/developpement-web.component */
      84158);
      /* harmony import */


      var _servicephoning_servicephoning_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./servicephoning/servicephoning.component */
      50600);
      /* harmony import */


      var _urban_communication_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./urban-communication.component */
      93942);
      /* harmony import */


      var _crispy_crispy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./crispy/crispy.component */
      67432);
      /* harmony import */


      var _chillout_chillout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./chillout/chillout.component */
      60645);
      /* harmony import */


      var _laromate_laromate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./laromate/laromate.component */
      31276);
      /* harmony import */


      var _urbanfoods_urbanfoods_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./urbanfoods/urbanfoods.component */
      70645);
      /* harmony import */


      var _butcher_butcher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./butcher/butcher.component */
      97296);
      /* harmony import */


      var _menzili_menzili_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./menzili/menzili.component */
      95647);
      /* harmony import */


      var _tiffservices_tiffservices_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./tiffservices/tiffservices.component */
      11414);
      /* harmony import */


      var _cureacoeur_cureacoeur_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./cureacoeur/cureacoeur.component */
      58167);
      /* harmony import */


      var _nour_nour_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./nour/nour.component */
      67811);
      /* harmony import */


      var _benjdida_benjdida_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./benjdida/benjdida.component */
      14906);
      /* harmony import */


      var _cabinetblancard_cabinetblancard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./cabinetblancard/cabinetblancard.component */
      1663);
      /* harmony import */


      var _usinecentrale_usinecentrale_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./usinecentrale/usinecentrale.component */
      32854);
      /* harmony import */


      var _hennechimouma_hennechimouma_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./hennechimouma/hennechimouma.component */
      46363);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _urban_communication_component__WEBPACK_IMPORTED_MODULE_5__.UrbanCommunicationComponent
      }, {
        path: 'CommunityManager',
        component: _community_management_community_management_component__WEBPACK_IMPORTED_MODULE_1__.CommunityManagementComponent
      }, {
        path: 'GraphicDesign',
        component: _design_graphic_design_graphic_component__WEBPACK_IMPORTED_MODULE_2__.DesignGraphicComponent
      }, {
        path: 'Phoning',
        component: _servicephoning_servicephoning_component__WEBPACK_IMPORTED_MODULE_4__.ServicephoningComponent
      }, {
        path: 'WebDeveloppement',
        component: _developpement_web_developpement_web_component__WEBPACK_IMPORTED_MODULE_3__.DeveloppementWebComponent
      }, {
        path: 'Blog',
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_0__.BlogComponent
      }, {
        path: 'Crispy',
        component: _crispy_crispy_component__WEBPACK_IMPORTED_MODULE_6__.CrispyComponent
      }, {
        path: 'Chillout',
        component: _chillout_chillout_component__WEBPACK_IMPORTED_MODULE_7__.ChilloutComponent
      }, {
        path: 'Laromate',
        component: _laromate_laromate_component__WEBPACK_IMPORTED_MODULE_8__.LaromateComponent
      }, {
        path: 'Urbanfoods',
        component: _urbanfoods_urbanfoods_component__WEBPACK_IMPORTED_MODULE_9__.UrbanfoodsComponent
      }, {
        path: 'Butcher',
        component: _butcher_butcher_component__WEBPACK_IMPORTED_MODULE_10__.ButcherComponent
      }, {
        path: 'Menzili',
        component: _menzili_menzili_component__WEBPACK_IMPORTED_MODULE_11__.MenziliComponent
      }, {
        path: 'Tiffservices',
        component: _tiffservices_tiffservices_component__WEBPACK_IMPORTED_MODULE_12__.TiffservicesComponent
      }, {
        path: 'Cureacoeur',
        component: _cureacoeur_cureacoeur_component__WEBPACK_IMPORTED_MODULE_13__.CureacoeurComponent
      }, {
        path: 'Nour',
        component: _nour_nour_component__WEBPACK_IMPORTED_MODULE_14__.NourComponent
      }, {
        path: 'Benjdida',
        component: _benjdida_benjdida_component__WEBPACK_IMPORTED_MODULE_15__.BenjdidaComponent
      }, {
        path: 'CabinetBlanchard',
        component: _cabinetblancard_cabinetblancard_component__WEBPACK_IMPORTED_MODULE_16__.CabinetblancardComponent
      }, {
        path: 'Usinecentrale',
        component: _usinecentrale_usinecentrale_component__WEBPACK_IMPORTED_MODULE_17__.UsinecentraleComponent
      }, {
        path: 'Hennecheimouma',
        component: _hennechimouma_hennechimouma_component__WEBPACK_IMPORTED_MODULE_18__.HennechimoumaComponent
      }];

      var _UrbanCommunicationRoutingModule = function _UrbanCommunicationRoutingModule() {
        _classCallCheck(this, _UrbanCommunicationRoutingModule);
      };

      _UrbanCommunicationRoutingModule.??fac = function UrbanCommunicationRoutingModule_Factory(t) {
        return new (t || _UrbanCommunicationRoutingModule)();
      };

      _UrbanCommunicationRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineNgModule"]({
        type: _UrbanCommunicationRoutingModule
      });
      _UrbanCommunicationRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["????setNgModuleScope"](_UrbanCommunicationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    93942:
    /*!**********************************************************************!*\
      !*** ./src/app/urban-communication/urban-communication.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UrbanCommunicationComponent": function UrbanCommunicationComponent() {
          return (
            /* binding */
            _UrbanCommunicationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      48994);
      /* harmony import */


      var _scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scrollspy.directive */
      75646);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./footer/footer.component */
      75054);
      /* harmony import */


      var _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./switcher/switcher.component */
      87379);

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      var _c1 = function _c1() {
        return ["SECTION"];
      };

      var _UrbanCommunicationComponent = /*#__PURE__*/function () {
        function _UrbanCommunicationComponent() {
          _classCallCheck(this, _UrbanCommunicationComponent);

          this.currentSection = 'home';
        }

        _createClass(_UrbanCommunicationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var i = 1;
            setInterval(function () {
              if (i === 1) {
                document.querySelector("#isSlideImage").src = 'assets/images/UrbanCommunicationHome.png';
              } else if (i === 2) {
                document.querySelector("#isSlideImage").src = 'assets/images/UrbanCommunicationHome1.png';
              } else {
                document.querySelector("#isSlideImage").src = 'assets/images/UrbanCommunicationHome2.png';
              }

              if (i >= 3) {
                i = 0;
              }

              i++;
            }, 1200);
            window.scrollTo(0, 0);
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            document.getElementById('navbarCollapse').classList.toggle('show');
          }
        }, {
          key: "onSectionChange",
          value: function onSectionChange(sectionId) {
            this.currentSection = sectionId;
          }
        }]);

        return _UrbanCommunicationComponent;
      }();

      _UrbanCommunicationComponent.??fac = function UrbanCommunicationComponent_Factory(t) {
        return new (t || _UrbanCommunicationComponent)();
      };

      _UrbanCommunicationComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: _UrbanCommunicationComponent,
        selectors: [["app-urban-communication"]],
        decls: 144,
        vars: 18,
        consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-custom", "sticky", "sticky-dark", 2, "background-color", "#1a1a1a"], ["routerLink", "", 1, "collapse", "navbar-collapse", 2, "color", "white", "font-size", "40px", "margin-left", "100px"], ["src", "assets/images/urbancommunicationlogo.png", "alt", "Urbancom"], ["routerLink", "", 1, "navbar-toggler", 2, "color", "white", "font-size", "30px", "margin-left", "5px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "color", "white", "margin-top", "5px", "margin-right", "20px", 3, "click"], [1, "ti-menu"], [1, "container"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], ["id", "navbar-navlist", 1, "navbar-nav", "mx-auto"], ["id", "navb", 1, "nav-item", 2, "font-family", "Marvel", 3, "ngClass"], ["routerLink", "", 1, "nav-link", 2, "font-size", "20px", 3, "ngxScrollTo", "click"], ["id", "navb", 1, "nav-item", 2, "font-family", "Marvel"], ["routerLink", "Blog", 1, "nav-link", "fw-bold", 2, "font-size", "20px", 3, "click"], [1, "text-right", "list-unstyled", "list-inline", "mb-0", 2, "margin-right", "30px", "background-position", "center"], [1, "list-inline-item"], ["href", "https://www.facebook.com/profile.php?id=100078063384775"], ["src", "assets/images/face.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["href", "https://www.instagram.com/urban_communication22/"], ["src", "assets/images/ins.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "list-inline-item", "mb-1"], ["href", "https://twitter.com/UOwnerr2"], ["src", "assets/images/twit.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["href", "https://www.tiktok.com/@urban_com?lang=fr"], ["src", "assets/images/tik.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["appScrollspy", "", 3, "spiedTags", "sectionChange"], ["id", "home", 1, "back-slide", 2, "background-position", "center", "background-color", "black"], ["name", "silde", "id", "isSlideImage", "src", "assets/images/UrbanCommunicationHome.png", 1, "slide-img", 2, "background-position", "center", "width", "100%", "height", "auto"], ["id", "services", 1, "section", 2, "background-color", "black", "color", "whitesmoke"], [1, "row", 2, "margin-left", "10%"], [1, "col-md-3", "hover-animation"], ["routerLink", "CommunityManager"], ["src", "assets/images/Communitymanager+.jpg", 1, "img-back"], ["src", "assets/images/Communitymanager.jpg", 1, "img-front"], ["routerLink", "Phoning"], ["src", "assets/images/Phoning+.jpg", 1, "img-back"], ["src", "assets/images/Phoning.jpg", 1, "img-front"], ["routerLink", "GraphicDesign"], ["src", "assets/images/DesignGraphic+.jpg", 1, "img-back"], ["src", "assets/images/DesignGraphic.jpg", 1, "img-front"], ["routerLink", "WebDeveloppement"], ["src", "assets/images/WebDevelopment+.jpg", 1, "img-back"], ["src", "assets/images/WebDevelopment.jpg", 1, "img-front"], ["id", "nosprojets", 1, "section", 2, "background-color", "black", "color", "whitesmoke", "margin-top", "0%"], [1, "row", "align-items-center"], [1, "col-lg-3", "mt-lg-0", "mt-4"], ["routerLink", "Urbanfoods"], ["src", "assets/images/urban foods/urbanfood.jpg", 1, "img-fluid", "mx-auto", "d-block"], [1, "testi-user-name", "text-center", "text-white", "mb-0", "mt-1", 2, "color", "white", "font-family", "Marvel", "font-size", "20px"], ["routerLink", "Benjdida"], ["src", "assets/images/ben jdida/benjdida3.jpg", 1, "img-fluid", "mx-auto", "d-block"], ["routerLink", "Nour"], ["src", "assets/images/nour/nour7.jpg", 1, "img-fluid", "mx-auto", "d-block"], ["routerLink", "Usinecentrale"], ["src", "assets/images/usine centrale/Usinecentrale.jpg", 1, "img-fluid", "mx-auto", "d-block"], ["routerLink", "Crispy"], ["src", "assets/images/crispy eats/crispy10.jpg", 1, "img-fluid", "mx-auto", "d-block"], ["routerLink", "Cureacoeur"], ["src", "assets/images/cure a coeur/curecoeur.jpg", 1, "img-fluid", "mx-auto", "d-block"], ["routerLink", "Laromate"], ["src", "assets/images/laromate/laromate.png", 1, "img-fluid", "mx-auto", "d-block"], ["routerLink", "Chillout"], ["src", "assets/images/chillout/chillout3.png", 1, "img-fluid", "mx-auto", "d-block"], ["routerLink", "Tiffservices"], ["src", "assets/images/tiff services/tiff.jpg", 1, "img-fluid", "mx-auto", "d-block"], ["routerLink", "Hennecheimouma"], ["src", "assets/images/henne chimouma/henne6.jpg", 1, "img-fluid", "mx-auto", "d-block"], ["routerLink", "Butcher"], ["src", "assets/images/butcher/butcher.png", 1, "img-fluid", "mx-auto", "d-block"], ["routerLink", "Menzili"], ["src", "assets/images/menzili/menzili.jpg", 1, "img-fluid", "mx-auto", "d-block"], ["id", "contact", 1, "section", 2, "background-color", "black", "color", "whitesmoke", "margin-top", "0%"], [1, "row", "align-items-center", 2, "margin-left", "5%"], ["href", "https://wa.me/58172694"], ["src", "assets/images/whatsapp.png"], ["src", "assets/images/tiktok.png"], ["src", "assets/images/facebook.png"], ["src", "assets/images/twitt.png"], ["src", "assets/images/instagram.png"], ["href", "https://www.behance.net/urbancommunication?tracking_source=search_users|urban%20communication"], ["src", "assets/images/behance.png"], ["href", "mailto: Agencemarketing@urbancommunication.net"], ["src", "assets/images/email.png"], ["href", "https://www.linkedin.com/company/urbancomagence/"], ["src", "assets/images/linkedin.png"]],
        template: function UrbanCommunicationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "Urbancom");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](5, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "Urbancom");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function UrbanCommunicationComponent_Template_button_click_7_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](8, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function UrbanCommunicationComponent_Template_a_click_13_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Accueil");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function UrbanCommunicationComponent_Template_a_click_16_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "Nos Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function UrbanCommunicationComponent_Template_a_click_19_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20, "Nos projets");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function UrbanCommunicationComponent_Template_a_click_22_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function UrbanCommunicationComponent_Template_a_click_25_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26, "Blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](31, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](34, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](37, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](40, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("sectionChange", function UrbanCommunicationComponent_Template_div_sectionChange_41_listener($event) {
              return ctx.onSectionChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "section", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](43, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "section", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](48, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](50, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](52, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](53, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](55, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](58, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](60, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](62, "a", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](63, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "a", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](65, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](66, "section", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](67, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](69, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](70, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](71, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](72, "Urbanfoods");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](73, "a", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](74, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](75, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](76, "Ben Jdida");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](77, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](78, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](80, "Nour");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](81, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](82, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](83, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](84, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](85, "Usine Centrale");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](86, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](87, "img", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](88, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](89, "Crispy eats");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](90, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](91, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](92, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](93, "Cure \xE0 c\u0153ur");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](94, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](95, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](96, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](97, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](98, "L'aromate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](99, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](100, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](101, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](102, "Chillout");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](103, "a", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](104, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](105, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](106, "Tiff services");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](107, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](108, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](109, "img", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](110, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](111, "Henne Cheimouma");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](112, "a", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](113, "img", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](114, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](115, "Butcher");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](116, "a", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](117, "img", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](118, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](119, "Menzili");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](120, "section", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](121, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](122, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](123, "a", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](124, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](125, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](126, "img", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](127, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](128, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](129, "img", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](130, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](131, "img", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](132, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](133, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](134, "img", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](135, "a", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](136, "img", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](137, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](138, "a", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](139, "img", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](140, "a", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](141, "img", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](142, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](143, "app-switcher");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](9, _c0, ctx.currentSection === "home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngxScrollTo", "#home");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](11, _c0, ctx.currentSection === "services"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngxScrollTo", "#services");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](13, _c0, ctx.currentSection === "nosprojets"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngxScrollTo", "#nosprojets");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](15, _c0, ctx.currentSection === "contact"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngxScrollTo", "#contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](17, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToDirective, _scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_2__.SwitcherComponent],
        styles: ["", ".hover-animation[_ngcontent-%COMP%] {\n    position: relative;\n    width: 294px;\n    height: 480px;\n    display: inline;\n\n  }\n  \n  .hover-animation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    width: 294px;\n    height: 480px;\n    -webkit-transition: opacity 1s ease-in-out;\n    -moz-transition: opacity 1s ease-in-out;\n    -ms-transition: opacity 1s ease-in-out;\n    -o-transition: opacity 1s ease-in-out;\n    transition: opacity 1s ease-in-out;\n  }\n  .hover-animation[_ngcontent-%COMP%]   img.img-front[_ngcontent-%COMP%]:hover{\n    opacity:0;\n    cursor: pointer;\n    display: inline;\n  }"]
      });
      /***/
    },

    /***/
    17376:
    /*!*******************************************************************!*\
      !*** ./src/app/urban-communication/urban-communication.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UrbanCommunicationModule": function UrbanCommunicationModule() {
          return (
            /* binding */
            _UrbanCommunicationModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _urban_communication_blog_blog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../urban-communication/blog/blog.component */
      40720);
      /* harmony import */


      var _community_management_community_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./community-management/community-management.component */
      25863);
      /* harmony import */


      var _design_graphic_design_graphic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./design-graphic/design-graphic.component */
      5923);
      /* harmony import */


      var _developpement_web_developpement_web_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./developpement-web/developpement-web.component */
      84158);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer/footer.component */
      75054);
      /* harmony import */


      var _servicephoning_servicephoning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./servicephoning/servicephoning.component */
      50600);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      5668);
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      48994);
      /* harmony import */


      var _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./switcher/switcher.component */
      87379);
      /* harmony import */


      var _scrollspy_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../scrollspy.directive */
      75646);
      /* harmony import */


      var ngx_typed_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ngx-typed-js */
      23192);
      /* harmony import */


      var ng_particles__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ng-particles */
      78439);
      /* harmony import */


      var _urban_communication_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./urban-communication-routing.module */
      62004);
      /* harmony import */


      var _urban_communication_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./urban-communication.component */
      93942);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      37021);
      /* harmony import */


      var _crispy_crispy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./crispy/crispy.component */
      67432);
      /* harmony import */


      var _benjdida_benjdida_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./benjdida/benjdida.component */
      14906);
      /* harmony import */


      var _cabinetblancard_cabinetblancard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./cabinetblancard/cabinetblancard.component */
      1663);
      /* harmony import */


      var _chillout_chillout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./chillout/chillout.component */
      60645);
      /* harmony import */


      var _laromate_laromate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./laromate/laromate.component */
      31276);
      /* harmony import */


      var _cureacoeur_cureacoeur_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./cureacoeur/cureacoeur.component */
      58167);
      /* harmony import */


      var _hennechimouma_hennechimouma_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./hennechimouma/hennechimouma.component */
      46363);
      /* harmony import */


      var _menzili_menzili_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./menzili/menzili.component */
      95647);
      /* harmony import */


      var _nour_nour_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./nour/nour.component */
      67811);
      /* harmony import */


      var _tiffservices_tiffservices_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./tiffservices/tiffservices.component */
      11414);
      /* harmony import */


      var _urbanfoods_urbanfoods_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./urbanfoods/urbanfoods.component */
      70645);
      /* harmony import */


      var _usinecentrale_usinecentrale_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./usinecentrale/usinecentrale.component */
      32854);
      /* harmony import */


      var _butcher_butcher_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./butcher/butcher.component */
      97296);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _UrbanCommunicationModule = function _UrbanCommunicationModule() {
        _classCallCheck(this, _UrbanCommunicationModule);
      };

      _UrbanCommunicationModule.??fac = function UrbanCommunicationModule_Factory(t) {
        return new (t || _UrbanCommunicationModule)();
      };

      _UrbanCommunicationModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["????defineNgModule"]({
        type: _UrbanCommunicationModule
      });
      _UrbanCommunicationModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_26__.CarouselModule, _urban_communication_routing_module__WEBPACK_IMPORTED_MODULE_8__.UrbanCommunicationRoutingModule, ngx_typed_js__WEBPACK_IMPORTED_MODULE_27__.NgxTypedJsModule, ng_particles__WEBPACK_IMPORTED_MODULE_28__.NgParticlesModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_29__.ScrollToModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["????setNgModuleScope"](_UrbanCommunicationModule, {
          declarations: [_urban_communication_blog_blog_component__WEBPACK_IMPORTED_MODULE_0__.BlogComponent, _community_management_community_management_component__WEBPACK_IMPORTED_MODULE_1__.CommunityManagementComponent, _design_graphic_design_graphic_component__WEBPACK_IMPORTED_MODULE_2__.DesignGraphicComponent, _developpement_web_developpement_web_component__WEBPACK_IMPORTED_MODULE_3__.DeveloppementWebComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _servicephoning_servicephoning_component__WEBPACK_IMPORTED_MODULE_5__.ServicephoningComponent, _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_6__.SwitcherComponent, _scrollspy_directive__WEBPACK_IMPORTED_MODULE_7__.ScrollspyDirective, _urban_communication_component__WEBPACK_IMPORTED_MODULE_9__.UrbanCommunicationComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__.NavbarComponent, _crispy_crispy_component__WEBPACK_IMPORTED_MODULE_11__.CrispyComponent, _benjdida_benjdida_component__WEBPACK_IMPORTED_MODULE_12__.BenjdidaComponent, _cabinetblancard_cabinetblancard_component__WEBPACK_IMPORTED_MODULE_13__.CabinetblancardComponent, _chillout_chillout_component__WEBPACK_IMPORTED_MODULE_14__.ChilloutComponent, _laromate_laromate_component__WEBPACK_IMPORTED_MODULE_15__.LaromateComponent, _cureacoeur_cureacoeur_component__WEBPACK_IMPORTED_MODULE_16__.CureacoeurComponent, _hennechimouma_hennechimouma_component__WEBPACK_IMPORTED_MODULE_17__.HennechimoumaComponent, _menzili_menzili_component__WEBPACK_IMPORTED_MODULE_18__.MenziliComponent, _nour_nour_component__WEBPACK_IMPORTED_MODULE_19__.NourComponent, _tiffservices_tiffservices_component__WEBPACK_IMPORTED_MODULE_20__.TiffservicesComponent, _urbanfoods_urbanfoods_component__WEBPACK_IMPORTED_MODULE_21__.UrbanfoodsComponent, _usinecentrale_usinecentrale_component__WEBPACK_IMPORTED_MODULE_22__.UsinecentraleComponent, _butcher_butcher_component__WEBPACK_IMPORTED_MODULE_23__.ButcherComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_26__.CarouselModule, _urban_communication_routing_module__WEBPACK_IMPORTED_MODULE_8__.UrbanCommunicationRoutingModule, ngx_typed_js__WEBPACK_IMPORTED_MODULE_27__.NgxTypedJsModule, ng_particles__WEBPACK_IMPORTED_MODULE_28__.NgParticlesModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_29__.ScrollToModule],
          exports: [_urban_communication_blog_blog_component__WEBPACK_IMPORTED_MODULE_0__.BlogComponent, _community_management_community_management_component__WEBPACK_IMPORTED_MODULE_1__.CommunityManagementComponent, _design_graphic_design_graphic_component__WEBPACK_IMPORTED_MODULE_2__.DesignGraphicComponent, _developpement_web_developpement_web_component__WEBPACK_IMPORTED_MODULE_3__.DeveloppementWebComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _servicephoning_servicephoning_component__WEBPACK_IMPORTED_MODULE_5__.ServicephoningComponent, _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_6__.SwitcherComponent]
        });
      })();
      /***/

    },

    /***/
    70645:
    /*!************************************************************************!*\
      !*** ./src/app/urban-communication/urbanfoods/urbanfoods.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UrbanfoodsComponent": function UrbanfoodsComponent() {
          return (
            /* binding */
            _UrbanfoodsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _UrbanfoodsComponent = /*#__PURE__*/function () {
        function _UrbanfoodsComponent() {
          _classCallCheck(this, _UrbanfoodsComponent);
        }

        _createClass(_UrbanfoodsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _UrbanfoodsComponent;
      }();

      _UrbanfoodsComponent.??fac = function UrbanfoodsComponent_Factory(t) {
        return new (t || _UrbanfoodsComponent)();
      };

      _UrbanfoodsComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _UrbanfoodsComponent,
        selectors: [["app-urbanfoods"]],
        decls: 70,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-face-smile", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/urban foods/urbanfood.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood1.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood2.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood3.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood4.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood5.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood6.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood7.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood8.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood9.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood10.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood11.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood12.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood13.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood14.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood15.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood16.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood17.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood18.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/urban foods/urbanfood19.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function UrbanfoodsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Urbanfoods");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](26, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](29, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](32, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](35, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](38, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](41, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](44, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](47, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](50, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](53, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](56, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](59, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](62, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](65, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](68, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](69, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    32854:
    /*!******************************************************************************!*\
      !*** ./src/app/urban-communication/usinecentrale/usinecentrale.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsinecentraleComponent": function UsinecentraleComponent() {
          return (
            /* binding */
            _UsinecentraleComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      37021);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      75054);

      var _UsinecentraleComponent = /*#__PURE__*/function () {
        function _UsinecentraleComponent() {
          _classCallCheck(this, _UsinecentraleComponent);
        }

        _createClass(_UsinecentraleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return _UsinecentraleComponent;
      }();

      _UsinecentraleComponent.??fac = function UsinecentraleComponent_Factory(t) {
        return new (t || _UsinecentraleComponent)();
      };

      _UsinecentraleComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _UsinecentraleComponent,
        selectors: [["app-usinecentrale"]],
        decls: 47,
        vars: 0,
        consts: [[1, "section", 2, "margin-top", "60px", "background-color", "black", "color", "whitesmoke"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-face-smile", "title-icon", "text-muted"], [1, "title", 2, "font-family", "Marvel", "font-size", "35px"], [1, "fw-bold"], [1, "row", "mt-3"], [1, "col-md-3", "mt-3"], ["src", "assets/images/usine centrale/Usinecentrale.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/usine centrale/Usinecentrale1.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/usine centrale/Usinecentrale2.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/usine centrale/Usinecentrale3.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/usine centrale/Usinecentrale4.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/usine centrale/Usinecentrale5.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/usine centrale/Usinecentrale6.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/usine centrale/Usinecentrale7.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/usine centrale/Usinecentrale8.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/usine centrale/Usinecentrale9.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/usine centrale/Usinecentrale10.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/usine centrale/Usinecentrale11.jpg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function UsinecentraleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Usine");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "centrale");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](30, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](33, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](39, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](42, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](45, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](46, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();