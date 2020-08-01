import { Component, ElementRef, OnInit } from '@angular/core';
import { StockChart } from 'angular-highcharts';
import { RecordCountService } from '../services/record-count.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit{

  constructor(chartDom: ElementRef,
              private recordCountService:RecordCountService) {
    this._chartDom = chartDom.nativeElement;
  }
  private _chartDom: HTMLElement;

  clientWidth: number;

  totalHours = 1;

  chart = new StockChart({
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: '',
    },
    series: [
      {
        name: '',
        data: [
          [1592829007000, 120],
          [1593829507000, 50],
          [1594829507000, 100],
        ],
        type: 'areaspline',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  });
  
  getChartWidth() {
    console.log(this._chartDom.querySelectorAll('#timeChart')[0].clientWidth);
    this.clientWidth = this._chartDom.querySelectorAll(
      '#timeChart'
    )[0].clientWidth;
  }

  addPoint(){  
    this.chart.ref.series[0].addPoint([1595839507000, 50], true, true);
//    this.chart.ref.series[0].setData([1595839507000, 100])
  }

  ngOnInit(){
    // this.recordCountService.getToday();
    this.addPoint()

  }


}
