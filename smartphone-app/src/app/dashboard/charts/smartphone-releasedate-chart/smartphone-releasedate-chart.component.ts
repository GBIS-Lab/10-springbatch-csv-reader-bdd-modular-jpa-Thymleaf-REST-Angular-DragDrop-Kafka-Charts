import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../../services/dashboard-data.service';

@Component({
  selector: 'app-smartphone-releasedate-chart',
  standalone: false,
  templateUrl: './smartphone-releasedate-chart.component.html',
  styleUrl: './smartphone-releasedate-chart.component.scss'
})

export class SmartphoneReleaseDateChartComponent implements OnInit {
  yearStats: { [year: string]: number } = {};
  years: string[] = [];

  constructor(private dataService: DashboardDataService) {}

  ngOnInit(): void {
    this.dataService.getReleaseDateStats().subscribe({
      next: data => {
        console.log("📊 Données de date de sortie reçues :", data);
        this.yearStats = data;
        this.years = Object.keys(data).sort(); // trie croissant
      },
      error: err => {
        console.error("❌ Erreur lors de la récupération des stats de date de sortie :", err);
      }
    });
  }
}
