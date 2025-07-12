import { Injectable } from "@angular/core";
import { investment } from "../models/investment";
import { result } from "../models/result";

@Injectable({
  providedIn:'root'
})
export class InvestmentService{
  calculateResults(inv:investment):result[]{
    let results:result[]=[];
    let currentSavings=inv.currentSavings;
    for( let i=1; i<=inv.duration;i++){
      const interest=currentSavings * (inv.expectedReturn / 100)
      currentSavings+=inv.yearlyContribution+interest
      results.push({
        endOfYear:currentSavings,
        interest:interest,
        year:i
      })
    }
    return results;
  }
}
