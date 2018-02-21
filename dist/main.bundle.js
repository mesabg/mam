webpackJsonp(["main"],{

/***/ "../../../../../src/client/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/client/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/client/@ms/api/api.functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LazyParser */
/* unused harmony export ServerError */
/**
 * Some Global Functions
 */
/**
 * Lazy parser
 */
function LazyParser(data) {
    var returnData = new Array();
    for (var i in data)
        returnData.push(data[i]);
    return returnData;
}
/**
 * Check request error functions
 */
function ServerError(response) {
    return response.status >= 500;
}


/***/ }),

/***/ "../../../../../src/client/@ms/api/api.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/client/@ms/api/api.service.ts");

//-- Global imports



//-- Local Imports

//-- Module declaration
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]
            ]
        })
    ], ApiModule);
    return ApiModule;
}());



/***/ }),

/***/ "../../../../../src/client/@ms/api/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment__ = __webpack_require__("../../../../../src/client/environments/environment.ts");

/**
 * Global Imports
 */



/**
 * Environment Import
 */

/**
 * [API Rest Service definition]
 */
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environment__["a" /* environment */].API.URL();
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    ApiService.prototype.get = function (method, fullUrl) {
        if (fullUrl === void 0) { fullUrl = false; }
        if (!fullUrl) {
            return this.http.get(this.baseUrl + method);
        }
        return this.http.get(method);
    };
    ApiService.prototype.post = function (method, body) {
        return this.http.post(this.baseUrl + method, body, { headers: this.headers });
    };
    ApiService.prototype.put = function (method, body) {
        return this.http.put(this.baseUrl + method, body, { headers: this.headers });
    };
    ApiService.prototype.delete = function (method) {
        return this.http.delete(this.baseUrl + method, { headers: this.headers });
    };
    ApiService = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/client/@ms/api/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_module__ = __webpack_require__("../../../../../src/client/@ms/api/api.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/client/@ms/api/api.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_functions__ = __webpack_require__("../../../../../src/client/@ms/api/api.functions.ts");
/* unused harmony reexport LazyParser */
/* unused harmony reexport ServerError */
//-- Services Module export

//-- Exporting services

//-- Exporting functions



/***/ }),

/***/ "../../../../../src/client/@ms/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ComponentsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");

//-- Global Imports


//-- Componets module definition
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            exports: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/client/@ms/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_module__ = __webpack_require__("../../../../../src/client/@ms/components/components.module.ts");
/* unused harmony reexport ComponentsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slick__ = __webpack_require__("../../../../../src/client/@ms/components/slick/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__slick__["a"]; });
/**
 * Modules
 */

/**
 * Classes
 */



/***/ }),

/***/ "../../../../../src/client/@ms/components/slick/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slick_class__ = __webpack_require__("../../../../../src/client/@ms/components/slick/slick.class.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__slick_class__["a"]; });
/**
 * Export SlickJS
 */



/***/ }),

/***/ "../../../../../src/client/@ms/components/slick/slick.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlickJS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/**
 * Global imports
 */

/**
 * This class will manage the slick JS Plugin usage
 */
/**
 * private $slickContainer:any,
        private rows:number = 1,
        private slidesToShow:number = 1,
        private slidesToScroll:number = 1,
        private autoplay:boolean = false,
        private autoplaySpeed:number = 0,
        private centerMode:boolean = false,
        private dots:boolean = true,
        private infinite:boolean = false,
        private arrows:boolean = true



            centerMode: this.centerMode,
            dots: this.dots,
            infinite: this.infinite,
            arrows: this.arrows,
            speed: 300,
            slidesToShow: this.slidesToShow,
            slidesToScroll: this.slidesToScroll,
            rows: this.rows,
            autoplay: this.autoplay,
            autoplaySpeed: this.autoplaySpeed,
            responsive: [{
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: this.rows
                }
            },{
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: this.rows
                }
            },{
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: this.rows
                }
            },{
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: this.rows
                }
            }]
        });
 */
var SlickJS = /** @class */ (function () {
    /**
     * @param $slickContainer JQuery Object of the container
     * @param settings Global configuration
     */
    function SlickJS($slickContainer, settings) {
        this.$slickContainer = $slickContainer;
        this.settings = settings;
        this.elementsLenght = 0;
        //-- Events
        this.eventAfterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); //-- Fires after slide change
        this.eventBeforeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); //-- Fires before slide change
        this.eventBreakpoint = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); //-- Fires after a breakpoint is hit.
        this.eventDestroy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); //-- When slider is destroyed, or unslicked.
        this.eventEdge = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); //-- Fires when an edge is overscrolled in non-infinite mode.
        this.eventInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); //-- Fires after first initialization.
        this.eventReInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); //-- Fires after every re-initialization
        this.eventSetPosition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); //-- Fires after position/size changes
        this.eventSwipe = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); //-- Fires after swipe/drag
        this.eventLazyLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); //-- Fires after image loads lazily
        this.eventLazyLoadError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); //-- Fires after image fails to load
        this.initialize();
        this.eventsManagement();
    }
    /**
     * Initialization
     */
    SlickJS.prototype.initialize = function () {
        this.$slickContainer.slick(this.settings);
    };
    /**
     * Events Management
     * - This function suscribes and emit an event when a SlickJS Event is triggered
     */
    SlickJS.prototype.eventsManagement = function () {
        //-- Clear events
        /*this.eventAfterChange.unsubscribe();
        this.eventBeforeChange.unsubscribe();
        this.eventBreakpoint.unsubscribe();
        this.eventDestroy.unsubscribe();
        this.eventEdge.unsubscribe();
        this.eventInit.unsubscribe();
        this.eventReInit.unsubscribe();
        this.eventSetPosition.unsubscribe();
        this.eventSwipe.unsubscribe();
        this.eventLazyLoaded.unsubscribe();
        this.eventLazyLoadError.unsubscribe();*/
        var self = this;
        this.$slickContainer
            .on('afterChange', function (slick, currentSlide) {
            self.eventAfterChange.emit({
                slick: slick,
                currentSlide: currentSlide
            });
        }).on('beforeChange', function (slick, currentSlide, nextSlide) {
            self.eventBeforeChange.emit({
                slick: slick,
                currentSlide: currentSlide,
                nextSlide: nextSlide
            });
        }).on('breakpoint', function (event, slick, breakpoint) {
            self.eventBreakpoint.emit({
                event: event,
                slick: slick,
                breakpoint: breakpoint
            });
        }).on('destroy', function (event, slick) {
            self.eventDestroy.emit({
                event: event,
                slick: slick
            });
        }).on('edge', function (slick, direction) {
            self.eventEdge.emit({
                slick: slick,
                direction: direction
            });
        }).on('init', function (slick) {
            self.eventInit.emit({
                slick: slick
            });
        }).on('reInit', function (slick) {
            self.eventReInit.emit({
                slick: slick
            });
        }).on('setPosition', function (slick) {
            self.eventSetPosition.emit({
                slick: slick
            });
        }).on('swipe', function (slick, direction) {
            self.eventSwipe.emit({
                slick: slick,
                direction: direction
            });
        }).on('lazyLoaded', function (event, slick, image, imageSource) {
            self.eventLazyLoaded.emit({
                event: event,
                slick: slick,
                image: image,
                imageSource: imageSource
            });
        }).on('lazyLoadError', function (event, slick, image, imageSource) {
            self.eventLazyLoadError.emit({
                event: event,
                slick: slick,
                image: image,
                imageSource: imageSource
            });
        });
    };
    /**
     * SlickJS Methods
     */
    SlickJS.prototype.length = function () {
        return this.elementsLenght;
    };
    /**
     * Returns the current slide index
     */
    SlickJS.prototype.currentSlide = function () {
        return this.$slickContainer.slick('slickCurrentSlide');
    };
    /**
     * Navigates to a slide by index
     * @param index
     * @param dontAnimate
     */
    SlickJS.prototype.slideTo = function (index, dontAnimate) {
        if (dontAnimate === void 0) { dontAnimate = false; }
        this.$slickContainer.slick('slickGoTo', index, dontAnimate);
    };
    /**
     * Navigates to the next slide
     */
    SlickJS.prototype.slideNext = function () {
        this.$slickContainer.slick('slickNext');
    };
    /**
     * Navigates to the previous slide
     */
    SlickJS.prototype.slidePrev = function () {
        this.$slickContainer.slick('slickPrev');
    };
    /**
     * Pauses autoplay
     */
    SlickJS.prototype.pause = function () {
        this.$slickContainer.slick('slickPause');
    };
    /**
     * Starts autoplay
     */
    SlickJS.prototype.play = function () {
        this.$slickContainer.slick('slickPlay');
    };
    /**
     * Push single JQuery element into Slick JS
     * Add a slide. If an index is provided, will add at that index, or before if addBefore is set. If no index is provided, add to the end or to the beginning if addBefore is set. Accepts HTML String || Object
     * @param $element Simgle JQuery Element
     * @param index
     * @param addBefore
     */
    SlickJS.prototype.push = function ($element, index, addBefore) {
        if (index != undefined && addBefore != undefined)
            this.$slickContainer.slick('slickAdd', $element, index, addBefore);
        else if (index != undefined)
            this.$slickContainer.slick('slickAdd', $element, index);
        else
            this.$slickContainer.slick('slickAdd', $element);
        this.elementsLenght += 1;
        this.eventsManagement();
    };
    /**
     * Push an array into Slick JS
     * @param elements JQuery Array of elements
     */
    SlickJS.prototype.pushAll = function ($elements) {
        //-- Push new data
        for (var i = 0; i < $elements.length; i++)
            this.$slickContainer.slick('slickAdd', $elements[i]);
        this.elementsLenght += $elements.length;
    };
    /**
     * Remove an element by index
     * Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified. If removeBefore is set to false, remove the slide following index, or the last slide if no index is set.
     * @param index
     * @param removeBefore
     */
    SlickJS.prototype.remove = function (index, removeBefore) {
        if (this.elementsLenght === 0)
            return;
        if (removeBefore != undefined)
            this.$slickContainer.slick('slickRemove', index, removeBefore);
        else
            this.$slickContainer.slick('slickRemove', index);
    };
    /**
     * Remove all the items in slick
     */
    SlickJS.prototype.removeAll = function () {
        if (this.elementsLenght === 0)
            return;
        for (var i = 0; i < this.elementsLenght; i++) {
            this.$slickContainer.slick('slickRemove', i);
        }
        this.elementsLenght = 0;
    };
    /**
     * Filters slides using jQuery .filter()
     * @param call function or selector
     */
    SlickJS.prototype.filter = function (call) {
        this.$slickContainer.slick('slickFilter', call);
    };
    /**
     * Removes applied filtering
     */
    SlickJS.prototype.unfilter = function () {
        this.$slickContainer.slick('slickUnfilter');
    };
    /**
     * Gets an individual option value.
     * @param option
     */
    SlickJS.prototype.getOption = function (option) {
        return this.$slickContainer.slick('slickGetOption', option);
    };
    /**
     * Sets an individual value live. Set refresh to true if it's a UI update.
     * @param option
     * @param value
     * @param refresh
     */
    SlickJS.prototype.setOption = function (option, value, refresh) {
        this.$slickContainer.slick('slickSetOption', option, value, refresh);
    };
    /**
     * UnSlick - Turns down SlickJS
     */
    SlickJS.prototype.unSlick = function () {
        this.$slickContainer.slick('unslick');
    };
    SlickJS.prototype.get = function () {
        return this.$slickContainer.slick('getSlick');
    };
    /**
     * Resize
     */
    SlickJS.prototype.resize = function () {
        this.$slickContainer.slick('resize');
    };
    /**
     * Reinit
     */
    SlickJS.prototype.reinit = function () {
        this.$slickContainer.slick('reinit');
    };
    return SlickJS;
}());



/***/ }),

/***/ "../../../../../src/client/app/#enums/color.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
var Color;
(function (Color) {
    Color[Color["BLACK"] = 0] = "BLACK";
    Color[Color["WHITE"] = 1] = "WHITE";
    Color[Color["GREY"] = 2] = "GREY";
})(Color || (Color = {}));
;


/***/ }),

/***/ "../../../../../src/client/app/#enums/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_enum__ = __webpack_require__("../../../../../src/client/app/#enums/color.enum.ts");
/* unused harmony reexport Color */
/**
 * Export all the enums
 */



/***/ }),

/***/ "../../../../../src/client/app/@api/@api.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ms_api__ = __webpack_require__("../../../../../src/client/@ms/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_api__ = __webpack_require__("../../../../../src/client/app/@api/image.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directorio_api__ = __webpack_require__("../../../../../src/client/app/@api/directorio.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pregunta_api__ = __webpack_require__("../../../../../src/client/app/@api/pregunta.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/mam.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contacto_api__ = __webpack_require__("../../../../../src/client/app/@api/contacto.api.ts");

/*tslint:disable*/
/**
 * Global imports
 */


/**
 * Local modules import (API Rest)
 */

/**
 * API Services
 */





/**
 * This module contains API Calls (formatted)
 */
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                //-- API Module to provide all the services
                __WEBPACK_IMPORTED_MODULE_3__ms_api__["a" /* ApiModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__image_api__["a" /* ImageApi */],
                __WEBPACK_IMPORTED_MODULE_5__directorio_api__["a" /* DirectorioApi */],
                __WEBPACK_IMPORTED_MODULE_6__pregunta_api__["a" /* PreguntaApi */],
                __WEBPACK_IMPORTED_MODULE_7__mam_api__["a" /* MAMApi */],
                __WEBPACK_IMPORTED_MODULE_8__contacto_api__["a" /* ContactoApi */],
            ]
        })
    ], ApiModule);
    return ApiModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@api/contacto.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ms_api__ = __webpack_require__("../../../../../src/client/@ms/api/index.ts");

/**
 * Global Imports
 */



/**
 * API Import
 */

/**
 * Service description
 * - This service manage the data retrive within the API
 * to post "ARNAC" form data.
 */
var ContactoApi = /** @class */ (function () {
    function ContactoApi(apiService) {
        this.apiService = apiService;
    }
    /**
     * API Functions
     */
    ContactoApi.prototype.publishContacto = function (formData) {
        return this.apiService.post('contacto-form', formData)
            .map(function (response) { return response.json(); });
    };
    ContactoApi = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ms_api__["b" /* ApiService */]])
    ], ContactoApi);
    return ContactoApi;
}());



/***/ }),

/***/ "../../../../../src/client/app/@api/directorio.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectorioApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ms_api__ = __webpack_require__("../../../../../src/client/@ms/api/index.ts");

/**
 * Global imports
 */




/**
 * Local imports
 */

/**
 * Service description
 * - This service manage the data retrive within the API
 * to get "Logos" data.
 */
var DirectorioApi = /** @class */ (function () {
    function DirectorioApi(apiService) {
        this.apiService = apiService;
    }
    /**
     * Get Logos
     */
    DirectorioApi.prototype.getLogos = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var response = [
                {
                    logo: 'https://www.fearlessphotographers.com/banner-display.cfm?photogID=7836',
                    name: 'FEARLESS',
                    iframe: true,
                    clickeable: true
                }, {
                    logo: 'https://mywed.com/images/mywed-logo/logo_mywed_vertical_black.svg',
                    name: 'Los mejores fotógrafos de boda de todo el mundo están en MyWed',
                    iframe: false,
                    url: "https://mywed.com/es/",
                    clickeable: true
                }
            ];
            observer.next(response);
            observer.complete();
        });
    };
    DirectorioApi = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ms_api__["b" /* ApiService */]])
    ], DirectorioApi);
    return DirectorioApi;
}());



/***/ }),

/***/ "../../../../../src/client/app/@api/image.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ms_api__ = __webpack_require__("../../../../../src/client/@ms/api/index.ts");

/*tslint:disable*/
/**
 * Global imports
 */




/**
 * Local imports
 */

/**
 * Service description
 * - This service manage the data retrive within the API
 * to get "Banner" data.
 */
var ImageApi = /** @class */ (function () {
    function ImageApi(apiService) {
        this.apiService = apiService;
    }
    /**
     * Get Banner Images
     */
    ImageApi.prototype.getBannerHomeImages = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                return [2 /*return*/, this.apiService.get('banner')
                        .map(function (response) { return response.json(); })
                        .map(function (response) {
                        return response.portfolio.map(function (section) {
                            console.log(section);
                            return {
                                image: section.banner[0].url,
                                name: section.name
                            };
                        });
                    }).toPromise()];
            });
        });
    };
    ImageApi.prototype.getBannerPortafolioImages = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                return [2 /*return*/, this.apiService.get('banner')
                        .map(function (response) { return response.json(); })
                        .map(function (response) {
                        return response.portfolio.map(function (section) {
                            return {
                                image: section.banner[0].url,
                                name: section.name
                            };
                        });
                    }).toPromise()];
            });
        });
    };
    ImageApi.prototype.getBannerMAMImages = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                return [2 /*return*/, this.apiService.get('banner')
                        .map(function (response) { return response.json(); })
                        .map(function (response) {
                        return response.portfolio.map(function (section) {
                            return {
                                image: section.banner[0].url,
                                name: section.name
                            };
                        });
                    }).toPromise()];
            });
        });
    };
    ImageApi.prototype.getBannerContactoImages = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                return [2 /*return*/, this.apiService.get('banner')
                        .map(function (response) { return response.json(); })
                        .map(function (response) {
                        return response.portfolio.map(function (section) {
                            return {
                                image: section.banner[0].url,
                                name: section.name
                            };
                        });
                    }).toPromise()];
            });
        });
    };
    ImageApi.prototype.getBannerHomeImagesTestimonies = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                return [2 /*return*/, this.apiService.get('banner')
                        .map(function (response) { return response.json(); })
                        .map(function (response) {
                        return response.portfolio.map(function (section) {
                            return {
                                image: section.mini.url,
                                author: section.author,
                                content: section.testimony
                            };
                        });
                    }).toPromise()];
            });
        });
    };
    ImageApi.prototype.getHighlightImages = function () {
        return this.apiService
            .get('highlights')
            .map(function (response) { return response.json(); })
            .map(function (response) {
            return response.article.map(function (article) {
                return {
                    image: article.main.url,
                    name: article.name,
                    place: article.location,
                    description: null
                };
            });
        });
    };
    ImageApi.prototype.getInstagramImages_ = function () {
        //let url = "https://api.instagram.com/v1/users/453683505/?access_token=1938189795.b070b02.1811e2423c574187b8fe7c67a2890f8a";
        var url = "https://www.instagram.com/mamfotografo/?__a=1";
        /*return this.apiService
                .get(url, true)
                .map(response => response.json())
                .map(response => {
                    return response.user.media.nodes.map(element => {
                        let n = element.thumbnail_resources.length;
                        console.log(element.graphql.user.edge_owner_to_timeline_media.edges.node.shortcode);
                        node.display_url //imagen
                        node.edge_media_to_caption.edges.node.text //desscripcion
                        return {
                            image: element.thumbnail_resources[ n == 0 ? 0 : n - 1 ].src,
                            description: element.caption,
                            name: null,
                            place: null
                            
                        };
                    });
                }).toPromise();*/
        return this.apiService
            .get(url, true)
            .map(function (response) { return response.json(); })
            .map(function (response) {
            return response.graphql.user.edge_owner_to_timeline_media.edges.map(function (element) {
                //console.log(element.node.edge_media_to_caption.edges[0].node.text);
                return {
                    image: element.node.display_url,
                    description: element.node.edge_media_to_caption.edges[0].node.text,
                    name: element.node.shortcode,
                    place: null
                };
            });
        }).toPromise();
    };
    ImageApi = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ms_api__["b" /* ApiService */]])
    ], ImageApi);
    return ImageApi;
}());



/***/ }),

/***/ "../../../../../src/client/app/@api/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_module__ = __webpack_require__("../../../../../src/client/app/@api/@api.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_api__ = __webpack_require__("../../../../../src/client/app/@api/image.api.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__image_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directorio_api__ = __webpack_require__("../../../../../src/client/app/@api/directorio.api.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__directorio_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pregunta_api__ = __webpack_require__("../../../../../src/client/app/@api/pregunta.api.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__pregunta_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/mam.api.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__mam_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacto_api__ = __webpack_require__("../../../../../src/client/app/@api/contacto.api.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__contacto_api__["a"]; });
/*tslint:disable*/
/**
 * Export module
 */

/**
 * API Services
 */







/***/ }),

/***/ "../../../../../src/client/app/@api/mam.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAMApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ms_api__ = __webpack_require__("../../../../../src/client/@ms/api/index.ts");

/* tslint:disable */
/**
 * Global imports
 */





/**
 * Local imports
 */

/**
 * Service description
 * - This service manage the data retrive data within the API
 * MAM page data
 */
var MAMApi = /** @class */ (function () {
    function MAMApi(apiService) {
        this.apiService = apiService;
    }
    /**
     * Get Banner Images
     */
    MAMApi.prototype.getCita = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var response = {
                cita: "No se trata de hacer una buena foto, se trata de crear una historia a trav\u00E9s de los momentos que capturas",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            };
            observer.next(response);
            observer.complete();
        });
    };
    MAMApi.prototype.getLogros = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var response = [
                {
                    img: 'assets/images/box-0.png',
                    title: 'Et endenem nosam estintibus vellupi',
                    content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
                },
                {
                    img: 'assets/images/box-0.png',
                    title: 'Et endenem nosam estintibus vellupi',
                    content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
                },
                {
                    img: 'assets/images/box-0.png',
                    title: 'Et endenem nosam estintibus vellupi',
                    content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
                },
                {
                    img: 'assets/images/box-0.png',
                    title: 'Et endenem nosam estintibus vellupi',
                    content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
                },
                {
                    img: 'assets/images/box-0.png',
                    title: 'Et endenem nosam estintibus vellupi',
                    content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
                },
                {
                    img: 'assets/images/box-0.png',
                    title: 'Et endenem nosam estintibus vellupi',
                    content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
                }
            ];
            observer.next(response);
            observer.complete();
        });
    };
    MAMApi.prototype.getAptitudes = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var response = [
                {
                    img: 'assets/images/box-1.png',
                    title: 'Et endenem nosam estintibus vellupi',
                    content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
                },
                {
                    img: 'assets/images/box-1.png',
                    title: 'Et endenem nosam estintibus vellupi',
                    content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
                },
                {
                    img: 'assets/images/box-1.png',
                    title: 'Et endenem nosam estintibus vellupi',
                    content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
                },
                {
                    img: 'assets/images/box-1.png',
                    title: 'Et endenem nosam estintibus vellupi',
                    content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
                },
                {
                    img: 'assets/images/box-1.png',
                    title: 'Et endenem nosam estintibus vellupi',
                    content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
                },
                {
                    img: 'assets/images/box-1.png',
                    title: 'Et endenem nosam estintibus vellupi',
                    content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
                }
            ];
            observer.next(response);
            observer.complete();
        });
    };
    MAMApi.prototype.getBiography = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var reason_1;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.apiService.get('biography').map(function (response) { return response.json(); }).toPromise()];
                    case 1: return [2 /*return*/, (_a.sent())];
                    case 2:
                        reason_1 = _a.sent();
                        console.log("An error ocurred while retrieving biography data");
                        return [2 /*return*/, reason_1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MAMApi.prototype.getContactoBrief = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                try {
                    return [2 /*return*/, this.apiService
                            .get('CTA-contact')
                            .map(function (response) { return response.json(); })
                            .map(function (response) { return response.page[0].content.brief; })
                            .toPromise()];
                }
                catch (reason) {
                    console.log("An error ocurred while retrieving contact brief");
                    return [2 /*return*/, reason];
                }
                return [2 /*return*/];
            });
        });
    };
    MAMApi = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ms_api__["b" /* ApiService */]])
    ], MAMApi);
    return MAMApi;
}());



/***/ }),

/***/ "../../../../../src/client/app/@api/pregunta.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreguntaApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ms_api__ = __webpack_require__("../../../../../src/client/@ms/api/index.ts");

/*tslint:disable*/
/**
 * Global imports
 */





/**
 * Local imports
 */

/**
 * Service description
 * - This service manage the data retrive within the API
 * to get "Banner" data.
 */
