import { Component, ViewChild } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
} from "ng-apexcharts";

import { RecordCountService, PlayCount } from '../../services/record-count.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: any;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.scss"]
})
export class ChartsComponent {
  @ViewChild("chart") chart: ChartsComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(
    private recordCountService: RecordCountService) {

    this.chartOptions = {
      series:
        this.setData(),
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#008FFB"],
      title: {
        text: "",
      },
      plotOptions: {
        heatmap: {
          colorScale: {
            ranges: [
              {}
            ],
          },
        }
      },
    };
  }

  private createSeriesData(records: Array<PlayCount>): Array<any> {
    const now = new Date().getTime();
    const result = [];
    const tmp = {};

    for (const record of records) {
      const date = new Date(record.t);
      const day = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(date);

      if (!tmp[day]) {
        tmp[day] = [];
      }

      tmp[day].push({
        x: 'w' + Math.floor((now - record.t) / (24 * 60 * 60 * 7 * 1000)),
        y: record.c
      });
    }
    console.log(tmp);

    for (const d in tmp) {
      result.push({
        name: d,
        data: tmp[d]
      });
    }

    console.log(result);
    return result;
  }

  private setData() {
    this.recordCountService.loadRecord();
    const records: Array<PlayCount> = this.recordCountService.getHalfYearRecord();
    console.log(records);
    return this.createSeriesData(records);
  }
}
