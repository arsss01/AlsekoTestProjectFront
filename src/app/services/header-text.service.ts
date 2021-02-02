import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderTextService {

  constructor(public router: Router) {
  }

  private messageSource: BehaviorSubject<string> = new BehaviorSubject('message');

  public message = this.messageSource.asObservable();

  public setMessage(value: string) {
    this.messageSource.next(value);
  }
}
