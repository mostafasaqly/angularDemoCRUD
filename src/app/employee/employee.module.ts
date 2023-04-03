import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';

const routes : Routes = [
  {path: 'employee', component: EmployeeListComponent, title: 'Employee List'},
  {path: 'add', component: AddEmployeeComponent, title: 'Employee add'},
  {path: 'edit/:id', component: EditEmployeeComponent, title: 'Employee edit'}
];

@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],

})
export class EmployeeModule { }
