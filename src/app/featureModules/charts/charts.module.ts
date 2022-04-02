import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LineChartComponent} from './line-chart/line-chart.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {ChartComponent} from './chart.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import {PlotlyModule} from 'angular-plotly.js';
import { PieChartComponent } from './pie-chart/pie-chart.component';
PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    BarChartComponent,
    LineChartComponent,
    ChartComponent,
    PieChartComponent
  ],
    imports: [
        CommonModule,
      PlotlyModule
    ],
})
export class FeatureChartsModule { }
