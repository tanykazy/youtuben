import { Component } from '@angular/core';
import { Chart, StockChart } from 'angular-highcharts';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  totalHours: number = 1;

  chart = new StockChart({
      rangeSelector: {
        selected: 1
      },

      title: {
        text: ''
      },
      series: [
        {
          name: '',
          data: [
            [1482935400000, 116.76],
            [1483021800000, 10],
            [1483108200000, 105.82],
            [1483453800000, 116.15],
            [1483540200000, 80.02],
            [1483626600000, 116.61],
            [1483713000000, 60.91],
            [1483972200000, 118.99],
            [1484058600000, 30.11],
            [1484145000000, 20.75],
            [1484231400000, 109.25],
            [1484317800000, 119.04],
            [1484663400000, 120],
            [1484749800000, 119.99],
            [1484836200000, 20.78],
            [1484922600000, 120]
          ],
          type: 'areaspline',
          tooltip: {
            valueDecimals: 2
          }
        }
      ]
   });
 
  // add point to chart serie
  add() {
    this.chart.ref.addSeries(
      {
        data: [
          [1485009000000, 100],
          [1485095400000, 120]
        ],
        type: 'spline',
        tooltip: {
          valueDecimals: 2
        }
      }
    )
    this.totalHours = 0;
  }

}
