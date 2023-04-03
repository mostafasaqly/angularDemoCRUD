import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseApiUrl :string = 'https://localhost:7219';
  constructor(private http : HttpClient) {}
  getAllEmployees() : Observable<Employee[]>
    {
      return this.http.get<Employee[]>(this.baseApiUrl + '/api/Employee');
    }
  addEmployee(addemployee:Employee) : Observable<Employee>
  {
    addemployee.id = '8AA63E57-0000-418B-8CE2-3946C8D4E5FC';
    return this.http.post<Employee>(this.baseApiUrl + '/api/Employee', addemployee);
  }
  getEmployee(id:string)
  {
    return this.http.get<Employee>(this.baseApiUrl + '/api/Employee/' + id);
  }
  updateEmployee(id:string, employeeUpdate:Employee): Observable<Employee>
  {
    return this.http.put<Employee>(this.baseApiUrl + '/api/Employee/'+ id, employeeUpdate);
  }

  deleteEmployee(id:string): Observable<Employee>
  {
    return this.http.delete<Employee>(this.baseApiUrl +'/api/Employee/' + id);
  }
}
