import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PieChartsComponent } from './pie-charts/pie-charts.component';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { LineChartsComponent } from './line-charts/line-charts.component'

@NgModule({
  declarations: [
    AppComponent,
    PieChartsComponent,
    BarChartsComponent,
    LineChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