var PreguntaApi = /** @class */ (function () {
    function PreguntaApi(apiService) {
        this.apiService = apiService;
    }
    /**
     * Get preguntas contact
     */
    PreguntaApi.prototype.getContactQuestions = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var response = [
                {
                    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit laborum, blanditiis rerum minima doloribus quos, pariatur animi repudiandae repellendus molestias dicta dignissimos labore dolorum error ipsum ut aut. Distinctio, inventore!',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde molestias inventore, voluptatem consequatur harum dolorem et doloremque optio. Obcaecati consectetur distinctio voluptates saepe dolor molestias labore eius placeat, nihil alias.',
                },
                {
                    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quo nobis, pariatur enim. Obcaecati sequi voluptates amet voluptate labore earum iste, accusamus iure. Placeat tempore optio omnis beatae, veritatis quibusdam.',
                    answer: 'Esta es la respuesta a la pregunta',
                },
                {
                    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi soluta, iste eum qui laboriosam unde doloremque vel quas voluptatem veniam eaque iusto! Sapiente aperiam ullam praesentium quas soluta vero itaque!',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae tenetur dolor reiciendis, a officiis provident. Repudiandae quas iure atque! Sit quasi repellendus obcaecati ipsa id voluptate inventore libero ducimus dignissimos!',
                },
                {
                    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit blanditiis distinctio, architecto repudiandae eos non illo dolore autem quaerat omnis a fugiat officiis quidem earum magni fugit optio ratione nemo.',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel rem, illo molestiae esse necessitatibus. Itaque reiciendis, aliquid iste, rerum accusamus in nobis omnis maxime officiis nostrum quisquam sit iure molestias.',
                },
                {
                    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus voluptatum adipisci id, voluptatibus incidunt! Porro facilis illo similique animi, culpa iste nisi natus corporis molestiae delectus, expedita sit beatae, atque!',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sint veritatis, nemo fugiat excepturi aliquam quasi asperiores omnis alias quam repudiandae porro non deleniti quisquam suscipit voluptatibus amet quia nesciunt.',
                }
            ];
            observer.next(response);
            observer.complete();
        });
    };
    PreguntaApi = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ms_api__["b" /* ApiService */]])
    ], PreguntaApi);
    return PreguntaApi;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/@components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_services__ = __webpack_require__("../../../../../src/client/app/@services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__banners__ = __webpack_require__("../../../../../src/client/app/@components/banners/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__thumbnails__ = __webpack_require__("../../../../../src/client/app/@components/thumbnails/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aria__ = __webpack_require__("../../../../../src/client/app/@components/aria/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boxes__ = __webpack_require__("../../../../../src/client/app/@components/boxes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header__ = __webpack_require__("../../../../../src/client/app/@components/header/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer__ = __webpack_require__("../../../../../src/client/app/@components/footer/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_sticky__ = __webpack_require__("../../../../../src/client/app/@components/header-sticky/index.ts");

/*tslint:disable*/
/**
 * Global imports
 */



/**
 * Local imports
 */




/**
 * Local components
 */



/**
 * This module contains all the necesary components of the SPA
 */
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__banners__["b" /* BannersModule */],
                __WEBPACK_IMPORTED_MODULE_5__thumbnails__["c" /* ThumbnailsModule */],
                __WEBPACK_IMPORTED_MODULE_6__aria__["a" /* AriaModule */],
                __WEBPACK_IMPORTED_MODULE_7__boxes__["a" /* BoxesModule */],
                __WEBPACK_IMPORTED_MODULE_3__mam_services__["c" /* ServicesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__header_sticky__["a" /* HeaderStickyComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__banners__["b" /* BannersModule */],
                __WEBPACK_IMPORTED_MODULE_5__thumbnails__["c" /* ThumbnailsModule */],
                __WEBPACK_IMPORTED_MODULE_6__aria__["a" /* AriaModule */],
                __WEBPACK_IMPORTED_MODULE_8__header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__boxes__["a" /* BoxesModule */],
                __WEBPACK_IMPORTED_MODULE_10__header_sticky__["a" /* HeaderStickyComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__header__["a" /* HeaderComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/aria/aria-big/aria-big.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"aria-big-container\">\r\n\t<div type=\"title\">\r\n\t\t<h2>{{aria.title}}</h2>\r\n\t</div>\r\n\t<div type=\"content\">\r\n\t\t<h5>{{aria.location}}</h5>\r\n\t</div>\r\n</div>-->"

/***/ }),

/***/ "../../../../../src/client/app/@components/aria/aria-big/aria-big.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/aria/aria-big/aria-big.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AriaBigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var AriaBigComponent = /** @class */ (function () {
    /**
     * Inputs
     */
    function AriaBigComponent() {
    }
    AriaBigComponent.prototype.ngOnInit = function () {
    };
    AriaBigComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-aria-big',
            template: __webpack_require__("../../../../../src/client/app/@components/aria/aria-big/aria-big.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/aria/aria-big/aria-big.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], AriaBigComponent);
    return AriaBigComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/aria/aria-big/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria_big_component__ = __webpack_require__("../../../../../src/client/app/@components/aria/aria-big/aria-big.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__aria_big_component__["a"]; });
/*
* export component
*/



/***/ }),

/***/ "../../../../../src/client/app/@components/aria/aria.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AriaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aria_big__ = __webpack_require__("../../../../../src/client/app/@components/aria/aria-big/index.ts");

/**
 * Global imports
 */



/**
 * This module contains all the necesary text of the SPA
 */
var AriaModule = /** @class */ (function () {
    function AriaModule() {
    }
    AriaModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__aria_big__["a" /* AriaBigComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__aria_big__["a" /* AriaBigComponent */]
            ],
        })
    ], AriaModule);
    return AriaModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/aria/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria_module__ = __webpack_require__("../../../../../src/client/app/@components/aria/aria.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__aria_module__["a"]; });
/**
 * Export module
 */



/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-carousel/banner-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [ngClass]=\"{'grey': color == 2 }\" component-container>\r\n\t<br>\r\n\t<div class=\"col-12\">\r\n\t\t<h4 class=\"title\" font-uppercase font-center> {{title}} </h4>\r\n\t</div>\r\n\t<br>\r\n\t<div class=\"col-12\">\r\n\t\t<div #carousel carousel>\r\n\t\t\t<div *ngFor=\"let element of elements;\" class=\"row\" font-center topic>\r\n\t\t\t\t<div class=\"col-12\" image-container>\r\n\t\t\t\t\t<!--<div class=\"overlay\"></div>-->\r\n\t\t\t\t\t<img \r\n\t\t\t\t\t\t[attr.src]=\"element.img\" \r\n\t\t\t\t\t\t[attr.alt]=\"element.title\"/>\r\n\t\t\t\t</div>\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<div class=\"col-12\" title>\r\n\t\t\t\t\t<h5 class=\"title\"> {{element.title}} </h5>\r\n\t\t\t\t</div>\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<div description>\r\n\t\t\t\t\t<p> {{element.content}} </p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-carousel/banner-carousel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[component-container] {\n  padding: 8%; }\n\n[component-container].grey {\n  background-color: #f8f8f8; }\n\n[topic] {\n  padding: 40px; }\n\n[topic] img {\n    margin: 0 auto;\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-carousel/banner-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mam_enums__ = __webpack_require__("../../../../../src/client/app/#enums/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ms_components__ = __webpack_require__("../../../../../src/client/@ms/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__banner_carousel_slick_config__ = __webpack_require__("../../../../../src/client/app/@components/banners/banner-carousel/banner-carousel.slick-config.ts");

/* tslint:disable */




var BannerCarouselComponent = /** @class */ (function () {
    function BannerCarouselComponent() {
    }
    /**
     * Events
     */
    BannerCarouselComponent.prototype.ngOnInit = function () { };
    BannerCarouselComponent.prototype.ngAfterViewInit = function () {
        this.initSlickJS();
        console.log("Elements :: ", this.elements);
    };
    BannerCarouselComponent.prototype.ngOnChanges = function () {
        console.log("On Changes :: ", this.elements);
    };
    /**
     * Actions
     */
    BannerCarouselComponent.prototype.initSlickJS = function () {
        this.$carousel = new __WEBPACK_IMPORTED_MODULE_3__ms_components__["a" /* SlickJS */]($(this.$carouselView.nativeElement), __WEBPACK_IMPORTED_MODULE_4__banner_carousel_slick_config__["a" /* SETTINGS */]);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('color'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Number)
    ], BannerCarouselComponent.prototype, "color", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('title'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", String)
    ], BannerCarouselComponent.prototype, "title", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('elements'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Array)
    ], BannerCarouselComponent.prototype, "elements", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('carousel'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], BannerCarouselComponent.prototype, "$carouselView", void 0);
    BannerCarouselComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-banner-carousel',
            template: __webpack_require__("../../../../../src/client/app/@components/banners/banner-carousel/banner-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/banners/banner-carousel/banner-carousel.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], BannerCarouselComponent);
    return BannerCarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-carousel/banner-carousel.slick-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SETTINGS; });
/**
 * SlickJS Settings
 */
var SETTINGS = {
    rows: 1,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 6000,
    dots: false,
    arrows: false,
    infinite: true,
    responsive: [{
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1
            }
        }]
};


/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-carousel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner_carousel_component__ = __webpack_require__("../../../../../src/client/app/@components/banners/banner-carousel/banner-carousel.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__banner_carousel_component__["a"]; });
/*tslint:disable*/
//-- Export component



/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-instagram/banner-instagram.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" component-wrapper>\r\n\t<div class=\"col-12 title-insta\" title>\r\n\t\t<h4 class=\"title\" font-center font-uppercase> {{ titulo }} </h4>\r\n\t</div>\r\n\r\n\t<div #render></div>\r\n\t<div class=\"col-12\">\r\n\t\t<div #carousel carousel></div>\r\n\t</div>\r\n</div>\r\n<!--<div class=\"loader\"></div>-->"

/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-instagram/banner-instagram.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[component-wrapper] {\n  margin-top: 3rem;\n  height: 80vh;\n  background-color: white !important; }\n  [component-wrapper] [title] {\n    height: 10vh;\n    padding-top: 5vh; }\n  [component-wrapper] div:nth-child(2) {\n    top: 6vh; }\n  [component-wrapper] [carousel] {\n    margin: 0 auto; }\n  [component-wrapper] [carousel] [element] [element-wrapper] {\n      text-align: center;\n      overflow-y: hidden;\n      position: relative; }\n  [component-wrapper] [carousel] [element] [element-wrapper] img {\n        display: inline-block;\n        width: 100%;\n        height: auto; }\n  [component-wrapper] [carousel] [element] [description] {\n      padding: 15px; }\n  [component-wrapper] [carousel] [element] [description] p {\n        text-align: left;\n        display: block;\n        display: -webkit-box;\n        min-height: 1.5rem;\n        max-height: 4.5rem;\n        font-size: 1rem !important;\n        line-height: 1.5;\n        -webkit-line-clamp: 3;\n        -webkit-box-orient: vertical;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n  .loader:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -100px;\n  width: 100px;\n  height: 10px;\n  background-color: #b9a26a; }\n  @-webkit-keyframes loading {\n  /*from {left: -100px; width: 10%;}\r\n    20% {width: 20%;}\r\n    40% {width: 40%;}\r\n\t50% {width: 50%;}\r\n\t70% {width: 70%;}\r\n\t80% {left: 50%;}\r\n\t95% {left: 120%;}\r\n    to {left: 100%;}*/\n  0% {\n    width: 10%; }\n  100% {\n    width: 110%; } }\n  @keyframes loading {\n  /*from {left: -100px; width: 10%;}\r\n    20% {width: 20%;}\r\n    40% {width: 40%;}\r\n\t50% {width: 50%;}\r\n\t70% {width: 70%;}\r\n\t80% {left: 50%;}\r\n\t95% {left: 120%;}\r\n    to {left: 100%;}*/\n  0% {\n    width: 10%; }\n  100% {\n    width: 110%; } }\n  @media only screen and (min-width: 320px) and (max-width: 375px) {\n  [component-wrapper][_ngcontent-c9] {\n    margin-top: 3rem;\n    height: 80vh;\n    background-color: white !important; }\n    [component-wrapper][_ngcontent-c9] [title] {\n      height: 10vh;\n      padding-top: 4vh; } }\n  @media only screen and (min-width: 375px) and (max-width: 425px) {\n  [component-wrapper][_ngcontent-c9] {\n    margin-top: 3rem;\n    height: 80vh;\n    background-color: white !important; }\n    [component-wrapper][_ngcontent-c9] [title] {\n      height: 10vh;\n      padding-top: 5vh; } }\n  @media only screen and (min-width: 425px) and (max-width: 768px) {\n  [component-wrapper][_ngcontent-c9] {\n    margin-top: 3rem;\n    height: 80vh;\n    background-color: white !important; }\n    [component-wrapper][_ngcontent-c9] [title] {\n      height: 10vh;\n      padding-top: 5vh; } }\n  @media only screen and (min-width: 768px) and (max-width: 1024px) {\n  [component-wrapper][_ngcontent-c9] {\n    margin-top: 3rem;\n    height: 80vh;\n    background-color: white !important; }\n    [component-wrapper][_ngcontent-c9] [title] {\n      height: 10vh;\n      padding-top: 5vh; } }\n  @media only screen and (min-width: 1024px) {\n  [component-wrapper][_ngcontent-c9] {\n    margin-top: 3rem;\n    height: 80vh;\n    background-color: white !important; } }\n  @media only screen and (min-width: 320px) and (max-width: 375px) {\n  [component-wrapper] {\n    margin-top: 3rem;\n    height: 125vh;\n    max-height: 480px;\n    background-color: white !important; }\n    [component-wrapper] [title] {\n      height: 20vh;\n      padding-top: 4vh;\n      max-height: 110px; } }\n  @media only screen and (min-width: 375px) and (max-width: 425px) {\n  [component-wrapper] {\n    margin-top: 3rem;\n    height: 142vh;\n    max-height: 530px;\n    background-color: white !important; }\n    [component-wrapper] [title] {\n      height: 20vh;\n      max-height: 90px;\n      padding-top: 2vh; } }\n  @media only screen and (min-width: 425px) and (max-width: 550px) {\n  [component-wrapper] {\n    margin-top: 3rem;\n    height: 145vh;\n    max-height: 550px;\n    background-color: white !important; }\n    [component-wrapper] [title] {\n      padding-top: 5vh;\n      height: 24vh;\n      max-height: 100px; }\n  [component-wrapper] [carousel] [element] [element-wrapper] img {\n    width: 90%; } }\n  @media only screen and (min-width: 550px) and (max-width: 768px) {\n  [component-wrapper] {\n    margin-top: 3rem;\n    height: 145vh;\n    max-height: 550px;\n    background-color: white !important; }\n    [component-wrapper] [title] {\n      padding-top: 5vh;\n      height: 24vh;\n      max-height: 100px; }\n  [component-wrapper] [carousel] [element] [element-wrapper] img {\n    width: 90%; } }\n  @media only screen and (min-width: 768px) and (max-width: 1024px) {\n  [component-wrapper] {\n    margin-top: 3rem;\n    height: 80vh;\n    background-color: white !important; }\n    [component-wrapper] [title] {\n      height: 10vh;\n      padding-top: 5vh; } }\n  @media only screen and (min-width: 1024px) {\n  [component-wrapper] {\n    margin-top: 3rem;\n    height: 80vh;\n    max-height: 480px;\n    background-color: white !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-instagram/banner-instagram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerInstagramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ms_components__ = __webpack_require__("../../../../../src/client/@ms/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banner_instagram_slick_config__ = __webpack_require__("../../../../../src/client/app/@components/banners/banner-instagram/banner-instagram.slick-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__thumbnails__ = __webpack_require__("../../../../../src/client/app/@components/thumbnails/index.ts");

/* tslint:disable */
/**
 * Global imports
 */




var BannerInstagramComponent = /** @class */ (function () {
    function BannerInstagramComponent(resolver, changeDetector) {
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        /**
         * Outputs
         */
        this.afterViewInit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.viewInit = false;
    }
    /**
     * Events
     */
    BannerInstagramComponent.prototype.ngOnInit = function () { };
    BannerInstagramComponent.prototype.ngAfterViewInit = function () {
        this.initSlickJS();
        this.renderThumbnails();
        this.viewInit = true;
        this.afterViewInit.emit();
    };
    /**
     * Actions
     */
    BannerInstagramComponent.prototype.initSlickJS = function () {
        this.$carousel = new __WEBPACK_IMPORTED_MODULE_2__ms_components__["a" /* SlickJS */]($(this.$carouselView.nativeElement), __WEBPACK_IMPORTED_MODULE_3__banner_instagram_slick_config__["a" /* SETTINGS */]);
    };
    BannerInstagramComponent.prototype.renderThumbnails = function () {
        var _this = this;
        if (!this.viewInit)
            this.afterViewInit.subscribe(function () {
                _this.instagram.forEach(function (instagramImage) {
                    _this.renderThumbnail(instagramImage);
                });
            });
        else
            this.instagram.forEach(function (instagramImage) {
                _this.renderThumbnail(instagramImage);
            });
    };
    BannerInstagramComponent.prototype.renderThumbnail = function (instagramImage) {
        var _this = this;
        //-- Creating component
        var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__thumbnails__["b" /* ThumbnailInstagramCarouselComponent */]);
        var reference = this.render.createComponent(factory);
        var component = reference.instance;
        //-- Setting component params
        component.resource = instagramImage;
        //-- Suscribe to events
        component.afterViewInit.subscribe(function (element) {
            _this.$carousel.push(element.$target);
        });
        this.changeDetector.detectChanges();
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('titulo'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", String)
    ], BannerInstagramComponent.prototype, "titulo", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('instagram'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Array)
    ], BannerInstagramComponent.prototype, "instagram", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('render', { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewContainerRef */] }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewContainerRef */])
    ], BannerInstagramComponent.prototype, "render", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('carousel'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], BannerInstagramComponent.prototype, "$carouselView", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])('afterViewInit'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */])
    ], BannerInstagramComponent.prototype, "afterViewInit", void 0);
    BannerInstagramComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-banner-instagram',
            template: __webpack_require__("../../../../../src/client/app/@components/banners/banner-instagram/banner-instagram.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/banners/banner-instagram/banner-instagram.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */]])
    ], BannerInstagramComponent);
    return BannerInstagramComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-instagram/banner-instagram.slick-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SETTINGS; });
/**
 * SlickJS Settings
 */
var SETTINGS = {
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    responsive: [{
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1
            }
        }]
};


/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-instagram/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner_instagram_component__ = __webpack_require__("../../../../../src/client/app/@components/banners/banner-instagram/banner-instagram.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__banner_instagram_component__["a"]; });
/**
 * Export component
 */



/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-miembros/banner-miembros.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\" component-wrapper>\r\n\t<div class=\"col-12\" title>-->\r\n<div style=\"background-color:#f8f8f8!important; margin-top: -1rem;\">\r\n\t\t<div class=\"container\" >\r\n\t\t\t\t<div class=\"row\" >\r\n\t\t\t\t\t\t<div class=\"col-12\" >\r\n\t\t\t\t\t\t\t<h4 class=\"title\" font-center font-uppercase> {{ titulo }} </h4>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-12 member\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 myBadge\" >\r\n\t\t\t\t\t\t\t\t<div class=\"box-element box-element1\">\r\n\t\t\t\t\t\t\t\t\t<iframe src=\"https://www.fearlessphotographers.com/banner-display.cfm?photogID=7836\"  scrolling=\"no\" frameborder=\"0\" ></iframe>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 no-top myBadge\" >\r\n\t\t\t\t\t\t\t\t<div class=\"box-element box-element2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"mywed_badge\" >\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"https://mywed.com/es/photographer/mamfotografo/\" target=\"_blank\" title=\"Los mejores fotógrafos de boda de todo el mundo están en MyWed\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://mywed.com/images/mywed-logo/logo_mywed_vertical_black.svg\" alt=\"Los mejores fotógrafos de boda de todo el mundo están en MyWed\" style=\"max-height:150px;\" />\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-miembros/banner-miembros.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[component-wrapper] {\n  margin-top: 3rem;\n  height: 60vh;\n  background-color: #f8f8f8 !important; }\n  [component-wrapper] [title] {\n    height: 8vh;\n    padding-top: 12vh; }\n  [component-wrapper] [carousel] {\n    margin-top: -5vh;\n    width: 40%;\n    margin: 0 auto; }\n  [component-wrapper] [carousel] [element] {\n      text-align: center; }\n  [component-wrapper] [carousel] [element] img {\n        display: inline-block; }\n  iframe {\n  border: 1px solid #ccc;\n  overflow: hidden;\n  width: 148px;\n  height: 148px; }\n  .box-element > * {\n  margin: 0 auto;\n  display: block; }\n  .box-element > * a {\n    height: 100%;\n    width: 100%; }\n  .box-element > * a img {\n      margin: 0 auto;\n      display: block; }\n  .no-top {\n  top: 0 !important; }\n  .title {\n  margin: 3rem 0 3rem 0; }\n  .member {\n  margin: 3rem 0 3rem 0; }\n  @media only screen and (min-width: 320px) and (max-width: 375px) {\n  [component-wrapper] {\n    height: 80vh; }\n  [carousel] {\n    width: 100% !important; }\n  .myBadge {\n    margin-top: 2rem;\n    margin-bottom: 2rem; }\n  .member {\n    margin: 0rem 0 0rem 0; } }\n  @media only screen and (min-width: 375px) and (max-width: 575px) {\n  [component-wrapper] {\n    height: 80vh; }\n  [carousel] {\n    width: 100% !important; }\n  .myBadge {\n    margin-top: 2rem;\n    margin-bottom: 2rem; }\n  .member {\n    margin: 0rem 0 0rem 0; } }\n  @media only screen and (min-width: 575px) and (max-width: 768px) {\n  [component-wrapper] {\n    height: 60vh; }\n  [carousel] {\n    width: 100% !important; } }\n  @media only screen and (min-width: 768px) and (max-width: 1024px) {\n  [component-wrapper] {\n    height: 65vh; } }\n  @media only screen and (min-width: 1024px) {\n  .member {\n    padding-left: 4rem;\n    padding-right: 4rem; }\n  .box-element1 {\n    padding-left: 40%; }\n  .box-element2 {\n    padding-right: 40%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-miembros/banner-miembros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerMiembrosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Global imports
 */

var BannerMiembrosComponent = /** @class */ (function () {
    function BannerMiembrosComponent() {
    }
    //constructor(sanitizer:DomSanitizationService) { }
    /**
     * Events
     */
    BannerMiembrosComponent.prototype.ngOnInit = function () {
        this.directorio.forEach(function (data) {
            //this.sanitizer.bypassSecurityTrustUrl(data.url);
        });
    };
    BannerMiembrosComponent.prototype.ngAfterViewInit = function () {
        this.initSlickJS();
    };
    BannerMiembrosComponent.prototype.ngOnChanges = function () {
    };
    /**
     * Actions
     */
    BannerMiembrosComponent.prototype.initSlickJS = function () {
        //this.$carousel = new SlickJS($(this.$carouselView.nativeElement), SETTINGS);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('titulo'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", String)
    ], BannerMiembrosComponent.prototype, "titulo", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('directorio'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Array)
    ], BannerMiembrosComponent.prototype, "directorio", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('carousel'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], BannerMiembrosComponent.prototype, "$carouselView", void 0);
    BannerMiembrosComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-banner-miembros',
            template: __webpack_require__("../../../../../src/client/app/@components/banners/banner-miembros/banner-miembros.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/banners/banner-miembros/banner-miembros.component.scss")]
        })
    ], BannerMiembrosComponent);
    return BannerMiembrosComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banner-miembros/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner_miembros_component__ = __webpack_require__("../../../../../src/client/app/@components/banners/banner-miembros/banner-miembros.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__banner_miembros_component__["a"]; });
/**
 * Export component
 */



/***/ }),

/***/ "../../../../../src/client/app/@components/banners/banners.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banner_miembros__ = __webpack_require__("../../../../../src/client/app/@components/banners/banner-miembros/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__banner_instagram__ = __webpack_require__("../../../../../src/client/app/@components/banners/banner-instagram/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__banner_carousel__ = __webpack_require__("../../../../../src/client/app/@components/banners/banner-carousel/index.ts");

/**
 * Global imports
 */


/**
 * Components imports
 */



/**
 * This module contains all the necesary Banners of the SPA
 */
var BannersModule = /** @class */ (function () {
    function BannersModule() {
    }
    BannersModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__banner_miembros__["a" /* BannerMiembrosComponent */],
                __WEBPACK_IMPORTED_MODULE_4__banner_instagram__["a" /* BannerInstagramComponent */],
                __WEBPACK_IMPORTED_MODULE_5__banner_carousel__["a" /* BannerCarouselComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__banner_miembros__["a" /* BannerMiembrosComponent */],
                __WEBPACK_IMPORTED_MODULE_4__banner_instagram__["a" /* BannerInstagramComponent */],
                __WEBPACK_IMPORTED_MODULE_5__banner_carousel__["a" /* BannerCarouselComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__banner_instagram__["a" /* BannerInstagramComponent */]
            ]
        })
    ], BannersModule);
    return BannersModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/banners/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banners_module__ = __webpack_require__("../../../../../src/client/app/@components/banners/banners.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__banners_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banner_instagram__ = __webpack_require__("../../../../../src/client/app/@components/banners/banner-instagram/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__banner_instagram__["a"]; });
/*tslint:disable*/
/**
 * Export module
 */

