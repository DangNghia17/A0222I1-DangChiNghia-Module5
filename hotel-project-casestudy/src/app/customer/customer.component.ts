import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: any;
  codeCustomer: any;

  constructor() { }

  ngOnInit(): void {
  }

  deleteCustomer(id: any, code: string | number | "ERR_ASSERTION" | HTMLElement) {

  }
}
