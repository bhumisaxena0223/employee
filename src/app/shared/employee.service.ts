import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
  });
  constructor(private http : HttpClient) { }
  
  getData():Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get<any>(url);
  }

  getDelete(ID):Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/users/" + ID;
    return this.http.delete<any>(url);
  }

  postData(data):Observable<any> {
    console.log(data)
    const url = "https://jsonplaceholder.typicode.com/users/";
    return this.http.post<any>(url, {data});
  }

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      phone: '',
      city: '',
      gender: '1',
      department: 0,
    });
  }
}
