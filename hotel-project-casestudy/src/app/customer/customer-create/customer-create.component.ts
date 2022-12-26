import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerFormCreate: FormGroup;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerFormCreate = new FormGroup( {
      code: new FormControl(),
      name: new FormControl(),
      dob: new FormControl(),
      gender: new FormControl(),
      cccd: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      type: new FormControl(),
      address: new FormControl()
    });
  }

  createCustomer() {
    const customer = this.customerFormCreate.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      console.log(customer);
      this.customerFormCreate.reset();
      alert('Tạo mới khách hàng thành công');
    })
  }
}
