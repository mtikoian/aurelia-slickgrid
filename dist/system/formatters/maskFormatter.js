System.register([], function (exports_1, context_1) {
    "use strict";
    var maskFormatter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Takes a value display it according to a mask provided
             * e.: 1234567890 with mask "(000) 000-0000" will display "(123) 456-7890"
             */
            exports_1("maskFormatter", maskFormatter = function (row, cell, value, columnDef, dataContext) {
                var params = columnDef.params || {};
                var mask = params.mask;
                if (!mask) {
                    throw new Error("You must provide a \"mask\" via the generic \"params\" options (e.g.: { formatter: Formatters.mask, params: { mask: '000-000' }}");
                }
                if (value && mask) {
                    var i_1 = 0;
                    var v_1 = value.toString();
                    return mask.replace(/[09A]/g, function () { return v_1[i_1++] || ''; });
                }
                return '';
            });
        }
    };
});
//# sourceMappingURL=maskFormatter.js.map