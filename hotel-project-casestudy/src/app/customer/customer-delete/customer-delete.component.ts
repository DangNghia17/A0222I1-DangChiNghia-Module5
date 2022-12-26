import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  @Input('inputCode')
  code: string;
  constructor() { }

  ngOnInit(): void {
  }

}
