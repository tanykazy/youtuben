import { Component, ElementRef, OnInit } from '@angular/core';
import { RecordCountService, PlayCount } from '../services/record-count.service';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor(
    private recordCountService: RecordCountService) {
  }

  public chart: GoogleChartInterface;

  private createSeriesData() {
    this.recordCountService.loadRecord();
    const records: Array<PlayCount> = this.recordCountService.getHalfYearRecord();
    const result = [];
    for (const record of records) {
      const date = new Date(record.t);
      result.push([
        [date.getMonth() + 1, '/', date.getDate()].join(''),
        record.c
      ]);
    }
    return result;
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
    this.chart = {
      chartType: 'AreaChart',
      dataTable: this.createSeriesData(),
      firstRowIsData: true,
    };
  }
}
