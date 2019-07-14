import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartComponent } from './chart/chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { AdultDataService } from './services/adult-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    HttpClientModule
  ],
  providers: [AdultDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
