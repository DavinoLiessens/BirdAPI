(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Yay":
/*!*******************************!*\
  !*** ./src/app/bird/index.ts ***!
  \*******************************/
/*! exports provided: BirdComponent, BirdDetailComponent, BirdCreateComponent, BirdShowCreateModal, BirdShowUpdateModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bird_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bird.component */ "KkXH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BirdComponent", function() { return _bird_component__WEBPACK_IMPORTED_MODULE_0__["BirdComponent"]; });

/* harmony import */ var _bird_detail_bird_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird-detail/bird-detail.component */ "PlGd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BirdDetailComponent", function() { return _bird_detail_bird_detail_component__WEBPACK_IMPORTED_MODULE_1__["BirdDetailComponent"]; });

/* harmony import */ var _bird_create_bird_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bird-create/bird-create.component */ "eUpS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BirdCreateComponent", function() { return _bird_create_bird_create_component__WEBPACK_IMPORTED_MODULE_2__["BirdCreateComponent"]; });

/* harmony import */ var _bird_show_create_bird_show_create_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bird-show-create/bird-show-create.modal */ "ceQ+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BirdShowCreateModal", function() { return _bird_show_create_bird_show_create_modal__WEBPACK_IMPORTED_MODULE_3__["BirdShowCreateModal"]; });

/* harmony import */ var _bird_show_update_bird_show_update_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bird-show-update/bird-show-update.modal */ "H4wY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BirdShowUpdateModal", function() { return _bird_show_update_bird_show_update_modal__WEBPACK_IMPORTED_MODULE_4__["BirdShowUpdateModal"]; });








/***/ }),

/***/ "+tOW":
/*!*************************************************************!*\
  !*** ./src/app/store/entities/owner/owner.initial-state.ts ***!
  \*************************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    owners: null,
    ownerDetail: null,
    loadingAll: false,
    loadingDetail: false,
    pagination: null,
    errors: null
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Prive_projects\BirdAPI\BirdFrontEnd\src\main.ts */"zUnb");


/***/ }),

/***/ "1Blk":
/*!********************************************!*\
  !*** ./src/app/couple/couple.component.ts ***!
  \********************************************/
/*! exports provided: CoupleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupleComponent", function() { return CoupleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/entities/couple/couple.facade */ "j9ud");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/paginator */ "6t4m");
/* harmony import */ var _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/components/loader/loader.component */ "nzoQ");














function CoupleComponent_p_table_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CoupleComponent_p_table_1_ng_template_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.search = $event; })("keyup", function CoupleComponent_p_table_1_ng_template_2_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onSearch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.search);
} }
function CoupleComponent_p_table_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Koppel naam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Gestart op ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Vader ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Moeder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Kotnummer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoupleComponent_p_table_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const couple_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](couple_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 6, couple_r11.startedAt, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](couple_r11.fatherRingNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](couple_r11.motherRingNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](couple_r11.cageNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/couples/detail/", couple_r11.id, "");
} }
const _c0 = function () { return { "width": "99vw" }; };
const _c1 = function () { return [5, 10, 20, 30]; };
function CoupleComponent_p_table_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-paginator", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function CoupleComponent_p_table_1_ng_template_5_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.paginate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r6.pagination.pageSize)("first", ctx_r6.first)("totalRecords", ctx_r6.pagination.totalAmount)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
} }
function CoupleComponent_p_table_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Geen koppel gevonden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoupleComponent_p_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CoupleComponent_p_table_1_ng_template_2_Template, 4, 1, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CoupleComponent_p_table_1_ng_template_3_Template, 19, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CoupleComponent_p_table_1_ng_template_4_Template, 19, 9, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CoupleComponent_p_table_1_ng_template_5_Template, 2, 8, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CoupleComponent_p_table_1_ng_template_6_Template, 3, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.couples);
} }
function CoupleComponent_c_loader_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-loader");
} }
class CoupleComponent {
    constructor(coupleFacade, router, route) {
        this.coupleFacade = coupleFacade;
        this.router = router;
        this.route = route;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.couples$ = this.coupleFacade.getCouples();
        this.pagination$ = this.coupleFacade.getPagination();
        this.loading$ = this.coupleFacade.getLoading();
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.search = '';
        this.page = 1;
        this.pageSize = 10;
        this.first = (this.page - 1) * this.pageSize;
    }
    ngOnInit() {
        // Subscribe to changes in the query parameters
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((params) => {
            let request = {
                page: this.page,
                pageSize: this.pageSize,
                searchValue: ''
            };
            if (params.search) {
                // Assign the 'search' parameter to the search field
                const search = params.search.toLowerCase();
                this.search = search;
                this.page = 1;
                request = {
                    page: this.page,
                    pageSize: this.pageSize,
                    searchValue: search
                };
            }
            this.CalculateFirst();
            this.GetAllCouples(request);
        });
        // get all couples
        this.couples$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((couples) => {
            if (couples !== null && couples !== undefined) {
                this.couples = couples;
            }
        });
        this.pagination$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((pagination) => {
            this.pagination = pagination;
            this.CalculateFirst();
        });
        this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).subscribe((searchValue) => {
            if (searchValue !== null && searchValue !== undefined) {
                const search = searchValue.toLowerCase();
                // Update the query parameter in the URL
                this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams: { search: search },
                    queryParamsHandling: 'merge',
                });
            }
        });
    }
    onSearch(searchTerm) {
        this.search$.next(searchTerm);
    }
    paginate(event) {
        this.page = event.page + 1;
        this.pageSize = event.rows;
        this.CalculateFirst();
        const request = {
            page: this.page,
            pageSize: this.pageSize,
            searchValue: this.search
        };
        this.GetAllCouples(request);
    }
    DeleteCouple(id) {
        console.log("deleting couple with id", id);
    }
    CalculateFirst() {
        this.first = (this.page - 1) * this.pageSize;
    }
    GetAllCouples(request) {
        this.coupleFacade.getAllCouplesRequest(request);
    }
}
CoupleComponent.ɵfac = function CoupleComponent_Factory(t) { return new (t || CoupleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_3__["CoupleFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
CoupleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoupleComponent, selectors: [["c-couple-overview"]], decls: 6, vars: 6, consts: [[1, "card"], ["dataKey", "id", "styleClass", "p-datatable-customers p-datatable-gridlines", 3, "value", 4, "ngIf"], [1, "p-mt-4"], [4, "ngIf"], ["dataKey", "id", "styleClass", "p-datatable-customers p-datatable-gridlines", 3, "value"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], ["pTemplate", "emptymessage"], [1, "p-d-flex"], [1, "p-input-icon-left", 2, "margin-left", "20px"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Zoek Koppel", 3, "ngModel", "ngModelChange", "keyup"], [1, "p-d-flex", "p-jc-between", "p-ai-center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Details", 1, "detail-button", 2, "margin-left", "5px", 3, "routerLink"], ["currentPageReportTemplate", "{first} van de {totalRecords} resultaten", "showCurrentPageReport", "true", 1, "p-d-flex", "p-jc-center", 3, "rows", "first", "totalRecords", "rowsPerPageOptions", "onPageChange"], ["colspan", "7"]], template: function CoupleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CoupleComponent_p_table_1_Template, 7, 1, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CoupleComponent_c_loader_4_Template, 1, 0, "c-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.loading$) && ctx.couples);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], primeng_paginator__WEBPACK_IMPORTED_MODULE_11__["Paginator"], _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["[_nghost-%COMP%]    tr:nth-child(even) {\n  background-color: #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvdXBsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0FBQVIiLCJmaWxlIjoiY291cGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgICZ0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoupleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-couple-overview',
                templateUrl: './couple.component.html',
                styleUrls: ['./couple.component.scss']
            }]
    }], function () { return [{ type: _store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_3__["CoupleFacade"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "1b/w":
/*!************************************************!*\
  !*** ./src/app/store/entities/store.module.ts ***!
  \************************************************/
/*! exports provided: CoreStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreStoreModule", function() { return CoreStoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _entities_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities.effects */ "J1lM");
/* harmony import */ var _entities_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities.facade */ "jjmU");
/* harmony import */ var _entities_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities.reducer */ "mcr6");
/* harmony import */ var _entities_metareducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities.metareducers */ "51IW");
/* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store.config */ "ogCa");











class CoreStoreModule {
}
CoreStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreStoreModule });
CoreStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreStoreModule_Factory(t) { return new (t || CoreStoreModule)(); }, providers: [
        _entities_facade__WEBPACK_IMPORTED_MODULE_4__["Facades"]
    ], imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(_store_config__WEBPACK_IMPORTED_MODULE_7__["FEATURE_KEY"], _entities_reducer__WEBPACK_IMPORTED_MODULE_5__["Reducers"], _entities_metareducers__WEBPACK_IMPORTED_MODULE_6__["MetaReducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature(_entities_effects__WEBPACK_IMPORTED_MODULE_3__["Effects"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreStoreModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(_store_config__WEBPACK_IMPORTED_MODULE_7__["FEATURE_KEY"], _entities_reducer__WEBPACK_IMPORTED_MODULE_5__["Reducers"], _entities_metareducers__WEBPACK_IMPORTED_MODULE_6__["MetaReducers"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature(_entities_effects__WEBPACK_IMPORTED_MODULE_3__["Effects"])
                ],
                providers: [
                    _entities_facade__WEBPACK_IMPORTED_MODULE_4__["Facades"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "1v1M":
/*!***************************************************************!*\
  !*** ./src/app/store/entities/couple/couple.initial-state.ts ***!
  \***************************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    couples: null,
    coupleDetail: null,
    birdEggDetail: null,
    loadingAll: false,
    loadingDetail: false,
    loadingModal: false,
    pagination: null,
    errors: null
};


/***/ }),

/***/ "4PoU":
/*!*************************************************************!*\
  !*** ./src/app/store/entities/breeder/breeder.selectors.ts ***!
  \*************************************************************/
/*! exports provided: selectBreederState, selectLoadingAll, selectLoadingDetail, selectPagination, selectBreeders, selectBreeder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBreederState", function() { return selectBreederState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingAll", function() { return selectLoadingAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingDetail", function() { return selectLoadingDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPagination", function() { return selectPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBreeders", function() { return selectBreeders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBreeder", function() { return selectBreeder; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store.config */ "ogCa");


const selectBreederState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_store_config__WEBPACK_IMPORTED_MODULE_1__["selectFeature"], (state) => state.breeder);
const selectLoadingAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBreederState, (state) => state.loadingAll);
const selectLoadingDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBreederState, (state) => state.loadingDetail);
const selectPagination = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBreederState, (state) => state.pagination);
const selectBreeders = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBreederState, (state) => state.breeders);
const selectBreeder = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBreederState, (state) => state.breederDetail);


/***/ }),

/***/ "51IW":
/*!*********************************************************!*\
  !*** ./src/app/store/entities/entities.metareducers.ts ***!
  \*********************************************************/
/*! exports provided: MetaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaReducers", function() { return MetaReducers; });
const metaReducers = [];
const MetaReducers = { metaReducers };


/***/ }),

/***/ "6BBq":
/*!*******************************************************!*\
  !*** ./src/app/store/entities/owner/owner.reducer.ts ***!
  \*******************************************************/
/*! exports provided: ownerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ownerReducer", function() { return ownerReducer; });
/* harmony import */ var _owner_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner.actions */ "WGU+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _owner_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner.initial-state */ "+tOW");



const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_owner_initial_state__WEBPACK_IMPORTED_MODULE_2__["initialState"], 
// GET Owners
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_owner_actions__WEBPACK_IMPORTED_MODULE_0__["getOwners"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingAll: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_owner_actions__WEBPACK_IMPORTED_MODULE_0__["getOwnersSuccess"], (state, { owners }) => {
    return Object.assign(Object.assign({}, state), { owners: owners.results, pagination: owners.pagination, loadingAll: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_owner_actions__WEBPACK_IMPORTED_MODULE_0__["getOwnersError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingAll: false, errors: error });
}), 
// GET Owner
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_owner_actions__WEBPACK_IMPORTED_MODULE_0__["getOwner"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingDetail: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_owner_actions__WEBPACK_IMPORTED_MODULE_0__["getOwnerSuccess"], (state, { ownerDetail }) => {
    return Object.assign(Object.assign({}, state), { ownerDetail: ownerDetail, loadingDetail: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_owner_actions__WEBPACK_IMPORTED_MODULE_0__["getOwnerError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingDetail: false, errors: error });
}), 
// UPDATE Owner
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_owner_actions__WEBPACK_IMPORTED_MODULE_0__["updateOwner"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_owner_actions__WEBPACK_IMPORTED_MODULE_0__["updateOwnerSuccess"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_owner_actions__WEBPACK_IMPORTED_MODULE_0__["updateOwnerError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errors: error });
}), 
// Clear detail
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_owner_actions__WEBPACK_IMPORTED_MODULE_0__["clearOwnerDetail"], (state) => {
    return Object.assign(Object.assign({}, state), { ownerDetail: null });
}));
function ownerReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "9QEX":
/*!*****************************************************!*\
  !*** ./src/app/store/entities/bird/bird.reducer.ts ***!
  \*****************************************************/
/*! exports provided: birdReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "birdReducer", function() { return birdReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _bird_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird.actions */ "lLKA");
/* harmony import */ var _bird_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bird.initial-state */ "vzwB");



const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_bird_initial_state__WEBPACK_IMPORTED_MODULE_2__["initialState"], 
// GET Birds
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["getBirds"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingAll: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["getBirdsSuccess"], (state, { birds }) => {
    return Object.assign(Object.assign({}, state), { birds: birds.results, pagination: birds.pagination, loadingAll: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["getBirdsError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingAll: false, errors: error });
}), 
// GET Bird
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["getBird"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingDetail: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["getBirdSuccess"], (state, { birdDetail }) => {
    return Object.assign(Object.assign({}, state), { birdDetail: birdDetail, loadingDetail: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["getBirdError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingDetail: false, errors: error });
}), 
// UPDATE Bird
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["updateBird"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["updateBirdSuccess"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["updateBirdError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errors: error });
}), 
// bird
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["getBirdShow"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingModal: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["getBirdShowSuccess"], (state, { birdShowDetail }) => {
    return Object.assign(Object.assign({}, state), { birdShowDetail: birdShowDetail, loadingModal: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["getBirdShowError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingModal: false, errors: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["updateBirdShow"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingModal: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["updateBirdShowSuccess"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingModal: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["updateBirdShowError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingModal: false, errors: error });
}), 
// Clear detail
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_bird_actions__WEBPACK_IMPORTED_MODULE_1__["clearBirdDetail"], (state) => {
    return Object.assign(Object.assign({}, state), { birdShowDetail: null });
}));
function birdReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "AchS":
/*!******************************************!*\
  !*** ./src/app/owner/owner.component.ts ***!
  \******************************************/
/*! exports provided: OwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerComponent", function() { return OwnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/entities/owner/owner.facade */ "btcf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/paginator */ "6t4m");
/* harmony import */ var _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/components/loader/loader.component */ "nzoQ");














function OwnerComponent_p_table_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OwnerComponent_p_table_1_ng_template_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.search = $event; })("keyup", function OwnerComponent_p_table_1_ng_template_2_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onSearch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.search);
} }
function OwnerComponent_p_table_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Voornaam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Naam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Telefoon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OwnerComponent_p_table_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const owner_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](owner_r11.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](owner_r11.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](owner_r11.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](owner_r11.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/owners/detail/", owner_r11.id, "");
} }
const _c0 = function () { return { "width": "99vw" }; };
const _c1 = function () { return [5, 10, 20, 30]; };
function OwnerComponent_p_table_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-paginator", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function OwnerComponent_p_table_1_ng_template_5_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.paginate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r6.pagination.pageSize)("first", ctx_r6.first)("totalRecords", ctx_r6.pagination.totalAmount)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
} }
function OwnerComponent_p_table_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Geen eigenaars gevonden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OwnerComponent_p_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OwnerComponent_p_table_1_ng_template_2_Template, 4, 1, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OwnerComponent_p_table_1_ng_template_3_Template, 16, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OwnerComponent_p_table_1_ng_template_4_Template, 15, 5, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OwnerComponent_p_table_1_ng_template_5_Template, 2, 8, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OwnerComponent_p_table_1_ng_template_6_Template, 3, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.owners);
} }
function OwnerComponent_c_loader_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-loader");
} }
class OwnerComponent {
    constructor(ownerFacade, router, route) {
        this.ownerFacade = ownerFacade;
        this.router = router;
        this.route = route;
        // Observables
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.owners$ = this.ownerFacade.getOwners();
        this.pagination$ = this.ownerFacade.getPagination();
        this.loading$ = this.ownerFacade.getLoading();
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.search = '';
        this.page = 1;
        this.pageSize = 10;
        this.first = (this.page - 1) * this.pageSize;
    }
    ngOnInit() {
        // Subscribe to changes in the query parameters
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((params) => {
            let request = {
                page: this.page,
                pageSize: this.pageSize,
                searchValue: ''
            };
            if (params.search) {
                // Assign the 'search' parameter to the search field
                const search = params.search.toLowerCase();
                this.search = search;
                this.page = 1;
                request = {
                    page: this.page,
                    pageSize: this.pageSize,
                    searchValue: search
                };
            }
            this.CalculateFirst();
            this.GetAllOwners(request);
        });
        // get all owners
        this.owners$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((owners) => {
            if (owners !== null || owners !== undefined) {
                this.owners = owners;
            }
        });
        this.pagination$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((pagination) => {
            this.pagination = pagination;
            this.CalculateFirst();
        });
        this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).subscribe((searchValue) => {
            if (searchValue !== null && searchValue !== undefined) {
                const search = searchValue.toLowerCase();
                // Update the query parameter in the URL
                this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams: { search: search },
                    queryParamsHandling: 'merge',
                });
            }
        });
    }
    onSearch(searchTerm) {
        this.search$.next(searchTerm);
    }
    paginate(event) {
        this.page = event.page + 1;
        this.pageSize = event.rows;
        this.CalculateFirst();
        const request = {
            page: this.page,
            pageSize: this.pageSize,
            searchValue: this.search
        };
        this.GetAllOwners(request);
    }
    deleteOwner(id) {
        console.log("Deleting owner with id: ", id);
    }
    CalculateFirst() {
        this.first = (this.page - 1) * this.pageSize;
    }
    GetAllOwners(request) {
        this.ownerFacade.getAllOwnersRequest(request);
    }
}
OwnerComponent.ɵfac = function OwnerComponent_Factory(t) { return new (t || OwnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_3__["OwnerFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
OwnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OwnerComponent, selectors: [["c-owner-overview"]], decls: 6, vars: 6, consts: [[1, "c-owner-overview"], ["dataKey", "id", "styleClass", "p-datatable-customers p-datatable-gridlines", 3, "value", 4, "ngIf"], [1, "p-mt-4"], [4, "ngIf"], ["dataKey", "id", "styleClass", "p-datatable-customers p-datatable-gridlines", 3, "value"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], ["pTemplate", "emptymessage"], [1, "p-d-flex"], [1, "p-input-icon-left", 2, "margin-left", "20px"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Zoek Eigenaar", 3, "ngModel", "ngModelChange", "keyup"], [1, "p-d-flex", "p-jc-between", "p-ai-center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Bewerk", 1, "p-button-raised", 2, "margin-left", "10px", 3, "routerLink"], ["currentPageReportTemplate", "{first} van de {totalRecords} resultaten", "showCurrentPageReport", "true", 1, "p-d-flex", "p-jc-center", 3, "rows", "first", "totalRecords", "rowsPerPageOptions", "onPageChange"], ["colspan", "7"]], template: function OwnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OwnerComponent_p_table_1_Template, 7, 1, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OwnerComponent_c_loader_4_Template, 1, 0, "c-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.loading$) && ctx.owners);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], primeng_paginator__WEBPACK_IMPORTED_MODULE_11__["Paginator"], _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%]    tr:nth-child(even) {\n  background-color: #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG93bmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7QUFBUiIsImZpbGUiOiJvd25lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XHJcbiAgICAmdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-owner-overview',
                templateUrl: './owner.component.html',
                styleUrls: ['./owner.component.scss']
            }]
    }], function () { return [{ type: _store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_3__["OwnerFacade"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    webApiBaseUrl: 'https://localhost:44384/api/v1',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Di4I":
/*!********************************************************************!*\
  !*** ./src/app/breeder/breeder-detail/breeder-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: BreederDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreederDetailComponent", function() { return BreederDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_entities_breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/entities/breeder/breeder.facade */ "Xutl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/components/loader/loader.component */ "nzoQ");













function BreederDetailComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kweker bewerken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Voornaam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Naam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Telefoon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BreederDetailComponent_form_6_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BreederDetailComponent_form_6_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.breederForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.breederForm.valid);
} }
function BreederDetailComponent_c_loader_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-loader");
} }
class BreederDetailComponent {
    constructor(fb, breederFacade, router, route, toastrService) {
        this.fb = fb;
        this.breederFacade = breederFacade;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
        // Observables
        this.breeder$ = this.breederFacade.getBreeder();
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loading$ = this.breederFacade.getLoadingDetail();
    }
    ngOnInit() {
        var _a;
        this.breederId = (_a = this.route.snapshot.params) === null || _a === void 0 ? void 0 : _a.id;
        this.breederFacade.getBreederRequest(parseInt(this.breederId));
        this.breeder$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe((breeder) => {
            if (breeder !== null && breeder !== undefined) {
                this.breederForm = this.fb.group({
                    firstName: [breeder.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    lastName: [breeder.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    phoneNumber: [breeder.phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    email: [breeder.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                });
            }
        });
        // handle success and errors
        this.handleSuccesses();
        this.handleErrors();
    }
    onSubmit() {
        const request = {
            id: parseInt(this.breederId),
            firstName: this.breederForm.get('firstName').value,
            lastName: this.breederForm.get('lastName').value,
            phoneNumber: this.breederForm.get('phoneNumber').value,
            email: this.breederForm.get('email').value,
        };
        this.breederFacade.updateBreederRequest(request);
    }
    goBack() {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
    handleSuccesses() {
        this.breederFacade.onUpdateBreederSuccess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.success('Kweker gegevens aangepast!', 'Gelukt', {
                timeOut: 6000,
            });
            const request = {
                page: 1,
                pageSize: 10,
            };
            this.breederFacade.getAllBreedersRequest(request);
            this.breederFacade.clearDetail();
            this.goBack();
        });
    }
    handleErrors() {
        this.breederFacade.onUpdateBreederError().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.error('Oeps, er liep iets mis tijdens het aanpassen van deze kweker!', 'Error', {
                timeOut: 6000,
            });
        });
    }
}
BreederDetailComponent.ɵfac = function BreederDetailComponent_Factory(t) { return new (t || BreederDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_4__["BreederFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
BreederDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreederDetailComponent, selectors: [["c-breeder-detail"]], decls: 11, vars: 6, consts: [[1, "page"], [1, "page-wrapper"], [1, "page-header"], [1, "page-body"], [3, "formGroup", 4, "ngIf"], [1, "p-mt-4"], [4, "ngIf"], [3, "formGroup"], [1, "form-group"], ["for", "firstName"], ["pInputText", "", "type", "text", "formControlName", "firstName", "id", "firstName", "placeholder", "Davino", 1, "form-control"], ["for", "lastName"], ["pInputText", "", "type", "text", "formControlName", "lastName", "id", "lastName", "placeholder", "Liessens", 1, "form-control"], ["for", "phoneNumber"], ["pInputText", "", "type", "text", "formControlName", "phoneNumber", "id", "phoneNumber", "placeholder", "+324........", 1, "form-control"], ["for", "email"], ["pInputText", "", "type", "email", "formControlName", "email", "id", "email", "placeholder", "davino.liessens@telenet.be", 1, "form-control"], [1, "form-footer"], ["pButton", "", "type", "button", "label", "Terug", 1, "p-button-outlined", 3, "click"], ["pButton", "", "type", "submit", "label", "Opslaan", 3, "disabled", "click"]], template: function BreederDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Breeder management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BreederDetailComponent_form_6_Template, 22, 2, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BreederDetailComponent_c_loader_9_Template, 1, 0, "c-loader", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breederForm && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"], _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --primary-color: #e94e0f;\n  --primary-light-color: #f2642c;\n  --primary-background-color: #fef6f3;\n  --accent-color: #870b58;\n  --accent-dark-color: #5e083d;\n  --accent-light-color: #fbd0eb;\n  --yellow-brand-color: #f8ad07;\n  --accent-20-color: #e1c2d5;\n  --info-color: #415fca;\n  --info-light-color: hsl(227, 56%, 52%, 0.1);\n  --success-color: #21bc5f;\n  --success-light-color: hsla(144, 70%, 43%, 0.1);\n  --warning-color: #ffc700;\n  --warning-light-color: #FDEAC1;\n  --danger-color: #ff005c;\n  --danger-light-color: hsla(338, 100%, 50%, 0.8);\n  --danger-lighter-color: hsla(338, 100%, 90%, 0.8);\n  --brand-red-color: #E4003A;\n  --brand-red-20-color: #F8BFCD;\n  --brand-orange-color: #E94E0F;\n  --brand-orange-20-color: #F9D2C3;\n  --brand-yellow-color: #F8AD07;\n  --brand-yellow-20-color: #FDEAC1;\n  --brand-purple-color: #870B58;\n  --brand-purple-20-color: #E1C2D5;\n  --tuna-gray-color: #303642;\n  --tuna-gray-80-color: #555d71;\n  --tuna-gray-60-color: #7f8594;\n  --tuna-gray-40-color: #aaaeb8;\n  --tuna-gray-20-color: #f6f6f6;\n  --slate-gray-color: #7783a0;\n  --slate-gray-80-color: #929bb3;\n  --slate-gray-60-color: #adb4c6;\n  --slate-gray-40-color: #c8cdd9;\n  --slate-gray-20-color: #e3e6ec;\n  --slate-gray-10-color: #f1f3f5;\n  --slate-gray-5-color: #f8fafc;\n  --white-color: #ffffff;\n  --black-color: #000000;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 71px);\n  overflow: auto;\n  background-color: var(--slate-gray-5-color);\n  background-image: url('background.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  width: 70vw;\n  margin: 0 auto;\n  background-color: rgba(255, 255, 255, 0.6);\n  margin-top: 32px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--slate-gray-20-color);\n  background-color: var(--tuna-gray-20-color);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.page-body[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n}\n\n.page-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR0aW5nc1xcX2NvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGJyZWVkZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUMsd0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFHQSwwQkFBQTtFQUdBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSx3QkFBQTtFQUNBLCtDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSxpREFBQTtFQUdBLDBCQUFBO0VBQ0EsNkJBQUE7RUFFQSw2QkFBQTtFQUNBLGdDQUFBO0VBRUEsNkJBQUE7RUFDQSxnQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFHQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRUEsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFFQSxzQkFBQTtFQUNBLHNCQUFBO0FDakJEOztBQXRDQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQXlDSjs7QUF0Q0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUF5Q0o7O0FBdENBO0VBQ0ksbURBQUE7RUFDQSwyQ0FBQTtBQXlDSjs7QUF2Q0k7RUFDSSxhQUFBO0FBeUNSOztBQXJDQTtFQUNJLGtCQUFBO0FBd0NKOztBQXRDSTtFQUNJLG9CQUFBO0FBd0NSIiwiZmlsZSI6ImJyZWVkZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGVsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ29sb3JzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjpyb290IHtcclxuXHQvLyBCcmFuZCBpZGVudGl0eSBjb2xvcnNcclxuXHQtLXByaW1hcnktY29sb3I6ICNlOTRlMGY7XHJcblx0LS1wcmltYXJ5LWxpZ2h0LWNvbG9yOiAjZjI2NDJjO1xyXG5cdC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmNmYzO1xyXG5cdC0tYWNjZW50LWNvbG9yOiAjODcwYjU4O1xyXG5cdC0tYWNjZW50LWRhcmstY29sb3I6ICM1ZTA4M2Q7XHJcblx0LS1hY2NlbnQtbGlnaHQtY29sb3I6ICNmYmQwZWI7XHJcblx0LS15ZWxsb3ctYnJhbmQtY29sb3I6ICNmOGFkMDc7XHJcblxyXG5cdC8vIENvbXBsZW1lbnRhcnkgY29sb3JzXHJcblx0LS1hY2NlbnQtMjAtY29sb3I6ICNlMWMyZDU7XHJcblxyXG5cdC8vIFN0YXRlc1xyXG5cdC0taW5mby1jb2xvcjogIzQxNWZjYTtcclxuXHQtLWluZm8tbGlnaHQtY29sb3I6IGhzbCgyMjcsIDU2JSwgNTIlLCAwLjEpO1xyXG5cdC0tc3VjY2Vzcy1jb2xvcjogIzIxYmM1ZjtcclxuXHQtLXN1Y2Nlc3MtbGlnaHQtY29sb3I6IGhzbGEoMTQ0LCA3MCUsIDQzJSwgMC4xKTtcclxuXHQtLXdhcm5pbmctY29sb3I6ICNmZmM3MDA7XHJcblx0LS13YXJuaW5nLWxpZ2h0LWNvbG9yOiAjRkRFQUMxO1xyXG5cdC0tZGFuZ2VyLWNvbG9yOiAjZmYwMDVjO1xyXG5cdC0tZGFuZ2VyLWxpZ2h0LWNvbG9yOiBoc2xhKDMzOCwgMTAwJSwgNTAlLCAwLjgpO1xyXG5cdC0tZGFuZ2VyLWxpZ2h0ZXItY29sb3I6IGhzbGEoMzM4LCAxMDAlLCA5MCUsIDAuOCk7XHJcblxyXG5cdC8vIEV4dHJhIGNvbG9yc1xyXG5cdC0tYnJhbmQtcmVkLWNvbG9yOiAjRTQwMDNBO1xyXG5cdC0tYnJhbmQtcmVkLTIwLWNvbG9yOiAjRjhCRkNEO1xyXG5cclxuXHQtLWJyYW5kLW9yYW5nZS1jb2xvcjogI0U5NEUwRjtcclxuXHQtLWJyYW5kLW9yYW5nZS0yMC1jb2xvcjogI0Y5RDJDMztcclxuXHJcblx0LS1icmFuZC15ZWxsb3ctY29sb3I6ICNGOEFEMDc7XHJcblx0LS1icmFuZC15ZWxsb3ctMjAtY29sb3I6ICNGREVBQzE7XHJcblxyXG5cdC0tYnJhbmQtcHVycGxlLWNvbG9yOiAjODcwQjU4O1xyXG5cdC0tYnJhbmQtcHVycGxlLTIwLWNvbG9yOiAjRTFDMkQ1O1xyXG5cclxuXHQvLyBHcmF5c2NhbGVcclxuXHQtLXR1bmEtZ3JheS1jb2xvcjogIzMwMzY0MjtcclxuXHQtLXR1bmEtZ3JheS04MC1jb2xvcjogIzU1NWQ3MTtcclxuXHQtLXR1bmEtZ3JheS02MC1jb2xvcjogIzdmODU5NDtcclxuXHQtLXR1bmEtZ3JheS00MC1jb2xvcjogI2FhYWViODtcclxuXHQtLXR1bmEtZ3JheS0yMC1jb2xvcjogI2Y2ZjZmNjtcclxuXHJcblx0LS1zbGF0ZS1ncmF5LWNvbG9yOiAjNzc4M2EwO1xyXG5cdC0tc2xhdGUtZ3JheS04MC1jb2xvcjogIzkyOWJiMztcclxuXHQtLXNsYXRlLWdyYXktNjAtY29sb3I6ICNhZGI0YzY7XHJcblx0LS1zbGF0ZS1ncmF5LTQwLWNvbG9yOiAjYzhjZGQ5O1xyXG5cdC0tc2xhdGUtZ3JheS0yMC1jb2xvcjogI2UzZTZlYztcclxuXHQtLXNsYXRlLWdyYXktMTAtY29sb3I6ICNmMWYzZjU7XHJcblx0LS1zbGF0ZS1ncmF5LTUtY29sb3I6ICNmOGZhZmM7XHJcblxyXG5cdC0td2hpdGUtY29sb3I6ICNmZmZmZmY7XHJcblx0LS1ibGFjay1jb2xvcjogIzAwMDAwMDtcclxufVxyXG4iLCI6cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogI2U5NGUwZjtcbiAgLS1wcmltYXJ5LWxpZ2h0LWNvbG9yOiAjZjI2NDJjO1xuICAtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZlZjZmMztcbiAgLS1hY2NlbnQtY29sb3I6ICM4NzBiNTg7XG4gIC0tYWNjZW50LWRhcmstY29sb3I6ICM1ZTA4M2Q7XG4gIC0tYWNjZW50LWxpZ2h0LWNvbG9yOiAjZmJkMGViO1xuICAtLXllbGxvdy1icmFuZC1jb2xvcjogI2Y4YWQwNztcbiAgLS1hY2NlbnQtMjAtY29sb3I6ICNlMWMyZDU7XG4gIC0taW5mby1jb2xvcjogIzQxNWZjYTtcbiAgLS1pbmZvLWxpZ2h0LWNvbG9yOiBoc2woMjI3LCA1NiUsIDUyJSwgMC4xKTtcbiAgLS1zdWNjZXNzLWNvbG9yOiAjMjFiYzVmO1xuICAtLXN1Y2Nlc3MtbGlnaHQtY29sb3I6IGhzbGEoMTQ0LCA3MCUsIDQzJSwgMC4xKTtcbiAgLS13YXJuaW5nLWNvbG9yOiAjZmZjNzAwO1xuICAtLXdhcm5pbmctbGlnaHQtY29sb3I6ICNGREVBQzE7XG4gIC0tZGFuZ2VyLWNvbG9yOiAjZmYwMDVjO1xuICAtLWRhbmdlci1saWdodC1jb2xvcjogaHNsYSgzMzgsIDEwMCUsIDUwJSwgMC44KTtcbiAgLS1kYW5nZXItbGlnaHRlci1jb2xvcjogaHNsYSgzMzgsIDEwMCUsIDkwJSwgMC44KTtcbiAgLS1icmFuZC1yZWQtY29sb3I6ICNFNDAwM0E7XG4gIC0tYnJhbmQtcmVkLTIwLWNvbG9yOiAjRjhCRkNEO1xuICAtLWJyYW5kLW9yYW5nZS1jb2xvcjogI0U5NEUwRjtcbiAgLS1icmFuZC1vcmFuZ2UtMjAtY29sb3I6ICNGOUQyQzM7XG4gIC0tYnJhbmQteWVsbG93LWNvbG9yOiAjRjhBRDA3O1xuICAtLWJyYW5kLXllbGxvdy0yMC1jb2xvcjogI0ZERUFDMTtcbiAgLS1icmFuZC1wdXJwbGUtY29sb3I6ICM4NzBCNTg7XG4gIC0tYnJhbmQtcHVycGxlLTIwLWNvbG9yOiAjRTFDMkQ1O1xuICAtLXR1bmEtZ3JheS1jb2xvcjogIzMwMzY0MjtcbiAgLS10dW5hLWdyYXktODAtY29sb3I6ICM1NTVkNzE7XG4gIC0tdHVuYS1ncmF5LTYwLWNvbG9yOiAjN2Y4NTk0O1xuICAtLXR1bmEtZ3JheS00MC1jb2xvcjogI2FhYWViODtcbiAgLS10dW5hLWdyYXktMjAtY29sb3I6ICNmNmY2ZjY7XG4gIC0tc2xhdGUtZ3JheS1jb2xvcjogIzc3ODNhMDtcbiAgLS1zbGF0ZS1ncmF5LTgwLWNvbG9yOiAjOTI5YmIzO1xuICAtLXNsYXRlLWdyYXktNjAtY29sb3I6ICNhZGI0YzY7XG4gIC0tc2xhdGUtZ3JheS00MC1jb2xvcjogI2M4Y2RkOTtcbiAgLS1zbGF0ZS1ncmF5LTIwLWNvbG9yOiAjZTNlNmVjO1xuICAtLXNsYXRlLWdyYXktMTAtY29sb3I6ICNmMWYzZjU7XG4gIC0tc2xhdGUtZ3JheS01LWNvbG9yOiAjZjhmYWZjO1xuICAtLXdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJsYWNrLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4ucGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MXB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlLWdyYXktNS1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnBhZ2Utd3JhcHBlciB7XG4gIHdpZHRoOiA3MHZ3O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2xhdGUtZ3JheS0yMC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmEtZ3JheS0yMC1jb2xvcik7XG59XG4ucGFnZS1oZWFkZXIgaDEge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ucGFnZS1ib2R5IHtcbiAgcGFkZGluZzogMzJweCAxNnB4O1xufVxuLnBhZ2UtYm9keSBoMiB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreederDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-breeder-detail',
                templateUrl: './breeder-detail.component.html',
                styleUrls: ['./breeder-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_store_entities_breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_4__["BreederFacade"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "FE6G":
/*!*********************************************************!*\
  !*** ./src/app/store/entities/owner/owner.selectors.ts ***!
  \*********************************************************/
/*! exports provided: selectOwnerState, selectLoadingAll, selectLoadingDetail, selectPagination, selectOwners, selectOwner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOwnerState", function() { return selectOwnerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingAll", function() { return selectLoadingAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingDetail", function() { return selectLoadingDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPagination", function() { return selectPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOwners", function() { return selectOwners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOwner", function() { return selectOwner; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store.config */ "ogCa");


const selectOwnerState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_store_config__WEBPACK_IMPORTED_MODULE_1__["selectFeature"], (state) => state.owner);
const selectLoadingAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOwnerState, (state) => state.loadingAll);
const selectLoadingDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOwnerState, (state) => state.loadingDetail);
const selectPagination = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOwnerState, (state) => state.pagination);
const selectOwners = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOwnerState, (state) => state.owners);
const selectOwner = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOwnerState, (state) => state.ownerDetail);


