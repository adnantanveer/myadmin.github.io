(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["goals-goals-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/goals/goallisting/goallisting.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/goals/goallisting/goallisting.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>goallisting works!</p>\n");

/***/ }),

/***/ "./src/app/web-modules/goals/goallisting/goallisting.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/web-modules/goals/goallisting/goallisting.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1tb2R1bGVzL2dvYWxzL2dvYWxsaXN0aW5nL2dvYWxsaXN0aW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/web-modules/goals/goallisting/goallisting.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/web-modules/goals/goallisting/goallisting.component.ts ***!
  \************************************************************************/
/*! exports provided: GoallistingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoallistingComponent", function() { return GoallistingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GoallistingComponent = class GoallistingComponent {
    constructor() { }
    ngOnInit() {
    }
};
GoallistingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-goallisting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./goallisting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/goals/goallisting/goallisting.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./goallisting.component.scss */ "./src/app/web-modules/goals/goallisting/goallisting.component.scss")).default]
    })
], GoallistingComponent);



/***/ }),

/***/ "./src/app/web-modules/goals/goals-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/web-modules/goals/goals-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GoalsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsRoutingModule", function() { return GoalsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _goallisting_goallisting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goallisting/goallisting.component */ "./src/app/web-modules/goals/goallisting/goallisting.component.ts");




const routes = [
    {
        path: '',
        component: _goallisting_goallisting_component__WEBPACK_IMPORTED_MODULE_3__["GoallistingComponent"]
    }
];
let GoalsRoutingModule = class GoalsRoutingModule {
};
GoalsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GoalsRoutingModule);



/***/ }),

/***/ "./src/app/web-modules/goals/goals.module.ts":
/*!***************************************************!*\
  !*** ./src/app/web-modules/goals/goals.module.ts ***!
  \***************************************************/
/*! exports provided: GoalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsModule", function() { return GoalsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _goals_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goals-routing.module */ "./src/app/web-modules/goals/goals-routing.module.ts");
/* harmony import */ var _goallisting_goallisting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goallisting/goallisting.component */ "./src/app/web-modules/goals/goallisting/goallisting.component.ts");





let GoalsModule = class GoalsModule {
};
GoalsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_goallisting_goallisting_component__WEBPACK_IMPORTED_MODULE_4__["GoallistingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _goals_routing_module__WEBPACK_IMPORTED_MODULE_3__["GoalsRoutingModule"]
        ]
    })
], GoalsModule);



/***/ })

}]);
//# sourceMappingURL=goals-goals-module-es2015.js.map