//-- Export entryComponents



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-agradecimiento/box-agradecimiento.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ghost-header\">\r\n\t<div class=\"menu_button closeButton\">\r\n\t\t<div class=\"burger-click-region active\" golden aria-hidden=\"true\" mouseable (click)=\"click()\" >\r\n\t\t\t\t<span class=\"burger-menu-piece\"></span>\r\n\t\t\t\t<span class=\"burger-menu-piece\"></span>\r\n\t\t\t\t<span class=\"burger-menu-piece\"></span>\r\n\t\t</div>\r\n\t</div>\t\t\r\n\t<div class=\"text-info\">\r\n\t\t<div class=\"relative\">\r\n\t\t\t<h2 class=\"title_pop_up\" golden>Pronto iniciará tu historia</h2>\r\n\t\t\t<h2 class=\"title_pop_up\">En las proximas 48 horas responderé tus dudas, por favor revisa tu bandeja de entrada</h2>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-agradecimiento/box-agradecimiento.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ghost-header {\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden !important;\n  background-color: black;\n  position: fixed;\n  z-index: 100000;\n  top: 0; }\n  .ghost-header .text-info {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: inherit; }\n  .ghost-header h2 {\n    color: #a2a2a2;\n    width: 80%;\n    text-align: center;\n    /* padding-left: 2rem;\r\n        padding-right: 2rem;*/\n    margin: 0 auto;\n    display: block;\n    padding-bottom: 2rem; }\n  .ghost-header .closeButton {\n    position: absolute;\n    right: 2rem;\n    top: 2rem;\n    height: 40px;\n    width: 40px;\n    text-align: center; }\n  .ghost-header .closeButton i {\n      font-size: 3rem; }\n  .ghost-header .relative {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    display: block; }\n  .burger-click-region {\n  width: 30px;\n  height: 30px; }\n  .burger-menu-piece {\n  display: block;\n  position: absolute;\n  width: 30px;\n  border-top: 2px solid white;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -webkit-transition: -webkit-transform 400ms ease-out;\n  transition: -webkit-transform 400ms ease-out;\n  transition: transform 400ms ease-out;\n  transition: transform 400ms ease-out, -webkit-transform 400ms ease-out; }\n  .burger-menu-piece:nth-child(1) {\n    top: 0; }\n  .burger-menu-piece:nth-child(2) {\n    top: 12px;\n    opacity: 1;\n    -webkit-transition: opacity 0ms linear 200ms, -webkit-transform 400ms ease-out;\n    transition: opacity 0ms linear 200ms, -webkit-transform 400ms ease-out;\n    transition: transform 400ms ease-out, opacity 0ms linear 200ms;\n    transition: transform 400ms ease-out, opacity 0ms linear 200ms, -webkit-transform 400ms ease-out; }\n  .burger-menu-piece:nth-child(3) {\n    top: 24px; }\n  .active .burger-menu-piece:nth-child(1) {\n    -webkit-animation: burger-open-top 400ms ease-out forwards;\n            animation: burger-open-top 400ms ease-out forwards;\n    border-top: 2px solid #b9a26a; }\n  .active .burger-menu-piece:nth-child(2) {\n    opacity: 0;\n    -webkit-transition: opacity 0ms linear 200ms, -webkit-transform 400ms ease-out;\n    transition: opacity 0ms linear 200ms, -webkit-transform 400ms ease-out;\n    transition: transform 400ms ease-out, opacity 0ms linear 200ms;\n    transition: transform 400ms ease-out, opacity 0ms linear 200ms, -webkit-transform 400ms ease-out; }\n  .active .burger-menu-piece:nth-child(3) {\n    -webkit-animation: burger-open-bot 400ms ease-out forwards;\n            animation: burger-open-bot 400ms ease-out forwards;\n    border-top: 2px solid  #ffffff; }\n  .closing .burger-menu-piece:nth-child(1) {\n    -webkit-animation: burger-close-top 400ms ease-out forwards;\n            animation: burger-close-top 400ms ease-out forwards; }\n  .closing .burger-menu-piece:nth-child(3) {\n    -webkit-animation: burger-close-bot 400ms ease-out forwards;\n            animation: burger-close-bot 400ms ease-out forwards; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-agradecimiento/box-agradecimiento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxAgradecimientoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var BoxAgradecimientoComponent = /** @class */ (function () {
    function BoxAgradecimientoComponent() {
        this.onClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
    }
    BoxAgradecimientoComponent.prototype.ngOnInit = function () {
    };
    BoxAgradecimientoComponent.prototype.click = function () {
        this.onClick.emit();
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */])
    ], BoxAgradecimientoComponent.prototype, "onClick", void 0);
    BoxAgradecimientoComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-box-agradecimiento',
            template: __webpack_require__("../../../../../src/client/app/@components/boxes/box-agradecimiento/box-agradecimiento.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/boxes/box-agradecimiento/box-agradecimiento.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], BoxAgradecimientoComponent);
    return BoxAgradecimientoComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-agradecimiento/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_agradecimiento_component__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-agradecimiento/box-agradecimiento.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__box_agradecimiento_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-bio/box-bio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bio_box\">\r\n\t<br>\r\n\t<br>\r\n\t<br>\r\n\t<br>\r\n\t<div class=\"container comment-special\">\r\n\t\t<div class=\"row row-special\">\r\n\t\t\t<div class=\"col-12 col-sm-12 col-md-12 col-ls-12 col-xl-12\">\r\n\t\t\t\t<h3 class=\"featured_content text-center\">{{bio.content_special}}</h3>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12 col-sm-12 col-md-12 col-ls-12 col-xl-12\">\r\n\t\t\t\t<p class=\"content\">{{bio.content}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\t\r\n\t<br>\r\n\t<br>\r\n</div>\t"

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-bio/box-bio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bio_box {\n  width: 100%;\n  height: auto; }\n  .bio_box .comment-special {\n    margin-top: 3rem;\n    margin-bottom: 3rem; }\n  .bio_box .text-center {\n    text-align: center; }\n  .bio_box .featured_content {\n    padding-left: 2rem; }\n  .bio_box .row-special {\n    margin-top: 3rem;\n    margin-bottom: 3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-bio/box-bio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxBioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var BoxBioComponent = /** @class */ (function () {
    function BoxBioComponent() {
    }
    BoxBioComponent.prototype.ngOnInit = function () {
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('bio'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Object)
    ], BoxBioComponent.prototype, "bio", void 0);
    BoxBioComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-box-bio',
            template: __webpack_require__("../../../../../src/client/app/@components/boxes/box-bio/box-bio.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/boxes/box-bio/box-bio.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], BoxBioComponent);
    return BoxBioComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-bio/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_bio_component__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-bio/box-bio.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__box_bio_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-collage/box-collage.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title uppercase center description\" #descriptionRender> {{description}} </h2>\r\n\r\n<div *ngIf=\"type == 0\" class=\"box-collage\">\r\n\t<!--FULL-->\r\n\t<div class=\"collage-box collage-box-full\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div *ngIf=\"collage[0] != undefined\" class=\"col-12 not-padding\">\r\n\t\t\t\t<div class=\"not-overflow\">\r\n\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t<img [attr.src]=\"collage[0].src\" [attr.alt]=\"collage[0].alt\"/>\r\n\t\t\t\t\t<div class=\"description-text-container\"> \r\n\t\t\t\t\t\t<div class=\"description-center\">\r\n\t\t\t\t\t\t\t<h1 class=\"title uppercase center\"> {{collage[0].description}} </h1> \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<br>\r\n\r\n\r\n\t<!--TRIPLE-->\r\n\t<div class=\"collage-box collage-box-triple\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div *ngIf=\"collage[1] != undefined\" class=\"col-4 not-padding\">\r\n\t\t\t\t<div class=\"not-overflow\"> \r\n\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t<img [attr.src]=\"collage[1].src\" [attr.alt]=\"collage[1].alt\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div *ngIf=\"collage[2] != undefined\" class=\"col-4 not-padding\">\r\n\t\t\t\t<div class=\"not-overflow\"> \r\n\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t<img [attr.src]=\"collage[2].src\" [attr.alt]=\"collage[2].alt\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div *ngIf=\"collage[3] != undefined\" class=\"col-4 not-padding\">\r\n\t\t\t\t<div class=\"not-overflow\"> \r\n\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t<img [attr.src]=\"collage[3].src\" [attr.alt]=\"collage[3].alt\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\t   \r\n\t\t</div>\r\n\t</div>\r\n\t<br>\r\n\r\n\r\n\t<!--FULL-->\r\n\t<div class=\"collage-box collage-box-full\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div *ngIf=\"collage[4] != undefined\" class=\"col-12 not-padding\">\r\n\t\t\t\t<div class=\"not-overflow\">\r\n\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t<img [attr.src]=\"collage[4].src\" [attr.alt]=\"collage[4].alt\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<br>\r\n\r\n\t  \r\n</div>\r\n\r\n\r\n<div *ngIf=\"type == 1\" class=\"box-collage\">\r\n\t<!--DOUBLE-->\r\n\t<div class=\"collage-box collage-box-double\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div *ngIf=\"collage[0] != undefined\" class=\"col-6 not-padding\">\r\n\t\t\t\t<div class=\"not-overflow\"> \r\n\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t<img [attr.src]=\"collage[0].src\" [attr.alt]=\"collage[0].alt\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div *ngIf=\"collage[1] != undefined\" class=\"col-6 not-padding\">\r\n\t\t\t\t<div class=\"not-overflow\"> \r\n\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t<img [attr.src]=\"collage[1].src\" [attr.alt]=\"collage[1].alt\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>  \r\n\t\t</div>\r\n\t</div>\r\n\t<br>\r\n\r\n\t<!--FULL-->\r\n\t<div class=\"collage-box collage-box-full\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div *ngIf=\"collage[2] != undefined\" class=\"col-12 not-padding\">\r\n\t\t\t\t<div class=\"not-overflow\">\r\n\t\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t<img [attr.src]=\"collage[2].src\" [attr.alt]=\"collage[2].alt\"/>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<br>\r\n\t\t\r\n\t<!--TRIPLE-->\r\n\t<div class=\"collage-box collage-box-triple\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div *ngIf=\"collage[3] != undefined\" class=\"col-4 not-padding\">\r\n\t\t\t\t<div class=\"not-overflow\"> \r\n\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t<img [attr.src]=\"collage[3].src\" [attr.alt]=\"collage[3].alt\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div *ngIf=\"collage[4] != undefined\" class=\"col-4 not-padding\">\r\n\t\t\t\t<div class=\"not-overflow\"> \r\n\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t<img [attr.src]=\"collage[4].src\" [attr.alt]=\"collage[4].alt\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div *ngIf=\"collage[5] != undefined\" class=\"col-4 not-padding\">\r\n\t\t\t\t<div class=\"not-overflow\"> \r\n\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t<img [attr.src]=\"collage[5].src\" [attr.alt]=\"collage[5].alt\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\t   \r\n\t\t</div>\r\n\t</div>\r\n\t<br>\r\n</div>\r\n\t"

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-collage/box-collage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-image-full {\n  width: 100%;\n  height: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  position: relative;\n  overflow: hidden; }\n\nimg {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: fill;\n     object-fit: fill; }\n\n.box-collage {\n  width: 100vw;\n  height: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0 auto; }\n\n.description {\n  padding-top: 10vh;\n  padding-bottom: 10vh; }\n\n.description-center {\n  display: table;\n  width: 100%;\n  height: 100%; }\n\n.description-center h1 {\n    display: table-cell;\n    vertical-align: middle; }\n\n.collage-container {\n  width: 70vw !important; }\n\n.description-text-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  color: white;\n  left: 0;\n  right: 0; }\n\n.collage-box {\n  margin: 0; }\n\n.collage-box-triple > .row {\n  height: 70vh; }\n\n.collage-box-triple > .row img {\n    height: 100%;\n    width: auto; }\n\n.collage-box-double img {\n  width: 100%;\n  height: auto; }\n\n.collage-box-full img {\n  width: 100%;\n  height: auto; }\n\n.not-padding {\n  padding: 0; }\n\n.center {\n  margin: 0 auto;\n  display: block;\n  text-align: center; }\n\n.not-overflow {\n  overflow: hidden !important;\n  position: relative;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-collage/box-collage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxCollageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var BoxCollageComponent = /** @class */ (function () {
    function BoxCollageComponent() {
        this.type = 0;
        this.collage = [
            {
                alt: 'Isabel y Edgar',
                src: 'http://res.cloudinary.com/keystone-demo/image/upload/v1516859140/cno1jkensw2wm7a5jylo.png',
                description: 'Et endenem nosam estintibus vellupi dundae.'
            },
            {
                alt: 'Majo y Ale',
                src: 'http://res.cloudinary.com/keystone-demo/image/upload/v1516858899/vupk2nwkelhj8rftxxup.png'
            },
            {
                alt: 'Image name',
                src: "http://res.cloudinary.com/keystone-demo/image/upload/v1516859206/gsp1pvg4s9v6ntievuhy.png"
            },
            {
                alt: 'Isabel y Edgar',
                src: 'http://res.cloudinary.com/keystone-demo/image/upload/v1516859140/cno1jkensw2wm7a5jylo.png'
            },
            {
                alt: 'Mariella y Elrik',
                src: 'http://res.cloudinary.com/keystone-demo/image/upload/v1516858999/uvod0tz2i8tiglwkwubz.png'
            },
            {
                alt: 'Majo y Ale',
                src: 'http://res.cloudinary.com/keystone-demo/image/upload/v1516858899/vupk2nwkelhj8rftxxup.png'
            },
        ];
    }
    BoxCollageComponent.prototype.ngOnInit = function () { };
    BoxCollageComponent.prototype.ngAfterViewInit = function () {
        //-- Check if there's no text
        if (this.description === '' || this.description === undefined || this.description === null)
            $(this.descriptionRender.nativeElement).css('display', 'none');
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('descriptionRender'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], BoxCollageComponent.prototype, "descriptionRender", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('type'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Number)
    ], BoxCollageComponent.prototype, "type", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('description'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", String)
    ], BoxCollageComponent.prototype, "description", void 0);
    BoxCollageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'cania-box-collage',
            template: __webpack_require__("../../../../../src/client/app/@components/boxes/box-collage/box-collage.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/boxes/box-collage/box-collage.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], BoxCollageComponent);
    return BoxCollageComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-collage/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_collage_component__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-collage/box-collage.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__box_collage_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-form/box-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\" (ngSubmit)=\"formService.submit(myForm)\" class = \"formulario\" >\r\n\t<div class=\"container form_box\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 field\">\r\n\t\t\t\t<input type=\"text\" name=\"nameAndLastName\" placeholder=\"Nombre y Apellido *\" formControlName=\"nameAndLastName\"> <!--<span golden>*</span>-->\r\n\t\t\t\t<div class=\"error\" *ngIf=\"!myForm.controls['nameAndLastName'].valid &&myForm.controls['nameAndLastName'].touched \"> Por favor ingrese un nombre válido.</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 field\">\r\n\t\t\t\t<input type=\"email\" name=\"email\" placeholder=\"Correo *\" formControlName=\"email\">\r\n\t\t\t\t<div class=\"error\" *ngIf=\"!myForm.controls['email'].valid &&myForm.controls['email'].touched \"> Por favor ingrese un email válido.</div>\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\t<div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 field\">\r\n\t\t\t\t<input type=\"tel\"  onkeypress='return event.charCode >= 48 && event.charCode <= 57' pattern=\"[0-9]{10,11}\"  name=\"phone\" placeholder=\"Teléfono\" autocomplete=\"true\" formControlName=\"phone\">\r\n\t\t\t\t<div class=\"error\" *ngIf=\"!myForm.controls['phone'].valid &&myForm.controls['phone'].touched \"> Por favor ingreseun telefono válido.</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 field\">\r\n\t\t\t\t<input type=\"text\" name=\"SocialNetwork\" placeholder=\"Red social *\" formControlName=\"SocialNetwork\">\r\n\t\t\t\t<div class=\"error\" *ngIf=\"!myForm.controls['SocialNetwork'].valid &&myForm.controls['SocialNetwork'].touched \"> Por favor ingrese una red social válida.</div>\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\t<div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 field\">\t\t\r\n\t\t\t\t\t<input matInput [matDatepicker]=\"picker1\" placeholder=\"fecha de la boda *\" formControlName=\"dateWedding\" name=\"dateWedding\">\r\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker1\" id=\"icon-calendar\"></mat-datepicker-toggle>\r\n\t\t\t\t\t<mat-datepicker touchUi=\"true\" #picker1></mat-datepicker>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"error\" *ngIf=\"!myForm.controls['dateWedding'].valid &&myForm.controls['dateWedding'].touched \"> Por favor ingrese una fecha válida.</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 field\">\r\n\t\t\t\t<input type=\"text\" name=\"locationChurch\" placeholder=\"Dirección de la Iglesia *\" formControlName=\"locationChurch\">\r\n\t\t\t\t<div class=\"error\" *ngIf=\"!myForm.controls['locationChurch'].valid &&myForm.controls['locationChurch'].touched \"> Por favor ingrese una dirección.</div>\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\t<div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 field\">\r\n\t\t\t\t<input type=\"text\" name=\"locationReception\" placeholder=\"Dirección de la recepción\" formControlName=\"locationReception\">\r\n\t\t\t\t<div class=\"error\" *ngIf=\"!myForm.controls['locationReception'].valid &&myForm.controls['locationReception'].touched \"> Por favor ingrese una dirección.</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 field\">\r\n\t\t\t\t<input type=\"number\" onkeypress='return event.charCode >= 48 && event.charCode <= 57' min=\"0\" name=\"numInvited\" placeholder=\"Numero de invitados *\" formControlName=\"numInvited\">\r\n\t\t\t\t<div class=\"error\" *ngIf=\"!myForm.controls['numInvited'].valid &&myForm.controls['numInvited'].touched \"> Por favor ingrese una cantidad de invitados.</div>\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\t<div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 \">\r\n\t\t\t\t<textarea name=\"details\" placeholder=\"Otros detalles\" formControlName=\"details\"></textarea>\r\n\t\t\t\t<div class=\"error\" *ngIf=\"!myForm.controls['details'].valid &&myForm.controls['details'].touched \"> Por favor ingrese unos detalles.</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!--<mat-form-field>\r\n\t\t<input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t<mat-datepicker #picker></mat-datepicker>\r\n\t </mat-form-field>-->\r\n\t  \r\n\t <!--<p>\r\n\t\t<mat-form-field>\r\n\t\t  <input matInput [matDatepicker]=\"picker\" placeholder=\"Input disabled\" disabled>\r\n\t\t  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t  <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n\t\t</mat-form-field>\r\n\t  </p>-->\r\n\t  \r\n\r\n\r\n\r\n\t<div id=\"WA\" class=\"error\" style=\"display:none; font-size:1rem;\">\r\n\t\t<br>\r\n\t\t\t<p style=\"text-align:center;\">Disculpe, hubo un error al realizar el envío, por favor intente de nuevo.</p>\t\r\n\t\t<br>\t\r\n\t</div>\r\n\r\n\t<div class=\"call-to-action\">\r\n\t\t<a href=\"javascript:void(0)\" class=\"btn-CTA\" (click)= \"formService.showErrors(myForm)\">\r\n\t\t\t<svg>\r\n\t\t\t\t<rect x=\"0\" y=\"0\" fill=\"none\" width=\"100%\" height=\"100%\"></rect>\r\n\t\t\t</svg>\r\n\t\t\t<span class=\"\" *ngIf=\"! formService.submitLock\">Hagamos tu historia</span>\r\n\t\t\t<span *ngIf=\"formService.submitLock\">Enviando tu historia...</span> \r\n\t\t</a>\r\n\t</div>\r\n\t<br>\r\n\t<div class=\"error\" *ngIf=\"!myForm.valid && myForm.touched && formService.clicked\">\r\n\t\t<p style=\"text-align:center;\">Por favor complete los campos requeridos.</p>\t\t\r\n\t</div>\r\n\t\r\n</form>\r\n<div class=\"socialNetworks\">\r\n\t<ul class=\"list-inline\">\r\n\t\t<li class=\"list-inline-item \"><a target=\"_blank\" href=\"https://www.instagram.com/mamfotografo/\" data-wipe><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\r\n\t\t<li class=\"list-inline-item \"><a target=\"_blank\" href=\"https://wwww.facebook.com/mamfotografo/\" data-wipe><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\r\n\t\t<li class=\"list-inline-item \"><a target=\"_blank\" href=\"https://twitter.com/mamfotografo/\" data-wipe><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\r\n\t</ul>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-form/box-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  border-top: transparent;\n  border-right: transparent;\n  border-left: transparent;\n  background-color: transparent;\n  border-bottom: 1px solid #b9a26a;\n  width: 100%;\n  padding-left: 1rem;\n  outline: none; }\n\ntextarea {\n  border: 1px solid #b9a26a;\n  background-color: transparent;\n  outline: none;\n  width: 100%;\n  height: 150px;\n  padding: 1rem;\n  overflow: hidden; }\n\n.form_box .row {\n  padding-top: 2rem;\n  padding-bottom: 2rem; }\n\n.field {\n  height: 80px; }\n\n.error {\n  color: red;\n  padding-top: 0.2rem;\n  font-size: 0.6rem; }\n\n/*\r\ninput.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched{\r\n\tborder-bottom: 1px solid red;\r\n}*/\n\n.call-to-action, .call-to-action > * {\n  z-index: 50; }\n\nli {\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n  width: 25px;\n  height: 25px; }\n\n.list-inline-item > * {\n  color: white;\n  background-color: #b9a26a;\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.separator {\n  width: 60%;\n  height: 8px;\n  background-color: #b9a26a; }\n\n.socialNetworks {\n  margin-top: 2rem;\n  margin-bottom: 2rem; }\n\n.socialNetworks ul {\n    text-align: center; }\n\n#icon-calendar {\n  position: absolute;\n  top: -0.5rem;\n  right: 1rem; }\n\ninput::-webkit-input-placeholder {\n  color: black; }\n\ninput:-ms-input-placeholder {\n  color: black; }\n\ninput::-ms-input-placeholder {\n  color: black; }\n\ninput::placeholder {\n  color: black; }\n\ninput:-ms-input-placeholder {\n  color: black; }\n\n/* IE 10+ */\n\ninput::-webkit-input-placeholder {\n  color: black; }\n\n/* WebKit */\n\ninput::-moz-placeholder {\n  color: black; }\n\n/* Firefox 19+ */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-form/box-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mam_services__ = __webpack_require__("../../../../../src/client/app/@services/index.ts");

/*tslint:disable*/




var BoxFormComponent = /** @class */ (function () {
    function BoxFormComponent(fb, api, formService) {
        this.fb = fb;
        this.api = api;
        this.formService = formService;
        this.myForm = this.fb.group({
            nameAndLastName: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email])],
            phone: [""],
            SocialNetwork: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            dateWedding: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            locationChurch: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            locationReception: [""],
            numInvited: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].min(1)])],
            details: [""],
        });
    }
    BoxFormComponent.prototype.ngOnInit = function () {
    };
    BoxFormComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-box-form',
            template: __webpack_require__("../../../../../src/client/app/@components/boxes/box-form/box-form.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/boxes/box-form/box-form.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__mam_api__["b" /* ContactoApi */], __WEBPACK_IMPORTED_MODULE_4__mam_services__["b" /* FormService */]])
    ], BoxFormComponent);
    return BoxFormComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-form/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_form_component__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-form/box-form.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__box_form_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-historia/box-historia.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"historia-box\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<p>Paises</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-historia/box-historia.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".historia-box p {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-historia/box-historia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxHistoriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var BoxHistoriaComponent = /** @class */ (function () {
    function BoxHistoriaComponent() {
    }
    BoxHistoriaComponent.prototype.ngOnInit = function () {
    };
    BoxHistoriaComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-box-historia',
            template: __webpack_require__("../../../../../src/client/app/@components/boxes/box-historia/box-historia.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/boxes/box-historia/box-historia.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], BoxHistoriaComponent);
    return BoxHistoriaComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-historia/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_historia_component__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-historia/box-historia.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__box_historia_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-menu/box-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ghost-header\">\r\n\t<img src=\"assets/images/logo.png\" alt=\"\" class=\"logo\"/>\r\n\t<div class=\"links-box\">\r\n\t\t<div class=\"links link-effect-4 \">\r\n\t\t\t<h2 class=\"title_pop_up\">Portafolio</h2>\r\n\t\t\t<h2 class=\"title_pop_up\">Historias</h2>\r\n\t\t\t<h2 class=\"title_pop_up\">Miguel Angel Martinez</h2>\r\n\t\t\t<h2 class=\"title_pop_up\">Contacto</h2>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-menu/box-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ghost-header {\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden !important;\n  background-color: black;\n  position: relative;\n  z-index: 5; }\n  .ghost-header .links {\n    position: absolute;\n    top: 50%;\n    left: 30%;\n    -webkit-transform: translate(-30%, -50%);\n            transform: translate(-30%, -50%); }\n  .ghost-header h2 {\n    margin-bottom: 1.5rem;\n    margin-top: 1.5rem;\n    color: #a2a2a2;\n    margin-left: 3rem; }\n  .ghost-header .logo {\n    position: absolute;\n    top: 0.5rem;\n    left: 1rem;\n    z-index: 2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-menu/box-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var BoxMenuComponent = /** @class */ (function () {
    function BoxMenuComponent() {
        this.close = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
    }
    BoxMenuComponent.prototype.ngOnInit = function () {
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])('close'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */])
    ], BoxMenuComponent.prototype, "close", void 0);
    BoxMenuComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-box-menu',
            template: __webpack_require__("../../../../../src/client/app/@components/boxes/box-menu/box-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/boxes/box-menu/box-menu.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], BoxMenuComponent);
    return BoxMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-menu/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_menu_component__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-menu/box-menu.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__box_menu_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-miniatura/box-miniatura.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container miniatura-box\" style=\"display:none;\" #element>\r\n\t<div class=\"image_box\">\r\n\t\t<img [attr.src] =\"miniatura.image\" class=\"Image_Miniatura\"/>\r\n\t</div>\r\n\t<div class=\"text_box\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<span class=\"quote miniatura_content text-miniatura\" [innerHTML]=\"content\"></span>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<span class=\"quotes_autor miniatura_by_name text-miniatura\" font-uppercase [innerHTML]=\"author\"></span>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-miniatura/box-miniatura.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".miniatura-box {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 2; }\n\n.text_miniatura {\n  height: 100%; }\n\n.Image_Miniatura {\n  height: 100%;\n  width: auto; }\n\n.miniatura_content {\n  text-align: left;\n  margin-bottom: 1rem;\n  color: #a2a2a2; }\n\n.text-miniatura {\n  padding-left: 1rem; }\n\n.miniatura_by_name {\n  margin-top: 0;\n  text-align: left;\n  color: white; }\n\n.image_box {\n  float: left;\n  height: 100px;\n  width: 100px;\n  overflow: hidden; }\n\n.text_box {\n  padding-left: 20%; }\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  .image_box {\n    display: none; }\n  .text_box {\n    padding-left: 0;\n    padding-top: 2rem; }\n  .miniatura_by_name {\n    color: black;\n    text-align: center; }\n  .text-miniatura {\n    text-align: center;\n    width: 100%;\n    padding-left: 0rem; } }\n\n@media only screen and (min-width: 375px) and (max-width: 425px) {\n  .image_box {\n    display: none; }\n  .text_box {\n    padding-left: 0;\n    padding-top: 2rem; }\n  .miniatura_by_name {\n    color: black;\n    text-align: center; }\n  .text-miniatura {\n    text-align: center;\n    width: 100%;\n    padding-left: 0rem; } }\n\n@media only screen and (min-width: 425px) and (max-width: 768px) {\n  .image_box {\n    display: none; }\n  .text_box {\n    padding-left: 0;\n    padding-top: 2rem; }\n  .miniatura_by_name {\n    color: black;\n    text-align: center; }\n  .text-miniatura {\n    text-align: center;\n    width: 100%;\n    padding-left: 0rem; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .image_box {\n    display: none; }\n  .text_box {\n    padding-left: 0;\n    padding-top: 2rem; }\n  .miniatura_by_name {\n    color: black;\n    text-align: center; }\n  .text-miniatura {\n    text-align: center;\n    width: 100%;\n    padding-left: 0rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-miniatura/box-miniatura.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxMiniaturaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/*tslint:disable*/



var BoxMiniaturaComponent = /** @class */ (function () {
    function BoxMiniaturaComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.state = 'hidden';
    }
    /**
     * Events
     */
    BoxMiniaturaComponent.prototype.ngOnInit = function () {
        this.content = this.sanitizer(this.miniatura.content);
        this.author = this.sanitizer(this.miniatura.author);
    };
    BoxMiniaturaComponent.prototype.ngOnChanges = function () {
        var self = this;
        if (this.state === 'hidden')
            $(this.element.nativeElement).fadeIn(500, function () { self.state = 'visible'; });
        else {
            $(this.element.nativeElement)
                .fadeOut(250, function () { self.state = 'hidden'; })
                .fadeIn(250, function () { self.state = 'visible'; });
        }
    };
    BoxMiniaturaComponent.prototype.sanitizer = function (value) {
        return this.domSanitizer.bypassSecurityTrustHtml(value);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('miniatura'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Object)
    ], BoxMiniaturaComponent.prototype, "miniatura", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('element'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], BoxMiniaturaComponent.prototype, "element", void 0);
    BoxMiniaturaComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-box-miniatura',
            template: __webpack_require__("../../../../../src/client/app/@components/boxes/box-miniatura/box-miniatura.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/boxes/box-miniatura/box-miniatura.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], BoxMiniaturaComponent);
    return BoxMiniaturaComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-miniatura/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_miniatura_component__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-miniatura/box-miniatura.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__box_miniatura_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-preguntas/box-preguntas.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6\">\r\n\t\t\t<div class=\"preguntas\">\r\n\t\t\t\t<h5>Titulo de la pregunta</h5>\r\n\t\t\t\t<p>respuesta a pregunta</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6\">\r\n\t\t\t<div class=\"preguntas\">\r\n\t\t\t\t<h5>Titulo de la pregunta</h5>\r\n\t\t\t\t<p>respuesta a pregunta</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>-->\r\n<div class=\"preguntas\">\r\n\t<h5 class=\"subtitle3\">{{pregunta.question}}</h5>\r\n\t<p class=\"content\">{{pregunta.answer}}</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-preguntas/box-preguntas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-preguntas/box-preguntas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxPreguntasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var BoxPreguntasComponent = /** @class */ (function () {
    function BoxPreguntasComponent() {
    }
    BoxPreguntasComponent.prototype.ngOnInit = function () {
        console.log(this.pregunta);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])("question"),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Object)
    ], BoxPreguntasComponent.prototype, "pregunta", void 0);
    BoxPreguntasComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-box-preguntas',
            template: __webpack_require__("../../../../../src/client/app/@components/boxes/box-preguntas/box-preguntas.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/boxes/box-preguntas/box-preguntas.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], BoxPreguntasComponent);
    return BoxPreguntasComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-preguntas/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_preguntas_component__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-preguntas/box-preguntas.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__box_preguntas_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-testimonio/box-testimonio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"testimonio-box\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<p class=\"testimonio-info\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\t\t\t</div>\t\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<p id=\"autor-testimonio\">Autor</p>\r\n\t\t\t\t<img src=\"assets/images/foto-01.png\"/>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-testimonio/box-testimonio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".testimonio-box img {\n  height: auto;\n  width: 200px;\n  margin: 0 auto;\n  display: block; }\n\n.testimonio-box #autor-testimonio {\n  text-align: center; }\n\n.testimonio-box .testimonio-info {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-testimonio/box-testimonio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxTestimonioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var BoxTestimonioComponent = /** @class */ (function () {
    function BoxTestimonioComponent() {
    }
    BoxTestimonioComponent.prototype.ngOnInit = function () {
    };
    BoxTestimonioComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-box-testimonio',
            template: __webpack_require__("../../../../../src/client/app/@components/boxes/box-testimonio/box-testimonio.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/boxes/box-testimonio/box-testimonio.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], BoxTestimonioComponent);
    return BoxTestimonioComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/box-testimonio/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_testimonio_component__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-testimonio/box-testimonio.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__box_testimonio_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/boxes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__box_miniatura__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-miniatura/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__box_menu__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-menu/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__box_bio__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-bio/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__box_preguntas__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-preguntas/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__box_form__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-form/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__box_testimonio__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-testimonio/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__box_historia__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-historia/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__box_agradecimiento__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-agradecimiento/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__box_collage__ = __webpack_require__("../../../../../src/client/app/@components/boxes/box-collage/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");

/**
 * Global imports
 */




//import { MatMomentDateModule } from '@angular/material/core';
/**
 * Local imports
 */











var BoxesModule = /** @class */ (function () {
    function BoxesModule() {
    }
    BoxesModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                //Angular material
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["F" /* MatTooltipModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__box_miniatura__["a" /* BoxMiniaturaComponent */],
                __WEBPACK_IMPORTED_MODULE_6__box_menu__["a" /* BoxMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__box_bio__["a" /* BoxBioComponent */],
                __WEBPACK_IMPORTED_MODULE_8__box_preguntas__["a" /* BoxPreguntasComponent */],
                __WEBPACK_IMPORTED_MODULE_9__box_form__["a" /* BoxFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__box_testimonio__["a" /* BoxTestimonioComponent */],
                __WEBPACK_IMPORTED_MODULE_11__box_historia__["a" /* BoxHistoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__box_agradecimiento__["a" /* BoxAgradecimientoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__box_collage__["a" /* BoxCollageComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__box_miniatura__["a" /* BoxMiniaturaComponent */],
                __WEBPACK_IMPORTED_MODULE_6__box_menu__["a" /* BoxMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__box_bio__["a" /* BoxBioComponent */],
                __WEBPACK_IMPORTED_MODULE_8__box_preguntas__["a" /* BoxPreguntasComponent */],
                __WEBPACK_IMPORTED_MODULE_9__box_form__["a" /* BoxFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__box_testimonio__["a" /* BoxTestimonioComponent */],
                __WEBPACK_IMPORTED_MODULE_11__box_historia__["a" /* BoxHistoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__box_agradecimiento__["a" /* BoxAgradecimientoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__box_collage__["a" /* BoxCollageComponent */],
                //Angular material
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["F" /* MatTooltipModule */],
            ],
        })
    ], BoxesModule);
    return BoxesModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/boxes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boxes_module__ = __webpack_require__("../../../../../src/client/app/@components/boxes/boxes.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__boxes_module__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n\t<!--<div class=\"separator\"></div>-->\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\r\n\t\t\t\t<h4 class=\"title\" font-uppercase>Inicia tu propia historia</h4>\r\n\t\t\t\t<p class=\"content\" [innerHTML] = \"parseDescription\"></p>\r\n\t\t\t\t<div class=\"call-to-action\">\r\n\t\t\t\t\t<a  class=\"btn-CTA\" (click)=\"CTA.contacto()\">\r\n\t\t\t\t\t\t<svg>\r\n\t\t\t\t\t\t\t<rect x=\"0\" y=\"0\" fill=\"none\" width=\"100%\" height=\"100%\"></rect>\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t<span class=\"buttonCTA\">Contactame</span> \r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"socialNetworks\">\r\n\t\t\t\t\t<ul class=\"list-inline\">\r\n\t\t\t\t\t\t<li class=\"list-inline-item \"><a target=\"_blank\" href=\"https://www.instagram.com/mamfotografo/\" data-wipe><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\r\n\t\t\t\t\t\t<li class=\"list-inline-item \"><a target=\"_blank\" href=\"https://wwww.facebook.com/mamfotografo/\" data-wipe><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\r\n\t\t\t\t\t\t<li class=\"list-inline-item \"><a target=\"_blank\" href=\"https://twitter.com/mamfotografo/\" data-wipe><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"by-made \">\r\n\t\t<a href=\"https://www.behance.net/erikamarcialm\" class=\"btn-special\">\r\n\t\t\t<svg>\r\n\t\t\t\t<rect x=\"0\" y=\"0\" fill=\"none\" width=\"100%\" height=\"100%\"></rect>\r\n\t\t\t</svg>\r\n\t\t\t<span class=\"by_name\">Handmade with ❤ Erika Marcial & Company</span> \r\n\t\t</a>\r\n\t</div>\r\n</div>\t\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  clear: both; }\n  .footer h4 {\n    text-align: center;\n    margin-top: 4rem;\n    margin-bottom: 2rem;\n    text-transform: uppercase; }\n  .footer p {\n    text-align: center;\n    margin-bottom: 2rem; }\n  .footer li {\n    margin-right: 0.5rem;\n    margin-left: 0.5rem;\n    width: 25px;\n    height: 25px; }\n  .footer .list-inline-item > * {\n    color: white;\n    background-color: #b9a26a;\n    width: 100%;\n    height: 100%;\n    display: block; }\n  .footer .separator {\n    width: 60%;\n    height: 8px;\n    background-color: #b9a26a; }\n  .footer .sociaNetworks {\n    margin-top: 2rem;\n    margin-bottom: 2rem; }\n  .footer .sociaNetworks ul {\n      text-align: center; }\n  .footer button {\n    display: block;\n    margin: 0 auto; }\n  .by-made {\n  float: right;\n  margin-right: 2rem;\n  margin-top: 0.5rem; }\n  .by-made .btn-special {\n    color: #b9a26a;\n    cursor: pointer;\n    display: block;\n    margin: 0 auto;\n    position: relative;\n    text-decoration: none;\n    vertical-align: middle;\n    width: 100%;\n    background: none;\n    border-color: transparent;\n    min-width: 280px;\n    min-height: 48px; }\n  .by-made .btn-special-nohover {\n    color: #b9a26a;\n    cursor: pointer;\n    display: block;\n    margin: 0 auto;\n    position: relative;\n    text-decoration: none;\n    vertical-align: middle;\n    width: 100%;\n    background: none;\n    border-color: transparent;\n    min-width: 280px;\n    min-height: 48px; }\n  .by-made .btn-special-nohover svg {\n    height: 48px;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .by-made .btn-special svg {\n    height: 48px;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .by-made .btn-special-nohover rect {\n    fill: none;\n    stroke: #b9a26a;\n    stroke-width: 2;\n    stroke-dasharray: 403, 0;\n    -webkit-transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);\n    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1); }\n  .by-made .btn-special rect {\n    fill: none;\n    stroke: #b9a26a;\n    stroke-width: 2;\n    stroke-dasharray: 403, 0;\n    -webkit-transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);\n    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1); }\n  .by-made .btn-special:hover {\n    background: rgba(255, 255, 255, 0);\n    font-weight: 800; }\n  .by-made .btn-special:hover rect {\n    stroke-width: 5;\n    stroke-dasharray: 15, 487;\n    stroke-dashoffset: 48; }\n  .by-made span {\n    position: absolute;\n    top: 50%;\n    text-align: center;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n    width: 100%; }\n  .no-pointer {\n  cursor: default !important; }\n  .no-pointer a {\n    cursor: default !important; }\n  .no-pointer a svg {\n      cursor: default !important; }\n  .no-pointer a span {\n      cursor: default !important; }\n  .socialNetworks {\n  margin-top: 2rem; }\n  .socialNetworks ul {\n    text-align: center; }\n  @media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .by-made {\n    float: none;\n    margin-right: 0rem;\n    margin-top: 0.5rem;\n    max-width: 280px;\n    margin: 0 auto;\n    display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_services__ = __webpack_require__("../../../../../src/client/app/@services/index.ts");

/*tslint:disable*/



var FooterComponent = /** @class */ (function () {
    function FooterComponent(CTA, elementRef, domSanitizer, changeDetector) {
        this.CTA = CTA;
        this.elementRef = elementRef;
        this.domSanitizer = domSanitizer;
        this.changeDetector = changeDetector;
    }
    FooterComponent.prototype.ngOnInit = function () {
        //this.parseDescription = this.parse(this.description);
    };
    FooterComponent.prototype.ngAfterViewInit = function () {
        this.changeDetector.detectChanges();
    };
    FooterComponent.prototype.parse = function (value) {
        return this.domSanitizer.bypassSecurityTrustHtml(value);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('description'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", String)
    ], FooterComponent.prototype, "description", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('parseDescription'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Object)
    ], FooterComponent.prototype, "parseDescription", void 0);
    FooterComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-footer',
            template: __webpack_require__("../../../../../src/client/app/@components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/footer/footer.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__mam_services__["a" /* CTAService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/footer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__("../../../../../src/client/app/@components/footer/footer.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/header-sticky/header-sticky.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"stickybar\">\r\n\t<nav class=\"navbar\">\r\n\t  <div class=\"container-fluid\">\r\n\t    <div class=\"collapse navbar-collapse\" aria-expanded=\"false\" id=\"myNavbar\">\r\n\t      <div class=\"ghost-header\">\r\n\t\t\t\t<img src=\"assets/svg/mam-logo-white.svg\" alt=\"\" class=\"logo\" (click)=\"CTA.inicio()\" style=\"cursor:pointer;\"/>\r\n\t\t\t\t<div class=\"links link-effect-4\">\r\n\t\t\t\t\t<h2 class=\"menu_section\" > <span class=\"menu_section\" id=\"portafolio\" mouseable (click)=\"callback('portafolio')\"> Portafolio</span> </h2>\r\n\t\t\t\t\t<h2 class=\"menu_section\" > <span class=\"menu_section\" id=\"historias\" mouseable (click)=\"callback('historias')\"> Historias</span> </h2>\r\n\t\t\t\t\t<h2 class=\"menu_section\" > <span class=\"menu_section\" id=\"mam\" mouseable (click)=\"callback('mam')\"> Miguel Ángel Martínez</span> </h2>\r\n\t\t\t\t\t<h2 class=\"menu_section\" > <span class=\"menu_section\" id=\"contacto\" mouseable (click)=\"callback('contacto')\"> Contacto</span> </h2>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t    </div>\r\n\t  </div>\r\n\t</nav>\r\n\t<div class=\"lateral_bar\">\r\n\t\t<div class=\"relative\">\r\n\t\t\t<div class=\"menu_button\">\r\n\t\t\t\t<!--<i class=\"fa fa-bars navbar-toggle hamButton\" golden aria-hidden=\"true\" mouseable data-toggle=\"collapse\" data-target=\"#myNavbar\" (click)=\"greaterWidth()\"></i>-->\r\n\t\t\t\t<div class=\"burger-click-region\" golden aria-expanded=\"false\"  mouseable data-toggle=\"collapse\" data-target=\"#myNavbar\" (click)=\"greaterWidth();burgerEffect()\">\r\n\t\t\t\t\t\t<span class=\"burger-menu-piece\"></span>\r\n\t\t\t\t\t\t<span class=\"burger-menu-piece\"></span>\r\n\t\t\t\t\t\t<span class=\"burger-menu-piece\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"link-effect-2\">\r\n\t\t\t\t\t<p class=\"social_links social-instagram \" ><span id=\"instagram\" (click)=\"callRRSS('instagram')\" >Instagram</span></p> \r\n\t\t\t\t\t<p class=\"social_links social-facebook \" ><span id=\"facebook\" (click)=\"callRRSS('facebook')\">Facebook</span></p> \r\n\t\t\t\t\t<p class=\"social_links social-twitter \"  ><span id=\"twitter\" (click)=\"callRRSS('twitter')\">Twitter</span></p> \r\n\r\n\t\t\t</div>\t\r\n\t\t\t\r\n\t\t\t<div id=\"chat-image\" class=\"chat\" (click)=\"CTA.contacto('formulario-bodas')\" style=\"cursor:pointer;\">\r\n\t\t\t\t<img src=\"assets/svg/contact-black.svg\" alt=\"\" style=\"visibility:hidden;\"/>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!--Stycky bar mobile-->\r\n<div class=\"stickybar-mobile\">\r\n\t<nav class=\"navbar\">\r\n\t  <div class=\"container-fluid\">\r\n\t    <div class=\"collapse navbar-collapse\" aria-expanded=\"false\" id=\"myNavbarMobile\">\r\n\t      <div class=\"ghost-header\">\r\n\t\t\t\t<!--<img src=src=\"assets/svg/mam-logo-white.svg\" alt=\"\" class=\"logo\">-->\r\n\t\t\t\t<div class=\"links\">\r\n\t\t\t\t\t<h2 > <span class=\"menu_section\" mouseable (click)=\"callback('portafolio')\"> Portafolio</span> </h2>\r\n\t\t\t\t\t<h2 > <span class=\"menu_section\" mouseable (click)=\"callback('historias')\"> Historias</span> </h2>\r\n\t\t\t\t\t<h2 > <span class=\"menu_section\" mouseable (click)=\"callback('mam')\"> Miguel Ángel Martínez</span> </h2>\r\n\t\t\t\t\t<h2 > <span class=\"menu_section\" mouseable (click)=\"callback('contacto')\"> Contacto </span> </h2>\r\n\t\t\t\t\t<div class=\"socialNetworks\">\r\n\t\t\t\t\t\t<ul class=\"list-inline\">\r\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a target=\"_blank\" href=\"https://www.instagram.com/mamfotografo/\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\r\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a target=\"_blank\" href=\"https://wwww.facebook.com/mamfotografo/\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\r\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a target=\"_blank\" href=\"https://twitter.com/mamfotografo/\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t    </div>\r\n\t  </div>\r\n\t</nav>\r\n\t<div class=\"lateral_bar\">\r\n\t\t<div class=\"relative\">\r\n\t\t\t<div class=\"logo-mobile\" (click)=\"CTA.inicio()\" style=\"cursor:pointer;\">\r\n\t\t\t\t<img src=\"assets/svg/mam-logo-black.svg\" alt=\"\"/>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"chat mobile\" (click)=\"CTA.contacto()\" style=\"cursor:pointer;\">\r\n\t\t\t\t<img src=\"assets/svg/contact-black.svg\" alt=\"\"/>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"menu_button\">\r\n\t\t\t\t<div class=\"burger-click-region\" golden aria-expanded=\"false\"  mouseable data-toggle=\"collapse\" data-target=\"#myNavbarMobile\" (click)=\"greaterWidthMobile();burgerEffectMobile()\">\r\n\t\t\t\t\t\t<span class=\"burger-menu-piece\"></span>\r\n\t\t\t\t\t\t<span class=\"burger-menu-piece\"></span>\r\n\t\t\t\t\t\t<span class=\"burger-menu-piece\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/@components/header-sticky/header-sticky.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.stickybar {\n  height: 100vh;\n  width: 3.6vw;\n  background-color: transparent;\n  z-index: 100;\n  position: fixed;\n  right: 0;\n  top: 0; }\n.stickybar .menu_section {\n    white-space: nowrap;\n    line-height: 6.2rem; }\n.stickybar .container-fluid {\n    padding-left: 0 !important; }\n.stickybar .navbar {\n    padding: 0 !important; }\n.stickybar .ghost-header {\n    width: 100vw;\n    height: 100vh;\n    overflow-x: hidden !important;\n    background-color: black;\n    position: relative;\n    z-index: 5; }\n.stickybar .ghost-header .links {\n      position: absolute;\n      top: 50%;\n      left: 30%;\n      -webkit-transform: translate(-30%, -50%);\n              transform: translate(-30%, -50%);\n      /*span:hover{\r\n                color: #b9a26a !important;\r\n            }*/ }\n.stickybar .ghost-header h2 {\n      margin-bottom: 1.5rem;\n      margin-top: 1.5rem;\n      color: #a2a2a2;\n      margin-left: 3rem; }\n.stickybar .ghost-header .logo {\n      position: absolute;\n      top: 1.5rem;\n      left: 1.5rem;\n      z-index: 2;\n      height: 40px;\n      width: auto; }\n.stickybar .lateral_bar {\n    width: 3.6vw;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    background-color: white;\n    top: 0rem;\n    z-index: 10; }\n.stickybar .lateral_bar i {\n      font-size: 2rem; }\n.stickybar .lateral_bar .relative {\n      height: 100%;\n      width: 100%;\n      position: relative; }\n.stickybar .lateral_bar .social_links {\n      display: block;\n      /*transform: rotate(90deg);*/\n      color: black;\n      -webkit-writing-mode: vertical-lr;\n          -ms-writing-mode: tb-lr;\n              writing-mode: vertical-lr;\n      position: absolute;\n      top: 50%;\n      right: 5%;\n      text-align: right; }\n.stickybar .lateral_bar .social-instagram {\n      top: 30%; }\n.stickybar .lateral_bar .social-facebook {\n      top: 45%; }\n.stickybar .lateral_bar .social-twitter {\n      top: 60%; }\n.stickybar .lateral_bar .chat {\n      text-align: center;\n      position: absolute;\n      bottom: 9%;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n.stickybar .lateral_bar .chat img {\n        height: 30px;\n        width: auto; }\n.stickybar .lateral_bar .menu_button {\n      color: white;\n      text-align: center;\n      position: absolute;\n      top: 5%;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n.stickybar .lateral_bar.dark-theme {\n    background-color: transparent; }\n.stickybar .lateral_bar.dark-theme .social_links {\n      color: white; }\n.stickybar .lateral_bar.dark-theme .link-effect-2 {\n      color: white !important; }\n#chat-image {\n  background-image: url(\"/assets/svg/contact-black.svg\"); }\n#chat-image:hover {\n  background-image: url(\"/assets/svg/speech-bubble-hover.svg\"); }\n.link-effect-4 span {\n  position: relative; }\n.link-effect-4 span::before {\n    position: absolute;\n    left: 0;\n    overflow: hidden;\n    max-height: 0;\n    color: #b9a26a;\n    line-height: 6.2rem;\n    -webkit-transition: max-height 0.5s;\n    transition: max-height 0.5s; }\n.link-effect-4 span#portafolio::before {\n    content: \"Portafolio\"; }\n.link-effect-4 span#mam::before {\n    content: \"Miguel \\C1ngel Mart\\EDnez\"; }\n.link-effect-4 span#historias::before {\n    content: \"Historias\"; }\n.link-effect-4 span#contacto::before {\n    content: \"Contacto\"; }\n.link-effect-4 span:hover::before {\n    max-height: 100%; }\n.link-effect-2 {\n  overflow: hidden; }\n.link-effect-2 p {\n    overflow: hidden;\n    /* padding: 20px;\r\n            height: 1em;*/\n    color: black;\n    font-weight: 400; }\n.link-effect-2 p span {\n      position: relative;\n      display: inline-block;\n      -webkit-transition: 0.3s;\n      transition: 0.3s;\n      -webkit-writing-mode: vertical-lr;\n          -ms-writing-mode: tb-lr;\n              writing-mode: vertical-lr;\n      cursor: pointer; }\n.link-effect-2 p span::before {\n        color: #b9a26a;\n        position: absolute;\n        top: 100%;\n        font-weight: 800;\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0); }\n.link-effect-2 p span#instagram::before {\n        content: \"Instagram\"; }\n.link-effect-2 p span#facebook::before {\n        content: \"Facebook\"; }\n.link-effect-2 p span#twitter::before {\n        content: \"Twitter\"; }\n.link-effect-2 p:hover span {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); }\n.burger-click-region {\n  width: 30px;\n  height: 30px; }\n.burger-menu-piece {\n  display: block;\n  position: absolute;\n  width: 30px;\n  border-top: 2px solid #000000;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -webkit-transition: -webkit-transform 400ms ease-out;\n  transition: -webkit-transform 400ms ease-out;\n  transition: transform 400ms ease-out;\n  transition: transform 400ms ease-out, -webkit-transform 400ms ease-out; }\n.burger-menu-piece:nth-child(1) {\n    top: 0; }\n.burger-menu-piece:nth-child(2) {\n    top: 12px;\n    opacity: 1;\n    -webkit-transition: opacity 0ms linear 200ms, -webkit-transform 400ms ease-out;\n    transition: opacity 0ms linear 200ms, -webkit-transform 400ms ease-out;\n    transition: transform 400ms ease-out, opacity 0ms linear 200ms;\n    transition: transform 400ms ease-out, opacity 0ms linear 200ms, -webkit-transform 400ms ease-out; }\n.burger-menu-piece:nth-child(3) {\n    top: 24px; }\n.active .burger-menu-piece:nth-child(1) {\n    -webkit-animation: burger-open-top 400ms ease-out forwards;\n            animation: burger-open-top 400ms ease-out forwards;\n    border-top: 2px solid #b9a26a; }\n.active .burger-menu-piece:nth-child(2) {\n    opacity: 0;\n    -webkit-transition: opacity 0ms linear 200ms, -webkit-transform 400ms ease-out;\n    transition: opacity 0ms linear 200ms, -webkit-transform 400ms ease-out;\n    transition: transform 400ms ease-out, opacity 0ms linear 200ms;\n    transition: transform 400ms ease-out, opacity 0ms linear 200ms, -webkit-transform 400ms ease-out; }\n.active .burger-menu-piece:nth-child(3) {\n    -webkit-animation: burger-open-bot 400ms ease-out forwards;\n            animation: burger-open-bot 400ms ease-out forwards;\n    border-top: 2px solid  #ffffff; }\n.closing .burger-menu-piece:nth-child(1) {\n    -webkit-animation: burger-close-top 400ms ease-out forwards;\n            animation: burger-close-top 400ms ease-out forwards; }\n.closing .burger-menu-piece:nth-child(3) {\n    -webkit-animation: burger-close-bot 400ms ease-out forwards;\n            animation: burger-close-bot 400ms ease-out forwards; }\n@-webkit-keyframes burger-open-top {\n  50% {\n    -webkit-transform: translate3d(0, 12px, 0);\n            transform: translate3d(0, 12px, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 12px, 0) rotate(45deg);\n            transform: translate3d(0, 12px, 0) rotate(45deg); } }\n@keyframes burger-open-top {\n  50% {\n    -webkit-transform: translate3d(0, 12px, 0);\n            transform: translate3d(0, 12px, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 12px, 0) rotate(45deg);\n            transform: translate3d(0, 12px, 0) rotate(45deg); } }\n@-webkit-keyframes burger-open-bot {\n  50% {\n    -webkit-transform: translate3d(0, -12px, 0);\n            transform: translate3d(0, -12px, 0); }\n  100% {\n    -webkit-transform: translate3d(0, -12px, 0) rotate(-45deg);\n            transform: translate3d(0, -12px, 0) rotate(-45deg); } }\n@keyframes burger-open-bot {\n  50% {\n    -webkit-transform: translate3d(0, -12px, 0);\n            transform: translate3d(0, -12px, 0); }\n  100% {\n    -webkit-transform: translate3d(0, -12px, 0) rotate(-45deg);\n            transform: translate3d(0, -12px, 0) rotate(-45deg); } }\n@-webkit-keyframes burger-close-top {\n  0% {\n    -webkit-transform: translate3d(0, 12px, 0) rotate(45deg);\n            transform: translate3d(0, 12px, 0) rotate(45deg); }\n  50% {\n    -webkit-transform: translate3d(0, 12px, 0) rotate(0deg);\n            transform: translate3d(0, 12px, 0) rotate(0deg); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n@keyframes burger-close-top {\n  0% {\n    -webkit-transform: translate3d(0, 12px, 0) rotate(45deg);\n            transform: translate3d(0, 12px, 0) rotate(45deg); }\n  50% {\n    -webkit-transform: translate3d(0, 12px, 0) rotate(0deg);\n            transform: translate3d(0, 12px, 0) rotate(0deg); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n@-webkit-keyframes burger-close-bot {\n  0% {\n    -webkit-transform: translate3d(0, -12px, 0) rotate(-45deg);\n            transform: translate3d(0, -12px, 0) rotate(-45deg); }\n  50% {\n    -webkit-transform: translate3d(0, -12px, 0) rotate(0deg);\n            transform: translate3d(0, -12px, 0) rotate(0deg); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n@keyframes burger-close-bot {\n  0% {\n    -webkit-transform: translate3d(0, -12px, 0) rotate(-45deg);\n            transform: translate3d(0, -12px, 0) rotate(-45deg); }\n  50% {\n    -webkit-transform: translate3d(0, -12px, 0) rotate(0deg);\n            transform: translate3d(0, -12px, 0) rotate(0deg); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n.stickybar-mobile {\n  height: 8vh;\n  width: 100vw;\n  background-color: white;\n  z-index: 100;\n  position: fixed;\n  right: 0;\n  top: 0;\n  left: 0; }\n.stickybar-mobile .container-fluid {\n    padding-left: 0 !important;\n    height: inherit;\n    width: inherit; }\n.stickybar-mobile .navbar {\n    padding: 0 !important;\n    height: inherit;\n    width: inherit; }\n.stickybar-mobile .ghost-header {\n    width: 100vw;\n    height: 100vh;\n    overflow-x: hidden !important;\n    background-color: black;\n    position: relative;\n    z-index: 5; }\n.stickybar-mobile .ghost-header .links {\n      position: absolute;\n      top: 50%;\n      left: 30%;\n      -webkit-transform: translate(-30%, -50%);\n              transform: translate(-30%, -50%);\n      width: 100%; }\n.stickybar-mobile .ghost-header .links span:hover {\n        color: #b9a26a !important; }\n.stickybar-mobile .ghost-header .links .socialNetworks {\n        width: 100%;\n        height: 50px;\n        margin-top: 2rem; }\n.stickybar-mobile .ghost-header .links .list-inline {\n        position: absolute;\n        left: 50%;\n        -webkit-transform: translate(-50%, 0);\n                transform: translate(-50%, 0); }\n.stickybar-mobile .ghost-header .links .list-inline-item {\n        width: 40px;\n        height: 40px;\n        background-color: #b9a26a;\n        text-align: center; }\n.stickybar-mobile .ghost-header .links .list-inline-item a {\n          color: white;\n          line-height: 2.5rem;\n          font-size: 1.5rem; }\n.stickybar-mobile .ghost-header h2 {\n      width: 100%;\n      text-align: center;\n      color: #a2a2a2;\n      padding-left: 1.5rem;\n      padding-right: 1.5rem; }\n.stickybar-mobile .ghost-header .logo {\n      position: absolute;\n      top: 1.5rem;\n      left: 1.5rem;\n      z-index: 2;\n      height: 40px;\n      width: auto; }\n.stickybar-mobile .lateral_bar {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    right: 0rem;\n    top: 0rem;\n    z-index: 10; }\n.stickybar-mobile .lateral_bar .chat {\n      color: white;\n      text-align: center;\n      position: absolute;\n      right: 4.5rem;\n      top: 0.7rem; }\n.stickybar-mobile .lateral_bar .chat img {\n        height: 30px;\n        width: auto; }\n.stickybar-mobile .lateral_bar .menu_button {\n      color: white;\n      text-align: center;\n      position: absolute;\n      top: 0.7rem;\n      right: 1.5rem; }\n.stickybar-mobile .lateral_bar .logo-mobile {\n      color: black;\n      text-align: center;\n      position: absolute;\n      top: 0.7rem;\n      left: 2rem; }\n.stickybar-mobile .lateral_bar .logo-mobile img {\n        height: 30px;\n        width: auto; }\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  .stickybar {\n    display: none; }\n  .styckybar-mobile {\n    display: block; }\n  .lateral_bar {\n    background-color: transparent; } }\n@media only screen and (min-width: 375px) and (max-width: 425px) {\n  .stickybar {\n    display: none; }\n  .styckybar-mobile {\n    display: block; }\n  .lateral_bar {\n    background-color: transparent; } }\n@media only screen and (min-width: 425px) and (max-width: 768px) {\n  .stickybar {\n    display: none; }\n  .styckybar-mobile {\n    display: block; }\n  .lateral_bar {\n    background-color: transparent; } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .stickybar {\n    display: none; }\n  .styckybar-mobile {\n    display: block; }\n  .lateral_bar {\n    background-color: transparent; } }\n@media only screen and (min-width: 1024px) {\n  .stickybar {\n    display: block; }\n  .stickybar-mobile {\n    display: none !important; } }\n@media only screen and (min-width: 1024px) and (max-width: 1250px) {\n  .stickybar {\n    width: 6vw; }\n    .stickybar .lateral_bar {\n      width: 6vw; } }\n@media only screen and (min-width: 1250px) and (max-width: 1440px) {\n  .stickybar {\n    width: 5vw; }\n    .stickybar .lateral_bar {\n      width: 5vw; } }\n@media only screen and (min-width: 1440px) {\n  .stickybar {\n    width: 4vw; }\n    .stickybar .lateral_bar {\n      width: 4vw; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/header-sticky/header-sticky.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderStickyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_services__ = __webpack_require__("../../../../../src/client/app/@services/index.ts");

/*tslint:disable*/


/**
 * Local Imports
 * CTA Service
 */

var HeaderStickyComponent = /** @class */ (function () {
    function HeaderStickyComponent(CTA, router) {
        this.CTA = CTA;
        this.router = router;
        this.expanded = false;
        this.expandedMobile = false;
        /**
        * Ouput
        */
        this.onClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
    }
    HeaderStickyComponent.prototype.ngOnInit = function () {
        // this.CTA.contacto();
    };
    HeaderStickyComponent.prototype.callback = function (page) {
        if (page === 'portafolio')
            this.CTA.portafolio();
        else if (page === 'historias')
            this.CTA.historias();
        else if (page === 'mam')
            this.CTA.mam();
        else if (page === 'contacto')
            this.CTA.contacto();
        if ($(window).width() >= 1024) {
            $(".stickybar").find(".burger-click-region").click();
            this.greaterWidth();
            this.burgerEffect();
        }
        else {
            $(".stickybar-mobile").find(".burger-click-region").click();
            this.greaterWidthMobile();
            this.burgerEffectMobile();
        }
    };
    HeaderStickyComponent.prototype.onResize = function () {
        if ($(window).width() < 1024) {
            if (this.expanded) {
                if (!this.expandedMobile) {
                    //$(".stickybar-mobile").find(".burger-click-region").click();
                    //this.greaterWidthMobile();
                    //this.burgerEffectMobile();
                }
                $(".stickybar").find(".burger-click-region").click();
                this.greaterWidth();
                this.burgerEffect();
            }
        }
        else {
            if (this.expandedMobile) {
                if (!this.expanded) {
                    //$(".stickybar-mobile").find(".burger-click-region").click();
                    //this.greaterWidthMobile();
                    //this.burgerEffectMobile();				
                }
                $(".stickybar-mobile").find(".burger-click-region").click();
                this.greaterWidthMobile();
                this.burgerEffectMobile();
            }
        }
    };
    HeaderStickyComponent.prototype.greaterWidth = function () {
        if (!this.expanded) {
            $(".stickybar").css("width", "100vw");
            $("body").addClass("blockScroll");
            this.expanded = true;
            $(".stickybar").find(".lateral_bar").addClass("dark-theme");
            $(".chat").find("img").attr("src", "assets/svg/contact-on.svg");
        }
        else {
            this.expanded = false;
            setTimeout(function () {
                $(".stickybar").css("width", "3.6vw");
                $("body").removeClass("blockScroll");
                $(".stickybar").find(".lateral_bar").removeClass("dark-theme");
                $(".chat").find("img").attr("src", "assets/svg/contact-black.svg");
            }, 100);
        }
    };
    HeaderStickyComponent.prototype.greaterWidthMobile = function () {
        if (!this.expandedMobile) {
            $("body").addClass("blockScroll");
            this.expandedMobile = true;
            $(".chat.mobile").find("img").hide();
            $(".logo-mobile").find("img").attr("src", "assets/svg/mam-logo-white.svg");
        }
        else {
            this.expandedMobile = false;
            setTimeout(function () {
                $("body").removeClass("blockScroll");
                $(".chat.mobile").find("img").show();
                $(".logo-mobile").find("img").attr("src", "assets/svg/mam-logo-black.svg");
            }, 200);
        }
    };
    HeaderStickyComponent.prototype.callRRSS = function (socialNetwork) {
        if (socialNetwork == "instagram")
            window.open("https://www.instagram.com/mamfotografo/", "_blank");
        else if (socialNetwork == "facebook")
            window.open("https://wwww.facebook.com/mamfotografo/", "_blank");
        else
            window.open("https://twitter.com/mamfotografo/", "_blank");
    };
    HeaderStickyComponent.prototype.burgerEffect = function () {
        var clickDelay = 500, clickDelayTimer = null;
        if (clickDelayTimer === null) {
            var $burger = $(".stickybar").find(".burger-click-region");
            if ($burger.hasClass('active')) {
                $burger.addClass('closing');
                $burger.removeClass('active');
            }
            else {
                $burger.addClass('active');
            }
            clickDelayTimer = setTimeout(function () {
                $burger.removeClass('closing');
                clearTimeout(clickDelayTimer);
                clickDelayTimer = null;
            }, clickDelay);
        }
    };
    HeaderStickyComponent.prototype.burgerEffectMobile = function () {
        var clickDelay = 500, clickDelayTimer = null;
        if (clickDelayTimer === null) {
            var $burger = $(".stickybar-mobile").find(".burger-click-region");
            if ($burger.hasClass('active')) {
                $burger.addClass('closing');
                $burger.removeClass('active');
            }
            else {
                $burger.addClass('active');
            }
            clickDelayTimer = setTimeout(function () {
                $burger.removeClass('closing');
                clearTimeout(clickDelayTimer);
                clickDelayTimer = null;
            }, clickDelay);
        }
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */])
    ], HeaderStickyComponent.prototype, "onClick", void 0);
    HeaderStickyComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-header-sticky',
            template: __webpack_require__("../../../../../src/client/app/@components/header-sticky/header-sticky.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/header-sticky/header-sticky.component.scss")],
            host: {
                '(window:resize)': 'onResize()'
            },
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__mam_services__["a" /* CTAService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeaderStickyComponent);
    return HeaderStickyComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/header-sticky/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_sticky_component__ = __webpack_require__("../../../../../src/client/app/@components/header-sticky/header-sticky.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_sticky_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div #carouselContainer></div>\r\n\r\n<div class=\"banner bannerHome\">\r\n\t<img src=\"assets/svg/mam-logo-white.svg\" alt=\"\" class=\"logo\" (click)=\"CTA.inicio()\">\r\n\t<div class=\"banner-content\" #carousel>\r\n\t\t<div class=\"image-container container-image\" *ngFor=\"let image of bannerImages;\" style=\"position: relative;\">\r\n\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t<img [attr.src]=\"image.image\" [attr.alt]=\"image.name\"/>\r\n\t\t\t<div *ngIf=\"!isPortafolio && !isMAM && !isContacto\" class=\"call-to-action-image\" >\r\n\t\t\t\t<a class=\"btn-CTA\" (click)=\"CTA.portafolio()\">\r\n\t\t\t\t\t<svg>\r\n\t\t\t\t\t\t<rect x=\"0\" y=\"0\" fill=\"none\" width=\"100%\" height=\"100%\"></rect>\r\n\t\t\t\t\t</svg>\r\n\t\t\t\t\t<span class=\"buttonCTA\" font-uppercase>Ver portafolio</span>\t\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"isPortafolio\" class=\"portafolio-title\">\r\n\t\t<h1>PORTAFOLIO</h1>\r\n\t</div>\r\n\t<div *ngIf=\"isMAM\" class=\"portafolio-title\">\r\n\t\t<h1>MIGUEL ÁNGEL MARTÍNEZ</h1>\r\n\t</div>\r\n\t<div *ngIf=\"isContacto\" class=\"portafolio-title\">\r\n\t\t<h1>CONTACTO</h1>\r\n\t</div>\r\n\r\n\t<div *ngIf=\"!isPortafolio && !isMAM && !isContacto\" class=\"box-miniatura\" #grid_Miniatura>\r\n\t\t<mam-box-miniatura [miniatura] = \"miniatura\" ></mam-box-miniatura>\r\n\t</div>\r\n\t<div *ngIf=\"!isPortafolio && !isMAM && !isContacto\" class=\"box-miniatura-mobile\" #grid_Miniatura>\r\n\t\t<mam-box-miniatura [miniatura] = \"miniatura\" ></mam-box-miniatura>\r\n\t</div>\r\n</div>\r\n<!--<div class=\"loader\"></div>-->\r\n<div class=\"loader\">\r\n\t<div class=\"loader1\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/@components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".call-to-action-image {\n  z-index: 10; }\n\n.banner {\n  width: 96.4vw;\n  height: calc(100vh - 10px);\n  overflow-x: hidden !important;\n  position: relative; }\n\n.banner .logo {\n    position: absolute;\n    top: 1.5rem;\n    left: 1.5rem;\n    z-index: 2;\n    height: 40px;\n    width: auto; }\n\n.banner .box-miniatura {\n    position: absolute;\n    width: 600px;\n    height: 150px;\n    z-index: 2;\n    bottom: 0.5rem;\n    left: 2rem; }\n\n.banner .banner-content {\n    position: relative;\n    width: inherit;\n    height: inherit;\n    overflow: hidden !important; }\n\n.banner .banner-content .image-container {\n      width: 96.4vw;\n      height: 100vh;\n      background-color: black;\n      text-align: center;\n      overflow-y: hidden;\n      position: relative; }\n\n.banner .banner-content .image-container img {\n        width: 96.4vw;\n        height: auto;\n        display: inline-block;\n        height: 100%;\n        object-fit: cover;\n        object-position: center;\n        -o-object-fit: cover;\n        -o-object-position: center; }\n\n.loader1 {\n  display: block;\n  position: absolute;\n  left: -100px;\n  width: 100px;\n  height: 10px;\n  background-color: #b9a26a; }\n\n.loader:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -100px;\n  width: 100px;\n  height: 10px;\n  background-color: #b9a26a; }\n\n@-webkit-keyframes loading {\n  /*from {left: -100px; width: 10%;}\r\n    20% {width: 20%;}\r\n    40% {width: 40%;}\r\n\t50% {width: 50%;}\r\n\t70% {width: 70%;}\r\n\t80% {left: 50%;}\r\n\t95% {left: 120%;}\r\n    to {left: 100%;}*/\n  0% {\n    width: 10%; }\n  100% {\n    width: 110%; } }\n\n@keyframes loading {\n  /*from {left: -100px; width: 10%;}\r\n    20% {width: 20%;}\r\n    40% {width: 40%;}\r\n\t50% {width: 50%;}\r\n\t70% {width: 70%;}\r\n\t80% {left: 50%;}\r\n\t95% {left: 120%;}\r\n    to {left: 100%;}*/\n  0% {\n    width: 10%; }\n  100% {\n    width: 110%; } }\n\n.logo:hover {\n  cursor: pointer; }\n\n.banner-content .image-container.container-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center; }\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .banner {\n    height: auto;\n    padding-top: 8vh; }\n    .banner .logo {\n      display: none; }\n  .banner-content {\n    height: 50vh !important; }\n    .banner-content .slick-list {\n      height: 100% !important; }\n    .banner-content .image-container {\n      height: 100% !important;\n      position: relative !important;\n      overflow: hidden !important; }\n  .box-miniatura {\n    display: none; }\n  .box-miniatura-mobile {\n    margin-bottom: 2rem; } }\n\n@media only screen and (min-width: 1024px) {\n  .box-miniatura-mobile {\n    display: none; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1200px) {\n  .banner {\n    height: 82vh; }\n  .banner-content {\n    height: 82vh !important; }\n    .banner-content .slick-list {\n      height: 100% !important; }\n    .banner-content .image-container {\n      height: 100% !important;\n      position: relative !important;\n      overflow: hidden !important; } }\n\n@media only screen and (min-width: 320px) and (max-width: 400px) {\n  .banner-content {\n    height: 25vh !important; } }\n\n@media only screen and (min-width: 400px) and (max-width: 475px) {\n  .banner-content {\n    height: 35vh !important; } }\n\n@media only screen and (min-width: 475px) and (max-width: 600px) {\n  .banner-content {\n    height: 40vh !important; } }\n\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .banner-content {\n    height: 50vh !important; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .banner-content {\n    height: 60vh !important; } }\n\n.portafolio-title {\n  position: absolute;\n  left: 50px;\n  bottom: 10px;\n  right: 0;\n  width: 100%; }\n\n.portafolio-title h1 {\n    margin: 0;\n    font-size: 6rem;\n    color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_services__ = __webpack_require__("../../../../../src/client/app/@services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ms_components__ = __webpack_require__("../../../../../src/client/@ms/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_slick_config__ = __webpack_require__("../../../../../src/client/app/@components/header/header.slick-config.ts");

/*tslint:disable*/
/**
 * Global imports
 */



/**
 * Local imports
 */


/**
* Entry point
*/
/*import { InstanceBoxMiniaturaComponent } from '@mam/instance-components';*/
/**
 * MAM Application header
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(CTA, router) {
        this.CTA = CTA;
        this.router = router;
        this.isPortafolio = false;
        this.isMAM = false;
        this.isContacto = false;
    }
    /**
     * Events
     */
    HeaderComponent.prototype.ngOnInit = function () {
        this.parse();
    };
    HeaderComponent.prototype.ngOnChanges = function () { };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        this.initSlickJS();
        this.animation();
    };
    HeaderComponent.prototype.animation = function () {
        var _this = this;
        this.$carousel.eventAfterChange.subscribe(function (data) {
            $(".loader1").stop();
            $(".loader1").width(100);
            //clearInterval(myVar);
            _this.animation();
        });
        $(".loader1").animate({ width: "110%" }, 5000, "linear", function () {
            $(".loader1").width(100);
            _this.$carousel.slideNext();
        });
        /*let myVar =setInterval( ()=>{
            $(".loader1").animate({ width: "110%" },5000,"linear",()=>{$(".loader1").width(100) });
            this.$carousel.slideNext();
        }, 4900);	*/
    };
    /**
     * Actions
     */
    HeaderComponent.prototype.initSlickJS = function () {
        var _this = this;
        this.$carousel = new __WEBPACK_IMPORTED_MODULE_4__ms_components__["a" /* SlickJS */]($(this.$carouselView.nativeElement), __WEBPACK_IMPORTED_MODULE_5__header_slick_config__["a" /* SETTINGS */]);
        this.$carousel.eventAfterChange.subscribe(function (event) {
            var slide = event.currentSlide.currentSlide;
            _this.miniatura = _this.miniaturas[slide];
        });
    };
    HeaderComponent.prototype.parse = function () {
        this.miniatura = this.miniaturas[0];
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('bannerImages'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Array)
    ], HeaderComponent.prototype, "bannerImages", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('miniaturas'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Array)
    ], HeaderComponent.prototype, "miniaturas", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('isPortafolio'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Boolean)
    ], HeaderComponent.prototype, "isPortafolio", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('isMAM'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Boolean)
    ], HeaderComponent.prototype, "isMAM", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('isContacto'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Boolean)
    ], HeaderComponent.prototype, "isContacto", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('carouselContainer', { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewContainerRef */] }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewContainerRef */])
    ], HeaderComponent.prototype, "carouselContainer", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('carousel'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], HeaderComponent.prototype, "$carouselView", void 0);
    HeaderComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-header',
            template: __webpack_require__("../../../../../src/client/app/@components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/header/header.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__mam_services__["a" /* CTAService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/header/header.slick-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SETTINGS; });
/**
 * SlickJS Settings
 */
var SETTINGS = {
    rows: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    dots: false,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
};


/***/ }),

