System.register(["./../services/utilities", "./filterUtilities", "moment"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var utilities_1, filterUtilities_1, moment, dateUtcFilterCondition;
    return {
        setters: [
            function (utilities_1_1) {
                utilities_1 = utilities_1_1;
            },
            function (filterUtilities_1_1) {
                filterUtilities_1 = filterUtilities_1_1;
            },
            function (moment_1) {
                moment = moment_1;
            }
        ],
        execute: function () {
            exports_1("dateUtcFilterCondition", dateUtcFilterCondition = function (options) {
                var searchTerm = (Array.isArray(options.searchTerms) && options.searchTerms[0] || '');
                var searchDateFormat = utilities_1.mapMomentDateFormatWithFieldType(options.filterSearchType || options.fieldType);
                if (searchTerm === null || searchTerm === '' || !moment(options.cellValue, moment.ISO_8601).isValid() || !moment(searchTerm, searchDateFormat, true).isValid()) {
                    return false;
                }
                var dateCell = moment(options.cellValue, moment.ISO_8601, true);
                var dateSearch = moment(searchTerm, searchDateFormat, true);
                // run the filter condition with date in Unix Timestamp format
                return filterUtilities_1.testFilterCondition(options.operator || '==', parseInt(dateCell.format('X'), 10), parseInt(dateSearch.format('X'), 10));
            });
        }
    };
});
//# sourceMappingURL=dateUtcFilterCondition.js.map