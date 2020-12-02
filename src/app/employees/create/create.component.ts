import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';
import { DialogSuccessComponent } from 'src/app/dialog-success/dialog-success.component';

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
    this.dialog.open(DialogSuccessComponent);
  }
  Onsubmit() {
    let formdata = this.service.form.value;
    console.log(formdata, formdata)
    if(this.service.form.value.fullName ) {
    this.service.postData().subscribe((data) => {
      console.log("Data Posted successfully", data);
      if (data.id != null) {
        this.openDialog();
      }
    })
  }
  }

}
