import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Assurez-vous que cela est importé
import { AppComponent } from './app.component';
import { SmartphoneListComponent } from './components/smartphone-list/smartphone-list.component'; // Import du composant
import { AppRoutes } from './app-routes';  // Import du module de routing
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SmartphoneListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes), // Si vous avez une configuration de routes
    AppRoutes,  // Ajoute le module de routing
    DashboardModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
