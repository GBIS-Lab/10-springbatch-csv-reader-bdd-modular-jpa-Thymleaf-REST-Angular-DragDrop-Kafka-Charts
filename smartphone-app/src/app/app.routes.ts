import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartphoneListComponent } from './components/smartphone-list/smartphone-list.component';
import { SmartphonesPageComponent } from './smartphones-page/smartphones-page.component';
import { SmartphoneBrandChartComponent } from './dashboard/charts/smartphone-brand-chart.component';
import { SmartphoneOsChartComponent } from './dashboard/charts/smartphone-os-chart.component';
import { SmartphoneScreenSizeChartComponent } from './dashboard/charts/smartphone-screensize-chart/smartphone-screensize-chart.component';
import { SmartphonePriceRangeChartComponent } from './dashboard/charts/smartphone-pricerange-chart/smartphone-pricerange-chart.component';
import { SmartphoneReleaseDateChartComponent } from './dashboard/charts/smartphone-releasedate-chart/smartphone-releasedate-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  //{ path: '', component: SmartphoneListComponent },   // Par défaut, afficher la liste des smartphones
  { path: '', redirectTo: 'smartphones', pathMatch: 'full' },
  { path: 'smartphones', component: SmartphonesPageComponent },  // Route dédiée pour la liste des smartphones
  //{ path: 'dashboard/brands', component: SmartphoneBrandChartComponent }
  { path: 'dashboard/brands', component: DashboardComponent },
  { path: 'dashboard/os',    component: SmartphoneOsChartComponent },
  { path: 'dashboard/screen-sizes',    component: SmartphoneScreenSizeChartComponent },
  { path: 'dashboard/price-ranges',    component: SmartphonePriceRangeChartComponent },
  { path: 'dashboard/release-date',    component: SmartphoneReleaseDateChartComponent },
  // Ajoute ici d'autres routes si nécessaire (comme /smartphone/:id pour un détail de smartphone)
];
