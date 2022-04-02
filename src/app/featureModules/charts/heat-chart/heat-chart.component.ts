import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heat-chart',
  templateUrl: './heat-chart.component.html',
  styleUrls: ['./heat-chart.component.scss']
})
export class HeatChartComponent implements OnInit {

  data = [
    {
      z: [[1, null, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
      x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      y: ['Morning', 'Afternoon', 'Evening'],
      type: 'heatmap',
      hoverongaps: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