/***/ "../../../../../src/client/app/@components/header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__("../../../../../src/client/app/@components/header/header.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_module__ = __webpack_require__("../../../../../src/client/app/@components/@components.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__components_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banners__ = __webpack_require__("../../../../../src/client/app/@components/banners/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__banners__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thumbnails__ = __webpack_require__("../../../../../src/client/app/@components/thumbnails/index.ts");
/* unused harmony reexport ThumbnailInstagramCarouselComponent */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__thumbnails__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header__ = __webpack_require__("../../../../../src/client/app/@components/header/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__header__["a"]; });
/*tslint:disable*/
/**
 * Export module
 */

//-- Export dynamic components





/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thumbnails_module__ = __webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnails.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__thumbnails_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thumbnail_instagram_carousel__ = __webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-instagram-carousel/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__thumbnail_instagram_carousel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thumbnail_block_image__ = __webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-block-image/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__thumbnail_block_image__["a"]; });
/**
 * Export module
 */

// Export dynamic components




/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/thumbnail-block-image/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thumbnail_block_image_component__ = __webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-block-image/thumbnail-block-image.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__thumbnail_block_image_component__["a"]; });
/**
 * Export component
 */



/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/thumbnail-block-image/thumbnail-block-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" component-wrapper>\r\n\t<div *ngFor=\"let resource of images; let i = index\" class=\"col-12 col-md-6\" col>\r\n\t\t<div image-wrapper>\r\n\t\t\t<div image-container>\r\n\t\t\t\t<img \r\n\t\t\t\t\t[attr.src]=\"resource.image\" \r\n\t\t\t\t\t[attr.alt]=\"resource.name\"\r\n\t\t\t\t\tclass=\"container-image\" [attr.data-index]=\"i\"\r\n\t\t\t\t\t(click)=\"showVelo(i)\" mouseable/>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<br>\r\n\t\t<div class=\"velo-image\" [attr.data-index]=\"i\" style=\"display:none;\" >\r\n\t\t\t<div class=\"velo\"></div>\r\n\t\t\t\r\n\t\t\t<div class=\"relative\">\r\n\t\t\t\t<div class=\"burger-click-region active velo-burger\" golden aria-hidden=\"true\" mouseable (click)=\"disposeVelo(i)\">\r\n\t\t\t\t\t<span class=\"burger-menu-piece\"></span>\r\n\t\t\t\t\t<span class=\"burger-menu-piece\"></span>\r\n\t\t\t\t\t<span class=\"burger-menu-piece\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<img \r\n\t\t\t\t\t[attr.src]=\"resource.image\" \r\n\t\t\t\t\t[attr.alt]=\"resource.name\"\r\n\t\t\t\t\tclass=\"full-image\">\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/thumbnail-block-image/thumbnail-block-image.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".velo {\n  height: 100vh;\n  width: 100vw;\n  background-color: gray;\n  opacity: 0.8;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute; }\n\n.velo-image {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 10000; }\n\n.velo-image .relative {\n    position: relative;\n    top: 0 !important;\n    width: 100%;\n    height: 100%; }\n\n.velo-image img {\n    max-width: 80%;\n    max-height: 95%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n[component-wrapper] {\n  height: initial !important;\n  max-height: initial !important;\n  margin-top: -4rem !important; }\n\n[component-wrapper] [image-wrapper] {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    height: 100% !important;\n    width: 100% !important;\n    display: table !important;\n    position: relative !important; }\n\n[component-wrapper] [image-wrapper] [image-container] {\n      display: table-cell;\n      vertical-align: middle;\n      text-align: center; }\n\n[component-wrapper] [image-wrapper] [image-container] img {\n        width: 80%; }\n\n.velo-burger {\n  position: absolute;\n  top: 1rem;\n  right: 1.5rem;\n  z-index: 50000; }\n\n.burger-click-region {\n  width: 30px;\n  height: 30px; }\n\n.burger-menu-piece {\n  display: block;\n  position: absolute;\n  width: 30px;\n  border-top: 2px solid #000000;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -webkit-transition: -webkit-transform 400ms ease-out;\n  transition: -webkit-transform 400ms ease-out;\n  transition: transform 400ms ease-out;\n  transition: transform 400ms ease-out, -webkit-transform 400ms ease-out; }\n\n.burger-menu-piece:nth-child(1) {\n    top: 0; }\n\n.burger-menu-piece:nth-child(2) {\n    top: 12px;\n    opacity: 1;\n    -webkit-transition: opacity 0ms linear 200ms, -webkit-transform 400ms ease-out;\n    transition: opacity 0ms linear 200ms, -webkit-transform 400ms ease-out;\n    transition: transform 400ms ease-out, opacity 0ms linear 200ms;\n    transition: transform 400ms ease-out, opacity 0ms linear 200ms, -webkit-transform 400ms ease-out; }\n\n.burger-menu-piece:nth-child(3) {\n    top: 24px; }\n\n.active .burger-menu-piece:nth-child(1) {\n    -webkit-animation: burger-open-top 400ms ease-out forwards;\n            animation: burger-open-top 400ms ease-out forwards;\n    border-top: 2px solid #b9a26a; }\n\n.active .burger-menu-piece:nth-child(2) {\n    opacity: 0;\n    -webkit-transition: opacity 0ms linear 200ms, -webkit-transform 400ms ease-out;\n    transition: opacity 0ms linear 200ms, -webkit-transform 400ms ease-out;\n    transition: transform 400ms ease-out, opacity 0ms linear 200ms;\n    transition: transform 400ms ease-out, opacity 0ms linear 200ms, -webkit-transform 400ms ease-out; }\n\n.active .burger-menu-piece:nth-child(3) {\n    -webkit-animation: burger-open-bot 400ms ease-out forwards;\n            animation: burger-open-bot 400ms ease-out forwards;\n    border-top: 2px solid  #ffffff; }\n\n.closing .burger-menu-piece:nth-child(1) {\n    -webkit-animation: burger-close-top 400ms ease-out forwards;\n            animation: burger-close-top 400ms ease-out forwards; }\n\n.closing .burger-menu-piece:nth-child(3) {\n    -webkit-animation: burger-close-bot 400ms ease-out forwards;\n            animation: burger-close-bot 400ms ease-out forwards; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/thumbnail-block-image/thumbnail-block-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailBlockImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Global imports
 */

/**
 * Component description
 */
var ThumbnailBlockImageComponent = /** @class */ (function () {
    function ThumbnailBlockImageComponent() {
    }
    ThumbnailBlockImageComponent.prototype.ngOnInit = function () {
    };
    ThumbnailBlockImageComponent.prototype.showVelo = function (index) {
        $("body").addClass("blockScroll");
        $(".velo-image[data-index=\"" + index + "\"]").fadeIn(600);
    };
    ThumbnailBlockImageComponent.prototype.disposeVelo = function (index) {
        $("body").removeClass("blockScroll");
        $(".velo-image[data-index=\"" + index + "\"]").fadeOut(600);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('images'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Array)
    ], ThumbnailBlockImageComponent.prototype, "images", void 0);
    ThumbnailBlockImageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-thumbnail-block-image',
            template: __webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-block-image/thumbnail-block-image.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-block-image/thumbnail-block-image.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], ThumbnailBlockImageComponent);
    return ThumbnailBlockImageComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/thumbnail-image/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thumbnail_image_component__ = __webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-image/thumbnail-image.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__thumbnail_image_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/thumbnail-image/thumbnail-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-image container-image-full\" *ngIf= \"thumb_Image.position == 'full'\" >\r\n\t<div class=\"not-overflow\">\r\n\t\t<div class=\"overlay\"></div>\r\n\t\t<img [attr.src]=\"thumb_Image.src\" [attr.alt]=\"thumb_Image.alt\"/>\r\n\t\t<div class=\"call-to-action-image\">\r\n\t\t\t<a class=\"btn-CTA\" (click)=\"onClick.emit(thumb_Image)\">\r\n\t\t\t\t<svg>\r\n\t\t\t\t\t<rect x=\"0\" y=\"0\" fill=\"none\" width=\"100%\" height=\"100%\"></rect>\r\n\t\t\t\t</svg>\r\n\t\t\t\t<div class=\"table-row\" >\r\n\t\t\t\t\t<span class=\"subtitle1\">{{ thumb_Image?.alt }}</span>\r\n\t\t\t\t </div>\r\n\t\t\t\t <div class=\"table-row\" >\r\n\t\t\t\t    <div class=\"table-cell\" >\r\n\t\t\t\t      <p class=\"tag\" >{{ thumb_Image?.place }}</p>\r\n\t\t\t\t    </div>\r\n\t\t\t\t</div>\t\t\t\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"info-thumbnail\">\r\n\t\t\t<span class=\"subtitle1\">{{ thumb_Image?.alt }}</span>\r\n\t\t\t<p class=\"tag\" >{{ thumb_Image?.place }}</p>\r\n\t\t</div>\t\r\n</div>\r\n\r\n<div class=\"thumbnail\" *ngIf= \"thumb_Image.position != 'full'\">\r\n\t<div class=\"not-overflow\">\r\n\t\t<div class=\"container-image-rigth\" *ngIf= \"thumb_Image.position == 'right'\">\r\n\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t<img [attr.src]=\"thumb_Image.src\" [attr.alt]=\"thumb_Image.alt\"/>\r\n\t\t\t<div class=\"call-to-action-image\">\r\n\t\t\t\t<a class=\"btn-CTA\" (click)=\"onClick.emit(thumb_Image)\">\r\n\t\t\t\t\t<svg>\r\n\t\t\t\t\t\t<rect x=\"0\" y=\"0\" fill=\"none\" width=\"100%\" height=\"100%\"></rect>\r\n\t\t\t\t\t</svg>\r\n\t\t\t\t\t<div class=\"table-row\" >\r\n\t\t\t\t\t\t<span class=\"subtitle1\">{{ thumb_Image?.alt }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"table-row\" >\r\n\t\t\t\t\t\t<div class=\"table-cell\" >\r\n\t\t\t\t\t\t    <p class=\"tag\" >{{ thumb_Image?.place }}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\r\n\t\t<div class=\"container-image-left\" *ngIf= \"thumb_Image.position == 'left'\">\r\n\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t<img [attr.src]=\"thumb_Image.src\" [attr.alt]=\"thumb_Image.alt\"/>\r\n\t\t\t<div class=\"call-to-action-image\">\r\n\t\t\t\t<a class=\"btn-CTA\" (click)=\"onClick.emit(thumb_Image)\">\r\n\t\t\t\t\t<svg>\r\n\t\t\t\t\t\t<rect x=\"0\" y=\"0\" fill=\"none\" width=\"100%\" height=\"100%\"></rect>\r\n\t\t\t\t\t</svg>\r\n\t\t\t\t\t<div class=\"table-row\" >\r\n\t\t\t\t\t\t<span class=\"subtitle1\">{{ thumb_Image?.alt }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"table-row\" >\r\n\t\t\t\t\t\t<div class=\"table-cell\" >\r\n\t\t\t\t\t\t  <p class=\"tag\" >{{ thumb_Image?.place }}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t</a>\r\n\t\t\t</div>\t\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"info-thumbnail\">\r\n\t\t<span class=\"subtitle1\">{{ thumb_Image?.alt }}</span>\r\n\t\t<p class=\"tag\" >{{ thumb_Image?.place }}</p>\r\n\t</div>\t\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/thumbnail-image/thumbnail-image.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-image-full {\n  width: 100%;\n  height: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  position: relative;\n  clear: both;\n  overflow: hidden; }\n\n.container-image-rigth {\n  width: 75%;\n  height: 100%;\n  float: right;\n  position: relative;\n  overflow: hidden; }\n\n.container-image-left {\n  width: 75%;\n  height: 100%;\n  float: left;\n  position: relative;\n  overflow: hidden; }\n\nimg {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: fill;\n     object-fit: fill;\n  /*position: absolute;*/ }\n\n.thumbnail {\n  margin: 1rem 0 1rem 0; }\n\na {\n  z-index: 2; }\n\n.not-overflow {\n  overflow: hidden !important;\n  position: relative; }\n\n.info-thumbnail {\n  padding-left: 1rem;\n  padding-top: 1rem; }\n\n.info-thumbnail p {\n    margin: 0; }\n\n.call-to-action-image {\n  z-index: 90; }\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  .container-image-full, .container-image-rigth, .container-image-left {\n    width: 100%; }\n  .call-to-action-image {\n    display: none; } }\n\n@media only screen and (min-width: 375px) and (max-width: 425px) {\n  .container-image-full, .container-image-rigth, .container-image-left {\n    width: 100%; }\n  .call-to-action-image {\n    display: none; } }\n\n@media only screen and (min-width: 425px) and (max-width: 768px) {\n  .container-image-full, .container-image-rigth, .container-image-left {\n    width: 100%; }\n  .call-to-action-image {\n    display: none; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .container-image-full, .container-image-rigth, .container-image-left {\n    width: 100%; }\n  .call-to-action-image {\n    display: none; } }\n\n@media only screen and (min-width: 1024px) {\n  .info-thumbnail {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/thumbnail-image/thumbnail-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var ThumbnailImageComponent = /** @class */ (function () {
    /*private getData():void{
      this.data = {
          color: this.thumb_Image.alt,
          title: this.thumb_Image.src,
          content: this.thumb_Image.position,
          button: "Ver respuesta"
      }
      
    }*/
    function ThumbnailImageComponent() {
        this.onClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
    }
    ThumbnailImageComponent.prototype.ngOnInit = function () {
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('thumb_Image'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Object)
    ], ThumbnailImageComponent.prototype, "thumb_Image", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])('onClick'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */])
    ], ThumbnailImageComponent.prototype, "onClick", void 0);
    ThumbnailImageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-thumbnail-image',
            template: __webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-image/thumbnail-image.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-image/thumbnail-image.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], ThumbnailImageComponent);
    return ThumbnailImageComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/thumbnail-instagram-carousel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thumbnail_instagram_carousel_component__ = __webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-instagram-carousel/thumbnail-instagram-carousel.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__thumbnail_instagram_carousel_component__["a"]; });
