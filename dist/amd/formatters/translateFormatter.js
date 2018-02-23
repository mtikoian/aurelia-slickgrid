define(["require", "exports", "aurelia-i18n"], function (require, exports, aurelia_i18n_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.translateFormatter = function (row, cell, value, columnDef, dataContext) {
        var params = columnDef.params || {};
        if (!params.i18n || !(params.i18n instanceof aurelia_i18n_1.I18N)) {
            throw new Error("The translate formatter requires the \"i18n\" to be provided as a column params.\n    For example: this.columnDefinitions = [{ id: title, field: title, formatter: Formatters.translate, params: { i18n: this.i18n }");
        }
        return value ? params.i18n.tr(value) : '';
    };
});
//# sourceMappingURL=translateFormatter.js.map