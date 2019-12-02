(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manager-manager-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/developing/developing.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/developing/developing.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>developing works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/onboarding/onboarding.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/onboarding/onboarding.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>onboarding works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/planning/planning.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/planning/planning.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>planning works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/recruitment/recruitment.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/recruitment/recruitment.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--filter section-->\n<div class=\"container-fluid py-4\">\n    <div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">\n            <div>\n                <div class=\"mobile-display d-inline \">\n                    <button class=\"btn primary-btn mr-3 mb-2\">All</button>\n                    <button class=\"btn secondary-btn mr-sm-3 mb-2\">Full Time</button>\n                </div>\n                <div class=\"d-inline\">\n                    <button class=\"btn secondary-btn mr-3 mb-2\">Contact</button>\n                    <button class=\"btn secondary-btn mb-2\">Open</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--filter section ends here-->\n\n<!--inner main content section-->\n<section class=\"innner-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col d-flex justify-content-between\">\n                <div>\n                    <img _ngcontent-uph-c3=\"\" src=\"assets/svg/grid.svg\">\n                </div>\n                <div>\n                    <h2>Talent Team</h2>\n                </div>\n                <div>\n                    <span class=\"workout-txt\">Workout<sup class=\" bg-suprtxt\">3</sup></span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row pt-4\">\n            <div class=\"col-lg-4 col-md-6 col-sm-12 mb-5\" *ngFor=\"let card of cards\">\n                <!--card starts here-->\n                <div class=\"card\">\n                    <!--card body starts here-->\n                    <div class=\"card-body p-0 m-0 pt-5\">\n                        <!--div based on condition for c coming on top of card right side-->\n                        <div *ngIf=\"card.show\" class=\"flash-c\">\n                            <span>C</span>\n                        </div>\n\n                        <div class=\"requestion\">\n                            <div class=\"\">\n                                <div style=\"margin: 0 auto; height: 70px ; width: 70px\">\n                                    <img class=\"w-100 h-100 rounded-circle\" src=\"{{card.source}}\">\n                                </div>\n                                <div class=\"pb-3\">\n                                    <span class=\"d-block req-status text-center\">{{card.status}}</span>\n                                    <span class=\"d-block req-position text-center\">{{card.position}}</span>\n                                    <span class=\"number d-block text-center\">{{card.telno}}</span>\n                                </div>\n                            </div>\n                            <hr class=\"p-0 m-0\" />\n                        </div>\n                        <div class=\"py-3 text-center req-action\">\n                            <div class=\"small-circle\"></div>\n\n                            <!--this select section can be made dynamic once we get the data from api and we can pass the vaue from ts file-->\n                            <select>\n                                <option>1 task requiring action</option>\n                                <option>1 task requiring action</option>\n                                <option>1 task requiring action</option>\n                            </select>\n                            <!--select section ends here-->\n                        </div>\n\n                    </div>\n                    <!--card body ends here-->\n\n                </div>\n\n                <!--card ends here-->\n\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/seperating/seperating.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/seperating/seperating.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>seperating works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/workforce-management/workforce-management.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/workforce-management/workforce-management.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--header starts here-->\n<section class=\"worlforce-header\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col d-flex align-items-center\">\n                <h2 class=\"text-white\">Workforce Management</h2>\n            </div>\n        </div>\n    </div>\n</section>\n<!--header starts here-->\n\n<!--li custom nav tab starts here-->\n\n<div class=\"container-fluid p-0 m-0\">\n    <div class=\"row p-0 m-0\">\n        <div class=\"col custom-nav p-0 m-0\">\n            <ul class=\"d-flex m-0 p-0\" type=\"none\">\n                <li routerLinkActive=\"active\" [routerLink]=\"[routes.workforceplanningnav]\">\n                    Planning\n                </li>\n                <li routerLinkActive=\"active\" [routerLink]=\"[routes.workforceRecruitmentnav]\">\n                    Recruiting\n                </li>\n                <li routerLinkActive=\"active\" [routerLink]=\"[routes.workforceOnboardingnav]\">\n                    Onboarding\n                </li>\n                <li routerLinkActive=\"active\" [routerLink]=\"[routes.workforceDevelopingnav]\">\n                    Developing\n                </li>\n                <li routerLinkActive=\"active\" [routerLink]=\"[routes.workforceSeperatingnav]\">\n                    Seperating\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n<!--li custom nav tab starts here-->\n<!--child component will appear in this div from recruitment, planning, onboarding, developing and seperating-->\n<div class=\"common-padding\">\n    <router-outlet></router-outlet>\n</div>\n<!--li custom nav tab ends here-->\n");

