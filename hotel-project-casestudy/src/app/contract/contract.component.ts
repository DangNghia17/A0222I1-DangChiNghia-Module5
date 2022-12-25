import { Component, OnInit } from '@angular/core';
import {ContractService} from "../service/contract.service";
import {Contract} from "../model/contract";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts : Contract[] = [];
  constructor(private contractService : ContractService) { }

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.contractService.getAll().subscribe(contracts =>{
      this.contracts = contracts;
      console.log(this.contracts);
    })
  }
}
