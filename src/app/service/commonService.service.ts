import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../common/endPoint';
@Injectable({
  providedIn: 'root',
})
export class CommonService {

  constructor(private http: HttpClient) {}

  getEmp() {
    return this.http.get(environment.baseUrl + apiEndpoint.EMPLOYEE.GET_METHOD);
  }

  postEmp(employees: any) {
    return this.http.post(
      environment.baseUrl + apiEndpoint.EMPLOYEE.SAVE_METHOD,
      employees
    );
  }

  deleteEmployee(id: any,) {
      console.log("🚀 ~ CommonService ~ deleteEmployee ~ id:", id)
      return this.http.delete(environment.baseUrl + apiEndpoint.EMPLOYEE.DELETE.replace('{id}',id));
  }
}
