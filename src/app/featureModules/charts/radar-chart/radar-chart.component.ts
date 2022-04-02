import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  data = [
    {
      type: 'scatterpolar',
      r: [39, 28, 8, 7, 28, 39],
      theta: ['A', 'B', 'C', 'D', 'E', 'A'],
      fill: 'toself',
      name: 'Group A'
    },
    {
      type: 'scatterpolar',
      r: [1.5, 10, 39, 31, 15, 1.5],
      theta: ['A', 'B', 'C', 'D', 'E', 'A'],
      fill: 'toself',
      name: 'Group B'
    }
  ];

  layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 50]
      }
    },
    width: 700,
    height: 700
  };
  constructor() { }

  ngOnInit(): void {
  }

}
