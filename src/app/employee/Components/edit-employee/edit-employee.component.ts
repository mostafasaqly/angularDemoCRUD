import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Models/employee';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit  {
  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };
  employeeFrom : FormGroup;
  constructor(private route : ActivatedRoute, private router
    : Router, private employeeService: EmployeeService)
  {
    this.employeeFrom = new FormGroup({
      id: new FormControl(''),
      name : new FormControl('' , [Validators.required, Validators.minLength(3)]),
      email : new FormControl('' , [Validators.email]),
      phone : new FormControl('' , [Validators.pattern('[0-9]')  ]),
      salary: new FormControl('', [Validators.min(1200),Validators.max(10000)]),
      department : new FormControl('' , [Validators.required])
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params)=>
      {
        const id = params.get('id');
        if(id)
        {
          this.employeeService.getEmployee(id).subscribe({
            next : (response) =>
            {
              this.employeeDetails = response;
              this.employeeFrom.setValue({
                id : this.employeeDetails.id,
                name : this.employeeDetails.name,
                email : this.employeeDetails.email,
                phone : this.employeeDetails.phone,
                salary : this.employeeDetails.salary,
                department : this.employeeDetails.department
              });
              this.employeeFrom.valueChanges.subscribe({
                next: data => this.employeeDetails = data
              })
            }
          })
        }
      }
    });
  }

  updateEmployee()
  {
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails)
    .subscribe({
      next : response => this.router.navigate(['/employee/employee'])
    });
  }
  deleteEmployee(id:string)
  {
    this.employeeService.deleteEmployee(id).subscribe({
      next : response => this.router.navigate(['/employee/employee'])
    });
  }
}
