import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;

  constructor() {
    this.register = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.required, this.validateRePassword]),
      country: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required, Validators.min(18)]),
      gender: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern("(84)+([0-9]{8})")])
    });
  }

  validateRePassword(control: AbstractControl) {
    const {root} = control;
    const pass = root.get('password');
    const rePass = root.get('confirmpassword');

    if (!pass || !rePass) {
      return null;
    }

    const passVal = pass.value;
    const rePassVal = rePass.value;

    const result = passVal === rePassVal ? null : {passDontMatch: true};
    return result;
  }

  ngOnInit(): void {
  }

  createAccount() {
    console.log(this.register);
    if (this.register.valid) {
      this.createAccount;
    }
  }
}
