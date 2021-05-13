(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Inicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-list-header>\n      Top 15\n    </ion-list-header>\n\n    <ion-item (click)=\"presentActionSheet(top)\" *ngFor=\"let top of artTop\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img\n          src=\"https://rockcontent.com/es/wp-content/uploads/2019/02/o-que-e-produto-no-mix-de-marketing-1280x720.png\">\n        </ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{top.aRTALIAS}}</h2>\n        <p>{{top.dESCART}}</p>\n      </ion-label>\n      <div slot=\"end\">\n        <h2>{{top.pRCCOMPRA}}€</h2>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Tus favoritos ❤️\n    </ion-list-header>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img\n          src=\"https://rockcontent.com/es/wp-content/uploads/2019/02/o-que-e-produto-no-mix-de-marketing-1280x720.png\">\n        </ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>Finn</h2>\n        <h3>I'm a big deal</h3>\n        <p>Listen, I've had a pretty messed up day...</p>\n      </ion-label>\n      <div slot=\"end\">\n        <h2>25€</h2>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img\n          src=\"https://rockcontent.com/es/wp-content/uploads/2019/02/o-que-e-produto-no-mix-de-marketing-1280x720.png\">\n        </ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>Finn</h2>\n        <h3>I'm a big deal</h3>\n        <p>Listen, I've had a pretty messed up day...</p>\n      </ion-label>\n      <div slot=\"end\">\n        <h2>25€</h2>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Promociones\n    </ion-list-header>\n\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img\n          src=\"https://rockcontent.com/es/wp-content/uploads/2019/02/o-que-e-produto-no-mix-de-marketing-1280x720.png\">\n        </ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>Finn</h2>\n        <h3>I'm a big deal</h3>\n        <p>Listen, I've had a pretty messed up day...</p>\n      </ion-label>\n      <div slot=\"end\">\n        <h2>25€</h2>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img\n          src=\"https://rockcontent.com/es/wp-content/uploads/2019/02/o-que-e-produto-no-mix-de-marketing-1280x720.png\">\n        </ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>Finn</h2>\n        <h3>I'm a big deal</h3>\n        <p>Listen, I've had a pretty messed up day...</p>\n      </ion-label>\n      <div slot=\"end\">\n        <h2>25€</h2>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img\n          src=\"https://rockcontent.com/es/wp-content/uploads/2019/02/o-que-e-produto-no-mix-de-marketing-1280x720.png\">\n        </ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>Finn</h2>\n        <h3>I'm a big deal</h3>\n        <p>Listen, I've had a pretty messed up day...</p>\n      </ion-label>\n      <div slot=\"end\">\n        <h2>25€</h2>\n      </div>\n    </ion-item>\n  </ion-list>\n   <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" [routerLink]=\"['/cart']\" [state]=\"{ products: products}\">\n    <ion-badge color=\"danger\" style=\"left: -3px; z-index: 3; position: absolute; top:-2px; border-radius:100%; padding-left: 0.5rem;padding-right: 0.5rem;\">{{products.length}}\n    </ion-badge>\n    <ion-fab-button>\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>  -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/cart']\" [state]=\"{ products: products}\" #cart>\n      <div class=\"cart-length\">{{ products.length }}</div>\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/folder-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FolderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function() { return FolderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/folder.module.ts":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/*! exports provided: FolderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageModule", function() { return FolderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folder-routing.module */ "./src/app/folder/folder-routing.module.ts");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");







let FolderPageModule = class FolderPageModule {
};
FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"]
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })
], FolderPageModule);



/***/ }),

/***/ "./src/app/folder/folder.page.scss":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 23px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvZm9sZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5jYXJ0LWljb24ge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5jYXJ0LWxlbmd0aCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyM3B4O1xuICBsZWZ0OiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICB6LWluZGV4OiAxMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/folder.page.ts":
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");









const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
let FolderPage = class FolderPage {
    constructor(actionSheetController, apiService, loadingController, alertController, authService, router) {
        this.actionSheetController = actionSheetController;
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.authService = authService;
        this.router = router;
        this.products = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Storage.get({ key: 'PRODUCTS' });
            if (token.value) {
                this.products = JSON.parse(token.value);
            }
            console.log(this.products);
            this.load();
        });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Storage.get({ key: 'PRODUCTS' });
            if (token.value) {
                this.products = JSON.parse(token.value);
            }
            console.log(this.products);
        });
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...',
                translucent: true,
            });
            yield loading.present();
            (yield this.apiService.getProductsTop()).subscribe((response) => {
                console.log(response);
                this.artTop = response;
                this.artTop.forEach(item => item["quantity"] = 0);
                console.log(this.artTop);
                this.loadImages();
            }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(error);
                if (error.status === 401) {
                    this.logout();
                    this.loadingController.dismiss();
                }
                else {
                    const alert = yield this.alertController.create({
                        header: 'Error',
                        subHeader: 'Parece que hay problemas ',
                        buttons: ['OK']
                    });
                    yield alert.present();
                }
            }));
        });
    }
    loadImages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (yield this.apiService.getProductsImages()).subscribe((response) => {
                console.log(response);
                this.loadingController.dismiss();
            }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(error);
                if (error.status === 401) {
                    this.logout();
                }
                else {
                    const alert = yield this.alertController.create({
                        header: 'Error',
                        subHeader: 'Parece que hay problemas ',
                        buttons: ['OK']
                    });
                    yield alert.present();
                }
            }));
        });
    }
    presentActionSheet(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let flag = false;
            let index = 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].iD == product.iD) {
                    index = i;
                    flag = true;
                    break;
                }
            }
            if (flag) {
                const actionSheet = yield this.actionSheetController.create({
                    header: product.aRTALIAS,
                    buttons: [{
                            text: 'Añadir',
                            icon: 'share',
                            handler: () => {
                                this.products[index].quantity += 1;
                                Storage.set({ key: 'PRODUCTS', value: JSON.stringify(this.products) });
                            }
                        }, {
                            text: 'Eliminar de la lista',
                            role: 'destructive',
                            icon: 'trash',
                            handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                for (var i = 0; i < this.products.length; i++) {
                                    if (this.products[i].iD == product.iD) {
                                        this.products.splice(i, 1);
                                        yield Storage.remove({ key: 'PRODUCTS' });
                                        Storage.set({ key: 'PRODUCTS', value: JSON.stringify(this.products) });
                                        break;
                                    }
                                }
                            })
                        }, {
                            text: 'Cancelar',
                            icon: 'close',
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            }
                        }]
                });
                yield actionSheet.present();
            }
            else {
                const actionSheet = yield this.actionSheetController.create({
                    header: product.aRTALIAS,
                    buttons: [{
                            text: 'Añadir',
                            icon: 'share',
                            handler: () => {
                                product.quantity += 1;
                                this.products.push(product);
                                Storage.set({ key: 'PRODUCTS', value: JSON.stringify(this.products) });
                            }
                        }, {
                            text: 'Cancelar',
                            icon: 'close',
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            }
                        }]
                });
                yield actionSheet.present();
            }
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigateByUrl('/', { replaceUrl: true });
        });
    }
};
FolderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./folder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html")).default,
        providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./folder.page.scss */ "./src/app/folder/folder.page.scss")).default]
    })
], FolderPage);



/***/ })

}]);
//# sourceMappingURL=folder-folder-module-es2015.js.map