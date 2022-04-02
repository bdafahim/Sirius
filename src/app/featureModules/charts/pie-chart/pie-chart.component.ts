import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  graph1 = {
    data: [
      { value: [19, 26, 40, 10, 5], labels: ['BD', 'India', 'Pakistan'], type: 'pie' },
    ],
    layout: {height: 400,
      width: 500}
  };

  graph2 = {
     data : [{
      type: "sunburst",
      labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
      parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
      values:  [10, 14, 12, 10, 2, 6, 6, 4, 4],
      outsidetextfont: {size: 20, color: '#377eb8'},
      leaf: {opacity: 0.4},
      marker: {line: {width: 2}},
    }],
    layout : {
      margin: {l: 0, r: 0, b: 0, t: 0},
      width: 500,
      height: 500
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

}
