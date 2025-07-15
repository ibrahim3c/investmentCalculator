import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { investment } from '../../models/investment';
import { FormsModule } from '@angular/forms';
import { pipe } from 'rxjs';
import { CommonModule } from '@angular/common';
import { result } from '../../models/result';
import { InvestmentService } from '../../services/investmentService';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css',
  standalone:false
})
export class InvestmentResult implements OnChanges {
 @Input() investment!:investment
 results:result[]=[];

 constructor(private investmentService:InvestmentService) {
 }
  ngOnChanges(changes: SimpleChanges): void {
 if (this.investment) {
  this.results = this.investmentService.calculateResults(this.investment);
}
}


}
