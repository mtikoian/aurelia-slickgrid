import { Column, Editor, EditorValidator, EditorValidatorOutput } from './../models/index';
import { I18N } from 'aurelia-i18n';
export declare class DateEditor implements Editor {
    private i18n;
    private args;
    $input: any;
    flatInstance: any;
    defaultDate: string;
    constructor(i18n: I18N, args: any);
    /** Get Column Definition object */
    readonly columnDef: Column;
    /** Get Column Editor object */
    readonly columnEditor: any;
    /** Get the Validator function, can be passed in Editor property or Column Definition */
    readonly validator: EditorValidator;
    init(): void;
    loadFlatpickrLocale(locale: string): any;
    destroy(): void;
    getColumnEditor(): any;
    show(): void;
    hide(): void;
    focus(): void;
    save(): void;
    loadValue(item: any): void;
    serializeValue(): string;
    applyValue(item: any, state: any): void;
    isValueChanged(): boolean;
    validate(): EditorValidatorOutput;
}