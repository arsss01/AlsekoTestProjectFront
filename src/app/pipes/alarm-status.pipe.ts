import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'alarmStatus'
})
export class AlarmStatusPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case 'new':
        return 'Новая';
      case 'waiting':
        return 'Новая';
      case 'executor':
        return 'В работе';
      case 'processing':
        return 'В работе';
      case 'closed':
        return 'Закрыта';
      case 'completed':
        return 'Завершена';
      case 'inpool':
        return 'В работе';
      default:
        return status;
    }
  }


}
