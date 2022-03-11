(self["webpackChunkcomponentes"] = self["webpackChunkcomponentes"] || []).push([["src_app_pages_infinite_infinite_module_ts"],{

/***/ 6804:
/*!***********************************************************!*\
  !*** ./src/app/pages/infinite/infinite-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfinitePageRoutingModule": () => (/* binding */ InfinitePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _infinite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infinite.page */ 7813);




const routes = [
    {
        path: '',
        component: _infinite_page__WEBPACK_IMPORTED_MODULE_0__.InfinitePage
    }
];
let InfinitePageRoutingModule = class InfinitePageRoutingModule {
};
InfinitePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InfinitePageRoutingModule);



/***/ }),

/***/ 9024:
/*!***************************************************!*\
  !*** ./src/app/pages/infinite/infinite.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfinitePageModule": () => (/* binding */ InfinitePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _infinite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infinite-routing.module */ 6804);
/* harmony import */ var _infinite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infinite.page */ 7813);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let InfinitePageModule = class InfinitePageModule {
};
InfinitePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _infinite_routing_module__WEBPACK_IMPORTED_MODULE_0__.InfinitePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_infinite_page__WEBPACK_IMPORTED_MODULE_1__.InfinitePage]
    })
], InfinitePageModule);



/***/ }),

/***/ 7813:
/*!*************************************************!*\
  !*** ./src/app/pages/infinite/infinite.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfinitePage": () => (/* binding */ InfinitePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_infinite_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./infinite.page.html */ 7570);
/* harmony import */ var _infinite_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infinite.page.scss */ 5029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);





let InfinitePage = class InfinitePage {
    constructor() {
        this.data = Array(20);
    }
    ngOnInit() {
    }
    loadData(event) {
        console.log(event);
        setTimeout(() => {
            console.log('Done');
            if (this.data.length > 60) {
                this.infinitScroll.complete();
                this.infinitScroll.disabled = true;
            }
            const nuevoArr = Array(20);
            this.data.push(...nuevoArr);
            this.infinitScroll.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            // if (data.length == 1000) {
            //   event.target.disabled = true;
            // }
        }, 500);
    }
};
InfinitePage.ctorParameters = () => [];
InfinitePage.propDecorators = {
    infinitScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInfiniteScroll,] }]
};
InfinitePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-infinite',
        template: _raw_loader_infinite_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_infinite_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InfinitePage);



/***/ }),

/***/ 5029:
/*!***************************************************!*\
  !*** ./src/app/pages/infinite/infinite.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZpbml0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 7570:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/infinite/infinite.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header titulo=\"infinite\"></app-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of data; let i=index\">\n      <ion-label>Item {{i + 1}}: {{item}}</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Cargando mas datos\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_infinite_infinite_module_ts.js.map