/***/ }),

/***/ "G98e":
/*!***********************************************************!*\
  !*** ./src/app/store/entities/breeder/breeder.effects.ts ***!
  \***********************************************************/
/*! exports provided: BreederEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreederEffects", function() { return BreederEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _breeder_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breeder.actions */ "pkpR");
/* harmony import */ var src_app_Services_breeder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/breeder.service */ "iGjl");








class BreederEffects {
    constructor(actions$, breedersService) {
        this.actions$ = actions$;
        this.breedersService = breedersService;
        // fetch breeders
        this.getBreeders$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_4__["getBreeders"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.breedersService.getAllBreeders(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((breeders) => _breeder_actions__WEBPACK_IMPORTED_MODULE_4__["getBreedersSuccess"]({ breeders: breeders })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_4__["getBreedersError"]({ error })))))));
        // fetch breeder
        this.getBreeder$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_4__["getBreeder"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ breederId }) => this.breedersService.getBreeder(breederId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((breeder) => _breeder_actions__WEBPACK_IMPORTED_MODULE_4__["getBreederSuccess"]({ breederDetail: breeder })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_4__["getBreederError"]({ error })))))));
        // create breeder
        this.createBreeders$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_4__["createBreeder"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.breedersService.createBreeder(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _breeder_actions__WEBPACK_IMPORTED_MODULE_4__["createBreederSuccess"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_4__["createBreederError"]({ error })))))));
        // update breeder
        this.updateBreeders$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_4__["updateBreeder"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.breedersService.updateBreeder(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _breeder_actions__WEBPACK_IMPORTED_MODULE_4__["updateBreederSuccess"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_4__["updateBreederError"]({ error })))))));
    }
}
BreederEffects.ɵfac = function BreederEffects_Factory(t) { return new (t || BreederEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Services_breeder_service__WEBPACK_IMPORTED_MODULE_5__["BreederService"])); };
BreederEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BreederEffects, factory: BreederEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreederEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_Services_breeder_service__WEBPACK_IMPORTED_MODULE_5__["BreederService"] }]; }, null); })();


/***/ }),

/***/ "H4wY":
/*!*****************************************************************!*\
  !*** ./src/app/bird/bird-show-update/bird-show-update.modal.ts ***!
  \*****************************************************************/
/*! exports provided: BirdShowUpdateModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdShowUpdateModal", function() { return BirdShowUpdateModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/entities/bird/bird.facade */ "NLBs");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/components/loader/loader.component */ "nzoQ");














function BirdShowUpdateModal_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Locatie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Punten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rangschikking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdShowUpdateModal_form_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.handleSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.birdShowForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.birdShowForm.valid);
} }
function BirdShowUpdateModal_c_loader_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-loader");
} }
class BirdShowUpdateModal {
    constructor(ref, config, birdFacade, fb, toastrService) {
        this.ref = ref;
        this.config = config;
        this.birdFacade = birdFacade;
        this.fb = fb;
        this.toastrService = toastrService;
        this.birdShow$ = this.birdFacade.getBirdShow();
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loading$ = this.birdFacade.getLoadingModal();
    }
    ngOnInit() {
        // get birdShow
        this.birdFacade.getBirdShowRequest({ birdId: this.config.data.request.birdId, id: this.config.data.request.id });
        this.birdShow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).subscribe((birdShow) => {
            if (birdShow !== null && birdShow !== undefined) {
                this.birdShowForm = this.fb.group({
                    location: [birdShow.location, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    points: [birdShow.points, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    rank: [birdShow.rank, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                });
            }
        });
    }
    handleSubmit() {
        const request = {
            birdId: this.config.data.request.birdId,
            location: this.birdShowForm.get('location').value,
            points: this.birdShowForm.get('points').value,
            rank: this.birdShowForm.get('rank').value,
        };
        this.birdFacade.updateBirdShowRequest(this.config.data.request.id, request);
        this.birdFacade.onUpdateBirdShowSuccess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).subscribe(() => {
            // add toastr message
            this.toastrService.success('Tentoonstelling aangepast!', 'Gelukt', {
                timeOut: 6000,
            });
            this.birdFacade.getBirdRequest(this.config.data.request.birdId);
            this.ref.close();
        });
        this.birdFacade.onUpdateBirdShowError().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).subscribe(() => {
            // add toastr message
            this.toastrService.error('Oeps, er liep iets mis met het aanpassen van deze tentoonstelling!', 'Error', {
                timeOut: 6000,
            });
        });
    }
    goBack() {
        this.ref.close();
    }
}
BirdShowUpdateModal.ɵfac = function BirdShowUpdateModal_Factory(t) { return new (t || BirdShowUpdateModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_5__["BirdFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
BirdShowUpdateModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirdShowUpdateModal, selectors: [["bird-show-update-modal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])], decls: 5, vars: 6, consts: [[1, "modal-body"], [3, "formGroup", 4, "ngIf"], [4, "ngIf"], [3, "formGroup"], [1, "form-group"], ["for", "location"], ["pInputText", "", "type", "text", "formControlName", "location", "id", "location", 1, "form-control"], ["for", "points"], ["pInputText", "", "type", "text", "formControlName", "points", "id", "points", 1, "form-control"], ["for", "name"], ["pInputText", "", "type", "text", "formControlName", "rank", "id", "rank", 1, "form-control"], [1, "form-footer"], ["pButton", "", "type", "submit", "label", "Opslaan", 3, "disabled", "click"]], template: function BirdShowUpdateModal_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BirdShowUpdateModal_form_1_Template, 15, 2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BirdShowUpdateModal_c_loader_3_Template, 1, 0, "c-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.birdShowForm && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"], _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirdShowUpdateModal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bird-show-update-modal',
                templateUrl: './bird-show-update.modal.html',
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]]
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"] }, { type: src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_5__["BirdFacade"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "HcEW":
/*!********************************************!*\
  !*** ./src/app/Services/couple.service.ts ***!
  \********************************************/
/*! exports provided: CoupleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupleService", function() { return CoupleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "n/8u");



class CoupleService {
    constructor(baseService) {
        this.baseService = baseService;
    }
    getAllCouples(request) {
        return this.baseService.get(`/couples`, request);
    }
    getCouple(coupleId) {
        return this.baseService.get(`/couples/${coupleId}`);
    }
    createCouple(request) {
        return this.baseService.post(`/couples`, request);
    }
    updateCouple(request) {
        return this.baseService.put(`/couples`, request);
    }
    createBirdEgg(request) {
        return this.baseService.post(`/couples/birdEggs`, request);
    }
    updateBirdEgg(request) {
        return this.baseService.put(`/couples/birdEggs`, request);
    }
    getCoupleBirdEgg(request) {
        return this.baseService.get(`/couples/${request.coupleId}/birdEggs/${request.birdEggId}`);
    }
}
CoupleService.ɵfac = function CoupleService_Factory(t) { return new (t || CoupleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"])); };
CoupleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoupleService, factory: CoupleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoupleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] }]; }, null); })();


/***/ }),

/***/ "HjzR":
/*!**************************************************************!*\
  !*** ./src/app/owner/owner-detail/owner-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: OwnerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerDetailComponent", function() { return OwnerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/entities/owner/owner.facade */ "btcf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/components/loader/loader.component */ "nzoQ");













function OwnerDetailComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Eigenaar bewerken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Voornaam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Naam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Telefoon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerDetailComponent_form_6_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerDetailComponent_form_6_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.ownerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.ownerForm.valid);
} }
function OwnerDetailComponent_c_loader_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-loader");
} }
class OwnerDetailComponent {
    constructor(fb, ownerFacade, router, route, toastrService) {
        this.fb = fb;
        this.ownerFacade = ownerFacade;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
        // Observables
        this.owner$ = this.ownerFacade.getOwner();
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loading$ = this.ownerFacade.getLoadingDetail();
    }
    ngOnInit() {
        var _a;
        this.ownerId = (_a = this.route.snapshot.params) === null || _a === void 0 ? void 0 : _a.id;
        this.ownerFacade.getOwnerRequest(parseInt(this.ownerId));
        this.owner$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe((owner) => {
            if (owner !== null && owner !== undefined) {
                // fill in the form
                this.ownerForm = this.fb.group({
                    firstName: [owner.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    lastName: [owner.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    phoneNumber: [owner.phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    email: [owner.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                });
            }
        });
        // handle success and errors
        this.handleSuccesses();
        this.handleErrors();
    }
    onSubmit() {
        const request = {
            id: parseInt(this.ownerId),
            firstName: this.ownerForm.get('firstName').value,
            lastName: this.ownerForm.get('lastName').value,
            phoneNumber: this.ownerForm.get('phoneNumber').value,
            email: this.ownerForm.get('email').value,
        };
        this.ownerFacade.updateOwnerRequest(request);
    }
    goBack() {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
    handleSuccesses() {
        this.ownerFacade.onUpdateOwnerSuccess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.success('Eigenaar gegevens aangepast!', 'Gelukt', {
                timeOut: 6000,
            });
            const request = {
                page: 1,
                pageSize: 10,
            };
            this.ownerFacade.getAllOwnersRequest(request);
            this.ownerFacade.clearDetail();
            this.goBack();
        });
    }
    handleErrors() {
        this.ownerFacade.onUpdateOwnerError().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.error('Oeps, er liep iets mis tijdens het aanpassen van deze eigenaar!', 'Error', {
                timeOut: 6000,
            });
        });
    }
}
OwnerDetailComponent.ɵfac = function OwnerDetailComponent_Factory(t) { return new (t || OwnerDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_4__["OwnerFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
OwnerDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OwnerDetailComponent, selectors: [["app-owner-detail"]], decls: 11, vars: 6, consts: [[1, "page"], [1, "page-wrapper"], [1, "page-header"], [1, "page-body"], [3, "formGroup", 4, "ngIf"], [1, "p-mt-4"], [4, "ngIf"], [3, "formGroup"], [1, "form-group"], ["for", "firstName"], ["pInputText", "", "type", "text", "formControlName", "firstName", "id", "firstName", "placeholder", "Davino", 1, "form-control"], ["for", "lastName"], ["pInputText", "", "type", "text", "formControlName", "lastName", "id", "lastName", "placeholder", "Liessens", 1, "form-control"], ["for", "phoneNumber"], ["pInputText", "", "type", "text", "formControlName", "phoneNumber", "id", "phoneNumber", "placeholder", "+324........", 1, "form-control"], ["for", "email"], ["pInputText", "", "type", "email", "formControlName", "email", "id", "email", "placeholder", "davino.liessens@telenet.be", 1, "form-control"], [1, "form-footer"], ["pButton", "", "type", "button", "label", "Terug", 1, "p-button-outlined", 3, "click"], ["pButton", "", "type", "submit", "label", "Opslaan", 3, "disabled", "click"]], template: function OwnerDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Owner management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OwnerDetailComponent_form_6_Template, 22, 2, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OwnerDetailComponent_c_loader_9_Template, 1, 0, "c-loader", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ownerForm && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"], _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --primary-color: #e94e0f;\n  --primary-light-color: #f2642c;\n  --primary-background-color: #fef6f3;\n  --accent-color: #870b58;\n  --accent-dark-color: #5e083d;\n  --accent-light-color: #fbd0eb;\n  --yellow-brand-color: #f8ad07;\n  --accent-20-color: #e1c2d5;\n  --info-color: #415fca;\n  --info-light-color: hsl(227, 56%, 52%, 0.1);\n  --success-color: #21bc5f;\n  --success-light-color: hsla(144, 70%, 43%, 0.1);\n  --warning-color: #ffc700;\n  --warning-light-color: #FDEAC1;\n  --danger-color: #ff005c;\n  --danger-light-color: hsla(338, 100%, 50%, 0.8);\n  --danger-lighter-color: hsla(338, 100%, 90%, 0.8);\n  --brand-red-color: #E4003A;\n  --brand-red-20-color: #F8BFCD;\n  --brand-orange-color: #E94E0F;\n  --brand-orange-20-color: #F9D2C3;\n  --brand-yellow-color: #F8AD07;\n  --brand-yellow-20-color: #FDEAC1;\n  --brand-purple-color: #870B58;\n  --brand-purple-20-color: #E1C2D5;\n  --tuna-gray-color: #303642;\n  --tuna-gray-80-color: #555d71;\n  --tuna-gray-60-color: #7f8594;\n  --tuna-gray-40-color: #aaaeb8;\n  --tuna-gray-20-color: #f6f6f6;\n  --slate-gray-color: #7783a0;\n  --slate-gray-80-color: #929bb3;\n  --slate-gray-60-color: #adb4c6;\n  --slate-gray-40-color: #c8cdd9;\n  --slate-gray-20-color: #e3e6ec;\n  --slate-gray-10-color: #f1f3f5;\n  --slate-gray-5-color: #f8fafc;\n  --white-color: #ffffff;\n  --black-color: #000000;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 71px);\n  overflow: auto;\n  background-color: var(--slate-gray-5-color);\n  background-image: url('background.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  width: 70vw;\n  margin: 0 auto;\n  background-color: rgba(255, 255, 255, 0.6);\n  margin-top: 32px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--slate-gray-20-color);\n  background-color: var(--tuna-gray-20-color);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.page-body[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n}\n\n.page-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR0aW5nc1xcX2NvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG93bmVyLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVDLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBR0EsMEJBQUE7RUFHQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0VBQ0EsaURBQUE7RUFHQSwwQkFBQTtFQUNBLDZCQUFBO0VBRUEsNkJBQUE7RUFDQSxnQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFFQSw2QkFBQTtFQUNBLGdDQUFBO0VBR0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBRUEsc0JBQUE7RUFDQSxzQkFBQTtBQ2pCRDs7QUF0Q0E7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUF5Q0o7O0FBdENBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FBeUNKOztBQXRDQTtFQUNJLG1EQUFBO0VBQ0EsMkNBQUE7QUF5Q0o7O0FBdkNJO0VBQ0ksYUFBQTtBQXlDUjs7QUFyQ0E7RUFDSSxrQkFBQTtBQXdDSjs7QUF0Q0k7RUFDSSxvQkFBQTtBQXdDUiIsImZpbGUiOiJvd25lci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdHlsZWxpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb2xvcnNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOnJvb3Qge1xyXG5cdC8vIEJyYW5kIGlkZW50aXR5IGNvbG9yc1xyXG5cdC0tcHJpbWFyeS1jb2xvcjogI2U5NGUwZjtcclxuXHQtLXByaW1hcnktbGlnaHQtY29sb3I6ICNmMjY0MmM7XHJcblx0LS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZWY2ZjM7XHJcblx0LS1hY2NlbnQtY29sb3I6ICM4NzBiNTg7XHJcblx0LS1hY2NlbnQtZGFyay1jb2xvcjogIzVlMDgzZDtcclxuXHQtLWFjY2VudC1saWdodC1jb2xvcjogI2ZiZDBlYjtcclxuXHQtLXllbGxvdy1icmFuZC1jb2xvcjogI2Y4YWQwNztcclxuXHJcblx0Ly8gQ29tcGxlbWVudGFyeSBjb2xvcnNcclxuXHQtLWFjY2VudC0yMC1jb2xvcjogI2UxYzJkNTtcclxuXHJcblx0Ly8gU3RhdGVzXHJcblx0LS1pbmZvLWNvbG9yOiAjNDE1ZmNhO1xyXG5cdC0taW5mby1saWdodC1jb2xvcjogaHNsKDIyNywgNTYlLCA1MiUsIDAuMSk7XHJcblx0LS1zdWNjZXNzLWNvbG9yOiAjMjFiYzVmO1xyXG5cdC0tc3VjY2Vzcy1saWdodC1jb2xvcjogaHNsYSgxNDQsIDcwJSwgNDMlLCAwLjEpO1xyXG5cdC0td2FybmluZy1jb2xvcjogI2ZmYzcwMDtcclxuXHQtLXdhcm5pbmctbGlnaHQtY29sb3I6ICNGREVBQzE7XHJcblx0LS1kYW5nZXItY29sb3I6ICNmZjAwNWM7XHJcblx0LS1kYW5nZXItbGlnaHQtY29sb3I6IGhzbGEoMzM4LCAxMDAlLCA1MCUsIDAuOCk7XHJcblx0LS1kYW5nZXItbGlnaHRlci1jb2xvcjogaHNsYSgzMzgsIDEwMCUsIDkwJSwgMC44KTtcclxuXHJcblx0Ly8gRXh0cmEgY29sb3JzXHJcblx0LS1icmFuZC1yZWQtY29sb3I6ICNFNDAwM0E7XHJcblx0LS1icmFuZC1yZWQtMjAtY29sb3I6ICNGOEJGQ0Q7XHJcblxyXG5cdC0tYnJhbmQtb3JhbmdlLWNvbG9yOiAjRTk0RTBGO1xyXG5cdC0tYnJhbmQtb3JhbmdlLTIwLWNvbG9yOiAjRjlEMkMzO1xyXG5cclxuXHQtLWJyYW5kLXllbGxvdy1jb2xvcjogI0Y4QUQwNztcclxuXHQtLWJyYW5kLXllbGxvdy0yMC1jb2xvcjogI0ZERUFDMTtcclxuXHJcblx0LS1icmFuZC1wdXJwbGUtY29sb3I6ICM4NzBCNTg7XHJcblx0LS1icmFuZC1wdXJwbGUtMjAtY29sb3I6ICNFMUMyRDU7XHJcblxyXG5cdC8vIEdyYXlzY2FsZVxyXG5cdC0tdHVuYS1ncmF5LWNvbG9yOiAjMzAzNjQyO1xyXG5cdC0tdHVuYS1ncmF5LTgwLWNvbG9yOiAjNTU1ZDcxO1xyXG5cdC0tdHVuYS1ncmF5LTYwLWNvbG9yOiAjN2Y4NTk0O1xyXG5cdC0tdHVuYS1ncmF5LTQwLWNvbG9yOiAjYWFhZWI4O1xyXG5cdC0tdHVuYS1ncmF5LTIwLWNvbG9yOiAjZjZmNmY2O1xyXG5cclxuXHQtLXNsYXRlLWdyYXktY29sb3I6ICM3NzgzYTA7XHJcblx0LS1zbGF0ZS1ncmF5LTgwLWNvbG9yOiAjOTI5YmIzO1xyXG5cdC0tc2xhdGUtZ3JheS02MC1jb2xvcjogI2FkYjRjNjtcclxuXHQtLXNsYXRlLWdyYXktNDAtY29sb3I6ICNjOGNkZDk7XHJcblx0LS1zbGF0ZS1ncmF5LTIwLWNvbG9yOiAjZTNlNmVjO1xyXG5cdC0tc2xhdGUtZ3JheS0xMC1jb2xvcjogI2YxZjNmNTtcclxuXHQtLXNsYXRlLWdyYXktNS1jb2xvcjogI2Y4ZmFmYztcclxuXHJcblx0LS13aGl0ZS1jb2xvcjogI2ZmZmZmZjtcclxuXHQtLWJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbiIsIjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZTk0ZTBmO1xuICAtLXByaW1hcnktbGlnaHQtY29sb3I6ICNmMjY0MmM7XG4gIC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmNmYzO1xuICAtLWFjY2VudC1jb2xvcjogIzg3MGI1ODtcbiAgLS1hY2NlbnQtZGFyay1jb2xvcjogIzVlMDgzZDtcbiAgLS1hY2NlbnQtbGlnaHQtY29sb3I6ICNmYmQwZWI7XG4gIC0teWVsbG93LWJyYW5kLWNvbG9yOiAjZjhhZDA3O1xuICAtLWFjY2VudC0yMC1jb2xvcjogI2UxYzJkNTtcbiAgLS1pbmZvLWNvbG9yOiAjNDE1ZmNhO1xuICAtLWluZm8tbGlnaHQtY29sb3I6IGhzbCgyMjcsIDU2JSwgNTIlLCAwLjEpO1xuICAtLXN1Y2Nlc3MtY29sb3I6ICMyMWJjNWY7XG4gIC0tc3VjY2Vzcy1saWdodC1jb2xvcjogaHNsYSgxNDQsIDcwJSwgNDMlLCAwLjEpO1xuICAtLXdhcm5pbmctY29sb3I6ICNmZmM3MDA7XG4gIC0td2FybmluZy1saWdodC1jb2xvcjogI0ZERUFDMTtcbiAgLS1kYW5nZXItY29sb3I6ICNmZjAwNWM7XG4gIC0tZGFuZ2VyLWxpZ2h0LWNvbG9yOiBoc2xhKDMzOCwgMTAwJSwgNTAlLCAwLjgpO1xuICAtLWRhbmdlci1saWdodGVyLWNvbG9yOiBoc2xhKDMzOCwgMTAwJSwgOTAlLCAwLjgpO1xuICAtLWJyYW5kLXJlZC1jb2xvcjogI0U0MDAzQTtcbiAgLS1icmFuZC1yZWQtMjAtY29sb3I6ICNGOEJGQ0Q7XG4gIC0tYnJhbmQtb3JhbmdlLWNvbG9yOiAjRTk0RTBGO1xuICAtLWJyYW5kLW9yYW5nZS0yMC1jb2xvcjogI0Y5RDJDMztcbiAgLS1icmFuZC15ZWxsb3ctY29sb3I6ICNGOEFEMDc7XG4gIC0tYnJhbmQteWVsbG93LTIwLWNvbG9yOiAjRkRFQUMxO1xuICAtLWJyYW5kLXB1cnBsZS1jb2xvcjogIzg3MEI1ODtcbiAgLS1icmFuZC1wdXJwbGUtMjAtY29sb3I6ICNFMUMyRDU7XG4gIC0tdHVuYS1ncmF5LWNvbG9yOiAjMzAzNjQyO1xuICAtLXR1bmEtZ3JheS04MC1jb2xvcjogIzU1NWQ3MTtcbiAgLS10dW5hLWdyYXktNjAtY29sb3I6ICM3Zjg1OTQ7XG4gIC0tdHVuYS1ncmF5LTQwLWNvbG9yOiAjYWFhZWI4O1xuICAtLXR1bmEtZ3JheS0yMC1jb2xvcjogI2Y2ZjZmNjtcbiAgLS1zbGF0ZS1ncmF5LWNvbG9yOiAjNzc4M2EwO1xuICAtLXNsYXRlLWdyYXktODAtY29sb3I6ICM5MjliYjM7XG4gIC0tc2xhdGUtZ3JheS02MC1jb2xvcjogI2FkYjRjNjtcbiAgLS1zbGF0ZS1ncmF5LTQwLWNvbG9yOiAjYzhjZGQ5O1xuICAtLXNsYXRlLWdyYXktMjAtY29sb3I6ICNlM2U2ZWM7XG4gIC0tc2xhdGUtZ3JheS0xMC1jb2xvcjogI2YxZjNmNTtcbiAgLS1zbGF0ZS1ncmF5LTUtY29sb3I6ICNmOGZhZmM7XG4gIC0td2hpdGUtY29sb3I6ICNmZmZmZmY7XG4gIC0tYmxhY2stY29sb3I6ICMwMDAwMDA7XG59XG5cbi5wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcxcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUtZ3JheS01LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGFnZS13cmFwcGVyIHtcbiAgd2lkdGg6IDcwdnc7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zbGF0ZS1ncmF5LTIwLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuYS1ncmF5LTIwLWNvbG9yKTtcbn1cbi5wYWdlLWhlYWRlciBoMSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5wYWdlLWJvZHkge1xuICBwYWRkaW5nOiAzMnB4IDE2cHg7XG59XG4ucGFnZS1ib2R5IGgyIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnerDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-owner-detail',
                templateUrl: './owner-detail.component.html',
                styleUrls: ['./owner-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_4__["OwnerFacade"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "J1lM":
/*!****************************************************!*\
  !*** ./src/app/store/entities/entities.effects.ts ***!
  \****************************************************/
/*! exports provided: Effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return Effects; });
/* harmony import */ var _bird_bird_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bird/bird.effects */ "VIGI");
/* harmony import */ var _breeder_breeder_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breeder/breeder.effects */ "G98e");
/* harmony import */ var _owner_owner_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner/owner.effects */ "SVIU");
/* harmony import */ var _couple_couple_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./couple/couple.effects */ "zmiW");




const Effects = [
    _bird_bird_effects__WEBPACK_IMPORTED_MODULE_0__["BirdEffects"],
    _breeder_breeder_effects__WEBPACK_IMPORTED_MODULE_1__["BreederEffects"],
    _owner_owner_effects__WEBPACK_IMPORTED_MODULE_2__["OwnerEffects"],
    _couple_couple_effects__WEBPACK_IMPORTED_MODULE_3__["CoupleEffects"]
];


/***/ }),

/***/ "JavI":
/*!********************************************************************!*\
  !*** ./src/app/breeder/breeder-create/breeder-create.component.ts ***!
  \********************************************************************/
/*! exports provided: BreederCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreederCreateComponent", function() { return BreederCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_entities_breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/entities/breeder/breeder.facade */ "Xutl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");











