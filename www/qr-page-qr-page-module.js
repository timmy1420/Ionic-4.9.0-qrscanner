(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qr-page-qr-page-module"],{

/***/ "./src/app/qr-page/qr-page.module.ts":
/*!*******************************************!*\
  !*** ./src/app/qr-page/qr-page.module.ts ***!
  \*******************************************/
/*! exports provided: QrPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrPagePageModule", function() { return QrPagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _qr_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qr-page.page */ "./src/app/qr-page/qr-page.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _qr_page_page__WEBPACK_IMPORTED_MODULE_5__["QrPagePage"]
    }
];
var QrPagePageModule = /** @class */ (function () {
    function QrPagePageModule() {
    }
    QrPagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_qr_page_page__WEBPACK_IMPORTED_MODULE_5__["QrPagePage"]]
        })
    ], QrPagePageModule);
    return QrPagePageModule;
}());



/***/ }),

/***/ "./src/app/qr-page/qr-page.page.html":
/*!*******************************************!*\
  !*** ./src/app/qr-page/qr-page.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"haderColor\" style=\"height: 450px\">\n    <!-- <ion-title>\n      QR Code\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (tap)=\"dismiss()\">\n        <span ion-text color=\"white\" showWhen=\"ios\">Text here</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\" scroll=\"true\" overflow-scroll=\"true\" padding>\n  <ion-button [routerLink]=\"['/home']\">Cancel</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/qr-page/qr-page.page.scss":
/*!*******************************************!*\
  !*** ./src/app/qr-page/qr-page.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content, body, .app-root, ion-app, .scroll-content, .fixed-content, page-app {\n  background: none transparent !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvaHR0cC9HaXRsYWIvcXJjb2RlL3NyYy9hcHAvcXItcGFnZS9xci1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUF1QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcXItcGFnZS9xci1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LGJvZHksIC5hcHAtcm9vdCwgaW9uLWFwcCwuc2Nyb2xsLWNvbnRlbnQsLmZpeGVkLWNvbnRlbnQscGFnZS1hcHAge1xuICAgIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/qr-page/qr-page.page.ts":
/*!*****************************************!*\
  !*** ./src/app/qr-page/qr-page.page.ts ***!
  \*****************************************/
/*! exports provided: QrPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrPagePage", function() { return QrPagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QrPagePage = /** @class */ (function () {
    function QrPagePage(qrScanner, router) {
        this.qrScanner = qrScanner;
        this.router = router;
    }
    QrPagePage.prototype.ngOnInit = function () {
        this.doIt();
    };
    QrPagePage.prototype.doIt = function () {
        // console.log('Yo');
        var _this = this;
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                // alert('authorized');
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                    alert(text); // Show text in alert
                    _this.router.navigate(['/home']); // If Scanner has scanned the data go back
                });
                _this.qrScanner.resumePreview();
                // show camera preview
                _this.qrScanner.show()
                    .then(function (data) {
                    console.log('Data status', data);
                    //alert(data.showing);
                }, function (err) {
                    alert(err);
                });
                // wait for user to scan something, then the observable callback will be called
            }
            else if (status.denied) {
                alert('denied');
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
                alert('else');
            }
        })
            .catch(function (e) {
            alert('Error is' + e);
        });
    };
    QrPagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qr-page',
            template: __webpack_require__(/*! ./qr-page.page.html */ "./src/app/qr-page/qr-page.page.html"),
            styles: [__webpack_require__(/*! ./qr-page.page.scss */ "./src/app/qr-page/qr-page.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_1__["QRScanner"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QrPagePage);
    return QrPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=qr-page-qr-page-module.js.map