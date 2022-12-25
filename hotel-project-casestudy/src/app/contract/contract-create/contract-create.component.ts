import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractFormCreate: FormGroup = new FormGroup({
    code: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    downPayment: new FormControl(),
    totalPayment: new FormControl()
  });

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
  }

  createContract() {
    const contract = this.contractFormCreate.value;
    this.contractService.saveContract(contract).subscribe(() => {
      console.log(contract);
      this.contractFormCreate.reset();
      alert('Tạo mới hợp dộng thành công');
    })
  }

}
