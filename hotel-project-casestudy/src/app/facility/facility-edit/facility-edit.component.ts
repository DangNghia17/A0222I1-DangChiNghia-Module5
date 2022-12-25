import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityFormEdit: FormGroup;
  id: number;

  constructor(private facilityService : FacilityService ,
              private activatedRoute : ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramap : ParamMap) => {
      this.id = +paramap.get('id');
      this.getFacility(this.id);
    })
  }

  ngOnInit(): void {
  }

  private getFacility(id: number) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.facilityFormEdit = new FormGroup({
        name: new FormControl(facility.name),
        area: new FormControl(facility.area),
        price: new FormControl(facility.price),
        maximum: new FormControl(facility.maximum),
        image: new FormControl(facility.image),
        type: new FormControl(facility.type)
      });
    })
  };


  editFacility(id: number) {
    const facility = this.facilityFormEdit.value;
    this.facilityService.updateFacility(id,facility).subscribe(()=>{
      alert("Cập nhật thành công");
    }, error => {
      console.log(error);
    })
  }
}
