import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './employees/create/create.component';
import { EmployeeComponent } from './employees/employee/employee.component';

const routes: Routes = [
  {path: 'create', component:CreateComponent},
  {path: '', component:EmployeeComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComp = [CreateComponent, EmployeeComponent]