/**
 * Export component
 */



/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/thumbnail-instagram-carousel/thumbnail-instagram-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div element class=\"container-image instaImage\"  #wrapper (click)=\"click()\">\r\n\t<div element-wrapper>\r\n\t\t<img [attr.src]=\"resource.image\" [attr.alt]=\"resource.name\"/>\r\n\t</div>\r\n\t<div description>\r\n\t\t<p class=\"quote\"> {{resource.description}} </p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/thumbnail-instagram-carousel/thumbnail-instagram-carousel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div[description] {\n  outline: none !important;\n  outline-color: #b9a26a; }\n\n.instaImage {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/thumbnail-instagram-carousel/thumbnail-instagram-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailInstagramCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/*tslint:disable*/

var ThumbnailInstagramCarouselComponent = /** @class */ (function () {
    function ThumbnailInstagramCarouselComponent() {
        this.afterViewInit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
    }
    /**
     * Event detection
     */
    ThumbnailInstagramCarouselComponent.prototype.ngOnInit = function () { };
    ThumbnailInstagramCarouselComponent.prototype.ngAfterViewInit = function () {
        this.afterViewInit.emit({
            $target: $(this.wrapper.nativeElement).remove()
        });
    };
    ThumbnailInstagramCarouselComponent.prototype.click = function () {
        window.open("https://www.instagram.com/p/" + this.resource.name, '_blank');
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('instagram'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Object)
    ], ThumbnailInstagramCarouselComponent.prototype, "resource", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('wrapper'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], ThumbnailInstagramCarouselComponent.prototype, "wrapper", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])('afterViewInit'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */])
    ], ThumbnailInstagramCarouselComponent.prototype, "afterViewInit", void 0);
    ThumbnailInstagramCarouselComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-thumbnail-instagram-carousel',
            template: __webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-instagram-carousel/thumbnail-instagram-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-instagram-carousel/thumbnail-instagram-carousel.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], ThumbnailInstagramCarouselComponent);
    return ThumbnailInstagramCarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@components/thumbnails/thumbnails.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thumbnail_image__ = __webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-image/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__thumbnail_block_image__ = __webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-block-image/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__thumbnail_instagram_carousel__ = __webpack_require__("../../../../../src/client/app/@components/thumbnails/thumbnail-instagram-carousel/index.ts");

