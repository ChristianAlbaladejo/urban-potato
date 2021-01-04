(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitas-visitas-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/visitas/visitas.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visitas/visitas.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVisitasVisitasPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Visitas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group value=\"tecnico\">\n      <ion-list-header>\n        <ion-label>¿Quien quieres que le visite?</ion-label>\n      </ion-list-header>\n  \n      <ion-item>\n        <ion-label>Técnico</ion-label>\n        <ion-radio slot=\"start\" value=\"tecnico\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Comercial</ion-label>\n        <ion-radio slot=\"start\" value=\"comercial\"></ion-radio>\n      </ion-item>\n  \n    </ion-radio-group>\n\n    <ion-item>\n      <ion-label position=\"floating\">Asunto</ion-label>\n      <ion-textarea></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>¿Que día te visitamos?</ion-label>\n      <ion-datetime [(ngModel)]=\"day\" placeholder=\"Día\" min=\"2020\" max=\"2099-10-31\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>¿Que hora deseas?</ion-label>\n      <ion-datetime [(ngModel)]=\"hour\" display-format=\"H:MM\" picker-format=\"H:MM\" placeholder=\"Hora\"></ion-datetime>\n    </ion-item>\n  </ion-list>\n  <ion-button shape=\"round\" expand=\"block\" [disabled]=\"!hour || !day\" >Solicitar visita</ion-button>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/visitas/visitas-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/visitas/visitas-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: VisitasPageRoutingModule */

    /***/
    function srcAppVisitasVisitasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitasPageRoutingModule", function () {
        return VisitasPageRoutingModule;
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


      var _visitas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./visitas.page */
      "./src/app/visitas/visitas.page.ts");

      var routes = [{
        path: '',
        component: _visitas_page__WEBPACK_IMPORTED_MODULE_3__["VisitasPage"]
      }];

      var VisitasPageRoutingModule = function VisitasPageRoutingModule() {
        _classCallCheck(this, VisitasPageRoutingModule);
      };

      VisitasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VisitasPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/visitas/visitas.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/visitas/visitas.module.ts ***!
      \*******************************************/

    /*! exports provided: VisitasPageModule */

    /***/
    function srcAppVisitasVisitasModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitasPageModule", function () {
        return VisitasPageModule;
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


      var _visitas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./visitas-routing.module */
      "./src/app/visitas/visitas-routing.module.ts");
      /* harmony import */


      var _visitas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./visitas.page */
      "./src/app/visitas/visitas.page.ts");

      var VisitasPageModule = function VisitasPageModule() {
        _classCallCheck(this, VisitasPageModule);
      };

      VisitasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _visitas_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitasPageRoutingModule"]],
        declarations: [_visitas_page__WEBPACK_IMPORTED_MODULE_6__["VisitasPage"]]
      })], VisitasPageModule);
      /***/
    },

    /***/
    "./src/app/visitas/visitas.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/visitas/visitas.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppVisitasVisitasPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc2l0YXMvdmlzaXRhcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/visitas/visitas.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/visitas/visitas.page.ts ***!
      \*****************************************/

    /*! exports provided: VisitasPage */

    /***/
    function srcAppVisitasVisitasPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitasPage", function () {
        return VisitasPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var VisitasPage = /*#__PURE__*/function () {
        function VisitasPage() {
          _classCallCheck(this, VisitasPage);
        }

        _createClass(VisitasPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VisitasPage;
      }();

      VisitasPage.ctorParameters = function () {
        return [];
      };

      VisitasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./visitas.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/visitas/visitas.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./visitas.page.scss */
        "./src/app/visitas/visitas.page.scss"))["default"]]
      })], VisitasPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=visitas-visitas-module-es5.js.map