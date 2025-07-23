import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../../services/dashboard-data.service';

@Component({
  selector: 'app-smartphone-pricerange-chart',
  standalone: false,
  templateUrl: './smartphone-pricerange-chart.component.html',
  styleUrl: './smartphone-pricerange-chart.component.scss'
})

export class SmartphonePriceRangeChartComponent implements OnInit {
  priceStats: { [range: string]: number } = {};
  ranges: string[] = [];

  constructor(private dataService: DashboardDataService) {}

  ngOnInit(): void {
    this.dataService.getPriceRangeStats().subscribe(data => {
      this.priceStats = data;
      this.ranges = Object.keys(data);
    });
  }
}