/**
 * Global imports
 */





/**
 * This module contains all the main thumbnails
 */
var ThumbnailsModule = /** @class */ (function () {
    function ThumbnailsModule() {
    }
    ThumbnailsModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__thumbnail_image__["a" /* ThumbnailImageComponent */],
                __WEBPACK_IMPORTED_MODULE_4__thumbnail_block_image__["a" /* ThumbnailBlockImageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__thumbnail_instagram_carousel__["a" /* ThumbnailInstagramCarouselComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__thumbnail_image__["a" /* ThumbnailImageComponent */],
                __WEBPACK_IMPORTED_MODULE_4__thumbnail_block_image__["a" /* ThumbnailBlockImageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__thumbnail_instagram_carousel__["a" /* ThumbnailInstagramCarouselComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__thumbnail_instagram_carousel__["a" /* ThumbnailInstagramCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_4__thumbnail_block_image__["a" /* ThumbnailBlockImageComponent */]
            ]
        })
    ], ThumbnailsModule);
    return ThumbnailsModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/@instance-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_components__ = __webpack_require__("../../../../../src/client/app/@components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__banners__ = __webpack_require__("../../../../../src/client/app/@instance-components/banners/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__thumbnails__ = __webpack_require__("../../../../../src/client/app/@instance-components/thumbnails/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header__ = __webpack_require__("../../../../../src/client/app/@instance-components/header/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer__ = __webpack_require__("../../../../../src/client/app/@instance-components/footer/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__boxes__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__instance_header_sticky__ = __webpack_require__("../../../../../src/client/app/@instance-components/instance-header-sticky/index.ts");

/*tslint:disable*/
/**
 * Global imports
 */


/**
 * MAM modules
 */


/**
 * Local modules and components
 */






/**
 * This module contains the main instance components
 */
var InstanceComponentsModule = /** @class */ (function () {
    function InstanceComponentsModule() {
    }
    InstanceComponentsModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__banners__["a" /* BannersModule */],
                __WEBPACK_IMPORTED_MODULE_6__thumbnails__["a" /* ThumbnailsModule */],
                __WEBPACK_IMPORTED_MODULE_3__mam_components__["b" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__mam_api__["a" /* ApiModule */],
                __WEBPACK_IMPORTED_MODULE_9__boxes__["a" /* BoxesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__instance_header_sticky__["a" /* InstanceHeaderStickyComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__banners__["a" /* BannersModule */],
                __WEBPACK_IMPORTED_MODULE_6__thumbnails__["a" /* ThumbnailsModule */],
                __WEBPACK_IMPORTED_MODULE_7__header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__boxes__["a" /* BoxesModule */],
                __WEBPACK_IMPORTED_MODULE_10__instance_header_sticky__["a" /* InstanceHeaderStickyComponent */]
            ]
        })
    ], InstanceComponentsModule);
    return InstanceComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/banners/banner-instance-aptitudes/banner-instance-aptitudes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerInstanceAptitudesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_enums_color_enum__ = __webpack_require__("../../../../../src/client/app/#enums/color.enum.ts");

/*tslint:disable*/



var BannerInstanceAptitudesComponent = /** @class */ (function () {
    function BannerInstanceAptitudesComponent(api) {
        this.api = api;
        this.color = __WEBPACK_IMPORTED_MODULE_3_app_enums_color_enum__["a" /* Color */].WHITE;
        this.title = "Aptitudes";
    }
    BannerInstanceAptitudesComponent.prototype.ngOnInit = function () { this.retrieve(); };
    BannerInstanceAptitudesComponent.prototype.retrieve = function () {
        this.elements = this.api.getAptitudes();
    };
    BannerInstanceAptitudesComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-banner-instance-aptitudes',
            template: "\n\t\t<mam-banner-carousel \n\t\t\t[color]=\"color\" \n\t\t\t[title]=\"title\" \n\t\t\t[elements]=\"elements | async\">\n\t\t</mam-banner-carousel>\n\t",
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__mam_api__["e" /* MAMApi */]])
    ], BannerInstanceAptitudesComponent);
    return BannerInstanceAptitudesComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/banners/banner-instance-aptitudes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner_instance_aptitudes_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/banners/banner-instance-aptitudes/banner-instance-aptitudes.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__banner_instance_aptitudes_component__["a"]; });
/*tslint:disable*/
//-- Export component



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/banners/banner-instance-logros/banner-instance-logros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerInstanceLogrosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_enums_color_enum__ = __webpack_require__("../../../../../src/client/app/#enums/color.enum.ts");

/*tslint:disable*/



var BannerInstanceLogrosComponent = /** @class */ (function () {
    function BannerInstanceLogrosComponent(api) {
        this.api = api;
        this.color = __WEBPACK_IMPORTED_MODULE_3_app_enums_color_enum__["a" /* Color */].GREY;
        this.title = "Logros";
    }
    BannerInstanceLogrosComponent.prototype.ngOnInit = function () {
        this.retrieve();
    };
    BannerInstanceLogrosComponent.prototype.retrieve = function () {
        this.elements = this.api.getLogros();
    };
    BannerInstanceLogrosComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-banner-instance-logros',
            template: "\n\t\t<mam-banner-carousel [color]=\"color\" [title]=\"title\" [elements]=\"elements | async\"> </mam-banner-carousel>\n\t",
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__mam_api__["e" /* MAMApi */]])
    ], BannerInstanceLogrosComponent);
    return BannerInstanceLogrosComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/banners/banner-instance-logros/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner_instance_logros_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/banners/banner-instance-logros/banner-instance-logros.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__banner_instance_logros_component__["a"]; });
/*tslint:disable*/
//-- Export component



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/banners/banners.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mam_components__ = __webpack_require__("../../../../../src/client/app/@components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__instance_banner_miembros__ = __webpack_require__("../../../../../src/client/app/@instance-components/banners/instance-banner-miembros/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__instance_banner_instagram__ = __webpack_require__("../../../../../src/client/app/@instance-components/banners/instance-banner-instagram/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__banner_instance_logros__ = __webpack_require__("../../../../../src/client/app/@instance-components/banners/banner-instance-logros/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__banner_instance_aptitudes__ = __webpack_require__("../../../../../src/client/app/@instance-components/banners/banner-instance-aptitudes/index.ts");

/*tslint:disable*/
/**
 * Global imports
 */


/**
 * Local imports
 */






/**
 * This module conatains the instance banners of the site
 */
var BannersModule = /** @class */ (function () {
    function BannersModule() {
    }
    BannersModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__mam_api__["a" /* ApiModule */],
                __WEBPACK_IMPORTED_MODULE_4__mam_components__["b" /* ComponentsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__instance_banner_miembros__["a" /* InstanceBannerMiembrosComponent */],
                __WEBPACK_IMPORTED_MODULE_6__instance_banner_instagram__["a" /* InstanceBannerInstagramComponent */],
                __WEBPACK_IMPORTED_MODULE_7__banner_instance_logros__["a" /* BannerInstanceLogrosComponent */],
                __WEBPACK_IMPORTED_MODULE_8__banner_instance_aptitudes__["a" /* BannerInstanceAptitudesComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__instance_banner_miembros__["a" /* InstanceBannerMiembrosComponent */],
                __WEBPACK_IMPORTED_MODULE_6__instance_banner_instagram__["a" /* InstanceBannerInstagramComponent */],
                __WEBPACK_IMPORTED_MODULE_8__banner_instance_aptitudes__["a" /* BannerInstanceAptitudesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__banner_instance_logros__["a" /* BannerInstanceLogrosComponent */]
            ]
        })
    ], BannersModule);
    return BannersModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/banners/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banners_module__ = __webpack_require__("../../../../../src/client/app/@instance-components/banners/banners.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__banners_module__["a"]; });
/**
 * Export Module
 */



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/banners/instance-banner-instagram/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_banner_instagram_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/banners/instance-banner-instagram/instance-banner-instagram.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_banner_instagram_component__["a"]; });
/**
 * Export component
 */



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/banners/instance-banner-instagram/instance-banner-instagram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceBannerInstagramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mam_components__ = __webpack_require__("../../../../../src/client/app/@components/index.ts");

/*tslint:disable*/
/**
 * Global components
 */



/**
 * Local imports
 */


var InstanceBannerInstagramComponent = /** @class */ (function () {
    function InstanceBannerInstagramComponent(api, resolver) {
        this.api = api;
        this.resolver = resolver;
        this.titulo = "Sigue estas y otras historias en instagram";
    }
    /**
     * Events
     */
    InstanceBannerInstagramComponent.prototype.ngOnInit = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrieve()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Actions
     */
    InstanceBannerInstagramComponent.prototype.retrieve = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var instagramImages;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getInstagramImages_()];
                    case 1:
                        instagramImages = _a.sent();
                        console.log(instagramImages);
                        this.renderComponent(this.titulo, instagramImages);
                        return [2 /*return*/];
                }
            });
        });
    };
    InstanceBannerInstagramComponent.prototype.renderComponent = function (title, instagramImages) {
        //-- Creating component
        var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__mam_components__["a" /* BannerInstagramComponent */]);
        var reference = this.render.createComponent(factory);
        var component = reference.instance;
        //-- Setting component params
        component.titulo = title;
        component.instagram = instagramImages;
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('render', { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewContainerRef */] }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewContainerRef */])
    ], InstanceBannerInstagramComponent.prototype, "render", void 0);
    InstanceBannerInstagramComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-banner-instagram',
            template: "<div #render></div>"
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__mam_api__["d" /* ImageApi */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ComponentFactoryResolver */]])
    ], InstanceBannerInstagramComponent);
    return InstanceBannerInstagramComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/banners/instance-banner-miembros/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_banner_miembros_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/banners/instance-banner-miembros/instance-banner-miembros.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_banner_miembros_component__["a"]; });
/**
 * Export component
 */



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/banners/instance-banner-miembros/instance-banner-miembros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceBannerMiembrosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");

/**
 * Global components
 */

/**
 * Local imports
 */

var InstanceBannerMiembrosComponent = /** @class */ (function () {
    function InstanceBannerMiembrosComponent(api) {
        this.api = api;
        this.titulo = "Miembro de directorios internacionales";
    }
    /**
     * Events
     */
    InstanceBannerMiembrosComponent.prototype.ngOnInit = function () {
        this.retrieve();
    };
    /**
     * Actions
     */
    InstanceBannerMiembrosComponent.prototype.retrieve = function () {
        this.directorio = this.api.getLogos();
    };
    InstanceBannerMiembrosComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-banner-miembros',
            template: "<mam-banner-miembros [titulo]=\"titulo\" [directorio]=\"directorio | async\"></mam-banner-miembros>"
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__mam_api__["c" /* DirectorioApi */]])
    ], InstanceBannerMiembrosComponent);
    return InstanceBannerMiembrosComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/boxes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instance_box_miniatura__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-miniatura/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__instance_box_menu__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-menu/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mam_components__ = __webpack_require__("../../../../../src/client/app/@components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__instance_box_bio__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-bio/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__instance_box_preguntas__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-preguntas/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__instance_box_form__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-form/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__instance_box_testimonio__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-testimonio/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__instance_box_historia__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-historia/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__instance_box_agradecimiento__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-agradecimiento/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__instance_box_collage__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-collage/index.ts");













var BoxesModule = /** @class */ (function () {
    function BoxesModule() {
    }
    BoxesModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__mam_components__["b" /* ComponentsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__instance_box_miniatura__["a" /* InstanceBoxMiniaturaComponent */],
                __WEBPACK_IMPORTED_MODULE_4__instance_box_menu__["a" /* InstanceBoxMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__instance_box_bio__["a" /* InstanceBoxBioComponent */],
                __WEBPACK_IMPORTED_MODULE_7__instance_box_preguntas__["a" /* InstanceBoxPreguntasComponent */],
                __WEBPACK_IMPORTED_MODULE_8__instance_box_form__["a" /* InstanceBoxFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__instance_box_testimonio__["a" /* InstanceBoxTestimonioComponent */],
                __WEBPACK_IMPORTED_MODULE_10__instance_box_historia__["a" /* InstanceBoxHistoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__instance_box_agradecimiento__["a" /* InstanceBoxAgradecimientoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__instance_box_collage__["a" /* InstanceBoxCollageComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__instance_box_miniatura__["a" /* InstanceBoxMiniaturaComponent */],
                __WEBPACK_IMPORTED_MODULE_4__instance_box_menu__["a" /* InstanceBoxMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__instance_box_bio__["a" /* InstanceBoxBioComponent */],
                __WEBPACK_IMPORTED_MODULE_7__instance_box_preguntas__["a" /* InstanceBoxPreguntasComponent */],
                __WEBPACK_IMPORTED_MODULE_8__instance_box_form__["a" /* InstanceBoxFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__instance_box_testimonio__["a" /* InstanceBoxTestimonioComponent */],
                __WEBPACK_IMPORTED_MODULE_10__instance_box_historia__["a" /* InstanceBoxHistoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__instance_box_agradecimiento__["a" /* InstanceBoxAgradecimientoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__instance_box_collage__["a" /* InstanceBoxCollageComponent */]
            ]
        })
    ], BoxesModule);
    return BoxesModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boxes_module__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/boxes.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__boxes_module__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-agradecimiento/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_box_agradecimiento_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-agradecimiento/instance-box-agradecimiento.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_box_agradecimiento_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-agradecimiento/instance-box-agradecimiento.component.html":
/***/ (function(module, exports) {

module.exports = "<mam-box-agradecimiento (onClick)=\"click()\"></mam-box-agradecimiento>"

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-agradecimiento/instance-box-agradecimiento.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-agradecimiento/instance-box-agradecimiento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceBoxAgradecimientoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var InstanceBoxAgradecimientoComponent = /** @class */ (function () {
    function InstanceBoxAgradecimientoComponent() {
        this.onClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
    }
    InstanceBoxAgradecimientoComponent.prototype.ngOnInit = function () {
    };
    InstanceBoxAgradecimientoComponent.prototype.click = function () {
        this.onClick.emit();
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */])
    ], InstanceBoxAgradecimientoComponent.prototype, "onClick", void 0);
    InstanceBoxAgradecimientoComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-box-agradecimiento',
            template: __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-agradecimiento/instance-box-agradecimiento.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-agradecimiento/instance-box-agradecimiento.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], InstanceBoxAgradecimientoComponent);
    return InstanceBoxAgradecimientoComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-bio/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_box_bio_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-bio/instance-box-bio.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_box_bio_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-bio/instance-box-bio.component.html":
