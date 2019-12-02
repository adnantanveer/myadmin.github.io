(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["learning-learning-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/learning/learning-listing/learning-listing.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/learning/learning-listing/learning-listing.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>learning-listing works!</p>\n");

/***/ }),

/***/ "./src/app/web-modules/learning/learning-listing/learning-listing.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/web-modules/learning/learning-listing/learning-listing.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1tb2R1bGVzL2xlYXJuaW5nL2xlYXJuaW5nLWxpc3RpbmcvbGVhcm5pbmctbGlzdGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/web-modules/learning/learning-listing/learning-listing.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/web-modules/learning/learning-listing/learning-listing.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LearningListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningListingComponent", function() { return LearningListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LearningListingComponent = class LearningListingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LearningListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-learning-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./learning-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/learning/learning-listing/learning-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./learning-listing.component.scss */ "./src/app/web-modules/learning/learning-listing/learning-listing.component.scss")).default]
    })
], LearningListingComponent);



/***/ }),

/***/ "./src/app/web-modules/learning/learning-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/web-modules/learning/learning-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: LearningRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningRoutingModule", function() { return LearningRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _learning_listing_learning_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learning-listing/learning-listing.component */ "./src/app/web-modules/learning/learning-listing/learning-listing.component.ts");




const routes = [
    {
        path: '',
        component: _learning_listing_learning_listing_component__WEBPACK_IMPORTED_MODULE_3__["LearningListingComponent"]
    }
];
let LearningRoutingModule = class LearningRoutingModule {
};
LearningRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LearningRoutingModule);



/***/ }),

/***/ "./src/app/web-modules/learning/learning.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/web-modules/learning/learning.module.ts ***!
  \*********************************************************/
/*! exports provided: LearningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningModule", function() { return LearningModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _learning_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learning-routing.module */ "./src/app/web-modules/learning/learning-routing.module.ts");
/* harmony import */ var _learning_listing_learning_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./learning-listing/learning-listing.component */ "./src/app/web-modules/learning/learning-listing/learning-listing.component.ts");





let LearningModule = class LearningModule {
};
LearningModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_learning_listing_learning_listing_component__WEBPACK_IMPORTED_MODULE_4__["LearningListingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _learning_routing_module__WEBPACK_IMPORTED_MODULE_3__["LearningRoutingModule"]
        ]
    })
], LearningModule);



/***/ })

}]);
//# sourceMappingURL=learning-learning-module-es2015.js.map