class BreederCreateComponent {
    constructor(fb, breederFacade, router, route, toastrService) {
        this.fb = fb;
        this.breederFacade = breederFacade;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        // fill in the form
        this.breederForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        // handle success and errors
        this.handleSuccesses();
        this.handleErrors();
    }
    onSubmit() {
        const request = {
            firstName: this.breederForm.get('firstName').value,
            lastName: this.breederForm.get('lastName').value,
            phoneNumber: this.breederForm.get('phoneNumber').value,
            email: this.breederForm.get('email').value
        };
        this.breederFacade.createBreeder(request);
    }
    goBack() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    handleSuccesses() {
        this.breederFacade.onCreateBreederSuccess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.success('Kweker aangemaakt!', 'Gelukt', {
                timeOut: 6000,
            });
            const request = {
                page: 1,
                pageSize: 10,
            };
            this.breederFacade.getAllBreedersRequest(request);
            this.goBack();
        });
    }
    handleErrors() {
        this.breederFacade.onCreateBreederError().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.error('Oeps, er liep iets mis tijdens het aanmaken van deze kweker!', 'Error', {
                timeOut: 6000,
            });
        });
    }
}
BreederCreateComponent.ɵfac = function BreederCreateComponent_Factory(t) { return new (t || BreederCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_4__["BreederFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
BreederCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreederCreateComponent, selectors: [["c-breeder-create"]], decls: 28, vars: 2, consts: [[1, "page"], [1, "page-wrapper"], [1, "page-header"], [1, "page-body"], [3, "formGroup"], [1, "form-group"], ["for", "firstName"], ["pInputText", "", "type", "text", "formControlName", "firstName", "id", "firstName", "placeholder", "Davino", 1, "form-control"], ["for", "lastName"], ["pInputText", "", "type", "text", "formControlName", "lastName", "id", "lastName", "placeholder", "Liessens", 1, "form-control"], ["for", "phoneNumber"], ["pInputText", "", "type", "text", "formControlName", "phoneNumber", "id", "phoneNumber", "placeholder", "+324........", 1, "form-control"], ["for", "email"], ["pInputText", "", "type", "email", "formControlName", "email", "id", "email", "placeholder", "davino.liessens@telenet.be", 1, "form-control"], [1, "form-footer"], ["pButton", "", "type", "button", "label", "Terug", 1, "p-button-outlined", 3, "click"], ["pButton", "", "type", "submit", "label", "Opslaan", 3, "disabled", "click"]], template: function BreederCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Breeder management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kweker aanmaken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Voornaam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Naam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Telefoon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BreederCreateComponent_Template_button_click_26_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BreederCreateComponent_Template_button_click_27_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.breederForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.breederForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"]], styles: ["[_ngcontent-%COMP%]:root {\n  --primary-color: #e94e0f;\n  --primary-light-color: #f2642c;\n  --primary-background-color: #fef6f3;\n  --accent-color: #870b58;\n  --accent-dark-color: #5e083d;\n  --accent-light-color: #fbd0eb;\n  --yellow-brand-color: #f8ad07;\n  --accent-20-color: #e1c2d5;\n  --info-color: #415fca;\n  --info-light-color: hsl(227, 56%, 52%, 0.1);\n  --success-color: #21bc5f;\n  --success-light-color: hsla(144, 70%, 43%, 0.1);\n  --warning-color: #ffc700;\n  --warning-light-color: #FDEAC1;\n  --danger-color: #ff005c;\n  --danger-light-color: hsla(338, 100%, 50%, 0.8);\n  --danger-lighter-color: hsla(338, 100%, 90%, 0.8);\n  --brand-red-color: #E4003A;\n  --brand-red-20-color: #F8BFCD;\n  --brand-orange-color: #E94E0F;\n  --brand-orange-20-color: #F9D2C3;\n  --brand-yellow-color: #F8AD07;\n  --brand-yellow-20-color: #FDEAC1;\n  --brand-purple-color: #870B58;\n  --brand-purple-20-color: #E1C2D5;\n  --tuna-gray-color: #303642;\n  --tuna-gray-80-color: #555d71;\n  --tuna-gray-60-color: #7f8594;\n  --tuna-gray-40-color: #aaaeb8;\n  --tuna-gray-20-color: #f6f6f6;\n  --slate-gray-color: #7783a0;\n  --slate-gray-80-color: #929bb3;\n  --slate-gray-60-color: #adb4c6;\n  --slate-gray-40-color: #c8cdd9;\n  --slate-gray-20-color: #e3e6ec;\n  --slate-gray-10-color: #f1f3f5;\n  --slate-gray-5-color: #f8fafc;\n  --white-color: #ffffff;\n  --black-color: #000000;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 71px);\n  overflow: auto;\n  background-color: var(--slate-gray-5-color);\n  background-image: url('background.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  width: 70vw;\n  margin: 0 auto;\n  background-color: rgba(255, 255, 255, 0.6);\n  margin-top: 32px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--slate-gray-20-color);\n  background-color: var(--tuna-gray-20-color);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.page-body[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n}\n\n.page-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR0aW5nc1xcX2NvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGJyZWVkZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUMsd0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFHQSwwQkFBQTtFQUdBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSx3QkFBQTtFQUNBLCtDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSxpREFBQTtFQUdBLDBCQUFBO0VBQ0EsNkJBQUE7RUFFQSw2QkFBQTtFQUNBLGdDQUFBO0VBRUEsNkJBQUE7RUFDQSxnQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFHQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRUEsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFFQSxzQkFBQTtFQUNBLHNCQUFBO0FDakJEOztBQXRDQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQXlDSjs7QUF0Q0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUF5Q0o7O0FBdENBO0VBQ0ksbURBQUE7RUFDQSwyQ0FBQTtBQXlDSjs7QUF2Q0k7RUFDSSxhQUFBO0FBeUNSOztBQXJDQTtFQUNJLGtCQUFBO0FBd0NKOztBQXRDSTtFQUNJLG9CQUFBO0FBd0NSIiwiZmlsZSI6ImJyZWVkZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGVsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ29sb3JzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjpyb290IHtcclxuXHQvLyBCcmFuZCBpZGVudGl0eSBjb2xvcnNcclxuXHQtLXByaW1hcnktY29sb3I6ICNlOTRlMGY7XHJcblx0LS1wcmltYXJ5LWxpZ2h0LWNvbG9yOiAjZjI2NDJjO1xyXG5cdC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmNmYzO1xyXG5cdC0tYWNjZW50LWNvbG9yOiAjODcwYjU4O1xyXG5cdC0tYWNjZW50LWRhcmstY29sb3I6ICM1ZTA4M2Q7XHJcblx0LS1hY2NlbnQtbGlnaHQtY29sb3I6ICNmYmQwZWI7XHJcblx0LS15ZWxsb3ctYnJhbmQtY29sb3I6ICNmOGFkMDc7XHJcblxyXG5cdC8vIENvbXBsZW1lbnRhcnkgY29sb3JzXHJcblx0LS1hY2NlbnQtMjAtY29sb3I6ICNlMWMyZDU7XHJcblxyXG5cdC8vIFN0YXRlc1xyXG5cdC0taW5mby1jb2xvcjogIzQxNWZjYTtcclxuXHQtLWluZm8tbGlnaHQtY29sb3I6IGhzbCgyMjcsIDU2JSwgNTIlLCAwLjEpO1xyXG5cdC0tc3VjY2Vzcy1jb2xvcjogIzIxYmM1ZjtcclxuXHQtLXN1Y2Nlc3MtbGlnaHQtY29sb3I6IGhzbGEoMTQ0LCA3MCUsIDQzJSwgMC4xKTtcclxuXHQtLXdhcm5pbmctY29sb3I6ICNmZmM3MDA7XHJcblx0LS13YXJuaW5nLWxpZ2h0LWNvbG9yOiAjRkRFQUMxO1xyXG5cdC0tZGFuZ2VyLWNvbG9yOiAjZmYwMDVjO1xyXG5cdC0tZGFuZ2VyLWxpZ2h0LWNvbG9yOiBoc2xhKDMzOCwgMTAwJSwgNTAlLCAwLjgpO1xyXG5cdC0tZGFuZ2VyLWxpZ2h0ZXItY29sb3I6IGhzbGEoMzM4LCAxMDAlLCA5MCUsIDAuOCk7XHJcblxyXG5cdC8vIEV4dHJhIGNvbG9yc1xyXG5cdC0tYnJhbmQtcmVkLWNvbG9yOiAjRTQwMDNBO1xyXG5cdC0tYnJhbmQtcmVkLTIwLWNvbG9yOiAjRjhCRkNEO1xyXG5cclxuXHQtLWJyYW5kLW9yYW5nZS1jb2xvcjogI0U5NEUwRjtcclxuXHQtLWJyYW5kLW9yYW5nZS0yMC1jb2xvcjogI0Y5RDJDMztcclxuXHJcblx0LS1icmFuZC15ZWxsb3ctY29sb3I6ICNGOEFEMDc7XHJcblx0LS1icmFuZC15ZWxsb3ctMjAtY29sb3I6ICNGREVBQzE7XHJcblxyXG5cdC0tYnJhbmQtcHVycGxlLWNvbG9yOiAjODcwQjU4O1xyXG5cdC0tYnJhbmQtcHVycGxlLTIwLWNvbG9yOiAjRTFDMkQ1O1xyXG5cclxuXHQvLyBHcmF5c2NhbGVcclxuXHQtLXR1bmEtZ3JheS1jb2xvcjogIzMwMzY0MjtcclxuXHQtLXR1bmEtZ3JheS04MC1jb2xvcjogIzU1NWQ3MTtcclxuXHQtLXR1bmEtZ3JheS02MC1jb2xvcjogIzdmODU5NDtcclxuXHQtLXR1bmEtZ3JheS00MC1jb2xvcjogI2FhYWViODtcclxuXHQtLXR1bmEtZ3JheS0yMC1jb2xvcjogI2Y2ZjZmNjtcclxuXHJcblx0LS1zbGF0ZS1ncmF5LWNvbG9yOiAjNzc4M2EwO1xyXG5cdC0tc2xhdGUtZ3JheS04MC1jb2xvcjogIzkyOWJiMztcclxuXHQtLXNsYXRlLWdyYXktNjAtY29sb3I6ICNhZGI0YzY7XHJcblx0LS1zbGF0ZS1ncmF5LTQwLWNvbG9yOiAjYzhjZGQ5O1xyXG5cdC0tc2xhdGUtZ3JheS0yMC1jb2xvcjogI2UzZTZlYztcclxuXHQtLXNsYXRlLWdyYXktMTAtY29sb3I6ICNmMWYzZjU7XHJcblx0LS1zbGF0ZS1ncmF5LTUtY29sb3I6ICNmOGZhZmM7XHJcblxyXG5cdC0td2hpdGUtY29sb3I6ICNmZmZmZmY7XHJcblx0LS1ibGFjay1jb2xvcjogIzAwMDAwMDtcclxufVxyXG4iLCI6cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogI2U5NGUwZjtcbiAgLS1wcmltYXJ5LWxpZ2h0LWNvbG9yOiAjZjI2NDJjO1xuICAtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZlZjZmMztcbiAgLS1hY2NlbnQtY29sb3I6ICM4NzBiNTg7XG4gIC0tYWNjZW50LWRhcmstY29sb3I6ICM1ZTA4M2Q7XG4gIC0tYWNjZW50LWxpZ2h0LWNvbG9yOiAjZmJkMGViO1xuICAtLXllbGxvdy1icmFuZC1jb2xvcjogI2Y4YWQwNztcbiAgLS1hY2NlbnQtMjAtY29sb3I6ICNlMWMyZDU7XG4gIC0taW5mby1jb2xvcjogIzQxNWZjYTtcbiAgLS1pbmZvLWxpZ2h0LWNvbG9yOiBoc2woMjI3LCA1NiUsIDUyJSwgMC4xKTtcbiAgLS1zdWNjZXNzLWNvbG9yOiAjMjFiYzVmO1xuICAtLXN1Y2Nlc3MtbGlnaHQtY29sb3I6IGhzbGEoMTQ0LCA3MCUsIDQzJSwgMC4xKTtcbiAgLS13YXJuaW5nLWNvbG9yOiAjZmZjNzAwO1xuICAtLXdhcm5pbmctbGlnaHQtY29sb3I6ICNGREVBQzE7XG4gIC0tZGFuZ2VyLWNvbG9yOiAjZmYwMDVjO1xuICAtLWRhbmdlci1saWdodC1jb2xvcjogaHNsYSgzMzgsIDEwMCUsIDUwJSwgMC44KTtcbiAgLS1kYW5nZXItbGlnaHRlci1jb2xvcjogaHNsYSgzMzgsIDEwMCUsIDkwJSwgMC44KTtcbiAgLS1icmFuZC1yZWQtY29sb3I6ICNFNDAwM0E7XG4gIC0tYnJhbmQtcmVkLTIwLWNvbG9yOiAjRjhCRkNEO1xuICAtLWJyYW5kLW9yYW5nZS1jb2xvcjogI0U5NEUwRjtcbiAgLS1icmFuZC1vcmFuZ2UtMjAtY29sb3I6ICNGOUQyQzM7XG4gIC0tYnJhbmQteWVsbG93LWNvbG9yOiAjRjhBRDA3O1xuICAtLWJyYW5kLXllbGxvdy0yMC1jb2xvcjogI0ZERUFDMTtcbiAgLS1icmFuZC1wdXJwbGUtY29sb3I6ICM4NzBCNTg7XG4gIC0tYnJhbmQtcHVycGxlLTIwLWNvbG9yOiAjRTFDMkQ1O1xuICAtLXR1bmEtZ3JheS1jb2xvcjogIzMwMzY0MjtcbiAgLS10dW5hLWdyYXktODAtY29sb3I6ICM1NTVkNzE7XG4gIC0tdHVuYS1ncmF5LTYwLWNvbG9yOiAjN2Y4NTk0O1xuICAtLXR1bmEtZ3JheS00MC1jb2xvcjogI2FhYWViODtcbiAgLS10dW5hLWdyYXktMjAtY29sb3I6ICNmNmY2ZjY7XG4gIC0tc2xhdGUtZ3JheS1jb2xvcjogIzc3ODNhMDtcbiAgLS1zbGF0ZS1ncmF5LTgwLWNvbG9yOiAjOTI5YmIzO1xuICAtLXNsYXRlLWdyYXktNjAtY29sb3I6ICNhZGI0YzY7XG4gIC0tc2xhdGUtZ3JheS00MC1jb2xvcjogI2M4Y2RkOTtcbiAgLS1zbGF0ZS1ncmF5LTIwLWNvbG9yOiAjZTNlNmVjO1xuICAtLXNsYXRlLWdyYXktMTAtY29sb3I6ICNmMWYzZjU7XG4gIC0tc2xhdGUtZ3JheS01LWNvbG9yOiAjZjhmYWZjO1xuICAtLXdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJsYWNrLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4ucGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MXB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlLWdyYXktNS1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnBhZ2Utd3JhcHBlciB7XG4gIHdpZHRoOiA3MHZ3O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2xhdGUtZ3JheS0yMC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmEtZ3JheS0yMC1jb2xvcik7XG59XG4ucGFnZS1oZWFkZXIgaDEge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ucGFnZS1ib2R5IHtcbiAgcGFkZGluZzogMzJweCAxNnB4O1xufVxuLnBhZ2UtYm9keSBoMiB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreederCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-breeder-create',
                templateUrl: './breeder-create.component.html',
                styleUrls: ['./breeder-create.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_store_entities_breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_4__["BreederFacade"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "KkXH":
/*!****************************************!*\
  !*** ./src/app/bird/bird.component.ts ***!
  \****************************************/
/*! exports provided: BirdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdComponent", function() { return BirdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/entities/bird/bird.facade */ "NLBs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/paginator */ "6t4m");
/* harmony import */ var _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ui/components/loader/loader.component */ "nzoQ");















const _c0 = function () { return { "width": "400px" }; };
function BirdComponent_p_table_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BirdComponent_p_table_1_ng_template_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.search = $event; })("keyup", function BirdComponent_p_table_1_ng_template_2_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onSearch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.search);
} }
function BirdComponent_p_table_1_ng_template_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function BirdComponent_p_table_1_ng_template_3_ng_template_6_Template_p_dropdown_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.FilterGender($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.selectedGender)("options", ctx_r11.genderOptions);
} }
function BirdComponent_p_table_1_ng_template_3_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function BirdComponent_p_table_1_ng_template_3_ng_template_9_Template_p_dropdown_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.FilterTypeOfBird($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.selectedTypeOfBird)("options", ctx_r12.typeOfBirdOptions);
} }
function BirdComponent_p_table_1_ng_template_3_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function BirdComponent_p_table_1_ng_template_3_ng_template_13_Template_p_dropdown_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.FilterYear($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.selectedYear)("options", ctx_r13.yearDropdownOptions)("placeholder", ctx_r13.selectedYear);
} }
function BirdComponent_p_table_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-columnFilter", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BirdComponent_p_table_1_ng_template_3_ng_template_6_Template, 1, 2, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-columnFilter", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BirdComponent_p_table_1_ng_template_3_ng_template_9_Template, 1, 2, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-columnFilter", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BirdComponent_p_table_1_ng_template_3_ng_template_13_Template, 1, 3, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Ringnummer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Kweker ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Eigenaar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Geslacht ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Soort ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Kleur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Jaartal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Kotnummer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Bewerk ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMenu", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMenu", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMenu", false);
} }
const _c1 = function (a0) { return { "is-dead": a0 }; };
function BirdComponent_p_table_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bird_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, bird_r26.isDead));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bird_r26.ringNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", bird_r26.breeder.firstName, " ", bird_r26.breeder.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", bird_r26.owner.firstName, " ", bird_r26.owner.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bird_r26.gender === "FEMALE" ? "POP" : "MAN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bird_r26.birdType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bird_r26.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 12, bird_r26.birthDate, "MM/YYYY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bird_r26.cageNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/birds/detail/", bird_r26.id, "");
} }
const _c2 = function () { return { "width": "99vw" }; };
const _c3 = function () { return [5, 10, 20, 30]; };
function BirdComponent_p_table_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-paginator", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function BirdComponent_p_table_1_ng_template_5_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.paginate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r6.pagination.pageSize)("first", ctx_r6.first)("totalRecords", ctx_r6.pagination.totalAmount)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
} }
function BirdComponent_p_table_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Geen vogels gevonden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BirdComponent_p_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BirdComponent_p_table_1_ng_template_2_Template, 4, 4, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BirdComponent_p_table_1_ng_template_3_Template, 44, 3, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BirdComponent_p_table_1_ng_template_4_Template, 28, 17, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BirdComponent_p_table_1_ng_template_5_Template, 2, 8, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BirdComponent_p_table_1_ng_template_6_Template, 3, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.birds);
} }
function BirdComponent_c_loader_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-loader");
} }
class BirdComponent {
    constructor(birdFacade, router, route) {
        this.birdFacade = birdFacade;
        this.router = router;
        this.route = route;
        // Observables
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.birds$ = this.birdFacade.getBirds();
        this.pagination$ = this.birdFacade.getPagination();
        this.loading$ = this.birdFacade.getLoading();
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.search = '';
        this.page = 1;
        this.pageSize = 10;
        this.first = (this.page - 1) * this.pageSize;
        this.genderOptions = [];
        this.typeOfBirdOptions = [];
        this.yearDropdownOptions = [];
    }
    ngOnInit() {
        this.createGenderOptions();
        this.createDateOptions();
        this.createTypeOfBirdOptions();
        this.filters = {
            gender: 'ALL',
            typeOfBird: '0',
            year: 'ALL'
        };
        // Subscribe to changes in the query parameters
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((params) => {
            let request = {
                page: this.page,
                pageSize: this.pageSize,
                searchValue: '',
                gender: this.filters.gender,
                typeOfBird: this.filters.typeOfBird,
                year: this.filters.year
            };
            if (Object.keys(params).length === 0) {
                this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams: { search: this.search, gender: this.filters.gender, typeOfBird: this.filters.typeOfBird, year: this.filters.year },
                    queryParamsHandling: 'merge',
                });
            }
            if (params.search) {
                this.search = params.search.toLowerCase();
                this.page = 1;
            }
            if (params.year) {
                this.selectedYear = params.year;
                this.filters.year = params.year;
            }
            if (params.gender) {
                this.selectedGender = params.gender;
                this.filters.gender = params.gender;
            }
            if (params.typeOfBird) {
                this.selectedTypeOfBird = parseInt(params.typeOfBird);
                this.filters.typeOfBird = params.typeOfBird;
            }
            request = {
                page: this.page,
                pageSize: this.pageSize,
                searchValue: this.search,
                gender: this.filters.gender,
                typeOfBird: this.filters.typeOfBird,
                year: this.filters.year
            };
            this.CalculateFirst();
            this.GetAllBirds(request);
        });
        // get all birds
        this.birds$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((birds) => {
            if (birds !== null || birds !== undefined) {
                this.birds = birds;
            }
        });
        this.pagination$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((pagination) => {
            this.pagination = pagination;
            this.CalculateFirst();
        });
        this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).subscribe((searchValue) => {
            if (searchValue !== null && searchValue !== undefined) {
                const search = searchValue.toLowerCase();
                // Update the query parameter in the URL
                this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams: { search: search },
                    queryParamsHandling: 'merge',
                });
            }
        });
    }
    onSearch(searchTerm) {
        this.search$.next(searchTerm);
    }
    paginate(event) {
        this.page = event.page + 1;
        this.pageSize = event.rows;
        this.CalculateFirst();
        const request = {
            page: this.page,
            pageSize: this.pageSize,
            searchValue: this.search,
            gender: this.filters.gender,
            typeOfBird: this.filters.typeOfBird,
            year: this.filters.year
        };
        this.GetAllBirds(request);
    }
    FilterYear(value) {
        this.page = 1;
        // Update the query parameter in the URL
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { year: value },
            queryParamsHandling: 'merge',
        });
    }
    FilterGender(value) {
        this.page = 1;
        // Update the query parameter in the URL
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { gender: value },
            queryParamsHandling: 'merge',
        });
    }
    FilterTypeOfBird(value) {
        this.page = 1;
        // Update the query parameter in the URL
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { typeOfBird: value.toString() },
            queryParamsHandling: 'merge',
        });
    }
    DeleteBird(id) {
        console.log("deleting bird with id", id);
    }
    CalculateFirst() {
        this.first = (this.page - 1) * this.pageSize;
    }
    GetAllBirds(request) {
        this.birdFacade.getAllBirdsRequest(request);
    }
    createGenderOptions() {
        this.genderOptions = [
            { type: 'Alles', value: 'ALL' },
            { type: 'Pop', value: 'FEMALE' },
            { type: 'Man', value: 'MALE' }
        ];
    }
    createDateOptions() {
        // push the default
        this.yearDropdownOptions.push({ name: 'Alles', value: 'ALL' });
        // Get the current year
        const currentYear = new Date().getFullYear();
        // Populate the options array with years from 2020 to current year + 1
        for (let year = 2020; year <= currentYear + 1; year++) {
            // Create an IAutoCompleteOption object with value and label
            const option = {
                value: year.toString(),
                name: year.toString(),
            };
            this.yearDropdownOptions.push(option);
        }
    }
    createTypeOfBirdOptions() {
        // push the default
        this.typeOfBirdOptions.push({ type: 'Alles', value: 0 });
        // add rest of the facade options
        var types = this.birdFacade.createBirdTypeOptions();
        types.forEach(type => {
            this.typeOfBirdOptions.push(type);
        });
    }
}
BirdComponent.ɵfac = function BirdComponent_Factory(t) { return new (t || BirdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_3__["BirdFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
BirdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirdComponent, selectors: [["c-bird-overview"]], decls: 6, vars: 6, consts: [[1, "c-bird-overview"], ["dataKey", "id", "styleClass", "p-datatable-customers p-datatable-gridlines", 3, "value", 4, "ngIf"], [1, "p-mt-4"], [4, "ngIf"], ["dataKey", "id", "styleClass", "p-datatable-customers p-datatable-gridlines", 3, "value"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], ["pTemplate", "emptymessage"], [1, "p-d-flex"], [1, "p-input-icon-left", 2, "margin-left", "20px"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Zoek Kweker, Eigenaar, Ringnummer of Kot", 3, "ngModel", "ngModelChange", "keyup"], ["field", "gender", "matchMode", "equals", 3, "showMenu"], ["pTemplate", "filter"], ["field", "birdType", "matchMode", "equals", 3, "showMenu"], ["field", "year", "matchMode", "equals", 3, "showMenu"], [1, "p-d-flex", "p-jc-between", "p-ai-center"], ["optionLabel", "type", "optionValue", "value", "placeholder", "Alles", 3, "ngModel", "options", "onChange"], ["optionLabel", "name", "optionValue", "value", 3, "ngModel", "options", "placeholder", "onChange"], [3, "ngClass"], [1, "ringnumber"], ["pButton", "", "pRipple", "", "type", "button", "label", "Detail", 1, "p-button-raised", 2, "margin-left", "10px", 3, "routerLink"], ["currentPageReportTemplate", "{first} van de {totalRecords} resultaten", "showCurrentPageReport", "true", 1, "p-d-flex", "p-jc-center", 3, "rows", "first", "totalRecords", "rowsPerPageOptions", "onPageChange"], ["colspan", "7"]], template: function BirdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BirdComponent_p_table_1_Template, 7, 1, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BirdComponent_c_loader_4_Template, 1, 0, "c-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.loading$) && ctx.birds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["ColumnFilter"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], primeng_paginator__WEBPACK_IMPORTED_MODULE_12__["Paginator"], _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["[_nghost-%COMP%]     .is-dead td p {\n  color: red;\n}\n\n[_nghost-%COMP%]    tr:nth-child(even) {\n  background-color: #f7f7f7;\n}\n\n[_nghost-%COMP%]     tr td p {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.ringnumber[_ngcontent-%COMP%] {\n  overflow-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJpcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxVQUFBO0FBQVI7O0FBS0k7RUFDSSx5QkFBQTtBQUZSOztBQUtJO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtBQUhSOztBQU9BO0VBQ0kseUJBQUE7QUFKSiIsImZpbGUiOiJiaXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5pcy1kZWFkIHtcclxuICAgIHRkIHAge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgICAmdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgfVxyXG5cclxuICAgIHRyIHRkIHB7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG5cclxuLnJpbmdudW1iZXIge1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-bird-overview',
                templateUrl: './bird.component.html',
                styleUrls: ['./bird.component.scss']
            }]
    }], function () { return [{ type: _store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_3__["BirdFacade"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "MiB7":
/*!**************************************************************!*\
  !*** ./src/app/owner/owner-create/owner-create.component.ts ***!
  \**************************************************************/
/*! exports provided: OwnerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerCreateComponent", function() { return OwnerCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/entities/owner/owner.facade */ "btcf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");











class OwnerCreateComponent {
    constructor(fb, ownerFacade, router, route, toastrService) {
        this.fb = fb;
        this.ownerFacade = ownerFacade;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        // fill in the form
        this.ownerForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        // handle success and errors
        this.handleSuccesses();
        this.handleErrors();
    }
    onSubmit() {
        const request = {
            firstName: this.ownerForm.get('firstName').value,
            lastName: this.ownerForm.get('lastName').value,
            phoneNumber: this.ownerForm.get('phoneNumber').value,
            email: this.ownerForm.get('email').value
        };
        this.ownerFacade.createOwner(request);
    }
    goBack() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    handleSuccesses() {
        this.ownerFacade.onCreateOwnerSuccess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.success('Eigenaar aangemaakt!', 'Gelukt', {
                timeOut: 6000,
            });
            const request = {
                page: 1,
                pageSize: 10,
            };
            this.ownerFacade.getAllOwnersRequest(request);
            this.goBack();
        });
    }
    handleErrors() {
        this.ownerFacade.onCreateOwnerError().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.error('Oeps, er liep iets mis tijdens het aanmaken van deze eigenaar!', 'Error', {
                timeOut: 6000,
            });
        });
    }
}
OwnerCreateComponent.ɵfac = function OwnerCreateComponent_Factory(t) { return new (t || OwnerCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_4__["OwnerFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
OwnerCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OwnerCreateComponent, selectors: [["app-owner-create"]], decls: 28, vars: 2, consts: [[1, "page"], [1, "page-wrapper"], [1, "page-header"], [1, "page-body"], [3, "formGroup"], [1, "form-group"], ["for", "firstName"], ["pInputText", "", "type", "text", "formControlName", "firstName", "id", "firstName", "placeholder", "Davino", 1, "form-control"], ["for", "lastName"], ["pInputText", "", "type", "text", "formControlName", "lastName", "id", "lastName", "placeholder", "Liessens", 1, "form-control"], ["for", "phoneNumber"], ["pInputText", "", "type", "text", "formControlName", "phoneNumber", "id", "phoneNumber", "placeholder", "+324........", 1, "form-control"], ["for", "email"], ["pInputText", "", "type", "email", "formControlName", "email", "id", "email", "placeholder", "davino.liessens@telenet.be", 1, "form-control"], [1, "form-footer"], ["pButton", "", "type", "button", "label", "Terug", 1, "p-button-outlined", 3, "click"], ["pButton", "", "type", "submit", "label", "Opslaan", 3, "disabled", "click"]], template: function OwnerCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Owner management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Eigenaar aanmaken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Voornaam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Naam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Telefoon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerCreateComponent_Template_button_click_26_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerCreateComponent_Template_button_click_27_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ownerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.ownerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"]], styles: ["[_ngcontent-%COMP%]:root {\n  --primary-color: #e94e0f;\n  --primary-light-color: #f2642c;\n  --primary-background-color: #fef6f3;\n  --accent-color: #870b58;\n  --accent-dark-color: #5e083d;\n  --accent-light-color: #fbd0eb;\n  --yellow-brand-color: #f8ad07;\n  --accent-20-color: #e1c2d5;\n  --info-color: #415fca;\n  --info-light-color: hsl(227, 56%, 52%, 0.1);\n  --success-color: #21bc5f;\n  --success-light-color: hsla(144, 70%, 43%, 0.1);\n  --warning-color: #ffc700;\n  --warning-light-color: #FDEAC1;\n  --danger-color: #ff005c;\n  --danger-light-color: hsla(338, 100%, 50%, 0.8);\n  --danger-lighter-color: hsla(338, 100%, 90%, 0.8);\n  --brand-red-color: #E4003A;\n  --brand-red-20-color: #F8BFCD;\n  --brand-orange-color: #E94E0F;\n  --brand-orange-20-color: #F9D2C3;\n  --brand-yellow-color: #F8AD07;\n  --brand-yellow-20-color: #FDEAC1;\n  --brand-purple-color: #870B58;\n  --brand-purple-20-color: #E1C2D5;\n  --tuna-gray-color: #303642;\n  --tuna-gray-80-color: #555d71;\n  --tuna-gray-60-color: #7f8594;\n  --tuna-gray-40-color: #aaaeb8;\n  --tuna-gray-20-color: #f6f6f6;\n  --slate-gray-color: #7783a0;\n  --slate-gray-80-color: #929bb3;\n  --slate-gray-60-color: #adb4c6;\n  --slate-gray-40-color: #c8cdd9;\n  --slate-gray-20-color: #e3e6ec;\n  --slate-gray-10-color: #f1f3f5;\n  --slate-gray-5-color: #f8fafc;\n  --white-color: #ffffff;\n  --black-color: #000000;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 71px);\n  overflow: auto;\n  background-color: var(--slate-gray-5-color);\n  background-image: url('background.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  width: 70vw;\n  margin: 0 auto;\n  background-color: rgba(255, 255, 255, 0.6);\n  margin-top: 32px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--slate-gray-20-color);\n  background-color: var(--tuna-gray-20-color);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.page-body[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n}\n\n.page-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR0aW5nc1xcX2NvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG93bmVyLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVDLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBR0EsMEJBQUE7RUFHQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0VBQ0EsaURBQUE7RUFHQSwwQkFBQTtFQUNBLDZCQUFBO0VBRUEsNkJBQUE7RUFDQSxnQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFFQSw2QkFBQTtFQUNBLGdDQUFBO0VBR0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBRUEsc0JBQUE7RUFDQSxzQkFBQTtBQ2pCRDs7QUF0Q0E7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUF5Q0o7O0FBdENBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FBeUNKOztBQXRDQTtFQUNJLG1EQUFBO0VBQ0EsMkNBQUE7QUF5Q0o7O0FBdkNJO0VBQ0ksYUFBQTtBQXlDUjs7QUFyQ0E7RUFDSSxrQkFBQTtBQXdDSjs7QUF0Q0k7RUFDSSxvQkFBQTtBQXdDUiIsImZpbGUiOiJvd25lci1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdHlsZWxpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb2xvcnNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOnJvb3Qge1xyXG5cdC8vIEJyYW5kIGlkZW50aXR5IGNvbG9yc1xyXG5cdC0tcHJpbWFyeS1jb2xvcjogI2U5NGUwZjtcclxuXHQtLXByaW1hcnktbGlnaHQtY29sb3I6ICNmMjY0MmM7XHJcblx0LS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZWY2ZjM7XHJcblx0LS1hY2NlbnQtY29sb3I6ICM4NzBiNTg7XHJcblx0LS1hY2NlbnQtZGFyay1jb2xvcjogIzVlMDgzZDtcclxuXHQtLWFjY2VudC1saWdodC1jb2xvcjogI2ZiZDBlYjtcclxuXHQtLXllbGxvdy1icmFuZC1jb2xvcjogI2Y4YWQwNztcclxuXHJcblx0Ly8gQ29tcGxlbWVudGFyeSBjb2xvcnNcclxuXHQtLWFjY2VudC0yMC1jb2xvcjogI2UxYzJkNTtcclxuXHJcblx0Ly8gU3RhdGVzXHJcblx0LS1pbmZvLWNvbG9yOiAjNDE1ZmNhO1xyXG5cdC0taW5mby1saWdodC1jb2xvcjogaHNsKDIyNywgNTYlLCA1MiUsIDAuMSk7XHJcblx0LS1zdWNjZXNzLWNvbG9yOiAjMjFiYzVmO1xyXG5cdC0tc3VjY2Vzcy1saWdodC1jb2xvcjogaHNsYSgxNDQsIDcwJSwgNDMlLCAwLjEpO1xyXG5cdC0td2FybmluZy1jb2xvcjogI2ZmYzcwMDtcclxuXHQtLXdhcm5pbmctbGlnaHQtY29sb3I6ICNGREVBQzE7XHJcblx0LS1kYW5nZXItY29sb3I6ICNmZjAwNWM7XHJcblx0LS1kYW5nZXItbGlnaHQtY29sb3I6IGhzbGEoMzM4LCAxMDAlLCA1MCUsIDAuOCk7XHJcblx0LS1kYW5nZXItbGlnaHRlci1jb2xvcjogaHNsYSgzMzgsIDEwMCUsIDkwJSwgMC44KTtcclxuXHJcblx0Ly8gRXh0cmEgY29sb3JzXHJcblx0LS1icmFuZC1yZWQtY29sb3I6ICNFNDAwM0E7XHJcblx0LS1icmFuZC1yZWQtMjAtY29sb3I6ICNGOEJGQ0Q7XHJcblxyXG5cdC0tYnJhbmQtb3JhbmdlLWNvbG9yOiAjRTk0RTBGO1xyXG5cdC0tYnJhbmQtb3JhbmdlLTIwLWNvbG9yOiAjRjlEMkMzO1xyXG5cclxuXHQtLWJyYW5kLXllbGxvdy1jb2xvcjogI0Y4QUQwNztcclxuXHQtLWJyYW5kLXllbGxvdy0yMC1jb2xvcjogI0ZERUFDMTtcclxuXHJcblx0LS1icmFuZC1wdXJwbGUtY29sb3I6ICM4NzBCNTg7XHJcblx0LS1icmFuZC1wdXJwbGUtMjAtY29sb3I6ICNFMUMyRDU7XHJcblxyXG5cdC8vIEdyYXlzY2FsZVxyXG5cdC0tdHVuYS1ncmF5LWNvbG9yOiAjMzAzNjQyO1xyXG5cdC0tdHVuYS1ncmF5LTgwLWNvbG9yOiAjNTU1ZDcxO1xyXG5cdC0tdHVuYS1ncmF5LTYwLWNvbG9yOiAjN2Y4NTk0O1xyXG5cdC0tdHVuYS1ncmF5LTQwLWNvbG9yOiAjYWFhZWI4O1xyXG5cdC0tdHVuYS1ncmF5LTIwLWNvbG9yOiAjZjZmNmY2O1xyXG5cclxuXHQtLXNsYXRlLWdyYXktY29sb3I6ICM3NzgzYTA7XHJcblx0LS1zbGF0ZS1ncmF5LTgwLWNvbG9yOiAjOTI5YmIzO1xyXG5cdC0tc2xhdGUtZ3JheS02MC1jb2xvcjogI2FkYjRjNjtcclxuXHQtLXNsYXRlLWdyYXktNDAtY29sb3I6ICNjOGNkZDk7XHJcblx0LS1zbGF0ZS1ncmF5LTIwLWNvbG9yOiAjZTNlNmVjO1xyXG5cdC0tc2xhdGUtZ3JheS0xMC1jb2xvcjogI2YxZjNmNTtcclxuXHQtLXNsYXRlLWdyYXktNS1jb2xvcjogI2Y4ZmFmYztcclxuXHJcblx0LS13aGl0ZS1jb2xvcjogI2ZmZmZmZjtcclxuXHQtLWJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbiIsIjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZTk0ZTBmO1xuICAtLXByaW1hcnktbGlnaHQtY29sb3I6ICNmMjY0MmM7XG4gIC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmNmYzO1xuICAtLWFjY2VudC1jb2xvcjogIzg3MGI1ODtcbiAgLS1hY2NlbnQtZGFyay1jb2xvcjogIzVlMDgzZDtcbiAgLS1hY2NlbnQtbGlnaHQtY29sb3I6ICNmYmQwZWI7XG4gIC0teWVsbG93LWJyYW5kLWNvbG9yOiAjZjhhZDA3O1xuICAtLWFjY2VudC0yMC1jb2xvcjogI2UxYzJkNTtcbiAgLS1pbmZvLWNvbG9yOiAjNDE1ZmNhO1xuICAtLWluZm8tbGlnaHQtY29sb3I6IGhzbCgyMjcsIDU2JSwgNTIlLCAwLjEpO1xuICAtLXN1Y2Nlc3MtY29sb3I6ICMyMWJjNWY7XG4gIC0tc3VjY2Vzcy1saWdodC1jb2xvcjogaHNsYSgxNDQsIDcwJSwgNDMlLCAwLjEpO1xuICAtLXdhcm5pbmctY29sb3I6ICNmZmM3MDA7XG4gIC0td2FybmluZy1saWdodC1jb2xvcjogI0ZERUFDMTtcbiAgLS1kYW5nZXItY29sb3I6ICNmZjAwNWM7XG4gIC0tZGFuZ2VyLWxpZ2h0LWNvbG9yOiBoc2xhKDMzOCwgMTAwJSwgNTAlLCAwLjgpO1xuICAtLWRhbmdlci1saWdodGVyLWNvbG9yOiBoc2xhKDMzOCwgMTAwJSwgOTAlLCAwLjgpO1xuICAtLWJyYW5kLXJlZC1jb2xvcjogI0U0MDAzQTtcbiAgLS1icmFuZC1yZWQtMjAtY29sb3I6ICNGOEJGQ0Q7XG4gIC0tYnJhbmQtb3JhbmdlLWNvbG9yOiAjRTk0RTBGO1xuICAtLWJyYW5kLW9yYW5nZS0yMC1jb2xvcjogI0Y5RDJDMztcbiAgLS1icmFuZC15ZWxsb3ctY29sb3I6ICNGOEFEMDc7XG4gIC0tYnJhbmQteWVsbG93LTIwLWNvbG9yOiAjRkRFQUMxO1xuICAtLWJyYW5kLXB1cnBsZS1jb2xvcjogIzg3MEI1ODtcbiAgLS1icmFuZC1wdXJwbGUtMjAtY29sb3I6ICNFMUMyRDU7XG4gIC0tdHVuYS1ncmF5LWNvbG9yOiAjMzAzNjQyO1xuICAtLXR1bmEtZ3JheS04MC1jb2xvcjogIzU1NWQ3MTtcbiAgLS10dW5hLWdyYXktNjAtY29sb3I6ICM3Zjg1OTQ7XG4gIC0tdHVuYS1ncmF5LTQwLWNvbG9yOiAjYWFhZWI4O1xuICAtLXR1bmEtZ3JheS0yMC1jb2xvcjogI2Y2ZjZmNjtcbiAgLS1zbGF0ZS1ncmF5LWNvbG9yOiAjNzc4M2EwO1xuICAtLXNsYXRlLWdyYXktODAtY29sb3I6ICM5MjliYjM7XG4gIC0tc2xhdGUtZ3JheS02MC1jb2xvcjogI2FkYjRjNjtcbiAgLS1zbGF0ZS1ncmF5LTQwLWNvbG9yOiAjYzhjZGQ5O1xuICAtLXNsYXRlLWdyYXktMjAtY29sb3I6ICNlM2U2ZWM7XG4gIC0tc2xhdGUtZ3JheS0xMC1jb2xvcjogI2YxZjNmNTtcbiAgLS1zbGF0ZS1ncmF5LTUtY29sb3I6ICNmOGZhZmM7XG4gIC0td2hpdGUtY29sb3I6ICNmZmZmZmY7XG4gIC0tYmxhY2stY29sb3I6ICMwMDAwMDA7XG59XG5cbi5wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcxcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUtZ3JheS01LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGFnZS13cmFwcGVyIHtcbiAgd2lkdGg6IDcwdnc7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zbGF0ZS1ncmF5LTIwLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuYS1ncmF5LTIwLWNvbG9yKTtcbn1cbi5wYWdlLWhlYWRlciBoMSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5wYWdlLWJvZHkge1xuICBwYWRkaW5nOiAzMnB4IDE2cHg7XG59XG4ucGFnZS1ib2R5IGgyIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnerCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-owner-create',
                templateUrl: './owner-create.component.html',
                styleUrls: ['./owner-create.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_4__["OwnerFacade"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "NFwV":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: AppStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreModule", function() { return AppStoreModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");










class AppStoreModule {
}
AppStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppStoreModule });
AppStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppStoreModule_Factory(t) { return new (t || AppStoreModule)(); }, providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppStoreModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({}),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production,
                    }),
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "NLBs":
/*!****************************************************!*\
  !*** ./src/app/store/entities/bird/bird.facade.ts ***!
  \****************************************************/
/*! exports provided: BirdFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdFacade", function() { return BirdFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _bird_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bird.actions */ "lLKA");
/* harmony import */ var _bird_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bird.selectors */ "QtjH");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");






class BirdFacade {
    constructor(store, action$) {
        this.store = store;
        this.action$ = action$;
    }
    // Selectors
    getBirds() {
        return this.store.select(_bird_selectors__WEBPACK_IMPORTED_MODULE_3__["selectBirds"]);
    }
    getBird() {
        return this.store.select(_bird_selectors__WEBPACK_IMPORTED_MODULE_3__["selectBird"]);
    }
    getPagination() {
        return this.store.select(_bird_selectors__WEBPACK_IMPORTED_MODULE_3__["selectPagination"]);
    }
    getLoading() {
        return this.store.select(_bird_selectors__WEBPACK_IMPORTED_MODULE_3__["selectLoadingAll"]);
    }
    getLoadingDetail() {
        return this.store.select(_bird_selectors__WEBPACK_IMPORTED_MODULE_3__["selectLoadingDetail"]);
    }
    getLoadingModal() {
        return this.store.select(_bird_selectors__WEBPACK_IMPORTED_MODULE_3__["selectLoadingModal"]);
    }
    getBirdShow() {
        return this.store.select(_bird_selectors__WEBPACK_IMPORTED_MODULE_3__["selectBirdShow"]);
    }
    clearDetail() {
        this.store.dispatch(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["clearBirdDetail"]());
    }
    clearBirdShowDetail() {
        this.store.dispatch(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["clearBirdShowDetail"]());
    }
    // Actions
    getAllBirdsRequest(request) {
        this.store.dispatch(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["getBirds"]({ request }));
    }
    getBirdRequest(birdId) {
        this.store.dispatch(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["getBird"]({ birdId }));
    }
    createBird(request) {
        this.store.dispatch(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["createBird"]({ request }));
    }
    updateBirdRequest(request) {
        this.store.dispatch(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["updateBird"]({ request }));
    }
    createBirdShowRequest(request) {
        this.store.dispatch(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["createBirdShow"]({ request }));
    }
    updateBirdShowRequest(id, request) {
        this.store.dispatch(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["updateBirdShow"]({ id, request }));
    }
    getBirdShowRequest(request) {
        this.store.dispatch(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["getBirdShow"]({ request }));
    }
    // ActionSubjects
    onCreateBirdSuccess() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["createBirdSuccess"].type));
    }
    onCreateBirdError() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["createBirdError"].type));
    }
    onUpdateBirdSuccess() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["updateBirdSuccess"].type));
    }
    onUpdateBirdError() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["updateBirdError"].type));
    }
    onCreateBirdShowSuccess() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["createBirdShowSuccess"].type));
    }
    onCreateBirdShowError() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["createBirdShowError"].type));
    }
    onUpdateBirdShowSuccess() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["updateBirdShowSuccess"].type));
    }
    onUpdateBirdShowError() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_2__["updateBirdShowError"].type));
    }
    // Static objects
    createBirdTypeColors() {
        let colors = [
            {
                label: 'Kanarie', value: 'kanarie',
                items: [
                    { label: 'Intensief', value: 'Intensief' },
                    { label: 'Schimmel', value: 'Schimmel' },
                    { label: 'Wit', value: 'Wit' },
                    { label: 'Agaat Wit', value: 'Agaat Wit' },
                    { label: 'Agaat Geel', value: 'Agaat Geel' },
                    { label: 'Agaat Groen', value: 'Agaat Groen' },
                    { label: 'Agaat Rood', value: 'Agaat Rood' }
                ]
            },
            {
                label: 'Goudvink', value: 'Goudvink',
                items: [
                    { label: 'Wildkleur', value: 'Wildkleur' },
                    { label: 'Wildkleur/Bruin', value: 'Wildkleur/Bruin' },
                    { label: 'Wildkleur/Bruin Pastel', value: 'Wildkleur/Bruin Pastel' },
                    { label: 'Bruin', value: 'Bruin' },
                    { label: 'Bruin Pastel', value: 'Bruin Pastel' },
                ]
            },
            {
                label: 'Distelvink', value: 'Distelvink',
                items: [
                    { label: 'Bruin', value: 'Bruin' },
                    { label: 'Agaat', value: 'Agaat' },
                    { label: 'Agaat Bruin', value: 'Agaat Bruin' },
                    { label: 'Agaat Pastel', value: 'Agaat Pastel' },
                    { label: 'Isabel', value: 'Isabel' },
                    { label: 'Satinet', value: 'Satinet' },
                    { label: 'Eumo', value: 'Eumo' },
                    { label: 'Pastel', value: 'Pastel' },
                    { label: 'Bruin Pastel', value: 'Bruin Pastel' },
                    { label: 'Witkop', value: 'Witkop' },
                ]
            },
            {
                label: 'Sijzen', value: 'Sijzen',
                items: [
                    { label: 'Wildkleur', value: 'Wildkleur' },
                    { label: 'Wildkleur/Bruin', value: 'Wildkleur/Bruin' },
                    { label: 'Wildkleur/Ivoor', value: 'Wildkleur/Ivoor' },
                    { label: 'Bruin', value: 'Bruin' },
                    { label: 'Ivoor', value: 'Ivoor' },
                    { label: 'Zwartkop', value: 'Zwartkop' }
                ]
            },
            {
                label: 'Appelvink', value: 'Appelvink',
                items: [
                    { label: 'Wildkleur', value: 'Wildkleur' }
                ]
            },
            {
                label: 'Fischeri', value: 'Fischeri',
                items: [
                    { label: 'Groen', value: 'Groen' },
                    { label: 'Blauw', value: 'Blauw' },
                    { label: 'Lutino', value: 'Lutino' },
                    { label: 'Paars', value: 'Paars' },
                    { label: 'Wit', value: 'Wit' }
                ]
            },
            {
                label: 'Barmsijzen', value: 'Barmsijzen',
                items: [
                    { label: 'Wildkleur', value: 'Wildkleur' },
                    { label: 'Wildkleur/Satinet', value: 'Wildkleur/Satinet' },
                    { label: 'Wildkleur/Ivoor', value: 'Wildkleur/Ivoor' },
                    { label: 'Satinet', value: 'Satinet' },
                    { label: 'Ivoor', value: 'Ivoor' }
                ]
            },
            {
                label: 'Roodmus', value: 'Mexicaanse Roodmus',
                items: [
                    { label: 'Wildkleur', value: 'Wildkleur' }
                ]
            },
        ];
        return colors;
    }
    createBirdTypeOptions() {
        let options = [
            { type: 'Appelvink', value: 1 },
            { type: 'Barmsijs', value: 2 },
            { type: 'Distelvink', value: 3 },
            { type: 'Fischeri', value: 4 },
            { type: 'Goudvink', value: 5 },
            { type: 'Kanarie', value: 6 },
            { type: 'Roodmus', value: 7 },
            { type: 'Sijzen', value: 8 },
            { type: 'Mexicaanse roodmus', value: 9 }
        ];
        return options;
    }
    createGenderOptions() {
        let genders = [
            { type: 'Pop', value: 'FEMALE' },
            { type: 'Man', value: 'MALE' }
        ];
        return genders;
    }
}
BirdFacade.ɵfac = function BirdFacade_Factory(t) { return new (t || BirdFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["ActionsSubject"])); };
BirdFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BirdFacade, factory: BirdFacade.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirdFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["ActionsSubject"] }]; }, null); })();


