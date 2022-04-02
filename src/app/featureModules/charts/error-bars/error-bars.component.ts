import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-bars',
  templateUrl: './error-bars.component.html',
  styleUrls: ['./error-bars.component.scss']
})
export class ErrorBarsComponent implements OnInit {
   trace1 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    y: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    fill: "tozerox",
    fillcolor: "rgba(0,100,80,0.2)",
    line: {color: "transparent"},
    name: "Fair",
    showlegend: false,
    type: "scatter"
  };
   trace2 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    y: [5.5, 3, 5.5, 8, 6, 3, 8, 5, 6, 5.5, 4.75, 5, 4, 7, 2, 4, 7, 4.4, 2, 4.5],
    fill: "tozerox",
    fillcolor: "rgba(0,176,246,0.2)",
    line: {color: "transparent"},
    name: "Premium",
    showlegend: false,
    type: "scatter"
  };
   trace3 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    y: [11, 9, 7, 5, 3, 1, 3, 5, 3, 1, -1, 1, 3, 1, -0.5, 1, 3, 5, 7, 9],
    fill: "tozerox",
    fillcolor: "rgba(231,107,243,0.2)",
    line: {color: "transparent"},
    name: "Fair",
    showlegend: false,
    type: "scatter"
  };
   trace4 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    line: {color: "rgb(0,100,80)"},
    mode: "lines",
    name: "Fair",
    type: "scatter"
  };
   trace5 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [5, 2.5, 5, 7.5, 5, 2.5, 7.5, 4.5, 5.5, 5],
    line: {color: "rgb(0,176,246)"},
    mode: "lines",
    name: "Premium",
    type: "scatter"
  };
   trace6 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [10, 8, 6, 4, 2, 0, 2, 4, 2, 0],
    line: {color: "rgb(231,107,243)"},
    mode: "lines",
    name: "Ideal",
    type: "scatter"
  };
   data = [this.trace1, this.trace2, this.trace3, this.trace4, this.trace5, this.trace6];
   layout = {
    paper_bgcolor: "rgb(255,255,255)",
    plot_bgcolor: "rgb(229,229,229)",
    xaxis: {
      gridcolor: "rgb(255,255,255)",
      range: [1, 10],
      showgrid: true,
      showline: false,
      showticklabels: true,
      tickcolor: "rgb(127,127,127)",
      ticks: "outside",
      zeroline: false
    },
    yaxis: {
      gridcolor: "rgb(255,255,255)",
      showgrid: true,
      showline: false,
      showticklabels: true,
      tickcolor: "rgb(127,127,127)",
      ticks: "outside",
      zeroline: false
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
