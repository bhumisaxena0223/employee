import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { listenToElementOutputs } from '@angular/core/src/view/element';

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
    website: new FormControl(''),
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

  postData() {
    console.log(this.form.value);
   let data = this.form.value;
   data.$key = Math.random().toString(36).substr(2, 5);
   console.log(data.$key, "Key");
    const url = "https://jsonplaceholder.typicode.com/users/";
    return this.http.post<any>(url, {id: data.$key,
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      username: data.username,
      website : data.website,
      city: data.city
    });
  }

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      phone: '',
      city: '',
      gender: '1',
      website: '',
    });
  }
}
