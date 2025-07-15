import { Component, EventEmitter, output } from '@angular/core';
import { investment } from '../../models/investment';
import { FormsModule } from '@angular/forms';
import { Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
  standalone:false
})
export class Calculator {
  currentSavings?:number;
  yearlyContribution?:number;
  expectedReturn?:number;
  duration?:number;

  @Output()Calculate=new EventEmitter<investment>;
  @Output()Reset=new EventEmitter;

  onCalculate(){
    this.Calculate.emit({
      currentSavings:this.currentSavings??0,
      duration:this.duration??0,
      expectedReturn:this.expectedReturn??0,
      yearlyContribution:this.yearlyContribution??0
    });
  }
  onReset(){
    this.Reset.emit();
    console.log("send reset")
  }
}
