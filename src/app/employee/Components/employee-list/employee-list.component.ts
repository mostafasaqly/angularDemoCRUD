import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Models/employee';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees : Employee[] = [];
displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'salary','department', 'Show'];
  dataSource : Employee[] = [];
constructor(private employeeService: EmployeeService){}
  ngOnInit(): void {
    this.employeeService.getAllEmployees()
    .subscribe({
      next : (employees) => {
        this.employees = employees;
        this.dataSource = employees;
      },
      error : (response)=> {console.log(response)}
    });
  }
}