/***/ }),

/***/ "NzqS":
/*!********************************!*\
  !*** ./src/app/owner/index.ts ***!
  \********************************/
/*! exports provided: OwnerComponent, OwnerDetailComponent, OwnerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _owner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner.component */ "AchS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwnerComponent", function() { return _owner_component__WEBPACK_IMPORTED_MODULE_0__["OwnerComponent"]; });

/* harmony import */ var _owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-detail/owner-detail.component */ "HjzR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwnerDetailComponent", function() { return _owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_1__["OwnerDetailComponent"]; });

/* harmony import */ var _owner_create_owner_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner-create/owner-create.component */ "MiB7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwnerCreateComponent", function() { return _owner_create_owner_create_component__WEBPACK_IMPORTED_MODULE_2__["OwnerCreateComponent"]; });






/***/ }),

/***/ "PlGd":
/*!***********************************************************!*\
  !*** ./src/app/bird/bird-detail/bird-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: BirdDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdDetailComponent", function() { return BirdDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _bird_show_create_bird_show_create_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bird-show-create/bird-show-create.modal */ "ceQ+");
/* harmony import */ var _bird_show_update_bird_show_update_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bird-show-update/bird-show-update.modal */ "H4wY");
/* harmony import */ var src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/entities/bird/bird.facade */ "NLBs");
/* harmony import */ var src_app_store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/entities/owner/owner.facade */ "btcf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ui/components/loader/loader.component */ "nzoQ");






















function BirdDetailComponent_div_5_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdDetailComponent_div_5_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.goToBirthTree(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "width": "100%" }; };
function BirdDetailComponent_div_5_p_dropdown_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-dropdown", 54);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r4.owners)("showClear", true)("filter", true);
} }
function BirdDetailComponent_div_5_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Naam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Vader ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Moeder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Jaartal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ga naar koppel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BirdDetailComponent_div_5_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdDetailComponent_div_5_ng_template_73_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const couple_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.goToCouple(couple_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const couple_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](couple_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](couple_r15.fatherRingNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](couple_r15.motherRingNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 4, couple_r15.startedAt, "MM/yyyy"));
} }
function BirdDetailComponent_div_5_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Geen koppels gevonden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BirdDetailComponent_div_5_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Locatie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Punten ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Plaats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Opties ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BirdDetailComponent_div_5_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdDetailComponent_div_5_ng_template_83_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const show_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.openUpdateBirdShowModel(show_r18.birdId, show_r18.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](show_r18.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](show_r18.points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](show_r18.rank);
} }
function BirdDetailComponent_div_5_ng_template_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Geen tentoonstellingen gevonden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { "width": "50px" }; };
const _c2 = function () { return { "width": "200px" }; };
function BirdDetailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Algemene informatie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BirdDetailComponent_div_5_button_4_Template, 1, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ringnummer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Geslacht");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Jaartal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Kleur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Kotnummer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Kweker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Eigenaar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, BirdDetailComponent_div_5_p_dropdown_41_Template, 1, 6, "p-dropdown", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Omschrijving");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "textarea", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Dood");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "p-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdDetailComponent_div_5_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdDetailComponent_div_5_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Ouders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Vader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Moeder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Koppel geweest met");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p-table", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, BirdDetailComponent_div_5_ng_template_72_Template, 16, 0, "ng-template", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, BirdDetailComponent_div_5_ng_template_73_Template, 16, 7, "ng-template", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, BirdDetailComponent_div_5_ng_template_74_Template, 3, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Tentoonstellingen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdDetailComponent_div_5_Template_button_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.openCreateBirdShowModel(ctx_r24.bird.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p-table", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, BirdDetailComponent_div_5_ng_template_82_Template, 13, 0, "ng-template", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, BirdDetailComponent_div_5_ng_template_83_Template, 12, 3, "ng-template", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, BirdDetailComponent_div_5_ng_template_84_Template, 3, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.bird && ctx_r0.bird.parents !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.birdForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 22, ctx_r0.owners$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", 3)("cols", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.birdForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", (ctx_r0.bird == null ? null : ctx_r0.bird.parents) ? ctx_r0.bird.parents.fatherRingNumber : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", (ctx_r0.bird == null ? null : ctx_r0.bird.parents) ? ctx_r0.bird.parents.motherRingNumber : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.bird == null ? null : ctx_r0.bird.birdCouples)("rows", 10)("showCurrentPageReport", true)("paginator", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.bird == null ? null : ctx_r0.bird.birdShows)("rows", 10)("showCurrentPageReport", true)("paginator", true);
} }
function BirdDetailComponent_ng_template_7_c_loader_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-loader");
} }
function BirdDetailComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BirdDetailComponent_ng_template_7_c_loader_0_Template, 1, 0, "c-loader", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r2.loading$));
} }
class BirdDetailComponent {
    constructor(fb, birdFacade, ownerFacade, router, route, toastrService, dialogService) {
        this.fb = fb;
        this.birdFacade = birdFacade;
        this.ownerFacade = ownerFacade;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
        this.dialogService = dialogService;
        this.owners = [];
        // Observables
        this.bird$ = this.birdFacade.getBird();
        this.owners$ = this.ownerFacade.getOwners();
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loading$ = this.birdFacade.getLoadingDetail();
    }
    ngOnInit() {
        var _a;
        this.birdId = (_a = this.route.snapshot.params) === null || _a === void 0 ? void 0 : _a.id;
        this.birdFacade.getBirdRequest(parseInt(this.birdId));
        this.bird$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe((bird) => {
            if (bird !== null && bird !== undefined) {
                this.bird = bird;
                this.createDefaultForm(bird);
            }
        });
        // get breeders and owners
        this.getAllOwners();
        // handle success and errors
        this.handleSuccesses();
        this.handleErrors();
    }
    onSubmit() {
        var _a;
        const request = {
            id: parseInt(this.birdId),
            ringNumber: this.birdForm.get('ringNumber').value,
            cageNumber: this.birdForm.get('cageNumber').value,
            ownerId: this.birdForm.get('owner').value,
            description: (_a = this.birdForm.get('description').value) !== null && _a !== void 0 ? _a : '',
            isDead: this.birdForm.get('isDead').value
        };
        this.birdFacade.updateBirdRequest(request);
        this.birdFacade.clearDetail();
    }
    goBack() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    goToCouple(coupleId) {
        this.router.navigate([`couples/detail/${coupleId}`]);
    }
    goToBirthTree() {
        this.router.navigate([`couples/detail/${this.bird.parents.coupleId}`]);
    }
    createDefaultForm(bird) {
        this.birdForm = this.fb.group({
            ringNumber: [bird.ringNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: [{ value: bird.gender, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            birdType: [{ value: bird.birdType, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            birthDate: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            color: [{ value: bird.color, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cageNumber: [bird.cageNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            breeder: [{ value: `${bird.breeder.firstName} ${bird.breeder.lastName}`, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            owner: [bird.owner.id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [bird.description],
            isDead: [bird.isDead]
        });
        // set calendar value
        this.birdForm.get('birthDate').setValue(new Date(bird.birthDate).toISOString().split('T')[0]);
    }
    getAllOwners() {
        this.owners$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe((owners) => {
            // fetch owners if null or undefined
            if (owners === null || owners === undefined) {
                const request = {
                    page: 1,
                    pageSize: 10,
                };
                this.ownerFacade.getAllOwnersRequest(request);
            }
            if (owners !== null && owners !== undefined) {
                owners.forEach((owner) => {
                    const fullname = owner.firstName + " " + owner.lastName;
                    this.owners.push({ name: fullname, value: owner.id });
                });
            }
        });
    }
    openCreateBirdShowModel(birdId) {
        // open modal and pass id
        const ref = this.dialogService.open(_bird_show_create_bird_show_create_modal__WEBPACK_IMPORTED_MODULE_4__["BirdShowCreateModal"], {
            header: 'Tentoonstelling toevoegen',
            width: 'auto',
            height: 'auto',
            contentStyle: { overflow: 'visible' },
            data: {
                birdId
            }
        });
    }
    openUpdateBirdShowModel(birdId, id) {
        const request = {
            birdId,
            id
        };
        // open update modal
        var ref = this.dialogService.open(_bird_show_update_bird_show_update_modal__WEBPACK_IMPORTED_MODULE_5__["BirdShowUpdateModal"], {
            header: 'Tentoonstelling bewerken',
            width: 'auto',
            height: 'auto',
            contentStyle: { overflow: 'visible' },
            data: {
                request
            }
        });
        ref.onClose.subscribe(() => {
            this.birdFacade.clearBirdShowDetail();
        });
    }
    handleSuccesses() {
        this.birdFacade.onUpdateBirdSuccess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.success('Vogel gegevens aangepast!', 'Gelukt', {
                timeOut: 6000,
            });
            const request = {
                page: 1,
                pageSize: 10,
                searchValue: '',
                gender: 'ALL',
                typeOfBird: '0',
                year: 'ALL'
            };
            this.birdFacade.getAllBirdsRequest(request);
            this.birdFacade.clearDetail();
            this.goBack();
        });
    }
    handleErrors() {
        this.birdFacade.onUpdateBirdError().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.error('Oeps, er liep iets mis tijdens het aanpassen van deze vogel!', 'Error', {
                timeOut: 6000,
            });
        });
    }
}
BirdDetailComponent.ɵfac = function BirdDetailComponent_Factory(t) { return new (t || BirdDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_6__["BirdFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_7__["OwnerFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_10__["DialogService"])); };
BirdDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirdDetailComponent, selectors: [["app-bird-detail"]], decls: 9, vars: 4, consts: [[1, "page"], [1, "page-wrapper"], [1, "page-header"], ["class", "page-body", 4, "ngIf", "ngIfElse"], ["class", "p-mt-4"], ["loadingBlock", ""], [1, "page-body"], [1, "p-d-flex", "p-jc-between", "p-ai-center"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-arrow-right", "iconPos", "right", "label", "Ga naar stamboom", "class", "p-button-raised", 3, "click", 4, "ngIf"], [3, "formGroup"], [1, "form-group-wrapper"], [1, "form-group"], ["for", "ringNumber"], ["pInputText", "", "type", "text", "formControlName", "ringNumber", "id", "ringNumber", "placeholder", "XX123456789XX", 1, "form-control"], ["for", "gender"], ["pInputText", "", "type", "text", "formControlName", "gender", "id", "gender", 1, "form-control"], ["for", "birdType"], ["pInputText", "", "type", "text", "formControlName", "birdType", "id", "birdType", 1, "form-control"], ["for", "birthDate"], ["pInputText", "", "type", "date", "formControlName", "birthDate", "id", "birthDate", 1, "form-control"], ["for", "color"], ["pInputText", "", "type", "text", "formControlName", "color", "id", "color", 1, "form-control"], ["for", "cageNumber"], ["pInputText", "", "type", "text", "formControlName", "cageNumber", "id", "cageNumber", "placeholder", "A1", 1, "form-control"], ["for", "breeder"], ["pInputText", "", "type", "text", "formControlName", "breeder", "id", "breeder", 1, "form-control"], ["for", "owner"], ["autoWidth", "false", "optionLabel", "name", "optionValue", "value", "formControlName", "owner", "filterBy", "name", 3, "style", "options", "showClear", "filter", 4, "ngIf"], ["for", "description"], ["pInputTextarea", "", "type", "text", "formControlName", "description", "id", "description", "autoResize", "autoResize", 1, "form-control", 3, "rows", "cols"], [1, "form-group", "p-jc-center"], [1, "p-d-flex", "p-mt-2"], ["for", "isDead", 1, "p-mr-2"], ["formControlName", "isDead", "binary", "true"], [1, "form-footer"], ["pButton", "", "type", "button", "label", "Terug", 1, "p-button-outlined", 3, "click"], ["pButton", "", "type", "submit", "label", "Opslaan", 3, "disabled", "click"], [1, "p-d-flex", "p-jc-start"], [1, "p-d-flex", "p-flex-column", "p-mr-3"], ["for", "father"], ["pInputText", "", "type", "text", "id", "father", "placeholder", "-", "disabled", "", 1, "form-control", 3, "value"], [1, "p-d-flex", "p-flex-column"], ["for", "mother"], ["pInputText", "", "type", "text", "id", "mother", "placeholder", "-", "disabled", "", 1, "form-control", 3, "value"], [1, "p-mt-5"], [1, "couples"], ["dataKey", "id", "styleClass", "p-datatable-customers p-datatable-gridlines", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "paginator"], ["dt1", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-plus", "iconPos", "left", "label", "Tentoonstelling", 1, "p-button-raised", 3, "click"], [1, "shows"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-arrow-right", "iconPos", "right", "label", "Ga naar stamboom", 1, "p-button-raised", 3, "click"], ["autoWidth", "false", "optionLabel", "name", "optionValue", "value", "formControlName", "owner", "filterBy", "name", 3, "options", "showClear", "filter"], ["pButton", "", "pRipple", "", "type", "button", "label", "Open", 1, "detail-button", 2, "margin-left", "5px", 3, "click"], ["colspan", "7"], ["pButton", "", "pRipple", "", "type", "button", "label", "", "icon", "pi pi-pencil", 1, "detail-button", 2, "margin-left", "5px", 3, "click"], [4, "ngIf"]], template: function BirdDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bird management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BirdDetailComponent_div_5_Template, 85, 27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BirdDetailComponent_ng_template_7_Template, 2, 3, "ng-template", 4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.birdForm && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.loading$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__["InputTextarea"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__["Checkbox"], primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonDirective"], primeng_table__WEBPACK_IMPORTED_MODULE_16__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_17__["PrimeTemplate"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__["Dropdown"], _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --primary-color: #e94e0f;\n  --primary-light-color: #f2642c;\n  --primary-background-color: #fef6f3;\n  --accent-color: #870b58;\n  --accent-dark-color: #5e083d;\n  --accent-light-color: #fbd0eb;\n  --yellow-brand-color: #f8ad07;\n  --accent-20-color: #e1c2d5;\n  --info-color: #415fca;\n  --info-light-color: hsl(227, 56%, 52%, 0.1);\n  --success-color: #21bc5f;\n  --success-light-color: hsla(144, 70%, 43%, 0.1);\n  --warning-color: #ffc700;\n  --warning-light-color: #FDEAC1;\n  --danger-color: #ff005c;\n  --danger-light-color: hsla(338, 100%, 50%, 0.8);\n  --danger-lighter-color: hsla(338, 100%, 90%, 0.8);\n  --brand-red-color: #E4003A;\n  --brand-red-20-color: #F8BFCD;\n  --brand-orange-color: #E94E0F;\n  --brand-orange-20-color: #F9D2C3;\n  --brand-yellow-color: #F8AD07;\n  --brand-yellow-20-color: #FDEAC1;\n  --brand-purple-color: #870B58;\n  --brand-purple-20-color: #E1C2D5;\n  --tuna-gray-color: #303642;\n  --tuna-gray-80-color: #555d71;\n  --tuna-gray-60-color: #7f8594;\n  --tuna-gray-40-color: #aaaeb8;\n  --tuna-gray-20-color: #f6f6f6;\n  --slate-gray-color: #7783a0;\n  --slate-gray-80-color: #929bb3;\n  --slate-gray-60-color: #adb4c6;\n  --slate-gray-40-color: #c8cdd9;\n  --slate-gray-20-color: #e3e6ec;\n  --slate-gray-10-color: #f1f3f5;\n  --slate-gray-5-color: #f8fafc;\n  --white-color: #ffffff;\n  --black-color: #000000;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 71px);\n  overflow: auto;\n  background-color: var(--slate-gray-5-color);\n  background-image: url('background.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  width: 70vw;\n  margin: 0 auto;\n  background-color: rgba(255, 255, 255, 0.6);\n  margin-top: 32px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--slate-gray-20-color);\n  background-color: var(--tuna-gray-20-color);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.page-body[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n}\n\n.page-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  width: calc(50% - 8px);\n}\n\n.form-group-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.form-group-wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:last-child {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR0aW5nc1xcX2NvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGJpcmQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUMsd0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFHQSwwQkFBQTtFQUdBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSx3QkFBQTtFQUNBLCtDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSxpREFBQTtFQUdBLDBCQUFBO0VBQ0EsNkJBQUE7RUFFQSw2QkFBQTtFQUNBLGdDQUFBO0VBRUEsNkJBQUE7RUFDQSxnQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFHQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRUEsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFFQSxzQkFBQTtFQUNBLHNCQUFBO0FDakJEOztBQXRDQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQXlDSjs7QUF0Q0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUF5Q0o7O0FBdENBO0VBQ0ksbURBQUE7RUFDQSwyQ0FBQTtBQXlDSjs7QUF2Q0k7RUFDSSxhQUFBO0FBeUNSOztBQXJDQTtFQUNJLGtCQUFBO0FBd0NKOztBQXRDSTtFQUNJLG9CQUFBO0FBd0NSOztBQXBDQTtFQUNJLHNCQUFBO0FBdUNKOztBQXBDQTtFQUNJLGFBQUE7QUF1Q0o7O0FBckNJO0VBQ0ksaUJBQUE7QUF1Q1IiLCJmaWxlIjoiYmlyZC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdHlsZWxpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb2xvcnNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOnJvb3Qge1xyXG5cdC8vIEJyYW5kIGlkZW50aXR5IGNvbG9yc1xyXG5cdC0tcHJpbWFyeS1jb2xvcjogI2U5NGUwZjtcclxuXHQtLXByaW1hcnktbGlnaHQtY29sb3I6ICNmMjY0MmM7XHJcblx0LS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZWY2ZjM7XHJcblx0LS1hY2NlbnQtY29sb3I6ICM4NzBiNTg7XHJcblx0LS1hY2NlbnQtZGFyay1jb2xvcjogIzVlMDgzZDtcclxuXHQtLWFjY2VudC1saWdodC1jb2xvcjogI2ZiZDBlYjtcclxuXHQtLXllbGxvdy1icmFuZC1jb2xvcjogI2Y4YWQwNztcclxuXHJcblx0Ly8gQ29tcGxlbWVudGFyeSBjb2xvcnNcclxuXHQtLWFjY2VudC0yMC1jb2xvcjogI2UxYzJkNTtcclxuXHJcblx0Ly8gU3RhdGVzXHJcblx0LS1pbmZvLWNvbG9yOiAjNDE1ZmNhO1xyXG5cdC0taW5mby1saWdodC1jb2xvcjogaHNsKDIyNywgNTYlLCA1MiUsIDAuMSk7XHJcblx0LS1zdWNjZXNzLWNvbG9yOiAjMjFiYzVmO1xyXG5cdC0tc3VjY2Vzcy1saWdodC1jb2xvcjogaHNsYSgxNDQsIDcwJSwgNDMlLCAwLjEpO1xyXG5cdC0td2FybmluZy1jb2xvcjogI2ZmYzcwMDtcclxuXHQtLXdhcm5pbmctbGlnaHQtY29sb3I6ICNGREVBQzE7XHJcblx0LS1kYW5nZXItY29sb3I6ICNmZjAwNWM7XHJcblx0LS1kYW5nZXItbGlnaHQtY29sb3I6IGhzbGEoMzM4LCAxMDAlLCA1MCUsIDAuOCk7XHJcblx0LS1kYW5nZXItbGlnaHRlci1jb2xvcjogaHNsYSgzMzgsIDEwMCUsIDkwJSwgMC44KTtcclxuXHJcblx0Ly8gRXh0cmEgY29sb3JzXHJcblx0LS1icmFuZC1yZWQtY29sb3I6ICNFNDAwM0E7XHJcblx0LS1icmFuZC1yZWQtMjAtY29sb3I6ICNGOEJGQ0Q7XHJcblxyXG5cdC0tYnJhbmQtb3JhbmdlLWNvbG9yOiAjRTk0RTBGO1xyXG5cdC0tYnJhbmQtb3JhbmdlLTIwLWNvbG9yOiAjRjlEMkMzO1xyXG5cclxuXHQtLWJyYW5kLXllbGxvdy1jb2xvcjogI0Y4QUQwNztcclxuXHQtLWJyYW5kLXllbGxvdy0yMC1jb2xvcjogI0ZERUFDMTtcclxuXHJcblx0LS1icmFuZC1wdXJwbGUtY29sb3I6ICM4NzBCNTg7XHJcblx0LS1icmFuZC1wdXJwbGUtMjAtY29sb3I6ICNFMUMyRDU7XHJcblxyXG5cdC8vIEdyYXlzY2FsZVxyXG5cdC0tdHVuYS1ncmF5LWNvbG9yOiAjMzAzNjQyO1xyXG5cdC0tdHVuYS1ncmF5LTgwLWNvbG9yOiAjNTU1ZDcxO1xyXG5cdC0tdHVuYS1ncmF5LTYwLWNvbG9yOiAjN2Y4NTk0O1xyXG5cdC0tdHVuYS1ncmF5LTQwLWNvbG9yOiAjYWFhZWI4O1xyXG5cdC0tdHVuYS1ncmF5LTIwLWNvbG9yOiAjZjZmNmY2O1xyXG5cclxuXHQtLXNsYXRlLWdyYXktY29sb3I6ICM3NzgzYTA7XHJcblx0LS1zbGF0ZS1ncmF5LTgwLWNvbG9yOiAjOTI5YmIzO1xyXG5cdC0tc2xhdGUtZ3JheS02MC1jb2xvcjogI2FkYjRjNjtcclxuXHQtLXNsYXRlLWdyYXktNDAtY29sb3I6ICNjOGNkZDk7XHJcblx0LS1zbGF0ZS1ncmF5LTIwLWNvbG9yOiAjZTNlNmVjO1xyXG5cdC0tc2xhdGUtZ3JheS0xMC1jb2xvcjogI2YxZjNmNTtcclxuXHQtLXNsYXRlLWdyYXktNS1jb2xvcjogI2Y4ZmFmYztcclxuXHJcblx0LS13aGl0ZS1jb2xvcjogI2ZmZmZmZjtcclxuXHQtLWJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbiIsIjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZTk0ZTBmO1xuICAtLXByaW1hcnktbGlnaHQtY29sb3I6ICNmMjY0MmM7XG4gIC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmNmYzO1xuICAtLWFjY2VudC1jb2xvcjogIzg3MGI1ODtcbiAgLS1hY2NlbnQtZGFyay1jb2xvcjogIzVlMDgzZDtcbiAgLS1hY2NlbnQtbGlnaHQtY29sb3I6ICNmYmQwZWI7XG4gIC0teWVsbG93LWJyYW5kLWNvbG9yOiAjZjhhZDA3O1xuICAtLWFjY2VudC0yMC1jb2xvcjogI2UxYzJkNTtcbiAgLS1pbmZvLWNvbG9yOiAjNDE1ZmNhO1xuICAtLWluZm8tbGlnaHQtY29sb3I6IGhzbCgyMjcsIDU2JSwgNTIlLCAwLjEpO1xuICAtLXN1Y2Nlc3MtY29sb3I6ICMyMWJjNWY7XG4gIC0tc3VjY2Vzcy1saWdodC1jb2xvcjogaHNsYSgxNDQsIDcwJSwgNDMlLCAwLjEpO1xuICAtLXdhcm5pbmctY29sb3I6ICNmZmM3MDA7XG4gIC0td2FybmluZy1saWdodC1jb2xvcjogI0ZERUFDMTtcbiAgLS1kYW5nZXItY29sb3I6ICNmZjAwNWM7XG4gIC0tZGFuZ2VyLWxpZ2h0LWNvbG9yOiBoc2xhKDMzOCwgMTAwJSwgNTAlLCAwLjgpO1xuICAtLWRhbmdlci1saWdodGVyLWNvbG9yOiBoc2xhKDMzOCwgMTAwJSwgOTAlLCAwLjgpO1xuICAtLWJyYW5kLXJlZC1jb2xvcjogI0U0MDAzQTtcbiAgLS1icmFuZC1yZWQtMjAtY29sb3I6ICNGOEJGQ0Q7XG4gIC0tYnJhbmQtb3JhbmdlLWNvbG9yOiAjRTk0RTBGO1xuICAtLWJyYW5kLW9yYW5nZS0yMC1jb2xvcjogI0Y5RDJDMztcbiAgLS1icmFuZC15ZWxsb3ctY29sb3I6ICNGOEFEMDc7XG4gIC0tYnJhbmQteWVsbG93LTIwLWNvbG9yOiAjRkRFQUMxO1xuICAtLWJyYW5kLXB1cnBsZS1jb2xvcjogIzg3MEI1ODtcbiAgLS1icmFuZC1wdXJwbGUtMjAtY29sb3I6ICNFMUMyRDU7XG4gIC0tdHVuYS1ncmF5LWNvbG9yOiAjMzAzNjQyO1xuICAtLXR1bmEtZ3JheS04MC1jb2xvcjogIzU1NWQ3MTtcbiAgLS10dW5hLWdyYXktNjAtY29sb3I6ICM3Zjg1OTQ7XG4gIC0tdHVuYS1ncmF5LTQwLWNvbG9yOiAjYWFhZWI4O1xuICAtLXR1bmEtZ3JheS0yMC1jb2xvcjogI2Y2ZjZmNjtcbiAgLS1zbGF0ZS1ncmF5LWNvbG9yOiAjNzc4M2EwO1xuICAtLXNsYXRlLWdyYXktODAtY29sb3I6ICM5MjliYjM7XG4gIC0tc2xhdGUtZ3JheS02MC1jb2xvcjogI2FkYjRjNjtcbiAgLS1zbGF0ZS1ncmF5LTQwLWNvbG9yOiAjYzhjZGQ5O1xuICAtLXNsYXRlLWdyYXktMjAtY29sb3I6ICNlM2U2ZWM7XG4gIC0tc2xhdGUtZ3JheS0xMC1jb2xvcjogI2YxZjNmNTtcbiAgLS1zbGF0ZS1ncmF5LTUtY29sb3I6ICNmOGZhZmM7XG4gIC0td2hpdGUtY29sb3I6ICNmZmZmZmY7XG4gIC0tYmxhY2stY29sb3I6ICMwMDAwMDA7XG59XG5cbi5wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcxcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUtZ3JheS01LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGFnZS13cmFwcGVyIHtcbiAgd2lkdGg6IDcwdnc7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zbGF0ZS1ncmF5LTIwLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuYS1ncmF5LTIwLWNvbG9yKTtcbn1cbi5wYWdlLWhlYWRlciBoMSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5wYWdlLWJvZHkge1xuICBwYWRkaW5nOiAzMnB4IDE2cHg7XG59XG4ucGFnZS1ib2R5IGgyIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gOHB4KTtcbn1cblxuLmZvcm0tZ3JvdXAtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZm9ybS1ncm91cC13cmFwcGVyIC5mb3JtLWdyb3VwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirdDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bird-detail',
                templateUrl: './bird-detail.component.html',
                styleUrls: ['./bird-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_6__["BirdFacade"] }, { type: src_app_store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_7__["OwnerFacade"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_10__["DialogService"] }]; }, null); })();


/***/ }),

/***/ "QPzd":
/*!*********************************************************************!*\
  !*** ./src/app/couple/birdegg-update-modal/birdegg-update-modal.ts ***!
  \*********************************************************************/
/*! exports provided: BirdEggUpdateModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdEggUpdateModal", function() { return BirdEggUpdateModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var src_app_store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/entities/couple/couple.facade */ "j9ud");
/* harmony import */ var src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/entities/bird/bird.facade */ "NLBs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/components/loader/loader.component */ "nzoQ");
















function BirdEggUpdateModal_form_1_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/", group_r3.label, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r3.label);
} }
const _c0 = function () { return { "width": "100%" }; };
function BirdEggUpdateModal_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Datum gelegd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-calendar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Datum uitgekomen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p-calendar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Datum uitgevlogen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p-calendar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ringnummer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Kleur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BirdEggUpdateModal_form_1_ng_template_21_Template, 4, 2, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Geslacht");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "p-dropdown", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdEggUpdateModal_form_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdEggUpdateModal_form_1_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.handleSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.birdEggForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.groupedColors)("showClear", true)("filter", true)("group", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.genderOptions);
} }
function BirdEggUpdateModal_c_loader_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-loader");
} }
class BirdEggUpdateModal {
    constructor(ref, config, coupleFacade, birdFacade, fb, toastrService) {
        this.ref = ref;
        this.config = config;
        this.coupleFacade = coupleFacade;
        this.birdFacade = birdFacade;
        this.fb = fb;
        this.toastrService = toastrService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loading$ = this.coupleFacade.getLoadingModal();
        this.birdEgg$ = this.coupleFacade.getBirdEgg();
        this.groupedColors = [];
        this.genderOptions = [];
    }
    ngOnInit() {
        // get birdEgg with id
        this.coupleFacade.getBirdEggRequest(this.config.data.request);
        this.birdEgg$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((birdEgg) => {
            if (birdEgg !== null && birdEgg !== undefined) {
                this.birdEgg = birdEgg;
                this.createForm(birdEgg);
            }
        });
        this.groupedColors = this.birdFacade.createBirdTypeColors();
        this.createGenderOptions();
    }
    handleSubmit() {
        const cameOutOn = this.birdEggForm.get('cameOutOn').value;
        const flyOutOn = this.birdEggForm.get('flyOutOn').value;
        const ringNumber = this.birdEggForm.get('ringNumber').value;
        const color = this.birdEggForm.get('color').value;
        const gender = this.birdEggForm.get('gender').value;
        const request = {
            id: this.birdEgg.id,
            layedOn: this.birdEgg.layedOn,
            coupleId: this.birdEgg.coupleId,
            cameOutOn: cameOutOn !== '' ? cameOutOn : null,
            flyOutOn: flyOutOn !== '' ? flyOutOn : null,
            ringNumber: ringNumber !== '' ? ringNumber : null,
            color: color !== '' ? color : null,
            gender: gender !== '' ? gender : null,
        };
        // facade update Birdegg
        this.coupleFacade.updateBirdEggRequest(request);
        this.coupleFacade.onUpdateBirdEggSuccess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(() => {
            // add toastr message
            this.toastrService.success('Ei aangepast!', 'Gelukt', {
                timeOut: 6000,
            });
            this.coupleFacade.getCoupleRequest(this.config.data.request.coupleId);
            this.coupleFacade.clearBirdEggDetail();
            this.birdFacade.getAllBirdsRequest({ page: 1, pageSize: 10, searchValue: '', gender: 'ALL', typeOfBird: '0', year: 'ALL' });
            this.ref.close();
        });
        this.coupleFacade.onUpdateBirdEggError().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(() => {
            // add toastr message
            this.toastrService.error('Oeps, er liep iets mis met het updaten van dit ei!', 'Error', {
                timeOut: 6000,
            });
        });
    }
    goBack() {
        this.ref.close();
    }
    createForm(birdEgg) {
        this.birdEggForm = this.fb.group({
            layedOn: [{ value: birdEgg.layedOn ? new Date(birdEgg.layedOn) : '', disabled: true }],
            cameOutOn: [birdEgg.cameOutOn ? new Date(birdEgg.cameOutOn) : ''],
            flyOutOn: [birdEgg.flyOutOn ? new Date(birdEgg.flyOutOn) : ''],
            ringNumber: [birdEgg.ringNumber],
            color: [birdEgg.color],
            gender: [birdEgg.gender],
        });
    }
    createGenderOptions() {
        this.genderOptions = [
            { type: 'Pop', value: 'FEMALE' },
            { type: 'Man', value: 'MALE' }
        ];
    }
}
BirdEggUpdateModal.ɵfac = function BirdEggUpdateModal_Factory(t) { return new (t || BirdEggUpdateModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_4__["CoupleFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_5__["BirdFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
BirdEggUpdateModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirdEggUpdateModal, selectors: [["birdegg-update-modal"]], inputs: { request: "request" }, decls: 5, vars: 6, consts: [[1, "modal-body"], [3, "formGroup", 4, "ngIf"], [4, "ngIf"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["formControlName", "layedOn", "dateFormat", "dd-mm-yy", "inputId", "dateformat"], ["formControlName", "cameOutOn", "dateFormat", "dd-mm-yy", "inputId", "dateformat"], ["formControlName", "flyOutOn", "dateFormat", "dd-mm-yy", "inputId", "dateformat"], ["for", "ringNumber"], ["pInputText", "", "type", "text", "formControlName", "ringNumber", "id", "ringNumber", 1, "form-control"], ["for", "color"], ["autoWidth", "false", "formControlName", "color", "optionLabel", "label", "optionValue", "value", "filterBy", "label", "placeholder", "Selecteer een kleur...", 3, "options", "showClear", "filter", "group"], ["pTemplate", "group"], ["for", "gender"], ["autoWidth", "false", "placeholder", "Selecteer een geslacht...", "optionLabel", "type", "optionValue", "value", "formControlName", "gender", 3, "options"], [1, "form-footer"], ["pButton", "", "type", "submit", "label", "Terug", 3, "click"], ["pButton", "", "type", "submit", "label", "Opslaan", 3, "click"], [1, "p-d-flex", "p-ai-center"], [1, "p-mr-2", 2, "width", "32px", 3, "src"]], template: function BirdEggUpdateModal_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BirdEggUpdateModal_form_1_Template, 29, 12, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BirdEggUpdateModal_c_loader_3_Template, 1, 0, "c-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.birdEggForm && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["Calendar"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["Dropdown"], primeng_api__WEBPACK_IMPORTED_MODULE_12__["PrimeTemplate"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonDirective"], _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirdEggUpdateModal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'birdegg-update-modal',
                templateUrl: './birdegg-update-modal.html',
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogRef"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogConfig"] }, { type: src_app_store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_4__["CoupleFacade"] }, { type: src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_5__["BirdFacade"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, { request: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QtjH":
/*!*******************************************************!*\
  !*** ./src/app/store/entities/bird/bird.selectors.ts ***!
  \*******************************************************/
/*! exports provided: selectBirdState, selectLoadingAll, selectLoadingDetail, selectLoadingModal, selectPagination, selectBirds, selectBird, selectBirdShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBirdState", function() { return selectBirdState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingAll", function() { return selectLoadingAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingDetail", function() { return selectLoadingDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingModal", function() { return selectLoadingModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPagination", function() { return selectPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBirds", function() { return selectBirds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBird", function() { return selectBird; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBirdShow", function() { return selectBirdShow; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store.config */ "ogCa");


const selectBirdState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_store_config__WEBPACK_IMPORTED_MODULE_1__["selectFeature"], (state) => state.bird);
const selectLoadingAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBirdState, (state) => state.loadingAll);
const selectLoadingDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBirdState, (state) => state.loadingDetail);
const selectLoadingModal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBirdState, (state) => state.loadingModal);
const selectPagination = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBirdState, (state) => state.pagination);
const selectBirds = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBirdState, (state) => state.birds);
const selectBird = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBirdState, (state) => state.birdDetail);
const selectBirdShow = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBirdState, (state) => state.birdShowDetail);


