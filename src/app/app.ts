import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Calculator } from "./components/calculator/calculator";
import { investment } from './models/investment';
import { InvestmentResult } from "./components/investment-result/investment-result";

@Component({
  selector: 'app-root',
  imports: [Header, Calculator, InvestmentResult],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
showResult:boolean=false;
investment!:investment;
onReset() {
this.showResult=false
console.log(this.showResult)
console.log("make it false")
}

onCalculate(inv: investment) {
this.investment=inv;
this.showResult=true;

}
  protected title = 'investmentCalculator';
}
