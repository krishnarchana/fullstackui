webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Policy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Policy; });
var Policy = (function () {
    function Policy() {
    }
    return Policy;
}());



/***/ }),

/***/ "../../../../../src/app/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/UserLogin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLogin; });
var UserLogin = (function () {
    function UserLogin() {
    }
    return UserLogin;
}());



/***/ }),

/***/ "../../../../../src/app/about-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__("../../../../../src/app/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var aboutRoutes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */] }
];
var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(aboutRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/about.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n\t<div class=\"container\">\r\n\t\t<h3 class=\"text-center\">Policy Management System</h3>\r\n\t</div>\r\n\t<hr>\r\n\t<div class=\"container\">\r\n\t\t<div id=\"navbar\">\r\n\t\t\t<ul class=\"nav navbar-nav nav-pills pull-right\">\r\n\t\t\t\t<li><a routerLink=\"/login\" routerLinkActive=\"active\">Home</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n\r\n<div id=\"loginContainer\" class=\"container\">\r\n\t<form class=\"form-signin form-horizontal\" role=\"form\">\r\n\t\t<h3>About Us</h3><br><br><br>\r\n\t\t<p><strong>Our&nbsp;Vision</strong></p>\r\n\t\t<div class=\"hr-thin style-line\" style=\"width: 16%;border-color: #f68428;\"></div>\r\n\t\t<p style=\"float: left;\">We ensure the health and happiness of the people that we touch through our thoughtful, world-class solutions.</p>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/about.component.html"),
            styles: [__webpack_require__("../../../../../src/assets/styles.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/adminpage-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adminpage_component__ = __webpack_require__("../../../../../src/app/adminpage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var adminpageRoutes = [
    { path: 'adminPage', component: __WEBPACK_IMPORTED_MODULE_2__adminpage_component__["a" /* AdminPageComponent */] }
];
var AdminPageRoutingModule = (function () {
    function AdminPageRoutingModule(route, router) {
        this.route = route;
        this.router = router;
    }
    AdminPageRoutingModule.prototype.redirect = function () {
        console.log("redirect");
        this.userPerm = this.route.snapshot.queryParams["saveEdit"];
        if (this.userPerm == 'redirect') {
            this.router.navigate(['/userPage']);
        }
    };
    AdminPageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(adminpageRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AdminPageRoutingModule);
    return AdminPageRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/adminpage.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n\t<div class=\"container\">\r\n\t\t<h3 class=\"text-center\">Policy Management System</h3>\r\n\t</div>\r\n\t<hr>\r\n\t<div class=\"container\">\r\n\t\t<div id=\"navbar\">\r\n\t\t\t<ul class=\"nav navbar-nav nav-pills pull-right\">\r\n\t\t\t\t<li><a routerLink=\"/login\" routerLinkActive=\"active\">Logout</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/adminpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminPageComponent = (function () {
    function AdminPageComponent() {
    }
    AdminPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/adminpage.component.html")
        })
    ], AdminPageComponent);
    return AdminPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'alert',
            template: __webpack_require__("../../../../../src/app/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.clearMessage = function () {
        this.subject.next();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n\t<div class=\"container\">\r\n\t\t<h3 class=\"text-center\">Policy Management System</h3>\r\n\t</div>\r\n\t<hr>\r\n\t<div class=\"container\" [hidden]=\"!visability\">\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" (click)=\"toggleState()\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div id=\"navbar\" class=\"collapse navbar-collapse\" [ngClass]=\"{'in':isIn}\">\r\n\t\t\t<ul class=\"nav navbar-nav nav-pills pull-right\">\r\n\t\t\t\t<li><a routerLink=\"/register\" routerLinkActive=\"active\">Register</a><span class=\"label-wrap\" [hidden]=\"!visability\"><span class=\"label label-info\">New User?</span></span></li>\r\n\t\t\t\t<li><a routerLink=\"/about\" routerLinkActive=\"active\">About Us</a></li>\r\n\t\t\t\t<li><a routerLink=\"/contact\" routerLinkActive=\"active\">Contact Us</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(location, router) {
        var _this = this;
        this.isIn = false;
        router.events.subscribe(function (val) {
            _this.route = location.path();
            if (_this.route == '/login') {
                _this.visability = true;
            }
            else {
                _this.visability = false;
            }
        });
    }
    AppComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_routing__ = __webpack_require__("../../../../../src/app/login-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_component__ = __webpack_require__("../../../../../src/app/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_routing__ = __webpack_require__("../../../../../src/app/contact-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_component__ = __webpack_require__("../../../../../src/app/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_routing__ = __webpack_require__("../../../../../src/app/about-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__alert_component__ = __webpack_require__("../../../../../src/app/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_component__ = __webpack_require__("../../../../../src/app/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_routing__ = __webpack_require__("../../../../../src/app/register-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__userpage_component__ = __webpack_require__("../../../../../src/app/userpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__userpage_routing__ = __webpack_require__("../../../../../src/app/userpage-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__adminpage_component__ = __webpack_require__("../../../../../src/app/adminpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__adminpage_routing__ = __webpack_require__("../../../../../src/app/adminpage-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__equal_validator_directive__ = __webpack_require__("../../../../../src/app/equal-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__loginAuth_service__ = __webpack_require__("../../../../../src/app/loginAuth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__register_service__ = __webpack_require__("../../../../../src/app/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__registerUser__ = __webpack_require__("../../../../../src/app/registerUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__userpage_service__ = __webpack_require__("../../../../../src/app/userpage-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__User__ = __webpack_require__("../../../../../src/app/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Policy__ = __webpack_require__("../../../../../src/app/Policy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__UserLogin__ = __webpack_require__("../../../../../src/app/UserLogin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//validator

//services








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_10__about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_13__register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__equal_validator_directive__["a" /* EqualValidatorDirective */],
                __WEBPACK_IMPORTED_MODULE_15__userpage_component__["a" /* UserPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__adminpage_component__["a" /* AdminPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__login_routing__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__contact_routing__["a" /* ContactRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__about_routing__["a" /* AboutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14__register_routing__["a" /* RegisterRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_16__userpage_routing__["a" /* UserPageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_18__adminpage_routing__["a" /* AdminPageRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_21__loginAuth_service__["a" /* LoginAuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_22__register_service__["a" /* RegistrationService */],
                __WEBPACK_IMPORTED_MODULE_23__registerUser__["a" /* RegisterUser */],
                __WEBPACK_IMPORTED_MODULE_25__User__["a" /* User */],
                __WEBPACK_IMPORTED_MODULE_24__userpage_service__["a" /* UserpageService */],
                __WEBPACK_IMPORTED_MODULE_26__Policy__["a" /* Policy */],
                __WEBPACK_IMPORTED_MODULE_27__UserLogin__["a" /* UserLogin */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_component__ = __webpack_require__("../../../../../src/app/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var contactRoutes = [
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_2__contact_component__["a" /* ContactComponent */] }
];
var ContactRoutingModule = (function () {
    function ContactRoutingModule() {
    }
    ContactRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(contactRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ContactRoutingModule);
    return ContactRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n\t<div class=\"container\">\r\n\t\t<h3 class=\"text-center\">Policy Management System</h3>\r\n\t</div>\r\n\t<hr>\r\n\t<div class=\"container\">\r\n\t\t<div id=\"navbar\">\r\n\t\t\t<ul class=\"nav navbar-nav nav-pills pull-right\">\r\n\t\t\t\t<li><a routerLink=\"/login\" routerLinkActive=\"active\">Home</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n\r\n<div id=\"loginContainer\" class=\"container\">\r\n\t<form class=\"form-signin form-horizontal\" role=\"form\" name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"fullname\" class=\"col-sm-3 control-label\">FullName</label>\r\n\t\t\t\t<div class=\"col-sm-9\" [ngClass]=\"{ 'has-error': f.submitted && !fullname.valid }\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" minlength=\"8\" maxlength=\"20\" name=\"fullname\" [(ngModel)]=\"model.fullname\" #fullname=\"ngModel\" required/>\r\n\t\t\t\t\t<div *ngIf=\"f.submitted && !fullname.valid\" class=\"help-block\">FullName is required</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"email\" class=\"col-sm-3 control-label\">Email</label>\r\n\t\t\t\t<div class=\"col-sm-9\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"/>\r\n\t\t\t\t\t<div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required and format should be <i>abc@gmail.com</i>.</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"subject\" class=\"col-sm-3 control-label\">Subject</label>\r\n\t\t\t\t<div class=\"col-sm-9\" [ngClass]=\"{ 'has-error': f.submitted && !subject.valid }\">\r\n\t\t\t\t\t<select class=\"span3\" class=\"form-control\" name=\"subject\" [(ngModel)]=\"model.subject\" #subject=\"ngModel\" required>\r\n\t\t\t\t\t\t<option selected value=\"na\">Choose One:</option>\r\n\t\t\t\t\t\t<option value=\"service\">General Customer Service</option>\r\n\t\t\t\t\t\t<option value=\"suggestions\">Suggestions</option>\r\n\t\t\t\t\t\t<option value=\"product\">Product Support</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<div *ngIf=\"f.submitted && !subject.valid\" class=\"help-block\">Select any one item</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"message\" class=\"col-sm-3 control-label\">Message</label>\r\n\t\t\t\t<div class=\"col-sm-9\" [ngClass]=\"{ 'has-error': f.submitted && !message.valid }\">\r\n\t\t\t\t\t<textarea class=\"form-control\" type=\"textarea\" name=\"message\" [(ngModel)]=\"model.message\" #message=\"ngModel\" required maxlength=\"140\" rows=\"7\"></textarea>\r\n\t\t\t\t\t<div *ngIf=\"f.submitted && !message.valid\" class=\"help-block\">Message is required</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"col-sm-9 col-md-offset-3\">\r\n\t\t\t\t\t<button class=\"btn btn-primary\" id=\"contactBtn\">Send</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.model = {};
    }
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/contact.component.html")
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidatorDirective = (function () {
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidatorDirective_1 = EqualValidatorDirective;
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidatorDirective.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    EqualValidatorDirective = EqualValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: EqualValidatorDirective_1, multi: true }]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidatorDirective);
    return EqualValidatorDirective;
    var EqualValidatorDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/login-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var loginRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(loginRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"loginContainer\" class=\"container\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Welcome to the Site</h2><br>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-7 col-sm-offset-3\">\r\n        <alert></alert>\r\n      </div>\r\n    </div>\r\n    <form role=\"form\" class=\"form-signin form-horizontal\" name=\"form\" (ngSubmit)=\"f.form.valid && login(f)\" #f=\"ngForm\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"username\" class=\"col-sm-3 control-label\">User ID</label>\r\n        <div class=\"col-sm-9\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n          <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required/>\r\n          <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">User ID is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\" class=\"col-sm-3 control-label\">Password</label>\r\n        <div class=\"col-sm-9\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n          <input type=\"password\" minlength=\"4\" maxlength=\"20\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n          <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"col-sm-9 col-sm-offset-3\">\r\n          <button [disabled]=\"loading\" id=\"loginbtn\" class=\"btn btn-primary\">Login</button>\r\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loginAuth_service__ = __webpack_require__("../../../../../src/app/loginAuth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserLogin__ = __webpack_require__("../../../../../src/app/UserLogin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(route, router, model, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.model = model;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        localStorage.removeItem('Authorization');
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        var navextras;
        this.authenticationService.login(this.model)
            .subscribe(function (data) {
            console.log("login success data", data);
            var user = data;
            if (user && user.token) {
                localStorage.setItem('Authorization', user.token);
            }
            navextras = { queryParams: { "Authorization": user.name } };
            form.reset();
            _this.router.navigate(['/userPage'], navextras);
        }, function (error) {
            console.log("error ", error);
            _this.alertService.error(error.errorStr);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__UserLogin__["a" /* UserLogin */],
            __WEBPACK_IMPORTED_MODULE_3__loginAuth_service__["a" /* LoginAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loginAuth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__UserLogin__ = __webpack_require__("../../../../../src/app/UserLogin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginAuthenticationService = (function () {
    function LoginAuthenticationService(model, http) {
        this.model = model;
        this.http = http;
    }
    LoginAuthenticationService.prototype.login = function (model) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        var body = JSON.stringify(model);
        return this.http.post('/JerseyDemos/rest/auth/login', body, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.json()); });
    };
    LoginAuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__UserLogin__["a" /* UserLogin */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginAuthenticationService);
    return LoginAuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/register-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_component__ = __webpack_require__("../../../../../src/app/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var registerRoutes = [
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__register_component__["a" /* RegisterComponent */] }
];
var RegisterRoutingModule = (function () {
    function RegisterRoutingModule() {
    }
    RegisterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(registerRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], RegisterRoutingModule);
    return RegisterRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/register.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n\t<div class=\"container\">\r\n\t\t<h3 class=\"text-center\">Policy Management System</h3>\r\n\t</div>\r\n\t<hr>\r\n\t<div class=\"container\">\r\n\t\t<div id=\"navbar\">\r\n\t\t\t<ul class=\"nav navbar-nav nav-pills pull-right\">\r\n\t\t\t\t<li><a routerLink=\"/login\" routerLinkActive=\"active\">Home</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n\r\n<div id=\"loginContainer\" class=\"container\">\r\n\t<form class=\"form-signin form-horizontal\" role=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && register()\" novalidate>\r\n\t\t<h4 class=\"form-signin-heading\">Customer Information</h4>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"col-sm-7 col-sm-offset-3\">\r\n\t\t\t\t<alert></alert>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"firstName\" class=\"col-md-4 control-label labelMandatory\">First Name</label>\r\n\t\t\t<div class=\"col-md-8\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\r\n\t\t\t\t<input type=\"text\" minlength=\"4\" name=\"firstName\" [(ngModel)]=\"model.name_1\" #firstName=\"ngModel\" class=\"form-control\" autofocus required>\r\n\t\t\t\t<div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">FirstName is required</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"lastName\" class=\"col-md-4 control-label labelMandatory\">Last Name</label>\r\n\t\t\t<div class=\"col-md-8\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\r\n\t\t\t\t<input type=\"text\" name=\"lastName\" [(ngModel)]=\"model.name_2\" #lastName=\"ngModel\"  class=\"form-control\" required>\r\n\t\t\t\t<div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">LastName is required</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"birthDate\" class=\"col-md-4 control-label labelMandatory\">Date of Birth</label>\r\n\t\t\t<div class=\"col-md-8\" [ngClass]=\"{ 'has-error': f.submitted && !birthDate.valid }\">\r\n\t\t\t\t<input type=\"date\" name=\"birthDate\" [(ngModel)]=\"model.dob\" id=\"dateField\" #birthDate=\"ngModel\" class=\"form-control\" required>\r\n\t\t\t\t<div *ngIf=\"f.submitted && !birthDate.valid\" class=\"help-block\">Date Of Birth is required</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"userAddress\" class=\"col-md-4 control-label labelMandatory\">Address</label>\r\n\t\t\t<div class=\"col-md-8\" [ngClass]=\"{ 'has-error': f.submitted && !userAddress.valid }\">\r\n\t\t\t\t<input type=\"text\" name=\"userAddress\" [(ngModel)]=\"model.address\" #userAddress=\"ngModel\" class=\"form-control\" required>\r\n\t\t\t\t<div *ngIf=\"f.submitted && !userAddress.valid\" class=\"help-block\">User Address is required</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"contact\" class=\"col-md-4 control-label labelMandatory\">Contact No</label>\r\n\t\t\t<div class=\"col-md-8\" [ngClass]=\"{ 'has-error': f.submitted && !contact.valid }\">\r\n\t\t\t\t<input type=\"number\" minlength=\"10\" name=\"contact\" [(ngModel)]=\"model.phone\" #contact=\"ngModel\" class=\"form-control\" required>\r\n\t\t\t\t<div *ngIf=\"f.submitted && !contact.valid\" class=\"help-block\">Contact No is required</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"email\" class=\"col-md-4 control-label labelMandatory\">Email</label>\r\n\t\t\t<div class=\"col-md-8\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n\t\t\t\t<input type=\"email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" class=\"form-control\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n\t\t\t\t<div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required and format should be <i>abc@gmail.com</i>.</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"password\" class=\"col-md-4 control-label labelMandatory\">Password</label>\r\n\t\t\t<div class=\"col-md-8\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n\t\t\t\t<input type=\"password\" minlength=\"4\" maxlength=\"20\" name=\"password\" validateEqual=\"confirmPassword\" reverse=\"true\" [(ngModel)]=\"model.password\" #password=\"ngModel\" class=\"form-control\" required>\r\n\t\t\t\t<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required (minimum 4 characters)</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"confirmPassword\" class=\"col-md-4 control-label labelMandatory\">Confirm Password</label>\r\n\t\t\t<div class=\"col-md-8\" [ngClass]=\"{ 'has-error': f.submitted && !confirmPassword.valid }\">\r\n\t\t\t\t<input type=\"password\" minlength=\"4\" maxlength=\"20\" name=\"confirmPassword\" validateEqual=\"password\" reverse=\"false\" [(ngModel)]=\"model1.confirmPassword\" #confirmPassword=\"ngModel\" class=\"form-control\" required>\r\n\t\t\t\t<!--div *ngIf=\"form.controls.confirmPassword.errors?.MatchPassword\" class=\"help-block\">Password not match</div-->\r\n\t\t\t\t<div *ngIf=\"f.submitted && !confirmPassword.valid\" class=\"help-block\">Password is required (minimum 4 characters)</div>\r\n\t\t\t\t<div [hidden]=\"confirmPassword.valid || (confirmPassword.pristine && !f.submitted)\" class=\"text-danger\">Password mismatch</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t<input id=\"reset\" type=\"reset\" class=\"btn btn-primary\" value=\"Reset\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<button id=\"register\" class=\"btn btn-success\">Register</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__User__ = __webpack_require__("../../../../../src/app/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_service__ = __webpack_require__("../../../../../src/app/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(model, route, router, regService, alertService, loginComponent) {
        this.model = model;
        this.route = route;
        this.router = router;
        this.regService = regService;
        this.alertService = alertService;
        this.loginComponent = loginComponent;
        this.model1 = {};
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.ngAfterViewChecked = function () {
        var input = document.getElementById('dateField');
        var today = new Date();
        var day = new String(today.getDate());
        // Set month to string to add leading 0
        var mon = new String(today.getMonth() + 1); //January is 0!
        var yr = new String(today.getFullYear());
        if (mon.length < 2) {
            mon = "0" + mon;
        }
        if (day.length < 2) {
            day = "0" + day;
        }
        var date = yr + '-' + mon + '-' + day;
        input.disabled = false;
        input.setAttribute('max', date);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.dtModel = this.model.dob.split('-');
        this.dtModel = this.dtModel[0] + "-" + this.dtModel[1] + "-" + this.dtModel[2];
        this.model.dob = this.dtModel;
        this.regService.register(this.model)
            .subscribe(function (data) {
            console.log("register:", data);
            _this.successMsg = "Login with the " + data.login + " and provided password";
            _this.router.navigate(['/login']);
            setTimeout(function () { _this.loginComponent.alertService.success(_this.successMsg); }, 1000);
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('birthDate'),
        __metadata("design:type", String)
    ], RegisterComponent.prototype, "birthDate", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/register.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__User__["a" /* User */], __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__User__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__register_service__["a" /* RegistrationService */],
            __WEBPACK_IMPORTED_MODULE_4__alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__User__ = __webpack_require__("../../../../../src/app/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationService = (function () {
    function RegistrationService(model, http) {
        this.model = model;
        this.http = http;
    }
    RegistrationService.prototype.register = function (model) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        var body = JSON.stringify(model);
        return this.http.post('/JerseyDemos/rest/user/add', body, this.options).map(function (response) { return response.json(); });
    };
    RegistrationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__User__["a" /* User */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "../../../../../src/app/registerUser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterUser; });
var RegisterUser = (function () {
    function RegisterUser() {
    }
    return RegisterUser;
}());



/***/ }),

/***/ "../../../../../src/app/userpage-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userpage_component__ = __webpack_require__("../../../../../src/app/userpage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var userpageRoutes = [
    { path: 'userPage', component: __WEBPACK_IMPORTED_MODULE_2__userpage_component__["a" /* UserPageComponent */] }
];
var UserPageRoutingModule = (function () {
    function UserPageRoutingModule() {
    }
    UserPageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(userpageRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], UserPageRoutingModule);
    return UserPageRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/userpage-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserpageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Policy__ = __webpack_require__("../../../../../src/app/Policy.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserpageService = (function () {
    function UserpageService(model, http) {
        this.model = model;
        this.http = http;
    }
    UserpageService.prototype.logout = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', 'Basic ' + localStorage.getItem('Authorization'));
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        return this.http.get('/JerseyDemos/rest/auth/logout', this.options).map(function (response) { return response.json(); });
    };
    UserpageService.prototype.getPolicies = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', 'Basic ' + localStorage.getItem('Authorization'));
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        return this.http.get('/JerseyDemos/rest/policy/all', this.options).map(function (response) { return response.json(); });
    };
    UserpageService.prototype.getUserPolicies = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', 'Basic ' + localStorage.getItem('Authorization'));
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        return this.http.get('/JerseyDemos/rest/policy/query', this.options).map(function (response) { return response.json(); });
    };
    UserpageService.prototype.saveEditItem = function (model) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', 'Basic ' + localStorage.getItem('Authorization'));
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        var body = JSON.stringify(model);
        return this.http.post('/JerseyDemos/rest/policy/edit', body, this.options).map(function (response) { return response.json(); });
    };
    UserpageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__Policy__["a" /* Policy */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserpageService);
    return UserpageService;
}());



/***/ }),

/***/ "../../../../../src/app/userpage.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n\t<div class=\"container\">\r\n\t\t<h3 class=\"text-center\">Policy Management System</h3>\r\n\t</div>\r\n\t<hr>\r\n\t<div class=\"container\">\r\n\t\t<div id=\"navbar\">\r\n\t\t\t<ul class=\"nav navbar-nav nav-pills pull-right\">\r\n\t\t\t\t<li><a style=\"cursor: pointer\" (click)=\"logout()\">Logout</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n\r\n<div class=\"jumbotron\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12 col-md-offset-1\">\r\n\t\t\t<p>Welcome {{userPerm}}</p>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"col-md-12 col-md-offset-2\">\r\n\t\t\t\t<p>Available Policies </p>\r\n\t\t\t\t<alert></alert>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"container col-md-6 col-md-offset-2\">\r\n\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>S.No</th>\r\n\t\t\t\t\t\t\t<th>Policy Name</th>\r\n\t\t\t\t\t\t\t<th>Policy Details</th>\r\n\t\t\t\t\t\t\t<th *ngIf=\"flag\"></th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let x of message; let i=index\">\r\n\t\t\t\t\t\t\t<td *ngIf=\"x.amount == editAmount\">\r\n\t\t\t\t\t\t\t\t{{ i+1 }}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td *ngIf=\"x.amount !== editAmount\">{{ i+1 }}</td>\r\n\t\t\t\t\t\t\t<td *ngIf=\"x.amount == editAmount\">\r\n\t\t\t\t\t\t\t\t<input name=\"PolicyName\" type=\"text\" [(ngModel)]=\"x.name\"/>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td *ngIf=\"x.amount !== editAmount\">{{x.name}}</td>\r\n\t\t\t\t\t\t\t<td *ngIf=\"x.amount == editAmount\">\r\n\t\t\t\t\t\t\t\t<input name=\"PolicyDetails\" type=\"text\" [(ngModel)]=\"x.details\"/>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td *ngIf=\"x.amount !== editAmount\">{{x.details}}</td>\r\n\t\t\t\t\t\t\t<td *ngIf=\"flag\">\r\n\t\t\t\t\t\t\t\t<a (click)=\"toggle(x.amount)\" *ngIf=\"x.amount !== editAmount\">Edit</a>\r\n\t\t\t\t\t\t\t\t<a (click)=\"saveRow(x.name, x.details, x.policyNo, x.amount, x.maturityDate, x.valid, x.userId); editAmount='0'\" *ngIf=\"x.amount == editAmount\">Save</a>\r\n\t\t\t\t\t\t\t\t<a (click)=\"editAmount='0'\" *ngIf=\"x.amount == editAmount\">Cancel</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-12\" *ngIf=\"!flag\">\r\n\t\t\t<div class=\"col-md-12 col-md-offset-2\">\r\n\t\t\t\t<p>{{userPerm}} Policy details</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"container col-md-9 col-md-offset-2\">\r\n\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Policy No</th>\r\n\t\t\t\t\t\t\t<th>Policy Name</th>\r\n\t\t\t\t\t\t\t<th>Amount Paid</th>\r\n\t\t\t\t\t\t\t<th>Policy End Date</th>\r\n\t\t\t\t\t\t\t<th>Valid</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let x of message; let i=index\">\r\n\t\t\t\t\t\t\t<td class=\"success\" *ngIf=\"(x.maturityDate | date:'y') >= (compareDate | date:'y')\">{{ x.policyNo }}</td>\r\n\t\t\t\t\t\t\t<td class=\"danger\" *ngIf=\"(x.maturityDate | date:'y') < (compareDate | date:'y')\">{{ x.policyNo }}</td>\r\n\t\t\t\t\t\t\t<td class=\"success\" *ngIf=\"(x.maturityDate | date:'y') >= (compareDate | date:'y')\">{{ x.name }}</td>\r\n\t\t\t\t\t\t\t<td class=\"danger\" *ngIf=\"(x.maturityDate | date:'y') < (compareDate | date:'y')\">{{ x.name }}</td>\r\n\t\t\t\t\t\t\t<td class=\"success\" *ngIf=\"(x.maturityDate | date:'y') >= (compareDate | date:'y')\">{{ x.amount }}</td>\r\n\t\t\t\t\t\t\t<td class=\"danger\" *ngIf=\"(x.maturityDate | date:'y') < (compareDate | date:'y')\">{{ x.amount }}</td>\r\n\t\t\t\t\t\t\t<td class=\"success\" *ngIf=\"(x.maturityDate | date:'y') >= (compareDate | date:'y')\">{{ x.maturityDate | date:'dd/MM/y'}}</td>\r\n\t\t\t\t\t\t\t<td class=\"danger\" *ngIf=\"(x.maturityDate | date:'y') < (compareDate | date:'y')\">{{ x.maturityDate | date:'dd/MM/y'}}</td>\r\n\t\t\t\t\t\t\t<td class=\"success\" *ngIf=\"(x.maturityDate | date:'y') >= (compareDate | date:'y')\">YES</td>\r\n\t\t\t\t\t\t\t<td class=\"danger\" *ngIf=\"(x.maturityDate | date:'y') < (compareDate | date:'y')\">NO</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/userpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userpage_service__ = __webpack_require__("../../../../../src/app/userpage-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Policy__ = __webpack_require__("../../../../../src/app/Policy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserPageComponent = (function () {
    function UserPageComponent(route, userService, router, model, alertService) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.model = model;
        this.alertService = alertService;
        this.message = [];
        this.showEditable = false;
        this.editing = false;
        this.userPerm = this.route.snapshot.queryParams["Authorization"];
        this.compareDate = new Date();
        if (this.userPerm == 'Administrator') {
            this.flag = true;
            this.userService.getPolicies()
                .subscribe(function (data) {
                _this.msg = data;
                _this.message = _this.msg;
                console.log("Admin policies", _this.message);
            }, function (error) {
                _this.alertService.error(error);
            });
        }
        else {
            this.flag = false;
            this.userService.getUserPolicies()
                .subscribe(function (data) {
                _this.msg = data;
                _this.message = _this.msg;
                console.log("User policies", _this.message);
            }, function (error) {
                _this.alertService.error(error);
            });
        }
    }
    UserPageComponent.prototype.toggle = function (val) {
        this.editRowId = val;
        this.editRowName = val;
        this.editAmount = val;
    };
    UserPageComponent.prototype.saveRow = function (name, details, plcNo, amount, mDate, valid, id) {
        var _this = this;
        this.model.name = name;
        this.model.details = details;
        this.model.policyNo = plcNo;
        this.model.amount = amount;
        this.model.maturityDate = mDate;
        this.model.valid = valid;
        this.model.userId = id;
        var navextras;
        this.userService.saveEditItem(this.model)
            .subscribe(function (data) {
            console.log("edit success:", data);
            _this.alertService.success("Edit Success!!");
            setTimeout(function () { _this.alertService.clearMessage(); }, 2000);
        }, function (error) {
            _this.alertService.error("Edit unsuccessful!!");
            setTimeout(function () { ; _this.alertService.clearMessage(); }, 2000);
        });
    };
    UserPageComponent.prototype.ngOnInit = function () { };
    UserPageComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) {
            console.log("logout:", data);
            _this.router.navigate(['/login']);
            localStorage.removeItem('Authorization');
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    UserPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/userpage.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__Policy__["a" /* Policy */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__userpage_service__["a" /* UserpageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__Policy__["a" /* Policy */],
            __WEBPACK_IMPORTED_MODULE_4__alert_service__["a" /* AlertService */]])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n\tpadding-top: 50px;\r\n\tbackground-color: #fff;\r\n}\r\n\r\n/*\r\nform css\r\n*/\r\n.labelMandatory:after{\r\n content:\"*\" ;\r\n color:red\r\n}\r\n*[role=\"form\"] {\r\n    max-width: 530px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    border-radius: 0.3em;\r\n}\r\n*[role=\"form\"] h2 {\r\n    margin-left: 5em;\r\n    margin-bottom: 1em;\r\n}\r\n#loginContainer{\r\n\tpadding-top:120px;\r\n}\r\n.form-horizontal .control-label {\r\n\ttext-align:left;\r\n}\r\n.form-control {\r\n\twidth:75%;\r\n}\r\n.btn-block{\r\n\twidth:75%;\r\n}\r\n/*\r\nbootstrap css for header\r\n*/\r\n.navbar{\r\n\tmargin-bottom: 0px;\r\n}\r\n.navbar-brand {\r\n\tpadding-top:35px;\r\n\tpadding-bottom:0px;\r\n\theight:40px;\r\n}\r\n.navbar-inverse {\r\n\tbackground-color:#fff;\r\n\tborder-color:#fff;\r\n}\r\n.navbar-toggle {\r\n\tbackground-color:#000;\r\n}\r\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\r\n\tborder-color:#fff;\r\n\theight:80px\r\n}\r\n#title{\r\n\tmargin-bottom:0px;\r\n}\r\n#navbar li a{\r\n\ttext-decoration:underline;\r\n\tcolor:#000;\r\n\tpadding-bottom:0px;\r\n}\r\nh3{\r\n\tpadding-top:30px;\r\n\tmargin-top:0px;\r\n\tmargin-bottom:0px;\r\n}\r\nh4{\r\n\tmargin-bottom:30px;\r\n}\r\nhr{\r\n\tmargin-top:10px;\r\n\tmargin-bottom:0px;\r\n\tcolor:#FFF;\r\n\twidth:100%;\r\n}\r\n.label{\r\n\tfont-size:70%;\r\n}\r\n.label-wrap {\r\n    position: absolute;\r\n\tright:10px;\r\n    height: 10px;\r\n}\r\n.jumbotron{\r\n\tbackground-color: #fff;\r\n\tpadding-top: 80px;\r\n}\r\n#reset, #register {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n\t\twidth: 100%;\r\n}\r\n.btn-primary{\r\n\twidth:75%;\r\n}\r\n#contactBtn {\r\n\twidth: 75%;\r\n}\r\n\r\n.hr-thin {\r\n    float: left;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: rgba(68,68,68,0.15);\r\n    border-left: none;\r\n    border-right: none;\r\n    border-bottom: none;\r\n    height: 9px;\r\n    line-height: 9px;\r\n    margin: 0 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map