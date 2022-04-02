import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanky-chart',
  templateUrl: './sanky-chart.component.html',
  styleUrls: ['./sanky-chart.component.scss']
})
export class SankyChartComponent implements OnInit {


  data = {
    type: 'sankey',
    orientation: 'h',
    node: {
      pad: 15,
      thickness: 30,
      line: {
        color: 'rgb(231,15,15)',
        width: 0.5
      },
      label: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
      color: ['rgb(17,17,220)', 'rgb(7,7,234)', 'rgb(12,12,225)', 'rgb(13,13,229)', 'rgb(15,15,16)', 'rgb(15,15,16)']
    },

    link: {
      source: [0, 1, 0, 2, 3, 3],
      target: [2, 3, 3, 4, 4, 5],
      value:  [8, 4, 2, 8, 4, 2]
    }
  };
  layout = {
    title: 'Basic Sankey',
    font: {
      size: 10
    }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
