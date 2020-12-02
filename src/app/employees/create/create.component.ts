import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service: EmployeeService, private dialog: MatDialog) { }

  ngOnInit() {
  }
  onClear() {
    let $key = this.service.form.get('$key').value;
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.service.form.patchValue({ $key });
  }
  
  openDialog() {
    this.dialog.open(DialogComponent);
  }
  Onsubmit() {
    console.log(this.service.form);
    let form = this.service.form
    this.service.postData(form).subscribe((data) =>{
      console.log("data", data);
    })
  }

}