/***/ }),

/***/ "SVIU":
/*!*******************************************************!*\
  !*** ./src/app/store/entities/owner/owner.effects.ts ***!
  \*******************************************************/
/*! exports provided: OwnerEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerEffects", function() { return OwnerEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _owner_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owner.actions */ "WGU+");
/* harmony import */ var src_app_Services_owner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/owner.service */ "apbX");








class OwnerEffects {
    constructor(actions$, ownerService) {
        this.actions$ = actions$;
        this.ownerService = ownerService;
        // fetch owners
        this.getOwners$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_owner_actions__WEBPACK_IMPORTED_MODULE_4__["getOwners"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.ownerService.getAllOwners(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((owners) => _owner_actions__WEBPACK_IMPORTED_MODULE_4__["getOwnersSuccess"]({ owners: owners })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_owner_actions__WEBPACK_IMPORTED_MODULE_4__["getOwnersError"]({ error })))))));
        // fetch owner
        this.getOwner$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_owner_actions__WEBPACK_IMPORTED_MODULE_4__["getOwner"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ ownerId }) => this.ownerService.getOwner(ownerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((owner) => _owner_actions__WEBPACK_IMPORTED_MODULE_4__["getOwnerSuccess"]({ ownerDetail: owner })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_owner_actions__WEBPACK_IMPORTED_MODULE_4__["getOwnerError"]({ error })))))));
        // create owner
        this.createOwners$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_owner_actions__WEBPACK_IMPORTED_MODULE_4__["createOwner"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.ownerService.createOwner(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _owner_actions__WEBPACK_IMPORTED_MODULE_4__["createOwnerSuccess"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_owner_actions__WEBPACK_IMPORTED_MODULE_4__["createOwnerError"]({ error })))))));
        // update owner
        this.updateOwners$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_owner_actions__WEBPACK_IMPORTED_MODULE_4__["updateOwner"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.ownerService.updateOwner(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _owner_actions__WEBPACK_IMPORTED_MODULE_4__["updateOwnerSuccess"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_owner_actions__WEBPACK_IMPORTED_MODULE_4__["updateOwnerError"]({ error })))))));
    }
}
OwnerEffects.ɵfac = function OwnerEffects_Factory(t) { return new (t || OwnerEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Services_owner_service__WEBPACK_IMPORTED_MODULE_5__["OwnerService"])); };
OwnerEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OwnerEffects, factory: OwnerEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnerEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_Services_owner_service__WEBPACK_IMPORTED_MODULE_5__["OwnerService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/splitbutton */ "Wq6t");





class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'Bird Database';
    }
    ngOnInit() {
        this.birdItems = [
            {
                label: 'Overzicht Vogels',
                icon: 'pi pi-home',
                routerLink: '/birds'
            },
            {
                label: 'Vogel Aanmaken',
                icon: 'pi pi-plus',
                routerLink: '/birds/create'
            }
        ];
        this.ownerItems = [
            {
                label: 'Overzicht Eigenaars',
                icon: 'pi pi-home',
                routerLink: '/owners'
            },
            {
                label: 'Eigenaar Aanmaken',
                icon: 'pi pi-plus',
                routerLink: '/owners/create'
            }
        ];
        this.breederItems = [
            {
                label: 'Overzicht Kwekers',
                icon: 'pi pi-home',
                routerLink: '/breeders'
            },
            {
                label: 'Kweker Aanmaken',
                icon: 'pi pi-plus',
                routerLink: '/breeders/create'
            }
        ];
        this.coupleItems = [
            {
                label: 'Overzicht Koppels',
                icon: 'pi pi-home',
                routerLink: '/couples'
            },
            {
                label: 'Koppel Aanmaken',
                icon: 'pi pi-plus',
                routerLink: '/couples/create'
            }
        ];
    }
    navigateToPage(path) {
        this.router.navigate([path]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 4, consts: [[1, "p-toolbar-group-left"], ["label", "Vogels", 1, "button-toolbar", 3, "model", "onClick"], ["label", "Eigenaars", 1, "button-toolbar", 3, "model", "onClick"], ["label", "Kwekers", 1, "button-toolbar", 3, "model", "onClick"], ["label", "Koppels", 1, "button-toolbar", 3, "model", "onClick"], [1, "p-toolbar-group-right"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-splitButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function AppComponent_Template_p_splitButton_onClick_2_listener() { return ctx.navigateToPage("/birds"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-splitButton", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function AppComponent_Template_p_splitButton_onClick_3_listener() { return ctx.navigateToPage("/owners"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-splitButton", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function AppComponent_Template_p_splitButton_onClick_4_listener() { return ctx.navigateToPage("/breeders"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-splitButton", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function AppComponent_Template_p_splitButton_onClick_5_listener() { return ctx.navigateToPage("/couples"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.birdItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.ownerItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.breederItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.coupleItems);
    } }, directives: [primeng_toolbar__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_3__["SplitButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".button-toolbar[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXRvb2xiYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "VIGI":
/*!*****************************************************!*\
  !*** ./src/app/store/entities/bird/bird.effects.ts ***!
  \*****************************************************/
/*! exports provided: BirdEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdEffects", function() { return BirdEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _bird_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bird.actions */ "lLKA");
/* harmony import */ var src_app_Services_bird_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/bird.service */ "mzci");








class BirdEffects {
    constructor(actions$, birdService) {
        this.actions$ = actions$;
        this.birdService = birdService;
        // fetch birds
        this.getBirds$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["getBirds"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.birdService.getBirds(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((birds) => _bird_actions__WEBPACK_IMPORTED_MODULE_4__["getBirdsSuccess"]({ birds: birds })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["getBirdsError"]({ error })))))));
        // fetch bird
        this.getBird$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["getBird"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ birdId }) => this.birdService.getBird(birdId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((bird) => _bird_actions__WEBPACK_IMPORTED_MODULE_4__["getBirdSuccess"]({ birdDetail: bird })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["getBirdError"]({ error })))))));
        // create breeder
        this.createBirds$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["createBird"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.birdService.createBird(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _bird_actions__WEBPACK_IMPORTED_MODULE_4__["createBirdSuccess"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["createBirdError"]({ error })))))));
        // update breeder
        this.updateBirds$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["updateBird"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.birdService.updateBird(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _bird_actions__WEBPACK_IMPORTED_MODULE_4__["updateBirdSuccess"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["updateBirdError"]({ error })))))));
        // create birdShow
        this.createBirdShow$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["createBirdShow"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.birdService.createBirdShow(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _bird_actions__WEBPACK_IMPORTED_MODULE_4__["createBirdShowSuccess"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["createBirdShowError"]({ error })))))));
        // update breeder
        this.updateBirdShow$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["updateBirdShow"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ id, request }) => this.birdService.updateBirdShow(id, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _bird_actions__WEBPACK_IMPORTED_MODULE_4__["updateBirdShowSuccess"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["updateBirdShowError"]({ error })))))));
        // fetch bird
        this.getBirdShow$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["getBirdShow"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.birdService.getBirdShow(request.birdId, request.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((birdShowDetail) => _bird_actions__WEBPACK_IMPORTED_MODULE_4__["getBirdShowSuccess"]({ birdShowDetail })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_bird_actions__WEBPACK_IMPORTED_MODULE_4__["getBirdShowError"]({ error })))))));
    }
}
BirdEffects.ɵfac = function BirdEffects_Factory(t) { return new (t || BirdEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Services_bird_service__WEBPACK_IMPORTED_MODULE_5__["BirdService"])); };
BirdEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BirdEffects, factory: BirdEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirdEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_Services_bird_service__WEBPACK_IMPORTED_MODULE_5__["BirdService"] }]; }, null); })();


/***/ }),

/***/ "WGU+":
/*!*******************************************************!*\
  !*** ./src/app/store/entities/owner/owner.actions.ts ***!
  \*******************************************************/
/*! exports provided: getOwners, getOwnersSuccess, getOwnersError, getOwner, getOwnerSuccess, getOwnerError, createOwner, createOwnerSuccess, createOwnerError, updateOwner, updateOwnerSuccess, updateOwnerError, clearOwnerDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwners", function() { return getOwners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnersSuccess", function() { return getOwnersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnersError", function() { return getOwnersError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwner", function() { return getOwner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerSuccess", function() { return getOwnerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerError", function() { return getOwnerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOwner", function() { return createOwner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOwnerSuccess", function() { return createOwnerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOwnerError", function() { return createOwnerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOwner", function() { return updateOwner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOwnerSuccess", function() { return updateOwnerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOwnerError", function() { return updateOwnerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearOwnerDetail", function() { return clearOwnerDetail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// GET all Owners
const getOwners = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Owner] GET All Owners', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getOwnersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Owner] GET All Owners Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getOwnersError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Owner] GET All Owners Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// GET owner
const getOwner = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Owner] GET Owner', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getOwnerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Owner] GET Owner Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getOwnerError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Owner] GET Owner Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// CREATE owner
const createOwner = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Owner] CREATE Owner', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createOwnerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Owner] CREATE Owner Success');
const createOwnerError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Owner] CREATE Owner Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// UPDATE owner
const updateOwner = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Owner] UPDATE Owner', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateOwnerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Owner] UPDATE Owner Success');
const updateOwnerError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Owner] UPDATE Owner Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Clear
const clearOwnerDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Owner] Clear Owner detail');


/***/ }),

/***/ "Xutl":
/*!**********************************************************!*\
  !*** ./src/app/store/entities/breeder/breeder.facade.ts ***!
  \**********************************************************/
/*! exports provided: BreederFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreederFacade", function() { return BreederFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _breeder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breeder.actions */ "pkpR");
/* harmony import */ var _breeder_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breeder.selectors */ "4PoU");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");






class BreederFacade {
    constructor(store, action$) {
        this.store = store;
        this.action$ = action$;
    }
    // Selectors
    getBreeders() {
        return this.store.select(_breeder_selectors__WEBPACK_IMPORTED_MODULE_3__["selectBreeders"]);
    }
    getBreeder() {
        return this.store.select(_breeder_selectors__WEBPACK_IMPORTED_MODULE_3__["selectBreeder"]);
    }
    getPagination() {
        return this.store.select(_breeder_selectors__WEBPACK_IMPORTED_MODULE_3__["selectPagination"]);
    }
    getLoading() {
        return this.store.select(_breeder_selectors__WEBPACK_IMPORTED_MODULE_3__["selectLoadingAll"]);
    }
    getLoadingDetail() {
        return this.store.select(_breeder_selectors__WEBPACK_IMPORTED_MODULE_3__["selectLoadingDetail"]);
    }
    clearDetail() {
        this.store.dispatch(_breeder_actions__WEBPACK_IMPORTED_MODULE_2__["clearBreederDetail"]());
    }
    // Actions
    getAllBreedersRequest(request) {
        this.store.dispatch(_breeder_actions__WEBPACK_IMPORTED_MODULE_2__["getBreeders"]({ request }));
    }
    getBreederRequest(breederId) {
        this.store.dispatch(_breeder_actions__WEBPACK_IMPORTED_MODULE_2__["getBreeder"]({ breederId }));
    }
    createBreeder(request) {
        this.store.dispatch(_breeder_actions__WEBPACK_IMPORTED_MODULE_2__["createBreeder"]({ request }));
    }
    updateBreederRequest(request) {
        this.store.dispatch(_breeder_actions__WEBPACK_IMPORTED_MODULE_2__["updateBreeder"]({ request }));
    }
    // ActionSubjects
    onCreateBreederSuccess() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_2__["createBreederSuccess"].type));
    }
    onCreateBreederError() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_2__["createBreederError"].type));
    }
    onUpdateBreederSuccess() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_2__["updateBreederSuccess"].type));
    }
    onUpdateBreederError() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_2__["updateBreederError"].type));
    }
}
BreederFacade.ɵfac = function BreederFacade_Factory(t) { return new (t || BreederFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["ActionsSubject"])); };
BreederFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BreederFacade, factory: BreederFacade.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreederFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["ActionsSubject"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/splitbutton */ "Wq6t");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/virtualscroller */ "+/m8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/panel */ "7CaW");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/organizationchart */ "dQiQ");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputmask */ "CwEU");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/paginator */ "6t4m");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _bird_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./bird/index */ "+Yay");
/* harmony import */ var _owner_index__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./owner/index */ "NzqS");
/* harmony import */ var _breeder_index__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./breeder/index */ "c86f");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _ui_components_index__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ui/components/index */ "xXuK");
/* harmony import */ var _couple_couple_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./couple/couple.component */ "1Blk");
/* harmony import */ var _couple_couple_create_couple_create_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./couple/couple-create/couple-create.component */ "xLNH");
/* harmony import */ var _couple_couple_detail_couple_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./couple/couple-detail/couple-detail.component */ "iAIc");
/* harmony import */ var _couple_birdegg_create_modal_birdegg_create_modal__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./couple/birdegg-create-modal/birdegg-create-modal */ "dzVi");
/* harmony import */ var _couple_birdegg_update_modal_birdegg_update_modal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./couple/birdegg-update-modal/birdegg-update-modal */ "QPzd");
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./store/store.module */ "NFwV");
/* harmony import */ var _store_entities_store_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./store/entities/store.module */ "1b/w");
/* harmony import */ var _Services_base_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Services/base.service */ "n/8u");
// *** MODULES ***

























// *** COMPONENTS ***






// TODO replace with index file



// *** MODALS ***


// *** STORE CONFIG ***





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_Services_base_service__WEBPACK_IMPORTED_MODULE_37__["BaseService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]], imports: [[
            _store_store_module__WEBPACK_IMPORTED_MODULE_35__["AppStoreModule"],
            _store_entities_store_module__WEBPACK_IMPORTED_MODULE_36__["CoreStoreModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot({
                maxOpened: 4,
                preventDuplicates: true,
                positionClass: 'toast-top-right'
            }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__["ToolbarModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8__["SplitButtonModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
            primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_10__["VirtualScrollerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputTextModule"],
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__["InputNumberModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_15__["PanelModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__["InputTextareaModule"],
            primeng_organizationchart__WEBPACK_IMPORTED_MODULE_17__["OrganizationChartModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__["CheckboxModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_20__["CalendarModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_21__["InputMaskModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__["ProgressSpinnerModule"],
            primeng_paginator__WEBPACK_IMPORTED_MODULE_23__["PaginatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
        _bird_index__WEBPACK_IMPORTED_MODULE_25__["BirdComponent"],
        _bird_index__WEBPACK_IMPORTED_MODULE_25__["BirdDetailComponent"],
        _bird_index__WEBPACK_IMPORTED_MODULE_25__["BirdCreateComponent"],
        _owner_index__WEBPACK_IMPORTED_MODULE_26__["OwnerComponent"],
        _owner_index__WEBPACK_IMPORTED_MODULE_26__["OwnerDetailComponent"],
        _owner_index__WEBPACK_IMPORTED_MODULE_26__["OwnerCreateComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_28__["PageNotFoundComponent"],
        _couple_couple_component__WEBPACK_IMPORTED_MODULE_30__["CoupleComponent"],
        _couple_couple_create_couple_create_component__WEBPACK_IMPORTED_MODULE_31__["CoupleCreateComponent"],
        _couple_couple_detail_couple_detail_component__WEBPACK_IMPORTED_MODULE_32__["CoupleDetailComponent"],
        _breeder_index__WEBPACK_IMPORTED_MODULE_27__["BreederComponent"],
        _breeder_index__WEBPACK_IMPORTED_MODULE_27__["BreederCreateComponent"],
        _breeder_index__WEBPACK_IMPORTED_MODULE_27__["BreederDetailComponent"],
        _couple_birdegg_create_modal_birdegg_create_modal__WEBPACK_IMPORTED_MODULE_33__["BirdEggCreateModal"],
        _couple_birdegg_update_modal_birdegg_update_modal__WEBPACK_IMPORTED_MODULE_34__["BirdEggUpdateModal"],
        _ui_components_index__WEBPACK_IMPORTED_MODULE_29__["LoaderComponent"],
        _bird_index__WEBPACK_IMPORTED_MODULE_25__["BirdShowCreateModal"],
        _bird_index__WEBPACK_IMPORTED_MODULE_25__["BirdShowUpdateModal"]], imports: [_store_store_module__WEBPACK_IMPORTED_MODULE_35__["AppStoreModule"],
        _store_entities_store_module__WEBPACK_IMPORTED_MODULE_36__["CoreStoreModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__["ToolbarModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8__["SplitButtonModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
        primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_10__["VirtualScrollerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputTextModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__["InputNumberModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_15__["PanelModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__["InputTextareaModule"],
        primeng_organizationchart__WEBPACK_IMPORTED_MODULE_17__["OrganizationChartModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__["CheckboxModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_20__["CalendarModule"],
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_21__["InputMaskModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__["ProgressSpinnerModule"],
        primeng_paginator__WEBPACK_IMPORTED_MODULE_23__["PaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
                    _bird_index__WEBPACK_IMPORTED_MODULE_25__["BirdComponent"],
                    _bird_index__WEBPACK_IMPORTED_MODULE_25__["BirdDetailComponent"],
                    _bird_index__WEBPACK_IMPORTED_MODULE_25__["BirdCreateComponent"],
                    _owner_index__WEBPACK_IMPORTED_MODULE_26__["OwnerComponent"],
                    _owner_index__WEBPACK_IMPORTED_MODULE_26__["OwnerDetailComponent"],
                    _owner_index__WEBPACK_IMPORTED_MODULE_26__["OwnerCreateComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_28__["PageNotFoundComponent"],
                    _couple_couple_component__WEBPACK_IMPORTED_MODULE_30__["CoupleComponent"],
                    _couple_couple_create_couple_create_component__WEBPACK_IMPORTED_MODULE_31__["CoupleCreateComponent"],
                    _couple_couple_detail_couple_detail_component__WEBPACK_IMPORTED_MODULE_32__["CoupleDetailComponent"],
                    _breeder_index__WEBPACK_IMPORTED_MODULE_27__["BreederComponent"],
                    _breeder_index__WEBPACK_IMPORTED_MODULE_27__["BreederCreateComponent"],
                    _breeder_index__WEBPACK_IMPORTED_MODULE_27__["BreederDetailComponent"],
                    _couple_birdegg_create_modal_birdegg_create_modal__WEBPACK_IMPORTED_MODULE_33__["BirdEggCreateModal"],
                    _couple_birdegg_update_modal_birdegg_update_modal__WEBPACK_IMPORTED_MODULE_34__["BirdEggUpdateModal"],
                    _ui_components_index__WEBPACK_IMPORTED_MODULE_29__["LoaderComponent"],
                    _bird_index__WEBPACK_IMPORTED_MODULE_25__["BirdShowCreateModal"],
                    _bird_index__WEBPACK_IMPORTED_MODULE_25__["BirdShowUpdateModal"],
                ],
                imports: [
                    _store_store_module__WEBPACK_IMPORTED_MODULE_35__["AppStoreModule"],
                    _store_entities_store_module__WEBPACK_IMPORTED_MODULE_36__["CoreStoreModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot({
                        maxOpened: 4,
                        preventDuplicates: true,
                        positionClass: 'toast-top-right'
                    }),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__["ToolbarModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8__["SplitButtonModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                    primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_10__["VirtualScrollerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputTextModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__["InputNumberModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
                    primeng_panel__WEBPACK_IMPORTED_MODULE_15__["PanelModule"],
                    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__["InputTextareaModule"],
                    primeng_organizationchart__WEBPACK_IMPORTED_MODULE_17__["OrganizationChartModule"],
                    primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__["CheckboxModule"],
                    primeng_calendar__WEBPACK_IMPORTED_MODULE_20__["CalendarModule"],
                    primeng_inputmask__WEBPACK_IMPORTED_MODULE_21__["InputMaskModule"],
                    primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__["ProgressSpinnerModule"],
                    primeng_paginator__WEBPACK_IMPORTED_MODULE_23__["PaginatorModule"]
                ],
                providers: [_Services_base_service__WEBPACK_IMPORTED_MODULE_37__["BaseService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "apbX":
/*!*******************************************!*\
  !*** ./src/app/Services/owner.service.ts ***!
  \*******************************************/
/*! exports provided: OwnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerService", function() { return OwnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "n/8u");



class OwnerService {
    constructor(baseService) {
        this.baseService = baseService;
    }
    getAllOwners(request) {
        return this.baseService.get(`/owners`, request);
    }
    getOwner(breederId) {
        return this.baseService.get(`/owners/${breederId}`);
    }
    createOwner(request) {
        return this.baseService.post(`/owners`, request);
    }
    updateOwner(request) {
        return this.baseService.put(`/owners/${request.id}`, request);
    }
}
OwnerService.ɵfac = function OwnerService_Factory(t) { return new (t || OwnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"])); };
OwnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OwnerService, factory: OwnerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] }]; }, null); })();


/***/ }),

/***/ "btcf":
/*!******************************************************!*\
  !*** ./src/app/store/entities/owner/owner.facade.ts ***!
  \******************************************************/
/*! exports provided: OwnerFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerFacade", function() { return OwnerFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _owner_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner.actions */ "WGU+");
/* harmony import */ var _owner_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner.selectors */ "FE6G");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");






class OwnerFacade {
    constructor(store, action$) {
        this.store = store;
        this.action$ = action$;
    }
    // Selectors
    getOwners() {
        return this.store.select(_owner_selectors__WEBPACK_IMPORTED_MODULE_3__["selectOwners"]);
    }
    getOwner() {
        return this.store.select(_owner_selectors__WEBPACK_IMPORTED_MODULE_3__["selectOwner"]);
    }
    getPagination() {
        return this.store.select(_owner_selectors__WEBPACK_IMPORTED_MODULE_3__["selectPagination"]);
    }
    getLoading() {
        return this.store.select(_owner_selectors__WEBPACK_IMPORTED_MODULE_3__["selectLoadingAll"]);
    }
    getLoadingDetail() {
        return this.store.select(_owner_selectors__WEBPACK_IMPORTED_MODULE_3__["selectLoadingDetail"]);
    }
    clearDetail() {
        this.store.dispatch(_owner_actions__WEBPACK_IMPORTED_MODULE_2__["clearOwnerDetail"]());
    }
    // Actions
    getAllOwnersRequest(request) {
        this.store.dispatch(_owner_actions__WEBPACK_IMPORTED_MODULE_2__["getOwners"]({ request }));
    }
    getOwnerRequest(ownerId) {
        this.store.dispatch(_owner_actions__WEBPACK_IMPORTED_MODULE_2__["getOwner"]({ ownerId }));
    }
    createOwner(request) {
        this.store.dispatch(_owner_actions__WEBPACK_IMPORTED_MODULE_2__["createOwner"]({ request }));
    }
    updateOwnerRequest(request) {
        this.store.dispatch(_owner_actions__WEBPACK_IMPORTED_MODULE_2__["updateOwner"]({ request }));
    }
    // ActionSubjects
    onCreateOwnerSuccess() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_owner_actions__WEBPACK_IMPORTED_MODULE_2__["createOwnerSuccess"].type));
    }
    onCreateOwnerError() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_owner_actions__WEBPACK_IMPORTED_MODULE_2__["createOwnerError"].type));
    }
    onUpdateOwnerSuccess() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_owner_actions__WEBPACK_IMPORTED_MODULE_2__["updateOwnerSuccess"].type));
    }
    onUpdateOwnerError() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_owner_actions__WEBPACK_IMPORTED_MODULE_2__["updateOwnerError"].type));
    }
}
OwnerFacade.ɵfac = function OwnerFacade_Factory(t) { return new (t || OwnerFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["ActionsSubject"])); };
OwnerFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OwnerFacade, factory: OwnerFacade.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnerFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["ActionsSubject"] }]; }, null); })();


/***/ }),

/***/ "c86f":
/*!**********************************!*\
  !*** ./src/app/breeder/index.ts ***!
  \**********************************/
/*! exports provided: BreederComponent, BreederDetailComponent, BreederCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breeder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breeder.component */ "fmPv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreederComponent", function() { return _breeder_component__WEBPACK_IMPORTED_MODULE_0__["BreederComponent"]; });

/* harmony import */ var _breeder_detail_breeder_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breeder-detail/breeder-detail.component */ "Di4I");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreederDetailComponent", function() { return _breeder_detail_breeder_detail_component__WEBPACK_IMPORTED_MODULE_1__["BreederDetailComponent"]; });

/* harmony import */ var _breeder_create_breeder_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breeder-create/breeder-create.component */ "JavI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreederCreateComponent", function() { return _breeder_create_breeder_create_component__WEBPACK_IMPORTED_MODULE_2__["BreederCreateComponent"]; });






/***/ }),

/***/ "ceQ+":
/*!*****************************************************************!*\
  !*** ./src/app/bird/bird-show-create/bird-show-create.modal.ts ***!
  \*****************************************************************/
/*! exports provided: BirdShowCreateModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdShowCreateModal", function() { return BirdShowCreateModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/entities/bird/bird.facade */ "NLBs");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/components/loader/loader.component */ "nzoQ");














