import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../services/dashboard-data.service';

@Component({
  selector: 'app-smartphone-os-chart',
  standalone: false,
  templateUrl: './smartphone-os-chart.component.html',
})
export class SmartphoneOsChartComponent implements OnInit {
  osStats: { [os: string]: number } = {};
  osNames: string[] = [];

  constructor(private dataService: DashboardDataService) {}

  ngOnInit(): void {
    this.dataService.getOSStats().subscribe({
      next: data => {
        console.log("📊 Données d'OS reçues :", data);
        this.osStats = data;
        this.osNames = Object.keys(data);
      },
      error: err => {
        console.error("❌ Erreur lors de la récupération des stats d'OS :", err);
      }
    });
  }
}

  // Simulation des données côté front (à remplacer par appel au service plus tard)
  /*private mockOsStats = {
    Android: 12,
    iOS: 7,
    HarmonyOS: 2
  };*/


/*
  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData(): void {
    const labels = Object.keys(this.mockOsStats);
    const data = Object.values(this.mockOsStats);

    this.chartData = {
      labels,
      datasets: [{
        data,
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EBDD', '#FF6384DD', '#FFCE56DD']
      }]
    };
  }*/

