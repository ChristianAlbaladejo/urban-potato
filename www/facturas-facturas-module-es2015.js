(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facturas-facturas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/facturas.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/facturas.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Facturas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../assets/factura.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Poe</h2>\n        <h3>New Ride</h3>\n        <p>I just upgraded my X-Wing. Next time...</p>\n      </ion-label>\n      <ion-icon name=\"download-outline\" (click)=\"getPdf('1165')\" end></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../assets/factura.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Ben</h2>\n        <h3>Move Along</h3>\n        <p>These aren't the droids you're looking for...</p>\n      </ion-label>\n      <ion-icon name=\"download-outline\" end></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/facturas/facturas-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/facturas/facturas-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FacturasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturasPageRoutingModule", function() { return FacturasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _facturas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facturas.page */ "./src/app/facturas/facturas.page.ts");




const routes = [
    {
        path: '',
        component: _facturas_page__WEBPACK_IMPORTED_MODULE_3__["FacturasPage"]
    }
];
let FacturasPageRoutingModule = class FacturasPageRoutingModule {
};
FacturasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FacturasPageRoutingModule);



/***/ }),

/***/ "./src/app/facturas/facturas.module.ts":
/*!*********************************************!*\
  !*** ./src/app/facturas/facturas.module.ts ***!
  \*********************************************/
/*! exports provided: FacturasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturasPageModule", function() { return FacturasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _facturas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facturas-routing.module */ "./src/app/facturas/facturas-routing.module.ts");
/* harmony import */ var _facturas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facturas.page */ "./src/app/facturas/facturas.page.ts");







let FacturasPageModule = class FacturasPageModule {
};
FacturasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _facturas_routing_module__WEBPACK_IMPORTED_MODULE_5__["FacturasPageRoutingModule"]
        ],
        declarations: [_facturas_page__WEBPACK_IMPORTED_MODULE_6__["FacturasPage"]]
    })
], FacturasPageModule);



/***/ }),

/***/ "./src/app/facturas/facturas.page.scss":
/*!*********************************************!*\
  !*** ./src/app/facturas/facturas.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar {\n  width: 3em;\n  height: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFjdHVyYXMvZmFjdHVyYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ZhY3R1cmFzL2ZhY3R1cmFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIgeyBcclxuICAgIHdpZHRoOiAzZW07ICBcclxuICAgIGhlaWdodDogM2VtOyAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/facturas/facturas.page.ts":
/*!*******************************************!*\
  !*** ./src/app/facturas/facturas.page.ts ***!
  \*******************************************/
/*! exports provided: FacturasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturasPage", function() { return FacturasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let FacturasPage = class FacturasPage {
    constructor(apiService, loadingController, alertController, authService, router) {
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    getPdf(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(id);
            const loading = yield this.loadingController.create({
                message: 'Cargando...',
                translucent: true,
            });
            yield loading.present();
            (yield this.apiService.getPdf(id)).subscribe((response) => {
                console.log(response);
                this.loadingController.dismiss();
                window.open(response.url);
            }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(error);
                if (error.status === 401) {
                    this.logout();
                }
                this.loadingController.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Error',
                    subHeader: 'Parece que hay problemas',
                    buttons: ['OK']
                });
                yield alert.present();
            }));
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigateByUrl('/', { replaceUrl: true });
        });
    }
};
FacturasPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
FacturasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facturas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facturas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/facturas.page.html")).default,
        providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facturas.page.scss */ "./src/app/facturas/facturas.page.scss")).default]
    })
], FacturasPage);



/***/ })

}]);
//# sourceMappingURL=facturas-facturas-module-es2015.js.map