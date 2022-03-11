(self["webpackChunkcomponentes"] = self["webpackChunkcomponentes"] || []).push([["src_app_pages_action-sheet_action-sheet_module_ts"],{

/***/ 5098:
/*!*******************************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionSheetPageRoutingModule": () => (/* binding */ ActionSheetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _action_sheet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-sheet.page */ 4379);




const routes = [
    {
        path: '',
        component: _action_sheet_page__WEBPACK_IMPORTED_MODULE_0__.ActionSheetPage
    }
];
let ActionSheetPageRoutingModule = class ActionSheetPageRoutingModule {
};
ActionSheetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActionSheetPageRoutingModule);



/***/ }),

/***/ 4922:
/*!***********************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionSheetPageModule": () => (/* binding */ ActionSheetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _action_sheet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-sheet-routing.module */ 5098);
/* harmony import */ var _action_sheet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-sheet.page */ 4379);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let ActionSheetPageModule = class ActionSheetPageModule {
};
ActionSheetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _action_sheet_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActionSheetPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_action_sheet_page__WEBPACK_IMPORTED_MODULE_1__.ActionSheetPage]
    })
], ActionSheetPageModule);



/***/ }),

/***/ 4379:
/*!*********************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionSheetPage": () => (/* binding */ ActionSheetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_action_sheet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./action-sheet.page.html */ 9527);
/* harmony import */ var _action_sheet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-sheet.page.scss */ 7633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);





let ActionSheetPage = class ActionSheetPage {
    constructor(actionSheetController) {
        this.actionSheetController = actionSheetController;
    }
    ngOnInit() {
    }
    onClick() {
        this.presentActionSheet();
    }
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Albunes',
                backdropDismiss: false,
                buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash-outline',
                        cssClass: 'rojo',
                        handler: () => {
                            console.log('Delete clicked');
                        }
                    }, {
                        text: 'Share',
                        icon: 'share-outline',
                        handler: () => {
                            console.log('Share clicked');
                        }
                    }, {
                        text: 'Play (open modal)',
                        icon: 'caret-forward-circle-outline',
                        handler: () => {
                            console.log('Play clicked');
                        }
                    }, {
                        text: 'Favorite',
                        icon: 'heart-outline',
                        handler: () => {
                            console.log('Favorite clicked');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close-outline',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
ActionSheetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController }
];
ActionSheetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-action-sheet',
        template: _raw_loader_action_sheet_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_action_sheet_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActionSheetPage);



/***/ }),

/***/ 7633:
/*!***********************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tc2hlZXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 9527:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/action-sheet/action-sheet.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<app-header titulo=\"action sheet\"></app-header>\n<ion-content class=\"ion-padding\">\n    <ion-button (click)=\"onClick()\" expand=\"block\">\n        Mostrar action sheet\n    </ion-button>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_action-sheet_action-sheet_module_ts.js.map