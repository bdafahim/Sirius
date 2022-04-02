import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanky-chart',
  templateUrl: './sanky-chart.component.html',
  styleUrls: ['./sanky-chart.component.scss']
})
export class SankyChartComponent implements OnInit {


   data = [
    {
      "type": "sunburst",
      "labels": ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
      "parents": ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
      "values":  [65, 14, 12, 10, 2, 6, 6, 4, 4],
      "leaf": {"opacity": 0.4},
      "marker": {"line": {"width": 2}},
      "branchvalues": 'total'
    }];

   layout = {
    "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
     width: 800,
     height: 800
  };


  constructor() { }

  ngOnInit(): void {
  }

}
