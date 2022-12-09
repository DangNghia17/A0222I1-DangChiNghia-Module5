import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colorNew: string = "black";

  constructor() {
  }

  ngOnInit(): void {
  }


  changeColor(color: string) {
    switch (color) {
      case "primary":
        this.colorNew = "blue";
        console.log(this.colorNew);
        break;
      case "warning":
        this.colorNew = "yellow";
        console.log(this.colorNew);
        break;
      case "success":
        this.colorNew = "green";
        console.log(this.colorNew);
        break;
      case "danger":
        this.colorNew = "red";
        console.log(this.colorNew);
        break;
    }

  }


}
