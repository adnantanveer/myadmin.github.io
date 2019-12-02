(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web-modules-web-modules-module"], {
        /***/ "./src/app/web-modules/web-modules-routing.module.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/web-modules/web-modules-routing.module.ts ***!
          \***********************************************************/
        /*! exports provided: WebModulesRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebModulesRoutingModule", function () { return WebModulesRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant/routeconstant */ "./src/app/constant/routeconstant.ts");
            var routes = [
                {
                    //currently assigned modue
                    path: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].manager,
                    loadChildren: function () { return __webpack_require__.e(/*! import() | manager-manager-module */ "manager-manager-module").then(__webpack_require__.bind(null, /*! ./manager/manager.module */ "./src/app/web-modules/manager/manager.module.ts")).then(function (m) { return m.ManagerModule; }); }
                },
                //other required modules as pe the image provided in sidebar
                {
                    path: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].manageNews,
                    loadChildren: function () { return __webpack_require__.e(/*! import() | news-news-module */ "news-news-module").then(__webpack_require__.bind(null, /*! ./news/news.module */ "./src/app/web-modules/news/news.module.ts")).then(function (m) { return m.NewsModule; }); }
                },
                {
                    path: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].manageBenifits,
                    loadChildren: function () { return __webpack_require__.e(/*! import() | benifits-benifits-module */ "benifits-benifits-module").then(__webpack_require__.bind(null, /*! ./benifits/benifits.module */ "./src/app/web-modules/benifits/benifits.module.ts")).then(function (m) { return m.BenifitsModule; }); }
                },
                {
                    path: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].calender,
                    loadChildren: function () { return __webpack_require__.e(/*! import() | calender-calender-module */ "calender-calender-module").then(__webpack_require__.bind(null, /*! ./calender/calender.module */ "./src/app/web-modules/calender/calender.module.ts")).then(function (m) { return m.CalenderModule; }); }
                },
                {
                    path: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].gaols,
                    loadChildren: function () { return __webpack_require__.e(/*! import() | goals-goals-module */ "goals-goals-module").then(__webpack_require__.bind(null, /*! ./goals/goals.module */ "./src/app/web-modules/goals/goals.module.ts")).then(function (m) { return m.GoalsModule; }); }
                },
                {
                    path: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].learning,
                    loadChildren: function () { return __webpack_require__.e(/*! import() | learning-learning-module */ "learning-learning-module").then(__webpack_require__.bind(null, /*! ./learning/learning.module */ "./src/app/web-modules/learning/learning.module.ts")).then(function (m) { return m.LearningModule; }); }
                },
                {
                    path: '',
                    redirectTo: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].manager,
                    pathMatch: "full"
                }
            ];
            var WebModulesRoutingModule = /** @class */ (function () {
                function WebModulesRoutingModule() {
                }
                return WebModulesRoutingModule;
            }());
            WebModulesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], WebModulesRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/web-modules/web-modules.module.ts": 
        /*!***************************************************!*\
          !*** ./src/app/web-modules/web-modules.module.ts ***!
          \***************************************************/
        /*! exports provided: WebModulesModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebModulesModule", function () { return WebModulesModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _web_modules_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-modules-routing.module */ "./src/app/web-modules/web-modules-routing.module.ts");
            var WebModulesModule = /** @class */ (function () {
                function WebModulesModule() {
                }
                return WebModulesModule;
            }());
            WebModulesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _web_modules_routing_module__WEBPACK_IMPORTED_MODULE_3__["WebModulesRoutingModule"]
                    ]
                })
            ], WebModulesModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=web-modules-web-modules-module-es2015.js.map
//# sourceMappingURL=web-modules-web-modules-module-es5.js.map
//# sourceMappingURL=web-modules-web-modules-module-es5.js.map