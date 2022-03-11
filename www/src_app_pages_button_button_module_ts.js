(self["webpackChunkcomponentes"] = self["webpackChunkcomponentes"] || []).push([["src_app_pages_button_button_module_ts"],{

/***/ 2846:
/*!*******************************************************!*\
  !*** ./src/app/pages/button/button-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonPageRoutingModule": () => (/* binding */ ButtonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _button_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.page */ 861);




const routes = [
    {
        path: '',
        component: _button_page__WEBPACK_IMPORTED_MODULE_0__.ButtonPage
    }
];
let ButtonPageRoutingModule = class ButtonPageRoutingModule {
};
ButtonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ButtonPageRoutingModule);



/***/ }),

/***/ 939:
/*!***********************************************!*\
  !*** ./src/app/pages/button/button.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonPageModule": () => (/* binding */ ButtonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _button_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-routing.module */ 2846);
/* harmony import */ var _button_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.page */ 861);







let ButtonPageModule = class ButtonPageModule {
};
ButtonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _button_routing_module__WEBPACK_IMPORTED_MODULE_0__.ButtonPageRoutingModule
        ],
        declarations: [_button_page__WEBPACK_IMPORTED_MODULE_1__.ButtonPage]
    })
], ButtonPageModule);



/***/ }),

/***/ 861:
/*!*********************************************!*\
  !*** ./src/app/pages/button/button.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonPage": () => (/* binding */ ButtonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_button_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./button.page.html */ 9495);
/* harmony import */ var _button_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.page.scss */ 6100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ButtonPage = class ButtonPage {
    constructor() {
        this.favorito = false;
    }
    ngOnInit() {
    }
    onClick() {
        this.favorito = !this.favorito;
    }
};
ButtonPage.ctorParameters = () => [];
ButtonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-button',
        template: _raw_loader_button_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_button_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ButtonPage);



/***/ }),

/***/ 6100:
/*!***********************************************!*\
  !*** ./src/app/pages/button/button.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 9495:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/button/button.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" color=\"primary\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"primary\">button</ion-title>\n\n    <!-- end toolbar -->\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\" color=\"danger\">\n        <ion-icon slot=\"icon-only\" [name]=\"favorito ? 'heart' : 'heart-outline'\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <!-- Default -->\n<ion-button>Default</ion-button>\n\n<!-- Anchor -->\n<ion-button href=\"#\">Anchor</ion-button>\n\n<!-- Colors -->\n<ion-button color=\"primary\">Primary</ion-button>\n<ion-button color=\"secondary\">Secondary</ion-button>\n<ion-button color=\"tertiary\">Tertiary</ion-button>\n<ion-button color=\"success\">Success</ion-button>\n<ion-button color=\"warning\">Warning</ion-button>\n<ion-button color=\"danger\">Danger</ion-button>\n<ion-button color=\"light\">Light</ion-button>\n<ion-button color=\"medium\">Medium</ion-button>\n<ion-button color=\"dark\">Dark</ion-button>\n\n<!-- Expand -->\n<ion-button expand=\"full\">Full Button</ion-button>\n<ion-button expand=\"block\">Block Button</ion-button>\n\n<!-- Round -->\n<ion-button shape=\"round\">Round Button</ion-button>\n\n<!-- Fill -->\n<ion-button expand=\"full\" fill=\"outline\">Outline + Full</ion-button>\n<ion-button expand=\"block\" fill=\"outline\">Outline + Block</ion-button>\n<ion-button shape=\"round\" fill=\"outline\">Outline + Round</ion-button>\n\n<!-- Icons -->\n<ion-button>\n  <ion-icon slot=\"start\" name=\"star\"></ion-icon>\n  Left Icon\n</ion-button>\n\n<ion-button>\n  Right Icon\n  <ion-icon slot=\"end\" name=\"star\"></ion-icon>\n</ion-button>\n\n<ion-button>\n  <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n</ion-button>\n\n<!-- Sizes -->\n<ion-button size=\"large\">Large</ion-button>\n<ion-button>Default</ion-button>\n<ion-button size=\"small\">Small</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_button_button_module_ts.js.map