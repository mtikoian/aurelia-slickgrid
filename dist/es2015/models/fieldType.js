export var FieldType;
(function (FieldType) {
    FieldType[FieldType["unknown"] = 0] = "unknown";
    FieldType[FieldType["string"] = 1] = "string";
    FieldType[FieldType["boolean"] = 2] = "boolean";
    FieldType[FieldType["integer"] = 3] = "integer";
    FieldType[FieldType["float"] = 4] = "float";
    /** number includes Integer and Float */
    FieldType[FieldType["number"] = 5] = "number";
    /** new Date(), javascript Date object */
    FieldType[FieldType["date"] = 6] = "date";
    /** Format: 'YYYY-MM-DD' => 2001-01-01 */
    FieldType[FieldType["dateIso"] = 7] = "dateIso";
    /** Format: 'YYYY-MM-DDTHH:mm:ss.SSSZ' => 2001-01-01T14:00:00.123Z */
    FieldType[FieldType["dateUtc"] = 8] = "dateUtc";
    /** new Date(), javacript Date Object with Time */
    FieldType[FieldType["dateTime"] = 9] = "dateTime";
    /** Format: 'YYYY-MM-DD HH:mm:ss' => 2001-01-01 14:01:01 */
    FieldType[FieldType["dateTimeIso"] = 10] = "dateTimeIso";
    /** Format: 'YYYY-MM-DD h:mm:ss a' => 2001-01-01 11:01:01 pm */
    FieldType[FieldType["dateTimeIsoAmPm"] = 11] = "dateTimeIsoAmPm";
    /** Format: 'YYYY-MM-DD h:mm:ss A' => 2001-01-01 11:01:01 PM */
    FieldType[FieldType["dateTimeIsoAM_PM"] = 12] = "dateTimeIsoAM_PM";
    /** Format: 'MM/DD/YYYY' => 02/28/2001 */
    FieldType[FieldType["dateUs"] = 13] = "dateUs";
    /** Format: 'M/D/YY' => 2/28/12 */
    FieldType[FieldType["dateUsShort"] = 14] = "dateUsShort";
    /** Format: 'MM/DD/YYYY HH:mm:ss' => 02/28/2001 13:01:01 */
    FieldType[FieldType["dateTimeUs"] = 15] = "dateTimeUs";
    /** Format: 'MM/DD/YYYY hh:mm:ss a' => 02/28/2001 11:01:01 pm */
    FieldType[FieldType["dateTimeUsAmPm"] = 16] = "dateTimeUsAmPm";
    /** Format: 'MM/DD/YYYY hh:mm:ss A' => 02/28/2001 11:01:01 PM */
    FieldType[FieldType["dateTimeUsAM_PM"] = 17] = "dateTimeUsAM_PM";
    /** Format: 'M/D/YY H:m:s' => 2/28/14 14:1:2 */
    FieldType[FieldType["dateTimeUsShort"] = 18] = "dateTimeUsShort";
    /** Format: 'M/D/YY h:m:s a' => 2/28/14 1:2:10 pm */
    FieldType[FieldType["dateTimeUsShortAmPm"] = 19] = "dateTimeUsShortAmPm";
    /** Format: 'M/D/YY h:m:s A' => 2/28/14 14:1:1 PM */
    FieldType[FieldType["dateTimeUsShortAM_PM"] = 20] = "dateTimeUsShortAM_PM";
})(FieldType || (FieldType = {}));
//# sourceMappingURL=fieldType.js.map