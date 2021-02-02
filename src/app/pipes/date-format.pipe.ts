import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {

  constructor() {
  }

  transform(date: Date, args?: any): any {
    if (!date) {
      return '----/--/-- --/--/--';
    }
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }

}
