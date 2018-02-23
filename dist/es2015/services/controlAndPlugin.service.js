var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject } from 'aurelia-framework';
import { I18N } from 'aurelia-i18n';
import { FilterService } from './filter.service';
import { GridExtraService } from './gridExtra.service';
import * as $ from 'jquery';
let ControlAndPluginService = class ControlAndPluginService {
    constructor(filterService, gridExtraService, i18n) {
        this.filterService = filterService;
        this.gridExtraService = gridExtraService;
        this.i18n = i18n;
    }
    /**
     * Attach/Create different Controls or Plugins after the Grid is created
     * @param {any} grid
     * @param {Column[]} columnDefinitions
     * @param {GridOptions} options
     * @param {any} dataView
     */
    attachDifferentControlOrPlugins(grid, columnDefinitions, options, dataView) {
        this._grid = grid;
        this._gridOptions = options;
        this._dataView = dataView;
        this._columnDefinitions = columnDefinitions;
        this.visibleColumns = columnDefinitions;
        if (options.enableColumnPicker) {
            this.columnPickerControl = this.createColumnPicker(grid, columnDefinitions, options);
        }
        if (options.enableGridMenu) {
            this.gridMenuControl = this.createGridMenu(grid, columnDefinitions, options);
        }
        if (options.enableAutoTooltip) {
            this.autoTooltipPlugin = new Slick.AutoTooltips(options.autoTooltipOptions || {});
            grid.registerPlugin(this.autoTooltipPlugin);
        }
        if (options.enableCheckboxSelector) {
            // when enabling the Checkbox Selector Plugin, we need to also watch onClick events to perform certain actions
            // the selector column has to be create BEFORE the grid (else it behaves oddly), but we can only watch grid events AFTER the grid is created
            grid.registerPlugin(this.checkboxSelectorPlugin);
            // this also requires the Row Selection Model to be registered as well
            if (!this.rowSelectionPlugin) {
                this.rowSelectionPlugin = new Slick.RowSelectionModel(options.rowSelectionOptions || {});
                grid.setSelectionModel(this.rowSelectionPlugin);
            }
        }
        if (options.enableRowSelection) {
            this.rowSelectionPlugin = new Slick.RowSelectionModel(options.rowSelectionOptions || {});
            grid.setSelectionModel(this.rowSelectionPlugin);
        }
        if (options.enableHeaderButton) {
            this.headerButtonsPlugin = new Slick.Plugins.HeaderButtons(options.headerButton || {});
            grid.registerPlugin(this.headerButtonsPlugin);
            this.headerButtonsPlugin.onCommand.subscribe((e, args) => {
                if (options.headerButton && typeof options.headerButton.onCommand === 'function') {
                    options.headerButton.onCommand(e, args);
                }
            });
        }
        if (options.enableHeaderMenu) {
            this.headerMenuPlugin = new Slick.Plugins.HeaderMenu(options.headerMenu || {});
            grid.registerPlugin(this.headerMenuPlugin);
            this.headerMenuPlugin.onCommand.subscribe((e, args) => {
                if (options.headerMenu && typeof options.headerMenu.onCommand === 'function') {
                    options.headerMenu.onCommand(e, args);
                }
            });
            this.headerMenuPlugin.onCommand.subscribe((e, args) => {
                if (options.headerMenu && typeof options.headerMenu.onBeforeMenuShow === 'function') {
                    options.headerMenu.onBeforeMenuShow(e, args);
                }
            });
        }
        if (options.registerPlugins !== undefined) {
            if (Array.isArray(options.registerPlugins)) {
                options.registerPlugins.forEach((plugin) => {
                    grid.registerPlugin(plugin);
                });
            }
            else {
                grid.registerPlugin(options.registerPlugins);
            }
        }
    }
    createColumnPicker(grid, columnDefinitions, options) {
        // localization support for the picker
        const forceFitTitle = options.enableTranslate ? this.i18n.tr('FORCE_FIT_COLUMNS') : 'Force fit columns';
        const syncResizeTitle = options.enableTranslate ? this.i18n.tr('SYNCHRONOUS_RESIZE') : 'Synchronous resize';
        options.columnPicker = options.columnPicker || {};
        options.columnPicker.forceFitTitle = options.columnPicker.forceFitTitle || forceFitTitle;
        options.columnPicker.syncResizeTitle = options.columnPicker.syncResizeTitle || syncResizeTitle;
        this.columnPickerControl = new Slick.Controls.ColumnPicker(columnDefinitions, grid, options);
    }
    /**
     * Create (or re-create) Grid Menu and expose all the available hooks that user can subscribe (onCommand, onMenuClose, ...)
     * @param grid
     * @param columnDefinitions
     * @param options
     */
    createGridMenu(grid, columnDefinitions, options) {
        options.gridMenu = Object.assign({}, this.getDefaultGridMenuOptions(), options.gridMenu);
        this.addGridMenuCustomCommands(grid, options);
        const gridMenuControl = new Slick.Controls.GridMenu(columnDefinitions, grid, options);
        if (grid && options.gridMenu) {
            gridMenuControl.onBeforeMenuShow.subscribe((e, args) => {
                if (options.gridMenu && typeof options.gridMenu.onBeforeMenuShow === 'function') {
                    options.gridMenu.onBeforeMenuShow(e, args);
                }
            });
            gridMenuControl.onCommand.subscribe((e, args) => {
                if (options.gridMenu && typeof options.gridMenu.onCommand === 'function') {
                    options.gridMenu.onCommand(e, args);
                }
            });
            gridMenuControl.onMenuClose.subscribe((e, args) => {
                if (options.gridMenu && typeof options.gridMenu.onMenuClose === 'function') {
                    options.gridMenu.onMenuClose(e, args);
                }
                // we also want to resize the columns if the user decided to hide certain column(s)
                if (grid && typeof grid.autosizeColumns === 'function') {
                    // make sure that the grid still exist (by looking if the Grid UID is found in the DOM tree)
                    const gridUid = grid.getUID();
                    if (gridUid && $(`.${gridUid}`).length > 0) {
                        grid.autosizeColumns();
                    }
                }
            });
        }
        return gridMenuControl;
    }
    hideColumn(column) {
        if (this._grid && this.visibleColumns) {
            const columnIndex = this._grid.getColumnIndex(column.id);
            this.visibleColumns = this.removeColumnByIndex(this.visibleColumns, columnIndex);
            this._grid.setColumns(this.visibleColumns);
        }
    }
    removeColumnByIndex(array, index) {
        return array.filter((el, i) => {
            return index !== i;
        });
    }
    autoResizeColumns() {
        this._grid.autosizeColumns();
    }
    destroy() {
        this._grid = null;
        this._dataView = null;
        this.visibleColumns = [];
        if (this.columnPickerControl) {
            this.columnPickerControl.destroy();
            this.columnPickerControl = null;
        }
        if (this.gridMenuControl) {
            this.gridMenuControl.onBeforeMenuShow.unsubscribe();
            this.gridMenuControl.onCommand.unsubscribe();
            this.gridMenuControl.onMenuClose.unsubscribe();
            this.gridMenuControl.destroy();
            this.gridMenuControl = null;
        }
        if (this.rowSelectionPlugin) {
            this.rowSelectionPlugin.destroy();
            this.rowSelectionPlugin = null;
        }
        if (this.checkboxSelectorPlugin) {
            this.checkboxSelectorPlugin.destroy();
            this.checkboxSelectorPlugin = null;
        }
        if (this.autoTooltipPlugin) {
            this.autoTooltipPlugin.destroy();
            this.autoTooltipPlugin = null;
        }
        if (this.headerButtonsPlugin) {
            this.headerButtonsPlugin.destroy();
            this.headerButtonsPlugin = null;
        }
        if (this.headerMenuPlugin) {
            this.headerMenuPlugin.destroy();
            this.headerMenuPlugin = null;
        }
    }
    /**
     * Create Grid Menu with Custom Commands if user has enabled Filters and/or uses a Backend Service (OData, GraphQL)
     * @param grid
     * @param options
     */
    addGridMenuCustomCommands(grid, options) {
        const backendApi = options.backendServiceApi || options.onBackendEventApi || null;
        if (options.enableFiltering) {
            if (options && options.gridMenu && options.gridMenu.showClearAllFiltersCommand && options.gridMenu.customItems && options.gridMenu.customItems.filter((item) => item.command === 'clear-filter').length === 0) {
                options.gridMenu.customItems.push({
                    iconCssClass: 'fa fa-filter text-danger',
                    title: options.enableTranslate ? this.i18n.tr('CLEAR_ALL_FILTERS') : 'Clear All Filters',
                    disabled: false,
                    command: 'clear-filter'
                });
            }
            if (options && options.gridMenu && options.gridMenu.showToggleFilterCommand && options.gridMenu.customItems && options.gridMenu.customItems.filter((item) => item.command === 'toggle-filter').length === 0) {
                options.gridMenu.customItems.push({
                    iconCssClass: 'fa fa-random',
                    title: options.enableTranslate ? this.i18n.tr('TOGGLE_FILTER_ROW') : 'Toggle Filter Row',
                    disabled: false,
                    command: 'toggle-filter'
                });
            }
            if (options && options.gridMenu && options.gridMenu.showRefreshDatasetCommand && backendApi && options.gridMenu.customItems && options.gridMenu.customItems.filter((item) => item.command === 'refresh-dataset').length === 0) {
                options.gridMenu.customItems.push({
                    iconCssClass: 'fa fa-refresh',
                    title: options.enableTranslate ? this.i18n.tr('REFRESH_DATASET') : 'Refresh Dataset',
                    disabled: false,
                    command: 'refresh-dataset'
                });
            }
            // Command callback, what will be executed after command is clicked
            if (options.gridMenu) {
                options.gridMenu.onCommand = (e, args) => {
                    if (args && args.command) {
                        switch (args.command) {
                            case 'toggle-filter':
                                grid.setHeaderRowVisibility(!grid.getOptions().showHeaderRow);
                                break;
                            case 'toggle-toppanel':
                                grid.setTopPanelVisibility(!grid.getOptions().showTopPanel);
                                break;
                            case 'clear-filter':
                                this.filterService.clearFilters();
                                this._dataView.refresh();
                                break;
                            case 'refresh-dataset':
                                this.refreshBackendDataset(options);
                                break;
                            default:
                                alert('Command: ' + args.command);
                                break;
                        }
                    }
                };
            }
        }
        // add the custom "Commands" title if there are any commands
        if (options && options.gridMenu && options.gridMenu.customItems && options.gridMenu.customItems.length > 0) {
            const customTitle = options.enableTranslate ? this.i18n.tr('COMMANDS') : 'Commands';
            options.gridMenu.customTitle = options.gridMenu.customTitle || customTitle;
        }
    }
    /**
     * @return default Grid Menu options
     */
    getDefaultGridMenuOptions() {
        return {
            columnTitle: this.i18n.tr('COLUMNS') || 'Columns',
            forceFitTitle: this.i18n.tr('FORCE_FIT_COLUMNS') || 'Force fit columns',
            syncResizeTitle: this.i18n.tr('SYNCHRONOUS_RESIZE') || 'Synchronous resize',
            iconCssClass: 'fa fa-bars',
            menuWidth: 18,
            customTitle: undefined,
            customItems: [],
            showClearAllFiltersCommand: true,
            showRefreshDatasetCommand: true,
            showToggleFilterCommand: true
        };
    }
    refreshBackendDataset(gridOptions) {
        let query;
        const backendApi = gridOptions.backendServiceApi || gridOptions.onBackendEventApi;
        if (!backendApi || !backendApi.service || !backendApi.process) {
            throw new Error(`BackendServiceApi requires at least a "process" function and a "service" defined`);
        }
        if (backendApi.service) {
            query = backendApi.service.buildQuery();
        }
        if (query && query !== '') {
            if (backendApi.preProcess) {
                backendApi.preProcess();
            }
            // execute the process promise
            const processPromise = backendApi.process(query);
            processPromise.then((processResult) => {
                // from the result, call our internal post process to update the Dataset and Pagination info
                if (processResult && backendApi && backendApi.internalPostProcess) {
                    backendApi.internalPostProcess(processResult);
                }
                // send the response process to the postProcess callback
                if (backendApi && backendApi.postProcess) {
                    backendApi.postProcess(processResult);
                }
            });
        }
    }
    /**
     * Reset all the Grid Menu options which have text to translate
     * @param grid menu object
     */
    resetGridMenuTranslations(gridMenu) {
        // we will reset the custom items array since the commands title have to be translated too (no worries, we will re-create it later)
        gridMenu.customItems = [];
        delete gridMenu.customTitle;
        gridMenu.columnTitle = this.i18n.tr('COLUMNS') || 'Columns';
        gridMenu.forceFitTitle = this.i18n.tr('FORCE_FIT_COLUMNS') || 'Force fit columns';
        gridMenu.syncResizeTitle = this.i18n.tr('SYNCHRONOUS_RESIZE') || 'Synchronous resize';
        return gridMenu;
    }
    /**
     * Translate the Column Picker and it's last 2 checkboxes
     * Note that the only way that seems to work is to destroy and re-create the Column Picker
     * Changing only the columnPicker.columnTitle with i18n translate was not enough.
     */
    translateColumnPicker() {
        // destroy and re-create the Column Picker which seems to be the only way to translate properly
        if (this.columnPickerControl) {
            this.columnPickerControl.destroy();
            this.columnPickerControl = null;
        }
        this._gridOptions.columnPicker = undefined;
        this.createColumnPicker(this._grid, this.visibleColumns, this._gridOptions);
    }
    /**
     * Translate the Grid Menu ColumnTitle and CustomTitle.
     * Note that the only way that seems to work is to destroy and re-create the Grid Menu
     * Changing only the gridMenu.columnTitle with i18n translate was not enough.
     */
    translateGridMenu() {
        // destroy and re-create the Grid Menu which seems to be the only way to translate properly
        this.gridMenuControl.destroy();
        // reset all Grid Menu options that have translation text & then re-create the Grid Menu and also the custom items array
        if (this._gridOptions && this._gridOptions.gridMenu) {
            this._gridOptions.gridMenu = this.resetGridMenuTranslations(this._gridOptions.gridMenu);
        }
        this.createGridMenu(this._grid, this.visibleColumns, this._gridOptions);
    }
    /**
     * Translate manually the header titles.
     * We could optionally pass a locale (that will change currently loaded locale), else it will use current locale
     * @param {string} locale locale to use
     */
    translateHeaders(locale) {
        if (locale) {
            this.i18n.setLocale(locale);
        }
        for (const column of this._columnDefinitions) {
            if (column.headerKey) {
                column.name = this.i18n.tr(column.headerKey);
            }
        }
        // calling setColumns() will trigger a grid re-render
        this._grid.setColumns(this._columnDefinitions);
    }
    /**
     * Attach/Create different plugins before the Grid creation.
     * For example the multi-select have to be added to the column definition before the grid is created to work properly
     * @param {Column[]} columnDefinitions
     * @param {GridOptions} options
     */
    createPluginBeforeGridCreation(columnDefinitions, options) {
        if (options.enableCheckboxSelector) {
            this.checkboxSelectorPlugin = new Slick.CheckboxSelectColumn(options.checkboxSelector || {});
            columnDefinitions.unshift(this.checkboxSelectorPlugin.getColumnDefinition());
        }
    }
};
ControlAndPluginService = __decorate([
    inject(FilterService, GridExtraService, I18N)
], ControlAndPluginService);
export { ControlAndPluginService };
//# sourceMappingURL=controlAndPlugin.service.js.map