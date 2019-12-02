(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calender-calender-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/calender/view-calender/view-calender.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/calender/view-calender/view-calender.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>view-calender works!</p>\n");

/***/ }),

/***/ "./src/app/web-modules/calender/calender-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/web-modules/calender/calender-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CalenderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderRoutingModule", function() { return CalenderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_calender_view_calender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-calender/view-calender.component */ "./src/app/web-modules/calender/view-calender/view-calender.component.ts");




const routes = [
    {
        path: '',
        component: _view_calender_view_calender_component__WEBPACK_IMPORTED_MODULE_3__["ViewCalenderComponent"]
    }
];
let CalenderRoutingModule = class CalenderRoutingModule {
};
CalenderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CalenderRoutingModule);



/***/ }),

/***/ "./src/app/web-modules/calender/calender.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/web-modules/calender/calender.module.ts ***!
  \*********************************************************/
/*! exports provided: CalenderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderModule", function() { return CalenderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _calender_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calender-routing.module */ "./src/app/web-modules/calender/calender-routing.module.ts");
/* harmony import */ var _view_calender_view_calender_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-calender/view-calender.component */ "./src/app/web-modules/calender/view-calender/view-calender.component.ts");





let CalenderModule = class CalenderModule {
};
CalenderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_view_calender_view_calender_component__WEBPACK_IMPORTED_MODULE_4__["ViewCalenderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _calender_routing_module__WEBPACK_IMPORTED_MODULE_3__["CalenderRoutingModule"]
        ]
    })
], CalenderModule);



/***/ }),

/***/ "./src/app/web-modules/calender/view-calender/view-calender.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/web-modules/calender/view-calender/view-calender.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1tb2R1bGVzL2NhbGVuZGVyL3ZpZXctY2FsZW5kZXIvdmlldy1jYWxlbmRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/web-modules/calender/view-calender/view-calender.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/web-modules/calender/view-calender/view-calender.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ViewCalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCalenderComponent", function() { return ViewCalenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewCalenderComponent = class ViewCalenderComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewCalenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-calender',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-calender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/calender/view-calender/view-calender.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-calender.component.scss */ "./src/app/web-modules/calender/view-calender/view-calender.component.scss")).default]
    })
], ViewCalenderComponent);



/***/ })

}]);
//# sourceMappingURL=calender-calender-module-es2015.js.map