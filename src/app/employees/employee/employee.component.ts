import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website', 'actions'];
  dataSource: any;
  constructor(private service: EmployeeService, private dialog: MatDialog) {
    this.getDataFromApi();
  }

  ngOnInit() {}

  getDataFromApi() {
    this.service.getData().subscribe((data) => {
      console.log(data);
      this.dataSource = data;
    })
  }
  
  Onsubmit() {
    console.log(this.service.form);
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
  delete(id) {
    console.log("delete", id);
    this.service.getDelete(id).subscribe(response => {
      // let index = this.dataSource.indexOf(id);  
      console.log("Resource deleted");
      this.openDialog();
      this.getDataFromApi();
    })
  }

}
