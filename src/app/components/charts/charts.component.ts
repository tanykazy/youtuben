import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { ChartReadyEvent, GoogleChartInterface } from 'ng2-google-charts';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() dataTable: Array<any>;

  public chart: GoogleChartInterface;

  private isReady = false;

  private redraw(): void {
    if (this.isReady) {
      this.chart.dataTable = this.dataTable;
      this.chart.component.draw();
    }
  }

  public ready(event: ChartReadyEvent): void {
    this.isReady = true;
  }

  ngOnInit() {
    this.chart = {
      chartType: 'BarChart',
      dataTable: this.dataTable,
      firstRowIsData: true,
      options: {
        reverseCategories: true,
        animation: {
          duration: 1000,
          easing: 'out',
          startup: true,
        },
        vAxis: {
          minValue: 0
        },
        hAxis: {
          textPosition: 'none'
        },
        legend: {
          position: 'none'
        }
      }
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    this.redraw();
  }

}
