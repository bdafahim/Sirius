import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }

  barChart() {
    this.router.navigateByUrl('chart/bar');
  }
  lineChart() {
    this.router.navigateByUrl('chart/line');
  }

  pieChart() {
    this.router.navigateByUrl('chart/pie');
  }

  sankyChart() {
    this.router.navigateByUrl('chart/sanky');
  }

  parallel() {
    this.router.navigateByUrl('chart/para');
  }

  errorChart() {
    this.router.navigateByUrl('chart/error');
  }

  polarChart() {
    this.router.navigateByUrl('chart/polar');
  }
}
