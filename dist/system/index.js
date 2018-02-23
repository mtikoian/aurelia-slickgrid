System.register(["aurelia-pal", "./aurelia-slickgrid", "./slick-pagination", "./slickgrid-config", "./models/caseType", "./models/filterType.enum", "./models/formElementType", "./models/fieldType.enum", "./editors/index", "./filter-conditions/index", "./filters/index", "./formatters/index", "./sorters/index", "./services/controlAndPlugin.service", "./services/filter.service", "./services/graphql.service", "./services/gridExtraUtils", "./services/gridExtra.service", "./services/gridEvent.service", "./services/grid-odata.service", "./services/resizer.service", "./services/sort.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia, callback) {
        aurelia.globalResources(aurelia_pal_1.PLATFORM.moduleName('./aurelia-slickgrid'));
        aurelia.globalResources(aurelia_pal_1.PLATFORM.moduleName('./slick-pagination'));
        var config = new slickgrid_config_1.SlickgridConfig();
        if (typeof callback === 'function') {
            callback(config);
        }
    }
    exports_1("configure", configure);
    var aurelia_pal_1, aurelia_slickgrid_1, slick_pagination_1, slickgrid_config_1, caseType_1, filterType_enum_1, formElementType_1, fieldType_enum_1, index_1, index_2, index_3, index_4, index_5, controlAndPlugin_service_1, filter_service_1, graphql_service_1, gridExtraUtils_1, gridExtra_service_1, gridEvent_service_1, grid_odata_service_1, resizer_service_1, sort_service_1;
    return {
        setters: [
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            },
            function (aurelia_slickgrid_1_1) {
                aurelia_slickgrid_1 = aurelia_slickgrid_1_1;
            },
            function (slick_pagination_1_1) {
                slick_pagination_1 = slick_pagination_1_1;
            },
            function (slickgrid_config_1_1) {
                slickgrid_config_1 = slickgrid_config_1_1;
            },
            function (caseType_1_1) {
                caseType_1 = caseType_1_1;
            },
            function (filterType_enum_1_1) {
                filterType_enum_1 = filterType_enum_1_1;
            },
            function (formElementType_1_1) {
                formElementType_1 = formElementType_1_1;
            },
            function (fieldType_enum_1_1) {
                fieldType_enum_1 = fieldType_enum_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            },
            function (controlAndPlugin_service_1_1) {
                controlAndPlugin_service_1 = controlAndPlugin_service_1_1;
            },
            function (filter_service_1_1) {
                filter_service_1 = filter_service_1_1;
            },
            function (graphql_service_1_1) {
                graphql_service_1 = graphql_service_1_1;
            },
            function (gridExtraUtils_1_1) {
                gridExtraUtils_1 = gridExtraUtils_1_1;
            },
            function (gridExtra_service_1_1) {
                gridExtra_service_1 = gridExtra_service_1_1;
            },
            function (gridEvent_service_1_1) {
                gridEvent_service_1 = gridEvent_service_1_1;
            },
            function (grid_odata_service_1_1) {
                grid_odata_service_1 = grid_odata_service_1_1;
            },
            function (resizer_service_1_1) {
                resizer_service_1 = resizer_service_1_1;
            },
            function (sort_service_1_1) {
                sort_service_1 = sort_service_1_1;
            }
        ],
        execute: function () {
            exports_1("AureliaSlickgridCustomElement", aurelia_slickgrid_1.AureliaSlickgridCustomElement);
            exports_1("SlickPaginationCustomElement", slick_pagination_1.SlickPaginationCustomElement);
            exports_1("SlickgridConfig", slickgrid_config_1.SlickgridConfig);
            exports_1("CaseType", caseType_1.CaseType);
            exports_1("FilterType", filterType_enum_1.FilterType);
            exports_1("FormElementType", formElementType_1.FormElementType);
            exports_1("FieldType", fieldType_enum_1.FieldType);
            exports_1("Editors", index_1.Editors);
            exports_1("FilterConditions", index_2.FilterConditions);
            exports_1("Filters", index_3.Filters);
            exports_1("Formatters", index_4.Formatters);
            exports_1("Sorters", index_5.Sorters);
            exports_1("ControlAndPluginService", controlAndPlugin_service_1.ControlAndPluginService);
            exports_1("FilterService", filter_service_1.FilterService);
            exports_1("GraphqlService", graphql_service_1.GraphqlService);
            exports_1("GridExtraUtils", gridExtraUtils_1.GridExtraUtils);
            exports_1("GridExtraService", gridExtra_service_1.GridExtraService);
            exports_1("GridEventService", gridEvent_service_1.GridEventService);
            exports_1("GridOdataService", grid_odata_service_1.GridOdataService);
            exports_1("ResizerService", resizer_service_1.ResizerService);
            exports_1("SortService", sort_service_1.SortService);
        }
    };
});
//# sourceMappingURL=index.js.map