import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../../services/dashboard-data.service';

@Component({
  selector: 'app-smartphone-screensize-chart',
  standalone: false,
  templateUrl: './smartphone-screensize-chart.component.html',
  styleUrl: './smartphone-screensize-chart.component.scss'
})

export class SmartphoneScreenSizeChartComponent implements OnInit {
  screenSizes: { [sizeRange: string]: number } = {};
  ranges: string[] = [];

  constructor(private dataService: DashboardDataService) {}

  ngOnInit(): void {
    this.dataService.getScreenSizeStats().subscribe(data => {
      this.screenSizes = data;
      this.ranges = Object.keys(data);
    });
  }
}
