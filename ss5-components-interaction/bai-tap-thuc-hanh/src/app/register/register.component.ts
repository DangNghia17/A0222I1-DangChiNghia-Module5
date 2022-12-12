import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;

  constructor() {
    this.register = new FormGroup({
email : new FormControl("",[Validators.required])
    }
  })


  ngOnInit(): void {
  }

}
