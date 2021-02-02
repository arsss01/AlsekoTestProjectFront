import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'null'
})
export class IgnoreNullPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value === 'null' || value === null || value === undefined ? '' : value;
  }

}
