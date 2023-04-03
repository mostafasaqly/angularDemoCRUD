import { Component } from '@angular/core';
import { Employee } from '../../Models/employee';
import { EmployeeService } from '../../Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  addEmployee: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }
  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  addEmployeeComponent() {
    this.employeeService.addEmployee(this.addEmployee).subscribe({
      next: (employee) => this.router.navigate(['/employee/employee']),
      error: (err) => console.log(err)

    });
  }
}
