import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public number1: number = 0;
  public number2: number = 0;
  public result: number;

  calculator(operator: string) {
    switch (operator) {
      case "+":
        this.result = this.number1 + this.number2;
        break;
      case "-":
        this.result = this.number1 - this.number2;
        break;
      case "*":
        this.result = this.number1 * this.number2;
        break;
      case "/":
          this.result = this.number1 / this.number2;
        break;
    }

    console.log(this.number1);
    console.log(operator);
    console.log(this.number2);
    console.log(this.result);
  }

}
