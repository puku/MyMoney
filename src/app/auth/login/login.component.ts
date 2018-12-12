import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mm-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(
        null,
        [
          Validators.required,
          Validators.email
        ]
      ),
      'password': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),
    })
    ;
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  submit() {
    console.log(this.form);
  }
}