function BirdShowCreateModal_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Locatie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Punten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rangschikking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdShowCreateModal_form_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdShowCreateModal_form_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handleSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.birdShowForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.birdShowForm.valid);
} }
function BirdShowCreateModal_c_loader_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-loader");
} }
class BirdShowCreateModal {
    constructor(ref, config, birdFacade, fb, toastrService) {
        this.ref = ref;
        this.config = config;
        this.birdFacade = birdFacade;
        this.fb = fb;
        this.toastrService = toastrService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loading$ = this.birdFacade.getLoadingModal();
    }
    ngOnInit() {
        this.birdShowForm = this.fb.group({
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            points: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rank: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    handleSubmit() {
        const request = {
            birdId: this.config.data.birdId,
            location: this.birdShowForm.get('location').value,
            points: this.birdShowForm.get('points').value,
            rank: this.birdShowForm.get('rank').value,
        };
        this.birdFacade.createBirdShowRequest(request);
        this.birdFacade.onCreateBirdShowSuccess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).subscribe(() => {
            // add toastr message
            this.toastrService.success('Tentoonstelling aangemaakt!', 'Gelukt', {
                timeOut: 6000,
            });
            this.birdFacade.getBirdRequest(this.config.data.birdId);
            this.ref.close();
        });
        this.birdFacade.onCreateBirdShowError().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).subscribe(() => {
            // add toastr message
            this.toastrService.error('Oeps, er liep iets mis met het aanmaken van deze tentoonstelling!', 'Error', {
                timeOut: 6000,
            });
        });
    }
    goBack() {
        this.ref.close();
    }
}
BirdShowCreateModal.ɵfac = function BirdShowCreateModal_Factory(t) { return new (t || BirdShowCreateModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_5__["BirdFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
BirdShowCreateModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirdShowCreateModal, selectors: [["bird-show-create-modal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])], decls: 5, vars: 6, consts: [[1, "modal-body"], [3, "formGroup", 4, "ngIf"], [4, "ngIf"], [3, "formGroup"], [1, "form-group"], ["for", "location"], ["pInputText", "", "type", "text", "formControlName", "location", "id", "location", 1, "form-control"], ["for", "points"], ["pInputText", "", "type", "text", "formControlName", "points", "id", "points", 1, "form-control"], ["for", "name"], ["pInputText", "", "type", "text", "formControlName", "rank", "id", "rank", 1, "form-control"], [1, "form-footer"], ["pButton", "", "type", "submit", "label", "Terug", 3, "click"], ["pButton", "", "type", "submit", "label", "Opslaan", 3, "disabled", "click"]], template: function BirdShowCreateModal_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BirdShowCreateModal_form_1_Template, 16, 2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BirdShowCreateModal_c_loader_3_Template, 1, 0, "c-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.birdShowForm && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"], _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirdShowCreateModal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bird-show-create-modal',
                templateUrl: './bird-show-create.modal.html',
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]]
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"] }, { type: src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_5__["BirdFacade"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "dzVi":
/*!*********************************************************************!*\
  !*** ./src/app/couple/birdegg-create-modal/birdegg-create-modal.ts ***!
  \*********************************************************************/
/*! exports provided: BirdEggCreateModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdEggCreateModal", function() { return BirdEggCreateModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/entities/couple/couple.facade */ "j9ud");
/* harmony import */ var src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/entities/bird/bird.facade */ "NLBs");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/components/loader/loader.component */ "nzoQ");


















function BirdEggCreateModal_form_1_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/", group_r3.label, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r3.label);
} }
const _c0 = function () { return { "width": "100%" }; };
function BirdEggCreateModal_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Datum gelegd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-calendar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Datum uitgekomen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p-calendar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Datum uitgevlogen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p-calendar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ringnummer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Kleur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BirdEggCreateModal_form_1_ng_template_21_Template, 4, 2, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Geslacht");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "p-dropdown", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdEggCreateModal_form_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdEggCreateModal_form_1_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.handleSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.birdEggForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.groupedColors)("showClear", true)("filter", true)("group", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.genderOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.birdEggForm.valid);
} }
function BirdEggCreateModal_c_loader_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-loader");
} }
class BirdEggCreateModal {
    constructor(ref, config, coupleFacade, birdFacade, fb, toastrService) {
        this.ref = ref;
        this.config = config;
        this.coupleFacade = coupleFacade;
        this.birdFacade = birdFacade;
        this.fb = fb;
        this.toastrService = toastrService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loading$ = this.coupleFacade.getLoadingModal();
        this.groupedColors = [];
        this.genderOptions = [];
    }
    ngOnInit() {
        this.birdEggForm = this.fb.group({
            layedOn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cameOutOn: [null],
            flyOutOn: [null],
            ringNumber: [null],
            color: [null],
            gender: [null],
        });
        this.groupedColors = this.birdFacade.createBirdTypeColors();
        this.createGenderOptions();
    }
    handleSubmit() {
        var _a, _b, _c, _d, _e;
        const request = {
            id: null,
            layedOn: this.birdEggForm.get('layedOn').value,
            coupleId: this.config.data.coupleId,
            cameOutOn: (_a = this.birdEggForm.get('cameOutOn').value) !== null && _a !== void 0 ? _a : null,
            flyOutOn: (_b = this.birdEggForm.get('flyOutOn').value) !== null && _b !== void 0 ? _b : null,
            ringNumber: (_c = this.birdEggForm.get('ringNumber').value) !== null && _c !== void 0 ? _c : null,
            color: (_d = this.birdEggForm.get('color').value) !== null && _d !== void 0 ? _d : null,
            gender: (_e = this.birdEggForm.get('gender').value) !== null && _e !== void 0 ? _e : null,
        };
        this.coupleFacade.createBirdEgg(request);
        this.coupleFacade.onCreateBirdEggSuccess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).subscribe(() => {
            // add toastr message
            this.toastrService.success('Ei aangemaakt!', 'Gelukt', {
                timeOut: 6000,
            });
            this.coupleFacade.getCoupleRequest(this.config.data.coupleId);
            this.ref.close();
        });
        this.coupleFacade.onCreateBirdEggError().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).subscribe(() => {
            // add toastr message
            this.toastrService.error('Oeps, er liep iets mis met het aanmaken van dit ei!', 'Error', {
                timeOut: 6000,
            });
        });
    }
    goBack() {
        this.ref.close();
    }
    createGenderOptions() {
        this.genderOptions = [
            { type: 'Pop', value: 'FEMALE' },
            { type: 'Man', value: 'MALE' }
        ];
    }
}
BirdEggCreateModal.ɵfac = function BirdEggCreateModal_Factory(t) { return new (t || BirdEggCreateModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_5__["CoupleFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_6__["BirdFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
BirdEggCreateModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirdEggCreateModal, selectors: [["birdegg-create-modal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])], decls: 5, vars: 6, consts: [[1, "modal-body"], [3, "formGroup", 4, "ngIf"], [4, "ngIf"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["formControlName", "layedOn", "dateFormat", "dd-mm-yy", "inputId", "dateformat"], ["formControlName", "cameOutOn", "dateFormat", "dd-mm-yy", "inputId", "dateformat"], ["formControlName", "flyOutOn", "dateFormat", "dd-mm-yy", "inputId", "dateformat"], ["for", "ringNumber"], ["pInputText", "", "type", "text", "formControlName", "ringNumber", "id", "ringNumber", 1, "form-control"], ["for", "color"], ["autoWidth", "false", "formControlName", "color", "optionLabel", "label", "optionValue", "value", "filterBy", "label", "placeholder", "Selecteer een kleur...", 3, "options", "showClear", "filter", "group"], ["pTemplate", "group"], ["for", "gender"], ["autoWidth", "false", "placeholder", "Selecteer een geslacht...", "optionLabel", "type", "optionValue", "value", "formControlName", "gender", 3, "options"], [1, "form-footer"], ["pButton", "", "type", "submit", "label", "Terug", 3, "click"], ["pButton", "", "type", "submit", "label", "Opslaan", 3, "disabled", "click"], [1, "p-d-flex", "p-ai-center"], [1, "p-mr-2", 2, "width", "32px", 3, "src"]], template: function BirdEggCreateModal_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BirdEggCreateModal_form_1_Template, 29, 13, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BirdEggCreateModal_c_loader_3_Template, 1, 0, "c-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.birdEggForm && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["Calendar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["Dropdown"], primeng_api__WEBPACK_IMPORTED_MODULE_12__["PrimeTemplate"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonDirective"], _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirdEggCreateModal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'birdegg-create-modal',
                templateUrl: './birdegg-create-modal.html',
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]]
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"] }, { type: src_app_store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_5__["CoupleFacade"] }, { type: src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_6__["BirdFacade"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "eUpS":
/*!***********************************************************!*\
  !*** ./src/app/bird/bird-create/bird-create.component.ts ***!
  \***********************************************************/
/*! exports provided: BirdCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdCreateComponent", function() { return BirdCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/entities/bird/bird.facade */ "NLBs");
/* harmony import */ var src_app_store_entities_breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/entities/breeder/breeder.facade */ "Xutl");
/* harmony import */ var src_app_store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/entities/owner/owner.facade */ "btcf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ "jIHw");



















function BirdCreateComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/", group_r3.label, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r3.label);
} }
const _c0 = function () { return { "width": "100%" }; };
function BirdCreateComponent_p_dropdown_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-dropdown", 35);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.breeders)("showClear", true)("filter", true);
} }
function BirdCreateComponent_p_dropdown_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-dropdown", 36);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r2.owners)("showClear", true)("filter", true);
} }
const _c1 = function () { return { "width": "50px" }; };
class BirdCreateComponent {
    constructor(fb, birdFacade, breederFacade, ownerFacade, router, route, toastrService) {
        this.fb = fb;
        this.birdFacade = birdFacade;
        this.breederFacade = breederFacade;
        this.ownerFacade = ownerFacade;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
        this.genderOptions = [];
        this.typeOfBirdOptions = [];
        this.groupedColors = [];
        this.breeders = [];
        this.owners = [];
        // Observables
        this.breeders$ = this.breederFacade.getBreeders();
        this.owners$ = this.ownerFacade.getOwners();
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        // set form
        this.createDefaultForm();
        // generate enums
        this.createGenderOptions();
        this.typeOfBirdOptions = this.birdFacade.createBirdTypeOptions();
        this.groupedColors = this.birdFacade.createBirdTypeColors();
        // get breeders and owners
        this.getAllBreeders();
        this.getAllOwners();
        // handle success and errors
        this.handleSuccesses();
        this.handleErrors();
    }
    onSubmit() {
        const request = {
            ringNumber: this.birdForm.get('ringNumber').value,
            gender: this.birdForm.get('gender').value,
            birdType: this.birdForm.get('birdType').value,
            birthDate: this.birdForm.get('birthDate').value,
            color: this.birdForm.get('color').value,
            cageNumber: this.birdForm.get('cageNumber').value,
            breederId: this.birdForm.get('breederId').value,
            ownerId: this.birdForm.get('ownerId').value,
            description: this.birdForm.get('description').value,
            isDead: this.birdForm.get('isDead').value
        };
        this.birdFacade.createBird(request);
    }
    goBack() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    createDefaultForm() {
        this.birdForm = this.fb.group({
            ringNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            birdType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            birthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cageNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            breederId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ownerId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
            isDead: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    createGenderOptions() {
        this.genderOptions = [
            { type: 'Pop', value: 'FEMALE' },
            { type: 'Man', value: 'MALE' }
        ];
    }
    getAllBreeders() {
        this.breeders$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe((breeders) => {
            // fetch breeders if null or undefined
            if (breeders === null || breeders === undefined) {
                const request = {
                    page: 1,
                    pageSize: 100,
                };
                this.breederFacade.getAllBreedersRequest(request);
            }
            if (breeders !== null && breeders !== undefined) {
                breeders.forEach((breeder) => {
                    const fullname = breeder.firstName + " " + breeder.lastName;
                    this.breeders.push({ name: fullname, value: breeder.id });
                });
            }
        });
    }
    getAllOwners() {
        this.owners$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe((owners) => {
            // fetch owners if null or undefined
            if (owners === null || owners === undefined) {
                const request = {
                    page: 1,
                    pageSize: 10,
                };
                this.ownerFacade.getAllOwnersRequest(request);
            }
            if (owners !== null && owners !== undefined) {
                owners.forEach((owner) => {
                    const fullname = owner.firstName + " " + owner.lastName;
                    this.owners.push({ name: fullname, value: owner.id });
                });
            }
        });
    }
    handleSuccesses() {
        this.birdFacade.onCreateBirdSuccess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.success('Vogel aangemaakt!', 'Gelukt', {
                timeOut: 6000,
            });
            const request = {
                page: 1,
                pageSize: 10,
                searchValue: '',
                gender: 'ALL',
                typeOfBird: '0',
                year: 'ALL'
            };
            this.birdFacade.getAllBirdsRequest(request);
            this.goBack();
        });
    }
    handleErrors() {
        this.birdFacade.onCreateBirdError().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.error('Oeps, er liep iets mis tijdens het aanmaken van deze vogel!', 'Error', {
                timeOut: 6000,
            });
        });
    }
}
BirdCreateComponent.ɵfac = function BirdCreateComponent_Factory(t) { return new (t || BirdCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_4__["BirdFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_5__["BreederFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_6__["OwnerFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
BirdCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirdCreateComponent, selectors: [["c-bird-create"]], decls: 61, vars: 31, consts: [[1, "page"], [1, "page-wrapper"], [1, "page-header"], [1, "page-body"], [3, "formGroup"], [1, "form-group-wrapper"], [1, "form-group"], ["for", "ringNumber"], ["pInputText", "", "type", "text", "formControlName", "ringNumber", "id", "ringNumber", "placeholder", "XX123456789XX", 1, "form-control"], ["for", "gender"], ["autoWidth", "false", "placeholder", "Selecteer een geslacht...", "optionLabel", "type", "optionValue", "value", "formControlName", "gender", 3, "options"], ["for", "birdType"], ["autoWidth", "false", "placeholder", "Selecteer een type...", "optionLabel", "type", "optionValue", "value", "formControlName", "birdType", 3, "options"], ["for", "birthDate"], ["formControlName", "birthDate", "dateFormat", "dd-mm-yy", "inputId", "dateformat"], ["for", "color"], ["autoWidth", "false", "formControlName", "color", "optionLabel", "label", "optionValue", "value", "filterBy", "label", "placeholder", "Selecteer een kleur...", 3, "options", "showClear", "filter", "group"], ["pTemplate", "group"], ["for", "cageNumber"], ["pInputText", "", "type", "text", "formControlName", "cageNumber", "id", "cageNumber", "placeholder", "A1", 1, "form-control"], ["for", "breederId"], ["autoWidth", "false", "optionLabel", "name", "optionValue", "value", "formControlName", "breederId", "placeholder", "Selecteer een kweker...", "filterBy", "name", 3, "style", "options", "showClear", "filter", 4, "ngIf"], ["for", "ownerId"], ["autoWidth", "false", "optionLabel", "name", "optionValue", "value", "formControlName", "ownerId", "placeholder", "Selecteer een eigenaar...", "filterBy", "name", 3, "style", "options", "showClear", "filter", 4, "ngIf"], ["for", "description"], ["pInputTextarea", "", "type", "text", "formControlName", "description", "id", "description", "autoResize", "autoResize", 1, "form-control", 3, "rows", "cols"], [1, "form-group", "p-jc-center"], [1, "p-d-flex", "p-mt-2"], ["for", "isDead", 1, "p-mr-2"], ["formControlName", "isDead", "binary", "true"], [1, "form-footer"], ["pButton", "", "type", "button", "label", "Terug", 1, "p-button-outlined", 3, "click"], ["pButton", "", "type", "submit", "label", "Opslaan", 3, "disabled", "click"], [1, "p-d-flex", "p-ai-center"], [1, "p-mr-2", 2, "width", "32px", 3, "src"], ["autoWidth", "false", "optionLabel", "name", "optionValue", "value", "formControlName", "breederId", "placeholder", "Selecteer een kweker...", "filterBy", "name", 3, "options", "showClear", "filter"], ["autoWidth", "false", "optionLabel", "name", "optionValue", "value", "formControlName", "ownerId", "placeholder", "Selecteer een eigenaar...", "filterBy", "name", 3, "options", "showClear", "filter"]], template: function BirdCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bird management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vogel aanmaken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ringnummer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Geslacht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "p-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Jaartal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p-calendar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Kleur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, BirdCreateComponent_ng_template_32_Template, 4, 2, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Kotnummer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Kweker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, BirdCreateComponent_p_dropdown_41_Template, 1, 6, "p-dropdown", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Eigenaar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, BirdCreateComponent_p_dropdown_46_Template, 1, 6, "p-dropdown", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Omschrijving");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Dood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "p-checkbox", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdCreateComponent_Template_button_click_59_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirdCreateComponent_Template_button_click_60_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.birdForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.genderOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.typeOfBirdOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.groupedColors)("showClear", true)("filter", true)("group", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 22, ctx.breeders$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 24, ctx.owners$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", 3)("cols", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.birdForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], primeng_calendar__WEBPACK_IMPORTED_MODULE_11__["Calendar"], primeng_api__WEBPACK_IMPORTED_MODULE_12__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__["InputTextarea"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__["Checkbox"], primeng_button__WEBPACK_IMPORTED_MODULE_16__["ButtonDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --primary-color: #e94e0f;\n  --primary-light-color: #f2642c;\n  --primary-background-color: #fef6f3;\n  --accent-color: #870b58;\n  --accent-dark-color: #5e083d;\n  --accent-light-color: #fbd0eb;\n  --yellow-brand-color: #f8ad07;\n  --accent-20-color: #e1c2d5;\n  --info-color: #415fca;\n  --info-light-color: hsl(227, 56%, 52%, 0.1);\n  --success-color: #21bc5f;\n  --success-light-color: hsla(144, 70%, 43%, 0.1);\n  --warning-color: #ffc700;\n  --warning-light-color: #FDEAC1;\n  --danger-color: #ff005c;\n  --danger-light-color: hsla(338, 100%, 50%, 0.8);\n  --danger-lighter-color: hsla(338, 100%, 90%, 0.8);\n  --brand-red-color: #E4003A;\n  --brand-red-20-color: #F8BFCD;\n  --brand-orange-color: #E94E0F;\n  --brand-orange-20-color: #F9D2C3;\n  --brand-yellow-color: #F8AD07;\n  --brand-yellow-20-color: #FDEAC1;\n  --brand-purple-color: #870B58;\n  --brand-purple-20-color: #E1C2D5;\n  --tuna-gray-color: #303642;\n  --tuna-gray-80-color: #555d71;\n  --tuna-gray-60-color: #7f8594;\n  --tuna-gray-40-color: #aaaeb8;\n  --tuna-gray-20-color: #f6f6f6;\n  --slate-gray-color: #7783a0;\n  --slate-gray-80-color: #929bb3;\n  --slate-gray-60-color: #adb4c6;\n  --slate-gray-40-color: #c8cdd9;\n  --slate-gray-20-color: #e3e6ec;\n  --slate-gray-10-color: #f1f3f5;\n  --slate-gray-5-color: #f8fafc;\n  --white-color: #ffffff;\n  --black-color: #000000;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 71px);\n  overflow: auto;\n  background-color: var(--slate-gray-5-color);\n  background-image: url('background.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  width: 70vw;\n  margin: 0 auto;\n  background-color: rgba(255, 255, 255, 0.6);\n  margin-top: 32px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--slate-gray-20-color);\n  background-color: var(--tuna-gray-20-color);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.page-body[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n}\n\n.page-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  width: calc(50% - 8px);\n}\n\n.form-group-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.form-group-wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:last-child {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR0aW5nc1xcX2NvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGJpcmQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUMsd0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFHQSwwQkFBQTtFQUdBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSx3QkFBQTtFQUNBLCtDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSxpREFBQTtFQUdBLDBCQUFBO0VBQ0EsNkJBQUE7RUFFQSw2QkFBQTtFQUNBLGdDQUFBO0VBRUEsNkJBQUE7RUFDQSxnQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFHQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRUEsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFFQSxzQkFBQTtFQUNBLHNCQUFBO0FDakJEOztBQXRDQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQXlDSjs7QUF0Q0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUF5Q0o7O0FBdENBO0VBQ0ksbURBQUE7RUFDQSwyQ0FBQTtBQXlDSjs7QUF2Q0k7RUFDSSxhQUFBO0FBeUNSOztBQXJDQTtFQUNJLGtCQUFBO0FBd0NKOztBQXRDSTtFQUNJLG9CQUFBO0FBd0NSOztBQXBDQTtFQUNJLHNCQUFBO0FBdUNKOztBQXBDQTtFQUNJLGFBQUE7QUF1Q0o7O0FBckNJO0VBQ0ksaUJBQUE7QUF1Q1IiLCJmaWxlIjoiYmlyZC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdHlsZWxpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb2xvcnNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOnJvb3Qge1xyXG5cdC8vIEJyYW5kIGlkZW50aXR5IGNvbG9yc1xyXG5cdC0tcHJpbWFyeS1jb2xvcjogI2U5NGUwZjtcclxuXHQtLXByaW1hcnktbGlnaHQtY29sb3I6ICNmMjY0MmM7XHJcblx0LS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZWY2ZjM7XHJcblx0LS1hY2NlbnQtY29sb3I6ICM4NzBiNTg7XHJcblx0LS1hY2NlbnQtZGFyay1jb2xvcjogIzVlMDgzZDtcclxuXHQtLWFjY2VudC1saWdodC1jb2xvcjogI2ZiZDBlYjtcclxuXHQtLXllbGxvdy1icmFuZC1jb2xvcjogI2Y4YWQwNztcclxuXHJcblx0Ly8gQ29tcGxlbWVudGFyeSBjb2xvcnNcclxuXHQtLWFjY2VudC0yMC1jb2xvcjogI2UxYzJkNTtcclxuXHJcblx0Ly8gU3RhdGVzXHJcblx0LS1pbmZvLWNvbG9yOiAjNDE1ZmNhO1xyXG5cdC0taW5mby1saWdodC1jb2xvcjogaHNsKDIyNywgNTYlLCA1MiUsIDAuMSk7XHJcblx0LS1zdWNjZXNzLWNvbG9yOiAjMjFiYzVmO1xyXG5cdC0tc3VjY2Vzcy1saWdodC1jb2xvcjogaHNsYSgxNDQsIDcwJSwgNDMlLCAwLjEpO1xyXG5cdC0td2FybmluZy1jb2xvcjogI2ZmYzcwMDtcclxuXHQtLXdhcm5pbmctbGlnaHQtY29sb3I6ICNGREVBQzE7XHJcblx0LS1kYW5nZXItY29sb3I6ICNmZjAwNWM7XHJcblx0LS1kYW5nZXItbGlnaHQtY29sb3I6IGhzbGEoMzM4LCAxMDAlLCA1MCUsIDAuOCk7XHJcblx0LS1kYW5nZXItbGlnaHRlci1jb2xvcjogaHNsYSgzMzgsIDEwMCUsIDkwJSwgMC44KTtcclxuXHJcblx0Ly8gRXh0cmEgY29sb3JzXHJcblx0LS1icmFuZC1yZWQtY29sb3I6ICNFNDAwM0E7XHJcblx0LS1icmFuZC1yZWQtMjAtY29sb3I6ICNGOEJGQ0Q7XHJcblxyXG5cdC0tYnJhbmQtb3JhbmdlLWNvbG9yOiAjRTk0RTBGO1xyXG5cdC0tYnJhbmQtb3JhbmdlLTIwLWNvbG9yOiAjRjlEMkMzO1xyXG5cclxuXHQtLWJyYW5kLXllbGxvdy1jb2xvcjogI0Y4QUQwNztcclxuXHQtLWJyYW5kLXllbGxvdy0yMC1jb2xvcjogI0ZERUFDMTtcclxuXHJcblx0LS1icmFuZC1wdXJwbGUtY29sb3I6ICM4NzBCNTg7XHJcblx0LS1icmFuZC1wdXJwbGUtMjAtY29sb3I6ICNFMUMyRDU7XHJcblxyXG5cdC8vIEdyYXlzY2FsZVxyXG5cdC0tdHVuYS1ncmF5LWNvbG9yOiAjMzAzNjQyO1xyXG5cdC0tdHVuYS1ncmF5LTgwLWNvbG9yOiAjNTU1ZDcxO1xyXG5cdC0tdHVuYS1ncmF5LTYwLWNvbG9yOiAjN2Y4NTk0O1xyXG5cdC0tdHVuYS1ncmF5LTQwLWNvbG9yOiAjYWFhZWI4O1xyXG5cdC0tdHVuYS1ncmF5LTIwLWNvbG9yOiAjZjZmNmY2O1xyXG5cclxuXHQtLXNsYXRlLWdyYXktY29sb3I6ICM3NzgzYTA7XHJcblx0LS1zbGF0ZS1ncmF5LTgwLWNvbG9yOiAjOTI5YmIzO1xyXG5cdC0tc2xhdGUtZ3JheS02MC1jb2xvcjogI2FkYjRjNjtcclxuXHQtLXNsYXRlLWdyYXktNDAtY29sb3I6ICNjOGNkZDk7XHJcblx0LS1zbGF0ZS1ncmF5LTIwLWNvbG9yOiAjZTNlNmVjO1xyXG5cdC0tc2xhdGUtZ3JheS0xMC1jb2xvcjogI2YxZjNmNTtcclxuXHQtLXNsYXRlLWdyYXktNS1jb2xvcjogI2Y4ZmFmYztcclxuXHJcblx0LS13aGl0ZS1jb2xvcjogI2ZmZmZmZjtcclxuXHQtLWJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbiIsIjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZTk0ZTBmO1xuICAtLXByaW1hcnktbGlnaHQtY29sb3I6ICNmMjY0MmM7XG4gIC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmNmYzO1xuICAtLWFjY2VudC1jb2xvcjogIzg3MGI1ODtcbiAgLS1hY2NlbnQtZGFyay1jb2xvcjogIzVlMDgzZDtcbiAgLS1hY2NlbnQtbGlnaHQtY29sb3I6ICNmYmQwZWI7XG4gIC0teWVsbG93LWJyYW5kLWNvbG9yOiAjZjhhZDA3O1xuICAtLWFjY2VudC0yMC1jb2xvcjogI2UxYzJkNTtcbiAgLS1pbmZvLWNvbG9yOiAjNDE1ZmNhO1xuICAtLWluZm8tbGlnaHQtY29sb3I6IGhzbCgyMjcsIDU2JSwgNTIlLCAwLjEpO1xuICAtLXN1Y2Nlc3MtY29sb3I6ICMyMWJjNWY7XG4gIC0tc3VjY2Vzcy1saWdodC1jb2xvcjogaHNsYSgxNDQsIDcwJSwgNDMlLCAwLjEpO1xuICAtLXdhcm5pbmctY29sb3I6ICNmZmM3MDA7XG4gIC0td2FybmluZy1saWdodC1jb2xvcjogI0ZERUFDMTtcbiAgLS1kYW5nZXItY29sb3I6ICNmZjAwNWM7XG4gIC0tZGFuZ2VyLWxpZ2h0LWNvbG9yOiBoc2xhKDMzOCwgMTAwJSwgNTAlLCAwLjgpO1xuICAtLWRhbmdlci1saWdodGVyLWNvbG9yOiBoc2xhKDMzOCwgMTAwJSwgOTAlLCAwLjgpO1xuICAtLWJyYW5kLXJlZC1jb2xvcjogI0U0MDAzQTtcbiAgLS1icmFuZC1yZWQtMjAtY29sb3I6ICNGOEJGQ0Q7XG4gIC0tYnJhbmQtb3JhbmdlLWNvbG9yOiAjRTk0RTBGO1xuICAtLWJyYW5kLW9yYW5nZS0yMC1jb2xvcjogI0Y5RDJDMztcbiAgLS1icmFuZC15ZWxsb3ctY29sb3I6ICNGOEFEMDc7XG4gIC0tYnJhbmQteWVsbG93LTIwLWNvbG9yOiAjRkRFQUMxO1xuICAtLWJyYW5kLXB1cnBsZS1jb2xvcjogIzg3MEI1ODtcbiAgLS1icmFuZC1wdXJwbGUtMjAtY29sb3I6ICNFMUMyRDU7XG4gIC0tdHVuYS1ncmF5LWNvbG9yOiAjMzAzNjQyO1xuICAtLXR1bmEtZ3JheS04MC1jb2xvcjogIzU1NWQ3MTtcbiAgLS10dW5hLWdyYXktNjAtY29sb3I6ICM3Zjg1OTQ7XG4gIC0tdHVuYS1ncmF5LTQwLWNvbG9yOiAjYWFhZWI4O1xuICAtLXR1bmEtZ3JheS0yMC1jb2xvcjogI2Y2ZjZmNjtcbiAgLS1zbGF0ZS1ncmF5LWNvbG9yOiAjNzc4M2EwO1xuICAtLXNsYXRlLWdyYXktODAtY29sb3I6ICM5MjliYjM7XG4gIC0tc2xhdGUtZ3JheS02MC1jb2xvcjogI2FkYjRjNjtcbiAgLS1zbGF0ZS1ncmF5LTQwLWNvbG9yOiAjYzhjZGQ5O1xuICAtLXNsYXRlLWdyYXktMjAtY29sb3I6ICNlM2U2ZWM7XG4gIC0tc2xhdGUtZ3JheS0xMC1jb2xvcjogI2YxZjNmNTtcbiAgLS1zbGF0ZS1ncmF5LTUtY29sb3I6ICNmOGZhZmM7XG4gIC0td2hpdGUtY29sb3I6ICNmZmZmZmY7XG4gIC0tYmxhY2stY29sb3I6ICMwMDAwMDA7XG59XG5cbi5wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcxcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUtZ3JheS01LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGFnZS13cmFwcGVyIHtcbiAgd2lkdGg6IDcwdnc7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zbGF0ZS1ncmF5LTIwLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuYS1ncmF5LTIwLWNvbG9yKTtcbn1cbi5wYWdlLWhlYWRlciBoMSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5wYWdlLWJvZHkge1xuICBwYWRkaW5nOiAzMnB4IDE2cHg7XG59XG4ucGFnZS1ib2R5IGgyIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gOHB4KTtcbn1cblxuLmZvcm0tZ3JvdXAtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZm9ybS1ncm91cC13cmFwcGVyIC5mb3JtLWdyb3VwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirdCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-bird-create',
                templateUrl: './bird-create.component.html',
                styleUrls: ['./bird-create.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_4__["BirdFacade"] }, { type: src_app_store_entities_breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_5__["BreederFacade"] }, { type: src_app_store_entities_owner_owner_facade__WEBPACK_IMPORTED_MODULE_6__["OwnerFacade"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "fmPv":
/*!**********************************************!*\
  !*** ./src/app/breeder/breeder.component.ts ***!
  \**********************************************/
/*! exports provided: BreederComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreederComponent", function() { return BreederComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_entities_breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/entities/breeder/breeder.facade */ "Xutl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/paginator */ "6t4m");
/* harmony import */ var _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/components/loader/loader.component */ "nzoQ");














function BreederComponent_p_table_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BreederComponent_p_table_1_ng_template_2_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onSearch($event.target.value); })("ngModelChange", function BreederComponent_p_table_1_ng_template_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.search = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.search);
} }
function BreederComponent_p_table_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Voornaam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Naam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Telefoon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BreederComponent_p_table_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breeder_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breeder_r11.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breeder_r11.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breeder_r11.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breeder_r11.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/breeders/detail/", breeder_r11.id, "");
} }
const _c0 = function () { return { "width": "99vw" }; };
const _c1 = function () { return [5, 10, 20, 30]; };
function BreederComponent_p_table_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-paginator", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function BreederComponent_p_table_1_ng_template_5_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.paginate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r6.pagination.pageSize)("first", ctx_r6.first)("totalRecords", ctx_r6.pagination.totalAmount)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
} }
function BreederComponent_p_table_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Geen kwekers gevonden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BreederComponent_p_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreederComponent_p_table_1_ng_template_2_Template, 4, 1, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BreederComponent_p_table_1_ng_template_3_Template, 16, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BreederComponent_p_table_1_ng_template_4_Template, 15, 5, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BreederComponent_p_table_1_ng_template_5_Template, 2, 8, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BreederComponent_p_table_1_ng_template_6_Template, 3, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.breeders);
} }
function BreederComponent_c_loader_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-loader");
} }
class BreederComponent {
    constructor(breederFacade, router, route) {
        this.breederFacade = breederFacade;
        this.router = router;
        this.route = route;
        // Observables
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.breeders$ = this.breederFacade.getBreeders();
        this.pagination$ = this.breederFacade.getPagination();
        this.loading$ = this.breederFacade.getLoading();
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.search = '';
        this.page = 1;
        this.pageSize = 10;
        this.first = (this.page - 1) * this.pageSize;
    }
    ngOnInit() {
        // Subscribe to changes in the query parameters
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((params) => {
            let request = {
                page: this.page,
                pageSize: this.pageSize,
                searchValue: ''
            };
            if (params.search) {
                // Assign the 'search' parameter to the search field
                const search = params.search.toLowerCase();
                this.search = search;
                this.page = 1;
                request = {
                    page: this.page,
                    pageSize: this.pageSize,
                    searchValue: search
                };
            }
            this.CalculateFirst();
            this.GetAllBreeders(request);
        });
        // get all breeders
        this.breeders$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((breeders) => {
            if (breeders !== null) {
                this.breeders = breeders;
            }
        });
        this.pagination$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((pagination) => {
            this.pagination = pagination;
            this.CalculateFirst();
        });
        this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).subscribe((searchValue) => {
            if (searchValue !== null && searchValue !== undefined) {
                const search = searchValue.toLowerCase();
                // Update the query parameter in the URL
                this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams: { search: search },
                    queryParamsHandling: 'merge',
                });
            }
        });
    }
    onSearch(searchTerm) {
        this.search$.next(searchTerm);
    }
    paginate(event) {
        this.page = event.page + 1;
        this.pageSize = event.rows;
        this.CalculateFirst();
        const request = {
            page: this.page,
            pageSize: this.pageSize,
            searchValue: this.search
        };
        this.GetAllBreeders(request);
    }
    DeleteBreeder(id) {
        console.log("deleting breeder with id", id);
    }
    CalculateFirst() {
        this.first = (this.page - 1) * this.pageSize;
    }
    GetAllBreeders(request) {
        this.breederFacade.getAllBreedersRequest(request);
    }
}
BreederComponent.ɵfac = function BreederComponent_Factory(t) { return new (t || BreederComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_entities_breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_3__["BreederFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
BreederComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreederComponent, selectors: [["c-breeder-overview"]], decls: 6, vars: 6, consts: [[1, "c-breeder-overview"], ["dataKey", "id", "styleClass", "p-datatable-customers p-datatable-gridlines", 3, "value", 4, "ngIf"], [1, "p-mt-4"], [4, "ngIf"], ["dataKey", "id", "styleClass", "p-datatable-customers p-datatable-gridlines", 3, "value"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], ["pTemplate", "emptymessage"], [1, "p-d-flex"], [1, "p-input-icon-left", 2, "margin-left", "20px"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Zoek Kweker", 3, "ngModel", "keyup", "ngModelChange"], [1, "p-d-flex", "p-jc-between", "p-ai-center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Bewerk", 1, "p-button-raised", 2, "margin-left", "10px", 3, "routerLink"], ["currentPageReportTemplate", "{first} van de {totalRecords} resultaten", "showCurrentPageReport", "true", 1, "p-d-flex", "p-jc-center", 3, "rows", "first", "totalRecords", "rowsPerPageOptions", "onPageChange"], ["colspan", "7"]], template: function BreederComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreederComponent_p_table_1_Template, 7, 1, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BreederComponent_c_loader_4_Template, 1, 0, "c-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.loading$) && ctx.breeders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], primeng_paginator__WEBPACK_IMPORTED_MODULE_11__["Paginator"], _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%]    tr:nth-child(even) {\n  background-color: #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJyZWVkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx5QkFBQTtBQUFSIiwiZmlsZSI6ImJyZWVkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xyXG4gICAgJnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreederComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-breeder-overview',
                templateUrl: './breeder.component.html',
                styleUrls: ['./breeder.component.scss']
            }]
    }], function () { return [{ type: _store_entities_breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_3__["BreederFacade"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "iAIc":
/*!*****************************************************************!*\
  !*** ./src/app/couple/couple-detail/couple-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: CoupleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupleDetailComponent", function() { return CoupleDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _birdegg_create_modal_birdegg_create_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../birdegg-create-modal/birdegg-create-modal */ "dzVi");
/* harmony import */ var _birdegg_update_modal_birdegg_update_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../birdegg-update-modal/birdegg-update-modal */ "QPzd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/entities/couple/couple.facade */ "j9ud");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/components/loader/loader.component */ "nzoQ");



















function CoupleDetailComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Koppel bewerken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Koppel naam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gestart op");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Kotnummer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Vader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Moeder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Omschrijving");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoupleDetailComponent_form_6_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoupleDetailComponent_form_6_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.coupleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.coupleForm.valid);
} }
function CoupleDetailComponent_div_8_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoupleDetailComponent_div_8_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.openModal(ctx_r11.couple.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoupleDetailComponent_div_8_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Datum gelegd ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Datum uitgekomen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Ringnummer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Datum uitgevlogen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Kleur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Geslacht ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Opties ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoupleDetailComponent_div_8_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoupleDetailComponent_div_8_ng_template_5_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const egg_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.openUpdateModal(egg_r13.id, ctx_r14.couple.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const egg_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 7, egg_r13.layedOn, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 10, egg_r13.cameOutOn, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](egg_r13.ringNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 13, egg_r13.flyOutOn, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](egg_r13.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](egg_r13.gender === "FEMALE" ? "POP" : egg_r13.gender === "MALE" ? "MAN" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", egg_r13.birdId);
} }
function CoupleDetailComponent_div_8_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Geen ei gevonden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoupleDetailComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CoupleDetailComponent_div_8_ng_template_3_Template, 2, 0, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CoupleDetailComponent_div_8_ng_template_4_Template, 22, 0, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CoupleDetailComponent_div_8_ng_template_5_Template, 24, 16, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CoupleDetailComponent_div_8_ng_template_6_Template, 3, 0, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.couple == null ? null : ctx_r1.couple.birdEggs)("rows", 10)("showCurrentPageReport", true)("paginator", true);
} }
function CoupleDetailComponent_c_loader_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-loader");
} }
class CoupleDetailComponent {
    constructor(route, router, fb, coupleFacade, toastrService, dialogService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.coupleFacade = coupleFacade;
        this.toastrService = toastrService;
        this.dialogService = dialogService;
        // Observables
        this.couple$ = this.coupleFacade.getCouple();
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loading$ = this.coupleFacade.getLoadingDetail();
    }
    ngOnInit() {
        var _a;
        this.coupleId = (_a = this.route.snapshot.params) === null || _a === void 0 ? void 0 : _a.id;
        this.coupleFacade.getCoupleRequest(parseInt(this.coupleId));
        this.couple$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(10)).subscribe((couple) => {
            if (couple !== null && couple !== undefined) {
                // set local variable
                this.couple = couple;
                // fill in the form
                this.coupleForm = this.fb.group({
                    name: [{ value: couple.name, disabled: true }],
                    startedAt: [{ value: null, disabled: true }],
                    father: [{ value: couple.fatherRingNumber, disabled: true }],
                    mother: [{ value: couple.motherRingNumber, disabled: true }],
                    cageNumber: [{ value: couple.cageNumber, disabled: true }],
                    description: [couple.description]
                });
                this.coupleForm.get('startedAt').setValue(new Date(couple.startedAt).toISOString().split('T')[0]);
            }
        });
        // handle success and errors
        this.handleSuccesses();
        this.handleErrors();
    }
    onSubmit() {
        const request = {
            coupleId: parseInt(this.coupleId),
            description: this.coupleForm.get('description').value,
        };
        this.coupleFacade.updateCoupleRequest(request);
    }
    goBack() {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
    handleSuccesses() {
        this.coupleFacade.onUpdateCoupleSuccess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.success('Koppel gegevens aangepast!', 'Gelukt', {
                timeOut: 6000,
            });
            const request = {
                page: 1,
                pageSize: 10,
            };
            this.coupleFacade.getAllCouplesRequest(request);
            this.coupleFacade.clearDetail();
            this.goBack();
        });
    }
    handleErrors() {
        this.coupleFacade.onUpdateCoupleError().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.error('Oeps, er liep iets mis tijdens het aanpassen van dit koppel!', 'Error', {
                timeOut: 6000,
            });
        });
    }
    openModal(coupleId) {
        // open modal and pass id
        const ref = this.dialogService.open(_birdegg_create_modal_birdegg_create_modal__WEBPACK_IMPORTED_MODULE_4__["BirdEggCreateModal"], {
            header: 'Ei toevoegen',
            width: 'auto',
            height: 'auto',
            contentStyle: { overflow: 'visible' },
            data: {
                coupleId
            }
        });
    }
    openUpdateModal(birdEggId, coupleId) {
        const request = {
            coupleId,
            birdEggId
        };
        // open update modal
        var ref = this.dialogService.open(_birdegg_update_modal_birdegg_update_modal__WEBPACK_IMPORTED_MODULE_5__["BirdEggUpdateModal"], {
            header: 'Ei bewerken',
            width: 'auto',
            height: 'auto',
            contentStyle: { overflow: 'visible' },
            data: {
                request
            }
        });
        ref.onClose.subscribe(() => {
            this.coupleFacade.clearBirdEggDetail();
        });
    }
}
CoupleDetailComponent.ɵfac = function CoupleDetailComponent_Factory(t) { return new (t || CoupleDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_8__["CoupleFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
CoupleDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoupleDetailComponent, selectors: [["c-couple-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])], decls: 12, vars: 7, consts: [[1, "page"], [1, "page-wrapper"], [1, "page-header"], [1, "page-body"], [3, "formGroup", 4, "ngIf"], ["class", "birdeggs p-mt-5", 4, "ngIf"], [1, "p-mt-4"], [4, "ngIf"], [3, "formGroup"], [1, "grid"], [1, "p-d-flex", "p-flex-column", "p-col-3"], ["for", "name"], ["pInputText", "", "type", "text", "formControlName", "name", "id", "name", 1, "form-control"], [1, "p-d-flex", "p-jc-between"], ["for", "startedAt"], ["pInputText", "", "type", "date", "formControlName", "startedAt", "id", "startedAt", 1, "form-control"], ["for", "cageNumber"], ["pInputText", "", "type", "text", "formControlName", "cageNumber", "id", "cageNumber", 1, "form-control"], [1, "p-d-flex", "p-jc-between", "couple-parents"], [1, "p-d-flex", "p-flex-column", "p-col-4"], ["for", "father"], ["pInputText", "", "type", "text", "formControlName", "father", "id", "father", 1, "form-control"], [1, "p-d-flex", "p-ai-center", "p-jc-center", "p-col-4"], [1, "pi", "pi-minus", "p-mt-4"], ["for", "mother"], ["pInputText", "", "type", "text", "formControlName", "mother", "id", "mother", 1, "form-control"], ["for", "description"], ["pInputTextarea", "", "type", "text", "formControlName", "description", "id", "description", 1, "form-control"], [1, "form-footer"], ["pButton", "", "type", "button", "label", "Terug", 1, "p-button-outlined", 3, "click"], ["pButton", "", "type", "submit", "label", "Opslaan", 3, "disabled", "click"], [1, "birdeggs", "p-mt-5"], ["dataKey", "id", "styleClass", "p-datatable-customers p-datatable-gridlines", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "paginator"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "p-d-flex", "p-jc-end"], ["pButton", "", "pRipple", "", "type", "button", "label", "Ei toevoegen", "icon", "pi pi-plus", 1, "detail-button", 2, "margin-left", "5px", 3, "click"], [1, "p-d-flex", "p-jc-between", "p-ai-center"], ["pButton", "", "pRipple", "", "type", "button", "label", "", "icon", "pi pi-pencil", 1, "detail-button", 2, "margin-left", "5px", 3, "disabled", "click"], ["colspan", "7"]], template: function CoupleDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Couple management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CoupleDetailComponent_form_6_Template, 35, 2, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CoupleDetailComponent_div_8_Template, 7, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CoupleDetailComponent_c_loader_10_Template, 1, 0, "c-loader", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coupleForm && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.couple == null ? null : ctx.couple.birdEggs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__["InputTextarea"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonDirective"], primeng_table__WEBPACK_IMPORTED_MODULE_14__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_15__["PrimeTemplate"], _ui_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_16__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --primary-color: #e94e0f;\n  --primary-light-color: #f2642c;\n  --primary-background-color: #fef6f3;\n  --accent-color: #870b58;\n  --accent-dark-color: #5e083d;\n  --accent-light-color: #fbd0eb;\n  --yellow-brand-color: #f8ad07;\n  --accent-20-color: #e1c2d5;\n  --info-color: #415fca;\n  --info-light-color: hsl(227, 56%, 52%, 0.1);\n  --success-color: #21bc5f;\n  --success-light-color: hsla(144, 70%, 43%, 0.1);\n  --warning-color: #ffc700;\n  --warning-light-color: #FDEAC1;\n  --danger-color: #ff005c;\n  --danger-light-color: hsla(338, 100%, 50%, 0.8);\n  --danger-lighter-color: hsla(338, 100%, 90%, 0.8);\n  --brand-red-color: #E4003A;\n  --brand-red-20-color: #F8BFCD;\n  --brand-orange-color: #E94E0F;\n  --brand-orange-20-color: #F9D2C3;\n  --brand-yellow-color: #F8AD07;\n  --brand-yellow-20-color: #FDEAC1;\n  --brand-purple-color: #870B58;\n  --brand-purple-20-color: #E1C2D5;\n  --tuna-gray-color: #303642;\n  --tuna-gray-80-color: #555d71;\n  --tuna-gray-60-color: #7f8594;\n  --tuna-gray-40-color: #aaaeb8;\n  --tuna-gray-20-color: #f6f6f6;\n  --slate-gray-color: #7783a0;\n  --slate-gray-80-color: #929bb3;\n  --slate-gray-60-color: #adb4c6;\n  --slate-gray-40-color: #c8cdd9;\n  --slate-gray-20-color: #e3e6ec;\n  --slate-gray-10-color: #f1f3f5;\n  --slate-gray-5-color: #f8fafc;\n  --white-color: #ffffff;\n  --black-color: #000000;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 71px);\n  overflow: auto;\n  background-color: var(--slate-gray-5-color);\n  background-image: url('background.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  width: 70vw;\n  margin: 0 auto;\n  background-color: rgba(255, 255, 255, 0.8);\n  margin-top: 32px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--slate-gray-20-color);\n  background-color: var(--tuna-gray-20-color);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.page-body[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n}\n\n.page-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n\n.couple-parents[_ngcontent-%COMP%] {\n  margin: 0 20rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR0aW5nc1xcX2NvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGNvdXBsZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFFQyx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUdBLDBCQUFBO0VBR0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsK0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGlEQUFBO0VBR0EsMEJBQUE7RUFDQSw2QkFBQTtFQUVBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFFQSw2QkFBQTtFQUNBLGdDQUFBO0VBRUEsNkJBQUE7RUFDQSxnQ0FBQTtFQUdBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUVBLHNCQUFBO0VBQ0Esc0JBQUE7QUNqQkQ7O0FBdENBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBeUNKOztBQXRDQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQXlDSjs7QUF0Q0E7RUFDSSxtREFBQTtFQUNBLDJDQUFBO0FBeUNKOztBQXZDSTtFQUNJLGFBQUE7QUF5Q1I7O0FBckNBO0VBQ0ksa0JBQUE7QUF3Q0o7O0FBdENJO0VBQ0ksb0JBQUE7QUF3Q1I7O0FBcENBO0VBQ0ksZUFBQTtBQXVDSiIsImZpbGUiOiJjb3VwbGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGVsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ29sb3JzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjpyb290IHtcclxuXHQvLyBCcmFuZCBpZGVudGl0eSBjb2xvcnNcclxuXHQtLXByaW1hcnktY29sb3I6ICNlOTRlMGY7XHJcblx0LS1wcmltYXJ5LWxpZ2h0LWNvbG9yOiAjZjI2NDJjO1xyXG5cdC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmNmYzO1xyXG5cdC0tYWNjZW50LWNvbG9yOiAjODcwYjU4O1xyXG5cdC0tYWNjZW50LWRhcmstY29sb3I6ICM1ZTA4M2Q7XHJcblx0LS1hY2NlbnQtbGlnaHQtY29sb3I6ICNmYmQwZWI7XHJcblx0LS15ZWxsb3ctYnJhbmQtY29sb3I6ICNmOGFkMDc7XHJcblxyXG5cdC8vIENvbXBsZW1lbnRhcnkgY29sb3JzXHJcblx0LS1hY2NlbnQtMjAtY29sb3I6ICNlMWMyZDU7XHJcblxyXG5cdC8vIFN0YXRlc1xyXG5cdC0taW5mby1jb2xvcjogIzQxNWZjYTtcclxuXHQtLWluZm8tbGlnaHQtY29sb3I6IGhzbCgyMjcsIDU2JSwgNTIlLCAwLjEpO1xyXG5cdC0tc3VjY2Vzcy1jb2xvcjogIzIxYmM1ZjtcclxuXHQtLXN1Y2Nlc3MtbGlnaHQtY29sb3I6IGhzbGEoMTQ0LCA3MCUsIDQzJSwgMC4xKTtcclxuXHQtLXdhcm5pbmctY29sb3I6ICNmZmM3MDA7XHJcblx0LS13YXJuaW5nLWxpZ2h0LWNvbG9yOiAjRkRFQUMxO1xyXG5cdC0tZGFuZ2VyLWNvbG9yOiAjZmYwMDVjO1xyXG5cdC0tZGFuZ2VyLWxpZ2h0LWNvbG9yOiBoc2xhKDMzOCwgMTAwJSwgNTAlLCAwLjgpO1xyXG5cdC0tZGFuZ2VyLWxpZ2h0ZXItY29sb3I6IGhzbGEoMzM4LCAxMDAlLCA5MCUsIDAuOCk7XHJcblxyXG5cdC8vIEV4dHJhIGNvbG9yc1xyXG5cdC0tYnJhbmQtcmVkLWNvbG9yOiAjRTQwMDNBO1xyXG5cdC0tYnJhbmQtcmVkLTIwLWNvbG9yOiAjRjhCRkNEO1xyXG5cclxuXHQtLWJyYW5kLW9yYW5nZS1jb2xvcjogI0U5NEUwRjtcclxuXHQtLWJyYW5kLW9yYW5nZS0yMC1jb2xvcjogI0Y5RDJDMztcclxuXHJcblx0LS1icmFuZC15ZWxsb3ctY29sb3I6ICNGOEFEMDc7XHJcblx0LS1icmFuZC15ZWxsb3ctMjAtY29sb3I6ICNGREVBQzE7XHJcblxyXG5cdC0tYnJhbmQtcHVycGxlLWNvbG9yOiAjODcwQjU4O1xyXG5cdC0tYnJhbmQtcHVycGxlLTIwLWNvbG9yOiAjRTFDMkQ1O1xyXG5cclxuXHQvLyBHcmF5c2NhbGVcclxuXHQtLXR1bmEtZ3JheS1jb2xvcjogIzMwMzY0MjtcclxuXHQtLXR1bmEtZ3JheS04MC1jb2xvcjogIzU1NWQ3MTtcclxuXHQtLXR1bmEtZ3JheS02MC1jb2xvcjogIzdmODU5NDtcclxuXHQtLXR1bmEtZ3JheS00MC1jb2xvcjogI2FhYWViODtcclxuXHQtLXR1bmEtZ3JheS0yMC1jb2xvcjogI2Y2ZjZmNjtcclxuXHJcblx0LS1zbGF0ZS1ncmF5LWNvbG9yOiAjNzc4M2EwO1xyXG5cdC0tc2xhdGUtZ3JheS04MC1jb2xvcjogIzkyOWJiMztcclxuXHQtLXNsYXRlLWdyYXktNjAtY29sb3I6ICNhZGI0YzY7XHJcblx0LS1zbGF0ZS1ncmF5LTQwLWNvbG9yOiAjYzhjZGQ5O1xyXG5cdC0tc2xhdGUtZ3JheS0yMC1jb2xvcjogI2UzZTZlYztcclxuXHQtLXNsYXRlLWdyYXktMTAtY29sb3I6ICNmMWYzZjU7XHJcblx0LS1zbGF0ZS1ncmF5LTUtY29sb3I6ICNmOGZhZmM7XHJcblxyXG5cdC0td2hpdGUtY29sb3I6ICNmZmZmZmY7XHJcblx0LS1ibGFjay1jb2xvcjogIzAwMDAwMDtcclxufVxyXG4iLCI6cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogI2U5NGUwZjtcbiAgLS1wcmltYXJ5LWxpZ2h0LWNvbG9yOiAjZjI2NDJjO1xuICAtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZlZjZmMztcbiAgLS1hY2NlbnQtY29sb3I6ICM4NzBiNTg7XG4gIC0tYWNjZW50LWRhcmstY29sb3I6ICM1ZTA4M2Q7XG4gIC0tYWNjZW50LWxpZ2h0LWNvbG9yOiAjZmJkMGViO1xuICAtLXllbGxvdy1icmFuZC1jb2xvcjogI2Y4YWQwNztcbiAgLS1hY2NlbnQtMjAtY29sb3I6ICNlMWMyZDU7XG4gIC0taW5mby1jb2xvcjogIzQxNWZjYTtcbiAgLS1pbmZvLWxpZ2h0LWNvbG9yOiBoc2woMjI3LCA1NiUsIDUyJSwgMC4xKTtcbiAgLS1zdWNjZXNzLWNvbG9yOiAjMjFiYzVmO1xuICAtLXN1Y2Nlc3MtbGlnaHQtY29sb3I6IGhzbGEoMTQ0LCA3MCUsIDQzJSwgMC4xKTtcbiAgLS13YXJuaW5nLWNvbG9yOiAjZmZjNzAwO1xuICAtLXdhcm5pbmctbGlnaHQtY29sb3I6ICNGREVBQzE7XG4gIC0tZGFuZ2VyLWNvbG9yOiAjZmYwMDVjO1xuICAtLWRhbmdlci1saWdodC1jb2xvcjogaHNsYSgzMzgsIDEwMCUsIDUwJSwgMC44KTtcbiAgLS1kYW5nZXItbGlnaHRlci1jb2xvcjogaHNsYSgzMzgsIDEwMCUsIDkwJSwgMC44KTtcbiAgLS1icmFuZC1yZWQtY29sb3I6ICNFNDAwM0E7XG4gIC0tYnJhbmQtcmVkLTIwLWNvbG9yOiAjRjhCRkNEO1xuICAtLWJyYW5kLW9yYW5nZS1jb2xvcjogI0U5NEUwRjtcbiAgLS1icmFuZC1vcmFuZ2UtMjAtY29sb3I6ICNGOUQyQzM7XG4gIC0tYnJhbmQteWVsbG93LWNvbG9yOiAjRjhBRDA3O1xuICAtLWJyYW5kLXllbGxvdy0yMC1jb2xvcjogI0ZERUFDMTtcbiAgLS1icmFuZC1wdXJwbGUtY29sb3I6ICM4NzBCNTg7XG4gIC0tYnJhbmQtcHVycGxlLTIwLWNvbG9yOiAjRTFDMkQ1O1xuICAtLXR1bmEtZ3JheS1jb2xvcjogIzMwMzY0MjtcbiAgLS10dW5hLWdyYXktODAtY29sb3I6ICM1NTVkNzE7XG4gIC0tdHVuYS1ncmF5LTYwLWNvbG9yOiAjN2Y4NTk0O1xuICAtLXR1bmEtZ3JheS00MC1jb2xvcjogI2FhYWViODtcbiAgLS10dW5hLWdyYXktMjAtY29sb3I6ICNmNmY2ZjY7XG4gIC0tc2xhdGUtZ3JheS1jb2xvcjogIzc3ODNhMDtcbiAgLS1zbGF0ZS1ncmF5LTgwLWNvbG9yOiAjOTI5YmIzO1xuICAtLXNsYXRlLWdyYXktNjAtY29sb3I6ICNhZGI0YzY7XG4gIC0tc2xhdGUtZ3JheS00MC1jb2xvcjogI2M4Y2RkOTtcbiAgLS1zbGF0ZS1ncmF5LTIwLWNvbG9yOiAjZTNlNmVjO1xuICAtLXNsYXRlLWdyYXktMTAtY29sb3I6ICNmMWYzZjU7XG4gIC0tc2xhdGUtZ3JheS01LWNvbG9yOiAjZjhmYWZjO1xuICAtLXdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJsYWNrLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4ucGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MXB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlLWdyYXktNS1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnBhZ2Utd3JhcHBlciB7XG4gIHdpZHRoOiA3MHZ3O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2xhdGUtZ3JheS0yMC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmEtZ3JheS0yMC1jb2xvcik7XG59XG4ucGFnZS1oZWFkZXIgaDEge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ucGFnZS1ib2R5IHtcbiAgcGFkZGluZzogMzJweCAxNnB4O1xufVxuLnBhZ2UtYm9keSBoMiB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4uY291cGxlLXBhcmVudHMge1xuICBtYXJnaW46IDAgMjByZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoupleDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-couple-detail',
                templateUrl: './couple-detail.component.html',
                styleUrls: ['./couple-detail.component.scss'],
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }, { type: src_app_store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_8__["CoupleFacade"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }]; }, null); })();