/***/ }),

/***/ "./src/app/web-modules/manager/developing/developing.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/web-modules/manager/developing/developing.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1tb2R1bGVzL21hbmFnZXIvZGV2ZWxvcGluZy9kZXZlbG9waW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/web-modules/manager/developing/developing.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/web-modules/manager/developing/developing.component.ts ***!
  \************************************************************************/
/*! exports provided: DevelopingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopingComponent", function() { return DevelopingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DevelopingComponent = class DevelopingComponent {
    constructor() { }
    ngOnInit() {
    }
};
DevelopingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-developing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./developing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/developing/developing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./developing.component.scss */ "./src/app/web-modules/manager/developing/developing.component.scss")).default]
    })
], DevelopingComponent);



/***/ }),

/***/ "./src/app/web-modules/manager/manager-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/web-modules/manager/manager-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerRoutingModule", function() { return ManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant/routeconstant */ "./src/app/constant/routeconstant.ts");
/* harmony import */ var _workforce_management_workforce_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workforce-management/workforce-management.component */ "./src/app/web-modules/manager/workforce-management/workforce-management.component.ts");
/* harmony import */ var _planning_planning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./planning/planning.component */ "./src/app/web-modules/manager/planning/planning.component.ts");
/* harmony import */ var _recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recruitment/recruitment.component */ "./src/app/web-modules/manager/recruitment/recruitment.component.ts");
/* harmony import */ var _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onboarding/onboarding.component */ "./src/app/web-modules/manager/onboarding/onboarding.component.ts");
/* harmony import */ var _developing_developing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./developing/developing.component */ "./src/app/web-modules/manager/developing/developing.component.ts");
/* harmony import */ var _seperating_seperating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./seperating/seperating.component */ "./src/app/web-modules/manager/seperating/seperating.component.ts");










//routes 
const routes = [
    {
        path: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].workforceManagement,
        component: _workforce_management_workforce_management_component__WEBPACK_IMPORTED_MODULE_4__["WorkforceManagementComponent"],
        //child routing for workforce management component
        children: [
            {
                path: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].workforcePlanning,
                component: _planning_planning_component__WEBPACK_IMPORTED_MODULE_5__["PlanningComponent"]
            },
            {
                path: '',
                redirectTo: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].workforceRecruitment,
                pathMatch: "full"
            },
            //currenly assigned componet
            {
                path: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].workforceRecruitment,
                component: _recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_6__["RecruitmentComponent"]
            },
            {
                path: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].workforceOnboarding,
                component: _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_7__["OnboardingComponent"]
            },
            {
                path: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].workforceDeveloping,
                component: _developing_developing_component__WEBPACK_IMPORTED_MODULE_8__["DevelopingComponent"]
            },
            {
                path: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].workforceSeperating,
                component: _seperating_seperating_component__WEBPACK_IMPORTED_MODULE_9__["SeperatingComponent"]
            }
        ]
    },
    {
        path: '',
        redirectTo: _constant_routeconstant__WEBPACK_IMPORTED_MODULE_3__["RouteConstant"].workforceManagement,
        pathMatch: "full",
    }
];
//routes ends
let ManagerRoutingModule = class ManagerRoutingModule {
};
ManagerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ManagerRoutingModule);



/***/ }),

/***/ "./src/app/web-modules/manager/manager.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/web-modules/manager/manager.module.ts ***!
  \*******************************************************/
