import { mapMomentDateFormatWithFieldType } from './../services/utilities';
import { FieldType } from './../models/index';
import * as moment from 'moment';
const FORMAT = mapMomentDateFormatWithFieldType(FieldType.dateUsShort);
export const dateUsShortSorter = (value1, value2, sortDirection) => {
    if (!moment(value1, FORMAT, true).isValid() || !moment(value2, FORMAT, true).isValid()) {
        return 0;
    }
    const date1 = moment(value1, FORMAT, true);
    const date2 = moment(value2, FORMAT, true);
    const diff = parseInt(date1.format('X'), 10) - parseInt(date2.format('X'), 10);
    return sortDirection * (diff === 0 ? 0 : (diff > 0 ? 1 : -1));
};
//# sourceMappingURL=dateUsShortSorter.js.map