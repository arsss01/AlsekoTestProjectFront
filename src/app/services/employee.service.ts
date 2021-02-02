import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Paginator} from '../models/Paginator';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  removeEmployee(id: number) {
    return this.http.delete(`${environment.url}/employees/delete/${id}`).toPromise();
  }

  saveEmployee(employee: any) {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    return this.http.post(`${environment.url}/employees/add`, JSON.stringify(employee), options).toPromise();
  }

  updateEmployee(employee: any) {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    return this.http.put(`${environment.url}/employees/update`, JSON.stringify(employee), options).toPromise();
  }

  getEmployee(paginator: Paginator) {
    const params = new HttpParams()
      .append('page', `${paginator?.pageIndex - 1}`)
      .append('size', `${paginator?.pageSize}`)
      .append('sort', `${paginator?.sorted}`);

    return this.http.get(`${environment.url}/employees/find`, {params}).toPromise();
  }

  getEmployeeById(employeeId: any) {
    return this.http.get(`${environment.url}/employees/find/${employeeId}`).toPromise();
  }
}
