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

  private drawChart() {
    this.chart = {
      chartType: 'AreaChart',
      dataTable: this.createSeriesData(),
      firstRowIsData: true,
      options: {
        animation: {
          duration: 1000,
          easing: 'out',
          startup: true,
        },
        vAxis: {
          minValue: 0
        }
      }
    };
  }

  private changeData() {
    this.chart.dataTable = this.createSeriesData();
    this.chart.component.draw();
  }

  ngOnInit() {
    this.drawChart();
  }

  ionViewDidEnter() {
    this.changeData();
  }
}