/*! exports provided: ManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerModule", function() { return ManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _manager_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manager-routing.module */ "./src/app/web-modules/manager/manager-routing.module.ts");
/* harmony import */ var _workforce_management_workforce_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workforce-management/workforce-management.component */ "./src/app/web-modules/manager/workforce-management/workforce-management.component.ts");
/* harmony import */ var _planning_planning_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planning/planning.component */ "./src/app/web-modules/manager/planning/planning.component.ts");
/* harmony import */ var _recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recruitment/recruitment.component */ "./src/app/web-modules/manager/recruitment/recruitment.component.ts");
/* harmony import */ var _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./onboarding/onboarding.component */ "./src/app/web-modules/manager/onboarding/onboarding.component.ts");
/* harmony import */ var _developing_developing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./developing/developing.component */ "./src/app/web-modules/manager/developing/developing.component.ts");
/* harmony import */ var _seperating_seperating_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./seperating/seperating.component */ "./src/app/web-modules/manager/seperating/seperating.component.ts");











let ManagerModule = class ManagerModule {
};
ManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_workforce_management_workforce_management_component__WEBPACK_IMPORTED_MODULE_5__["WorkforceManagementComponent"], _planning_planning_component__WEBPACK_IMPORTED_MODULE_6__["PlanningComponent"], _recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_7__["RecruitmentComponent"], _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_8__["OnboardingComponent"], _developing_developing_component__WEBPACK_IMPORTED_MODULE_9__["DevelopingComponent"], _seperating_seperating_component__WEBPACK_IMPORTED_MODULE_10__["SeperatingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _manager_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManagerRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
        ]
    })
], ManagerModule);



/***/ }),

/***/ "./src/app/web-modules/manager/onboarding/onboarding.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/web-modules/manager/onboarding/onboarding.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1tb2R1bGVzL21hbmFnZXIvb25ib2FyZGluZy9vbmJvYXJkaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/web-modules/manager/onboarding/onboarding.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/web-modules/manager/onboarding/onboarding.component.ts ***!
  \************************************************************************/
/*! exports provided: OnboardingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingComponent", function() { return OnboardingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OnboardingComponent = class OnboardingComponent {
    constructor() { }
    ngOnInit() {
    }
};
OnboardingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onboarding',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./onboarding.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/onboarding/onboarding.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./onboarding.component.scss */ "./src/app/web-modules/manager/onboarding/onboarding.component.scss")).default]
    })
], OnboardingComponent);



/***/ }),

/***/ "./src/app/web-modules/manager/planning/planning.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/web-modules/manager/planning/planning.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1tb2R1bGVzL21hbmFnZXIvcGxhbm5pbmcvcGxhbm5pbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/web-modules/manager/planning/planning.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/web-modules/manager/planning/planning.component.ts ***!
  \********************************************************************/
/*! exports provided: PlanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningComponent", function() { return PlanningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlanningComponent = class PlanningComponent {
    constructor() { }
    ngOnInit() {
    }
};
PlanningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-planning',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./planning.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/planning/planning.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./planning.component.scss */ "./src/app/web-modules/manager/planning/planning.component.scss")).default]
    })
], PlanningComponent);



/***/ }),

