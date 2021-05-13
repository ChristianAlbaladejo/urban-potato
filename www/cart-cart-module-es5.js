(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Carrito</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"products\">\n    <ion-list-header>\n      Pedido\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let p of products.products\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"remove(p)\"><ion-icon style=\"zoom:1.5;\" name=\"trash-outline\"></ion-icon></ion-item-option>\n      </ion-item-options>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img\n          src=\"https://rockcontent.com/es/wp-content/uploads/2019/02/o-que-e-produto-no-mix-de-marketing-1280x720.png\">\n        </ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{p.aRTALIAS}}</h2>\n        <h3>{{p.dESCART}}</h3>\n        <p>x{{p.quantity}}</p>\n      </ion-label>\n      <div slot=\"end\">\n        <h2>{{p.pRCCOMPRA}}€</h2>\n      </div>\n    </ion-item>\n    </ion-item-sliding>\n    <ion-item>\n      <h3>Total:</h3>\n      <div slot=\"end\">\n        <h2>{{getTotal() | number : '1.2-2'}}€</h2>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-radio-group value=\"credito\">\n    <ion-list-header>\n      <ion-label>Forma de pago</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Crédito</ion-label>\n      <ion-radio slot=\"start\" value=\"credito\"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Efectivo</ion-label>\n      <ion-radio slot=\"start\" value=\"efectivo\"></ion-radio>\n    </ion-item>\n\n  </ion-radio-group>\n\n  <ion-list>\n    <ion-list-header>Envio</ion-list-header>\n    <ion-item>\n      <ion-label>Pedido urgente</ion-label>\n      <ion-checkbox color=\"primary\" checked slot=\"start\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <div class=\"credit-card\">\n    <div>\n      <div #cardInfo></div>\n      <div class=\"error\" *ngIf=\"cardError\">\n        {{cardError}}\n      </div>\n    </div>\n  </div>\n  <!-- <ion-button [disabled]=\"products.products.length == 0\" (click)=\"sendOrder()\" shape=\"round\" expand=\"block\">Pedir</ion-button> -->\n  <ion-button  (click)=\"sendOrder()\" shape=\"round\" expand=\"block\">Pedir</ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/cart/cart-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/cart/cart-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: CartPageRoutingModule */

    /***/
    function srcAppCartCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function () {
        return CartPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart.page */
      "./src/app/cart/cart.page.ts");

      var routes = [{
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
      }];

      var CartPageRoutingModule = function CartPageRoutingModule() {
        _classCallCheck(this, CartPageRoutingModule);
      };

      CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/cart/cart.module.ts":
    /*!*************************************!*\
      !*** ./src/app/cart/cart.module.ts ***!
      \*************************************/

    /*! exports provided: CartPageModule */

    /***/
    function srcAppCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
        return CartPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart-routing.module */
      "./src/app/cart/cart-routing.module.ts");
      /* harmony import */


      var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cart.page */
      "./src/app/cart/cart.page.ts");

      var CartPageModule = function CartPageModule() {
        _classCallCheck(this, CartPageModule);
      };

      CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
      })], CartPageModule);
      /***/
    },

    /***/
    "./src/app/cart/cart.page.scss":
    /*!*************************************!*\
      !*** ./src/app/cart/cart.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".credit-card {\n  width: 400px;\n  height: 50px;\n  border: 1px solid black;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDSCIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlZGl0LWNhcmR7XG4gICB3aWR0aDogNDAwcHg7XG4gICBoZWlnaHQ6IDUwcHg7XG4gICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgIHBhZGRpbmc6IDIwcHg7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/cart/cart.page.ts":
    /*!***********************************!*\
      !*** ./src/app/cart/cart.page.ts ***!
      \***********************************/

    /*! exports provided: CartPage */

    /***/
    function srcAppCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPage", function () {
        return CartPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _stripe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../stripe.service */
      "./src/app/stripe.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/api.service */
      "./src/app/services/api.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/authentication.service */
      "./src/app/services/authentication.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

      var CartPage = /*#__PURE__*/function () {
        function CartPage(apiService, loadingController, alertController, authService, router, ngZone, stripeService) {
          _classCallCheck(this, CartPage);

          this.apiService = apiService;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.authService = authService;
          this.router = router;
          this.ngZone = ngZone;
          this.stripeService = stripeService;
        }

        _createClass(CartPage, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.card = elements.create('card');
            this.card.mount(this.cardInfo.nativeElement);
            this.card.addEventListener('change', this.onChange.bind(this));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            elements._elements = [];
          }
        }, {
          key: "onChange",
          value: function onChange(_ref) {
            var _this = this;

            var error = _ref.error;

            if (error) {
              this.ngZone.run(function () {
                return _this.cardError = error.message;
              });
            } else {
              this.ngZone.run(function () {
                return _this.cardError = null;
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.products = history.state;
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            var total = 0;

            for (var i = 0; i < this.products.products.length; i++) {
              total += parseFloat(this.products.products[i].pRCCOMPRA.replace(/,/, '.')) * this.products.products[i].quantity;
            }

            return total;
          }
        }, {
          key: "remove",
          value: function remove(p) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var i;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      i = 0;

                    case 1:
                      if (!(i < this.products.products.length)) {
                        _context.next = 11;
                        break;
                      }

                      if (!(this.products.products[i].iD == p.iD)) {
                        _context.next = 8;
                        break;
                      }

                      this.products.products.splice(i, 1);
                      _context.next = 6;
                      return Storage.remove({
                        key: 'PRODUCTS'
                      });

                    case 6:
                      Storage.set({
                        key: 'PRODUCTS',
                        value: JSON.stringify(this.products.products)
                      });
                      return _context.abrupt("break", 11);

                    case 8:
                      i++;
                      _context.next = 1;
                      break;

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "sendOrder",
          value: function sendOrder() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var loading, _yield$stripe$createT, token, error;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingController.create({
                        message: 'Cargando...',
                        translucent: true
                      });

                    case 2:
                      loading = _context5.sent;
                      _context5.next = 5;
                      return loading.present();

                    case 5:
                      _context5.next = 7;
                      return stripe.createToken(this.card);

                    case 7:
                      _yield$stripe$createT = _context5.sent;
                      token = _yield$stripe$createT.token;
                      error = _yield$stripe$createT.error;

                      if (!token) {
                        _context5.next = 15;
                        break;
                      }

                      _context5.next = 13;
                      return this.stripeService.charge(this.getTotal(), token.id).then(function (value) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var _this2 = this;

                          var lines, i, order;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  lines = [];

                                  for (i = 0; i < this.products.products.length; i++) {
                                    lines.push({
                                      "CODART": this.products.products[i].cODART,
                                      "UNIDADES": this.products.products[i].quantity
                                    });
                                    console.log(lines);
                                  }

                                  order = [{
                                    "FECHA": "03/05/2021",
                                    "CODCLI": "1",
                                    "CODALM": "1",
                                    "ESTADO": "AC",
                                    "FECENTREGA": "08/05/2021",
                                    "SITUACION": "A",
                                    "lineas": lines
                                  }];
                                  _context3.next = 5;
                                  return this.apiService.sendOrder(order);

                                case 5:
                                  _context3.sent.subscribe(function (response) {
                                    console.log(response);

                                    _this2.loadingController.dismiss();
                                  }, function (error) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                      var alert;
                                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                        while (1) {
                                          switch (_context2.prev = _context2.next) {
                                            case 0:
                                              console.log(error);

                                              if (!(error.status === 401)) {
                                                _context2.next = 6;
                                                break;
                                              }

                                              this.logout();
                                              this.loadingController.dismiss();
                                              _context2.next = 11;
                                              break;

                                            case 6:
                                              _context2.next = 8;
                                              return this.alertController.create({
                                                header: 'Error',
                                                subHeader: 'Parece que hay problemas',
                                                buttons: ['OK']
                                              });

                                            case 8:
                                              alert = _context2.sent;
                                              _context2.next = 11;
                                              return alert.present();

                                            case 11:
                                            case "end":
                                              return _context2.stop();
                                          }
                                        }
                                      }, _callee2, this);
                                    }));
                                  });

                                case 6:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      }, function (reason) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return this.alertController.create({
                                    header: 'Error',
                                    subHeader: 'No ha sido posible completar el pago',
                                    buttons: ['OK']
                                  });

                                case 2:
                                  alert = _context4.sent;
                                  _context4.next = 5;
                                  return alert.present();

                                case 5:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                    case 13:
                      _context5.next = 16;
                      break;

                    case 15:
                      this.ngZone.run(function () {
                        return _this3.cardError = error.message;
                      });

                    case 16:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.authService.logout();

                    case 2:
                      this.router.navigateByUrl('/', {
                        replaceUrl: true
                      });

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return CartPage;
      }();

      CartPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _stripe_service__WEBPACK_IMPORTED_MODULE_1__["StripeService"]
        }];
      };

      CartPage.propDecorators = {
        cardInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['cardInfo']
        }]
      };
      CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html"))["default"],
        providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart.page.scss */
        "./src/app/cart/cart.page.scss"))["default"]]
      })], CartPage);
      /***/
    },

    /***/
    "./src/app/stripe.service.ts":
    /*!***********************************!*\
      !*** ./src/app/stripe.service.ts ***!
      \***********************************/

    /*! exports provided: StripeService */

    /***/
    function srcAppStripeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StripeService", function () {
        return StripeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;
      var TOKEN_KEY = 'my-token';
      var USER = '';

      var StripeService = /*#__PURE__*/function () {
        function StripeService(http) {
          _classCallCheck(this, StripeService);

          this.http = http;
        }

        _createClass(StripeService, [{
          key: "charge",
          value: function charge(cantidad, tokenId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var headers;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return Storage.get({
                        key: TOKEN_KEY
                      });

                    case 2:
                      this.token = _context7.sent;
                      this.token = JSON.parse(this.token.value);
                      headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json; charset=UTF-8"',
                        'Authorization': 'Bearer ' + this.token.Token
                      });
                      return _context7.abrupt("return", this.http.post('https://clouddemosjnc.dyndns.org:5002/PagoStripe', {
                        stripeToken: tokenId,
                        cantidad: cantidad * 100
                      }, {
                        headers: headers
                      }).toPromise());

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return StripeService;
      }();

      StripeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      StripeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StripeService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cart-cart-module-es5.js.map