/***/ }),

/***/ "iGjl":
/*!*********************************************!*\
  !*** ./src/app/Services/breeder.service.ts ***!
  \*********************************************/
/*! exports provided: BreederService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreederService", function() { return BreederService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "n/8u");



class BreederService {
    constructor(baseService) {
        this.baseService = baseService;
    }
    getAllBreeders(request) {
        return this.baseService.get(`/breeders`, request);
    }
    getBreeder(breederId) {
        return this.baseService.get(`/breeders/${breederId}`);
    }
    createBreeder(request) {
        return this.baseService.post(`/breeders`, request);
    }
    updateBreeder(request) {
        return this.baseService.put(`/breeders/${request.id}`, request);
    }
}
BreederService.ɵfac = function BreederService_Factory(t) { return new (t || BreederService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"])); };
BreederService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BreederService, factory: BreederService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreederService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] }]; }, null); })();


/***/ }),

/***/ "j9ud":
/*!********************************************************!*\
  !*** ./src/app/store/entities/couple/couple.facade.ts ***!
  \********************************************************/
/*! exports provided: CoupleFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupleFacade", function() { return CoupleFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _couple_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./couple.actions */ "n3CS");
/* harmony import */ var _couple_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./couple.selectors */ "vmi+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");






class CoupleFacade {
    constructor(store, action$) {
        this.store = store;
        this.action$ = action$;
    }
    // Selectors
    getCouples() {
        return this.store.select(_couple_selectors__WEBPACK_IMPORTED_MODULE_3__["selectCouples"]);
    }
    getCouple() {
        return this.store.select(_couple_selectors__WEBPACK_IMPORTED_MODULE_3__["selectCouple"]);
    }
    getPagination() {
        return this.store.select(_couple_selectors__WEBPACK_IMPORTED_MODULE_3__["selectPagination"]);
    }
    getLoading() {
        return this.store.select(_couple_selectors__WEBPACK_IMPORTED_MODULE_3__["selectLoadingAll"]);
    }
    getLoadingDetail() {
        return this.store.select(_couple_selectors__WEBPACK_IMPORTED_MODULE_3__["selectLoadingDetail"]);
    }
    getLoadingModal() {
        return this.store.select(_couple_selectors__WEBPACK_IMPORTED_MODULE_3__["selectLoadingModal"]);
    }
    getBirdEgg() {
        return this.store.select(_couple_selectors__WEBPACK_IMPORTED_MODULE_3__["selectCoupleBirdEgg"]);
    }
    clearDetail() {
        this.store.dispatch(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["clearCoupleDetail"]());
    }
    clearBirdEggDetail() {
        this.store.dispatch(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["clearBirdEggDetail"]());
    }
    // Actions
    getAllCouplesRequest(request) {
        this.store.dispatch(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["getCouples"]({ request }));
    }
    getCoupleRequest(coupleId) {
        this.store.dispatch(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["getCouple"]({ coupleId }));
    }
    createCouple(request) {
        this.store.dispatch(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["createCouple"]({ request }));
    }
    createBirdEgg(request) {
        this.store.dispatch(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["createBirdEgg"]({ request }));
    }
    updateBirdEggRequest(request) {
        this.store.dispatch(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["updateBirdEgg"]({ request }));
    }
    getBirdEggRequest(request) {
        this.store.dispatch(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["getBirdEgg"]({ request }));
    }
    updateCoupleRequest(request) {
        this.store.dispatch(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["updateCouple"]({ request }));
    }
    // ActionSubjects
    onCreateCoupleSuccess() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["createCoupleSuccess"].type));
    }
    onCreateCoupleError() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["createCoupleError"].type));
    }
    onCreateBirdEggSuccess() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["createBirdEggSuccess"].type));
    }
    onCreateBirdEggError() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["createBirdEggError"].type));
    }
    onUpdateCoupleSuccess() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["updateCoupleSuccess"].type));
    }
    onUpdateCoupleError() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["updateCoupleError"].type));
    }
    onUpdateBirdEggSuccess() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["updateBirdEggSuccess"].type));
    }
    onUpdateBirdEggError() {
        return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_2__["updateBirdEggError"].type));
    }
}
CoupleFacade.ɵfac = function CoupleFacade_Factory(t) { return new (t || CoupleFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["ActionsSubject"])); };
CoupleFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoupleFacade, factory: CoupleFacade.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoupleFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["ActionsSubject"] }]; }, null); })();


/***/ }),

/***/ "jQuM":
/*!*********************************************************!*\
  !*** ./src/app/store/entities/couple/couple.reducer.ts ***!
  \*********************************************************/
/*! exports provided: coupleReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coupleReducer", function() { return coupleReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _couple_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./couple.actions */ "n3CS");
/* harmony import */ var _couple_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./couple.initial-state */ "1v1M");



const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_couple_initial_state__WEBPACK_IMPORTED_MODULE_2__["initialState"], 
// GET Couples
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["getCouples"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingAll: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["getCouplesSuccess"], (state, { couples }) => {
    return Object.assign(Object.assign({}, state), { couples: couples.results, pagination: couples.pagination, loadingAll: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["getCouplesError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingAll: false, errors: error });
}), 
// GET Couple
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["getCouple"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingDetail: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["getCoupleSuccess"], (state, { coupleDetail }) => {
    return Object.assign(Object.assign({}, state), { coupleDetail: coupleDetail, loadingDetail: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["getCoupleError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingDetail: false, errors: error });
}), 
// UPDATE Couple
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["updateCouple"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["updateCoupleSuccess"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["updateCoupleError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errors: error });
}), 
// create birdegg modal
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["createBirdEgg"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingModal: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["createBirdEggSuccess"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingModal: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["createBirdEggError"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingModal: false });
}), 
// GET Couple BirdEgg
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["getBirdEgg"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingModal: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["getBirdEggSuccess"], (state, { response }) => {
    return Object.assign(Object.assign({}, state), { loadingModal: false, birdEggDetail: response, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["getBirdEggError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingModal: false, errors: error });
}), 
// Clear detail
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["clearCoupleDetail"], (state) => {
    return Object.assign(Object.assign({}, state), { coupleDetail: null });
}), 
// Clear detail
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_couple_actions__WEBPACK_IMPORTED_MODULE_1__["clearBirdEggDetail"], (state) => {
    return Object.assign(Object.assign({}, state), { birdEggDetail: null });
}));
function coupleReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "jjmU":
/*!***************************************************!*\
  !*** ./src/app/store/entities/entities.facade.ts ***!
  \***************************************************/
/*! exports provided: Facades */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facades", function() { return Facades; });
/* harmony import */ var _bird_bird_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bird/bird.facade */ "NLBs");
/* harmony import */ var _breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breeder/breeder.facade */ "Xutl");
/* harmony import */ var _owner_owner_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner/owner.facade */ "btcf");
/* harmony import */ var _couple_couple_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./couple/couple.facade */ "j9ud");




const Facades = [
    _bird_bird_facade__WEBPACK_IMPORTED_MODULE_0__["BirdFacade"],
    _breeder_breeder_facade__WEBPACK_IMPORTED_MODULE_1__["BreederFacade"],
    _owner_owner_facade__WEBPACK_IMPORTED_MODULE_2__["OwnerFacade"],
    _couple_couple_facade__WEBPACK_IMPORTED_MODULE_3__["CoupleFacade"]
];


/***/ }),

/***/ "kDuu":
/*!*****************************************************************!*\
  !*** ./src/app/store/entities/breeder/breeder.initial-state.ts ***!
  \*****************************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    breeders: null,
    breederDetail: null,
    loadingAll: false,
    loadingDetail: false,
    pagination: null,
    errors: null
};


/***/ }),

/***/ "lLKA":
/*!*****************************************************!*\
  !*** ./src/app/store/entities/bird/bird.actions.ts ***!
  \*****************************************************/
/*! exports provided: getBirds, getBirdsSuccess, getBirdsError, getBird, getBirdSuccess, getBirdError, createBird, createBirdSuccess, createBirdError, updateBird, updateBirdSuccess, updateBirdError, createBirdShow, createBirdShowSuccess, createBirdShowError, updateBirdShow, updateBirdShowSuccess, updateBirdShowError, getBirdShow, getBirdShowSuccess, getBirdShowError, clearBirdDetail, clearBirdShowDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBirds", function() { return getBirds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBirdsSuccess", function() { return getBirdsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBirdsError", function() { return getBirdsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBird", function() { return getBird; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBirdSuccess", function() { return getBirdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBirdError", function() { return getBirdError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBird", function() { return createBird; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBirdSuccess", function() { return createBirdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBirdError", function() { return createBirdError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBird", function() { return updateBird; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBirdSuccess", function() { return updateBirdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBirdError", function() { return updateBirdError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBirdShow", function() { return createBirdShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBirdShowSuccess", function() { return createBirdShowSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBirdShowError", function() { return createBirdShowError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBirdShow", function() { return updateBirdShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBirdShowSuccess", function() { return updateBirdShowSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBirdShowError", function() { return updateBirdShowError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBirdShow", function() { return getBirdShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBirdShowSuccess", function() { return getBirdShowSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBirdShowError", function() { return getBirdShowError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearBirdDetail", function() { return clearBirdDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearBirdShowDetail", function() { return clearBirdShowDetail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// GET all birds
// TODO add request for search and pagination
const getBirds = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] GET All Birds', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getBirdsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] GET All Birds Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getBirdsError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] GET All Birds Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// GET bird
const getBird = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] GET Bird', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getBirdSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] GET Bird Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getBirdError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] GET Bird Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// CREATE bird
const createBird = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] CREATE Bird', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createBirdSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] CREATE Bird Success');
const createBirdError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] CREATE Bird Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// UPDATE bird
const updateBird = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] UPDATE Bird', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateBirdSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] UPDATE Bird Success');
const updateBirdError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] UPDATE Bird Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// CREATE birdShow
const createBirdShow = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] CREATE BirdShow', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createBirdShowSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] CREATE BirdShow Success');
const createBirdShowError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] CREATE BirdShow Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// UPDATE BirdShow
const updateBirdShow = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] UPDATE BirdShow', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateBirdShowSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] UPDATE BirdShow Success');
const updateBirdShowError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] UPDATE BirdShow Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// GET BirdShow
const getBirdShow = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] GET BirdShow', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getBirdShowSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] GET BirdShow Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getBirdShowError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] GET BirdShow Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Clear
const clearBirdDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] Clear Bird detail');
const clearBirdShowDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bird] Clear BirdShow detail');


/***/ }),

/***/ "ljrB":
/*!***********************************************************!*\
  !*** ./src/app/store/entities/breeder/breeder.reducer.ts ***!
  \***********************************************************/
/*! exports provided: breederReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breederReducer", function() { return breederReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _breeder_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breeder.actions */ "pkpR");
/* harmony import */ var _breeder_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breeder.initial-state */ "kDuu");



const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_breeder_initial_state__WEBPACK_IMPORTED_MODULE_2__["initialState"], 
// GET Breeders
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_1__["getBreeders"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingAll: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_1__["getBreedersSuccess"], (state, { breeders }) => {
    return Object.assign(Object.assign({}, state), { breeders: breeders.results, pagination: breeders.pagination, loadingAll: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_1__["getBreedersError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingAll: false, errors: error });
}), 
// GET Breeder
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_1__["getBreeder"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingDetail: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_1__["getBreederSuccess"], (state, { breederDetail }) => {
    return Object.assign(Object.assign({}, state), { breederDetail: breederDetail, loadingDetail: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_1__["getBreederError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingDetail: false, errors: error });
}), 
// UPDATE Breeder
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_1__["updateBreeder"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_1__["updateBreederSuccess"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: false, errors: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_1__["updateBreederError"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errors: error });
}), 
// Clear detail
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_breeder_actions__WEBPACK_IMPORTED_MODULE_1__["clearBreederDetail"], (state) => {
    return Object.assign(Object.assign({}, state), { breederDetail: null });
}));
function breederReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "mcr6":
/*!****************************************************!*\
  !*** ./src/app/store/entities/entities.reducer.ts ***!
  \****************************************************/
/*! exports provided: Reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reducers", function() { return Reducers; });
/* harmony import */ var _bird_bird_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bird/bird.reducer */ "9QEX");
/* harmony import */ var _breeder_breeder_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breeder/breeder.reducer */ "ljrB");
/* harmony import */ var _owner_owner_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner/owner.reducer */ "6BBq");
/* harmony import */ var _couple_couple_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./couple/couple.reducer */ "jQuM");




const Reducers = {
    bird: _bird_bird_reducer__WEBPACK_IMPORTED_MODULE_0__["birdReducer"],
    breeder: _breeder_breeder_reducer__WEBPACK_IMPORTED_MODULE_1__["breederReducer"],
    owner: _owner_owner_reducer__WEBPACK_IMPORTED_MODULE_2__["ownerReducer"],
    couple: _couple_couple_reducer__WEBPACK_IMPORTED_MODULE_3__["coupleReducer"]
};


/***/ }),

/***/ "mzci":
/*!******************************************!*\
  !*** ./src/app/Services/bird.service.ts ***!
  \******************************************/
/*! exports provided: BirdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdService", function() { return BirdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "n/8u");



class BirdService {
    constructor(baseService) {
        this.baseService = baseService;
    }
    getBirds(request) {
        return this.baseService.get('/birds', request);
    }
    getBird(birdId) {
        return this.baseService.get(`/birds/${birdId}`);
    }
    createBird(request) {
        return this.baseService.post(`/birds`, request);
    }
    updateBird(request) {
        return this.baseService.put(`/birds/${request.id}`, request);
    }
    getBirdShow(birdId, id) {
        return this.baseService.get(`/birds/${birdId}/birdshow/${id}`);
    }
    createBirdShow(request) {
        return this.baseService.post(`/birds/${request.birdId}/birdshow`, request);
    }
    updateBirdShow(id, request) {
        return this.baseService.put(`/birds/${request.birdId}/birdshow/${id}`, request);
    }
}
BirdService.ɵfac = function BirdService_Factory(t) { return new (t || BirdService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"])); };
BirdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BirdService, factory: BirdService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirdService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] }]; }, null); })();


/***/ }),

/***/ "n/8u":
/*!******************************************!*\
  !*** ./src/app/Services/base.service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");








class BaseService {
    constructor(httpClient, toastrService) {
        this.httpClient = httpClient;
        this.toastrService = toastrService;
        this.baseUrl = '';
        this.token = '';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.fileHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/pdf' });
        // Handle API errors
        this.handleError = (response) => {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(response);
            // return an observable with a user-facing error message
            const title = "An error occured";
            const message = "Something bad happened. Please try again later.";
            const errorMessage = response.error.summary ? response.error.summary[0] : message;
            this.toastrService.error(errorMessage, title, {
                timeOut: 6000,
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response);
        };
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].webApiBaseUrl;
    }
    get(url, params) {
        return this.httpClient.get(`${this.baseUrl}${url}`, {
            headers: this.headers,
            params
        })
            .pipe(
        // retry(2),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getFile(url, params) {
        return this.httpClient.get(`${this.baseUrl}${url}`, {
            headers: this.fileHeaders,
            params,
            responseType: 'blob',
        })
            .pipe(
        // retry(2),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    post(url, object) {
        return this.httpClient
            .post(`${this.baseUrl}${url}`, object, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(250), 
        // retry(2),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    postFile(url, object) {
        return this.httpClient
            .post(`${this.baseUrl}${url}`, object) // Do not explicitly set http headers when posting files
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(250), 
        // retry(2),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    put(url, object) {
        return this.httpClient
            .put(`${this.baseUrl}${url}`, object, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(250), 
        // retry(2),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    delete(url, object) {
        const httpOptions = {
            headers: this.headers,
            body: object
        };
        return this.httpClient
            .delete(`${this.baseUrl}${url}`, httpOptions)
            .pipe(
        // retry(2),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
BaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BaseService, factory: BaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "n3CS":
/*!*********************************************************!*\
  !*** ./src/app/store/entities/couple/couple.actions.ts ***!
  \*********************************************************/
/*! exports provided: getCouples, getCouplesSuccess, getCouplesError, getCouple, getCoupleSuccess, getCoupleError, createCouple, createCoupleSuccess, createCoupleError, updateCouple, updateCoupleSuccess, updateCoupleError, createBirdEgg, createBirdEggSuccess, createBirdEggError, updateBirdEgg, updateBirdEggSuccess, updateBirdEggError, getBirdEgg, getBirdEggSuccess, getBirdEggError, clearCoupleDetail, clearBirdEggDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCouples", function() { return getCouples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCouplesSuccess", function() { return getCouplesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCouplesError", function() { return getCouplesError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCouple", function() { return getCouple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoupleSuccess", function() { return getCoupleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoupleError", function() { return getCoupleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCouple", function() { return createCouple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCoupleSuccess", function() { return createCoupleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCoupleError", function() { return createCoupleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCouple", function() { return updateCouple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCoupleSuccess", function() { return updateCoupleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCoupleError", function() { return updateCoupleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBirdEgg", function() { return createBirdEgg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBirdEggSuccess", function() { return createBirdEggSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBirdEggError", function() { return createBirdEggError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBirdEgg", function() { return updateBirdEgg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBirdEggSuccess", function() { return updateBirdEggSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBirdEggError", function() { return updateBirdEggError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBirdEgg", function() { return getBirdEgg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBirdEggSuccess", function() { return getBirdEggSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBirdEggError", function() { return getBirdEggError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCoupleDetail", function() { return clearCoupleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearBirdEggDetail", function() { return clearBirdEggDetail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// GET all Couples
const getCouples = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] GET All Couples', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getCouplesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] GET All Couples Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getCouplesError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] GET All Couples Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// GET couple
const getCouple = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] GET Couple', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getCoupleSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] GET Couple Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getCoupleError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] GET Couple Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// CREATE couple
const createCouple = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] CREATE Couple', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createCoupleSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] CREATE Couple Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createCoupleError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] CREATE Couple Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// UPDATE couple
const updateCouple = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] UPDATE Couple', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateCoupleSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] UPDATE Couple Success');
const updateCoupleError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] UPDATE Couple Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// CREATE couple birdEgg
const createBirdEgg = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] CREATE BirdEgg', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createBirdEggSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] CREATE BirdEgg Success');
const createBirdEggError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] CREATE BirdEgg Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// UPDATE couple birdEgg
const updateBirdEgg = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] UPDATE BirdEgg', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateBirdEggSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] UPDATE BirdEgg Success');
const updateBirdEggError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] UPDATE BirdEgg Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// GET couple birdEgg
const getBirdEgg = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] GET BirdEgg', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getBirdEggSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] GET BirdEgg Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getBirdEggError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] GET BirdEgg Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Clear
const clearCoupleDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] Clear Couple detail');
const clearBirdEggDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Couple] Clear BirdEgg detail');


/***/ }),

/***/ "nzoQ":
/*!**********************************************************!*\
  !*** ./src/app/ui/components/loader/loader.component.ts ***!
  \**********************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");



class LoaderComponent {
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["c-loader"]], decls: 7, vars: 0, consts: [[1, "c-loader"], [1, "c-loader__text"], [1, "p-mb-1"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-progressSpinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gegevens worden opgehaald");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Even geduld aub...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_progressspinner__WEBPACK_IMPORTED_MODULE_1__["ProgressSpinner"]], styles: [".c-loader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.c-loader__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmMtbG9hZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmMtbG9hZGVyX190ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ogCa":
/*!************************************************!*\
  !*** ./src/app/store/entities/store.config.ts ***!
  \************************************************/
/*! exports provided: FEATURE_KEY, selectFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURE_KEY", function() { return FEATURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeature", function() { return selectFeature; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const FEATURE_KEY = 'coreModule';
const selectFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(FEATURE_KEY);


/***/ }),

/***/ "pkpR":
/*!***********************************************************!*\
  !*** ./src/app/store/entities/breeder/breeder.actions.ts ***!
  \***********************************************************/