/***/ (function(module, exports) {

module.exports = "<mam-box-bio [bio] = \"bio\" ></mam-box-bio>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-bio/instance-box-bio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-bio/instance-box-bio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceBoxBioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var InstanceBoxBioComponent = /** @class */ (function () {
    function InstanceBoxBioComponent() {
    }
    InstanceBoxBioComponent.prototype.ngOnInit = function () {
        this.parse();
    };
    /**
       * Actions
       */
    InstanceBoxBioComponent.prototype.parse = function () {
        this.bio = {
            content_special: "No se trata de hacer una buena foto, se trata de crear una historia a través de los momentos que capturas",
            content: "\n\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        };
    };
    InstanceBoxBioComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-box-bio',
            template: __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-bio/instance-box-bio.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-bio/instance-box-bio.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], InstanceBoxBioComponent);
    return InstanceBoxBioComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-collage/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_box_collage_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-collage/instance-box-collage.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_box_collage_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-collage/instance-box-collage.component.html":
/***/ (function(module, exports) {

module.exports = "<cania-box-collage></cania-box-collage>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-collage/instance-box-collage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-collage/instance-box-collage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceBoxCollageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var InstanceBoxCollageComponent = /** @class */ (function () {
    function InstanceBoxCollageComponent() {
    }
    InstanceBoxCollageComponent.prototype.ngOnInit = function () {
    };
    InstanceBoxCollageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-box-collage',
            template: __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-collage/instance-box-collage.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-collage/instance-box-collage.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], InstanceBoxCollageComponent);
    return InstanceBoxCollageComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-form/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_box_form_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-form/instance-box-form.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_box_form_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-form/instance-box-form.component.html":
/***/ (function(module, exports) {

module.exports = "<mam-box-form></mam-box-form>"

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-form/instance-box-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-form/instance-box-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceBoxFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var InstanceBoxFormComponent = /** @class */ (function () {
    function InstanceBoxFormComponent() {
    }
    InstanceBoxFormComponent.prototype.ngOnInit = function () {
    };
    InstanceBoxFormComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-box-form',
            template: __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-form/instance-box-form.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-form/instance-box-form.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], InstanceBoxFormComponent);
    return InstanceBoxFormComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-historia/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_box_historia_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-historia/instance-box-historia.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_box_historia_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-historia/instance-box-historia.component.html":
/***/ (function(module, exports) {

module.exports = "<mam-box-historia></mam-box-historia>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-historia/instance-box-historia.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-historia/instance-box-historia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceBoxHistoriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var InstanceBoxHistoriaComponent = /** @class */ (function () {
    function InstanceBoxHistoriaComponent() {
    }
    InstanceBoxHistoriaComponent.prototype.ngOnInit = function () {
    };
    InstanceBoxHistoriaComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-box-historia',
            template: __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-historia/instance-box-historia.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-historia/instance-box-historia.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], InstanceBoxHistoriaComponent);
    return InstanceBoxHistoriaComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-menu/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_box_menu_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-menu/instance-box-menu.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_box_menu_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-menu/instance-box-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<mam-box-menu></mam-box-menu>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-menu/instance-box-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-menu/instance-box-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceBoxMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var InstanceBoxMenuComponent = /** @class */ (function () {
    function InstanceBoxMenuComponent() {
    }
    InstanceBoxMenuComponent.prototype.ngOnInit = function () {
    };
    InstanceBoxMenuComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-box-menu',
            template: __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-menu/instance-box-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-menu/instance-box-menu.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], InstanceBoxMenuComponent);
    return InstanceBoxMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-miniatura/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_box_miniatura_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-miniatura/instance-box-miniatura.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_box_miniatura_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-miniatura/instance-box-miniatura.component.html":
/***/ (function(module, exports) {

module.exports = "<mam-box-miniatura [miniatura] = \"miniatura\" ></mam-box-miniatura>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-miniatura/instance-box-miniatura.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-miniatura/instance-box-miniatura.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceBoxMiniaturaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var InstanceBoxMiniaturaComponent = /** @class */ (function () {
    function InstanceBoxMiniaturaComponent() {
    }
    InstanceBoxMiniaturaComponent.prototype.ngOnInit = function () {
        this.parse();
    };
    /**
      * Actions
      */
    InstanceBoxMiniaturaComponent.prototype.parse = function () {
        this.miniatura = {
            content: "Lorem ipsum dolor sit amet, consectetur aoris ipsa.",
            author: "Lorem ipsum dolor sit amet, consectetur aoris ipsa.",
            image: "assets/images/foto-01.png",
        };
    };
    InstanceBoxMiniaturaComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-box-miniatura',
            template: __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-miniatura/instance-box-miniatura.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-miniatura/instance-box-miniatura.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], InstanceBoxMiniaturaComponent);
    return InstanceBoxMiniaturaComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-preguntas/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_box_preguntas_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-preguntas/instance-box-preguntas.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_box_preguntas_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-preguntas/instance-box-preguntas.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 rowQuestion\"  *ngFor=\"let question of questions | async\">\r\n\t\t\t<div class=\"preguntas\">\r\n\t\t\t\t<mam-box-preguntas [question]=\"question\" ></mam-box-preguntas>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-preguntas/instance-box-preguntas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rowQuestion {\n  margin-bottom: 4rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-preguntas/instance-box-preguntas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceBoxPreguntasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);



var InstanceBoxPreguntasComponent = /** @class */ (function () {
    function InstanceBoxPreguntasComponent() {
    }
    InstanceBoxPreguntasComponent.prototype.ngOnInit = function () {
        console.log(this.questions);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])("questions"),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"])
    ], InstanceBoxPreguntasComponent.prototype, "questions", void 0);
    InstanceBoxPreguntasComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-box-preguntas',
            template: __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-preguntas/instance-box-preguntas.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-preguntas/instance-box-preguntas.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], InstanceBoxPreguntasComponent);
    return InstanceBoxPreguntasComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-testimonio/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_box_testimonio_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-testimonio/instance-box-testimonio.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_box_testimonio_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-testimonio/instance-box-testimonio.component.html":
/***/ (function(module, exports) {

module.exports = "<mam-box-testimonio\t></mam-box-testimonio>"

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-testimonio/instance-box-testimonio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/boxes/instance-box-testimonio/instance-box-testimonio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceBoxTestimonioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var InstanceBoxTestimonioComponent = /** @class */ (function () {
    function InstanceBoxTestimonioComponent() {
    }
    InstanceBoxTestimonioComponent.prototype.ngOnInit = function () {
    };
    InstanceBoxTestimonioComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-box-testimonio',
            template: __webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-testimonio/instance-box-testimonio.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@instance-components/boxes/instance-box-testimonio/instance-box-testimonio.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], InstanceBoxTestimonioComponent);
    return InstanceBoxTestimonioComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<mam-footer [parseDescription]=\"parseDescription\"></mam-footer>"

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");

/*tslint:disable*/
/**
 * Global imports
 */

/**
 * Local imports
 */


/**
 * Header Instance
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent(mamApi, domSanitizer) {
        this.mamApi = mamApi;
        this.domSanitizer = domSanitizer;
    }
    /**
     * Events
     */
    FooterComponent.prototype.ngOnInit = function () {
        this.retrieve();
    };
    /**
     * Actions
     */
    FooterComponent.prototype.retrieve = function () {
        var _this = this;
        this.description = this.mamApi.getContactoBrief();
        this.description.then(function (data) {
            console.log(data);
            _this.parseDescription = _this.parse(data);
        })
            .catch(function (e) { console.log(e); });
    };
    FooterComponent.prototype.parse = function (value) {
        return this.domSanitizer.bypassSecurityTrustHtml(value);
    };
    FooterComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-footer',
            template: __webpack_require__("../../../../../src/client/app/@instance-components/footer/footer.component.html")
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__mam_api__["e" /* MAMApi */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/footer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/footer/footer.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_component__["a"]; });
/**
 * Export component
 */



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_components__ = __webpack_require__("../../../../../src/client/app/@components/index.ts");

/*tslint:disable*/
/**
 * Global imports
 */

/**
 * Local imports
 */


/**
 * Header Instance
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(bannerApi, resolver) {
        this.bannerApi = bannerApi;
        this.resolver = resolver;
        this.isPortafolio = false;
        this.isMAM = false;
        this.isContacto = false;
    }
    /**
     * Events
     */
    HeaderComponent.prototype.ngOnInit = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!this.isPortafolio) return [3 /*break*/, 2];
                        _a = this.render;
                        return [4 /*yield*/, this.bannerApi.getBannerPortafolioImages()];
                    case 1:
                        _a.apply(this, [_f.sent()]);
                        return [3 /*break*/, 9];
                    case 2:
                        if (!this.isContacto) return [3 /*break*/, 4];
                        _b = this.render;
                        return [4 /*yield*/, this.bannerApi.getBannerContactoImages()];
                    case 3:
                        _b.apply(this, [_f.sent()]);
                        return [3 /*break*/, 9];
                    case 4:
                        if (!this.isMAM) return [3 /*break*/, 6];
                        _c = this.render;
                        return [4 /*yield*/, this.bannerApi.getBannerMAMImages()];
                    case 5:
                        _c.apply(this, [_f.sent()]);
                        return [3 /*break*/, 9];
                    case 6:
                        _d = this.render;
                        return [4 /*yield*/, this.bannerApi.getBannerHomeImages()];
                    case 7:
                        _e = [_f.sent()];
                        return [4 /*yield*/, this.bannerApi.getBannerHomeImagesTestimonies()];
                    case 8:
                        _d.apply(this, _e.concat([_f.sent()]));
                        _f.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * Actions
     */
    HeaderComponent.prototype.render = function (images, testimonies) {
        console.log(images);
        //-- Creating component
        var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__mam_components__["c" /* HeaderComponent */]);
        var reference = this.renderer.createComponent(factory);
        var component = reference.instance;
        //-- Setting component params
        if (this.isPortafolio || this.isContacto || this.isMAM) {
            component.bannerImages = [images[0]];
        }
        else {
            component.bannerImages = images;
        }
        component.isPortafolio = this.isPortafolio;
        component.isMAM = this.isMAM;
        component.isContacto = this.isContacto;
        if (testimonies == undefined)
            component.miniaturas = [];
        else
            component.miniaturas = testimonies;
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('renderer', { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewContainerRef */] }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewContainerRef */])
    ], HeaderComponent.prototype, "renderer", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('isPortafolio'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Boolean)
    ], HeaderComponent.prototype, "isPortafolio", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('isMAM'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Boolean)
    ], HeaderComponent.prototype, "isMAM", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('isContacto'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Boolean)
    ], HeaderComponent.prototype, "isContacto", void 0);
    HeaderComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-header',
            template: '<div #renderer></div>',
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__mam_api__["d" /* ImageApi */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ComponentFactoryResolver */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/header/header.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });
/**
 * Export component
 */



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_components_module__ = __webpack_require__("../../../../../src/client/app/@instance-components/@instance-components.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_components_module__["a"]; });
/**
 * Export Module
 */



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/instance-header-sticky/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_header_sticky_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/instance-header-sticky/instance-header-sticky.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_header_sticky_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/instance-header-sticky/instance-header-sticky.component.html":
/***/ (function(module, exports) {

module.exports = "<mam-header-sticky (onClick)=\"showMenu()\" ></mam-header-sticky>\r\n<mam-instance-box-menu style=\"display:none;\" id=\"Menu-Fixed\"></mam-instance-box-menu>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/instance-header-sticky/instance-header-sticky.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/instance-header-sticky/instance-header-sticky.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceHeaderStickyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var InstanceHeaderStickyComponent = /** @class */ (function () {
    function InstanceHeaderStickyComponent() {
    }
    InstanceHeaderStickyComponent.prototype.ngOnInit = function () {
    };
    InstanceHeaderStickyComponent.prototype.showMenu = function () {
        $("#Menu-Fixed").show();
    };
    InstanceHeaderStickyComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-header-sticky',
            template: __webpack_require__("../../../../../src/client/app/@instance-components/instance-header-sticky/instance-header-sticky.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@instance-components/instance-header-sticky/instance-header-sticky.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], InstanceHeaderStickyComponent);
    return InstanceHeaderStickyComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/thumbnails/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thumbnails_module__ = __webpack_require__("../../../../../src/client/app/@instance-components/thumbnails/thumbnails.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__thumbnails_module__["a"]; });
/**
 * Export Module
 */



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-block-image/instance-thumbnail-block-image.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  instance-thumbnail-block-image works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-block-image/instance-thumbnail-block-image.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-block-image/instance-thumbnail-block-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceThumbnailBlockImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var InstanceThumbnailBlockImageComponent = /** @class */ (function () {
    function InstanceThumbnailBlockImageComponent() {
    }
    InstanceThumbnailBlockImageComponent.prototype.ngOnInit = function () {
    };
    InstanceThumbnailBlockImageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-instance-thumbnail-block-image',
            template: __webpack_require__("../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-block-image/instance-thumbnail-block-image.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-block-image/instance-thumbnail-block-image.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], InstanceThumbnailBlockImageComponent);
    return InstanceThumbnailBlockImageComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-image/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_thumbnail_image_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-image/instance-thumbnail-image.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__instance_thumbnail_image_component__["a"]; });



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-image/instance-thumbnail-image.component.html":
/***/ (function(module, exports) {

module.exports = "<mam-thumbnail-image [thumb_Image] = \"thumb_Image\" (onClick)=\"onClick.emit($event)\"></mam-thumbnail-image>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-image/instance-thumbnail-image.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.thumb{\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-image/instance-thumbnail-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceThumbnailImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/*tslint:disable*/
/**
 * Global components
 */

var InstanceThumbnailImageComponent = /** @class */ (function () {
    function InstanceThumbnailImageComponent() {
        this.onClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.options = ['full', 'right', 'left', 'right'];
    }
    InstanceThumbnailImageComponent.prototype.ngOnInit = function () { this.parse(); };
    InstanceThumbnailImageComponent.prototype.ngOnChanges = function () { this.parse(); };
    /**
     * Actions
     */
    InstanceThumbnailImageComponent.prototype.parse = function () {
        this.thumb_Image = {
            alt: this.image.name,
            src: this.image.image,
            position: this.options[this.position % 4],
            place: this.image.place
        };
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('image'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Object)
    ], InstanceThumbnailImageComponent.prototype, "image", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('position'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Number)
    ], InstanceThumbnailImageComponent.prototype, "position", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])('onClick'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */])
    ], InstanceThumbnailImageComponent.prototype, "onClick", void 0);
    InstanceThumbnailImageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-instance-thumbnail-image',
            template: __webpack_require__("../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-image/instance-thumbnail-image.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-image/instance-thumbnail-image.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], InstanceThumbnailImageComponent);
    return InstanceThumbnailImageComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/@instance-components/thumbnails/thumbnails.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mam_components__ = __webpack_require__("../../../../../src/client/app/@components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__instance_thumbnail_image__ = __webpack_require__("../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-image/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__instance_thumbnail_block_image_instance_thumbnail_block_image_component__ = __webpack_require__("../../../../../src/client/app/@instance-components/thumbnails/instance-thumbnail-block-image/instance-thumbnail-block-image.component.ts");

/**
 * Global imports
 */


/**
 * Local imports
 */




/**
 * This module conatains the instance thumbnails of the site
 */
var ThumbnailsModule = /** @class */ (function () {
    function ThumbnailsModule() {
    }
    ThumbnailsModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__mam_api__["a" /* ApiModule */],
                __WEBPACK_IMPORTED_MODULE_4__mam_components__["b" /* ComponentsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__instance_thumbnail_image__["a" /* InstanceThumbnailImageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__instance_thumbnail_block_image_instance_thumbnail_block_image_component__["a" /* InstanceThumbnailBlockImageComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__instance_thumbnail_image__["a" /* InstanceThumbnailImageComponent */]
            ],
        })
    ], ThumbnailsModule);
    return ThumbnailsModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/contacto/contacto.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacto_page__ = __webpack_require__("../../../../../src/client/app/@pages/contacto/contacto.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacto_routing__ = __webpack_require__("../../../../../src/client/app/@pages/contacto/contacto.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mam_instance_components__ = __webpack_require__("../../../../../src/client/app/@instance-components/index.ts");

/**
 * Global imports
 */

/**
 * Page imports
 */


/**
 * Local imports
 */

/**
 * Module page declaration
 */
var ContactoModule = /** @class */ (function () {
    function ContactoModule() {
    }
    ContactoModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__contacto_routing__["a" /* ContactoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__mam_instance_components__["a" /* InstanceComponentsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__contacto_page__["a" /* ContactoPage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__contacto_page__["a" /* ContactoPage */]]
        })
    ], ContactoModule);
    return ContactoModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/contacto/contacto.page.html":
/***/ (function(module, exports) {

module.exports = "<mam-instance-header-sticky></mam-instance-header-sticky>\r\n<mam-instance-header [isContacto] = \"true\"></mam-instance-header>\r\n<div class=\"container-fluid bg-grey\">\r\n\t<div class=\"container\">\r\n\t\t<br>\r\n\t\t<br>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<h2 class=\"featured_content\" style=\"text-align: center;\">{{contacto.text}}</h2>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<br>\r\n\t\t<br>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<p class=\"content\">{{contacto.description}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<br>\r\n\t<mam-instance-box-form id=\"formulario-bodas\" name=\"formulario-bodas\" style=\"display: block;\"></mam-instance-box-form>\r\n\t<br>\r\n\t<br>\r\n</div>\r\n<br>\r\n<div class=\"container-fluid \">\r\n\t<br>\r\n\t<br>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<h2 class=\"subtitle2\" uppercase>Preguntas frecuentes</h2>\r\n\t\t</div>\r\n\t</div>\r\n\t<br>\r\n\t<mam-instance-box-preguntas [questions]=\"preguntas\"></mam-instance-box-preguntas>\r\n\t<br>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<h4 class=\"content\" style=\"text-align:left;\">Para otras preguntas escribenos a <a id=\"mail\" href=\"mailto:mamfotografo@gmail.com?Subject=Consulta de informacion\" target=\"_top\"><strong>MAMFOTOGRAFO@GMAIL.COM</strong></a></h4>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<mam-instance-banner-instagram></mam-instance-banner-instagram>\r\n<mam-instance-box-agradecimiento id=\"boxThanks\" style=\"display: none\" (onClick)=\"dispose()\"></mam-instance-box-agradecimiento>"

/***/ }),

/***/ "../../../../../src/client/app/@pages/contacto/contacto.page.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2, h4 {\n  width: 100%;\n  text-align: center; }\n\n.bg-grey {\n  background-color: #f8f8f8; }\n\n#mail {\n  color: black !important;\n  text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@pages/contacto/contacto.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_services__ = __webpack_require__("../../../../../src/client/app/@services/index.ts");

/*tslint:disable*/
/**
 * Global imports
 */

/**
 * Local imports
 */




/**
 * PAGE => Contacto
 */
var ContactoPage = /** @class */ (function () {
    function ContactoPage(CTA, api, ContactoApi, formService) {
        this.CTA = CTA;
        this.api = api;
        this.ContactoApi = ContactoApi;
        this.formService = formService;
        this.contacto = {
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita reiciendis ratione saepe quia a pariatur libero quibusdam sequi, minus esse, sapiente nobis similique, hic! Aperiam labore nulla, dolorem! Voluptatum, iusto?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad impedit voluptatem ipsum, obcaecati fugiat vitae fuga necessitatibus exercitationem sunt iusto, explicabo perspiciatis doloremque itaque ab dolorum ut nam! Iste, repellat?"
        };
    }
    ContactoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.formService
            .submit$
            .subscribe(function (data) {
            //-- Parse data and call a function to resolve
            _this.resolveSubmit(data);
        });
        this.retrieve();
    };
    ContactoPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.CTA.$routeChange.subscribe(function (data) {
            _this.state = data;
            console.log(data);
            //window.location.href = "/contacto#"+data.params;
        });
    };
    /**
     * Actions
     */
    ContactoPage.prototype.retrieve = function () {
        this.preguntas = this.api.getContactQuestions();
    };
    ContactoPage.prototype.changeMenu = function () {
        //-- DO SOMETHING
    };
    ContactoPage.prototype.showThanks = function () {
        //-- DO SOMETHING
    };
    ContactoPage.prototype.resolveSubmit = function (formData) {
        var _this = this;
        $("#WA").hide();
        console.log("submitieando");
        console.log(formData);
        this.ContactoApi.publishContacto(formData).subscribe(function (state) {
            if (state.status === 'AC') {
                //-- Correct answer		
                $("#boxThanks").show();
            }
            else if (state.status === 'WA') {
                //-- Wrong answer
                $("#WA").show();
            }
            else {
                //-- Unknown error
                // $(this.errorRef.nativeElement).addClass('active');
            }
            _this.formService.unlockSubmit();
        });
    };
    ContactoPage.prototype.dispose = function () {
        $("#boxThanks").fadeOut(600);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", Object)
    ], ContactoPage.prototype, "state", void 0);
    ContactoPage = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-contacto-page',
            template: __webpack_require__("../../../../../src/client/app/@pages/contacto/contacto.page.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@pages/contacto/contacto.page.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__mam_services__["a" /* CTAService */], __WEBPACK_IMPORTED_MODULE_2__mam_api__["f" /* PreguntaApi */], __WEBPACK_IMPORTED_MODULE_2__mam_api__["b" /* ContactoApi */], __WEBPACK_IMPORTED_MODULE_3__mam_services__["b" /* FormService */]])
    ], ContactoPage);
    return ContactoPage;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/contacto/contacto.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacto_page__ = __webpack_require__("../../../../../src/client/app/@pages/contacto/contacto.page.ts");

/**
 * Global imports
 */


/**
 * Page
 */

//-- Routing
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__contacto_page__["a" /* ContactoPage */]
    }
];
var ContactoRoutingModule = /** @class */ (function () {
    function ContactoRoutingModule() {
    }
    ContactoRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], ContactoRoutingModule);
    return ContactoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/historia/historia.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__historia_page__ = __webpack_require__("../../../../../src/client/app/@pages/historia/historia.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historia_routing__ = __webpack_require__("../../../../../src/client/app/@pages/historia/historia.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mam_instance_components__ = __webpack_require__("../../../../../src/client/app/@instance-components/index.ts");

/**
 * Global imports
 */


/**
 * Page imports
 */


/**
 * Local imports
 */

var HistoriaModule = /** @class */ (function () {
    function HistoriaModule() {
    }
    HistoriaModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__historia_routing__["a" /* HistoriaRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__mam_instance_components__["a" /* InstanceComponentsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__historia_page__["a" /* HistoriaPage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__historia_page__["a" /* HistoriaPage */]]
        })
    ], HistoriaModule);
    return HistoriaModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/historia/historia.page.html":
