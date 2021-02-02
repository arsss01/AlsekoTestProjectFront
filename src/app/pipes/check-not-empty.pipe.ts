import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'checkNotEmpty'
})
export class CheckNotEmptyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case '':
        return null;
      case 'undefined':
        return null;
      case undefined:
        return null;
      case 'null':
        return null;
      case ' ':
        return null;
    }
    return value;
  }

}
