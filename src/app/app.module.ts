import { NgModule } from "@angular/core";
import { Calculator } from "./components/calculator/calculator";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Header } from "./components/header/header";
import { InvestmentResult } from "./components/investment-result/investment-result";
import { App } from "./app";
import { FormsModule } from "@angular/forms";

@NgModule({
  bootstrap:[App],
  declarations:[Calculator,Header,InvestmentResult,App],
  imports:[BrowserModule,CommonModule,FormsModule]

})
export class AppModule{

}
