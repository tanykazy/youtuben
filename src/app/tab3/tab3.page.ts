import { Component, ElementRef, OnInit } from '@angular/core';
import { StockChart } from 'angular-highcharts';
import { RecordCountService, PlayCount } from '../services/record-count.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit{

  constructor(
    private recordCountService: RecordCountService) {
  }

  private stockChart: StockChart;

  private createSeriesData() {
    // this.recordCountService.loadRecord();
    // const records:Array<PlayCount> = this.recordCountService.getAllRecord();
    // const result = [];
    // for (const record of records) {
    //   result.push([record.time, record.count]);
    // }
    // return result;
  }

  getChartWidth() {
    //   console.log(this._chartDom.querySelectorAll('#timeChart')[0].clientWidth);
    //   this.clientWidth = this._chartDom.querySelectorAll(
    //     '#timeChart'
    //   )[0].clientWidth;
  }

  addPoint() {
    // this.chart.ref.series[0].addPoint([1595839507000, 50], true, true);
    //    this.chart.ref.series[0].setData([1595839507000, 100])
  }

  ngOnInit() {
    // this.stockChart = new StockChart({
    //   rangeSelector: {
    //     selected: 1
    //   },
    //   series: [
    //     {
    //       type: 'area',
    //       data: this.createSeriesData(),
    //     }
    //   ]
    // });
  }


}
