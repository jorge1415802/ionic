(self["webpackChunkcomponentes"] = self["webpackChunkcomponentes"] || []).push([["src_app_pages_check_check_module_ts"],{

/***/ 2634:
/*!*****************************************************!*\
  !*** ./src/app/pages/check/check-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckPageRoutingModule": () => (/* binding */ CheckPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check.page */ 6882);




const routes = [
    {
        path: '',
        component: _check_page__WEBPACK_IMPORTED_MODULE_0__.CheckPage
    }
];
let CheckPageRoutingModule = class CheckPageRoutingModule {
};
CheckPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckPageRoutingModule);



/***/ }),

/***/ 6260:
/*!*********************************************!*\
  !*** ./src/app/pages/check/check.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckPageModule": () => (/* binding */ CheckPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _check_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-routing.module */ 2634);
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check.page */ 6882);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let CheckPageModule = class CheckPageModule {
};
CheckPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _check_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_check_page__WEBPACK_IMPORTED_MODULE_1__.CheckPage]
    })
], CheckPageModule);



/***/ }),

/***/ 6882:
/*!*******************************************!*\
  !*** ./src/app/pages/check/check.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckPage": () => (/* binding */ CheckPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_check_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./check.page.html */ 746);
/* harmony import */ var _check_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check.page.scss */ 636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CheckPage = class CheckPage {
    constructor() {
        this.data = [
            {
                name: 'primary',
                selected: false
            },
            {
                name: 'secondary',
                selected: true
            },
            {
                name: 'tertiary',
                selected: false
            },
            {
                name: 'success',
                selected: true
            },
        ];
    }
    ngOnInit() {
    }
    onClick(item) {
        console.log(item);
    }
    verData() {
        console.log(this.data);
    }
};
CheckPage.ctorParameters = () => [];
CheckPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-check',
        template: _raw_loader_check_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_check_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckPage);



/***/ }),

/***/ 636:
/*!*********************************************!*\
  !*** ./src/app/pages/check/check.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 746:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check/check.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header titulo=\"check\"></app-header>\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of data\" (click)=\"onClick(item)\">\n      <ion-checkbox slot=\"start\" [color]=\"item.name\" [(ngModel)]=\"item.selected\"></ion-checkbox>\n      <ion-label>{{item.name}}</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-button (click)=\"verData()\" expand=\"block\" >\n    ver data\n  </ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_check_check_module_ts.js.map