(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Carrito</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"products\">\n    <ion-list-header>\n      Pedido\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let p of products.products\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"remove(p)\"><ion-icon style=\"zoom:1.5;\" name=\"trash-outline\"></ion-icon></ion-item-option>\n      </ion-item-options>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img\n          src=\"https://rockcontent.com/es/wp-content/uploads/2019/02/o-que-e-produto-no-mix-de-marketing-1280x720.png\">\n        </ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{p.aRTALIAS}}</h2>\n        <h3>{{p.dESCART}}</h3>\n        <p>x{{p.quantity}}</p>\n      </ion-label>\n      <div slot=\"end\">\n        <h2>{{p.pRCCOMPRA}}€</h2>\n      </div>\n    </ion-item>\n    </ion-item-sliding>\n    <ion-item>\n      <h3>Total:</h3>\n      <div slot=\"end\">\n        <h2>{{getTotal() | number : '1.2-2'}}€</h2>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-radio-group value=\"credito\">\n    <ion-list-header>\n      <ion-label>Forma de pago</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Crédito</ion-label>\n      <ion-radio slot=\"start\" value=\"credito\"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Efectivo</ion-label>\n      <ion-radio slot=\"start\" value=\"efectivo\"></ion-radio>\n    </ion-item>\n\n  </ion-radio-group>\n\n  <ion-list>\n    <ion-list-header>Envio</ion-list-header>\n    <ion-item>\n      <ion-label>Pedido urgente</ion-label>\n      <ion-checkbox color=\"primary\" checked slot=\"start\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <div class=\"credit-card\">\n    <div>\n      <div #cardInfo></div>\n      <div class=\"error\" *ngIf=\"cardError\">\n        {{cardError}}\n      </div>\n    </div>\n  </div>\n  <!-- <ion-button [disabled]=\"products.products.length == 0\" (click)=\"sendOrder()\" shape=\"round\" expand=\"block\">Pedir</ion-button> -->\n  <ion-button  (click)=\"sendOrder()\" shape=\"round\" expand=\"block\">Pedir</ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/cart/cart-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cart/cart-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartPageRoutingModule);



/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/cart/cart-routing.module.ts");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







let CartPageModule = class CartPageModule {
};
CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".credit-card {\n  width: 400px;\n  height: 50px;\n  border: 1px solid black;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDSCIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlZGl0LWNhcmR7XG4gICB3aWR0aDogNDAwcHg7XG4gICBoZWlnaHQ6IDUwcHg7XG4gICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgIHBhZGRpbmc6IDIwcHg7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stripe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../stripe.service */ "./src/app/stripe.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let CartPage = class CartPage {
    constructor(apiService, loadingController, alertController, authService, router, ngZone, stripeService) {
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
        this.stripeService = stripeService;
    }
    ngAfterViewInit() {
        this.card = elements.create('card');
        this.card.mount(this.cardInfo.nativeElement);
        this.card.addEventListener('change', this.onChange.bind(this));
    }
    ngOnDestroy() {
        elements._elements = [];
    }
    onChange({ error }) {
        if (error) {
            this.ngZone.run(() => this.cardError = error.message);
        }
        else {
            this.ngZone.run(() => this.cardError = null);
        }
    }
    ngOnInit() {
        this.products = history.state;
    }
    getTotal() {
        var total = 0;
        for (let i = 0; i < this.products.products.length; i++) {
            total += parseFloat(this.products.products[i].pRCCOMPRA.replace(/,/, '.')) * this.products.products[i].quantity;
        }
        return total;
    }
    remove(p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (var i = 0; i < this.products.products.length; i++) {
                if (this.products.products[i].iD == p.iD) {
                    this.products.products.splice(i, 1);
                    yield Storage.remove({ key: 'PRODUCTS' });
                    Storage.set({ key: 'PRODUCTS', value: JSON.stringify(this.products.products) });
                    break;
                }
            }
        });
    }
    sendOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...',
                translucent: true,
            });
            yield loading.present();
            const { token, error } = yield stripe.createToken(this.card);
            if (token) {
                yield this.stripeService.charge(this.getTotal(), token.id).then(function (value) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        let lines = [];
                        for (let i = 0; i < this.products.products.length; i++) {
                            lines.push({
                                "CODART": this.products.products[i].cODART,
                                "UNIDADES": this.products.products[i].quantity
                            });
                            console.log(lines);
                        }
                        let order = [{
                                "FECHA": "03/05/2021",
                                "CODCLI": "1",
                                "CODALM": "1",
                                "ESTADO": "AC",
                                "FECENTREGA": "08/05/2021",
                                "SITUACION": "A",
                                "lineas": lines
                            }];
                        (yield this.apiService.sendOrder(order)).subscribe((response) => {
                            console.log(response);
                            this.loadingController.dismiss();
                        }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            console.log(error);
                            if (error.status === 401) {
                                this.logout();
                                this.loadingController.dismiss();
                            }
                            else {
                                const alert = yield this.alertController.create({
                                    header: 'Error',
                                    subHeader: 'Parece que hay problemas',
                                    buttons: ['OK']
                                });
                                yield alert.present();
                            }
                        }));
                    });
                }, function (reason) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const alert = yield this.alertController.create({
                            header: 'Error',
                            subHeader: 'No ha sido posible completar el pago',
                            buttons: ['OK']
                        });
                        yield alert.present();
                    });
                });
            }
            else {
                this.ngZone.run(() => this.cardError = error.message);
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
CartPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _stripe_service__WEBPACK_IMPORTED_MODULE_1__["StripeService"] }
];
CartPage.propDecorators = {
    cardInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['cardInfo',] }]
};
CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html")).default,
        providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")).default]
    })
], CartPage);



/***/ }),

/***/ "./src/app/stripe.service.ts":
/*!***********************************!*\
  !*** ./src/app/stripe.service.ts ***!
  \***********************************/
/*! exports provided: StripeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeService", function() { return StripeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");




const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
const TOKEN_KEY = 'my-token';
const USER = '';
let StripeService = class StripeService {
    constructor(http) {
        this.http = http;
    }
    charge(cantidad, tokenId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.token = yield Storage.get({ key: TOKEN_KEY });
            this.token = JSON.parse(this.token.value);
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=UTF-8"',
                'Authorization': 'Bearer ' + this.token.Token
            });
            return this.http.post('https://clouddemosjnc.dyndns.org:5002/PagoStripe', {
                stripeToken: tokenId,
                cantidad: cantidad * 100,
            }, { headers: headers }).toPromise();
        });
    }
};
StripeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StripeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StripeService);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map