/*! exports provided: getBreeders, getBreedersSuccess, getBreedersError, getBreeder, getBreederSuccess, getBreederError, createBreeder, createBreederSuccess, createBreederError, updateBreeder, updateBreederSuccess, updateBreederError, clearBreederDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreeders", function() { return getBreeders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreedersSuccess", function() { return getBreedersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreedersError", function() { return getBreedersError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreeder", function() { return getBreeder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreederSuccess", function() { return getBreederSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreederError", function() { return getBreederError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBreeder", function() { return createBreeder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBreederSuccess", function() { return createBreederSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBreederError", function() { return createBreederError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBreeder", function() { return updateBreeder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBreederSuccess", function() { return updateBreederSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBreederError", function() { return updateBreederError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearBreederDetail", function() { return clearBreederDetail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// GET all Breeders
const getBreeders = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Breeder] GET All Breeders', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getBreedersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Breeder] GET All Breeders Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getBreedersError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Breeder] GET All Breeders Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// GET breeder
const getBreeder = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Breeder] GET Breeder', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getBreederSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Breeder] GET Breeder Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getBreederError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Breeder] GET Breeder Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// CREATE breeder
const createBreeder = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Breeder] CREATE Breeder', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createBreederSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Breeder] CREATE Breeder Success');
const createBreederError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Breeder] CREATE Breeder Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// UPDATE breeder
const updateBreeder = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Breeder] UPDATE Breeder', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateBreederSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Breeder] UPDATE Breeder Success');
const updateBreederError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Breeder] UPDATE Breeder Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Clear
const clearBreederDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Breeder] Clear Breeder detail');


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/birds"]; };
const _c1 = function () { return ["/owners"]; };
class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 42, vars: 4, consts: [[1, "moon"], [1, "moon__crater", "moon__crater1"], [1, "moon__crater", "moon__crater2"], [1, "moon__crater", "moon__crater3"], [1, "star", "star1"], [1, "star", "star2"], [1, "star", "star3"], [1, "star", "star4"], [1, "star", "star5"], [1, "error"], [1, "error__title"], [1, "error__subtitle"], [1, "error__description"], [1, "error__button", "error__button--active", 3, "routerLink"], [1, "error__button", 3, "routerLink"], [1, "astronaut"], [1, "astronaut__backpack"], [1, "astronaut__body"], [1, "astronaut__body__chest"], [1, "astronaut__arm-left1"], [1, "astronaut__arm-left2"], [1, "astronaut__arm-right1"], [1, "astronaut__arm-right2"], [1, "astronaut__arm-thumb-left"], [1, "astronaut__arm-thumb-right"], [1, "astronaut__leg-left"], [1, "astronaut__leg-right"], [1, "astronaut__foot-left"], [1, "astronaut__foot-right"], [1, "astronaut__wrist-left"], [1, "astronaut__wrist-right"], [1, "astronaut__cord"], ["id", "cord", "height", "500px", "width", "500px"], [1, "astronaut__head"], ["id", "visor", "width", "60px", "height", "60px"], [1, "astronaut__head-visor-flare1"], [1, "astronaut__head-visor-flare2"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hmmm...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Deze pagina bestaat niet, ga terug naar het overzicht.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "VOGELS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "EIGENAARS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "canvas", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "canvas", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  background: linear-gradient(90deg, #2f3640 23%, #181b20 100%);\n}\n\n.moon[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #d0d0d0 48%, #919191 100%);\n  position: absolute;\n  top: 100px;\n  left: -300px;\n  width: 900px;\n  height: 900px;\n  content: \"\";\n  border-radius: 100%;\n  box-shadow: 0px 0px 30px -4px rgba(0, 0, 0, 0.5);\n}\n\n.moon__crater[_ngcontent-%COMP%] {\n  position: absolute;\n  content: \"\";\n  border-radius: 100%;\n  background: linear-gradient(90deg, #7a7a7a 38%, #c3c3c3 100%);\n  opacity: 0.6;\n}\n\n.moon__crater1[_ngcontent-%COMP%] {\n  top: 350px;\n  left: 500px;\n  width: 60px;\n  height: 180px;\n}\n\n.moon__crater2[_ngcontent-%COMP%] {\n  top: 650px;\n  left: 340px;\n  width: 40px;\n  height: 80px;\n  transform: rotate(55deg);\n}\n\n.moon__crater3[_ngcontent-%COMP%] {\n  top: 120px;\n  left: 40px;\n  width: 65px;\n  height: 120px;\n  transform: rotate(250deg);\n}\n\n.star[_ngcontent-%COMP%] {\n  background: grey;\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  content: \"\";\n  border-radius: 100%;\n  transform: rotate(250deg);\n  opacity: 0.4;\n  animation-name: shimmer;\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n\n@keyframes shimmer {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0.7;\n  }\n}\n\n.star1[_ngcontent-%COMP%] {\n  top: 40%;\n  left: 50%;\n  animation-delay: 1s;\n}\n\n.star2[_ngcontent-%COMP%] {\n  top: 60%;\n  left: 90%;\n  animation-delay: 3s;\n}\n\n.star3[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 70%;\n  animation-delay: 2s;\n}\n\n.star4[_ngcontent-%COMP%] {\n  top: 90%;\n  left: 40%;\n}\n\n.star5[_ngcontent-%COMP%] {\n  top: 20%;\n  left: 30%;\n  animation-delay: 0.5s;\n}\n\n.error[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 100px;\n  top: 400px;\n  transform: translateY(-60%);\n  font-family: \"Righteous\", cursive;\n  color: #363e49;\n}\n\n.error__title[_ngcontent-%COMP%] {\n  font-size: 10em;\n}\n\n.error__subtitle[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\n.error__description[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.error__button[_ngcontent-%COMP%] {\n  min-width: 7em;\n  margin-top: 3em;\n  margin-right: 0.5em;\n  padding: 0.5em 2em;\n  outline: none;\n  border: 2px solid #2f3640;\n  background-color: transparent;\n  border-radius: 8em;\n  color: #576375;\n  cursor: pointer;\n  transition-duration: 0.2s;\n  font-size: 0.75em;\n  font-family: \"Righteous\", cursive;\n}\n\n.error__button[_ngcontent-%COMP%]:hover {\n  color: #21252c;\n}\n\n.error__button--active[_ngcontent-%COMP%] {\n  background-color: #e67e22;\n  border: 2px solid #e67e22;\n  color: white;\n}\n\n.error__button--active[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);\n  color: white;\n}\n\n.astronaut[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 185px;\n  height: 300px;\n  left: 70%;\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(20deg) scale(1.2);\n}\n\n.astronaut__head[_ngcontent-%COMP%] {\n  background-color: white;\n  position: absolute;\n  top: 60px;\n  left: 60px;\n  width: 60px;\n  height: 60px;\n  content: \"\";\n  border-radius: 2em;\n}\n\n.astronaut__head-visor-flare1[_ngcontent-%COMP%] {\n  background-color: #7f8fa6;\n  position: absolute;\n  top: 28px;\n  left: 40px;\n  width: 10px;\n  height: 10px;\n  content: \"\";\n  border-radius: 2em;\n  opacity: 0.5;\n}\n\n.astronaut__head-visor-flare2[_ngcontent-%COMP%] {\n  background-color: #718093;\n  position: absolute;\n  top: 40px;\n  left: 38px;\n  width: 5px;\n  height: 5px;\n  content: \"\";\n  border-radius: 2em;\n  opacity: 0.3;\n}\n\n.astronaut__backpack[_ngcontent-%COMP%] {\n  background-color: #bfbfbf;\n  position: absolute;\n  top: 90px;\n  left: 47px;\n  width: 86px;\n  height: 90px;\n  content: \"\";\n  border-radius: 8px;\n}\n\n.astronaut__body[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  position: absolute;\n  top: 115px;\n  left: 55px;\n  width: 70px;\n  height: 80px;\n  content: \"\";\n  border-radius: 8px;\n}\n\n.astronaut__body__chest[_ngcontent-%COMP%] {\n  background-color: #d9d9d9;\n  position: absolute;\n  top: 140px;\n  left: 68px;\n  width: 45px;\n  height: 25px;\n  content: \"\";\n  border-radius: 6px;\n}\n\n.astronaut__arm-left1[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  position: absolute;\n  top: 127px;\n  left: 9px;\n  width: 65px;\n  height: 20px;\n  content: \"\";\n  border-radius: 8px;\n  transform: rotate(-30deg);\n}\n\n.astronaut__arm-left2[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  position: absolute;\n  top: 102px;\n  left: 7px;\n  width: 20px;\n  height: 45px;\n  content: \"\";\n  border-radius: 8px;\n  transform: rotate(-12deg);\n  border-top-left-radius: 8em;\n  border-top-right-radius: 8em;\n}\n\n.astronaut__arm-right1[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  position: absolute;\n  top: 113px;\n  left: 100px;\n  width: 65px;\n  height: 20px;\n  content: \"\";\n  border-radius: 8px;\n  transform: rotate(-10deg);\n}\n\n.astronaut__arm-right2[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  position: absolute;\n  top: 78px;\n  left: 141px;\n  width: 20px;\n  height: 45px;\n  content: \"\";\n  border-radius: 8px;\n  transform: rotate(-10deg);\n  border-top-left-radius: 8em;\n  border-top-right-radius: 8em;\n}\n\n.astronaut__arm-thumb-left[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  position: absolute;\n  top: 110px;\n  left: 21px;\n  width: 10px;\n  height: 6px;\n  content: \"\";\n  border-radius: 8em;\n  transform: rotate(-35deg);\n}\n\n.astronaut__arm-thumb-right[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  position: absolute;\n  top: 90px;\n  left: 133px;\n  width: 10px;\n  height: 6px;\n  content: \"\";\n  border-radius: 8em;\n  transform: rotate(20deg);\n}\n\n.astronaut__wrist-left[_ngcontent-%COMP%] {\n  background-color: #e67e22;\n  position: absolute;\n  top: 122px;\n  left: 6.5px;\n  width: 21px;\n  height: 4px;\n  content: \"\";\n  border-radius: 8em;\n  transform: rotate(-15deg);\n}\n\n.astronaut__wrist-right[_ngcontent-%COMP%] {\n  background-color: #e67e22;\n  position: absolute;\n  top: 98px;\n  left: 141px;\n  width: 21px;\n  height: 4px;\n  content: \"\";\n  border-radius: 8em;\n  transform: rotate(-10deg);\n}\n\n.astronaut__leg-left[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  position: absolute;\n  top: 188px;\n  left: 50px;\n  width: 23px;\n  height: 75px;\n  content: \"\";\n  transform: rotate(10deg);\n}\n\n.astronaut__leg-right[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  position: absolute;\n  top: 188px;\n  left: 108px;\n  width: 23px;\n  height: 75px;\n  content: \"\";\n  transform: rotate(-10deg);\n}\n\n.astronaut__foot-left[_ngcontent-%COMP%] {\n  background-color: white;\n  position: absolute;\n  top: 240px;\n  left: 43px;\n  width: 28px;\n  height: 20px;\n  content: \"\";\n  transform: rotate(10deg);\n  border-radius: 3px;\n  border-top-left-radius: 8em;\n  border-top-right-radius: 8em;\n  border-bottom: 4px solid #e67e22;\n}\n\n.astronaut__foot-right[_ngcontent-%COMP%] {\n  background-color: white;\n  position: absolute;\n  top: 240px;\n  left: 111px;\n  width: 28px;\n  height: 20px;\n  content: \"\";\n  transform: rotate(-10deg);\n  border-radius: 3px;\n  border-top-left-radius: 8em;\n  border-top-right-radius: 8em;\n  border-bottom: 4px solid #e67e22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZEQUFBO0FBQ0o7O0FBRUE7RUFDSSw2REFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFVBQUE7RUFDTjtFQUNFO0lBQ0ksWUFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxRQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSw4Q0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlEQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0FBQUoiLCJmaWxlIjoicGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyZjM2NDAgMjMlLCAjMTgxYjIwIDEwMCUpO1xyXG59XHJcblxyXG4ubW9vbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkMGQwZDAgNDglLCAjOTE5MTkxIDEwMCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGxlZnQ6IC0zMDBweDtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGhlaWdodDogOTAwcHg7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5tb29uX19jcmF0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjN2E3YTdhIDM4JSwgI2MzYzNjMyAxMDAlKTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLm1vb25fX2NyYXRlcjEge1xyXG4gICAgdG9wOiAzNTBweDtcclxuICAgIGxlZnQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcblxyXG4ubW9vbl9fY3JhdGVyMiB7XHJcbiAgICB0b3A6IDY1MHB4O1xyXG4gICAgbGVmdDogMzQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDU1ZGVnKTtcclxufVxyXG5cclxuLm1vb25fX2NyYXRlcjMge1xyXG4gICAgdG9wOiAxMjBweDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNTBkZWcpO1xyXG59XHJcblxyXG4uc3RhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjUwZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaGltbWVyO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hpbW1lciB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxufVxyXG5cclxuLnN0YXIxIHtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG5cclxuLnN0YXIyIHtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgbGVmdDogOTAlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzcztcclxufVxyXG5cclxuLnN0YXIzIHtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogNzAlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxufVxyXG5cclxuLnN0YXI0IHtcclxuICAgIHRvcDogOTAlO1xyXG4gICAgbGVmdDogNDAlO1xyXG59XHJcblxyXG4uc3RhcjUge1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuICAgIHRvcDogNDAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYwJSk7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBjb2xvcjogIzM2M2U0OTtcclxufVxyXG5cclxuLmVycm9yX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEwZW07XHJcbn1cclxuXHJcbi5lcnJvcl9fc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5lcnJvcl9fZGVzY3JpcHRpb24ge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZXJyb3JfX2J1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDdlbTtcclxuICAgIG1hcmdpbi10b3A6IDNlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAyZW07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJmMzY0MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOGVtO1xyXG4gICAgY29sb3I6ICM1NzYzNzU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5lcnJvcl9fYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMjEyNTJjO1xyXG59XHJcblxyXG4uZXJyb3JfX2J1dHRvbi0tYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZXJyb3JfX2J1dHRvbi0tYWN0aXZlOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hc3Ryb25hdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE4NXB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGxlZnQ6IDcwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDIwZGVnKSBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4uYXN0cm9uYXV0X19oZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgbGVmdDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbn1cclxuXHJcbi5hc3Ryb25hdXRfX2hlYWQtdmlzb3ItZmxhcmUxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZjhmYTY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI4cHg7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmFzdHJvbmF1dF9faGVhZC12aXNvci1mbGFyZTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxODA5MztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IDM4cHg7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLmFzdHJvbmF1dF9fYmFja3BhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOTBweDtcclxuICAgIGxlZnQ6IDQ3cHg7XHJcbiAgICB3aWR0aDogODZweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uYXN0cm9uYXV0X19ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDExNXB4O1xyXG4gICAgbGVmdDogNTVweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5hc3Ryb25hdXRfX2JvZHlfX2NoZXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0MHB4O1xyXG4gICAgbGVmdDogNjhweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5hc3Ryb25hdXRfX2FybS1sZWZ0MSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMjdweDtcclxuICAgIGxlZnQ6IDlweDtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xyXG59XHJcblxyXG4uYXN0cm9uYXV0X19hcm0tbGVmdDIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAycHg7XHJcbiAgICBsZWZ0OiA3cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4ZW07XHJcbn1cclxuXHJcbi5hc3Ryb25hdXRfX2FybS1yaWdodDEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTEzcHg7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG59XHJcblxyXG4uYXN0cm9uYXV0X19hcm0tcmlnaHQyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDc4cHg7XHJcbiAgICBsZWZ0OiAxNDFweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOGVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhlbTtcclxufVxyXG5cclxuLmFzdHJvbmF1dF9fYXJtLXRodW1iLWxlZnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTEwcHg7XHJcbiAgICBsZWZ0OiAyMXB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOGVtO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM1ZGVnKTtcclxufVxyXG5cclxuLmFzdHJvbmF1dF9fYXJtLXRodW1iLXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDkwcHg7XHJcbiAgICBsZWZ0OiAxMzNweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhlbTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcclxufVxyXG5cclxuLmFzdHJvbmF1dF9fd3Jpc3QtbGVmdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMjJweDtcclxuICAgIGxlZnQ6IDYuNXB4O1xyXG4gICAgd2lkdGg6IDIxcHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOGVtO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcclxufVxyXG5cclxuLmFzdHJvbmF1dF9fd3Jpc3QtcmlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOThweDtcclxuICAgIGxlZnQ6IDE0MXB4O1xyXG4gICAgd2lkdGg6IDIxcHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOGVtO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxufVxyXG5cclxuLmFzdHJvbmF1dF9fbGVnLWxlZnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTg4cHg7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDIzcHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxufVxyXG5cclxuLmFzdHJvbmF1dF9fbGVnLXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE4OHB4O1xyXG4gICAgbGVmdDogMTA4cHg7XHJcbiAgICB3aWR0aDogMjNweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxufVxyXG5cclxuLmFzdHJvbmF1dF9fZm9vdC1sZWZ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNDBweDtcclxuICAgIGxlZnQ6IDQzcHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOGVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZTY3ZTIyO1xyXG59XHJcblxyXG4uYXN0cm9uYXV0X19mb290LXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNDBweDtcclxuICAgIGxlZnQ6IDExMXB4O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4ZW07XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOGVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNlNjdlMjI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bird_bird_create_bird_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bird/bird-create/bird-create.component */ "eUpS");
/* harmony import */ var _bird_bird_detail_bird_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bird/bird-detail/bird-detail.component */ "PlGd");
/* harmony import */ var _bird_bird_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bird/bird.component */ "KkXH");
/* harmony import */ var _breeder_breeder_create_breeder_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breeder/breeder-create/breeder-create.component */ "JavI");
/* harmony import */ var _breeder_breeder_detail_breeder_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breeder/breeder-detail/breeder-detail.component */ "Di4I");
/* harmony import */ var _breeder_breeder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./breeder/breeder.component */ "fmPv");
/* harmony import */ var _couple_couple_create_couple_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./couple/couple-create/couple-create.component */ "xLNH");
/* harmony import */ var _couple_couple_detail_couple_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./couple/couple-detail/couple-detail.component */ "iAIc");
/* harmony import */ var _couple_couple_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./couple/couple.component */ "1Blk");
/* harmony import */ var _owner_owner_create_owner_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./owner/owner-create/owner-create.component */ "MiB7");
/* harmony import */ var _owner_owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./owner/owner-detail/owner-detail.component */ "HjzR");
/* harmony import */ var _owner_owner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./owner/owner.component */ "AchS");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");

















const routes = [
    // BIRD
    { path: 'birds', component: _bird_bird_component__WEBPACK_IMPORTED_MODULE_4__["BirdComponent"] },
    { path: 'birds/create', component: _bird_bird_create_bird_create_component__WEBPACK_IMPORTED_MODULE_2__["BirdCreateComponent"] },
    { path: 'birds/detail/:id', component: _bird_bird_detail_bird_detail_component__WEBPACK_IMPORTED_MODULE_3__["BirdDetailComponent"] },
    // OWNER
    { path: 'owners', component: _owner_owner_component__WEBPACK_IMPORTED_MODULE_13__["OwnerComponent"] },
    { path: 'owners/create', component: _owner_owner_create_owner_create_component__WEBPACK_IMPORTED_MODULE_11__["OwnerCreateComponent"] },
    { path: 'owners/detail/:id', component: _owner_owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_12__["OwnerDetailComponent"] },
    // COUPLE
    { path: 'couples', component: _couple_couple_component__WEBPACK_IMPORTED_MODULE_10__["CoupleComponent"] },
    { path: 'couples/create', component: _couple_couple_create_couple_create_component__WEBPACK_IMPORTED_MODULE_8__["CoupleCreateComponent"] },
    { path: 'couples/detail/:id', component: _couple_couple_detail_couple_detail_component__WEBPACK_IMPORTED_MODULE_9__["CoupleDetailComponent"] },
    // BREEDER
    { path: 'breeders', component: _breeder_breeder_component__WEBPACK_IMPORTED_MODULE_7__["BreederComponent"] },
    { path: 'breeders/create', component: _breeder_breeder_create_breeder_create_component__WEBPACK_IMPORTED_MODULE_5__["BreederCreateComponent"] },
    { path: 'breeders/detail/:id', component: _breeder_breeder_detail_breeder_detail_component__WEBPACK_IMPORTED_MODULE_6__["BreederDetailComponent"] },
    // PAGE NOT FOUND
    { path: 'signout', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"] },
    // OTHER  
    { path: '', redirectTo: 'birds', pathMatch: 'full' },
    { path: '**', redirectTo: 'birds', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vmi+":
/*!***********************************************************!*\
  !*** ./src/app/store/entities/couple/couple.selectors.ts ***!
  \***********************************************************/
/*! exports provided: selectCoupleState, selectLoadingAll, selectLoadingDetail, selectLoadingModal, selectPagination, selectCouples, selectCouple, selectCoupleBirdEgg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCoupleState", function() { return selectCoupleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingAll", function() { return selectLoadingAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingDetail", function() { return selectLoadingDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingModal", function() { return selectLoadingModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPagination", function() { return selectPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCouples", function() { return selectCouples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCouple", function() { return selectCouple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCoupleBirdEgg", function() { return selectCoupleBirdEgg; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store.config */ "ogCa");


const selectCoupleState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_store_config__WEBPACK_IMPORTED_MODULE_1__["selectFeature"], (state) => state.couple);
const selectLoadingAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCoupleState, (state) => state.loadingAll);
const selectLoadingDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCoupleState, (state) => state.loadingDetail);
const selectLoadingModal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCoupleState, (state) => state.loadingModal);
const selectPagination = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCoupleState, (state) => state.pagination);
const selectCouples = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCoupleState, (state) => state.couples);
const selectCouple = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCoupleState, (state) => state.coupleDetail);
const selectCoupleBirdEgg = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCoupleState, (state) => state.birdEggDetail);


/***/ }),

/***/ "vzwB":
/*!***********************************************************!*\
  !*** ./src/app/store/entities/bird/bird.initial-state.ts ***!
  \***********************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    birds: null,
    birdDetail: null,
    birdShowDetail: null,
    pagination: null,
    isFormValid: true,
    loadingAll: false,
    loadingDetail: false,
    loadingModal: false,
    errors: null
};


/***/ }),

/***/ "xLNH":
/*!*****************************************************************!*\
  !*** ./src/app/couple/couple-create/couple-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: CoupleCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupleCreateComponent", function() { return CoupleCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/entities/couple/couple.facade */ "j9ud");
/* harmony import */ var src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/entities/bird/bird.facade */ "NLBs");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "jIHw");
















const _c0 = function () { return { "width": "100%" }; };
function CoupleCreateComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Koppel aanmaken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Koppel naam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gestart op");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p-calendar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Kotnummer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Vader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Moeder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "p-dropdown", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Omschrijving");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoupleCreateComponent_form_6_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoupleCreateComponent_form_6_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.coupleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.maleBirds)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.femaleBirds)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.coupleForm.valid);
} }
class CoupleCreateComponent {
    constructor(route, router, fb, coupleFacade, birdFacade, toastrService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.coupleFacade = coupleFacade;
        this.birdFacade = birdFacade;
        this.toastrService = toastrService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.birds$ = this.birdFacade.getBirds();
        this.birdPagination$ = this.birdFacade.getPagination();
        this.maleBirds = [];
        this.femaleBirds = [];
    }
    ngOnInit() {
        this.coupleForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            startedAt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fatherId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            motherId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cageNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['']
        });
        const request = {
            page: 1,
            pageSize: 10,
            searchValue: '',
            gender: 'ALL',
            typeOfBird: '0',
            year: 'ALL'
        };
        this.birdFacade.getAllBirdsRequest(request);
        this.handleBirdsList();
        // handle success and errors
        this.handleSuccesses();
        this.handleErrors();
    }
    onSubmit() {
        const request = {
            name: this.coupleForm.get('name').value,
            startedAt: this.coupleForm.get('startedAt').value,
            fatherId: parseInt(this.coupleForm.get('fatherId').value),
            motherId: parseInt(this.coupleForm.get('motherId').value),
            cageNumber: this.coupleForm.get('cageNumber').value,
            description: this.coupleForm.get('description').value,
        };
        this.coupleFacade.createCouple(request);
    }
    handleSuccesses() {
        // go to detail after success hits
        // create couple success has coupleResponseModel!
        this.coupleFacade.onCreateCoupleSuccess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe((result) => {
            this.toastrService.success('Koppel aangemaakt!', 'Gelukt', {
                timeOut: 6000,
            });
            const model = result.response;
            this.router.navigate([`couples/detail/${model.id}`]);
        });
    }
    handleErrors() {
        this.coupleFacade.onCreateCoupleError().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.toastrService.error('Oeps er liep iets mis tijdens het aanmaken van dit koppel!', 'Error', {
                timeOut: 6000,
            });
        });
    }
    handleBirdsList() {
        this.birds$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe((birds) => {
            if (birds !== null && birds !== undefined) {
                // clear before calculation
                this.maleBirds = [];
                this.femaleBirds = [];
                // get seperate list of birds that are NOT dead!
                const males = birds.filter(b => b.gender === "MALE" && !b.isDead);
                const females = birds.filter(b => b.gender === "FEMALE" && !b.isDead);
                males.forEach((bird) => {
                    const existingBird = this.maleBirds.find(b => b.id === bird.id);
                    if (existingBird === undefined) {
                        this.maleBirds.push({ type: bird.ringNumber, value: bird.id });
                    }
                });
                females.forEach((bird) => {
                    const existingBird = this.femaleBirds.find(b => b.id === bird.id);
                    if (existingBird === undefined) {
                        this.femaleBirds.push({ type: bird.ringNumber, value: bird.id });
                    }
                });
            }
        });
    }
    goBack() {
        this.router.navigate(['../..'], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
CoupleCreateComponent.ɵfac = function CoupleCreateComponent_Factory(t) { return new (t || CoupleCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_5__["CoupleFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_6__["BirdFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
CoupleCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoupleCreateComponent, selectors: [["c-couple-create"]], decls: 8, vars: 3, consts: [[1, "page"], [1, "page-wrapper"], [1, "page-header"], [1, "page-body"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "grid"], [1, "p-d-flex", "p-flex-column", "p-col-3"], ["for", "name"], ["pInputText", "", "type", "text", "formControlName", "name", "id", "name", 1, "form-control"], [1, "p-d-flex", "p-jc-between"], ["for", "startedAt"], ["formControlName", "startedAt", "dateFormat", "dd-mm-yy", "inputId", "dateformat"], ["for", "cageNumber"], ["pInputText", "", "type", "text", "formControlName", "cageNumber", "id", "cageNumber", 1, "form-control"], [1, "p-d-flex", "p-jc-between", "couple-parents"], [1, "p-d-flex", "p-flex-column", "p-col-4"], ["for", "fatherId"], ["filterBy", "type", "autoWidth", "false", "placeholder", "Selecteer een man...", "optionLabel", "type", "optionValue", "value", "formControlName", "fatherId", 3, "options", "filter"], [1, "p-d-flex", "p-ai-center", "p-jc-center", "p-col-4"], [1, "pi", "pi-minus", "p-mt-4"], ["for", "motherId"], ["filterBy", "type", "autoWidth", "false", "placeholder", "Selecteer een pop...", "optionLabel", "type", "optionValue", "value", "formControlName", "motherId", 3, "options", "filter"], ["for", "description"], ["pInputTextarea", "", "type", "text", "formControlName", "description", "id", "description", 1, "form-control"], [1, "form-footer"], ["pButton", "", "type", "button", "label", "Terug", 1, "p-button-outlined", 3, "click"], ["pButton", "", "type", "submit", "label", "Opslaan", 3, "disabled", "click"]], template: function CoupleCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Couple management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CoupleCreateComponent_form_6_Template, 35, 15, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.coupleForm && ctx.birds$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["Calendar"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["Dropdown"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__["InputTextarea"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --primary-color: #e94e0f;\n  --primary-light-color: #f2642c;\n  --primary-background-color: #fef6f3;\n  --accent-color: #870b58;\n  --accent-dark-color: #5e083d;\n  --accent-light-color: #fbd0eb;\n  --yellow-brand-color: #f8ad07;\n  --accent-20-color: #e1c2d5;\n  --info-color: #415fca;\n  --info-light-color: hsl(227, 56%, 52%, 0.1);\n  --success-color: #21bc5f;\n  --success-light-color: hsla(144, 70%, 43%, 0.1);\n  --warning-color: #ffc700;\n  --warning-light-color: #FDEAC1;\n  --danger-color: #ff005c;\n  --danger-light-color: hsla(338, 100%, 50%, 0.8);\n  --danger-lighter-color: hsla(338, 100%, 90%, 0.8);\n  --brand-red-color: #E4003A;\n  --brand-red-20-color: #F8BFCD;\n  --brand-orange-color: #E94E0F;\n  --brand-orange-20-color: #F9D2C3;\n  --brand-yellow-color: #F8AD07;\n  --brand-yellow-20-color: #FDEAC1;\n  --brand-purple-color: #870B58;\n  --brand-purple-20-color: #E1C2D5;\n  --tuna-gray-color: #303642;\n  --tuna-gray-80-color: #555d71;\n  --tuna-gray-60-color: #7f8594;\n  --tuna-gray-40-color: #aaaeb8;\n  --tuna-gray-20-color: #f6f6f6;\n  --slate-gray-color: #7783a0;\n  --slate-gray-80-color: #929bb3;\n  --slate-gray-60-color: #adb4c6;\n  --slate-gray-40-color: #c8cdd9;\n  --slate-gray-20-color: #e3e6ec;\n  --slate-gray-10-color: #f1f3f5;\n  --slate-gray-5-color: #f8fafc;\n  --white-color: #ffffff;\n  --black-color: #000000;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 71px);\n  overflow: auto;\n  background-color: var(--slate-gray-5-color);\n  background-image: url('background.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  width: 70vw;\n  margin: 0 auto;\n  background-color: rgba(255, 255, 255, 0.8);\n  margin-top: 32px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--slate-gray-20-color);\n  background-color: var(--tuna-gray-20-color);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.page-body[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n}\n\n.page-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n\n.couple-parents[_ngcontent-%COMP%] {\n  margin: 0 20rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR0aW5nc1xcX2NvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGNvdXBsZS1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFFQyx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUdBLDBCQUFBO0VBR0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsK0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGlEQUFBO0VBR0EsMEJBQUE7RUFDQSw2QkFBQTtFQUVBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFFQSw2QkFBQTtFQUNBLGdDQUFBO0VBRUEsNkJBQUE7RUFDQSxnQ0FBQTtFQUdBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUVBLHNCQUFBO0VBQ0Esc0JBQUE7QUNqQkQ7O0FBdENBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBeUNKOztBQXRDQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQXlDSjs7QUF0Q0E7RUFDSSxtREFBQTtFQUNBLDJDQUFBO0FBeUNKOztBQXZDSTtFQUNJLGFBQUE7QUF5Q1I7O0FBckNBO0VBQ0ksa0JBQUE7QUF3Q0o7O0FBdENJO0VBQ0ksb0JBQUE7QUF3Q1I7O0FBcENBO0VBQ0ksZUFBQTtBQXVDSiIsImZpbGUiOiJjb3VwbGUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGVsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ29sb3JzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjpyb290IHtcclxuXHQvLyBCcmFuZCBpZGVudGl0eSBjb2xvcnNcclxuXHQtLXByaW1hcnktY29sb3I6ICNlOTRlMGY7XHJcblx0LS1wcmltYXJ5LWxpZ2h0LWNvbG9yOiAjZjI2NDJjO1xyXG5cdC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmNmYzO1xyXG5cdC0tYWNjZW50LWNvbG9yOiAjODcwYjU4O1xyXG5cdC0tYWNjZW50LWRhcmstY29sb3I6ICM1ZTA4M2Q7XHJcblx0LS1hY2NlbnQtbGlnaHQtY29sb3I6ICNmYmQwZWI7XHJcblx0LS15ZWxsb3ctYnJhbmQtY29sb3I6ICNmOGFkMDc7XHJcblxyXG5cdC8vIENvbXBsZW1lbnRhcnkgY29sb3JzXHJcblx0LS1hY2NlbnQtMjAtY29sb3I6ICNlMWMyZDU7XHJcblxyXG5cdC8vIFN0YXRlc1xyXG5cdC0taW5mby1jb2xvcjogIzQxNWZjYTtcclxuXHQtLWluZm8tbGlnaHQtY29sb3I6IGhzbCgyMjcsIDU2JSwgNTIlLCAwLjEpO1xyXG5cdC0tc3VjY2Vzcy1jb2xvcjogIzIxYmM1ZjtcclxuXHQtLXN1Y2Nlc3MtbGlnaHQtY29sb3I6IGhzbGEoMTQ0LCA3MCUsIDQzJSwgMC4xKTtcclxuXHQtLXdhcm5pbmctY29sb3I6ICNmZmM3MDA7XHJcblx0LS13YXJuaW5nLWxpZ2h0LWNvbG9yOiAjRkRFQUMxO1xyXG5cdC0tZGFuZ2VyLWNvbG9yOiAjZmYwMDVjO1xyXG5cdC0tZGFuZ2VyLWxpZ2h0LWNvbG9yOiBoc2xhKDMzOCwgMTAwJSwgNTAlLCAwLjgpO1xyXG5cdC0tZGFuZ2VyLWxpZ2h0ZXItY29sb3I6IGhzbGEoMzM4LCAxMDAlLCA5MCUsIDAuOCk7XHJcblxyXG5cdC8vIEV4dHJhIGNvbG9yc1xyXG5cdC0tYnJhbmQtcmVkLWNvbG9yOiAjRTQwMDNBO1xyXG5cdC0tYnJhbmQtcmVkLTIwLWNvbG9yOiAjRjhCRkNEO1xyXG5cclxuXHQtLWJyYW5kLW9yYW5nZS1jb2xvcjogI0U5NEUwRjtcclxuXHQtLWJyYW5kLW9yYW5nZS0yMC1jb2xvcjogI0Y5RDJDMztcclxuXHJcblx0LS1icmFuZC15ZWxsb3ctY29sb3I6ICNGOEFEMDc7XHJcblx0LS1icmFuZC15ZWxsb3ctMjAtY29sb3I6ICNGREVBQzE7XHJcblxyXG5cdC0tYnJhbmQtcHVycGxlLWNvbG9yOiAjODcwQjU4O1xyXG5cdC0tYnJhbmQtcHVycGxlLTIwLWNvbG9yOiAjRTFDMkQ1O1xyXG5cclxuXHQvLyBHcmF5c2NhbGVcclxuXHQtLXR1bmEtZ3JheS1jb2xvcjogIzMwMzY0MjtcclxuXHQtLXR1bmEtZ3JheS04MC1jb2xvcjogIzU1NWQ3MTtcclxuXHQtLXR1bmEtZ3JheS02MC1jb2xvcjogIzdmODU5NDtcclxuXHQtLXR1bmEtZ3JheS00MC1jb2xvcjogI2FhYWViODtcclxuXHQtLXR1bmEtZ3JheS0yMC1jb2xvcjogI2Y2ZjZmNjtcclxuXHJcblx0LS1zbGF0ZS1ncmF5LWNvbG9yOiAjNzc4M2EwO1xyXG5cdC0tc2xhdGUtZ3JheS04MC1jb2xvcjogIzkyOWJiMztcclxuXHQtLXNsYXRlLWdyYXktNjAtY29sb3I6ICNhZGI0YzY7XHJcblx0LS1zbGF0ZS1ncmF5LTQwLWNvbG9yOiAjYzhjZGQ5O1xyXG5cdC0tc2xhdGUtZ3JheS0yMC1jb2xvcjogI2UzZTZlYztcclxuXHQtLXNsYXRlLWdyYXktMTAtY29sb3I6ICNmMWYzZjU7XHJcblx0LS1zbGF0ZS1ncmF5LTUtY29sb3I6ICNmOGZhZmM7XHJcblxyXG5cdC0td2hpdGUtY29sb3I6ICNmZmZmZmY7XHJcblx0LS1ibGFjay1jb2xvcjogIzAwMDAwMDtcclxufVxyXG4iLCI6cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogI2U5NGUwZjtcbiAgLS1wcmltYXJ5LWxpZ2h0LWNvbG9yOiAjZjI2NDJjO1xuICAtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZlZjZmMztcbiAgLS1hY2NlbnQtY29sb3I6ICM4NzBiNTg7XG4gIC0tYWNjZW50LWRhcmstY29sb3I6ICM1ZTA4M2Q7XG4gIC0tYWNjZW50LWxpZ2h0LWNvbG9yOiAjZmJkMGViO1xuICAtLXllbGxvdy1icmFuZC1jb2xvcjogI2Y4YWQwNztcbiAgLS1hY2NlbnQtMjAtY29sb3I6ICNlMWMyZDU7XG4gIC0taW5mby1jb2xvcjogIzQxNWZjYTtcbiAgLS1pbmZvLWxpZ2h0LWNvbG9yOiBoc2woMjI3LCA1NiUsIDUyJSwgMC4xKTtcbiAgLS1zdWNjZXNzLWNvbG9yOiAjMjFiYzVmO1xuICAtLXN1Y2Nlc3MtbGlnaHQtY29sb3I6IGhzbGEoMTQ0LCA3MCUsIDQzJSwgMC4xKTtcbiAgLS13YXJuaW5nLWNvbG9yOiAjZmZjNzAwO1xuICAtLXdhcm5pbmctbGlnaHQtY29sb3I6ICNGREVBQzE7XG4gIC0tZGFuZ2VyLWNvbG9yOiAjZmYwMDVjO1xuICAtLWRhbmdlci1saWdodC1jb2xvcjogaHNsYSgzMzgsIDEwMCUsIDUwJSwgMC44KTtcbiAgLS1kYW5nZXItbGlnaHRlci1jb2xvcjogaHNsYSgzMzgsIDEwMCUsIDkwJSwgMC44KTtcbiAgLS1icmFuZC1yZWQtY29sb3I6ICNFNDAwM0E7XG4gIC0tYnJhbmQtcmVkLTIwLWNvbG9yOiAjRjhCRkNEO1xuICAtLWJyYW5kLW9yYW5nZS1jb2xvcjogI0U5NEUwRjtcbiAgLS1icmFuZC1vcmFuZ2UtMjAtY29sb3I6ICNGOUQyQzM7XG4gIC0tYnJhbmQteWVsbG93LWNvbG9yOiAjRjhBRDA3O1xuICAtLWJyYW5kLXllbGxvdy0yMC1jb2xvcjogI0ZERUFDMTtcbiAgLS1icmFuZC1wdXJwbGUtY29sb3I6ICM4NzBCNTg7XG4gIC0tYnJhbmQtcHVycGxlLTIwLWNvbG9yOiAjRTFDMkQ1O1xuICAtLXR1bmEtZ3JheS1jb2xvcjogIzMwMzY0MjtcbiAgLS10dW5hLWdyYXktODAtY29sb3I6ICM1NTVkNzE7XG4gIC0tdHVuYS1ncmF5LTYwLWNvbG9yOiAjN2Y4NTk0O1xuICAtLXR1bmEtZ3JheS00MC1jb2xvcjogI2FhYWViODtcbiAgLS10dW5hLWdyYXktMjAtY29sb3I6ICNmNmY2ZjY7XG4gIC0tc2xhdGUtZ3JheS1jb2xvcjogIzc3ODNhMDtcbiAgLS1zbGF0ZS1ncmF5LTgwLWNvbG9yOiAjOTI5YmIzO1xuICAtLXNsYXRlLWdyYXktNjAtY29sb3I6ICNhZGI0YzY7XG4gIC0tc2xhdGUtZ3JheS00MC1jb2xvcjogI2M4Y2RkOTtcbiAgLS1zbGF0ZS1ncmF5LTIwLWNvbG9yOiAjZTNlNmVjO1xuICAtLXNsYXRlLWdyYXktMTAtY29sb3I6ICNmMWYzZjU7XG4gIC0tc2xhdGUtZ3JheS01LWNvbG9yOiAjZjhmYWZjO1xuICAtLXdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJsYWNrLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4ucGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MXB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlLWdyYXktNS1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnBhZ2Utd3JhcHBlciB7XG4gIHdpZHRoOiA3MHZ3O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2xhdGUtZ3JheS0yMC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmEtZ3JheS0yMC1jb2xvcik7XG59XG4ucGFnZS1oZWFkZXIgaDEge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ucGFnZS1ib2R5IHtcbiAgcGFkZGluZzogMzJweCAxNnB4O1xufVxuLnBhZ2UtYm9keSBoMiB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4uY291cGxlLXBhcmVudHMge1xuICBtYXJnaW46IDAgMjByZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoupleCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-couple-create',
                templateUrl: './couple-create.component.html',
                styleUrls: ['./couple-create.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_store_entities_couple_couple_facade__WEBPACK_IMPORTED_MODULE_5__["CoupleFacade"] }, { type: src_app_store_entities_bird_bird_facade__WEBPACK_IMPORTED_MODULE_6__["BirdFacade"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "xXuK":
/*!****************************************!*\
  !*** ./src/app/ui/components/index.ts ***!
  \****************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/loader/loader.component */ "nzoQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__["LoaderComponent"]; });




/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zmiW":
/*!*********************************************************!*\
  !*** ./src/app/store/entities/couple/couple.effects.ts ***!
  \*********************************************************/
/*! exports provided: CoupleEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupleEffects", function() { return CoupleEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _couple_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./couple.actions */ "n3CS");
/* harmony import */ var src_app_Services_couple_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/couple.service */ "HcEW");








class CoupleEffects {
    constructor(actions$, couplesService) {
        this.actions$ = actions$;
        this.couplesService = couplesService;
        // fetch couples
        this.getCouples$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["getCouples"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.couplesService.getAllCouples(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((couples) => _couple_actions__WEBPACK_IMPORTED_MODULE_4__["getCouplesSuccess"]({ couples: couples })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["getCouplesError"]({ error })))))));
        // fetch couple
        this.getCouple$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["getCouple"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ coupleId }) => this.couplesService.getCouple(coupleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((couple) => _couple_actions__WEBPACK_IMPORTED_MODULE_4__["getCoupleSuccess"]({ coupleDetail: couple })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["getCoupleError"]({ error })))))));
        // create couple
        this.createCouples$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["createCouple"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.couplesService.createCouple(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => _couple_actions__WEBPACK_IMPORTED_MODULE_4__["createCoupleSuccess"]({ response })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["createCoupleError"]({ error })))))));
        // update couple
        this.updateCouples$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["updateCouple"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.couplesService.updateCouple(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _couple_actions__WEBPACK_IMPORTED_MODULE_4__["updateCoupleSuccess"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["updateCoupleError"]({ error })))))));
        // create birdegg
        this.createBirdEgg$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["createBirdEgg"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.couplesService.createBirdEgg(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _couple_actions__WEBPACK_IMPORTED_MODULE_4__["createBirdEggSuccess"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["createBirdEggError"]({ error })))))));
        // update birdegg
        this.updateBirdEgg$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["updateBirdEgg"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.couplesService.updateBirdEgg(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _couple_actions__WEBPACK_IMPORTED_MODULE_4__["updateBirdEggSuccess"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["updateBirdEggError"]({ error })))))));
        // get birdEgg
        this.getCoupleBirdEgg$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["getBirdEgg"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(({ request }) => this.couplesService.getCoupleBirdEgg(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => _couple_actions__WEBPACK_IMPORTED_MODULE_4__["getBirdEggSuccess"]({ response })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_couple_actions__WEBPACK_IMPORTED_MODULE_4__["getBirdEggError"]({ error })))))));
    }
}
CoupleEffects.ɵfac = function CoupleEffects_Factory(t) { return new (t || CoupleEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Services_couple_service__WEBPACK_IMPORTED_MODULE_5__["CoupleService"])); };
CoupleEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoupleEffects, factory: CoupleEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoupleEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_Services_couple_service__WEBPACK_IMPORTED_MODULE_5__["CoupleService"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map