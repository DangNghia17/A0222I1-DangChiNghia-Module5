import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityFormCreate: FormGroup;

  constructor(private facilityService:FacilityService) { }

  ngOnInit(): void {
    this.facilityFormCreate = new FormGroup({
      name: new FormControl(),
      area:  new FormControl(),
      price:  new FormControl(),
      maximum:  new FormControl(),
      image:  new FormControl(),
      type:  new FormControl()
    });
  }

  createFacility() {
    const facility = this.facilityFormCreate.value;
    this.facilityService.saveFacility(facility).subscribe(() => {
      console.log(facility);
      this.facilityFormCreate.reset();
      alert('Tạo mới cơ sở thành công');
    })
  }
}
