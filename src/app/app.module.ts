import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { EmployeesComponent } from './employees/employees.component';
// import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from './shared/employee.service';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
// import { CreateComponent } from './employees/create/create.component';
import { AppRoutingModule, routingComp } from './app-routing.module';
import { DialogComponent } from './dialog/dialog.component';
import { DialogSuccessComponent } from './dialog-success/dialog-success.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HeaderComponent,
    routingComp,
    DialogComponent,
    DialogSuccessComponent,
  ],
  entryComponents: [DialogComponent, DialogSuccessComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AppRoutingModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  exports: [
    MaterialModule
  ]
})
export class AppModule { }
