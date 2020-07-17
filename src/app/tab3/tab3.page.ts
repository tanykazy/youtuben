import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Activity Report'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type: undefined,
        name: 'Days',
        data: [30, 20, 10]
      }
    ]
  });

  totalHours: number = 1;
 
  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 80));
    this.totalHours += Math.floor(Math.random() * 80)/60
  }

}
