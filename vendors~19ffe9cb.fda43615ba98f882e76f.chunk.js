(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"aurelia-slickgrid/aurelia-slickgrid":function(i,t,e){"use strict";e.r(t),function(i){e.d(t,"AureliaSlickgridCustomElement",(function(){return f}));var n=e("+2Rf"),s=(e("W1Kk"),e("7TqN"),e("fXKB"),e("cKLe"),e("Oj9s"),e("aurelia-framework")),r=e("70NS"),o=e("aurelia-event-aggregator"),a=e("dbac"),d=e("Gc69"),c=e("v8Uj"),h=e("H9V8"),l=e("/CJ3"),p=e("Cff2"),u=e("wESz"),g=function(){return(g=Object.assign||function(i){for(var t,e=1,n=arguments.length;e<n;e++)for(var s in t=arguments[e])Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s]);return i}).apply(this,arguments)},v=function(i,t,e,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(i,t,e,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(t,e,o):s(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o},f=function(){function t(i,t,e,n,s,r,o,a,d,c,h,l,p,u,g,v,f){this.bindingEngine=i,this.container=t,this.elm=e,this.ea=n,this.excelExportService=s,this.exportService=r,this.extensionService=o,this.extensionUtility=a,this.filterService=d,this.gridEventService=c,this.gridService=h,this.gridStateService=l,this.groupingAndColspanService=p,this.paginationService=u,this.resizerService=g,this.sharedService=v,this.sortService=f,this._columnDefinitions=[],this._eventHandler=new Slick.EventHandler,this._hideHeaderRowAfterPageLoad=!1,this.isGridInitialized=!1,this.showPagination=!1,this.serviceList=[],this.subscriptions=[],this.columnDefinitions=[],this.serviceList=[r,o,d,c,h,l,p,u,g,f]}return Object.defineProperty(t.prototype,"eventHandler",{get:function(){return this._eventHandler},enumerable:!0,configurable:!0}),t.prototype.attached=function(){this.initialization(),this.isGridInitialized=!0},t.prototype.initialization=function(){if(this.dispatchCustomEvent("asg-on-before-grid-create"),this.ea.publish("onBeforeGridCreate",!0),this._dataset=this._dataset||this.dataset||[],this.gridOptions=this.mergeGridOptions(this.gridOptions),this.paginationOptions=this.gridOptions&&this.gridOptions.pagination,this.locales=this.gridOptions&&this.gridOptions.locales||a.a.locales,this.backendServiceApi=this.gridOptions&&this.gridOptions.backendServiceApi,this.createBackendApiInternalPostProcessCallback(this.gridOptions),this.customDataView||(this.gridOptions.draggableGrouping||this.gridOptions.enableGrouping?(this.extensionUtility.loadExtensionDynamically(c.d.groupItemMetaProvider),this.groupItemMetadataProvider=new Slick.Data.GroupItemMetadataProvider,this.sharedService.groupItemMetadataProvider=this.groupItemMetadataProvider,this.dataview=new Slick.Data.DataView({groupItemMetadataProvider:this.groupItemMetadataProvider})):this.dataview=new Slick.Data.DataView,this.ea.publish("onDataviewCreated",this.dataview),this.dispatchCustomEvent("asg-on-dataview-created",this.dataview)),this._columnDefinitions=this.swapInternalEditorToSlickGridFactoryEditor(this._columnDefinitions),this.sharedService.allColumns=this._columnDefinitions,this.sharedService.visibleColumns=this._columnDefinitions,this.extensionService.createExtensionsBeforeGridCreation(this._columnDefinitions,this.gridOptions),this.grid=new Slick.Grid("#"+this.gridId,this.customDataView||this.dataview,this._columnDefinitions,this.gridOptions),this.sharedService.dataView=this.dataview,this.sharedService.grid=this.grid,this.extensionService.bindDifferentExtensions(),this.bindDifferentHooks(this.grid,this.gridOptions,this.dataview),this.grid.init(),!this.customDataView&&this.dataview&&this.dataview.beginUpdate&&this.dataview.setItems&&this.dataview.endUpdate&&(this.dataview.beginUpdate(),this.dataview.setItems(this._dataset,this.gridOptions.datasetIdPropertyName),this.dataview.endUpdate(),this.gridOptions&&this.gridOptions.dataView&&this.gridOptions.dataView.hasOwnProperty("syncGridSelection"))){var i=this.gridOptions.dataView.syncGridSelection;"boolean"==typeof i?this.dataview.syncGridSelection(this.grid,this.gridOptions.dataView.syncGridSelection):"object"==typeof i&&this.dataview.syncGridSelection(this.grid,i.preserveHidden,i.preserveHiddenOnSelectionChange)}this._hideHeaderRowAfterPageLoad&&this.showHeaderRow(!1),this.ea.publish("onGridCreated",this.grid),this.dispatchCustomEvent("asg-on-grid-created",this.grid),this.customDataView||this.executeAfterDataviewCreated(this.grid,this.gridOptions,this.dataview),this.bindResizeHook(this.grid,this.gridOptions),this.gridOptions.createPreHeaderPanel&&!this.gridOptions.enableDraggableGrouping&&this.groupingAndColspanService.init(this.grid,this.dataview),this.gridService.init(this.grid,this.dataview),this.gridOptions.enableTranslate&&this.extensionService.translateColumnHeaders(),this.gridOptions.enableExport&&this.exportService.init(this.grid,this.dataview),this.gridOptions.enableExcelExport&&this.excelExportService.init(this.grid,this.dataview),this.gridOptions&&this.gridOptions.backendServiceApi&&this.bindBackendCallbackFunctions(this.gridOptions),this.gridStateService.init(this.grid);var t={dataView:this.dataview,slickGrid:this.grid,dispose:this.dispose.bind(this),backendService:this.gridOptions&&this.gridOptions.backendServiceApi&&this.gridOptions.backendServiceApi.service,excelExportService:this.excelExportService,exportService:this.exportService,filterService:this.filterService,gridEventService:this.gridEventService,gridStateService:this.gridStateService,gridService:this.gridService,groupingService:this.groupingAndColspanService,extensionService:this.extensionService,paginationService:this.paginationService,pluginService:this.extensionService,resizerService:this.resizerService,sortService:this.sortService};this.dispatchCustomEvent("asg-on-aurelia-grid-created",t)},t.prototype.detached=function(i){void 0===i&&(i=!1),this.ea.publish("onBeforeGridDestroy",this.grid),this.dispatchCustomEvent("asg-on-before-grid-destroy",this.grid),this.dataview=void 0,this._eventHandler.unsubscribeAll(),this.grid.destroy(),i&&this.destroyGridContainerElm(),this.ea.publish("onAfterGridDestroyed",!0),this.dispatchCustomEvent("asg-on-after-grid-destroyed",this.grid),this.serviceList.forEach((function(i){i&&i.dispose&&i.dispose()})),this.serviceList=[],this.subscriptions=Object(h.v)(this.subscriptions)},t.prototype.destroyGridContainerElm=function(){var i=this.gridOptions&&this.gridOptions.gridContainerId||"grid1";n(i).empty()},t.prototype.dispose=function(i){void 0===i&&(i=!1),this.detached(i)},t.prototype.bind=function(){if(this._fixedHeight=this.gridHeight?+this.gridHeight:null,this._fixedWidth=this.gridWidth?+this.gridWidth:null,this.gridOptions=g(g({},d.a),this.gridOptions),this._columnDefinitions=this.columnDefinitions,!this._fixedHeight&&!this.gridOptions.enableAutoResize)throw new Error('[Aurelia-Slickgrid] requires a "grid-height" or the "enableAutoResize" grid option to be enabled.\n        Without that the grid will seem empty while in fact it just does not have any height define.');this.subscriptions.push(this.bindingEngine.collectionObserver(this.columnDefinitions).subscribe(this.columnDefinitionsChanged.bind(this)))},t.prototype.columnDefinitionsChanged=function(){this._columnDefinitions=this.columnDefinitions,this.isGridInitialized&&this.updateColumnDefinitionsList(this.columnDefinitions)},t.prototype.commitEdit=function(i){var t=this;if(this.grid.getOptions().autoCommitEdit){var e=this.grid.getActiveCellNode();setTimeout((function(){e&&e.contains(i)&&t.grid.getEditorLock().isActive()&&t.grid.getEditorLock().commitCurrentEdit()}))}},t.prototype.datasetChanged=function(i,t){this._dataset=i,this.refreshGridData(i),this.gridOptions.autoFitColumnsOnFirstLoad&&(!t||t.length<1)&&this.grid.autosizeColumns()},t.prototype.createBackendApiInternalPostProcessCallback=function(i){var t=this,e=i&&i.backendServiceApi;if(e&&e.service){var n=e.service;(n instanceof h.g||"function"==typeof n.getDatasetName)&&(e.internalPostProcess=function(i){var s=e&&n&&"function"==typeof n.getDatasetName?n.getDatasetName():"";i&&i.data&&i.data[s]?(t._dataset=i.data[s].nodes,t.refreshGridData(t._dataset,i.data[s].totalCount)):t._dataset=[]})}},t.prototype.bindDifferentHooks=function(i,t,e){var n=this;if(this.subscriptions.push(this.ea.subscribe("i18n:locale:changed",(function(){t.enableTranslate&&(n.extensionService.translateColumnHeaders(),n.extensionService.translateColumnPicker(),n.extensionService.translateGridMenu(),n.extensionService.translateHeaderMenu())}))),t.presets&&Array.isArray(t.presets.columns)&&t.presets.columns.length>0){var s=this.gridStateService.getAssociatedGridColumns(i,t.presets.columns);if(s&&Array.isArray(s)&&s.length>0){if(t.enableCheckboxSelector){var o=Array.isArray(this._columnDefinitions)&&this._columnDefinitions.length>0?this._columnDefinitions[0]:null;o&&"_checkbox_selector"===o.id&&"_checkbox_selector"!==s[0].id&&s.unshift(o)}i.setColumns(s)}}if(t.enableSorting&&!this.customDataView&&(t.backendServiceApi?this.sortService.bindBackendOnSort(i,e):this.sortService.bindLocalOnSort(i,e)),t.enableFiltering&&!this.customDataView&&(this.filterService.init(i),t.presets&&Array.isArray(t.presets.filters)&&t.presets.filters.length>0&&this.filterService.populateColumnFilterSearchTermPresets(t.presets.filters),t.backendServiceApi?this.filterService.bindBackendOnFilter(i,this.dataview):this.filterService.bindLocalOnFilter(i,this.dataview)),t.backendServiceApi){var a=t.backendServiceApi;a&&a.service&&a.service.init&&a.service.init(a.options,t.pagination,this.grid)}var d=function(t){i.hasOwnProperty(t)&&t.startsWith("on")&&c._eventHandler.subscribe(i[t],(function(i,e){return n.dispatchCustomEvent("sg-"+Object(h.R)(t),{eventData:i,args:e})}))},c=this;for(var l in i)d(l);var p=function(i){e.hasOwnProperty(i)&&i.startsWith("on")&&u._eventHandler.subscribe(e[i],(function(t,e){return n.dispatchCustomEvent("sg-"+Object(h.R)(i),{eventData:t,args:e})}))},u=this;for(var l in e)p(l);this.subscriptions.push(this.ea.subscribe("gridStateService:changed",(function(i){n.elm.dispatchEvent(r.b.createCustomEvent("asg-on-grid-state-changed",{bubbles:!0,detail:i}))}))),this.gridEventService.bindOnCellChange(i,e),this.gridEventService.bindOnClick(i,e),e&&i&&(this._eventHandler.subscribe(e.onRowCountChanged,(function(){return i.invalidate()})),t&&t.enableFiltering&&!t.enableRowDetailView&&this._eventHandler.subscribe(e.onRowsChanged,(function(t,e){e&&e.rows&&Array.isArray(e.rows)&&(e.rows.forEach((function(t){return i.updateRow(t)})),i.render())}))),t&&t.colspanCallback&&e&&e.getItem&&e.getItemMetadata&&(e.getItemMetadata=function(i){var n=null;return t.colspanCallback&&t.colspanCallback&&(n=t.colspanCallback(e.getItem(i))),n})},t.prototype.bindBackendCallbackFunctions=function(t){var e=this,n=t.backendServiceApi,s=n&&n.service,r=s&&s.options||{},o=!!r&&(!r||!r.hasOwnProperty("executeProcessCommandOnInit")||r.executeProcessCommandOnInit);if(s){if(t&&t.presets){if(s.updateFilters&&Array.isArray(t.presets.filters)&&t.presets.filters.length>0&&s.updateFilters(t.presets.filters,!0),s.updateSorters&&Array.isArray(t.presets.sorters)&&t.presets.sorters.length>0&&s.updateSorters(void 0,t.presets.sorters),s.updatePagination&&t.presets.pagination){var a=t.presets.pagination,d=a.pageNumber,c=a.pageSize;s.updatePagination(d,c)}}else{var h=this.filterService.getColumnFilters();h&&s.updateFilters&&s.updateFilters(h,!1)}if(n&&s&&(n.onInit||o)){var p="function"==typeof s.buildQuery?s.buildQuery():"",u=o?n.process&&n.process(p)||null:n.onInit&&n.onInit(p)||null;setTimeout((function(){var t=new Date;if(n.preProcess&&n.preProcess(),u instanceof i&&u.then){var s=e.gridOptions&&e.gridOptions.pagination&&e.gridOptions.pagination.totalItems||0;u.then((function(i){return Object(l.b)(t,i,n,s)})).catch((function(i){return Object(l.c)(i,n)}))}}))}}},t.prototype.bindResizeHook=function(i,t){i&&t.autoFitColumnsOnFirstLoad&&t.enableAutoSizeColumns&&"function"==typeof i.autosizeColumns&&(this.grid.autosizeColumns(),this.resizerService.compensateHorizontalScroll(this.grid,this.gridOptions)),this._fixedHeight||this._fixedWidth?this.resizerService.init(i,{height:this._fixedHeight,width:this._fixedWidth}):this.resizerService.init(i),i&&t&&t.enableAutoResize&&(this.resizerService.bindAutoResizeDataGrid(),t.autoFitColumnsOnFirstLoad&&t.enableAutoSizeColumns&&"function"==typeof i.autosizeColumns&&i.autosizeColumns())},t.prototype.executeAfterDataviewCreated=function(i,t,e){t.enableSorting&&t.presets&&Array.isArray(t.presets.sorters)&&t.presets.sorters.length>0&&this.sortService.loadLocalGridPresets(i,e)},t.prototype.mergeGridOptions=function(i){i.gridId=this.gridId,i.gridContainerId="slickGridContainer-"+this.gridId;var t=n.extend(!0,{},d.a,i);return t&&i&&i.backendServiceApi&&t.pagination&&i.pagination&&Array.isArray(i.pagination.pageSizes)&&i.pagination.pageSizes.length>0&&(t.pagination.pageSizes=i.pagination.pageSizes),this._hideHeaderRowAfterPageLoad=!1===t.showHeaderRow,t.enableFiltering&&!t.showHeaderRow&&(t.showHeaderRow=t.enableFiltering),t},t.prototype.paginationChanged=function(i){(this.gridOptions.enableRowSelection||this.gridOptions.enableCheckboxSelector)&&this.grid.setSelectedRows([]),this.ea.publish("gridStateService:changed",{change:{newValues:i,type:c.h.pagination},gridState:this.gridStateService.getCurrentGridState()})},t.prototype.refreshGridData=function(i,t){if(Array.isArray(i)&&this.grid&&this.dataview&&"function"==typeof this.dataview.setItems){if(this.dataview.setItems(i,this.gridOptions.datasetIdPropertyName),this.gridOptions.backendServiceApi||this.dataview.reSort(),i&&(this.grid.invalidate(),this.grid.render()),this.gridOptions&&this.gridOptions.backendServiceApi&&this.gridOptions.pagination){this.showPagination=!(!this.gridOptions.backendServiceApi||void 0!==this.gridOptions.enablePagination)||this.gridOptions.enablePagination||!1,this.gridOptions.presets&&this.gridOptions.presets.pagination&&this.gridOptions.pagination&&this.paginationOptions&&(this.paginationOptions.pageSize=this.gridOptions.presets.pagination.pageSize,this.paginationOptions.pageNumber=this.gridOptions.presets.pagination.pageNumber);var e=void 0!==t?t:this.gridOptions.pagination.totalItems||0;e!==this.totalItems&&(this.totalItems=e)}else this.totalItems=i.length;if(this.grid&&this.gridOptions.enableAutoResize){var n=this.gridOptions.autoResize&&this.gridOptions.autoResize.delay;this.resizerService.resizeGrid(n||10)}}},t.prototype.showHeaderRow=function(i){return void 0===i&&(i=!0),this.grid.setHeaderRowVisibility(i),i},t.prototype.updateColumnDefinitionsList=function(i){i&&(i=this.swapInternalEditorToSlickGridFactoryEditor(i),this.gridOptions.enableTranslate?this.extensionService.translateColumnHeaders(!1,i):this.extensionService.renderColumnHeaders(i),this.gridOptions&&this.gridOptions.enableAutoSizeColumns&&this.grid.autosizeColumns())},t.prototype.dispatchCustomEvent=function(i,t,e,n){void 0===e&&(e=!0),void 0===n&&(n=!0);var s={bubbles:e,cancelable:n};return t&&(s.detail=t),this.elm.dispatchEvent(r.b.createCustomEvent(i,s))},t.prototype.loadEditorCollectionAsync=function(i){var t=this,e=i&&i.editor&&i.editor.collectionAsync;return e&&e.then((function(e){if(Array.isArray(e))t.updateEditorCollection(i,e);else if(e instanceof Response&&"function"==typeof e.json){if(e.bodyUsed)throw new Error("[Aurelia-SlickGrid] The response body passed to collectionAsync was already read. Either pass the dataset from the Response or clone the response first using response.clone()");e.json().then((function(e){return t.updateEditorCollection(i,e)}))}else e&&e.content&&t.updateEditorCollection(i,e.content)})),[]},t.prototype.swapInternalEditorToSlickGridFactoryEditor=function(i){var t=this;return i.map((function(i){return i.editor&&i.editor.collectionAsync&&t.loadEditorCollectionAsync(i),g(g({},i),{editor:i.editor&&s.d.of(i.editor.model).get(t.container),internalColumnEditor:g({},i.editor)})}))},t.prototype.updateEditorCollection=function(i,t){i.editor.collection=t;var e=this.grid.getColumns();Array.isArray(e)&&(e.find((function(t){return t.id===i.id})).internalColumnEditor=i.editor)},v([Object(s.j)({defaultBindingMode:s.k.twoWay})],t.prototype,"columnDefinitions",void 0),v([Object(s.j)({defaultBindingMode:s.k.twoWay})],t.prototype,"element",void 0),v([Object(s.j)({defaultBindingMode:s.k.twoWay})],t.prototype,"dataview",void 0),v([Object(s.j)({defaultBindingMode:s.k.twoWay})],t.prototype,"grid",void 0),v([Object(s.j)({defaultBindingMode:s.k.twoWay})],t.prototype,"paginationOptions",void 0),v([Object(s.j)({defaultBindingMode:s.k.twoWay})],t.prototype,"totalItems",void 0),v([Object(s.j)()],t.prototype,"customDataView",void 0),v([Object(s.j)()],t.prototype,"dataset",void 0),v([Object(s.j)()],t.prototype,"gridId",void 0),v([Object(s.j)()],t.prototype,"gridOptions",void 0),v([Object(s.j)()],t.prototype,"gridHeight",void 0),v([Object(s.j)()],t.prototype,"gridWidth",void 0),v([Object(s.j)()],t.prototype,"pickerOptions",void 0),t=v([Object(s.m)(s.b,s.c,Element,o.a,h.c,h.d,h.e,p.a,h.f,h.h,h.j,h.k,h.l,h.n,h.o,u.a,h.q)],t)}()}.call(this,e("B/eG").default)},"aurelia-slickgrid/aurelia-slickgrid.html":function(i,t){i.exports='<template>\r\n  <div id="slickGridContainer-${gridId}" class="gridPane" css="width: ${gridWidth}px">\r\n    <div id.bind="gridId" class="slickgrid-container" style="width: 100%" css="height: ${gridHeight}px"\r\n      focusout.delegate="commitEdit($event.target)">\r\n    </div>\r\n\r\n    <slick-pagination id="slickPagingContainer-${gridId}" if.bind="showPagination"\r\n      asg-on-pagination-changed.delegate="paginationChanged($event.detail)" dataview.bind="dataview" grid.bind="grid"\r\n      enable-translate.bind="gridOptions.enableTranslate" options.bind="paginationOptions" locales.bind="locales"\r\n      total-items.bind="totalItems" backend-service-api.bind="backendServiceApi">\r\n    </slick-pagination>\r\n  </div>\r\n</template>\r\n'},dbac:function(i,t,e){"use strict";e.d(t,"a",(function(){return n}));var n=function(){function i(){}return i.locales={TEXT_ALL_SELECTED:"All Selected",TEXT_CANCEL:"Cancel",TEXT_CLEAR_ALL_FILTERS:"Clear All Filters",TEXT_CLEAR_ALL_SORTING:"Clear All Sorting",TEXT_CONTAINS:"Contains",TEXT_COLUMNS:"Columns",TEXT_COMMANDS:"Commands",TEXT_EQUALS:"Equals",TEXT_ENDS_WITH:"Ends With",TEXT_EXPORT_IN_CSV_FORMAT:"Export in CSV format",TEXT_EXPORT_IN_TEXT_FORMAT:"Export in Text format (Tab delimited)",TEXT_EXPORT_TO_EXCEL:"Export to Excel",TEXT_FORCE_FIT_COLUMNS:"Force fit columns",TEXT_GROUP_BY:"Group By",TEXT_HIDE_COLUMN:"Hide Column",TEXT_ITEMS:"items",TEXT_ITEMS_PER_PAGE:"items per page",TEXT_OF:"of",TEXT_OK:"OK",TEXT_PAGE:"Page",TEXT_REFRESH_DATASET:"Refresh Dataset",TEXT_REMOVE_FILTER:"Remove Filter",TEXT_REMOVE_SORT:"Remove Sort",TEXT_SAVE:"Save",TEXT_SELECT_ALL:"Select All",TEXT_SYNCHRONOUS_RESIZE:"Synchronous resize",TEXT_SORT_ASCENDING:"Sort Ascending",TEXT_SORT_DESCENDING:"Sort Descending",TEXT_STARTS_WITH:"Starts With",TEXT_TOGGLE_FILTER_ROW:"Toggle Filter Row",TEXT_TOGGLE_PRE_HEADER_ROW:"Toggle Pre-Header Row",TEXT_X_OF_Y_SELECTED:"# of % selected"},i.VALIDATION_REQUIRED_FIELD="Field is required",i.VALIDATION_EDITOR_VALID_NUMBER="Please enter a valid number",i.VALIDATION_EDITOR_VALID_INTEGER="Please enter a valid integer number",i.VALIDATION_EDITOR_INTEGER_BETWEEN="Please enter a valid integer number between {{minValue}} and {{maxValue}}",i.VALIDATION_EDITOR_INTEGER_MAX="Please enter a valid integer number that is lower than {{maxValue}}",i.VALIDATION_EDITOR_INTEGER_MIN="Please enter a valid integer number that is greater than {{minValue}}",i.VALIDATION_EDITOR_NUMBER_BETWEEN="Please enter a valid number between {{minValue}} and {{maxValue}}",i.VALIDATION_EDITOR_NUMBER_MAX="Please enter a valid number that is lower than {{maxValue}}",i.VALIDATION_EDITOR_NUMBER_MIN="Please enter a valid number that is greater than {{minValue}}",i.VALIDATION_EDITOR_DECIMAL_BETWEEN="Please enter a valid number with a maximum of {{maxDecimal}} decimals",i}()},ncLB:function(i,t,e){"use strict";var n=function(){function i(i){this._count=0,this._field=i}return i.prototype.init=function(){this._count=0,this._nonNullCount=0,this._sum=0},i.prototype.accumulate=function(i){var t=i&&i.hasOwnProperty(this._field)?i[this._field]:null;this._count++,null==t||""===t||isNaN(t)||(this._nonNullCount++,this._sum+=parseFloat(t))},i.prototype.storeResult=function(i){i&&void 0!==i.avg||(i.avg={}),0!==this._nonNullCount&&(i.avg[this._field]=this._sum/this._nonNullCount)},i}(),s=function(){function i(i){this._field=i}return i.prototype.init=function(){this._min=null},i.prototype.accumulate=function(i){var t=i&&i.hasOwnProperty(this._field)?i[this._field]:null;null==t||""===t||isNaN(t)||(null==this._min||t<this._min)&&(this._min=parseFloat(t))},i.prototype.storeResult=function(i){i&&void 0!==i.min||(i.min={}),i.min[this._field]=this._min},i}(),r=function(){function i(i){this._field=i}return i.prototype.init=function(){this._max=null},i.prototype.accumulate=function(i){var t=i&&i.hasOwnProperty(this._field)?i[this._field]:null;null==t||""===t||isNaN(t)||(null==this._max||t>this._max)&&(this._max=parseFloat(t))},i.prototype.storeResult=function(i){i&&void 0!==i.max||(i.max={}),i.max[this._field]=this._max},i}(),o=function(){function i(i){this._sum=0,this._field=i}return i.prototype.init=function(){this._sum=0},i.prototype.accumulate=function(i){var t=i&&i.hasOwnProperty(this._field)?i[this._field]:null;null==t||""===t||isNaN(t)||(this._sum+=parseFloat(t))},i.prototype.storeResult=function(i){i&&void 0!==i.sum||(i.sum={}),i.sum[this._field]=this._sum},i}();e.d(t,"a",(function(){return a}));var a={Avg:n,Min:s,Max:r,Sum:o}}}]);
//# sourceMappingURL=vendors~19ffe9cb.fda43615ba98f882e76f.bundle.map