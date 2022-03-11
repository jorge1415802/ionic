(self["webpackChunkcomponentes"] = self["webpackChunkcomponentes"] || []).push([["src_app_pages_input_input_module_ts"],{

/***/ 4430:
/*!*****************************************************!*\
  !*** ./src/app/pages/input/input-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputPageRoutingModule": () => (/* binding */ InputPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _input_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.page */ 2438);




const routes = [
    {
        path: '',
        component: _input_page__WEBPACK_IMPORTED_MODULE_0__.InputPage
    }
];
let InputPageRoutingModule = class InputPageRoutingModule {
};
InputPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InputPageRoutingModule);



/***/ }),

/***/ 7999:
/*!*********************************************!*\
  !*** ./src/app/pages/input/input.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputPageModule": () => (/* binding */ InputPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _input_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-routing.module */ 4430);
/* harmony import */ var _input_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.page */ 2438);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let InputPageModule = class InputPageModule {
};
InputPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _input_routing_module__WEBPACK_IMPORTED_MODULE_0__.InputPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_input_page__WEBPACK_IMPORTED_MODULE_1__.InputPage]
    })
], InputPageModule);



/***/ }),

/***/ 2438:
/*!*******************************************!*\
  !*** ./src/app/pages/input/input.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputPage": () => (/* binding */ InputPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_input_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./input.page.html */ 6412);
/* harmony import */ var _input_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.page.scss */ 9159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let InputPage = class InputPage {
    constructor() {
        this.nombre = '';
        this.usuario = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
    }
};
InputPage.ctorParameters = () => [];
InputPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-input',
        template: _raw_loader_input_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_input_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InputPage);



/***/ }),

/***/ 9159:
/*!*********************************************!*\
  !*** ./src/app/pages/input/input.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6412:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/input/input.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header titulo=\"input\"></app-header>\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Input normal</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-input type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"nombre\" ></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <form #formulario= \"ngForm\">\n    <ion-list-header>\n      <ion-label>Formulario valido : {{formulario.valid}}</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Email : </ion-label>\n      <ion-input type=\"email\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"usuario.email\" ></ion-input>\n    </ion-item>\n  </form>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_input_input_module_ts.js.map