/***/ (function(module, exports) {

module.exports = "<mam-instance-header-sticky></mam-instance-header-sticky>\r\n<mam-instance-header></mam-instance-header>\r\n\r\n\r\n<mam-instance-box-collage></mam-instance-box-collage>\r\n\r\n\r\n<!--<mam-instance-box-historia></mam-instance-box-historia>-->\r\n<mam-instance-box-testimonio></mam-instance-box-testimonio>\r\n<mam-instance-footer></mam-instance-footer>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/@pages/historia/historia.page.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@pages/historia/historia.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/*tslint:disable*/

var HistoriaPage = /** @class */ (function () {
    function HistoriaPage() {
    }
    HistoriaPage.prototype.ngOnInit = function () { };
    HistoriaPage.prototype.changeMenu = function () { };
    HistoriaPage = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mam-historia-page',
            template: __webpack_require__("../../../../../src/client/app/@pages/historia/historia.page.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@pages/historia/historia.page.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], HistoriaPage);
    return HistoriaPage;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/historia/historia.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__historia_page__ = __webpack_require__("../../../../../src/client/app/@pages/historia/historia.page.ts");

/**
 * Global imports
 */


/**
 * Page
 */

//-- Routing
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__historia_page__["a" /* HistoriaPage */]
    }
];
var HistoriaRoutingModule = /** @class */ (function () {
    function HistoriaRoutingModule() {
    }
    HistoriaRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], HistoriaRoutingModule);
    return HistoriaRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/historias/historias.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__historias_page__ = __webpack_require__("../../../../../src/client/app/@pages/historias/historias.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historias_routing__ = __webpack_require__("../../../../../src/client/app/@pages/historias/historias.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mam_instance_components__ = __webpack_require__("../../../../../src/client/app/@instance-components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mam_services__ = __webpack_require__("../../../../../src/client/app/@services/index.ts");

/**
 * Global imports
 */


/**
 * Page import
 */


/**
 * Local imports
 */



/**
 * Module page declaration
 */
var HistoriasModule = /** @class */ (function () {
    function HistoriasModule() {
    }
    HistoriasModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__historias_routing__["a" /* HistoriasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__mam_api__["a" /* ApiModule */],
                __WEBPACK_IMPORTED_MODULE_5__mam_instance_components__["a" /* InstanceComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__mam_services__["c" /* ServicesModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__historias_page__["a" /* HistoriasPage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__historias_page__["a" /* HistoriasPage */]]
        })
    ], HistoriasModule);
    return HistoriasModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/historias/historias.page.html":
/***/ (function(module, exports) {

module.exports = "<mam-instance-header-sticky></mam-instance-header-sticky>\r\n\r\n<img src=\"assets/svg/mam-logo-black.svg\" mouseable alt=\"\" class=\"logo\" (click)=\"CTA.inicio()\" /> \r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<h1 class=\"title blog\" font-uppercase font-center font-bold font-hiper>Historia</h1>\r\n<br>\r\n\r\n<div class=\"row justify-content-center\">\r\n\t<div class=\"col-9\">\r\n\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\t</div>\r\n</div>\r\n<br>\r\n<br>\r\n\r\n<ng-template ngFor let-image [ngForOf]=\"images | async\" let-i=\"index\">\r\n  <mam-instance-thumbnail-image \r\n      [image]=\"image\" \r\n      [position]=\"i\"\r\n      (onClick)=\"desplegarDetalle($event)\"></mam-instance-thumbnail-image>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/client/app/@pages/historias/historias.page.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\n  position: absolute;\n  top: 1.5rem;\n  left: 1.5rem;\n  z-index: 2;\n  height: 40px;\n  width: auto; }\n\n.logo:hover {\n  cursor: pointer; }\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .logo {\n    display: none; }\n  .title.blog {\n    padding-top: 2rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@pages/historias/historias.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_services__ = __webpack_require__("../../../../../src/client/app/@services/index.ts");

/*tslint:disable*/
/**
 * Global imports
 */

/**
 * Local imports
 */


/**
 * PAGE => Historias
 */
var HistoriasPage = /** @class */ (function () {
    function HistoriasPage(CTA, api) {
        this.CTA = CTA;
        this.api = api;
    }
    /**
     * Events
     */
    HistoriasPage.prototype.ngOnInit = function () {
        this.retrieve();
        this.getQuote();
    };
    /**
     * Actions
     */
    HistoriasPage.prototype.retrieve = function () {
        this.images = this.api.getHighlightImages();
    };
    HistoriasPage.prototype.getQuote = function () {
        this.featuredContent = {
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nihil laboriosam quis deleniti hic debitis possimus, voluptatum consectetur placeat cupiditate numquam, repellendus veniam sit dicta quaerat, corrupti ducimus cum ab.",
            author: "Miguel Angel Martinez"
        };
    };
    HistoriasPage.prototype.changeMenu = function () {
        console.log("hola");
    };
    HistoriasPage.prototype.desplegarDetalle = function (event) {
        console.log("Desplegar detalle de ", event);
    };
    HistoriasPage.prototype.goto = function (where) {
        //-- DO SOMETHING
    };
    HistoriasPage = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-historias-page',
            template: __webpack_require__("../../../../../src/client/app/@pages/historias/historias.page.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@pages/historias/historias.page.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__mam_services__["a" /* CTAService */], __WEBPACK_IMPORTED_MODULE_2__mam_api__["d" /* ImageApi */]])
    ], HistoriasPage);
    return HistoriasPage;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/historias/historias.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__historias_page__ = __webpack_require__("../../../../../src/client/app/@pages/historias/historias.page.ts");

/**
 * Global imports
 */


/**
 * Page
 */

//-- Routing
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__historias_page__["a" /* HistoriasPage */]
    }
];
var HistoriasRoutingModule = /** @class */ (function () {
    function HistoriasRoutingModule() {
    }
    HistoriasRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], HistoriasRoutingModule);
    return HistoriasRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_page__ = __webpack_require__("../../../../../src/client/app/@pages/home/home.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing__ = __webpack_require__("../../../../../src/client/app/@pages/home/home.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mam_instance_components__ = __webpack_require__("../../../../../src/client/app/@instance-components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");

/**
 * Global imports
 */


/**
 * Page imports
 */


/**
 * Local imports
 */


/**
 * Module page declaration
 */
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__home_routing__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__mam_instance_components__["a" /* InstanceComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__mam_api__["a" /* ApiModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home_page__["a" /* HomePage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__home_page__["a" /* HomePage */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/home/home.page.html":
/***/ (function(module, exports) {

module.exports = "<mam-instance-header-sticky></mam-instance-header-sticky>\r\n<mam-instance-header></mam-instance-header>\r\n\r\n<div class=\"quote_box\">\r\n\t<div class=\"relative table\">\r\n\t\t<div class=\"text\">\r\n\t\t\t<h4 class=\"featured_content\" [innerHTML]=\"quote\"></h4>\r\n\t\t\t<br>\r\n\t\t\t<p class=\"quotes_autor gold uppercase\" [innerHTML]=\"author\"></p>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"title_box\">\r\n\t<!--<div class=\"container\">-->\r\n\t\t<div class=\"table-row\">\r\n\t\t\t<h2 class=\"title uppercase\">Conoce sus historias</h2>\r\n\t\t</div>\r\n\t<!--</div>-->\r\n</div>\t\r\n<div class=\"box-thumbnails-images\">\t\t\t\t\t\t\r\n\t<ng-template ngFor let-image [ngForOf]=\"images | async\" let-i=\"index\">\r\n\t\t<mam-instance-thumbnail-image \r\n\t\t\t[image]=\"image\" \r\n\t\t\t[position]=\"i\"></mam-instance-thumbnail-image>\t\r\n\t</ng-template>\r\n</div>\r\n\r\n<mam-instance-banner-miembros></mam-instance-banner-miembros>    \r\n<mam-instance-banner-instagram></mam-instance-banner-instagram>\r\n<mam-instance-footer></mam-instance-footer>"

/***/ }),

/***/ "../../../../../src/client/app/@pages/home/home.page.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".quote_box {\n  position: relative;\n  background-color: #f8f8f8;\n  height: 400px;\n  width: 100%; }\n  .quote_box .text {\n    /*position: absolute;\r\n\t\ttop: 50%;\r\n\t\ttransform: translateY(-50%);\r\n\t\twidth: 80%;*/\n    display: table-cell;\n    vertical-align: middle; }\n  .quote_box h4, .quote_box p {\n    text-align: center; }\n  .quote_box p {\n    color: #b9a26a;\n    margin: 0 auto; }\n  .title_box {\n  height: 200px;\n  width: 100%;\n  display: table; }\n  .title_box h2 {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center; }\n  .relative {\n  margin: 0 auto;\n  width: 80%;\n  height: 100%; }\n  .table {\n  display: table; }\n  @media only screen and (min-width: 320px) and (max-width: 375px) {\n  .quote_box {\n    height: 600px; } }\n  @media only screen and (min-width: 375px) and (max-width: 425px) {\n  .quote_box {\n    height: 600px; } }\n  @media only screen and (min-width: 425px) and (max-width: 768px) {\n  .quote_box {\n    height: 600px; } }\n  @media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .quote_box {\n    height: 600px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@pages/home/home.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");

/*tslint:disable*/
/**
 * Global imports
 */

/**
 * Local imports
 */


/**
 * PAGE => Home
 */
var HomePage = /** @class */ (function () {
    function HomePage(domSanitizer, api, mamApi) {
        this.domSanitizer = domSanitizer;
        this.api = api;
        this.mamApi = mamApi;
    }
    /**
     * Events
     */
    HomePage.prototype.ngOnInit = function () {
        this.retrieve();
        this.getQuote();
    };
    /**
     * Actions
     */
    HomePage.prototype.retrieve = function () {
        this.images = this.api.getHighlightImages();
    };
    HomePage.prototype.getQuote = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var response;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mamApi.getBiography()];
                    case 1:
                        response = _a.sent();
                        this.featuredContent = {
                            content: response.biography[0].authorQuote,
                            author: response.biography[0].name
                        };
                        this.quote = this.featuredContent.content;
                        this.author = this.featuredContent.author;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.parse = function (value) {
        return this.domSanitizer.bypassSecurityTrustHtml(value);
    };
    HomePage.prototype.changeMenu = function () {
        //-- DO SOMETHING
    };
    HomePage = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/client/app/@pages/home/home.page.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@pages/home/home.page.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__mam_api__["d" /* ImageApi */], __WEBPACK_IMPORTED_MODULE_2__mam_api__["e" /* MAMApi */]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_page__ = __webpack_require__("../../../../../src/client/app/@pages/home/home.page.ts");

/**
 * Global imports
 */


/**
 * Page
 */

//-- Routing
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__home_page__["a" /* HomePage */]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/mam/mam.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mam_page__ = __webpack_require__("../../../../../src/client/app/@pages/mam/mam.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_routing__ = __webpack_require__("../../../../../src/client/app/@pages/mam/mam.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mam_instance_components__ = __webpack_require__("../../../../../src/client/app/@instance-components/index.ts");

/**
 * Global imports
 */

/**
 * Page imports
 */


/**
 * Local imports
 */

/**
 * Module page declaration
 */
var MamModule = /** @class */ (function () {
    function MamModule() {
    }
    MamModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__mam_routing__["a" /* MamRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__mam_instance_components__["a" /* InstanceComponentsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__mam_page__["a" /* MamPage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__mam_page__["a" /* MamPage */]]
        })
    ], MamModule);
    return MamModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/mam/mam.page.html":
/***/ (function(module, exports) {

module.exports = "<mam-instance-header-sticky></mam-instance-header-sticky>\r\n<mam-instance-header [isMAM]= \"true\"></mam-instance-header>\r\n\r\n<mam-instance-box-bio></mam-instance-box-bio>\r\n\r\n<mam-banner-instance-logros></mam-banner-instance-logros>\r\n<mam-banner-instance-aptitudes></mam-banner-instance-aptitudes>\r\n\r\n<mam-instance-banner-miembros></mam-instance-banner-miembros>    \r\n<mam-instance-banner-instagram></mam-instance-banner-instagram>\r\n<mam-instance-footer></mam-instance-footer>"

/***/ }),

/***/ "../../../../../src/client/app/@pages/mam/mam.page.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@pages/mam/mam.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/*tslint:disable*/
/**
 * Global imports
 */

/**
 * PAGE => MAM
 */
var MamPage = /** @class */ (function () {
    function MamPage() {
    }
    MamPage.prototype.ngOnInit = function () { };
    MamPage.prototype.changeMenu = function () {
    };
    MamPage = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-mam-page',
            template: __webpack_require__("../../../../../src/client/app/@pages/mam/mam.page.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@pages/mam/mam.page.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], MamPage);
    return MamPage;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/mam/mam.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MamRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_page__ = __webpack_require__("../../../../../src/client/app/@pages/mam/mam.page.ts");

/**
 * Global imports
 */


/**
 * Page
 */

//-- Routing
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__mam_page__["a" /* MamPage */]
    }
];
var MamRoutingModule = /** @class */ (function () {
    function MamRoutingModule() {
    }
    MamRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], MamRoutingModule);
    return MamRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/not-found/not-found.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_page__ = __webpack_require__("../../../../../src/client/app/@pages/not-found/not-found.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_routing__ = __webpack_require__("../../../../../src/client/app/@pages/not-found/not-found.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mam_instance_components__ = __webpack_require__("../../../../../src/client/app/@instance-components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mam_components__ = __webpack_require__("../../../../../src/client/app/@components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mam_services__ = __webpack_require__("../../../../../src/client/app/@services/index.ts");

/**
 * Global imports
 */


/**
 * Page imports
 */


/**
 * Local imports
 */



/**
 * Module page declaration
 */
var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    NotFoundModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__not_found_routing__["a" /* NotFoundRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__mam_instance_components__["a" /* InstanceComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__mam_components__["b" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__mam_services__["c" /* ServicesModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__not_found_page__["a" /* NotFoundPage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__not_found_page__["a" /* NotFoundPage */]]
        })
    ], NotFoundModule);
    return NotFoundModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/not-found/not-found.page.html":
/***/ (function(module, exports) {

module.exports = "<mam-instance-header-sticky></mam-instance-header-sticky>\r\n\r\n<img src=\"assets/svg/mam-logo-black.svg\" alt=\"\" class=\"logo\" (click)=\"CTA.inicio()\" /> \r\n<br>\r\n<br>\r\n\r\n<h1 class=\"title\" font-uppercase font-center font-bold font-hiper>404</h1>\r\n<br>\r\n\r\n<div class=\"row justify-content-center\">\r\n\t<div class=\"col-9\">\r\n\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\t</div>\r\n</div>\r\n<br>\r\n<br>\r\n\r\n<h4 class=\"title\" font-uppercase font-center>mira lo mejor de cada historia</h4>\r\n\r\n<div #renderImages></div>\r\n<!--<mam-thumbnail-block-image [images]=\"images | async\"></mam-thumbnail-block-image>-->\r\n\r\n<mam-instance-banner-instagram></mam-instance-banner-instagram>\r\n<mam-instance-footer></mam-instance-footer>"

/***/ }),

/***/ "../../../../../src/client/app/@pages/not-found/not-found.page.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\n  position: absolute;\n  top: 1.5rem;\n  left: 1.5rem;\n  z-index: 2;\n  height: 40px;\n  width: auto; }\n\n.logo:hover {\n  cursor: pointer; }\n\n[font-hiper] {\n  font-size: 5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@pages/not-found/not-found.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mam_components__ = __webpack_require__("../../../../../src/client/app/@components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mam_services__ = __webpack_require__("../../../../../src/client/app/@services/index.ts");

/*tslint:disable*/
/**
 * Global imports
 */


/**
 * Local imports
 */



/**
 * PAGE => NotFound
 */
var NotFoundPage = /** @class */ (function () {
    function NotFoundPage(api, resolver, changeDetector, CTA) {
        this.api = api;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.CTA = CTA;
        this.titulo = "Sigue estas y otras historias en instagram";
    }
    /**
     * Events
     */
    NotFoundPage.prototype.ngOnInit = function () {
        this.retrieve();
    };
    /**
     * Actions
     */
    NotFoundPage.prototype.retrieve = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.render;
                        return [4 /*yield*/, this.api.getHighlightImages().toPromise()];
                    case 1:
                        _a.apply(this, [_b.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    NotFoundPage.prototype.render = function (images) {
        //-- Creating component
        var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__mam_components__["d" /* ThumbnailBlockImageComponent */]);
        var reference = this.renderImages.createComponent(factory);
        var component = reference.instance;
        //-- Setting component params
        component.images = images;
        //-- Detect changes
        this.changeDetector.detectChanges();
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('renderImages', { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewContainerRef */] }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewContainerRef */])
    ], NotFoundPage.prototype, "renderImages", void 0);
    NotFoundPage = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-not-found-page',
            template: __webpack_require__("../../../../../src/client/app/@pages/not-found/not-found.page.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@pages/not-found/not-found.page.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__mam_api__["d" /* ImageApi */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__mam_services__["a" /* CTAService */]])
    ], NotFoundPage);
    return NotFoundPage;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/not-found/not-found.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_page__ = __webpack_require__("../../../../../src/client/app/@pages/not-found/not-found.page.ts");

/**
 * Global imports
 */


/**
 * Page
 */

//-- Routing
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__not_found_page__["a" /* NotFoundPage */]
    }
];
var NotFoundRoutingModule = /** @class */ (function () {
    function NotFoundRoutingModule() {
    }
    NotFoundRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], NotFoundRoutingModule);
    return NotFoundRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/portafolio/portafolio.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortafolioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portafolio_page__ = __webpack_require__("../../../../../src/client/app/@pages/portafolio/portafolio.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portafolio_routing__ = __webpack_require__("../../../../../src/client/app/@pages/portafolio/portafolio.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mam_instance_components__ = __webpack_require__("../../../../../src/client/app/@instance-components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mam_components__ = __webpack_require__("../../../../../src/client/app/@components/index.ts");

/**
 * Global imports
 */


/**
 * Page imports
 */


/**
 * Local imports
 */


/**
 * Module page declaration
 */
var PortafolioModule = /** @class */ (function () {
    function PortafolioModule() {
    }
    PortafolioModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__portafolio_routing__["a" /* PortafolioRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__mam_instance_components__["a" /* InstanceComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__mam_components__["b" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__portafolio_page__["a" /* PortafolioPage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__portafolio_page__["a" /* PortafolioPage */]]
        })
    ], PortafolioModule);
    return PortafolioModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/portafolio/portafolio.page.html":
/***/ (function(module, exports) {

module.exports = "<mam-instance-header-sticky></mam-instance-header-sticky>\r\n<mam-instance-header  [isPortafolio]=\"true\"></mam-instance-header>\r\n\r\n<br>\r\n<br>\r\n<h4 class=\"title\" font-uppercase font-center>Lo mejor de cada historia</h4>\r\n\r\n<div #renderImages></div>\r\n<br>\r\n\r\n<mam-instance-banner-instagram></mam-instance-banner-instagram>\r\n<div class=\"break\"></div>\r\n<mam-instance-footer></mam-instance-footer>"

/***/ }),

/***/ "../../../../../src/client/app/@pages/portafolio/portafolio.page.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".break {\n  margin-bottom: 190px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/@pages/portafolio/portafolio.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortafolioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mam_api__ = __webpack_require__("../../../../../src/client/app/@api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mam_components__ = __webpack_require__("../../../../../src/client/app/@components/index.ts");

/*tslint:disable*/
/**
 * Global imports
 */


/**
 * Local imports
 */


/**
 * PAGE => Portafolio
 */
var PortafolioPage = /** @class */ (function () {
    function PortafolioPage(api, resolver, changeDetector) {
        this.api = api;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.titulo = "Sigue estas y otras historias en instagram";
    }
    /**
     * Events
     */
    PortafolioPage.prototype.ngOnInit = function () {
        this.retrieve();
    };
    /**
     * Actions
     */
    PortafolioPage.prototype.retrieve = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.render;
                        return [4 /*yield*/, this.api.getHighlightImages().toPromise()];
                    case 1:
                        _a.apply(this, [_b.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    PortafolioPage.prototype.render = function (images) {
        //-- Creating component
        var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__mam_components__["d" /* ThumbnailBlockImageComponent */]);
        var reference = this.renderImages.createComponent(factory);
        var component = reference.instance;
        //-- Setting component params
        component.images = images;
        //-- Detect changes
        this.changeDetector.detectChanges();
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('renderImages', { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewContainerRef */] }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewContainerRef */])
    ], PortafolioPage.prototype, "renderImages", void 0);
    PortafolioPage = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-portafolio-page',
            template: __webpack_require__("../../../../../src/client/app/@pages/portafolio/portafolio.page.html"),
            styles: [__webpack_require__("../../../../../src/client/app/@pages/portafolio/portafolio.page.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__mam_api__["d" /* ImageApi */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */]])
    ], PortafolioPage);
    return PortafolioPage;
}());



/***/ }),

/***/ "../../../../../src/client/app/@pages/portafolio/portafolio.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortafolioRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portafolio_page__ = __webpack_require__("../../../../../src/client/app/@pages/portafolio/portafolio.page.ts");

/**
 * Global imports
 */


/**
 * Page
 */

//-- Routing
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__portafolio_page__["a" /* PortafolioPage */]
    }
];
var PortafolioRoutingModule = /** @class */ (function () {
    function PortafolioRoutingModule() {
    }
    PortafolioRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], PortafolioRoutingModule);
    return PortafolioRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@services/@services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cta_service__ = __webpack_require__("../../../../../src/client/app/@services/cta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_service__ = __webpack_require__("../../../../../src/client/app/@services/form.service.ts");

/**
 * Global imports
 */


/**
 * Local imports
 */


/**
 * This module contains every general service of the SPA
 * NOTE: It provides, DO NOT provide in other parts of the code
 */
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_3__cta_service__["a" /* CTAService */], __WEBPACK_IMPORTED_MODULE_4__form_service__["a" /* FormService */]]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/@services/cta.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CTAService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");

/**
 * Global Imports
 */


/**
 * This service manages the routing of the SPA
 */
var CTAService = /** @class */ (function () {
    function CTAService(router) {
        var _this = this;
        this.router = router;
        this.$routeChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.$actualRoute = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.router.events
            .subscribe(function (navigation) {
            if (!(navigation instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationStart */]))
                return;
            _this.$actualRoute.emit(navigation.url);
        });
    }
    /**
     * Get actual url
     */
    CTAService.prototype.getActualUrl = function () {
        return this.router.url;
    };
    /**
     * Main CTA's
     */
    CTAService.prototype.inicio = function () {
        window.scrollTo(0, 0);
        $("body").removeClass("blockScroll");
        this.router.navigateByUrl('/');
        this.$routeChange.emit({
            route: 'none',
            params: undefined
        });
    };
    CTAService.prototype.contacto = function (ancla) {
        $("body").removeClass("blockScroll");
        if (ancla == undefined) {
            window.scrollTo(0, 0);
            this.router.navigateByUrl('/contacto');
            this.$routeChange.emit({
                route: 'none',
                params: undefined
            });
        }
        else {
            this.router.navigateByUrl('/contacto');
            this.$routeChange.emit({
                route: '/contacto',
                params: ancla
            });
        }
    };
    CTAService.prototype.historias = function () {
        window.scrollTo(0, 0);
        $("body").removeClass("blockScroll");
        this.router.navigateByUrl('/historias');
        this.$routeChange.emit({
            route: 'none',
            params: undefined
        });
    };
    CTAService.prototype.mam = function () {
        window.scrollTo(0, 0);
        $("body").removeClass("blockScroll");
        this.router.navigateByUrl('/mam');
        this.$routeChange.emit({
            route: 'none',
            params: undefined
        });
    };
    CTAService.prototype.portafolio = function () {
        window.scrollTo(0, 0);
        $("body").removeClass("blockScroll");
        this.router.navigateByUrl('/portafolio');
        this.$routeChange.emit({
            route: 'none',
            params: undefined
        });
    };
    /**
     * @param id ID of the historia
     */
    CTAService.prototype.historia = function (id) {
        window.scrollTo(0, 0);
        $("body").removeClass("blockScroll");
        this.router.navigateByUrl("/historia-detalle/" + id);
        this.$routeChange.emit({
            route: 'none',
            params: undefined
        });
    };
    CTAService = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CTAService);
    return CTAService;
}());



/***/ }),

/***/ "../../../../../src/client/app/@services/form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Global Imports
 */

/**
 * [Service description]
 */
var FormService = /** @class */ (function () {
    function FormService() {
        this.submit$ = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.submitLock = false;
        this.clicked = false;
    }
    FormService.prototype.showErrors = function (Form) {
        var _this = this;
        this.myForm = Form;
        this.clicked = true;
        if (this.myForm.valid) {
            this.submit(Form);
        }
        else {
            var keys = Object.keys(this.myForm.controls);
            keys.forEach(function (key, index) {
                _this.myForm.controls[key].markAsTouched();
            });
        }
    };
    FormService.prototype.submit = function (form) {
        this.myForm = form;
        this.submitLock = true;
        this.submit$.emit(this.myForm.value);
    };
    FormService.prototype.unlockSubmit = function () {
        this.myForm.reset();
        this.submitLock = false;
        this.clicked = false;
    };
    FormService = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])()
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "../../../../../src/client/app/@services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_module__ = __webpack_require__("../../../../../src/client/app/@services/@services.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__services_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cta_service__ = __webpack_require__("../../../../../src/client/app/@services/cta.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__cta_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_service__ = __webpack_require__("../../../../../src/client/app/@services/form.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__form_service__["a"]; });
/**
 * Export module
 */

/**
 * Export services
 */




/***/ }),

/***/ "../../../../../src/client/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export homeLoader */
/* unused harmony export contactoLoader */
/* unused harmony export historiasLoader */
/* unused harmony export mamLoader */
/* unused harmony export portafolioLoader */
/* unused harmony export notFoundLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_module__ = __webpack_require__("../../../../../src/client/app/@pages/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contacto_contacto_module__ = __webpack_require__("../../../../../src/client/app/@pages/contacto/contacto.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_historias_historias_module__ = __webpack_require__("../../../../../src/client/app/@pages/historias/historias.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_historia_historia_module__ = __webpack_require__("../../../../../src/client/app/@pages/historia/historia.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mam_mam_module__ = __webpack_require__("../../../../../src/client/app/@pages/mam/mam.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_portafolio_portafolio_module__ = __webpack_require__("../../../../../src/client/app/@pages/portafolio/portafolio.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_not_found_not_found_module__ = __webpack_require__("../../../../../src/client/app/@pages/not-found/not-found.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home_page__ = __webpack_require__("../../../../../src/client/app/@pages/home/home.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contacto_contacto_page__ = __webpack_require__("../../../../../src/client/app/@pages/contacto/contacto.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_historias_historias_page__ = __webpack_require__("../../../../../src/client/app/@pages/historias/historias.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_historia_historia_page__ = __webpack_require__("../../../../../src/client/app/@pages/historia/historia.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mam_mam_page__ = __webpack_require__("../../../../../src/client/app/@pages/mam/mam.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_portafolio_portafolio_page__ = __webpack_require__("../../../../../src/client/app/@pages/portafolio/portafolio.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_not_found_not_found_page__ = __webpack_require__("../../../../../src/client/app/@pages/not-found/not-found.page.ts");

/**
 * Global modules
 */


/**
 * Module loaders
 */














function homeLoader() { return __WEBPACK_IMPORTED_MODULE_3__pages_home_home_module__["a" /* HomeModule */]; }
function contactoLoader() { return __WEBPACK_IMPORTED_MODULE_4__pages_contacto_contacto_module__["a" /* ContactoModule */]; }
function historiasLoader() { return __WEBPACK_IMPORTED_MODULE_5__pages_historias_historias_module__["a" /* HistoriasModule */]; }
function mamLoader() { return __WEBPACK_IMPORTED_MODULE_7__pages_mam_mam_module__["a" /* MamModule */]; }
function portafolioLoader() { return __WEBPACK_IMPORTED_MODULE_8__pages_portafolio_portafolio_module__["a" /* PortafolioModule */]; }
function notFoundLoader() { return __WEBPACK_IMPORTED_MODULE_9__pages_not_found_not_found_module__["a" /* NotFoundModule */]; }
//-- Routing
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_10__pages_home_home_page__["a" /* HomePage */]
    },
    {
        path: 'contacto',
        component: __WEBPACK_IMPORTED_MODULE_11__pages_contacto_contacto_page__["a" /* ContactoPage */]
    },
    {
        path: 'historias',
        component: __WEBPACK_IMPORTED_MODULE_12__pages_historias_historias_page__["a" /* HistoriasPage */]
    },
    {
        path: 'historia/:slug',
        component: __WEBPACK_IMPORTED_MODULE_13__pages_historia_historia_page__["a" /* HistoriaPage */]
    },
    {
        path: 'mam',
        component: __WEBPACK_IMPORTED_MODULE_14__pages_mam_mam_page__["a" /* MamPage */]
    },
    {
        path: 'portafolio',
        component: __WEBPACK_IMPORTED_MODULE_15__pages_portafolio_portafolio_page__["a" /* PortafolioPage */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_16__pages_not_found_not_found_page__["a" /* NotFoundPage */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contacto_contacto_module__["a" /* ContactoModule */],
                __WEBPACK_IMPORTED_MODULE_5__pages_historias_historias_module__["a" /* HistoriasModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_mam_mam_module__["a" /* MamModule */],
                __WEBPACK_IMPORTED_MODULE_8__pages_portafolio_portafolio_module__["a" /* PortafolioModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_not_found_not_found_module__["a" /* NotFoundModule */],
                __WEBPACK_IMPORTED_MODULE_6__pages_historia_historia_module__["a" /* HistoriaModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export REQ_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mam_instance_components__ = __webpack_require__("../../../../../src/client/app/@instance-components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/client/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout__ = __webpack_require__("../../../../../src/client/app/layout/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");

/**
 * Global imports
 */




/**
 * Local imports
 */




var REQ_KEY = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* makeStateKey */])('req');
var AppModule = /** @class */ (function () {
    function AppModule(platformId) {
        this.platformId = platformId;
    }
    AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__layout__["a" /* Layout */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'mam-spa' }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__mam_instance_components__["a" /* InstanceComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__["a" /* MatDatepickerModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__["a" /* MatDatepickerModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__layout__["a" /* Layout */]]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["g" /* __param */](0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* PLATFORM_ID */])),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [Object])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_component__ = __webpack_require__("../../../../../src/client/app/layout/layout.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__layout_component__["a"]; });
/**
 * Export layout
 */



/***/ }),

/***/ "../../../../../src/client/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Global imports
 */

/**
 * This component represents the layout of the SPA
 */
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/client/app/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/layout/layout.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    API: {
        BASE: 'http://mam-restful-api.herokuapp.com/api',
        URL: function () {
            return environment.API.BASE + "/";
        }
    }
};


/***/ }),

/***/ "../../../../../src/client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map