(self["webpackChunkcomponentes"] = self["webpackChunkcomponentes"] || []).push([["src_app_pages_avatar_avatar_module_ts"],{

/***/ 9285:
/*!*******************************************************!*\
  !*** ./src/app/pages/avatar/avatar-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarPageRoutingModule": () => (/* binding */ AvatarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _avatar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.page */ 6135);




const routes = [
    {
        path: '',
        component: _avatar_page__WEBPACK_IMPORTED_MODULE_0__.AvatarPage
    }
];
let AvatarPageRoutingModule = class AvatarPageRoutingModule {
};
AvatarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AvatarPageRoutingModule);



/***/ }),

/***/ 3008:
/*!***********************************************!*\
  !*** ./src/app/pages/avatar/avatar.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarPageModule": () => (/* binding */ AvatarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _avatar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar-routing.module */ 9285);
/* harmony import */ var _avatar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.page */ 6135);







let AvatarPageModule = class AvatarPageModule {
};
AvatarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _avatar_routing_module__WEBPACK_IMPORTED_MODULE_0__.AvatarPageRoutingModule
        ],
        declarations: [_avatar_page__WEBPACK_IMPORTED_MODULE_1__.AvatarPage]
    })
], AvatarPageModule);



/***/ }),

/***/ 6135:
/*!*********************************************!*\
  !*** ./src/app/pages/avatar/avatar.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarPage": () => (/* binding */ AvatarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_avatar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./avatar.page.html */ 785);
/* harmony import */ var _avatar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.page.scss */ 3562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AvatarPage = class AvatarPage {
    constructor() { }
    ngOnInit() {
    }
};
AvatarPage.ctorParameters = () => [];
AvatarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-avatar',
        template: _raw_loader_avatar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_avatar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AvatarPage);



/***/ }),

/***/ 3562:
/*!***********************************************!*\
  !*** ./src/app/pages/avatar/avatar.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdmF0YXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 785:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" color=\"primary\" ></ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"primary\">avatar</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-avatar>\n        <img src=\"/assets/stan-lee.jpg\" />\n      </ion-avatar>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-chip color=\"primary\" outline=\"true\">\n    <ion-avatar>\n      <img src=\"/assets/stan-lee.jpg\" />\n    </ion-avatar>\n    <ion-label>Default</ion-label>\n  </ion-chip>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"/assets/stan-lee.jpg\" />\n      </ion-avatar>\n      <ion-label>Stan Lee </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_avatar_avatar_module_ts.js.map