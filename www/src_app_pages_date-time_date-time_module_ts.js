(self["webpackChunkcomponentes"] = self["webpackChunkcomponentes"] || []).push([["src_app_pages_date-time_date-time_module_ts"],{

/***/ 7860:
/*!*************************************************************!*\
  !*** ./src/app/pages/date-time/date-time-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimePageRoutingModule": () => (/* binding */ DateTimePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _date_time_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-time.page */ 1855);




const routes = [
    {
        path: '',
        component: _date_time_page__WEBPACK_IMPORTED_MODULE_0__.DateTimePage
    }
];
let DateTimePageRoutingModule = class DateTimePageRoutingModule {
};
DateTimePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DateTimePageRoutingModule);



/***/ }),

/***/ 31:
/*!*****************************************************!*\
  !*** ./src/app/pages/date-time/date-time.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimePageModule": () => (/* binding */ DateTimePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _date_time_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-time-routing.module */ 7860);
/* harmony import */ var _date_time_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time.page */ 1855);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let DateTimePageModule = class DateTimePageModule {
};
DateTimePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _date_time_routing_module__WEBPACK_IMPORTED_MODULE_0__.DateTimePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_date_time_page__WEBPACK_IMPORTED_MODULE_1__.DateTimePage]
    })
], DateTimePageModule);



/***/ }),

/***/ 1855:
/*!***************************************************!*\
  !*** ./src/app/pages/date-time/date-time.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimePage": () => (/* binding */ DateTimePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_date_time_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./date-time.page.html */ 3851);
/* harmony import */ var _date_time_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time.page.scss */ 2586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let DateTimePage = class DateTimePage {
    constructor() {
        this.fechaNacimiento = new Date();
    }
    ngOnInit() {
    }
    cambioFecha(event) {
        console.log(event);
    }
};
DateTimePage.ctorParameters = () => [];
DateTimePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-date-time',
        template: _raw_loader_date_time_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_date_time_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DateTimePage);



/***/ }),

/***/ 2586:
/*!*****************************************************!*\
  !*** ./src/app/pages/date-time/date-time.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlLXRpbWUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 3851:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/date-time/date-time.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header titulo=\"datetime\"></app-header>\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Datos de nacimiento</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Fecha de Nacimiento</ion-label>\n        <ion-datetime [value]=\"fechaNacimiento.toISOString()\" display-format=\"DD MM YYYY\" (ionChange)=\"cambioFecha($event)\"></ion-datetime>\n    </ion-item>\n\n    <ion-list-header>\n      <ion-label>Restricciones</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Min y Max</ion-label>\n        <ion-datetime display-format=\"DD MM YYYY\" min=\"2015-01-01\" max=\"2025-12-31\"></ion-datetime>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_date-time_date-time_module_ts.js.map