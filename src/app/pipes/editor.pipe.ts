import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'editorPipe'
})
export class EditorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + ' $';
  }

}
