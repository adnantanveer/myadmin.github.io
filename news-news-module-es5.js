(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/news/news-list/news-list.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/news/news-list/news-list.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>news-list works!</p>\n");
            /***/ 
        }),
        /***/ "./src/app/web-modules/news/news-list/news-list.component.scss": 
        /*!*********************************************************************!*\
          !*** ./src/app/web-modules/news/news-list/news-list.component.scss ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1tb2R1bGVzL25ld3MvbmV3cy1saXN0L25ld3MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/web-modules/news/news-list/news-list.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/web-modules/news/news-list/news-list.component.ts ***!
          \*******************************************************************/
        /*! exports provided: NewsListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function () { return NewsListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NewsListComponent = /** @class */ (function () {
                function NewsListComponent() {
                }
                NewsListComponent.prototype.ngOnInit = function () {
                };
                return NewsListComponent;
            }());
            NewsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-news-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/news/news-list/news-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news-list.component.scss */ "./src/app/web-modules/news/news-list/news-list.component.scss")).default]
                })
            ], NewsListComponent);
            /***/ 
        }),
        /***/ "./src/app/web-modules/news/news-routing.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/web-modules/news/news-routing.module.ts ***!
          \*********************************************************/
        /*! exports provided: NewsRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function () { return NewsRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-list/news-list.component */ "./src/app/web-modules/news/news-list/news-list.component.ts");
            /* harmony import */ var _constant_routeconstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/routeconstant */ "./src/app/constant/routeconstant.ts");
            var routes = [
                {
                    path: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_4__["RouteConstant"].viewNews,
                    component: _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_3__["NewsListComponent"]
                }
            ];
            var NewsRoutingModule = /** @class */ (function () {
                function NewsRoutingModule() {
                }
                return NewsRoutingModule;
            }());
            NewsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], NewsRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/web-modules/news/news.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/web-modules/news/news.module.ts ***!
          \*************************************************/
        /*! exports provided: NewsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function () { return NewsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-routing.module */ "./src/app/web-modules/news/news-routing.module.ts");
            /* harmony import */ var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-list/news-list.component */ "./src/app/web-modules/news/news-list/news-list.component.ts");
            var NewsModule = /** @class */ (function () {
                function NewsModule() {
                }
                return NewsModule;
            }());
            NewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_4__["NewsListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _news_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewsRoutingModule"]
                    ]
                })
            ], NewsModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=news-news-module-es2015.js.map
//# sourceMappingURL=news-news-module-es5.js.map
//# sourceMappingURL=news-news-module-es5.js.map