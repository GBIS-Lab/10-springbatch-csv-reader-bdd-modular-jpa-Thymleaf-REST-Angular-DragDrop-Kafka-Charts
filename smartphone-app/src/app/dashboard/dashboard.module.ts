import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { SmartphoneBrandChartComponent } from './charts/smartphone-brand-chart.component';
import { SmartphoneOsChartComponent } from './charts/smartphone-os-chart.component';
import { SmartphoneScreenSizeChartComponent } from './charts/smartphone-screensize-chart/smartphone-screensize-chart.component';
import { SmartphonePriceRangeChartComponent } from './charts/smartphone-pricerange-chart/smartphone-pricerange-chart.component';
import { SmartphoneReleaseDateChartComponent } from './charts/smartphone-releasedate-chart/smartphone-releasedate-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SmartphoneBrandChartComponent,
    SmartphoneOsChartComponent,
    SmartphoneScreenSizeChartComponent,
    SmartphonePriceRangeChartComponent,
    SmartphoneReleaseDateChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    DashboardComponent,
    SmartphoneBrandChartComponent,
    SmartphoneOsChartComponent,
    SmartphoneScreenSizeChartComponent,
    SmartphonePriceRangeChartComponent,
    SmartphoneReleaseDateChartComponent,
    NgChartsModule]

})
export class DashboardModule {}