/***/ "./src/app/web-modules/manager/recruitment/recruitment.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/web-modules/manager/recruitment/recruitment.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".primary-btn {\n  width: 155px;\n  border-radius: 22px;\n  padding: 10px 67px 10px 67px;\n}\n\n.secondary-btn {\n  border-radius: 22px;\n  padding: 10px 47px 10px 47px;\n  border-radius: 22px;\n  border: solid 1px #e0e0e0;\n  color: #031d7a;\n  min-width: 157px;\n}\n\n.secondary-btn:hover {\n  background-image: linear-gradient(to bottom, #031d7a, #2f4fbf);\n  color: #ffffff;\n}\n\n.innner-content h2 {\n  color: #031d7a;\n  font-size: 27px;\n  font-weight: 500;\n}\n\n.innner-content .workout-txt {\n  color: #d5102e;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.innner-content .bg-suprtxt {\n  background-color: #d5102e;\n  color: #ffffff;\n  margin-left: 3px;\n  padding: 3px 5px 3px 5px;\n  border-radius: 22px;\n}\n\n.innner-content .card {\n  border-radius: 10px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.25);\n  background-color: #ffffff;\n}\n\n.innner-content .flash-c {\n  border-radius: 0px;\n  width: 0;\n  height: 0;\n  right: 0;\n  top: 0;\n  position: absolute;\n  border-top: 66px solid #d5102e;\n  border-left: 100px solid transparent;\n}\n\n.innner-content .flash-c span {\n  position: absolute;\n  right: 22px;\n  bottom: 32px;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.requestion .req-status {\n  font-size: 17px;\n  font-weight: 700;\n  line-height: 2.29;\n  color: #000000;\n}\n\n.requestion .req-position {\n  color: #6e6e6e;\n  font-size: 16px;\n}\n\n.requestion .number {\n  color: #d5102e;\n  font-size: 15px;\n}\n\n.req-action select {\n  border: none;\n  background: #ffff;\n  font-weight: 500;\n  color: #031d7a;\n  font-size: 15px;\n  outline: none;\n  background: url('selecticon.svg');\n  -webkit-appearance: none;\n  background-position: right;\n  padding-right: 17px;\n  background-repeat: no-repeat;\n  background-position-y: center;\n}\n\n.req-action .small-circle {\n  background: red;\n  margin-right: 5px;\n  border-radius: 100%;\n  height: 10px;\n  width: 10px;\n  display: inline-block;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n@media (max-width: 1064px) {\n  .mobile-display {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHZlbnR1cmV6L0Rlc2t0b3AvYW5ndWxhcnRlc3QvZ2l0L2FkbWluL3NyYy9hcHAvd2ViLW1vZHVsZXMvbWFuYWdlci9yZWNydWl0bWVudC9yZWNydWl0bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2ViLW1vZHVsZXMvbWFuYWdlci9yZWNydWl0bWVudC9yZWNydWl0bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsOERBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FER0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0FDQUo7O0FERUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FOOztBRE1FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FES0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0hKOztBREtFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNISjs7QURPRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDSko7O0FETUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNKSjs7QURPQTtFQUNFLFVBQUE7QUNKRjs7QURNQTtFQUNFO0lBQ0UseUJBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd2ViLW1vZHVsZXMvbWFuYWdlci9yZWNydWl0bWVudC9yZWNydWl0bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5LWJ0biB7XG4gIHdpZHRoOiAxNTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgcGFkZGluZzogMTBweCA2N3B4IDEwcHggNjdweDtcbn1cblxuLnNlY29uZGFyeS1idG4ge1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBwYWRkaW5nOiAxMHB4IDQ3cHggMTBweCA0N3B4O1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTBlMGUwO1xuICBjb2xvcjogIzAzMWQ3YTtcbiAgbWluLXdpZHRoOiAxNTdweDtcbn1cblxuLnNlY29uZGFyeS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDMxZDdhLCAjMmY0ZmJmKTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pbm5uZXItY29udGVudCB7XG4gIGgyIHtcbiAgICBjb2xvcjogIzAzMWQ3YTtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAud29ya291dC10eHQge1xuICAgIGNvbG9yOiAjZDUxMDJlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuYmctc3VwcnR4dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MTAyZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgIHBhZGRpbmc6IDNweCA1cHggM3B4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICB9XG4gIC5jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAuZmxhc2gtYyB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3A6IDY2cHggc29saWQgI2Q1MTAyZTtcbiAgICBib3JkZXItbGVmdDogMTAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAyMnB4O1xuICAgICAgYm90dG9tOiAzMnB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbn1cblxuLnJlcXVlc3Rpb24ge1xuICAucmVxLXN0YXR1cyB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDIuMjk7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgLnJlcS1wb3NpdGlvbiB7XG4gICAgY29sb3I6ICM2ZTZlNmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5udW1iZXIge1xuICAgIGNvbG9yOiAjZDUxMDJlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuLnJlcS1hY3Rpb24ge1xuICBzZWxlY3Qge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDMxZDdhO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VsZWN0aWNvbi5zdmdcIik7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgfVxuICAuc21hbGwtY2lyY2xlIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG4ucmlnaHQtMCB7XG4gIHJpZ2h0OiAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTA2NHB4KSB7XG4gIC5tb2JpbGUtZGlzcGxheSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBAbWVkaWEobWF4LXdpZHRoOiA1NzZweCl7XG4vLyAgICAgLm1vYmlsZS1kaXNwbGF5e1xuLy8gICAgICAgICBtYXJnaW4tbGVmdDogOTBweDtcbi8vICAgICB9XG4vLyB9XG4vLyBAbWVkaWEobWF4LXdpZHRoOiA0NzZweCl7XG4vLyAgICAgLm1vYmlsZS1kaXNwbGF5e1xuLy8gICAgICAgICBtYXJnaW4tbGVmdDo2MXB4O1xuLy8gICAgIH1cbi8vIH1cbi8vIC8vIEBtZWRpYShtYXgtd2lkdGg6IDQwMHB4KXtcbi8vIC8vICAgICAubW9iaWxlLWRpc3BsYXl7XG4vLyAvLyAgICAgICAgIG1hcmdpbi1sZWZ0OjE4cHg7XG5cbi8vIC8vICAgICB9XG4vLyAvLyB9XG5cbi8vIEBtZWRpYShtYXgtd2lkdGg6IDQwMHB4KXtcbi8vICAgICAubW9iaWxlLWRpc3BsYXl7XG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XG4vLyAgICAgICAgIC5wcmltYXJ5LWJ0bntcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNDdweCAxMHB4IDQ3cHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLnNlY29uZGFyeS1idG57XG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDM3cHggMTBweCAzN3B4O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuIiwiLnByaW1hcnktYnRuIHtcbiAgd2lkdGg6IDE1NXB4O1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBwYWRkaW5nOiAxMHB4IDY3cHggMTBweCA2N3B4O1xufVxuXG4uc2Vjb25kYXJ5LWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIHBhZGRpbmc6IDEwcHggNDdweCAxMHB4IDQ3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMGUwZTA7XG4gIGNvbG9yOiAjMDMxZDdhO1xuICBtaW4td2lkdGg6IDE1N3B4O1xufVxuXG4uc2Vjb25kYXJ5LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMzFkN2EsICMyZjRmYmYpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmlubm5lci1jb250ZW50IGgyIHtcbiAgY29sb3I6ICMwMzFkN2E7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5pbm5uZXItY29udGVudCAud29ya291dC10eHQge1xuICBjb2xvcjogI2Q1MTAyZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pbm5uZXItY29udGVudCAuYmctc3VwcnR4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTEwMmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBwYWRkaW5nOiAzcHggNXB4IDNweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG59XG4uaW5ubmVyLWNvbnRlbnQgLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmlubm5lci1jb250ZW50IC5mbGFzaC1jIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDY2cHggc29saWQgI2Q1MTAyZTtcbiAgYm9yZGVyLWxlZnQ6IDEwMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmlubm5lci1jb250ZW50IC5mbGFzaC1jIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMnB4O1xuICBib3R0b206IDMycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucmVxdWVzdGlvbiAucmVxLXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDIuMjk7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnJlcXVlc3Rpb24gLnJlcS1wb3NpdGlvbiB7XG4gIGNvbG9yOiAjNmU2ZTZlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucmVxdWVzdGlvbiAubnVtYmVyIHtcbiAgY29sb3I6ICNkNTEwMmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnJlcS1hY3Rpb24gc2VsZWN0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMzFkN2E7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZWxlY3RpY29uLnN2Z1wiKTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG59XG4ucmVxLWFjdGlvbiAuc21hbGwtY2lyY2xlIHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucmlnaHQtMCB7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDY0cHgpIHtcbiAgLm1vYmlsZS1kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/web-modules/manager/recruitment/recruitment.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/web-modules/manager/recruitment/recruitment.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecruitmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentComponent", function() { return RecruitmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecruitmentComponent = class RecruitmentComponent {
    constructor() {
        this.show = true;
        this.cards = [
            {
                source: "assets/images/workforce/profilepic.jpg",
                status: "(Open Requestion)",
                position: "Developer",
                telno: "+123456789",
                show: false
            },
            {
                source: "assets/images/profilepic.jpeg",
                status: "(Open Requestion)",
                position: "Developer",
                telno: "+123456789",
                show: false,
            },
            {
                source: "assets/images/workforce/profilepic.jpg",
                status: "(Open Requestion)",
                position: "Developer",
                telno: "+123456789",
                show: false
            },
            {
                source: "assets/images/profilepic.jpeg",
                status: "(Open Requestion)",
                position: "Developer",
                telno: "+123456789",
                show: true
            },
            {
                source: "assets/images/workforce/profilepic.jpg",
                status: "(Open Requestion)",
                position: "Developer",
                telno: "+123456789",
                show: true
            },
            {
                source: "assets/images/workforce/profilepic.jpg",
                status: "(Open Requestion)",
                position: "Developer",
                telno: "+123456789",
                show: true
            },
            {
                source: "assets/images/profilepic.jpeg",
                status: "(Open Requestion)",
                position: "Developer",
                telno: "+123456789",
                show: false
            },
            {
                source: "assets/images/workforce/profilepic.jpg",
                status: "(Open Requestion)",
                position: "Developer",
                telno: "+123456789",
                show: false,
            },
            {
                source: "assets/images/profilepic.jpeg",
                status: "(Open Requestion)",
                position: "Developer",
                telno: "+123456789",
                show: true,
            }
        ];
    }
    ngOnInit() {
    }
};
RecruitmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recruitment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recruitment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/recruitment/recruitment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recruitment.component.scss */ "./src/app/web-modules/manager/recruitment/recruitment.component.scss")).default]
    })
], RecruitmentComponent);



