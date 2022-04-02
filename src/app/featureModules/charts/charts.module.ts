import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LineChartComponent} from './line-chart/line-chart.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {ChartComponent} from './chart.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import {PlotlyModule} from 'angular-plotly.js';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SankyChartComponent } from './sanky-chart/sanky-chart.component';
import { ParallelGraphComponent } from './parallel-graph/parallel-graph.component';
import { ErrorBarsComponent } from './error-bars/error-bars.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { HeatChartComponent } from './heat-chart/heat-chart.component';
import { BarChartPlotlyComponent } from './bar-chart-plotly/bar-chart-plotly.component';
import { WaterfallChartComponent } from './waterfall-chart/waterfall-chart.component';
PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    BarChartComponent,
    LineChartComponent,
    ChartComponent,
    PieChartComponent,
    SankyChartComponent,
    ParallelGraphComponent,
    ErrorBarsComponent,
    PolarChartComponent,
    RadarChartComponent,
    HeatChartComponent,
    BarChartPlotlyComponent,
    WaterfallChartComponent
  ],
    imports: [
        CommonModule,
      PlotlyModule
    ],
})
export class FeatureChartsModule { }
