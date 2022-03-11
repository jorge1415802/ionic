(self["webpackChunkcomponentes"] = self["webpackChunkcomponentes"] || []).push([["src_app_pages_card_card_module_ts"],{

/***/ 6775:
/*!***************************************************!*\
  !*** ./src/app/pages/card/card-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardPageRoutingModule": () => (/* binding */ CardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.page */ 9232);




const routes = [
    {
        path: '',
        component: _card_page__WEBPACK_IMPORTED_MODULE_0__.CardPage
    }
];
let CardPageRoutingModule = class CardPageRoutingModule {
};
CardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CardPageRoutingModule);



/***/ }),

/***/ 8501:
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardPageModule": () => (/* binding */ CardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _card_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-routing.module */ 6775);
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.page */ 9232);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let CardPageModule = class CardPageModule {
};
CardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _card_routing_module__WEBPACK_IMPORTED_MODULE_0__.CardPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_card_page__WEBPACK_IMPORTED_MODULE_1__.CardPage]
    })
], CardPageModule);



/***/ }),

/***/ 9232:
/*!*****************************************!*\
  !*** ./src/app/pages/card/card.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardPage": () => (/* binding */ CardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_card_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./card.page.html */ 1742);
/* harmony import */ var _card_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.page.scss */ 7972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CardPage = class CardPage {
    constructor() { }
    ngOnInit() {
    }
};
CardPage.ctorParameters = () => [];
CardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-card',
        template: _raw_loader_card_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_card_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CardPage);



/***/ }),

/***/ 7972:
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1742:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card/card.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header titulo=\"cards\"></app-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n      <ion-card-title>Card Title</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Keep close to Nature's heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item color=\"primary\">\n      <ion-icon slot=\"start\" name=\"pin-outline\"></ion-icon>\n      <ion-label>Marcador</ion-label>\n    </ion-item>\n\n    <ion-card-content>\n      alsdjalsñdkjañsdklajsñdlkajsdñajlkdsñalksdjñaklsdjañlksdjañlksdjñaklsdjañlskdjñalskdjañlskdjañlksjd\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <img src=\"https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/0/1/6/5/0165472db69857b2e0beedf5079300d5.jpg\">\n    <ion-card-content>\n      lakjsdhalskjdhalskjdhlasjdhlakjsdcnlkzc vlxjkvcolskaujdhflakjsdfhlakjdfh l k lajkdfhl akjhal kjlakjdsfh lalakjhsdlakj alkj laskjdfh lakjsd hlakjsdhf aolkjashd f\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_card_card_module_ts.js.map