/***/ }),

/***/ "./src/app/web-modules/manager/seperating/seperating.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/web-modules/manager/seperating/seperating.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1tb2R1bGVzL21hbmFnZXIvc2VwZXJhdGluZy9zZXBlcmF0aW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/web-modules/manager/seperating/seperating.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/web-modules/manager/seperating/seperating.component.ts ***!
  \************************************************************************/
/*! exports provided: SeperatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeperatingComponent", function() { return SeperatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SeperatingComponent = class SeperatingComponent {
    constructor() { }
    ngOnInit() {
    }
};
SeperatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seperating',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./seperating.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/seperating/seperating.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./seperating.component.scss */ "./src/app/web-modules/manager/seperating/seperating.component.scss")).default]
    })
], SeperatingComponent);



/***/ }),

/***/ "./src/app/web-modules/manager/workforce-management/workforce-management.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/web-modules/manager/workforce-management/workforce-management.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".worlforce-header {\n  background: url('header-banner.svg');\n}\n.worlforce-header .col {\n  height: 94px;\n  margin-left: 30px;\n}\n.worlforce-header h2 {\n  font-size: 35px;\n  margin-bottom: 0px;\n}\n.custom-nav {\n  background-color: #ededed;\n}\n.custom-nav ul {\n  width: 60%;\n  flex-wrap: wrap;\n}\n.custom-nav ul li {\n  width: 20%;\n  text-align: center;\n  padding: 15px;\n  font-size: 18px;\n}\n.custom-nav ul li:hover {\n  background: #ffffff;\n  font-weight: bold;\n}\n.custom-nav ul li.active {\n  background: #ffffff;\n  border-bottom: 6px solid #265aad;\n  font-weight: bold;\n}\n.common-padding {\n  padding: 10px 121px 10px 121px;\n}\n@media (max-width: 1000px) {\n  .custom-nav ul {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .worlforce-header {\n    margin-left: 0px;\n  }\n  .worlforce-header h2 {\n    font-size: 22px;\n  }\n\n  .common-padding {\n    padding: 0px;\n  }\n\n  .custom-nav ul li {\n    font-size: 14px;\n  }\n}\n@media (max-width: 576px) {\n  .custom-nav ul li {\n    width: 33%;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHZlbnR1cmV6L0Rlc2t0b3AvYW5ndWxhcnRlc3QvZ2l0L2FkbWluL3NyYy9hcHAvd2ViLW1vZHVsZXMvbWFuYWdlci93b3JrZm9yY2UtbWFuYWdlbWVudC93b3JrZm9yY2UtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2ViLW1vZHVsZXMvbWFuYWdlci93b3JrZm9yY2UtbWFuYWdlbWVudC93b3JrZm9yY2UtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREdBO0VBQ0UseUJBQUE7QUNBRjtBRENFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNDSjtBREFJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNFTjtBREVJO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0FOO0FERUk7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUNBTjtBREtBO0VBQ0UsOEJBQUE7QUNGRjtBREtBO0VBRUk7SUFDRSxXQUFBO0VDSEo7QUFDRjtBRFFBO0VBQ0U7SUFDRSxnQkFBQTtFQ05GO0VET0U7SUFDRSxlQUFBO0VDTEo7O0VEU0E7SUFDRSxZQUFBO0VDTkY7O0VEVUk7SUFDRSxlQUFBO0VDUE47QUFDRjtBRFlBO0VBR007SUFDRSxVQUFBO0lBQ0EsZUFBQTtFQ1pOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWItbW9kdWxlcy9tYW5hZ2VyL3dvcmtmb3JjZS1tYW5hZ2VtZW50L3dvcmtmb3JjZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmxmb3JjZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3dvcmtmb3JjZS9oZWFkZXItYmFubmVyLnN2Z1wiKTtcbiAgLmNvbCB7XG4gICAgaGVpZ2h0OiA5NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG5cbi8vY3VzdG9tIG5hdiBzY3NzXG4uY3VzdG9tLW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG4gIHVsIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBsaSB7XG4gICAgICB3aWR0aDogMjAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbiAgdWwge1xuICAgIGxpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgbGkuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgIzI2NWFhZDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuXG4uY29tbW9uLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDEyMXB4IDEwcHggMTIxcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmN1c3RvbS1uYXYge1xuICAgIHVsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud29ybGZvcmNlLWhlYWRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBcbiAgICB9XG4gIH1cbiAgLmNvbW1vbi1wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAuY3VzdG9tLW5hdiB7XG4gICAgdWx7XG4gICAgICBsaXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmN1c3RvbS1uYXYge1xuICAgIHVsIHtcbiAgICAgIGxpIHtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLndvcmxmb3JjZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3dvcmtmb3JjZS9oZWFkZXItYmFubmVyLnN2Z1wiKTtcbn1cbi53b3JsZm9yY2UtaGVhZGVyIC5jb2wge1xuICBoZWlnaHQ6IDk0cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuLndvcmxmb3JjZS1oZWFkZXIgaDIge1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmN1c3RvbS1uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xufVxuLmN1c3RvbS1uYXYgdWwge1xuICB3aWR0aDogNjAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY3VzdG9tLW5hdiB1bCBsaSB7XG4gIHdpZHRoOiAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmN1c3RvbS1uYXYgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jdXN0b20tbmF2IHVsIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjMjY1YWFkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbW1vbi1wYWRkaW5nIHtcbiAgcGFkZGluZzogMTBweCAxMjFweCAxMHB4IDEyMXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jdXN0b20tbmF2IHVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53b3JsZm9yY2UtaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC53b3JsZm9yY2UtaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuY29tbW9uLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIC5jdXN0b20tbmF2IHVsIGxpIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY3VzdG9tLW5hdiB1bCBsaSB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/web-modules/manager/workforce-management/workforce-management.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/web-modules/manager/workforce-management/workforce-management.component.ts ***!
  \********************************************************************************************/
/*! exports provided: WorkforceManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkforceManagementComponent", function() { return WorkforceManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constant_routeconstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constant/routeconstant */ "./src/app/constant/routeconstant.ts");



let WorkforceManagementComponent = class WorkforceManagementComponent {
    constructor() {
        this.routes = _constant_routeconstant__WEBPACK_IMPORTED_MODULE_2__["RouteConstant"];
    }
    ngOnInit() {
    }
};
WorkforceManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workforce-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workforce-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/web-modules/manager/workforce-management/workforce-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workforce-management.component.scss */ "./src/app/web-modules/manager/workforce-management/workforce-management.component.scss")).default]
    })
], WorkforceManagementComponent);



/***/ })

}]);
//# sourceMappingURL=manager-manager-module-es2015.js.map