import { Component, OnInit } from '@angular/core';
import { RecordCountService, PlayCount } from '../services/record-count.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor(
    private recordCountService: RecordCountService) {
  }

  private dataTable: Array<any>;

  private createSeriesData(records: Array<PlayCount>): Array<any> {
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

  private setData(): void {
    this.recordCountService.loadRecord();
    const records: Array<PlayCount> = this.recordCountService.getHalfYearRecord();
    this.dataTable = this.createSeriesData(records);
  }

  ngOnInit() {
    this.setData();
  }

  ionViewDidEnter() {
    this.setData();
  }
}
