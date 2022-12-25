import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityService} from "../service/facility.service";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities: Facility[]
  facility: Facility;
  facilityName: string;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAllFacility();
  }

  getAllFacility() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
      console.log(this.facilities);
    })
  }

  edit(id: number) {
    this.facility = this.facilityService.findById(id);
  }

  deleteFacility(id: number, name: string) {

  }
}
