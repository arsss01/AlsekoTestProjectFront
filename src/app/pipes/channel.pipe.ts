import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'channel'
})
export class ChannelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'OPEN_PORTAL' : return 'Открытый портал';
      case 'TELEGRAM' : return 'Телеграмм';
      case 'MOBILEAPP' : return 'Мобильное приложение';
      case 'CALLCENTER' : return 'ЕКЦ 109';
      case 'AKIMATWIDGET' : return 'Акимат виджет';
      case 'WHATSAPP' : return 'Whatsapp';
      case 'TWITTER' : return 'Twitter';
      case 'VK' : return 'Вконтакте';
      case 'FACEBOOK' : return 'Facebook';
      case 'INSTAGRAM' : return 'Instagram';
    }
    return 'Неизвестный портал';
  }
}
