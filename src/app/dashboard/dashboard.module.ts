import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowStockComponent } from './low-stock/low-stock.component';
import { StockLevelReportComponent } from './stock-level-report/stock-level-report.component';
import { TransactComponent } from './transact/transact.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent],
  declarations: [LowStockComponent, StockLevelReportComponent, TransactComponent, DashboardComponent]
})
export class DashboardModule { }