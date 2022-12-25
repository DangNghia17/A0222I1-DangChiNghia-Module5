import {Component, Input, OnInit} from '@angular/core';
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility-delete',
  templateUrl: './facility-delete.component.html',
  styleUrls: ['./facility-delete.component.css']
})
export class FacilityDeleteComponent implements OnInit {
  @Input('deleteFacility')
  id: number;

  constructor(private facilityService: FacilityService,
              private router : Router) {
  }

  ngOnInit(): void {
    this.facilityService.deleteFacility(this.id).subscribe(() => {
      this.router.navigate(['/facility']);
      alert('Xoá thành công');
    }, e => {
      console.log(e);
    });

  }


}
