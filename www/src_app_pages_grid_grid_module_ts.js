(self["webpackChunkcomponentes"] = self["webpackChunkcomponentes"] || []).push([["src_app_pages_grid_grid_module_ts"],{

/***/ 9886:
/*!***************************************************!*\
  !*** ./src/app/pages/grid/grid-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridPageRoutingModule": () => (/* binding */ GridPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _grid_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.page */ 4647);




const routes = [
    {
        path: '',
        component: _grid_page__WEBPACK_IMPORTED_MODULE_0__.GridPage
    }
];
let GridPageRoutingModule = class GridPageRoutingModule {
};
GridPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GridPageRoutingModule);



/***/ }),

/***/ 8816:
/*!*******************************************!*\
  !*** ./src/app/pages/grid/grid.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridPageModule": () => (/* binding */ GridPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _grid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-routing.module */ 9886);
/* harmony import */ var _grid_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.page */ 4647);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let GridPageModule = class GridPageModule {
};
GridPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _grid_routing_module__WEBPACK_IMPORTED_MODULE_0__.GridPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_grid_page__WEBPACK_IMPORTED_MODULE_1__.GridPage]
    })
], GridPageModule);



/***/ }),

/***/ 4647:
/*!*****************************************!*\
  !*** ./src/app/pages/grid/grid.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridPage": () => (/* binding */ GridPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_grid_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./grid.page.html */ 8140);
/* harmony import */ var _grid_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.page.scss */ 5762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let GridPage = class GridPage {
    constructor() { }
    ngOnInit() {
    }
};
GridPage.ctorParameters = () => [];
GridPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-grid',
        template: _raw_loader_grid_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_grid_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GridPage);



/***/ }),

/***/ 5762:
/*!*******************************************!*\
  !*** ./src/app/pages/grid/grid.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8140:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grid/grid.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header titulo='grid'></app-header>\n<ion-content>\n\n  <ion-grid fixed>\n    <ion-row> \n      <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\"\n      *ngFor=\"let item of [1,1,1,1,1,1,1,1,1,1,1,1]\">\n        <ion-card>\n          <ion-img src=\"/assets/stan-lee.jpg\"></ion-img>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_grid_grid_module_ts.js.map