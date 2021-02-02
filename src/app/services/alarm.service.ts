import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LocationService} from './location.service';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  url: any;

  constructor(private http: HttpClient,
              private location: LocationService) {
    this.url = location.getCitySettings();
  }

  getAlarmsByCode(publicCode: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const options = {headers};

    return this.http.get<any>(`${this.url}/m/alarm/${publicCode}`, options).toPromise();
  }

  createAlarm(data: any) {
    const form = {
      placeTypeId: data.addressPrefix,
      problemDesc: data.comment,
      name: data.name,
      surname: data.surname,
      patronymic: data.midName,
      email: data.email,
      address: data.address,
      addressDistrict: data.region,
      phoneNumber: data.phoneNumber,
      requestChannelId: 'OPEN_PORTAL',
      alarmSmsVerify: data.verify
    };

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    return this.http.post<any>(`${this.url}/m/alarm/open`, form, options).toPromise();
  }

  sendSms(form: any) {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    return this.http.post<any>(`${this.url}/m/alarm/sms`, JSON.stringify(form), options).toPromise();

  }
}
