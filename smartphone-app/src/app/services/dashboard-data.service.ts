
    //return this.http.get('/api/stats/brands');
    //return this.http.get('http://localhost:8080/api/stats/brands');

    //return this.http.get<{ [brand: string]: number }>('/api/stats/brands')

  /*getBrandStats(): Observable<{ [brand: string]: number }> {
    return this.http.get<{ [brand: string]: number }>(`${this.apiUrl}/smartphones/stats/brands`)
      .pipe(
        tap(data => console.log('📦 Brand stats received:', data))
      );
  }*/



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  private baseUrl = 'http://localhost:8080/api/stats';

  constructor(private http: HttpClient) {}

  getBrandStats(): Observable<{ [brand: string]: number }> {
    console.log('📦 Brand stats received:', ''/*brand*/)
    return this.http.get<{ [brand: string]: number }>(`${this.baseUrl}/brands`);
  }

  getOSStats(): Observable<{ [os: string]: number }> {
    return this.http.get<{ [os: string]: number }>(`${this.baseUrl}/os`);
  }

  getScreenSizeStats(): Observable<{ [sizeRange: string]: number }> {
    return this.http.get<{ [sizeRange: string]: number }>(`${this.baseUrl}/screen-sizes`);
  }

  getPriceRangeStats(): Observable<{ [priceRange: string]: number }> {
    return this.http.get<{ [priceRange: string]: number }>(`${this.baseUrl}/price-ranges`);
  }

  getReleaseDateStats(): Observable<{ [year: string]: number }> {
    return this.http.get<{ [year: string]: number }>(`${this.baseUrl}/release-date`);
  }
}
