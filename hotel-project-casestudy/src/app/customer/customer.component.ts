import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] ;
  codeCustomer: string;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  deleteCustomer(id: any, code: string | number | "ERR_ASSERTION" | HTMLElement) {
  }

  private getAllCustomer() {
    // this.customers = this.customerService.getAll().subscribe(customers => {
    //   this.customers = customers;
    //   console.log(this.customers);
    // });
  }
}
