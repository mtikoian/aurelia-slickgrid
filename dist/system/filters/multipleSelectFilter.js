System.register(["aurelia-i18n", "aurelia-framework", "./selectFilter", "../services/collection.service"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var aurelia_i18n_1, aurelia_framework_1, selectFilter_1, collection_service_1, MultipleSelectFilter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_i18n_1_1) {
                aurelia_i18n_1 = aurelia_i18n_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (selectFilter_1_1) {
                selectFilter_1 = selectFilter_1_1;
            },
            function (collection_service_1_1) {
                collection_service_1 = collection_service_1_1;
            }
        ],
        execute: function () {
            MultipleSelectFilter = /** @class */ (function (_super) {
                __extends(MultipleSelectFilter, _super);
                /**
                 * Initialize the Filter
                 */
                function MultipleSelectFilter(bindingEngine, collectionService, i18n) {
                    var _this = _super.call(this, bindingEngine, collectionService, i18n, true) || this;
                    _this.bindingEngine = bindingEngine;
                    _this.collectionService = collectionService;
                    _this.i18n = i18n;
                    return _this;
                }
                MultipleSelectFilter = __decorate([
                    aurelia_framework_1.inject(aurelia_framework_1.BindingEngine, collection_service_1.CollectionService, aurelia_i18n_1.I18N)
                ], MultipleSelectFilter);
                return MultipleSelectFilter;
            }(selectFilter_1.SelectFilter));
            exports_1("MultipleSelectFilter", MultipleSelectFilter);
        }
    };
});
//# sourceMappingURL=multipleSelectFilter.js.map