import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waterfall-chart',
  templateUrl: './waterfall-chart.component.html',
  styleUrls: ['./waterfall-chart.component.scss']
})
export class WaterfallChartComponent implements OnInit {

   data = [
    {
      name: "2022",
      type: "waterfall",
      orientation: "h",
      measure: [
        "relative",
        "relative",
        "relative",
        "relative",
        "total",
        "relative",
        "relative",
        "relative",
        "relative",
        "total",
        "relative",
        "relative",
        "total",
        "relative",
        "total"
      ],
      y: [
        "Sales",
        "Consulting",
        "Maintenance",
        "Other revenue",
        "Net revenue",
        "Purchases",
        "Material expenses",
        "Personnel expenses",
        "Other expenses",
        "Operating profit",
        "Investment income",
        "Financial income",
        "Profit before tax",
        "Income tax (15%)",
        "Profit after tax"
      ],
      x: [
        375,
        128,
        78,
        27,
        null,
        -327,
        -12,
        -78,
        -12,
        null,
        32,
        89,
        null,
        -45,
        null
      ],
      connector: {
        mode: "between",
        line: {
          width: 4,
          color: "rgb(0, 0, 0)",
          dash: 0
        }
      }
    }
  ];
   layout = {title: {
      text: 'Profit and loss statement 2018<br>waterfall chart displaying positive and negative'
    },
    yaxis: {
      type: "category",
      autorange: "reversed"
    },
    xaxis: {
      type: "linear"
    },
    margin: { l: 150 },
    showlegend: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
