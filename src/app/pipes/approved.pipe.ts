import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'approved'
})
export class ApprovedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === true) {
      return 'Одобрено';
    }
    if (value === false) {
      return 'Отказано';
    }
    return value;
  }

}
