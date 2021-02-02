import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'grassField'
})
export class GrassFieldPipe implements PipeTransform {

  result: string;

  transform(value: string, ...args: unknown[]): unknown {
    if (value) {
      this.result = value.substring(value.length - 4);
      for (let i = 0; i < value.length - 4; i++) {
        this.result = '*' + this.result;
      }
      return this.result;
    }
    return '';
  }

}
