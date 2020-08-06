import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { YouTubePlayerModule } from '@angular/youtube-player';

import * as highstock from 'highcharts/modules/stock.src';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    YouTubePlayerModule,
    ChartModule, // add ChartModule to your imports
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HIGHCHARTS_MODULES, useFactory: () => [highstock] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
